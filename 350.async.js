(self["webpackChunk"] = self["webpackChunk"] || []).push([[350],{

/***/ 13805:
/*!******************************!*\
  !*** ./src/config/chains.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EC": function() { return /* binding */ isSupportedChain; },
/* harmony export */   "FQ": function() { return /* binding */ SUPPORTED_CHAIN_IDS; },
/* harmony export */   "Fe": function() { return /* binding */ LOCAL; },
/* harmony export */   "PO": function() { return /* binding */ ARBITRUM; },
/* harmony export */   "Qz": function() { return /* binding */ AVALANCHE; },
/* harmony export */   "RM": function() { return /* binding */ getRpcUrl; },
/* harmony export */   "RR": function() { return /* binding */ MAINNET; },
/* harmony export */   "T8": function() { return /* binding */ ARBITRUM_RPC_PROVIDERS; },
/* harmony export */   "Vr": function() { return /* binding */ TESTNET; },
/* harmony export */   "Ww": function() { return /* binding */ AVALANCHE_RPC_PROVIDERS; },
/* harmony export */   "bx": function() { return /* binding */ AVALANCHE_FUJITEST; },
/* harmony export */   "jY": function() { return /* binding */ getExplorerUrl; },
/* harmony export */   "p4": function() { return /* binding */ ETH_MAINNET; },
/* harmony export */   "qF": function() { return /* binding */ ARBITRUM_TESTNET; },
/* harmony export */   "qd": function() { return /* binding */ MAX_GAS_PRICE_MAP; },
/* harmony export */   "qz": function() { return /* binding */ getChainName; },
/* harmony export */   "rC": function() { return /* binding */ DEFAULT_CHAIN_ID; },
/* harmony export */   "vC": function() { return /* binding */ RPC_PROVIDERS; },
/* harmony export */   "vT": function() { return /* binding */ GOERLI; },
/* harmony export */   "wc": function() { return /* binding */ NETWORK_METADATA; },
/* harmony export */   "xW": function() { return /* binding */ GAS_PRICE_ADJUSTMENT_MAP; }
/* harmony export */ });
/* unused harmony exports getDefaultArbitrumRpcUrl, getConstant, ETH_MAINNET_PROVIDERS, AVALANCHE_FUJITEST_RPC_PROVIDERS, BSC_RPC_PROVIDERS, CHAIN_NAMES_MAP, HIGH_EXECUTION_FEES_MAP, getFallbackRpcUrl, getHighExecutionFee */
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ 38416);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ 35553);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ 15400);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ 36493);

var _constants, _GAS_PRICE_ADJUSTMENT, _MAX_GAS_PRICE_MAP, _CHAIN_NAMES_MAP, _NETWORK_METADATA, _HIGH_EXECUTION_FEES_, _RPC_PROVIDERS;



var parseEther = ethers__WEBPACK_IMPORTED_MODULE_2__/* .parseEther */ .fi;
var ETH_MAINNET = 1;
var AVALANCHE = 43114;
var ARBITRUM = 42161;
var GOERLI = 5;
var ARBITRUM_TESTNET = 421613;
var MAINNET = 56;
var TESTNET = 97;
var LOCAL = 1337;
var AVALANCHE_FUJITEST = 43113;

