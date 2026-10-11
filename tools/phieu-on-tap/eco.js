// Phiếu làm bài BẢN TIẾT KIỆM (in đen trắng, ít mực, ít trang)
//  - Toán 4 Đề 1, Đề 2: đề + chỗ làm bài gộp trong 1 trang A4
//  - Toán 10 HTL10-KT: đề dùng chung (2 cột, thu lại dùng nhiều lớp) + phiếu trả lời 1 trang/học sinh
const fs = require("fs");
const path = require("path");
const katex = require("katex");

const src = fs.readFileSync("/home/claude/check.js", "utf8");
eval(src.slice(0, src.indexOf("// ===================== BIỂU TƯỢNG")).replace("const DATA", "var DATA"));
eval(src.slice(src.indexOf("function splitExample"), src.indexOf("// ===================== CHỈ MỤC")));

const escH = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tex = t => t.split(/(\$[^$]*\$)/).map(p => (p.length > 1 && p[0] === "$" && p.at(-1) === "$")
  ? katex.renderToString(p.slice(1, -1), { throwOnError: true }) : escH(p)).join("");
const pts = p => String(p).replace(".", ",");

const fontDir = "file://" + path.resolve("node_modules/@fontsource/be-vietnam-pro/files") + "/";
const ff = (w, s) => `@font-face{font-family:"BVP";font-weight:${w};src:url("${fontDir}be-vietnam-pro-${s}-${w}-normal.woff2") format("woff2");}`;
const FACES = [400, 600, 700].map(w => ff(w, "vietnamese") + ff(w, "latin")).join("\n");
const KCSS = `<link rel="stylesheet" href="file://${path.resolve("node_modules/katex/dist/katex.min.css")}">`;

// ---- Giao diện chung: chỉ nét mảnh, không mảng màu ----
const CSS = `${FACES}
@page{size:A4;margin:7mm 7mm 8mm}
*{box-sizing:border-box}
body{margin:0;font-family:"BVP",sans-serif;color:#000;font-size:10pt;line-height:1.38}
.katex{font-size:1.03em}
.pg{position:relative;padding:1mm 7mm 0}
.mk{position:fixed;width:4.5mm;height:4.5mm;background:#000}.tl{top:0;left:0}.tr{top:0;right:0}.bl{bottom:0;left:0}.br{bottom:0;right:0}
.hd{display:flex;align-items:flex-end;gap:8pt;border-bottom:.8pt solid #000;padding-bottom:3pt;margin-bottom:4pt}
.hd .t{flex:1}.hd small{font-size:7.5pt;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:#444}
.hd h1{font-size:12.5pt;font-weight:700;margin:0}
.code{border:1.2pt solid #000;border-radius:2pt;padding:1pt 6pt;text-align:center;font-size:6.5pt;font-weight:600;letter-spacing:.08em}
.code b{display:block;font-size:11.5pt;letter-spacing:.02em}
.f{display:flex;gap:12pt;font-size:9.5pt;margin:2pt 0 3pt}.f div{display:flex;gap:4pt;align-items:flex-end;white-space:nowrap}
.f span{flex:1;border-bottom:.6pt dotted #555;min-width:40pt;height:13pt}.f .w1{flex:3}.f .w2{flex:1}.f .w3{flex:1.3}
.note{font-size:7.8pt;color:#333;margin:0 0 3pt}
.sec{display:flex;align-items:baseline;gap:6pt;font-size:9pt;font-weight:700;margin:5pt 0 2pt;border-bottom:.5pt solid #999;padding-bottom:1pt;break-after:avoid}
.sec small{font-weight:400;color:#444}
.q{border:.6pt solid #888;border-radius:2pt;padding:2pt 5pt 3pt;margin:0 0 3pt;break-inside:avoid}
.qh{display:flex;align-items:center;gap:6pt}
.id{font-weight:700;font-size:10pt;border:1.2pt solid #000;border-radius:2pt;padding:0 4pt;line-height:1.3}
.k{font-size:7.5pt;color:#444}
.box{display:inline-block;width:22pt;height:22pt;border:1.8pt solid #000;border-radius:2pt;vertical-align:middle}
.lines i{display:block;height:15pt;border-bottom:.4pt solid #bbb}
.res{display:flex;align-items:center;gap:5pt;font-size:9pt;font-weight:600;margin-top:2pt}
.rb{flex:0 0 55%;height:17pt;border:1.6pt solid #000;border-radius:2pt}
.grid{background-image:linear-gradient(#d9d9d9 .4pt,transparent .4pt),linear-gradient(90deg,#d9d9d9 .4pt,transparent .4pt);background-size:7pt 7pt;border:.5pt solid #bbb}
.opts{display:flex;flex-wrap:wrap;gap:1pt 14pt}
.row{display:flex;align-items:center;gap:8pt}
.teach{display:flex;gap:8pt;align-items:stretch;border:.6pt solid #888;border-radius:2pt;padding:3pt 6pt;font-size:8.5pt;margin-top:3pt;break-inside:avoid}
.teach .sc{width:60pt}.teach .sc div{height:22pt;border:1.4pt solid #000;margin-top:2pt}.teach .cm{flex:1}.teach .cm i{display:block;height:13pt;border-bottom:.4pt solid #bbb}
`;

