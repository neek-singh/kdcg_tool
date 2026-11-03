const W=595,H=842;
const getSessionYear=()=>{const d=new Date(),y=d.getFullYear(),s=d.getMonth()>=5?y:y-1;return `Year ${s}-${String((s+1)%100).padStart(2,"0")}`};
const S={tpl:"classic",yearColor:"#000000",college:"GOVT KALIDAS COLLEGE PRATAPPUR",year:getSessionYear(),name:"GYANEDRA SINGH",cls:"M.A. FIRST SEMESTER",type:"SEMINAR",subject:"MICRO ECONOMICS",by:"",to:"Dr. Meena Gupta",
subjects:[{subject:"MICRO ECONOMICS",to:"Dr. Meena Gupta"}],activeSubIdx:0,
font:"Times New Roman",titleColor:"#6F83D8",textColor:"#000000",typeColor:"#000000",subjColor:"#000000",ry:148,tsize:26,logo:204,border:true,florals:true};
const $=id=>document.getElementById(id);
const wt=()=>S.font==="Rye"?"400":"700";
const fam=()=>`"${S.font}", "Times New Roman", Times, serif`;
const shade=(h,f)=>{const n=parseInt(h.slice(1),16);return `rgb(${[n>>16,n>>8&255,n&255].map(v=>Math.round(v*(1-f))).join(",")})`};
const img=new Image();img.onload=()=>redraw();img.src=LOGO;

function T(c,t,x,y,size,col,al="center",font=fam(),w=wt()){c.save();c.translate(x,y);c.scale(1,-1);c.font=`${w} ${size}px ${font}`;c.fillStyle=col;c.textAlign=al;c.textBaseline="alphabetic";c.fillText(t,0,0);c.restore()}
function fit(c,t,size,maxW,font=fam()){c.font=`${wt()} ${size}px ${font}`;const w=c.measureText(t).width;return w>maxW?size*maxW/w:size}
function leaf(c,x,y,a,L,col){c.save();c.translate(x,y);c.rotate(a*Math.PI/180);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(L*.25,L*.42,L*.75,L*.38,L,0);c.bezierCurveTo(L*.75,-L*.38,L*.25,-L*.42,0,0);c.fillStyle=col;c.fill();c.lineWidth=.5;c.strokeStyle="#3C7F2B";c.stroke();c.beginPath();c.moveTo(0,0);c.lineTo(L*.92,0);c.stroke();c.restore()}
function flower(c,x,y,r,p="#E25FB0",e="#B83C8C"){c.save();c.translate(x,y);for(let k=0;k<8;k++){c.save();c.rotate(k*Math.PI/4);c.beginPath();c.ellipse(r*.64,0,r*.36,r*.3,0,0,7);c.fillStyle=p;c.fill();c.lineWidth=.4;c.strokeStyle=e;c.stroke();c.restore()}c.beginPath();c.arc(0,0,r*.34,0,7);c.fillStyle="#F6C21E";c.fill();c.strokeStyle="#B8860B";c.stroke();c.restore()}
function curl(c,x,y,r,turns,st,dir){const n=Math.floor(turns*40);c.beginPath();for(let i=0;i<=n;i++){const f=i/n,a=st*Math.PI/180+dir*f*turns*2*Math.PI,rr=r*(1-.78*f),px=x+rr*Math.cos(a),py=y+rr*Math.sin(a);i?c.lineTo(px,py):c.moveTo(px,py)}c.stroke()}
function corner(c){c.strokeStyle="#3A3434";c.lineWidth=1.6;c.lineCap="round";c.beginPath();c.moveTo(14,175);
c.bezierCurveTo(30,150,0,132,14,112);c.bezierCurveTo(28,92,0,72,14,52);c.bezierCurveTo(24,34,18,14,40,14);c.bezierCurveTo(62,14,70,30,92,18);c.bezierCurveTo(112,8,124,28,150,16);c.stroke();
c.lineWidth=1.2;[[27,150,10,1.6,200,1],[7,128,9,1.5,20,-1],[27,88,10,1.6,200,1],[7,66,9,1.5,20,-1],[62,34,9,1.5,160,-1],[112,27,9,1.5,200,1],[136,6,8,1.4,20,1]].forEach(a=>curl(c,...a));
[[14,170,70],[12,140,160],[22,120,20],[13,100,200],[22,80,10],[10,56,160],[28,40,60],[34,14,100],[74,18,-20],[96,20,60],[120,22,-30],[146,14,20]].forEach((a,i)=>leaf(c,a[0],a[1],a[2],i%2?15:17,i%2?"#6BB544":"#4E9A33"));
[[32,160,40],[6,150,140],[34,66,-30],[4,92,200],[50,12,-70],[86,30,80]].forEach(a=>leaf(c,a[0],a[1],a[2],13,"#58A63A"));
flower(c,22,100,11);flower(c,65,21,9);flower(c,122,24,7.5,"#EE86C6")}
function arcText(c,text,cx,cy,rx,ry,size,fill,track){
c.font=`${wt()} ${size}px ${fam()}`;const ch=[...text],ws=ch.map(x=>c.measureText(x).width+track),tot=ws.reduce((a,b)=>a+b,0)-track,t0=Math.PI/2;
const tAt=sv=>{const d=sv>=0?-1:1,a=Math.abs(sv);let t=t0,s=0;while(s<a&&Math.abs(t-t0)<6){const n=t+d*.002;s+=Math.hypot(rx*(Math.cos(n)-Math.cos(t)),ry*(Math.sin(n)-Math.sin(t)));t=n}return t};
let pos=-tot/2;ch.forEach((q,i)=>{const mid=pos+(ws[i]-track)/2;pos+=ws[i];if(q===" ")return;const t=tAt(mid);
c.save();c.translate(cx+rx*Math.cos(t),cy+ry*Math.sin(t));c.rotate(Math.atan2(-ry*Math.cos(t),rx*Math.sin(t)));c.scale(1,-1);
c.font=`${wt()} ${size}px ${fam()}`;c.textAlign="center";c.fillStyle=fill;c.strokeStyle=shade(S.titleColor,.25);c.lineWidth=.5;c.lineJoin="round";c.strokeText(q,0,0);c.fillText(q,0,0);c.restore()})}


