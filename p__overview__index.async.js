"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{28722:function(e,n,t){t.d(n,{Dw:function(){return f},Jx:function(){return u},x7:function(){return h}});var r,a=t(15009),o=t.n(a),i=t(99289),s=t.n(i),l=t(9783),c=t.n(l),d=t(13805);var u="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},c()(r,d.Qz,u),c()(r,d.bx,u),r),h=function(e){return m[e]||u},f=function(){var e=s()(o()().mark((function e(n,t){var r,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:t}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},70733:function(e,n,t){t.r(n),t.d(n,{default:function(){return ge}});var r=t(15009),a=t.n(r),o=t(99289),i=t.n(o),s=t(5574),l=t.n(s),c=t(62435),d=t(4480),u=t(97857),m=t.n(u),h=t(24069),f=t(28722),p=function(){var e=(new Date).getTime(),n=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:n}},v=function(){var e=i()(a()().mark((function e(){var n,t,r,o,i;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p(),n.to,t=n.from,r='\n  query MyQuery {\n    summaries(where:{id_gte:"hourly:'.concat(t,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n    }\n  }\n  '),e.next=4,(0,f.Dw)(f.Jx,r);case 4:return o=e.sent,i=o.summaries,e.abrupt("return",g(i||[]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var n=null==e?void 0:e.reduce((function(e,n){var t;return e.openInterest=e.openInterest.add((0,h._b)(n.openInterest)),e.trades+=n.trades,e.tradingVolume=e.tradingVolume.add((0,h._b)(n.tradingVolume)),e.uniqueUsers+=null!==(t=null==n?void 0:n.uniqueUsers)&&void 0!==t?t:0,e}),{openInterest:(0,h._b)(0),trades:0,tradingVolume:(0,h._b)(0),uniqueUsers:0});return n?{openInterest:(0,h.dN)(null==n?void 0:n.openInterest,18),trades:null==n?void 0:n.trades,tradingVolume:(0,h.dN)(null==n?void 0:n.tradingVolume,18),uniqueUsers:null==n?void 0:n.uniqueUsers}:n},x=function(){var e=i()(a()().mark((function e(n){var t,r,o,i,s,l,c,d,u;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p(),t.to,r=t.from,o='marketInfos(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"})\n  {\n  openInterest\n  period\n  trades\n  tradingVolume\n  id'),i="query MyQuery {\n    ".concat(o,"\n  }\n}"),e.next=5,(0,f.Dw)(f.Jx,i);case 5:return s=e.sent,l=s.marketInfos,c={name:"ETH",key:"Ethereum",coinName:"ETH",marketName:"Ethereum",logo:"ETH"},d=g(l),u=m()(m()({},c),d),e.abrupt("return",[u]);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=t(4872),_="overview___Eeiei",b="header____Yrjj",j="title___i6w1f",w="welcome___Onf4q",I=Object.defineProperty,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,E=(e,n,t)=>n in e?I(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const C=e=>c.createElement("svg",((e,n)=>{for(var t in n||(n={}))Z.call(n,t)&&E(e,t,n[t]);if(N)for(var t of N(n))M.call(n,t)&&E(e,t,n[t]);return e})({width:240,height:240,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("g",{opacity:.08,fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},c.createElement("path",{d:"M157.266 144.844c0 34.302-27.808 62.109-62.11 62.109V188.32c24.012 0 43.477-19.465 43.477-43.476 0-24.012-19.465-43.477-43.477-43.477-24.011 0-43.476 19.465-43.476 43.477H33.047c0-34.302 27.807-62.11 62.11-62.11 34.301 0 62.109 27.808 62.109 62.11ZM187.657 156.024c-2.542 21.258-12.244 40.317-26.624 54.697l-13.614-13.614c10.885-10.885 18.39-25.149 20.808-41.083h19.43Zm.663-10.773.001-.407-.001-.407v.814ZM83.976 52.344C62.718 54.886 43.66 64.587 29.28 78.967l13.615 13.615c10.884-10.885 25.148-18.39 41.082-20.808v-19.43Z"}),c.createElement("path",{d:"M188.36 144.844c0-51.453-41.711-93.164-93.164-93.164h-.04v19.254h.04c40.82 0 73.911 33.09 73.911 73.91h19.253Z"}),c.createElement("path",{d:"M95.156 20.625c68.604 0 124.219 55.615 124.219 124.219h-18.633c0-58.314-47.272-105.586-105.586-105.586V20.625Z"})));var T=t(61895),k="banner___oOBkY",O="logo___lRdUn",D="statList___DgXJu",S="statInfo___rRaIr",P="title___qD2Se",L="amount___oAiPx",R="desc___kJh0S",G=t(86074),V=function(e){var n=e.title,t=e.desc,r=e.amount,a=e.text;return(0,G.jsxs)("div",{className:S,children:[(0,G.jsx)("div",{className:P,children:n}),r&&(0,G.jsxs)("div",{className:L,children:["$".concat(r)," "]}),a&&(0,G.jsxs)("div",{className:L,children:[a," "]}),(0,G.jsxs)("div",{className:R,children:[t," "]})]})},A=function(e){var n,t=e.info;return(0,G.jsxs)("div",{className:k,children:[(0,G.jsx)(C,{className:O}),(0,G.jsxs)("div",{className:D,children:[(0,G.jsx)(V,{title:"Trading Volume",amount:(0,T.dp)(null==t?void 0:t.tradingVolume).display({prefix:""}),desc:"Exchanged in the last 24h"}),(0,G.jsx)(V,{title:"Trades",text:null!==(n=null==t?void 0:t.trades)&&void 0!==n?n:"-",desc:"Executed in the last 24h"}),(0,G.jsx)(V,{title:"Open Interest",amount:(0,T.dp)(null==t?void 0:t.openInterest).display({prefix:""}),desc:"In open positions on DEI"})]})]})},F=t(8312),U=t(78621);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var z=t(74595),W=t(36493),J="table___J3lm8",B="marketSituationPanel___l_1QO",X="coinNameBox___gX9IN",H="logo___G1bcn",Y="coinName___YSs6X",q="marketName___aKkCt",Q="up___xF4SL",K="down___M1zxR",$="options___OoBW8",ee="tradeBtn___vTlXs",ne={ETH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTZDMCA3LjE2MyA3LjE2MyAwIDE2IDBzMTYgNy4xNjMgMTYgMTYtNy4xNjMgMTYtMTYgMTZTMCAyNC44MzcgMCAxNloiIGZpbGw9IiM2ODdFRTMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMC40NlY1TDguODgxIDE2LjMyOGw3LjExNyA0LjEzMVoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDIwLjQ2VjVsNy4xMTcgMTEuMzI4TDE2IDIwLjQ2WiIgZmlsbD0iI0Y0RjRGNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTUuOTk4IDI3IDcuMTE4LTEwLjEwOEwxNiAyMS42NjUgOC44OCAxNi44OTIgMTUuOTk4IDI3WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOC44OCAxNi4zMjggNy4xMTgtMy4wMDR2Ny4xMzVsLTcuMTE3LTQuMTMxWiIgZmlsbD0iI0VFRSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMTE3IDE2LjMyOCAxNiAxMy4zMjR2Ny4xMzVsNy4xMTgtNC4xM1oiIGZpbGw9IiNEQURBREEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMS42NjVWMjdsNy4xMTgtMTAuMTA4LTcuMTE4IDQuNzczWiIgZmlsbD0iI0VFRSIvPjwvc3ZnPg=="},te=function(e){var n=z.I.useContainer().isMobile,t=(0,d.sJ)(y.O7),r=e.marketInfo,a=[{title:"Market",dataIndex:"coinName",key:"coinName",render:function(e,n){return(0,G.jsxs)("div",{className:X,children:[(0,G.jsx)("div",{className:H,style:{backgroundImage:"url(".concat(ne[n.logo],")")}}),(0,G.jsx)("span",{className:Y,children:n.coinName}),(0,G.jsx)("span",{className:q,children:n.marketName})]})}},{title:"Index Price",render:function(e,n){var r,a,o=null===(r=t[null===(a=(0,W.do)(n.name))||void 0===a?void 0:a.toLowerCase()])||void 0===r?void 0:r.indexPrice;return(0,G.jsx)(G.Fragment,{children:(0,T.dp)(o).display()})}},{title:"24h Change",render:function(e,n){var r,a,o,i=null==t||null===(r=t[null===(o=(0,W.do)(n.name))||void 0===o?void 0:o.toLowerCase()])||void 0===r||null===(a=r["24ChangeRate"])||void 0===a?void 0:a.toFixed(2);return i?+i>=0?(0,G.jsxs)("span",{className:Q,children:["+",i,"%"]}):(0,G.jsxs)("span",{className:K,children:[i,"%"]}):"-"}},{title:"24h Trades",dataIndex:"trades",key:"trades",render:function(e){return(0,G.jsx)(G.Fragment,{children:null!=e?e:"-"})}},{title:"24h Volume",dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,G.jsx)(G.Fragment,{children:(0,T.dp)(e).display()})}},{title:"Open Interest",dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,G.jsx)(G.Fragment,{children:(0,T.dp)(e).display()})}},{width:120,title:"",render:function(){return(0,G.jsx)("div",{className:$,children:(0,G.jsx)(U.OL,{to:"/trade",className:ee,children:"Trade"})})}}];return(0,G.jsx)("div",{className:B,children:(0,G.jsx)(F.ZP,{emptyText:"No data",className:J,columns:n?a.slice(0,3):a,data:r})})},re=t(71230),ae=t(15746),oe=t(79369),ie=t(87755),se=Object.defineProperty,le=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,ue=(e,n,t)=>n in e?se(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const me=e=>c.createElement("svg",((e,n)=>{for(var t in n||(n={}))ce.call(n,t)&&ue(e,t,n[t]);if(le)for(var t of le(n))de.call(n,t)&&ue(e,t,n[t]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z",fill:"url(#overview_statistical_icon3_svg__a)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.437 18.44 5.056-1.85a1.48 1.48 0 0 1 .89-.04l.124.04 5.056 1.849c.256.094.48.256.645.47.165.212.264.466.287.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.231 6.231 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.356-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.546 3.546 0 0 1-1.381-1.285 3.714 3.714 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.98-.507.083-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.043.016h2.963l-.012-.006Z",fill:"url(#overview_statistical_icon3_svg__b)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01a2.684 2.684 0 0 0-1.127.975 2.634 2.634 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.359 2.359 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.474 7.474 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.08-1.859-.178-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z",fill:"url(#overview_statistical_icon3_svg__c)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.383 16.55a1.48 1.48 0 0 0-.89.04l-5.056 1.85-.11.045a1.434 1.434 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.231 6.231 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.388 1.388 0 0 0-.288-.734 1.442 1.442 0 0 0-.644-.469l-5.056-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.827.827 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z",fill:"#3CEAAA"}),c.createElement("defs",null,c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__a",x1:24,y1:7.256,x2:24,y2:41.758,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#5C72FF"}),c.createElement("stop",{offset:.411,stopColor:"#5C72FF",stopOpacity:.707}),c.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.5})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__b",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#5C72FF"}),c.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__c",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#5C72FF"}),c.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7}))));var he=t(77438),fe=t(96714),pe={statisticalDataGrid:"statisticalDataGrid___eZhQf",item:"item___bDuaw",btn:"btn___iPiGO",primary:"primary___pCrr1",text:"text___zIh8r",head:"head___phrnC",content:"content___zlm0M",footer:"footer___bvtie",icon:"icon___tWS5N"},ve=function(e){var n=e.info;return(0,G.jsxs)(re.Z,{className:pe.StatisticalDataGrid,gutter:24,children:[(0,G.jsx)(ae.Z,{xs:24,md:12,lg:8,className:pe.gutterRow,children:(0,G.jsxs)("div",{className:pe.item,children:[(0,G.jsxs)("div",{className:pe.head,children:[(0,G.jsx)("div",{className:pe.text,children:"Up to 20%"}),(0,G.jsx)(oe.r,{className:pe.icon})]}),(0,G.jsx)("div",{className:pe.content,children:"Stake USDC and earn rewadrs from fees generated on the DEI."}),(0,G.jsx)("div",{className:pe.footer,children:(0,G.jsx)(he.Z,{className:pe.btn,type:"primary",size:"middle",href:"/trade",children:"Earn"})})]})}),(0,G.jsx)(ae.Z,{xs:24,md:12,lg:8,children:(0,G.jsxs)("div",{className:pe.item,children:[(0,G.jsxs)("div",{className:pe.head,children:[(0,G.jsx)("div",{className:pe.text,children:"<0.10%"}),(0,G.jsx)(ie.r,{className:pe.icon})]}),(0,G.jsx)("div",{className:pe.content,children:"Lowest transaction fees."}),(0,G.jsx)("div",{className:pe.footer,children:(0,G.jsx)(he.Z,{className:pe.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})}),(0,G.jsx)(ae.Z,{xs:24,md:12,lg:8,children:(0,G.jsxs)("div",{className:pe.item,children:[(0,G.jsxs)("div",{className:pe.head,children:[(0,G.jsx)("div",{className:pe.text,children:null!=n&&n.uniqueUsers?"".concat(null==n?void 0:n.uniqueUsers,"+"):fe.P}),(0,G.jsx)(me,{className:pe.icon})]}),(0,G.jsx)("div",{className:pe.content,children:"Trusted by over ".concat(null==n?void 0:n.uniqueUsers," traders.")}),(0,G.jsx)("div",{className:pe.footer,children:(0,G.jsx)(he.Z,{className:pe.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})})]})},ge=function(){var e=(0,c.useState)(),n=l()(e,2),t=n[0],r=n[1],o=(0,c.useState)([]),s=l()(o,2),u=s[0],m=s[1],h=(0,d.sJ)(y.tr),f=function(){var e=i()(a()().mark((function e(n){var t,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,e.next=5,x(null==n?void 0:n.map((function(e){return e.name})));case 5:o=e.sent,r(t),m(o);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){f(h);var e=setInterval(f,6e4);return function(){return clearInterval(e)}}),[h]),(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)("div",{className:_,children:[(0,G.jsxs)("div",{className:b,children:[(0,G.jsx)("div",{className:j,children:"Hello！"}),(0,G.jsx)("div",{className:w,children:"Welcome to Dei.io."})]}),(0,G.jsx)(A,{info:t}),(null==h?void 0:h.length)&&(0,G.jsx)(te,{marketInfo:u,markets:h}),(0,G.jsx)(ve,{info:t})]})})}},4872:function(e,n,t){t.d(n,{bI:function(){return l},O7:function(){return s},tr:function(){return i}});var r=t(4480),a=t(36493),o=(0,t(6983).J)({key:"depx-user-preference"}).persistAtom,i=(0,r.cn)({key:"marketsAtom",default:[]}),s=(0,r.cn)({key:"marketStoreAtom",default:{}}),l=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[o]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(e){var n=(0,e.get)(l);return(0,a.do)(null==n?void 0:n.name).toLowerCase()}})},48555:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(87462),a=t(62435),o=t(50344),i=(t(80334),t(1413)),s=t(42550),l=t(34203),c=t(91033),d=new Map;var u=new c.Z((function(e){e.forEach((function(e){var n,t=e.target;null===(n=d.get(t))||void 0===n||n.forEach((function(e){return e(t)}))}))}));var m=t(15671),h=t(43144),f=t(60136),p=t(73568),v=function(e){(0,f.Z)(t,e);var n=(0,p.Z)(t);function t(){return(0,m.Z)(this,t),n.apply(this,arguments)}return(0,h.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(a.Component),g=a.createContext(null);function x(e){var n=e.children,t=e.disabled,r=a.useRef(null),o=a.useRef(null),c=a.useContext(g),m="function"==typeof n,h=m?n(r):n,f=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),p=!m&&a.isValidElement(h)&&(0,s.Yr)(h),x=p?h.ref:null,y=a.useMemo((function(){return(0,s.sQ)(x,r)}),[x,r]),_=a.useRef(e);_.current=e;var b=a.useCallback((function(e){var n=_.current,t=n.onResize,r=n.data,a=e.getBoundingClientRect(),o=a.width,s=a.height,l=e.offsetWidth,d=e.offsetHeight,u=Math.floor(o),m=Math.floor(s);if(f.current.width!==u||f.current.height!==m||f.current.offsetWidth!==l||f.current.offsetHeight!==d){var h={width:u,height:m,offsetWidth:l,offsetHeight:d};f.current=h;var p=l===Math.round(o)?o:l,v=d===Math.round(s)?s:d,g=(0,i.Z)((0,i.Z)({},h),{},{offsetWidth:p,offsetHeight:v});null==c||c(g,e,r),t&&Promise.resolve().then((function(){t(g,e)}))}}),[]);return a.useEffect((function(){var e,n,a=(0,l.Z)(r.current)||(0,l.Z)(o.current);return a&&!t&&(e=a,n=b,d.has(e)||(d.set(e,new Set),u.observe(e)),d.get(e).add(n)),function(){return function(e,n){d.has(e)&&(d.get(e).delete(n),d.get(e).size||(u.unobserve(e),d.delete(e)))}(a,b)}}),[r.current,t]),a.createElement(v,{ref:o},p?a.cloneElement(h,{ref:y}):h)}function y(e){var n=e.children;return("function"==typeof n?[n]:(0,o.Z)(n)).map((function(n,t){var o=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(t);return a.createElement(x,(0,r.Z)({},e,{key:o}),n)}))}y.Collection=function(e){var n=e.children,t=e.onBatchResize,r=a.useRef(0),o=a.useRef([]),i=a.useContext(g),s=a.useCallback((function(e,n,a){r.current+=1;var s=r.current;o.current.push({size:e,element:n,data:a}),Promise.resolve().then((function(){s===r.current&&(null==t||t(o.current),o.current=[])})),null==i||i(e,n,a)}),[t,i]);return a.createElement(g.Provider,{value:s},n)};var _=y},74204:function(e,n,t){var r;function a(e){if("undefined"==typeof document)return 0;if(e||void 0===r){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var t=document.createElement("div"),a=t.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",t.appendChild(n),document.body.appendChild(t);var o=n.offsetWidth;t.style.overflow="scroll";var i=n.offsetWidth;o===i&&(i=t.clientWidth),document.body.removeChild(t),r=o-i}return r}function o(e){var n=e.match(/^(.*)px$/),t=Number(null==n?void 0:n[1]);return Number.isNaN(t)?a():t}function i(e){if(!("undefined"!=typeof document&&e&&e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),t=n.width,r=n.height;return{width:o(t),height:o(r)}}t.d(n,{Z:function(){return a},o:function(){return i}})},66680:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(62435);function a(e){var n=r.useRef();n.current=e;var t=r.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}},64217:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function s(e,n){return 0===e.indexOf(n)}function l(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,r.Z)({},t);var l={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||s(t,o))||n.data&&s(t,i)||n.attr&&a.includes(t))&&(l[t]=e[t])})),l}}}]);