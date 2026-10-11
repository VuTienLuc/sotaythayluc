// Kho dữ liệu sổ tay. Mỗi file trong data/khoi-lop/ gọi SOTAY.themKhoi({...}).
// Thứ tự khối lớp trong sổ tay = thứ tự thẻ <script> trong index.html.
window.SOTAY = { DATA: [], themKhoi(k){ this.DATA.push(k); } };
