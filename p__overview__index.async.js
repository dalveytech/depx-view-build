"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{28722:function(e,n,t){t.d(n,{Dw:function(){return f},Jx:function(){return d},x7:function(){return h}});var r,a=t(17061),o=t.n(a),i=t(17156),l=t.n(i),s=t(38416),c=t.n(s),u=t(13805);var d="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},c()(r,u.Qz,d),c()(r,u.bx,d),r),h=function(e){return m[e]||d},f=function(){var e=l()(o()().mark((function e(n,t){var r,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:t}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},93338:function(e,n,t){t.r(n),t.d(n,{default:function(){return je}});var r=t(17061),a=t.n(r),o=t(17156),i=t.n(o),l=t(27424),s=t.n(l),c=t(34713),u=t(62435),d=t(59734),m=t(42122),h=t.n(m),f=t(24069),v=t(28722),p=function(){var e=(new Date).getTime(),n=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:n}},g=function(){var e=i()(a()().mark((function e(){var n,t,r,o,i;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p(),n.to,t=n.from,r='\n  query MyQuery {\n    summaries(where:{id_gte:"hourly:'.concat(t,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n    }\n  }\n  '),e.next=4,(0,v.Dw)(v.Jx,r);case 4:return o=e.sent,i=o.summaries,e.abrupt("return",x(i||[]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){var n,t,r,a,o=null==e?void 0:e.reduce((function(e,n){var t;return e.openInterest=e.openInterest.add((0,f._b)(n.openInterest)),e.trades+=n.trades,e.tradingVolume=e.tradingVolume.add((0,f._b)(n.tradingVolume)),e.uniqueUsers+=null!==(t=null==n?void 0:n.uniqueUsers)&&void 0!==t?t:0,e}),{openInterest:(0,f._b)(0),trades:0,tradingVolume:(0,f._b)(0),uniqueUsers:0});return o?{openInterest:null==o||null===(n=o.openInterest)||void 0===n?void 0:n.toString(),trades:null==o||null===(t=o.trades)||void 0===t?void 0:t.toString(),tradingVolume:null==o||null===(r=o.tradingVolume)||void 0===r?void 0:r.toString(),uniqueUsers:null==o||null===(a=o.uniqueUsers)||void 0===a?void 0:a.toString()}:o},y=function(){var e=i()(a()().mark((function e(n){var t,r,o,i,l,s,c,u,d;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p(),t.to,r=t.from,o='marketInfos(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"})  \n  {\n  openInterest\n  period\n  trades\n  tradingVolume\n  id'),i="query MyQuery {\n    ".concat(o,"\n  }\n}"),e.next=5,(0,v.Dw)(v.Jx,i);case 5:return l=e.sent,s=l.marketInfos,c={name:"ETH",key:"Ethereum",coinName:"ETH",marketName:"Ethereum",logo:"ETH"},u=x(s),d=h()(h()({},c),u),e.abrupt("return",[d]);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=t(61641),b=t(37432),j=t(36493),I="overview___Eeiei",w="header____Yrjj",Z="title___i6w1f",N="welcome___Onf4q",M=Object.defineProperty,E=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?M(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const O=e=>u.createElement("svg",((e,n)=>{for(var t in n||(n={}))C.call(n,t)&&k(e,t,n[t]);if(E)for(var t of E(n))T.call(n,t)&&k(e,t,n[t]);return e})({width:240,height:240,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("g",{opacity:.08,fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},u.createElement("path",{d:"M157.266 144.844c0 34.302-27.808 62.109-62.11 62.109V188.32c24.012 0 43.477-19.465 43.477-43.476 0-24.012-19.465-43.477-43.477-43.477-24.011 0-43.476 19.465-43.476 43.477H33.047c0-34.302 27.807-62.11 62.11-62.11 34.301 0 62.109 27.808 62.109 62.11ZM187.657 156.024c-2.542 21.258-12.244 40.317-26.624 54.697l-13.614-13.614c10.885-10.885 18.39-25.149 20.808-41.083h19.43Zm.663-10.773.001-.407-.001-.407v.814ZM83.976 52.344C62.718 54.886 43.66 64.587 29.28 78.967l13.615 13.615c10.884-10.885 25.148-18.39 41.082-20.808v-19.43Z"}),u.createElement("path",{d:"M188.36 144.844c0-51.453-41.711-93.164-93.164-93.164h-.04v19.254h.04c40.82 0 73.911 33.09 73.911 73.91h19.253Z"}),u.createElement("path",{d:"M95.156 20.625c68.604 0 124.219 55.615 124.219 124.219h-18.633c0-58.314-47.272-105.586-105.586-105.586V20.625Z"})));var D=t(96714),S="banner___oOBkY",P="logo___lRdUn",R="statList___DgXJu",G="statInfo___rRaIr",V="title___qD2Se",L="amount___oAiPx",z="desc___kJh0S",A=t(86074),F=function(e){var n=e.title,t=e.desc,r=e.amount,a=e.text;return(0,A.jsxs)("div",{className:G,children:[(0,A.jsx)("div",{className:V,children:n}),r&&(0,A.jsxs)("div",{className:L,children:["$".concat(r)," "]}),a&&(0,A.jsxs)("div",{className:L,children:[a," "]}),(0,A.jsxs)("div",{className:z,children:[t," "]})]})},W=function(e){var n,t=e.info;return(0,A.jsxs)("div",{className:S,children:[(0,A.jsx)(O,{className:P}),(0,A.jsxs)("div",{className:R,children:[(0,A.jsx)(F,{title:"Trading Volume",amount:(0,D.zg)(null==t?void 0:t.tradingVolume),desc:"Exchanged in the last 24h"}),(0,A.jsx)(F,{title:"Trades",text:null!==(n=null==t?void 0:t.trades)&&void 0!==n?n:"-",desc:"Executed in the last 24h"}),(0,A.jsx)(F,{title:"Open Interest",amount:(0,D.zg)(null==t?void 0:t.openInterest),desc:"In open positions on DEI"})]})]})},U=t(861),H=t.n(U),X=t(8312),B=t(3410);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var Y=t(74595),J=t(18192),q=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(0,J.a)();return function(r){var a=r.map((function(e){return e.slice(0,e.length-n)}));return Promise.all(a.map(t[e]))}},Q="table___J3lm8",K="marketSituationPanel___l_1QO",$="coinNameBox___gX9IN",ee="logo___G1bcn",ne="coinName___YSs6X",te="marketName___aKkCt",re="up___xF4SL",ae="down___M1zxR",oe="options___OoBW8",ie="tradeBtn___vTlXs",le={ETH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTZDMCA3LjE2MyA3LjE2MyAwIDE2IDBzMTYgNy4xNjMgMTYgMTYtNy4xNjMgMTYtMTYgMTZTMCAyNC44MzcgMCAxNloiIGZpbGw9IiM2ODdFRTMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMC40NlY1TDguODgxIDE2LjMyOGw3LjExNyA0LjEzMVoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDIwLjQ2VjVsNy4xMTcgMTEuMzI4TDE2IDIwLjQ2WiIgZmlsbD0iI0Y0RjRGNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTUuOTk4IDI3IDcuMTE4LTEwLjEwOEwxNiAyMS42NjUgOC44OCAxNi44OTIgMTUuOTk4IDI3WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOC44OCAxNi4zMjggNy4xMTgtMy4wMDR2Ny4xMzVsLTcuMTE3LTQuMTMxWiIgZmlsbD0iI0VFRSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMTE3IDE2LjMyOCAxNiAxMy4zMjR2Ny4xMzVsNy4xMTgtNC4xM1oiIGZpbGw9IiNEQURBREEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMS42NjVWMjdsNy4xMTgtMTAuMTA4LTcuMTE4IDQuNzczWiIgZmlsbD0iI0VFRSIvPjwvc3ZnPg=="},se=function(e){var n=e.markets,t=e.indexPrices,r=null==n?void 0:n.map((function(e){return(0,j.do)(e.name)})),a=Y.I.useContainer().isMobile,o=(0,d.ZP)(null!=r&&r.length?H()(r.map((function(e){return e+"key"}))):null,q("get24H",3)).data,i=e.marketInfo,l=[{title:"Market",dataIndex:"coinName",key:"coinName",render:function(e,n){return(0,A.jsxs)("div",{className:$,children:[(0,A.jsx)("div",{className:ee,style:{backgroundImage:"url(".concat(le[n.logo],")")}}),(0,A.jsx)("span",{className:ne,children:n.coinName}),(0,A.jsx)("span",{className:te,children:n.marketName})]})}},{title:"Index Price",render:function(e,n,r){var a,o;return(0,A.jsx)(A.Fragment,{children:"$".concat(null!==(a=null==t||null===(o=t[r])||void 0===o?void 0:o.toFixed(2,1))&&void 0!==a?a:D.PW)})}},{title:"24h Change",render:function(e,n,t){var r,a,i=null==o||null===(r=o[t])||void 0===r||null===(a=r.ChangeRate)||void 0===a?void 0:a.toFixed(2,1);if(i)return+i>=0?(0,A.jsxs)("span",{className:re,children:["+",i,"%"]}):(0,A.jsxs)("span",{className:ae,children:[i,"%"]})}},{title:"24h Trades",dataIndex:"trades",key:"trades",render:function(e){return(0,A.jsx)(A.Fragment,{children:null!=e?e:"-"})}},{title:"24h Volume",dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,A.jsxs)(A.Fragment,{children:["$",(0,D.zg)(e)]})}},{title:"Open Interest",dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,A.jsxs)(A.Fragment,{children:["$",(0,D.zg)(e)]})}},{width:120,title:"",render:function(){return(0,A.jsx)("div",{className:oe,children:(0,A.jsx)(B.OL,{to:"/trade",className:ie,children:"Trade"})})}}];return(0,A.jsx)("div",{className:K,children:(null==o?void 0:o.length)&&(0,A.jsx)(X.ZP,{emptyText:"No data",className:Q,columns:a?l.slice(0,3):l,data:i})})},ce=t(71230),ue=t(15746),de=t(79369),me=t(87755),he=Object.defineProperty,fe=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ge=(e,n,t)=>n in e?he(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const xe=e=>u.createElement("svg",((e,n)=>{for(var t in n||(n={}))ve.call(n,t)&&ge(e,t,n[t]);if(fe)for(var t of fe(n))pe.call(n,t)&&ge(e,t,n[t]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z",fill:"url(#overview_statistical_icon3_svg__a)"}),u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.437 18.44 5.056-1.85a1.48 1.48 0 0 1 .89-.04l.124.04 5.056 1.849c.256.094.48.256.645.47.165.212.264.466.287.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.231 6.231 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.356-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.546 3.546 0 0 1-1.381-1.285 3.714 3.714 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.98-.507.083-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.043.016h2.963l-.012-.006Z",fill:"url(#overview_statistical_icon3_svg__b)"}),u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01a2.684 2.684 0 0 0-1.127.975 2.634 2.634 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.359 2.359 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.474 7.474 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.08-1.859-.178-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z",fill:"url(#overview_statistical_icon3_svg__c)"}),u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.383 16.55a1.48 1.48 0 0 0-.89.04l-5.056 1.85-.11.045a1.434 1.434 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.231 6.231 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.388 1.388 0 0 0-.288-.734 1.442 1.442 0 0 0-.644-.469l-5.056-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.827.827 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z",fill:"#3CEAAA"}),u.createElement("defs",null,u.createElement("linearGradient",{id:"overview_statistical_icon3_svg__a",x1:24,y1:7.256,x2:24,y2:41.758,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#5C72FF"}),u.createElement("stop",{offset:.411,stopColor:"#5C72FF",stopOpacity:.707}),u.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.5})),u.createElement("linearGradient",{id:"overview_statistical_icon3_svg__b",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#5C72FF"}),u.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),u.createElement("linearGradient",{id:"overview_statistical_icon3_svg__c",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#5C72FF"}),u.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7}))));var ye=t(77438),_e={statisticalDataGrid:"statisticalDataGrid___eZhQf",item:"item___bDuaw",btn:"btn___iPiGO",primary:"primary___pCrr1",text:"text___zIh8r",head:"head___phrnC",content:"content___zlm0M",footer:"footer___bvtie",icon:"icon___tWS5N"},be=function(e){var n=e.info;return(0,A.jsxs)(ce.Z,{className:_e.StatisticalDataGrid,gutter:24,children:[(0,A.jsx)(ue.Z,{xs:24,md:12,lg:8,className:_e.gutterRow,children:(0,A.jsxs)("div",{className:_e.item,children:[(0,A.jsxs)("div",{className:_e.head,children:[(0,A.jsx)("div",{className:_e.text,children:"Up to 20%"}),(0,A.jsx)(de.r,{className:_e.icon})]}),(0,A.jsx)("div",{className:_e.content,children:"Stake USDC and earn rewadrs from fees generated on the DEI."}),(0,A.jsx)("div",{className:_e.footer,children:(0,A.jsx)(ye.Z,{className:_e.btn,type:"primary",size:"middle",href:"/trade",children:"Earn"})})]})}),(0,A.jsx)(ue.Z,{xs:24,md:12,lg:8,children:(0,A.jsxs)("div",{className:_e.item,children:[(0,A.jsxs)("div",{className:_e.head,children:[(0,A.jsx)("div",{className:_e.text,children:"<0.10%"}),(0,A.jsx)(me.r,{className:_e.icon})]}),(0,A.jsx)("div",{className:_e.content,children:"Lowest transaction fees."}),(0,A.jsx)("div",{className:_e.footer,children:(0,A.jsx)(ye.Z,{className:_e.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})}),(0,A.jsx)(ue.Z,{xs:24,md:12,lg:8,children:(0,A.jsxs)("div",{className:_e.item,children:[(0,A.jsxs)("div",{className:_e.head,children:[(0,A.jsx)("div",{className:_e.text,children:null!=n&&n.uniqueUsers?"".concat(null==n?void 0:n.uniqueUsers,"+"):D.PW}),(0,A.jsx)(xe,{className:_e.icon})]}),(0,A.jsx)("div",{className:_e.content,children:"Trusted by over ".concat(null==n?void 0:n.uniqueUsers," traders.")}),(0,A.jsx)("div",{className:_e.footer,children:(0,A.jsx)(ye.Z,{className:_e.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})})]})},je=function(){var e=(0,u.useState)(),n=s()(e,2),t=n[0],r=n[1],o=(0,u.useState)([]),l=s()(o,2),m=l[0],h=l[1],f=(0,b.x)().chainId,v=(0,c.Ge)().library,p=(0,d.ZP)("".concat(f),(function(){return(0,_.t)(f,v)})).data,x=null==p?void 0:p.map((function(e){return(0,j.do)(e.name)})),M=(0,d.ZP)(x,q("getIndexPrice")).data,E=function(){var e=i()(a()().mark((function e(n){var t,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,y(null==n?void 0:n.map((function(e){return e.name})));case 5:o=e.sent,r(t),h(o);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){E(p);var e=setInterval(E,6e4);return function(){return clearInterval(e)}}),[p]),(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:I,children:[(0,A.jsxs)("div",{className:w,children:[(0,A.jsx)("div",{className:Z,children:"Hello！"}),(0,A.jsx)("div",{className:N,children:"Welcome to Dei.io."})]}),(0,A.jsx)(W,{info:t}),(null==p?void 0:p.length)&&(0,A.jsx)(se,{marketInfo:m,markets:p,indexPrices:null!=M?M:[]}),(0,A.jsx)(be,{info:t})]})})}},48555:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(87462),a=t(62435),o=t(50344),i=(t(80334),t(1413)),l=t(42550),s=t(34203),c=t(91033),u=new Map;var d=new c.Z((function(e){e.forEach((function(e){var n,t=e.target;null===(n=u.get(t))||void 0===n||n.forEach((function(e){return e(t)}))}))}));var m=t(15671),h=t(43144),f=t(60136),v=t(73568),p=function(e){(0,f.Z)(t,e);var n=(0,v.Z)(t);function t(){return(0,m.Z)(this,t),n.apply(this,arguments)}return(0,h.Z)(t,[{key:"render",value:function(){return this.props.children}}]),t}(a.Component),g=a.createContext(null);function x(e){var n=e.children,t=e.disabled,r=a.useRef(null),o=a.useRef(null),c=a.useContext(g),m="function"==typeof n,h=m?n(r):n,f=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!m&&a.isValidElement(h)&&(0,l.Yr)(h),x=v?h.ref:null,y=a.useMemo((function(){return(0,l.sQ)(x,r)}),[x,r]),_=a.useRef(e);_.current=e;var b=a.useCallback((function(e){var n=_.current,t=n.onResize,r=n.data,a=e.getBoundingClientRect(),o=a.width,l=a.height,s=e.offsetWidth,u=e.offsetHeight,d=Math.floor(o),m=Math.floor(l);if(f.current.width!==d||f.current.height!==m||f.current.offsetWidth!==s||f.current.offsetHeight!==u){var h={width:d,height:m,offsetWidth:s,offsetHeight:u};f.current=h;var v=s===Math.round(o)?o:s,p=u===Math.round(l)?l:u,g=(0,i.Z)((0,i.Z)({},h),{},{offsetWidth:v,offsetHeight:p});null==c||c(g,e,r),t&&Promise.resolve().then((function(){t(g,e)}))}}),[]);return a.useEffect((function(){var e,n,a=(0,s.Z)(r.current)||(0,s.Z)(o.current);return a&&!t&&(e=a,n=b,u.has(e)||(u.set(e,new Set),d.observe(e)),u.get(e).add(n)),function(){return function(e,n){u.has(e)&&(u.get(e).delete(n),u.get(e).size||(d.unobserve(e),u.delete(e)))}(a,b)}}),[r.current,t]),a.createElement(p,{ref:o},v?a.cloneElement(h,{ref:y}):h)}function y(e){var n=e.children;return("function"==typeof n?[n]:(0,o.Z)(n)).map((function(n,t){var o=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(t);return a.createElement(x,(0,r.Z)({},e,{key:o}),n)}))}y.Collection=function(e){var n=e.children,t=e.onBatchResize,r=a.useRef(0),o=a.useRef([]),i=a.useContext(g),l=a.useCallback((function(e,n,a){r.current+=1;var l=r.current;o.current.push({size:e,element:n,data:a}),Promise.resolve().then((function(){l===r.current&&(null==t||t(o.current),o.current=[])})),null==i||i(e,n,a)}),[t,i]);return a.createElement(g.Provider,{value:l},n)};var _=y},74204:function(e,n,t){var r;function a(e){if("undefined"==typeof document)return 0;if(e||void 0===r){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var t=document.createElement("div"),a=t.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",t.appendChild(n),document.body.appendChild(t);var o=n.offsetWidth;t.style.overflow="scroll";var i=n.offsetWidth;o===i&&(i=t.clientWidth),document.body.removeChild(t),r=o-i}return r}function o(e){var n=e.match(/^(.*)px$/),t=Number(null==n?void 0:n[1]);return Number.isNaN(t)?a():t}function i(e){if(!("undefined"!=typeof document&&e&&e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),t=n.width,r=n.height;return{width:o(t),height:o(r)}}t.d(n,{Z:function(){return a},o:function(){return i}})},66680:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(62435);function a(e){var n=r.useRef();n.current=e;var t=r.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}},64217:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),o="aria-",i="data-";function l(e,n){return 0===e.indexOf(n)}function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,r.Z)({},t);var s={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||l(t,o))||n.data&&l(t,i)||n.attr&&a.includes(t))&&(s[t]=e[t])})),s}}}]);