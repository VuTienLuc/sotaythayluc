// ===================== MỤC LỤC / DANH SÁCH =====================
const sideBody = document.getElementById("sideBody");
const qInput = document.getElementById("q");
let listMode = "toc";
let currentId = null;
let results = [], activeRes = -1;

function visibleEntries(){ return INDEX.filter(e=>!state.hiddenGrades.includes(e.g)); }

function renderSide(){
  if(qInput.value.trim()){ renderResults(); return; }
  if(listMode==="fav") return renderFav();
  if(listMode==="his") return renderHis();
  renderToc();
}
function resumeCard(){
  const h = state.history[0];
  if(!h || h.id===currentId) return "";
  const e = BY_ID[h.id];
  return '<button type="button" class="resume" data-open="'+e.id+'">'+icon("book")+'<span><small>Xem tiếp</small><b>'+esc(e.topicName)+'</b></span>'+icon("chev")+'</button>';
}
function renderToc(){
  let html = resumeCard();
  DATA.forEach((g,gi)=>{
    if(state.hiddenGrades.includes(g.g)) return;
    const open = state.openGrades.includes(String(g.g));
    const n = g.s.reduce((a,s)=>a+s.t.length,0);
    html += '<div class="toc-grade" style="--gc:'+g.c+'"><button type="button" class="toc-g-btn" data-grade="'+esc(String(g.g))+'" aria-expanded="'+open+'">'+
      '<span class="dot"></span><span>'+esc(g.l)+'</span><span class="cnt">'+n+' bài</span><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true">'+IC.chev+'</svg></button>';
    if(open){
      html += '<div class="toc-g-body">';
      g.s.forEach((s,si)=>{
        html += '<div class="toc-strand">'+esc(s.n)+'</div>';
        s.t.forEach((t,ti)=>{
          const id = gi+"-"+si+"-"+ti;
          html += '<button type="button" class="toc-topic" data-open="'+id+'"'+(id===currentId?' aria-current="true"':'')+'>'+esc(t.n)+(state.favorites.includes(id)?'<span class="fav" aria-label="yêu thích">★</span>':'')+'</button>';
        });
      });
      html += '</div>';
    }
    html += '</div>';
  });
  sideBody.innerHTML = html;
}
function flatItem(e, right){
  return '<button type="button" class="res" data-open="'+e.id+'"><div class="crumb"><span class="dot" style="--gc:'+e.gradeColor+'"></span><span>'+esc(e.gradeLabel+" · "+e.strandName)+'</span>'+(right?'<span class="res-time">'+esc(right)+'</span>':'')+'</div><div class="res-name">'+esc(e.topicName)+'</div></button>';
}
function renderFav(){
  if(!state.favorites.length){ sideBody.innerHTML = '<p class="empty">Chưa có bài yêu thích.<br>Mở một bài rồi bấm nút ngôi sao để lưu lại.</p>'; return; }
  sideBody.innerHTML = '<div class="list-head"><span>'+state.favorites.length+' bài</span></div>' + state.favorites.slice().reverse().map(id=>flatItem(BY_ID[id])).join("");
}
function relTime(ts){
  const m = Math.floor((Date.now()-ts)/60000);
  if(m<1) return "Vừa xong"; if(m<60) return m+" phút trước";
  const h = Math.floor(m/60); if(h<24) return h+" giờ trước";
  const d = Math.floor(h/24); if(d<7) return d+" ngày trước";
  return new Date(ts).toLocaleDateString("vi-VN");
}
function renderHis(){
  if(!state.history.length){ sideBody.innerHTML = '<p class="empty">Chưa có lịch sử. Các bài thầy mở sẽ hiện ở đây.</p>'; return; }
  sideBody.innerHTML = '<div class="list-head"><span>20 bài gần nhất</span><button type="button" class="link-btn" id="clearHis">Xóa lịch sử</button></div>' +
    state.history.map(h=>flatItem(BY_ID[h.id], relTime(h.ts))).join("");
}

