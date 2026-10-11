// ===================== CHỈ MỤC =====================
const INDEX = [], BY_ID = {};
DATA.forEach((g,gi)=>g.s.forEach((s,si)=>s.t.forEach((t,ti)=>{
  const id = gi+"-"+si+"-"+ti;
  const items = t.i.map(parseItem);
  const e = {id,gi,si,ti,g:g.g,gradeLabel:g.l,gradeColor:g.c,strandName:s.n,topicName:t.n,items,
    nameNorm:sNorm(t.n), blob:sNorm(g.l+" "+s.n+" "+t.n+" "+items.map(x=>x.text).join(" "))};
  INDEX.push(e); BY_ID[id]=e;
})));
const TOTAL_ITEMS = INDEX.reduce((a,e)=>a+e.items.length,0);
