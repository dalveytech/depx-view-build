(self.webpackChunk=self.webpackChunk||[]).push([[717],{74595:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(5574),o=n.n(r),i=n(62435),s=n(88305),c=n(36493),u=n(20243),a=n(22537),l=(0,s.f)((function(){var e=(0,i.useState)(!1),t=o()(e,2),n=t[0],r=t[1],s=(0,i.useState)([]),l=o()(s,2),f=l[0],d=l[1],p=(0,i.useState)(!1),h=o()(p,2),g=h[0],v=h[1],b=(0,i.useState)(!1),w=o()(b,2),m=w[0],k=w[1],S=(0,i.useState)(/iPad/i.test(navigator.userAgent)),y=o()(S,2),P=y[0],I=(y[1],(0,i.useState)(a.t4.Binance)),C=o()(I,2),T=C[0],x=C[1];return(0,i.useEffect)((function(){window.onerror=function(e){e.includes(u.U.NoSupportCountry)&&(console.log("切换数据源：",{message:e}),x(a.t4.BinanceUS))}}),[]),(0,i.useEffect)((function(){k((0,c.tq)())}),[window]),{pendingTxns:f,walletVisible:n,isIpad:P,setWalletVisible:r,setPendingTxns:d,tableFlag:g,setTableFlag:v,isMobile:m,platform:T}}))},87798:function(e,t,n){"use strict";n.d(t,{II:function(){return o},Pi:function(){return r}});var r="wss://fstream.binance.com/stream",o="https://fapi.binance.com/fapi/v1/"},96748:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(78621),o=n(241),i=n(34713),s=n(58720),c=(n(62435),n(4480)),u=n(95591),a=n(74595),l={token:{colorBgElevated:"#151729"},components:{Tooltip:{colorBgDefault:"#313348"},Form:{colorTextHeading:"#fff"},Select:{controlHeightLG:42,colorBgContainer:"#313348",colorText:"#fff",colorBorder:"#313348",colorPrimaryHover:"#404157",colorBgElevated:"#313348",controlItemBgActive:"#404157",colorTextPlaceholder:"rgba(255,255,255,.6)"},Input:{colorBgContainer:"#232538",colorBorder:"#232538",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"rgba(255,255,255,.6)"},InputNumber:{colorBgContainer:"#232538",colorBorder:"#232538",colorText:"#fff",controlHeight:44,controlHeightLG:48,colorPrimaryActive:"#5C72FF",colorPrimaryHover:"#5C72FF",colorTextPlaceholder:"rgba(255,255,255,.6)",fontSize:16},Table:{borderRadius:16,colorBgContainer:"#151729",borderRadiusLG:16,colorText:"#fff",colorTextHeading:"#9597B5",fontWeightStrong:400,colorPrimary:"#9597B5",colorBorderSecondary:"rgba(255,255,255,.0)"}}},f=n(86074);function d(e){return new o.Q(e)}function p(){return(0,f.jsx)(u.J$,{value:{refreshInterval:5e3},children:(0,f.jsx)(i.Ht,{getLibrary:d,children:(0,f.jsx)(a.I.Provider,{children:(0,f.jsx)(c.Wh,{children:(0,f.jsx)(s.ZP,{theme:l,children:(0,f.jsx)(r.j3,{})})})})})})}},20243:function(e,t,n){"use strict";n.d(t,{N:function(){return v},U:function(){return r}});var r,o=n(15009),i=n.n(o),s=n(99289),c=n.n(s),u=n(97857),a=n.n(u),l=n(12444),f=n.n(l),d=n(72004),p=n.n(d),h=n(87798);!function(e){e.ConnectFailed="ConnectFailed",e.NoSupportCountry="NoSupportCountry"}(r||(r={}));var g=function(){function e(t){f()(this,e),this.url=t,this.socket=null,this.isOpened=!1,this.messageQueue=[],this.reconnectTimer=null,this.pingTimer=null,this.idCounter=1,this.reconnectCount=0,this.subscriptions=new Map,this.usingRestfulAPI=!1,this.initWebSocket()}var t;return p()(e,[{key:"initWebSocket",value:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onopen=function(){e.isOpened=!0,e.usingRestfulAPI=!1,e.sendCachedMessages(),e.heartBeat(),e.stopReconnect()},this.socket.onmessage=function(t){return e.onMessage(t)},this.socket.onclose=function(){e.isOpened=!1,e.stopHeartBeat()},this.socket.onerror=function(t){if(t.error===r.NoSupportCountry)throw r.NoSupportCountry;e.isOpened=!1,e.stopHeartBeat(),e.reconnect()}}},{key:"send",value:function(e){this.isOpened?this.socket.send(JSON.stringify(e)):this.messageQueue.push(e)}},{key:"reconnect",value:function(){console.log("websocket reconnecting..."),clearInterval(this.reconnectTimer);var e=this;this.isOpened=!1,this.reconnectTimer=setTimeout((function(){if(e.reconnectCount>=2)return console.error("WebSocket connection failed after multiple attempts."),e.stopReconnect(),e.usingRestfulAPI=!0,void e.pollRestfulAPI();e.reconnectCount++,e.initWebSocket()}),2e3)}},{key:"subscribe",value:function(e,t,n,r){var o=this.idCounter++,i=a()(a()({},e),{},{id:o});return this.subscriptions.set(o,{callback:t,predicate:n,restfulApiFunc:r}),this.usingRestfulAPI?this.pollRestfulAPI(o):this.send(i),o}},{key:"onMessage",value:function(e){var t=JSON.parse(e.data);try{this.subscriptions.forEach((function(e){var n=e.callback,r=e.predicate;void 0!==(null==t?void 0:t.error)?n(t.error,null):r(t)&&n(null,t)}))}catch(e){console.log("onMessage error: ",e)}}},{key:"pollRestfulAPI",value:function(e){var t=this;e?this.pollRestfulAPIForSubscription(e):this.subscriptions.forEach((function(e,n){t.pollRestfulAPIForSubscription(n)}))}},{key:"pollRestfulAPIForSubscription",value:(t=c()(i()().mark((function e(t){var n,r,o,s,c;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.subscriptions.get(t),r=n.restfulApiFunc,o=n.callback,s=n.predicate,r){e.next=4;break}return e.abrupt("return");case 4:n.hasOwnProperty("shouldStop")||(n.shouldStop=!1);case 5:if(!this.usingRestfulAPI||n.shouldStop){e.next=20;break}return e.prev=6,e.next=9,r();case 9:c=e.sent,s(c)&&o(null,c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),o(e.t0,null);case 16:return e.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:e.next=5;break;case 20:case"end":return e.stop()}}),e,this,[[6,13]])}))),function(e){return t.apply(this,arguments)})},{key:"stopPollingById",value:function(e){var t=this.subscriptions.get(e);t&&(t.shouldStop=!0)}},{key:"stopReconnect",value:function(){clearTimeout(this.reconnectTimer),this.reconnectTimer=null,this.reconnectCount=0}},{key:"heartBeat",value:function(){}},{key:"stopHeartBeat",value:function(){clearInterval(this.pingTimer),this.pingTimer=null}},{key:"unsubscribe",value:function(e){this.stopPollingById(e),this.subscriptions.delete(e),console.log("unsubscribe: ",this.subscriptions.get(e))}},{key:"sendCachedMessages",value:function(){for(;this.messageQueue.length>0;)this.send(this.messageQueue.shift())}},{key:"close",value:function(){this.socket.close(),this.stopHeartBeat()}}]),e}(),v=new g(h.Pi)},65334:function(e,t,n){"use strict";n.d(t,{Cs:function(){return f},HC:function(){return u},Ju:function(){return p},Wr:function(){return d},ZK:function(){return c},eQ:function(){return a},kX:function(){return l},pW:function(){return i},pd:function(){return s},py:function(){return g},rI:function(){return h}});var r=n(13907);function o(e){return"".concat(e||"").concat("V1")}var i=o("DEI_0001"),s=o("DEI_0002"),c=(o("depx-market-selection"),o("depx-swap-leverage-option")),u=(o("depx-swap-leverage-useinput-lev"),o("DEPX_SELECTED_NETWORK")),a=o("DEPX_walletconnect"),l=o("DEPX_-walletlink"),f=o("DEPX_eagerconnect"),d=o("DEPX_currentprovider");function p(e,t,n){var o=JSON.stringify(e);return(0,r.Z)(o,t,n)}var h=function(e,t){var n=window.localStorage.getItem(e);if(!n)return t;try{return JSON.parse(n).data}catch(e){console.error(e)}},g=function(e,t){try{var n=JSON.stringify({data:t});window.localStorage.setItem(e,n)}catch(e){console.error(e)}}},36493:function(e,t,n){"use strict";n.d(t,{$H:function(){return s},D4:function(){return c},Ij:function(){return l},R$:function(){return i},do:function(){return u},tq:function(){return a}});var r=n(20238),o=(n(80129),n(65334)),i=(r.dE,function(){return(0,o.rI)(o.pW,Object.create({}))}),s=function(e){return-1!==window.location.href.indexOf("".concat(e,"="))};function c(e){return e?e.split("/")[0]:""}var u=function(e){var t="BTCUSDT";if(!e)return t;if("Test Market"===e)return t;var n=e.split("/");return"".concat(n[0],"USDT")};var a=function(){var e=navigator.userAgent.toLowerCase(),t=/iphone/.test(e)&&!/ipad/.test(e),n=/android/.test(e)&&/mobile/.test(e),r=/windows/.test(e)&&/phone/.test(e),o=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(t||n||r)&&o<768},l=function(){var e=window.navigator.userAgent.toLowerCase(),t={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(e)?t.isMacOS=!0:/(iphone|ipad|ipod)/i.test(e)?t.isIOS=!0:/(win32|win64|windows|wince)/i.test(e)?t.isWindows=!0:/android/.test(e)&&(t.isAndroid=!0),t}},22537:function(e,t,n){"use strict";n.d(t,{BA:function(){return c},R7:function(){return i},j$:function(){return s},qL:function(){return o},t4:function(){return r}});var r,o="https://Dei.io",i="https://dalveytech.github.io/depx-view-build/#/trade",s="Dei.io";!function(e){e.Binance="binance",e.BinanceUS="binanceUS"}(r||(r={}));var c={Competitions:"/more/competitions"}},46601:function(){},24654:function(){}}]);