// tô sáng từ khóa, bỏ qua phần công thức $...$
function highlight(text, words){
  return text.split(/(\$[^$]*\$)/).map(part=>{
    if(part.startsWith("$") && part.endsWith("$") && part.length>1) return esc(part);
    if(!words.length) return esc(part);
    const norm = normalize(part);
    const marks = new Array(part.length).fill(false);
    words.forEach(w=>{ let p=norm.indexOf(w); while(p>=0){ for(let i=p;i<p+w.length&&i<part.length;i++) marks[i]=true; p=norm.indexOf(w,p+w.length); } });
    let out="", on=false;
    for(let i=0;i<part.length;i++){
      if(marks[i]&&!on){ out+="<mark>"; on=true; } else if(!marks[i]&&on){ out+="</mark>"; on=false; }
      out+=esc(part[i]);
    }
    return out+(on?"</mark>":"");
  }).join("");
}
function search(raw){
  const phrase = sNorm(raw.trim()).trim();
  const words = phrase.split(" ").filter(Boolean);
  if(!words.length) return [];
  const out = [];
  visibleEntries().forEach(e=>{
    if(!words.every(w=>e.blob.includes(w))) return;
    let score = e.nameNorm.includes(phrase) ? 0 : words.every(w=>e.nameNorm.includes(w)) ? 1 : e.blob.includes(phrase) ? 2 : 3;
    let snip = null;
    for(const it of e.items){ const n=sNorm(it.text); if(n.includes(phrase)){ snip=it; break; } }
    if(!snip) for(const it of e.items){ const n=sNorm(it.text); if(words.some(w=>n.includes(w))){ snip=it; break; } }
    out.push({e, score, snip});
  });
  out.sort((a,b)=>a.score-b.score);
  return out;
}
function renderResults(){
  const raw = qInput.value;
  results = search(raw).slice(0,50);
  const words = sNorm(raw.trim()).split(" ").filter(Boolean);
  if(!results.length){ sideBody.innerHTML = '<p class="empty">Không tìm thấy bài nào khớp với “'+esc(raw.trim())+'”.<br>Thử gõ ngắn hơn, có thể gõ không dấu.</p>'; return; }
  activeRes = Math.min(Math.max(activeRes,0), results.length-1);
  sideBody.innerHTML = '<div class="list-head"><span>'+results.length+(results.length===50?'+':'')+' kết quả</span><span class="kbd">↑ ↓ Enter</span></div>' +
    results.map((r,i)=>'<button type="button" class="res'+(i===activeRes?' active':'')+'" data-open="'+r.e.id+'" data-ri="'+i+'"><div class="crumb"><span class="dot" style="--gc:'+r.e.gradeColor+'"></span><span>'+esc(r.e.gradeLabel+" · "+r.e.strandName)+'</span></div>'+
      '<div class="res-name">'+highlight(r.e.topicName, words)+'</div>'+(r.snip?'<div class="res-snip">'+highlight(r.snip.text, words)+'</div>':'')+'</button>').join("");
  typeset(sideBody);
}
const onSearch = debounce(()=>{ activeRes=0; renderSide(); }, 120);
qInput.addEventListener("input", onSearch);
qInput.addEventListener("keydown", e=>{
  if(!qInput.value.trim()) return;
  if(e.key==="ArrowDown"||e.key==="ArrowUp"){
    e.preventDefault();
    activeRes = (activeRes + (e.key==="ArrowDown"?1:-1) + results.length) % results.length;
    sideBody.querySelectorAll(".res").forEach((b,i)=>{ b.classList.toggle("active", i===activeRes); if(i===activeRes) b.scrollIntoView({block:"nearest"}); });
  } else if(e.key==="Enter" && results[activeRes]){
    e.preventDefault(); openTopic(results[activeRes].e.id); qInput.blur();
  } else if(e.key==="Escape"){ qInput.value=""; renderSide(); }
});

document.querySelectorAll('.seg [data-list]').forEach(b=>b.addEventListener("click",()=>{
  listMode = b.dataset.list;
  document.querySelectorAll('.seg [data-list]').forEach(x=>x.setAttribute("aria-selected", String(x===b)));
  if(qInput.value){ qInput.value=""; }
  renderSide();
}));

sideBody.addEventListener("click", e=>{
  const g = e.target.closest(".toc-g-btn");
  if(g){ toggleGrade(g.dataset.grade); return; }
  if(e.target.closest("#clearHis")){ state.history=[]; saveState(); renderSide(); toast("Đã xóa lịch sử"); return; }
  const o = e.target.closest("[data-open]");
  if(o) openTopic(o.dataset.open);
});
function toggleGrade(g, forceOpen){
  const i = state.openGrades.indexOf(g);
  if(i>=0 && !forceOpen) state.openGrades.splice(i,1);
  else if(i<0) state.openGrades.push(g);
  saveState(); renderToc();
}
