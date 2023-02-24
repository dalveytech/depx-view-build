"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59],{74595:function(O,I,r){r.d(I,{I:function(){return v}});var x=r(27424),n=r.n(x),h=r(62435),m=r(88305),v=(0,m.f)(function(){var d=(0,h.useState)(!1),b=n()(d,2),C=b[0],M=b[1],j=(0,h.useState)([]),P=n()(j,2),f=P[0],g=P[1],c=(0,h.useState)(!1),p=n()(c,2),u=p[0],y=p[1];return{pendingTxns:f,walletVisible:C,setWalletVisible:M,setPendingTxns:g,tableFlag:u,setTableFlag:y}})},69499:function(O,I,r){r.d(I,{Z:function(){return c}});var x=r(11355),n=r(82546),h=r(62435),m=Object.defineProperty,v=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,C=(p,u,y)=>u in p?m(p,u,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[u]=y,M=(p,u)=>{for(var y in u||(u={}))d.call(u,y)&&C(p,y,u[y]);if(v)for(var y of v(u))b.call(u,y)&&C(p,y,u[y]);return p};const j=p=>h.createElement("svg",M({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),h.createElement("rect",{width:32,height:32,rx:16,fill:"#232538"}),h.createElement("path",{d:"m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4",stroke:"#9597B5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));var P="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiMyMzI1MzgiLz48cGF0aCBkPSJtMTIgMTIgNCA0bTAgMCA0LTRtLTQgNC00IDRtNC00IDQgNCIgc3Ryb2tlPSIjOTU5N0I1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",f=r(86074),g=function(u){var y=u.visible,N=u.title,S=u.width,w=u.onClose,i=u.children,s=u.className;return(0,f.jsx)(x.u,{appear:!0,show:y,as:h.Fragment,children:(0,f.jsxs)(n.V,{open:y,onClose:w,className:"dialog",children:[(0,f.jsx)(x.u.Child,{as:h.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,f.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25 opacity-100"})}),(0,f.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,f.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,f.jsx)(x.u.Child,{as:h.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,f.jsxs)(n.V.Panel,{className:"dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(s!=null?s:""),style:{width:S},children:[N&&(0,f.jsxs)(n.V.Title,{className:"dialog-title",children:[(0,f.jsxs)("span",{children:[N," "]}),(0,f.jsx)(j,{onClick:function(){w()}})]}),i]})})})})]})})},c=g},26977:function(O,I,r){r.d(I,{bW:function(){return M},gp:function(){return j},tV:function(){return C},mU:function(){return P},ZP:function(){return f}});var x=r(42122),n=r.n(x),h=r(94184),m=r.n(h),v={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},d=r(86074),b=function(c){var p=c.label,u=c.children,y=c.disabled,N=c.className,S=c.decimals,w=S===void 0?18:S,i=c.onChange,s=c.value,a=c.max,l=function(o){if(i){var t=new RegExp("^\\D*(\\d*(?:\\.\\d{0,".concat(w,"})?).*$"),"g"),T=o.replace(t,"$1");a&&+T>+a&&(T=a),i(T)}};return(0,d.jsxs)("div",{className:m()(v.input,N),children:[p&&(0,d.jsx)("div",{className:v.label,children:p}),(0,d.jsxs)("div",{className:v.wrapper,children:[(0,d.jsx)("input",{type:"text",value:s,disabled:y,onChange:function(o){l(o.target.value)},placeholder:"0.0"}),u]})]})},C=function(c){return(0,d.jsx)(b,n()(n()({label:"Price"},c),{},{children:(0,d.jsx)("div",{className:v.var,children:"USD"})}))},M=function(c){var p=c.symbol;return(0,d.jsx)(b,n()(n()({label:"Long"},c),{},{children:(0,d.jsx)("div",{className:v.var,children:p})}))},j=function(c){var p=c.onClickMaxBtn,u=c.symbol;return(0,d.jsx)(b,n()(n()({label:"Pay"},c),{},{children:(0,d.jsxs)("div",{className:v.flex,children:[(0,d.jsx)("div",{className:v.max,onClick:p,children:"MAX"}),(0,d.jsx)("div",{className:v.var,children:u!=null?u:"USDC"})]})}))},P=function(c){return(0,d.jsx)(b,n()(n()({label:"Receive"},c),{},{children:(0,d.jsx)("div",{className:v.flex,children:(0,d.jsx)("div",{className:v.var,children:c.symbol})})}))},f=b},25122:function(O,I,r){r.d(I,{a:function(){return y}});var x=r(17061),n=r.n(x),h=r(17156),m=r.n(h),v=r(56690),d=r.n(v),b=r(89728),C=r.n(b),M=r(94993),j=r.n(M),P=r(61655),f=r.n(P),g=r(26389),c=r.n(g),p=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),u=r(76935),y=function(N){f()(w,N);var S=c()(w);function w(i,s){var a,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:void 0;return d()(this,w),e==null?a=S.call(this,i,s,p.Mt,l):a=S.call(this,i,s,e,l),j()(a)}return C()(w,[{key:"name",value:function(){var i=m()(n()().mark(function a(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},a,this)}));function s(){return i.apply(this,arguments)}return s}()},{key:"symbol",value:function(){var i=m()(n()().mark(function a(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("symbol");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},a,this)}));function s(){return i.apply(this,arguments)}return s}()},{key:"decimals",value:function(){var i=m()(n()().mark(function a(){return n()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("decimals");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},a,this)}));function s(){return i.apply(this,arguments)}return s}()},{key:"totalSupply",value:function(){var i=m()(n()().mark(function a(){var l;return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.call("totalSupply");case 2:return l=o.sent,o.abrupt("return",l);case 4:case"end":return o.stop()}},a,this)}));function s(){return i.apply(this,arguments)}return s}()},{key:"balanceOf",value:function(){var i=m()(n()().mark(function a(l){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.call("balanceOf",l);case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},a,this)}));function s(a){return i.apply(this,arguments)}return s}()},{key:"transfer",value:function(){var i=m()(n()().mark(function a(l,e){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.call("transfer",l,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},a,this)}));function s(a,l){return i.apply(this,arguments)}return s}()},{key:"allowance",value:function(){var i=m()(n()().mark(function a(l,e){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.call("allowance",l,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},a,this)}));function s(a,l){return i.apply(this,arguments)}return s}()},{key:"approve",value:function(){var i=m()(n()().mark(function a(l,e){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.call("approve",l,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},a,this)}));function s(a,l){return i.apply(this,arguments)}return s}()},{key:"transferFrom",value:function(){var i=m()(n()().mark(function a(l,e,o){return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,this.call("transferFrom",l,e,o);case 2:return T.abrupt("return",T.sent);case 3:case"end":return T.stop()}},a,this)}));function s(a,l,e){return i.apply(this,arguments)}return s}()},{key:"increaseAllowance",value:function(){var i=m()(n()().mark(function a(l,e){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.call("increaseAllowance",l,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},a,this)}));function s(a,l){return i.apply(this,arguments)}return s}()},{key:"decreaseAllowance",value:function(){var i=m()(n()().mark(function a(l,e){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.call("decreaseAllowance",l,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},a,this)}));function s(a,l){return i.apply(this,arguments)}return s}()}]),w}(u.k)}}]);
