// ===================== PHÍM TẮT =====================
document.addEventListener("keydown", e=>{
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
  if(!pr.hidden){
    if(["ArrowRight","PageDown"," ","Enter"].includes(e.key)){ e.preventDefault(); prGo(1); }
    else if(["ArrowLeft","PageUp","Backspace"].includes(e.key)){ e.preventDefault(); prGo(-1); }
    else if(e.key==="Escape"){ if(!document.fullscreenElement) closePresent(); }
    else if(e.key==="f"||e.key==="F") prFull();
    else if(e.key==="b"||e.key==="B") prCycleBg();
    else if(e.key==="+"||e.key==="=") prScale(.1);
    else if(e.key==="-") prScale(-.1);
    else if(e.key==="Home"){ sIdx=0; sStep=0; drawSlide(); }
    return;
  }
  if(!document.getElementById("overlay").hidden){ if(e.key==="Escape") closeModal(); return; }
  if((e.ctrlKey||e.metaKey) && (e.key==="k"||e.key==="K")){ e.preventDefault(); focusSearch(); return; }
  if(typing || e.ctrlKey || e.metaKey || e.altKey) return;
  if(e.key==="/"){ e.preventDefault(); focusSearch(); return; }
  if(app.dataset.view!=="sotay" || !currentId) return;
  const {prev,next} = neighbors(currentId);
  if(e.key==="ArrowRight" && next){ e.preventDefault(); openTopic(next.id); }
  else if(e.key==="ArrowLeft" && prev){ e.preventDefault(); openTopic(prev.id); }
  else if(e.key==="p"||e.key==="P") openPresent(0);
  else if(e.key==="h"||e.key==="H"){ if(BY_ID[currentId].items.some(i=>i.tag==="VD")){ state.hideSolutions=!state.hideSolutions; saveState(); renderReader(); toast(state.hideSolutions?"Đã ẩn lời giải":"Đã hiện lời giải"); } }
  else if(e.key==="s"||e.key==="S") toggleFav(currentId);
  else if(e.key==="Escape" && !isDesktop()) closeReader();
});
function focusSearch(){
  if(app.dataset.view!=="sotay") setView("sotay");
  if(!isDesktop() && app.classList.contains("reading")) closeReader();
  setTimeout(()=>{ qInput.focus(); qInput.select(); }, 30);
}
