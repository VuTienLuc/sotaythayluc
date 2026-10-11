# -*- coding: utf-8 -*-
"""Gộp dự án (index.html + css/ + data/ + js/) thành MỘT file HTML độc lập.

Cách dùng (đứng ở thư mục gốc dự án):
    python3 tools/gop-mot-file.py
Kết quả: dist/so-tay-toan-hoc.html  (mở thẳng bằng trình duyệt, gửi Zalo, đăng web đều được)
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html = open(os.path.join(ROOT, "index.html"), encoding="utf8").read()

def read(rel):
    return open(os.path.join(ROOT, rel), encoding="utf8").read().rstrip("\n")

css = re.findall(r'<link rel="stylesheet" href="((?:css)/[^"]+)">\n?', html)
html = re.sub(r'<link rel="stylesheet" href="css/[^"]+">\n?', "", html)
html = html.replace("</head>", "<style>\n" + "\n\n".join(read(f) for f in css) + "\n</style>\n</head>", 1)

def inline(m):
    src = m.group(1)
    return "<script>\n" + read(src).replace("</script", "<\\/script") + "\n</script>"
html = re.sub(r'<script src="((?:data|js)/[^"]+)"></script>', inline, html)

os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
out = os.path.join(ROOT, "dist", "so-tay-toan-hoc.html")
open(out, "w", encoding="utf8").write(html)
print("Đã tạo", os.path.relpath(out, ROOT), "-", round(len(html.encode()) / 1024), "KB,", len(css), "file css")
