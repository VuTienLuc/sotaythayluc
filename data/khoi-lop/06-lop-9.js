// Lớp 9 — 3 mạch, 29 bài, 105 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:9,l:"Lớp 9",c:"#457b9d",s:[
 {n:"Đại số",t:[
  {n:"Căn thức",i:[
   "DN|Căn bậc hai số học của $a\\geq 0$ là $\\sqrt{a}$ (không âm); căn bậc ba của $a$, kí hiệu $\\sqrt[3]{a}$, xác định với mọi $a$",
   "CT|$\\sqrt{a^2}=|a|$; $\\sqrt{ab}=\\sqrt{a}\\cdot\\sqrt{b}$ ($a,b\\geq 0$); $\\sqrt{\\dfrac{a}{b}}=\\dfrac{\\sqrt{a}}{\\sqrt{b}}$ ($a\\geq 0$, $b>0$)",
   "CT|Trục căn thức ở mẫu: nhân cả tử và mẫu với biểu thức liên hợp để khử căn ở mẫu",
  ]},
  {n:"Hệ hai phương trình bậc nhất hai ẩn",i:[
   "DN|Phương trình bậc nhất hai ẩn: $ax+by=c$; hệ hai phương trình bậc nhất hai ẩn gồm hai phương trình như vậy",
   "CT|Giải hệ bằng phương pháp thế (rút một ẩn theo ẩn kia rồi thay vào) hoặc phương pháp cộng đại số (khử bớt một ẩn)",
  ]},
  {n:"Hàm số y = ax² (a≠0) và đồ thị parabol",i:[
   "TC|Hàm số $y=ax^2$ ($a\\neq 0$) xác định với mọi $x\\in\\mathbb{R}$. Nếu $a>0$: hàm nghịch biến khi $x<0$, đồng biến khi $x>0$, giá trị nhỏ nhất $y=0$ tại $x=0$; nếu $a<0$: đồng biến khi $x<0$, nghịch biến khi $x>0$, giá trị lớn nhất $y=0$ tại $x=0$",
   "TC|Đồ thị hàm số $y=ax^2$ là một parabol đỉnh $O(0;0)$, nhận trục $Oy$ làm trục đối xứng; $a>0$: bề lõm quay lên, nằm phía trên trục hoành (trừ điểm $O$); $a<0$: bề lõm quay xuống, nằm phía dưới trục hoành (trừ điểm $O$)",
   "CT|Cách vẽ đồ thị: lập bảng giá trị với các cặp $x$ đối xứng qua $0$ (ví dụ $x=-2,-1,0,1,2$), tính $y$ tương ứng, biểu diễn các điểm rồi nối thành đường cong parabol",
   "LY|$|a|$ càng lớn thì parabol càng hẹp (dốc hơn); hai điểm có hoành độ đối nhau trên $(P)$ thì có cùng tung độ, do tính đối xứng qua $Oy$",
  ]},
  {n:"Phương trình bậc hai một ẩn — công thức nghiệm",i:[
   "DN|Phương trình bậc hai một ẩn có dạng $ax^2+bx+c=0$ ($a\\neq 0$)",
   "CT|Công thức nghiệm: $\\Delta=b^2-4ac$. Nếu $\\Delta>0$: hai nghiệm phân biệt $x_{1,2}=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$. Nếu $\\Delta=0$: nghiệm kép $x_1=x_2=-\\dfrac{b}{2a}$. Nếu $\\Delta<0$: phương trình vô nghiệm",
   "CT|Công thức nghiệm thu gọn (khi $b=2b'$): $\\Delta'=b'^2-ac$; nếu $\\Delta'\\geq 0$ thì $x_{1,2}=\\dfrac{-b'\\pm\\sqrt{\\Delta'}}{a}$ — nên dùng khi $b$ chẵn để tính gọn hơn",
   "LY|Nhẩm nghiệm nhanh: nếu $a+b+c=0$ thì $x_1=1$, $x_2=\\dfrac{c}{a}$; nếu $a-b+c=0$ thì $x_1=-1$, $x_2=-\\dfrac{c}{a}$. Nếu $a,c$ trái dấu thì $ac<0\\Rightarrow \\Delta=b^2-4ac>0$: phương trình luôn có hai nghiệm phân biệt trái dấu",
  ]},
  {n:"Hệ thức Vi-ét và các ứng dụng",i:[
   "CT|Định lí Vi-ét (thuận): nếu $ax^2+bx+c=0$ ($a\\neq 0$) có $\\Delta\\geq 0$ với hai nghiệm $x_1,x_2$ thì $x_1+x_2=-\\dfrac{b}{a}$, $x_1x_2=\\dfrac{c}{a}$",
   "CT|Định lí Vi-ét (đảo): nếu hai số $u,v$ thỏa $u+v=S$ và $uv=P$ (với $S^2\\geq 4P$) thì $u,v$ là hai nghiệm của $t^2-St+P=0$ — dùng để tìm hai số biết tổng và tích, hoặc lập phương trình bậc hai biết trước hai nghiệm",
   "CT|Các biểu thức đối xứng thường gặp (đặt $S=x_1+x_2$, $P=x_1x_2$): $x_1^2+x_2^2=S^2-2P$; $x_1^3+x_2^3=S^3-3PS$; $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}=\\dfrac{S}{P}$ ($P\\neq 0$); $|x_1-x_2|=\\sqrt{S^2-4P}$",
   "TC|Xét dấu hai nghiệm (khi $\\Delta\\geq 0$): hai nghiệm trái dấu $\\Leftrightarrow P<0$; hai nghiệm cùng dấu $\\Leftrightarrow \\Delta\\geq 0$ và $P>0$ (cùng dương nếu thêm $S>0$, cùng âm nếu $S<0$)",
   "DT|Dạng toán: tìm tham số $m$ để phương trình có hai nghiệm $x_1,x_2$ thỏa một hệ thức cho trước (ví dụ $x_1^2+x_2^2=k$, $x_1=2x_2$, $\\dfrac{1}{x_1}+\\dfrac{1}{x_2}=k$...). Phương pháp: (1) tìm điều kiện của $m$ để có hai nghiệm ($\\Delta\\geq 0$); (2) tính $S,P$ theo $m$ bằng Vi-ét; (3) thay vào hệ thức đề cho, giải tìm $m$; (4) đối chiếu điều kiện ở bước (1) rồi kết luận",
   "VD|Ví dụ: Cho phương trình $x^2-2(m-1)x+2m-5=0$. Tìm $m$ để hai nghiệm $x_1,x_2$ thỏa $x_1^2+x_2^2=8$. Ta có $\\Delta'=(m-1)^2-(2m-5)=(m-2)^2+2>0$ với mọi $m$ nên phương trình luôn có hai nghiệm phân biệt. Theo Vi-ét: $S=2(m-1)$, $P=2m-5$; $x_1^2+x_2^2=S^2-2P=4(m-1)^2-2(2m-5)=4m^2-12m+14=8 \\Leftrightarrow 2m^2-6m+3=0$, giải được $m=\\dfrac{3\\pm\\sqrt3}{2}$",
  ]},
  {n:"Phương trình quy về phương trình bậc hai",i:[
   "DN|Phương trình trùng phương: $ax^4+bx^2+c=0$ ($a\\neq 0$) — đặt ẩn phụ $t=x^2$ ($t\\geq 0$), đưa về phương trình bậc hai $at^2+bt+c=0$ theo $t$, giải tìm $t$ rồi suy ra $x=\\pm\\sqrt{t}$ với mỗi $t\\geq 0$ nhận được",
   "CT|Phương trình chứa ẩn ở mẫu thức: tìm điều kiện xác định (mẫu khác $0$) trước; quy đồng, khử mẫu để đưa về phương trình bậc hai; giải rồi đối chiếu điều kiện xác định trước khi kết luận nghiệm",
   "CT|Phương trình đưa về dạng tích: biến đổi vế trái thành $A(x)\\cdot B(x)=0 \\Leftrightarrow A(x)=0$ hoặc $B(x)=0$, thường dùng khi vế phải bằng $0$ và vế trái phân tích được thành nhân tử",
  ]},
  {n:"Tương giao giữa parabol (P): y = ax² và đường thẳng (d)",i:[
   "CT|Xét phương trình hoành độ giao điểm của $(P): y=ax^2$ và $(d): y=kx+b$: $ax^2=kx+b \\Leftrightarrow ax^2-kx-b=0$ — số giao điểm của $(P)$ và $(d)$ bằng số nghiệm của phương trình này",
   "TC|$\\Delta>0$: $(d)$ cắt $(P)$ tại hai điểm phân biệt; $\\Delta=0$: $(d)$ tiếp xúc $(P)$ tại một điểm; $\\Delta<0$: $(d)$ và $(P)$ không có điểm chung",
   "DT|Dạng toán: biện luận theo tham số $m$ để $(d)$ cắt $(P)$ tại hai điểm phân biệt có hoành độ thỏa một điều kiện cho trước — lập phương trình hoành độ giao điểm theo $m$, dùng Vi-ét cho chính phương trình đó rồi làm tương tự dạng toán Vi-ét ở trên",
   "VD|Ví dụ: Tìm $m$ để $(d): y=2x+m$ cắt $(P): y=x^2$ tại hai điểm phân biệt có hoành độ trái dấu. Phương trình hoành độ giao điểm: $x^2=2x+m \\Leftrightarrow x^2-2x-m=0$. Hai nghiệm trái dấu $\\Leftrightarrow x_1x_2<0 \\Leftrightarrow -m<0 \\Leftrightarrow m>0$",
  ]},
  {n:"Giải bài toán bằng cách lập phương trình bậc hai",i:[
   "LY|Các bước giải: (1) chọn ẩn và đặt điều kiện thích hợp; (2) biểu diễn các đại lượng chưa biết khác theo ẩn; (3) lập phương trình biểu thị mối quan hệ giữa các đại lượng; (4) giải phương trình vừa lập; (5) đối chiếu điều kiện, loại nghiệm không phù hợp rồi kết luận",
   "DT|Toán số học: tìm hai số (hoặc một số) thỏa điều kiện về tổng, hiệu, tích hoặc quan hệ giữa các chữ số — điều kiện \\\"tích\\\" hoặc \\\"bình phương\\\" thường dẫn tới phương trình bậc hai",
   "VD|Ví dụ: Tìm hai số tự nhiên biết hiệu của chúng bằng $5$ và tích bằng $150$. Gọi số lớn là $x$ ($x>5$), số bé là $x-5$: $x(x-5)=150 \\Leftrightarrow x^2-5x-150=0 \\Leftrightarrow (x-15)(x+10)=0$, suy ra $x=15$ (nhận). Vậy hai số cần tìm là $15$ và $10$",
   "DT|Toán hình học: hình chữ nhật (biết chu vi và diện tích, hoặc quan hệ giữa hai kích thước), tam giác vuông (biết cạnh huyền và hệ thức giữa hai cạnh góc vuông) — thường dẫn tới phương trình bậc hai một ẩn sau khi đặt ẩn cho một kích thước",
   "VD|Ví dụ: Một mảnh vườn hình chữ nhật có chu vi $56$ m và diện tích $192$ m². Tính hai kích thước. Gọi chiều dài là $x$ (m, $0<x<28$): chiều rộng là $28-x$, có $x(28-x)=192 \\Leftrightarrow x^2-28x+192=0 \\Leftrightarrow (x-12)(x-16)=0$, suy ra $x=16$ (nhận vì chiều dài lớn hơn chiều rộng). Vậy chiều dài $16$ m, chiều rộng $12$ m",
   "DT|Toán chuyển động, năng suất dẫn tới một phương trình bậc hai một ẩn (khác dạng phải lập hệ hai ẩn): áp dụng khi các đại lượng còn lại biểu diễn được ngay theo một ẩn duy nhất",
   "VD|Ví dụ: Một đội xe cần chở $120$ tấn hàng. Hôm làm việc thực tế có thêm $4$ xe nên mỗi xe chở ít hơn dự định $1$ tấn (các xe chở đều nhau). Hỏi lúc đầu đội có bao nhiêu xe? Gọi $x$ (xe, $x>0$, nguyên) là số xe dự định: $\\dfrac{120}{x}-\\dfrac{120}{x+4}=1 \\Leftrightarrow 120(x+4)-120x=x(x+4) \\Leftrightarrow x^2+4x-480=0 \\Leftrightarrow (x-20)(x+24)=0$, suy ra $x=20$ (nhận). Vậy lúc đầu đội có $20$ xe",
  ]},
 ]},
 {n:"Hình học & Đo lường",t:[
  {n:"Hệ thức lượng trong tam giác vuông",i:[
   "CT|Hệ thức cạnh và đường cao: $b^2=a\\cdot b'$; $c^2=a\\cdot c'$; $h^2=b'\\cdot c'$; $a\\cdot h=b\\cdot c$ ($a$: cạnh huyền, $h$: đường cao, $b',c'$: hình chiếu)",
   "CT|Tỉ số lượng giác góc nhọn $\\alpha$: $\\sin\\alpha=\\dfrac{\\text{đối}}{\\text{huyền}}$, $\\cos\\alpha=\\dfrac{\\text{kề}}{\\text{huyền}}$, $\\tan\\alpha=\\dfrac{\\text{đối}}{\\text{kề}}$, $\\cot\\alpha=\\dfrac{\\text{kề}}{\\text{đối}}$",
   "CT|Hệ thức cạnh và góc: $b=a\\sin B=a\\cos C$; $c=a\\sin C=a\\cos B$; $b=c\\tan B$",
  ]},
  {n:"Sự xác định đường tròn. Tính chất đối xứng",i:[
   "DN|Đường tròn tâm $O$ bán kính $R$ ($R>0$) là tập hợp các điểm cách $O$ một khoảng bằng $R$, kí hiệu $(O;R)$",
   "TC|Qua ba điểm không thẳng hàng, có duy nhất một đường tròn đi qua ba điểm đó; tâm là giao điểm ba đường trung trực của tam giác tạo bởi ba điểm ấy",
   "TC|Đường tròn có tâm đối xứng là tâm $O$ và có vô số trục đối xứng, mỗi trục là một đường thẳng chứa đường kính",
   "TC|Trong một đường tròn, đường kính vuông góc với một dây thì đi qua trung điểm của dây ấy (và ngược lại, đường kính đi qua trung điểm một dây không đi qua tâm thì vuông góc với dây đó)",
   "TC|Đường kính là dây lớn nhất của đường tròn; trong hai dây, dây nào gần tâm hơn thì dây đó lớn hơn (và ngược lại)",
  ]},
  {n:"Vị trí tương đối của đường thẳng và đường tròn. Tiếp tuyến",i:[
   "TC|Gọi $d$ là khoảng cách từ tâm $O$ đến đường thẳng $a$, $R$ là bán kính: $d<R$: $a$ cắt $(O)$ tại 2 điểm; $d=R$: $a$ tiếp xúc $(O)$ (1 điểm chung); $d>R$: $a$ và $(O)$ không giao nhau",
   "DH|Dấu hiệu nhận biết tiếp tuyến: một đường thẳng là tiếp tuyến của đường tròn nếu nó đi qua một điểm của đường tròn và vuông góc với bán kính đi qua điểm đó",
   "TC|Nếu hai tiếp tuyến của một đường tròn cắt nhau tại một điểm thì: điểm đó cách đều hai tiếp điểm; tia kẻ từ điểm đó qua tâm là tia phân giác của góc tạo bởi hai tiếp tuyến; tia kẻ từ tâm qua điểm đó là tia phân giác của góc tạo bởi hai bán kính đi qua các tiếp điểm",
  ]},
  {n:"Vị trí tương đối của hai đường tròn",i:[
   "TC|Xét hai đường tròn $(O;R)$ và $(O';r)$ với $R\\geq r$, $d=OO'$: $d>R+r$: ở ngoài nhau (0 điểm chung); $d=R+r$: tiếp xúc ngoài (1 điểm chung); $R-r<d<R+r$: cắt nhau (2 điểm chung); $d=R-r$ ($R>r$): tiếp xúc trong (1 điểm chung); $d<R-r$: đựng nhau (0 điểm chung)",
   "TC|Đường nối tâm là trục đối xứng của hình gồm hai đường tròn; nếu hai đường tròn cắt nhau thì đường nối tâm là đường trung trực của dây chung; nếu tiếp xúc nhau thì tiếp điểm nằm trên đường nối tâm",
  ]},
  {n:"Góc ở tâm. Số đo cung. Liên hệ cung và dây",i:[
   "DN|Góc ở tâm là góc có đỉnh trùng với tâm đường tròn; số đo cung nhỏ bằng số đo góc ở tâm chắn cung đó; số đo cung lớn $=360^\\circ-$ số đo cung nhỏ tương ứng; số đo nửa đường tròn $=180^\\circ$",
   "TC|Trong một đường tròn hay hai đường tròn bằng nhau: hai cung bằng nhau căng hai dây bằng nhau và ngược lại; cung lớn hơn căng dây lớn hơn và ngược lại",
   "TC|Trong một đường tròn, hai dây bằng nhau thì cách đều tâm và ngược lại; trong hai dây không bằng nhau, dây lớn hơn thì gần tâm hơn",
  ]},
  {n:"Góc nội tiếp. Góc tạo bởi tia tiếp tuyến và dây cung",i:[
   "DN|Góc nội tiếp là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó",
   "CT|Trong một đường tròn, số đo góc nội tiếp bằng nửa số đo cung bị chắn: $\\widehat{ACB}=\\dfrac{1}{2}\\text{sđ}\\overset{\\frown}{AB}$",
   "TC|Các góc nội tiếp cùng chắn một cung (hoặc chắn các cung bằng nhau) thì bằng nhau; góc nội tiếp chắn nửa đường tròn là góc vuông; góc nội tiếp nhỏ hơn hoặc bằng $90^\\circ$ có số đo bằng nửa số đo góc ở tâm cùng chắn một cung",
   "CT|Góc tạo bởi tia tiếp tuyến và dây cung có số đo bằng nửa số đo cung bị chắn; hệ quả: góc này bằng góc nội tiếp cùng chắn cung đó",
  ]},
  {n:"Góc có đỉnh bên trong, bên ngoài đường tròn",i:[
   "CT|Số đo góc có đỉnh ở bên trong đường tròn bằng nửa tổng số đo hai cung bị chắn: $\\widehat{AEC}=\\dfrac{1}{2}\\big(\\text{sđ}\\overset{\\frown}{AC}+\\text{sđ}\\overset{\\frown}{BD}\\big)$ ($E$ là giao điểm hai dây $AB,CD$ bên trong đường tròn)",
   "CT|Số đo góc có đỉnh ở bên ngoài đường tròn bằng nửa hiệu số đo hai cung bị chắn: $\\widehat{AEC}=\\dfrac{1}{2}\\big(\\text{sđ}\\overset{\\frown}{AC}-\\text{sđ}\\overset{\\frown}{BD}\\big)$ ($E$ là giao điểm hai cát tuyến/tiếp tuyến ở bên ngoài đường tròn)",
  ]},
  {n:"Cung chứa góc. Tứ giác nội tiếp",i:[
   "DN|Quỹ tích các điểm $M$ nhìn đoạn thẳng $AB$ cho trước dưới một góc $\\alpha$ không đổi ($0^\\circ<\\alpha<180^\\circ$) là hai cung chứa góc $\\alpha$ dựng trên đoạn $AB$, đối xứng nhau qua $AB$; đặc biệt $\\alpha=90^\\circ$ thì quỹ tích là đường tròn đường kính $AB$",
   "DN|Tứ giác nội tiếp là tứ giác có bốn đỉnh cùng nằm trên một đường tròn",
   "DH|Dấu hiệu nhận biết tứ giác nội tiếp: tổng hai góc đối bằng $180^\\circ$; hoặc góc ngoài tại một đỉnh bằng góc trong của đỉnh đối diện; hoặc hai đỉnh kề nhau cùng nhìn cạnh nối hai đỉnh còn lại dưới các góc bằng nhau; hoặc bốn đỉnh cách đều một điểm (tâm đường tròn ngoại tiếp)",
  ]},
  {n:"Đường tròn ngoại tiếp, nội tiếp đa giác đều",i:[
   "DN|Đường tròn ngoại tiếp đa giác đều là đường tròn đi qua tất cả các đỉnh; đường tròn nội tiếp là đường tròn tiếp xúc với tất cả các cạnh của đa giác đều đó — hai đường tròn này có cùng tâm, gọi là tâm của đa giác đều",
   "CT|Đa giác đều $n$ cạnh nội tiếp đường tròn bán kính $R$: mỗi cạnh $a_n=2R\\sin\\dfrac{180^\\circ}{n}$; bán kính đường tròn nội tiếp $r=R\\cos\\dfrac{180^\\circ}{n}$",
   "LY|Trường hợp hay dùng: lục giác đều nội tiếp $(O;R)$ có cạnh bằng $R$; hình vuông nội tiếp $(O;R)$ có cạnh bằng $R\\sqrt{2}$; tam giác đều nội tiếp $(O;R)$ có cạnh bằng $R\\sqrt{3}$",
  ]},
  {n:"Độ dài đường tròn, cung tròn. Diện tích hình tròn, hình quạt",i:[
   "CT|Chu vi (độ dài) đường tròn bán kính $R$: $C=2\\pi R=\\pi d$ ($d$: đường kính); độ dài cung tròn $n^\\circ$: $l=\\dfrac{\\pi Rn}{180}$",
   "CT|Diện tích hình tròn bán kính $R$: $S=\\pi R^2$; diện tích hình quạt tròn cung $n^\\circ$: $S_{\\text{quạt}}=\\dfrac{\\pi R^2n}{360}=\\dfrac{l\\cdot R}{2}$",
   "CT|Diện tích hình vành khăn giới hạn bởi hai đường tròn đồng tâm bán kính $R>r$: $S=\\pi(R^2-r^2)$",
  ]},
  {n:"Hình trụ",i:[
   "DN|Hình trụ có hai đáy là hai hình tròn bằng nhau và song song; khi quay một hình chữ nhật quanh một cạnh cố định thì cạnh đối diện quét nên mặt xung quanh của một hình trụ",
   "CT|Hình trụ bán kính đáy $r$, chiều cao $h$: diện tích xung quanh $S_{xq}=2\\pi rh$; diện tích toàn phần $S_{tp}=S_{xq}+2\\pi r^2=2\\pi rh+2\\pi r^2$; thể tích $V=\\pi r^2h$",
   "LY|Đường sinh của hình trụ luôn bằng chiều cao ($l=h$); hai đáy là hai hình tròn bằng nhau nằm trên hai mặt phẳng song song và cách đều trục",
   "VD|Ví dụ: Một hình trụ có bán kính đáy $r=5$ cm, chiều cao $h=10$ cm. Tính $S_{xq}$, $S_{tp}$, $V$. Ta có $S_{xq}=2\\pi\\cdot5\\cdot10=100\\pi\\text{ cm}^2$; $S_{tp}=100\\pi+2\\pi\\cdot25=150\\pi\\text{ cm}^2\\approx471{,}2\\text{ cm}^2$; $V=\\pi\\cdot25\\cdot10=250\\pi\\text{ cm}^3\\approx785{,}4\\text{ cm}^3$",
   "VD|Bài toán thực tế: Một lon nước ngọt hình trụ có đường kính đáy $6$ cm, chiều cao $12$ cm. Tính diện tích vỏ lon (bỏ qua mép dán) và thể tích lon. Bán kính $r=3$ cm: $S_{tp}=S_{xq}+2\\pi r^2=2\\pi\\cdot3\\cdot12+2\\pi\\cdot9=72\\pi+18\\pi=90\\pi\\approx282{,}7\\text{ cm}^2$; $V=\\pi\\cdot9\\cdot12=108\\pi\\approx339{,}3\\text{ cm}^3\\approx339{,}3\\text{ ml}$",
  ]},
  {n:"Hình nón",i:[
   "DN|Hình nón có đáy là một hình tròn, đỉnh là điểm không nằm trên mặt phẳng đáy; khi quay một tam giác vuông quanh một cạnh góc vuông thì cạnh huyền quét nên mặt xung quanh của một hình nón",
   "CT|Với hình nón bán kính đáy $r$, chiều cao $h$, đường sinh $l$: liên hệ $l^2=r^2+h^2$ (định lí Pythagore trong tam giác vuông sinh ra hình nón)",
   "CT|Diện tích xung quanh $S_{xq}=\\pi rl$; diện tích toàn phần $S_{tp}=S_{xq}+\\pi r^2=\\pi rl+\\pi r^2$; thể tích $V=\\dfrac{1}{3}\\pi r^2h$",
   "VD|Ví dụ: Một hình nón có bán kính đáy $r=3$ cm, chiều cao $h=4$ cm. Tính đường sinh, $S_{xq}$, $S_{tp}$, $V$. Ta có $l=\\sqrt{r^2+h^2}=\\sqrt{9+16}=5$ cm; $S_{xq}=\\pi\\cdot3\\cdot5=15\\pi\\text{ cm}^2$; $S_{tp}=15\\pi+\\pi\\cdot9=24\\pi\\approx75{,}4\\text{ cm}^2$; $V=\\dfrac{1}{3}\\pi\\cdot9\\cdot4=12\\pi\\approx37{,}7\\text{ cm}^3$",
   "VD|Bài toán thực tế: Một chiếc nón lá có dạng hình nón với bán kính đáy $20$ cm và đường sinh $30$ cm. Tính diện tích lá cần dùng (diện tích xung quanh, bỏ qua phần chồng mép) và chiều cao của nón. $S_{xq}=\\pi rl=\\pi\\cdot20\\cdot30=600\\pi\\approx1885\\text{ cm}^2$; $h=\\sqrt{l^2-r^2}=\\sqrt{900-400}=\\sqrt{500}=10\\sqrt5\\approx22{,}4\\text{ cm}$",
  ]},
  {n:"Hình cầu",i:[
   "DN|Hình cầu tâm $O$ bán kính $r$ là hình gồm tất cả các điểm trong không gian cách $O$ một khoảng không lớn hơn $r$; khi quay một nửa hình tròn quanh đường kính của nó thì được một hình cầu",
   "CT|Hình cầu bán kính $r$: diện tích mặt cầu $S=4\\pi r^2$; thể tích $V=\\dfrac{4}{3}\\pi r^3$",
   "VD|Ví dụ: Một hình cầu có bán kính $r=6$ cm. Tính diện tích mặt cầu và thể tích. $S=4\\pi\\cdot36=144\\pi\\approx452{,}4\\text{ cm}^2$; $V=\\dfrac{4}{3}\\pi\\cdot216=288\\pi\\approx904{,}8\\text{ cm}^3$",
   "VD|Bài toán thực tế: Một quả bóng đá có đường kính $22$ cm. Tính diện tích da cần dùng để may quả bóng (bỏ qua các đường may) và thể tích không khí bên trong. Bán kính $r=11$ cm: $S=4\\pi\\cdot121=484\\pi\\approx1520{,}5\\text{ cm}^2$; $V=\\dfrac{4}{3}\\pi\\cdot1331\\approx5575{,}3\\text{ cm}^3$",
  ]},
  {n:"Bài toán thực tế tổng hợp: hình trụ, hình nón, hình cầu",i:[
   "DT|Dạng toán thường gặp: tính lượng vật liệu (tôn, vải, sơn, giấy...) dựa trên diện tích xung quanh hoặc diện tích toàn phần; tính dung tích chứa được (nước, cát, khí...) dựa trên thể tích; hoặc bài toán kết hợp nhiều hình khối ghép lại với nhau (ví dụ silo gồm thân hình trụ và nóc hình nón)",
   "CT|Lưu ý đổi đơn vị trước khi kết luận: $1\\text{ lít}=1\\text{ dm}^3=1000\\text{ cm}^3$; $1\\text{ m}^3=1000\\text{ lít}$ — đề thường cho kích thước theo mét hoặc centimét nhưng hỏi đáp số theo lít",
   "VD|Ví dụ: Một bồn chứa nước hình trụ có đường kính đáy $1{,}4$ m và chiều cao $2$ m. Hỏi bồn chứa được tối đa bao nhiêu lít nước (làm tròn đến hàng đơn vị)? Bán kính $r=0{,}7$ m: $V=\\pi r^2h=\\pi\\cdot0{,}49\\cdot2=0{,}98\\pi\\approx3{,}079\\text{ m}^3=3079\\text{ lít}$",
   "VD|Ví dụ: Một cái phễu lọc có dạng hình nón với đường kính miệng phễu $12$ cm, chiều cao $8$ cm. Hỏi phễu chứa được tối đa bao nhiêu ml nước? Bán kính $r=6$ cm: $V=\\dfrac{1}{3}\\pi r^2h=\\dfrac{1}{3}\\pi\\cdot36\\cdot8=96\\pi\\approx301{,}6\\text{ cm}^3\\approx301{,}6\\text{ ml}$",
  ]},
 ]},
 {n:"Thống kê & Xác suất",t:[
  {n:"Thu thập, phân loại và biểu diễn dữ liệu",i:[
   "DN|Dữ liệu định tính là dữ liệu không phải số (giới tính, xếp loại, sở thích...); dữ liệu định lượng là dữ liệu dạng số (chiều cao, điểm số, cân nặng...) — cần phân loại đúng trước khi chọn cách biểu diễn và tính toán phù hợp",
   "CT|Bảng tần số: liệt kê các giá trị (hoặc nhóm giá trị) kèm tần số $n_i$ tương ứng; tần số tương đối (tỉ lệ phần trăm) của một giá trị $=\\dfrac{n_i}{N}\\times100\\%$ ($N$: tổng số liệu)",
   "LY|Chọn biểu đồ phù hợp với mục đích: biểu đồ cột/đoạn thẳng để so sánh tần số giữa các nhóm; biểu đồ hình quạt (tần số tương đối) để thể hiện tỉ lệ phần trăm cơ cấu; biểu đồ đoạn thẳng (đường gấp khúc) để thể hiện xu hướng biến đổi theo thời gian",
  ]},
  {n:"Bảng tần số, tần số tương đối ghép nhóm",i:[
   "DN|Mẫu số liệu ghép nhóm: khi số liệu quá nhiều giá trị khác nhau, ta chia thành các nhóm dạng nửa khoảng $[a;b)$ có cùng độ dài, kèm tần số $n_i$ của mỗi nhóm",
   "CT|Giá trị đại diện của nhóm $[a;b)$ là trung bình cộng hai đầu mút: $\\dfrac{a+b}{2}$ — dùng để tính các số đặc trưng (trung bình, phương sai...) của mẫu ghép nhóm",
   "CT|Tần số tương đối của nhóm $=\\dfrac{n_i}{N}\\times100\\%$; tổng tất cả tần số tương đối của các nhóm luôn bằng $100\\%$",
  ]},
  {n:"Số trung bình, trung vị, mốt",i:[
   "CT|Số trung bình cộng: mẫu không ghép nhóm $\\bar{x}=\\dfrac{\\sum x_i n_i}{N}$; mẫu ghép nhóm: $\\bar{x}\\approx\\dfrac{\\sum (\\text{giá trị đại diện})\\times n_i}{N}$",
   "DN|Trung vị $M_e$: sắp xếp mẫu số liệu (không ghép nhóm) theo thứ tự không giảm; nếu $N$ lẻ, $M_e$ là giá trị chính giữa; nếu $N$ chẵn, $M_e$ là trung bình cộng của hai giá trị chính giữa",
   "DN|Mốt $M_0$: giá trị (hoặc nhóm giá trị) có tần số lớn nhất trong mẫu số liệu; một mẫu có thể có một mốt, nhiều mốt, hoặc không có mốt",
   "LY|Khi mẫu số liệu có giá trị bất thường (quá lớn hoặc quá nhỏ so với phần còn lại) thì trung vị phản ánh xu thế trung tâm tốt hơn số trung bình, vì số trung bình rất nhạy với giá trị ngoại lệ còn trung vị thì không",
  ]},
  {n:"Tứ phân vị",i:[
   "DN|Tứ phân vị chia mẫu số liệu (đã sắp xếp không giảm, gồm $N$ giá trị) thành bốn phần có số lượng phần tử bằng nhau: $Q_1$ (tứ phân vị thứ nhất), $Q_2=M_e$ (trung vị), $Q_3$ (tứ phân vị thứ ba)",
   "CT|Cách tìm: $Q_2$ là trung vị của cả mẫu; $Q_1$ là trung vị của nửa số liệu bên trái $Q_2$; $Q_3$ là trung vị của nửa số liệu bên phải $Q_2$ (nếu $N$ lẻ thì không tính $Q_2$ vào hai nửa này)",
   "CT|Khoảng tứ phân vị $\\Delta_Q=Q_3-Q_1$ đo độ phân tán của $50\\%$ số liệu ở giữa; giá trị $x$ được coi là ngoại lệ nếu $x<Q_1-1{,}5\\Delta_Q$ hoặc $x>Q_3+1{,}5\\Delta_Q$",
   "VD|Ví dụ: Mẫu số liệu (đã sắp xếp): $2,4,5,7,8,9,10,12,15$ ($N=9$). Trung vị $Q_2=8$ (giá trị thứ 5). Nửa dưới: $2,4,5,7$ có trung vị $Q_1=\\dfrac{4+5}{2}=4{,}5$. Nửa trên: $9,10,12,15$ có trung vị $Q_3=\\dfrac{10+12}{2}=11$. Khoảng tứ phân vị $\\Delta_Q=11-4{,}5=6{,}5$",
  ]},
  {n:"Tính hợp lí của dữ liệu thống kê",i:[
   "LY|Đánh giá tính hợp lí của dữ liệu dựa trên: đối tượng và phạm vi thu thập có phù hợp với mục đích thống kê hay không; nguồn thu thập có đáng tin cậy (cơ quan thống kê chính thức, khảo sát trực tiếp...) hay không; số liệu có nhất quán, không mâu thuẫn, không vượt quá phạm vi thực tế hợp lí (ví dụ tuổi không thể âm hay quá lớn) hay không",
  ]},
  {n:"Phép thử ngẫu nhiên và xác suất của biến cố",i:[
   "DN|Phép thử ngẫu nhiên là một hành động, thực nghiệm mà kết quả của nó không thể đoán trước được nhưng biết được tập hợp tất cả các kết quả có thể xảy ra; tập hợp đó gọi là không gian mẫu, kí hiệu $\\Omega$",
   "CT|Nếu phép thử có các kết quả đồng khả năng xảy ra thì xác suất của biến cố $A$: $P(A)=\\dfrac{n(A)}{n(\\Omega)}=\\dfrac{\\text{số kết quả thuận lợi cho }A}{\\text{số phần tử không gian mẫu}}$",
   "TC|Với mọi biến cố $A$: $0\\leq P(A)\\leq 1$; $P(\\Omega)=1$ (biến cố chắc chắn); $P(\\varnothing)=0$ (biến cố không thể)",
   "CT|Biến cố đối của $A$, kí hiệu $\\bar{A}$, xảy ra khi $A$ không xảy ra: $P(\\bar{A})=1-P(A)$",
   "VD|Ví dụ: Gieo một con xúc xắc cân đối. Không gian mẫu $\\Omega=\\{1,2,3,4,5,6\\}$, $n(\\Omega)=6$. Gọi $A$: \\\"số chấm xuất hiện là số chẵn\\\", $A=\\{2,4,6\\}$, $n(A)=3$, nên $P(A)=\\dfrac{3}{6}=\\dfrac{1}{2}$",
  ]},
  {n:"Xác suất thực nghiệm",i:[
   "DN|Xác suất thực nghiệm của biến cố $A$ trong $n$ lần thực hiện (độc lập) một phép thử: $P_{tn}(A)=\\dfrac{\\text{số lần }A\\text{ xảy ra}}{n}$",
   "LY|Khi số phép thử $n$ càng lớn, xác suất thực nghiệm $P_{tn}(A)$ càng gần với xác suất lí thuyết (cổ điển) $P(A)$ — đây là cơ sở để ước lượng xác suất một biến cố khi không thể (hoặc khó) xác định bằng lí thuyết",
   "VD|Ví dụ: Gieo một đồng xu $100$ lần, thấy mặt sấp xuất hiện $47$ lần. Xác suất thực nghiệm của biến cố \\\"xuất hiện mặt sấp\\\" là $\\dfrac{47}{100}=0{,}47$, xấp xỉ xác suất lí thuyết $0{,}5$",
  ]},
 ]},
]});
