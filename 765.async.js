(self.webpackChunk=self.webpackChunk||[]).push([[765],{94320:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(97857),a=n.n(r),s=n(13769),i=n.n(s),o=n(58720),u=n(36139),c=n(90513),l="default___THebl",p="text___DYTKH",d="tableContainer___y6be9",f="tableTitle___FYLz4",y="table___kapbS",m=n(86074),h=["emptyText","title","className"],b=function(e){var t=e.text;return(0,m.jsxs)("div",{className:"df jcc aic fdc ".concat(l),children:[(0,m.jsx)(c.r,{}),(0,m.jsx)("span",{className:p,children:t})]})},v=function(e){var t=e.emptyText,n=void 0===t?"No Data":t,r=e.title,s=e.className,c=i()(e,h);return r?(0,m.jsxs)("div",{className:"".concat(d," ").concat(s," bgc10"),children:[(0,m.jsx)("div",{className:"".concat(f," c200 f16 fw3"),children:r}),(0,m.jsx)(o.ZP,{renderEmpty:function(){return(0,m.jsx)(b,{text:n})},children:(0,m.jsx)(u.Z,a()(a()({},c),{},{className:"".concat(s," ").concat(y)}))})]}):(0,m.jsx)(o.ZP,{renderEmpty:function(){return(0,m.jsx)(b,{text:n})},children:(0,m.jsx)(u.Z,a()({className:"".concat(s," ").concat(y)},c))})}},48268:function(e,t,n){"use strict";n.d(t,{y:function(){return c}});var r=n(97857),a=n.n(r),s=n(62435),i=n(61895),o=n(86074),u=function(e){var t=e.defaultValue,n=void 0===t?"-":t,r=e.value,a=e.defaultValueIncludeSuffix,u=void 0!==a&&a,c=e.displayDecimals,l=void 0===c?2:c,p=e.label,d=void 0===p?"":p,f=e.thousandSeparator,y=void 0===f||f,m=e.prefix,h=void 0===m?"":m,b=e.suffix,v=void 0===b?"":b,k=(0,s.useMemo)((function(){return null==r?u?"".concat(h||"").concat(n).concat(v||""):n:(0,i.dp)(r,l).display({thousandSeparator:y,prefix:h,suffix:v})}),[r,n,l,y,h,v]);return(0,o.jsxs)(o.Fragment,{children:[d,k]})},c=function(e){var t=e.separator,n=void 0===t?"/":t,r=e.values;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,a()({},r[0]||{})),n,(0,o.jsx)(u,a()({},r[1]||{}))]})};t.Z=u},40819:function(e,t,n){"use strict";n.d(t,{a:function(){return N}});var r=n(9783),a=n.n(r),s=n(97857),i=n.n(s),o=n(5574),u=n.n(o),c=n(34713),l=n(62435),p=n(60088),d=n(4480),f=n(95591),y=n(15009),m=n.n(y),h=n(99289),b=n.n(h),v=n(12444),k=n.n(v),g=n(72004),T=n.n(g),x=n(31996),w=n.n(x),_=n(26037),C=n.n(_),S=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"address","name":"marketValid","type":"address"},{"indexed":false,"internalType":"address","name":"orderBookLong","type":"address"},{"indexed":false,"internalType":"address","name":"orderBookShort","type":"address"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allMarketsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_marketAddress","type":"address"},{"internalType":"address","name":"_marketValid","type":"address"},{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_orderBookLong","type":"address"},{"internalType":"address","name":"_orderBookShort","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_feeRouter","type":"address"},{"internalType":"address","name":"_feeVault","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"},{"internalType":"address","name":"_openStoreLong","type":"address"},{"internalType":"address","name":"_closeStoreLong","type":"address"},{"internalType":"address","name":"_openStoreShort","type":"address"},{"internalType":"address","name":"_closeStoreShort","type":"address"},{"internalType":"address","name":"_addressProvider","type":"address"},{"internalType":"uint256","name":"_minSlippage","type":"uint256"},{"internalType":"uint256","name":"_maxSlippage","type":"uint256"},{"internalType":"uint256","name":"_minLeverage","type":"uint256"},{"internalType":"uint256","name":"_maxLeverage","type":"uint256"},{"internalType":"uint256","name":"_maxTradeAmount","type":"uint256"},{"internalType":"uint256","name":"_minPay","type":"uint256"},{"internalType":"uint256","name":"_minCollateral","type":"uint256"},{"internalType":"bool","name":"_allowOpen","type":"bool"},{"internalType":"bool","name":"_allowClose","type":"bool"},{"internalType":"uint256","name":"_tokenDigits","type":"uint256"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"}],"internalType":"struct MarketFactory.CreateInputs","name":"_inputs","type":"tuple"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct IMarketFactory.Props","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct IMarketFactory.Props[]","name":"_markets","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketsV2","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketFactory.Outs[]","name":"_outs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"markets","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"},{"internalType":"address","name":"_newMarketAddr","type":"address"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),M=function(e){w()(r,e);var t,n=C()(r);function r(e,t,a){return k()(this,r),n.call(this,e,t,S.Mt,a)}return T()(r,[{key:"getMarkets",value:(t=b()(m()().mark((function e(){var t;return m()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getMarkets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getClassName",value:function(){return"MarketFactory"}}]),r}(n(37765).k),I=n(27960),P={name:"BTC/USDT",address:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99"},R=function(){var e=b()(m()().mark((function e(t,n){var r,a,s;return m()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,I.K)(t,"MarketFactory"),a=new M(n,t,r),e.next=4,a.getMarkets();case 4:if(e.t0=e.sent.map((function(e){return i()(i()({},e),{},{address:e.addr})})),e.t0){e.next=7;break}e.t0=[];case 7:return 0==(s=e.t0).length&&(console.warn("failed to get markets"),s.push(P)),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=n(37432),O=n(36493),B=n(74595),E=n(4872),L=n(38860),F=function(){var e=(0,A.x)().chainId,t=(0,c.Ge)().library,n=B.I.useContainer().platform,r=(0,f.ZP)("".concat(e),(function(){return R(e,t)})).data,s=(0,d.FV)(E.O7),o=u()(s,2)[1],y=(0,d.FV)(E.tr),m=u()(y,2)[1],h=(0,d.FV)(E.bI),b=u()(h,2),v=b[0],k=b[1],g=r&&(null==r?void 0:r.length)>0?"subscribeTickerBatch":null;(0,p.Z)([g,n],(function(e){var t=u()(e,2),n=t[0],s=t[1];if(!n)return function(){};var c=r.map((function(e){return(0,O.do)(null==e?void 0:e.name).toLowerCase()}));return(0,L.CY)(c,s,(function(e){o((function(t){return i()(i()({},t),{},a()({},e.symbol,e))}))}))})),(0,l.useEffect)((function(){return m(r)}),[r]),(0,l.useEffect)((function(){r&&r.length&&(v||k(r[0]))}),[r,v])},j=n(86074),N=function(){return F(),(0,j.jsx)("div",{})}},37432:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(34713),a=n(13805),s=n(65334);function i(){var e=(0,r.Ge)().chainId;if(!e){var t=localStorage.getItem(s.HC);t&&((e=parseInt(t))||localStorage.removeItem(s.HC))}return e&&a.FQ.includes(e)||(e=a.rC),{chainId:e}}},28722:function(e,t,n){"use strict";n.d(t,{Dw:function(){return b},Jx:function(){return y},eI:function(){return f},x7:function(){return h}});var r,a=n(15009),s=n.n(a),i=n(99289),o=n.n(i),u=n(9783),c=n.n(u),l=n(88610),p=n(46495),d=n(13805);function f(e){return new l.f({uri:e,cache:new p.h})}var y="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",m=(r={},c()(r,d.Qz,y),c()(r,d.bx,y),r),h=function(e){return m[e]||y},b=function(){var e=o()(s()().mark((function e(t,n){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},96714:function(e,t,n){"use strict";n.d(t,{P:function(){return a},m:function(){return r}});var r=function(e){if(!e)return"";var t,n=new Date(1e3*e);if(!((t=n)instanceof Date)||isNaN(+t))return"";var r=(null==n?void 0:n.getMonth())+1;return(r=(null==n?void 0:n.getMonth())>9?""+r:"0"+r)+"/"+((null==n?void 0:n.getDate())>9?null==n?void 0:n.getDate():"0"+(null==n?void 0:n.getDate()))+" "+((null==n?void 0:n.getHours())>9?null==n?void 0:n.getHours():"0"+(null==n?void 0:n.getHours()))+":"+((null==n?void 0:n.getMinutes())>9?null==n?void 0:n.getMinutes():"0"+(null==n?void 0:n.getMinutes()))},a="-"},43050:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,a=n(15009),s=n.n(a),i=n(99289),o=n.n(i),u=n(8433),c=n(97857),l=n.n(c),p=n(12444),d=n.n(p),f=n(72004),y=n.n(f);!function(e){e.ConnectFailed="ConnectFailed",e.NoSupportCountry="NoSupportCountry"}(r||(r={}));var m,h,b,v=function(){function e(t){d()(this,e),this.url=t,this.socket=null,this.isOpened=!1,this.messageQueue=[],this.reconnectTimer=null,this.pingTimer=null,this.idCounter=1,this.reconnectCount=0,this.subscriptions=new Map,this.usingRestfulAPI=!1,this.initWebSocket()}var t,n;return y()(e,[{key:"initWebSocket",value:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onopen=function(){e.isOpened=!0,e.usingRestfulAPI=!1,e.sendCachedMessages(),e.heartBeat(),e.stopReconnect()},this.socket.onmessage=function(t){return e.onMessage(t)},this.socket.onclose=function(t){console.log("WebSocket connection closed with code "+t.code+", reason: "+t.reason+", wasClean: "+t.wasClean),e.isOpened=!1,e.stopHeartBeat(),e.reconnect()},this.socket.onerror=function(t){console.log("WebSocket connection error",t),e.isOpened=!1,e.stopHeartBeat()}}},{key:"send",value:function(e){this.isOpened?this.socket.send(JSON.stringify(e)):this.messageQueue.push(e)}},{key:"reconnect",value:function(){console.log("websocket reconnecting..."),clearInterval(this.reconnectTimer);var e=this;this.isOpened=!1,this.reconnectTimer=setTimeout((function(){if(e.reconnectCount>=2)return console.error("WebSocket connection failed after multiple attempts."),e.stopReconnect(),e.usingRestfulAPI=!0,void e.pollRestfulAPI();e.reconnectCount++,e.initWebSocket()}),2e3)}},{key:"subscribe",value:function(e,t,n,r){var a=this.idCounter++,s=l()(l()({},e),{},{id:a});return this.subscriptions.set(a,{callback:t,predicate:n,restfulApiFunc:r}),this.usingRestfulAPI?this.pollRestfulAPI(a):this.send(s),a}},{key:"onMessage",value:(n=o()(s()().mark((function e(t){var n;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(t.data);try{this.subscriptions.forEach((function(e){var t=e.callback,r=e.predicate;void 0!==(null==n?void 0:n.error)?t(n.error,null):r(n)&&t(null,n)}))}catch(e){console.log("onMessage error: ",e)}return e.next=4,new Promise((function(e){return setTimeout(e,600)}));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"pollRestfulAPI",value:function(e){var t=this;e?this.pollRestfulAPIForSubscription(e):this.subscriptions.forEach((function(e,n){t.pollRestfulAPIForSubscription(n)}))}},{key:"pollRestfulAPIForSubscription",value:(t=o()(s()().mark((function e(t){var n,r,a,i,o;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.subscriptions.get(t),r=n.restfulApiFunc,a=n.callback,i=n.predicate,r){e.next=4;break}return e.abrupt("return");case 4:n.hasOwnProperty("shouldStop")||(n.shouldStop=!1);case 5:if(!this.usingRestfulAPI||n.shouldStop){e.next=20;break}return e.prev=6,e.next=9,r();case 9:o=e.sent,i(o)&&a(null,o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),a(e.t0,null);case 16:return e.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:e.next=5;break;case 20:case"end":return e.stop()}}),e,this,[[6,13]])}))),function(e){return t.apply(this,arguments)})},{key:"stopPollingById",value:function(e){var t=this.subscriptions.get(e);t&&(t.shouldStop=!0)}},{key:"stopReconnect",value:function(){clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.reconnectCount=0}},{key:"heartBeat",value:function(){}},{key:"stopHeartBeat",value:function(){clearInterval(this.pingTimer),this.pingTimer=null}},{key:"unsubscribe",value:function(e){this.stopPollingById(e),this.subscriptions.delete(e),console.log("unsubscribe: ",this.subscriptions.get(e))}},{key:"sendCachedMessages",value:function(){for(;this.messageQueue.length>0;)this.send(this.messageQueue.shift())}},{key:"close",value:function(){this.socket.close(),this.stopHeartBeat()}}]),e}(),k=new v("wss://fstream.binance.com/stream"),g=n(88672),T=u.Z.create({baseURL:"https://fapi.binance.com/fapi/v1/",timeout:5e3}),x={getKLines:(b=o()(s()().mark((function e(t,n){var r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("klines",{params:{symbol:t,interval:n}});case 2:if(!(r=e.sent).data){e.next=5;break}return e.abrupt("return",r.data.map(g.MO));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return b.apply(this,arguments)}),getPing:(h=o()(s()().mark((function e(){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("ping");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return h.apply(this,arguments)}),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a="".concat(n,"@kline_").concat(r),s=k.subscribe({method:"SUBSCRIBE",params:[a]},t,(function(e){return e.stream===a}));return function(){k.subscribe({method:"UNSUBSCRIBE",params:[a]},t,(function(e){return e.stream===a})),k.unsubscribe(s)}},getTickerPrice:function(e){return T.get("ticker/price",{params:{symbol:e}})},get24HChange:(m=o()(s()().mark((function e(t){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.get("ticker/24hr",{params:{symbol:t}}));case 1:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)}),subscribeTickerBatch:function(e,t,n){var r=k.subscribe({method:"SUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")}),n);return function(){k.subscribe({method:"UNSUBSCRIBE",params:e},t,(function(e){var t;return null==e||null===(t=e.stream)||void 0===t?void 0:t.includes("@ticker")})),k.unsubscribe(r)}}},w=x},88672:function(e,t,n){"use strict";n.d(t,{Ig:function(){return o},MO:function(){return i},vJ:function(){return s}});var r=n(5574),a=n.n(r);function s(e){var t=e.slice(-1),n=parseInt(e.slice(0,-1)),r=0;switch(t){case"m":r=60*n;break;case"h":r=60*n*60;break;case"d":r=24*n*60*60;break;default:throw new Error("Invalid time unit: ".concat(t))}return r}var i=function(e){var t=a()(e,5);return{time:t[0]/1e3,open:t[1],high:t[2],low:t[3],close:t[4]}},o=function(e){return e.replace("usdt","/USDT").toUpperCase()}},38860:function(e,t,n){"use strict";n.d(t,{w_:function(){return x},fK:function(){return _},CY:function(){return C}});var r=n(96695),a=n.n(r),s=n(15009),i=n.n(s),o=n(5574),u=n.n(o),c=n(99289),l=n.n(c),p=n(22537),d=n(61895),f=n(11853),y=n.n(f),m=n(36493),h=n(88672),b=new(y().pro.binanceus)({enableRateLimit:!0}),v={getKLines:function(){var e=l()(i()().mark((function e(t,n){var r,a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,h.Ig)(t),e.next=3,b.fetchOHLCV(r,n);case 3:return a=e.sent,e.abrupt("return",a.map(h.MO));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),subscribeKLine:function(e,t){var n=e.symbol,r=e.period,a=(0,h.Ig)(n),s=!0;function o(){return(o=l()(i()().mark((function e(){var n,o,c,l,p;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=17;break}return n=Date.now()-1e3*(0,h.vJ)(r),e.prev=2,e.next=5,b.watchOHLCV(a,r,n,2);case 5:o=e.sent,c=u()(o,1),l=c[0],p=(0,h.MO)(l),t(p),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:e.next=0;break;case 17:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return function(){o.apply(this,arguments)}(),function(){return s=!1}},subscribeTickerBatch:function(e,t){var n=e.map((function(e){return(0,h.Ig)(e)})),r=!0;function a(){return(a=l()(i()().mark((function e(){var a;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}return e.prev=1,e.next=4,b.watchTickers(n);case 4:a=e.sent,Object.values(a).forEach((function(e){t({symbol:(0,m.do)(e.symbol).toLowerCase(),indexPrice:(0,d.Q6)(e.last),"24Height":(0,d.Q6)(e.high),"24Low":(0,d.Q6)(e.low),"24Change":(0,d.Q6)(e.change),"24ChangeRate":(0,d.Q6)(e.percentage)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:e.next=0;break;case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return function(){a.apply(this,arguments)}(),function(){return r=!1}}},k=v,g=n(43050),T=function(e){return{symbol:e.s.toLowerCase(),indexPrice:(0,d.Q6)(e.c),"24Height":(0,d.Q6)(e.h),"24Low":(0,d.Q6)(e.l),"24Change":(0,d.Q6)(e.p),"24ChangeRate":(0,d.Q6)(e.P)}};function x(e,t,n){return w.apply(this,arguments)}function w(){return(w=l()(i()().mark((function e(t,n,r){return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r!==p.t4.Binance){e.next=7;break}return e.next=4,g.Z.getKLines(t,n);case 4:return e.abrupt("return",e.sent);case 7:return e.next=9,k.getKLines(t,n);case 9:return e.abrupt("return",e.sent);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("getKLines error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function _(e,t,n){var r=e.symbol,a=e.period,s=function(e,t){var r;e||n({time:(r=t.data).k.t/1e3,open:r.k.o,close:r.k.c,height:r.k.h,low:r.k.l})};return t===p.t4.Binance?g.Z.subscribeKLine({symbol:r,period:a},s):t===p.t4.BinanceUS?k.subscribeKLine({symbol:r,period:a},s):void 0}function C(e,t,n){if(t===p.t4.BinanceUS)return k.subscribeTickerBatch(e,n);var r=function(){var e=l()(i()().mark((function e(t){var n,r,a,s,o;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([g.Z.getTickerPrice(t),g.Z.get24HChange(t)]).catch((function(e){return console.error("Failed to get ticker info for ".concat(t),e),[null,null]}));case 2:if(n=e.sent,r=u()(n,2),a=r[0].data,s=r[1].data,a&&s){e.next=8;break}return e.abrupt("return");case 8:return o=T({s:a.symbol,c:a.price,g:s.highPrice,l:s.lowPrice,p:s.priceChange,P:s.priceChangePercent}),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=e.map((function(e){return"".concat(e,"@ticker")}));return g.Z.subscribeTickerBatch(s,(function(e,t){e||n(T(null==t?void 0:t.data))}),l()(i()().mark((function t(){var s,o,u,c;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=a()(e),t.prev=1,s.s();case 3:if((o=s.n()).done){t.next=11;break}return u=o.value,t.next=7,r(u);case 7:c=t.sent,n(c);case 9:t.next=3;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),s.e(t.t0);case 16:return t.prev=16,s.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))))}},4872:function(e,t,n){"use strict";n.d(t,{bI:function(){return u},O7:function(){return o},tr:function(){return i}});var r=n(4480),a=n(36493),s=(0,n(6983).J)({key:"depx-user-preference"}).persistAtom,i=(0,r.cn)({key:"marketsAtom",default:[]}),o=(0,r.cn)({key:"marketStoreAtom",default:{}}),u=(0,r.cn)({key:"marketSelectionAtom",default:"",effects_UNSTABLE:[s]});(0,r.nZ)({key:"symbolSelectionAtom",get:function(e){var t=(0,e.get)(u);return(0,a.do)(null==t?void 0:t.name).toLowerCase()}})},90513:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(62435),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement("svg",((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&u(e,n,t[n]);return e})({width:80,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{opacity:.12,fillRule:"evenodd",clipRule:"evenodd",d:"M66.668 46.667c0-18.41-14.924-33.334-33.333-33.334v5c15.648 0 28.333 12.686 28.333 28.334h5Zm-8.324 0c0-13.808-11.193-25-25-25h-.01v5.166h.012c10.954 0 19.833 8.88 19.833 19.834h5.165Zm-7.332 17.677a24.926 24.926 0 0 0 7.144-14.677H52.94a19.78 19.78 0 0 1-5.583 11.023l3.654 3.654ZM15.656 28.99a24.927 24.927 0 0 1 14.678-7.144v5.213a19.78 19.78 0 0 0-11.025 5.584l-3.653-3.653Zm17.679 34.344C42.539 63.333 50 55.871 50 46.667 50.002 37.462 42.54 30 33.335 30c-9.205 0-16.667 7.462-16.667 16.667h5C21.668 40.223 26.891 35 33.335 35 39.778 35 45 40.223 45 46.667c0 6.443-5.223 11.666-11.666 11.666v5Z",fill:"url(#default_svg__a)"}),r.createElement("rect",{x:1,y:1,width:78,height:78,rx:39,stroke:"url(#default_svg__b)",strokeOpacity:.12,strokeWidth:2}),r.createElement("defs",null,r.createElement("linearGradient",{id:"default_svg__a",x1:15.656,y1:13.333,x2:78.101,y2:30.645,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),r.createElement("linearGradient",{id:"default_svg__b",x1:0,y1:0,x2:97.93,y2:27.149,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#3CEAAA"}),r.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))))},80950:function(){},69948:function(){},96419:function(){},56353:function(){},35368:function(){},78339:function(){},55216:function(){},382:function(){},87387:function(){},82860:function(){},8623:function(){},7748:function(){},85568:function(){},69386:function(){},31616:function(){},56619:function(){},77108:function(){},69862:function(){},40964:function(){}}]);