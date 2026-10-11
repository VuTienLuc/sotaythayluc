// ===================== TRANG WEB CỦA THẦY =====================
const LINK_GROUPS = window.LINK_GROUPS || [];
function renderLinks(){
  document.getElementById("links").innerHTML = LINK_GROUPS.map((g,gi)=>
    '<section class="lgroup"><h3><span>Nhóm '+(gi+1)+'</span><b>'+esc(g.name)+'</b></h3><div class="lgrid">'+
    g.items.map(it=>'<div class="lcard" style="--lc:'+g.color+'"><span class="lic">'+icon(g.icon)+'</span>'+
      '<a href="'+esc(it.u)+'" target="_blank" rel="noopener"><b>'+esc(it.t)+'</b><small>'+esc(it.host || it.u.replace(/^https?:\/\//,"").replace(/\/$/,""))+'</small></a>'+
      '<button type="button" class="icon-btn" data-copy="'+esc(it.u)+'" aria-label="Sao chép liên kết '+esc(it.t)+'" title="Sao chép liên kết">'+icon("copy")+'</button></div>').join("")+
    '</div></section>').join("");
}
document.getElementById("links").addEventListener("click", e=>{
  const b = e.target.closest("[data-copy]"); if(b){ e.preventDefault(); copyText(b.dataset.copy, "Đã sao chép liên kết"); }
});
