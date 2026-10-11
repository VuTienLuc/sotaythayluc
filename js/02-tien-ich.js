// ===================== TIỆN ÍCH =====================
function normalize(s){
  return (s||"").toString().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();
}
function sNorm(s){ return normalize(s).replace(/[-–—]/g," ").replace(/\s+/g," "); }
function esc(s){ return (s||"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
// Định dạng văn bản ngoài công thức: escape HTML, \textit{...} → in nghiêng
function fmt(text){
  return text.split(/(\$[^$]*\$)/).map(part=>{
    if(part.length>1 && part[0]==="$" && part[part.length-1]==="$") return esc(part);
    return esc(part).replace(/\\textit\{([^}]*)\}/g,"<em>$1</em>");
  }).join("");
}
function parseItem(raw){ const k = raw.indexOf("|"); return {tag:raw.slice(0,k), text:raw.slice(k+1)}; }
function debounce(fn,ms){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); }; }
// Tách đề và lời giải của một ví dụ (không cắt bên trong công thức $...$)
function splitExample(text){
  let t = text.replace(/^Ví dụ\s*:\s*/,"");
  const re = /(?:\.|\?|:|\)|\s)\s*(Lời giải|Giải)\s*:\s*/g;
  let m;
  while((m = re.exec(t))){
    const before = t.slice(0, m.index + 1);
    if(((before.match(/\$/g)||[]).length % 2) === 0){
      return {q: t.slice(0, m.index + (m[0][0]===" " ? 0 : 1)).trim(), a: t.slice(m.index + m[0].length).trim()};
    }
  }
  return {q:t, a:""};
}