function page(title, inner) {
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>${escH(title)}</title>${KCSS}<style>${CSS}</style></head><body>${inner}</body></html>`;
}
const marks = '<span class="mk tl"></span><span class="mk tr"></span><span class="mk bl"></span><span class="mk br"></span>';
const fields = '<div class="f"><div class="w1">Họ và tên:<span></span></div><div class="w2">Lớp:<span></span></div><div class="w3">Ngày:<span></span></div></div>';
const teacher = '<div class="teach"><div class="sc"><b>Điểm</b><div></div></div><div class="cm"><b>Nhận xét</b><i></i></div></div>';

// =================== TOÁN 4: 1 trang / học sinh ===================
const META = {
  DE1: [["mc", 1], ["mc", 1], ["mc", 1], ["calc", 2], ["free", 2.5, 5], ["free", 2.5, 6]],
  DE2: [["mc", .5], ["mc", .5], ["mc", .5], ["mc", .5], ["calc", 2], ["x", 1.5, 2], ["free", 2.5, 5], ["free", 2, 4]],
};
function parseQ(raw) {
  const ex = splitExample(raw.slice(3));
  const m = ex.q.match(/^(Câu \d+)\s*\(([^)]*)\)\s*:\s*([\s\S]*)$/);
  return { no: m[1].replace("Câu ", ""), kind: m[2], body: m[3] };
}
function lop4(code, title, raws) {
  const qs = raws.map(parseQ), meta = META[code];
  const mcs = qs.map((q, i) => [q, meta[i]]).filter(x => x[1][0] === "mc");
  const rest = qs.map((q, i) => [q, meta[i]]).filter(x => x[1][0] !== "mc");
  const mcHtml = '<div class="mcwrap">' + mcs.map(([q, m]) => {
    const o = q.body.match(/^([\s\S]*?:)\s*A\.\s*([\s\S]*?);\s*B\.\s*([\s\S]*?);\s*C\.\s*([\s\S]*?);\s*D\.\s*([\s\S]*?)\.?$/);
    return `<div class="q mc"><div class="row"><span class="id">C${q.no}</span><div style="flex:1"><div>${tex(o[1])} <span class="k">(${pts(m[1])} đ)</span></div><div class="opts">${["A", "B", "C", "D"].map((L, j) => `<span><b>${L}.</b> ${tex(o[j + 2])}</span>`).join("")}</div></div><span class="box"></span></div></div>`;
  }).join("") + "</div>";
  const restHtml = rest.map(([q, m]) => {
    let w;
    if (m[0] === "calc") {
      const ops = q.body.match(/\$[^$]*\$/g);
      w = '<div class="calc4">' + ops.map((o, j) => `<div class="cc"><div class="cl"><b>${"abcd"[j]})</b> ${tex(o)}</div><div class="grid g4"></div><div class="res">KQ:<span class="rb" style="flex:1"></span></div></div>`).join("") + "</div>";
      return `<div class="q"><div class="qh"><span class="id">C${q.no}</span><span>${tex(q.body.replace(/:[\s\S]*$/, ""))}:</span><span class="k">${pts(m[1])} điểm</span></div>${w}</div>`;
    }
    w = `<div class="lines">${"<i></i>".repeat(m[2])}</div><div class="res">${m[0] === "x" ? "Kết quả: x =" : "Đáp số:"}<span class="rb"></span></div>`;
    return `<div class="q"><div class="qh"><span class="id">C${q.no}</span><span class="k">${escH(q.kind)} · ${pts(m[1])} điểm</span></div><div>${tex(q.body)}</div>${w}</div>`;
  }).join("");
  const css = `.mcwrap{display:grid;grid-template-columns:1fr 1fr;gap:0 5pt}.mc .opts{gap:0 10pt}
