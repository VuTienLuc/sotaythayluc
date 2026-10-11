// Lớp 7 — 3 mạch, 8 bài, 26 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:7,l:"Lớp 7",c:"#f2a541",s:[
 {n:"Số & Đại số",t:[
  {n:"Số hữu tỉ",i:[
   "DN|Số hữu tỉ là số viết được dưới dạng phân số $\\dfrac{a}{b}$ ($a,b\\in\\mathbb{Z}$, $b\\neq 0$); tập hợp kí hiệu $\\mathbb{Q}$",
   "CT|Cộng, trừ, nhân, chia số hữu tỉ: quy về phép tính trên phân số cùng mẫu",
   "CT|Lũy thừa của số hữu tỉ: $x^m\\cdot x^n=x^{m+n}$; $x^m:x^n=x^{m-n}$; $(x^m)^n=x^{mn}$; $(x\\cdot y)^n=x^n\\cdot y^n$; $\\left(\\dfrac{x}{y}\\right)^n=\\dfrac{x^n}{y^n}$",
   "DN|Giá trị tuyệt đối của số hữu tỉ $x$, kí hiệu $|x|$, là khoảng cách từ điểm $x$ đến điểm $0$ trên trục số",
  ]},
  {n:"Số thực",i:[
   "DN|Số vô tỉ là số thập phân vô hạn không tuần hoàn (ví dụ $\\sqrt{2}$, $\\pi$); căn bậc hai số học của $a\\geq 0$ là $\\sqrt{a}$",
   "DN|Tập hợp số thực $\\mathbb{R}=\\mathbb{Q}\\cup(\\text{tập số vô tỉ})$; mỗi số thực đều biểu diễn được bởi một điểm trên trục số",
   "TC|Với $a,b\\geq 0$: $a<b \\Leftrightarrow \\sqrt{a}<\\sqrt{b}$",
  ]},
  {n:"Đại lượng tỉ lệ thuận, tỉ lệ nghịch",i:[
   "DN|$y$ tỉ lệ thuận với $x$ theo hệ số $k$ ($k\\neq 0$) nếu $y=k\\cdot x$",
   "DN|$y$ tỉ lệ nghịch với $x$ theo hệ số $k$ ($k\\neq 0$) nếu $y=\\dfrac{k}{x}$, tức $x\\cdot y=k$ không đổi",
   "CT|Tính chất dãy tỉ số bằng nhau: $\\dfrac{a}{b}=\\dfrac{c}{d}=\\dfrac{a+c}{b+d}=\\dfrac{a-c}{b-d}$ ($b\\neq \\pm d$)",
  ]},
  {n:"Biểu thức đại số. Đa thức một biến",i:[
   "DN|Đơn thức một biến là biểu thức có dạng $a\\cdot x^k$ ($a$ là hệ số, $k$ là bậc); đa thức là tổng các đơn thức",
   "DN|Bậc của đa thức một biến là số mũ lớn nhất của biến trong đa thức (sau khi thu gọn)",
   "DN|Nghiệm của đa thức một biến $P(x)$ là giá trị của $x$ sao cho $P(x)=0$",
  ]},
 ]},
 {n:"Hình học & Đo lường",t:[
  {n:"Góc và đường thẳng song song",i:[
   "TC|Hai góc đối đỉnh thì bằng nhau; hai đường thẳng vuông góc tạo ra bốn góc vuông",
   "DN|Đường trung trực của đoạn thẳng là đường vuông góc với đoạn thẳng tại trung điểm của nó",
   "DH|Nếu một đường thẳng cắt hai đường thẳng tạo ra một cặp góc so le trong (hoặc đồng vị) bằng nhau thì hai đường thẳng đó song song",
   "LY|Tiên đề Euclid: qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó",
  ]},
  {n:"Tam giác",i:[
   "TC|Tổng ba góc trong một tam giác bằng $180^\\circ$; góc ngoài của tam giác bằng tổng hai góc trong không kề với nó",
   "DH|Ba trường hợp bằng nhau của hai tam giác: cạnh–cạnh–cạnh (c.c.c), cạnh–góc–cạnh (c.g.c), góc–cạnh–góc (g.c.g)",
   "DH|Tam giác cân: hai cạnh bên bằng nhau và hai góc ở đáy bằng nhau. Tam giác đều: ba cạnh bằng nhau, mỗi góc $60^\\circ$",
   "TC|Trong một tam giác, góc đối diện với cạnh lớn hơn thì lớn hơn (và ngược lại)",
   "CT|Bất đẳng thức tam giác: với ba cạnh $a,b,c$ thì $|b-c|<a<b+c$",
   "TC|Bốn đường đồng quy của tam giác: trung tuyến (giao tại trọng tâm), phân giác (tâm đường tròn nội tiếp), trung trực (tâm đường tròn ngoại tiếp), đường cao (trực tâm)",
  ]},
 ]},
 {n:"Thống kê & Xác suất",t:[
  {n:"Thống kê",i:[
   "CT|Các dạng biểu đồ: biểu đồ đoạn thẳng (thể hiện xu thế theo thời gian), biểu đồ hình quạt tròn (thể hiện tỉ lệ phần trăm)",
  ]},
  {n:"Biến cố và xác suất",i:[
   "DN|Biến cố chắc chắn luôn xảy ra; biến cố không thể không bao giờ xảy ra; biến cố ngẫu nhiên có thể xảy ra hoặc không",
   "CT|Nếu một phép thử có $n$ kết quả đồng khả năng và biến cố $A$ ứng với $k$ kết quả thì $P(A)=\\dfrac{k}{n}$",
  ]},
 ]},
]});
