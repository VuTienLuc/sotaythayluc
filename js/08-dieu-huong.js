// ===================== ĐIỀU HƯỚNG CHÍNH =====================
const app = document.getElementById("app");
const isDesktop = ()=>window.matchMedia("(min-width:980px)").matches;
function setView(v){
  app.dataset.view = v;
  document.querySelectorAll("[data-nav]").forEach(b=>{ if(b.dataset.nav===v) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current"); });
  if(v==="week") renderWeek();
  window.scrollTo(0,0);
}
document.querySelectorAll("[data-nav]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.nav)));
