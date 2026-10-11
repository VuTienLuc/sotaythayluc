// ===================== TÀI LIỆU PDF (menu riêng) =====================
// Cấp 1: danh sách lớp có tài liệu (bấm để mở) → Cấp 2: bộ tài liệu chung + từng bài với phiếu PDF.
// Dữ liệu: data/tai-lieu.js (window.TAI_LIEU). fileUrl/absUrl khai báo ở js/14-trang-web.js.
const docsRoot = document.getElementById("docs");
function topicIdByName(g, mach, ten){
  const e = INDEX.find(x=>String(x.g)===String(g) && x.strandName===mach && x.topicName===ten);
  return e ? e.id : null;
}
function docBtn(it, label){
  const u = fileUrl(it.file);
  return '<a class="dbtn" href="'+esc(u)+'" target="_blank" rel="noopener">'+icon("pdf")+'<span>'+esc(label||(/\.pdf$/i.test(it.file)?"Mở PDF":"Mở tệp"))+'</span></a>'+
    '<button type="button" class="icon-btn" data-copy="'+esc(absUrl(u))+'" aria-label="Sao chép liên kết '+esc(it.t)+'" title="Sao chép liên kết">'+icon("copy")+'</button>';
}
function renderDocs(){
  // gom theo khối lớp, giữ thứ tự khối như trong sổ tay
  const byGrade = DATA.map(g=>({g:g.g, l:g.l, c:g.c, sets:TAI_LIEU.filter(d=>String(d.khoi)===String(g.g))}));
  const total = TAI_LIEU.reduce((a,d)=>a+d.items.length,0);
  let html = '<p class="hint">'+total+' tài liệu PDF. Bấm vào lớp để xem các bài, mỗi bài có phiếu luyện riêng. Nút sao chép cho đường link đầy đủ để gửi Zalo cho học sinh.</p>';
  byGrade.forEach(gr=>{
    const n = gr.sets.reduce((a,d)=>a+d.items.length,0);
    if(!n){ html += '<div class="dgrade empty" style="--gc:'+gr.c+'"><span class="dot"></span><b>'+esc(gr.l)+'</b><small>Chưa có tài liệu</small></div>'; return; }
    html += '<details class="dgrade" style="--gc:'+gr.c+'"><summary><span class="dot"></span><b>'+esc(gr.l)+'</b><small>'+n+' tài liệu</small><svg class="ic chev" viewBox="0 0 24 24" aria-hidden="true">'+IC.chev+'</svg></summary><div class="dbody">';
    // gom theo mạch
    const machs = [...new Set(gr.sets.map(d=>d.mach))];
    machs.forEach(mach=>{
      const items = [].concat(...gr.sets.filter(d=>d.mach===mach).map(d=>d.items));
      const general = items.filter(it=>!it.bai);
      const perTopic = items.filter(it=>it.bai);
      html += '<h3 class="dmach">'+esc(mach)+'</h3>';
      if(general.length){
        html += '<div class="dsec"><div class="dsec-t">Bộ đề và phiếu tổng hợp</div>'+general.map(it=>
          '<div class="drow'+(it.gv?' gv':'')+'"><span class="dname"><b>'+esc(it.t)+'</b>'+(it.gv?' <em class="dtag">Giáo viên</em>':'')+'<small>'+esc(it.mo_ta)+'</small></span><span class="dact">'+docBtn(it)+'</span></div>').join("")+'</div>';
      }
      if(perTopic.length){
        html += '<div class="dsec"><div class="dsec-t">Phiếu luyện theo bài</div>'+perTopic.map((it,k)=>{
          const id = topicIdByName(gr.g, mach, it.bai);
          return '<div class="drow"><span class="dnum">'+(k+1)+'</span><span class="dname"><b>'+esc(it.bai)+'</b><small>'+esc(it.mo_ta)+'</small></span><span class="dact">'+
            (id?'<button type="button" class="dlink" data-open-topic="'+id+'">Xem bài</button>':'')+docBtn(it, "Phiếu PDF")+'</span></div>';
        }).join("")+'</div>';
      }
    });
    html += '</div></details>';
  });
  docsRoot.innerHTML = html;
}
docsRoot.addEventListener("click", e=>{
  const c = e.target.closest("[data-copy]"); if(c){ e.preventDefault(); copyText(c.dataset.copy, "Đã sao chép liên kết"); return; }
  const o = e.target.closest("[data-open-topic]"); if(o){ openTopic(o.dataset.openTopic); }
});
