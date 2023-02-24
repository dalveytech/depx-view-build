"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[887],{

/***/ 35696:
/*!**************************************************!*\
  !*** ./src/pages/rewards/index.tsx + 13 modules ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ rewards; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(3410);
;// CONCATENATED MODULE: ./src/pages/rewards/rewards.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var rewards_modulemodules = ({"description":"description___fdR5Q","rewards":"rewards___Fi41_","header":"header___jUxaC","title":"title___BUw5W","subTitle":"subTitle___kgUk_","secondTitle":"secondTitle___PrMHa","content":"content___yFQIn","btn":"btn___xMg1H"});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(42122);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(27424);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@web3-react/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(34713);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 2 modules
var row = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(6226);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(59734);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/lib/bigNumber.ts
var bigNumber = __webpack_require__(61895);
// EXTERNAL MODULE: ./src/lib/numbers.ts
var numbers = __webpack_require__(24069);
;// CONCATENATED MODULE: ./src/services/datasource/thegraph/fee.ts
var get7DTotalFee = function get7DTotalFee() {
  return '2323.23';
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(56690);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(89728);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(66115);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(61655);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(26389);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(38416);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__(2593);
;// CONCATENATED MODULE: ./src/abis/ERC4626Router.json
var ERC4626Router_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"MaxAmountError","type":"error"},{"inputs":[],"name":"MaxSharesError","type":"error"},{"inputs":[],"name":"MinAmountError","type":"error"},{"inputs":[],"name":"MinSharesError","type":"error"},{"inputs":[],"name":"registerInternalVaultError","type":"error"},{"inputs":[],"name":"unregisterInternalVaultError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MARKET_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POSITIONBOOK_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VAULT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"borrowFromVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"calimLPReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"coreVault","outputs":[{"internalType":"contract BaseVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"depositMax","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"depositToVault","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fundsUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAPR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAUM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLPFeeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getLPPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLPReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUSDBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lptoken","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"},{"internalType":"address","name":"_coreVault","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidationProportionRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract LPToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"maxAmountIn","type":"uint256"}],"name":"mint","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"contract IPositionBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"minAmountOut","type":"uint256"}],"name":"redeemMax","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"fromVault","type":"address"},{"internalType":"contract IERC4626","name":"toVault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"redeemToDeposit","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"market","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"repayToVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFundsUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFromVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferToVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"vault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"maxSharesOut","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC4626","name":"fromVault","type":"address"},{"internalType":"contract IERC4626","name":"toVault","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"maxSharesIn","type":"uint256"},{"internalType":"uint256","name":"minSharesOut","type":"uint256"}],"name":"withdrawToDeposit","outputs":[{"internalType":"uint256","name":"sharesOut","type":"uint256"}],"stateMutability":"payable","type":"function"}]}');
// EXTERNAL MODULE: ./src/services/datasource/wallet/contracts/ERC20.ts + 1 modules
var ERC20 = __webpack_require__(25122);
// EXTERNAL MODULE: ./src/services/datasource/wallet/contracts/SolidityContract.ts + 7 modules
var SolidityContract = __webpack_require__(76935);
;// CONCATENATED MODULE: ./src/abis/LPToken.json
var LPToken_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tos","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"faucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastFaucetAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/vault/LPToken.ts






var LPToken = /*#__PURE__*/function (_ERC) {
  inherits_default()(LPToken, _ERC);
  var _super = createSuper_default()(LPToken);
  function LPToken(library, chainId, address) {
    classCallCheck_default()(this, LPToken);
    return _super.call(this, library, chainId, address, LPToken_namespaceObject.Mt);
  }
  createClass_default()(LPToken, [{
    key: "getClassName",
    value: function getClassName() {
      return 'LPToken';
    }
  }]);
  return LPToken;
}(ERC20/* ERC20 */.a);
;// CONCATENATED MODULE: ./src/abis/CoreVault.json
var CoreVault_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_asset","type":"address"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROUTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"convertToShares","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cooldownDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDepositAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract ILPToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"setCooldownDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferOutAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/vault/Vault.ts








var CoreVault = /*#__PURE__*/function (_ERC) {
  inherits_default()(CoreVault, _ERC);
  var _super = createSuper_default()(CoreVault);
  function CoreVault(library, chainId, address) {
    classCallCheck_default()(this, CoreVault);
    return _super.call(this, library, chainId, address, CoreVault_namespaceObject.Mt);
  }
  createClass_default()(CoreVault, [{
    key: "getClassName",
    value: function getClassName() {
      return 'CoreVault';
    }
  }, {
    key: "lpToken",
    value: function () {
      var _lpToken = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.call('lpToken');
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function lpToken() {
        return _lpToken.apply(this, arguments);
      }
      return lpToken;
    }()
  }, {
    key: "asset",
    value: function () {
      var _asset = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.call('asset');
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function asset() {
        return _asset.apply(this, arguments);
      }
      return asset;
    }()
  }, {
    key: "totalAssets",
    value: function () {
      var _totalAssets = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        var assets;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.call('totalAssets');
            case 2:
              assets = _context3.sent;
              return _context3.abrupt("return", assets);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function totalAssets() {
        return _totalAssets.apply(this, arguments);
      }
      return totalAssets;
    }()
  }]);
  return CoreVault;
}(ERC20/* ERC20 */.a);
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/vault/VaultRouter.ts















