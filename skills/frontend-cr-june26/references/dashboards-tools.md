# Dashboards And Tools Reference

Use this reference for dashboards, admin tools, CRMs, internal tools, operations systems, analytics products, planning tools, and data-heavy product surfaces.

## Direction

- Identify the primary workflow before visual design: scan, compare, triage, approve, create, edit, monitor, diagnose, or report.
- Design density intentionally. Operational tools usually need restrained style, tight hierarchy, fast scanning, and low ornament.
- Make the main data shape drive layout: queue, table, board, timeline, map, graph, matrix, inspector, log, or command center.
- Choose one product-specific visual idea: status rail, timeline spine, dense comparison table, map/data overlay, focused inspector, live operations wall, or workflow canvas.
- Style intensity usually sits at 4-7/10. Push higher only when it improves comprehension or product identity.

## Data Realism Pack

- Define realistic entities, identifiers, statuses, owners, dates, priorities, amounts, risk labels, and row counts.
- Use plausible column names and chart axes from the domain.
- Include edge content: long names, missing values, warnings, empty states, loading, errors, and disabled actions.
- Avoid fake KPI tiles that do not affect the workflow.
- Use believable sample data, not "Project Alpha", "User Name", or random percentages.

## State Matrix

- Always account for default, selected, hover/focus, empty, loading, error, success, disabled, modal/drawer, and mobile-collapsed states where relevant.
- For tables, include selected row, sorted column, filter state, pagination or virtualization strategy, and overflow behavior.
- For charts, include empty/no-data, loading, selected data point, legend behavior, and axis readability.
- For forms, include validation, dirty state, save success, save failure, and recovery copy.

## Component Architecture

- Separate app shell, navigation, toolbar, filters, data modules, detail/inspector panel, modals, and state helpers.
- Shared primitives are mandatory: button, input, select, tabs, badge/status, table row, panel, chart frame, empty state.
- Variants must encode meaning: status, priority, density, selected, disabled, destructive, warning, success.
- Do not turn tables into cards unless the accepted concept or mobile breakpoint requires it.
- Avoid one-off Tailwind chains for repeated row/control anatomy.

## Verification Gates

- Check scan path in 5 seconds: where should the user's eye go first, second, third?
- Verify real interaction state changes, not inert controls.
- Verify dense regions on mobile: collapse, horizontal scroll, stacked summary rows, drawer, or separate detail route.
- Audit control typography. Toolbars, tabs, filters, sidebars, table cells, and inspector labels cannot inherit browser-default sizing.
- Run final review for fake sophistication: decorative charts, meaningless badges, over-framed panels, and status colors with no semantics.
