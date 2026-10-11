// ===================== TAG =====================
const TAG_MAP = {
  DN:{label:"Định nghĩa",css:"var(--tag-dn)"}, CT:{label:"Công thức",css:"var(--tag-ct)"},
  TC:{label:"Tính chất",css:"var(--tag-tc)"}, DH:{label:"Dấu hiệu",css:"var(--tag-dh)"},
  LY:{label:"Lưu ý",css:"var(--tag-ly)"}, DT:{label:"Dạng toán",css:"var(--tag-dt)"},
  VD:{label:"Ví dụ minh họa",css:"var(--tag-vd)"}
};
const TAG_ORDER = ["DN","CT","TC","DH","DT","LY","VD"];
function tagInfo(t){ return TAG_MAP[t]||{label:t,css:"var(--muted)"}; }
