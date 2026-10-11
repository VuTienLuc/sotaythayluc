# Sổ Tay Toán Học 4–12

Sổ tay tra cứu Toán từ Lớp 4 đến Lớp 12 theo Chương trình GDPT 2018, dùng khi dạy và soạn bài trên điện thoại và máy tính.
Thầy Vũ Tiến Lực · THPT Nguyễn Hữu Cảnh.

- 10 khối lớp, 203 bài, 795 mục (định nghĩa, công thức, tính chất, dấu hiệu, dạng toán, lưu ý, ví dụ có lời giải)
- Tra cứu không dấu, lọc theo loại mục, ẩn/hiện lời giải, sao chép LaTeX hoặc cả bài dạng Markdown
- Trình chiếu kiểu bảng xanh: chữ to, mỗi ý một dòng, ví dụ hiện đề trước rồi mới hiện lời giải
- Yêu thích, lịch sử, thời khoá biểu tuần, mục Trang web của thầy; dữ liệu cá nhân lưu trong trình duyệt, có xuất/nhập JSON

## Mở sổ tay

- **Dùng ngay:** mở `index.html` bằng trình duyệt (Chrome, Edge, Safari). Không cần cài gì.
- **Một file để gửi hoặc đăng web:** chạy `python3 tools/gop-mot-file.py`, lấy file `dist/so-tay-toan-hoc.html`.

## Cấu trúc thư mục

```
index.html                 Khung trang: thanh điều hướng, mục lục, trang đọc, trình chiếu, cài đặt
css/                       Giao diện, chia theo khu vực
  00-bien-mau-va-nen.css     biến màu (sáng/tối), phông chữ, nền chung
  01-khung-ung-dung.css      khung các màn hình
  02-muc-luc.css             cột mục lục, ô tra cứu, kết quả tìm kiếm
  03-trang-doc.css           trang vở ô li đọc bài, xuống dòng theo ý
  04-tkb-cai-dat.css         thời khoá biểu tuần, cài đặt
  05-trang-web.css           mục Trang web của thầy
  06-thanh-duoi.css          thanh điều hướng dưới (điện thoại)
  07-may-tinh.css            bố cục 3 cột trên máy tính
  08-trinh-chieu.css         chế độ trình chiếu bảng xanh
  09-modal-toast.css         hộp thoại, thông báo nhỏ, bản in
  10-tai-lieu.css            menu Tài liệu PDF
data/                      Nội dung (sửa ở đây là chủ yếu)
  _khoi-tao.js               tạo kho SOTAY.DATA
  khoi-lop/01-lop-4.js ...   mỗi khối lớp một file
  trang-web.js               danh sách trang web theo nhóm
  tai-lieu.js                tài liệu PDF (menu Tài liệu: Lớp → bài; và thanh tải ở đầu bài)
js/                        Chức năng, nạp theo thứ tự số
  01-bieu-tuong.js … 19-khoi-dong.js (15-tai-lieu.js: menu Tài liệu)
tools/gop-mot-file.py      Gộp toàn bộ thành một file HTML trong dist/
dist/so-tay-toan-hoc.html  Bản một file đã gộp sẵn
tai-lieu/                  Phiếu ôn tập, phiếu làm bài PDF và hướng dẫn chấm bằng AI
```

## Thêm nội dung

Mở file khối lớp trong `data/khoi-lop/`. Cấu trúc: `Khối → s: mạch kiến thức → t: bài → i: các mục`.

```js
{n:"Tên bài",i:[
 "CT|Công thức: $S=a\\times b$",
 "VD|Ví dụ: Đề bài ... Lời giải: Bước 1 ... Đáp số: ...",
]},
```

- Mã đầu mục: `DN` định nghĩa, `CT` công thức, `TC` tính chất, `DH` dấu hiệu, `DT` dạng toán, `LY` lưu ý, `VD` ví dụ.
- Công thức viết LaTeX trong `$...$`; trong file `.js` mỗi dấu `\` phải gõ thành `\\`.
- Ví dụ có chữ `Lời giải:` thì khi trình chiếu sẽ hiện đề trước, bấm thêm một lần mới hiện lời giải.
- Muốn xuống dòng theo ý: ngăn các ý bằng dấu `;`, đánh số bước `(1) (2) (3)`, câu dẫn kết thúc bằng `:`.
- Thêm khối lớp mới: tạo file trong `data/khoi-lop/` rồi thêm một dòng `<script src="data/khoi-lop/...js"></script>` vào `index.html` (đúng vị trí muốn hiện).

> Giữ nguyên thứ tự các khối, các mạch và các bài đã có. Yêu thích và lịch sử lưu theo vị trí bài, nên muốn thêm bài mới thì thêm vào **cuối** mạch hoặc thêm mạch mới ở cuối khối.

## Thêm trang web

Mở `data/trang-web.js`, thêm `{t:"Tên trang", u:"https://..."}` vào nhóm phù hợp, hoặc thêm một nhóm mới.

## Đưa lên mạng

Thư mục này là trang web tĩnh: đưa nguyên thư mục lên GitHub Pages, Vercel hoặc Netlify là chạy, không cần build.
