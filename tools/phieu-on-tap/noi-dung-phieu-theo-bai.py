# -*- coding: utf-8 -*-
# Phiếu luyện theo từng bài – Ôn thi giữa kì 1, Toán 4. Mỗi bài: 3 mức (M1 nhận biết, M2 hiểu, M3 vận dụng).
import json

def n(x):
    s = f"{x:,}".replace(",", "\\,")
    return "$" + s + "$"

W = []
def ws(topic, items):
    W.append({"bai": topic, "items": items})

# Mỗi bài: (mức, đề, đáp án ngắn, loại) ; loại "calc" = có ô đặt tính
ws("Đọc, viết số đến lớp triệu. Hàng, lớp và giá trị chữ số", [
 (1, f"Đọc các số: a) {n(6250317)}; b) {n(40008090)}.", "a) Sáu triệu hai trăm năm mươi nghìn ba trăm mười bảy; b) Bốn mươi triệu không trăm linh tám nghìn không trăm chín mươi"),
 (1, "Viết số: Hai trăm linh năm triệu ba trăm nghìn không trăm mười lăm.", f"{n(205300015)}"),
 (1, f"Trong số {n(9374621)}, chữ số $3$ thuộc hàng nào, lớp nào?", "Hàng trăm nghìn, lớp nghìn"),
 (2, "Viết số gồm $8$ triệu, $4$ chục nghìn, $6$ trăm và $2$ đơn vị.", f"{n(8040602)}"),
 (2, f"Viết số {n(5060708)} thành tổng theo các hàng.", f"{n(5000000)}$+${n(60000)}$+700+8$"),
 (2, f"Nêu giá trị của chữ số $5$ trong mỗi số: a) {n(350128)}; b) {n(1205000)}; c) {n(57000000)}.", f"a) {n(50000)}; b) {n(5000)}; c) {n(50000000)}"),
 (3, "Từ sáu chữ số $0;2;4;5;7;9$, viết số lớn nhất và số bé nhất có sáu chữ số khác nhau.", f"Lớn nhất {n(975420)}; bé nhất {n(204579)} (chữ số $0$ không đứng đầu)"),
 (3, f"Trong số {n(4834000)}, giá trị của chữ số $4$ ở hàng triệu gấp bao nhiêu lần giá trị của chữ số $4$ ở hàng nghìn?", f"{n(4000000)}$:${n(4000)}$=${n(1000)}. Gấp {n(1000)} lần"),
])
ws("Số chẵn, số lẻ. Dãy số tự nhiên", [
 (1, f"Trong các số {n(345)}; {n(1028)}; {n(7776)}; {n(9091)}; {n(50000)}, số nào là số chẵn, số nào là số lẻ?", f"Số chẵn: {n(1028)}; {n(7776)}; {n(50000)}. Số lẻ: {n(345)}; {n(9091)}"),
 (1, f"Viết số liền trước và số liền sau của: a) {n(99999)}; b) {n(1000000)}.", f"a) {n(99998)} và {n(100000)}; b) {n(999999)} và {n(1000001)}"),
 (1, f"Viết ba số chẵn liên tiếp, trong đó số lớn nhất là {n(2000)}.", f"{n(1996)}; {n(1998)}; {n(2000)}"),
 (2, "Có bao nhiêu số chẵn từ $20$ đến $100$?", "$(100-20):2+1=41$ (số)"),
 (2, f"Tìm các số lẻ $x$, biết {n(1997)}$<x<${n(2002)}.", f"$x$ là {n(1999)} hoặc {n(2001)}"),
 (2, "Dãy số $3;7;11;\\ldots;99$ có bao nhiêu số?", "$(99-3):4+1=25$ (số)"),
 (3, "Tổng của hai số lẻ là số chẵn hay số lẻ? Cho hai ví dụ.", "Luôn là số chẵn. Ví dụ: $3+5=8$; $11+27=38$"),
 (3, "Để đánh số trang một quyển sách từ trang $1$ đến trang $120$ cần dùng bao nhiêu chữ số?", "Trang $1$–$9$: $9$ chữ số; trang $10$–$99$: $90\\times2=180$ chữ số; trang $100$–$120$: $21\\times3=63$ chữ số. Tổng: $9+180+63=252$ chữ số"),
])
ws("So sánh, sắp xếp các số. Làm tròn số", [
 (1, f"Điền dấu $>$, $<$, $=$: a) {n(89999)} $\\ldots$ {n(100000)}; b) {n(456789)} $\\ldots$ {n(456798)}.", "a) $<$; b) $<$"),
 (1, f"Làm tròn số {n(63482)} đến hàng nghìn và hàng chục nghìn.", f"Hàng nghìn: {n(63000)}; hàng chục nghìn: {n(60000)}"),
 (1, f"Tìm số lớn nhất: {n(712345)}; {n(721345)}; {n(712354)}; {n(721354)}.", f"{n(721354)}"),
 (2, f"Sắp xếp theo thứ tự từ bé đến lớn: {n(908765)}; {n(980567)}; {n(98765)}; {n(908756)}.", f"{n(98765)}; {n(908756)}; {n(908765)}; {n(980567)}"),
 (2, f"Làm tròn số {n(2495180)} đến hàng chục nghìn và hàng trăm nghìn.", f"Hàng chục nghìn: {n(2500000)} (vì $5\\geq5$, nhớ liên tiếp); hàng trăm nghìn: {n(2500000)} (vì $9\\geq5$)"),
 (2, f"Tìm chữ số $x$ để $5x6\\,182>586\\,999$.", "So hàng chục nghìn: cần $x>8$ (nếu $x=8$ thì $586\\,182<586\\,999$). Vậy $x=9$"),
 (3, f"Tìm số tròn nghìn bé nhất mà khi làm tròn đến hàng chục nghìn thì được {n(50000)}.", f"Các số làm tròn được {n(50000)} là từ {n(45000)} đến {n(54999)}. Số tròn nghìn bé nhất là {n(45000)}"),
 (3, f"Xã A có {n(24587)} người, xã B có {n(24578)} người. Xã nào đông dân hơn? Làm tròn số dân mỗi xã đến hàng trăm.", f"Xã A đông hơn (hàng chục $8>7$). Làm tròn: xã A {n(24600)}, xã B {n(24600)}"),
])
ws("Đặt tính và tính: cộng, trừ, nhân, chia", [
 (1, f"Đặt tính rồi tính: a) {n(35246)}$+${n(21532)}; b) {n(68974)}$-${n(35621)}.", f"a) {n(56778)}; b) {n(33353)}", "calc"),
 (1, f"Đặt tính rồi tính: a) {n(2143)}$\\times3$; b) {n(8496)}$:4$.", f"a) {n(6429)}; b) {n(2124)}", "calc"),
 (1, f"Đặt tính rồi tính: a) {n(47385)}$+${n(38649)}; b) {n(52000)}$-${n(27865)}.", f"a) {n(86034)}; b) {n(24135)}", "calc"),
 (2, f"Đặt tính rồi tính: a) {n(18275)}$\\times4$; b) {n(39168)}$:6$.", f"a) {n(73100)}; b) {n(6528)}", "calc"),
 (2, f"Đặt tính rồi tính: a) {n(25007)}$\\times3$; b) {n(45230)}$:5$.", f"a) {n(75021)}; b) {n(9046)} (chú ý chữ số $0$ ở thương)", "calc"),
 (2, f"Đặt tính rồi tính: a) {n(71409)}$:7$; b) {n(36048)}$:9$.", f"a) {n(10201)} (dư $2$); b) {n(4005)} (dư $3$)", "calc"),
 (3, f"Tìm số bị chia, biết thương là {n(1205)}, số chia là $8$ và số dư là $7$.", f"{n(1205)}$\\times8+7=${n(9647)}"),
 (3, f"Bạn An tính {n(6080)}$:8=76$. An đúng hay sai? Nếu sai, hãy sửa lại.", f"Sai, An quên chữ số $0$ ở thương. Đúng: {n(6080)}$:8=760$"),
])
ws("Tìm thành phần chưa biết. Biểu thức có chứa chữ", [
 (1, f"Tìm $x$: $x+${n(3456)}$=${n(9000)}.", f"$x=${n(9000)}$-${n(3456)}$=${n(5544)}"),
 (1, f"Tìm $x$: $x-${n(1250)}$=${n(4750)}.", f"$x=${n(4750)}$+${n(1250)}$=${n(6000)}"),
 (1, f"Tìm $x$: $x\\times6=${n(4236)}.", f"$x=${n(4236)}$:6=706$"),
 (2, f"Tìm $x$: {n(24000)}$:x=8$.", f"$x=${n(24000)}$:8=${n(3000)}"),
 (2, "Tính giá trị biểu thức $a\\times b-c$ với $a=325$, $b=4$, $c=600$.", f"$325\\times4-600=${n(1300)}$-600=700$"),
 (2, f"Tính giá trị biểu thức $(m+n):5$ với $m=${n(1238)}, $n=${n(2762)}.", f"$({n(1238)[1:-1]}+{n(2762)[1:-1]}):5=${n(4000)}$:5=800$"),
 (3, f"Tìm $x$: $x:4=${n(1205)}$+795$.", f"$x:4=${n(2000)}; $x=${n(2000)}$\\times4=${n(8000)}"),
 (3, "Tính bằng cách thuận tiện: a) $5\\times128\\times20$; b) $36\\times7+64\\times7$.", f"a) $(5\\times20)\\times128=100\\times128=${n(12800)}; b) $(36+64)\\times7=100\\times7=700$"),
])
ws("Giải toán có lời văn hai, ba bước", [
 (1, "Lớp 4A có $35$ học sinh, lớp 4B nhiều hơn lớp 4A $3$ học sinh. Hỏi cả hai lớp có bao nhiêu học sinh?", "Lớp 4B: $35+3=38$; cả hai lớp: $35+38=73$ (học sinh)"),
 (1, "Một cuộn dây dài $500$ m, người ta cắt đi $3$ đoạn, mỗi đoạn dài $85$ m. Hỏi cuộn dây còn lại bao nhiêu mét?", "Đã cắt $85\\times3=255$ (m); còn lại $500-255=245$ (m)"),
 (1, "Có $3$ hộp bút, mỗi hộp $12$ chiếc, chia đều cho $4$ bạn. Hỏi mỗi bạn được mấy chiếc bút?", "Có $12\\times3=36$ (chiếc); mỗi bạn $36:4=9$ (chiếc)"),
 (2, f"Một xưởng ngày đầu làm được {n(2450)} sản phẩm, ngày thứ hai làm gấp đôi ngày đầu, ngày thứ ba làm ít hơn ngày thứ hai $600$ sản phẩm. Hỏi cả ba ngày xưởng làm được bao nhiêu sản phẩm?", f"Ngày 2: {n(4900)}; ngày 3: {n(4300)}; cả ba ngày: {n(2450)}$+${n(4900)}$+${n(4300)}$=${n(11650)} (sản phẩm)"),
 (2, f"Mẹ có {n(200000)} đồng, mẹ mua $2$ kg thịt, mỗi ki-lô-gam giá {n(85000)} đồng. Hỏi mẹ còn lại bao nhiêu tiền?", f"Tiền thịt: {n(170000)} đồng; còn lại {n(30000)} đồng"),
 (2, "Cửa hàng có $4$ thùng nước, mỗi thùng $24$ chai. Cửa hàng đã bán $37$ chai. Hỏi còn lại bao nhiêu chai nước?", "Có $24\\times4=96$ (chai); còn lại $96-37=59$ (chai)"),
 (3, "Bố hơn con $28$ tuổi, tổng số tuổi của hai bố con là $46$ tuổi. Tính tuổi mỗi người.", "Tuổi con: $(46-28):2=9$ (tuổi); tuổi bố: $9+28=37$ (tuổi)"),
 (3, f"Xe thứ nhất chở $3$ chuyến, mỗi chuyến {n(1250)} kg. Xe thứ hai chở $2$ chuyến, mỗi chuyến {n(1600)} kg. Xe nào chở được nhiều hơn và nhiều hơn bao nhiêu ki-lô-gam?", f"Xe 1: {n(3750)} kg; xe 2: {n(3200)} kg. Xe thứ nhất chở nhiều hơn $550$ kg"),
])
ws("Tìm số trung bình cộng", [
 (1, "Tìm số trung bình cộng của $24$; $36$ và $45$.", "$(24+36+45):3=105:3=35$"),
 (1, "Tìm số trung bình cộng của $120$; $135$; $150$ và $175$.", "$580:4=145$"),
 (1, "Ba ngày Lan đọc được lần lượt $25$, $30$ và $35$ trang sách. Hỏi trung bình mỗi ngày Lan đọc được bao nhiêu trang?", "$(25+30+35):3=30$ (trang)"),
 (2, "Tìm số trung bình cộng của các số chẵn từ $10$ đến $20$.", "Dãy $10;12;14;16;18;20$ cách đều nên TBC $=(10+20):2=15$"),
 (2, "Bốn bạn cân nặng lần lượt $32$ kg, $35$ kg, $29$ kg và $36$ kg. Hỏi trung bình mỗi bạn cân nặng bao nhiêu ki-lô-gam?", "$(32+35+29+36):4=132:4=33$ (kg)"),
 (2, "Trung bình cộng của hai số là $48$. Một số là $37$. Tìm số kia.", "Tổng hai số $48\\times2=96$; số kia $96-37=59$"),
 (3, "Một đội có $5$ người, tuổi trung bình là $30$. Khi thêm đội trưởng thì tuổi trung bình của cả đội tăng thêm $2$ tuổi. Tính tuổi đội trưởng.", "Tổng tuổi $5$ người: $150$; tổng tuổi $6$ người: $32\\times6=192$; đội trưởng: $192-150=42$ (tuổi)"),
 (3, f"Xe thứ nhất chở $4$ chuyến, mỗi chuyến {n(1500)} kg; xe thứ hai chở $2$ chuyến, mỗi chuyến {n(1800)} kg. Hỏi trung bình mỗi chuyến chở bao nhiêu ki-lô-gam?", f"Tổng: {n(6000)}$+${n(3600)}$=${n(9600)} kg; số chuyến: $6$; TB: {n(9600)}$:6=${n(1600)} (kg)"),
])
ws("Bài toán rút về đơn vị", [
 (1, "$5$ gói kẹo như nhau có $150$ viên. Hỏi mỗi gói có bao nhiêu viên kẹo?", "$150:5=30$ (viên)"),
 (1, "$3$ hộp bút như nhau có $36$ chiếc. Hỏi $8$ hộp như thế có bao nhiêu chiếc bút?", "Một hộp $12$ chiếc; $8$ hộp: $12\\times8=96$ (chiếc)"),
 (1, f"$6$ xe như nhau chở được {n(4200)} kg hàng. Hỏi mỗi xe chở được bao nhiêu ki-lô-gam?", f"{n(4200)}$:6=700$ (kg)"),
 (2, "$7$ bao gạo như nhau nặng $350$ kg. Hỏi $12$ bao như thế nặng bao nhiêu ki-lô-gam?", "Một bao $50$ kg; $12$ bao: $50\\times12=600$ (kg)"),
 (2, "Bình đọc $4$ ngày được $120$ trang (mỗi ngày đọc như nhau). Hỏi $9$ ngày Bình đọc được bao nhiêu trang?", "Mỗi ngày $30$ trang; $9$ ngày: $270$ trang"),
 (2, "$48$ quyển vở chia đều cho $8$ bạn. Hỏi $72$ quyển vở chia như thế thì được bao nhiêu bạn?", "Mỗi bạn $6$ quyển; $72:6=12$ (bạn)"),
 (3, "$5$ máy may như nhau, trong $1$ giờ may được $60$ chiếc áo. Hỏi $8$ máy như thế trong $3$ giờ may được bao nhiêu chiếc áo?", "Một máy $1$ giờ: $12$ áo; $8$ máy $1$ giờ: $96$ áo; $3$ giờ: $96\\times3=288$ (áo)"),
 (3, "$24$ l dầu đựng đều vào $8$ can. Hỏi có $75$ l dầu thì đựng được bao nhiêu can như thế?", "Mỗi can $3$ l; $75:3=25$ (can)"),
])
ws("Góc nhọn, góc vuông, góc tù, góc bẹt. Đo góc", [
 (1, "Xếp các góc sau vào nhóm góc nhọn, góc vuông, góc tù, góc bẹt: $60^\\circ$; $90^\\circ$; $150^\\circ$; $180^\\circ$; $89^\\circ$; $91^\\circ$.", "Nhọn: $60^\\circ$, $89^\\circ$; vuông: $90^\\circ$; tù: $150^\\circ$, $91^\\circ$; bẹt: $180^\\circ$"),
 (1, "Lúc $3$ giờ và lúc $6$ giờ, kim giờ và kim phút tạo thành góc gì?", "$3$ giờ: góc vuông; $6$ giờ: góc bẹt"),
 (1, "Góc vuông bằng bao nhiêu độ? Góc bẹt gấp mấy lần góc vuông?", "$90^\\circ$; góc bẹt $180^\\circ$ gấp $2$ lần góc vuông"),
 (2, "Hình chữ nhật có mấy góc vuông? Một hình tam giác có một góc vuông thì hai góc còn lại là góc gì?", "$4$ góc vuông; hai góc còn lại đều là góc nhọn"),
 (2, "Lúc $2$ giờ và lúc $10$ giờ, hai kim đồng hồ tạo thành góc bao nhiêu độ? Đó là góc gì?", "Đều là $60^\\circ$ (cách $2$ khoảng), là góc nhọn"),
 (2, "Kim phút quay từ số $12$ đến số $4$ thì quay được bao nhiêu độ? Góc đó là góc gì?", "$4\\times30^\\circ=120^\\circ$, là góc tù"),
 (3, "Một góc bẹt được một tia chia thành hai góc, trong đó một góc bằng $70^\\circ$. Tính góc còn lại và cho biết đó là góc gì.", "$180^\\circ-70^\\circ=110^\\circ$, là góc tù"),
 (3, "Trong một ngày, từ $1$ giờ đến $12$ giờ, lúc mấy giờ đúng thì hai kim đồng hồ tạo thành góc vuông?", "Lúc $3$ giờ và lúc $9$ giờ"),
])
ws("Chu vi, diện tích hình chữ nhật, hình vuông", [
 (1, "Hình chữ nhật có chiều dài $15$ cm, chiều rộng $8$ cm. Tính chu vi và diện tích.", "$P=(15+8)\\times2=46$ cm; $S=15\\times8=120\\ cm^2$"),
 (1, "Hình vuông có cạnh $9$ cm. Tính chu vi và diện tích.", "$P=36$ cm; $S=81\\ cm^2$"),
 (1, "Một hình vuông có chu vi $28$ cm. Tính độ dài cạnh.", "$28:4=7$ (cm)"),
 (2, "Hình chữ nhật có chu vi $50$ cm, chiều dài $16$ cm. Tính chiều rộng và diện tích.", "Nửa chu vi $25$ cm; chiều rộng $9$ cm; $S=16\\times9=144\\ cm^2$"),
 (2, "Hình chữ nhật có diện tích $96\\ cm^2$, chiều rộng $8$ cm. Tính chiều dài và chu vi.", "Chiều dài $96:8=12$ cm; $P=(12+8)\\times2=40$ cm"),
 (2, "Sân trường hình chữ nhật dài $40$ m, rộng $25$ m. Bạn Nam chạy quanh sân $3$ vòng. Hỏi Nam chạy được bao nhiêu mét?", "Chu vi $(40+25)\\times2=130$ m; $3$ vòng: $390$ m"),
 (3, "Ghép $3$ hình vuông cạnh $4$ cm thành một hàng được một hình chữ nhật. Tính chu vi và diện tích hình chữ nhật đó.", "Dài $12$ cm, rộng $4$ cm; $P=32$ cm; $S=48\\ cm^2$"),
 (3, "Một tấm bìa hình vuông cạnh $12$ cm, người ta cắt bỏ một hình vuông cạnh $3$ cm ở một góc. Tính diện tích phần bìa còn lại.", "$12\\times12-3\\times3=144-9=135\\ (cm^2)$"),
])
ws("Đơn vị đo độ dài, diện tích, khối lượng, dung tích", [
 (1, "Điền số: $5$ km $=\\ ?$ m; $7$ m $=\\ ?$ cm; $3$ kg $=\\ ?$ g.", f"{n(5000)} m; $700$ cm; {n(3000)} g"),
 (1, "Điền số: $4$ tấn $=\\ ?$ tạ; $6$ yến $=\\ ?$ kg; $2$ l $=\\ ?$ ml.", f"$40$ tạ; $60$ kg; {n(2000)} ml"),
 (1, "Điền số: $3\\ m^2=\\ ?\\ dm^2$; $5\\ dm^2=\\ ?\\ cm^2$.", "$300\\ dm^2$; $500\\ cm^2$"),
 (2, "Điền số: $2$ tấn $300$ kg $=\\ ?$ kg; $8$ m $5$ cm $=\\ ?$ cm; $4$ l $50$ ml $=\\ ?$ ml.", f"{n(2300)} kg; $805$ cm; {n(4050)} ml"),
 (2, f"Điền số: {n(6200)} g $=\\ ?$ kg $?$ g; {n(3040)} m $=\\ ?$ km $?$ m; $705\\ dm^2=\\ ?\\ m^2\\ ?\\ dm^2$.", "$6$ kg $200$ g; $3$ km $40$ m; $7\\ m^2\\ 5\\ dm^2$"),
 (2, f"Điền dấu $>$, $<$, $=$: a) $5$ tạ $\\ldots$ $450$ kg; b) $2\\ m^2$ $\\ldots$ $20\\ dm^2$; c) $1$ km $50$ m $\\ldots$ {n(1500)} m.", "a) $>$ ($500>450$); b) $>$ ($200>20$); c) $<$ ($1\\,050<1\\,500$)"),
 (3, f"Một xe chở $3$ tấn hàng, đã dỡ xuống {n(1250)} kg. Hỏi trên xe còn lại bao nhiêu ki-lô-gam hàng?", f"{n(3000)}$-${n(1250)}$=${n(1750)} (kg)"),
 (3, "Bình chứa $2$ l nước. Rót ra $5$ cốc, mỗi cốc $300$ ml. Hỏi trong bình còn bao nhiêu mi-li-lít nước?", f"{n(2000)}$-300\\times5=${n(2000)}$-${n(1500)}$=500$ (ml)"),
])
ws("Đơn vị đo thời gian. Tiền Việt Nam", [
 (1, "Điền số: $3$ giờ $=\\ ?$ phút; $2$ phút $=\\ ?$ giây; $4$ thế kỉ $=\\ ?$ năm.", "$180$ phút; $120$ giây; $400$ năm"),
 (1, f"Năm {n(2026)} thuộc thế kỉ nào? Năm {n(1990)} thuộc thế kỉ nào?", "Thế kỉ XXI; thế kỉ XX"),
 (1, "Trong các tháng $4$, $5$, $6$, $8$, $11$, tháng nào có $31$ ngày?", "Tháng $5$ và tháng $8$"),
 (2, "Điền số: $2$ giờ $25$ phút $=\\ ?$ phút; $3$ phút $10$ giây $=\\ ?$ giây; $1$ ngày $6$ giờ $=\\ ?$ giờ.", "$145$ phút; $190$ giây; $30$ giờ"),
 (2, "Buổi sinh hoạt bắt đầu lúc $14$ giờ $30$ phút và kéo dài $1$ giờ $45$ phút. Hỏi buổi sinh hoạt kết thúc lúc mấy giờ?", "$14$ giờ $30$ phút $+1$ giờ $45$ phút $=15$ giờ $75$ phút $=16$ giờ $15$ phút"),
 (2, f"Mai có $2$ tờ {n(20000)} đồng, $1$ tờ {n(50000)} đồng và $3$ tờ {n(5000)} đồng. Hỏi Mai có tất cả bao nhiêu tiền?", f"{n(40000)}$+${n(50000)}$+${n(15000)}$=${n(105000)} (đồng)"),
 (3, "Ngày $2$ tháng $9$ là thứ Ba. Hỏi ngày $2$ tháng $10$ cùng năm là thứ mấy? (Tháng $9$ có $30$ ngày.)", "Cách nhau $30$ ngày $=4$ tuần $2$ ngày, nên là thứ Năm"),
 (3, f"Bác Hồ sinh năm {n(1890)}. Năm đó thuộc thế kỉ nào? Tính đến năm {n(2025)} là bao nhiêu năm?", f"Thế kỉ XIX; {n(2025)}$-${n(1890)}$=135$ (năm)"),
])
ws("Thực hành, trải nghiệm: mua bán và ước lượng", [
 (1, f"Mua $3$ quyển vở, mỗi quyển giá {n(9000)} đồng. Hỏi phải trả bao nhiêu tiền?", f"{n(27000)} đồng"),
 (1, f"Đưa cô bán hàng {n(50000)} đồng để mua đồ hết {n(36500)} đồng. Cô trả lại bao nhiêu tiền?", f"{n(13500)} đồng"),
 (1, f"Ước lượng kết quả {n(4985)}$+${n(3020)} bằng cách làm tròn đến hàng nghìn.", f"Khoảng {n(5000)}$+${n(3000)}$=${n(8000)} (kết quả đúng {n(8005)})"),
 (2, f"Mua $2$ kg cam, mỗi ki-lô-gam {n(35000)} đồng và $1$ kg táo giá {n(48000)} đồng. Đưa {n(200000)} đồng thì được trả lại bao nhiêu tiền?", f"Phải trả {n(70000)}$+${n(48000)}$=${n(118000)}; trả lại {n(82000)} đồng"),
 (2, f"Bánh giá {n(12000)} đồng một chiếc, cửa hàng khuyến mãi “mua $5$ tặng $1$”. Cần $12$ chiếc bánh thì phải trả bao nhiêu tiền?", f"Mua $10$ chiếc được tặng $2$ chiếc; trả $10\\times$ {n(12000)}$=${n(120000)} đồng"),
 (2, "Ước lượng $198\\times5$ rồi tính kết quả đúng.", f"Khoảng $200\\times5=${n(1000)}; đúng: $990$"),
 (3, f"Cửa hàng A bán bút {n(8000)} đồng một chiếc. Cửa hàng B bán hộp $6$ chiếc giá {n(42000)} đồng. Cần mua $6$ chiếc bút thì mua ở đâu rẻ hơn, rẻ hơn bao nhiêu?", f"A: {n(48000)} đồng; B: {n(42000)} đồng. Mua ở B rẻ hơn {n(6000)} đồng"),
 (3, f"Lớp có $32$ bạn, mỗi bạn góp {n(15000)} đồng để mua quà giá {n(450000)} đồng. Số tiền góp thừa hay thiếu, bao nhiêu?", f"Góp được {n(480000)} đồng; thừa {n(30000)} đồng"),
])

