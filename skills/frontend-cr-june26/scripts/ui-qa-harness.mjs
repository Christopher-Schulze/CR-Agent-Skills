#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DEFAULTS = {
  out: ".frontend-cr-ui-qa",
  wait: 750,
  desktop: "1440x1000",
  mobile: "390x844",
  textWarning: 900,
  textFail: 1400,
  longestTextWarning: 260,
  longestTextFail: 420,
  controlsWarning: 48,
  failOnIssues: false,
};

function usage(exitCode = 0) {
  const text = [
    "Usage: node scripts/ui-qa-harness.mjs --url <url> [--out <dir>] [--wait <ms>] [--desktop <WxH>] [--mobile <WxH>] [--fail-on-issues]",
    "",
    "Captures desktop/mobile screenshots and writes report.json plus summary.md.",
    "Adds heuristic QA signals for overflow, broken images, unlabeled controls, console/page errors, and above-fold text density.",
  ].join("\n");
  const stream = exitCode === 0 ? process.stdout : process.stderr;
  stream.write(`${text}\n`);
  process.exit(exitCode);
}

function parseArgs(argv) {
  const options = { ...DEFAULTS, url: "" };
  const booleanOptions = new Set(["failOnIssues"]);
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") usage(0);
    if (!arg.startsWith("--")) {
      throw new Error(`Unexpected argument: ${arg}`);
    }
    const key = normalizeKey(arg.slice(2));
    if (booleanOptions.has(key)) {
      options[key] = true;
      continue;
    }
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for ${arg}`);
    }
    if (!Object.prototype.hasOwnProperty.call(options, key)) {
      throw new Error(`Unknown option: ${arg}`);
    }
    options[key] = next;
    index += 1;
  }
  if (!options.url) {
    throw new Error("Missing required --url <url>");
  }
  options.wait = Number.parseInt(String(options.wait), 10);
  if (!Number.isFinite(options.wait) || options.wait < 0) {
    throw new Error("--wait must be a non-negative integer");
  }
  options.textWarning = parseNonNegativeInteger(options.textWarning, "--text-warning");
  options.textFail = parseNonNegativeInteger(options.textFail, "--text-fail");
  options.longestTextWarning = parseNonNegativeInteger(options.longestTextWarning, "--longest-text-warning");
  options.longestTextFail = parseNonNegativeInteger(options.longestTextFail, "--longest-text-fail");
  options.controlsWarning = parseNonNegativeInteger(options.controlsWarning, "--controls-warning");
  if (options.textFail < options.textWarning) {
    throw new Error("--text-fail must be greater than or equal to --text-warning");
  }
  if (options.longestTextFail < options.longestTextWarning) {
    throw new Error("--longest-text-fail must be greater than or equal to --longest-text-warning");
  }
  options.desktopViewport = parseViewport(options.desktop, "--desktop");
  options.mobileViewport = parseViewport(options.mobile, "--mobile");
  return options;
}

function normalizeKey(key) {
  return key.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

function parseNonNegativeInteger(value, flag) {
  const number = Number.parseInt(String(value), 10);
  if (!Number.isFinite(number) || number < 0) {
    throw new Error(`${flag} must be a non-negative integer`);
  }
  return number;
}

function parseViewport(value, flag) {
  const match = /^(\d+)x(\d+)$/i.exec(String(value));
  if (!match) {
    throw new Error(`${flag} must use WxH format, for example 1440x1000`);
  }
  const width = Number.parseInt(match[1], 10);
  const height = Number.parseInt(match[2], 10);
  if (width < 240 || height < 240) {
    throw new Error(`${flag} dimensions must be at least 240x240`);
  }
  return { width, height };
}

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch (error) {
    process.stderr.write(
      [
        "Playwright is not available in this project/runtime.",
        "Install or expose Playwright, then rerun:",
        "  bun add -d playwright",
        "  # or use the repo's existing Playwright/browser tooling",
        `Import error: ${error.message}`,
      ].join("\n") + "\n",
    );
    process.exit(2);
  }
}

async function collectViewport(page, label, viewport, outDir, waitMs) {
  await page.setViewportSize(viewport);
  await page.waitForTimeout(waitMs);
  const screenshotPath = path.join(outDir, `${label}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  const metrics = await page.evaluate(() => {
    function isVisible(element) {
      const style = window.getComputedStyle(element);
      if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) {
        return false;
      }
      const rect = element.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }

    function accessibleName(element) {
      const aria = element.getAttribute("aria-label");
      if (aria && aria.trim()) return aria.trim();
      const labelledBy = element.getAttribute("aria-labelledby");
      if (labelledBy) {
        const label = labelledBy
          .split(/\s+/)
          .map((id) => document.getElementById(id)?.textContent?.trim() || "")
          .filter(Boolean)
          .join(" ");
        if (label) return label;
      }
      const title = element.getAttribute("title");
      if (title && title.trim()) return title.trim();
      const text = element.textContent?.replace(/\s+/g, " ").trim();
      if (text) return text;
      const inputId = element.id;
      if (inputId) {
        const label = document.querySelector(`label[for="${CSS.escape(inputId)}"]`)?.textContent?.trim();
        if (label) return label;
      }
      return "";
    }

    function describeElement(element) {
      const rect = element.getBoundingClientRect();
      return {
        tag: element.tagName.toLowerCase(),
        id: element.id || "",
        className: String(element.className || "").slice(0, 180),
        text: element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) || "",
        rect: {
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          right: Math.round(rect.right),
        },
      };
    }

    function directVisibleText(element) {
      const tag = element.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea") {
        return element.getAttribute("placeholder") || element.getAttribute("value") || "";
      }
      return Array.from(element.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent || "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    }

    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const allVisible = Array.from(document.querySelectorAll("body *")).filter(isVisible);
    const overflow = allVisible
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.left < -1 || rect.right > viewportWidth + 1;
      })
      .slice(0, 30)
      .map(describeElement);

    const textBlocks = allVisible
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const text = directVisibleText(element);
        return { text, rect };
      })
      .filter((item) => item.text && item.rect.top < viewportHeight && item.rect.bottom > 0);

    const textChars = textBlocks.reduce((sum, item) => sum + item.text.length, 0);
    const longestText = textBlocks.reduce((longest, item) => {
      return item.text.length > longest.length ? item.text : longest;
    }, "");

    const controls = Array.from(
      document.querySelectorAll("button,a,input,select,textarea,[role='button'],[tabindex]"),
    ).filter(isVisible);
    const unlabeledControls = controls
      .filter((element) => !accessibleName(element))
      .slice(0, 30)
      .map(describeElement);

    const images = Array.from(document.images);
    const brokenImages = images
      .filter((image) => !image.complete || image.naturalWidth === 0 || image.naturalHeight === 0)
      .map((image) => ({
        src: image.currentSrc || image.src || "",
        alt: image.alt || "",
      }));

    return {
      title: document.title,
      url: window.location.href,
      viewport: { width: viewportWidth, height: viewportHeight },
      scroll: {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      },
      aboveFoldText: {
        blockCount: textBlocks.length,
        totalChars: textChars,
        longestBlockChars: longestText.length,
        longestBlockPreview: longestText.slice(0, 220),
      },
      controls: {
        count: controls.length,
        unlabeledCount: unlabeledControls.length,
        unlabeled: unlabeledControls,
      },
      images: {
        count: images.length,
        brokenCount: brokenImages.length,
        broken: brokenImages,
      },
      overflow: {
        count: overflow.length,
        examples: overflow,
      },
    };
  });
  return { label, screenshotPath, ...metrics };
}