// goerli or local
var DEFAULT_CHAIN_ID =  true ? AVALANCHE_FUJITEST : 0;
var constants = (_constants = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, MAINNET, {
  nativeTokenSymbol: 'BNB',
  defaultCollateralSymbol: 'BUSD',
  defaultFlagOrdersEnabled: false,
  positionReaderPropsLength: 8,
  v2: false
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, TESTNET, {
  nativeTokenSymbol: 'BNB',
  defaultCollateralSymbol: 'BUSD',
  defaultFlagOrdersEnabled: true,
  positionReaderPropsLength: 8,
  v2: false
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, ARBITRUM_TESTNET, {
  nativeTokenSymbol: 'ETH',
  defaultCollateralSymbol: 'USDC',
  defaultFlagOrdersEnabled: false,
  positionReaderPropsLength: 9,
  v2: true,
  SWAP_ORDER_EXECUTION_GAS_FEE: parseEther('0.0003'),
  INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.0003'),
  // contract requires that execution fee be strictly greater than instead of gte
  DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.000300001')
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, ARBITRUM, {
  nativeTokenSymbol: 'ETH',
  wrappedTokenSymbol: 'WETH',
  defaultCollateralSymbol: 'USDC',
  defaultFlagOrdersEnabled: false,
  positionReaderPropsLength: 9,
  v2: true,
  SWAP_ORDER_EXECUTION_GAS_FEE: parseEther('0.0003'),
  INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.0003'),
  // contract requires that execution fee be strictly greater than instead of gte
  DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.000300001')
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, AVALANCHE, {
  nativeTokenSymbol: 'AVAX',
  wrappedTokenSymbol: 'WAVAX',
  defaultCollateralSymbol: 'USDC',
  defaultFlagOrdersEnabled: true,
  positionReaderPropsLength: 9,
  v2: true,
  SWAP_ORDER_EXECUTION_GAS_FEE: parseEther('0.01'),
  INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.01'),
  // contract requires that execution fee be strictly greater than instead of gte
  DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.0100001')
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, GOERLI, {
  nativeTokenSymbol: 'ETH',
  wrappedTokenSymbol: 'WETH',
  defaultCollateralSymbol: 'USDC',
  // 配置了默认抵押token
  defaultFlagOrdersEnabled: true,
  positionReaderPropsLength: 9,
  v2: true,
  SWAP_ORDER_EXECUTION_GAS_FEE: parseEther('0.01'),
  INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.01'),
  // contract requires that execution fee be strictly greater than instead of gte
  DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.0100001')
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_constants, LOCAL, {
  nativeTokenSymbol: 'ETH',
  wrappedTokenSymbol: 'WETH',
  defaultCollateralSymbol: 'USDC',
  // 配置了默认抵押token
  defaultFlagOrdersEnabled: true,
  positionReaderPropsLength: 9,
  v2: true,
  SWAP_ORDER_EXECUTION_GAS_FEE: parseEther('0.01'),
  INCREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.01'),
  // contract requires that execution fee be strictly greater than instead of gte
  DECREASE_ORDER_EXECUTION_GAS_FEE: parseEther('0.0100001')
}), _constants);
function getDefaultArbitrumRpcUrl() {
  return 'https://arb1.arbitrum.io/rpc';
}
var ALCHEMY_WHITELISTED_DOMAINS = (/* unused pure expression or super */ null && (['gmx.io', 'app.gmx.io']));
var getConstant = function getConstant(chainId, key) {
  // @ts-ignore
  if (!constants[chainId]) {
    throw new Error("Unsupported chainId ".concat(chainId));
  }
  // @ts-ignore
  if (!(key in constants[chainId])) {
    throw new Error("Key ".concat(key, " does not exist for chainId ").concat(chainId));
  }
  // @ts-ignore
  return constants[chainId][key];
};
function getExplorerUrl(chainId) {
  if (chainId === 3) {
    return 'https://ropsten.etherscan.io/';
  } else if (chainId === 42) {
    return 'https://kovan.etherscan.io/';
  } else if (chainId === MAINNET) {
    return 'https://bscscan.com/';
  } else if (chainId === TESTNET) {
    return 'https://testnet.bscscan.com/';
  } else if (chainId === ARBITRUM_TESTNET) {
    return 'https://testnet.arbiscan.io/';
  } else if (chainId === ARBITRUM) {
    return 'https://arbiscan.io/';
  } else if (chainId === AVALANCHE) {
    return 'https://snowtrace.io/';
  }
  if (chainId === GOERLI) {
    return 'https://goerli.etherscan.io/';
  }
  return 'https://testnet.snowtrace.io/';
}
var GAS_PRICE_ADJUSTMENT_MAP = (_GAS_PRICE_ADJUSTMENT = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_GAS_PRICE_ADJUSTMENT, ARBITRUM, '0'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_GAS_PRICE_ADJUSTMENT, AVALANCHE, '3000000000'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_GAS_PRICE_ADJUSTMENT, LOCAL, '3000000000'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_GAS_PRICE_ADJUSTMENT, GOERLI, '3000000000'), _GAS_PRICE_ADJUSTMENT);
var MAX_GAS_PRICE_MAP = (_MAX_GAS_PRICE_MAP = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_MAX_GAS_PRICE_MAP, AVALANCHE, '200000000000'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_MAX_GAS_PRICE_MAP, LOCAL, '200000000000'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_MAX_GAS_PRICE_MAP, GOERLI, '200000000000'), _MAX_GAS_PRICE_MAP);
var ARBITRUM_RPC_PROVIDERS = [getDefaultArbitrumRpcUrl()];
var ETH_MAINNET_PROVIDERS = ['https://rpc.ankr.com/eth'];
var AVALANCHE_FUJITEST_RPC_PROVIDERS = ['https://api.avax-test.network/ext/bc/C/rpc'];
var AVALANCHE_RPC_PROVIDERS = ['https://api.avax.network/ext/bc/C/rpc'];
// BSC MAINNET
var BSC_RPC_PROVIDERS = ['https://bsc-dataseed.binance.org', 'https://bsc-dataseed1.defibit.io', 'https://bsc-dataseed1.ninicoin.io', 'https://bsc-dataseed2.defibit.io', 'https://bsc-dataseed3.defibit.io', 'https://bsc-dataseed4.defibit.io', 'https://bsc-dataseed2.ninicoin.io', 'https://bsc-dataseed3.ninicoin.io', 'https://bsc-dataseed4.ninicoin.io', 'https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org', 'https://bsc-dataseed3.binance.org', 'https://bsc-dataseed4.binance.org'];
var SUPPORTED_CHAIN_IDS = [GOERLI, ARBITRUM, AVALANCHE, AVALANCHE_FUJITEST];
//
if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .isDevelopment */ .yG)()) {
  SUPPORTED_CHAIN_IDS.push(ARBITRUM_TESTNET);
  SUPPORTED_CHAIN_IDS.push(TESTNET);
  SUPPORTED_CHAIN_IDS.push(LOCAL);
  SUPPORTED_CHAIN_IDS.push(GOERLI);
}
var CHAIN_NAMES_MAP = (_CHAIN_NAMES_MAP = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, MAINNET, 'BSC'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, TESTNET, 'BSC Testnet'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, ARBITRUM_TESTNET, 'Arbitrum Goerli Testnet'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, ARBITRUM, 'Arbitrum'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, AVALANCHE, 'Avalanche'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, AVALANCHE_FUJITEST, 'Avalanche Fuji Testnet'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, LOCAL, 'Local Dev'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_CHAIN_NAMES_MAP, GOERLI, 'Goerli'), _CHAIN_NAMES_MAP);
var NETWORK_METADATA = (_NETWORK_METADATA = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, MAINNET, {
  chainId: '0x' + MAINNET.toString(16),
  chainName: 'BSC',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: BSC_RPC_PROVIDERS,
  blockExplorerUrls: ['https://bscscan.com']
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, TESTNET, {
  chainId: '0x' + TESTNET.toString(16),
  chainName: 'BSC Testnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: ['https://bsc-testnet.public.blastapi.io'],
  blockExplorerUrls: ['https://testnet.bscscan.com/']
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, ARBITRUM_TESTNET, {
  chainId: '0x' + ARBITRUM_TESTNET.toString(16),
  chainName: 'Arbitrum Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
  //https://rinkeby.arbitrum.io/rpc
  blockExplorerUrls: ['https://goerli.arbiscan.io/'] //https://rinkeby-explorer.arbitrum.io/
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, ARBITRUM, {
  chainId: '0x' + ARBITRUM.toString(16),
  chainName: 'Arbitrum',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ARBITRUM_RPC_PROVIDERS,
  blockExplorerUrls: [getExplorerUrl(ARBITRUM)]
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, AVALANCHE, {
  chainId: '0x' + AVALANCHE.toString(16),
  chainName: 'Avalanche',
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: AVALANCHE_RPC_PROVIDERS,
  blockExplorerUrls: [getExplorerUrl(AVALANCHE)]
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, AVALANCHE_FUJITEST, {
  chainId: '0x' + AVALANCHE_FUJITEST.toString(16),
  chainName: 'Avalanche',
  nativeCurrency: {
    name: 'AVAX',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax-test.network/ext/C/rpc'],
  blockExplorerUrls: ['https://testnet.snowtrace.io']
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, GOERLI, {
  chainId: '0x' + GOERLI.toString(16),
  chainName: 'GOERLI',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18
  },
  rpcUrls: ['https://goerli.infura.io/v3/'],
  blockExplorerUrls: [getExplorerUrl(GOERLI)]
}), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_NETWORK_METADATA, LOCAL, {
  chainId: '0x' + LOCAL.toString(16),
  chainName: 'Local',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ['http://127.0.0.1:8545'],
  blockExplorerUrls: [getExplorerUrl(LOCAL)]
}), _NETWORK_METADATA);
function getChainName(chainId) {
  // @ts-ignore
  return CHAIN_NAMES_MAP[chainId];
}
var HIGH_EXECUTION_FEES_MAP = (_HIGH_EXECUTION_FEES_ = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_HIGH_EXECUTION_FEES_, ARBITRUM, 3), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_HIGH_EXECUTION_FEES_, AVALANCHE, 3), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_HIGH_EXECUTION_FEES_, LOCAL, 3), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_HIGH_EXECUTION_FEES_, GOERLI, 3), _HIGH_EXECUTION_FEES_);
var RPC_PROVIDERS = (_RPC_PROVIDERS = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, ETH_MAINNET, ETH_MAINNET_PROVIDERS), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, MAINNET, BSC_RPC_PROVIDERS), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, ARBITRUM, ARBITRUM_RPC_PROVIDERS), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, AVALANCHE, AVALANCHE_RPC_PROVIDERS), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, AVALANCHE_FUJITEST, AVALANCHE_FUJITEST_RPC_PROVIDERS), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, LOCAL, 'http://127.0.0.1:8545'), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(_RPC_PROVIDERS, GOERLI, 'https://goerli.infura.io/v3/'), _RPC_PROVIDERS);
function getRpcUrl(chainId) {
  // @ts-ignore
  return (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(RPC_PROVIDERS[chainId]);
}
function getFallbackRpcUrl(chainId) {
  // @ts-ignore
  return sample(FALLBACK_PROVIDERS[chainId]);
}
function getHighExecutionFee(chainId) {
  return HIGH_EXECUTION_FEES_MAP[chainId] || 3;
}
function isSupportedChain(chainId) {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}

/***/ }),

