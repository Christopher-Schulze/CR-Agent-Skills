import sys
from pypdf import PdfReader


if len(sys.argv) != 2:
    print("Usage: check_fillable_fields.py [input pdf]")
    sys.exit(1)

reader = PdfReader(sys.argv[1])
fields = reader.get_fields()
root = reader.trailer.get("/Root", {})
acro_form = root.get("/AcroForm", {}) if root else {}
has_xfa = bool(acro_form and acro_form.get("/XFA"))

if fields:
    print(f"FILLABLE_FIELDS: yes ({len(fields)} fields)")
else:
    print("FILLABLE_FIELDS: no")
    print("Use the non-fillable annotation workflow only if the user needs to fill visible form blanks.")

if has_xfa:
    print("XFA_FORM: yes")
    print("XFA forms may not expose normal AcroForm fields; render and visually verify any result.")
