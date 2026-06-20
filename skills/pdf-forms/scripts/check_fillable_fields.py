import sys
from pypdf import PdfReader




if len(sys.argv) != 2:
    print("Usage: check_fillable_fields.py [input pdf]")
    sys.exit(1)

reader = PdfReader(sys.argv[1])
fields = reader.get_fields()
if fields:
    print(f"FILLABLE_FIELDS: yes ({len(fields)} fields)")
else:
    print("FILLABLE_FIELDS: no")
    print("Use the non-fillable annotation workflow only if the user needs to fill visible form blanks.")