/***/ 22837:
/*!************************************!*\
  !*** ./src/config/localStorage.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cs": function() { return /* binding */ SHOULD_EAGER_CONNECT_LOCALSTORAGE_KEY; },
/* harmony export */   "HC": function() { return /* binding */ SELECTED_NETWORK_LOCAL_STORAGE_KEY; },
/* harmony export */   "Wr": function() { return /* binding */ CURRENT_PROVIDER_LOCALSTORAGE_KEY; },
/* harmony export */   "eQ": function() { return /* binding */ WALLET_CONNECT_LOCALSTORAGE_KEY; },
/* harmony export */   "kX": function() { return /* binding */ WALLET_LINK_LOCALSTORAGE_PREFIX; }
/* harmony export */ });
/* unused harmony exports LANGUAGE_LOCALSTORAGE_KEY, SLIPPAGE_BPS_KEY, CLOSE_POSITION_RECEIVE_TOKEN_KEY, IS_PNL_IN_LEVERAGE_KEY, SHOW_PNL_AFTER_FEES_KEY, DISABLE_ORDER_VALIDATION_KEY, SHOULD_SHOW_POSITION_LINES_KEY, REFERRAL_CODE_KEY, REFERRALS_SELECTED_TAB_KEY */
var SELECTED_NETWORK_LOCAL_STORAGE_KEY = 'DEPX_SELECTED_NETWORK';
var WALLET_CONNECT_LOCALSTORAGE_KEY = 'DEPX_walletconnect';
var WALLET_LINK_LOCALSTORAGE_PREFIX = 'DEPX_-walletlink';
var SHOULD_EAGER_CONNECT_LOCALSTORAGE_KEY = 'DEPX_eagerconnect';
var CURRENT_PROVIDER_LOCALSTORAGE_KEY = 'DEPX_currentprovider';
var LANGUAGE_LOCALSTORAGE_KEY = 'DEPX_LANGUAGE_KEY';
var SLIPPAGE_BPS_KEY = 'DEPX_Exchange-swap-slippage-basis-points-v3';
var CLOSE_POSITION_RECEIVE_TOKEN_KEY = 'DEPX_Close-position-receive-useInfoTokens.ts';
var IS_PNL_IN_LEVERAGE_KEY = 'DEPX_Exchange-swap-is-pnl-in-leverage';
var SHOW_PNL_AFTER_FEES_KEY = 'DEPX_Exchange-swap-show-pnl-after-fees';
var DISABLE_ORDER_VALIDATION_KEY = 'DEPX_disable-Orders-validation';
var SHOULD_SHOW_POSITION_LINES_KEY = 'DEPX_Exchange-swap-should-show-position-lines';
var REFERRAL_CODE_KEY = 'DEPX_GMX-referralCode';
var REFERRALS_SELECTED_TAB_KEY = 'DEPX_Referrals-selected-tab';

