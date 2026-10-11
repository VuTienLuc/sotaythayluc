// ===================== TRẠNG THÁI =====================
const STORE_KEY = "stth_state_v1";
const WEEK_DAYS = [{key:"t2",label:"Thứ Hai"},{key:"t3",label:"Thứ Ba"},{key:"t4",label:"Thứ Tư"},{key:"t5",label:"Thứ Năm"},{key:"t6",label:"Thứ Sáu"},{key:"t7",label:"Thứ Bảy"},{key:"cn",label:"Chủ Nhật"}];
function defaultWeek(){ const w={}; WEEK_DAYS.forEach(d=>w[d.key]={morning:["","","",""],afternoon:["","","",""],evening:""}); return w; }
function defaultState(){
  return {v:2, theme:"system", fontSize:2, hiddenGrades:[], favorites:[], history:[], weekNotes:defaultWeek(),
    openGrades:[], hideSolutions:false, presentBg:"board", presentScale:1, revealStep:true};
}
function fixState(p){
  const s = Object.assign(defaultState(), p||{});
  const wn = Object.assign(defaultWeek(), (p&&p.weekNotes)||{});
  WEEK_DAYS.forEach(d=>{
    const day = Object.assign({morning:[],afternoon:[],evening:""}, wn[d.key]||{});
    ["morning","afternoon"].forEach(k=>{ day[k]=(Array.isArray(day[k])?day[k]:[]).slice(0,4); while(day[k].length<4) day[k].push(""); });
    day.evening = day.evening||"";
    wn[d.key]=day;
  });
  s.weekNotes = wn;
  ["hiddenGrades","favorites","history","openGrades"].forEach(k=>{ if(!Array.isArray(s[k])) s[k]=[]; });
  s.favorites = s.favorites.filter(id=>BY_ID[id]);
  s.history = s.history.filter(h=>h && BY_ID[h.id]);
  s.v = 2;
  return s;
}
function loadState(){ try{ const r = localStorage.getItem(STORE_KEY); return fixState(r?JSON.parse(r):null); }catch(e){ return fixState(null); } }
function saveState(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }
let state = loadState();
