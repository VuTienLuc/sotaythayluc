# -*- coding: utf-8 -*-
# Chủ đề Hệ thức lượng trong tam giác – Toán 10 KNTT (Chương III). Nội dung + kiểm tra số học.
import json, math
from math import sin, cos, tan, radians as rad, degrees as deg, sqrt, acos

def close(x, y, e=1e-6): return abs(x - y) < e
def dms(x):
    d = int(x); m = round((x - d) * 60)
    if m == 60: d, m = d + 1, 0
    return d, m

chk = []
# ---------- Dạng 1 ----------
chk += [close(sin(rad(30)) + cos(rad(60)) + tan(rad(45)), 2),
        close(cos(rad(120)) + sin(rad(150)) - tan(rad(135)), 1),
        sin(rad(110)) > 0 and cos(rad(110)) < 0 and tan(rad(110)) < 0]
# ---------- Dạng 2 ----------
a = math.pi - math.asin(5/13); chk += [close(cos(a), -12/13), close(tan(a), -5/12)]
a = math.pi - math.atan(2); chk += [close(cos(a), -sqrt(5)/5), close(sin(a), 2*sqrt(5)/5)]
x = rad(37); chk += [close(sin(math.pi - x)*cos(x) + cos(math.pi - x)*sin(x), 0), close(sin(rad(25))**2 + sin(rad(65))**2, 1)]
# ---------- Dạng 3 ----------
chk += [close(sqrt(36 + 100 - 2*6*10*cos(rad(120))), 14), close(sqrt(64 + 25 - 2*8*5*cos(rad(60))), 7)]
# ---------- Dạng 4 ----------
chk += [close(deg(acos((64 + 25 - 49)/80)), 60)]
g = deg(acos((16 + 25 - 36)/40)); chk += [dms(g) == (82, 49)]
chk += [close((4 + 9 - 16)/12, -0.25)]
# ---------- Dạng 5 ----------
b = 10*sin(rad(60))/sin(rad(45)); c = 10*sin(rad(75))/sin(rad(45))
chk += [close(b, 5*sqrt(6)), round(b, 2) == 12.25, close(c, 5*(sqrt(3) + 1)), round(c, 2) == 13.66,
        close(6/(2*sin(rad(30))), 6), close(2*5*sin(rad(60)), 5*sqrt(3))]
# ---------- Dạng 6 ----------
p = 21; S = sqrt(p*8*7*6); chk += [close(0.5*4*7*sin(rad(30)), 7), close(S, 84), close(13*14*15/(4*84), 65/8), close(84/21, 4),
        close(sqrt(3)/4*36, 9*sqrt(3)), close(6/sqrt(3), 2*sqrt(3)), close(9*sqrt(3)/9, sqrt(3))]
# ---------- Dạng 7 ----------
A = 65; bb = 10*sin(rad(40))/sin(rad(65)); cc = 10*sin(rad(75))/sin(rad(65))
chk += [round(bb, 2) == 7.09, round(cc, 2) == 10.66]
ma = sqrt((64 + 25)/2 - 49/4); chk += [close(ma, sqrt(129)/2), round(ma, 2) == 5.68]
# ---------- Dạng 8 ----------
ab = 40*sin(rad(55))/sin(rad(50)); chk += [round(ab, 1) == 42.8]
d = sqrt(40**2 + 60**2 - 2*40*60*cos(rad(60))); chk += [close(d, 20*sqrt(7)), round(d, 1) == 52.9]
h = 20/(1/tan(rad(35)) - 1/tan(rad(50))); chk += [round(h, 1) == 34.0]

# ---------- ĐỀ KIỂM TRA ----------
chk += [close(sin(rad(150)), .5), close(sqrt(64 + 25 - 2*8*5*cos(rad(60))), 7), close(deg(acos((9 + 25 - 49)/30)), 120),
        close(10/(2*sin(rad(30))), 10), close(.5*6*8*sin(rad(150)), 12), close(84/21, 4)]
