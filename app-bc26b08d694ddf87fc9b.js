!function(e){function t(t){for(var r,s,l=t[0],i=t[1],c=t[2],d=0,m=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var i=a[s];0!==o[i]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},s={0:0},o={0:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[];s[e]?t.push(s[e]):0!==s[e]&&{4:1,5:1,7:1}[e]&&t.push(s[e]=new Promise((function(t,a){for(var r=e+".styles-"+{2:"31d6cfe0d16ae931b73c",3:"31d6cfe0d16ae931b73c",4:"57cd2f130ef72ea0208c",5:"7f4d9d5e807d7660fb65",6:"31d6cfe0d16ae931b73c",7:"416bdc7676760237297d",8:"31d6cfe0d16ae931b73c"}[e]+".css",o=l.p+r,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var c=(u=n[i]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){var u;if((c=(u=d[i]).getAttribute("data-href"))===r||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete s[e],m.parentNode.removeChild(m),a(n)},m.href=o,document.getElementsByTagName("head")[0].appendChild(m)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(e){return l.p+""+({}[e]||e)+"-"+{2:"139ab0aea688d9cd245a",3:"0a4edfe87097351e1e49",4:"98a7605d5661652155c7",5:"94a409dc27a587fc4823",6:"1c2ce0cd0ff3ca9735a5",7:"5f1d5ea19d06731589ad",8:"f0e21c37bc445922636b"}[e]+".js"}(e);var c=new Error;n=function(t){i.onerror=i.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}o[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:i})}),12e4);i.onerror=i.onload=n,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;n.push([0,1]),a()}({"./.linaria-cache/src/components/layout/AppLayout.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/layout/Navbar.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/layout/SuspenseFallback.linaria.css":function(e,t,a){},"./src/assets/favicon.png":function(e,t,a){"use strict";t.a=a.p+"assets/favicon.8bc43364230544affdf79ddb012d2d71.png"},"./src/components/App.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/react-hot-loader/root.js"),o=a("./node_modules/react/index.js"),n=a.n(o),l=a("./node_modules/react-icons/lib/esm/index.js"),i=a("./node_modules/react-router-dom/esm/react-router-dom.js"),c=a("./src/components/layout/AppLayout.tsx"),d=a("./src/contexts/StickersContext.tsx"),u=a("./src/contexts/AppStateContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const m=()=>n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.b.Provider,{value:{className:"icon",style:{lineHeight:"1em",verticalAlign:"-0.125em",minHeight:"1em",minWidth:"1em"}}},n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement(i.BrowserRouter,null,n.a.createElement(c.a,null)))))),b=Object(s.hot)(m);var f,p;t.a=b,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"App","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),f.register(b,"default","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/general/ExternalLink.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/@babel/runtime/helpers/extends.js"),o=a.n(s),n=a("./node_modules/react/index.js"),l=a.n(n),i=a("./node_modules/ramda/es/omit.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c=l.a.memo(l.a.forwardRef((e,t)=>l.a.createElement("a",o()({target:"_blank",rel:"noreferrer noopener",ref:t},i.a(["children","ref"],e)),e.children)));c.displayName="ExternalLink";const d=c;var u,m;t.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(c,"ExternalLink","/home/travis/build/signalstickers/signalstickers/src/components/general/ExternalLink.tsx"),u.register(d,"default","/home/travis/build/signalstickers/signalstickers/src/components/general/ExternalLink.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/AppLayout.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/linaria/react.js"),o=a("./node_modules/p-throttle/index.js"),n=a.n(o),l=a("./node_modules/react/index.js"),i=a.n(l),c=a("./node_modules/react-router/esm/react-router.js"),d=a("./node_modules/react-scroll-percentage/react-scroll-percentage.esm.js"),u=a("./node_modules/use-async-effect/index.js"),m=a.n(u),b=a("./src/components/layout/Navbar.tsx"),f=a("./src/components/layout/SuspenseFallback.tsx"),p=a("./src/contexts/AppStateContext.tsx"),g=a("./src/etc/colors.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const v=i.a.lazy(async()=>a.e(8).then(a.bind(null,"./src/components/about/About.tsx"))),k=i.a.lazy(async()=>Promise.all([a.e(2),a.e(7)]).then(a.bind(null,"./src/components/contribute/Contribute.tsx"))),y=i.a.lazy(async()=>Promise.all([a.e(6),a.e(4)]).then(a.bind(null,"./src/components/home/Home.tsx"))),_=i.a.lazy(async()=>Promise.all([a.e(3),a.e(5)]).then(a.bind(null,"./src/components/pack/StickerPackDetail.tsx"))),L=Object(s.styled)("div")({name:"StyledContainer",class:"s1a46sws"}),x=()=>{const e=i.a.useContext(p.b),[t]=e("darkMode"),[a,r]=Object(d.a)();return i.a.useEffect(()=>{const e=document.querySelector("body");e&&(t?(e.classList.add("theme-dark"),e.classList.remove("theme-light")):(e.classList.add("theme-light"),e.classList.remove("theme-dark")))},[t]),m()(n()(()=>{const e=document.querySelector("body");e&&(e.style.backgroundColor=t?r<.5?g.a:"var(--dark)":r<.5?"var(--primary)":"var(--white)")},10,1e3),[r,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(L,{ref:a},i.a.createElement("div",{className:"container d-flex flex-column flex-grow-1"},i.a.createElement(l.Suspense,{fallback:i.a.createElement(f.a,null)},i.a.createElement(c.g,null,i.a.createElement(c.d,{exact:!0,path:"/"},i.a.createElement(y,null)),i.a.createElement(c.d,{path:"/pack/:packId"},i.a.createElement(_,null)),i.a.createElement(c.d,{path:"/contribute"},i.a.createElement(k,null)),i.a.createElement(c.d,{path:"/about"},i.a.createElement(v,null)))))))};h(x,"useContext{useAppState}\nuseAppState{[darkMode]}\nuseScrollPercentage{[ref, percentage]}\nuseEffect{}\nuseAsyncEffect{}",()=>[d.a,m.a]);const E=x;var H,G;t.a=E,a("./.linaria-cache/src/components/layout/AppLayout.linaria.css"),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(v,"About","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(k,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(y,"Home","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(_,"Pack","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register("gyr61s6","globals","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(L,"StyledContainer","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(x,"AppLayout","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx")),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&G(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/Navbar.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/linaria/react.js"),o=a("./node_modules/react/index.js"),n=a.n(o),l=a("./node_modules/react-icons/bs/index.esm.js"),i=a("./node_modules/react-icons/fa/index.esm.js"),c=a("./node_modules/react-icons/fi/index.esm.js"),d=a("./node_modules/react-router-dom/esm/react-router-dom.js"),u=a("./src/assets/favicon.png"),m=a("./src/components/general/ExternalLink.tsx"),b=a("./src/contexts/AppStateContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const p=Object(s.styled)("nav")({name:"StyledNav",class:"s1l3u8z6"}),g=()=>{const e=n.a.useContext(b.b),[t,a]=e("darkMode"),r=[{title:"Contribute",href:"/contribute"},{title:"About",href:"/about"},{title:"Twitter",href:"https://twitter.com/signalstickers",external:!0,children:n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-md-none"},"Twitter ",n.a.createElement(l.c,null)),n.a.createElement(i.c,{className:"d-none d-md-inline"}))},{title:"GitHub Repository",href:"https://github.com/signalstickers/signalstickers",external:!0,children:n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-md-none"},"GitHub ",n.a.createElement(l.c,null)),n.a.createElement(i.a,{className:"d-none d-md-inline"}))}],s=n.a.useCallback(()=>{a(!t)},[t]),o=n.a.useCallback(()=>{$("#navbar-toggle").collapse("hide")},[]);return n.a.createElement(p,{className:"navbar navbar-expand-md navbar-dark"},n.a.createElement("div",{className:"container"},n.a.createElement(d.Link,{to:"/",className:"navbar-brand",onClick:o},n.a.createElement("img",{src:u.a,alt:"Signal Stickers Logo"})," Signal Stickers"),n.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-toggle","aria-controls":"navbar-toggle","aria-expanded":"false","aria-label":"Toggle Navigation"},n.a.createElement(l.g,{className:"menu-icon"})),n.a.createElement("div",{id:"navbar-toggle",className:"collapse navbar-collapse"},n.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-md-0 pb-xs-0"},r.map(e=>{var t,a;return n.a.createElement("li",{className:"nav-item",key:e.href},e.external?n.a.createElement(m.a,{href:e.href,title:e.title,className:"nav-link py-3 py-md-2"},null!==(t=e.children)&&void 0!==t?t:e.title):n.a.createElement(d.NavLink,{to:e.href,title:e.title,className:"nav-link py-3 py-md-2",activeClassName:"active",onClick:o},null!==(a=e.children)&&void 0!==a?a:e.title))}),n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{type:"button",className:"btn btn-link nav-link py-3 py-md-2",title:"Dark Mode",onClick:s},t?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-inline-block d-md-none mr-1"},"Light mode"),n.a.createElement(c.b,null)):n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-inline-block d-md-none mr-1"},"Dark mode"),n.a.createElement(c.a,null))))))))};f(g,"useContext{useAppState}\nuseAppState{[darkMode, setDarkMode]}\nuseCallback{toggleDarkMode}\nuseCallback{collapseNavigation}");const h=g;var v,k;t.a=h,a("./.linaria-cache/src/components/layout/Navbar.linaria.css"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(p,"StyledNav","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx"),v.register(g,"NavbarComponent","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx"),v.register(h,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/SuspenseFallback.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/react/index.js"),o=a.n(s),n=a("./node_modules/linaria/react.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const i=Object(n.styled)("div")({name:"Spinner",class:"slpzcbs"}),c=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)(()=>{const e=setTimeout(()=>{t(!0)},2e3);return()=>{clearTimeout(e)}},[]),o.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-grow-1"},e&&o.a.createElement(i,{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))};l(c,"useState{[showSpinner, setShowSpinner](false)}\nuseEffect{}");const d=c;var u,m;t.a=d,a("./.linaria-cache/src/components/layout/SuspenseFallback.linaria.css"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"Spinner","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx"),u.register(c,"SuspenseFallbackComponent","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx"),u.register(d,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/contexts/AppStateContext.tsx":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return d}));var r,s=a("./node_modules/ramda/es/mapObjIndexed.js"),o=a("./node_modules/react/index.js"),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const i={darkMode:!1},c=n.a.createContext({}),d=e=>{const[t,a]=n.a.useReducer((e,t)=>{try{localStorage.setItem(String(t.key),JSON.stringify(t.value))}catch{}return{...e,[t.key]:t.value}},i,e=>s.a((e,t)=>{try{var a;return JSON.parse(null!==(a=localStorage.getItem(t))&&void 0!==a?a:e)}catch{return e}},e));return n.a.createElement(c.Provider,{value:function(e){return[t[e],t=>{a({key:e,value:t})}]}},e.children)};l(d,"useReducer{[state, dispatch](initialState)}");const u=c;var m,b;t.b=u,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(i,"initialState","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx"),m.register(c,"Context","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx"),m.register(d,"Provider","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx"),m.register(u,"default","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/contexts/StickersContext.tsx":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return f}));var r,s=a("./node_modules/ramda/es/path.js"),o=a("./node_modules/ramda/es/map.js"),n=a("./node_modules/react/index.js"),l=a.n(n),i=a("./node_modules/use-async-effect/index.js"),c=a.n(i),d=a("./src/lib/stickers.ts"),u=a("./src/lib/search/index.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const b=Object(n.createContext)({}),f=e=>{const[t,a]=l.a.useState(),[r,n]=l.a.useState(),[i,m]=l.a.useState(""),[f,p]=l.a.useState([]);return c()(async()=>{const e=await Object(d.d)();a(e),n(Object(u.a)({collection:e,identity:s.a(["meta","id"]),keys:{title:["manifest","title"],author:["manifest","author"],tag:["meta","tags"],nsfw:["meta","nsfw"],original:["meta","original"],animated:["meta","animated"]}}))},[]),l.a.useEffect(()=>{t&&r&&(0!==i.length?p(r.search(i)):p(o.a(e=>({item:e}),t)))},[t,r,i]),l.a.createElement(b.Provider,{value:{allStickerPacks:t,searcher:r,searchQuery:i,searchResults:f,setSearchQuery:m}},e.children)};m(f,"useState{[allStickerPacks, setAllStickerPacks]}\nuseState{[searcher, setSearcher]}\nuseState{[searchQuery, setSearchQuery]('')}\nuseState{[searchResults, setSearchResults]([])}\nuseAsyncEffect{}\nuseEffect{}",()=>[c.a]);const p=b;var g,h;t.b=p,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(b,"Context","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx"),g.register(f,"Provider","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx"),g.register(p,"default","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/etc/colors.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var r,s=a("./node_modules/polished/dist/polished.esm.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o=Object(s.c)(.2,"#DC3545"),n=Object(s.a)(.1,"#6C757D"),l=Object(s.a)(.255,"#6C757D"),i=Object(s.b)(.18,"#6C757D"),c=Object(s.a)(.15,"#007BFF"),d=Object(s.b)(.2,"#007BFF"),u=Object(s.a)(.01,"#343A40");var m,b;(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(o,"DANGER_SATURATED","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(n,"GRAY_DARKER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(l,"GRAY_DARKER_2","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(i,"GRAY_LIGHTER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(c,"PRIMARY_DARKER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(d,"PRIMARY_LIGHTER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(u,"DARK_THEME_BACKGROUND","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/etc/constants.ts":function(e,t,a){"use strict";(function(e){var r;a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s={xs:0,sm:576,md:768,lg:992,xl:1200},o="s";var n,l;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(s,"BOOTSTRAP_BREAKPOINTS","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts"),n.register(64,"NAVBAR_HEIGHT","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts"),n.register(o,"SEARCH_QUERY_PARAM","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/index.css":function(e,t,a){},"./src/index.tsx":function(e,t,a){"use strict";a.r(t);var r=a("./node_modules/react/index.js"),s=a.n(r),o=a("./node_modules/react-dom/index.js"),n=a.n(o),l=a("./src/components/App.tsx"),i=a("./src/lib/utils.ts");a("./src/index.css"),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(i.b)(),Object(i.c)(),n.a.render(s.a.createElement(l.a,null),document.querySelector("#root"))},"./src/lib/convert-image.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return v}));var r,s=a("./node_modules/image-type/index.js"),o=a.n(s),n=a("./node_modules/p-queue/dist/index.js"),l=a.n(n),i=a("./node_modules/p-wait-for/index.js"),c=a.n(i),d=a("./node_modules/webp-hero/dist/index.js"),u=a("./node_modules/webp-hero/libwebp/dist/webp.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const m=new u.a;m.Module.doNotCaptureKeyboard=!0;const b=new d.a({webp:m,webpSupport:Object(d.c)(),detectWebpImage:d.b}),f=Object(d.c)(),p=new l.a({concurrency:1});function g(e){const t=o()(e);if(!t)throw new Error("[getImageMimeType] Unable to determine MIME type of image.");return t.mime}function h(e){let t="";for(const a of e)t+=String.fromCharCode(a);return btoa(t)}async function v(e){const t=g(e),a=await f;return"image/webp"!==t||a?`data:${t};base64,${h(e)}`:p.add(async()=>{try{return await c()(()=>!1===b.busy),await b.decode(e)}catch(e){throw console.error("[convertImage] Image conversion failed: "+e.message),e}})}var k,y;(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(m,"webp","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(b,"webpConverter","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(f,"hasWebpSupportPromise","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(p,"imageConversionQueue","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(g,"getImageMimeType","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(h,"uInt8ToBase64","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(v,"convertImage","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/error.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return ErrorWithCode}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class ErrorWithCode extends Error{constructor(e,t){super(t),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"code",void 0),this.code=null!=e?e:"UNKNOWN"}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(ErrorWithCode,"from",(e,t)=>{const a=new ErrorWithCode(e,t.message);return a.stack=t.stack,a}),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(ErrorWithCode,"ErrorWithCode","/home/travis/build/signalstickers/signalstickers/src/lib/error.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/lib/search/constants.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return b}));var r,s=a("./node_modules/@babel/runtime/helpers/inherits.js"),o=a.n(s),n=(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),a("./node_modules/@babel/runtime/helpers/wrapNativeSuper.js")),l=a.n(n);function i(e,t){i=function(e,t){return new n(e,void 0,t)};var a=l()(RegExp),r=RegExp.prototype,s=new WeakMap;function n(e,t,r){var o=a.call(this,e,t);return s.set(o,r||s.get(e)),o}function c(e,t){var a=s.get(t);return Object.keys(a).reduce((function(t,r){return t[r]=e[a[r]],t}),Object.create(null))}return o()(n,a),n.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=c(t,this)),t},n.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var a=s.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+a[t]})))}if("function"==typeof t){var o=this;return r[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(c(e,o)),t.apply(this,e)}))}return r[Symbol.replace].call(this,e,t)},i.apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c={includeScore:!0,ignoreLocation:!0,minMatchCharLength:2,shouldSort:!0,threshold:0},d=.05,u=Symbol("GENERAL"),m=i(/([\0-\x08\x0E-\x1F!#-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]+):"([\0-!#-9;-\uFFFF]+)"/g,{attribute:1,query:2}),b=i(/([\0-\x08\x0E-\x1F!#-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]+):([\0-\x08\x0E-\x1F!#-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]+)/g,{attribute:1,query:2});var f,p;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(c,"BASE_CONFIG","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(d,"MAX_SCORE","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(u,"GENERAL_SEARCHER","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(m,"QUOTED_EXPRESSION_PATTERN","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(b,"UNQUOTED_EXPRESSION_PATTERN","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/search/index.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return H}));var r,s=a("./node_modules/fuse.js/dist/fuse.esm.js"),o=a("./node_modules/ramda/es/path.js"),n=a("./node_modules/ramda/es/split.js"),l=a("./node_modules/ramda/es/type.js"),i=a("./node_modules/ramda/es/compose.js"),c=a("./node_modules/ramda/es/filter.js"),d=a("./node_modules/ramda/es/gte.js"),u=a("./node_modules/ramda/es/propOr.js"),m=a("./node_modules/ramda/es/uniqBy.js"),b=a("./node_modules/ramda/es/forEach.js"),f=a("./node_modules/ramda/es/toPairs.js"),p=a("./node_modules/ramda/es/values.js"),g=a("./node_modules/ramda/es/forEachObjIndexed.js"),h=a("./node_modules/ramda/es/join.js"),v=a("./node_modules/ramda/es/prepend.js"),k=a("./node_modules/ramda/es/memoizeWith.js"),y=a("./node_modules/ramda/es/identity.js"),_=a("./node_modules/ramda/es/innerJoin.js"),L=a("./src/lib/search/constants.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var x,E;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function H(e){const t=new Map,a=(e,t)=>{const a=o.a(Array.isArray(t)?t:n.a(".",t),e),r=l.a(a);switch(r){case"String":return String(a);case"Array":return a;case"Boolean":case"Number":return String(a);case"Null":case"Undefined":return"false";default:throw new Error(`[Search::getFn] Unable to parse value of type "${r}" at path "${String(t)}".`)}},r=e=>{let a=e;const r=[];return b.a(e=>{0!==a.length&&b.a(e=>{if(!e.groups)return;const s=e.groups.attribute.trim(),o=e.groups.query.trim();t.has(s)&&(a=a.replace(e[0],"").trim(),r.push({[s]:o}))},[...a.matchAll(e)])},[L.e,L.d]),{query:a.trim(),attributeQueries:r}},x=k.a(y.a,a=>{let s=[];const{query:o,attributeQueries:n}=r(a);if(b.a(g.a((a,r)=>{if(!a)return;const o=t.get(r);if(!o)return;const n=o.search(a);s=0===s.length?n:_.a((t,a)=>e.identity(t.item)===e.identity(a.item),s,n)}),null!=n?n:[]),o){const a=t.get(L.b);if(!a)throw new Error("[Search] Unable to find the generic searcher.");{const t=a.search(o);s=0===s.length?t:_.a((t,a)=>e.identity(t.item)===e.identity(a.item),s,t)}}return(t=>i.a(c.a(i.a(d.a(L.c),u.a(void 0,"score"))),m.a(t=>e.identity(t.item)))(t))(s)});var E,H;return E=e.collection,b.a(([e,r])=>{t.set(e,new s.a(E,{...L.a,getFn:a,keys:[r]}))},f.a(null!==(H=e.keys)&&void 0!==H?H:[])),t.set(L.b,new s.a(E,{...L.a,getFn:a,keys:p.a(e.keys)})),{search:x,parseQueryString:r,buildQueryString:e=>{var a;const r=[];return b.a(g.a((e,a)=>{if(!t.has(a))throw new Error(`[Search::buildQueryString] Unknown attribute: "${a}".`);const s=e.split(/\s+/g).length>1?`"${e}"`:e;r.push(`${a}:${s}`)}),null!==(a=e.attributeQueries)&&void 0!==a?a:[]),h.a(" ",v.a(e.query,r)).trim()}}}(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&x.register(H,"SearchFactory","/home/travis/build/signalstickers/signalstickers/src/lib/search/index.ts"),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/stickers.ts":function(e,t,a){"use strict";(function(e){a.d(t,"d",(function(){return v})),a.d(t,"c",(function(){return k})),a.d(t,"a",(function(){return y}));var r=a("./node_modules/@signalstickers/stickers-client/dist/browser.js");a.d(t,"b",(function(){return r.getEmojiForSticker}));var s,o=a("./node_modules/axios/index.js"),n=a.n(o),l=a("./node_modules/localforage/dist/localforage.js"),i=a.n(l),c=a("./node_modules/ramda/es/prop.js"),d=a("./node_modules/ramda/es/find.js"),u=a("./node_modules/ramda/es/pathEq.js"),m=a("./src/lib/convert-image.ts"),b=a("./src/lib/error.ts"),f=a("./src/lib/utils.ts");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;let p;const g=new Map,h=i.a.createInstance({name:"Signal Stickers",storeName:"Image Cache"});async function v(){return p||(p=n.a.request({method:"GET",url:"stickerData.json"}).then(c.a("data"))),p}async function k(e,t){const a=t?`${e}-${t}`:e;try{if(!g.has(a)){var s;const o=await v(),n=d.a(u.a(["meta","id"],e),o),l=null!==(s=null==n?void 0:n.meta.key)&&void 0!==s?s:t;if(!l)throw new b.a("NO_KEY_PROVIDED",`No key provided for unlisted pack: ${e}.`);const i=n?{...n.meta,unlisted:!1}:{id:e,key:l,unlisted:!0},c={meta:i,manifest:await Object(r.getStickerPackManifest)(e,l)};g.set(a,c)}return g.get(a)}catch(e){if(e.isAxiosError&&403===e.response.status)throw new b.a("MANIFEST_DECRYPT","[getStickerPack] "+e.stack);throw new b.a(e.code,"[getStickerPack] "+e.stack)}}async function y(e,t,a){let s="";try{const o=`${e}-${a}`;if(!await h.getItem(o)){const n=await Object(r.getStickerInPack)(e,t,a);return s=await Object(m.a)(n),await h.setItem(o,s),s}return await h.getItem(o)}catch(e){if(!Object(f.a)(e))throw new Error("[getConvertedStickerInPack] Error getting sticker: "+e.message)}return s}var _,L;(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(p,"stickerPackDirectoryPromise","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(g,"stickerPackCache","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(h,"stickerImageCache","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(v,"getStickerPackDirectory","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(k,"getStickerPack","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(y,"getConvertedStickerInPack","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/utils.ts":function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m}));a("./node_modules/bytes/index.js");var r,s=a("./node_modules/ramda/es/find.js"),o=a("./node_modules/ramda/es/test.js"),n=a("./src/etc/constants.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var l,i;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;async function c(){}function d(e,t="min"){const a=n.a[e];if(void 0===a)throw new Error("Invalid breakpoint: "+e);return`(${t}-width: ${"min"===t?a:a-1}px)`}function u(){try{navigator.sendBeacon("https://ping.signalstickers.com/ping","")}catch(e){console.log(e+". No worries, it's okay!")}}function m(e){const t=[/the quota has been exceeded/gi];return!!(null==e?void 0:e.message)&&Boolean(s.a(t=>o.a(t,e.message),t))}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"printStorageUsage","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),l.register(d,"bp","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),l.register(u,"sendBeacon","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),l.register(m,"isStorageUnavailableError","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},0:function(e,t,a){a("./node_modules/core-js/stable/index.js"),a("./node_modules/regenerator-runtime/runtime.js"),a("./node_modules/react-hot-loader/patch.js"),e.exports=a("./src/index.tsx")}});
//# sourceMappingURL=app-bc26b08d694ddf87fc9b.js.map