"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{31917:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(62435),n=r(77438),s=r(33114),i="pagination___qS7Hi",l="button___th9PV",d=r(86074);function c(e){var t=e.data,r=e.pageIndex,c=e.setPageIndex,o=e._data,u=(0,a.useMemo)((function(){return r===Math.ceil((null==o?void 0:o.length)/s.I)}),[r,o]);return(0,d.jsxs)("div",{className:i,children:[r>s.Q&&(0,d.jsx)(n.Z,{className:l,type:"c20",onClick:function(){c(r-1)},children:(0,d.jsx)("div",{children:"Prev"})}),t&&t.length>=s.I&&!u&&(0,d.jsx)(n.Z,{className:l,type:"c20",onClick:function(){c(r+1)},children:(0,d.jsx)("div",{children:"Next"})})]})}},43711:function(e,t,r){r.d(t,{g:function(){return a},k:function(){return n}});var a="http://dei.io/share",n="https://twitter.com/intent/tweet"},61895:function(e,t,r){r.d(t,{Q6:function(){return l},dp:function(){return d}});var a=r(2593),n=r(70794),s=r(24069),i=r(36493);function l(e){return e instanceof a.O$?(0,n.Z)((0,s.dN)(e,18,2)):(0,n.Z)("..."===e?0:e)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:r};var a=l(e),n=a.toFixed(t,1);return(0,i.R$)().showFullDecimals&&(n=a.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.thousandSeparator,r=void 0===t||t,s=e.prefix,i=void 0===s?"$":s,l=e.suffix,d=void 0===l?"":l,o=r?c(n):n,u=i||"";return a.lt(0)&&i&&(u="-".concat(u),o=o.slice(1)),"".concat(u).concat(o).concat(d||"")},number:a,value:0==+n?"0":n}}function c(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},37432:function(e,t,r){r.d(t,{x:function(){return i}});var a=r(34713),n=r(13805),s=r(65334);function i(){var e=(0,a.Ge)().chainId;if(!e){var t=localStorage.getItem(s.HC);t&&((e=parseInt(t))||localStorage.removeItem(s.HC))}return e&&n.FQ.includes(e)||(e=n.rC),{chainId:e}}},28722:function(e,t,r){r.d(t,{Dw:function(){return v},Jx:function(){return p},eI:function(){return x},x7:function(){return m}});var a,n=r(15009),s=r.n(n),i=r(99289),l=r.n(i),d=r(9783),c=r.n(d),o=r(88610),u=r(46495),f=r(13805);function x(e){return new o.f({uri:e,cache:new u.h})}var p="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",h=(a={},c()(a,f.Qz,p),c()(a,f.bx,p),a),m=function(e){return h[e]||p},v=function(){var e=l()(s()().mark((function e(t,r){var a,n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:r}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return a=e.sent,e.next=5,null==a?void 0:a.json();case 5:return n=e.sent,e.abrupt("return",(null==n?void 0:n.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},96714:function(e,t,r){r.d(t,{P:function(){return n},m:function(){return a}});var a=function(e){if(!e)return"";var t,r=new Date(1e3*e);if(!((t=r)instanceof Date)||isNaN(+t))return"";var a=(null==r?void 0:r.getMonth())+1;return(a=(null==r?void 0:r.getMonth())>9?""+a:"0"+a)+"/"+((null==r?void 0:r.getDate())>9?null==r?void 0:r.getDate():"0"+(null==r?void 0:r.getDate()))+" "+((null==r?void 0:r.getHours())>9?null==r?void 0:r.getHours():"0"+(null==r?void 0:r.getHours()))+":"+((null==r?void 0:r.getMinutes())>9?null==r?void 0:r.getMinutes():"0"+(null==r?void 0:r.getMinutes()))},n="-"},43854:function(e,t,r){r.r(t),r.d(t,{default:function(){return dt}});var a,n=r(34713),s=r(75081),i=r(62435),l=r(78621),d=r(5574),c=r.n(d),o=r(97857),u=r.n(o),f=r(68400),x=r.n(f),p=r(17283),h=r(77550),m=r(13805),v=r(24069),j=r(28722),_={referralsSummaries:[{tradedVolume:"12345678901234567890",totalTradersReferred:18,totalRebates:"98765432109876543210",lastUpdateAt:1648429200}],referralsDetails:[{referralCode:"ABC123",tradedVolume:"98765432109876543210",tradersReferred:19,totalRebates:"12345678901234567890"}],referralsHistory:[{tradeTime:1648429200,amount:"98765432109876543210",txHash:"0x1234567890abcdef"},{tradeTime:1648411200,amount:"12345678901234567890",txHash:"0xabcdef1234567890"},{tradeTime:1648411200,amount:"12345678901234567890",txHash:"0xabcdef1234567890"}]},g=(0,p.Ps)(a||(a=x()(["\n  query MyQuery($account: String!, $role: String, $referreeId: String) {\n    referralsSummaries(orderDirection: desc, where: { account: $account }) {\n      tradedVolume\n      totalTradersReferred\n      totalRebates\n      lastUpdateAt\n    }\n    referralsDetails(orderBy: tradedVolume, orderDirection: desc, where: { account: $account }) {\n      referralCode\n      tradedVolume\n      tradersReferred\n      totalRebates\n    }\n    referralsHistories(orderBy: tradeTime, orderDirection: desc, where: { id: $account }) {\n      tradeTime\n      amount\n      txHash\n    }\n    referralsSummary(id: $role) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n    traderSummary: referralsSummary(id: $referreeId) {\n      totalRebates\n      tradedVolume\n      totalTradersReferred\n    }\n  }\n"]))),b=function(e){if(e)return u()(u()({},e),{},{tradedVolume:(0,v.tP)(null==e?void 0:e.tradedVolume,18)})};var y=r(77438),w=r(9783),N=r.n(w),M=r(49808),T=r(94184),C=r.n(T),I="tabList___cNbRg",D="tabItem___eHmqz",A="selected___uh3dt",R="panel___afQe_",S=r(86074),E=function(e){var t=e.tabs,r=e.panels,a=(0,i.useState)(0),n=c()(a,2),s=n[0],l=n[1];return(0,S.jsxs)(M.O.Group,{defaultIndex:s,onChange:function(e){l(e)},children:[(0,S.jsx)(M.O.List,{className:I,children:t.map((function(e){return(0,S.jsx)(M.O,{className:function(e){var t=e.selected;return C()(D,N()({},A,t))},children:e.label})}))}),(0,S.jsx)(M.O.Panels,{children:r.map((function(e){return(0,S.jsx)(M.O.Panel,{children:(0,S.jsx)("div",{className:R,children:e.children})})}))})]})},H="description___mvEu0",k="referrals___qI_wF",L="header___lWEr8",O="title___Jub24",Z="subTitle___TUoIY",P="secondTitle___UzCd8",V="content___IKnhY",U="wrapper___RkALK",z="loadingContainer___MRc0t",Q=r(15009),F=r.n(Q),G=r(99289),$=r.n(G),B=r(68863),W=r(74595),Y=r(37432),q=r(88469);function J(e,t){var r=(0,i.useState)(e),a=c()(r,2),n=a[0],s=a[1];return(0,i.useEffect)((function(){var r=setTimeout((function(){s(e)}),t);return function(){clearTimeout(r)}}),[e,t]),n}var K=r(20238);function X(e){return e===K.dE}function ee(e,t,r){return te.apply(this,arguments)}function te(){return(te=$()(F()().mark((function e(t,r,a){var n,s;return F()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,h.Do)(t),e.next=3,a.getCodeOwners([n]);case 3:return s=e.sent,e.abrupt("return",!X(s[0]));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=/^\w+$/,ae=function(e,t,r){var a=(0,i.useState)(!1),n=c()(a,2),s=n[0],l=n[1],d=(0,i.useState)(!1),o=c()(d,2),u=o[0],f=o[1];return(0,i.useEffect)((function(){var a=!1;function n(){return(n=$()(F()().mark((function n(){var s;return F()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e&&re.test(e)&&null!==r){n.next=4;break}return l(!1),f(!1),n.abrupt("return");case 4:return l(!0),n.next=7,ee(e,t,r);case 7:s=n.sent,a||(f(s),l(!1));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){a=!0}}),[e,t]),[s,u]},ne=r(93879),se="text___JJFXW",ie="title___5l59y",le="subTitle___hjMwQ",de="btn___oMxX1",ce="input___kLskp",oe="editInput___rA2Zu",ue="editText___rTdx_",fe="redTip___ttsVC",xe=function(e){var t,r=e.type,a=void 0===r?"add":r,s=e.code,d=e.successCb,o=W.I.useContainer().setWalletVisible,u=(0,n.Ge)().account,f=(0,Y.x)().chainId,x=(0,ne.Z)(),p=(0,i.useState)(""),m=c()(p,2),v=m[0],j=m[1],_=J(v,300),g="edit"===a,b=ae(_,f,x),w=c()(b,2),M=w[0],T=w[1],I=(0,i.useState)(!1),D=c()(I,2),A=D[0],R=D[1],E={"referrals.title":"Enter referral code","referrals.subTitle":"Please input a referral code to benefit from fee discounts.","referrals.btnText":"Submit","referrals.editBtnText":"Save Changes","referrals.successMsg":"Referral code updated!","referrals.failMsg":g?"Referral code updated failed.":"Adding referral code failed."},H=(0,i.useMemo)((function(){return _.length>20}),[_]);function k(){return(k=$()(F()().mark((function e(){var t,r;return F()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=3;break}return o(!0),e.abrupt("return");case 3:if(null!==x){e.next=5;break}return e.abrupt("return");case 5:return R(!0),e.prev=6,e.next=9,x.setTraderReferralCodeByUser((0,h.Do)(v));case 9:return t=e.sent,e.next=12,t.wait();case 12:1===e.sent.status&&(q.U.success((0,S.jsx)(l._H,{id:"referrals.successMsg",defaultMessage:E["referrals.successMsg"]})),j(""),d()),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(6),r=(0,S.jsx)(l._H,{id:"referrals.failMsg",defaultMessage:E["referrals.failMsg"]}),q.U.error(r),console.error(e.t0);case 21:return e.prev=21,R(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[6,16,21,24]])})))).apply(this,arguments)}return(0,S.jsxs)("div",{children:[!g&&(0,S.jsxs)("div",{className:se,children:[(0,S.jsx)("div",{className:ie,children:(0,S.jsx)(l._H,{id:"referrals.title",defaultMessage:E["referrals.title"]})}),(0,S.jsx)("div",{className:le,children:H?(0,S.jsxs)("span",{className:fe,children:[(0,S.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,S.jsx)(l._H,{id:"referrals.subTitle",defaultMessage:E["referrals.subTitle"]})})]}),(0,S.jsx)(B.Z,{className:C()((t={},N()(t,ce,!g),N()(t,oe,g),t)),placeholder:"Enter referral code",value:v,onChange:function(e){return j(e.target.value)}}),g&&(0,S.jsx)("div",{className:ue,children:(0,S.jsx)("div",{className:le,children:H?(0,S.jsxs)("span",{className:fe,children:[(0,S.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,S.jsx)(l._H,{id:"referrals.subTitle",defaultMessage:E["referrals.subTitle"]})})}),(0,S.jsx)(y.Z,{className:de,size:"large",disabled:!(!u||""!==v&&!A&&!M&&T&&v!==s&&!H),onClick:function(){return k.apply(this,arguments)},children:(0,S.jsx)(l._H,{id:u?"edit"===a&&v===s?"Same as current active code":A?"Submitting...":""===v?"Enter referral code":M?"Checking code...":T?"Submit":"Referral code does not exist":"ConnectWallet"})})]})},pe=r(16945),he="wrapper___jm9XU",me="text___mGjcc",ve="title___l7sJ_",je="subTitle___K1pDN",_e="btn___EblL2",ge="input___m3tbU",be="modalForm___HfJiB",ye="redTip___eUu93",we=function(e){var t=e.isModal,r=void 0!==t&&t,a=e.successCb,s=W.I.useContainer().setWalletVisible,d=(0,n.Ge)(),o=d.account,u=d.library,f=d.active,x=(0,i.useState)(""),p=c()(x,2),m=p[0],v=p[1],j=(0,Y.x)().chainId,_=(0,ne.Z)(),g=J(m,300),b=ae(g,j,_),w=c()(b,2),N=w[0],M=w[1],T=(0,i.useState)(!1),C=c()(T,2),I=C[0],D=C[1];function A(){return o?I?"Creating...":""===m?"Enter a code":N?"Checking code...":M?"Code already taken":"Create":"Connect wallet"}var R=(0,i.useMemo)((function(){return g.length>20}),[g]);function E(){return!!f&&!!(""===m||I||N||M||R)}var H=function(){var e=$()(F()().mark((function e(){var t,r,n;return F()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D(!0),f){e.next=4;break}return s(!0),e.abrupt("return");case 4:if(m){e.next=6;break}return e.abrupt("return");case 6:return t=(0,h.Do)(m),r=new pe.G(u,j),e.prev=8,e.next=11,r.registerCode(t);case 11:return n=e.sent,e.next=14,n.wait();case 14:1===e.sent.status&&(q.U.success("Referral code added!"),a()),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(8),"Create code failed.",q.U.error("Create code failed."),console.error(e.t0);case 23:return e.prev=23,D(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[8,18,23,26]])})));return function(){return e.apply(this,arguments)}}();return r?(0,S.jsxs)("div",{className:be,children:[(0,S.jsx)(B.Z,{className:ge,value:m,placeholder:"Enter a code",onChange:function(e){v(e.target.value)}}),(0,S.jsx)("div",{className:me,children:R?(0,S.jsxs)("span",{className:ye,children:[(0,S.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,S.jsx)(l._H,{id:"referrals.looksLike"})}),(0,S.jsx)(y.Z,{className:_e,disabled:E(),onClick:H,children:(0,S.jsx)(l._H,{id:A()})})]}):(0,S.jsxs)("div",{className:he,children:[(0,S.jsxs)("div",{className:me,children:[(0,S.jsx)("div",{className:ve,children:"Generate Referral Code"}),(0,S.jsx)("div",{className:je,children:R?(0,S.jsxs)("span",{className:ye,children:[(0,S.jsx)(l._H,{id:"referrals.codeLenTip"})," "]}):(0,S.jsx)(l._H,{id:"referrals.looksLike"})})]}),(0,S.jsx)(B.Z,{className:ge,placeholder:"Enter a code",value:m,onChange:function(e){return v(e.target.value)}}),(0,S.jsx)(y.Z,{className:_e,disabled:E(),onClick:H,children:(0,S.jsx)(l._H,{id:A()})})]})},Ne=r(69499),Me=r(61895),Te=r(82327),Ce=r(74855),Ie=r.n(Ce),De=r(33114),Ae=r(63215),Re=r(4343),Se=r(90513),Ee="default___pVKee",He="icon___k3cAT",ke=function(e){var t=e.text;return(0,S.jsx)("div",{className:Ee,children:(0,S.jsxs)("div",{className:He,children:[(0,S.jsx)(Se.r,{}),(0,S.jsx)("div",{children:"string"==typeof t?(0,S.jsx)(l._H,{id:t}):t})]})})},Le=r(31917),Oe=r(43711),Ze="table___HcDLr",Pe="tableWrapper___vzD8o",Ve="tableTitle___LLqB4",Ue="referralCode___lsJAw",ze=function(e){var t=e.data,r=e.openMdl,a=(0,l.YB)(),n="https://dalveytech.github.io/depx-view-build",s=a.formatMessage({id:"referrals.ttwitterText"}),d=(0,i.useState)(De.Q),o=c()(d,2),u=o[0],f=o[1],x=[{title:(0,S.jsx)(l._H,{id:"referrals.referralCode",defaultMessage:"REFERRAL CODE"}),width:"20%",dataIndex:"referralCode",render:function(e){var t="".concat(n,"/#/trade?ref=").concat(e);return(0,S.jsxs)("div",{className:Ue,children:[(0,S.jsx)("span",{children:e}),(0,S.jsx)(Ie(),{text:t,onCopy:function(){q.U.success("Referral link copied to your clipboard")},children:(0,S.jsx)(Ae.r,{})}),(0,S.jsx)(Re.r,{onClick:function(t){return function(e,t){e.preventDefault();var r="".concat(n,"/#/trade?ref=").concat(t),a="".concat(Oe.k,"?text=").concat(s,"&url=").concat(encodeURIComponent(r));window.open(a,"_blank")}(t,e)}})]})}},{title:(0,S.jsx)(l._H,{id:"referrals.tradedVolume",defaultMessage:"TOTAL VOLUME"}),width:"20%",dataIndex:"tradedVolume",render:function(e){return(0,Me.dp)(e,2).display()}},{title:(0,S.jsx)(l._H,{id:"referrals.tradersReferred",defaultMessage:"TRADERS REFERRED"}),width:"30%",dataIndex:"tradersReferred"},{title:(0,S.jsx)(l._H,{id:"referrals.totalRebates",defaultMessage:"TOTAL REBATES"}),width:"30%",dataIndex:"totalRebates",render:function(e){return(0,Me.dp)(e,0).display({prefix:""})}}];return(0,S.jsxs)("div",{className:Pe,children:[(0,S.jsxs)("div",{className:Ve,children:[(0,S.jsx)("div",{children:(0,S.jsx)(l._H,{id:"referrals",defaultMessage:"Referral Codes"})}),(0,S.jsx)("span",{onClick:r,children:"+ Create"})]}),(0,S.jsx)(Te.ZP,{emptyText:"",className:Ze,columns:x,data:t}),!t.length&&(0,S.jsx)(ke,{text:(0,S.jsx)(l._H,{id:"referrals.noCodes",defaultMessage:"No referral codes yet."})}),t.length?(0,S.jsx)(Le.Z,{data:t,pageIndex:u,setPageIndex:f,_data:t}):(0,S.jsx)(S.Fragment,{})]})},Qe=r(96714),Fe="table___uTK_k",Ge="tableWrapper___zm2jx",$e="tableTitle___LYLxw",Be="href___CDzVy",We=function(e){var t=e.data,r=(0,i.useState)(De.Q),a=c()(r,2),n=a[0],s=a[1],d=(0,Y.x)().chainId,o=[{title:(0,S.jsx)(l._H,{id:"referrals.table.date",defaultMessage:"DATE"}),width:"20%",dataIndex:"tradeTime",render:function(e){return(0,Qe.m)(e)}},{title:(0,S.jsx)(l._H,{id:"referrals.table.amount",defaultMessage:"AMOUNT"}),width:"20%",dataIndex:"amount",render:function(e){return(0,Me.dp)(e,2).display()}},{title:(0,S.jsx)(l._H,{id:"referrals.table.transaction",defaultMessage:"TRANSACTION"}),width:"60%",dataIndex:"txHash",render:function(e){return(0,S.jsx)("a",{className:Be,href:(0,m.jY)(d)+"tx/"+e,target:"_blank",rel:"noopener noreferrer",children:(0,S.jsx)("span",{children:e})})}}];return(0,S.jsxs)("div",{className:Ge,children:[(0,S.jsx)("div",{className:$e,children:(0,S.jsx)(l._H,{id:"referrals.table.title",defaultMessage:"Rewards Distribution History"})}),(0,S.jsx)(Te.ZP,{emptyText:"",className:Fe,columns:o,data:t}),t&&!t.length&&(0,S.jsx)(ke,{text:"No rewards distribution history yet."}),t&&t.length?(0,S.jsx)(Le.Z,{data:t,pageIndex:n,setPageIndex:s,_data:t}):(0,S.jsx)(S.Fragment,{})]})},Ye="statInfo___ndwXM",qe="title___RzQgC",Je="amount___N0iJf",Ke="desc___Tdo6V",Xe=function(e){var t=e.title,r=e.desc,a=e.amount,n=e.text;return(0,S.jsxs)("div",{className:Ye,children:[(0,S.jsx)("div",{className:qe,children:"string"==typeof t?(0,S.jsx)(l._H,{id:t}):t}),a?(0,S.jsxs)("div",{className:Je,children:["".concat(a)," "]}):(0,S.jsx)(S.Fragment,{}),n?(0,S.jsxs)("div",{className:Je,children:[n," "]}):(0,S.jsx)(S.Fragment,{}),(0,S.jsxs)("div",{className:Ke,children:["string"==typeof r?(0,S.jsx)(l._H,{id:r}):r," "]})]})},et={list:"list___lZ21x",mdl:"mdl___PUyWV"},tt=r(96963),rt=r(30026),at={overlay:"overlay___XNM6b",text:"text___VqU3j",questionIcon:"questionIcon___dFiP1"},nt=function(e){var t=e.text,r=e.tipTitle,a=e.tipText,n=e.tipPlace,s=void 0===n?"top":n;return(0,S.jsxs)("div",{className:at.text,children:[(0,S.jsx)(l._H,{id:t}),(0,S.jsx)(tt.Z,{placement:s,overlayStyle:{minWidth:320},overlay:(0,S.jsx)("div",{className:at.overlay,children:(0,S.jsxs)("div",{className:at.label,children:[(0,S.jsx)("span",{className:at.title,children:(0,S.jsx)(l._H,{id:r})}),(0,S.jsx)("div",{children:(0,S.jsx)(l._H,{id:a})})]})}),children:(0,S.jsx)("div",{className:at.questionIcon,children:(0,S.jsx)(rt.r,{})})})]})},st=function(e){var t=e.data,r=e.successCb,a=(0,i.useState)(!1),n=c()(a,2),s=n[0],l=n[1],d=t.referralsSummaries,o=t.referralsDetails,u=t.referralsHistory,f=void 0===u?[]:u;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:et.list,children:[s&&(0,S.jsx)(Ne.Z,{className:et.mdl,visible:s,onClose:function(){return l(!1)},title:"Generate Referral Code",children:(0,S.jsx)(we,{isModal:!0,successCb:r})}),(0,S.jsx)(Xe,{title:(0,S.jsx)(nt,{text:"Total Trading Volume",tipText:"Volume traded by this account with an active referral code.",tipTitle:"Total Trading Volume",tipPlace:"top"}),amount:(0,Me.dp)(null==d?void 0:d.tradedVolume,2).display(),desc:"+$0.00 in the last week"}),(0,S.jsx)(Xe,{title:(0,S.jsx)(nt,{text:"Total Traders Referred",tipTitle:"Total Traders Referred",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),text:d.totalTradersReferred||"-",desc:"+$0.00 in the last week"}),(0,S.jsx)(Xe,{title:(0,S.jsx)(nt,{text:"Total Rebates",tipTitle:"Total Rebates",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),amount:d.totalRebates||"-",desc:"Tier 1 (5% rebate)"})]}),(0,S.jsx)(ze,{data:o,openMdl:function(){return l(!0)}}),!!f.length&&(0,S.jsx)(We,{data:f})]})},it=r(8193),lt=function(e){var t=e.code,r=e.data,a=e.successCb,n=(0,i.useState)(!1),s=c()(n,2),l=s[0],d=s[1],o=r.traderHistory,u=void 0===o?[]:o,f=r.traderSummary,x=function(){return d(!0)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:et.list,children:[l&&(0,S.jsx)(Ne.Z,{className:et.mdl,visible:l,onClose:function(){return d(!1)},title:"Edit Referral Code",children:(0,S.jsx)("div",{className:et.wrapper,children:(0,S.jsx)(xe,{btnText:"Edit Refferal code",type:"edit",successCb:a,code:t})})}),(0,S.jsx)(Xe,{title:(0,S.jsx)(nt,{text:"Total Trading Volume",tipText:"Volume traded by this account with an active referral code.",tipTitle:"Total Trading Volume",tipPlace:"top"}),amount:(0,Me.dp)(null==f?void 0:f.tradedVolume,2).display(),desc:"+$0.00 in the last week"}),(0,S.jsx)(Xe,{title:(0,S.jsx)(nt,{text:"Total Rebates",tipTitle:"Total Rebates",tipText:"Rebates earned by this account as a trader.",tipPlace:"top"}),text:(null==f?void 0:f.totalRebates)||"-",desc:"+$0.00 in the last week"}),(0,S.jsx)(Xe,{title:"Active Referral Code",text:function(e){return(0,S.jsxs)("div",{className:et.codeEditor,children:[e,(0,S.jsx)(it.$iz,{style:{cursor:"pointer"},size:"16",onClick:x})]})}(t),desc:(0,S.jsx)(nt,{text:"Tier 1 (5% discount)",tipText:"You will receive a 5% discount on your opening and closing fees, this discount will be airdropped to your account every Wednesday.",tipTitle:"Tier 1",tipPlace:"top"})})]}),(0,S.jsx)(We,{data:u})]})},dt=function(){var e,t=(0,n.Ge)(),r=t.chainId,a=t.account,d=(0,h.eI)(r,a),o=d.userHasReferrerCode,f=(d.userReferrerCode,d.userReferrerCodeString),x=function(){var e=(0,i.useState)(),t=c()(e,2),r=t[0],a=t[1],s=(0,i.useState)(!0),l=c()(s,2),d=l[0],o=l[1],f=(0,n.Ge)(),x=f.chainId,p=f.account,v=(0,j.eI)((0,j.x7)(x||m.rC)),y=(0,i.useState)(0),w=c()(y,2),N=w[0],M=w[1];return(0,i.useEffect)((function(){o(!0),x&&p?v.query({query:g,variables:{account:(p||"").toLowerCase(),role:"".concat(null==p?void 0:p.toLowerCase(),":referrer"),referreeId:"".concat(null==p?void 0:p.toLowerCase(),":referree")}}).then((function(e){var t;if(e.data){var r=null===(t=e.data.referralsDetails)||void 0===t?void 0:t.map((function(e){return u()(u()({},b(e)),{},{referralCode:(0,h.oE)(e.referralCode)})})),n=r.reduce((function(e,t){return e+t.tradersReferred}),0)||0,s=b(u()(u()({},e.data.referralsSummary),{},{totalTradersReferred:n}))||{};a({referralsSummaries:s,referralsDetails:r,referralsHistory:_.referralsHistory,traderHistory:_.referralsHistory,traderSummary:b(u()({},e.data.traderSummary))||{}})}})).catch(console.warn).finally((function(){o(!1)})):o(!1)}),[x,p,N]),{data:r,loading:d,setReloadKey:M,reloadKey:N}}(),p=x.data,v=x.loading,w=x.reloadKey,N=x.setReloadKey,M=function(){close(),setTimeout((function(){return N(w+1)}),1500)},T=[{children:(0,i.useMemo)((function(){return v||!p?(0,S.jsx)("div",{className:z,children:(0,S.jsx)(s.Z,{})}):o&&a?(0,S.jsx)(lt,{code:f,data:p||{},successCb:M},f):(0,S.jsx)("div",{className:U,children:(0,S.jsx)(xe,{btnText:"Enter Referral code",type:"add",successCb:M})})}),[o,v,p,a,w])},{children:(0,i.useMemo)((function(){var e;return v||!p?(0,S.jsx)("div",{className:z,children:(0,S.jsx)(s.Z,{})}):null!=p&&null!==(e=p.referralsDetails)&&void 0!==e&&e.length&&a?(0,S.jsx)(st,{data:p,successCb:M},w):(0,S.jsx)(we,{successCb:M})}),[p,null==p||null===(e=p.referralsDetails)||void 0===e?void 0:e.length,a,w,v])}];return(0,S.jsxs)("div",{className:k,children:[(0,S.jsxs)("div",{className:L,children:[(0,S.jsx)("div",{className:O,children:(0,S.jsx)(l._H,{id:"Referrals"})}),(0,S.jsx)("div",{className:Z,children:(0,S.jsx)(l._H,{id:"ReferralsSubTitle"})})]}),(0,S.jsx)(E,{tabs:[{label:"Traders"},{label:"Referrals"}],panels:T}),(0,S.jsxs)("div",{className:H,children:[(0,S.jsx)("div",{className:P,children:(0,S.jsx)(l._H,{id:"referrals.question"})}),(0,S.jsxs)("p",{className:V,children:[(0,S.jsx)(l._H,{id:"referrals.answer1"}),(0,S.jsx)("br",{}),(0,S.jsx)(l._H,{id:"referrals.answer2"})]}),(0,S.jsx)(y.Z,{type:"border",href:"#",children:(0,S.jsx)(l._H,{id:"learnMore"})})]})]})}},33114:function(e,t,r){r.d(t,{I:function(){return a},Q:function(){return n}});var a=20,n=1},63215:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&d(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M17.25 8.5h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.25v-7a1.75 1.75 0 0 0-1.75-1.75Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M15.5 8.5V6.75A1.75 1.75 0 0 0 13.75 5h-7A1.75 1.75 0 0 0 5 6.75v7a1.75 1.75 0 0 0 1.75 1.75H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))},90513:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&d(e,r,t[r]);return e})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),a.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),a.createElement("defs",null,a.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},30026:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&d(e,r,t[r]);return e})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z",fill:"#797B96"}))},4343:function(e,t,r){r.d(t,{r:function(){return c}});var a=r(62435),n=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const c=e=>a.createElement("svg",((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&d(e,r,t[r]);return e})({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("path",{d:"M20.625 7.064a7.087 7.087 0 0 1-2.032.557 3.548 3.548 0 0 0 1.556-1.959 7.065 7.065 0 0 1-2.248.859 3.54 3.54 0 0 0-6.03 3.229A10.05 10.05 0 0 1 4.576 6.05a3.537 3.537 0 0 0-.06 3.45 3.54 3.54 0 0 0 1.156 1.276 3.53 3.53 0 0 1-1.603-.443v.045a3.54 3.54 0 0 0 2.839 3.47 3.566 3.566 0 0 1-1.599.062 3.54 3.54 0 0 0 3.306 2.457 7.102 7.102 0 0 1-5.24 1.466 10.01 10.01 0 0 0 5.424 1.59c6.511 0 10.07-5.393 10.07-10.07 0-.151-.003-.305-.01-.457.692-.5 1.29-1.12 1.764-1.83l.002-.003Z",fill:"#9597B5"}));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjYyNSA3LjA2NGE3LjA4NyA3LjA4NyAwIDAgMS0yLjAzMi41NTcgMy41NDggMy41NDggMCAwIDAgMS41NTYtMS45NTkgNy4wNjUgNy4wNjUgMCAwIDEtMi4yNDguODU5IDMuNTQgMy41NCAwIDAgMC02LjAzIDMuMjI5QTEwLjA1IDEwLjA1IDAgMCAxIDQuNTc2IDYuMDVhMy41MzcgMy41MzcgMCAwIDAtLjA2IDMuNDUgMy41NCAzLjU0IDAgMCAwIDEuMTU2IDEuMjc2IDMuNTMgMy41MyAwIDAgMS0xLjYwMy0uNDQzdi4wNDVhMy41NCAzLjU0IDAgMCAwIDIuODM5IDMuNDcgMy41NjYgMy41NjYgMCAwIDEtMS41OTkuMDYyIDMuNTQgMy41NCAwIDAgMCAzLjMwNiAyLjQ1NyA3LjEwMiA3LjEwMiAwIDAgMS01LjI0IDEuNDY2IDEwLjAxIDEwLjAxIDAgMCAwIDUuNDI0IDEuNTljNi41MTEgMCAxMC4wNy01LjM5MyAxMC4wNy0xMC4wNyAwLS4xNTEtLjAwMy0uMzA1LS4wMS0uNDU3LjY5Mi0uNSAxLjI5LTEuMTIgMS43NjQtMS44M2wuMDAyLS4wMDNaIiBmaWxsPSIjOTU5N0I1Ii8+PC9zdmc+"}}]);