# ---- kiểm tra số học ----
c = [4834000//1000==4834, (100-20)//2+1==41, (99-3)//4+1==25, 9+90*2+21*3==252,
 35246+21532==56778, 68974-35621==33353, 2143*3==6429, 8496//4==2124, 47385+38649==86034, 52000-27865==24135,
 18275*4==73100, 39168==6*6528, 25007*3==75021, 45230==5*9046, 71409==7*10201+2, 36048==9*4005+3, 1205*8+7==9647, 6080//8==760,
 9000-3456==5544, 4236==6*706, 24000//8==3000, 325*4-600==700, (1238+2762)//5==800, 2000*4==8000, 5*128*20==12800, 36*7+64*7==700,
 35+38==73, 500-255==245, 36//4==9, 2450+4900+4300==11650, 200000-170000==30000, 96-37==59, (46-28)//2==9, 3750-3200==550,
 105//3==35, 580//4==145 and 120+135+150+175==580, 132//4==33, 96-37==59, 32*6-150==42, (6000+3600)//6==1600,
 150//5==30, 36//3*8==96, 4200//6==700, 350//7*12==600, 120//4*9==270, 72//(48//8)==12, 60//5*8*3==288, 75//(24//8)==25,
 (15+8)*2==46, 15*8==120, (25-16)*16==144, (96//8+8)*2==40, (40+25)*2*3==390, (12+4)*2==32, 144-9==135,
 3000-1250==1750, 2000-1500==500, 120+25==145, 180+10==190, 40000+50000+15000==105000, 30==4*7+2, 2025-1890==135,
 50000-36500==13500, 4985+3020==8005, 200000-118000==82000, 198*5==990, 6000==48000-42000, 32*15000-450000==30000,
 975420>0, sorted([98765,908756,908765,980567])==[98765,908756,908765,980567]]
assert all(c), [i for i,x in enumerate(c) if not x]
json.dump(W, open("/home/claude/gk1/theo_bai.json","w",encoding="utf-8"), ensure_ascii=False)
print(len(W), "phiếu,", sum(len(w["items"]) for w in W), "bài")
