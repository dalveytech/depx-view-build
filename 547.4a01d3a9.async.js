"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[547],{28722:function(t,n,e){e.d(n,{Dw:function(){return x},eI:function(){return f},x7:function(){return m}});var r,o=e(15009),a=e.n(o),u=e(99289),i=e.n(u),c=e(9783),l=e.n(c),d=e(88610),s=e(46495),p=e(58926);function f(t){return new d.f({uri:t,cache:new s.h})}var v=(r={},l()(r,p.Qz,"avalanche-c-chain"),l()(r,p.PO,"arbitrum-one"),l()(r,p.N0,"arbitrum-nova"),l()(r,p.bx,"fujibeta"),l()(r,p.qF,"arbtest"),r),m=function(t){return"https://api.thegraph.com/subgraphs/name/dalveytech-adrew/"+v[t]},x=function(){var t=i()(a()().mark((function t(n,e){var r,o;return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:e}),mode:"cors"}).catch((function(t){console.log("err",t)}));case 3:return r=t.sent,t.next=6,null==r?void 0:r.json();case 6:return o=t.sent,t.abrupt("return",(null==o?void 0:o.data)||{});case 10:t.prev=10,t.t0=t.catch(0),console.log("fetchGql error",t.t0);case 13:return t.abrupt("return",{});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n,e){return t.apply(this,arguments)}}()},85161:function(t,n,e){e.d(n,{gd:function(){return i},kT:function(){return c},q1:function(){return a},xH:function(){return u}});var r=e(27484),o=e.n(r),a=o()("2023-04-23 19:00").unix(),u=o()("2023-04-24 19:00").unix(),i=5e3,c=2},27697:function(t,n,e){e.d(n,{Ub:function(){return p},Xz:function(){return d},Yy:function(){return s},ff:function(){return f}});var r=e(610),o=e.n(r),a=(e(62435),e(61895)),u=e(98330),i=e(85161),c=e(86074),l=function(t){return t&&t.length>13?"".concat(t.slice(0,5),"...").concat(t.slice(t.length-4)):t},d=function(t){var n=(0,u.Z)().t,e={title:n("Rank"),dataIndex:"rank",key:"rank",render:function(t,n,e){return e+1}},r={title:n("Account"),dataIndex:"account",key:"account",render:function(t){var n;return(0,c.jsxs)("div",{className:"df",children:[(0,c.jsx)(o(),{size:24,address:t}),(0,c.jsx)("span",{style:{marginLeft:"8px"},children:null!==(n=l(t))&&void 0!==n?n:"-"})]})}},i={title:n("Cum. Size"),dataIndex:"cumSize",key:"cumSize",render:function(t){return(0,a.dp)(t,2).display({prefix:"$"})}},d={title:n("Cum. Collateral"),dataIndex:"cumCollateral",key:"cumCollateral",render:function(t){return(0,a.dp)(t,2).display({prefix:"$"})}},s={title:"PNL",dataIndex:"PNL",render:function(t){return(0,a.dp)(t).display({prefix:"$"})}},v={title:"ROI",key:"ROI",render:function(t){return(0,a.dp)(null==t?void 0:t.ROI).display({prefix:"",suffix:"%"})||"-"}},m={title:n("Prize"),dataIndex:"Prize",key:"Prize",align:"right",render:function(n,e,r){return(0,c.jsx)("span",{className:"cGreen tr",children:(0,a.dp)(1===t?p(r+1):f(r+1)).display({prefix:"$"})})}},x={title:n("Reward"),dataIndex:"reward",render:function(t){return(0,a.dp)(t).display({prefix:"$"})}},h={title:n("Total Profit"),dataIndex:"totalProfit",key:"totalProfit",render:function(t){return(0,a.dp)(t,2).display("$")}};return 1===t?[e,r,i,d,s,v,m]:[e,r,i,d,s,x,h,m]},s=function(t,n,e,r){var o,c,l=(0,u.Z)().t,d={title:l("Trading Volume"),tooltipContent:l("The total volume accumulated between the activity"),text1:(0,a.dp)(null==n?void 0:n.totalVolume,2).display({prefix:"$"}),text2:l("Your Volume",{total:(0,a.dp)(null==n||null===(o=n.user)||void 0===o?void 0:o.totalVolume,2).display({prefix:"$"})})},s={title:l("BLP Supply"),tooltipContent:l("The total BLP supply accumulated between the activity"),text1:(0,a.dp)(null==e?void 0:e.totalSupply,2).display({prefix:"$"}),text2:l("Your supply",{yourStake:(0,a.dp)(null==e?void 0:e.yourStake,2).display({prefix:"$"})})},v={title:l("Prize Pool"),tooltipContent:l("The estimated amount distirbuted to all top traders by competition end results"),text1:"".concat((0,a.dp)(i.gd,0).display()),text2:l("Your Rank",1===t?{tradeROIRank:(null==r?void 0:r.tradeROIRank)||"-",tradeROIRankShow:(0,a.dp)(p(null==r?void 0:r.tradeROIRank)).display({prefix:"$"})}:{tradeROIRank:(null==r?void 0:r.profitRank)||"-",tradeROIRankShow:(0,a.dp)(f(null==r?void 0:r.profitRank)).display({prefix:"$"})})},m={title:l("Trades"),tooltipContent:l("The total open and close accumulated between the activity."),text1:(null==n?void 0:n.trades)||"-",text2:l("Your Trades",{trades:(null==n||null===(c=n.user)||void 0===c?void 0:c.trades)||"-"})};return 1===t?[d,s,v]:[d,m,v]};function p(t){return 1===t?1500:2===t?1e3:3===t?500:t<=50?42.53:0}function f(t){return t<=3?833.33:t<=10?214.28:t<=30?50:0}},79536:function(t,n,e){e.d(n,{m:function(){return c}});var r=e(5574),o=e.n(r),a=e(62435),u=e(86074),i=function(t){var n=Math.floor(t/86400),e=Math.floor(t%86400/3600),r=Math.floor(t%3600/60),o=t%60,a="";return n>0&&(a+=n+"d "),e>0&&(a+=e+"h "),r>0&&(a+=r+"m "),o>0&&(a+=o+"s "),a.trim()},c=function(t){var n=t.className,e=t.startTime,r=t.endedTime,c=(0,a.useState)("Start At "),l=o()(c,2),d=l[0],s=l[1],p=(0,a.useState)("-"),f=o()(p,2),v=f[0],m=f[1];return(0,a.useEffect)((function(){if(e&&r){var t=setInterval((function(){var t=Math.round(Date.now()/1e3);e>t?(s("Start After "),m(i(Number(e)-t))):r<t?(s("Ended"),m("")):(s("Ending in "),m(i(Number(r)-t)))}),1e3);return function(){return clearInterval(t)}}}),[e,r]),(0,u.jsxs)("span",{className:"dib c100 ".concat(n),children:[d,(0,u.jsx)("span",{className:"c200",children:v})]})}},55952:function(t,n,e){e.d(n,{I:function(){return h},r:function(){return y}});var r=e(97857),o=e.n(r),a=e(15009),u=e.n(a),i=e(99289),c=e.n(i),l=e(70794),d=e(24069),s=e(28722),p=function(){var t=c()(u()().mark((function t(n){var e,r,a,i,c,l,p,f,v,h,y;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.account,r=n.limit,a=void 0===r?50:r,i=n.orderBy,c=void 0===i?"pnl":i,l=n.roundId,p=void 0===l?1:l,f=n.chainId,v="query CompetitionsQuery {\n      competitionSummaries(where: {roundId: ".concat(p,"}) {\n        lpSupply\n        endedAt\n        id\n        roundId\n        startAt\n        volume\n        trades\n      }\n      competitionDetails(first: ").concat(a,", orderBy: ").concat(c,", orderDirection: desc, where: {roundId: ").concat(p,'}) {\n        account\n        collateral\n        cumCollateral\n        cumSize\n        id\n        pnl\n        roundId\n        totalProfit\n      }\n      competitionUsers(where: {account: "').concat(null==e?void 0:e.toLowerCase(),'", roundId: ').concat(p,"}) {\n        account\n        id\n        lpSupply\n        volume\n        roundId\n        trades\n      }\n    }\n  "),h=(0,s.x7)(f),t.next=5,(0,s.Dw)(h,v);case 5:if(y=t.sent,console.log("---getCompetitionSummaries---",y),!y){t.next=9;break}return t.abrupt("return",(k=void 0,I=void 0,w=void 0,b=void 0,k=(u=y).competitionSummaries,I=u.competitionDetails,w=u.competitionUsers,b=k[0],o()(o()({},b),{},{startAt:Number(null==b?void 0:b.startAt),endedAt:Number(null==b?void 0:b.endedAt),LP:(0,d.dN)(null==b?void 0:b.lpSupply,6),totalVolume:(0,d.dN)(null==b?void 0:b.volume,18),user:x(w[0]),list:I.map(m)})));case 9:case"end":return t.stop()}var u,k,I,w,b}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=c()(u()().mark((function t(n){var e,r,o,a,i,c,l;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.account,r=n.roundId,o=n.chainId,a='\n    query CompetitionUsersQuery {\n      competitionUsers(where: {account: "'.concat(null==e?void 0:e.toLowerCase(),'", roundId: ').concat(r,"}) {\n        id\n        account\n        lpSupply\n        volume\n        roundId\n        trades\n      }\n    }\n  "),i=(0,s.x7)(o),t.next=5,(0,s.Dw)(i,a);case 5:if(c=t.sent,!(l=c.competitionUsers)||!l.length){t.next=9;break}return t.abrupt("return",x(l[0]));case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=c()(u()().mark((function t(n){var e,r,o,a,i,c,l,d,p,f;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.orderBy,r=n.limit,o=n.offset,a=n.roundId,i="query userCompetitionQuery {\n      competitionSummaries(where: {roundId: ".concat(a,"}) {\n        endedAt\n        startAt\n      }\n      competitionDetails(orderBy: ").concat(e,", skip: ").concat(o,", orderDirection: desc, first: ").concat(r,", where: {roundId: ").concat(a,"}) {\n        account\n        id\n        pnl\n        totalProfit\n        cumCollateral\n        pnl\n      }\n   }\n  "),t.next=4,(0,s.Dw)(URL,i);case 4:if(!(c=t.sent)){t.next=8;break}return p=c.competitionDetails,f=c.competitionSummaries,t.abrupt("return",{startAt:null===(l=f[0])||void 0===l?void 0:l.startAt,endedAt:null===(d=f[0])||void 0===d?void 0:d.endedAt,list:null==p?void 0:p.map(m)});case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();var m=function(t){return o()(o()({},t),{},{PNL:(0,d.dN)(t.pnl,18),cumCollateral:(0,d.dN)(t.cumCollateral,18),cumSize:(0,d.dN)(t.cumSize,18),totalProfit:(0,d.dN)(t.totalProfit,18),ROI:"0"!==(null==t?void 0:t.cumCollateral)?new l.O(t.pnl).div(new l.O(t.cumCollateral)):0})},x=function(t){if(t)return o()(o()({},t),{},{LP:(0,d.dN)(null==t?void 0:t.lpSupply,6),totalVolume:(0,d.dN)(null==t?void 0:t.volume,18)})},h=function(){var t=c()(u()().mark((function t(n){var e;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),y=function(){var t=c()(u()().mark((function t(n){var e,r,a,i,l,d,s,p;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.account,r=n.roundId,a=e.toLowerCase(),t.next=4,f({account:a,roundId:r});case 4:if(i=t.sent){t.next=7;break}return t.abrupt("return",null);case 7:return l=o()(o()({},i),{},{profitRank:0,tradeROIRank:0}),d=function(){var t=c()(u()().mark((function t(){var n,e,i,c,l,d=arguments;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>0&&void 0!==d[0]?d[0]:"pnl",t.prev=1,e=1e3,i=0,t.next=6,v({limit:e,offset:i,orderBy:n,roundId:r});case 6:if(c=t.sent,!((l=null==c?void 0:c.list.findIndex((function(t){return t.account===a})))>=0)){t.next=10;break}return t.abrupt("return",o()(o()({},c),{},{user:null==c?void 0:c.list[l],rank:-1!==l?l+1:"-"}));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(1),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),t.prev=9,t.next=12,d("pnl");case 12:return(s=t.sent)&&(l=o()(o()({},s),{},{profitRank:s.rank})),t.next=16,d("totalProfit");case 16:return(p=t.sent)&&(l.tradeROIRank=p.rank),t.abrupt("return",l);case 21:t.prev=21,t.t0=t.catch(9),console.log("getUserCompetitionInfo error:",t.t0);case 24:case"end":return t.stop()}}),t,null,[[9,21]])})));return function(n){return t.apply(this,arguments)}}()}}]);