/***/ }),

/***/ 71874:
/*!********************************!*\
  !*** ./src/lib/helperToast.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": function() { return /* binding */ helperToast; }
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ 84774);

var helperToast = {
  success: function success(content, opts) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.dismiss */ .Am.dismiss();
    react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.success */ .Am.success(content, opts);
  },
  error: function error(content, opts) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.dismiss */ .Am.dismiss();
    react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.error */ .Am.error(content, opts);
  }
};

/***/ }),

/***/ 1403:
/*!******************************!*\
  !*** ./src/lib/rpc/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ useJsonRpcProvider; },
/* harmony export */   "V": function() { return /* binding */ getProvider; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js */ 17061);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 17156);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ 27424);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ 11427);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 15400);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 58967);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 62435);
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/chains */ 13805);








function useJsonRpcProvider(chainId) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
    _useState2 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
    provider = _useState2[0],
    setProvider = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function initializeProvider() {
      return _initializeProvider.apply(this, arguments);
    }
    function _initializeProvider() {
      _initializeProvider = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee() {
        var rpcUrl, provider;
        return _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              rpcUrl = (0,_config_chains__WEBPACK_IMPORTED_MODULE_4__/* .getRpcUrl */ .RM)(chainId);
              if (rpcUrl) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.JsonRpcProvider(rpcUrl);
              _context.next = 6;
              return provider.ready;
            case 6:
              setProvider(provider);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _initializeProvider.apply(this, arguments);
    }
    initializeProvider();
  }, [chainId]);
  return {
    provider: provider
  };
}
function getProvider(library, chainId) {
  var provider;
  if (library) {
    console.log('library.getSigner()', library.getSigner());
    return library.getSigner();
  }
  provider = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_config_chains__WEBPACK_IMPORTED_MODULE_4__/* .RPC_PROVIDERS */ .vC, chainId.toString()));
  return new ethers__WEBPACK_IMPORTED_MODULE_5__.StaticJsonRpcProvider(provider,
  // @ts-ignore incorrect Network param types
  {
    chainId: chainId
  });
}

