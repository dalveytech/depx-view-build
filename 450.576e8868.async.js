(self.webpackChunk=self.webpackChunk||[]).push([[450],{58926:function(t,n,r){"use strict";r.d(n,{PO:function(){return w},N0:function(){return A},T8:function(){return B},qF:function(){return y},TB:function(){return P},Qz:function(){return T},bx:function(){return x},LY:function(){return X},Ww:function(){return H},rC:function(){return U},p4:function(){return C},bw:function(){return D},ff:function(){return F},vT:function(){return N},Fe:function(){return R},RR:function(){return O},wc:function(){return Z},vC:function(){return z},FQ:function(){return L},Vr:function(){return I},B8:function(){return j},qz:function(){return V},jY:function(){return k},b9:function(){return Q},RM:function(){return J},EC:function(){return Y}});var e,i,o,a,c,u,s,l,p,d,f,E=r(861),b=r.n(E),m=r(38416),v=r.n(m),h=r(35553),g=r(41766),S=JSON.parse('[{"id":"421613","createdat":"2023-05-07T02:18:24.011763848+08:00","updatedat":"2023-05-15T19:59:07.415138901+08:00","modelState":0,"name":"Arbitrum Goerli","chainId":421613,"syncNumber":0,"rpc":"https://arb-goerli.g.alchemy.com/v2/4wiOIUjIWXdiZcSOcBmBx14uTosY8pA6","websocket":"","verifynum":30,"url":"https://testnet.arbiscan.io/","isTest":true,"symbol":"ETH","icon":"","ipfsicon":"","isSubmit":true,"recognizeName":"","syncUrl":"","Contracts":null,"isMonitor":true},{"id":"43113","createdat":"2023-05-07T02:18:24.016235285+08:00","updatedat":"2023-05-15T16:45:56.117739451+08:00","modelState":0,"enableFlagKey":"SUPPORT_FUJI","name":"Avalanche Fuji Testnet","chainId":43113,"syncNumber":0,"rpc":"https://api.avax-test.network/ext/bc/C/rpc","websocket":"","verifynum":30,"url":"https://testnet.snowtrace.io","isTest":true,"symbol":"AVAX","icon":"","ipfsicon":"","isSubmit":true,"recognizeName":"","syncUrl":"","Contracts":null,"isMonitor":false}]'),_=h.fi,C=1,T=43114,w=42161,A=42170,N=5,y=421613,O=56,I=97,R=31337,x=43113,U=(e={},v()(e,x,"Avalanche_Fuji_Testnet"),v()(e,T,"Avalanche"),v()(e,w,"Arbitrum"),v()(e,y,"Arbitrum_Testnet"),y),D=(i={},v()(i,w,[]),v()(i,x,["https://api.avax-test.network/ext/bc/C/rpc"]),v()(i,R,["http://192.168.1.34:8545"]),i);o={},v()(o,O,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),v()(o,I,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),v()(o,y,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.000300001")}),v()(o,w,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.000300001")}),v()(o,T,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.0100001")}),v()(o,N,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.0100001")}),v()(o,R,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:_("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:_("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:_("0.0100001")});function k(t){return 3===t?"https://ropsten.etherscan.io/":42===t?"https://kovan.etherscan.io/":t===O?"https://bscscan.com/":t===I?"https://testnet.bscscan.com/":t===y?"https://testnet.arbiscan.io/":t===w?"https://arbiscan.io/":t===T?"https://snowtrace.io/":t===N?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}a={},v()(a,x,"3000000000"),v()(a,T,"3000000000"),v()(a,R,"3000000000"),v()(a,N,"3000000000"),c={},v()(c,x,"200000000000"),v()(c,T,"200000000000"),v()(c,R,"200000000000"),v()(c,N,"200000000000");var F=v()({},x,"3000000"),B=["https://arb1.arbitrum.io/rpc"],X=["https://api.avax-test.network/ext/bc/C/rpc"],P=["https://goerli-rollup.arbitrum.io/rpc"],H=["https://api.avax.network/ext/bc/C/rpc"],G=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],W=(u={},v()(u,y,!0),v()(u,x,!1),u),L=b()(S.map((function(t){return+t.id}))).filter((function(t){return W[t]})),M=(s={},v()(s,x,"https://testnet.snowtrace.io/block"),v()(s,y,"https://goerli.arbiscan.io/block"),s),j=function(t,n){return"".concat(M[t],"/").concat(n)},$=(l={},v()(l,O,"BSC"),v()(l,I,"BSC Testnet"),v()(l,y,"Arbitrum Goerli Testnet"),v()(l,w,"Arbitrum"),v()(l,T,"Avalanche"),v()(l,x,"Avalanche Fuji Testnet"),v()(l,R,"Local Dev"),v()(l,N,"Goerli"),l),Z=(p={},v()(p,O,{chainId:"0x"+O.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:G,blockExplorerUrls:["https://bscscan.com"]}),v()(p,I,{chainId:"0x"+I.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),v()(p,y,{chainId:"0x"+y.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),v()(p,w,{chainId:"0x"+w.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:B,blockExplorerUrls:[k(w)]}),v()(p,T,{chainId:"0x"+T.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:H,blockExplorerUrls:[k(T)]}),v()(p,x,{chainId:"0x"+x.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),v()(p,N,{chainId:"0x"+N.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[k(N)]}),v()(p,R,{chainId:"0x"+R.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://192.168.1.34:8545"],blockExplorerUrls:[k(R)]}),p);function V(t){return $[t]}d={},v()(d,w,3),v()(d,T,3),v()(d,R,3),v()(d,N,3);var z=(f={},v()(f,C,["https://rpc.ankr.com/eth"]),v()(f,O,G),v()(f,w,B),v()(f,T,H),v()(f,x,X),v()(f,R,"http://192.168.1.34:8545"),v()(f,N,"https://goerli.infura.io/v3/"),v()(f,y,["https://goerli-rollup.arbitrum.io/rpc"]),f);function J(t){return(0,g.Z)(z[t])}function Q(t){return(0,g.Z)(D[t])}function Y(t){return L.includes(t)}},87798:function(t,n,r){"use strict";r.d(n,{Fc:function(){return c},Fr:function(){return u},II:function(){return i},Pi:function(){return e},T$:function(){return a},ZF:function(){return o}});var e="wss://data-stream.binance.com/stream",i="https://data.binance.com/api/v3/",o="https://api.binance.us/api/v3",a="wss://stream.binance.us:9443/stream",c="https://api-cloud.bitmart.com/spot/v1",u="https://info.blex.io/api"},61895:function(t,n,r){"use strict";r.d(n,{Q6:function(){return c},dp:function(){return u}});var e=r(2593),i=r(70794),o=r(24069),a=r(36493);function c(t){return t?t instanceof e.O$?(0,i.Z)((0,o.dN)(t,18,2)):(0,i.Z)("..."===t?0:t):(0,i.Z)(0)}function u(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==t||isNaN(Number(t)))return{display:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==t?void 0:t.defaultDisplay)||"-"},number:c(0),value:r};var e=c(t),i=e.toFixed(n,1);return(0,a.R$)().showFullDecimals&&(i=e.toString()),{display:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.thousandSeparator,r=void 0===n||n,o=t.prefix,a=void 0===o?"$":o,c=t.suffix,u=void 0===c?"":c,l=r?s(i):i,p=a||"";return e.lt(0)&&a&&(p="-".concat(p),l=l.slice(1)),"".concat(p).concat(l).concat(u||"")},number:e,value:0==+i?"0":i}}function s(t){return t?t.replace(/\d+/,(function(t){return t.replace(/(\d)(?=(\d{3})+$)/g,(function(t){return t+","}))})):""}},37432:function(t,n,r){"use strict";r.d(n,{x:function(){return a}});var e=r(34713),i=r(58926),o=r(65334);function a(){var t=(0,e.Ge)().chainId;if(!t){var n=localStorage.getItem(o.HC);n&&((t=parseInt(n))||localStorage.removeItem(o.HC))}return t&&i.FQ.includes(t)||(t=i.rC),{chainId:t}}},65334:function(t,n,r){"use strict";r.d(n,{Cs:function(){return p},HC:function(){return u},Wr:function(){return d},ZK:function(){return a},eQ:function(){return s},eT:function(){return c},kX:function(){return l},pW:function(){return i},pd:function(){return o},py:function(){return E},rI:function(){return f}});function e(t){return"".concat(t||"").concat("V1")}var i=e("DEI_0001"),o=e("DEI_0002"),a=(e("depx-market-selection"),e("depx-swap-leverage-option")),c=e("depx-swap-leverage-enable"),u=(e("depx-swap-leverage-useinput-lev"),e("DEPX_SELECTED_NETWORK")),s=e("DEPX_walletconnect"),l=e("DEPX_-walletlink"),p=e("DEPX_eagerconnect"),d=e("DEPX_currentprovider");e("DEPX_UPDATE_NOTICE_KEY");var f=function(t,n,r){var e=window.localStorage.getItem(t);if(!e)return n;try{var i=JSON.parse(e),o=i.data,a=i.validTime;if(!a)return o;var c=Number(a);if(Number.isNaN(c))return;if(Date.now()>c)return;return console.log("Read ".concat(t," from local cache")),r?i:o}catch(t){console.error(t)}},E=function(t,n,r){try{var e=JSON.stringify({data:n,validTime:r?Date.now()+r:""});window.localStorage.setItem(t,e)}catch(t){console.error(t)}}},24069:function(t,n,r){"use strict";r.d(n,{H2:function(){return p},He:function(){return a},Jl:function(){return c},_b:function(){return o},dN:function(){return s},tP:function(){return l}});var e=r(2593),i=r(35553);function o(t){try{return e.O$.from(t)}catch(t){return console.error("bigNumberify error",t),e.O$.from(0)}}function a(t){return t?t._isBigNumber?t.toNumber():Number(t):t}function c(t,n){return o(t).mul(o(10).pow(n))}var u=function(t,n){var r=t.toString();if(void 0===n)return r;if(0===n)return r.split(".")[0];var e=r.indexOf(".");if(-1!==e){var i=r.length-e-1;i>n&&(r=r.substr(0,r.length-(i-n)))}return r};var s=function(t,n,r,e,o){if(o||(o="..."),void 0===t||0===t.toString().length)return o;var a=i.bM(t,n);return a=u(a,r),e?function(t){if(!t)return"...";var n=t.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")}(a):a},l=function(t,n,r){if(!t)return"...";var e=i.bM(t,n);return function(t){return parseFloat(t)===parseInt(t)?parseInt(t).toString():t}(e=u(e,r))},p=function(t,n){if(t instanceof e.O$)return t;var r=parseFloat(t);return isNaN(r)?void 0:(t=u(t,n),o(i.vz(t,n)))}},98330:function(t,n,r){"use strict";var e=r(3410);n.Z=function(){var t=(0,e.YB)();return{t:function(n,r){return"string"==typeof n?t.formatMessage({id:n},r):t.formatMessage(n,r)}}}},36493:function(t,n,r){"use strict";r.d(n,{$H:function(){return u},D4:function(){return s},Ij:function(){return d},R$:function(){return c},do:function(){return l},tq:function(){return p},ty:function(){return f}});var e=r(18698),i=r.n(e),o=r(20238),a=(r(80129),r(65334)),c=(o.dE,function(){return(0,a.rI)(a.pW,Object.create({}))}),u=function(t){return-1!==window.location.href.indexOf("".concat(t,"="))};function s(t){return t?t.split("/")[0]:""}var l=function(t){var n="BTCUSDT";if(!t)return n;if("Test Market"===t)return n;var r=t.split("/");return"".concat(r[0],"USDT")};var p=function(){var t=navigator.userAgent.toLowerCase(),n=/iphone/.test(t)&&!/ipad/.test(t),r=/android/.test(t)&&/mobile/.test(t),e=/windows/.test(t)&&/phone/.test(t),i=window.innerWidth>window.innerHeight?window.innerHeight:window.innerWidth;return(n||r||e)&&i<768},d=function(){var t=window.navigator.userAgent.toLowerCase(),n={isMacOS:!1,isIOS:!1,isWindows:!1,isAndroid:!1};return/(macintosh|macintel|macppc|mac68k|macos)/i.test(t)?n.isMacOS=!0:/(iphone|ipad|ipod)/i.test(t)?n.isIOS=!0:/(win32|win64|windows|wince)/i.test(t)?n.isWindows=!0:/android/.test(t)&&(n.isAndroid=!0),n};function f(t){function n(t){return t.toString()}for(var r in t){var e,o;"object"===i()(t[r])&&("BigNumber"===(null===(e=t[r])||void 0===e?void 0:e.type)||null!==(o=t[r])&&void 0!==o&&o._isBigNumber)?t[r]=n(t[r]):"object"===i()(t[r])&&f(t[r])}return t}},52545:function(t,n,r){"use strict";r.d(n,{z:function(){return C}});var e,i,o,a,c,u=r(38416),s=r.n(u),l=r(42122),p=r.n(l),d=r(27424),f=r.n(d),E=r(17061),b=r.n(E),m=r(17156),v=r.n(m),h=r(8433),g=r(2593),S=r(87798),_=h.Z.create({baseURL:S.Fr,timeout:5e3}),C={getLocaleInfo:(c=v()(b()().mark((function t(n){var r,e;return b()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.post("/infomation/limitedregion",{account:n});case 2:return r=t.sent,e=r.data,t.abrupt("return",null==e?void 0:e.data);case 5:case"end":return t.stop()}}),t)}))),function(t){return c.apply(this,arguments)}),getReferralInfo:(a=v()(b()().mark((function t(n,r,e){var i,o,a;return b()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.post("/referrals/referral",{account:n,chainid:r,isrebates:e,isrelease:!0});case 2:return o=t.sent,a=o.data,t.abrupt("return",null==a||null===(i=a.data)||void 0===i?void 0:i.Detail);case 5:case"end":return t.stop()}}),t)}))),function(t,n,r){return a.apply(this,arguments)}),getCompetitionInfo:(o=v()(b()().mark((function t(n){var r,e;return b()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.post("/competition/getcompetition",{account:n});case 2:return r=t.sent,e=r.data,t.abrupt("return",null==e?void 0:e.data);case 5:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),getCompetitionList:(i=v()(b()().mark((function t(n){var r,e,i,o,a;return b()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.isroi,e=n.page,i=n.size,t.next=3,_.post("/competition/getcompetitiondetail",{isroi:r,page:e,size:i});case 3:return o=t.sent,a=o.data,t.abrupt("return",null==a?void 0:a.data);case 6:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)}),getErrorInfo:(e=v()(b()().mark((function t(n){var r,e,i,o,a,c,u,l,d;return b()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.lang,e=n.module,i=n.method,o=n.args,a=n.message,c={L:r,M:e,F:i,ErrorMessage:a},t.prev=2,o&&(null==o?void 0:o.length)>0&&(u=Object.entries(o[0]).reduce((function(t,n){var r=f()(n,2),e=r[0],i=r[1];return i instanceof g.O$?p()(s()({},e,String(i)),t):p()(s()({},e,i),t)}),{}),c.Arg=JSON.stringify(u)),t.next=6,_.post("/infomation/errorinfo",c);case 6:return l=t.sent,d=l.data,t.abrupt("return",null==d?void 0:d.data);case 11:t.prev=11,t.t0=t.catch(2),console.log("getErrorInfo: error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),function(t){return e.apply(this,arguments)})}},46601:function(){},24654:function(){}}]);