(self.webpackChunk=self.webpackChunk||[]).push([[334],{87943:function(t,e,n){"use strict";n.d(e,{v:function(){return G},T:function(){return k}});var r=n(15009),i=n.n(r),c=n(99289),a=n.n(c),s=n(5574),u=n.n(s),o=n(62435),I=n(74855),l=n.n(I),d=n(78621),A=n(61120),N=n.n(A),x=n(69499),y=n(44987),f=n.n(y),j=n(42234),p=null;function g(){var t=(0,o.useState)(Boolean(p)),e=u()(t,2),n=e[0],r=e[1],c=(0,o.useState)(null),s=u()(c,2),I=s[0],l=s[1];function d(){return(d=a()(i()().mark((function t(){return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p){t.next=4;break}console.log("IPFS already started"),t.next=15;break;case 4:return t.prev=4,t.next=7,(0,j.Ue)();case 7:p=t.sent,t.next=15;break;case 10:t.prev=10,t.t0=t.catch(4),console.error("IPFS init error:",t.t0),p=null,l(t.t0);case 15:r(Boolean(p));case 16:case"end":return t.stop()}}),t,null,[[4,10]])})))).apply(this,arguments)}(0,o.useEffect)((function(){return function(){d.apply(this,arguments)}(),function(){p&&p.stop&&(p.stop().catch((function(t){return console.error(t)})),p=null,r(!1))}}),[]);var A=function(){var t=a()(i()().mark((function t(e){var n,r;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,p.add(e);case 4:return n=t.sent,r=n.cid,t.abrupt("return",r.toString());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=a()(i()().mark((function t(e){var n,r,c,a,s,u,o,I;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p){t.next=2;break}return t.abrupt("return");case 2:n=new TextDecoder,r="",c=!1,a=!1,t.prev=6,u=f()(p.cat(e));case 8:return t.next=10,u.next();case 10:if(!(c=!(o=t.sent).done)){t.next=16;break}I=o.value,r+=n.decode(I,{stream:!0});case 13:c=!1,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),a=!0,s=t.t0;case 22:if(t.prev=22,t.prev=23,!c||null==u.return){t.next=27;break}return t.next=27,u.return();case 27:if(t.prev=27,!a){t.next=30;break}throw s;case 30:return t.finish(27);case 31:return t.finish(22);case 32:return t.abrupt("return",r);case 33:case"end":return t.stop()}}),t,null,[[6,18,22,32],[23,,27,31]])})));return function(e){return t.apply(this,arguments)}}();return{ipfs:p,isIpfsReady:n,ipfsInitError:I,getFileFromIPFSByCid:N,saveFileToIPFS:A}}var h=n(71874),m={root:"root___TBxd2",btns:"btns___kyVLh",btn:"btn___yWR14",tweetBtn:"tweetBtn___HU3_w"},b=n(86074),k=function(t){var e=t.title,n=t.width,r=void 0===n?560:n,c=t.downloadName,s=void 0===c?"download":c,I=t.type,A=void 0===I?"jpeg":I,y=t.children,f=t.content,j=t.coin,p=(0,o.useState)(!1),k=u()(p,2),M=k[0],E=k[1],Q=(0,o.useRef)(null),L=g().saveFileToIPFS,C="Trade ".concat(j||"BTC"," and other top cryptocurrencies with up to 100x leverage directly from your wallet. https://dei.io."),T="Trade ".concat(j||"BTC"," and other top cryptocurrencies with up to 100x leverage directly from your wallet. @dei.io"),z=function(){var t=a()(i()().mark((function t(){var e;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Q.current){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,N()(Q.current);case 4:return e=t.sent,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=a()(i()().mark((function t(e){var n;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=document.createElement("a")).download="".concat(s,".").concat(A),n.href=e,n.click();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=a()(i()().mark((function t(){var e;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:R(e.toDataURL());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=a()(i()().mark((function t(){var e,n,r,c;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,new Promise((function(t,n){return e.toBlob((function(e){return t(e)}))}));case 7:if(n=t.sent){t.next=10;break}return t.abrupt("return");case 10:return t.next=12,L(n);case 12:r=t.sent,c="".concat("https://twitter.com/intent/tweet","?text=").concat(T,"&url=").concat("http://dei.io/share","?cid=").concat(r),window.open(c,"_blank");case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:m.sharePosterContainerRoot,onClick:function(){return E(!0)},children:y}),(0,b.jsxs)(x.Z,{title:e,width:r,visible:M,onClose:function(){return E(!1)},children:[(0,b.jsx)("div",{className:m.root,children:(0,b.jsx)("div",{ref:Q,children:f})}),(0,b.jsxs)("div",{className:m.btns,children:[(0,b.jsx)(l(),{text:C,onCopy:function(){return h.U.success("success")},children:(0,b.jsx)("div",{className:m.btn,children:(0,b.jsx)(d._H,{id:"Copy"})})}),(0,b.jsx)("div",{className:m.btn,onClick:v,children:(0,b.jsx)(d._H,{id:"Download"})}),(0,b.jsx)("div",{className:"tweet-link ".concat(m.btn," ").concat(m.tweetBtn),onClick:w,children:(0,b.jsx)(d._H,{id:"Twitter"})})]})]})]})},M=n(27484),E=n.n(M);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var Q="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwOS42ODggMTkzLjEyNWMwIDQ1LjczNi0zNy4wNzcgODIuODEzLTgyLjgxMyA4Mi44MTN2LTI0Ljg0NGMzMi4wMTUgMCA1Ny45NjktMjUuOTU0IDU3Ljk2OS01Ny45NjlzLTI1Ljk1NC01Ny45NjktNTcuOTY5LTU3Ljk2OS01Ny45NjkgMjUuOTU0LTU3Ljk2OSA1Ny45NjlINDQuMDYyYzAtNDUuNzM2IDM3LjA3Ny04Mi44MTMgODIuODEzLTgyLjgxMyA0NS43MzYgMCA4Mi44MTMgMzcuMDc3IDgyLjgxMyA4Mi44MTNaIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTAuMjA5IDIwOC4wMzFjLTMuMzg5IDI4LjM0NS0xNi4zMjQgNTMuNzU3LTM1LjQ5OCA3Mi45MzFsLTE4LjE1My0xOC4xNTNjMTQuNTEzLTE0LjUxMyAyNC41MjEtMzMuNTMyIDI3Ljc0NS01NC43NzhoMjUuOTA2Wm0uODg0LTE0LjM2NWE5Ny41NjMgOTcuNTYzIDAgMCAwIDAtMS4wODJ2MS4wODJaTTExMS45NjggNjkuNzkyYy0yOC4zNDQgMy4zOS01My43NTYgMTYuMzI1LTcyLjkyOSAzNS40OThsMTguMTUzIDE4LjE1M2MxNC41MTItMTQuNTEzIDMzLjUzLTI0LjUyIDU0Ljc3Ni0yNy43NDVWNjkuNzkyWiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUxLjE0NyAxOTMuMTI1YzAtNjguNjA0LTU1LjYxNC0xMjQuMjE5LTEyNC4yMTktMTI0LjIxOWgtLjA1M3YyNS42NzJoLjA1M2M1NC40MjYgMCA5OC41NDcgNDQuMTIxIDk4LjU0NyA5OC41NDdoMjUuNjcyWiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTI2Ljg3NSAyNy41YzkxLjQ3MiAwIDE2NS42MjUgNzQuMTUzIDE2NS42MjUgMTY1LjYyNWgtMjQuODQ0YzAtNzcuNzUxLTYzLjAzLTE0MC43ODEtMTQwLjc4MS0xNDAuNzgxVjI3LjVaIiBmaWxsPSJ1cmwoI2QpIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNDQuMDYzIiB5MT0iMTEwLjMxMyIgeDI9IjI0Ni44MDkiIHkyPSIxNjYuNTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIzOS4wMzkiIHkxPSI2OS43OTIiIHgyPSIyOTguNDY3IiB5Mj0iMTQyLjAxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzQ0VBQUEiLz48c3RvcCBvZmZzZXQ9Ii43NzEiIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjEyNi44NzUiIHkxPSI2OC45MDYiIHgyPSIyNzguOTkxIiB5Mj0iMTExLjA5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzQ0VBQUEiLz48c3RvcCBvZmZzZXQ9Ii43NzEiIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjEyNi44NzUiIHkxPSIyNy41IiB4Mj0iMzI5LjYyMSIgeTI9IjgzLjcwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzQ0VBQUEiLz48c3RvcCBvZmZzZXQ9Ii43NzEiIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",L="container___McnZW",C="header___S0978",T="hostText___zbA_i",z="startTime___H_JeH",R="referralCode___G4oUW",v="leftQrcode___OsXFz",w="rightInfo___CjlYw",B="rightInfoTitle___zetfL",D="highlight___RKLAK",O="mainLogo___men_w",Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return E()(t).format("YYYY/MM/DD HH:mm:ss")},G=function(t){var e=t.children,n=t.startTimestamp,r=void 0===n?0:n;return(0,b.jsxs)("div",{className:L,children:[(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)("img",{src:Q,alt:"logo",width:20,height:20}),(0,b.jsx)("span",{className:T,children:"Dei.io"}),r?(0,b.jsxs)("span",{className:z,children:["Share Time ",Z(r)]}):null]}),e,(0,b.jsxs)("div",{className:R,children:[(0,b.jsx)("img",{src:"data:image/png;base64,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",className:v,width:40,height:40,alt:"website qrcode"}),(0,b.jsxs)("div",{className:w,children:[(0,b.jsxs)("div",{className:B,children:[(0,b.jsxs)("span",{children:[(0,b.jsx)("span",{className:D,children:"De"}),"centralized"]}),(0,b.jsx)("span",{children:"Index Perpetual Exchange"})]}),(0,b.jsx)("span",{children:"https://Dei.io"})]})]}),(0,b.jsx)("div",{className:O,children:(0,b.jsx)("img",{src:Q,width:140,height:140})})]})}},9679:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(97857),i=n.n(r),c=n(92419),a=n(86074),s=function(t){return(0,a.jsx)(c.Z,i()(i()({},t),{},{getTooltipContainer:function(){return document.getElementById("root")}}))}},28722:function(t,e,n){"use strict";n.d(e,{Dw:function(){return N},Jx:function(){return l},x7:function(){return A}});var r,i=n(15009),c=n.n(i),a=n(99289),s=n.n(a),u=n(9783),o=n.n(u),I=n(13805);var l="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",d=(r={},o()(r,I.Qz,l),o()(r,I.bx,l),r),A=function(t){return d[t]||l},N=function(){var t=s()(c()().mark((function t(e,n){var r,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(t){console.log("err",t)}));case 2:return r=t.sent,t.next=5,null==r?void 0:r.json();case 5:return i=t.sent,t.abrupt("return",(null==i?void 0:i.data)||{});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},4872:function(t,e,n){"use strict";n.d(e,{bI:function(){return u},O7:function(){return s},tr:function(){return a}});var r=n(4480),i=n(36493),c=(0,n(6983).J)({key:"depx-user-preference"}).persistAtom,a=(0,r.cn)({key:"marketsAtom",default:[]}),s=(0,r.cn)({key:"marketStoreAtom",default:{}}),u=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[c]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(t){var e=(0,t.get)(u);return(0,i.do)(null==e?void 0:e.name).toLowerCase()}})},30026:function(t,e,n){"use strict";n.d(e,{r:function(){return o}});var r=n(62435),i=Object.defineProperty,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;const o=t=>r.createElement("svg",((t,e)=>{for(var n in e||(e={}))a.call(e,n)&&u(t,n,e[n]);if(c)for(var n of c(e))s.call(e,n)&&u(t,n,e[n]);return t})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z",fill:"#797B96"}))},7420:function(){},95856:function(){},35883:function(){},52596:function(){},63897:function(){},62678:function(){},25819:function(){},81265:function(){},35539:function(){}}]);