"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{81354:function(e,t,n){n.r(t),n.d(t,{default:function(){return Jt}});var r=n(15009),a=n.n(r),i=n(99289),l=n.n(i),o=n(5574),s=n.n(o),c=n(62435),u=n(4480),d=n(97857),v=n.n(d),f=n(74752);var m=function(e,t,n,r){for(var a=-1,i=null==e?0:e.length;++a<i;){var l=e[a];t(r,l,n(l),e)}return r},h=n(61395),p=n(17179);var _=function(e,t){return e&&(0,h.Z)(e,t,p.Z)},x=n(50585);var g=function(e,t){return function(n,r){if(null==n)return n;if(!(0,x.Z)(n))return e(n,r);for(var a=n.length,i=t?a:-1,l=Object(n);(t?i--:++i<a)&&!1!==r(l[i],i,l););return n}}(_);var j=function(e,t,n,r){return g(e,(function(e,a,i){t(r,e,n(e),i)})),r},b=n(31667),y=n(37834);var Z=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var w=function(e){return this.__data__.has(e)};function N(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new y.Z;++t<n;)this.add(e[t])}N.prototype.add=N.prototype.push=Z,N.prototype.has=w;var C=N;var E=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var O=function(e,t){return e.has(t)};var I=function(e,t,n,r,a,i){var l=1&n,o=e.length,s=t.length;if(o!=s&&!(l&&s>o))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,v=!0,f=2&n?new C:void 0;for(i.set(e,t),i.set(t,e);++d<o;){var m=e[d],h=t[d];if(r)var p=l?r(h,m,d,t,e,i):r(m,h,d,e,t,i);if(void 0!==p){if(p)continue;v=!1;break}if(f){if(!E(t,(function(e,t){if(!O(f,t)&&(m===e||a(m,e,n,r,i)))return f.push(t)}))){v=!1;break}}else if(m!==h&&!a(m,h,n,r,i)){v=!1;break}}return i.delete(e),i.delete(t),v},k=n(17685),S=n(84073),U=n(79651);var T=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var M=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},H=k.Z?k.Z.prototype:void 0,V=H?H.valueOf:void 0;var A=function(e,t,n,r,a,i,l){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new S.Z(e),new S.Z(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,U.Z)(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var o=T;case"[object Set]":var s=1&r;if(o||(o=M),e.size!=t.size&&!s)return!1;var c=l.get(e);if(c)return c==t;r|=2,l.set(e,t);var u=I(o(e),o(t),r,a,i,l);return l.delete(e),u;case"[object Symbol]":if(V)return V.call(e)==V.call(t)}return!1};var R=function(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e},F=n(27771);var P=function(e,t,n){var r=t(e);return(0,F.Z)(e)?r:R(r,n(e))};var q=function(e,t){for(var n=-1,r=null==e?0:e.length,a=0,i=[];++n<r;){var l=e[n];t(l,n,e)&&(i[a++]=l)}return i};var B=function(){return[]},L=Object.prototype.propertyIsEnumerable,D=Object.getOwnPropertySymbols,z=D?function(e){return null==e?[]:(e=Object(e),q(D(e),(function(t){return L.call(e,t)})))}:B;var G=function(e){return P(e,p.Z,z)},$=Object.prototype.hasOwnProperty;var J=function(e,t,n,r,a,i){var l=1&n,o=G(e),s=o.length;if(s!=G(t).length&&!l)return!1;for(var c=s;c--;){var u=o[c];if(!(l?u in t:$.call(t,u)))return!1}var d=i.get(e),v=i.get(t);if(d&&v)return d==t&&v==e;var f=!0;i.set(e,t),i.set(t,e);for(var m=l;++c<s;){var h=e[u=o[c]],p=t[u];if(r)var _=l?r(p,h,u,t,e,i):r(h,p,u,e,t,i);if(!(void 0===_?h===p||a(h,p,n,r,i):_)){f=!1;break}m||(m="constructor"==u)}if(f&&!m){var x=e.constructor,g=t.constructor;x==g||!("constructor"in e)||!("constructor"in t)||"function"==typeof x&&x instanceof x&&"function"==typeof g&&g instanceof g||(f=!1)}return i.delete(e),i.delete(t),f},Q=n(23353),X=n(77008),Y=n(70908),W="[object Arguments]",K="[object Array]",ee="[object Object]",te=Object.prototype.hasOwnProperty;var ne=function(e,t,n,r,a,i){var l=(0,F.Z)(e),o=(0,F.Z)(t),s=l?K:(0,Q.Z)(e),c=o?K:(0,Q.Z)(t),u=(s=s==W?ee:s)==ee,d=(c=c==W?ee:c)==ee,v=s==c;if(v&&(0,X.Z)(e)){if(!(0,X.Z)(t))return!1;l=!0,u=!1}if(v&&!u)return i||(i=new b.Z),l||(0,Y.Z)(e)?I(e,t,n,r,a,i):A(e,t,s,n,r,a,i);if(!(1&n)){var f=u&&te.call(e,"__wrapped__"),m=d&&te.call(t,"__wrapped__");if(f||m){var h=f?e.value():e,p=m?t.value():t;return i||(i=new b.Z),a(h,p,n,r,i)}}return!!v&&(i||(i=new b.Z),J(e,t,n,r,a,i))},re=n(18533);var ae=function e(t,n,r,a,i){return t===n||(null==t||null==n||!(0,re.Z)(t)&&!(0,re.Z)(n)?t!=t&&n!=n:ne(t,n,r,a,e,i))};var ie=function(e,t,n,r){var a=n.length,i=a,l=!r;if(null==e)return!i;for(e=Object(e);a--;){var o=n[a];if(l&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++a<i;){var s=(o=n[a])[0],c=e[s],u=o[1];if(l&&o[2]){if(void 0===c&&!(s in e))return!1}else{var d=new b.Z;if(r)var v=r(c,u,s,e,t,d);if(!(void 0===v?ae(u,c,3,r,d):v))return!1}}return!0},le=n(77226);var oe=function(e){return e==e&&!(0,le.Z)(e)};var se=function(e){for(var t=(0,p.Z)(e),n=t.length;n--;){var r=t[n],a=e[r];t[n]=[r,a,oe(a)]}return t};var ce=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}};var ue=function(e){var t=se(e);return 1==t.length&&t[0][2]?ce(t[0][0],t[0][1]):function(n){return n===e||ie(n,e,t)}},de=n(16423);var ve=function(e,t){return null!=e&&t in Object(e)},fe=n(10134),me=n(29169),he=n(56009),pe=n(1656),_e=n(62281);var xe=function(e,t,n){for(var r=-1,a=(t=(0,fe.Z)(t,e)).length,i=!1;++r<a;){var l=(0,_e.Z)(t[r]);if(!(i=null!=e&&n(e,l)))break;e=e[l]}return i||++r!=a?i:!!(a=null==e?0:e.length)&&(0,pe.Z)(a)&&(0,he.Z)(l,a)&&((0,F.Z)(e)||(0,me.Z)(e))};var ge=function(e,t){return null!=e&&xe(e,t,ve)},je=n(99365);var be=function(e,t){return(0,je.Z)(e)&&oe(t)?ce((0,_e.Z)(e),t):function(n){var r=(0,de.Z)(n,e);return void 0===r&&r===t?ge(n,e):ae(t,r,3)}},ye=n(69203);var Ze=function(e){return function(t){return null==t?void 0:t[e]}},we=n(13317);var Ne=function(e){return function(t){return(0,we.Z)(t,e)}};var Ce=function(e){return(0,je.Z)(e)?Ze((0,_e.Z)(e)):Ne(e)};var Ee=function(e){return"function"==typeof e?e:null==e?ye.Z:"object"==typeof e?(0,F.Z)(e)?be(e[0],e[1]):ue(e):Ce(e)};var Oe=function(e,t){return function(n,r){var a=(0,F.Z)(n)?m:j,i=t?t():{};return a(n,e,Ee(r,2),i)}},Ie=Object.prototype.hasOwnProperty,ke=Oe((function(e,t,n){Ie.call(e,n)?e[n].push(t):(0,f.Z)(e,n,[t])})),Se=n(24069),Ue=n(28722),Te=function(){var e=(new Date).getTime(),t=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:t}},Me=function(){var e=l()(a()().mark((function e(t){var n,r,i,l,o,s,c,u,d;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Te(),n.to,r=n.from,i='\n  query MyQuery {\n    summaries24h: summaries(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n    }\n    summariesTotal: summaries(where:{period: "total"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n    }\n  }\n '),l=(0,Ue.x7)(t),e.next=5,(0,Ue.Dw)(l,i);case 5:return o=e.sent,s=o.summariesTotal,c=o.summaries24h,u=He(c||[]),d=He(s),e.abrupt("return",v()({openInterestTotal:null==d?void 0:d.openInterest,tradesTotal:null==d?void 0:d.trades,tradingVolumeTotal:null==d?void 0:d.tradingVolume,uniqueUsersTotal:null==d?void 0:d.uniqueUsers},u));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(e){var t=null==e?void 0:e.reduce((function(e,t){var n;return e.openInterest=e.openInterest.add((0,Se._b)(t.openInterest)),e.trades+=t.trades,e.tradingVolume=e.tradingVolume.add((0,Se._b)(t.tradingVolume)),e.uniqueUsers+=null!==(n=null==t?void 0:t.uniqueUsers)&&void 0!==n?n:0,e}),{openInterest:(0,Se._b)(0),trades:0,tradingVolume:(0,Se._b)(0),uniqueUsers:0});return t?{openInterest:(0,Se.dN)(null==t?void 0:t.openInterest,18),trades:null==t?void 0:t.trades,tradingVolume:(0,Se.dN)(null==t?void 0:t.tradingVolume,18),uniqueUsers:null==t?void 0:t.uniqueUsers}:t},Ve=function(){var e=l()(a()().mark((function e(t,n){var r,i,l,o,s,c,u,d,f,m,h;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Te(),r.to,i=r.from,l='marketInfos(where:{id_gte:"hourly:'.concat(i,'", period: "hourly"})\n  {\n  openInterest\n  period\n  trades\n  tradingVolume\n  market\n  id'),o="query MyQuery {\n    ".concat(l,"\n  }\n}"),s=(0,Ue.x7)(n),e.next=6,(0,Ue.Dw)(s,o);case 6:return c=e.sent,u=c.marketInfos,d=ke(u,"market"),f={name:"ETH",key:"Ethereum",coinName:"ETH",logo:"ETH"},m={ETH:"Ethereum",BTC:"Bitcoin"},h=null==t?void 0:t.map((function(e){var t=e.name.split("/")[0]||"";return v()(v()(v()({},f),He(d[e.address.toLowerCase()])),{},{name:t,coinName:t,logo:e.name,marketName:m[t]})})),e.abrupt("return",h||[]);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ae=n(28469),Re=n(37432),Fe=n(98330),Pe=n(22537),qe=n(239),Be=n(41519),Le=(0,u.cn)({key:"marketInfosAtom",default:[],effects_UNSTABLE:[Be.I]}),De=(0,u.cn)({key:"bannerInfoAtom",default:void 0,effects_UNSTABLE:[Be.I]}),ze="overview___Eeiei",Ge="header____Yrjj",$e="title___i6w1f",Je="welcome___Onf4q",Qe=Object.defineProperty,Xe=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,Ke=(e,t,n)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const et=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))Ye.call(t,n)&&Ke(e,n,t[n]);if(Xe)for(var n of Xe(t))We.call(t,n)&&Ke(e,n,t[n]);return e})({width:200,height:200,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M100 45H42.203C18.895 45 0 24.853 0 0h57.797C81.106 0 100 20.148 100 45ZM42.203 50H100c0 24.853-18.895 45-42.203 45H0c0-24.852 18.895-45 42.203-45Zm57.797 45h57.798C181.105 95 200 74.852 200 50h-57.798c-23.307 0-42.202 20.148-42.202 45ZM200 45h-57.798C118.895 45 100 24.853 100 0h57.798C181.105 0 200 20.148 200 45ZM42.202 155C18.895 155 0 175.147 0 200h57.797C81.106 200 100 179.852 100 155H42.203ZM100 150.001H42.203c-23.308 0-42.203-20.148-42.203-45h57.797c23.308 0 42.203 20.147 42.203 45ZM100 200h57.798C181.105 200 200 179.852 200 155h-57.798C118.895 155 100 175.147 100 200Zm0-94.999h57.798c23.307 0 42.202 20.147 42.202 45h-57.798c-23.307 0-42.202-20.148-42.202-45Z",fill:"url(#banner_logo_svg__a)",style:{mixBlendMode:"multiply"},opacity:.2}),c.createElement("defs",null,c.createElement("linearGradient",{id:"banner_logo_svg__a",x1:0,y1:-12.5,x2:200,y2:200,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"}))));var tt=Object.defineProperty,nt=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,it=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const lt=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))rt.call(t,n)&&it(e,n,t[n]);if(nt)for(var n of nt(t))at.call(t,n)&&it(e,n,t[n]);return e})({width:100,height:100,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50 22.5H21.101C9.448 22.5 0 12.426 0 0h28.899C40.553 0 50 10.074 50 22.5ZM21.101 25H50c0 12.426-9.447 22.5-21.101 22.5H0C0 35.073 9.447 25 21.101 25ZM50 47.5h28.899C90.552 47.5 100 37.426 100 25H71.101C59.447 25 50 35.073 50 47.5Zm50-25H71.101C59.447 22.5 50 12.426 50 0h28.899C90.552 0 100 10.074 100 22.5Zm-78.899 55C9.448 77.5 0 87.574 0 100h28.899C40.553 100 50 89.926 50 77.5H21.101ZM50 75H21.101C9.448 75 0 64.927 0 52.5h28.899C40.553 52.5 50 62.574 50 75Zm0 25h28.899C90.552 100 100 89.926 100 77.5H71.101C59.447 77.5 50 87.574 50 100Zm0-47.5h28.899C90.552 52.5 100 62.574 100 75H71.101C59.447 75 50 64.927 50 52.5Z",fill:"#B5884A",opacity:.2}));var ot=n(74595),st=n(61895),ct="banner___oOBkY",ut="logo___lRdUn",dt="statList___DgXJu",vt="statInfo___rRaIr",ft="title___qD2Se",mt="amount___oAiPx",ht="desc___kJh0S",pt=n(86074),_t=function(e){var t=e.title,n=e.desc,r=e.amount,a=e.text;return(0,pt.jsxs)("div",{className:vt,children:[(0,pt.jsx)("div",{className:ft,children:t}),r?(0,pt.jsxs)("div",{className:mt,children:["$".concat(r)," "]}):(0,pt.jsx)(pt.Fragment,{}),a?(0,pt.jsx)("div",{className:mt,children:a}):(0,pt.jsx)(pt.Fragment,{}),(0,pt.jsxs)("div",{className:ht,children:[n," "]})]})},xt=function(e){var t,n,r,a=e.info,i=(0,Fe.Z)().t,l=ot.I.useContainer().isMobile;return(0,pt.jsxs)("div",{className:ct,children:[l?(0,pt.jsx)(lt,{className:ut}):(0,pt.jsx)(et,{className:ut}),(0,pt.jsxs)("div",{className:dt,children:[(0,pt.jsx)(_t,{title:i("Trading Volume"),amount:(0,st.dp)(null==a?void 0:a.tradingVolumeTotal).display({prefix:""}),desc:"".concat((0,st.dp)(null==a?void 0:a.tradingVolume).display({prefix:"+$"})," ").concat(i("in the last 24h"))}),(0,pt.jsx)(_t,{title:i("Trades"),text:null!==(t=null==a||null===(n=a.tradesTotal)||void 0===n?void 0:n.toString())&&void 0!==t?t:"-",desc:"+".concat(null!==(r=null==a?void 0:a.trades)&&void 0!==r?r:"-"," ").concat(i("in the last 24h"))}),(0,pt.jsx)(_t,{title:i("Open Interest"),amount:(0,st.dp)(null==a?void 0:a.openInterestTotal).display({prefix:""}),desc:"".concat((0,st.dp)(null==a?void 0:a.openInterest).display({prefix:"+$"})," ").concat(i("in the last 24h"))})]})]})},gt=n(75081),jt=n(78621),bt=n(94320),yt=n(48268),Zt=n(67390),wt=n(36493),Nt="table___J3lm8",Ct="marketSituationPanel___l_1QO",Et="loadingContainer___dHRWS",Ot="coinNameBox___gX9IN",It="coinName___YSs6X",kt="marketName___aKkCt",St="up___xF4SL",Ut="down___M1zxR",Tt=function(e){var t=ot.I.useContainer().isMobile,n=(0,u.sJ)(qe.O7),r=e.marketInfo,a=(0,Fe.Z)().t,i=[{title:a("Market"),dataIndex:"coinName",key:"coinName",render:function(e,t){var n=Zt.c[t.logo];return(0,pt.jsxs)("div",{className:Ot,children:[(0,pt.jsx)(n,{}),(0,pt.jsx)("span",{className:It,children:t.coinName}),(0,pt.jsx)("span",{className:kt,children:t.marketName})]})}},{title:a("indexPrice"),render:function(e,t){var r,a,i=null===(r=n[null===(a=(0,wt.do)(t.name))||void 0===a?void 0:a.toLowerCase()])||void 0===r?void 0:r.indexPrice;return(0,pt.jsx)(yt.Z,{value:i,prefix:"$"})}},{title:a("24h Change"),render:function(e,t){var r,a,i,l=null==n||null===(r=n[null===(i=(0,wt.do)(t.name))||void 0===i?void 0:i.toLowerCase()])||void 0===r||null===(a=r["24ChangeRate"])||void 0===a?void 0:a.toFixed(2);return l?+l>=0?(0,pt.jsxs)("span",{className:St,children:["+",l,"%"]}):(0,pt.jsxs)("span",{className:Ut,children:[l,"%"]}):"-"}},{title:a("24h Trades"),dataIndex:"trades",key:"trades",render:function(e){return(0,pt.jsx)(pt.Fragment,{children:null!=e?e:"-"})}},{title:a("24h Volume"),dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,pt.jsx)(yt.Z,{value:e,prefix:"$"})}},{title:a("Open Interest"),dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,pt.jsx)(yt.Z,{value:e,prefix:"$"})}}];return(0,pt.jsx)("div",{className:Ct,children:r.length?(0,pt.jsx)(bt.Z,{emptyText:a("No data"),className:Nt,columns:t?i.slice(0,3):i,dataSource:r,size:"small",pagination:!1,bordered:!1,onRow:function(e){return{onClick:function(){return jt.m8.push("/trade?symbol=".concat(e.name))}}}}):(0,pt.jsx)(gt.Z,{className:Et})})},Mt=n(71230),Ht=n(15746),Vt=n(79369),At=n(87755),Rt=Object.defineProperty,Ft=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,Bt=(e,t,n)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Lt=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))Pt.call(t,n)&&Bt(e,n,t[n]);if(Ft)for(var n of Ft(t))qt.call(t,n)&&Bt(e,n,t[n]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z",fill:"url(#overview_statistical_icon3_svg__a)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.437 18.44 5.056-1.85c.285-.105.596-.118.89-.04l.124.04 5.055 1.849c.257.094.48.256.645.47.166.212.265.466.288.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.23 6.23 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.355-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.545 3.545 0 0 1-1.381-1.285 3.715 3.715 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.979-.507.084-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.044.016h2.964l-.012-.006Z",fill:"url(#overview_statistical_icon3_svg__b)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01c-.458.212-.85.548-1.127.975a2.633 2.633 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.358 2.358 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.473 7.473 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.081-1.859-.177-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z",fill:"url(#overview_statistical_icon3_svg__c)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.383 16.55a1.479 1.479 0 0 0-.89.04l-5.056 1.85-.11.045a1.433 1.433 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.23 6.23 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.389 1.389 0 0 0-.288-.734 1.442 1.442 0 0 0-.645-.469l-5.055-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.826.826 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z",fill:"#F2E6CF"}),c.createElement("defs",null,c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__a",x1:4.5,y1:4.813,x2:39.07,y2:45.741,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__b",x1:7.5,y1:8.313,x2:33.652,y2:42.273,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__c",x1:7.5,y1:8.313,x2:33.652,y2:42.273,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#F2E6CF"}),c.createElement("stop",{offset:1,stopColor:"#B5884A"}))));var Dt=n(77438),zt=n(96714),Gt={statisticalDataGrid:"statisticalDataGrid___eZhQf",item:"item___bDuaw",btn:"btn___iPiGO",primary:"primary___pCrr1",text:"text___zIh8r",head:"head___phrnC",content:"content___zlm0M",footer:"footer___bvtie",icon:"icon___tWS5N"},$t=function(e){var t,n=e.info,r=(0,Fe.Z)().t;return(0,pt.jsxs)(Mt.Z,{className:Gt.StatisticalDataGrid,gutter:24,children:[(0,pt.jsx)(Ht.Z,{xs:24,md:12,lg:8,className:Gt.gutterRow,children:(0,pt.jsxs)("div",{className:Gt.item,children:[(0,pt.jsxs)("div",{className:Gt.head,children:[(0,pt.jsx)("div",{className:Gt.text,children:r("Up to 20%")}),(0,pt.jsx)(Vt.r,{className:Gt.icon})]}),(0,pt.jsx)("div",{className:Gt.content,children:r("Stake USDC and earn rewadrs from fees generated on the BLEX.")}),(0,pt.jsx)("div",{className:Gt.footer,children:(0,pt.jsx)(Dt.Z,{className:Gt.btn,type:"primary",size:"middle",href:"/rewards",children:r("Earn")})})]})}),(0,pt.jsx)(Ht.Z,{xs:24,md:12,lg:8,children:(0,pt.jsxs)("div",{className:Gt.item,children:[(0,pt.jsxs)("div",{className:Gt.head,children:[(0,pt.jsx)("div",{className:Gt.text,children:"<0.10%"}),(0,pt.jsx)(At.r,{className:Gt.icon})]}),(0,pt.jsx)("div",{className:Gt.content,children:r("Lowest transaction fees.")}),(0,pt.jsx)("div",{className:Gt.footer,children:(0,pt.jsx)(Dt.Z,{className:Gt.btn,type:"c20",size:"middle",href:Pe.Ew.GitbookFeeStructure,children:r("Learn More")})})]})}),(0,pt.jsx)(Ht.Z,{xs:24,md:12,lg:8,children:(0,pt.jsxs)("div",{className:Gt.item,children:[(0,pt.jsxs)("div",{className:Gt.head,children:[(0,pt.jsx)("div",{className:Gt.text,children:null!=n&&n.uniqueUsersTotal?"".concat(null==n?void 0:n.uniqueUsersTotal,"+"):zt.P}),(0,pt.jsx)(Lt,{className:Gt.icon})]}),(0,pt.jsx)("div",{className:Gt.content,children:r("trustedByUser",{uniqueUsersTotal:(null==n||null===(t=n.uniqueUsersTotal)||void 0===t?void 0:t.toString())||""})}),(0,pt.jsx)("div",{className:Gt.footer,children:(0,pt.jsx)(Dt.Z,{className:Gt.btn,type:"c20",size:"middle",href:"#",children:r("Learn More")})})]})})]})},Jt=function(){var e=(0,Fe.Z)().t,t=(0,u.FV)(De),n=s()(t,2),r=n[0],i=n[1],o=(0,Re.x)().chainId,d=(0,u.FV)(Le),v=s()(d,2),f=v[0],m=v[1],h=(0,u.sJ)(qe.tr),p=function(){var e=l()(a()().mark((function e(){var t,n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Me(o);case 3:return t=e.sent,e.next=6,Ve(h,o);case 6:n=e.sent,i(t),m(n),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){p();var e=setInterval(p,3e4);return function(){return clearInterval(e)}}),[o,h]),(0,pt.jsx)(pt.Fragment,{children:(0,pt.jsxs)("div",{className:ze,children:[(0,pt.jsxs)("div",{className:Ge,children:[(0,pt.jsx)("div",{className:$e,children:e("Hello!")}),(0,pt.jsx)("div",{className:Je,children:e("welcomeTo",{type:Pe.j$})})]}),(0,pt.jsx)(xt,{info:r}),(0,pt.jsx)(Tt,{marketInfo:f,markets:h}),(0,pt.jsx)($t,{info:r}),(0,pt.jsx)(Ae.a,{})]})})}},15746:function(e,t,n){var r=n(21584);t.Z=r.Z},71230:function(e,t,n){var r=n(92820);t.Z=r.Z}}]);