function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
const poly=(c,p,col)=>{c.beginPath();p.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.closePath();c.fillStyle=col;c.fill()};
function divider(c,y,col){c.strokeStyle=col;c.lineWidth=1;c.beginPath();c.moveTo(W/2-150,y);c.lineTo(W/2-14,y);c.moveTo(W/2+14,y);c.lineTo(W/2+150,y);c.stroke();c.save();c.translate(W/2,y);c.rotate(Math.PI/4);c.fillStyle=col;c.fillRect(-4,-4,8,8);c.restore()}
const FLAT={cy:632,title:800,year:518,name:462,cls:404,type:330,subj:258,b1:160,b2:134};
/* ---- DESIGN TEMPLATES: naya template banana ho to yahan ek entry add karein ---- */
const TPL={
classic:{n:"Classic Floral",mode:"arc",bg:"#ffffff",small:"#000000",pill:false,P:{cy:632,title:0,year:500,name:432,cls:362,type:280,subj:213,b1:116,b2:88},
 s:{font:"Times New Roman",titleColor:"#6F83D8",yearColor:"#000000",textColor:"#000000",typeColor:"#000000",subjColor:"#000000",ry:148,tsize:26,logo:204},
 deco(c){if(S.border){c.strokeStyle="#555";c.lineWidth=.6;c.strokeRect(8,8,W-16,H-16)}
  if(S.florals)[[26,H-26,1,-1],[W-26,H-26,-1,-1],[26,26,1,1],[W-26,26,-1,1]].forEach(([x,y,sx,sy])=>{c.save();c.translate(x,y);c.scale(sx,sy);corner(c);c.restore()})}},
modern:{n:"Modern Blue",mode:"flat",bg:"#ffffff",small:"#0F2A5F",pill:true,P:{...FLAT,title:798,cy:630},
 s:{font:"Merriweather",titleColor:"#FFFFFF",yearColor:"#19A9C0",textColor:"#0F2A5F",typeColor:"#0F2A5F",subjColor:"#19A9C0",tsize:22,logo:156},
 deco(c){poly(c,[[0,H],[W,H],[W,790],[0,752]],"#0F2A5F");poly(c,[[0,752],[W,790],[W,780],[0,742]],"#19A9C0");
  poly(c,[[W,0],[0,0],[0,52],[W,90]],"#0F2A5F");poly(c,[[W,90],[0,52],[0,62],[W,100]],"#19A9C0");
  if(S.border){c.strokeStyle="#19A9C0";c.lineWidth=.8;c.strokeRect(24,112,W-48,H-236)}}},
royal:{n:"Royal Gold",mode:"flat",bg:"#FFF8E7",small:"#8A6414",pill:false,P:{cy:688,title:585,year:510,name:462,cls:410,type:335,subj:262,b1:140,b2:114},
 s:{font:"Playfair Display",titleColor:"#7A5A12",yearColor:"#8A6414",textColor:"#1F2A4D",typeColor:"#9C1C2B",subjColor:"#8A6414",tsize:24,logo:150},
 deco(c){if(S.border){c.strokeStyle="#B8892B";c.lineWidth=3;c.strokeRect(14,14,W-28,H-28);c.lineWidth=.8;c.strokeRect(22,22,W-44,H-44);
  [[22,22,0],[W-22,22,90],[W-22,H-22,180],[22,H-22,270]].forEach(([x,y,a])=>{c.save();c.translate(x,y);c.rotate(a*Math.PI/180);c.lineWidth=1.2;c.beginPath();c.arc(0,0,22,0,Math.PI/2);c.stroke();c.beginPath();c.arc(0,0,13,0,Math.PI/2);c.stroke();c.fillStyle="#B8892B";c.fillRect(-4,-4,8,8);c.restore()})}
  divider(c,552,"#B8892B")}},
dark:{n:"Dark Academic",mode:"arc",bg:"#10203F",small:"#C8D3F0",pill:false,P:{cy:632,title:0,year:500,name:432,cls:362,type:280,subj:213,b1:116,b2:88},
 s:{font:"Cinzel",titleColor:"#F4C25B",yearColor:"#F4C25B",textColor:"#FFFFFF",typeColor:"#F4C25B",subjColor:"#9DB4E8",ry:148,tsize:25,logo:204},
 deco(c){if(S.border){c.strokeStyle="#D9A93C";c.lineWidth=2.4;c.strokeRect(14,14,W-28,H-28);c.lineWidth=.7;c.strokeRect(22,22,W-44,H-44)}
  [[14,14,1,1],[W-14,14,-1,1],[14,H-14,1,-1],[W-14,H-14,-1,-1]].forEach(([x,y,sx,sy])=>poly(c,[[x,y],[x+sx*52,y],[x,y+sy*52]],"#D9A93C"))}},
green:{n:"Fresh Green",mode:"flat",bg:"#F3FBF5",small:"#1B5E3F",pill:true,P:{...FLAT,cy:626},
 s:{font:"Merriweather",titleColor:"#FFFFFF",yearColor:"#2E8B57",textColor:"#1B3B2B",typeColor:"#2E8B57",subjColor:"#C0762B",tsize:22,logo:152},
 deco(c){const wave=(col,d)=>{c.fillStyle=col;c.beginPath();c.moveTo(0,H);c.lineTo(0,770-d);c.bezierCurveTo(140,720-d,300,820-d,450,775-d);c.bezierCurveTo(520,755-d,560,760-d,W,780-d);c.lineTo(W,H);c.closePath();c.fill()};
  const both=()=>{wave("#8FD3AE",22);wave("#2E8B57",0)};both();c.save();c.translate(W,H);c.rotate(Math.PI);both();c.restore()}}
};