/***/ }),

/***/ 36493:
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dw": function() { return /* binding */ fetchGql; },
/* harmony export */   "do": function() { return /* binding */ getBianSymbol; },
/* harmony export */   "yG": function() { return /* binding */ isDevelopment; }
/* harmony export */ });
/* unused harmony exports sleep, replaceNativeTokenAddress */
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js */ 17061);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 17156);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ 20238);



var AddressZero = ethers__WEBPACK_IMPORTED_MODULE_2__/* .AddressZero */ .dE;
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve();
    }, ms);
  });
}
var getBianSymbol = function getBianSymbol(symbol) {
  var DEFAULT_SYMBOL = 'BTCUSDT';
  if (!symbol) {
    return DEFAULT_SYMBOL;
  }
  // mock: 待删除
  if (symbol === 'Test Market') {
    return DEFAULT_SYMBOL;
  }
  var parts = symbol.split('/');
  if (parts.length !== 2) {
    return DEFAULT_SYMBOL;
  }
  return "".concat(parts[0], "USDT");
};
function isDevelopment() {
  var _window$location$host, _window$location$host2;
  return !((_window$location$host = window.location.host) !== null && _window$location$host !== void 0 && _window$location$host.includes('gmx.io')) && !((_window$location$host2 = window.location.host) !== null && _window$location$host2 !== void 0 && _window$location$host2.includes('ipfs.io'));
}
var replaceNativeTokenAddress = function replaceNativeTokenAddress(path, nativeTokenAddress) {
  if (!path) {
    return [];
  }
  var updatedPath = [];
  for (var i = 0; i < path.length; i++) {
    var address = path[i];
    if (address === AddressZero) {
      address = nativeTokenAddress;
    }
    updatedPath.push(address);
  }
  return updatedPath;
};
var fetchGql = /*#__PURE__*/function () {
  var _ref = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(url, query) {
    var _result, result;
    return _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(url, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
              query: query
            }),
            mode: 'cors'
          })["catch"](function (err) {
            console.log('err', err);
          });
        case 2:
          _result = _context.sent;
          _context.next = 5;
          return _result === null || _result === void 0 ? void 0 : _result.json();
        case 5:
          result = _context.sent;
          return _context.abrupt("return", (result === null || result === void 0 ? void 0 : result.data) || {});
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchGql(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 16330:
/*!*****************************!*\
  !*** ./src/lib/wallets.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "If": function() { return /* binding */ switchNetwork; },