a = math.pi - math.asin(3/5)
chk += [close(cos(a), -4/5), close(tan(a), -3/4), close(sin(math.pi - a), 3/5), close(cos(a)**2 - sin(a)**2, 7/25)]
BC = sqrt(25 + 64 - 2*5*8*cos(rad(60))); chk += [close(BC, 7), close(.5*5*8*sin(rad(60)), 10*sqrt(3)), close(7/(2*sin(rad(60))), 7*sqrt(3)/3)]
chk += [(25 + 49 - 64)/(2*5*7) > 0]               # góc lớn nhất (đối cạnh 8) nhọn
chk += [round((49 + 25 - 64)/(2*7*5), 2) == 0.14]  # cos B, b=8
riv = 50*sin(rad(60))/sin(rad(50)); chk += [round(riv, 1) == 56.5]
chk += [round(10*sin(rad(60))/sin(rad(45)), 1) == 12.2]
a = acos(-1/3); chk += [close(sin(a), 2*sqrt(2)/3), close(tan(a), -2*sqrt(2))]
B = deg(acos(1/7)); C = 180 - 60 - B; chk += [dms(B) == (81, 47), dms(C) == (38, 13), round(.5*8*5*sin(rad(60)), 2) == 17.32]
H = 30/(1/tan(rad(30)) - 1/tan(rad(45))); chk += [round(H, 1) == 41.0, close(H, 15*(sqrt(3) + 1))]
assert all(chk), [i for i, v in enumerate(chk) if not v]
print("Số học: đúng hết", len(chk), "phép kiểm tra")