function draw(cv,k,subObj){
const t=TPL[S.tpl],P=t.P,c=cv.getContext("2d");cv.width=Math.round(W*k);cv.height=Math.round(H*k);c.setTransform(k,0,0,-k,0,cv.height);
c.fillStyle=t.bg;c.fillRect(0,0,W,H);t.deco(c);
if(t.mode==="arc")arcText(c,S.college,W/2,P.cy-4,195,+S.ry,+S.tsize,S.titleColor,.8);
else T(c,S.college,W/2,P.title,fit(c,S.college,+S.tsize+(S.tpl==="royal"?6:3),520),S.titleColor);
if(img.complete&&img.naturalWidth){const L=+S.logo;c.save();c.translate((W-L)/2,P.cy+L/2);c.scale(1,-1);c.drawImage(img,0,0,L,L);c.restore()}
const mw=500;
T(c,S.year,W/2,P.year,fit(c,S.year,27,mw),S.yearColor);
const n="NAME- "+S.name,cl="CLASS- "+S.cls;
T(c,n,W/2,P.name,fit(c,n,29,mw),S.textColor);T(c,cl,W/2,P.cls,fit(c,cl,29,mw),S.textColor);
const ts=fit(c,S.type,t.pill?36:44,t.pill?mw-70:mw);
if(t.pill){c.font=`${wt()} ${ts}px ${fam()}`;const w=c.measureText(S.type).width+64;c.fillStyle=S.typeColor;rr(c,(W-w)/2,P.type-ts*.42,w,ts*1.45,ts*.3);c.fill();T(c,S.type,W/2,P.type,ts,"#ffffff")}
else T(c,S.type,W/2,P.type,ts,S.typeColor);
const curSub=subObj||(S.subjects&&S.subjects[S.activeSubIdx])||{subject:S.subject,to:S.to};
const curSubj=curSub.subject||S.subject;
const curTo=curSub.to||(S.subjects&&S.subjects[0]&&S.subjects[0].to)||S.to;
const a="SUBJECT:-",sz=fit(c,a+"  "+curSubj,25,mw);c.font=`${wt()} ${sz}px ${fam()}`;
const wa=c.measureText(a).width,wb=c.measureText(curSubj).width,x0=(W-(wa+14+wb))/2;
T(c,a,x0,P.subj,sz,S.subjColor,"left");T(c,curSubj,x0+wa+14,P.subj,sz,S.textColor,"left");
const lx=75,rx=W-75;
const byName=S.by||S.name;
T(c,"Submitted By",lx,P.b1,18,t.small,"left");
if(byName)T(c,byName,lx,P.b2,fit(c,byName,17,210),S.textColor,"left",fam(),"700");
T(c,"Submitted To",rx,P.b1,18,t.small,"right");
if(curTo)T(c,curTo,rx,P.b2,fit(c,curTo,17,210),S.textColor,"right",fam(),"700");}

