// Ôn thi vào 10 (TP.HCM) — 3 mạch, 8 bài, 38 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:"ts10",l:"Ôn thi vào 10 (TP.HCM)",c:"#bc4749",s:[
 {n:"Phần cơ bản (Câu 1 – Câu 2)",t:[
  {n:"Giới thiệu cấu trúc đề thi TP.HCM",i:[
   "LY|Đề Toán tuyển sinh 10 TP.HCM: 7 câu, làm bài trong 120 phút. Câu 1–2 ở mức cơ bản (đồ thị, phương trình bậc hai); Câu 3–6 là các bài toán thực tế (thống kê–xác suất, đại số, hình học, chuyển động/năng suất/giá cả); Câu 7 là hình học phẳng tổng hợp gồm 3 câu con (a,b,c), chiếm 3 điểm — câu 7c thường là câu phân loại khó nhất đề",
   "LY|Cấu trúc này áp dụng từ năm 2025 (khóa đầu tiên thi theo chương trình GDPT 2018) và tiếp tục ổn định ở năm 2026; khoảng 40–50% số điểm nằm ở các câu toán thực tế nên cần luyện kỹ năng đọc hiểu – lập biểu thức, không chỉ thuộc công thức",
   "LY|Đặc trưng của đề TP.HCM: không có câu \\\"rút gọn biểu thức chứa căn\\\" riêng như nhiều tỉnh khác; thay vào đó thiên về đọc-hiểu tình huống thực tế rồi tự lập biểu thức/phương trình/bất phương trình",
  ]},
  {n:"Câu 1: Đồ thị hàm số y = ax² và đường thẳng",i:[
   "DT|Vẽ đồ thị parabol $(P): y=ax^2$ trên hệ trục tọa độ; tìm tọa độ giao điểm của $(P)$ với đường thẳng $(d): y=kx+b$, hoặc tìm điểm thuộc $(P)$ thỏa điều kiện cho trước. Luôn là câu mở đầu, mức độ dễ lấy điểm",
   "CT|Lập bảng giá trị (ít nhất 5 điểm đối xứng qua $Oy$) để vẽ $(P)$; xét phương trình hoành độ giao điểm $ax^2=kx+b \\Leftrightarrow ax^2-kx-b=0$ để tìm giao điểm của $(P)$ và $(d)$",
   "VD|Ví dụ: Cho $(P): y=\\dfrac{1}{2}x^2$ và $(d): y=x+4$. Tìm tọa độ giao điểm: xét $\\dfrac{1}{2}x^2=x+4 \\Leftrightarrow x^2-2x-8=0 \\Leftrightarrow (x-4)(x+2)=0$, suy ra $x=4$ hoặc $x=-2$. Với $x=4$: $y=8$; với $x=-2$: $y=2$. Vậy $(P)$ và $(d)$ cắt nhau tại $(4;8)$ và $(-2;2)$",
   "LY|Nếu đề cho tham số $m$ trong hệ số của $(d)$, có thể kết hợp Vi-ét cho phương trình hoành độ giao điểm để biện luận điều kiện của $m$ (ví dụ hai giao điểm có hoành độ trái dấu, hoặc thỏa một hệ thức cho trước) — cách làm tương tự các dạng toán Vi-ét ở Câu 2",
  ]},
  {n:"Câu 2: Phương trình bậc hai. Định lí Vi-ét",i:[
   "DT|Giải phương trình bậc hai, hoặc vận dụng hệ thức Vi-ét để tính giá trị một biểu thức đối xứng của hai nghiệm, hoặc lập phương trình bậc hai khi biết tổng và tích hai nghiệm",
   "CT|$\\Delta=b^2-4ac$; nếu $\\Delta\\geq 0$: $x_1+x_2=-\\dfrac{b}{a}$, $x_1x_2=\\dfrac{c}{a}$ (Vi-ét); phương trình nhận $x_1,x_2$ làm nghiệm: $x^2-(x_1+x_2)x+x_1x_2=0$",
   "VD|Ví dụ: Cho phương trình $x^2-5x+3=0$ có hai nghiệm $x_1,x_2$. Tính $x_1^2+x_2^2$. Có $x_1+x_2=5$, $x_1x_2=3$, nên $x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=25-6=19$",
   "DT|Dạng toán nâng cao hay gặp: tìm tham số $m$ để phương trình bậc hai có hai nghiệm thỏa một hệ thức cho trước (tổng bình phương, hiệu, tích...), hoặc bài toán thực tế dẫn tới việc lập rồi giải một phương trình bậc hai kết hợp Vi-ét để biện luận",
   "VD|Ví dụ (có tham số): Cho phương trình $x^2-(m+1)x+m=0$. Chứng minh phương trình luôn có nghiệm với mọi $m$; tìm $m$ để $|x_1-x_2|=2$. Ta có $\\Delta=(m+1)^2-4m=(m-1)^2\\geq 0$ với mọi $m$ nên luôn có nghiệm. Theo Vi-ét: $S=m+1$, $P=m$; $|x_1-x_2|=\\sqrt{S^2-4P}=\\sqrt{(m+1)^2-4m}=|m-1|=2$, suy ra $m=3$ hoặc $m=-1$",
  ]},
 ]},
 {n:"Toán thực tế (Câu 3 – Câu 6)",t:[
  {n:"Câu 3: Thống kê và xác suất thực tế",i:[
   "DT|Đọc bảng số liệu hoặc biểu đồ thống kê từ một tình huống thực tế (kết quả khảo sát, kết quả học tập, sản lượng...); tính số trung bình, tìm mốt, hoặc tính xác suất thực nghiệm/xác suất của một biến cố liên quan",
   "CT|Số trung bình $=\\dfrac{\\text{tổng (giá trị}\\times\\text{tần số)}}{\\text{tổng tần số}}$; xác suất của biến cố $=\\dfrac{\\text{số kết quả thuận lợi}}{\\text{tổng số kết quả có thể}}$ (đồng khả năng)",
   "VD|Ví dụ: Một lớp có 40 học sinh, thống kê điểm kiểm tra: 5 điểm 6, 15 điểm 7, 12 điểm 8, 8 điểm 9. Chọn ngẫu nhiên 1 học sinh, tính xác suất học sinh đó đạt điểm 8 trở lên. Số học sinh đạt từ 8 điểm: $12+8=20$; xác suất $=\\dfrac{20}{40}=\\dfrac{1}{2}$",
   "LY|Lỗi hay gặp: đọc nhầm cột/hàng trong bảng số liệu, hoặc cộng thiếu/thừa nhóm khi tính \\\"từ ... trở lên\\\", \\\"trở xuống\\\" — nên gạch chân đúng nhóm dữ liệu cần trước khi tính",
   "CT|Trung vị, mốt, tứ phân vị của mẫu số liệu thường xuất hiện dưới dạng bảng số liệu thực tế (điểm thi, doanh thu, thời gian...); cần sắp xếp số liệu tăng dần trước khi xác định trung vị/tứ phân vị, tránh nhầm với số trung bình",
   "VD|Ví dụ (xác suất thực nghiệm): Một xạ thủ bắn $50$ phát, có $42$ phát trúng bia. Xác suất thực nghiệm để xạ thủ bắn trúng bia ở một lần bắn là $\\dfrac{42}{50}=0{,}84$; nếu xạ thủ bắn thêm $10$ phát nữa với cùng khả năng đó, số phát trúng bia dự đoán khoảng $10\\times0{,}84\\approx 8$ phát",
  ]},
  {n:"Câu 4: Toán thực tế – Lập biểu thức, phương trình",i:[
   "DT|Tình huống thực tế thường gặp: hóa đơn tiền điện/nước tính theo bậc thang, giá cước taxi, lãi suất ngân hàng, tăng trưởng dân số/giá cả theo phần trăm mỗi kỳ — yêu cầu lập biểu thức theo một đại lượng, rồi giải phương trình để tìm giá trị thỏa điều kiện đề bài",
   "CT|Đặt ẩn cho đại lượng cần tìm; biểu diễn các đại lượng còn lại theo ẩn dựa trên dữ kiện đề cho; lập phương trình rồi giải và đối chiếu điều kiện thực tế trước khi kết luận",
   "CT|Lãi suất kép / tăng trưởng theo phần trăm cố định mỗi kỳ: $A=P(1+r)^n$ ($P$: giá trị ban đầu, $r$: tỉ lệ tăng mỗi kỳ, $n$: số kỳ, $A$: giá trị sau $n$ kỳ) — dùng chung cho lãi suất ngân hàng, tăng dân số, tăng giá",
   "VD|Ví dụ: Giá cước taxi: $2\\text{ km}$ đầu giá $11\\,000$ đồng, mỗi km tiếp theo giá $14\\,500$ đồng. Bạn An đi taxi hết $180\\,000$ đồng, hỏi quãng đường đã đi? Gọi $x$ (km, $x>2$) là quãng đường; ta có $11\\,000+14\\,500(x-2)=180\\,000 \\Leftrightarrow x-2=\\dfrac{169\\,000}{14\\,500}\\approx 11{,}66$, suy ra $x\\approx 13{,}66$ km",
   "VD|Ví dụ: Một khoản tiền gửi tiết kiệm $50$ triệu đồng với lãi suất $6\\%$/năm (lãi kép). Hỏi sau 2 năm số tiền cả gốc lẫn lãi là bao nhiêu? Áp dụng $A=P(1+r)^n=50(1+0{,}06)^2=50\\cdot 1{,}1236=56{,}18$ triệu đồng",
  ]},
  {n:"Câu 5: Toán thực tế – Hình học",i:[
   "DT|Bài toán thực tế liên quan chu vi, diện tích các hình phẳng (hình chữ nhật, hình tròn, tam giác...) hoặc thể tích các hình khối quen thuộc (hình hộp chữ nhật, hình trụ, hình nón, hình cầu) — ví dụ hộp đựng bóng, bể chứa nước, ly hình nón, sân vườn, mảnh đất...",
   "CT|$V_{\\text{hộp}}=a\\cdot b\\cdot c$; hình trụ bán kính $r$, cao $h$: $V=\\pi r^2h$; hình nón: $V=\\dfrac{1}{3}\\pi r^2h$; hình cầu: $V=\\dfrac{4}{3}\\pi r^3$; hình tròn bán kính $r$: chu vi $C=2\\pi r$, diện tích $S=\\pi r^2$. Luôn đổi các số đo về cùng một đơn vị trước khi tính",
   "VD|Ví dụ: Một hộp đựng bóng tennis dạng hình trụ chứa vừa khít 3 quả bóng hình cầu bán kính $3{,}5\\text{ cm}$ xếp chồng. Tính thể tích phần không gian trống trong hộp (làm tròn đến $\\text{cm}^3$). Bán kính đáy hộp $r=3{,}5$ cm, chiều cao hộp $h=3\\times 7=21$ cm: $V_{\\text{hộp}}=\\pi r^2h=\\pi\\cdot 3{,}5^2\\cdot 21\\approx 808{,}5\\text{ cm}^3$; tổng thể tích 3 quả bóng $=3\\cdot\\dfrac{4}{3}\\pi r^3\\approx 539{,}0\\text{ cm}^3$; phần trống $\\approx 808{,}5-539{,}0=269{,}5\\text{ cm}^3$",
   "LY|Lỗi hay gặp: quên đổi đơn vị (mm, cm, m lẫn lộn) và quên vẽ phác hình minh họa trước khi tính — vẽ hình giúp thấy ngay công thức cần dùng",
  ]},
  {n:"Câu 6: Toán thực tế – Phương trình & bất phương trình (chuyển động, năng suất, giá cả)",i:[
   "DT|Đây là dạng \\\"khó nhất trong nhóm câu thực tế\\\", thường thuộc một trong ba mô-típ: (1) hai đối tượng chuyển động cùng lúc hoặc lệch thời gian; (2) hai đội/hai vòi cùng làm chung một công việc (năng suất); (3) bài toán giá cả/chi phí–lợi nhuận cần giải bất phương trình để tìm điều kiện có lãi",
   "CT|Chuyển động: $s=v\\cdot t$, chú ý các mốc \\\"xuất phát cùng lúc\\\", \\\"đến sớm/muộn hơn\\\", \\\"gặp nhau\\\". Năng suất: nếu một mình làm xong việc trong $x$ (đơn vị thời gian) thì mỗi đơn vị thời gian làm được $\\dfrac{1}{x}$ công việc, cộng năng suất khi làm chung",
   "CT|Bất phương trình bậc nhất một ẩn từ bài toán thực tế (thường là bài toán lợi nhuận/chi phí): lập bất phương trình theo ẩn rồi giải, đối chiếu điều kiện thực tế (thường lấy số tự nhiên nhỏ nhất/lớn nhất thỏa mãn)",
   "VD|Ví dụ (chuyển động): Hai bạn A và B cùng xuất phát từ nhà đến trường cách nhau $6$ km. Vận tốc của A hơn vận tốc của B là $3$ km/h nên A đến sớm hơn B $10$ phút $=\\dfrac16$ giờ. Gọi $x$ (km/h, $x>0$) là vận tốc của B: $\\dfrac{6}{x}-\\dfrac{6}{x+3}=\\dfrac16 \\Leftrightarrow 36(x+3)-36x=x(x+3) \\Leftrightarrow x^2+3x-108=0$, giải được $x=9$ (nhận vì $x>0$). Vậy vận tốc của B là $9$ km/h, của A là $12$ km/h",
   "VD|Ví dụ (năng suất): Hai vòi nước cùng chảy vào bể thì sau $6$ giờ đầy bể; nếu vòi 1 chảy $4$ giờ rồi vòi 2 chảy thêm $3$ giờ thì được $\\dfrac{2}{3}$ bể. Gọi $x,y$ (giờ) là thời gian mỗi vòi chảy một mình đầy bể: $\\dfrac{1}{x}+\\dfrac{1}{y}=\\dfrac{1}{6}$ và $\\dfrac{4}{x}+\\dfrac{3}{y}=\\dfrac{2}{3}$; đặt $u=\\dfrac1x,v=\\dfrac1y$ rồi giải hệ để tìm thời gian mỗi vòi",
   "VD|Ví dụ (bất phương trình – lợi nhuận): Một xưởng may có chi phí cố định $5\\,000\\,000$ đồng và chi phí nguyên liệu $80\\,000$ đồng cho mỗi áo, bán ra với giá $150\\,000$ đồng/áo. Hỏi cần bán ít nhất bao nhiêu áo để có lãi? Gọi $x\\in\\mathbb{N}^*$ là số áo bán được: lãi $=150\\,000x-(5\\,000\\,000+80\\,000x)>0 \\Leftrightarrow 70\\,000x>5\\,000\\,000 \\Leftrightarrow x>71{,}43$; vì $x$ nguyên nên cần bán ít nhất $72$ áo",
  ]},
 ]},
 {n:"Hình học phẳng (Câu 7)",t:[
  {n:"Câu 7: Hình học phẳng tổng hợp (3 câu con, 3 điểm)",i:[
   "DT|Bài hình cuối đề, gồm 3 câu con a, b, c tăng dần độ khó: (a) thường chứng minh tứ giác nội tiếp; (b) chứng minh hệ thức tích đoạn thẳng hoặc hai đường thẳng song song/vuông góc; (c) là câu phân loại khó nhất, thường tính độ dài/diện tích hoặc chứng minh ba điểm thẳng hàng, ba đường đồng quy",
   "CT|Dấu hiệu tứ giác nội tiếp: tổng hai góc đối bằng $180^\\circ$, hoặc hai đỉnh kề cùng nhìn một cạnh dưới các góc bằng nhau. Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung; dùng tam giác đồng dạng (g.g) để suy ra hệ thức tích đoạn thẳng",
   "CT|Độ dài cung tròn $n^\\circ$: $l=\\dfrac{\\pi Rn}{180}$; diện tích hình quạt tròn: $S=\\dfrac{\\pi R^2n}{360}$",
   "VD|Ví dụ (câu a — tứ giác nội tiếp): Tam giác nhọn $ABC$ nội tiếp đường tròn $(O)$, hai đường cao $BE,CF$ cắt nhau tại $H$. Chứng minh tứ giác $BFEC$ nội tiếp: vì $\\angle BFC=\\angle BEC=90^\\circ$ nên $E,F$ cùng nhìn cạnh $BC$ dưới góc vuông, suy ra $B,F,E,C$ cùng thuộc đường tròn đường kính $BC$, tức $BFEC$ nội tiếp",
   "LY|Với câu (c) khó: nên thử vẽ thêm đường phụ (đường kính, tiếp tuyến song song, hoặc đường trung trực) và tìm các tam giác đồng dạng còn ẩn — phần lớn lời giải câu phân loại đều bắt đầu từ một cặp tam giác đồng dạng chưa được chỉ ra trực tiếp trong đề",
  ]},
 ]},
]});
