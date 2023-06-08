"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{43680:function(e,n,t){t.d(n,{x:function(){return j}});var a=t(62435),i=t(74855),s=t.n(i),r=t(90381),l=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,o=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const c=e=>a.createElement("svg",((e,n)=>{for(var t in n||(n={}))d.call(n,t)&&o(e,t,n[t]);if(u)for(var t of u(n))p.call(n,t)&&o(e,t,n[t]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#78808E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var y=t(88469),m=t(98330),f=t(86074),j=function(e){var n=e.account,t=e.isFull,i=void 0!==t&&t,l=e.isCopy,u=void 0===l||l,d=(0,m.Z)().t,p=(0,a.useMemo)((function(){return n?i?n:n.length>13?"".concat(n.slice(0,5),"...").concat(n.slice(n.length-4)):n:"-"}),[i,n]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{children:null!=p?p:"-"}),null!=u?u:(0,f.jsx)(s(),{text:null!=n?n:"",onCopy:function(){return y.U.success(d("Address copied to your clipboard"))},children:(0,f.jsx)(c,{className:r.Z.copy})})]})}},61895:function(e,n,t){t.d(n,{Q6:function(){return l},dp:function(){return u}});var a=t(2593),i=t(70794),s=t(24069),r=t(36493);function l(e){return e?e instanceof a.O$?(0,i.Z)((0,s.dN)(e,18,2)):(0,i.Z)("..."===e?0:e):(0,i.Z)(0)}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:t};var a=l(e),i=a.toFixed(n,1);return(0,r.R$)().showFullDecimals&&(i=a.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.thousandSeparator,t=void 0===n||n,s=e.prefix,r=void 0===s?"$":s,l=e.suffix,u=void 0===l?"":l,p=t?d(i):i,o=r||"";return a.lt(0)&&r&&(o="-".concat(o),p=p.slice(1)),"".concat(o).concat(p).concat(u||"")},number:a,value:0==+i?"0":i}}function d(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},63695:function(e,n,t){t.r(n),t.d(n,{default:function(){return Re}});var a=t(97857),i=t.n(a),s=t(34713),r=t(94184),l=t.n(r),u=t(62435),d=t(4480),p=t(95591),o=t(15009),c=t.n(o),y=t(99289),m=t.n(y),f=t(61895),j=t(24069),x=t(28722),v=function(){var e=m()(c()().mark((function e(n,t){var a,s,r,l,u,d,p;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s='query MyQuery {\n    users(where: {id: "'.concat(n.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),r=(0,x.x7)(t),e.next=5,(0,x.Dw)(r,s);case 5:return l=e.sent,u=l.users,d=u[0],(p=i()(i()({},d),a)).avgProfit=(0,j.dN)(d.avgProfit,18),p.avgLoss=(0,j.dN)(d.avgLoss,18),e.abrupt("return",p);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),T=function(){var e=m()(c()().mark((function e(n,t){var a,s,r,l,u,d,p,o,y;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l='query MyQuery {\n    users(where: {id: "'.concat(n.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfit\n      totalLoss\n    }\n  }'),u=(0,x.x7)(t),e.next=4,(0,x.Dw)(u,l);case 4:return d=e.sent,p=d.users,o=null==p?void 0:p[0],console.log("---user---",o),y=null!==(a=(0,f.Q6)(null!==(s=o.totalProfit)&&void 0!==s?s:0).plus((0,f.Q6)(o.totalLoss)).toString())&&void 0!==a?a:"0",o.realizedPnl=null!==(r=(0,j.dN)(y,18))&&void 0!==r?r:"0",o.feesPaid=(0,j.dN)(o.feesPaid,18),o.totalVolume=(0,j.dN)(o.totalVolume,18),console.log("---user---after",o),e.abrupt("return",i()({},o));case 14:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=t(12444),b=t.n(h),N=t(72004),_=t.n(N),g=t(31996),M=t.n(g),w=t(26037),I=t.n(w),O=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"int256[]","name":"fees","type":"int256[]"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UpdateFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"uint8","name":"kind","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"feeOrRate","type":"uint256"}],"name":"UpdateFeeAndRates","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_RATE_PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"int256[]","name":"fees","type":"int256[]"}],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"cumulativeFundingRates","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"feeAndRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeVault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"}],"name":"getExecFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_slippage","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"uint8","name":"liqState","type":"uint8"},{"internalType":"uint64","name":"_fromOrder","type":"uint64"},{"internalType":"bytes32","name":"_refCode","type":"bytes32"},{"internalType":"uint256","name":"collateralDelta","type":"uint256"},{"internalType":"uint8","name":"execNum","type":"uint8"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdatePositionInputs","name":"params","type":"tuple"},{"components":[{"internalType":"address","name":"market","type":"address"},{"internalType":"bool","name":"isLong","type":"bool"},{"internalType":"uint32","name":"lastTime","type":"uint32"},{"internalType":"uint216","name":"extra3","type":"uint216"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"int256","name":"realisedPnl","type":"int256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"},{"internalType":"uint256","name":"extra2","type":"uint256"}],"internalType":"struct Position.Props","name":"position","type":"tuple"}],"name":"getFees","outputs":[{"internalType":"int256[]","name":"fees","type":"int256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"longSize","type":"uint256"},{"internalType":"uint256","name":"shortSize","type":"uint256"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalFees","outputs":[{"internalType":"int256","name":"total","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_oraclePrice","type":"uint256"},{"internalType":"bool","name":"isOpen","type":"bool"},{"internalType":"bool","name":"isCreate","type":"bool"},{"components":[{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"uint32","name":"updatedAtBlock","type":"uint32"},{"internalType":"uint8","name":"triggerAbove","type":"uint8"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint48","name":"extra3","type":"uint48"},{"internalType":"uint128","name":"collateral","type":"uint128"},{"internalType":"uint128","name":"size","type":"uint128"},{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"extra1","type":"uint128"},{"internalType":"uint64","name":"orderID","type":"uint64"},{"internalType":"uint64","name":"extra2","type":"uint64"},{"internalType":"uint128","name":"extra0","type":"uint128"},{"internalType":"bytes32","name":"refCode","type":"bytes32"}],"internalType":"struct Order.Props","name":"_order","type":"tuple"},{"internalType":"uint256[]","name":"inputs","type":"uint256[]"}],"internalType":"struct MarketDataTypes.UpdateOrderInputs","name":"params","type":"tuple"}],"name":"getOrderFees","outputs":[{"internalType":"int256","name":"fees","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"fundingFee","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256[]","name":"rates","type":"uint256[]"}],"name":"setFeeAndRates","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"longSize","type":"uint256"},{"internalType":"uint256","name":"shortSize","type":"uint256"}],"name":"updateCumulativeFundingRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),L=function(e){M()(a,e);var n,t=I()(a);function a(e,n){return b()(this,a),t.call(this,e,n,O.Mt)}return _()(a,[{key:"getClassName",value:function(){return"FeeRouter"}},{key:"getAccountFees",value:(n=m()(c()().mark((function e(n){var t;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,this.call("getAccountFees",n);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})}]),a}(t(66457).k),A=function(){var e=m()(c()().mark((function e(n,t,a){var i,s;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new L(n,t),e.next=3,i.getAccountFees(a);case 3:return s=e.sent,e.abrupt("return",(0,j.dN)(s,18));case 5:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),k=Object.defineProperty,D=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,S=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const P=e=>u.createElement("svg",((e,n)=>{for(var t in n||(n={}))Z.call(n,t)&&S(e,t,n[t]);if(D)for(var t of D(n))C.call(n,t)&&S(e,t,n[t]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"m9 16.5 4.5-4.5L9 7.5",stroke:"#fff",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var F=t(58926),R=t(37432),Y=t(98330),z=t(22537),E="more___v_xdE",Q="card___ZViUB",V="tag___Ao9lP",B=t(9783),G=t.n(B),W=t(13769),H=t.n(W),U=t(75081),J=t(71230),q=t(15746),$=t(78621),X=t(85161),K=t(27697),ee=t(79536),ne=t(55952),te=t(77438),ae=t(36493),ie="card___oHb6E",se="titleText___J9yLo",re="cardContent___NBZnP",le="xstr___dns5W",ue=t(86074),de=["value","label","xstr"],pe=function(){var e,n,t=(0,s.Ge)().account,a=(0,Y.Z)().t,r=t?"getCompetitionPageInfos":null,u=(0,p.ZP)(r,(function(){return(0,ne.r)({account:t,roundId:X.kT,orderBy:"pnl"})})),d=u.data,o=u.isLoading;return(0,ue.jsxs)("div",{className:"bgc10 br16 "+ie,children:[(0,ue.jsxs)("div",{className:"c200 f16 "+se,children:[(0,ue.jsx)("span",{children:(0,ue.jsx)($._H,{id:"Competitions"})}),(0,ue.jsx)(ee.m,{className:"f14",startTime:X.q1||(null==d?void 0:d.startAt),endedTime:X.xH||(null==d?void 0:d.endedAt)})]}),o?(0,ue.jsx)(U.Z,{}):(0,ue.jsxs)(J.Z,{children:[[{label:a("Profit Rank"),value:(null==d?void 0:d.profitRank)||"-",span:5,xs:12,md:5},{label:a("Profit"),value:(0,f.dp)(null==d||null===(e=d.user)||void 0===e?void 0:e.totalProfit,2).display({prefix:"$"})||"-",xs:12,md:5,span:5,xstr:!0},{label:a("Trade ROI Rank"),value:(null==d?void 0:d.tradeROIRank)||"-",span:5,xs:8,md:5},i()({label:a("Trade ROI"),value:(0,f.dp)(null==d||null===(n=d.user)||void 0===n?void 0:n.ROI).display({prefix:"",suffix:"%"})||"-",span:5},(0,ae.tq)()?{xs:{span:5,offset:3}}:{span:5})].map((function(e,n){var t=e.value,a=e.label,s=e.xstr,r=H()(e,de);return(0,ue.jsx)(q.Z,i()(i()({},r),{},{children:(0,ue.jsxs)("div",{className:l()("df fdc jcfe jcfs",re,G()({},le,Boolean(s))),children:[(0,ue.jsx)("span",{className:"f18 c200 fw3",children:t}),(0,ue.jsx)("span",{className:"f14 c100",children:a})]})}),n)})),(0,ue.jsx)(q.Z,{span:4,xs:8,md:4,children:(0,ue.jsxs)("div",{className:"df fdc jcfe jcfs tr "+re,children:[(0,ue.jsx)("span",{className:"f18 cGreen fw3",children:(0,f.dp)((0,K.Ub)(null==d?void 0:d.tradeROIRank)+(0,K.ff)(null==d?void 0:d.profitRank)).display({prefix:"$"})}),(0,ue.jsx)("span",{className:"f14 c100",children:a("Prize")})]})})]}),(0,ue.jsx)("div",{children:(0,ue.jsx)(te.Z,{href:z.BA.Competitions,type:"primary",style:{width:"120px"},children:(0,ue.jsx)($._H,{id:"View"})})})]})},oe=t(96963),ce=t(38478),ye={item:"item___FRv2D",tooltip:"tooltip___bOFO9",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},me=function(){return(0,ue.jsxs)("div",{className:ye.fundFeeInfo,children:[(0,ue.jsxs)("b",{children:[(0,ue.jsx)($._H,{id:"Fund"}),(0,ue.jsx)($._H,{id:"Fee"})]}),(0,ue.jsxs)("div",{children:[(0,ue.jsx)($._H,{id:"fundFeeInfoP1"}),(0,ue.jsx)("br",{}),(0,ue.jsx)($._H,{id:"fundFeeInfoP2"})]})]})},fe=function(e){var n=e.tradingData,t=(0,Y.Z)().t,a=(0,R.x)().chainId===F.qF;return(0,ue.jsxs)(J.Z,{className:ye.tradingInfo,gutter:24,children:[(0,ue.jsx)(q.Z,{xs:24,lg:12,children:(0,ue.jsxs)("div",{className:ye.item,children:[(0,ue.jsx)("div",{className:ye.head,children:t("Trading Data")}),(0,ue.jsxs)(J.Z,{className:ye.content,children:[(0,ue.jsxs)(q.Z,{span:a?12:8,className:ye.cell,children:[(0,ue.jsx)("div",{className:ye.fieldValue,children:(0,f.dp)(null==n?void 0:n.totalVolume).display()}),(0,ue.jsx)("div",{className:ye.fieldName,children:t("Total volume")})]}),!a&&(0,ue.jsxs)(q.Z,{span:8,className:ye.cell,children:[(0,ue.jsx)("div",{className:ye.fieldValue,children:(0,f.dp)(null==n?void 0:n.feesPaid).display()}),(0,ue.jsx)("div",{className:ye.fieldName,children:t("Fees Paid")})]}),(0,ue.jsxs)(q.Z,{span:a?10:8,offset:a?2:0,className:ye.cell,children:[(0,ue.jsx)("div",{className:ye.fieldValue,children:(0,f.dp)(null==n?void 0:n.realizedPnl).display()}),(0,ue.jsx)("div",{className:ye.fieldName,children:t("PNL")})]})]}),(0,ue.jsx)(te.Z,{className:ye.footer,href:"/trade",children:t("Trade")})]})}),(0,ue.jsx)(q.Z,{xs:24,lg:12,children:(0,ue.jsxs)("div",{className:ye.item,children:[(0,ue.jsx)("div",{className:ye.head,children:t("Trading Fees")}),(0,ue.jsxs)(J.Z,{className:ye.content,children:[(0,ue.jsxs)(q.Z,{span:12,className:ye.cell,children:[(0,ue.jsx)("div",{className:ye.fieldValue,children:"0.1000%"}),(0,ue.jsx)("div",{className:ye.fieldName,children:t("Open/Close Fee")})]}),(0,ue.jsxs)(q.Z,{span:10,offset:2,className:ye.cell,children:[(0,ue.jsx)("div",{className:ye.fieldValue,children:"0.0020% / 1h"}),(0,ue.jsx)(oe.Z,{overlayStyle:{maxWidth:420},placement:"topLeft",overlay:(0,ue.jsx)(me,{}),children:(0,ue.jsxs)("div",{className:"".concat(ye.fieldName," ").concat(ye.fee),children:[t("Funding Fee")," ",(0,ue.jsx)(ce.r,{className:ye.icon})]})})]})]}),(0,ue.jsx)(te.Z,{className:ye.footer,type:"c20",href:z.Ew.GitbookFeeStructure,children:t("Read More")})]})})]})},je=t(610),xe=t.n(je);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var ve=t(43680),Te=t(74595),he=t(82226),be=t(65334),Ne=t(1403),_e=t(16330),ge=t(70794),Me="content___oCbRs",we="mainText___omv2g",Ie="pnlContainer____9bQB",Oe="pnl___A7Mzd",Le="winRate____2WVz",Ae="prices___xdV4Q",ke="priceContainer___ioeHG",De="priceTitle___RSAFh",Ze="priceValue___s4toj",Ce=function(e){var n=e.userInfo;return(0,ue.jsxs)("div",{className:Me,children:[(0,ue.jsx)("span",{className:we,children:(0,ue.jsx)($._H,{id:"IMakeTrades",values:{value:(0,ue.jsx)("b",{children:n.trades})}})}),(0,ue.jsxs)("div",{className:Ie,children:[(0,ue.jsx)("span",{className:Oe,children:(0,ue.jsx)($._H,{id:"Winrate"})}),(0,ue.jsx)("span",{className:Le,children:null!=n&&n.winRate?(0,f.dp)((0,ge.O)(null==n?void 0:n.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"})]}),(0,ue.jsx)("div",{className:Ae,children:[{titleId:"profit",value:(0,f.dp)(null==n?void 0:n.avgProfit).display({prefix:"",suffix:"%"})},{titleId:"loss",value:(0,f.dp)(null==n?void 0:n.avgLoss).display({prefix:"",suffix:"%"})}].map((function(e){return(0,ue.jsxs)("div",{className:ke,children:[(0,ue.jsxs)("span",{className:De,children:[(0,ue.jsx)($._H,{id:"Average"})," ",(0,ue.jsx)($._H,{id:e.titleId})]}),(0,ue.jsx)("span",{className:Ze,children:e.value})]},e.titleId)}))})]})},Se=t(90381),Pe=function(e){var n,t=e.userInfo,a=(0,Y.Z)().t,i=Te.I.useContainer().setWalletVisible,r=(0,s.Ge)(),l=r.deactivate,d=r.account,p=(0,Ne.E3)(F.p4).provider,o=(0,u.useCallback)((function(){(0,_e.VK)(),(0,_e.hL)(),l()}),[l]);var c=[{name:a("Trades"),value:null!==(n=null==t?void 0:t.trades)&&void 0!==n?n:"-"},{name:a("Winrate"),value:null!=t&&t.winRate?(0,f.dp)((0,f.Q6)(null==t?void 0:t.winRate).multipliedBy(100)).display({prefix:"",suffix:"%"}):"-"},{name:a("Average profit"),value:(0,f.dp)(null==t?void 0:t.avgProfit).display({prefix:"",suffix:"%"}),xsValue:10},{name:a("Average loss"),value:(0,f.dp)(null==t?void 0:t.avgLoss).display({prefix:"",suffix:"%"})}];return(0,ue.jsxs)(J.Z,{className:Se.Z.walletInfo,children:[(0,ue.jsx)(q.Z,{xs:24,md:12,className:Se.Z.left,children:(0,ue.jsxs)(J.Z,{style:{width:"100%"},children:[(0,ue.jsx)(q.Z,{flex:"100px",style:{height:80},children:d?(0,ue.jsx)(xe(),{size:80,address:null!=d?d:"",provider:p}):(0,ue.jsx)("img",{className:Se.Z.avatar,src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjU2MyA0MC41YzAgMjEuMjI4IDE3LjIwOSAzOC40MzggMzguNDM3IDM4LjQzOCAyMS4yMjggMCAzOC40MzgtMTcuMjEgMzguNDM4LTM4LjQzOFM2MS4yMjcgMi4wNjIgNDAgMi4wNjIgMS41NjIgMTkuMjczIDEuNTYyIDQwLjVaTTQwIC41QzE3LjkwOS41IDAgMTguNDA5IDAgNDAuNXMxNy45MDkgNDAgNDAgNDAgNDAtMTcuOTA5IDQwLTQwUzYyLjA5MS41IDQwIC41WiIgZmlsbD0iIzFFMjEyNiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNTgyIDI4LjY4NEg0MGMwLTUuMzQtNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk00MCAyOS43NThIMjcuNTgyYy01LjAwNiAwLTkuMDY2IDQuMzI5LTkuMDY2IDkuNjY4aDEyLjQxOGM1LjAwNiAwIDkuMDY2LTQuMzMgOS4wNjYtOS42NjhabTkuMDY2IDBoMTIuNDE4YzAgNS4zMzktNC4wNiA5LjY2OC05LjA2NiA5LjY2OEg0MGMwLTUuMzQgNC4wNi05LjY2OCA5LjA2Ni05LjY2OFptMC0xLjA3NGgxMi40MThjMC01LjM0LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjMzOSA0LjA2IDkuNjY4IDkuMDY2IDkuNjY4Wk0yNy41ODIgNTEuMjQySDQwYzAtNS4zMzktNC4wNi05LjY2OC05LjA2Ni05LjY2OEgxOC41MTZjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaTTQwIDUyLjMxNkgyNy41ODJjLTUuMDA2IDAtOS4wNjYgNC4zMy05LjA2NiA5LjY2OGgxMi40MThjNS4wMDYgMCA5LjA2Ni00LjMyOSA5LjA2Ni05LjY2OFptOS4wNjYgMGgxMi40MThjMCA1LjM0LTQuMDYgOS42NjgtOS4wNjYgOS42NjhINDBjMC01LjMzOSA0LjA2LTkuNjY4IDkuMDY2LTkuNjY4Wm0wLTEuMDc0aDEyLjQxOGMwLTUuMzM5LTQuMDYtOS42NjgtOS4wNjYtOS42NjhINDBjMCA1LjM0IDQuMDYgOS42NjggOS4wNjYgOS42NjhaIiBmaWxsPSIjM0Y0NDRDIi8+PC9zdmc+"})}),(0,ue.jsx)(q.Z,{className:Se.Z.h5Address,children:(0,ue.jsx)(ve.x,{isFull:!1,account:d})}),(0,ue.jsxs)(q.Z,{className:Se.Z.details,flex:"auto",children:[(0,ue.jsx)(J.Z,{className:Se.Z.address,children:(0,ue.jsx)(ve.x,{isFull:!1,account:d})}),(0,ue.jsx)(J.Z,{className:Se.Z.cells,children:c.map((function(e,n){return(0,ue.jsxs)(q.Z,{className:Se.Z.cell,lg:6,xs:e.xsValue||7,children:[(0,ue.jsx)("span",{className:Se.Z.fieldValue,children:e.value}),(0,ue.jsx)("span",{className:Se.Z.fieldName,children:e.name})]},n)}))})]})]})}),(0,ue.jsxs)(q.Z,{xs:24,md:8,className:Se.Z.right,children:[d&&(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(he.T,{title:a("Share"),downloadName:"".concat(z.j$,"_share"),content:(0,ue.jsx)(Ce,{userInfo:t}),children:(0,ue.jsx)(te.Z,{disabled:!t,className:"".concat(Se.Z.shareBtn),children:(0,ue.jsx)($._H,{id:"Share"})})}),(0,ue.jsx)(te.Z,{className:Se.Z.btn,type:"c30",onClick:function(){return o(),localStorage.removeItem(be.Cs),void localStorage.removeItem(be.Wr)},children:(0,ue.jsx)($._H,{id:"Disconnect"})})]}),!d&&(0,ue.jsx)(te.Z,{className:Se.Z.btn,onClick:function(){return i(!0)},children:a("Connect wallet")})]})]})},Fe=function(){var e=(0,s.Ge)(),n=e.account,t=e.library,a=(0,R.x)().chainId,r=(0,Y.Z)().t,d=(0,p.ZP)(n,(function(e){return v(n||"",a)})).data,o=(0,p.ZP)([n],(function(){return T(n||"",a)})).data,c=(0,p.ZP)("getAccountFees",(function(){return A(t,a,n)})).data,y=(0,u.useMemo)((function(){return c?i()(i()({},o),{},{feesPaid:c}):o}),[c,o]);return(0,ue.jsxs)("div",{className:E,children:[(0,ue.jsx)(Pe,{userInfo:d}),a!==F.qF&&(0,ue.jsx)(pe,{}),(0,ue.jsx)(fe,{tradingData:y}),(0,ue.jsxs)("a",{href:z.Ew.BugBounty,target:"_blank",className:l()(Q,"df jcsb f14 lh20"),children:[(0,ue.jsxs)("span",{className:"df aic f16 c200",children:[r("Bug Bounty"),(0,ue.jsx)("i",{className:V+" f14",children:"New"})]}),(0,ue.jsxs)("div",{className:"df aic c100",children:[r("Submit a Bug"),(0,ue.jsx)(P,{className:"cp"})]})]})]})},Re=function(){return(0,ue.jsx)(d.Wh,{children:(0,ue.jsx)(Fe,{})})}},90381:function(e,n){n.Z={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"}},15746:function(e,n,t){var a=t(21584);n.Z=a.Z},71230:function(e,n,t){var a=t(92820);n.Z=a.Z}}]);