/* harmony export */   "VK": function() { return /* binding */ clearWalletConnectData; },
/* harmony export */   "_G": function() { return /* binding */ getInjectedHandler; },
/* harmony export */   "a_": function() { return /* binding */ getWalletConnectHandler; },
/* harmony export */   "fJ": function() { return /* binding */ useInactiveListener; },
/* harmony export */   "gn": function() { return /* binding */ useHandleUnsupportedNetwork; },
/* harmony export */   "hL": function() { return /* binding */ clearWalletLinkData; },
/* harmony export */   "nu": function() { return /* binding */ activateInjectedProvider; },
/* harmony export */   "qd": function() { return /* binding */ hasMetaMaskWalletExtension; },
/* harmony export */   "yW": function() { return /* binding */ useEagerConnect; }
/* harmony export */ });
/* unused harmony exports getWalletConnectConnector, getInjectedConnector, addNetwork, showUnsupportedNetworkToast */
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js */ 17061);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 17156);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ 27424);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ 38416);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ 34713);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/injected-connector */ 30950);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ 83929);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ 62435);
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/chains */ 13805);
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config/localStorage */ 22837);
/* harmony import */ var _helperToast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helperToast */ 71874);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ 86074);












function clearWalletConnectData() {
  localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_11__/* .WALLET_CONNECT_LOCALSTORAGE_KEY */ .eQ);
}
function clearWalletLinkData() {
  Object.entries(localStorage).map(function (x) {
    return x[0];
  }).filter(function (x) {
    return x.startsWith(_config_localStorage__WEBPACK_IMPORTED_MODULE_11__/* .WALLET_LINK_LOCALSTORAGE_PREFIX */ .kX);
  }).map(function (x) {
    return localStorage.removeItem(x);
  });
}
var getWalletConnectConnector = function getWalletConnectConnector() {
  var _rpc;
  var chainId = _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_CHAIN_ID */ .rC;
  return new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_6__/* .WalletConnectConnector */ .zw({
    rpc: (_rpc = {}, _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(_rpc, _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .AVALANCHE */ .Qz, _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .AVALANCHE_RPC_PROVIDERS[0] */ .Ww[0]), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(_rpc, _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .ARBITRUM */ .PO, _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .ARBITRUM_RPC_PROVIDERS[0] */ .T8[0]), _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_3___default()(_rpc, _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .ARBITRUM_TESTNET */ .qF, 'https://rinkeby.arbitrum.io/rpc'), _rpc),
    qrcode: true,
    chainId: chainId
  });
};
var injectedConnector = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_5__/* .InjectedConnector */ ._k({
  supportedChainIds: _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .SUPPORTED_CHAIN_IDS */ .FQ
});
function getInjectedConnector() {
  return injectedConnector;
}
function activateInjectedProvider(providerName) {
  var _window = window,
    ethereum = _window.ethereum;
  if (!(ethereum !== null && ethereum !== void 0 && ethereum.providers) && !(ethereum !== null && ethereum !== void 0 && ethereum.isCoinbaseWallet) && !(ethereum !== null && ethereum !== void 0 && ethereum.isMetaMask)) {
    return undefined;
  }
  var provider;
  if (ethereum !== null && ethereum !== void 0 && ethereum.providers) {
    switch (providerName) {
      case 'CoinBase':
        provider = ethereum.providers.find(
        // @ts-ignore
        function (_ref) {
          var isCoinbaseWallet = _ref.isCoinbaseWallet;
          return isCoinbaseWallet;
        });
        break;
      case 'MetaMask':
      default:
        // @ts-ignore
        provider = ethereum.providers.find(function (_ref2) {
          var isMetaMask = _ref2.isMetaMask;
          return isMetaMask;
        });
        break;
    }
  }
  if (provider) {
    ethereum.setSelectedProvider(provider);
  }
}
function useEagerConnect(setActivatingConnector) {
  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3React */ .Ge)(),
    activate = _useWeb3React.activate,
    active = _useWeb3React.active;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
    _useState2 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
    tried = _useState2[0],
    setTried = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    ;
    _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee() {
      var shouldTryWalletConnect, rawData, data, _connector, _localStorage$getItem, _connector2, currentProviderName, authorized;
      return _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(Boolean(localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_11__/* .SHOULD_EAGER_CONNECT_LOCALSTORAGE_KEY */ .Cs)) !== true)) {
              _context.next = 4;
              break;
            }
            // only works with WalletConnect
            clearWalletConnectData();
            // force clear localStorage connection for MM/CB Wallet (Brave legacy)
            clearWalletLinkData();
            return _context.abrupt("return");
          case 4:
            shouldTryWalletConnect = false;
            try {
              // naive validation to not trigger Wallet Connect if data is corrupted
              rawData = localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_11__/* .WALLET_CONNECT_LOCALSTORAGE_KEY */ .eQ);
              if (rawData) {
                data = JSON.parse(rawData);
                if (data && data.connected) {
                  shouldTryWalletConnect = true;
                }
              }
            } catch (ex) {
              if (ex instanceof SyntaxError) {
                // rawData is not a valid json
                clearWalletConnectData();
              }
            }
            if (!shouldTryWalletConnect) {
              _context.next = 18;
              break;
            }
            _context.prev = 7;
            _connector = getWalletConnectConnector();
            setActivatingConnector(_connector);
            _context.next = 12;
            return activate(_connector, undefined, true);
          case 12:
            return _context.abrupt("return");
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](7);
            // assume data in localstorage is corrupted and delete it to not retry on next page load
            clearWalletConnectData();
          case 18:
            _context.prev = 18;
            _connector2 = getInjectedConnector();
            currentProviderName = (_localStorage$getItem = localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_11__/* .CURRENT_PROVIDER_LOCALSTORAGE_KEY */ .Wr)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : false;
            if (currentProviderName !== false) {
              activateInjectedProvider(currentProviderName);
            }
            _context.next = 24;
            return _connector2.isAuthorized();
          case 24:
            authorized = _context.sent;
            if (!authorized) {
              _context.next = 29;
              break;
            }
            setActivatingConnector(_connector2);
            _context.next = 29;
            return activate(_connector2, undefined, true);
          case 29:
            _context.next = 33;
            break;
          case 31:
            _context.prev = 31;
            _context.t1 = _context["catch"](18);
          case 33:
            setTried(true);
          case 34:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 15], [18, 31]]);
    }))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}
