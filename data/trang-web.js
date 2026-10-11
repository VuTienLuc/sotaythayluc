// Danh sách trang web hiện trong mục "Trang web". Thêm trang: thêm {t:"Tên", u:"https://..."} vào nhóm phù hợp.
// icon: school | tool | tex | users | pen (xem js/01-bieu-tuong.js). color: biến màu trong css/00-bien-mau-va-nen.css.
window.LINK_GROUPS = [
  {name:"Web dạy học", icon:"school", color:"var(--tag-dn)", items:[
    {t:"Học mà chơi", u:"https://hoc-ma-choi-six.vercel.app/"},
    {t:"K12 Online", u:"https://k12onlinetl.vercel.app/"},
    {t:"Trò chơi dạy học", u:"https://webdayhoc.vercel.app/games"}
  ]},
  {name:"Tiện ích, công cụ", icon:"tool", color:"var(--tag-ly)", items:[
    {t:"Trình chiếu ảnh", u:"https://trinhchieuanh.vercel.app/"},
    {t:"Chúc mừng sinh nhật", u:"https://chucmungsinhnhat-chi.vercel.app/"},
    {t:"Album ảnh", u:"https://photoalbum-ten.vercel.app/"},
    {t:"Học từ Anki", u:"https://vutienlucstudy.vercel.app/"},
    {t:"Word online", u:"https://mdtoword-topaz.vercel.app/"},
    {t:"Sổ tay note", u:"https://script.google.com/macros/s/AKfycbwmaj-53Ut7zicUPuC7QQZMZjRlWG7KF2jeJMUy5BKsVnyIuPpLhTv6boNkW87KCJPP/exec", host:"Google Apps Script"}
  ]},
  {name:"Chuyển đổi LaTeX", icon:"tex", color:"var(--tag-dh)", items:[
    {t:"Chuyển đổi LaTeX", u:"https://jsonvtl.vercel.app/"},
    {t:"Chuyển đổi MD", u:"https://soangiangtl.vercel.app/"}
  ]},
  {name:"Quản lý lớp học", icon:"users", color:"var(--tag-vd)", items:[
    {t:"Thời khoá biểu", u:"https://lichbaogiang-ten.vercel.app/"},
    {t:"Gọi tên", u:"https://dojotienluc.vercel.app/"}
  ]},
  {name:"Tạo nhận xét", icon:"pen", color:"var(--tag-ct)", items:[
    {t:"Tạo nhận xét", u:"https://taonhanxet.vercel.app/"},
    {t:"Tạo nhận xét 2", u:"https://nhanxethocba-lime.vercel.app/"}
  ]}
];
