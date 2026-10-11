// Tài liệu PDF tải về. File nằm trong thư mục tai-lieu/ của dự án (Vercel phục vụ trực tiếp).
// khoi: mã khối lớp (g trong data/khoi-lop); mach: tên mạch kiến thức sẽ hiện thanh tải tài liệu ở đầu mỗi bài.
// Thêm tài liệu: chép file PDF vào tai-lieu/... rồi thêm một dòng {t, mo_ta, file}.
// bai: tên bài (đúng như trong data/khoi-lop) → phiếu hiện ở đầu bài đó; nhan: chữ trên nút (mặc định "Phiếu luyện bài này").
// gv:true → tài liệu dành cho giáo viên, chỉ hiện trong menu Tài liệu.
window.TAI_LIEU = [
  {ten:"Tài liệu ôn thi giữa kì 1 – Toán 4", khoi:4, mach:"Ôn thi giữa kì 1", items:[
    {t:"Phiếu ôn tập – Bộ 1", mo_ta:"PDF · 12 trang · 28 bài + đề mẫu, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/phieu-on-tap-bo-1.pdf"},
    {t:"Phiếu ôn tập – Bộ 2 (nâng cao)", mo_ta:"PDF · 17 trang · 46 bài + đề mẫu 8 câu, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/phieu-on-tap-bo-2.pdf"},
    {t:"Phiếu làm bài – Đề 1", mo_ta:"PDF · 2 trang · làm bài, chụp ảnh để AI chấm", file:"tai-lieu/lop-4-giua-ki-1/phieu-lam-bai-de-1.pdf"},
    {t:"Phiếu làm bài – Đề 2", mo_ta:"PDF · 2 trang · làm bài, chụp ảnh để AI chấm", file:"tai-lieu/lop-4-giua-ki-1/phieu-lam-bai-de-2.pdf"},
    {t:"Phiếu làm bài Đề 1 – bản tiết kiệm", mo_ta:"PDF · 1 trang/học sinh · đen trắng, ít mực · AI chấm được", file:"tai-lieu/lop-4-giua-ki-1/phieu-lam-bai-de-1-tiet-kiem.pdf"},
    {t:"Phiếu làm bài Đề 2 – bản tiết kiệm", mo_ta:"PDF · 1 trang/học sinh · đen trắng, ít mực · AI chấm được", file:"tai-lieu/lop-4-giua-ki-1/phieu-lam-bai-de-2-tiet-kiem.pdf"},
    {t:"Hướng dẫn chấm bài bằng AI", mo_ta:"Dành cho giáo viên · đáp án, thang điểm, câu lệnh", file:"tai-lieu/lop-4-giua-ki-1/huong-dan-cham-bai-bang-AI.md", gv:true}
  ]},
  {ten:"Phiếu luyện theo bài – Ôn thi giữa kì 1 Toán 4", khoi:4, mach:"Ôn thi giữa kì 1", items:[
    {t:"Phiếu luyện 1: Đọc, viết số đến lớp triệu. Hàng, lớp và giá trị chữ số", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/01-doc-viet-so-den-lop-trieu-hang-lop-va-gia-tri-ch.pdf", bai:"Đọc, viết số đến lớp triệu. Hàng, lớp và giá trị chữ số"},
    {t:"Phiếu luyện 2: Số chẵn, số lẻ. Dãy số tự nhiên", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/02-so-chan-so-le-day-so-tu-nhien.pdf", bai:"Số chẵn, số lẻ. Dãy số tự nhiên"},
    {t:"Phiếu luyện 3: So sánh, sắp xếp các số. Làm tròn số", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/03-so-sanh-sap-xep-cac-so-lam-tron-so.pdf", bai:"So sánh, sắp xếp các số. Làm tròn số"},
    {t:"Phiếu luyện 4: Đặt tính và tính: cộng, trừ, nhân, chia", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/04-dat-tinh-va-tinh-cong-tru-nhan-chia.pdf", bai:"Đặt tính và tính: cộng, trừ, nhân, chia"},
    {t:"Phiếu luyện 5: Tìm thành phần chưa biết. Biểu thức có chứa chữ", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/05-tim-thanh-phan-chua-biet-bieu-thuc-co-chua-chu.pdf", bai:"Tìm thành phần chưa biết. Biểu thức có chứa chữ"},
    {t:"Phiếu luyện 6: Giải toán có lời văn hai, ba bước", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/06-giai-toan-co-loi-van-hai-ba-buoc.pdf", bai:"Giải toán có lời văn hai, ba bước"},
    {t:"Phiếu luyện 7: Tìm số trung bình cộng", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/07-tim-so-trung-binh-cong.pdf", bai:"Tìm số trung bình cộng"},
    {t:"Phiếu luyện 8: Bài toán rút về đơn vị", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/08-bai-toan-rut-ve-don-vi.pdf", bai:"Bài toán rút về đơn vị"},
    {t:"Phiếu luyện 9: Góc nhọn, góc vuông, góc tù, góc bẹt. Đo góc", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/09-goc-nhon-goc-vuong-goc-tu-goc-bet-do-goc.pdf", bai:"Góc nhọn, góc vuông, góc tù, góc bẹt. Đo góc"},
    {t:"Phiếu luyện 10: Chu vi, diện tích hình chữ nhật, hình vuông", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/10-chu-vi-dien-tich-hinh-chu-nhat-hinh-vuong.pdf", bai:"Chu vi, diện tích hình chữ nhật, hình vuông"},
    {t:"Phiếu luyện 11: Đơn vị đo độ dài, diện tích, khối lượng, dung tích", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/11-don-vi-do-do-dai-dien-tich-khoi-luong-dung-tich.pdf", bai:"Đơn vị đo độ dài, diện tích, khối lượng, dung tích"},
    {t:"Phiếu luyện 12: Đơn vị đo thời gian. Tiền Việt Nam", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/12-don-vi-do-thoi-gian-tien-viet-nam.pdf", bai:"Đơn vị đo thời gian. Tiền Việt Nam"},
    {t:"Phiếu luyện 13: Thực hành, trải nghiệm: mua bán và ước lượng", mo_ta:"PDF · 3 trang · 8 bài 3 mức, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/theo-bai/13-thuc-hanh-trai-nghiem-mua-ban-va-uoc-luong.pdf", bai:"Thực hành, trải nghiệm: mua bán và ước lượng"}
  ]},
  {ten:"Hệ thức lượng trong tam giác – Toán 10", khoi:10, mach:"Hình học & Đo lường", items:[
    {t:"Ôn tập Hệ thức lượng – Các dạng toán", mo_ta:"PDF · 6 trang · 8 dạng, 22 bài 3 mức, có đáp án", file:"tai-lieu/lop-10-he-thuc-luong/phieu-on-tap-cac-dang.pdf", bai:"Hệ thức lượng trong tam giác", nhan:"Ôn tập các dạng"},
    {t:"Phiếu kiểm tra 45 phút (mã HTL10-KT)", mo_ta:"PDF · 4 trang · TN, Đúng/Sai, Trả lời ngắn, Tự luận · chụp ảnh để AI chấm", file:"tai-lieu/lop-10-he-thuc-luong/phieu-kiem-tra.pdf", bai:"Hệ thức lượng trong tam giác", nhan:"Phiếu kiểm tra"},
    {t:"Đề kiểm tra dùng chung (HTL10-KT)", mo_ta:"PDF · 1 trang · in 1 bộ, thu lại dùng nhiều lớp", file:"tai-lieu/lop-10-he-thuc-luong/de-kiem-tra-dung-chung.pdf", bai:"Hệ thức lượng trong tam giác", nhan:"Đề dùng chung"},
    {t:"Phiếu trả lời 1 trang (HTL10-KT)", mo_ta:"PDF · 1 trang/học sinh · đen trắng · AI chấm được", file:"tai-lieu/lop-10-he-thuc-luong/phieu-tra-loi-tiet-kiem.pdf", bai:"Hệ thức lượng trong tam giác", nhan:"Phiếu trả lời 1 trang"},
    {t:"Hướng dẫn chấm bằng AI – HTL10-KT", mo_ta:"Dành cho giáo viên · đáp án, thang điểm từng bước, câu lệnh", file:"tai-lieu/lop-10-he-thuc-luong/huong-dan-cham-bai-bang-AI.md", gv:true}
  ]}
];