function useInactiveListener() {
  var suppress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var injected = getInjectedConnector();
  var _useWeb3React2 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3React */ .Ge)(),
    active = _useWeb3React2.active,
    error = _useWeb3React2.error,
    activate = _useWeb3React2.activate;
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    var _window2 = window,
      ethereum = _window2.ethereum;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      var handleConnect = function handleConnect() {
        activate(injected);
      };
      var handleChainChanged = function handleChainChanged() {
        activate(injected);
      };
      var handleAccountsChanged = function handleAccountsChanged(accounts) {
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      var handleNetworkChanged = function handleNetworkChanged() {
        activate(injected);
      };
      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);
      return function () {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, error, suppress, activate]);
}
function hasMetaMaskWalletExtension() {
  return window.ethereum;
}
var getInjectedHandler = function getInjectedHandler(activate, deactivate) {
  var fn = function fn() {
    return new Promise(function (resolve, reject) {
      activate(getInjectedConnector(), function (e) {
        var _e$message;
        if (e instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_4__/* .UnsupportedChainIdError */ .Uu) {
          deactivate();
          reject();
          return;
        }
        var errString = (_e$message = e.message) !== null && _e$message !== void 0 ? _e$message : e.toString();
        reject(errString);
      }).then(resolve);
    });
  };
  return fn;
};
var getWalletConnectHandler = function getWalletConnectHandler(activate, deactivate, setActivatingConnector) {
  var fn = /*#__PURE__*/function () {
    var _ref4 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2() {
      var walletConnect;
      return _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            walletConnect = getWalletConnectConnector();
            setActivatingConnector(walletConnect);
            activate(walletConnect, function (ex) {
              if (ex instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_4__/* .UnsupportedChainIdError */ .Uu) {
                _helperToast__WEBPACK_IMPORTED_MODULE_9__/* .helperToast.error */ .U.error("Unsupported chain. Switch to Arbitrum network on your wallet and try again");
                // eslint-disable-next-line no-console
                console.warn(ex);
              } else if (!(ex instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_6__/* .UserRejectedRequestError */ .ab)) {
                _helperToast__WEBPACK_IMPORTED_MODULE_9__/* .helperToast.error */ .U.error(ex.message);
                // eslint-disable-next-line no-console
                console.warn(ex);
              }
              clearWalletConnectData();
              deactivate();
            });
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function fn() {
      return _ref4.apply(this, arguments);
    };
  }();
  return fn;
};
var addNetwork = /*#__PURE__*/function () {
  var _ref5 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(metadata) {
    return _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [metadata]
          })["catch"]();
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function addNetwork(_x) {
    return _ref5.apply(this, arguments);
  };
}();
var switchNetwork = /*#__PURE__*/function () {
  var _ref6 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(chainId, active, onSuccess) {
    var chainIdHex;
    return _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (active) {
            _context4.next = 4;
            break;
          }
          // chainId in localStorage allows to switch network even if wallet is not connected
          // or there is no wallet at all
          localStorage.setItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_11__/* .SELECTED_NETWORK_LOCAL_STORAGE_KEY */ .HC, String(chainId));
          document.location.reload();
          return _context4.abrupt("return");
        case 4:
          _context4.prev = 4;
          chainIdHex = '0x' + chainId.toString(16);
          _context4.next = 8;
          return window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{
              chainId: chainIdHex
            }]
          });
        case 8:
          if (onSuccess) {
            onSuccess();
          }
          _helperToast__WEBPACK_IMPORTED_MODULE_9__/* .helperToast.success */ .U.success("Connected to ".concat((0,_config_chains__WEBPACK_IMPORTED_MODULE_8__/* .getChainName */ .qz)(chainId)));
          return _context4.abrupt("return", (0,_config_chains__WEBPACK_IMPORTED_MODULE_8__/* .getChainName */ .qz)(chainId));
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](4);
          if (!(_context4.t0.code !== 4001)) {
            _context4.next = 19;
            break;
          }
          _context4.next = 18;
          return addNetwork(_config_chains__WEBPACK_IMPORTED_MODULE_8__/* .NETWORK_METADATA */ .wc[chainId]);
        case 18:
          return _context4.abrupt("return", _context4.sent);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 13]]);
  }));
  return function switchNetwork(_x2, _x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}();
function showUnsupportedNetworkToast() {
  var chainId = _config_chains__WEBPACK_IMPORTED_MODULE_8__/* .DEFAULT_CHAIN_ID */ .rC;
  _helperToast__WEBPACK_IMPORTED_MODULE_9__/* .helperToast.error */ .U.error( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      children: ["Your wallet is not connected to ", (0,_config_chains__WEBPACK_IMPORTED_MODULE_8__/* .getChainName */ .qz)(chainId), "."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "clickable underline",
      onClick: function onClick() {
        return switchNetwork(chainId, true);
      },
      children: ["Switch to ", (0,_config_chains__WEBPACK_IMPORTED_MODULE_8__/* .getChainName */ .qz)(chainId)]
    })]
  }));
}
function useHandleUnsupportedNetwork() {
  var _useWeb3React3 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3React */ .Ge)(),
    error = _useWeb3React3.error,
    deactivate = _useWeb3React3.deactivate;
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_4__/* .UnsupportedChainIdError */ .Uu) {
      showUnsupportedNetworkToast();
      deactivate();
    }
  }, [error, deactivate]);
}

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);