const thumbCv={},ui={};let fl;
function thumbs(){Object.keys(TPL).forEach(k=>{const bak={...S};S.tpl=k;Object.assign(S,TPL[k].s);draw(thumbCv[k],.2);Object.assign(S,bak)})}
const redraw=()=>{draw($("cv"),2);clearTimeout(redraw.t);redraw.t=setTimeout(thumbs,200)};
const loadFont=()=>document.fonts.load(`${wt()} 20px "${S.font}"`).then(redraw,redraw);
function applyTpl(k){S.tpl=k;Object.assign(S,TPL[k].s);for(const x in ui)ui[x].value=S[x];$("font").value=S.font;
ui.ry.parentNode.style.display=TPL[k].mode==="arc"?"":"none";fl.style.display=k==="classic"?"":"none";
document.querySelectorAll(".tp").forEach(b=>b.classList.toggle("on",b.dataset.k===k));loadFont()}

const tp=document.createElement("details");tp.open=true;tp.innerHTML='<summary>Design template</summary><div class="g"><div class="tpl" id="tpl"></div></div>';const st=$("sec-text");if(st)st.after(tp);else $("ctl").prepend(tp);
Object.keys(TPL).forEach(k=>{const b=document.createElement("button");b.className="tp";b.dataset.k=k;b.innerHTML=`<canvas></canvas><span>${TPL[k].n}</span>`;thumbCv[k]=b.querySelector("canvas");b.onclick=()=>applyTpl(k);$("tpl").append(b)});
const COURSES=["B.A.","M.A.","B.COM.","B.SC."];
const SEMESTERS=["FIRST SEMESTER","SECOND SEMESTER","THIRD SEMESTER","FOURTH SEMESTER","FIFTH SEMESTER","SIXTH SEMESTER","1ST YEAR","2ND YEAR","3RD YEAR"];
const DOC_TYPES=["SEMINAR","ASSIGNMENT","PROJECT REPORT","PRACTICAL FILE","DISSERTATION","INTERNSHIP REPORT","SYNOPSIS"];
[["name","Student ka naam"],["cls","Class"],["type","Document type"],["by","Submitted By – naam (khali chhod sakte hain)"]].forEach(([k,l])=>{
if(k==="cls"){
const wrap=document.createElement("div");wrap.className="cols";
wrap.innerHTML=`<label>Course / Degree<select id="i-cls-course">${COURSES.map(c=>`<option value="${c}">${c}</option>`).join("")}</select></label><label>Semester / Year<select id="i-cls-sem">${SEMESTERS.map(s=>`<option value="${s}">${s}</option>`).join("")}<option value="__other__">Other (Apna likhein…)</option></select></label>`;
$("f-text").append(wrap);
const selC=wrap.querySelector("#i-cls-course"),selS=wrap.querySelector("#i-cls-sem");
const ce=document.createElement("label");ce.style.display="none";
ce.innerHTML=`Apna semester / saal likhein<input type="text" id="i-s-custom" placeholder="e.g. ANNUAL EXAM">`;
$("f-text").append(ce);
const iS=ce.querySelector("input");
let initC=COURSES.find(c=>S.cls.toUpperCase().startsWith(c.toUpperCase()))||"M.A.";
let initS=SEMESTERS.find(s=>S.cls.toUpperCase().includes(s.toUpperCase()))||"FIRST SEMESTER";
selC.value=initC;selS.value=initS;
const upCls=()=>{
const cV=selC.value;
const sV=selS.value==="__other__"?iS.value.trim():selS.value;
S.cls=[cV,sV].filter(Boolean).join(" ");redraw()};
selC.onchange=upCls;
selS.onchange=()=>{const o=selS.value==="__other__";ce.style.display=o?"":"none";if(o)iS.focus();upCls()};
iS.oninput=upCls;
return}
if(k==="type"){
const e=document.createElement("label");
e.innerHTML=`${l}<select id="i-type">${DOC_TYPES.map(o=>`<option value="${o}">${o}</option>`).join("")}<option value="__other__">Other (Apna likhein…)</option></select>`;
$("f-text").append(e);
const sel=e.querySelector("select");
const ce=document.createElement("label");ce.style.display="none";
ce.innerHTML=`Apna document type likhein<input type="text" id="i-type-custom" placeholder="e.g. FIELD WORK REPORT">`;
$("f-text").append(ce);
const ci=ce.querySelector("input");
if(DOC_TYPES.includes(S.type)){sel.value=S.type}else{sel.value="__other__";ci.value=S.type;ce.style.display=""}
sel.onchange=()=>{if(sel.value==="__other__"){ce.style.display="";ci.focus();S.type=ci.value||"OTHER"}else{ce.style.display="none";S.type=sel.value}redraw()};
ci.oninput=()=>{S.type=ci.value;redraw()};
return}
const e=document.createElement("label");e.innerHTML=`${l}<input type="text" id="i-${k}">`;$("f-text").append(e);const i=e.querySelector("input");i.value=S[k];i.oninput=()=>{S[k]=i.value;redraw()}});