# =================== PHIẾU ÔN TẬP CÁC DẠNG ===================
MEMO = [
 r"Giá trị lượng giác góc $\alpha$ ($0^\circ\leq\alpha\leq180^\circ$): $M(x_0;y_0)$ trên nửa đường tròn đơn vị thì $\sin\alpha=y_0$; $\cos\alpha=x_0$; $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$; $\cot\alpha=\dfrac{\cos\alpha}{\sin\alpha}$",
 r"Góc tù ($90^\circ<\alpha<180^\circ$): $\sin\alpha>0$; $\cos\alpha<0$; $\tan\alpha<0$; $\cot\alpha<0$",
 r"Hai góc bù nhau: $\sin(180^\circ-\alpha)=\sin\alpha$; $\cos(180^\circ-\alpha)=-\cos\alpha$; $\tan(180^\circ-\alpha)=-\tan\alpha$",
 r"Hệ thức cơ bản: $\sin^2\alpha+\cos^2\alpha=1$; $1+\tan^2\alpha=\dfrac{1}{\cos^2\alpha}$; $1+\cot^2\alpha=\dfrac{1}{\sin^2\alpha}$",
 r"Định lí côsin: $a^2=b^2+c^2-2bc\cos A$; suy ra $\cos A=\dfrac{b^2+c^2-a^2}{2bc}$",
 r"Định lí sin: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$",
 r"Diện tích: $S=\dfrac12bc\sin A=\dfrac{abc}{4R}=pr=\sqrt{p(p-a)(p-b)(p-c)}$ với $p=\dfrac{a+b+c}{2}$",
 r"Độ dài trung tuyến: $m_a^2=\dfrac{b^2+c^2}{2}-\dfrac{a^2}{4}$",
]
D = [
 {"t": "Dạng 1. Giá trị lượng giác của góc đặc biệt, xét dấu",
  "pp": r"Thuộc bảng giá trị $0^\circ;30^\circ;45^\circ;60^\circ;90^\circ$; góc tù thì đưa về góc bù: $\sin120^\circ=\sin60^\circ$; $\cos120^\circ=-\cos60^\circ$",
  "b": [(1, r"Tính $P=\sin30^\circ+\cos60^\circ+\tan45^\circ$.", r"$P=\dfrac12+\dfrac12+1=2$"),
        (1, r"Tính $Q=\cos120^\circ+\sin150^\circ-\tan135^\circ$.", r"$Q=-\dfrac12+\dfrac12-(-1)=1$"),
        (2, r"Xét dấu $\sin110^\circ$; $\cos110^\circ$; $\tan110^\circ$. Giải thích.", r"$110^\circ$ là góc tù nên $\sin110^\circ>0$; $\cos110^\circ<0$; $\tan110^\circ<0$")]},
 {"t": "Dạng 2. Tính giá trị lượng giác khi biết một giá trị",
  "pp": r"Dùng $\sin^2\alpha+\cos^2\alpha=1$ hoặc $1+\tan^2\alpha=\dfrac{1}{\cos^2\alpha}$; chọn dấu theo góc nhọn hay góc tù",
  "b": [(1, r"Cho $\sin\alpha=\dfrac{5}{13}$ với $90^\circ<\alpha<180^\circ$. Tính $\cos\alpha$ và $\tan\alpha$.", r"$\cos^2\alpha=1-\dfrac{25}{169}=\dfrac{144}{169}$, góc tù nên $\cos\alpha=-\dfrac{12}{13}$; $\tan\alpha=-\dfrac{5}{12}$"),
        (2, r"Cho $\tan\alpha=-2$ với $0^\circ<\alpha<180^\circ$. Tính $\cos\alpha$ và $\sin\alpha$.", r"$\tan\alpha<0$ nên $\alpha$ tù; $\cos^2\alpha=\dfrac{1}{1+4}=\dfrac15$, $\cos\alpha=-\dfrac{\sqrt5}{5}$; $\sin\alpha=\tan\alpha\cdot\cos\alpha=\dfrac{2\sqrt5}{5}$"),
        (3, r"Rút gọn $A=\sin(180^\circ-x)\cos x+\cos(180^\circ-x)\sin x$ và tính $B=\sin^2 25^\circ+\sin^2 65^\circ$.", r"$A=\sin x\cos x-\cos x\sin x=0$; $\sin65^\circ=\cos25^\circ$ nên $B=\sin^2 25^\circ+\cos^2 25^\circ=1$")]},
 {"t": "Dạng 3. Định lí côsin – tính cạnh",
  "pp": r"Biết hai cạnh và góc xen giữa: $a^2=b^2+c^2-2bc\cos A$. Chú ý $\cos$ góc tù mang dấu âm",
  "b": [(1, r"Tam giác $ABC$ có $a=8$, $b=5$, $\widehat C=60^\circ$. Tính $c$.", r"$c^2=64+25-2\cdot8\cdot5\cdot\dfrac12=49$, $c=7$"),
        (2, r"Tam giác $ABC$ có $b=6$, $c=10$, $\widehat A=120^\circ$. Tính $a$.", r"$a^2=36+100-2\cdot6\cdot10\cdot\left(-\dfrac12\right)=196$, $a=14$")]},
 {"t": "Dạng 4. Định lí côsin – tính góc, nhận dạng tam giác",
  "pp": r"$\cos A=\dfrac{b^2+c^2-a^2}{2bc}$. Xét góc đối diện cạnh lớn nhất: $\cos>0$ thì tam giác nhọn, $\cos=0$ vuông, $\cos<0$ tù",
  "b": [(1, r"Tam giác có $a=7$, $b=8$, $c=5$. Tính góc $A$.", r"$\cos A=\dfrac{64+25-49}{80}=\dfrac12$, $\widehat A=60^\circ$"),
        (2, r"Tam giác có ba cạnh $4$; $5$; $6$ là tam giác nhọn, vuông hay tù? Tính góc lớn nhất (làm tròn đến phút).", r"Góc đối cạnh $6$: $\cos=\dfrac{16+25-36}{40}=\dfrac18>0$, tam giác nhọn; góc lớn nhất $\approx82^\circ49'$"),
        (2, r"Tam giác có ba cạnh $2$; $3$; $4$ là tam giác gì?", r"$\cos=\dfrac{4+9-16}{12}=-\dfrac14<0$ nên tam giác tù")]},
 {"t": "Dạng 5. Định lí sin – tính cạnh, bán kính đường tròn ngoại tiếp",
  "pp": r"Biết một cạnh và hai góc: tính góc còn lại, rồi $b=\dfrac{a\sin B}{\sin A}$. Bán kính ngoại tiếp $R=\dfrac{a}{2\sin A}$",
  "b": [(1, r"Tam giác $ABC$ có $a=6$, $\widehat A=30^\circ$. Tính $R$.", r"$R=\dfrac{6}{2\cdot\frac12}=6$"),
        (1, r"Tam giác $ABC$ nội tiếp đường tròn bán kính $R=5$, $\widehat A=60^\circ$. Tính $a$.", r"$a=2R\sin A=5\sqrt3$"),
        (2, r"Tam giác $ABC$ có $\widehat A=45^\circ$, $\widehat B=60^\circ$, $a=10$. Tính $b$, $c$ (làm tròn đến hàng phần trăm).", r"$\widehat C=75^\circ$; $b=\dfrac{10\sin60^\circ}{\sin45^\circ}=5\sqrt6\approx12{,}25$; $c=\dfrac{10\sin75^\circ}{\sin45^\circ}=5(\sqrt3+1)\approx13{,}66$")]},
 {"t": "Dạng 6. Diện tích, bán kính đường tròn nội tiếp, ngoại tiếp",
  "pp": r"Chọn công thức theo dữ kiện: hai cạnh và góc xen giữa dùng $\dfrac12bc\sin A$; ba cạnh dùng Heron; rồi $R=\dfrac{abc}{4S}$, $r=\dfrac{S}{p}$",
  "b": [(1, r"Tam giác có $b=4$, $c=7$, $\widehat A=30^\circ$. Tính diện tích.", r"$S=\dfrac12\cdot4\cdot7\cdot\dfrac12=7$"),
        (2, r"Tam giác có ba cạnh $13$; $14$; $15$. Tính $S$, $R$, $r$.", r"$p=21$; $S=\sqrt{21\cdot8\cdot7\cdot6}=84$; $R=\dfrac{13\cdot14\cdot15}{4\cdot84}=\dfrac{65}{8}$; $r=\dfrac{84}{21}=4$"),
        (2, r"Tam giác đều cạnh $6$. Tính $S$, $R$, $r$.", r"$S=\dfrac{\sqrt3}{4}\cdot36=9\sqrt3$; $R=\dfrac{6}{\sqrt3}=2\sqrt3$; $r=\dfrac{S}{p}=\dfrac{9\sqrt3}{9}=\sqrt3$")]},
 {"t": "Dạng 7. Giải tam giác. Độ dài đường trung tuyến",
  "pp": r"Giải tam giác là tìm đủ ba cạnh, ba góc: dùng tổng ba góc $180^\circ$, định lí sin và định lí côsin",
  "b": [(2, r"Giải tam giác $ABC$ biết $a=10$, $\widehat B=40^\circ$, $\widehat C=75^\circ$ (làm tròn đến hàng phần trăm).", r"$\widehat A=65^\circ$; $b=\dfrac{10\sin40^\circ}{\sin65^\circ}\approx7{,}09$; $c=\dfrac{10\sin75^\circ}{\sin65^\circ}\approx10{,}66$"),
        (3, r"Tam giác có $a=7$, $b=8$, $c=5$. Tính độ dài trung tuyến $m_a$ (làm tròn đến hàng phần trăm).", r"$m_a^2=\dfrac{64+25}{2}-\dfrac{49}{4}=\dfrac{129}{4}$, $m_a=\dfrac{\sqrt{129}}{2}\approx5{,}68$")]},
 {"t": "Dạng 8. Bài toán thực tế",
  "pp": r"Vẽ hình, đặt tên điểm, ghi số đo lên hình; xác định tam giác chứa đại lượng cần tìm rồi chọn định lí sin hoặc côsin",
  "b": [(2, r"Để đo khoảng cách từ $A$ đến $B$ ở bên kia sông, người ta chọn điểm $C$ cùng bờ với $A$, đo được $AC=40$ m, $\widehat{BAC}=75^\circ$, $\widehat{BCA}=55^\circ$. Tính $AB$ (làm tròn đến hàng phần mười).", r"$\widehat B=50^\circ$; $AB=\dfrac{AC\sin C}{\sin B}=\dfrac{40\sin55^\circ}{\sin50^\circ}\approx42{,}8$ m"),
        (2, r"Hai tàu rời cảng cùng lúc theo hai hướng hợp với nhau góc $60^\circ$, vận tốc $20$ km/h và $30$ km/h. Sau $2$ giờ hai tàu cách nhau bao xa?", r"Quãng đường $40$ km và $60$ km; $d^2=1600+3600-2\cdot40\cdot60\cdot\dfrac12=2800$, $d=20\sqrt7\approx52{,}9$ km"),
        (3, r"Từ hai điểm $A$, $B$ cách nhau $20$ m, thẳng hàng với gốc cây ($B$ gần cây hơn), nhìn ngọn cây với góc nâng $35^\circ$ và $50^\circ$. Tính chiều cao cây (làm tròn đến hàng phần mười).", r"$h=\dfrac{20}{\cot35^\circ-\cot50^\circ}\approx34{,}0$ m (hoặc dùng định lí sin trong tam giác chứa $A$, $B$ và ngọn cây)")]},
]