var VaultRouter = /*#__PURE__*/function (_SolidityContract) {
  inherits_default()(VaultRouter, _SolidityContract);
  var _super = createSuper_default()(VaultRouter);
  function VaultRouter(library, chainId) {
    var _this;
    classCallCheck_default()(this, VaultRouter);
    _this = _super.call(this, library, chainId, ERC4626Router_namespaceObject.Mt);
    defineProperty_default()(assertThisInitialized_default()(_this), "_lpToken", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "_vault", void 0);
    return _this;
  }
  createClass_default()(VaultRouter, [{
    key: "getClassName",
    value: function getClassName() {
      return 'VaultRouter';
    }
  }, {
    key: "getAPR",
    value: function () {
      var _getAPR = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.call('getAPR');
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getAPR() {
        return _getAPR.apply(this, arguments);
      }
      return getAPR;
    }()
  }, {
    key: "getLPPrice",
    value: function () {
      var _getLPPrice = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.call('getLPPrice');
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getLPPrice() {
        return _getLPPrice.apply(this, arguments);
      }
      return getLPPrice;
    }()
  }, {
    key: "getAUM",
    value: function () {
      var _getAUM = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.call('getAUM');
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getAUM() {
        return _getAUM.apply(this, arguments);
      }
      return getAUM;
    }()
  }, {
    key: "getLPReward",
    value: function () {
      var _getLPReward = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
        return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.call('getLPReward');
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getLPReward() {
        return _getLPReward.apply(this, arguments);
      }
      return getLPReward;
    }()
  }, {
    key: "pendingRewards",
    value: function () {
      var _pendingRewards = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
        return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.call('pendingRewards');
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function pendingRewards() {
        return _pendingRewards.apply(this, arguments);
      }
      return pendingRewards;
    }()
  }, {
    key: "calimLPReward",
    value: function () {
      var _calimLPReward = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6() {
        return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.send('calimLPReward');
            case 2:
              return _context6.abrupt("return", _context6.sent);
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function calimLPReward() {
        return _calimLPReward.apply(this, arguments);
      }
      return calimLPReward;
    }()
  }, {
    key: "balanceSupplyOf",
    value: function () {
      var _balanceSupplyOf = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7(account) {
        var lp;
        return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getLPToken();
            case 2:
              lp = _context7.sent;
              if (!(lp != undefined)) {
                _context7.next = 7;
                break;
              }
              _context7.next = 6;
              return lp.balanceOf(account);
            case 6:
              return _context7.abrupt("return", _context7.sent);
            case 7:
              return _context7.abrupt("return", (0,numbers/* bigNumberify */._b)(0));
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function balanceSupplyOf(_x) {
        return _balanceSupplyOf.apply(this, arguments);
      }
      return balanceSupplyOf;
    }()
  }, {
    key: "balanceAssetsOf",
    value: function () {
      var _balanceAssetsOf = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(account) {
        var v, address, usdc;
        return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.getVault();
            case 2:
              v = _context8.sent;
              if (!(v != undefined)) {
                _context8.next = 11;
                break;
              }
              _context8.next = 6;
              return v.asset();
            case 6:
              address = _context8.sent;
              //console.log(address, 'Vault_Asset')
              usdc = new ERC20/* ERC20 */.a(this._library, this._chainId, address);
              _context8.next = 10;
              return usdc.balanceOf(account);
            case 10:
              return _context8.abrupt("return", _context8.sent);
            case 11:
              return _context8.abrupt("return", bignumber/* BigNumber.from */.O$.from(0));
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function balanceAssetsOf(_x2) {
        return _balanceAssetsOf.apply(this, arguments);
      }
      return balanceAssetsOf;
    }()
  }, {
    key: "asset",
    value: function () {
      var _asset = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee9() {
        var vvv, asset;
        return regeneratorRuntime_default()().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.getVault();
            case 2:
              vvv = _context9.sent;
              _context9.next = 5;
              return vvv.asset();
            case 5:
              asset = _context9.sent;
              return _context9.abrupt("return", new ERC20/* ERC20 */.a(this._library, this._chainId, asset));
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function asset() {
        return _asset.apply(this, arguments);
      }
      return asset;
    }()
  }, {
    key: "approve",
    value: function () {
      var _approve = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee10(account, address, amount) {
        var asset, allow;
        return regeneratorRuntime_default()().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              asset = new ERC20/* ERC20 */.a(this._library, this._chainId, address);
              _context10.next = 3;
              return asset.allowance(account, this._address);
            case 3:
              allow = _context10.sent;
              if (!allow.lt(amount)) {
                _context10.next = 8;
                break;
              }
              _context10.next = 7;
              return asset.approve(this._address, amount.mul(1000));
            case 7:
              return _context10.abrupt("return", _context10.sent);
            case 8:
              return _context10.abrupt("return", true);
            case 9:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function approve(_x3, _x4, _x5) {
        return _approve.apply(this, arguments);
      }
      return approve;
    }()
  }, {
    key: "isAssetApprove",
    value: function () {
      var _isAssetApprove = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee11(account) {
        var vvv, asset, token, allow;
        return regeneratorRuntime_default()().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getVault();
            case 2:
              vvv = _context11.sent;
              _context11.next = 5;
              return vvv.asset();
            case 5:
              asset = _context11.sent;
              token = new ERC20/* ERC20 */.a(this._library, this._chainId, asset);
              _context11.next = 9;
              return token.allowance(account, this._address);
            case 9:
              allow = _context11.sent;
              return _context11.abrupt("return", allow.gt(0));
            case 11:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function isAssetApprove(_x6) {
        return _isAssetApprove.apply(this, arguments);
      }
      return isAssetApprove;
    }()
  }, {
    key: "isDLPApprove",
    value: function () {
      var _isDLPApprove = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee12(account) {
        var lp, allow;
        return regeneratorRuntime_default()().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.getLPToken();
            case 2:
              lp = _context12.sent;
              if (!(lp != undefined)) {
                _context12.next = 8;
                break;
              }
              _context12.next = 6;
              return lp.allowance(account, this._address);
            case 6:
              allow = _context12.sent;
              return _context12.abrupt("return", allow.gt(0));
            case 8:
              return _context12.abrupt("return", false);
            case 9:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function isDLPApprove(_x7) {
        return _isDLPApprove.apply(this, arguments);
      }
      return isDLPApprove;
    }()
  }, {
    key: "buyLP",
    value: function () {
      var _buyLP = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee13(to, amount, minSharesOut) {
        var vvv, asset, app, res;
        return regeneratorRuntime_default()().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.getVault();
            case 2:
              vvv = _context13.sent;
              _context13.next = 5;
              return vvv.asset();
            case 5:
              asset = _context13.sent;
              _context13.next = 8;
              return this.approve(to, asset, amount);
            case 8:
              app = _context13.sent;
              if (!app) {
                _context13.next = 14;
                break;
              }
              _context13.next = 12;
              return this.send('deposit', vvv._address, to, amount, minSharesOut);
            case 12:
              res = _context13.sent;
              return _context13.abrupt("return", res);
            case 14:
              return _context13.abrupt("return", (0,numbers/* bigNumberify */._b)(0));
            case 15:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function buyLP(_x8, _x9, _x10) {
        return _buyLP.apply(this, arguments);
      }
      return buyLP;
    }()
  }, {
    key: "sellLP",
    value: function () {
      var _sellLP = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee14(to, amount, minAmountOut) {
        var vvv, address, app;
        return regeneratorRuntime_default()().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this.getVault();
            case 2:
              vvv = _context14.sent;
              _context14.next = 5;
              return vvv.lpToken();
            case 5:
              address = _context14.sent;
              _context14.next = 8;
              return this.approve(to, address, amount);
            case 8:
              app = _context14.sent;
              if (!app) {
                _context14.next = 13;
                break;
              }
              _context14.next = 12;
              return this.send('redeem', vvv._address, to, amount, minAmountOut);
            case 12:
              return _context14.abrupt("return", _context14.sent);
            case 13:
              return _context14.abrupt("return", (0,numbers/* bigNumberify */._b)(0));
            case 14:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function sellLP(_x11, _x12, _x13) {
        return _sellLP.apply(this, arguments);
      }
      return sellLP;
    }()
  }, {
    key: "getLPFeeRate",
    value: function () {
      var _getLPFeeRate = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee15() {
        return regeneratorRuntime_default()().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.t0 = this;
              _context15.next = 3;
              return this.getVault();
            case 3:
              _context15.t1 = _context15.sent._address;
              _context15.next = 6;
              return _context15.t0.call.call(_context15.t0, 'getLPFeeRate', _context15.t1);
            case 6:
              return _context15.abrupt("return", _context15.sent);
            case 7:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function getLPFeeRate() {
        return _getLPFeeRate.apply(this, arguments);
      }
      return getLPFeeRate;
    }()
  }, {
    key: "totalSupply",
    value: function () {
      var _totalSupply = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee16() {
        var lp;
        return regeneratorRuntime_default()().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _context16.next = 2;
              return this.getLPToken();
            case 2:
              lp = _context16.sent;
              if (!(lp != undefined)) {
                _context16.next = 7;
                break;
              }
              _context16.next = 6;
              return lp.totalSupply();
            case 6:
              return _context16.abrupt("return", _context16.sent);
            case 7:
              return _context16.abrupt("return", bignumber/* BigNumber.from */.O$.from(0));
            case 8:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function totalSupply() {
        return _totalSupply.apply(this, arguments);
      }
      return totalSupply;
    }()
  }, {
    key: "totalAssets",
    value: function () {
      var _totalAssets = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee17() {
        var v;
        return regeneratorRuntime_default()().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this.getVault();
            case 2:
              v = _context17.sent;
              if (!(v != undefined)) {
                _context17.next = 7;
                break;
              }
              _context17.next = 6;
              return v.totalAssets();
            case 6:
              return _context17.abrupt("return", _context17.sent);
            case 7:
              return _context17.abrupt("return", bignumber/* BigNumber.from */.O$.from(0));
            case 8:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function totalAssets() {
        return _totalAssets.apply(this, arguments);
      }
      return totalAssets;
    }()
  }, {
    key: "getLPToken",
    value: function () {
      var _getLPToken = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee18() {
        var _this$_vault, address;
        return regeneratorRuntime_default()().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (!(this._lpToken == undefined)) {
                _context18.next = 5;
                break;
              }
              _context18.next = 3;
              return (_this$_vault = this._vault) === null || _this$_vault === void 0 ? void 0 : _this$_vault.lpToken();
            case 3:
              address = _context18.sent;
              //console.log(address, 'vaultRouter_lpTokent')
              if (address != undefined) {
                this._lpToken = new LPToken(this._library, this._chainId, address);
              }
            case 5:
              return _context18.abrupt("return", this._lpToken);
            case 6:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function getLPToken() {
        return _getLPToken.apply(this, arguments);
      }
      return getLPToken;
    }()
  }, {
    key: "getVault",
    value: function () {
      var _getVault = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee19() {
        var address;
        return regeneratorRuntime_default()().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              if (!(this._vault == undefined)) {
                _context19.next = 5;
                break;
              }
              _context19.next = 3;
              return this.call('coreVault');
            case 3:
              address = _context19.sent;
              this._vault = new CoreVault(this._library, this._chainId, address);
            case 5:
              return _context19.abrupt("return", this._vault);
            case 6:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function getVault() {
        return _getVault.apply(this, arguments);
      }
      return getVault;
    }()
  }]);
  return VaultRouter;
}(SolidityContract/* SolidityContract */.k);
;// CONCATENATED MODULE: ./src/services/rewards/show.ts






var DEFAULT_PRICE_DECINALS = 9;
var getDefaultVault = function getDefaultVault() {
  return {
    totalSupply: '0',
    supplySymbol: 'DLP',
    supplyDecimals: 0,
    totalAssets: '0',
    assetSymbol: 'USDC',
    assetDecimals: 0,
    DLPPrice: 1,
    APR: '0',
    yourStake: '0',
    yourBlance: '0',
    buyFeeRate: 0,
    sellFeeRate: 0,
    isBuy: true,
    rewarded: '0',
    pendingRewards: '0',
    isAssetApprove: false,
    isSupplyApprove: false,
    vaultRouter: null
  };
};
var VaultShow = {
  getPrice: function () {
    var _getPrice = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(vault) {
      var _vault$vaultRouter;
      var price;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (_vault$vaultRouter = vault.vaultRouter) === null || _vault$vaultRouter === void 0 ? void 0 : _vault$vaultRouter.getLPPrice();
          case 2:
            price = _context.sent;
            vault.DLPPrice = Number(getShowNum(price, DEFAULT_PRICE_DECINALS));
            return _context.abrupt("return", vault.DLPPrice);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function getPrice(_x) {
      return _getPrice.apply(this, arguments);
    }
    return getPrice;
  }(),
  getVault: function () {
    var _getVault = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(library, account, chainId) {
      var vault, assetToken, lpToken, cVault, price;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            //const vaultRouterAddress = getContract(chainId, 'VaultRouter')
            vault = getDefaultVault();
            debugger;
            if (account) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", vault);
          case 4:
            vault.vaultRouter = new VaultRouter(library, chainId);
            vault.vaultRouter.setChainId(chainId);
            _context2.next = 8;
            return vault.vaultRouter.asset();
          case 8:
            assetToken = _context2.sent;
            _context2.next = 11;
            return vault.vaultRouter.getLPToken();
          case 11:
            lpToken = _context2.sent;
            _context2.next = 14;
            return vault.vaultRouter.getVault();
          case 14:
            cVault = _context2.sent;
            if (!(lpToken != undefined)) {
              _context2.next = 30;
              break;
            }
            _context2.next = 18;
            return lpToken.symbol();
          case 18:
            vault.supplySymbol = _context2.sent;
            _context2.t0 = toNumber;
            _context2.next = 22;
            return lpToken.decimals();
          case 22:
            _context2.t1 = _context2.sent;
            vault.supplyDecimals = (0, _context2.t0)(_context2.t1);
            _context2.t2 = getShowNum;
            _context2.next = 27;
            return lpToken.totalSupply();
          case 27:
            _context2.t3 = _context2.sent;
            _context2.t4 = vault.supplyDecimals;
            vault.totalSupply = (0, _context2.t2)(_context2.t3, _context2.t4);
          case 30:
            if (!(assetToken != undefined)) {
              _context2.next = 45;
              break;
            }
            _context2.next = 33;
            return assetToken.symbol();
          case 33:
            vault.assetSymbol = _context2.sent;
            _context2.t5 = toNumber;
            _context2.next = 37;
            return assetToken.decimals();
          case 37:
            _context2.t6 = _context2.sent;
            vault.assetDecimals = (0, _context2.t5)(_context2.t6);
            _context2.t7 = getShowNum;
            _context2.next = 42;
            return assetToken.balanceOf(cVault._address);
          case 42:
            _context2.t8 = _context2.sent;
            _context2.t9 = vault.assetDecimals;
            vault.totalAssets = (0, _context2.t7)(_context2.t8, _context2.t9);
          case 45:
            if (!(account != undefined && account != null)) {
              _context2.next = 65;
              break;
            }
            _context2.t10 = getShowNum;
            _context2.next = 49;
            return vault.vaultRouter.balanceSupplyOf(account);
          case 49:
            _context2.t11 = _context2.sent;
            _context2.t12 = vault.supplyDecimals;
            vault.yourStake = (0, _context2.t10)(_context2.t11, _context2.t12);
            _context2.t13 = getShowNum;
            _context2.next = 55;
            return vault.vaultRouter.balanceAssetsOf(account);
          case 55:
            _context2.t14 = _context2.sent;
            _context2.t15 = vault.assetDecimals;
            vault.yourBlance = (0, _context2.t13)(_context2.t14, _context2.t15);
            _context2.next = 60;
            return vault.vaultRouter.isAssetApprove(account);
          case 60:
            vault.isAssetApprove = _context2.sent;
            console.log(1);
            _context2.next = 64;
            return vault.vaultRouter.isDLPApprove(account);
          case 64:
            vault.isSupplyApprove = _context2.sent;
          case 65:
            console.log(1);
            _context2.t16 = Number;
            _context2.t17 = getShowNum;
            _context2.next = 70;
            return vault.vaultRouter.getLPFeeRate();
          case 70:
            _context2.t18 = _context2.sent;
            _context2.t19 = DEFAULT_PRICE_DECINALS;
            _context2.t20 = (0, _context2.t17)(_context2.t18, _context2.t19);
            vault.buyFeeRate = (0, _context2.t16)(_context2.t20);
            console.log(1);
            if (vault.buyFeeRate == 0) {
              vault.buyFeeRate = 0.1;
            }
            vault.sellFeeRate = vault.buyFeeRate;
            console.log(1);
            _context2.next = 80;
            return vault.vaultRouter.getLPPrice();
          case 80:
            price = _context2.sent;
            console.log(1);
            vault.DLPPrice = Number(getShowNum(price, DEFAULT_PRICE_DECINALS));
            _context2.next = 85;
            return getAPR(vault);
          case 85:
            vault.APR = _context2.sent;
            console.log(1);
            _context2.t21 = getShowNum;
            _context2.next = 90;
            return vault.vaultRouter.getLPReward();
          case 90:
            _context2.t22 = _context2.sent;
            _context2.t23 = vault.assetDecimals;
            vault.rewarded = (0, _context2.t21)(_context2.t22, _context2.t23);
            console.log(vault, 'getVault');
            return _context2.abrupt("return", vault);
          case 95:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function getVault(_x2, _x3, _x4) {
      return _getVault.apply(this, arguments);
    }
    return getVault;
  }(),
  changePay: function changePay(vault, isBuy, DLPPrice, pay, fn) {
    var toPay = (0,bigNumber/* toBigNumber */.O)(pay);
    var toDLPPrice = (0,bigNumber/* toBigNumber */.O)(DLPPrice);
    if (isBuy) {
      //Pay / Price * (1-Fees)
      fn(toPay.dividedBy(toDLPPrice).multipliedBy((0,bigNumber/* toBigNumber */.O)(1 - (vault === null || vault === void 0 ? void 0 : vault.buyFeeRate))).toFixed(18));
    } else {
      //Pay * Price * (1 - Fees)
      fn(toPay.multipliedBy(toDLPPrice).multipliedBy((0,bigNumber/* toBigNumber */.O)(1 - vault.sellFeeRate)).toFixed(18));
    }
  },
  changeReceive: function changeReceive(vault, isBuy, DLPPrice, receive, fn) {
    return VaultShow.changePay(vault, !isBuy, DLPPrice, receive, fn);
  },
  confirmSwap: function () {
    var _confirmSwap = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(setPendingTxns, chainId, vault, pay, isBuy, receice, account) {
      var _vault$vaultRouter2, _vault$vaultRouter3;
      var _vault$vaultRouter4, amount, minout, _vault$vaultRouter5, _amount, _minout;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            (_vault$vaultRouter2 = vault.vaultRouter) === null || _vault$vaultRouter2 === void 0 ? void 0 : _vault$vaultRouter2.setChainId(chainId);
            (_vault$vaultRouter3 = vault.vaultRouter) === null || _vault$vaultRouter3 === void 0 ? void 0 : _vault$vaultRouter3.setPendingTxns(setPendingTxns);
            if (!isBuy) {
              _context3.next = 9;
              break;
            }
            amount = (0,numbers/* expandDecimals */.Jl)(pay, vault === null || vault === void 0 ? void 0 : vault.assetDecimals);
            minout = (0,numbers/* expandDecimals */.Jl)(0, vault.supplyDecimals);
            _context3.next = 7;
            return (_vault$vaultRouter4 = vault.vaultRouter) === null || _vault$vaultRouter4 === void 0 ? void 0 : _vault$vaultRouter4.buyLP(account, amount, minout);
          case 7:
            _context3.next = 13;
            break;
          case 9:
            _amount = (0,numbers/* expandDecimals */.Jl)(pay, vault.supplyDecimals);
            _minout = (0,numbers/* expandDecimals */.Jl)(0, vault.assetDecimals);
            _context3.next = 13;
            return (_vault$vaultRouter5 = vault.vaultRouter) === null || _vault$vaultRouter5 === void 0 ? void 0 : _vault$vaultRouter5.sellLP(account, _amount, _minout);
          case 13:
            if (!(vault.vaultRouter != undefined)) {
              _context3.next = 26;
              break;
            }
            _context3.t0 = getShowNum;
            _context3.next = 17;
            return vault.vaultRouter.balanceSupplyOf(account);
          case 17:
            _context3.t1 = _context3.sent;
            _context3.t2 = vault.supplyDecimals;
            vault.yourStake = (0, _context3.t0)(_context3.t1, _context3.t2);
            _context3.t3 = getShowNum;
            _context3.next = 23;
            return vault.vaultRouter.balanceAssetsOf(account);
          case 23:
            _context3.t4 = _context3.sent;
            _context3.t5 = vault.assetDecimals;
            vault.yourBlance = (0, _context3.t3)(_context3.t4, _context3.t5);
          case 26:
            return _context3.abrupt("return", vault);
          case 27:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    function confirmSwap(_x5, _x6, _x7, _x8, _x9, _x10, _x11) {
      return _confirmSwap.apply(this, arguments);
    }
    return confirmSwap;
  }()
};
function getAPR(_x12) {
  return _getAPR.apply(this, arguments);
}
function _getAPR() {
  _getAPR = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(vault) {
    var _vault$vaultRouter6;
    var totalFee, aum, apr;
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          totalFee = (0,bigNumber/* toBigNumber */.O)(get7DTotalFee());
          _context4.t0 = bigNumber/* toBigNumber */.O;
          _context4.t1 = getShowNum;
          _context4.next = 5;
          return (_vault$vaultRouter6 = vault.vaultRouter) === null || _vault$vaultRouter6 === void 0 ? void 0 : _vault$vaultRouter6.getAUM();
        case 5:
          _context4.t2 = _context4.sent;
          _context4.t3 = (0, _context4.t1)(_context4.t2, 18);
          aum = (0, _context4.t0)(_context4.t3);
          apr = totalFee.div(aum).multipliedBy(52).multipliedBy(100);
          console.log('getAPR', totalFee, aum, apr);
          return _context4.abrupt("return", apr.toFixed(2));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getAPR.apply(this, arguments);
}
function getShowNum(arg0, supplyDecimals) {
  if (arg0 == undefined) {
    return '0';
  }
  return (0,numbers/* formatAmount */.dN)(arg0, supplyDecimals, 2);
}
function toNumber(num) {
  if (!num) {
    return num;
  }
  if (num._isBigNumber) {
    return num.toNumber();
  } else {
    return Number(num);
  }
}
// EXTERNAL MODULE: ./src/assets/overview_statistical_icon1.svg
var overview_statistical_icon1 = __webpack_require__(79369);
// EXTERNAL MODULE: ./src/assets/overview_statistical_icon2.svg
var overview_statistical_icon2 = __webpack_require__(87755);
// EXTERNAL MODULE: ./src/assets/rewards_logo.svg
var rewards_logo = __webpack_require__(11289);
// EXTERNAL MODULE: ./src/components/Modal/index.tsx + 2 modules
var Modal = __webpack_require__(69499);
// EXTERNAL MODULE: ./src/config/chains.ts
var chains = __webpack_require__(13805);
// EXTERNAL MODULE: ./src/pages/trade/ui/PriceInput/index.tsx + 1 modules
var PriceInput = __webpack_require__(26977);
// EXTERNAL MODULE: ./src/components/App/state.ts
var state = __webpack_require__(74595);
;// CONCATENATED MODULE: ./src/pages/rewards/ui/BuyDLP/buyDLP.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var buyDLP_modulemodules = ({"helper":"helper___KjA13","fieldName":"fieldName___HVKEK","fieldValue":"fieldValue___jdTxK","alignRight":"alignRight___m_Llq","btn":"btn___PTIy7","primary":"primary___uKEgt"});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/pages/rewards/ui/BuyDLP/index.tsx












var BuyDLP = function BuyDLP(_ref) {
  var account = _ref.account,
    onClose = _ref.onClose,
    isBuy = _ref.isBuy,
    vault = _ref.vault,
    DLPPrice = _ref.DLPPrice;
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    payValue = _useState2[0],
    setPayValue = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    receiveValue = _useState4[0],
    setReceiveValue = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    isBuying = _useState6[0],
    setIsBuying = _useState6[1];
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    chainId = _useWeb3React.chainId,
    active = _useWeb3React.active;
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    setPendingTxns = _AppContext$useContai.setPendingTxns,
    setWalletVisible = _AppContext$useContai.setWalletVisible;
  var _useState7 = (0,react.useState)(true),
    _useState8 = slicedToArray_default()(_useState7, 2),
    anchorOnFromReceive = _useState8[0],
    setAnchorOnFromReceive = _useState8[1];
  var isSell = !isBuy;
  (0,react.useEffect)(function () {
    if (anchorOnFromReceive) {
      if (!receiveValue) {
        setPayValue('');
        return;
      }
      VaultShow.changeReceive(vault, isBuy, DLPPrice, receiveValue, function (pay) {
        setPayValue(String(pay));
      });
      return;
    }
    if (!payValue) {
      return;
    }
    VaultShow.changePay(vault, isBuy, DLPPrice, payValue, function (v) {
      setReceiveValue(v);
    });
  }, [anchorOnFromReceive, receiveValue, payValue, isBuy, DLPPrice]);
  var onPayValueChange = function onPayValueChange(value) {
    setAnchorOnFromReceive(false);
    setPayValue(value);
  };
  var onSubmitBy = function onSubmitBy() {
    if (!active) {
      setWalletVisible(true);
      return;
    }
    if (account && !isBuying) {
      setIsBuying(true);
      VaultShow.confirmSwap(setPendingTxns, chainId, vault, Number(payValue), isBuy, Number(receiveValue), account).then(function (res) {
        onClose();
      })["finally"](function () {
        setIsBuying(false);
      });
    }
  };
  function getPrimaryState() {
    if (!active) {
      return ["Connect Wallet", false];
    }
    if (!payValue || payValue === '0') {
      return ["Enter an amount", true];
    }
    if (!receiveValue || receiveValue === '0') {
      return ["Enter an amount", true];
    }
    var payNumber = (0,bigNumber/* toBigNumber */.O)(payValue);
    if (isBuy) {
      if (payNumber.gt((0,bigNumber/* toBigNumber */.O)(vault.yourBlance))) {
        return ["Insufficient USDC Balance", true];
      }
    }
    if (!isBuy) {
      if (payNumber.gt((0,bigNumber/* toBigNumber */.O)(vault.yourStake))) {
        return ["Insufficient DLP Balance", true];
      }
    }
    if (isBuying) {
      return [isBuy ? "Buying..." : "Selling...", true];
    }
    return [isBuy ? 'Buy DLP' : "Sell DLP", false];
  }
  var _getPrimaryState = getPrimaryState(),
    _getPrimaryState2 = slicedToArray_default()(_getPrimaryState, 2),
    btnText = _getPrimaryState2[0],
    disabled = _getPrimaryState2[1];
  var yourBlance = (0,react.useMemo)(function () {
    if (isBuy) {
      return "".concat(vault === null || vault === void 0 ? void 0 : vault.yourBlance, " USDC");
    }
    return "".concat(vault.yourStake, " DLP");
  }, [isBuy, vault]);
  var yourStake = (0,react.useMemo)(function () {
    if (isBuy) {
      return "".concat(vault === null || vault === void 0 ? void 0 : vault.yourStake, " DLP");
    }
    return "".concat(vault.yourBlance, " USDC");
  }, [isBuy, vault]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PayInput */.gp, {
      symbol: isSell ? 'DLP' : 'USDC',
      onClickMaxBtn: function onClickMaxBtn() {
        setAnchorOnFromReceive(false);
        setPayValue(isBuy ? vault.yourBlance : vault.yourStake);
      },
      value: payValue,
      onChange: onPayValueChange
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: buyDLP_modulemodules.helper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 12,
        className: buyDLP_modulemodules.fields,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: buyDLP_modulemodules.fieldName,
          children: "Price"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: buyDLP_modulemodules.fieldValue,
          children: [DLPPrice, " USDC"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 12,
        className: "".concat(buyDLP_modulemodules.fields, " ").concat(buyDLP_modulemodules.alignRight),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: buyDLP_modulemodules.fieldName,
          children: isBuy ? 'Balance:' : 'Available: '
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: buyDLP_modulemodules.fieldValue,
          children: yourBlance
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* ReceiveInput */.mU, {
      symbol: isSell ? 'USDC' : 'DLP',
      onChange: function onChange(v) {
        setAnchorOnFromReceive(true);
        setReceiveValue(v);
      },
      value: receiveValue
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      className: buyDLP_modulemodules.helper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 12,
        className: buyDLP_modulemodules.fields,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: buyDLP_modulemodules.fieldName,
          children: "Fees:"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: buyDLP_modulemodules.fieldValue,
          children: [isBuy ? vault.buyFeeRate : vault.sellFeeRate, "%"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
        span: 12,
        className: "".concat(buyDLP_modulemodules.fields, " ").concat(buyDLP_modulemodules.alignRight),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: buyDLP_modulemodules.fieldName,
          children: isBuy ? 'Available:' : 'Balance: '
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: buyDLP_modulemodules.fieldValue,
          children: yourStake
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      disabled: disabled,
      type: "button",
      className: "".concat(buyDLP_modulemodules.btn, " ").concat(buyDLP_modulemodules.primary),
      onClick: onSubmitBy,
      children: btnText
    })]
  });
};
/* harmony default export */ var ui_BuyDLP = (BuyDLP);
;// CONCATENATED MODULE: ./src/pages/rewards/ui/DLPVault/dLPVault.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var dLPVault_modulemodules = ({"title":"title___e6dkE","logo":"logo___ZOcqx","item":"item___yF8HB","btn":"btn___TyFG2","primary":"primary___a4ylv","head":"head___nbI7q","icon":"icon___XNmn5","fieldValue":"fieldValue___nCXxw","total":"total___CWQYd","fieldName":"fieldName___hRfaq","alignRight":"alignRight___mHUrT","top":"top___x6BuA","footer":"footer___imJSY","left":"left___DgKWI","right":"right___vSRt5","dialog":"dialog___erlYn","tab":"tab___AHinT","active":"active___XiEpE","tabPanels":"tabPanels___OPQPx","activeTab":"activeTab___YpixB"});
;// CONCATENATED MODULE: ./src/pages/rewards/ui/DLPVault/index.tsx



















var DLPVault = function DLPVault() {
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react.useState)('buy'),
    _useState4 = slicedToArray_default()(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    library = _useWeb3React.library,
    account = _useWeb3React.account,
    chainId = _useWeb3React.chainId;
  var _useSWR = (0,dist/* default */.ZP)([account, chainId], function () {
      return VaultShow.getVault(library, account, chainId || chains/* DEFAULT_CHAIN_ID */.rC);
    }),
    vault = _useSWR.data,
    mutate = _useSWR.mutate;
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  var onTabChange = function onTabChange(value) {
    setActiveTab(value);
    var isBuy = false;
    if (value == 'buy') {
      isBuy = true;
    }
    mutate(objectSpread2_default()(objectSpread2_default()({}, vault), {}, {
      isBuy: isBuy
    }));
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: dLPVault_modulemodules.dLPVault,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: dLPVault_modulemodules.title,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rewards_logo/* ReactComponent */.r, {
        className: dLPVault_modulemodules.logo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "DLP Vault"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
      gutter: 24,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: dLPVault_modulemodules.item,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: dLPVault_modulemodules.top,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: dLPVault_modulemodules.head,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: dLPVault_modulemodules.text,
                children: "DLP Vault"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: overview_statistical_icon1/* default */.Z,
                className: dLPVault_modulemodules.icon
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
              className: dLPVault_modulemodules.content,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: 10,
                className: dLPVault_modulemodules.cell,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: dLPVault_modulemodules.fieldValue,
                    title: (vault === null || vault === void 0 ? void 0 : vault.totalSupply) || '--',
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      className: dLPVault_modulemodules.total,
                      children: (vault === null || vault === void 0 ? void 0 : vault.totalSupply) || '--'
                    }), vault === null || vault === void 0 ? void 0 : vault.supplySymbol]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: dLPVault_modulemodules.fieldName,
                    children: "Total Supply"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: 9,
                className: dLPVault_modulemodules.cell,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: dLPVault_modulemodules.fieldValue,
                    title: (vault === null || vault === void 0 ? void 0 : vault.totalAssets) || '--',
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      className: dLPVault_modulemodules.total,
                      children: (vault === null || vault === void 0 ? void 0 : vault.totalAssets) || '--'
                    }), vault === null || vault === void 0 ? void 0 : vault.assetSymbol]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: dLPVault_modulemodules.fieldName,
                    children: "DLP Vault balance"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
                span: 5,
                className: "".concat(dLPVault_modulemodules.cell, " ").concat(dLPVault_modulemodules.alignRight),
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: dLPVault_modulemodules.fieldValue,
                  children: [vault === null || vault === void 0 ? void 0 : vault.APR, " %"]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: dLPVault_modulemodules.fieldName,
                  children: "DLP Vault APR"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            className: dLPVault_modulemodules.footer,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 12,
              className: dLPVault_modulemodules.left,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: dLPVault_modulemodules.fieldValue,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: (vault === null || vault === void 0 ? void 0 : vault.DLPPrice) || '--'
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: vault === null || vault === void 0 ? void 0 : vault.assetSymbol
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: dLPVault_modulemodules.fieldName,
                  children: "Price"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 12,
              className: dLPVault_modulemodules.right,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
                  type: "button",
                  className: "".concat(dLPVault_modulemodules.btn, " ").concat(dLPVault_modulemodules.primary),
                  onClick: function onClick() {
                    setActiveTab('buy');
                    openModal();
                  },
                  to: '#',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
                    id: "Buy"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
                  type: "button",
                  className: "".concat(dLPVault_modulemodules.btn),
                  style: {
                    marginLeft: 12
                  },
                  onClick: function onClick() {
                    setActiveTab('sell');
                    openModal();
                  },
                  to: '#',
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
                    id: "Sell"
                  })
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: dLPVault_modulemodules.item,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: dLPVault_modulemodules.top,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: dLPVault_modulemodules.head,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: dLPVault_modulemodules.text,
                children: "Your Rewards"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: overview_statistical_icon2/* default */.Z,
                className: dLPVault_modulemodules.icon
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
              className: dLPVault_modulemodules.content,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: 12,
                className: dLPVault_modulemodules.cell,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: dLPVault_modulemodules.fieldValue,
                    children: ["".concat((vault === null || vault === void 0 ? void 0 : vault.yourStake) || 0, " "), /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                      children: vault === null || vault === void 0 ? void 0 : vault.supplySymbol
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: dLPVault_modulemodules.fieldName,
                    children: "Your stake"
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                span: 12,
                className: "".concat(dLPVault_modulemodules.cell, " ").concat(dLPVault_modulemodules.alignRight),
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: dLPVault_modulemodules.fieldValue,
                    children: [vault === null || vault === void 0 ? void 0 : vault.rewarded, " USDC"]
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: dLPVault_modulemodules.fieldName,
                    children: "rewarded"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            className: dLPVault_modulemodules.footer,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 10,
              className: dLPVault_modulemodules.left,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: dLPVault_modulemodules.fieldValue,
                  children: [(vault === null || vault === void 0 ? void 0 : vault.pendingRewards) !== '...' ? vault === null || vault === void 0 ? void 0 : vault.pendingRewards : 0, ' ', "USDC"]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: dLPVault_modulemodules.fieldName,
                  children: "Pending rewards"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
              span: 14,
              className: dLPVault_modulemodules.right,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
                  type: "button",
                  className: dLPVault_modulemodules.btn,
                  to: "#",
                  children: "Harvest USDC"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
                  type: "button",
                  className: dLPVault_modulemodules.btn,
                  style: {
                    marginLeft: 12
                  },
                  to: "#",
                  children: "Get Insurance"
                })]
              })
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      title: "Buy / Sell DLP",
      visible: isOpen,
      className: dLPVault_modulemodules.dialog,
      onClose: function onClose() {
        return setIsOpen(false);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        className: dLPVault_modulemodules.tab,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* NavLink */.OL, {
          to: '#',
          onClick: function onClick() {
            return onTabChange('buy');
          },
          className: function className() {
            return activeTab === 'buy' ? dLPVault_modulemodules.active : undefined;
          },
          children: "Buy"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* NavLink */.OL, {
          to: '#',
          onClick: function onClick() {
            return onTabChange('sell');
          },
          className: function className() {
            return activeTab === 'sell' ? dLPVault_modulemodules.active : undefined;
          },
          children: "Sell"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: dLPVault_modulemodules.tabPanels,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ui_BuyDLP, {
          onClose: function onClose() {
            return setIsOpen(false);
          },
          isBuy: activeTab === 'buy',
          vault: vault,
          account: account,
          DLPPrice: vault === null || vault === void 0 ? void 0 : vault.DLPPrice
        })
      })]
    })]
  });
};
/* harmony default export */ var ui_DLPVault = (DLPVault);
;// CONCATENATED MODULE: ./src/pages/rewards/index.tsx






var Rewards = function Rewards() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: rewards_modulemodules.rewards,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: rewards_modulemodules.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: rewards_modulemodules.title,
        children: "Rewards"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: rewards_modulemodules.subTitle,
        children: "Stake USDC and earn rewards from fees generated on the DEI."
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_DLPVault, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: rewards_modulemodules.description,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: rewards_modulemodules.secondTitle,
        children: "How do DEI rewards work?"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: rewards_modulemodules.content,
        children: ["The DLP Vault is the counter party to all trades on DEI.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " DEI Vault accrues 70% of the platform's generated fees. DEI Foundation accrues 30% of the platform's generated fees."]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
        type: "button",
        className: rewards_modulemodules.btn,
        to: "#",
        children: "Learn More"
      })]
    })]
  });
};
/* harmony default export */ var rewards = (Rewards);

