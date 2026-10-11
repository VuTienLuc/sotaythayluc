// Lớp 6 — 3 mạch, 10 bài, 43 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:6,l:"Lớp 6",c:"#e07a5f",s:[
 {n:"Số & Đại số",t:[
  {n:"Tập hợp. Số tự nhiên",i:[
   "DN|Tập hợp: dùng chữ cái in hoa đặt tên; kí hiệu $a \\in A$ (a thuộc A), $a \\notin A$ (a không thuộc A), $\\emptyset$ (tập rỗng)",
   "CT|Hai cách viết tập hợp: liệt kê các phần tử, hoặc chỉ ra tính chất đặc trưng của phần tử",
   "DN|Tập hợp số tự nhiên $\\mathbb{N}=\\{0;1;2;3;\\ldots\\}$; $\\mathbb{N}^*=\\{1;2;3;\\ldots\\}$ (không có số 0)",
   "TC|Trong hai số tự nhiên khác nhau, luôn có một số nhỏ hơn số kia; biểu diễn trên tia số, số ở bên trái nhỏ hơn",
  ]},
  {n:"Các phép tính với số tự nhiên",i:[
   "TC|Phép cộng, nhân: giao hoán $a+b=b+a$, $ab=ba$; kết hợp $(a+b)+c=a+(b+c)$; phân phối $a(b+c)=ab+ac$",
   "CT|Phép chia có dư: $a=b\\cdot q+r$ với $0\\leq r<b$ (a là số bị chia, b là số chia, q là thương, r là số dư)",
   "DN|Lũy thừa: $a^n=a\\cdot a\\cdots a$ (n thừa số $a$), $a$ gọi là cơ số, $n$ là số mũ; quy ước $a^1=a$, $a^0=1$ ($a\\neq 0$)",
   "CT|Nhân, chia hai lũy thừa cùng cơ số: $a^m\\cdot a^n=a^{m+n}$; $a^m:a^n=a^{m-n}$ ($a\\neq 0$, $m\\geq n$)",
   "LY|Thứ tự thực hiện phép tính: Lũy thừa → Nhân, chia → Cộng, trừ; trong ngoặc thì ( ) → [ ] → { } trước",
  ]},
  {n:"Tính chia hết trong tập số tự nhiên",i:[
   "DH|Chia hết cho 2: chữ số tận cùng là 0,2,4,6,8. Chia hết cho 5: chữ số tận cùng là 0 hoặc 5",
   "DH|Chia hết cho 3: tổng các chữ số chia hết cho 3. Chia hết cho 9: tổng các chữ số chia hết cho 9",
   "DN|Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó; hợp số có nhiều hơn 2 ước",
   "CT|Phân tích một số ra thừa số nguyên tố: viết số đó dưới dạng tích của các số nguyên tố",
   "DN|Ước chung lớn nhất (ƯCLN) của hai hay nhiều số là số lớn nhất trong tập hợp các ước chung của chúng",
   "DN|Bội chung nhỏ nhất (BCNN) của hai hay nhiều số là số nhỏ nhất khác 0 trong tập hợp các bội chung",
   "CT|Tìm ƯCLN: lấy tích các thừa số nguyên tố chung, mỗi thừa số lấy số mũ nhỏ nhất. Tìm BCNN: lấy tích các thừa số nguyên tố chung và riêng, mỗi thừa số lấy số mũ lớn nhất",
  ]},
  {n:"Số nguyên",i:[
   "DN|Tập hợp số nguyên $\\mathbb{Z}=\\{\\ldots;-2;-1;0;1;2;\\ldots\\}$; số đối của $a$ là $-a$; giá trị tuyệt đối $|a|$ là khoảng cách từ $a$ đến $0$",
   "TC|Cộng hai số nguyên cùng dấu: cộng hai giá trị tuyệt đối, giữ nguyên dấu. Cộng hai số nguyên khác dấu: lấy giá trị tuyệt đối lớn trừ giá trị tuyệt đối nhỏ, dấu là dấu của số có giá trị tuyệt đối lớn hơn",
   "CT|Phép trừ: $a-b=a+(-b)$",
   "TC|Nhân, chia số nguyên: cùng dấu cho kết quả dương, khác dấu cho kết quả âm; $(-a)\\cdot(-b)=a\\cdot b$",
  ]},
  {n:"Phân số",i:[
   "DN|Phân số $\\dfrac{a}{b}$ ($a,b\\in\\mathbb{Z}$, $b\\neq 0$); $a$ là tử số, $b$ là mẫu số",
   "TC|Hai phân số bằng nhau: $\\dfrac{a}{b}=\\dfrac{c}{d} \\Leftrightarrow a\\cdot d=b\\cdot c$",
   "CT|Cộng, trừ phân số cùng mẫu: giữ nguyên mẫu, cộng/trừ tử; khác mẫu: quy đồng mẫu số trước",
   "CT|Nhân hai phân số: $\\dfrac{a}{b}\\cdot\\dfrac{c}{d}=\\dfrac{a\\cdot c}{b\\cdot d}$. Chia hai phân số: $\\dfrac{a}{b}:\\dfrac{c}{d}=\\dfrac{a}{b}\\cdot\\dfrac{d}{c}$",
   "DN|Hỗn số là cách viết gồm phần nguyên và phần phân số; liên hệ phân số – số thập phân – phần trăm",
  ]},
  {n:"Số thập phân",i:[
   "DN|Số thập phân gồm phần nguyên và phần thập phân, cách nhau bởi dấu phẩy; có thể âm hoặc dương",
   "LY|Làm tròn số thập phân: xét chữ số ngay sau hàng cần làm tròn, $\\geq 5$ thì tăng thêm 1 đơn vị ở hàng làm tròn",
   "DN|Tỉ số của $a$ và $b$ ($b\\neq 0$) là $a:b$ hay $\\dfrac{a}{b}$; tỉ số phần trăm của $a$ và $b$ là $\\dfrac{a}{b}\\cdot 100\\%$",
  ]},
 ]},
 {n:"Hình học & Đo lường",t:[
  {n:"Hình học trực quan – Chu vi, diện tích",i:[
   "DH|Hình vuông: 4 cạnh bằng nhau, 4 góc vuông. Hình chữ nhật: 2 cặp cạnh đối song song và bằng nhau, 4 góc vuông",
   "DH|Hình thoi: 4 cạnh bằng nhau, 2 đường chéo vuông góc. Hình bình hành: 2 cặp cạnh đối song song và bằng nhau",
   "DH|Hình thang cân: có một cặp cạnh đối song song, hai cạnh bên bằng nhau, hai góc kề một đáy bằng nhau",
   "CT|Hình vuông cạnh $a$: chu vi $C=4a$, diện tích $S=a^2$. Hình chữ nhật: $C=2(a+b)$, $S=a\\cdot b$",
   "CT|Hình thoi hai đường chéo $d_1,d_2$: $S=\\dfrac{1}{2}\\cdot d_1\\cdot d_2$. Hình bình hành đáy $a$, cao $h$: $S=a\\cdot h$",
   "CT|Hình thang hai đáy $a,b$, cao $h$: $S=\\dfrac{1}{2}\\cdot(a+b)\\cdot h$",
   "DN|Tam giác đều: 3 cạnh bằng nhau, 3 góc bằng $60^\\circ$. Lục giác đều: 6 cạnh bằng nhau, 6 góc bằng nhau",
  ]},
  {n:"Điểm, đường thẳng, đoạn thẳng, góc",i:[
   "DN|Qua hai điểm phân biệt chỉ có một đường thẳng; ba điểm thẳng hàng khi cùng nằm trên một đường thẳng",
   "DN|Trung điểm của đoạn thẳng $AB$ là điểm nằm giữa và cách đều hai đầu mút $A$, $B$",
   "DN|Góc là hình gồm hai tia chung gốc; số đo góc đo bằng độ",
   "DH|Góc nhọn: $0^\\circ<\\alpha<90^\\circ$. Góc vuông: $\\alpha=90^\\circ$. Góc tù: $90^\\circ<\\alpha<180^\\circ$. Góc bẹt: $\\alpha=180^\\circ$",
  ]},
 ]},
 {n:"Thống kê & Xác suất",t:[
  {n:"Thu thập, biểu diễn dữ liệu",i:[
   "DN|Thu thập dữ liệu bằng quan sát, lập phiếu hỏi, phỏng vấn, tra cứu tài liệu",
   "CT|Các dạng biểu diễn: bảng số liệu, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép",
  ]},
  {n:"Xác suất thực nghiệm",i:[
   "CT|Xác suất thực nghiệm của một sự kiện $=\\dfrac{\\text{số lần sự kiện xảy ra}}{\\text{tổng số lần thực hiện}}$",
   "LY|Xác suất thực nghiệm càng ổn định khi số lần thử càng lớn",
  ]},
 ]},
]});
