---
name: pdf-forms
description: "Use only for narrow PDF form edge cases where the user needs to detect, map, validate, debug, or fill PDF form fields, including fillable AcroForm fields and non-fillable form blanks that require precise text or checkbox placement. Do not use for normal PDF reading, creation, rendering, extraction, OCR, merging, splitting, layout review, or general PDF editing; route those tasks to the primary PDF capability instead."
---

# PDF Forms

Use this skill only when the task is specifically about PDF forms and field placement. If the user asks for ordinary PDF work, use the primary PDF capability instead.

This is an edgecase supplement, not a replacement for normal PDF tooling.

## Use This Skill For

- Detecting whether a PDF has fillable form fields.
- Extracting field IDs, field types, checkbox values, radio options, and field rectangles.
- Filling fillable PDF forms from structured field values.
- Filling non-fillable forms by placing text or checkbox marks at precise coordinates.
- Validating form bounding boxes before writing values.
- Debugging form-coordinate alignment after rendering pages to images.

## Do Not Use This Skill For

- Reading or summarizing ordinary PDFs.
- Creating polished PDFs from scratch.
- Extracting ordinary text, tables, or images.
- Merging, splitting, rotating, watermarking, encrypting, or decrypting PDFs.
- General OCR or scanned-document extraction.
- Visual layout review of normal PDFs.

For those tasks, use the primary PDF capability, such as `pdf:pdf` in Codex.

## Workflow

1. Read `forms.md` before acting.
2. Start by checking whether the PDF has fillable fields:
   ```bash
   python3 scripts/check_fillable_fields.py <file.pdf>
   ```
3. If the file has fillable fields, follow the fillable-field workflow in `forms.md`.
4. If the file does not have fillable fields, follow the non-fillable annotation workflow in `forms.md`.
5. Render and visually inspect the filled output before delivery. If text placement, checkbox marks, or field appearances are off, fix coordinates or values and rerender before final delivery.

## Trigger Discipline

- Use only when the requested outcome depends on form fields, field names, checkbox/radio states, or precise form-coordinate placement.
- Do not trigger just because a file is a PDF.
- Do not trigger for scanned-PDF OCR unless the user specifically wants to fill or map a form after OCR/visual inspection.
- If both normal PDF work and form filling are required, use the primary PDF capability for normal PDF steps and this skill only for the form-specific part.

## Files

- `forms.md` - Required form-filling workflow.
- `scripts/check_fillable_fields.py` - Detects fillable fields.
- `scripts/extract_form_field_info.py` - Extracts field metadata for fillable forms.
- `scripts/fill_fillable_fields.py` - Fills fillable fields from JSON values.
- `scripts/extract_form_structure.py` - Extracts labels, lines, and checkbox geometry for non-fillable forms.
- `scripts/check_bounding_boxes.py` - Validates field bounding boxes.
- `scripts/fill_pdf_form_with_annotations.py` - Writes positioned text and checkbox marks into non-fillable forms.
- `scripts/convert_pdf_to_images.py` and `scripts/create_validation_image.py` - Render/validation helpers.
