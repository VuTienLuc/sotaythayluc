// ===================== THỜI KHOÁ BIỂU =====================
const saveSoon = debounce(saveState, 400);
function renderWeek(){
  const wrap = document.getElementById("week");
  const todayKey = ["cn","t2","t3","t4","t5","t6","t7"][new Date().getDay()];
  wrap.innerHTML = "";
  WEEK_DAYS.forEach(d=>{
    const note = state.weekNotes[d.key];
    const det = document.createElement("details");
    det.className = "day"+(d.key===todayKey?" today":"");
    det.open = isDesktop() || d.key===todayKey;
    det.innerHTML = '<summary><span>'+d.label+'</span>'+(d.key===todayKey?'<span class="badge">Hôm nay</span>':'')+'</summary><div class="day-body"></div>';
    const body = det.querySelector(".day-body");
    [["morning","Buổi sáng"],["afternoon","Buổi chiều"]].forEach(([k,lab])=>{
      const s = document.createElement("div"); s.className="sess";
      s.innerHTML = '<h4>'+lab+'</h4><div class="periods"></div>';
      note[k].forEach((v,i)=>{
        const inp = document.createElement("input"); inp.type="text"; inp.id="w-"+d.key+"-"+k+"-"+i; inp.placeholder="Tiết "+(i+1); inp.value=v;
        inp.setAttribute("aria-label", d.label+", "+lab.toLowerCase()+", tiết "+(i+1));
        inp.addEventListener("input",()=>{ note[k][i]=inp.value; saveSoon(); });
        s.querySelector(".periods").appendChild(inp);
      });
      body.appendChild(s);
    });
    const ev = document.createElement("div"); ev.className="sess";
    ev.innerHTML = '<h4>Buổi tối · ghi chú</h4>';
    const ta = document.createElement("textarea"); ta.id="w-"+d.key+"-eve"; ta.placeholder="Việc cần làm, bài cần soạn…"; ta.value=note.evening;
    ta.setAttribute("aria-label", d.label+", ghi chú buổi tối");
    ta.addEventListener("input",()=>{ note.evening=ta.value; saveSoon(); });
    ev.appendChild(ta); body.appendChild(ev);
    wrap.appendChild(det);
  });
}
