// ===================== CÀI ĐẶT =====================
function applyTheme(){
  const r = document.documentElement;
  if(state.theme==="light"||state.theme==="dark") r.setAttribute("data-theme", state.theme); else r.removeAttribute("data-theme");
  r.style.setProperty("--fs-scale", state.fontSize===1?0.92:state.fontSize===3?1.14:1);
}
function syncSettings(){
  const set=(id,val)=>document.querySelectorAll("#"+id+" button").forEach(b=>b.setAttribute("aria-pressed", String(b.dataset.v===String(val))));
  set("themeCtl", state.theme); set("fontCtl", state.fontSize); set("prBgCtl", state.presentBg); set("revealCtl", state.revealStep?1:0);
}
function bindSeg(id, fn){ document.getElementById(id).addEventListener("click", e=>{ const b=e.target.closest("button"); if(!b) return; fn(b.dataset.v); saveState(); applyTheme(); syncSettings(); }); }
bindSeg("themeCtl", v=>state.theme=v);
bindSeg("fontCtl", v=>state.fontSize=+v);
bindSeg("prBgCtl", v=>state.presentBg=v);
bindSeg("revealCtl", v=>state.revealStep = v==="1");
function renderGradeChips(){
  const w = document.getElementById("gradeChips");
  w.innerHTML = DATA.map((g,i)=>'<label class="gchip" style="border-color:color-mix(in srgb,'+g.c+' 45%,var(--line))"><input type="checkbox" id="gc-'+i+'" data-g="'+i+'"'+(state.hiddenGrades.includes(g.g)?'':' checked')+'><span>'+esc(g.l)+'</span></label>').join("");
}
document.getElementById("gradeChips").addEventListener("change", e=>{
  const i = e.target.dataset.g; if(i==null) return;
  const g = DATA[+i].g;
  if(e.target.checked) state.hiddenGrades = state.hiddenGrades.filter(x=>x!==g); else if(!state.hiddenGrades.includes(g)) state.hiddenGrades.push(g);
  saveState(); renderSide(); if(!currentId) renderReader();
});
document.getElementById("about").textContent = "Sổ Tay Toán Học Thông Minh · Lớp 4–12 theo Chương trình GDPT 2018 · "+INDEX.length+" bài, "+TOTAL_ITEMS+" mục.";
