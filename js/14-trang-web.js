// ===================== TRANG WEB CỦA THẦY =====================
const LINK_GROUPS = window.LINK_GROUPS || [];
const TAI_LIEU = window.TAI_LIEU || [];
// Đường dẫn tài liệu: chạy từ dự án (Vercel / mở index.html) thì dùng file cạnh trang;
// bản gộp một file hoặc bản đăng trên claude.ai thì lấy từ GitHub.
const GITHUB_RAW = "https://raw.githubusercontent.com/VuTienLuc/sotaythayluc/main/";
const TAI_LIEU_TU_GITHUB = !!window.SOTAY_MOT_FILE || /claude\.(ai|site)|claudeusercontent/.test(location.hostname);
function fileUrl(f){ return TAI_LIEU_TU_GITHUB ? GITHUB_RAW + f.split("/").map(encodeURIComponent).join("/") : f; }
function absUrl(u){ try{ return new URL(u, location.href).href; }catch(e){ return u; } }
function renderLinks(){
  const docs = TAI_LIEU.map(d=>({name:d.ten, icon:"pdf", color:"var(--tag-ly)", items:d.items.map(it=>({t:it.t, u:fileUrl(it.file), host:it.mo_ta}))}));
  document.getElementById("links").innerHTML = docs.concat(LINK_GROUPS).map((g,gi)=>
    '<section class="lgroup"><h3><span>Nhóm '+(gi+1)+'</span><b>'+esc(g.name)+'</b></h3><div class="lgrid">'+
    g.items.map(it=>'<div class="lcard" style="--lc:'+g.color+'"><span class="lic">'+icon(g.icon)+'</span>'+
      '<a href="'+esc(it.u)+'" target="_blank" rel="noopener"><b>'+esc(it.t)+'</b><small>'+esc(it.host || it.u.replace(/^https?:\/\//,"").replace(/\/$/,""))+'</small></a>'+
      '<button type="button" class="icon-btn" data-copy="'+esc(absUrl(it.u))+'" aria-label="Sao chép liên kết '+esc(it.t)+'" title="Sao chép liên kết">'+icon("copy")+'</button></div>').join("")+
    '</div></section>').join("");
}
document.getElementById("links").addEventListener("click", e=>{
  const b = e.target.closest("[data-copy]"); if(b){ e.preventDefault(); copyText(b.dataset.copy, "Đã sao chép liên kết"); }
});
