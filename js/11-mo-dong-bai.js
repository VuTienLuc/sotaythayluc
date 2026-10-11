// ===================== MỞ / ĐÓNG BÀI =====================
let navDepth = 0, suppressHash = false;
function openTopic(id, opts){
  const e = BY_ID[id]; if(!e) return;
  opts = opts||{};
  if(state.hiddenGrades.includes(e.g)){ state.hiddenGrades = state.hiddenGrades.filter(x=>x!==e.g); renderGradeChips(); }
  const g = String(e.g); if(!state.openGrades.includes(g)) state.openGrades.push(g);
  if(currentId!==id) tagFilter = null;
  currentId = id;
  state.history = state.history.filter(h=>h.id!==id); state.history.unshift({id,ts:Date.now()}); state.history = state.history.slice(0,20);
  saveState();
  if(app.dataset.view!=="sotay") setView("sotay");
  app.classList.add("reading");
  renderReader();
  reader.scrollTop = 0; if(!isDesktop()) window.scrollTo(0,0);
  if(!qInput.value.trim()) renderSide();
  else sideBody.querySelectorAll(".res").forEach(b=>b.classList.toggle("active", b.dataset.open===id));
  const cur = sideBody.querySelector('.toc-topic[aria-current="true"]'); if(cur && isDesktop()) cur.scrollIntoView({block:"nearest"});
  if(!opts.fromHash){
    try{ if(location.hash!=="#bai-"+id){ suppressHash=true; location.hash = "bai-"+id; navDepth++; } }catch(err){}
  }
}
function closeReader(){
  if(navDepth>0){ navDepth--; try{ history.back(); return; }catch(e){} }
  currentId=null; app.classList.remove("reading"); renderReader(); renderSide();
  try{ history.replaceState(null,"",location.pathname+location.search); }catch(e){}
}
window.addEventListener("hashchange", ()=>{
  if(suppressHash){ suppressHash=false; return; }
  const m = location.hash.match(/^#bai-(\d+-\d+-\d+)$/);
  if(m && BY_ID[m[1]]){ if(m[1]!==currentId) openTopic(m[1],{fromHash:true}); }
  else if(currentId){ if(navDepth>0) navDepth--; currentId=null; app.classList.remove("reading"); closePresent(); renderReader(); renderSide(); }
});
function toggleFav(id){
  const k = state.favorites.indexOf(id);
  if(k>=0){ state.favorites.splice(k,1); toast("Đã bỏ khỏi Yêu thích"); } else { state.favorites.push(id); toast("Đã lưu vào Yêu thích"); }
  saveState(); renderReader(); if(!qInput.value.trim()) renderSide();
}