function buildSignals(report) {
  const signals = [];
  if (report.consoleErrors.length > 0) {
    signals.push({
      level: "error",
      scope: "runtime",
      message: `${report.consoleErrors.length} console error(s) recorded`,
    });
  }
  if (report.pageErrors.length > 0) {
    signals.push({
      level: "error",
      scope: "runtime",
      message: `${report.pageErrors.length} page error(s) recorded`,
    });
  }
  for (const result of report.viewports) {
    const prefix = result.label;
    if (result.scroll.width > result.viewport.width || result.overflow.count > 0) {
      signals.push({
        level: "error",
        scope: prefix,
        message: "Horizontal overflow or off-viewport visible element detected",
      });
    }
    if (result.images.brokenCount > 0) {
      signals.push({
        level: "error",
        scope: prefix,
        message: `${result.images.brokenCount} broken image(s) detected`,
      });
    }
    if (result.controls.unlabeledCount > 0) {
      signals.push({
        level: "warning",
        scope: prefix,
        message: `${result.controls.unlabeledCount} visible interactive control(s) lack an accessible name`,
      });
    }
    if (result.controls.count > report.thresholds.controlsWarning) {
      signals.push({
        level: "warning",
        scope: prefix,
        message: `${result.controls.count} above-page controls detected; check visual density and workflow grouping`,
      });
    }
    if (result.aboveFoldText.totalChars >= report.thresholds.textFail) {
      signals.push({
        level: "error",
        scope: prefix,
        message: `${result.aboveFoldText.totalChars} above-fold text chars exceed fail threshold ${report.thresholds.textFail}`,
      });
    } else if (result.aboveFoldText.totalChars >= report.thresholds.textWarning) {
      signals.push({
        level: "warning",
        scope: prefix,
        message: `${result.aboveFoldText.totalChars} above-fold text chars exceed warning threshold ${report.thresholds.textWarning}`,
      });
    }
    if (result.aboveFoldText.longestBlockChars >= report.thresholds.longestTextFail) {
      signals.push({
        level: "error",
        scope: prefix,
        message: `Longest above-fold text block is ${result.aboveFoldText.longestBlockChars} chars`,
      });
    } else if (result.aboveFoldText.longestBlockChars >= report.thresholds.longestTextWarning) {
      signals.push({
        level: "warning",
        scope: prefix,
        message: `Longest above-fold text block is ${result.aboveFoldText.longestBlockChars} chars`,
      });
    }
  }
  return signals;
}