# =================== ĐỀ KIỂM TRA ===================
EXAM = {
 "I": [  # (đề, A, B, C, D, đáp án, mã kĩ năng, lỗi thường gặp nếu chọn sai)
  (r"Giá trị của $\sin150^\circ$ là", r"$\dfrac12$", r"$-\dfrac12$", r"$\dfrac{\sqrt3}{2}$", r"$-\dfrac{\sqrt3}{2}$", "A", "LG1", "B: nghĩ góc tù thì sin âm"),
  (r"Với $90^\circ<\alpha<180^\circ$, khẳng định nào đúng?", r"$\sin\alpha<0$", r"$\cos\alpha>0$", r"$\tan\alpha<0$", r"$\cot\alpha>0$", "C", "LG1", "A/B: nhầm dấu góc tù"),
  (r"$\cos(180^\circ-\alpha)$ bằng", r"$\cos\alpha$", r"$-\cos\alpha$", r"$\sin\alpha$", r"$-\sin\alpha$", "B", "LG2", "A: nhầm với công thức sin bù"),
  (r"Tam giác $ABC$ có $b=8$, $c=5$, $\widehat A=60^\circ$. Độ dài cạnh $a$ là", r"$7$", r"$49$", r"$\sqrt{129}$", r"$9$", "A", "CS1", "B: quên lấy căn; C: dùng dấu cộng"),
  (r"Tam giác có ba cạnh $a=3$, $b=5$, $c=7$. Số đo góc $C$ là", r"$60^\circ$", r"$90^\circ$", r"$120^\circ$", r"$150^\circ$", "C", "CS2", "A: bỏ dấu âm của cos"),
  (r"Tam giác $ABC$ có $a=10$, $\widehat A=30^\circ$. Bán kính đường tròn ngoại tiếp $R$ là", r"$5$", r"$10$", r"$20$", r"$10\sqrt3$", "B", "SIN", "C: quên chia 2; A: nhầm R = a.sinA"),
  (r"Diện tích tam giác có hai cạnh $6$ và $8$, góc xen giữa $150^\circ$ là", r"$12$", r"$24$", r"$12\sqrt3$", r"$24\sqrt3$", "A", "DT", "B: quên 1/2; C: dùng cos thay sin"),
  (r"Tam giác có ba cạnh $13$; $14$; $15$. Bán kính đường tròn nội tiếp $r$ là", r"$3$", r"$4$", r"$6$", r"$8$", "B", "DT", "D: lấy S chia chu vi thay vì nửa chu vi"),
 ],
 "II": [  # (dẫn, [(ý, Đ/S, giải thích)])
  (r"Cho $\sin\alpha=\dfrac35$ với $90^\circ<\alpha<180^\circ$.", [
    (r"$\cos\alpha=\dfrac45$", "S", r"Góc tù nên $\cos\alpha=-\dfrac45$"),
    (r"$\tan\alpha=-\dfrac34$", "Đ", r"$\tan\alpha=\dfrac{3/5}{-4/5}=-\dfrac34$"),
    (r"$\sin(180^\circ-\alpha)=\dfrac35$", "Đ", r"Hai góc bù có sin bằng nhau"),
    (r"$\cos^2\alpha-\sin^2\alpha=\dfrac{7}{25}$", "Đ", r"$\dfrac{16}{25}-\dfrac{9}{25}=\dfrac{7}{25}$")], "LG2"),
  (r"Cho tam giác $ABC$ có $AB=5$, $AC=8$, $\widehat A=60^\circ$.", [
    (r"$BC=7$", "Đ", r"$BC^2=25+64-40=49$"),
    (r"Diện tích tam giác $ABC$ bằng $10\sqrt3$", "Đ", r"$S=\dfrac12\cdot5\cdot8\cdot\dfrac{\sqrt3}{2}=10\sqrt3$"),
    (r"Bán kính đường tròn ngoại tiếp $R=\dfrac{7\sqrt3}{2}$", "S", r"$R=\dfrac{BC}{2\sin A}=\dfrac{7}{\sqrt3}=\dfrac{7\sqrt3}{3}$"),
    (r"Tam giác $ABC$ là tam giác tù", "S", r"Góc $B$ đối cạnh lớn nhất $AC=8$: $\cos B=\dfrac{25+49-64}{70}=\dfrac17>0$, tam giác nhọn")], "CS1, DT, SIN"),
 ],
 "III": [  # (đề, đáp số, mã, lời giải)
  (r"Tính diện tích tam giác có ba cạnh $13$; $14$; $15$.", "84", "DT", r"$p=21$, $S=\sqrt{21\cdot8\cdot7\cdot6}=84$"),
  (r"Tam giác $ABC$ có $a=7$, $b=8$, $c=5$. Tính $\cos B$ (làm tròn đến hàng phần trăm).", "0,14", "CS2", r"$\cos B=\dfrac{49+25-64}{70}=\dfrac17\approx0{,}14$"),
  (r"Từ điểm $C$ cùng bờ sông với $A$, đo được $AC=50$ m, $\widehat{BAC}=70^\circ$, $\widehat{BCA}=60^\circ$ ($B$ ở bờ bên kia). Tính $AB$ (mét, làm tròn đến hàng phần mười).", "56,5", "TT", r"$\widehat B=50^\circ$; $AB=\dfrac{50\sin60^\circ}{\sin50^\circ}\approx56{,}5$"),
  (r"Tam giác $ABC$ có $\widehat A=45^\circ$, $\widehat B=60^\circ$, $a=10$. Tính $b$ (làm tròn đến hàng phần mười).", "12,2", "SIN", r"$b=\dfrac{10\sin60^\circ}{\sin45^\circ}=5\sqrt6\approx12{,}2$"),
 ],
 "IV": [  # (đề, điểm, [(bước, điểm)], lỗi, mã)
  (r"Cho $\cos\alpha=-\dfrac13$ với $0^\circ<\alpha<180^\circ$. Tính $\sin\alpha$ và $\tan\alpha$.", 1.0,
   [(r"$\sin^2\alpha=1-\dfrac19=\dfrac89$", .25), (r"$\sin\alpha>0$ nên $\sin\alpha=\dfrac{2\sqrt2}{3}$", .25), (r"$\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}=-2\sqrt2$", .5)],
   "lấy sin âm; quên căn; tan sai dấu", "LG2"),
  (r"Giải tam giác $ABC$ biết $a=7$, $b=8$, $c=5$ (tính ba góc, làm tròn đến phút) và tính diện tích tam giác.", 1.5,
   [(r"$\cos A=\dfrac{64+25-49}{80}=\dfrac12$, $\widehat A=60^\circ$", .5), (r"$\cos B=\dfrac{49+25-64}{70}=\dfrac17$, $\widehat B\approx81^\circ47'$", .5), (r"$\widehat C=180^\circ-\widehat A-\widehat B\approx38^\circ13'$", .25), (r"$S=\dfrac12\cdot8\cdot5\cdot\sin60^\circ=10\sqrt3\approx17{,}32$", .25)],
   "đặt nhầm cạnh đối diện góc; máy tính để chế độ radian; cộng góc sai", "CS2, DT"),
  (r"Hai điểm $A$, $B$ trên mặt đất cách nhau $30$ m, thẳng hàng với chân tháp $H$ ($B$ nằm giữa $A$ và $H$). Từ $A$ nhìn đỉnh tháp $T$ với góc nâng $30^\circ$, từ $B$ với góc nâng $45^\circ$. Tính chiều cao tháp (làm tròn đến hàng phần mười).", 1.5,
   [(r"Trong tam giác $ABT$: $\widehat{TBA}=135^\circ$, $\widehat{ATB}=45^\circ-30^\circ=15^\circ$", .5), (r"Định lí sin: $BT=\dfrac{AB\sin30^\circ}{\sin15^\circ}\approx57{,}96$ m", .5), (r"$TH=BT\sin45^\circ=15(\sqrt3+1)\approx41{,}0$ m", .5)],
   "góc ATB tính sai; dùng nhầm tam giác; làm tròn sớm ở bước giữa", "TT"),
 ],
}
SKILLS = {
 "LG1": ("Giá trị lượng giác góc đặc biệt, dấu", "Dạng 1"),
 "LG2": ("Góc bù, hệ thức cơ bản", "Dạng 2"),
 "CS1": ("Định lí côsin – tính cạnh", "Dạng 3"),
 "CS2": ("Định lí côsin – tính góc, nhận dạng", "Dạng 4"),
 "SIN": ("Định lí sin, bán kính ngoại tiếp", "Dạng 5"),
 "DT":  ("Diện tích, r, R", "Dạng 6"),
 "TT":  ("Bài toán thực tế", "Dạng 8"),
}
json.dump({"memo": MEMO, "dang": D, "exam": EXAM, "skills": SKILLS}, open("/home/claude/gk1/htl10.json", "w", encoding="utf-8"), ensure_ascii=False)
print(sum(len(x["b"]) for x in D), "bài ôn tập; đề:", len(EXAM["I"]), "TN,", len(EXAM["II"]), "Đ/S,", len(EXAM["III"]), "TLN,", len(EXAM["IV"]), "tự luận")
