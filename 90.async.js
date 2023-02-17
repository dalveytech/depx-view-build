"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90],{61895:function(R,C,t){t.d(C,{O:function(){return p}});var M=t(2593),u=t(70794),E=t(24069);function p(y){return y instanceof M.O$?(0,u.Z)((0,E.dN)(y,18,2)):(0,u.Z)(y)}},26977:function(R,C,t){t.d(C,{bW:function(){return D},gp:function(){return v},tV:function(){return O},mU:function(){return I},ZP:function(){return A}});var M=t(42122),u=t.n(M),E=t(94184),p=t.n(E),y={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},m=t(86074),_=function(o){var g=o.label,b=o.children,j=o.disabled,P=o.className,h=o.onChange,c=o.value;return(0,m.jsxs)("div",{className:p()(y.input,P),children:[(0,m.jsx)("div",{className:y.label,children:g}),(0,m.jsxs)("div",{className:y.wrapper,children:[(0,m.jsx)("input",{type:"number",value:c,disabled:j,onChange:function(n){h&&h(n.target.value)},placeholder:"0.0",min:"0"}),b]})]})},O=function(o){return(0,m.jsx)(_,u()(u()({label:"Price"},o),{},{children:(0,m.jsx)("div",{className:y.var,children:"USD"})}))},D=function(o){var g=o.symbol;return(0,m.jsx)(_,u()(u()({label:"Long"},o),{},{children:(0,m.jsx)("div",{className:y.var,children:g})}))},v=function(o){var g=o.onClickMaxBtn,b=o.symbol;return(0,m.jsx)(_,u()(u()({label:"Pay"},o),{},{children:(0,m.jsxs)("div",{className:y.flex,children:[(0,m.jsx)("div",{className:y.max,onClick:g,children:"MAX"}),(0,m.jsx)("div",{className:y.var,children:b!=null?b:"USDC"})]})}))},I=function(o){return(0,m.jsx)(_,u()(u()({label:"Receive"},o),{},{children:(0,m.jsx)("div",{className:y.flex,children:(0,m.jsx)("div",{className:y.var,children:o.symbol})})}))},A=_},25122:function(R,C,t){t.d(C,{a:function(){return j}});var M=t(17061),u=t.n(M),E=t(17156),p=t.n(E),y=t(56690),m=t.n(y),_=t(89728),O=t.n(_),D=t(94993),v=t.n(D),I=t(61655),A=t.n(I),T=t(26389),o=t.n(T),g=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),b=t(58072),j=function(P){A()(c,P);var h=o()(c);function c(e){var n,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return m()(this,c),s==null?n=h.call(this,e,g.Mt,l):n=h.call(this,e,s,l),v()(n)}return O()(c,[{key:"name",value:function(){var e=p()(u()().mark(function l(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.call("name");case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},l,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"symbol",value:function(){var e=p()(u()().mark(function l(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.call("symbol");case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},l,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"decimals",value:function(){var e=p()(u()().mark(function l(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.call("decimals");case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},l,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"totalSupply",value:function(){var e=p()(u()().mark(function l(){var s;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.call("totalSupply");case 2:return s=r.sent,r.abrupt("return",s);case 4:case"end":return r.stop()}},l,this)}));function n(){return e.apply(this,arguments)}return n}()},{key:"balanceOf",value:function(){var e=p()(u()().mark(function l(s){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.call("balanceOf",s);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},l,this)}));function n(l){return e.apply(this,arguments)}return n}()},{key:"transfer",value:function(){var e=p()(u()().mark(function l(s,a){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.call("transfer",s,a);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l,this)}));function n(l,s){return e.apply(this,arguments)}return n}()},{key:"allowance",value:function(){var e=p()(u()().mark(function l(s,a){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.call("allowance",s,a);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l,this)}));function n(l,s){return e.apply(this,arguments)}return n}()},{key:"approve",value:function(){var e=p()(u()().mark(function l(s,a){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.call("approve",s,a);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l,this)}));function n(l,s){return e.apply(this,arguments)}return n}()},{key:"transferFrom",value:function(){var e=p()(u()().mark(function l(s,a,r){return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,this.call("transferFrom",s,a,r);case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},l,this)}));function n(l,s,a){return e.apply(this,arguments)}return n}()},{key:"increaseAllowance",value:function(){var e=p()(u()().mark(function l(s,a){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.call("increaseAllowance",s,a);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l,this)}));function n(l,s){return e.apply(this,arguments)}return n}()},{key:"decreaseAllowance",value:function(){var e=p()(u()().mark(function l(s,a){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.call("decreaseAllowance",s,a);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},l,this)}));function n(l,s){return e.apply(this,arguments)}return n}()}]),c}(b.k)},58072:function(R,C,t){t.d(C,{k:function(){return g}});var M=t(17061),u=t.n(M),E=t(17156),p=t.n(E),y=t(56690),m=t.n(y),_=t(89728),O=t.n(_),D=t(38416),v=t.n(D),I=t(77294),A=t(78159),T=t(27350),o=t(24069),g=function(){function h(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;m()(this,h),v()(this,"_contract",void 0),v()(this,"_address",void 0),v()(this,"_library",void 0),v()(this,"_abi",void 0),v()(this,"_chainId",void 0),v()(this,"_PendingTxns",void 0),n==null?this._address=this.getAddress(this._chainId):this._address=n,this._abi=e,this._library=c,this._contract=this.newContract(this._address,this._abi)}return O()(h,[{key:"newContract",value:function(e,n){return n!=null&&(this._abi=n),b(e,this._abi,this._library)}},{key:"setChainId",value:function(e){this._chainId=e,this._address=this.getAddress(e),this._contract=this.newContract(this._address,this._abi)}},{key:"getAddress",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:43113,n=this.constructor.name,l=(0,A.K)(e,n);return l}},{key:"setPendingTxns",value:function(e){this._PendingTxns=e}},{key:"call",value:function(){var c=p()(u()().mark(function n(l){var s,a,r,i,d,w=arguments;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:for(s=w.length,a=new Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=w[r];return f.prev=1,f.next=4,(i=this._contract)[l].apply(i,a);case 4:return d=f.sent,f.abrupt("return",d);case 8:f.prev=8,f.t0=f.catch(1),console.log("SolidityContract call failed address",this._contract.address),console.log("SolidityContract call failed functionName",l),console.log("SolidityContract call failed params",a),console.log("SolidityContract call failed error",f.t0);case 14:case"end":return f.stop()}},n,this,[[1,8]])}));function e(n){return c.apply(this,arguments)}return e}()},{key:"send",value:function(){var c=p()(u()().mark(function n(l){var s,a,r,i=arguments;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:for(s=i.length,a=new Array(s>1?s-1:0),r=1;r<s;r++)a[r-1]=i[r];return w.next=3,j(this._chainId,this._contract,l,this._PendingTxns,a);case 3:return w.abrupt("return",w.sent);case 4:case"end":return w.stop()}},n,this)}));function e(n){return c.apply(this,arguments)}return e}()}]),h}(),b=function(c,e,n){return new I.Contract(c,e,n.getSigner())};function j(){return P.apply(this,arguments)}function P(){return P=p()(u()().mark(function h(){var c,e,n,l,s,a,r=arguments;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return c=r.length>0&&r[0]!==void 0?r[0]:5,e=r.length>1?r[1]:void 0,n=r.length>2?r[2]:void 0,l=r.length>3?r[3]:void 0,s=r.length>4?r[4]:void 0,d.prev=5,console.log("address",e.address),console.log(s),d.next=10,(0,T.HV)(c,e,n,s,{gasLimit:(0,o._b)(5e6),setPendingTxns:l});case 10:return a=d.sent,d.abrupt("return",a);case 14:d.prev=14,d.t0=d.catch(5),console.log("SolidityContract send failed address",e.address),console.log("SolidityContract send failed functionName",n),console.log("SolidityContract send failed params",s),console.log("SolidityContract send failed error",d.t0),console.error(d.t0);case 21:case"end":return d.stop()}},h,null,[[5,14]])})),P.apply(this,arguments)}}}]);