const subsWrap=document.createElement("div");
subsWrap.className="g";
subsWrap.innerHTML=`<div class="subs-header"><span class="subs-title">Subjects aur Teachers</span><button type="button" class="btn-add-sub" id="add-sub-btn">＋ Subject jodein</button></div><div class="subs-list" id="subs-list"></div>`;
$("f-text").append(subsWrap);

function renderSubs(){
const list=$("subs-list");if(!list)return;list.innerHTML="";
S.subjects.forEach((item,idx)=>{
const card=document.createElement("div");
card.className="sub-card"+(idx===S.activeSubIdx?" active":"");
card.innerHTML=`<div class="sub-head"><span>Subject #${idx+1}</span>${S.subjects.length>1?`<button type="button" class="btn-del-sub" title="Yeh subject hatayein">✕</button>`:""}</div><label>Subject<input type="text" class="inp-sub-name" placeholder="Subject (e.g. MICRO ECONOMICS)" value="${item.subject}"></label><label>Submitted to (Teacher)<input type="text" class="inp-sub-to" placeholder="Teacher (e.g. Dr. Meena Gupta)" value="${item.to}"></label>`;
const nI=card.querySelector(".inp-sub-name"),tI=card.querySelector(".inp-sub-to");
nI.oninput=()=>{item.subject=nI.value;S.subject=S.subjects[0].subject;S.activeSubIdx=idx;updateSubUI();redraw()};
nI.onfocus=()=>{if(S.activeSubIdx!==idx){S.activeSubIdx=idx;updateSubUI();redraw()}};
tI.oninput=()=>{item.to=tI.value;S.to=S.subjects[0].to;S.activeSubIdx=idx;updateSubUI();redraw()};
tI.onfocus=()=>{if(S.activeSubIdx!==idx){S.activeSubIdx=idx;updateSubUI();redraw()}};
const dB=card.querySelector(".btn-del-sub");
if(dB){dB.onclick=e=>{e.stopPropagation();S.subjects.splice(idx,1);if(S.activeSubIdx>=S.subjects.length)S.activeSubIdx=S.subjects.length-1;renderSubs();redraw()}};
list.append(card)});
updateSubUI()}