/***/ }),

/***/ 11289:
/*!*************************************!*\
  !*** ./src/assets/rewards_logo.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ SvgRewardsLogo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 62435);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgRewardsLogo = (props) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { width: 32, height: 32, rx: 16, fill: "url(#rewards_logo_svg__a)" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { width: 32, height: 32, rx: 16, fill: "url(#rewards_logo_svg__b)" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.05 5.95a1.2 1.2 0 0 1 1.2-1.2H16a11.22 11.22 0 0 1 8.25 3.6h-13.2v-2.4Zm0 8.25h16.057a11.325 11.325 0 0 1 0 3.6H11.052v-3.6Zm0 9.45v2.4a1.2 1.2 0 0 0 1.2 1.2H16a11.22 11.22 0 0 0 8.25-3.6h-13.2Z", fill: "#fff" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { opacity: 0.6, fillRule: "evenodd", clipRule: "evenodd", d: "M6.835 9.475a11.201 11.201 0 0 0-1.7 3.6h21.732a11.202 11.202 0 0 0-1.7-3.6H6.834Zm0 13.05a11.203 11.203 0 0 1-1.7-3.6h21.732a11.204 11.204 0 0 1-1.7 3.6H6.834Zm9.148 4.725h.035-.035Z", fill: "#fff" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", { id: "rewards_logo_svg__a", x1: 0, y1: 0, x2: 39.172, y2: 10.86, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { stopColor: "#3CEAAA" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { offset: 0.771, stopColor: "#5C72FF" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", { id: "rewards_logo_svg__b", x1: 0, y1: 0, x2: 39.172, y2: 10.86, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { stopColor: "#3CEAAA" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { offset: 0.771, stopColor: "#5C72FF" }))));

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMDUgNS45NWExLjIgMS4yIDAgMCAxIDEuMi0xLjJIMTZhMTEuMjIgMTEuMjIgMCAwIDEgOC4yNSAzLjZoLTEzLjJ2LTIuNFptMCA4LjI1aDE2LjA1N2ExMS4zMjUgMTEuMzI1IDAgMCAxIDAgMy42SDExLjA1MnYtMy42Wm0wIDkuNDV2Mi40YTEuMiAxLjIgMCAwIDAgMS4yIDEuMkgxNmExMS4yMiAxMS4yMiAwIDAgMCA4LjI1LTMuNmgtMTMuMloiIGZpbGw9IiNmZmYiLz48cGF0aCBvcGFjaXR5PSIuNiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjgzNSA5LjQ3NWExMS4yMDEgMTEuMjAxIDAgMCAwLTEuNyAzLjZoMjEuNzMyYTExLjIwMiAxMS4yMDIgMCAwIDAtMS43LTMuNkg2LjgzNFptMCAxMy4wNWExMS4yMDMgMTEuMjAzIDAgMCAxLTEuNy0zLjZoMjEuNzMyYTExLjIwNCAxMS4yMDQgMCAwIDEtMS43IDMuNkg2LjgzNFptOS4xNDggNC43MjVoLjAzNS0uMDM1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==");


/***/ })

}]);