function markdownSummary(report) {
  const errorCount = report.signals.filter((signal) => signal.level === "error").length;
  const warningCount = report.signals.filter((signal) => signal.level === "warning").length;
  const lines = [
    "# Frontend CR UI QA",
    "",
    `- URL: ${report.url}`,
    `- Generated: ${report.generatedAt}`,
    `- Console errors: ${report.consoleErrors.length}`,
    `- Page errors: ${report.pageErrors.length}`,
    `- QA signals: ${errorCount} error(s), ${warningCount} warning(s)`,
    "",
  ];
  for (const result of report.viewports) {
    lines.push(`## ${result.label}`);
    lines.push("");
    lines.push(`- Screenshot: ${result.screenshotPath}`);
    lines.push(`- Viewport: ${result.viewport.width}x${result.viewport.height}`);
    lines.push(`- Scroll: ${result.scroll.width}x${result.scroll.height}`);
    lines.push(
      `- Above-fold text: ${result.aboveFoldText.totalChars} chars, ${result.aboveFoldText.blockCount} blocks, longest ${result.aboveFoldText.longestBlockChars} chars`,
    );
    lines.push(`- Controls: ${result.controls.count}, unlabeled: ${result.controls.unlabeledCount}`);
    lines.push(`- Images: ${result.images.count}, broken: ${result.images.brokenCount}`);
    lines.push(`- Horizontal overflow examples: ${result.overflow.count}`);
    if (result.aboveFoldText.longestBlockPreview) {
      lines.push(`- Longest text preview: ${result.aboveFoldText.longestBlockPreview}`);
    }
    lines.push("");
  }
  if (report.signals.length > 0) {
    lines.push("## QA Signals", "");
    for (const signal of report.signals) {
      lines.push(`- ${signal.level.toUpperCase()} [${signal.scope}] ${signal.message}`);
    }
    lines.push("");
  }
  if (report.consoleErrors.length > 0) {
    lines.push("## Console Errors", "");
    for (const item of report.consoleErrors.slice(0, 20)) {
      lines.push(`- [${item.type}] ${item.text}`);
    }
    lines.push("");
  }
  if (report.pageErrors.length > 0) {
    lines.push("## Page Errors", "");
    for (const item of report.pageErrors.slice(0, 20)) {
      lines.push(`- ${item}`);
    }
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

async function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    process.stderr.write(`${error.message}\n\n`);
    usage(1);
  }

  const { chromium } = await loadPlaywright();
  await fs.mkdir(options.out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push({ type: message.type(), text: message.text() });
    }
  });
  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  try {
    await page.goto(options.url, { waitUntil: "networkidle" });
    const desktop = await collectViewport(page, "desktop", options.desktopViewport, options.out, options.wait);
    const mobile = await collectViewport(page, "mobile", options.mobileViewport, options.out, options.wait);
    const report = {
      generatedAt: new Date().toISOString(),
      url: options.url,
      options: {
        wait: options.wait,
        desktop: options.desktop,
        mobile: options.mobile,
        failOnIssues: options.failOnIssues,
      },
      thresholds: {
        textWarning: options.textWarning,
        textFail: options.textFail,
        longestTextWarning: options.longestTextWarning,
        longestTextFail: options.longestTextFail,
        controlsWarning: options.controlsWarning,
      },
      consoleErrors,
      pageErrors,
      viewports: [desktop, mobile],
    };
    report.signals = buildSignals(report);
    const reportPath = path.join(options.out, "report.json");
    const summaryPath = path.join(options.out, "summary.md");
    await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
    await fs.writeFile(summaryPath, markdownSummary(report), "utf8");
    process.stdout.write(`Wrote ${reportPath}\nWrote ${summaryPath}\n`);
    if (options.failOnIssues && report.signals.some((signal) => signal.level === "error")) {
      process.exitCode = 3;
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
