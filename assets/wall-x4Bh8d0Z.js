import{l as V,j as e,h as G,s as K,r,v as Z,x as J,F as Q,R,E as O,z as q,T as A,a as D,b as U,d as X,H as ee,q as ae,G as te}from"./pathwayContent-Deuc98yG.js";const C="Level Up",H="#RP",le="Who will you be? Play Spin & Throw and watch your career card land here.",se=`Who will you be? ${R.length} careers to discover. Play Spin & Throw to get yours.`,ne=new URLSearchParams(window.location.search).get("theme")==="light",Y=12e3,F=15e4,oe=3e4,B=new URLSearchParams(window.location.search).get("scene")==="path",ie=110,re=160,ce=t=>({roleId:t.roleId,edition:t.edition,serial:t.serial,accuracy:t.accuracy,correct:t.correct,questions:t.questions}),pe=({card:t,width:s,showcase:u})=>{const w=U(t.roleId),h=A[w.track],c=X[t.edition],[y,v]=r.useState(0),m=te(w.art),n=t.edition==="legendary";return e.jsxs("div",{className:"wall-mini",style:{width:s},children:[e.jsx("div",{className:`wall-mini__card ${n?"wall-mini__card--legend":""}`,style:{background:`linear-gradient(150deg, ${c.colour}, ${c.colour2})`,"--ed":c.colour},children:e.jsxs("div",{className:"wall-mini__pic",style:{background:`radial-gradient(circle at 50% 35%, ${h.colour}aa, #020617 75%)`},children:[y<m.length?e.jsx("img",{src:m[y],alt:"",onError:()=>v(y+1),draggable:!1}):e.jsx("div",{className:"wall-mini__ph",children:e.jsx("span",{children:w.name})}),e.jsx("div",{className:"wall-mini__sheen"})]})}),e.jsxs("div",{className:"wall-mini__plate",style:{borderTopColor:h.colour},children:[e.jsx("b",{children:u?w.name:t.nickname}),e.jsx("span",{style:{color:h.colour},children:u?h.name:w.name})]})]})},de=({cards:t,showcase:s,shift:u})=>{const w=r.useRef(null),[h,c]=r.useState({w:1e3,h:700});r.useLayoutEffect(()=>{const i=w.current;if(!i)return;const _=new ResizeObserver(()=>c({w:i.clientWidth,h:i.clientHeight}));return _.observe(i),c({w:i.clientWidth,h:i.clientHeight}),()=>_.disconnect()},[]);const y=t.slice(0,re),v=y.length,m=40,n=Math.max(200,h.w*.6),l=i=>{const _=Math.max(70,Math.min((h.h*.8/i-m-18)/1.5,200)),a=Math.max(8,Math.floor(2*Math.PI*n/(_*1.16)));return{rows:i,cardW:_,most:a}};let x=l(1);for(const i of[1,2,3,4])if(x=l(i),x.rows*x.most>=v)break;const{rows:o,cardW:g,most:f}=x,p=Math.max(Math.min(f,16),Math.min(f,Math.ceil(v/o))),k=g*1.5+m+18,W=i=>v?y[i%v]:void 0,M=r.useRef([]),S=r.useRef([]);return r.useEffect(()=>{let i=0;const _=performance.now(),a=d=>{const b=(d-_)/1e3*360/ie;for(let j=0;j<o;j++){const $=-(b+(j%2?180/p:0))*(j%2?-1:1),I=M.current[j];I&&(I.style.transform=`translateZ(${-n}px) rotateY(${$}deg)`);for(let z=0;z<p;z++){const T=S.current[j*p+z];if(!T)continue;const E=(z*360/p+$)*Math.PI/180,N=Math.cos(E);T.style.opacity=String(Math.min(.85,Math.max(0,.85-N*.95)))}}i=requestAnimationFrame(a)};return i=requestAnimationFrame(a),()=>cancelAnimationFrame(i)},[o,p,n]),e.jsxs("div",{ref:w,className:"wall-stage",children:[e.jsx("div",{className:"wall-floor"}),e.jsx("div",{className:"wall-rings",style:{height:o*k,transform:u?"translateX(17%) scale(.86)":"none"},children:Array.from({length:o},(i,_)=>e.jsx("div",{className:"wall-ringslot",style:{height:k},children:e.jsx("div",{className:"wall-ring",ref:a=>{M.current[_]=a},children:Array.from({length:p},(a,d)=>{const b=W(_*p+d);return e.jsxs("div",{className:"wall-slot",style:{width:g,marginLeft:-g/2,transform:`rotateY(${d*360/p}deg) translateZ(${n}px)`},children:[b?e.jsx(pe,{card:b,width:g,showcase:s},b.word):e.jsx("div",{className:"wall-empty",style:{width:g,height:g*1.5}}),e.jsx("div",{className:"wall-shade",ref:j=>{S.current[_*p+d]=j}})]},d)})})},_))}),e.jsx("div",{className:"wall-fog"})]})},he=({card:t,isNew:s,height:u})=>{const w=Math.round(u/q);if(!t)return e.jsxs("div",{className:"wall-spot",children:[e.jsx("div",{className:"wall-spot__beam"}),e.jsx("div",{className:"wall-ghost",style:{width:w,height:u},children:e.jsx("span",{children:"Your card here"})}),e.jsxs("div",{className:"wall-spot__name",children:[e.jsx("p",{className:"wall-spot__nick",children:"Be the first!"}),e.jsx("p",{className:"wall-spot__role",children:"Play, scan your card, add a nickname"})]})]});const h=U(t.roleId),c=A[h.track],y=X[t.edition];return e.jsxs("div",{className:"wall-spot",style:{"--track":c.colour,"--ed":y.colour},children:[e.jsx("div",{className:"wall-spot__beam"}),e.jsxs("div",{className:"wall-spot__card",children:[s&&e.jsx("div",{className:"wall-burst"}),e.jsx(ee,{card:ce(t),width:w,idle:!0,tapToFlip:!1})]},t.word),e.jsxs("div",{className:"wall-spot__name",children:[s&&e.jsx("p",{className:"wall-spot__new",children:"Just joined!"}),e.jsx("p",{className:"wall-spot__nick",children:t.nickname}),e.jsxs("p",{className:"wall-spot__role",children:["future ",e.jsx("b",{style:{color:c.colour},children:h.name})]}),e.jsx("p",{className:"wall-spot__dip",children:c.diploma}),e.jsx("p",{className:"wall-spot__code",children:ae(t.word)})]},`n-${t.word}`)]})},we=({cards:t,active:s})=>{const u=Object.values(A),w=r.useMemo(()=>{const n=new Map;for(const l of t){const x=n.get(l.roleId);x?x.n++:n.set(l.roleId,{n:1,latest:l.nickname??""})}return n},[t]),h=50,c=50,y=(n,l,x)=>{const o=n*Math.PI/180;return{x:h+l*Math.cos(o),y:c+x*Math.sin(o)}},v=n=>-90+n*(360/u.length),m=u.map((n,l)=>{const x=y(v(l),21,25),o=R.filter(f=>f.track===n.id),g=12.5;return{t:n,d:x,careers:o.map((f,p)=>({r:f,p:y(v(l)+(p-(o.length-1)/2)*g,41,40)}))}});return e.jsxs("div",{className:`wall-path ${s?"is-on":""}`,children:[e.jsx("svg",{className:"wall-path__beams",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:m.map(({t:n,d:l,careers:x},o)=>e.jsxs("g",{children:[e.jsx("line",{x1:h,y1:c,x2:l.x,y2:l.y,stroke:n.colour,className:"wall-path__beam wall-path__beam--main",style:{animationDelay:`${o*.25}s`}}),e.jsx("line",{x1:h,y1:c,x2:l.x,y2:l.y,stroke:"#fff",pathLength:100,className:"wall-path__spark",style:{animationDelay:`${o*.6}s`}}),x.map(({r:g,p:f},p)=>e.jsxs("g",{children:[e.jsx("line",{x1:l.x,y1:l.y,x2:f.x,y2:f.y,stroke:n.colour,className:"wall-path__beam",style:{animationDelay:`${.8+o*.25+p*.08}s`}}),e.jsx("line",{x1:l.x,y1:l.y,x2:f.x,y2:f.y,stroke:"#fff",pathLength:100,className:"wall-path__spark wall-path__spark--small",style:{animationDelay:`${1.6+o*.6+p*.35}s`}})]},g.id))]},n.id))}),e.jsxs("div",{className:"wall-path__cip",style:{left:`${h}%`,top:`${c}%`},children:[e.jsx("span",{className:"wall-path__start",children:"Start here"}),e.jsx("b",{children:D.short}),e.jsx("span",{children:D.name})]}),m.map(({t:n,d:l,careers:x},o)=>e.jsxs(G.Fragment,{children:[e.jsxs("div",{className:"wall-path__dip",style:{left:`${l.x}%`,top:`${l.y}%`,"--c":n.colour,animationDelay:`${.4+o*.25}s`},children:[e.jsx("span",{children:"Diploma in"}),e.jsx("b",{children:n.name})]}),x.map(({r:g,p:f},p)=>{const k=w.get(g.id);return e.jsxs("div",{className:`wall-path__job ${k?"has-players":""}`,style:{left:`${f.x}%`,top:`${f.y}%`,"--c":n.colour,animationDelay:`${1+o*.25+p*.08}s`},children:[e.jsx("b",{children:g.name}),k&&e.jsxs("span",{children:[k.latest,k.n>1?` +${k.n-1}`:""]})]},g.id)})]},n.id)),e.jsxs("div",{className:"wall-path__caption",children:[e.jsxs("b",{children:["One start. Five paths. ",R.length," careers."]}),e.jsxs("span",{children:["Every School of Infocomm journey begins with the ",D.name,"."]})]})]})};function xe(){const[t,s]=r.useState({w:window.innerWidth,h:window.innerHeight});return r.useEffect(()=>{const u=()=>s({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),t}const ge=()=>{const t=K(),[s,u]=r.useState(null),[w,h]=r.useState(""),[c,y]=r.useState(null),v=r.useRef(null),[m,n]=r.useState(null),[l,x]=r.useState([]),o=xe();r.useEffect(()=>{if(t==="none")return;let a,d=!0;return Z().then(b=>{if(!d)return;if(!b){h("Could not load the database.");return}let j=0;a=b.watchWall(T=>{h(""),window.clearTimeout(j),j=window.setTimeout(()=>$(),1500);const E=T.filter(N=>!N.hidden&&N.showOnWall&&N.nickname);if(v.current){const N=E.filter(L=>!v.current.has(L.word)).reverse();N.length&&x(L=>[...L,...N.map(P=>P.word).filter(P=>!L.includes(P))])}v.current=new Set(E.map(N=>N.word)),u(E)},T=>h(J(T)));function $(){return b.countDay(Q()).then(y).catch(()=>{})}$();const I=window.setInterval($,6e4),z=a;a=()=>{z==null||z(),window.clearInterval(I)}}),()=>{d=!1,a==null||a()}},[t]),r.useEffect(()=>{if(m||!l.length)return;const[a,...d]=l;x(d),n({word:a,isNew:!0,until:Date.now()+(d.length?Y*.7:Y)})},[m,l]),r.useEffect(()=>{if(!m)return;const a=window.setTimeout(()=>n(null),Math.max(0,m.until-Date.now()));return()=>window.clearTimeout(a)},[m]);const g=r.useRef(null),f=m?(s==null?void 0:s.find(a=>a.word===m.word))??null:null;f&&(g.current=f);const p=!!f,k=r.useMemo(()=>R.map((a,d)=>({word:`career-${a.id}`,data:"",roleId:a.id,edition:O[d%O.length],accuracy:0,correct:0,questions:0,serial:0,day:"",createdAt:null,hidden:!1,nickname:a.name,showOnWall:!0})),[]),[W,M]=r.useState(B);r.useEffect(()=>{if(B)return;let a;const d=b=>{M(b),a=window.setTimeout(()=>d(!b),b?oe:F)};return a=window.setTimeout(()=>d(!0),F),()=>window.clearTimeout(a)},[]);const S=W&&!p,i=o.w<820,_=i?Math.min(o.h*.5,420):Math.min(o.h*.6,o.w*.3*q);return t==="none"?e.jsxs("div",{className:"h-full flex flex-col items-center justify-center gap-3 text-center px-6",children:[e.jsxs("h1",{className:"text-3xl font-black italic uppercase",children:[C," ",H]}),e.jsx("p",{className:"text-slate-400 max-w-lg",children:'The wall needs the free card database. Fill in content/firebase.json and build the card website again (README, "Card database and wall").'})]}):e.jsxs("div",{className:`wall-root ${ne?"wall-root--light":""}`,children:[e.jsx("div",{className:"wall-sky"}),e.jsxs("header",{className:"wall-head",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"wall-brand",children:"./level_upIT · School of Infocomm"}),e.jsxs("h1",{className:"wall-title",children:[C," ",e.jsx("span",{className:"wall-tag",children:H})]}),e.jsx("p",{className:"wall-sub",children:s!=null&&s.length?le:se})]}),e.jsx("div",{className:"wall-stats",children:[["Players today",c==null?void 0:c.players],["On the wall",(s==null?void 0:s.length)??0],["Legendary today",c==null?void 0:c.legendaries]].map(([a,d])=>e.jsxs("div",{className:"wall-stat",children:[e.jsx("b",{"data-stat":a,children:d??"–"}),e.jsx("span",{children:a})]},a))})]}),e.jsxs("main",{className:`wall-main ${i?"wall-main--narrow":""}`,children:[s===null?e.jsxs("div",{className:"wall-stage wall-stage--empty",children:[e.jsx("div",{className:"wall-floor"}),e.jsx("p",{children:w?`Can't reach the wall: ${w}`:"Loading…"})]}):e.jsxs("div",{className:"wall-scenes",children:[e.jsx("div",{className:`wall-scene ${S&&!i?"":"is-on"}`,children:e.jsx(de,{cards:s.length?s:k,showcase:!s.length,shift:p&&!i})}),!i&&e.jsx("div",{className:`wall-scene ${S?"is-on":""}`,children:e.jsx(we,{cards:s,active:S},S?"on":"off")})]}),e.jsxs("div",{className:`wall-spotpanel ${p?"is-in":""}`,"aria-hidden":!p,children:[g.current&&e.jsx(he,{card:g.current,isNew:!0,height:_}),p&&l.length>0&&e.jsxs("p",{className:"wall-next",children:["Next up: ",l.slice(0,3).map(a=>{var d;return(d=s==null?void 0:s.find(b=>b.word===a))==null?void 0:d.nickname}).filter(Boolean).join(", "),l.length>3?` +${l.length-3}`:""]})]})]}),e.jsx("footer",{className:"wall-legend",children:Object.values(A).map(a=>e.jsxs("span",{children:[e.jsx("i",{style:{background:a.colour,boxShadow:`0 0 10px ${a.colour}`}}),a.name]},a.id))}),w&&s!==null&&e.jsxs("p",{className:"wall-error",children:["Reconnecting… (",w,")"]})]})},fe=`
.wall-root { position: relative; height: 100%; display: flex; flex-direction: column; overflow: hidden; color: #fff; }
.wall-sky { position: absolute; inset: 0; pointer-events: none; background: #020617; }
.wall-sky::after { content: ''; position: absolute; inset: 0; opacity: .04; background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px; }
.wall-head { position: relative; z-index: 2; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 32px; padding: 22px 32px 0; }
.wall-brand { font-size: 12px; font-weight: 700; letter-spacing: .3em; text-transform: uppercase; color: #94a3b8; }
.wall-title { font-size: clamp(40px, 5.2vw, 76px); font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -0.05em; line-height: .95; padding: 0 .15em .06em 0;
  background: linear-gradient(90deg, #dc2626, #f97316, #f59e0b); -webkit-background-clip: text; background-clip: text; color: transparent; }
.wall-sub { font-size: 15px; font-weight: 600; color: #94a3b8; }
.wall-stats { display: flex; gap: 10px; }
.wall-stat { min-width: 108px; padding: 8px 14px; border-radius: 16px; text-align: center; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(6px); }
.wall-stat b { display: block; font-size: 30px; font-weight: 900; font-variant-numeric: tabular-nums; }
.wall-stat span { font-size: 10px; font-weight: 900; letter-spacing: .2em; text-transform: uppercase; color: #94a3b8; }

.wall-main { position: relative; z-index: 1; flex: 1 1 auto; min-height: 0; display: flex; }
.wall-main > .wall-stage { flex: 1 1 auto; }
.wall-scenes { position: relative; flex: 1 1 auto; min-width: 0; }
.wall-scene { position: absolute; inset: 0; display: flex; opacity: 0; visibility: hidden; transition: opacity 1.2s ease, visibility 0s 1.2s; }
.wall-scene.is-on { opacity: 1; visibility: visible; transition: opacity 1.2s ease; }
.wall-scene > .wall-stage { flex: 1 1 auto; }

/* Pathway of Light */
.wall-path { position: absolute; inset: 0 2% 4%; }
.wall-path__beams { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.wall-path__beam { stroke-width: 2; vector-effect: non-scaling-stroke; stroke-opacity: .55; stroke-dasharray: 2000; stroke-dashoffset: 2000; filter: drop-shadow(0 0 4px currentColor); }
.wall-path__beam--main { stroke-width: 4; stroke-opacity: .8; }
.is-on .wall-path__beam { animation: beam-draw 1.4s ease-out forwards; }
@keyframes beam-draw { to { stroke-dashoffset: 0; } }
.wall-path__spark { stroke-width: 4; vector-effect: non-scaling-stroke; stroke-linecap: round; stroke-dasharray: 6 94; stroke-dashoffset: 6; opacity: 0; }
.wall-path__spark--small { stroke-width: 3; }
.is-on .wall-path__spark { animation: spark-run 2.6s ease-in-out infinite; }
@keyframes spark-run { 0% { stroke-dashoffset: 6; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { stroke-dashoffset: -94; opacity: 0; } }
.wall-path__cip, .wall-path__dip, .wall-path__job { position: absolute; transform: translate(-50%, -50%); text-align: center; }
.wall-path__cip { width: 190px; height: 190px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  background: radial-gradient(circle, #f97316 0%, #c2410c 55%, #7c2d12 100%); box-shadow: 0 0 40px 10px rgba(249,115,22,.55), 0 0 120px 30px rgba(249,115,22,.25);
  animation: cip-pulse 3s ease-in-out infinite; }
@keyframes cip-pulse { 50% { box-shadow: 0 0 60px 16px rgba(249,115,22,.7), 0 0 160px 50px rgba(249,115,22,.3); } }
.wall-path__cip b { font-size: 54px; font-weight: 900; font-style: italic; letter-spacing: -0.04em; line-height: 1; color: #fff; }
.wall-path__cip span { font-size: 12px; font-weight: 800; line-height: 1.2; color: #ffedd5; max-width: 140px; }
.wall-path__start { font-size: 10px !important; letter-spacing: .25em; text-transform: uppercase; color: #fff7ed !important; opacity: .85; }
.wall-path__dip { min-width: 150px; max-width: 210px; padding: 10px 14px; border-radius: 16px; background: rgba(2,6,23,.85);
  border: 2px solid var(--c); box-shadow: 0 0 24px color-mix(in srgb, var(--c) 55%, transparent); opacity: 0; }
.is-on .wall-path__dip, .is-on .wall-path__job { animation: node-in .6s ease-out forwards; }
@keyframes node-in { from { opacity: 0; transform: translate(-50%, -50%) scale(.6); } to { opacity: 1; transform: translate(-50%, -50%); } }
.wall-path__dip span { display: block; font-size: 10px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; color: #94a3b8; }
.wall-path__dip b { display: block; font-size: 16px; font-weight: 900; line-height: 1.15; color: #fff; }
.wall-path__job { max-width: 150px; padding: 5px 10px; border-radius: 99px; background: rgba(2,6,23,.8); border: 1px solid color-mix(in srgb, var(--c) 55%, transparent); opacity: 0; }
.wall-path__job b { display: block; font-size: 12px; font-weight: 800; line-height: 1.15; color: #e2e8f0; }
.wall-path__job span { display: block; margin-top: 2px; font-size: 11px; font-weight: 900; color: var(--c); filter: brightness(1.3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wall-path__job.has-players { background: color-mix(in srgb, var(--c) 22%, #020617); border-color: var(--c); box-shadow: 0 0 16px color-mix(in srgb, var(--c) 60%, transparent); }
.wall-path__job.has-players b { color: #fff; }
.wall-path__caption { position: absolute; left: 0; right: 0; bottom: -2%; display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center; }
.wall-path__caption b { font-size: 26px; font-weight: 900; font-style: italic; text-transform: uppercase; letter-spacing: -0.03em; padding-right: .15em;
  background: linear-gradient(90deg, #dc2626, #f97316, #f59e0b); -webkit-background-clip: text; background-clip: text; color: transparent; }
.wall-path__caption span { font-size: 14px; font-weight: 600; color: #94a3b8; }
.wall-root--light .wall-path__dip, .wall-root--light .wall-path__job { background: rgba(255,255,255,.92); }
.wall-root--light .wall-path__dip b, .wall-root--light .wall-path__job b { color: #0f172a; }
.wall-root--light .wall-path__job.has-players { background: color-mix(in srgb, var(--c) 18%, #fff); }
.wall-spotpanel { position: absolute; left: 0; top: 0; bottom: 0; width: 36%; z-index: 3; pointer-events: none;
  transform: translateX(-105%); opacity: 0; transition: transform .9s cubic-bezier(.2,.8,.2,1), opacity .6s ease;
  background: linear-gradient(90deg, var(--wall-bg, #020617) 0%, var(--wall-bg, #020617) 70%, transparent 100%); }
.wall-spotpanel.is-in { transform: none; opacity: 1; }
.wall-next { position: absolute; left: 0; right: 0; bottom: 2%; text-align: center; font-size: 14px; font-weight: 800; letter-spacing: .08em; color: #94a3b8; }
.wall-rings { transition: transform 1s cubic-bezier(.2,.8,.2,1); }

/* Spotlight */
.wall-spot { position: relative; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 8px 12px; perspective: 1200px; }
.wall-spot__beam { position: absolute; left: 50%; top: -12%; width: 140%; height: 125%; transform: translateX(-50%); pointer-events: none;
  background: conic-gradient(from 180deg at 50% 0%, transparent 160deg, color-mix(in srgb, var(--track, #f97316) 26%, transparent) 172deg, rgba(255,255,255,.10) 180deg, color-mix(in srgb, var(--track, #f97316) 26%, transparent) 188deg, transparent 200deg);
  filter: blur(6px); }
.wall-spot__card { position: relative; animation: spot-in 1.1s cubic-bezier(.16,.9,.25,1.05) both; filter: drop-shadow(0 30px 40px rgba(0,0,0,.7)) drop-shadow(0 0 30px color-mix(in srgb, var(--ed) 45%, transparent)); }
@keyframes spot-in { from { opacity: 0; transform: translate3d(0, 40px, -500px) rotateY(-70deg) scale(.7); } to { opacity: 1; transform: none; } }
.wall-burst { position: absolute; inset: -30%; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, color-mix(in srgb, var(--ed) 70%, white) 0%, color-mix(in srgb, var(--ed) 35%, transparent) 30%, transparent 62%);
  animation: burst 1.6s ease-out both; }
@keyframes burst { 0% { opacity: 0; transform: scale(.3); } 25% { opacity: 1; } 100% { opacity: 0; transform: scale(1.4); } }
.wall-spot__name { position: relative; text-align: center; animation: name-in .8s .35s ease-out both; }
@keyframes name-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.wall-spot__new { display: inline-block; margin-bottom: 6px; padding: 3px 12px; border-radius: 99px; font-size: 12px; font-weight: 900; letter-spacing: .2em; text-transform: uppercase; color: #fff; background: #dc2626; box-shadow: 0 0 20px rgba(220,38,38,.55); }
.wall-spot__nick { font-size: clamp(26px, 2.6vw, 40px); font-weight: 900; line-height: 1.05; }
.wall-spot__role { font-size: 17px; font-weight: 600; color: #cbd5e1; }
.wall-spot__code { margin-top: 4px; font-size: 10px; font-weight: 700; letter-spacing: .12em; color: #475569; }
.wall-spot__dip { margin-top: 2px; font-size: 11px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #64748b; }
.wall-ghost { display: flex; align-items: center; justify-content: center; border-radius: 16px; border: 2px dashed rgba(255,255,255,.25); background: rgba(255,255,255,.03); color: #64748b; font-weight: 900; letter-spacing: .2em; text-transform: uppercase; font-size: 13px; }

/* Gallery */
.wall-stage { position: relative; height: 100%; min-height: 0; display: flex; align-items: center; justify-content: center; perspective: 2600px; perspective-origin: 50% 30%; overflow: hidden; }
.wall-stage--empty { color: #475569; font-weight: 700; }
.wall-stage--empty p { position: relative; }
.wall-floor { position: absolute; left: 5%; right: 5%; bottom: 2%; height: 30%; pointer-events: none;
  background: radial-gradient(50% 50% at 50% 50%, rgba(249,115,22,.14), rgba(220,38,38,.06) 55%, transparent 75%);
  transform: perspective(600px) rotateX(70deg); filter: blur(4px); }
.wall-rings { position: relative; width: 100%; transform-origin: 50% 50%; display: flex; flex-direction: column; transform-style: preserve-3d; }
.wall-ringslot { position: relative; transform-style: preserve-3d; }
.wall-ring { position: absolute; left: 50%; top: 0; width: 0; height: 100%; transform-style: preserve-3d; will-change: transform; }
.wall-slot { position: absolute; top: 0; transform-style: preserve-3d; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.wall-shade { position: absolute; inset: -2px; background: var(--wall-bg, #020617); pointer-events: none; border-radius: 12px; }
.wall-empty { border-radius: 10px; border: 1px dashed rgba(255,255,255,.08); }
.wall-fog { position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, var(--wall-bg, #020617) 0%, transparent 16%, transparent 84%, var(--wall-bg, #020617) 100%); }

.wall-mini { display: flex; flex-direction: column; align-items: stretch; }
.wall-mini__card { padding: 3px; border-radius: 9px; box-shadow: 0 10px 22px rgba(0,0,0,.6); }
.wall-mini__card--legend { box-shadow: 0 0 22px 4px color-mix(in srgb, var(--ed) 65%, transparent), 0 10px 22px rgba(0,0,0,.6); animation: legend 2.4s ease-in-out infinite; }
@keyframes legend { 50% { box-shadow: 0 0 34px 9px color-mix(in srgb, var(--ed) 85%, transparent), 0 10px 22px rgba(0,0,0,.6); } }
.wall-mini__pic { position: relative; aspect-ratio: 2 / 3; border-radius: 6px; overflow: hidden; }
.wall-mini__pic img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.wall-mini__ph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 8%; text-align: center; font-weight: 900; font-size: 12px; line-height: 1.1; text-transform: uppercase; }
.wall-mini__sheen { position: absolute; inset: 0; background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,.18) 48%, transparent 60%); mix-blend-mode: screen; }
.wall-mini__plate { margin-top: 6px; padding: 4px 6px; border-radius: 6px; border-top: 2px solid; background: rgba(15,23,42,.92); text-align: center; overflow: hidden; }
.wall-mini__plate b { display: block; font-size: 13px; font-weight: 900; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wall-mini__plate span { display: block; font-size: 9px; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: .02em; }

.wall-legend { position: relative; z-index: 2; display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 22px; padding: 6px 24px 16px; font-size: 13px; font-weight: 700; color: #cbd5e1; }
.wall-legend span { display: inline-flex; align-items: center; gap: 8px; }
.wall-legend i { width: 10px; height: 10px; border-radius: 50%; }
.wall-error { position: absolute; bottom: 10px; right: 20px; font-size: 12px; font-weight: 700; color: #fbbf24; }
.wall-root--light { --wall-bg: #f8fafc; color: #0f172a; }
.wall-root--light .wall-sky { background: #f8fafc; }
.wall-root--light .wall-sky::after { opacity: .10; background-image: radial-gradient(circle, #64748b 1px, transparent 1px); }
.wall-root--light .wall-brand, .wall-root--light .wall-sub, .wall-root--light .wall-stat span { color: #64748b; }
.wall-root--light .wall-title { background: linear-gradient(90deg, #dc2626, #ea580c, #f97316); -webkit-background-clip: text; background-clip: text; }
.wall-root--light .wall-stat { background: #fff; border-color: #e2e8f0; box-shadow: 0 4px 14px rgba(15,23,42,.06); }
.wall-root--light .wall-spot__role { color: #334155; }
.wall-root--light .wall-spot__dip { color: #94a3b8; }
.wall-root--light .wall-spot__beam { opacity: .35; }
.wall-root--light .wall-spot__card { filter: drop-shadow(0 30px 34px rgba(15,23,42,.35)); }
.wall-root--light .wall-mini__card { box-shadow: 0 12px 20px rgba(15,23,42,.28); }
.wall-root--light .wall-mini__plate { background: #fff; box-shadow: 0 2px 8px rgba(15,23,42,.10); }
.wall-root--light .wall-mini__plate b { color: #0f172a; }
.wall-root--light .wall-floor { background: radial-gradient(50% 50% at 50% 50%, rgba(15,23,42,.16), rgba(15,23,42,.05) 55%, transparent 75%); }
.wall-root--light .wall-legend { color: #334155; }
.wall-root--light .wall-ghost { border-color: #cbd5e1; background: #fff; color: #94a3b8; }
@media (max-width: 820px) {
  .wall-root { overflow-y: auto; }
  .wall-main { flex: none; display: flex; }
  .wall-main--narrow .wall-stage { height: 440px; }
  .wall-main--narrow .wall-scenes { height: 440px; }
  .wall-main { flex-direction: column; }
  .wall-spotpanel { position: static; width: auto; transform: none; background: none; display: none; }
  .wall-spotpanel.is-in { display: block; order: -1; }
  .wall-spot { height: auto; padding: 16px 12px 8px; }
  .wall-head { padding: 16px 16px 0; }
  .wall-stats { width: 100%; }
  .wall-stat { flex: 1; min-width: 0; }
}
`;V.createRoot(document.getElementById("root")).render(e.jsxs(G.StrictMode,{children:[e.jsx("style",{children:fe}),e.jsx("div",{className:"h-[100dvh] w-full overflow-hidden bg-slate-950 font-sans",children:e.jsx(ge,{})})]}));
