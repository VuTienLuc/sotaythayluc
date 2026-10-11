// Lớp 12 — 3 mạch, 17 bài, 69 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:12,l:"Lớp 12",c:"#2a9d8f",s:[
 {n:"Đại số & Giải tích",t:[
  {n:"Tính đơn điệu và cực trị của hàm số",i:[
   "TC|Cho hàm số $f$ có đạo hàm trên khoảng $(a;b)$: nếu $f'(x)>0$ với mọi $x\\in(a;b)$ thì $f$ đồng biến trên $(a;b)$; nếu $f'(x)<0$ với mọi $x\\in(a;b)$ thì $f$ nghịch biến trên $(a;b)$; nếu $f'(x)=0$ với mọi $x\\in(a;b)$ thì $f$ không đổi trên $(a;b)$",
   "DT|Quy tắc xét tính đơn điệu: (1) tìm tập xác định; (2) tính $f'(x)$, tìm các điểm mà $f'(x)=0$ hoặc $f'(x)$ không xác định; (3) lập bảng xét dấu $f'(x)$; (4) kết luận các khoảng đồng biến, nghịch biến",
   "DN|$x_0$ là điểm cực đại (cực tiểu) của hàm số $f$ nếu tồn tại khoảng $(a;b)$ chứa $x_0$ sao cho $f(x)<f(x_0)$ (tương ứng $f(x)>f(x_0)$) với mọi $x\\in(a;b)\\setminus\\{x_0\\}$; khi đó $f(x_0)$ gọi là giá trị cực đại (cực tiểu)",
   "DH|Định lí (dấu hiệu qua đạo hàm cấp một): nếu $f'(x)$ đổi dấu từ dương sang âm khi $x$ qua $x_0$ thì $x_0$ là điểm cực đại; nếu $f'(x)$ đổi dấu từ âm sang dương khi $x$ qua $x_0$ thì $x_0$ là điểm cực tiểu; nếu $f'(x)$ không đổi dấu thì $x_0$ không phải điểm cực trị",
   "CT|Dấu hiệu qua đạo hàm cấp hai (khi $f''(x_0)\\neq 0$): nếu $f'(x_0)=0$ và $f''(x_0)<0$ thì $x_0$ là điểm cực đại; nếu $f'(x_0)=0$ và $f''(x_0)>0$ thì $x_0$ là điểm cực tiểu",
   "VD|Ví dụ: Tìm khoảng đơn điệu và cực trị của $y=x^3-3x^2-9x+5$. Lời giải: $y'=3x^2-6x-9=3(x-3)(x+1)$, $y'=0\\Leftrightarrow x=-1$ hoặc $x=3$. Lập bảng xét dấu: $y'>0$ trên $(-\\infty;-1)$ và $(3;+\\infty)$; $y'<0$ trên $(-1;3)$. Vậy hàm số đồng biến trên $(-\\infty;-1)$ và $(3;+\\infty)$, nghịch biến trên $(-1;3)$; đạt cực đại tại $x=-1$ với $y_{CĐ}=10$, đạt cực tiểu tại $x=3$ với $y_{CT}=-22$",
  ]},
  {n:"Giá trị lớn nhất, giá trị nhỏ nhất của hàm số",i:[
   "DN|$M$ là giá trị lớn nhất của $f$ trên $D$ nếu $f(x)\\le M$ với mọi $x\\in D$ và tồn tại $x_0\\in D$ để $f(x_0)=M$, kí hiệu $M=\\max_D f(x)$; định nghĩa tương tự cho giá trị nhỏ nhất $\\min_D f(x)$",
   "DT|Quy tắc tìm GTLN, GTNN của hàm số liên tục trên đoạn $[a;b]$: tính $f'(x)$; tìm các điểm $x_1,x_2,\\ldots,x_n\\in(a;b)$ mà $f'(x_i)=0$ hoặc $f'(x_i)$ không xác định; tính $f(a),f(b),f(x_1),\\ldots,f(x_n)$; số lớn nhất trong các giá trị đó là GTLN, số nhỏ nhất là GTNN",
   "LY|Với hàm số liên tục trên một khoảng (không phải đoạn đóng) hoặc trên toàn trục số, dùng bảng biến thiên (dựa vào cực trị và giới hạn tại các đầu mút) để kết luận GTLN, GTNN — có thể không tồn tại",
   "VD|Ví dụ: Tìm GTLN, GTNN của $f(x)=x^3-3x+2$ trên đoạn $[-2;2]$. Lời giải: $f'(x)=3x^2-3=0\\Leftrightarrow x=\\pm1$ (thuộc $(-2;2)$). Tính $f(-2)=0$, $f(-1)=4$, $f(1)=0$, $f(2)=4$. Vậy $\\max_{[-2;2]}f(x)=4$ (tại $x=-1$ hoặc $x=2$), $\\min_{[-2;2]}f(x)=0$ (tại $x=-2$ hoặc $x=1$)",
  ]},
  {n:"Đường tiệm cận của đồ thị hàm số",i:[
   "DN|Đường thẳng $y=L$ là tiệm cận ngang của đồ thị hàm số $y=f(x)$ nếu $\\displaystyle\\lim_{x\\to+\\infty}f(x)=L$ hoặc $\\displaystyle\\lim_{x\\to-\\infty}f(x)=L$",
   "DN|Đường thẳng $x=x_0$ là tiệm cận đứng của đồ thị hàm số $y=f(x)$ nếu ít nhất một trong các giới hạn một phía $\\displaystyle\\lim_{x\\to x_0^+}f(x)$, $\\displaystyle\\lim_{x\\to x_0^-}f(x)$ bằng $+\\infty$ hoặc $-\\infty$",
   "DN|Đường thẳng $y=ax+b$ ($a\\neq 0$) là tiệm cận xiên của đồ thị hàm số $y=f(x)$ nếu $\\displaystyle\\lim_{x\\to+\\infty}[f(x)-(ax+b)]=0$ hoặc $\\displaystyle\\lim_{x\\to-\\infty}[f(x)-(ax+b)]=0$",
   "CT|Cách tìm hệ số của tiệm cận xiên: $a=\\displaystyle\\lim_{x\\to\\pm\\infty}\\dfrac{f(x)}{x}$, $b=\\displaystyle\\lim_{x\\to\\pm\\infty}[f(x)-ax]$",
   "VD|Ví dụ: Tìm các đường tiệm cận của đồ thị $y=\\dfrac{x^2+1}{x}=x+\\dfrac{1}{x}$. Lời giải: Vì $\\displaystyle\\lim_{x\\to 0^+}y=+\\infty$ nên $x=0$ là tiệm cận đứng. Vì $y-x=\\dfrac{1}{x}\\to 0$ khi $x\\to\\pm\\infty$ nên $y=x$ là tiệm cận xiên (kiểm tra bằng công thức: $a=\\lim\\dfrac{f(x)}{x}=1$, $b=\\lim[f(x)-x]=\\lim\\dfrac{1}{x}=0$)",
  ]},
  {n:"Khảo sát sự biến thiên và vẽ đồ thị hàm số",i:[
   "LY|Các bước khảo sát hàm số: (1) tìm tập xác định; (2) xét sự biến thiên: tính $y'$, tìm điểm tới hạn, xét dấu $y'$, tìm cực trị, tính giới hạn tại vô cực (và tiệm cận nếu có), lập bảng biến thiên; (3) vẽ đồ thị: xác định giao điểm với $Ox,Oy$ và một số điểm đặc biệt, dựa vào bảng biến thiên và tính đối xứng để vẽ",
   "DN|Đồ thị hàm bậc ba $y=ax^3+bx^2+cx+d$ ($a\\neq 0$) nhận điểm uốn làm tâm đối xứng; có hình dạng chữ N khi $a>0$ và chữ N ngược khi $a<0$ (có thể có 0 hoặc 2 điểm cực trị)",
   "DN|Đồ thị hàm trùng phương $y=ax^4+bx^2+c$ ($a\\neq 0$) nhận trục $Oy$ làm trục đối xứng; có 1 hoặc 3 điểm cực trị tùy dấu của $a$ và $b$",
   "DN|Đồ thị hàm phân thức $y=\\dfrac{ax+b}{cx+d}$ ($c\\neq 0$, $ad-bc\\neq 0$) có tiệm cận đứng $x=-\\dfrac{d}{c}$, tiệm cận ngang $y=\\dfrac{a}{c}$, và nhận giao điểm hai đường tiệm cận làm tâm đối xứng",
   "VD|Ví dụ: Khảo sát và vẽ đồ thị hàm số $y=x^3-3x^2-9x+5$ (tiếp tục ví dụ ở mục Đơn điệu và cực trị). TXĐ: $\\mathbb{R}$. Sự biến thiên: đồng biến trên $(-\\infty;-1)$, $(3;+\\infty)$; nghịch biến trên $(-1;3)$; cực đại $(-1;10)$, cực tiểu $(3;-22)$; $\\displaystyle\\lim_{x\\to-\\infty}y=-\\infty$, $\\displaystyle\\lim_{x\\to+\\infty}y=+\\infty$ (không có tiệm cận vì là hàm đa thức). Đồ thị cắt $Oy$ tại $(0;5)$, có dạng chữ N vì hệ số $a=1>0$",
  ]},
  {n:"Ứng dụng đạo hàm giải quyết vấn đề thực tiễn",i:[
   "DT|Các bước giải bài toán tối ưu bằng đạo hàm: (1) chọn ẩn số và đặt điều kiện cho ẩn; (2) biểu diễn đại lượng cần tìm GTLN/GTNN thành một hàm số theo ẩn đã chọn; (3) tìm GTLN/GTNN của hàm số đó trên miền xác định phù hợp (dùng bảng biến thiên); (4) đối chiếu điều kiện và kết luận",
   "VD|Ví dụ: Một người muốn rào một mảnh vườn hình chữ nhật ven sông (không rào cạnh giáp sông) với tổng chiều dài rào là $100$ m. Tìm kích thước để diện tích lớn nhất. Lời giải: gọi $x$ (m) là chiều dài 2 cạnh vuông góc bờ sông ($0<x<50$), cạnh song song bờ sông là $100-2x$. Diện tích $S(x)=x(100-2x)=100x-2x^2$. $S'(x)=100-4x=0\\Leftrightarrow x=25$; $S''(x)=-4<0$ nên $x=25$ là điểm cực đại. Vậy kích thước tối ưu là $25$ m $\\times$ $50$ m, diện tích lớn nhất $S=1250$ m$^2$",
   "VD|Ví dụ: Từ một tấm tôn hình vuông cạnh $12$ cm, người ta cắt bỏ 4 hình vuông cạnh $x$ ở 4 góc rồi gấp lên thành một hình hộp không nắp. Tìm $x$ để thể tích hộp lớn nhất. Lời giải: điều kiện $0<x<6$. Thể tích $V(x)=x(12-2x)^2$. $V'(x)=(12-2x)^2-4x(12-2x)=(12-2x)(12-6x)$; trên $(0;6)$, $V'(x)=0\\Leftrightarrow x=2$. Xét dấu: $V'(x)>0$ trên $(0;2)$, $V'(x)<0$ trên $(2;6)$ nên $x=2$ là điểm cực đại. Vậy $x=2$ cm cho thể tích lớn nhất $V=2\\cdot 8^2=128$ cm$^3$",
  ]},
  {n:"Nguyên hàm",i:[
   "DN|$F(x)$ là một nguyên hàm của $f(x)$ trên $K$ nếu $F'(x)=f(x)$ với mọi $x\\in K$",
   "TC|Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì họ tất cả các nguyên hàm của $f(x)$ trên $K$ là $F(x)+C$ ($C$ là hằng số tùy ý), kí hiệu $\\displaystyle\\int f(x)\\,dx=F(x)+C$",
   "TC|Tính chất: $\\displaystyle\\int [f(x)\\pm g(x)]\\,dx=\\int f(x)\\,dx\\pm\\int g(x)\\,dx$; $\\displaystyle\\int kf(x)\\,dx=k\\int f(x)\\,dx$ ($k\\neq 0$ là hằng số)",
   "CT|Bảng nguyên hàm cơ bản: $\\displaystyle\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C$ ($n\\neq -1$); $\\displaystyle\\int \\dfrac{1}{x}\\,dx=\\ln|x|+C$; $\\displaystyle\\int e^x\\,dx=e^x+C$; $\\displaystyle\\int a^x\\,dx=\\dfrac{a^x}{\\ln a}+C$ ($0<a\\neq 1$); $\\displaystyle\\int \\cos x\\,dx=\\sin x+C$; $\\displaystyle\\int \\sin x\\,dx=-\\cos x+C$; $\\displaystyle\\int \\dfrac{1}{\\cos^2x}\\,dx=\\tan x+C$; $\\displaystyle\\int \\dfrac{1}{\\sin^2x}\\,dx=-\\cot x+C$",
   "VD|Ví dụ: Tìm nguyên hàm của $f(x)=3x^2-4x+5$. Lời giải: $\\displaystyle\\int(3x^2-4x+5)\\,dx=3\\cdot\\dfrac{x^3}{3}-4\\cdot\\dfrac{x^2}{2}+5x+C=x^3-2x^2+5x+C$",
  ]},
  {n:"Nguyên hàm của hàm hợp. Phương pháp đổi biến số",i:[
   "CT|Nguyên hàm của hàm hợp (với $a\\neq 0$): $\\displaystyle\\int (ax+b)^n\\,dx=\\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$ ($n\\neq -1$); $\\displaystyle\\int e^{ax+b}\\,dx=\\dfrac{e^{ax+b}}{a}+C$; $\\displaystyle\\int \\sin(ax+b)\\,dx=-\\dfrac{\\cos(ax+b)}{a}+C$; $\\displaystyle\\int \\cos(ax+b)\\,dx=\\dfrac{\\sin(ax+b)}{a}+C$",
   "DT|Phương pháp đổi biến số: để tính $\\displaystyle\\int f(u(x))\\cdot u'(x)\\,dx$, đặt $u=u(x)$, khi đó $du=u'(x)\\,dx$ và tích phân trở thành $\\displaystyle\\int f(u)\\,du$; tính xong rồi thay $u$ trở lại theo $x$",
   "VD|Ví dụ: Tính $\\displaystyle\\int x(x^2+1)^5\\,dx$. Lời giải: đặt $u=x^2+1\\Rightarrow du=2x\\,dx\\Rightarrow x\\,dx=\\dfrac{du}{2}$. Khi đó $\\displaystyle\\int x(x^2+1)^5\\,dx=\\int u^5\\cdot\\dfrac{du}{2}=\\dfrac{u^6}{12}+C=\\dfrac{(x^2+1)^6}{12}+C$",
  ]},
  {n:"Nguyên hàm từng phần",i:[
   "CT|Công thức nguyên hàm từng phần: $\\displaystyle\\int u\\,dv=uv-\\int v\\,du$",
   "LY|Quy tắc chọn $u,dv$: nếu biểu thức có $\\ln x$ thì đặt $u=\\ln x$; nếu là tích của đa thức với $e^x,\\sin x,\\cos x$ thì đặt $u$ là đa thức, $dv$ là phần còn lại (để bậc đa thức giảm dần sau mỗi lần lấy nguyên hàm từng phần)",
   "VD|Ví dụ: Tính $\\displaystyle\\int xe^x\\,dx$. Lời giải: đặt $u=x,\\ dv=e^x\\,dx\\Rightarrow du=dx,\\ v=e^x$. Khi đó $\\displaystyle\\int xe^x\\,dx=xe^x-\\int e^x\\,dx=xe^x-e^x+C=e^x(x-1)+C$",
   "VD|Ví dụ: Tính $\\displaystyle\\int x\\ln x\\,dx$. Lời giải: đặt $u=\\ln x,\\ dv=x\\,dx\\Rightarrow du=\\dfrac{dx}{x},\\ v=\\dfrac{x^2}{2}$. Khi đó $\\displaystyle\\int x\\ln x\\,dx=\\dfrac{x^2}{2}\\ln x-\\int\\dfrac{x^2}{2}\\cdot\\dfrac{1}{x}\\,dx=\\dfrac{x^2}{2}\\ln x-\\dfrac{x^2}{4}+C$",
  ]},
  {n:"Tích phân",i:[
   "DN|Công thức Newton–Leibniz: nếu $F$ là một nguyên hàm của $f$ trên đoạn $[a;b]$ thì $\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$",
   "TC|Tính chất tích phân: $\\displaystyle\\int_a^a f(x)\\,dx=0$; $\\displaystyle\\int_a^b f(x)\\,dx=-\\int_b^a f(x)\\,dx$; $\\displaystyle\\int_a^b[f(x)\\pm g(x)]\\,dx=\\int_a^b f(x)\\,dx\\pm\\int_a^b g(x)\\,dx$; $\\displaystyle\\int_a^b kf(x)\\,dx=k\\int_a^b f(x)\\,dx$; $\\displaystyle\\int_a^b f(x)\\,dx=\\int_a^c f(x)\\,dx+\\int_c^b f(x)\\,dx$ ($a<c<b$)",
   "DT|Đổi biến số và từng phần cho tích phân xác định: làm như với nguyên hàm nhưng đổi luôn cận theo biến mới (đổi biến) hoặc áp dụng trực tiếp công thức $\\displaystyle\\int_a^b u\\,dv=\\Big[uv\\Big]_a^b-\\int_a^b v\\,du$ (từng phần)",
   "VD|Ví dụ: Tính $\\displaystyle\\int_0^1(3x^2-2x+1)\\,dx$. Lời giải: $\\displaystyle\\int_0^1(3x^2-2x+1)\\,dx=\\Big[x^3-x^2+x\\Big]_0^1=(1-1+1)-0=1$",
   "VD|Ví dụ (đổi biến, đổi cận): Tính $\\displaystyle\\int_0^1 x(x^2+1)^5\\,dx$. Lời giải: đặt $u=x^2+1$; khi $x=0$ thì $u=1$, khi $x=1$ thì $u=2$; $x\\,dx=\\dfrac{du}{2}$. $\\displaystyle\\int_0^1 x(x^2+1)^5\\,dx=\\int_1^2 u^5\\cdot\\dfrac{du}{2}=\\Big[\\dfrac{u^6}{12}\\Big]_1^2=\\dfrac{64-1}{12}=\\dfrac{21}{4}$",
  ]},
  {n:"Ứng dụng hình học của tích phân",i:[
   "CT|Diện tích hình phẳng giới hạn bởi $y=f(x)$, trục $Ox$, $x=a$, $x=b$: $S=\\displaystyle\\int_a^b |f(x)|\\,dx$",
   "CT|Diện tích hình phẳng giới hạn bởi 2 đồ thị $y=f(x)$, $y=g(x)$ và $x=a,\\ x=b$: $S=\\displaystyle\\int_a^b |f(x)-g(x)|\\,dx$",
   "CT|Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y=f(x)$, trục $Ox$, $x=a$, $x=b$ quanh trục $Ox$: $V=\\pi\\displaystyle\\int_a^b [f(x)]^2\\,dx$",
   "CT|Thể tích khối tròn xoay khi quay miền giới hạn bởi $y=f(x)$, $y=g(x)$ ($f(x)\\ge g(x)\\ge 0$) trên $[a;b]$ quanh trục $Ox$: $V=\\pi\\displaystyle\\int_a^b \\big([f(x)]^2-[g(x)]^2\\big)\\,dx$",
   "VD|Ví dụ: Tính diện tích hình phẳng giới hạn bởi $y=x^2-1$, trục $Ox$, $x=0$, $x=2$. Lời giải: $x^2-1=0$ tại $x=1\\in[0;2]$; trên $[0;1]$ có $x^2-1\\le 0$, trên $[1;2]$ có $x^2-1\\ge 0$. $S=\\displaystyle\\int_0^1(1-x^2)\\,dx+\\int_1^2(x^2-1)\\,dx=\\dfrac{2}{3}+\\dfrac{4}{3}=2$",
   "VD|Ví dụ: Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y=\\sqrt{x}$, trục $Ox$, $x=0$, $x=4$ quanh trục $Ox$. Lời giải: $V=\\pi\\displaystyle\\int_0^4(\\sqrt{x})^2\\,dx=\\pi\\int_0^4 x\\,dx=\\pi\\Big[\\dfrac{x^2}{2}\\Big]_0^4=8\\pi$",
  ]},
  {n:"Phương trình, bất phương trình mũ và lôgarit",i:[
   "CT|$a^x=a^m \\Leftrightarrow x=m$ ($0<a\\neq 1$); $\\log_ax=m \\Leftrightarrow x=a^m$ ($0<a\\neq 1$, $x>0$)",
   "LY|Khi giải bất phương trình mũ/lôgarit: nếu $a>1$ giữ nguyên chiều bất đẳng thức, nếu $0<a<1$ thì đổi chiều",
  ]},
 ]},
 {n:"Hình học & Đo lường",t:[
  {n:"Vectơ và hệ tọa độ trong không gian Oxyz",i:[
   "CT|Với $A(x_1;y_1;z_1)$, $B(x_2;y_2;z_2)$: $\\overrightarrow{AB}=(x_2-x_1;y_2-y_1;z_2-z_1)$; $AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$",
   "CT|Tích vô hướng $\\vec{u}\\cdot\\vec{v}=x_1x_2+y_1y_2+z_1z_2$; $\\vec{u}\\perp\\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$",
   "CT|Tích có hướng $[\\vec{u},\\vec{v}]$ vuông góc với cả $\\vec{u}$ và $\\vec{v}$, dùng để tìm vectơ pháp tuyến của mặt phẳng",
  ]},
  {n:"Phương trình mặt phẳng, đường thẳng, mặt cầu",i:[
   "CT|Phương trình mặt phẳng qua điểm có vectơ pháp tuyến $\\vec{n}=(A;B;C)$: $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$",
   "CT|Phương trình mặt cầu tâm $I(a;b;c)$ bán kính $R$: $(x-a)^2+(y-b)^2+(z-c)^2=R^2$",
   "CT|Khoảng cách từ điểm $M_0$ đến mặt phẳng $Ax+By+Cz+D=0$: $d=\\dfrac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$",
  ]},
 ]},
 {n:"Thống kê & Xác suất",t:[
  {n:"Xác suất có điều kiện — bản chất và công thức",i:[
   "LY|Hiểu bản chất: $P(A|B)$ trả lời câu hỏi \\\"Biết chắc chắn $B$ đã xảy ra rồi, thì khả năng $A$ cũng xảy ra là bao nhiêu?\\\". Về bản chất ta không xét cả không gian mẫu $\\Omega$ nữa mà thu hẹp lại chỉ còn các kết quả thuộc $B$ (vì $B$ chắc chắn xảy ra), rồi tính xem trong phạm vi thu hẹp đó, tỉ lệ các kết quả thuộc $A$ là bao nhiêu",
   "DN|Công thức: $P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$ (với $P(B)>0$) — đọc là \\\"xác suất của $A$ với điều kiện $B$\\\"",
   "VD|Ví dụ (thấy rõ bản chất bằng đếm trực tiếp): Lớp có $40$ học sinh gồm $25$ nam, $15$ nữ; trong đó có $15$ nam và $9$ nữ thích môn Toán. Chọn ngẫu nhiên $1$ học sinh, biết đó là nam, tính xác suất học sinh đó thích Toán. Lời giải (đếm trực tiếp — thu hẹp không gian mẫu về $25$ bạn nam): trong $25$ nam có $15$ bạn thích Toán nên $P(\\text{thích Toán}|\\text{nam})=\\dfrac{15}{25}=0{,}6$. Kiểm tra lại bằng công thức: gọi $A$: \\\"thích Toán\\\", $B$: \\\"là nam\\\"; $P(B)=\\dfrac{25}{40}$, $P(A\\cap B)=\\dfrac{15}{40}$ nên $P(A|B)=\\dfrac{15/40}{25/40}=\\dfrac{15}{25}=0{,}6$ — khớp với cách đếm trực tiếp",
   "LY|Lưu ý (học sinh rất hay nhầm): $P(A|B)$ và $P(B|A)$ là hai đại lượng khác nhau. Vẫn với ví dụ trên, nếu hỏi ngược lại \\\"biết học sinh thích Toán, tính xác suất đó là nam\\\" thì $P(B|A)=\\dfrac{15}{15+9}=\\dfrac{15}{24}=0{,}625$ — khác với $P(A|B)=0{,}6$ ở trên, vì mẫu số (không gian mẫu thu hẹp) là khác nhau: một bên thu hẹp theo \\\"nam\\\" ($25$ bạn), một bên thu hẹp theo \\\"thích Toán\\\" ($24$ bạn)",
   "TC|Tính chất: $0\\le P(A|B)\\le 1$; $P(\\overline{A}|B)=1-P(A|B)$; nếu $A,B$ độc lập thì $P(A|B)=P(A)$ (biết $B$ xảy ra hay không cũng không làm thay đổi khả năng xảy ra của $A$)",
  ]},
  {n:"Công thức nhân xác suất. Sơ đồ hình cây",i:[
   "CT|Từ định nghĩa xác suất có điều kiện suy ra công thức nhân xác suất: $P(A\\cap B)=P(B)\\cdot P(A|B)=P(A)\\cdot P(B|A)$",
   "LY|Sơ đồ hình cây (công cụ trực quan nhất để giải các bài toán loại này): vẽ từ gốc, tầng thứ nhất tách thành các nhánh ứng với từng trường hợp có thể xảy ra trước (ví dụ nhánh $B$ và nhánh $\\overline{B}$), mỗi nhánh ghi xác suất $P(B)$, $P(\\overline{B})$; từ đầu mỗi nhánh đó lại tách tiếp thành các nhánh con (ví dụ $A$ và $\\overline{A}$), ghi các xác suất có điều kiện tương ứng $P(A|B)$, $P(\\overline{A}|B)$,... Xác suất của cả một đường đi từ gốc đến 1 nhánh lá bằng tích các xác suất ghi trên đường đi đó (chính là công thức nhân ở trên)",
   "VD|Ví dụ: Một nhà máy có 2 dây chuyền sản xuất, dây chuyền I chiếm $70\\%$ sản lượng, dây chuyền II chiếm $30\\%$; tỉ lệ sản phẩm lỗi của dây chuyền I là $1\\%$, của dây chuyền II là $6\\%$. Vẽ sơ đồ cây: tầng 1 gồm 2 nhánh \\\"dây chuyền I\\\" ($0{,}7$) và \\\"dây chuyền II\\\" ($0{,}3$); từ mỗi nhánh tách tiếp thành \\\"lỗi\\\" và \\\"không lỗi\\\". Xác suất lấy được sản phẩm vừa do dây chuyền I sản xuất vừa bị lỗi là tích 2 xác suất trên đường đi đó: $P(\\text{I}\\cap\\text{lỗi})=0{,}7\\times 0{,}01=0{,}007$",
  ]},
  {n:"Công thức xác suất toàn phần",i:[
   "LY|Hiểu bản chất: nếu biến cố $A$ có thể \\\"xảy ra theo nhiều con đường khác nhau\\\" (chẳng hạn sản phẩm lỗi có thể đến từ dây chuyền I hoặc dây chuyền II), thì xác suất của $A$ chính là tổng xác suất của $A$ theo từng con đường — tức cộng xác suất của tất cả các nhánh (trong sơ đồ cây) cùng dẫn đến $A$",
   "CT|Công thức xác suất toàn phần (với $B,\\overline B$): $P(A)=P(B)\\cdot P(A|B)+P(\\overline{B})\\cdot P(A|\\overline{B})$. Mở rộng cho một hệ đầy đủ các biến cố $B_1,B_2,\\ldots,B_n$ (đôi một xung khắc, hợp bằng $\\Omega$): $P(A)=\\displaystyle\\sum_{i=1}^n P(B_i)\\cdot P(A|B_i)$",
   "DT|Các bước áp dụng: (1) xác định hệ đầy đủ các \\\"nguyên nhân\\\" có thể dẫn đến $A$ (ví dụ: sản phẩm do dây chuyền nào sản xuất); (2) tìm xác suất mỗi nguyên nhân; (3) tìm xác suất có điều kiện của $A$ theo từng nguyên nhân; (4) nhân từng cặp rồi cộng lại theo công thức xác suất toàn phần (chính là cộng xác suất các nhánh của sơ đồ cây dẫn tới $A$)",
   "VD|Ví dụ (tiếp ví dụ nhà máy ở mục trên): Tính xác suất lấy ngẫu nhiên 1 sản phẩm của nhà máy thì bị lỗi. Lời giải: gọi $B$: \\\"sản phẩm do dây chuyền I\\\", $A$: \\\"sản phẩm bị lỗi\\\". $P(A)=P(B)P(A|B)+P(\\overline B)P(A|\\overline B)=0{,}7\\times 0{,}01+0{,}3\\times 0{,}06=0{,}007+0{,}018=0{,}025$. Vậy tỉ lệ sản phẩm lỗi của cả nhà máy là $2{,}5\\%$",
  ]},
  {n:"Công thức Bayes",i:[
   "LY|Hiểu bản chất: công thức Bayes dùng để \\\"suy ngược\\\". Xác suất toàn phần đi theo chiều thuận: biết nguyên nhân, tính xác suất kết quả; còn Bayes đi theo chiều ngược: đã thấy kết quả $A$ xảy ra rồi, hỏi ngược lại xem nó có khả năng đến từ nguyên nhân nào (như bài toán \\\"biết bệnh nhân xét nghiệm dương tính, tính xác suất bệnh nhân thực sự mắc bệnh\\\")",
   "CT|Công thức Bayes: $P(B|A)=\\dfrac{P(B)\\cdot P(A|B)}{P(A)}$, trong đó $P(A)$ thường được tính trước bằng công thức xác suất toàn phần",
   "VD|Ví dụ (tiếp ví dụ nhà máy): Lấy ngẫu nhiên 1 sản phẩm và thấy nó bị lỗi. Tính xác suất sản phẩm đó do dây chuyền II sản xuất. Lời giải: $P(\\overline B|A)=\\dfrac{P(\\overline B)\\cdot P(A|\\overline B)}{P(A)}=\\dfrac{0{,}3\\times 0{,}06}{0{,}025}=\\dfrac{0{,}018}{0{,}025}=0{,}72$. Nhận xét thú vị: ban đầu dây chuyền II chỉ chiếm $30\\%$ sản lượng, nhưng khi đã biết sản phẩm bị lỗi thì khả năng nó đến từ dây chuyền II tăng vọt lên $72\\%$ — vì dây chuyền II có tỉ lệ lỗi cao hơn hẳn (thông tin \\\"bị lỗi\\\" đã làm thay đổi đáng kể nhận định ban đầu, đây chính là ý nghĩa cốt lõi của suy luận Bayes)",
  ]},
 ]},
]});
