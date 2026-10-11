// ===================== MODAL =====================
const overlay=document.getElementById("overlay"), mBody=document.getElementById("mBody");
function openModal(title, html){ document.getElementById("mTitle").textContent=title; mBody.innerHTML=html; overlay.hidden=false; paintIcons(mBody); }
function closeModal(){ overlay.hidden=true; mBody.innerHTML=""; }
document.getElementById("mClose").addEventListener("click", closeModal);
overlay.addEventListener("click", e=>{ if(e.target===overlay) closeModal(); });

async function offerDownload(filename, text){
  if(window.claude && typeof window.claude.use==="function"){
    try{ const d = await window.claude.use("downloads"); if(d){ await d.save({filename, data:text}); toast("Đã lưu file"); return; } }
    catch(e){ if(e && e.code==="declined") return; }
  }
  try{
    const url = URL.createObjectURL(new Blob([text],{type:"application/json"}));
    const a = document.createElement("a"); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }catch(e){ toast("Không tải được file, thầy dùng nút Sao chép"); }
}
document.getElementById("exportBtn").addEventListener("click", ()=>{
  const json = JSON.stringify({v:2, exportedAt:new Date().toISOString(), state}, null, 2);
  openModal("Xuất dữ liệu", '<p>Sao chép hoặc tải nội dung dưới đây để chuyển sang thiết bị khác.</p><textarea id="exArea" readonly></textarea><div class="btns"><button type="button" class="btn" id="exCopy">Sao chép</button><button type="button" class="btn" id="exDown">Tải file .json</button></div>');
  document.getElementById("exArea").value = json;
  document.getElementById("exCopy").addEventListener("click", ()=>copyText(json, "Đã sao chép dữ liệu"));
  document.getElementById("exDown").addEventListener("click", ()=>offerDownload("so-tay-toan-hoc-du-lieu.json", json));
});
document.getElementById("importBtn").addEventListener("click", ()=>{
  openModal("Nhập dữ liệu", '<p>Dán nội dung JSON đã xuất, hoặc chọn file .json.</p><input type="file" id="imFile" accept="application/json,.json"><textarea id="imArea" placeholder="Dán JSON vào đây…"></textarea><div class="btns"><button type="button" class="btn btn-primary" id="imOk">Nhập dữ liệu</button></div>');
  document.getElementById("imFile").addEventListener("change", e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>document.getElementById("imArea").value=r.result; r.readAsText(f); });
  document.getElementById("imOk").addEventListener("click", ()=>{
    const raw = document.getElementById("imArea").value.trim();
    if(!raw){ toast("Chưa có nội dung để nhập"); return; }
    try{ const p = JSON.parse(raw); const inc = p && p.state ? p.state : p; if(!inc||typeof inc!=="object") throw 0;
      state = fixState(inc); saveState(); refreshAll(); closeModal(); toast("Đã nhập dữ liệu"); }
    catch(e){ toast("Nội dung không đúng định dạng JSON đã xuất"); }
  });
});
document.getElementById("resetBtn").addEventListener("click", ()=>{
  openModal("Xóa toàn bộ dữ liệu?", '<p>Yêu thích, lịch sử, thời khoá biểu và cài đặt sẽ bị xóa khỏi thiết bị này. Không thể hoàn tác. Nên xuất dữ liệu trước.</p><div class="btns"><button type="button" class="btn" id="rsNo">Giữ lại</button><button type="button" class="btn btn-danger" id="rsYes">Xóa toàn bộ</button></div>');
  document.getElementById("rsNo").addEventListener("click", closeModal);
  document.getElementById("rsYes").addEventListener("click", ()=>{ state=defaultState(); saveState(); refreshAll(); closeModal(); toast("Đã xóa dữ liệu cá nhân"); });
});
