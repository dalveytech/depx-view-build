"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[627],{92627:function(e,t,n){n.d(t,{N:function(){return A}});var a=n(17061),r=n.n(a),s=n(17156),i=n.n(s),u=n(56690),p=n.n(u),y=n(89728),o=n.n(y),l=n(66115),d=n.n(l),c=n(61655),m=n.n(c),f=n(26389),b=n.n(f),v=n(38416),T=n.n(v),w=n(2593),h=JSON.parse('{"Mt":[{"inputs":[],"name":"MinOutError","type":"error"},{"inputs":[],"name":"MinSharesError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"supply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cumulativeRewardPerToken","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apr","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"averageStakedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"buy","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ICoreVault","name":"vault","type":"address"}],"name":"buyLpFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimLPReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimableReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coreVault","outputs":[{"internalType":"contract ICoreVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cumulativeRewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRouter","outputs":[{"internalType":"contract IFeeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAPR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAUM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLPPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLPReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUSDBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantAndRevoke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_coreVault","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"},{"internalType":"address","name":"_feeRouter","type":"address"},{"internalType":"address","name":"_distributor","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lpEarnedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"previousCumulatedRewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"minAssetsOut","type":"uint256"}],"name":"sell","outputs":[{"internalType":"uint256","name":"assetOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ICoreVault","name":"vault","type":"address"}],"name":"sellLpFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_apr","type":"uint256"}],"name":"setAPR","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensPerInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultRouter","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}'),x=n(3926),M=n(24069),k=n(25122),R=n(71641),g=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_asset","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"SellLPFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"convertToShares","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cooldownDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDepositAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract ILPToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"contract IPositionBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IVaultRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"setCooldownDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferOutAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]}'),_=function(e){m()(l,e);var t,n,a,s,u,y=b()(l);function l(e,t,n){return p()(this,l),y.call(this,e,t,n,g.Mt)}return o()(l,[{key:"getClassName",value:function(){return"CoreVault"}},{key:"lpToken",value:(u=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("lpToken");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"asset",value:(s=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("asset");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"totalAssets",value:(a=i()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("totalAssets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"convertToShares",value:(n=i()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.send("convertToShares",[t]);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"convertToAssets",value:(t=i()(r()().mark((function e(t){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.send("convertToAssets",[t]);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),l}(k.a),A=function(e){m()(z,e);var t,n,a,s,u,y,l,c,f,v,R,g,A,P,O,L,I,V,S,D,C,E,F,B,N,U,W,$=b()(z);function z(e,t){var n;return p()(this,z),n=$.call(this,e,t,h.Mt),T()(d()(n),"_vault",void 0),n}return o()(z,[{key:"getClassName",value:function(){return"VaultReward"}},{key:"getAPR",value:(W=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAPR");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return W.apply(this,arguments)})},{key:"getPriceDecimals",value:(U=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("priceDecimals");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return U.apply(this,arguments)})},{key:"getLPPrice",value:(N=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getLPPrice");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return N.apply(this,arguments)})},{key:"getAUM",value:(B=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAUM");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return B.apply(this,arguments)})},{key:"getLPReward",value:(F=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getLPReward");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return F.apply(this,arguments)})},{key:"getUSDBalance",value:(E=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getUSDBalance");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return E.apply(this,arguments)})},{key:"pendingRewards",value:(C=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("pendingRewards");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return C.apply(this,arguments)})},{key:"claimLPReward",value:(D=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.send("claimLPReward",[]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return D.apply(this,arguments)})},{key:"balanceSupplyOf",value:(S=i()(r()().mark((function e(t){var n,a;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=8;break}return e.next=6,n.balanceOf(t);case 6:return a=e.sent,e.abrupt("return",a);case 8:return e.abrupt("return",(0,M._b)(0));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return S.apply(this,arguments)})},{key:"balanceAssetsOf",value:(V=i()(r()().mark((function e(t){var n,a,s;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=11;break}return e.next=6,n.asset();case 6:return a=e.sent,s=new k.a(this._library,this._chainId,a),e.next=10,s.balanceOf(t);case 10:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",w.O$.from(0));case 12:case"end":return e.stop()}}),e,this)}))),function(e){return V.apply(this,arguments)})},{key:"asset",value:(I=i()(r()().mark((function e(){var t,n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return t=e.sent,e.next=5,t.asset();case 5:return n=e.sent,e.abrupt("return",new k.a(this._library,this._chainId,n));case 7:case"end":return e.stop()}}),e,this)}))),function(){return I.apply(this,arguments)})},{key:"approve",value:(L=i()(r()().mark((function e(t,n,a){var s,i;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new k.a(this._library,this._chainId,n),i=this._address,e.next=4,s.allowance(t,i);case 4:if(!e.sent.lt(a)){e.next=9;break}return e.next=8,s.approve(i,a.mul(1e3));case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return L.apply(this,arguments)})},{key:"isAssetApprove",value:(O=i()(r()().mark((function e(t){var n,a,s,i;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return n=e.sent,e.next=5,n.asset();case 5:return a=e.sent,s=new k.a(this._library,this._chainId,a),e.next=9,s.allowance(t,this._address);case 9:return i=e.sent,e.abrupt("return",i.gt(0));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"isBLPApprove",value:(P=i()(r()().mark((function e(t){var n,a;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=8;break}return e.next=6,n.allowance(t,this._address);case 6:return a=e.sent,e.abrupt("return",a.gt(0));case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return P.apply(this,arguments)})},{key:"buyLP",value:(A=i()(r()().mark((function e(t,n,a){var s,i,u,p;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return s=e.sent,e.next=5,s.asset();case 5:return i=e.sent,e.next=8,this.approve(t,i,n);case 8:if(!e.sent){e.next=15;break}return u={moduleName:"Rewards",method:"Buy BLP"},e.next=13,this.send("buy",[s._address,t,n,a],(function(){}),u);case 13:return p=e.sent,e.abrupt("return",p);case 15:return e.abrupt("return",(0,M._b)(0));case 16:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return A.apply(this,arguments)})},{key:"sellLP",value:(g=i()(r()().mark((function e(t,n,a){var s,i;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:return s=e.sent,e.next=5,this.approve(t,s._address,n);case 5:if(!e.sent){e.next=12;break}return console.log("sell lp amount %s minAmountOut %s",n,a),i={moduleName:"Rewards",method:"Sell BLP"},e.next=11,this.send("sell",[s._address,t,n,a],(function(){}),i);case 11:return e.abrupt("return",e.sent);case 12:return e.abrupt("return",(0,M._b)(0));case 13:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return g.apply(this,arguments)})},{key:"getLPFeeRate",value:(R=i()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("buyLpFee",null===(t=this._vault)||void 0===t?void 0:t._address);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return R.apply(this,arguments)})},{key:"getSellFeeRate",value:(v=i()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("sellLpFee",null===(t=this._vault)||void 0===t?void 0:t._address);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"previewDeposit",value:(f=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("previewDeposit",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"previewMint",value:(c=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("previewMint",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"previewWithdraw",value:(l=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("previewWithdraw",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"previewRedeem",value:(y=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("previewRedeem",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"totalSupply",value:(u=i()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(t=e.sent)){e.next=7;break}return e.next=6,t.totalSupply();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",w.O$.from(0));case 8:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"totalAssets",value:(s=i()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(t=e.sent)){e.next=7;break}return e.next=6,t.totalAssets();case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",w.O$.from(0));case 8:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"getVault",value:(a=i()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null==this._vault&&(t=(0,x.K)(this._chainId,"CoreVault"),this._vault=new _(this._library,this._chainId,t)),e.abrupt("return",this._vault);case 2:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"convertToShareMin",value:(n=i()(r()().mark((function e(t){var n,a,s;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=8;break}return e.next=6,n.convertToShares(t);case 6:return s=e.sent,e.abrupt("return",null==s||null===(a=s.mul(999))||void 0===a?void 0:a.div(1e3));case 8:return e.abrupt("return",w.O$.from(0));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"convertToAssetsMin",value:(t=i()(r()().mark((function e(t){var n,a,s;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getVault();case 2:if(null==(n=e.sent)){e.next=8;break}return e.next=6,n.convertToAssets(t);case 6:return s=e.sent,e.abrupt("return",null==s||null===(a=s.mul(999))||void 0===a?void 0:a.div(1e3));case 8:return e.abrupt("return",w.O$.from(0));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),z}(R.k)}}]);