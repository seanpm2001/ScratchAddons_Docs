"use strict";(self.webpackChunkdocusaurus_2_classic_template=self.webpackChunkdocusaurus_2_classic_template||[]).push([[7107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"addon.account",h1_title:"`addon.account`",description:"Allows addons to execute actions in the currently logged in Scratch user.",weight:4},l=void 0,i={unversionedId:"reference/addon-api/addon.account",id:"reference/addon-api/addon.account",title:"addon.account",description:"Allows addons to execute actions in the currently logged in Scratch user.",source:"@site/develop/reference/addon-api/addon.account.md",sourceDirName:"reference/addon-api",slug:"/reference/addon-api/addon.account",permalink:"/develop/reference/addon-api/addon.account",draft:!1,tags:[],version:"current",frontMatter:{title:"addon.account",h1_title:"`addon.account`",description:"Allows addons to execute actions in the currently logged in Scratch user.",weight:4},sidebar:"tutorialSidebar",previous:{title:"Addon API",permalink:"/develop/reference/addon-api/"},next:{title:"addon.auth",permalink:"/develop/reference/addon-api/addon.auth"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>getMsgCount</code>",id:"getmsgcount",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Available in userscripts"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Available in popup scripts"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Required manifest permissions"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Allows addons to execute actions in the currently logged in Scratch user."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"getmsgcount"},(0,a.kt)("inlineCode",{parentName:"h3"},"getMsgCount")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Return value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Promise<Number | null>")))),(0,a.kt)("p",null,"Gets the unread message count of the currently logged in user.",(0,a.kt)("br",{parentName:"p"}),"\n","The promise will resolve to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"addon.auth.isLoggedIn")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."))}p.isMDXComponent=!0}}]);