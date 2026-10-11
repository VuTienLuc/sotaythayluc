// Lớp 5 — 3 mạch, 21 bài, 64 mục
// Mỗi mục: "MÃ|nội dung" với MÃ ∈ DN (định nghĩa), CT (công thức), TC (tính chất), DH (dấu hiệu), DT (dạng toán), LY (lưu ý), VD (ví dụ).
// Công thức viết LaTeX trong $...$ (nhớ gõ \\ cho mỗi dấu \). Ví dụ có lời giải viết "... Lời giải: ..." để trình chiếu tách đề và đáp án.
SOTAY.themKhoi({g:5,l:"Lớp 5",c:"#8ecae6",s:[
 {n:"Học kì I",t:[
  {n:"Hỗn số",i:[
   "CT|Đổi hỗn số $a\\dfrac{b}{c}$ ra phân số: $a\\dfrac{b}{c}=\\dfrac{a\\times c+b}{c}$",
   "VD|Ví dụ: Đổi hỗn số $3\\dfrac{2}{5}$ ra phân số: $3\\dfrac{2}{5}=\\dfrac{3\\times 5+2}{5}=\\dfrac{17}{5}$. Ngược lại, đổi $\\dfrac{17}{5}$ ra hỗn số: lấy $17:5=3$ dư $2$, nên $\\dfrac{17}{5}=3\\dfrac{2}{5}$",
  ]},
  {n:"Số thập phân: đọc, viết, so sánh",i:[
   "DN|Số thập phân gồm phần nguyên và phần thập phân, cách nhau bởi dấu phẩy; các hàng của phần thập phân từ trái sang phải là phần mười, phần trăm, phần nghìn,...",
   "DT|So sánh hai số thập phân: so sánh phần nguyên trước (như so sánh số tự nhiên); nếu phần nguyên bằng nhau thì so sánh lần lượt từng hàng của phần thập phân từ trái sang phải, hàng nào có chữ số lớn hơn thì số đó lớn hơn",
   "VD|Ví dụ: Đọc số $72{,}506$: bảy mươi hai phẩy năm trăm linh sáu. So sánh $8{,}72$ và $8{,}7$: phần nguyên bằng nhau ($8=8$); viết $8{,}7=8{,}70$ để so sánh cùng số hàng thập phân với $8{,}72$; hàng phần mười bằng nhau ($7=7$), đến hàng phần trăm: $2>0$ nên $8{,}72>8{,}7$",
  ]},
  {n:"Các phép tính với số thập phân",i:[
   "CT|Cộng, trừ số thập phân: đặt tính sao cho các dấu phẩy thẳng cột với nhau, rồi cộng (trừ) như với số tự nhiên, cuối cùng viết dấu phẩy ở kết quả thẳng cột với các dấu phẩy đã cho",
   "CT|Nhân số thập phân: nhân như số tự nhiên (bỏ qua dấu phẩy), sau đó đếm xem trong cả hai thừa số có tất cả bao nhiêu chữ số ở phần thập phân thì dùng dấu phẩy tách ra ở tích bấy nhiêu chữ số kể từ phải sang trái",
   "CT|Chia số thập phân cho số thập phân: chuyển dấu phẩy của số chia sang bên phải cho đến khi số chia trở thành số tự nhiên, đồng thời chuyển dấu phẩy của số bị chia sang bên phải bấy nhiêu chữ số, rồi thực hiện phép chia như bình thường",
   "VD|Ví dụ (cộng, nhân): $12{,}45+3{,}7=16{,}15$ (đặt thẳng dấu phẩy: $12{,}45+03{,}70$). $2{,}3\\times 1{,}5$: nhân $23\\times 15=345$, hai thừa số có tổng cộng $2$ chữ số phần thập phân ($1+1$) nên tách $345$ thành $3{,}45$",
   "VD|Ví dụ (chia): Tính $12{,}6:0{,}4$. Lời giải: chuyển dấu phẩy của $0{,}4$ sang phải $1$ chữ số được $4$ (số tự nhiên); chuyển dấu phẩy của $12{,}6$ sang phải $1$ chữ số được $126$. Vậy $12{,}6:0{,}4=126:4=31{,}5$",
  ]},
  {n:"Tỉ số phần trăm",i:[
   "DN|Tỉ số phần trăm của hai số $a$ và $b$ là thương $a:b$ được viết dưới dạng phần trăm: tính $a:b$, nhân kết quả với $100$ rồi viết thêm kí hiệu $\\%$",
   "DT|Dạng 1 — Tìm tỉ số phần trăm của hai số $a$ và $b$: tính $(a:b)\\times 100\\,\\%$",
   "DT|Dạng 2 — Tìm giá trị $p\\%$ của một số $A$ đã cho: tính $A\\times p:100$",
   "DT|Dạng 3 — Tìm một số $A$, biết $p\\%$ của nó bằng một giá trị $B$ đã cho: tính $A=B:p\\times 100$",
   "VD|Ví dụ minh họa cả 3 dạng: (1) Một lớp có $32$ học sinh, trong đó có $8$ học sinh giỏi. Tỉ số phần trăm học sinh giỏi là $8:32\\times 100\\,\\%=25\\%$. (2) Một cửa hàng có $120$ sản phẩm, đã bán $75\\%$ số đó: đã bán $120\\times 75:100=90$ sản phẩm. (3) Số học sinh giỏi của một trường là $45$ em, chiếm $15\\%$ tổng số học sinh: trường đó có $45:15\\times 100=300$ học sinh",
  ]},
  {n:"Diện tích hình tam giác, hình thang",i:[
   "CT|Diện tích hình tam giác: $S=\\dfrac{a\\times h}{2}$ ($a$: độ dài đáy, $h$: chiều cao tương ứng, cùng đơn vị đo)",
   "CT|Diện tích hình thang: $S=\\dfrac{(a+b)\\times h}{2}$ ($a,b$: độ dài hai đáy, $h$: chiều cao, cùng đơn vị đo)",
   "VD|Ví dụ: Một hình tam giác có đáy $8$cm, chiều cao $5$cm. Diện tích là $S=\\dfrac{8\\times 5}{2}=20$ (cm$^2$)",
   "VD|Ví dụ: Một hình thang có đáy lớn $12$cm, đáy bé $8$cm, chiều cao $6$cm. Diện tích là $S=\\dfrac{(12+8)\\times 6}{2}=\\dfrac{120}{2}=60$ (cm$^2$)",
  ]},
  {n:"Hình hộp chữ nhật, hình lập phương: diện tích xung quanh, diện tích toàn phần",i:[
   "CT|Hình hộp chữ nhật có chiều dài $a$, chiều rộng $b$, chiều cao $h$: diện tích xung quanh $S_{xq}=(a+b)\\times 2\\times h$; diện tích toàn phần $S_{tp}=S_{xq}+2\\times a\\times b$",
   "CT|Hình lập phương cạnh $a$: diện tích xung quanh $S_{xq}=a\\times a\\times 4$; diện tích toàn phần $S_{tp}=a\\times a\\times 6$",
   "VD|Ví dụ: Một hình hộp chữ nhật có chiều dài $6$cm, chiều rộng $4$cm, chiều cao $5$cm. $S_{xq}=(6+4)\\times 2\\times 5=100$ (cm$^2$); $S_{tp}=100+2\\times 6\\times 4=100+48=148$ (cm$^2$)",
   "VD|Ví dụ: Một hình lập phương có cạnh $5$cm. $S_{xq}=5\\times 5\\times 4=100$ (cm$^2$); $S_{tp}=5\\times 5\\times 6=150$ (cm$^2$)",
  ]},
  {n:"Thể tích hình hộp chữ nhật, hình lập phương",i:[
   "CT|Thể tích hình hộp chữ nhật: $V=a\\times b\\times c$ ($a$: chiều dài, $b$: chiều rộng, $c$: chiều cao, cùng đơn vị đo)",
   "CT|Thể tích hình lập phương cạnh $a$: $V=a\\times a\\times a$",
   "VD|Ví dụ: Hình hộp chữ nhật có chiều dài $6$cm, chiều rộng $4$cm, chiều cao $5$cm có thể tích $V=6\\times 4\\times 5=120$ (cm$^3$). Hình lập phương cạnh $5$cm có thể tích $V=5\\times 5\\times 5=125$ (cm$^3$)",
  ]},
 ]},
 {n:"Học kì II",t:[
  {n:"Hình tròn: chu vi, diện tích",i:[
   "CT|Chu vi hình tròn: $C=d\\times 3{,}14=r\\times 2\\times 3{,}14$ ($d$: đường kính, $r$: bán kính)",
   "CT|Diện tích hình tròn: $S=r\\times r\\times 3{,}14$",
   "VD|Ví dụ: Một hình tròn có bán kính $r=5$cm. Chu vi $C=5\\times 2\\times 3{,}14=31{,}4$ (cm). Diện tích $S=5\\times 5\\times 3{,}14=78{,}5$ (cm$^2$)",
  ]},
  {n:"Cộng, trừ số đo thời gian",i:[
   "DT|Cộng số đo thời gian: cộng riêng từng loại đơn vị (giờ với giờ, phút với phút, giây với giây); nếu kết quả ở đơn vị phút hoặc giây $\\ge 60$ thì đổi $60$ đơn vị đó thành $1$ đơn vị lớn hơn liền kề",
   "DT|Trừ số đo thời gian: trừ riêng từng loại đơn vị; nếu số đo ở đơn vị nào của số bị trừ bé hơn số đo tương ứng của số trừ thì phải mượn $1$ đơn vị lớn hơn liền kề (đổi thành $60$ đơn vị nhỏ) rồi mới trừ",
   "VD|Ví dụ (cộng): $3$ giờ $45$ phút $+\\ 2$ giờ $30$ phút: cộng giờ $3+2=5$, cộng phút $45+30=75$ phút $=1$ giờ $15$ phút; vậy tổng là $5$ giờ $+1$ giờ $15$ phút $=6$ giờ $15$ phút. Ví dụ (trừ): $5$ giờ $20$ phút $-\\ 2$ giờ $45$ phút: vì $20<45$ nên mượn $1$ giờ đổi thành $60$ phút, được $5$ giờ $20$ phút $=4$ giờ $80$ phút; $4$ giờ $80$ phút $-\\ 2$ giờ $45$ phút $=2$ giờ $35$ phút",
  ]},
  {n:"Vận tốc, quãng đường, thời gian trong chuyển động đều",i:[
   "CT|$v=\\dfrac{s}{t}$; $s=v\\times t$; $t=\\dfrac{s}{v}$ ($v$: vận tốc, $s$: quãng đường, $t$: thời gian)",
   "LY|Lưu ý: đơn vị của $v$, $s$, $t$ phải khớp nhau — nếu $v$ tính theo km/h thì $t$ phải đổi ra giờ (ví dụ $1$ giờ $30$ phút $=1{,}5$ giờ) và $s$ tính theo km; nếu $v$ tính theo m/s thì $t$ tính theo giây và $s$ tính theo mét",
   "VD|Ví dụ (tìm $v$): Một ô tô đi quãng đường $120$km hết $2$ giờ $30$ phút ($=2{,}5$ giờ). Vận tốc ô tô là $v=120:2{,}5=48$ (km/h)",
   "VD|Ví dụ (tìm $s$): Một người đi xe đạp với vận tốc $12$km/h trong $1$ giờ $30$ phút ($=1{,}5$ giờ). Quãng đường đi được là $s=12\\times 1{,}5=18$ (km)",
   "VD|Ví dụ (tìm $t$): Một xe máy đi quãng đường $90$km với vận tốc $40$km/h. Thời gian đi hết quãng đường là $t=90:40=2{,}25$ giờ $=2$ giờ $15$ phút",
  ]},
  {n:"Toán chuyển động đều nâng cao: gặp nhau, đuổi kịp",i:[
   "CT|Hai chuyển động xuất phát cùng lúc từ 2 địa điểm cách nhau $s$, đi ngược chiều nhau với vận tốc $v_1,v_2$: thời gian để gặp nhau là $t=\\dfrac{s}{v_1+v_2}$",
   "CT|Hai chuyển động cùng chiều, vật đi sau (vận tốc $v_2>v_1$) đuổi theo vật đi trước đã có khoảng cách $s$: thời gian để đuổi kịp là $t=\\dfrac{s}{v_2-v_1}$",
   "VD|Ví dụ (ngược chiều): Hai ô tô xuất phát cùng lúc từ $A$ và $B$ cách nhau $180$km, đi ngược chiều nhau với vận tốc lần lượt $40$km/h và $50$km/h. Sau bao lâu hai xe gặp nhau? Lời giải: $t=180:(40+50)=180:90=2$ (giờ)",
   "VD|Ví dụ (đuổi kịp): Một xe máy đi từ $A$ lúc $6$ giờ với vận tốc $36$km/h. Đến $8$ giờ (xe máy đã đi trước $2$ giờ, tức được $36\\times 2=72$km), một ô tô cũng xuất phát từ $A$ đuổi theo với vận tốc $54$km/h. Hỏi ô tô đuổi kịp xe máy lúc mấy giờ? Lời giải: thời gian đuổi kịp là $t=72:(54-36)=72:18=4$ (giờ); ô tô xuất phát lúc $8$ giờ nên đuổi kịp lúc $8+4=12$ giờ",
  ]},
 ]},
 {n:"Ôn thi chuyên Trần Đại Nghĩa (Toán – Tư duy logic)",t:[
  {n:"Giới thiệu cấu trúc bài khảo sát năng lực Trần Đại Nghĩa",i:[
   "LY|Từ năm 2024 đến nay, kỳ tuyển sinh lớp 6 Trường THCS-THPT Trần Đại Nghĩa (TP.HCM) là một \\textit{Bài khảo sát năng lực} duy nhất (không tách thành các môn thi riêng), làm bài trong 90 phút: Phần 1 (30 phút) là trắc nghiệm bằng tiếng Anh gồm 20 câu kiến thức tự nhiên–xã hội và kỹ năng sống; Phần 2 (60 phút) là tự luận, chấm điểm theo 3 phần riêng: Tiếng Anh, Toán học và tư duy logic (làm bài bằng tiếng Việt), Tiếng Việt",
   "LY|Phần \\textit{Toán học và tư duy logic} không kiểm tra thuần túy kiến thức lớp 5 theo chương trình mà tập trung vào các bài toán đòi hỏi suy luận nhiều bước, học sinh phải trình bày lời giải rõ ràng để được chấm điểm từng bước (khác với trắc nghiệm chỉ tô đáp án); các dạng thường gặp: toán ngày tháng, dãy số theo quy luật, đếm số theo điều kiện, toán suy luận ngược, toán chuyển động, toán trồng cây, toán tìm quy luật và toán suy luận lô-gic",
  ]},
  {n:"Toán ngày tháng — Tổng các chữ số",i:[
   "LY|Bản chất: mỗi ngày tháng năm (dạng ngày/tháng/năm, ngày và tháng viết đủ 2 chữ số) được viết liền thành một dãy 8 chữ số $d_1d_2d_3d_4d_5d_6d_7d_8$; đề thường yêu cầu so sánh tổng $5$ chữ số đầu ($d_1$ đến $d_5$) với tổng $5$ chữ số cuối ($d_4$ đến $d_8$) — hai nhóm này dùng chung $2$ chữ số ở giữa ($d_4,d_5$) vì $5+5=10>8$",
   "VD|Ví dụ (khảo sát Trần Đại Nghĩa 2022): Ngày $13/01/2022$ viết liền thành dãy $8$ chữ số: $1,3,0,1,2,0,2,2$. Tổng $5$ chữ số đầu: $1+3+0+1+2=7$. Tổng $5$ chữ số cuối: $1+2+0+2+2=7$ — bằng nhau. Hãy tìm ngày cuối cùng của năm $2022$ cũng có tính chất này. Lời giải: Thử với ngày $30/12/2022$: dãy chữ số là $3,0,1,2,2,0,2,2$; tổng $5$ chữ số đầu $=3+0+1+2+2=8$; tổng $5$ chữ số cuối $=2+2+0+2+2=8$ — bằng nhau. Kiểm tra không còn ngày nào muộn hơn trong năm $2022$ thỏa mãn, vậy đáp số là ngày $30/12/2022$",
  ]},
  {n:"Dãy số cách đều — Tính tổng dãy số",i:[
   "CT|Số số hạng của dãy số cách đều $=$ (số cuối $-$ số đầu) $:$ khoảng cách $+1$; Tổng dãy số cách đều $=$ (số đầu $+$ số cuối) $\\times$ số số hạng $:2$",
   "VD|Ví dụ (khảo sát Trần Đại Nghĩa 2023): Tính hiệu giữa tổng các số lẻ từ $1$ đến $2023$ và tổng các số chẵn từ $2$ đến $2022$. Lời giải: Dãy số lẻ $1,3,\\ldots,2023$ có số số hạng $=(2023-1):2+1=1012$; tổng $=(1+2023)\\times 1012:2=1012\\times1012=1\\,024\\,144$. Dãy số chẵn $2,4,\\ldots,2022$ có số số hạng $=(2022-2):2+1=1011$; tổng $=(2+2022)\\times1011:2=1012\\times1011=1\\,023\\,132$. Hiệu cần tìm: $1\\,024\\,144-1\\,023\\,132=1012$",
   "LY|Cách nhớ nhanh cho dạng này: mỗi số lẻ trong dãy $1,3,\\ldots,2023$ đều lớn hơn số chẵn đứng ngay trước nó đúng $1$ đơn vị ($1$ hơn $0$ không tính, $3$ hơn $2$, $5$ hơn $4$,…), và dãy lẻ có nhiều hơn dãy chẵn đúng $1$ số hạng (số $1$ không có số chẵn nào ghép cặp) — đó chính là lí do hiệu bằng $1012$ (có $1011$ cặp, mỗi cặp hơn $1$, cộng thêm số $1$ lẻ ra)",
  ]},
  {n:"Đếm số tự nhiên theo điều kiện tổng các chữ số",i:[
   "DT|Cách đếm có hệ thống: xét lần lượt từng chữ số hàng cao nhất (hàng trăm, hàng nghìn,…) đã cố định, rồi tìm số cách chọn các chữ số còn lại sao cho tổng của chúng bằng giá trị cần thiết; số cặp chữ số (hàng chục, hàng đơn vị), mỗi chữ số từ $0$ đến $9$, có tổng bằng $T$ cho trước: có $T+1$ cách nếu $0\\leq T\\leq 9$, có $19-T$ cách nếu $10\\leq T\\leq18$",
   "VD|Ví dụ (dạng thường gặp trong đề khảo sát): Đếm các số tự nhiên từ $400$ đến $900$ có tổng các chữ số bằng $10$. Lời giải: Xét theo chữ số hàng trăm $h$ ($h$ từ $4$ đến $8$, vì $900$ có tổng chữ số $9\\neq10$ nên không tính): cần hai chữ số còn lại có tổng $T=10-h$. Với $h=4$: $T=6\\Rightarrow7$ số ($406,415,\\ldots,460$); $h=5$: $T=5\\Rightarrow6$ số; $h=6$: $T=4\\Rightarrow5$ số; $h=7$: $T=3\\Rightarrow4$ số; $h=8$: $T=2\\Rightarrow3$ số. Tổng cộng: $7+6+5+4+3=25$ số",
  ]},
  {n:"Toán trồng cây — Đánh số nhà (dãy số lẻ liên tiếp)",i:[
   "LY|Bản chất giống bài toán trồng cây: các ngôi nhà trên một con đường được đánh số bằng các số lẻ liên tiếp $1,3,5,7,\\ldots$ (nhà thứ $k$ mang số $2k-1$); các chữ số dùng để đánh số nhà được làm bằng kim loại, mỗi chữ số tốn một khoản chi phí cố định, nên phải tính riêng số nhà có $1$ chữ số (từ $1$ đến $9$: có $5$ nhà là $1,3,5,7,9$), số nhà có $2$ chữ số (từ $11$ đến $99$: có $45$ nhà), số nhà có $3$ chữ số,\\ldots trước khi cộng chi phí",
   "VD|Ví dụ (khảo sát Trần Đại Nghĩa 2026): Các nhà trên một con đường đánh số lẻ liên tiếp bắt đầu từ $1$; mỗi chữ số làm bằng kim loại giá $45\\,000$đ. a) Tính chi phí đánh số cho các nhà từ $1$ đến $19$. b) Nếu tổng chi phí là $3\\,375\\,000$đ thì con đường có bao nhiêu nhà? Lời giải: a) Từ $1$ đến $19$ có $10$ nhà lẻ, trong đó $5$ nhà có $1$ chữ số ($1,3,5,7,9$: $5$ chữ số) và $5$ nhà có $2$ chữ số ($11,13,15,17,19$: $10$ chữ số); tổng $15$ chữ số, chi phí $=15\\times45\\,000=675\\,000$đ. b) Tổng số chữ số $=3\\,375\\,000:45\\,000=75$ chữ số. Dùng $5$ chữ số cho $5$ nhà đầu ($1$ chữ số), còn lại $75-5=70$ chữ số dùng cho các nhà $2$ chữ số: $70:2=35$ nhà. Vậy tổng số nhà $=5+35=40$ nhà (nhà cuối cùng mang số $79$)",
  ]},
  {n:"Toán chuyển động đuổi kịp — xuất phát lệch giờ",i:[
   "CT|Hai xe đi cùng chiều, xuất phát lệch giờ nhau: xe đi trước với vận tốc $v_1$ xuất phát trước một khoảng thời gian $\\Delta t$, xe đi sau với vận tốc $v_2>v_1$ xuất phát sau; khoảng cách hai xe khi xe sau bắt đầu đi là $s=v_1\\times\\Delta t$; thời gian để xe sau đuổi kịp (tính từ lúc xe sau xuất phát) là $t=\\dfrac{s}{v_2-v_1}$",
   "VD|Ví dụ (dạng thường gặp): Một xe máy xuất phát từ $A$ lúc $6$ giờ $47$ phút với vận tốc $36$km/h; một ô tô cũng xuất phát từ $A$ đuổi theo cùng hướng lúc $7$ giờ $2$ phút với vận tốc $54$km/h. Hỏi ô tô đuổi kịp xe máy lúc mấy giờ? Lời giải: Xe máy xuất phát trước ô tô $15$ phút $=\\dfrac14$ giờ, nên khi ô tô bắt đầu đi, xe máy đã cách $A$ một khoảng $s=36\\times\\dfrac14=9$ (km). Thời gian ô tô đuổi kịp (từ lúc ô tô xuất phát): $t=9:(54-36)=9:18=0{,}5$ giờ $=30$ phút. Vậy ô tô đuổi kịp xe máy lúc $7$ giờ $2$ phút $+30$ phút $=7$ giờ $32$ phút",
  ]},
  {n:"Toán suy luận ngược (làm ngược từng bước)",i:[
   "LY|Bản chất: khi đề bài cho một chuỗi các phép biến đổi liên tiếp (thêm, bớt, gấp lên,…) và chỉ biết kết quả sau cùng, ta \\textit{làm ngược} từ kết quả cuối trở về, thực hiện phép tính ngược lại với mỗi bước theo thứ tự ngược: bước cuối cùng thực hiện phép cộng thì khi làm ngược ta lấy trừ (và ngược lại); bước cuối cùng thực hiện phép nhân với $k$ thì khi làm ngược ta lấy chia cho $k$ (và ngược lại)",
   "DT|Các bước giải: (1) liệt kê đúng thứ tự các phép biến đổi đã cho; (2) bắt đầu từ giá trị cuối cùng (đã biết), thực hiện lần lượt các phép tính \\textit{ngược} với từng bước, theo chiều từ bước cuối về bước đầu; (3) giá trị thu được sau khi làm ngược hết tất cả các bước chính là giá trị ban đầu cần tìm",
   "VD|Ví dụ (khảo sát Trần Đại Nghĩa 2026): Đội $A$ và đội $B$ lần lượt chuyển người ba lần: lần 1, $\\dfrac13$ số người đội $A$ chuyển sang đội $B$; lần 2, đội $B$ chuyển sang đội $A$ một số người gấp $3$ lần số người đội $A$ đang có (sau lần 1); lần 3, đội $A$ chuyển sang đội $B$ $5$ người. Sau ba lần, đội $A$ còn $35$ người. Hỏi lúc đầu đội $A$ có bao nhiêu người? Lời giải (làm ngược từng bước): Trước lần 3 (làm ngược phép trừ $5$ thành phép cộng $5$): đội $A$ có $35+5=40$ người. Số $40$ này là $A$ sau lần 1 cộng thêm $3$ lần chính nó, tức bằng $4$ lần số người đội $A$ sau lần 1 (làm ngược phép nhân $4$ thành phép chia $4$): đội $A$ sau lần 1 có $40:4=10$ người. Số $10$ này bằng đội $A$ ban đầu trừ đi $\\dfrac13$ của nó, tức bằng $\\dfrac23$ số người ban đầu (làm ngược: nhân với $\\dfrac32$): số người ban đầu của đội $A$ là $10\\times\\dfrac32=15$ người",
  ]},
  {n:"Toán tìm quy luật dãy số, hình vẽ",i:[
   "DT|Cách tìm quy luật của một dãy số: xét hiệu (hoặc thương) giữa hai số hạng liên tiếp xem có theo một quy luật cố định hay không (cùng tăng thêm một lượng, cùng nhân với một số,…); nếu hiệu không cố định, thử xét hiệu của hiệu (quy luật bậc hai), hoặc tìm mối liên hệ giữa số hạng với vị trí của nó trong dãy (số thứ $n$ tính theo $n$)",
   "VD|Ví dụ: Tìm số hạng tiếp theo của dãy số $2,6,12,20,30,\\ldots$. Lời giải: Xét hiệu hai số hạng liên tiếp: $6-2=4$; $12-6=6$; $20-12=8$; $30-20=10$ — các hiệu này tăng dần đều thêm $2$ mỗi lần, nên hiệu tiếp theo là $12$, số hạng tiếp theo là $30+12=42$. (Nhận xét thêm: mỗi số hạng bằng tích của vị trí nhân với vị trí cộng $1$, tức số thứ $n$ là $n\\times(n+1)$: $1\\times2=2$, $2\\times3=6$, $3\\times4=12$,…, $6\\times7=42$ — khớp với kết quả trên)",
  ]},
  {n:"Toán tuổi nâng cao",i:[
   "DT|Cách giải: đặt tuổi hiện tại của người ít tuổi hơn là $x$, biểu diễn tuổi người còn lại theo $x$ dựa vào tỉ số đã cho ở hiện tại; sau đó biểu diễn tuổi hai người sau một số năm (mỗi người đều cộng thêm đúng số năm đó), lập phương trình theo tỉ số mới rồi giải tìm $x$",
   "VD|Ví dụ: Hiện nay tuổi cha gấp $4$ lần tuổi con. Sau $6$ năm nữa, tuổi cha gấp $3$ lần tuổi con. Tính tuổi hiện nay của mỗi người. Lời giải: Gọi tuổi con hiện nay là $x$ (tuổi), tuổi cha hiện nay là $4x$. Sau $6$ năm: tuổi con là $x+6$, tuổi cha là $4x+6$; theo đề $4x+6=3\\times(x+6)=3x+18$, suy ra $x=12$. Vậy tuổi con hiện nay là $12$, tuổi cha hiện nay là $4\\times12=48$ (tuổi). Thử lại: sau $6$ năm, con $18$ tuổi, cha $54$ tuổi, và $54=3\\times18$ (đúng)",
  ]},
  {n:"Toán suy luận lô-gic có bảng (loại trừ)",i:[
   "LY|Bản chất: khi đề cho nhiều đối tượng (người, đồ vật,…) cùng nhiều đặc điểm (màu áo, môn thể thao,…) kèm các gợi ý rời rạc, ta lập một bảng (đối tượng $\\times$ đặc điểm) rồi dùng từng gợi ý để \\textit{loại trừ} dần các khả năng không thể xảy ra, cho đến khi mỗi đối tượng chỉ còn khớp với đúng một đặc điểm ở mỗi cột",
   "DT|Các bước giải: (1) liệt kê tất cả đối tượng và tất cả đặc điểm cần gán; (2) đọc kỹ từng gợi ý, đánh dấu \\textit{loại} (không thể) hoặc \\textit{chắc chắn đúng} vào bảng; (3) một gợi ý loại trừ có thể kéo theo các suy luận mới (nếu một ô đã chắc chắn đúng thì các ô còn lại cùng hàng, cùng cột đều bị loại); lặp lại đến khi bảng được lấp đầy",
   "VD|Ví dụ: Ba bạn An, Bình, Chi mỗi bạn mặc một trong ba màu áo (đỏ, xanh, vàng) và chơi một trong ba môn (bơi, cầu lông, bóng bàn), không ai trùng nhau. Biết: (1) An không mặc áo đỏ; (2) Bạn mặc áo xanh chơi bóng bàn; (3) Chi chơi cầu lông và không mặc áo vàng; (4) Bình không chơi bóng bàn. Hỏi mỗi bạn mặc áo màu gì, chơi môn gì? Lời giải: Từ (3), Chi chơi cầu lông nên theo (2) Chi không mặc xanh (vì áo xanh gắn với bóng bàn); kết hợp Chi không mặc vàng, suy ra Chi mặc đỏ. Từ (1), An không mặc đỏ nên An và Bình chia nhau hai màu xanh, vàng. Từ (4), Bình không chơi bóng bàn nên theo (2) Bình không mặc xanh, suy ra Bình mặc vàng và An mặc xanh. Theo (2), An (áo xanh) chơi bóng bàn. Vậy Bình chơi môn còn lại là bơi. Kết luận: An — áo xanh — bóng bàn; Bình — áo vàng — bơi; Chi — áo đỏ — cầu lông",
  ]},
 ]},
]});