function updateSubUI(){
const n=S.subjects.length,cur=S.subjects[S.activeSubIdx]||S.subjects[0];
document.querySelectorAll(".sub-card").forEach((c,i)=>c.classList.toggle("active",i===S.activeSubIdx));
const pvNav=$("pv-nav");
if(pvNav){
if(n>1){pvNav.style.display="flex";const info=$("pv-sub-info");const sN=cur.subject?cur.subject:"(Bina naam)";if(info)info.textContent=`Subject ${S.activeSubIdx+1} / ${n} : ${sN}`}
else{pvNav.style.display="none"}}
const dlBtn=$("dl");
if(dlBtn){dlBtn.textContent=n>1?`A4 PDF Download (${n} Pages - Sabhi Subjects)`:`A4 PDF Download`}}

$("add-sub-btn").onclick=()=>{
const defT=S.subjects[0]?S.subjects[0].to:"";
S.subjects.push({subject:"",to:defT});
S.activeSubIdx=S.subjects.length-1;
renderSubs();
const inps=document.querySelectorAll(".inp-sub-name");
if(inps[inps.length-1])inps[inps.length-1].focus();
redraw()};

const pvPrev=$("pv-prev"),pvNext=$("pv-next");
if(pvPrev){pvPrev.onclick=()=>{if(S.subjects.length<=1)return;S.activeSubIdx=(S.activeSubIdx-1+S.subjects.length)%S.subjects.length;updateSubUI();redraw()}}
if(pvNext){pvNext.onclick=()=>{if(S.subjects.length<=1)return;S.activeSubIdx=(S.activeSubIdx+1)%S.subjects.length;updateSubUI();redraw()}}

