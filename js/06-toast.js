// ===================== TOAST =====================
let toastT;
function toast(msg){ const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),1800); }
async function copyText(text, ok){
  try{ await navigator.clipboard.writeText(text); toast(ok||"Đã sao chép"); }
  catch(e){
    const ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.opacity="0"; document.body.appendChild(ta); ta.select();
    let done=false; try{ done=document.execCommand("copy"); }catch(e2){}
    ta.remove(); toast(done ? (ok||"Đã sao chép") : "Không sao chép tự động được, thầy bôi đen để chép");
  }
}
