// ===================== MATHJAX =====================
function typeset(el){
  if(!el) return Promise.resolve();
  const run = ()=>{ try{ MathJax.typesetClear && MathJax.typesetClear([el]); return MathJax.typesetPromise([el]).catch(()=>{}); }catch(e){ return null; } };
  if(window.MathJax && MathJax.typesetPromise){
    return (MathJax.startup && MathJax.startup.promise ? MathJax.startup.promise : Promise.resolve()).then(run);
  }
  pendingTypeset.add(el);
  return Promise.resolve();
}
const pendingTypeset = new Set();
const mjWait = setInterval(()=>{
  if(window.MathJax && MathJax.typesetPromise){ clearInterval(mjWait); pendingTypeset.forEach(el=>{ if(el.isConnected) typeset(el); }); pendingTypeset.clear(); }
}, 150);
setTimeout(()=>clearInterval(mjWait), 30000);
