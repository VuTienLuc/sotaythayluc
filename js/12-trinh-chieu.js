// ===================== TRÌNH CHIẾU =====================
const pr = document.getElementById("present"), prStage=document.getElementById("prStage");
let slides=[], sIdx=0, sStep=0, wakeLock=null;
function buildSlides(e){
  const s = [{type:"title"}];
  filteredItems(e).forEach(x=>{
    const sol = x.it.tag==="VD" && splitExample(x.it.text).a;
    s.push({type:"item", it:x.it, steps: (sol && state.revealStep) ? 2 : 1});
  });
  return s;
}
function openPresent(start){
  const e = BY_ID[currentId]; if(!e) return;
  slides = buildSlides(e); sIdx = Math.max(0, Math.min(start||0, slides.length-1)); sStep = 0;
  pr.dataset.bg = state.presentBg; pr.style.setProperty("--pr-scale", state.presentScale);
  document.getElementById("prTitle").textContent = e.gradeLabel+" · "+e.topicName;
  pr.hidden = false; drawSlide();
  try{ navigator.wakeLock && navigator.wakeLock.request("screen").then(l=>wakeLock=l).catch(()=>{}); }catch(err){}
  document.getElementById("prNext").focus();
}
function closePresent(){
  if(pr.hidden) return;
  pr.hidden = true;
  try{ if(document.fullscreenElement) document.exitFullscreen().catch(()=>{}); }catch(e){}
  try{ wakeLock && wakeLock.release(); }catch(e){} wakeLock=null;
}
function drawSlide(){
  const e = BY_ID[currentId], sl = slides[sIdx];
  let html;
  if(sl.type==="title"){
    const counts={}; filteredItems(e).forEach(x=>counts[x.it.tag]=(counts[x.it.tag]||0)+1);
    html = '<div class="pr-slide pr-title"><div class="crumb"><span>'+esc(e.gradeLabel)+'</span><span>·</span><span>'+esc(e.strandName)+'</span></div><h2>'+esc(e.topicName)+'</h2><p>'+
      Object.keys(counts).map(t=>counts[t]+" "+tagInfo(t).label.toLowerCase()).join(" · ")+'</p></div>';
  } else {
    const it = sl.it;
    if(it.tag==="VD"){
      const p = splitExample(it.text);
      const showSol = p.a && (sl.steps===1 || sStep>=1);
      html = '<div class="pr-slide"><div class="tag">'+tagInfo("VD").label+'</div><div class="it-body">'+linesHtml(p.q)+'</div>'+
        (p.a ? (showSol ? '<div class="sol"><div class="sol-label">Lời giải</div><div class="it-body">'+linesHtml(p.a)+'</div></div>'
                        : '<span class="pr-reveal">Bấm → để hiện lời giải</span>') : '')+'</div>';
    } else html = '<div class="pr-slide"><div class="tag" style="--tc:'+tagInfo(it.tag).css+'">'+tagInfo(it.tag).label+'</div><div class="it-body">'+linesHtml(it.text)+'</div></div>';
  }
  prStage.innerHTML = html; prStage.scrollTop = 0;
  document.getElementById("prCount").textContent = sIdx===0 ? "Mở đầu" : sIdx+" / "+(slides.length-1);
  document.getElementById("prBar").style.width = (slides.length>1 ? (sIdx/(slides.length-1))*100 : 100)+"%";
  document.getElementById("prPrev").disabled = sIdx===0 && sStep===0;
  document.getElementById("prNext").disabled = sIdx===slides.length-1 && sStep>=slides[sIdx].steps-1 ;
  const token = ++fitToken;
  fitSlide(token);
  typeset(prStage).then(()=>fitSlide(token));
  setTimeout(()=>fitSlide(token), 700);
}
// Tự co chữ để cả mục vừa một màn hình (không phải cuộn)
let fitToken = 0;
function fitSlide(token){
  if(token!==fitToken || pr.hidden) return;
  const slide = prStage.querySelector(".pr-slide"); if(!slide) return;
  const avail = () => prStage.clientHeight - 24;
  let f = 1; slide.style.setProperty("--fit", f);
  while(slide.scrollHeight > avail() && f > 0.5){ f = Math.round((f - 0.05)*100)/100; slide.style.setProperty("--fit", f); }
}
window.addEventListener("resize", ()=>{ if(!pr.hidden) fitSlide(fitToken); });
// Tách ý dài thành từng dòng: theo dấu ";", các bước (1) (2)…, và (khi cần) theo câu — không cắt trong $...$
function splitLines(text, bySentence){
  const re = bySentence ? /;\s+|\.\s+(?=\p{Lu})|(?<=:)\s+(?=\(\d\)\s|[A-D]\.\s|[a-d]\)\s)/u : /;\s+|(?<=:)\s+(?=\(\d\)\s|[A-D]\.\s|[a-d]\)\s)/u;
  const out = [""];
  text.split(/(\$[^$]*\$)/).forEach(part=>{
    if(part.length>1 && part[0]==="$" && part[part.length-1]==="$"){ out[out.length-1] += part; return; }
    const segs = part.split(re);
    out[out.length-1] += segs[0];
    for(let i=1;i<segs.length;i++) out.push(segs[i]);
  });
  const res = out.map(x=>x.trim()).filter(Boolean);
  return res.length>1 ? res.map(x=>x.replace(/([^.])\.$/,"$1")) : res;
}
function linesHtml(text, bySentence){
  const segs = splitLines(text, bySentence!==false);
  if(segs.length<2) return '<p>'+fmt(text)+'</p>';
  let lead = "";
  if(/:$/.test(segs[0])) lead = '<p class="lead">'+fmt(segs.shift())+'</p>';
  if(segs.length===1) return lead+'<p>'+fmt(segs[0])+'</p>';
  return lead+'<ul class="lines">'+segs.map(x=>{
    const m = x.match(/^\((\d+)\)\s+([\s\S]*)$/);
    if(m) return '<li class="num"><span class="n">'+m[1]+'</span>'+fmt(m[2])+'</li>';
    return /:$/.test(x) ? '<li class="sub">'+fmt(x)+'</li>' : '<li>'+fmt(x)+'</li>';
  }).join("")+'</ul>';
}
function prGo(dir){
  const sl = slides[sIdx];
  if(dir>0){
    if(sl.steps && sStep < sl.steps-1){ sStep++; }
    else if(sIdx < slides.length-1){ sIdx++; sStep=0; }
    else return;
  } else {
    if(sStep>0){ sStep--; }
    else if(sIdx>0){ sIdx--; sStep = 0; }
    else return;
  }
  drawSlide();
}
function prScale(d){ state.presentScale = Math.round(Math.min(1.8, Math.max(0.7, state.presentScale + d))*10)/10; pr.style.setProperty("--pr-scale", state.presentScale); saveState(); fitSlide(fitToken); }
function prCycleBg(){ const o=["board","light","dark"]; state.presentBg = o[(o.indexOf(state.presentBg)+1)%3]; pr.dataset.bg=state.presentBg; saveState(); syncSettings(); }
function prFull(){ try{ if(document.fullscreenElement) document.exitFullscreen().catch(()=>{}); else if(pr.requestFullscreen) pr.requestFullscreen().catch(()=>toast("Trình duyệt này không cho toàn màn hình")); else toast("Trình duyệt này không cho toàn màn hình"); }catch(e){} }
document.getElementById("prNext").addEventListener("click",()=>prGo(1));
document.getElementById("prPrev").addEventListener("click",()=>prGo(-1));
document.getElementById("prClose").addEventListener("click",closePresent);
document.getElementById("prBigger").addEventListener("click",()=>prScale(.1));
document.getElementById("prSmaller").addEventListener("click",()=>prScale(-.1));
document.getElementById("prBg").addEventListener("click",prCycleBg);
document.getElementById("prFull").addEventListener("click",prFull);
let tx=null;
prStage.addEventListener("touchstart",e=>{ tx=e.touches[0].clientX; },{passive:true});
prStage.addEventListener("touchend",e=>{ if(tx==null) return; const dx=e.changedTouches[0].clientX-tx; if(Math.abs(dx)>50) prGo(dx<0?1:-1); tx=null; });
