// ===================== TRANG ĐỌC =====================
const reader = document.getElementById("reader");
let tagFilter = null;
const inFrame = (()=>{ try{ return window.self!==window.top; }catch(e){ return true; } })();

function itemHtml(it, idx, forPresent){
  const ti = tagInfo(it.tag);
  let body;
  if(it.tag==="VD"){
    const p = splitExample(it.text);
    body = '<div class="it-body">'+linesHtml(p.q)+'</div>' + (p.a ? '<div class="sol"><div class="sol-label">Lời giải</div><div class="it-body">'+linesHtml(p.a)+'</div></div>'+(forPresent?'':'<button type="button" class="btn sol-toggle" data-act="showsol">'+icon("eye")+'Xem lời giải</button>') : '');
  } else body = '<div class="it-body">'+linesHtml(it.text)+'</div>';
  if(forPresent) return '<div class="tag" style="--tc:'+ti.css+'">'+ti.label+'</div>'+body;
  return '<li class="it'+(it.tag==="VD"?' it-vd':'')+'" data-idx="'+idx+'" style="--tc:'+ti.css+'"><div class="it-head"><span class="tag">'+ti.label+'</span>'+
    '<span class="it-acts"><button type="button" class="icon-btn" data-act="copy" aria-label="Sao chép LaTeX mục này" title="Sao chép LaTeX">'+icon("copy")+'</button>'+
    '<button type="button" class="icon-btn" data-act="presentfrom" aria-label="Trình chiếu từ mục này" title="Trình chiếu từ mục này">'+icon("play")+'</button></span></div>'+body+'</li>';
}
function filteredItems(e){ return e.items.map((it,i)=>({it,i})).filter(x=>!tagFilter||x.it.tag===tagFilter); }
function neighbors(id){
  const list = visibleEntries(); const k = list.findIndex(e=>e.id===id);
  return {prev:k>0?list[k-1]:null, next:k>=0&&k<list.length-1?list[k+1]:null};
}
function renderReader(){
  if(!currentId){ renderWelcome(); return; }
  const e = BY_ID[currentId];
  const fav = state.favorites.includes(e.id);
  const counts = {}; e.items.forEach(it=>counts[it.tag]=(counts[it.tag]||0)+1);
  const tags = TAG_ORDER.filter(t=>counts[t]).concat(Object.keys(counts).filter(t=>!TAG_ORDER.includes(t)));
  if(tagFilter && !counts[tagFilter]) tagFilter=null;
  const hasVD = !!counts.VD;
  const {prev,next} = neighbors(e.id);
  reader.innerHTML =
    '<div class="r-bar">'+
      '<button type="button" class="icon-btn r-back" data-act="back" aria-label="Quay lại mục lục">'+icon("left")+'</button>'+
      '<span class="grow">'+esc(e.gradeLabel+" · "+e.strandName)+'</span>'+
      '<button type="button" class="icon-btn'+(fav?' star-on':'')+'" data-act="fav" aria-pressed="'+fav+'" aria-label="'+(fav?'Bỏ yêu thích':'Thêm vào yêu thích')+'" title="Yêu thích (S)">'+icon("star")+'</button>'+
      (hasVD?'<button type="button" class="icon-btn" data-act="togglesol" aria-pressed="'+state.hideSolutions+'" aria-label="'+(state.hideSolutions?'Hiện lời giải':'Ẩn lời giải')+'" title="'+(state.hideSolutions?'Hiện lời giải':'Ẩn lời giải')+' (H)">'+icon(state.hideSolutions?"eyeoff":"eye")+'</button>':'')+
      '<button type="button" class="icon-btn" data-act="copyall" aria-label="Sao chép cả bài dạng Markdown" title="Sao chép cả bài (Markdown + LaTeX)">'+icon("md")+'</button>'+
      (!inFrame?'<button type="button" class="icon-btn" data-act="print" aria-label="In bài" title="In bài">'+icon("print")+'</button>':'')+
      '<button type="button" class="btn btn-primary" data-act="present" title="Trình chiếu (P)">'+icon("play")+'<span>Trình chiếu</span></button>'+
    '</div>'+
    '<div class="r-wrap"><article class="sheet'+(state.hideSolutions?' hide-sol':'')+'">'+
      '<div class="crumb"><span class="dot" style="--gc:'+e.gradeColor+'"></span><span>'+esc(e.gradeLabel)+'</span><span>·</span><span>'+esc(e.strandName)+'</span></div>'+
      '<h1>'+esc(e.topicName)+'</h1>'+
      (tags.length>1?'<div class="chips" role="group" aria-label="Lọc theo loại">'+
        '<button type="button" class="chip" data-filter="" aria-pressed="'+(!tagFilter)+'">Tất cả <i>'+e.items.length+'</i></button>'+
        tags.map(t=>'<button type="button" class="chip" data-filter="'+t+'" style="--tc:'+tagInfo(t).css+'" aria-pressed="'+(tagFilter===t)+'">'+tagInfo(t).label+' <i>'+counts[t]+'</i></button>').join("")+'</div>':'')+
      '<ol class="items">'+filteredItems(e).map(x=>itemHtml(x.it,x.i)).join("")+'</ol>'+
    '</article>'+
    '<nav class="pager" aria-label="Chuyển bài">'+
      '<button type="button" class="pg" data-open="'+(prev?prev.id:"")+'"'+(prev?'':' hidden')+'><small>← Bài trước</small><b>'+(prev?esc(prev.topicName):"")+'</b></button>'+
      '<button type="button" class="pg next" data-open="'+(next?next.id:"")+'"'+(next?'':' hidden')+'><small>Bài sau →</small><b>'+(next?esc(next.topicName):"")+'</b></button>'+
    '</nav></div>';
  typeset(reader.querySelector(".sheet"));
}
function renderWelcome(){
  const recent = state.history.slice(0,5).map(h=>flatItem(BY_ID[h.id], relTime(h.ts))).join("") || '<p class="empty" style="padding:16px">Chưa xem bài nào.</p>';
  const favs = state.favorites.slice().reverse().slice(0,5).map(id=>flatItem(BY_ID[id])).join("") || '<p class="empty" style="padding:16px">Bấm ngôi sao ở một bài để ghim vào đây.</p>';
  const grades = DATA.filter(g=>!state.hiddenGrades.includes(g.g)).map(g=>'<button type="button" class="g-tile" data-grade-open="'+esc(String(g.g))+'" style="--gc:'+g.c+'"><span class="dot"></span>'+esc(g.l)+'<small>'+g.s.reduce((a,s)=>a+s.t.length,0)+'</small></button>').join("");
  reader.innerHTML = '<div class="r-wrap"><div class="welcome">'+
    '<h1>Sổ Tay Toán Học</h1><p class="sub">Thầy Vũ Tiến Lực · THPT Nguyễn Hữu Cảnh · Chương trình GDPT 2018</p>'+
    '<div class="stats"><span><b>'+DATA.length+'</b>khối lớp</span><span><b>'+INDEX.length+'</b>bài</span><span><b>'+TOTAL_ITEMS+'</b>mục công thức, định nghĩa, ví dụ</span></div>'+
    '<div class="w-grid">'+
      '<section class="w-card"><h2>Xem gần đây</h2>'+recent+'</section>'+
      '<section class="w-card"><h2>Yêu thích</h2>'+favs+'</section>'+
      '<section class="w-card" style="grid-column:1/-1"><h2>Khối lớp</h2><div class="grade-grid">'+grades+'</div></section>'+
      '<section class="w-card"><h2>Phím tắt</h2><div class="keys">'+
        '<span class="kbd">Ctrl K</span><span>Tra cứu</span><span class="kbd">← →</span><span>Bài trước / bài sau</span>'+
        '<span class="kbd">P</span><span>Trình chiếu bài đang mở</span><span class="kbd">H</span><span>Ẩn / hiện lời giải ví dụ</span>'+
        '<span class="kbd">S</span><span>Yêu thích</span></div></section>'+
      '<section class="w-card"><h2>Khi trình chiếu</h2><div class="keys">'+
        '<span class="kbd">→ Space</span><span>Mục tiếp theo, hiện lời giải</span><span class="kbd">←</span><span>Quay lại</span>'+
        '<span class="kbd">+ −</span><span>Phóng to / thu nhỏ chữ</span><span class="kbd">F</span><span>Toàn màn hình</span><span class="kbd">B</span><span>Đổi nền bảng</span>'+
        '<span class="kbd">Esc</span><span>Thoát</span></div></section>'+
    '</div></div></div>';
}
reader.addEventListener("click", ev=>{
  const gt = ev.target.closest("[data-grade-open]");
  if(gt){ const g=gt.dataset.gradeOpen; listMode="toc"; qInput.value=""; document.querySelectorAll('.seg [data-list]').forEach(x=>x.setAttribute("aria-selected", String(x.dataset.list==="toc")));
    if(!state.openGrades.includes(g)){ state.openGrades.push(g); saveState(); } renderToc();
    const b = sideBody.querySelector('.toc-g-btn[data-grade="'+g+'"]'); if(b){ b.scrollIntoView({block:"start",behavior:"smooth"}); b.focus({preventScroll:true}); } return; }
  const f = ev.target.closest("[data-filter]");
  if(f){ tagFilter = f.dataset.filter||null; renderReader(); return; }
  const o = ev.target.closest("[data-open]");
  if(o && o.dataset.open){ openTopic(o.dataset.open); return; }
  const a = ev.target.closest("[data-act]"); if(!a) return;
  const e = currentId && BY_ID[currentId];
  const li = a.closest(".it");
  switch(a.dataset.act){
    case "back": closeReader(); break;
    case "fav": toggleFav(currentId); break;
    case "togglesol": state.hideSolutions=!state.hideSolutions; saveState(); renderReader(); break;
    case "showsol": li && li.classList.add("show-sol"); break;
    case "copy": copyText(e.items[+li.dataset.idx].text, "Đã sao chép LaTeX"); break;
    case "copyall": copyText(topicMarkdown(e), "Đã sao chép cả bài (Markdown)"); break;
    case "print": try{ window.print(); }catch(err){} break;
    case "present": openPresent(0); break;
    case "presentfrom": {
      const list = filteredItems(e); const k = list.findIndex(x=>x.i===+li.dataset.idx);
      openPresent(k+1); break; }
  }
});
function topicMarkdown(e){
  let md = "## "+e.topicName+"\n*"+e.gradeLabel+" · "+e.strandName+"*\n\n";
  filteredItems(e).forEach(({it})=>{
    if(it.tag==="VD"){ const p=splitExample(it.text); md += "**Ví dụ.** "+p.q+"\n\n"+(p.a?"*Lời giải.* "+p.a+"\n\n":""); }
    else md += "**"+tagInfo(it.tag).label+".** "+it.text+"\n\n";
  });
  return md.trim()+"\n";
}
