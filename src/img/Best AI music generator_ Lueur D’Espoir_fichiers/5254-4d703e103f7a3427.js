"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5254],{85254:function(t,n,e){e.d(n,{Button:function(){return j}});var r=e(57437),o=e(20322);e(2265);var i=e(94120),a=e(15593),c=e(50591),s=e(86348),p=e(24633),u=e(869),l=e(34479),f=e(41392),d=e(30712),m=e(73147),y={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};let g={orientation:"horizontal"},v=(0,a.Z)((t,n)=>{let{borderWidth:e}=n;return{group:{"--button-border-width":(0,o.h)(e)}}}),h=(0,m.d)((t,n)=>{let e=(0,c.w)("ButtonGroup",g,t),{className:o,style:i,classNames:a,styles:u,unstyled:l,orientation:f,vars:d,borderWidth:m,variant:h,mod:b,...x}=(0,c.w)("ButtonGroup",g,t),w=(0,s.y)({name:"ButtonGroup",props:e,classes:y,className:o,style:i,classNames:a,styles:u,unstyled:l,vars:d,varsResolver:v,rootSelector:"group"});return(0,r.jsx)(p.x,{...w("group"),ref:n,variant:h,mod:[{"data-orientation":f},b],role:"group",...x})});h.classes=y,h.displayName="@mantine/core/ButtonGroup";let b={in:{opacity:1,transform:"translate(-50%, calc(-50% + ".concat((0,o.h)(1),"))")},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},x={},w=(0,a.Z)((t,n)=>{let{radius:e,color:r,gradient:o,variant:a,size:c,justify:s,autoContrast:p}=n,u=t.variantColorResolver({color:r||t.primaryColor,theme:t,gradient:o,variant:a||"filled",autoContrast:p});return{root:{"--button-justify":s,"--button-height":(0,i.ap)(c,"button-height"),"--button-padding-x":(0,i.ap)(c,"button-padding-x"),"--button-fz":(null==c?void 0:c.includes("compact"))?(0,i.yv)(c.replace("compact-","")):(0,i.yv)(c),"--button-radius":void 0===e?void 0:(0,i.H5)(e),"--button-bg":r||a?u.background:void 0,"--button-hover":r||a?u.hover:void 0,"--button-color":u.color,"--button-bd":r||a?u.border:void 0,"--button-hover-color":r||a?u.hoverColor:void 0}}}),j=(0,u.b)((t,n)=>{let e=(0,c.w)("Button",x,t),{style:o,vars:i,className:a,color:u,disabled:m,children:g,leftSection:v,rightSection:h,fullWidth:j,variant:N,radius:P,loading:k,loaderProps:S,gradient:_,classNames:A,styles:z,unstyled:R,"data-disabled":O,autoContrast:L,mod:E,...Y}=e,Z=(0,s.y)({name:"Button",props:e,classes:y,className:a,style:o,classNames:A,styles:z,unstyled:R,vars:i,varsResolver:w}),B=!!v,T=!!h;return(0,r.jsxs)(d.k,{ref:n,...Z("root",{active:!m&&!k&&!O}),unstyled:R,variant:N,disabled:m||k,mod:[{disabled:m||O,loading:k,block:j,"with-left-section":B,"with-right-section":T},E],...Y,children:[(0,r.jsx)(f.u,{mounted:!!k,transition:b,duration:150,children:t=>(0,r.jsx)(p.x,{component:"span",...Z("loader",{style:t}),"aria-hidden":!0,children:(0,r.jsx)(l.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...S})})}),(0,r.jsxs)("span",{...Z("inner"),children:[v&&(0,r.jsx)(p.x,{component:"span",...Z("section"),mod:{position:"left"},children:v}),(0,r.jsx)(p.x,{component:"span",mod:{loading:k},...Z("label"),children:g}),h&&(0,r.jsx)(p.x,{component:"span",...Z("section"),mod:{position:"right"},children:h})]})]})});j.classes=y,j.displayName="@mantine/core/Button",j.Group=h},34479:function(t,n,e){e.d(n,{a:function(){return b}});var r=e(57437),o=e(2265),i=e(94120),a=e(15593),c=e(45027),s=e(50591),p=e(86348),u=e(24633),l=e(73147),f=e(44839),d={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};let m=(0,o.forwardRef)((t,n)=>{let{className:e,...o}=t;return(0,r.jsxs)(u.x,{component:"span",className:(0,f.Z)(d.barsLoader,e),...o,ref:n,children:[(0,r.jsx)("span",{className:d.bar}),(0,r.jsx)("span",{className:d.bar}),(0,r.jsx)("span",{className:d.bar})]})}),y=(0,o.forwardRef)((t,n)=>{let{className:e,...o}=t;return(0,r.jsxs)(u.x,{component:"span",className:(0,f.Z)(d.dotsLoader,e),...o,ref:n,children:[(0,r.jsx)("span",{className:d.dot}),(0,r.jsx)("span",{className:d.dot}),(0,r.jsx)("span",{className:d.dot})]})}),g={bars:m,oval:(0,o.forwardRef)((t,n)=>{let{className:e,...o}=t;return(0,r.jsx)(u.x,{component:"span",className:(0,f.Z)(d.ovalLoader,e),...o,ref:n})}),dots:y},v={loaders:g,type:"oval"},h=(0,a.Z)((t,n)=>{let{size:e,color:r}=n;return{root:{"--loader-size":(0,i.ap)(e,"loader-size"),"--loader-color":r?(0,c.p)(r,t):void 0}}}),b=(0,l.d)((t,n)=>{let e=(0,s.w)("Loader",v,t),{size:o,color:i,type:a,vars:c,className:l,style:f,classNames:m,styles:y,unstyled:g,loaders:b,variant:x,children:w,...j}=e,N=(0,p.y)({name:"Loader",props:e,classes:d,className:l,style:f,classNames:m,styles:y,unstyled:g,vars:c,varsResolver:h});return w?(0,r.jsx)(u.x,{...N("root"),ref:n,...j,children:w}):(0,r.jsx)(u.x,{...N("root"),ref:n,component:b[a],variant:x,size:o,...j})});b.defaultLoaders=g,b.classes=d,b.displayName="@mantine/core/Loader"},41392:function(t,n,e){e.d(n,{u:function(){return d}});var r=e(57437),o=e(20322),i=e(2265);let a=t=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(.9) translateY(".concat((0,o.h)("bottom"===t?10:-10),")")},transitionProperty:"transform, opacity"}),c={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(30))},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(-30))},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,o.h)(30))},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(".concat((0,o.h)(-30))},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(-20),") skew(-10deg, -5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") skew(-10deg, -5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") rotate(-5deg)")},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(".concat((0,o.h)(20),") rotate(5deg)")},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...a("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...a("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...a("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...a("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...a("top"),common:{transformOrigin:"top right"}}},s={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};var p=e(54887),u=e(35389),l=e(87957),f=e(15274);function d(t){let{keepMounted:n,transition:e="fade",duration:o=250,exitDuration:a=o,mounted:d,children:m,timingFunction:y="ease",onExit:g,onEntered:v,onEnter:h,onExited:b,enterDelay:x,exitDelay:w}=t,{transitionDuration:j,transitionStatus:N,transitionTimingFunction:P}=function(t){let{duration:n,exitDuration:e,timingFunction:r,mounted:o,onEnter:a,onExit:c,onEntered:s,onExited:d,enterDelay:m,exitDelay:y}=t,g=(0,f.rZ)(),v=(0,u.J)(),h=!!g.respectReducedMotion&&v,[b,x]=(0,i.useState)(h?0:n),[w,j]=(0,i.useState)(o?"entered":"exited"),N=(0,i.useRef)(-1),P=(0,i.useRef)(-1),k=(0,i.useRef)(-1),S=t=>{let r=t?a:c,o=t?s:d;window.clearTimeout(N.current);let i=h?0:t?n:e;x(i),0===i?("function"==typeof r&&r(),"function"==typeof o&&o(),j(t?"entered":"exited")):k.current=requestAnimationFrame(()=>{p.flushSync(()=>{j(t?"pre-entering":"pre-exiting")}),k.current=requestAnimationFrame(()=>{"function"==typeof r&&r(),j(t?"entering":"exiting"),N.current=window.setTimeout(()=>{"function"==typeof o&&o(),j(t?"entered":"exited")},i)})})},_=t=>{if(window.clearTimeout(P.current),"number"!=typeof(t?m:y)){S(t);return}P.current=window.setTimeout(()=>{S(t)},t?m:y)};return(0,l.l)(()=>{_(o)},[o]),(0,i.useEffect)(()=>()=>{window.clearTimeout(N.current),cancelAnimationFrame(k.current)},[]),{transitionDuration:b,transitionStatus:w,transitionTimingFunction:r||"ease"}}({mounted:d,exitDuration:a,duration:o,timingFunction:y,onExit:g,onEntered:v,onEnter:h,onExited:b,enterDelay:x,exitDelay:w});return 0===j?d?(0,r.jsx)(r.Fragment,{children:m({})}):n?m({display:"none"}):null:"exited"===N?n?m({display:"none"}):null:(0,r.jsx)(r.Fragment,{children:m(function(t){let{transition:n,state:e,duration:r,timingFunction:o}=t,i={transitionDuration:"".concat(r,"ms"),transitionTimingFunction:o};return"string"==typeof n?n in c?{transitionProperty:c[n].transitionProperty,...i,...c[n].common,...c[n][s[e]]}:{}:{transitionProperty:n.transitionProperty,...i,...n.common,...n[s[e]]}}({transition:e,duration:j,state:N,timingFunction:P}))})}d.displayName="@mantine/core/Transition"},30712:function(t,n,e){e.d(n,{k:function(){return u}});var r=e(57437);e(2265);var o=e(50591),i=e(86348),a=e(24633),c=e(869),s={root:"m_87cf2631"};let p={__staticSelector:"UnstyledButton"},u=(0,c.b)((t,n)=>{let e=(0,o.w)("UnstyledButton",p,t),{className:c,component:u="button",__staticSelector:l,unstyled:f,classNames:d,styles:m,style:y,...g}=e,v=(0,i.y)({name:l,props:e,classes:s,className:c,style:y,classNames:d,styles:m,unstyled:f});return(0,r.jsx)(a.x,{...v("root",{focusable:!0}),component:u,ref:n,type:"button"===u?"button":void 0,...g})});u.classes=s,u.displayName="@mantine/core/UnstyledButton"},24633:function(t,n,e){e.d(n,{x:function(){return k}});var r=e(57437),o=e(2265),i=e(44839),a=e(2040),c=e(28891),s=e(78150),p=e(15274);function u(t){return t.startsWith("data-")?t:"data-".concat(t)}function l(t,n){return Array.isArray(t)?[...t].reduce((t,e)=>({...t,...l(e,n)}),{}):"function"==typeof t?t(n):null==t?{}:t}var f=e(17622);let d={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};var m=e(29481),y=e(20322),g=e(65762);function v(t,n){let e=(0,g.E)({color:t,theme:n});return"dimmed"===e.color?"var(--mantine-color-dimmed)":"bright"===e.color?"var(--mantine-color-bright)":e.variable?"var(".concat(e.variable,")"):e.color}let h={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"},b=["h1","h2","h3","h4","h5","h6"],x=["h1","h2","h3","h4","h5","h6"],w={color:v,textColor:function(t,n){let e=(0,g.E)({color:t,theme:n});return e.isThemeColor&&void 0===e.shade?"var(--mantine-color-".concat(e.color,"-text)"):v(t,n)},fontSize:function(t,n){return"string"==typeof t&&t in n.fontSizes?"var(--mantine-font-size-".concat(t,")"):"string"==typeof t&&b.includes(t)?"var(--mantine-".concat(t,"-font-size)"):"number"==typeof t||"string"==typeof t?(0,y.h)(t):t},spacing:function(t,n){if("number"==typeof t)return(0,y.h)(t);if("string"==typeof t){let e=t.replace("-","");if(!(e in n.spacing))return(0,y.h)(t);let r="--mantine-spacing-".concat(e);return t.startsWith("-")?"calc(var(".concat(r,") * -1)"):"var(".concat(r,")")}return t},identity:function(t){return t},size:function(t){return"number"==typeof t?(0,y.h)(t):t},lineHeight:function(t,n){return"string"==typeof t&&t in n.lineHeights?"var(--mantine-line-height-".concat(t,")"):"string"==typeof t&&x.includes(t)?"var(--mantine-".concat(t,"-line-height)"):t},fontFamily:function(t){return"string"==typeof t&&t in h?h[t]:t},border:function(t,n){if("number"==typeof t)return(0,y.h)(t);if("string"==typeof t){let[e,r,...o]=t.split(" ").filter(t=>""!==t.trim()),i="".concat((0,y.h)(e));return r&&(i+=" ".concat(r)),o.length>0&&(i+=" ".concat(v(o.join(" "),n))),i.trim()}return t}};function j(t){return t.replace("(min-width: ","").replace("em)","")}var N=e(54803);let P=(0,o.forwardRef)((t,n)=>{var e;let{component:o,style:y,__vars:g,className:v,variant:h,mod:b,size:x,hiddenFrom:P,visibleFrom:k,lightHidden:S,darkHidden:_,renderRoot:A,__size:z,...R}=t,O=(0,p.rZ)(),{styleProps:L,rest:E}=(0,f.c)(R),Y=(0,s.dv)(),Z=null==Y?void 0:null===(e=Y())||void 0===e?void 0:e(L.sx),B=(0,N.m)(),T=function(t){let{styleProps:n,data:e,theme:r}=t;return function(t){let{media:n,...e}=t,r=Object.keys(n).sort((t,n)=>Number(j(t))-Number(j(n))).map(t=>({query:t,styles:n[t]}));return{...e,media:r}}((0,m.X)(n).reduce((t,o)=>{var i,a;if("hiddenFrom"===o||"visibleFrom"===o||"sx"===o)return t;let c=e[o],s=Array.isArray(c.property)?c.property:[c.property],p="object"==typeof(a=n[o])&&null!==a?"base"in a?a.base:void 0:a;if(!function(t){if("object"!=typeof t||null===t)return!1;let n=Object.keys(t);return 1!==n.length||"base"!==n[0]}(n[o]))return s.forEach(n=>{t.inlineStyles[n]=w[c.type](p,r)}),t;t.hasResponsiveStyles=!0;let u="object"==typeof(i=n[o])&&null!==i?(0,m.X)(i).filter(t=>"base"!==t):[];return s.forEach(e=>{p&&(t.styles[e]=w[c.type](p,r)),u.forEach(i=>{var a;let s="(min-width: ".concat(r.breakpoints[i],")");t.media[s]={...t.media[s],[e]:w[c.type]("object"==typeof(a=n[o])&&null!==a&&i in a?a[i]:a,r)}})}),t},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}({styleProps:L,theme:O,data:d}),F={ref:n,style:function(t){let{theme:n,style:e,vars:r,styleProps:o}=t,i=l(e,n),a=l(r,n);return{...i,...a,...o}}({theme:O,style:y,vars:g,styleProps:T.inlineStyles}),className:(0,i.Z)(v,Z,{[B]:T.hasResponsiveStyles,"mantine-light-hidden":S,"mantine-dark-hidden":_,["mantine-hidden-from-".concat(P)]:P,["mantine-visible-from-".concat(k)]:k}),"data-variant":h,"data-size":(0,c.s)(x)?void 0:x||void 0,size:z,...function t(n){return n?"string"==typeof n?{[u(n)]:!0}:Array.isArray(n)?[...n].reduce((n,e)=>({...n,...t(e)}),{}):Object.keys(n).reduce((t,e)=>{let r=n[e];return void 0===r||""===r||!1===r||null===r||(t[u(e)]=n[e]),t},{}):null}(b),...E};return(0,r.jsxs)(r.Fragment,{children:[T.hasResponsiveStyles&&(0,r.jsx)(a.f,{selector:".".concat(B),styles:T.styles,media:T.media}),"function"==typeof A?A(F):(0,r.jsx)(o||"div",{...F})]})});P.displayName="@mantine/core/Box";let k=P},17622:function(t,n,e){e.d(n,{c:function(){return o}});var r=e(20686);function o(t){let{m:n,mx:e,my:o,mt:i,mb:a,ml:c,mr:s,me:p,ms:u,p:l,px:f,py:d,pt:m,pb:y,pl:g,pr:v,pe:h,ps:b,bd:x,bg:w,c:j,opacity:N,ff:P,fz:k,fw:S,lts:_,ta:A,lh:z,fs:R,tt:O,td:L,w:E,miw:Y,maw:Z,h:B,mih:T,mah:F,bgsz:X,bgp:C,bgr:I,bga:H,pos:W,top:G,left:M,bottom:q,right:D,inset:U,display:J,flex:K,hiddenFrom:V,visibleFrom:Q,lightHidden:$,darkHidden:tt,sx:tn,...te}=t;return{styleProps:(0,r.L)({m:n,mx:e,my:o,mt:i,mb:a,ml:c,mr:s,me:p,ms:u,p:l,px:f,py:d,pt:m,pb:y,pl:g,pr:v,pe:h,ps:b,bd:x,bg:w,c:j,opacity:N,ff:P,fz:k,fw:S,lts:_,ta:A,lh:z,fs:R,tt:O,td:L,w:E,miw:Y,maw:Z,h:B,mih:T,mah:F,bgsz:X,bgp:C,bgr:I,bga:H,pos:W,top:G,left:M,bottom:q,right:D,inset:U,display:J,flex:K,hiddenFrom:V,visibleFrom:Q,lightHidden:$,darkHidden:tt,sx:tn}),rest:te}}e(2265),e(57437)},54803:function(t,n,e){e.d(n,{m:function(){return o}});var r=e(2265);function o(){let t=(0,r.useId)().replace(/:/g,"");return"__m__-".concat(t)}},2040:function(t,n,e){e.d(n,{f:function(){return c}});var r=e(57437);e(2265);var o=e(78150),i=e(29481);function a(t){return(0,i.X)(t).reduce((n,e)=>void 0!==t[e]?"".concat(n).concat(e.replace(/[A-Z]/g,t=>"-".concat(t.toLowerCase())),":").concat(t[e],";"):n,"").trim()}function c(t){let n=(0,o.R7)();return(0,r.jsx)("style",{"data-mantine-styles":"inline",nonce:null==n?void 0:n(),dangerouslySetInnerHTML:{__html:function(t){let{selector:n,styles:e,media:r,container:o}=t,i=e?a(e):"",c=Array.isArray(r)?r.map(t=>"@media".concat(t.query,"{").concat(n,"{").concat(a(t.styles),"}}")):[],s=Array.isArray(o)?o.map(t=>"@container ".concat(t.query,"{").concat(n,"{").concat(a(t.styles),"}}")):[];return"".concat(i?"".concat(n,"{").concat(i,"}"):"").concat(c.join("")).concat(s.join("")).trim()}(t)}})}},50591:function(t,n,e){e.d(n,{w:function(){return i}});var r=e(20686);e(2265),e(57437);var o=e(15274);function i(t,n,e){var i;let a=(0,o.rZ)(),c=null===(i=a.components[t])||void 0===i?void 0:i.defaultProps,s="function"==typeof c?c(a):c;return{...n,...s,...(0,r.L)(e)}}},73147:function(t,n,e){e.d(n,{d:function(){return a},y:function(){return i}});var r=e(57437),o=e(2265);function i(t){return t}function a(t){let n=(0,o.forwardRef)(t);return n.extend=i,n.withProps=t=>{let e=(0,o.forwardRef)((e,o)=>(0,r.jsx)(n,{...t,...e,ref:o}));return e.extend=n.extend,e.displayName="WithProps(".concat(n.displayName,")"),e},n}},869:function(t,n,e){e.d(n,{b:function(){return a}});var r=e(57437),o=e(2265),i=e(73147);function a(t){let n=(0,o.forwardRef)(t);return n.withProps=t=>{let e=(0,o.forwardRef)((e,o)=>(0,r.jsx)(n,{...t,...e,ref:o}));return e.extend=n.extend,e.displayName="WithProps(".concat(n.displayName,")"),e},n.extend=i.y,n}},15593:function(t,n,e){e.d(n,{Z:function(){return r}});function r(t){return t}},40954:function(t,n,e){e.d(n,{m:function(){return i}});var r=e(44839);let o={};function i(t){let{theme:n,classNames:e,props:i,stylesCtx:a}=t;return function(t){let n={};return t.forEach(t=>{Object.entries(t).forEach(t=>{let[e,o]=t;n[e]?n[e]=(0,r.Z)(n[e],o):n[e]=o})}),n}((Array.isArray(e)?e:[e]).map(t=>"function"==typeof t?t(n,i,a):t||o))}},70098:function(t,n,e){e.d(n,{i:function(){return r}});function r(t){let{theme:n,styles:e,props:r,stylesCtx:o}=t;return(Array.isArray(e)?e:[e]).reduce((t,e)=>"function"==typeof e?{...t,...e(n,r,o)}:{...t,...e},{})}},86348:function(t,n,e){e.d(n,{y:function(){return f}}),e(2265),e(57437);var r=e(78150),o=e(15274),i=e(44839);let a={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};var c=e(40954);function s(t){let{selector:n,stylesCtx:e,theme:r,classNames:o,props:i}=t;return(0,c.m)({theme:r,classNames:o,props:i,stylesCtx:e})[n]}var p=e(70098);function u(t){let{style:n,theme:e}=t;return Array.isArray(n)?[...n].reduce((t,n)=>({...t,...u({style:n,theme:e})}),{}):"function"==typeof n?n(e):null==n?{}:n}var l=e(20686);function f(t){let{name:n,classes:e,props:f,stylesCtx:d,className:m,style:y,rootSelector:g="root",unstyled:v,classNames:h,styles:b,vars:x,varsResolver:w}=t,j=(0,o.rZ)(),N=(0,r.uK)(),P=(0,r.Nu)(),k=(0,r.DE)(),S=(Array.isArray(n)?n:[n]).filter(t=>t),{withStylesTransform:_,getTransformedStyles:A}=function(t){var n;let{props:e,stylesCtx:i,themeName:a}=t,c=(0,o.rZ)(),s=null===(n=(0,r.sZ)())||void 0===n?void 0:n();return{getTransformedStyles:t=>s?[...t.map(t=>s(t,{props:e,theme:c,ctx:i})),...a.map(t=>{var n;return s(null===(n=c.components[t])||void 0===n?void 0:n.styles,{props:e,theme:c,ctx:i})})].filter(Boolean):[],withStylesTransform:!!s}}({props:f,stylesCtx:d,themeName:S});return(t,n)=>({className:function(t){let{theme:n,options:e,themeName:r,selector:o,classNamesPrefix:p,classNames:u,classes:l,unstyled:f,className:d,rootSelector:m,props:y,stylesCtx:g,withStaticClasses:v,headless:h,transformedStyles:b}=t;return(0,i.Z)(function(t){let{theme:n,options:e,unstyled:r}=t;return(0,i.Z)((null==e?void 0:e.focusable)&&!r&&(n.focusClassName||a[n.focusRing]),(null==e?void 0:e.active)&&!r&&n.activeClassName)}({theme:n,options:e,unstyled:f||h}),function(t){let{themeName:n,theme:e,selector:r,props:o,stylesCtx:i}=t;return n.map(t=>{var n,a;return null===(n=(0,c.m)({theme:e,classNames:null===(a=e.components[t])||void 0===a?void 0:a.classNames,props:o,stylesCtx:i}))||void 0===n?void 0:n[r]})}({theme:n,themeName:r,selector:o,props:y,stylesCtx:g}),function(t){let{options:n,classes:e,selector:r,unstyled:o}=t;return(null==n?void 0:n.variant)&&!o?e["".concat(r,"--").concat(n.variant)]:void 0}({options:e,classes:l,selector:o,unstyled:f}),s({selector:o,stylesCtx:g,theme:n,classNames:u,props:y}),s({selector:o,stylesCtx:g,theme:n,classNames:b,props:y}),function(t){let{selector:n,stylesCtx:e,options:r,props:o,theme:i}=t;return(0,c.m)({theme:i,classNames:null==r?void 0:r.classNames,props:(null==r?void 0:r.props)||o,stylesCtx:e})[n]}({selector:o,stylesCtx:g,options:e,props:y,theme:n}),function(t){let{rootSelector:n,selector:e,className:r}=t;return n===e?r:void 0}({rootSelector:m,selector:o,className:d}),function(t){let{selector:n,classes:e,unstyled:r}=t;return r?void 0:e[n]}({selector:o,classes:l,unstyled:f||h}),v&&!h&&function(t){let{themeName:n,classNamesPrefix:e,selector:r,withStaticClass:o}=t;return!1===o?[]:n.map(t=>"".concat(e,"-").concat(t,"-").concat(r))}({themeName:r,classNamesPrefix:p,selector:o,withStaticClass:null==e?void 0:e.withStaticClass}),null==e?void 0:e.className)}({theme:j,options:n,themeName:S,selector:t,classNamesPrefix:N,classNames:h,classes:e,unstyled:v,className:m,rootSelector:g,props:f,stylesCtx:d,withStaticClasses:P,headless:k,transformedStyles:A([null==n?void 0:n.styles,b])}),style:function(t){let{theme:n,themeName:e,selector:r,options:o,props:i,stylesCtx:a,rootSelector:c,styles:s,style:f,vars:d,varsResolver:m,headless:y,withStylesTransform:g}=t;return{...!g&&function(t){let{theme:n,themeName:e,props:r,stylesCtx:o,selector:i}=t;return e.map(t=>{var e;return(0,p.i)({theme:n,styles:null===(e=n.components[t])||void 0===e?void 0:e.styles,props:r,stylesCtx:o})[i]}).reduce((t,n)=>({...t,...n}),{})}({theme:n,themeName:e,props:i,stylesCtx:a,selector:r}),...!g&&(0,p.i)({theme:n,styles:s,props:i,stylesCtx:a})[r],...!g&&(0,p.i)({theme:n,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||i,stylesCtx:a})[r],...function(t){var n;let{vars:e,varsResolver:r,theme:o,props:i,stylesCtx:a,selector:c,themeName:s,headless:p}=t;return null===(n=[p?{}:null==r?void 0:r(o,i,a),...s.map(t=>{var n,e,r;return null===(r=o.components)||void 0===r?void 0:null===(e=r[t])||void 0===e?void 0:null===(n=e.vars)||void 0===n?void 0:n.call(e,o,i,a)}),null==e?void 0:e(o,i,a)].reduce((t,n)=>(n&&Object.keys(n).forEach(e=>{t[e]={...t[e],...(0,l.L)(n[e])}}),t),{}))||void 0===n?void 0:n[c]}({theme:n,props:i,stylesCtx:a,vars:d,varsResolver:m,selector:r,themeName:e,headless:y}),...c===r?u({style:f,theme:n}):null,...u({style:null==o?void 0:o.style,theme:n})}}({theme:j,themeName:S,selector:t,options:n,props:f,stylesCtx:d,rootSelector:g,styles:b,style:y,vars:x,varsResolver:w,headless:k,withStylesTransform:_})})}},20686:function(t,n,e){e.d(n,{L:function(){return r}});function r(t){return Object.keys(t).reduce((n,e)=>(void 0!==t[e]&&(n[e]=t[e]),n),{})}},94120:function(t,n,e){e.d(n,{Dp:function(){return p},H5:function(){return c},Xj:function(){return u},ap:function(){return i},bG:function(){return a},yv:function(){return s}});var r=e(28891),o=e(20322);function i(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",e=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==t)return(0,r.s)(t)?e?(0,o.h)(t):t:"var(--".concat(n,"-").concat(t,")")}function a(t){return i(t,"mantine-spacing")}function c(t){return void 0===t?"var(--mantine-radius-default)":i(t,"mantine-radius")}function s(t){return i(t,"mantine-font-size")}function p(t){return i(t,"mantine-line-height",!1)}function u(t){if(t)return i(t,"mantine-shadow",!1)}},28891:function(t,n,e){e.d(n,{s:function(){return r}});function r(t){return"number"==typeof t||"string"==typeof t&&(!!(t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&""!==t.trim())||/[0-9]/.test(t.trim().replace("-","")[0]))}},87957:function(t,n,e){e.d(n,{l:function(){return o}});var r=e(2265);function o(t,n){let e=(0,r.useRef)(!1);(0,r.useEffect)(()=>()=>{e.current=!1},[]),(0,r.useEffect)(()=>{if(e.current)return t();e.current=!0},n)}},35389:function(t,n,e){e.d(n,{J:function(){return o}});var r=e(2265);function o(t,n){return function(t,n){let{getInitialValueInEffect:e}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[o,i]=(0,r.useState)(e?n:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(t).matches),a=(0,r.useRef)();return(0,r.useEffect)(()=>{if("matchMedia"in window)return a.current=window.matchMedia(t),i(a.current.matches),function(t,n){try{return t.addEventListener("change",n),()=>t.removeEventListener("change",n)}catch(e){return t.addListener(n),()=>t.removeListener(n)}}(a.current,t=>i(t.matches))},[t]),o}("(prefers-reduced-motion: reduce)",t,n)}},44839:function(t,n,e){n.Z=function(){for(var t,n,e=0,r="",o=arguments.length;e<o;e++)(t=arguments[e])&&(n=function t(n){var e,r,o="";if("string"==typeof n||"number"==typeof n)o+=n;else if("object"==typeof n){if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(r=t(n[e]))&&(o&&(o+=" "),o+=r)}else for(r in n)n[r]&&(o&&(o+=" "),o+=r)}return o}(t))&&(r&&(r+=" "),r+=n);return r}}}]);