import fitz  # PyMuPDF
import os

certs_dir = r"c:\Users\jegad\projects\PersonalPortfolioFolder\public\certificates"
out_dir = certs_dir  # save images alongside the PDFs

pdfs = [f for f in os.listdir(certs_dir) if f.endswith(".pdf")]

for pdf_file in pdfs:
    pdf_path = os.path.join(certs_dir, pdf_file)
    doc = fitz.open(pdf_path)
    page = doc[0]  # first page only
    # 2× zoom for crisp render
    mat = fitz.Matrix(2.0, 2.0)
    pix = page.get_pixmap(matrix=mat)
    out_name = os.path.splitext(pdf_file)[0] + ".jpg"
    out_path = os.path.join(out_dir, out_name)
    pix.save(out_path)
    print(f"Saved: {out_name}  ({pix.width}×{pix.height})")

print("Done.")
