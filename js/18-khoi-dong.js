// ===================== KHỞI TẠO =====================
function refreshAll(){ applyTheme(); syncSettings(); renderGradeChips(); renderSide(); renderReader(); if(app.dataset.view==="week") renderWeek(); }
paintIcons(document);
renderLinks();
if(/Mac|iPhone|iPad/.test(navigator.platform||"")) document.getElementById("qKbd").textContent = "⌘ K";
if(window.matchMedia("(hover:none)").matches) document.getElementById("qKbd").hidden = true;
(function init(){
  const m = location.hash.match(/^#bai-(\d+-\d+-\d+)$/);
  refreshAll();
  if(m && BY_ID[m[1]]) openTopic(m[1],{fromHash:true});
})();
