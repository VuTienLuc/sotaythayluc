// Lớp 10 — 4 mạch, 32 bài, 122 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:10,l:"Lớp 10",c:"#6d5acd",s:[
 {n:"Đại số & Giải tích",t:[
  {n:"Mệnh đề",i:[
   "DN|Mệnh đề là câu khẳng định đúng hoặc sai, không thể vừa đúng vừa sai; phủ định của mệnh đề $P$ là $\\overline{P}$ (đúng khi $P$ sai và ngược lại)",
   "CT|Mệnh đề kéo theo $P\\Rightarrow Q$ sai chỉ khi $P$ đúng, $Q$ sai; mệnh đề đảo là $Q\\Rightarrow P$; hai mệnh đề tương đương $P\\Leftrightarrow Q$ khi cả $P\\Rightarrow Q$ và $Q\\Rightarrow P$ đều đúng",
   "CT|Mệnh đề chứa biến $P(x)$ chỉ trở thành mệnh đề (đúng hoặc sai) khi thay $x$ bởi một giá trị cụ thể; phủ định của \\\"$\\forall x\\in X, P(x)$\\\" là \\\"$\\exists x\\in X, \\overline{P(x)}$\\\"; phủ định của \\\"$\\exists x\\in X, P(x)$\\\" là \\\"$\\forall x\\in X, \\overline{P(x)}$\\\"",
  ]},
  {n:"Tập hợp. Tập con",i:[
   "DN|Tập hợp là một khái niệm cơ bản của toán học (không định nghĩa); phần tử $a$ thuộc tập hợp $A$ kí hiệu $a\\in A$, không thuộc kí hiệu $a\\notin A$",
   "CT|Hai cách xác định một tập hợp: (1) liệt kê các phần tử, ví dụ $A=\\{1;2;3;4\\}$; (2) chỉ ra tính chất đặc trưng cho các phần tử, ví dụ $A=\\{x\\in\\mathbb{N}\\mid x<5\\}$",
   "DN|$A$ là tập con của $B$, kí hiệu $A\\subset B$, khi mọi phần tử của $A$ đều thuộc $B$; hai tập hợp bằng nhau, kí hiệu $A=B$, khi $A\\subset B$ và $B\\subset A$",
   "LY|Tập rỗng $\\varnothing$ (không có phần tử nào) là tập con của mọi tập hợp; một tập hợp có $n$ phần tử thì có đúng $2^n$ tập con (kể cả $\\varnothing$ và chính nó)",
   "VD|Ví dụ: Tập $A=\\{1;2;3\\}$ có $2^3=8$ tập con, gồm: $\\varnothing$, $\\{1\\}$, $\\{2\\}$, $\\{3\\}$, $\\{1;2\\}$, $\\{1;3\\}$, $\\{2;3\\}$, $\\{1;2;3\\}$",
  ]},
  {n:"Các phép toán trên tập hợp",i:[
   "DN|Giao của $A$ và $B$: $A\\cap B=\\{x\\mid x\\in A \\text{ và } x\\in B\\}$ — gồm các phần tử chung của cả hai tập",
   "DN|Hợp của $A$ và $B$: $A\\cup B=\\{x\\mid x\\in A \\text{ hoặc } x\\in B\\}$ — gồm các phần tử thuộc ít nhất một trong hai tập",
   "DN|Hiệu của $A$ và $B$: $A\\setminus B=\\{x\\mid x\\in A \\text{ và } x\\notin B\\}$; nếu $A\\subset E$ thì phần bù của $A$ trong $E$, kí hiệu $C_EA$, là $C_EA=E\\setminus A$",
   "CT|Công thức đếm số phần tử của hợp hai tập hữu hạn: $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$ — thường minh họa bằng biểu đồ Ven để giải các bài toán đếm liên quan đến hai (hoặc ba) tập hợp",
   "VD|Ví dụ: Cho $A=\\{1;2;3;4;5\\}$, $B=\\{3;4;5;6;7\\}$. Tìm $A\\cap B$, $A\\cup B$, $A\\setminus B$. Ta có $A\\cap B=\\{3;4;5\\}$; $A\\cup B=\\{1;2;3;4;5;6;7\\}$; $A\\setminus B=\\{1;2\\}$",
   "VD|Bài toán thực tế: Lớp 10A có $40$ học sinh, trong đó $25$ em giỏi Toán, $20$ em giỏi Văn, $10$ em giỏi cả hai môn. Hỏi có bao nhiêu em không giỏi môn nào trong hai môn này? Gọi $A,B$ lần lượt là tập học sinh giỏi Toán, giỏi Văn: $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)=25+20-10=35$. Số học sinh không giỏi môn nào $=40-35=5$",
  ]},
  {n:"Các tập con thường gặp của tập số thực",i:[
   "CT|Đoạn $[a;b]=\\{x\\in\\mathbb{R}\\mid a\\leq x\\leq b\\}$; khoảng $(a;b)=\\{x\\in\\mathbb{R}\\mid a<x<b\\}$; nửa khoảng $[a;b)=\\{x\\in\\mathbb{R}\\mid a\\leq x<b\\}$, $(a;b]=\\{x\\in\\mathbb{R}\\mid a<x\\leq b\\}$",
   "CT|Khoảng, nửa khoảng vô hạn: $(-\\infty;a)$, $(a;+\\infty)$, $(-\\infty;a]$, $[a;+\\infty)$; toàn bộ trục số $\\mathbb{R}=(-\\infty;+\\infty)$",
   "LY|Cách tìm giao, hợp, hiệu của hai tập con của $\\mathbb{R}$: biểu diễn cả hai tập trên cùng một trục số (chú ý dấu ngoặc vuông \\\"đóng\\\" hay tròn \\\"mở\\\" tại các đầu mút), rồi xác định phần chung (giao), phần gộp (hợp), hoặc phần thuộc tập này mà không thuộc tập kia (hiệu)",
   "VD|Ví dụ: Cho $A=[-2;3)$, $B=(0;5]$. Tìm $A\\cap B$, $A\\cup B$, $A\\setminus B$. Biểu diễn trên trục số: $A\\cap B=(0;3)$; $A\\cup B=[-2;5]$; $A\\setminus B=[-2;0]$",
  ]},
  {n:"Bất phương trình, hệ bất phương trình bậc nhất hai ẩn",i:[
   "DN|Bất phương trình bậc nhất hai ẩn có dạng $ax+by\\leq c$ (hoặc $<,\\geq,>$); miền nghiệm là một nửa mặt phẳng",
   "LY|Giải hệ bất phương trình: lấy giao các miền nghiệm; dùng để giải bài toán tối ưu (tìm max/min của biểu thức $F=ax+by$ trên miền nghiệm)",
  ]},
  {n:"Hàm số bậc hai, đồ thị",i:[
   "DN|Tập xác định là tập các giá trị của biến làm biểu thức xác định; hàm số đồng biến/nghịch biến trên khoảng xét dấu của tỉ số biến thiên",
   "CT|Hàm số bậc hai $y=ax^2+bx+c$ ($a\\neq 0$): đỉnh $I\\!\\left(-\\dfrac{b}{2a};-\\dfrac{\\Delta}{4a}\\right)$, trục đối xứng $x=-\\dfrac{b}{2a}$; $a>0$ bề lõm lên (có GTNN), $a<0$ bề lõm xuống (có GTLN)",
   "TC|Dấu của tam thức bậc hai $f(x)=ax^2+bx+c$: nếu $\\Delta<0$, $f(x)$ cùng dấu với $a$ với mọi $x$; nếu $\\Delta=0$, $f(x)$ cùng dấu $a$ trừ $x=-\\dfrac{b}{2a}$; nếu $\\Delta>0$, $f(x)$ trái dấu $a$ giữa hai nghiệm, cùng dấu $a$ ngoài khoảng hai nghiệm",
  ]},
  {n:"Đại số tổ hợp. Xác suất cổ điển",i:[
   "CT|Quy tắc cộng: có $m+n$ cách nếu có $m$ cách chọn loại 1 và $n$ cách chọn loại 2 (không trùng nhau). Quy tắc nhân: có $m\\cdot n$ cách nếu công đoạn 1 có $m$ cách và công đoạn 2 có $n$ cách",
   "CT|Hoán vị của $n$ phần tử: $P_n=n!$. Chỉnh hợp chập $k$ của $n$: $A_n^k=\\dfrac{n!}{(n-k)!}$. Tổ hợp chập $k$ của $n$: $C_n^k=\\dfrac{n!}{k!(n-k)!}$",
   "CT|Nhị thức Newton: $(a+b)^n=\\displaystyle\\sum_{k=0}^{n} C_n^k\\, a^{n-k}b^k$",
   "CT|Xác suất cổ điển: $P(A)=\\dfrac{n(A)}{n(\\Omega)}$, với $n(\\Omega)$ là số phần tử không gian mẫu (đồng khả năng)",
  ]},
 ]},
 {n:"Hình học & Đo lường",t:[
  {n:"Hệ thức lượng trong tam giác",i:[
   "CT|Định lí côsin: $a^2=b^2+c^2-2bc\\cos A$ (và các hoán vị tương ứng)",
   "CT|Định lí sin: $\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}=2R$ ($R$ là bán kính đường tròn ngoại tiếp)",
   "CT|Diện tích tam giác: $S=\\dfrac{1}{2}ab\\sin C=\\dfrac{abc}{4R}=pr=\\sqrt{p(p-a)(p-b)(p-c)}$ ($p$: nửa chu vi, $r$: bán kính đường tròn nội tiếp)",
  ]},
  {n:"Khái niệm vectơ",i:[
   "DN|Vectơ $\\overrightarrow{AB}$ là đoạn thẳng $AB$ có hướng, với $A$ là điểm đầu, $B$ là điểm cuối; đường thẳng chứa vectơ gọi là giá của vectơ đó; độ dài vectơ $\\overrightarrow{AB}$, kí hiệu $|\\overrightarrow{AB}|$, bằng độ dài đoạn thẳng $AB$",
   "DN|Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau; hai vectơ cùng phương thì hoặc cùng hướng hoặc ngược hướng",
   "DN|Hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng nhau, kí hiệu $\\vec{a}=\\vec{b}$, khi chúng cùng hướng và cùng độ dài; vectơ đối của $\\vec{a}$, kí hiệu $-\\vec{a}$, là vectơ ngược hướng và cùng độ dài với $\\vec{a}$",
   "DN|Vectơ-không, kí hiệu $\\vec{0}$, là vectơ có điểm đầu trùng điểm cuối (ví dụ $\\overrightarrow{AA}$); có độ dài bằng $0$ và được quy ước cùng phương, cùng hướng với mọi vectơ",
  ]},
  {n:"Tổng và hiệu hai vectơ",i:[
   "CT|Quy tắc ba điểm (cộng): với ba điểm $A,B,C$ bất kì: $\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}$",
   "CT|Quy tắc hình bình hành: nếu $ABCD$ là hình bình hành thì $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$",
   "CT|Quy tắc trừ: với ba điểm $O,A,B$ bất kì: $\\overrightarrow{OB}-\\overrightarrow{OA}=\\overrightarrow{AB}$ — dùng để \\\"tách\\\" một vectơ hiệu thành vectơ nối hai điểm",
   "TC|Tính chất phép cộng vectơ: giao hoán $\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$; kết hợp $(\\vec{a}+\\vec{b})+\\vec{c}=\\vec{a}+(\\vec{b}+\\vec{c})$; $\\vec{a}+\\vec{0}=\\vec{a}$; $\\vec{a}+(-\\vec{a})=\\vec{0}$",
   "CT|Quy tắc trung điểm: $I$ là trung điểm đoạn thẳng $AB$ $\\Leftrightarrow$ $\\overrightarrow{IA}+\\overrightarrow{IB}=\\vec{0}$ $\\Leftrightarrow$ với mọi điểm $M$: $\\overrightarrow{MA}+\\overrightarrow{MB}=2\\overrightarrow{MI}$",
   "CT|Quy tắc trọng tâm: $G$ là trọng tâm tam giác $ABC$ $\\Leftrightarrow$ $\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec{0}$ $\\Leftrightarrow$ với mọi điểm $M$: $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=3\\overrightarrow{MG}$",
   "VD|Ví dụ: Cho hình bình hành $ABCD$, gọi $O$ là giao điểm hai đường chéo. Vì $O$ là trung điểm $AC$ nên $\\overrightarrow{OA}+\\overrightarrow{OC}=\\vec{0}$; theo quy tắc hình bình hành, $\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}$",
  ]},
  {n:"Tích của vectơ với một số",i:[
   "DN|Tích của số thực $k$ với vectơ $\\vec{a}\\neq\\vec{0}$ là một vectơ, kí hiệu $k\\vec{a}$: cùng hướng với $\\vec{a}$ nếu $k>0$, ngược hướng nếu $k<0$, và có độ dài $|k\\vec{a}|=|k|\\cdot|\\vec{a}|$",
   "TC|Tính chất: $k(\\vec{a}+\\vec{b})=k\\vec{a}+k\\vec{b}$; $(k+l)\\vec{a}=k\\vec{a}+l\\vec{a}$; $k(l\\vec{a})=(kl)\\vec{a}$; $1\\cdot\\vec{a}=\\vec{a}$; $(-1)\\cdot\\vec{a}=-\\vec{a}$",
   "CT|Điều kiện hai vectơ cùng phương: với $\\vec{a}\\neq\\vec{0}$, vectơ $\\vec{b}$ cùng phương với $\\vec{a}$ $\\Leftrightarrow$ tồn tại duy nhất số thực $k$ sao cho $\\vec{b}=k\\vec{a}$",
   "TC|Ba điểm phân biệt $A,B,C$ thẳng hàng $\\Leftrightarrow$ $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ cùng phương $\\Leftrightarrow$ tồn tại số $k$ sao cho $\\overrightarrow{AB}=k\\overrightarrow{AC}$",
   "CT|Phân tích (biểu diễn) một vectơ theo hai vectơ không cùng phương: nếu $\\vec{a},\\vec{b}$ không cùng phương thì mọi vectơ $\\vec{x}$ trong mặt phẳng đều biểu diễn được duy nhất dưới dạng $\\vec{x}=m\\vec{a}+n\\vec{b}$ ($m,n\\in\\mathbb{R}$)",
   "VD|Ví dụ: Cho tam giác $ABC$, gọi $M$ là trung điểm $BC$. Phân tích $\\overrightarrow{AM}$ theo $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$. Áp dụng quy tắc trung điểm cho $M$ (với điểm gốc $A$): $\\overrightarrow{AB}+\\overrightarrow{AC}=2\\overrightarrow{AM}$, suy ra $\\overrightarrow{AM}=\\dfrac{1}{2}\\big(\\overrightarrow{AB}+\\overrightarrow{AC}\\big)$",
  ]},
  {n:"Tích vô hướng của hai vectơ",i:[
   "DN|Tích vô hướng của $\\vec{a}$ và $\\vec{b}$ (đều khác $\\vec{0}$): $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\,|\\vec{b}|\\cos(\\vec{a},\\vec{b})$, trong đó $(\\vec{a},\\vec{b})$ là góc giữa hai vectơ",
   "TC|$\\vec{a}\\cdot\\vec{b}=0 \\Leftrightarrow \\vec{a}\\perp\\vec{b}$ (với $\\vec{a},\\vec{b}$ khác $\\vec{0}$); $\\vec{a}\\cdot\\vec{a}=|\\vec{a}|^2$ (bình phương vô hướng)",
   "TC|Tính chất: $\\vec{a}\\cdot\\vec{b}=\\vec{b}\\cdot\\vec{a}$; $\\vec{a}\\cdot(\\vec{b}+\\vec{c})=\\vec{a}\\cdot\\vec{b}+\\vec{a}\\cdot\\vec{c}$; $(k\\vec{a})\\cdot\\vec{b}=k(\\vec{a}\\cdot\\vec{b})$",
   "VD|Ví dụ: Cho tam giác đều $ABC$ cạnh $a$. Tính $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$. Góc giữa $\\overrightarrow{AB}$ và $\\overrightarrow{AC}$ là $\\widehat{BAC}=60^\\circ$: $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=a\\cdot a\\cdot\\cos60^\\circ=\\dfrac{a^2}{2}$",
  ]},
  {n:"Vectơ trong hệ tọa độ Oxy",i:[
   "DN|Trong mặt phẳng $Oxy$ với hai vectơ đơn vị $\\vec{i},\\vec{j}$ trên hai trục, mỗi vectơ $\\vec{a}$ được viết duy nhất dưới dạng $\\vec{a}=x\\vec{i}+y\\vec{j}$; cặp số $(x;y)$ gọi là tọa độ của $\\vec{a}$, kí hiệu $\\vec{a}=(x;y)$",
   "CT|Cho $A(x_A;y_A)$, $B(x_B;y_B)$: tọa độ $\\overrightarrow{AB}=(x_B-x_A;\\,y_B-y_A)$; độ dài (khoảng cách) $AB=|\\overrightarrow{AB}|=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$",
   "CT|Cho $\\vec{a}=(x_1;y_1)$, $\\vec{b}=(x_2;y_2)$: $\\vec{a}+\\vec{b}=(x_1+x_2;\\,y_1+y_2)$; $\\vec{a}-\\vec{b}=(x_1-x_2;\\,y_1-y_2)$; $k\\vec{a}=(kx_1;\\,ky_1)$",
   "CT|$\\vec{a}$ cùng phương với $\\vec{b}\\neq\\vec{0}$ $\\Leftrightarrow$ $x_1y_2-x_2y_1=0$ (khi $x_2,y_2\\neq0$ thì tương đương $\\dfrac{x_1}{x_2}=\\dfrac{y_1}{y_2}$)",
   "CT|Tích vô hướng theo tọa độ: $\\vec{a}\\cdot\\vec{b}=x_1x_2+y_1y_2$; suy ra $\\vec{a}\\perp\\vec{b} \\Leftrightarrow x_1x_2+y_1y_2=0$; và $\\cos(\\vec{a},\\vec{b})=\\dfrac{x_1x_2+y_1y_2}{\\sqrt{x_1^2+y_1^2}\\cdot\\sqrt{x_2^2+y_2^2}}$",
   "CT|Tọa độ trung điểm $I$ của $AB$: $I=\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)$; tọa độ trọng tâm $G$ của tam giác $ABC$: $G=\\left(\\dfrac{x_A+x_B+x_C}{3};\\dfrac{y_A+y_B+y_C}{3}\\right)$",
   "VD|Ví dụ: Cho $A(1;2)$, $B(4;6)$. Tính $\\overrightarrow{AB}$, độ dài $AB$ và tọa độ trung điểm $I$ của $AB$. $\\overrightarrow{AB}=(4-1;\\,6-2)=(3;4)$; $AB=\\sqrt{3^2+4^2}=5$; $I=\\left(\\dfrac{1+4}{2};\\dfrac{2+6}{2}\\right)=(2{,}5;4)$",
  ]},
  {n:"Dạng toán vận dụng vectơ trong hình học",i:[
   "DT|Các dạng toán thường gặp: (1) chứng minh một đẳng thức vectơ bằng cách chèn điểm và dùng quy tắc ba điểm/trung điểm/trọng tâm; (2) chứng minh ba điểm thẳng hàng hoặc tìm điểm thỏa điều kiện cho trước bằng cách xét hai vectơ cùng phương; (3) tính góc giữa hai vectơ, chứng minh vuông góc, hoặc tính độ dài đoạn thẳng bằng tích vô hướng (có hoặc không dùng tọa độ)",
   "VD|Ví dụ (đẳng thức vectơ): Cho tam giác $ABC$ có trọng tâm $G$. Chứng minh với mọi điểm $M$: $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=3\\overrightarrow{MG}$. Chèn điểm $G$: $\\overrightarrow{MA}=\\overrightarrow{MG}+\\overrightarrow{GA}$ và tương tự với $\\overrightarrow{MB},\\overrightarrow{MC}$; cộng vế theo vế: $\\overrightarrow{MA}+\\overrightarrow{MB}+\\overrightarrow{MC}=3\\overrightarrow{MG}+(\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC})=3\\overrightarrow{MG}$ (vì $G$ là trọng tâm nên $\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec{0}$)",
   "VD|Ví dụ (ba điểm thẳng hàng): Cho $A(1;1)$, $B(3;2)$, $C(5;3)$. Chứng minh $A,B,C$ thẳng hàng. Ta có $\\overrightarrow{AB}=(2;1)$, $\\overrightarrow{AC}=(4;2)=2\\overrightarrow{AB}$, hai vectơ cùng phương nên $A,B,C$ thẳng hàng",
   "VD|Ví dụ (vuông góc bằng tọa độ): Cho $\\vec{a}=(1;2)$, $\\vec{b}=(2;-1)$. Tính $\\vec{a}\\cdot\\vec{b}$ và kết luận. Ta có $\\vec{a}\\cdot\\vec{b}=1\\cdot2+2\\cdot(-1)=0$, suy ra $\\vec{a}\\perp\\vec{b}$",
  ]},
  {n:"Phương trình đường thẳng",i:[
   "DN|Vectơ chỉ phương (VTCP) của đường thẳng $\\Delta$ là vectơ khác $\\vec{0}$ có giá song song hoặc trùng với $\\Delta$; vectơ pháp tuyến (VTPT) là vectơ khác $\\vec{0}$ vuông góc với VTCP (và vuông góc với $\\Delta$); nếu $\\vec{u}=(a;b)$ là một VTCP thì $\\vec{n}=(b;-a)$ là một VTPT",
   "CT|Phương trình tham số của $\\Delta$ đi qua $M_0(x_0;y_0)$ có VTCP $\\vec{u}=(a;b)$: $\\begin{cases}x=x_0+at\\\\y=y_0+bt\\end{cases}$ ($t\\in\\mathbb{R}$)",
   "CT|Phương trình chính tắc (khi $a,b\\neq0$): $\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}$",
   "CT|Phương trình tổng quát: $ax+by+c=0$ ($a^2+b^2\\neq0$), VTPT $\\vec{n}=(a;b)$; nếu $b\\neq0$ thì hệ số góc $k=-\\dfrac{a}{b}$, và đường thẳng qua $M_0(x_0;y_0)$ với hệ số góc $k$ có phương trình $y=k(x-x_0)+y_0$",
   "VD|Ví dụ: Viết phương trình tham số và tổng quát của đường thẳng đi qua $A(1;2)$, có VTCP $\\vec{u}=(3;-1)$. Tham số: $\\begin{cases}x=1+3t\\\\y=2-t\\end{cases}$; khử $t$: $\\dfrac{x-1}{3}=2-y \\Leftrightarrow x-1=3(2-y) \\Leftrightarrow x+3y-7=0$",
  ]},
  {n:"Vị trí tương đối, góc và khoảng cách giữa hai đường thẳng",i:[
   "CT|Xét $\\Delta_1: a_1x+b_1y+c_1=0$, $\\Delta_2: a_2x+b_2y+c_2=0$ (với $a_2,b_2,c_2\\neq0$): cắt nhau nếu $a_1b_2-a_2b_1\\neq0$; song song nếu $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}\\neq\\dfrac{c_1}{c_2}$; trùng nhau nếu $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}=\\dfrac{c_1}{c_2}$",
   "CT|Góc giữa hai đường thẳng có VTPT $\\vec{n_1}=(a_1;b_1)$, $\\vec{n_2}=(a_2;b_2)$: $\\cos(\\Delta_1,\\Delta_2)=\\dfrac{|a_1a_2+b_1b_2|}{\\sqrt{a_1^2+b_1^2}\\cdot\\sqrt{a_2^2+b_2^2}}$",
   "CT|Khoảng cách từ điểm $M(x_0;y_0)$ đến đường thẳng $ax+by+c=0$: $d(M,\\Delta)=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$",
   "VD|Ví dụ: Tính góc giữa $\\Delta_1: x-y+1=0$ và $\\Delta_2: x+y-3=0$. VTPT $\\vec{n_1}=(1;-1)$, $\\vec{n_2}=(1;1)$: $\\cos(\\Delta_1,\\Delta_2)=\\dfrac{|1\\cdot1+(-1)\\cdot1|}{\\sqrt2\\cdot\\sqrt2}=0$, suy ra $\\Delta_1\\perp\\Delta_2$",
  ]},
  {n:"Phương trình đường tròn",i:[
   "CT|Đường tròn tâm $I(a;b)$, bán kính $R$: $(x-a)^2+(y-b)^2=R^2$",
   "CT|Dạng khai triển $x^2+y^2-2ax-2by+c=0$ là phương trình đường tròn khi $a^2+b^2-c>0$; khi đó tâm $I(a;b)$, bán kính $R=\\sqrt{a^2+b^2-c}$",
   "VD|Ví dụ: Cho $x^2+y^2-4x+6y-3=0$. Xác định tâm, bán kính. Ta có $-2a=-4\\Rightarrow a=2$; $-2b=6\\Rightarrow b=-3$; $c=-3$; $R=\\sqrt{a^2+b^2-c}=\\sqrt{4+9-(-3)}=\\sqrt{16}=4$. Vậy tâm $I(2;-3)$, bán kính $R=4$",
   "TC|Vị trí tương đối giữa điểm $M$ và đường tròn $(I;R)$: $IM<R$ ($M$ nằm trong đường tròn); $IM=R$ ($M$ nằm trên đường tròn); $IM>R$ ($M$ nằm ngoài đường tròn)",
   "TC|Vị trí tương đối giữa hai đường tròn $(I_1;R_1)$, $(I_2;R_2)$ với $d=I_1I_2$: $d>R_1+R_2$ (ở ngoài nhau); $d=R_1+R_2$ (tiếp xúc ngoài); $|R_1-R_2|<d<R_1+R_2$ (cắt nhau tại 2 điểm); $d=|R_1-R_2|$, $R_1\\neq R_2$ (tiếp xúc trong); $d<|R_1-R_2|$ (đựng nhau)",
   "CT|Ba cách lập phương trình đường tròn thường gặp: biết tâm $I$ và tiếp xúc với $\\Delta$ cho trước thì $R=d(I,\\Delta)$; biết đường kính $AB$ thì tâm là trung điểm $AB$, $R=\\dfrac{AB}{2}$; đi qua ba điểm không thẳng hàng thì thay tọa độ vào dạng khai triển $x^2+y^2-2ax-2by+c=0$ để giải hệ tìm $a,b,c$",
   "VD|Ví dụ (đường kính): Viết phương trình đường tròn đường kính $AB$ với $A(1;1)$, $B(5;3)$. Tâm $I$ là trung điểm $AB$: $I(3;2)$; $R=\\dfrac{AB}{2}=\\dfrac{\\sqrt{(5-1)^2+(3-1)^2}}{2}=\\dfrac{\\sqrt{20}}{2}=\\sqrt5$. Phương trình: $(x-3)^2+(y-2)^2=5$",
   "VD|Ví dụ (qua ba điểm): Viết phương trình đường tròn qua $A(1;2)$, $B(5;2)$, $C(1;-4)$. Thay vào $x^2+y^2-2ax-2by+c=0$, giải hệ ba phương trình được $a=3$, $b=-1$, $c=-3$. Phương trình: $(x-3)^2+(y+1)^2=13$",
  ]},
  {n:"Phương trình tiếp tuyến của đường tròn",i:[
   "CT|Tiếp tuyến của $(C):(x-a)^2+(y-b)^2=R^2$ tại điểm $M_0(x_0;y_0)\\in(C)$: $(x_0-a)(x-a)+(y_0-b)(y-b)=R^2$",
   "CT|Điều kiện để đường thẳng $\\Delta$ tiếp xúc đường tròn tâm $I$ bán kính $R$: $d(I,\\Delta)=R$ — dùng để lập tiếp tuyến đi qua một điểm nằm ngoài đường tròn khi chưa biết tiếp điểm",
   "VD|Ví dụ: Viết tiếp tuyến của $(x-1)^2+(y-2)^2=25$ tại $M(4;6)$ (thuộc đường tròn vì $3^2+4^2=25$). Áp dụng công thức: $(4-1)(x-1)+(6-2)(y-2)=25 \\Leftrightarrow 3(x-1)+4(y-2)=25 \\Leftrightarrow 3x+4y-36=0$",
  ]},
  {n:"Elip",i:[
   "DN|Elip $(E)$ là tập hợp điểm $M$ sao cho $MF_1+MF_2=2a$ không đổi ($2a>F_1F_2=2c>0$), với $F_1,F_2$ là hai tiêu điểm",
   "CT|Phương trình chính tắc: $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ ($a>b>0$, $b^2=a^2-c^2$); tiêu điểm $F_1(-c;0)$, $F_2(c;0)$; bốn đỉnh $A_1(-a;0)$, $A_2(a;0)$, $B_1(0;-b)$, $B_2(0;b)$; trục lớn $A_1A_2=2a$, trục nhỏ $B_1B_2=2b$",
   "CT|Tâm sai $e=\\dfrac{c}{a}$ ($0<e<1$); hai đường chuẩn tương ứng hai tiêu điểm: $x=\\pm\\dfrac{a}{e}=\\pm\\dfrac{a^2}{c}$; hình chữ nhật cơ sở (ngoại tiếp elip) có các cạnh $x=\\pm a$, $y=\\pm b$",
   "LY|$e$ càng gần $0$ thì elip càng \\\"tròn\\\" (gần với đường tròn); $e$ càng gần $1$ thì elip càng \\\"dẹt\\\"",
   "VD|Ví dụ: Elip $(E): \\dfrac{x^2}{25}+\\dfrac{y^2}{16}=1$. Xác định $a,b,c$, tiêu điểm và tâm sai. $a=5$, $b=4$, $c=\\sqrt{a^2-b^2}=3$. Tiêu điểm $F_1(-3;0)$, $F_2(3;0)$; tâm sai $e=\\dfrac{c}{a}=\\dfrac{3}{5}=0{,}6$",
  ]},
  {n:"Hyperbol",i:[
   "DN|Hyperbol $(H)$ là tập hợp điểm $M$ sao cho $|MF_1-MF_2|=2a$ không đổi ($0<2a<F_1F_2=2c$)",
   "CT|Phương trình chính tắc: $\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$ ($b^2=c^2-a^2$); tiêu điểm $F_1(-c;0)$, $F_2(c;0)$; hai đỉnh $A_1(-a;0)$, $A_2(a;0)$; trục thực $2a$, trục ảo $2b$",
   "CT|Tâm sai $e=\\dfrac{c}{a}$ ($e>1$); hai tiệm cận $y=\\pm\\dfrac{b}{a}x$; hai đường chuẩn $x=\\pm\\dfrac{a}{e}=\\pm\\dfrac{a^2}{c}$",
   "VD|Ví dụ: Hyperbol $(H): \\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$. Xác định $a,b,c$, tiêu điểm, tâm sai và tiệm cận. $a=3$, $b=4$, $c=\\sqrt{a^2+b^2}=5$. Tiêu điểm $F_1(-5;0)$, $F_2(5;0)$; tâm sai $e=\\dfrac{5}{3}$; tiệm cận $y=\\pm\\dfrac{4}{3}x$",
  ]},
  {n:"Parabol",i:[
   "DN|Parabol $(P)$ là tập hợp điểm $M$ cách đều tiêu điểm $F$ và đường chuẩn $\\Delta$: $MF=d(M,\\Delta)$",
   "CT|Phương trình chính tắc: $y^2=2px$ ($p>0$); tiêu điểm $F\\left(\\dfrac{p}{2};0\\right)$; đường chuẩn $\\Delta: x=-\\dfrac{p}{2}$; đỉnh $O(0;0)$, trục đối xứng $Ox$",
   "CT|Bán kính qua tiêu điểm: với $M(x_0;y_0)\\in(P)$, khoảng cách từ $M$ đến tiêu điểm $F$ là $MF=x_0+\\dfrac{p}{2}$ (bằng khoảng cách từ $M$ đến đường chuẩn, theo định nghĩa)",
   "VD|Ví dụ: Parabol $(P): y^2=8x$ và điểm $M(2;4)\\in(P)$. Xác định $p$, tiêu điểm, đường chuẩn và tính $MF$. $2p=8\\Rightarrow p=4$; tiêu điểm $F(2;0)$; đường chuẩn $x=-2$; $MF=x_0+\\dfrac{p}{2}=2+2=4$",
  ]},
  {n:"Dạng toán về ba đường conic",i:[
   "DT|Các dạng toán thường gặp: (1) xác định các yếu tố (tiêu điểm, đỉnh, trục, tâm sai, tiệm cận, đường chuẩn) từ phương trình chính tắc cho trước; (2) viết phương trình chính tắc của elip, hyperbol hoặc parabol khi biết một số yếu tố (tiêu điểm, độ dài trục, điểm đi qua, tâm sai...)",
   "VD|Ví dụ (viết pt elip): Viết phương trình chính tắc của elip biết một tiêu điểm $F_2(4;0)$ và độ dài trục lớn bằng $10$. Ta có $c=4$, $2a=10\\Rightarrow a=5$, $b^2=a^2-c^2=25-16=9$. Phương trình: $\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$",
   "VD|Ví dụ (viết pt parabol): Viết phương trình chính tắc của parabol biết tiêu điểm $F(3;0)$. Ta có $\\dfrac{p}{2}=3\\Rightarrow p=6$. Phương trình: $y^2=12x$",
  ]},
  {n:"Dạng toán vận dụng phương pháp tọa độ trong mặt phẳng",i:[
   "DT|Các dạng toán thường gặp: viết phương trình đường thẳng qua hai điểm hoặc qua một điểm với điều kiện song song/vuông góc với đường thẳng cho trước; lập phương trình đường tròn qua các điểm hoặc thỏa điều kiện tiếp xúc; viết phương trình tiếp tuyến của đường tròn tại một điểm hoặc đi qua một điểm nằm ngoài đường tròn",
   "VD|Ví dụ: Viết phương trình đường thẳng qua $A(1;1)$ và $B(3;5)$. VTCP $\\overrightarrow{AB}=(2;4)$, chọn VTPT $\\vec{n}=(2;-1)$: phương trình $2(x-1)-1(y-1)=0 \\Leftrightarrow 2x-y-1=0$",
   "VD|Ví dụ: Viết phương trình đường thẳng $d$ qua $M(2;-1)$, song song với $\\Delta: 3x-2y+5=0$. Vì $d\\parallel\\Delta$ nên $d$ nhận $\\vec{n}=(3;-2)$ làm VTPT: $d: 3(x-2)-2(y+1)=0 \\Leftrightarrow 3x-2y-8=0$",
  ]},
 ]},
 {n:"Thống kê & Xác suất",t:[
  {n:"Các số đặc trưng của mẫu số liệu",i:[
   "CT|Số trung bình $\\bar{x}=\\dfrac{\\text{tổng các giá trị}}{n}$; số trung vị là giá trị ở giữa dãy đã sắp xếp; mốt là giá trị xuất hiện nhiều nhất",
   "CT|Khoảng biến thiên $=$ giá trị lớn nhất $-$ giá trị nhỏ nhất; khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1$",
   "CT|Phương sai $s^2=$ trung bình của bình phương độ lệch so với số trung bình; độ lệch chuẩn $s=\\sqrt{s^2}$",
  ]},
 ]},
 {n:"Công thức tính nhanh (luyện thi trắc nghiệm)",t:[
  {n:"Xét dấu tam thức bậc hai nhanh — quy tắc \"trong trái, ngoài cùng\"",i:[
   "LY|Bản chất: với tam thức $f(x)=ax^2+bx+c$ ($a\\neq0$) có $\\Delta>0$, hai nghiệm $x_1<x_2$; quy tắc nhớ nhanh \\textit{\\\"trong trái, ngoài cùng\\\"}: trong khoảng $(x_1;x_2)$, $f(x)$ trái dấu với $a$; ngoài khoảng đó (tức $x<x_1$ hoặc $x>x_2$), $f(x)$ cùng dấu với $a$ — giúp xét dấu ngay không cần lập bảng",
   "VD|Ví dụ: Xét dấu $f(x)=x^2-5x+6$. Lời giải: $f(x)=0$ có hai nghiệm $x=2,x=3$ ($a=1>0$). Theo quy tắc: trong $(2;3)$, $f(x)$ trái dấu $a$ nên $f(x)<0$; ngoài $(2;3)$, $f(x)$ cùng dấu $a$ nên $f(x)>0$. Kiểm tra nhanh: $f(2{,}5)=6{,}25-12{,}5+6=-0{,}25<0$ (đúng như dự đoán); $f(0)=6>0$, $f(4)=2>0$ (cùng dấu $a$, đúng)",
  ]},
  {n:"GTLN, GTNN của hàm bậc hai trên một đoạn — mẹo so sánh đỉnh và hai đầu mút",i:[
   "CT|Với $y=ax^2+bx+c$ trên đoạn $[m;n]$: nếu hoành độ đỉnh $x_0=-\\dfrac{b}{2a}$ thuộc $[m;n]$ thì GTLN, GTNN nằm trong ba giá trị $f(m),f(x_0),f(n)$ — so sánh trực tiếp ba số này (không cần lập bảng biến thiên đầy đủ); nếu $x_0\\notin[m;n]$ thì hàm đơn điệu trên $[m;n]$, GTLN và GTNN chỉ nằm ở hai đầu mút $f(m),f(n)$",
   "VD|Ví dụ: Tìm GTLN, GTNN của $y=x^2-4x+3$ trên đoạn $[0;5]$. Lời giải: đỉnh có $x_0=\\dfrac{4}{2}=2\\in[0;5]$. Tính $f(0)=3$, $f(2)=-1$, $f(5)=8$. So sánh ba giá trị: GTNN $=-1$ (tại $x=2$), GTLN $=8$ (tại $x=5$)",
  ]},
  {n:"Vi-ét và các biểu thức đối xứng — tính nhanh không cần giải phương trình",i:[
   "CT|Với $ax^2+bx+c=0$ ($a\\neq0$) có hai nghiệm $x_1,x_2$: đặt $S=x_1+x_2=-\\dfrac{b}{a}$, $P=x_1x_2=\\dfrac{c}{a}$; các biểu thức đối xứng thường gặp tính thẳng theo $S,P$ mà không cần biết từng nghiệm: $x_1^2+x_2^2=S^2-2P$; $|x_1-x_2|=\\sqrt{S^2-4P}$; $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}=\\dfrac{S}{P}$ ($P\\neq0$); $x_1^3+x_2^3=S^3-3PS$",
   "VD|Ví dụ: Cho $x^2-3x-4=0$ có hai nghiệm $x_1,x_2$. Tính $x_1^2+x_2^2$ mà không giải phương trình. Lời giải: $S=3$, $P=-4$; $x_1^2+x_2^2=S^2-2P=9-(-8)=17$. Kiểm tra lại bằng cách giải trực tiếp: $\\Delta=9+16=25$, hai nghiệm $x=4$ và $x=-1$; $4^2+(-1)^2=16+1=17$ — khớp kết quả",
  ]},
  {n:"Diện tích tam giác và khoảng cách bằng tọa độ — công thức định thức",i:[
   "CT|Diện tích tam giác $ABC$ biết tọa độ ba đỉnh $A(x_A;y_A)$, $B(x_B;y_B)$, $C(x_C;y_C)$: $S=\\dfrac12\\big|x_A(y_B-y_C)+x_B(y_C-y_A)+x_C(y_A-y_B)\\big|$ — tính thẳng ra diện tích mà không cần tìm độ dài các cạnh hay chiều cao",
   "VD|Ví dụ: Tính diện tích tam giác $ABC$ với $A(0;0)$, $B(4;0)$, $C(0;3)$. Lời giải: $S=\\dfrac12\\big|0\\times(0-3)+4\\times(3-0)+0\\times(0-0)\\big|=\\dfrac12\\times12=6$. Kiểm tra: đây là tam giác vuông tại $A$ với hai cạnh góc vuông $AB=4$, $AC=3$, diện tích $=\\dfrac{4\\times3}{2}=6$ — khớp kết quả",
  ]},
  {n:"Xét vị trí tương đối hai đường thẳng nhanh bằng tỉ số hệ số",i:[
   "CT|Với $\\Delta_1: a_1x+b_1y+c_1=0$, $\\Delta_2: a_2x+b_2y+c_2=0$ ($a_2,b_2,c_2\\neq0$): chỉ cần so sánh ba tỉ số $\\dfrac{a_1}{a_2}$, $\\dfrac{b_1}{b_2}$, $\\dfrac{c_1}{c_2}$ để kết luận ngay, không cần giải hệ phương trình: cắt nhau nếu $\\dfrac{a_1}{a_2}\\neq\\dfrac{b_1}{b_2}$; song song nếu $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}\\neq\\dfrac{c_1}{c_2}$; trùng nhau nếu cả ba tỉ số bằng nhau",
   "VD|Ví dụ: Xét vị trí tương đối của $\\Delta_1: 2x-3y+1=0$ và $\\Delta_2: 4x-6y+5=0$. Lời giải: $\\dfrac{a_1}{a_2}=\\dfrac{2}{4}=\\dfrac12$, $\\dfrac{b_1}{b_2}=\\dfrac{-3}{-6}=\\dfrac12$, $\\dfrac{c_1}{c_2}=\\dfrac{1}{5}$. Vì $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}\\neq\\dfrac{c_1}{c_2}$ nên hai đường thẳng song song với nhau",
  ]},
  {n:"Bán kính đường tròn ngoại tiếp tam giác — công thức nhanh R = abc/4S",i:[
   "CT|Bán kính đường tròn ngoại tiếp tam giác có ba cạnh $a,b,c$ và diện tích $S$: $R=\\dfrac{abc}{4S}$ — khi biết tọa độ ba đỉnh, tính nhanh $S$ bằng công thức định thức ở trên rồi thay vào, không cần dùng định lí sin từng góc",
   "VD|Ví dụ: Tam giác có ba cạnh $a=3$, $b=4$, $c=5$. Tính bán kính đường tròn ngoại tiếp. Lời giải: nửa chu vi $p=\\dfrac{3+4+5}{2}=6$; diện tích (Heron) $S=\\sqrt{6(6-3)(6-4)(6-5)}=\\sqrt{36}=6$. Vậy $R=\\dfrac{3\\times4\\times5}{4\\times6}=\\dfrac{60}{24}=2{,}5$. Kiểm tra: đây là tam giác vuông (vì $3^2+4^2=5^2$) nên $R=\\dfrac{\\text{cạnh huyền}}{2}=\\dfrac{5}{2}=2{,}5$ — khớp kết quả",
  ]},
  {n:"Phương trình đường thẳng qua hai điểm — công thức đoạn chắn",i:[
   "CT|Đường thẳng cắt trục hoành tại $A(a;0)$ và trục tung tại $B(0;b)$ ($a,b\\neq0$) có phương trình đoạn chắn: $\\dfrac{x}{a}+\\dfrac{y}{b}=1$ — viết thẳng ra phương trình khi biết hai giao điểm với hai trục tọa độ mà không cần lập vectơ pháp tuyến",
   "VD|Ví dụ: Viết phương trình đường thẳng đi qua $A(2;0)$ và $B(0;3)$. Lời giải: áp dụng công thức đoạn chắn: $\\dfrac{x}{2}+\\dfrac{y}{3}=1$, quy đồng và khử mẫu: $3x+2y-6=0$. Kiểm tra: thay $A(2;0)$: $3\\times2+2\\times0-6=0$ (đúng); thay $B(0;3)$: $3\\times0+2\\times3-6=0$ (đúng)",
  ]},
  {n:"Mẹo dùng máy tính cầm tay (Casio) giải nhanh trắc nghiệm",i:[
   "DT|Kỹ thuật SHIFT SOLVE: dùng để tìm nghiệm gần đúng của một phương trình bất kỳ theo biến $X$, kể cả phương trình phức tạp không tiện giải tay. Cách làm: nhập biểu thức phương trình vào máy (dùng phím ALPHA để nhập $X$), bấm SHIFT SOLVE, máy hỏi giá trị dò ban đầu — nhập một số bất kỳ rồi bấm $=$, máy trả về một nghiệm gần đúng; muốn tìm nghiệm còn lại (nếu phương trình bậc hai trở lên), lặp lại với giá trị dò khác (ví dụ số âm hoặc số lớn hơn nghiệm vừa tìm)",
   "DT|Kỹ thuật MODE 7 (TABLE): dùng để lập nhanh bảng giá trị của hàm số $f(X)$ tại nhiều điểm liên tiếp, từ đó xét dấu, xét tính đồng biến/nghịch biến, hoặc so sánh giá trị hàm số tại các mốc mà không cần tính tay từng điểm — rất hữu ích khi trắc nghiệm hỏi về khoảng đồng biến, GTLN–GTNN hay dấu của biểu thức",
   "DT|Phương pháp CALC — thử đáp án: khi đề trắc nghiệm cho sẵn 4 phương án, thay vì giải chi tiết, có thể nhập biểu thức của đề vào máy rồi dùng phím CALC để thay lần lượt giá trị của từng đáp án vào, đáp án nào cho kết quả đúng như yêu cầu đề bài (bằng $0$, thỏa mãn bất đẳng thức,…) thì đó là đáp án cần chọn — tiết kiệm đáng kể thời gian làm bài so với giải phương trình từ đầu",
   "VD|Ví dụ (SHIFT SOLVE): Giải nhanh phương trình $2x^2-5x-3=0$ bằng máy tính. Lời giải: nhập biểu thức $2X^2-5X-3$, bấm SHIFT SOLVE với giá trị dò $X=0$, máy cho nghiệm $X=-0{,}5$; dò lại với giá trị lớn hơn (ví dụ $X=3$), máy cho nghiệm $X=3$. Vậy phương trình có hai nghiệm $x=-0{,}5$ và $x=3$ — khớp với cách giải bằng công thức nghiệm ($\\Delta=49$, $x=\\dfrac{5\\pm7}{4}$)",
  ]},
 ]},
]});
