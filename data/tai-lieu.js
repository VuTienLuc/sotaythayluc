// Tài liệu PDF tải về. File nằm trong thư mục tai-lieu/ của dự án (Vercel phục vụ trực tiếp).
// khoi: mã khối lớp (g trong data/khoi-lop); mach: tên mạch kiến thức sẽ hiện thanh tải tài liệu ở đầu mỗi bài.
// Thêm tài liệu: chép file PDF vào tai-lieu/... rồi thêm một dòng {t, mo_ta, file}.
window.TAI_LIEU = [
  {ten:"Tài liệu ôn thi giữa kì 1 – Toán 4", khoi:4, mach:"Ôn thi giữa kì 1", items:[
    {t:"Phiếu ôn tập – Bộ 1", mo_ta:"PDF · 12 trang · 28 bài + đề mẫu, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/phieu-on-tap-bo-1.pdf"},
    {t:"Phiếu ôn tập – Bộ 2 (nâng cao)", mo_ta:"PDF · 17 trang · 46 bài + đề mẫu 8 câu, có đáp án", file:"tai-lieu/lop-4-giua-ki-1/phieu-on-tap-bo-2.pdf"},
    {t:"Phiếu làm bài – Đề 1", mo_ta:"PDF · 2 trang · làm bài, chụp ảnh để AI chấm", file:"tai-lieu/lop-4-giua-ki-1/phieu-lam-bai-de-1.pdf"},
    {t:"Phiếu làm bài – Đề 2", mo_ta:"PDF · 2 trang · làm bài, chụp ảnh để AI chấm", file:"tai-lieu/lop-4-giua-ki-1/phieu-lam-bai-de-2.pdf"},
    {t:"Hướng dẫn chấm bài bằng AI", mo_ta:"Dành cho giáo viên · đáp án, thang điểm, câu lệnh", file:"tai-lieu/lop-4-giua-ki-1/huong-dan-cham-bai-bang-AI.md", gv:true}
  ]}
];
