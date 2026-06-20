---
name: pdf-forms
description: Use only for PDF form edge cases: detecting, mapping, validating, or filling fillable PDF forms; completing non-fillable PDF forms with positioned text or checkbox annotations; extracting form-field metadata; or debugging PDF form coordinates and bounding boxes. Do not use for normal PDF reading, creation, rendering, merging, splitting, extraction, OCR, or layout review; use the OpenAI Codex PDF plugin (`pdf:pdf`) for those.
license: Proprietary. LICENSE.txt has complete terms
---

# PDF Forms

Use this skill only when the task is specifically about PDF forms.

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

For those tasks, use the OpenAI Codex PDF plugin skill `pdf:pdf`.

## Workflow

1. Read `forms.md` before acting.
2. Start by checking whether the PDF has fillable fields:
   ```bash
   python scripts/check_fillable_fields.py <file.pdf>
   ```
3. If the file has fillable fields, follow the fillable-field workflow in `forms.md`.
4. If the file does not have fillable fields, follow the non-fillable annotation workflow in `forms.md`.
5. Render and visually inspect the filled output before delivery.

## Files

- `forms.md` - Required form-filling workflow.
- `scripts/check_fillable_fields.py` - Detects fillable fields.
- `scripts/extract_form_field_info.py` - Extracts field metadata for fillable forms.
- `scripts/fill_fillable_fields.py` - Fills fillable fields from JSON values.
- `scripts/extract_form_structure.py` - Extracts labels, lines, and checkbox geometry for non-fillable forms.
- `scripts/check_bounding_boxes.py` - Validates field bounding boxes.
- `scripts/fill_pdf_form_with_annotations.py` - Writes positioned text and checkbox marks into non-fillable forms.
- `scripts/convert_pdf_to_images.py` and `scripts/create_validation_image.py` - Render/validation helpers.