renderSubs();

["Times New Roman","Rye","Cinzel","Playfair Display","Merriweather","Georgia"].forEach(f=>$("font").add(new Option(f,f)));$("font").onchange=e=>{S.font=e.target.value;loadFont()};
[["titleColor","College naam"],["yearColor","Saal"],["textColor","Naam / class"],["typeColor","Document type"],["subjColor","Subject label"]].forEach(([k,l])=>{
const e=document.createElement("label");e.innerHTML=`${l}<input type="color" value="${S[k]}">`;$("f-col").append(e);const i=ui[k]=e.querySelector("input");i.oninput=ev=>{S[k]=ev.target.value;redraw()}});
[["ry","Naam ka curve (kam = chapta, zyada = gol)",80,205,1],["tsize","Naam ka size",18,32,.5],["logo","Logo size",120,230,2]].forEach(([k,l,mn,mx,st])=>{
const e=document.createElement("label");e.innerHTML=`${l}<input type="range" min="${mn}" max="${mx}" step="${st}" value="${S[k]}">`;$("f-lay").append(e);const i=ui[k]=e.querySelector("input");i.oninput=ev=>{S[k]=ev.target.value;redraw()}});
[["border","Border / frame dikhayein"],["florals","Phool-bel dikhayein"]].forEach(([k,l])=>{
const e=document.createElement("label");e.className="ck";e.innerHTML=`<input type="checkbox" checked> ${l}`;$("f-lay").append(e);if(k==="florals")fl=e;e.querySelector("input").onchange=ev=>{S[k]=ev.target.checked;redraw()}});

const msg=t=>{$("msg").textContent=t;clearTimeout(msg.t);msg.t=setTimeout(()=>$("msg").textContent="",5000)};
$("dl").onclick=async()=>{try{
const subs=S.subjects&&S.subjects.length?S.subjects:[{subject:S.subject,to:S.to}];
msg("PDF ban raha hai…");await document.fonts.load(`${wt()} 20px "${S.font}"`);
const pdf=new window.jspdf.jsPDF({unit:"pt",format:"a4",orientation:"portrait"});
for(let i=0;i<subs.length;i++){
msg(`Page ${i+1} / ${subs.length} ban raha hai…`);
const cv=document.createElement("canvas");draw(cv,4.1667,subs[i]);
if(i>0)pdf.addPage("a4","portrait");
pdf.addImage(cv.toDataURL("image/jpeg",.95),"JPEG",0,0,595.28,841.89)}
const buf=pdf.output("arraybuffer");
const nm=(S.name||"Cover").replace(/[^\w\- ]+/g,"").trim().replace(/\s+/g,"_")||"Cover";
const extra=subs.length>1?`_${subs.length}_Subjects`:"";
const fname=`Cover_${nm}${extra}_A4.pdf`;
const d=window.claude?await claude.use("downloads"):null;
if(d){await d.save({filename:fname,data:buf})}
else{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([buf],{type:"application/pdf"}));a.download=fname;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
msg(`PDF save ho gaya (${subs.length} Page${subs.length>1?"s":""}) ✓`)}
catch(e){msg(e&&e.code==="declined"?"Download cancel kiya gaya.":"Download nahi ho paya: "+((e&&e.message)||e))}};
applyTpl("classic");Promise.all(["Rye","Cinzel","Playfair Display","Merriweather"].map(f=>document.fonts.load(`700 20px "${f}"`))).then(thumbs,thumbs);
