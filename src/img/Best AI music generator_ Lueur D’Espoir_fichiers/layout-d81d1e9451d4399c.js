(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1203],{69657:function(e,t,s){Promise.resolve().then(s.bind(s,40011)),Promise.resolve().then(s.bind(s,28393))},81962:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(7452);class r{static packageList(e){return n.Z.get("/package/list",e)}static createPayment(e){return n.Z.post("/payment/create",e)}static createSubPayment(e){return n.Z.post("/payment/create-sub",e)}static queryPayment(e){return n.Z.get("/payment/query",e)}static capturePayment(e){return n.Z.post("/payment/capture",e)}static chargeToUser(e){return n.Z.post("/user/charge",e)}}},21024:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(57437),r=s(2265),a=s(42462),o=s(99075),i={src:"/_next/static/media/loading_logo.81c25be0.webp"},l=e=>{let{src:t,alt:s,width:l=1,height:c=1,completeShowBackground:d=!0,isLazy:u=!0,className:m=""}=e,h=(0,r.useRef)(null),[p,f]=(0,r.useState)(!1),x="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",g=(0,r.useMemo)(()=>u?p&&t?t:x:t,[t,p]);return(0,r.useEffect)(()=>{if(u){let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(f(!0),h.current&&e.unobserve(h.current))})},{threshold:0});return h.current&&e.observe(h.current),()=>{e&&e.disconnect()}}},[]),(0,n.jsx)(a.X,{src:d||g===x?i.src:"",radius:"md",style:{aspectRatio:"".concat(l," / ").concat(c)},className:"w-full h-full ".concat(d||g===x?"bg-backdrop":"bg-transparent"," bg-center bg-[length:28%] bg-no-repeat overflow-hidden"),children:(0,n.jsx)(o.E,{ref:h,src:g,alt:s,radius:"md",height:c,width:l,className:"w-full h-full object-cover object-top ".concat(m)})})}},28393:function(e,t,s){"use strict";s.d(t,{default:function(){return I}});var n=s(57437),r=s(2265),a=s(30998),o=s(44785),i=s(54481),l=s(89242),c=s(82759),d=s(23335);let u=e=>{let t=(0,l.jD)(),[s,n]=(0,r.useState)(!1);return(0,a.useSession)({required:!0,async onUnauthenticated(){if(s)return null;let{google:e}=window;e&&(e.accounts.id.initialize({client_id:"525151822283-ica281be2l6tdhnrn0dj53b1ij3rt0dn.apps.googleusercontent.com",callback:async e=>{(0,c.V4)(),(0,c.mG)("googleonetap_login_click",{method:"GoogleOneTap"}),(0,c.mG)("login",{method:"GoogleOneTap"}),n(!0),await (0,a.signIn)("googleOneTap",{credential:e.credential,redirect:!0,callbackUrl:"https://aimusic.fm"+t}),n(!1)}}),e.accounts.id.prompt())}}),{isLoading:s}};var m=()=>(u({options:{redirect:!1,parentContainerId:"oneTap"}}),null),h=s(93059),p=s(59668),f=s(85254),x=s(7497),g=s(22966),b=s(21024),y=()=>(0,n.jsxs)("svg",{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{id:"Vector",d:"M5.01739 12.5007C5.01739 11.7387 5.14739 11.0077 5.37739 10.3227L1.33939 7.30273C0.528086 8.91521 0.106778 10.6957 0.109387 12.5007C0.109387 14.3687 0.551387 16.1307 1.33739 17.6947L5.37339 14.6697C5.13805 13.9708 5.01782 13.2382 5.01739 12.5007Z",fill:"#FBBC05"}),(0,n.jsx)("path",{id:"Vector_2",d:"M12.1098 5.56758C13.7998 5.56758 15.3268 6.15358 16.5268 7.11358L20.0178 3.70058C17.8908 1.88758 15.1638 0.767578 12.1098 0.767578C7.36784 0.767578 3.29184 3.42258 1.33984 7.30258L5.37984 10.3226C6.30984 7.55658 8.96184 5.56758 12.1098 5.56758Z",fill:"#EA4335"}),(0,n.jsx)("path",{id:"Vector_3",d:"M12.1098 19.4327C8.96084 19.4327 6.30884 17.4437 5.37784 14.6777L1.33984 17.6977C3.29084 21.5777 7.36684 24.2327 12.1098 24.2327C15.0358 24.2327 17.8298 23.2157 19.9278 21.3087L16.0938 18.4067C15.0128 19.0737 13.6508 19.4327 12.1088 19.4327",fill:"#34A853"}),(0,n.jsx)("path",{id:"Vector_4",d:"M23.5644 12.5002C23.5644 11.8072 23.4544 11.0602 23.2914 10.3672H12.1094V14.9002H18.5454C18.2244 16.4462 17.3484 17.6342 16.0954 18.4072L19.9284 21.3092C22.1314 19.3072 23.5644 16.3252 23.5644 12.5002Z",fill:"#4285F4"})]});let w=[{id:"bonus1",icon:"\uD83C\uDF81",content:"Sign up for great rewards"},{id:"bonus2",icon:"\uD83C\uDF81",content:"Sign in every day to receive rewards"},{id:"bonus3",icon:"\uD83E\uDD29",content:"Best AI Music generation effect"},{id:"bonus4",icon:"\uD83D\uDC4F",content:"Turn your ideas into music"},{id:"bonus5",icon:"\uD83D\uDC40",content:"Every creation is unique"}];var j=()=>{let e=(0,l.jD)(),[t,{open:s,close:o}]=(0,h.q)(!1),[d,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{i.Z.setState({openLoginModal:s})},[]),(0,n.jsxs)(p.u,{opened:t,onClose:o,size:"auto",radius:"lg",withCloseButton:!1,closeOnClickOutside:!1,centered:!0,children:[(0,n.jsxs)("div",{className:"flex items-center gap-7",children:[(0,n.jsx)("div",{className:"hidden lg:block h-[520px]",children:(0,n.jsx)(b.default,{src:"/_next/static/media/loginmodal_thumb.2080eb80.webp",width:610,height:768,isLazy:!1,alt:"Login modal thumb"})}),(0,n.jsxs)("div",{className:"py-8 lg:py-0 lg:pr-3 flex flex-col items-center",children:[(0,n.jsx)("h2",{className:"text-2xl md:text-4xl font-bold text-white",children:"Login to create for free!"}),(0,n.jsx)("p",{className:"mt-2 text-xs md:text-sm",children:"Use the power of AI to fill every note with soul"}),(0,n.jsx)("div",{className:"mt-10 flex flex-col gap-4",children:w.map(e=>(0,n.jsxs)("p",{className:"font-bold text-white",children:[(0,n.jsx)("span",{className:"mr-1 sm:mr-2 text-base sm:text-lg",children:e.icon}),(0,n.jsx)("span",{className:"text-sm sm:text-base",children:e.content})]},e.id))}),(0,n.jsxs)(f.Button,{loading:d,className:"mt-10",fullWidth:!0,onClick:()=>{u(!0),(0,c.V4)(),(0,c.mG)("google_login_click",{method:"Google"}),(0,c.mG)("login",{method:"Google"}),(0,a.signIn)("google",{callbackUrl:"https://aimusic.fm"+e,redirect:!0})},variant:"default",radius:"xl",size:"lg",children:[(0,n.jsx)(y,{}),(0,n.jsx)("span",{className:"ml-8",children:"Continue with Google"})]}),(0,n.jsx)("p",{className:"mt-4 text-xs",children:"By continuing, you agree to our"}),(0,n.jsxs)("p",{className:"mt-2 text-xs",children:[(0,n.jsx)(l.rU,{onClick:o,className:"mx-1 text-sm text-white cursor-pointer",href:"/terms-of-use",children:"Terms of Use"}),"and",(0,n.jsx)(l.rU,{onClick:o,className:"mx-1 text-sm text-white cursor-pointer",href:"/privacy-policy",children:"Privacy Policy"})]})]})]}),(0,n.jsx)(x.A,{onClick:o,className:"absolute top-3 right-4 border-none",variant:"subtle","aria-label":"Settings",children:(0,n.jsx)(g.Z,{className:"text-white"})})]})},v=s(21659),N=s(98557),_=s(45123),k=s(27776),S=s(32978),C=s(15382),A=s(81962);let P=["sub_monthly_basic","sub_monthly_pro","sub_yearly_basic","sub_yearly_pro"];var Z=()=>{let{paymentSource:e}=(0,i.Z)(),[t,{open:s,close:a}]=(0,h.q)(!1),[o,l]=(0,r.useState)(!1),[d,u]=(0,r.useState)("yearly"),[m,y]=(0,r.useState)("Pro"),[w,j]=(0,r.useState)(0),[Z,U]=(0,r.useState)([]),I=(0,r.useMemo)(()=>{let e=0,t=[],s=[];if(Z.length)for(let n=0;n<Z.length;n++){let r=Z[n];r.code.includes("yearly")?s.push(r):t.push(r),r.discount>e&&(e=r.discount)}return j(e),{monthly:t,yearly:s}},[Z]),M=(0,r.useMemo)(()=>{switch(e){case C.N.noToken:return"Unleash your creativity on Music AI";case C.N.musicProModel:return"Pro model can be used after upgrade";default:return""}},[e]),T=(0,r.useMemo)(()=>("yearly"===d?I.yearly:I.monthly).find(e=>e.name===m),[m,d,I]),L=async()=>{(0,c.V4)(),(0,c.mG)("submodal_sub_click",{code:T.code});try{l(!0);let t=await A.Z.createSubPayment({payType:"stripe",packageCode:T.code,reason:e});if(0===t.code&&t.data){let s=T.code.includes("yearly");(0,c.mG)("begin_checkout",{google:{currency:"USD",value:T.price/100*(s?12:1),pay_method:"stripe",coupon:"sub_submodal_".concat(e),items:[{item_id:T.code,item_name:T.code}]},shushu:{from:"submodal",reason:e,type:"sub",sku:T.code,price:T.price/100*(s?12:1),method:"stripe"}}),window.open(t.data.url,"_self")}else k.A.warning(t.info),l(!1)}catch(e){k.A.warning(String(e)),l(!1)}},D=()=>{if(o)return null;a()},O=async()=>{try{let e=await A.Z.packageList({code:P.join(",")});0===e.code&&e.data?U(e.data):k.A.warning(e.info)}catch(e){k.A.warning(String(e))}};return(0,r.useEffect)(()=>{i.Z.setState({openSubModal:s})},[]),(0,r.useEffect)(()=>{t&&((0,c.mG)("sub_modal_show",{reason:i.Z.getState().paymentSource}),Z.length||O())},[t]),(0,n.jsxs)(p.u,{opened:t,onClose:D,size:"auto",radius:"lg",withCloseButton:!1,closeOnClickOutside:!1,centered:!0,children:[(0,n.jsxs)("div",{className:"flex items-center gap-7",children:[(0,n.jsx)("div",{className:"hidden lg:block h-[620px]",children:(0,n.jsx)(b.default,{src:"/_next/static/media/submodal_thumb.fc36d1f0.webp",width:485,height:768,isLazy:!1,alt:"Login modal thumb"})}),(0,n.jsxs)("div",{className:"xl:w-[540px] py-8 lg:py-0 lg:pr-3 flex flex-col items-center",children:[(0,n.jsx)("h2",{className:"text-xl md:text-2xl font-bold text-center text-white",children:M}),(0,n.jsx)("p",{className:"mt-2 text-xs md:text-sm",children:"Upgrade for more features and tokens"}),(0,n.jsx)(v.s,{disabled:o,value:d,onChange:u,className:"mt-6 w-full",color:"#70F8A6",size:"md",withItemsBorders:!1,data:[{label:(0,n.jsxs)(N.M,{className:"gap-1",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"hidden md:inline",children:"Pay "}),"Yearly"]}),(0,n.jsxs)("p",{className:"ml-1 sm:ml-2 text-[12px] py-1 px-2 bg-black/30 rounded-[20px]",children:[(0,n.jsx)("span",{className:"hidden md:inline",children:"UP TO "}),w,"% OFF\uD83D\uDD25"]})]}),value:"yearly"},{label:(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"hidden md:inline",children:"Pay "}),"Monthly"]}),value:"monthly"}]}),(0,n.jsx)("div",{className:"mt-6 w-full flex flex-col gap-2",children:Z.length&&Z?("yearly"===d?I.yearly:I.monthly).map(e=>(0,n.jsxs)("div",{onClick:()=>!o&&y(e.name),className:"relative py-3 px-3 flex items-center justify-between border ".concat(m===e.name?"border-primary bg-white/10":"border-white/20"," rounded-lg ").concat(o?"cursor-not-allowed":"cursor-pointer"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("div",{className:"w-5 h-5 flex items-center justify-center border ".concat(m===e.name?"Basic"===e.name?"!border-primary":"!border-secondary":"border-white/20"," rounded-full"),children:(0,n.jsx)("div",{className:"w-2.5 h-2.5 ".concat(m===e.name?"Basic"===e.name?"!bg-primary":"!bg-secondary":"border-transparent"," rounded-full")})}),(0,n.jsx)("p",{className:"text-base sm:text-lg font-bold ".concat("Basic"===e.name?"text-primary":"text-secondary"),children:e.name})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[e.discount>0&&(0,n.jsxs)("p",{className:"mr-2 py-0.5 px-3 text-xs sm:text-sm border border-transparent rounded-3xl gradient-border",children:[e.discount,"% ",(0,n.jsx)("span",{className:"hidden sm:inline",children:"OFF"})]}),(0,n.jsxs)("div",{className:"min-w-[102px] sm:min-w-28 flex items-center justify-end",children:[e.oldPrice>0&&(0,n.jsxs)("p",{className:"mr-1 text-xs sm:text-sm line-through",children:["$",Math.floor(e.oldPrice/100)]}),(0,n.jsxs)("p",{className:"text-base sm:text-lg font-bold text-white",children:["$",Math.floor(e.price/100)]}),(0,n.jsx)("p",{className:"text-xs sm:text-sm",children:"/Month"})]})]}),"yearly"===d&&"Pro"===e.name&&(0,n.jsx)("div",{className:"absolute top-[-1px] right-[-1px] pt-1 pb-1.5 px-4 text-lg leading-none scale-50 origin-top-right text-white rounded-tr-2xl rounded-bl-2xl bg-gradient-to-br from-[#C3565B] via-[#F66868] to-[#C3565B] z-[1]",children:"Popular"})]},e.id)):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.O,{className:"h-14"}),(0,n.jsx)(_.O,{className:"h-14"})]})}),T?(0,n.jsxs)("div",{className:"mt-6 py-3 px-4 w-full flex flex-col items-center border border-white/20 bg-backdrop rounded-lg",children:[(0,n.jsxs)("p",{className:"text-base sm:text-lg font-bold",children:[(0,n.jsxs)("span",{className:"Basic"===T.name?"text-primary":"text-secondary",children:[T.credit," tokens"]})," / month"]}),(0,n.jsx)("div",{className:"mt-3 w-full grid sm:grid-flow-col sm:grid-rows-5 grid-cols-1 sm:grid-cols-[1.2fr,_1fr] gap-y-3 text-xs sm:text-sm",children:T.descs.map(e=>(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(S.Z,{className:"w-5 h-5 ".concat("Basic"===T.name?"text-primary":"text-secondary")}),(0,n.jsx)("p",{className:"opacity-80",children:e.text})]},e.text))})]}):(0,n.jsx)(_.O,{className:"mt-6 h-52"}),(0,n.jsx)(f.Button,{disabled:!T,loading:o,onClick:L,className:"w-1/2 mt-6 text-black/70 hover:text-black",fullWidth:!0,variant:"gradient",children:"Continue"})]})]}),(0,n.jsx)(x.A,{onClick:D,className:"absolute top-3 right-4 border-none",variant:"subtle","aria-label":"Settings",children:(0,n.jsx)(g.Z,{className:"text-white"})})]})};let U=/^\/music\/([a-zA-Z0-9]+)$/;var I=e=>{let{children:t,profile:s}=e,u=(0,l.jD)();return(0,r.useEffect)(()=>{(0,c.zu)({profile:s}),i.Z.setState({userInfo:s,loadUserInfo:!1}),!s&&o.Z.get(d.Z.UserState)&&o.Z.remove(d.Z.UserState)},[]),(0,r.useEffect)(()=>{let e="/"===u?"/home":u,t={},s=e.match(U);s&&(e="/music/detail",t.id=s[1]),(0,c.mG)("page".concat(e.replaceAll("/","_").replaceAll("-","_"),"_show"),t)},[u]),(0,n.jsxs)(a.SessionProvider,{children:[t,(0,n.jsx)(m,{}),(0,n.jsx)(j,{}),(0,n.jsx)(Z,{})]})}},23335:function(e,t){"use strict";t.Z={UserState:"next_source_state"}},68331:function(e,t){"use strict";t.Z={UnreportedList:"unreported_list",PushedDataList:"pushed_list"}},82759:function(e,t,s){"use strict";s.d(t,{P_:function(){return d},V4:function(){return o},mG:function(){return i},zu:function(){return u}});var n=s(68331),r=s(33545);let a=!0,o=()=>{a=!1},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a){let s=t,n=t;switch(e){case"begin_checkout":case"purchase":s=t.google,n=t.shushu}window.gtag("event",e,s),window.ta.track(e,n),window.ta.flush()}else{let s=r.Z.get(n.Z.UnreportedList)||[];s.push({key:e,value:t}),r.Z.set(n.Z.UnreportedList,s)}},l=()=>{window.ta.trackFirst({eventName:"first_visit"})},c=e=>{let{profile:t=null}=e,s=r.Z.get(n.Z.UnreportedList);if(s){for(let e=0;e<s.length;e++){let n=s[e];"login"===n.key?t&&i(n.key,n.value):i(n.key,n.value)}r.Z.remove(n.Z.UnreportedList)}},d=e=>{let{profile:t=null}=e,s={page_url:location.href,user_sub_code:"no_login"};t&&(s.user_id=t.id,s.user_sub_code=t.pkgCode||"free"),window.gtag("set",s),window.ta.setSuperProperties({sandbox:!1}),t?(window.ta.login(t.id),window.ta.setSuperProperties({uid:t.id}),window.ta.userSet({page_url:location.href,user_sub_code:t.pkgCode||"free"})):window.ta.userSet({page_url:location.href,user_sub_code:"no_login"})},u=e=>{let{profile:t=null}=e;window.gtag("consent","update",{analytics_storage:"granted"}),d({profile:t}),c({profile:t}),l()}},7452:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(23335),r=s(12491);s(74590),(0,s(58064).$)("8970bd28df30dadfe786579facb528d71f0bb6bd");var a=s(44785);let o=e=>a.Z.get(e),i=e=>new Promise(async t=>t(o(e)));class l{async getToken(){let e="",t=await i(n.Z.UserState);try{t&&(e=JSON.parse(decodeURIComponent(t)).token)}catch(e){console.warn(String(e))}return e?{Authorization:"Bearer ".concat(e)}:""}async get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=await this.getToken(),n={method:"GET",headers:{"Content-Type":"application/json",...this.publicHeaders,...s}},a="?".concat(r.Z.stringify(t,{encode:!1}));return fetch("".concat(this.baseUrl).concat(e).concat(a),n).then(async e=>{let t=await e.json();return void 0===t.code||"number"!=typeof t.code?Promise.resolve({code:e.status,info:e.statusText}):401===e.status?Promise.resolve({code:401,info:t.info}):Promise.resolve(t)}).catch(e=>({code:-1,info:String(e)}))}async post(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=await this.getToken(),n={method:"POST",headers:{"Content-Type":"application/json",...this.publicHeaders,...s},body:JSON.stringify(t)};return fetch("".concat(this.baseUrl).concat(e),n).then(async e=>{let t=await e.json();return void 0===t.code||"number"!=typeof t.code?Promise.resolve({code:e.status,info:e.statusText}):401===e.status?Promise.resolve({code:401,info:t.info}):Promise.resolve(t)}).catch(e=>({code:-1,info:String(e)}))}async upload(e,t){let s=await this.getToken(),n={method:"POST",headers:{...this.publicHeaders,...s},body:t};return fetch("".concat(this.baseUrl).concat(e),n).then(async e=>{let t=await e.json();return void 0===t.code||"number"!=typeof t.code?Promise.resolve({code:e.status,info:e.statusText}):401===e.status?Promise.resolve({code:401,info:t.info}):Promise.resolve(t)}).catch(e=>({code:-1,info:String(e)}))}constructor(){this.publicHeaders={"X-App-Name":"music-web","X-App-Version":"1.0.0"},this.baseUrl="https://api.aimusic.fm/api"}}var c=new l},33545:function(e,t){"use strict";t.Z={set(e,t){window.localStorage.setItem(e,JSON.stringify(t))},get:e=>JSON.parse(window.localStorage.getItem(e)),remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}}},89242:function(e,t,s){"use strict";s.d(t,{rU:function(){return a},jD:function(){return i},tv:function(){return l}});var n=s(5758);let r={appName:"Aimusic",baseDomain:"https://aimusic.fm",locales:["en"],defaultLocale:"en",colorScheme:"dark",theme:(0,s(37540).j)({colors:{primaryColors:["#e4ffef","#cefee1","#9ffac3","#6cf8a3","#42f688","#28f477","#15f46d","#00d85b","#00c14f","#00a641"]},primaryColor:"primaryColors",defaultRadius:"sm",cursorType:"pointer",autoContrast:!0,luminanceThreshold:.5,defaultGradient:{from:"#F7EA76",to:"#70F8A6",deg:90},breakpoints:{sm:"30em",md:"48em",lg:"64em",xl:"90em",xl2:"120em",xl3:"160em",xl4:"240em"}})},{Link:a,redirect:o,usePathname:i,useRouter:l}=(0,n.iV)({locales:r.locales})},54481:function(e,t,s){"use strict";var n=s(39099),r=s(15382);let a=(0,n.Ue)(e=>({userInfo:null,loadUserInfo:!0,paymentSource:r.N.none,setUserInfo:t=>e({userInfo:t}),setLoadUserInfo:t=>e({loadUserInfo:t}),updateCredit:t=>{let{credit:s,subCredit:n}=t;return e(e=>({userInfo:{...e.userInfo,credit:s,subCredit:n}}))},openLoginModal:()=>{},openSubModal:()=>{},openPaymentModal:t=>e(e=>{switch(t){case r.N.musicProModel:return e.openSubModal(),{paymentSource:r.N.musicProModel};case r.N.noToken:if(!e.userInfo)return e.openLoginModal(),{};if(e.userInfo.pkgCode)return{};return e.openSubModal(),{paymentSource:r.N.noToken};default:return{}}})}));t.Z=a},15382:function(e,t,s){"use strict";var n,r;s.d(t,{N:function(){return n}}),(r=n||(n={})).none="",r.noToken="no_token",r.musicProModel="music_pro_model"}},function(e){e.O(0,[5769,5254,231,7372,7688,5314,7354,4963,1236,7861,2971,7023,1744],function(){return e(e.s=69657)}),_N_E=e.O()}]);