.calc4{display:grid;grid-template-columns:repeat(4,1fr);gap:4pt;margin-top:2pt}.cc{min-width:0}.cl{font-size:9pt;white-space:nowrap}.g4{height:64pt}`;
  return page(title, `<style>${css}</style><div class="pg">${marks}<div class="hd"><div class="t"><small>Toán 4 · Kiểm tra giữa học kì 1 · Bản tiết kiệm</small><h1>${escH(title)}</h1></div><div class="code">MÃ PHIẾU<b>GK1-${code}</b></div></div>
${fields}<p class="note">Trắc nghiệm: viết A, B, C hoặc D vào ô vuông. Đáp số ghi vào ô viền đậm. Sửa thì gạch một nét, không tô đè.</p>
${mcHtml}${restHtml}${teacher}</div>`);
}

// =================== TOÁN 10: đề dùng chung + phiếu trả lời ===================
const H = JSON.parse(fs.readFileSync("/home/claude/gk1/htl10.json", "utf8"));
const FIG_RIVER = `<svg viewBox="0 0 230 120" width="150" style="display:block;margin:2pt 0"><polygon points="40,100 190,100 120,18" fill="none" stroke="#000" stroke-width="1.2"/><path d="M0 50 Q60 40 120 50 T230 48" fill="none" stroke="#888" stroke-width="1" stroke-dasharray="3 3"/>
<text x="28" y="113" font-size="12" font-weight="700">A</text><text x="192" y="113" font-size="12" font-weight="700">C</text><text x="124" y="14" font-size="12" font-weight="700">B</text><text x="56" y="96" font-size="10">70°</text><text x="160" y="96" font-size="10">60°</text><text x="104" y="114" font-size="10">50 m</text></svg>`;
const FIG_TOWER = `<svg viewBox="0 0 250 125" width="165" style="display:block;margin:2pt 0"><line x1="10" y1="105" x2="240" y2="105" stroke="#000" stroke-width="1"/><line x1="215" y1="105" x2="215" y2="15" stroke="#000" stroke-width="2"/>
<line x1="25" y1="105" x2="215" y2="15" stroke="#000" stroke-width=".8" stroke-dasharray="4 3"/><line x1="125" y1="105" x2="215" y2="15" stroke="#000" stroke-width=".8" stroke-dasharray="4 3"/>
<text x="20" y="120" font-size="12" font-weight="700">A</text><text x="120" y="120" font-size="12" font-weight="700">B</text><text x="219" y="120" font-size="12" font-weight="700">H</text><text x="221" y="18" font-size="12" font-weight="700">T</text>
<text x="44" y="101" font-size="10">30°</text><text x="142" y="101" font-size="10">45°</text><text x="64" y="120" font-size="10">30 m</text></svg>`;
function de10() {
  const E = H.exam;
  const I = E.I.map((q, k) => `<div class="dq"><b>Câu I.${k + 1}.</b> ${tex(q[0])}<div class="opts">${["A", "B", "C", "D"].map((L, j) => `<span><b>${L}.</b> ${tex(q[j + 1])}</span>`).join("")}</div></div>`).join("");
  const II = E.II.map((q, k) => `<div class="dq"><b>Câu II.${k + 1}.</b> ${tex(q[0])}${q[1].map((y, j) => `<div>${"abcd"[j]}) ${tex(y[0])}</div>`).join("")}</div>`).join("");
  const III = E.III.map((q, k) => `<div class="dq"><b>Câu III.${k + 1}.</b> ${tex(q[0])}${k === 2 ? FIG_RIVER : ""}</div>`).join("");
  const IV = E.IV.map((q, k) => `<div class="dq"><b>Bài IV.${k + 1}</b> (${pts(q[1])} điểm). ${tex(q[0])}${k === 2 ? FIG_TOWER : ""}</div>`).join("");
  const css = `.cols{column-count:2;column-gap:12pt;column-rule:.4pt solid #bbb}.dq{break-inside:avoid;margin:0 0 5pt}.dq .opts{gap:0 12pt}
h3{font-size:9.5pt;margin:4pt 0 3pt;border-bottom:.5pt solid #999;break-after:avoid}h3 small{font-weight:400;color:#444}
.reuse{font-size:8pt;border:.6pt dashed #555;padding:2pt 6pt;margin:2pt 0 5pt}`;
  return page("Đề kiểm tra HTL10-KT (dùng chung)", `<style>${css}</style><div class="pg"><div class="hd"><div class="t"><small>Toán 10 · Chương III · Kiểm tra 45 phút · Đề dùng chung</small><h1>Đề kiểm tra – Hệ thức lượng trong tam giác</h1></div><div class="code">MÃ ĐỀ<b>HTL10-KT</b></div></div>
<div class="reuse"><b>Không viết vào đề.</b> Học sinh làm bài trên <b>Phiếu trả lời HTL10-KT</b>. Thu lại đề sau giờ kiểm tra để dùng cho lớp khác. Được dùng máy tính cầm tay (chế độ độ).</div>
<div class="cols"><h3>PHẦN I. Trắc nghiệm nhiều phương án <small>8 câu · 0,25 điểm/câu</small></h3>${I}
<h3>PHẦN II. Đúng sai <small>2 câu · tối đa 1 điểm/câu</small></h3>${II}
<h3>PHẦN III. Trả lời ngắn <small>4 câu · 0,5 điểm/câu</small></h3>${III}
<h3>PHẦN IV. Tự luận <small>4 điểm</small></h3>${IV}</div></div>`);
}
function tl10() {
  const E = H.exam;
  const I = '<div class="ans8">' + E.I.map((q, k) => `<div><span class="lb">I.${k + 1}</span><span class="box"></span></div>`).join("") + "</div>";
  const II = '<table class="ds"><tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th></tr>' + E.II.map((q, k) => `<tr><td class="lb">II.${k + 1}</td>${"abcd".split("").map(() => '<td><span class="box"></span></td>').join("")}</tr>`).join("") + "</table>";
  const III = '<div class="ans3">' + E.III.map((q, k) => `<div><span class="lb">III.${k + 1}</span><span class="cells">${'<i></i>'.repeat(4)}</span></div>`).join("") + "</div>";
  const IVL = [5, 9, 10];
  const IV = E.IV.map((q, k) => `<div class="q"><div class="qh"><span class="id">IV.${k + 1}</span><span class="k">${pts(q[1])} điểm · ghi lời giải, kết quả cuối vào ô viền đậm</span></div><div class="lines">${"<i></i>".repeat(IVL[k])}</div><div class="res">Kết quả:<span class="rb"></span></div></div>`).join("");
  const css = `.lb{font-weight:700;font-size:9pt;margin-right:4pt}
.ans8{display:grid;grid-template-columns:repeat(8,1fr);gap:3pt}.ans8 div{display:flex;align-items:center}
table.ds{border-collapse:collapse;font-size:9pt}table.ds td,table.ds th{padding:1pt 8pt;text-align:center}table.ds th{font-weight:600;color:#444}
.ans3{display:grid;grid-template-columns:repeat(4,1fr);gap:4pt}.ans3 div{display:flex;align-items:center}
.cells{display:inline-flex}.cells i{display:block;width:17pt;height:22pt;border:1.6pt solid #000;margin-left:-1.6pt}.cells i:first-child{margin-left:0}
.top3{display:grid;grid-template-columns:auto 1fr;gap:4pt 14pt;align-items:center}`;
  return page("Phiếu trả lời HTL10-KT", `<style>${css}</style><div class="pg">${marks}<div class="hd"><div class="t"><small>Toán 10 · Kiểm tra 45 phút · Phiếu trả lời (1 trang)</small><h1>Phiếu trả lời – Hệ thức lượng trong tam giác</h1></div><div class="code">MÃ PHIẾU<b>HTL10-KT</b></div></div>
${fields}<p class="note">Phần I ghi A/B/C/D. Phần II ghi Đ hoặc S. Phần III mỗi ô một kí tự (chữ số, dấu phẩy, dấu trừ), căn trái. Phần IV trình bày ngắn gọn, đủ bước. Sửa thì gạch một nét.</p>
<div class="sec">PHẦN I <small>Trắc nghiệm · 2 điểm</small></div>${I}
<div class="top3" style="margin-top:4pt"><div><div class="sec" style="margin-top:0">PHẦN II <small>Đúng sai · 2 điểm</small></div>${II}</div>
<div><div class="sec" style="margin-top:0">PHẦN III <small>Trả lời ngắn · 2 điểm</small></div>${III}</div></div>
<div class="sec">PHẦN IV <small>Tự luận · 4 điểm</small></div>${IV}${teacher}</div>`);
}

const L4 = DATA[0].s.find(s => s.n === "Ôn thi giữa kì 1").t.at(-1).i.filter(r => r.startsWith("VD|"));
const L4b = JSON.parse(fs.readFileSync("/home/claude/gk1/bo2.json", "utf8")).t.at(-1).i.filter(r => r.startsWith("VD|"));
fs.mkdirSync("eco", { recursive: true });
fs.writeFileSync("eco/l4-de1.html", lop4("DE1", "Phiếu làm bài – Đề 1", L4));
fs.writeFileSync("eco/l4-de2.html", lop4("DE2", "Phiếu làm bài – Đề 2", L4b));
fs.writeFileSync("eco/l10-de.html", de10());
fs.writeFileSync("eco/l10-tl.html", tl10());
console.log("OK");
