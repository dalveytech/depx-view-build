"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[40],{

/***/ 74595:
/*!*************************************!*\
  !*** ./src/components/App/state.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": function() { return /* binding */ AppContext; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray.js */ 27424);
/* harmony import */ var _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 62435);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ 88305);



var AppContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_2__/* .createContainer */ .f)(function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    walletVisible = _useState2[0],
    setWalletVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    pendingTxns = _useState4[0],
    setPendingTxns = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = _home_runner_work_depx_view_depx_view_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
    tableFlag = _useState6[0],
    setTableFlag = _useState6[1];
  return {
    pendingTxns: pendingTxns,
    walletVisible: walletVisible,
    setWalletVisible: setWalletVisible,
    setPendingTxns: setPendingTxns,
    tableFlag: tableFlag,
    setTableFlag: setTableFlag
  };
});

/***/ }),

/***/ 2938:
/*!**********************************************!*\
  !*** ./src/pages/more/index.tsx + 8 modules ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ more; }
});

// EXTERNAL MODULE: ./node_modules/@web3-react/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(34713);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(59734);
;// CONCATENATED MODULE: ./src/services/datasource/thegraph/more.ts
var getUserInfo = function getUserInfo() {
  var userInfo = {
    actionCount: 2128,
    winRate: 72.32,
    avgProfit: 23.32,
    avgLoss: -12.23
  };
  return userInfo;
};
var getTradingData = function getTradingData() {
  var tradingData = {
    totalVolume: '223223000000',
    feesPaid: '223223000000',
    realizedPnl: '223223000000'
  };
  return tradingData;
};
;// CONCATENATED MODULE: ./src/pages/more/more.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var more_modulemodules = ({"more":"more___v_xdE"});
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 2 modules
var row = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(6226);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(3410);
;// CONCATENATED MODULE: ./src/assets/more_question.svg
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

const SvgMoreQuestion = (props) => /* @__PURE__ */ react.createElement("svg", __spreadValues({ width: 16, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z", fill: "#797B96" }));

/* harmony default export */ var more_question = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE1QTcgNyAwIDEgMCA4IDFhNyA3IDAgMCAwIDAgMTRabS43LTlWNC42SDcuM1Y2aDEuNFptMCA2VjcuNDY3SDcuM1YxMmgxLjRaIiBmaWxsPSIjNzk3Qjk2Ii8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/pages/more/ui/TradingInfo/tradingInfo.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var tradingInfo_modulemodules = ({"item":"item___FRv2D","btn":"btn___fp2oa","primary":"primary___h3mfF","head":"head___J_JkM","content":"content___EqeXD","cell":"cell___NTsu9","fieldValue":"fieldValue___cZGhB","fieldName":"fieldName___weocJ","footer":"footer___Ir88b","icon":"icon___qyyhH","fee":"fee___t82Et"});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/pages/more/ui/TradingInfo/index.tsx







var TradingInfo = function TradingInfo(props) {
  var tradingData = props.tradingData;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: tradingInfo_modulemodules.tradingInfo,
    gutter: 24,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 12,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: tradingInfo_modulemodules.item,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: tradingInfo_modulemodules.head,
          children: "Trading Data"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          className: tradingInfo_modulemodules.content,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 8,
            className: tradingInfo_modulemodules.cell,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldValue,
              children: "$".concat(tradingData === null || tradingData === void 0 ? void 0 : tradingData.totalVolume)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldName,
              children: "Total volume"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 8,
            className: tradingInfo_modulemodules.cell,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldValue,
              children: "$".concat(tradingData === null || tradingData === void 0 ? void 0 : tradingData.feesPaid)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldName,
              children: "Fees Paid"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 8,
            className: tradingInfo_modulemodules.cell,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldValue,
              children: "$".concat(tradingData === null || tradingData === void 0 ? void 0 : tradingData.realizedPnl)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldName,
              children: "PNL"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: tradingInfo_modulemodules.footer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
            type: "button",
            className: "".concat(tradingInfo_modulemodules.btn, " ").concat(tradingInfo_modulemodules.primary),
            to: "/trade",
            children: "Trade"
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 12,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: tradingInfo_modulemodules.item,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: tradingInfo_modulemodules.head,
          children: "Trading Fees"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
          className: tradingInfo_modulemodules.content,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 12,
            className: tradingInfo_modulemodules.cell,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: tradingInfo_modulemodules.fieldValue,
              children: ["0.0800% ", /*#__PURE__*/(0,jsx_runtime.jsx)("del", {
                children: "0.1000% "
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldName,
              children: "Open/Close Fee"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 12,
            className: tradingInfo_modulemodules.cell,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: tradingInfo_modulemodules.fieldValue,
              children: "0.0020% / 1h"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "".concat(tradingInfo_modulemodules.fieldName, " ").concat(tradingInfo_modulemodules.fee),
              children: ["Fund Fee ", /*#__PURE__*/(0,jsx_runtime.jsx)(SvgMoreQuestion, {
                className: tradingInfo_modulemodules.icon
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: tradingInfo_modulemodules.footer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
            type: "button",
            className: "".concat(tradingInfo_modulemodules.btn),
            to: "#",
            children: "Read More"
          })
        })]
      })
    })]
  });
};
/* harmony default export */ var ui_TradingInfo = (TradingInfo);
// EXTERNAL MODULE: ./node_modules/@davatar/react/dist/index.js
var react_dist = __webpack_require__(610);
var dist_default = /*#__PURE__*/__webpack_require__.n(react_dist);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(74855);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/assets/more_copy.svg
var more_copy_defProp = Object.defineProperty;
var more_copy_getOwnPropSymbols = Object.getOwnPropertySymbols;
var more_copy_hasOwnProp = Object.prototype.hasOwnProperty;
var more_copy_propIsEnum = Object.prototype.propertyIsEnumerable;
var more_copy_defNormalProp = (obj, key, value) => key in obj ? more_copy_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var more_copy_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (more_copy_hasOwnProp.call(b, prop))
      more_copy_defNormalProp(a, prop, b[prop]);
  if (more_copy_getOwnPropSymbols)
    for (var prop of more_copy_getOwnPropSymbols(b)) {
      if (more_copy_propIsEnum.call(b, prop))
        more_copy_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgMoreCopy = (props) => /* @__PURE__ */ react.createElement("svg", more_copy_spreadValues({ width: 24, height: 25, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z", stroke: "#9597B5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ react.createElement("path", { d: "M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5", stroke: "#9597B5", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }));

/* harmony default export */ var more_copy = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjI1IDloLTdhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NXY3YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzVoN0ExLjc1IDEuNzUgMCAwIDAgMTkgMTcuNzV2LTdBMS43NSAxLjc1IDAgMCAwIDE3LjI1IDlaIiBzdHJva2U9IiM5NTk3QjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTUuNSA5VjcuMjVhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NWgtN0ExLjc1IDEuNzUgMCAwIDAgNSA3LjI1djdBMS43NSAxLjc1IDAgMCAwIDYuNzUgMTZIOC41IiBzdHJva2U9IiM5NTk3QjUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");

// EXTERNAL MODULE: ./src/assets/rewards_logo.svg
var rewards_logo = __webpack_require__(11289);
// EXTERNAL MODULE: ./src/components/App/state.ts
var state = __webpack_require__(74595);
// EXTERNAL MODULE: ./src/config/chains.ts
var chains = __webpack_require__(13805);
// EXTERNAL MODULE: ./src/config/localStorage.ts
var config_localStorage = __webpack_require__(22837);
// EXTERNAL MODULE: ./src/lib/helperToast.ts
var helperToast = __webpack_require__(71874);
// EXTERNAL MODULE: ./src/lib/rpc/index.ts
var rpc = __webpack_require__(1403);
// EXTERNAL MODULE: ./src/lib/wallets.tsx
var wallets = __webpack_require__(16330);
;// CONCATENATED MODULE: ./src/pages/more/ui/WalletInfo/walletInfo.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var walletInfo_modulemodules = ({"walletInfo":"walletInfo___GORBE","avatar":"avatar___SFBQR","copy":"copy___lquiD","left":"left___J1Auj","right":"right___cW8mN","address":"address___WNk72","cells":"cells___ZDMOm","cell":"cell___Cu_Tk","fieldValue":"fieldValue___YJIFV","fieldName":"fieldName___E9D3z","btn":"btn___UEE1S","primary":"primary___CrgyC"});
;// CONCATENATED MODULE: ./src/pages/more/ui/WalletInfo/index.tsx


















var WalletInfo = function WalletInfo(props) {
  var userInfo = props.userInfo;
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    setWalletVisible = _AppContext$useContai.setWalletVisible;
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    deactivate = _useWeb3React.deactivate,
    account = _useWeb3React.account;
  var _useJsonRpcProvider = (0,rpc/* useJsonRpcProvider */.E)(chains/* ETH_MAINNET */.p4),
    ethereumProvider = _useJsonRpcProvider.provider;
  var disconnectAccount = (0,react.useCallback)(function () {
    (0,wallets/* clearWalletConnectData */.VK)();
    // force clear localStorage connection for MM/CB Wallet (Brave legacy)
    (0,wallets/* clearWalletLinkData */.hL)();
    deactivate();
  }, [deactivate]);
  function onDisconnect() {
    disconnectAccount();
    localStorage.removeItem(config_localStorage/* SHOULD_EAGER_CONNECT_LOCALSTORAGE_KEY */.Cs);
    localStorage.removeItem(config_localStorage/* CURRENT_PROVIDER_LOCALSTORAGE_KEY */.Wr);
  }
  var displayAccount = (0,react.useMemo)(function () {
    if (!account) {
      return account;
    }
    if (account.length > 13) {
      return "".concat(account.slice(0, 5), "...").concat(account.slice(account.length - 4));
    }
    return account;
  }, [account]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: walletInfo_modulemodules.walletInfo,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 12,
      className: walletInfo_modulemodules.left,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          flex: "100px",
          style: {
            height: 80
          },
          children: account ? /*#__PURE__*/(0,jsx_runtime.jsx)((dist_default()), {
            size: 80,
            address: account !== null && account !== void 0 ? account : '',
            provider: ethereumProvider
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            className: walletInfo_modulemodules.avatar,
            src: rewards_logo/* default */.Z
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
          className: walletInfo_modulemodules.details,
          flex: "auto",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            className: walletInfo_modulemodules.address,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: displayAccount !== null && displayAccount !== void 0 ? displayAccount : '-'
            }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
              text: account !== null && account !== void 0 ? account : '',
              onCopy: function onCopy() {
                helperToast/* helperToast.success */.U.success('Address copied to your clipboard');
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgMoreCopy, {
                className: walletInfo_modulemodules.copy
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
            className: walletInfo_modulemodules.cells,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              className: walletInfo_modulemodules.cell,
              span: 6,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: walletInfo_modulemodules.fieldValue,
                children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.actionCount
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: walletInfo_modulemodules.fieldName,
                children: "Trades"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              className: walletInfo_modulemodules.cell,
              span: 6,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: walletInfo_modulemodules.fieldValue,
                children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.winRate, "%"]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: walletInfo_modulemodules.fieldName,
                children: "Winrate"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              className: walletInfo_modulemodules.cell,
              span: 6,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: walletInfo_modulemodules.fieldValue,
                children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.avgProfit, "%"]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: walletInfo_modulemodules.fieldName,
                children: "Avaerage profit"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
              className: walletInfo_modulemodules.cell,
              span: 6,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: walletInfo_modulemodules.fieldValue,
                children: [userInfo === null || userInfo === void 0 ? void 0 : userInfo.avgLoss, "%"]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: walletInfo_modulemodules.fieldName,
                children: "Average loss"
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
      span: 8,
      offset: 4,
      className: walletInfo_modulemodules.right,
      children: [account && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
          type: "button",
          className: "".concat(walletInfo_modulemodules.btn, " ").concat(walletInfo_modulemodules.primary),
          to: "#",
          children: "Share"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
          type: "button",
          className: "".concat(walletInfo_modulemodules.btn),
          to: "#",
          style: {
            marginLeft: 12
          },
          onClick: function onClick() {
            onDisconnect();
          },
          children: "Disconnect"
        })]
      }), !account && /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
        type: "button",
        className: "".concat(walletInfo_modulemodules.btn, " ").concat(walletInfo_modulemodules.primary),
        to: "#",
        style: {
          marginLeft: 12
        },
        onClick: function onClick() {
          setWalletVisible(true);
        },
        children: "Connect Wallet"
      })]
    })]
  });
};
/* harmony default export */ var ui_WalletInfo = (WalletInfo);
;// CONCATENATED MODULE: ./src/pages/more/index.tsx









var More = function More() {
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    account = _useWeb3React.account;
  var _useSWR = (0,dist/* default */.ZP)(account, function (args) {
      return getUserInfo();
    }),
    userInfo = _useSWR.data;
  var _useSWR2 = (0,dist/* default */.ZP)([account], function () {
      return getTradingData();
    }),
    tradingData = _useSWR2.data;
  console.log('=====getUserInfo', tradingData);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: more_modulemodules.more,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ui_WalletInfo, {
      userInfo: userInfo
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_TradingInfo, {
      tradingData: tradingData
    })]
  });
};
/* harmony default export */ var more = (More);

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


/***/ }),

/***/ 37193:
/*!***************************************************************************!*\
  !*** ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js + 1 modules ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useFlexGapSupport; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/styleChecker.js


const canUseDocElement = () => (0,canUseDom/* default */.Z)() && window.document.documentElement;

let flexGapSupported;
const detectFlexGapSupported = () => {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }
  // create flex container with row-gap set
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  document.body.removeChild(flex);
  return flexGapSupported;
};
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js


/* harmony default export */ var useFlexGapSupport = (() => {
  const [flexible, setFlexible] = react.useState(false);
  react.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);
  return flexible;
});

/***/ }),

/***/ 6226:
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/col/index.js + 1 modules ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_col; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/RowContext.js
var RowContext = __webpack_require__(99134);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/style/index.js
var grid_style = __webpack_require__(6999);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/col.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





function parseFlex(flex) {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const Col = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
    gutter,
    wrap,
    supportFlexGap
  } = react.useContext(RowContext/* default */.Z);
  const {
      prefixCls: customizePrefixCls,
      span,
      order,
      offset,
      push,
      pull,
      className,
      children,
      flex,
      style
    } = props,
    others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  const prefixCls = getPrefixCls('col', customizePrefixCls);
  const [wrapSSR, hashId] = (0,grid_style/* useColStyle */.c)(prefixCls);
  let sizeClassObj = {};
  sizes.forEach(size => {
    let sizeProps = {};
    const propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if (typeof propSize === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = Object.assign(Object.assign({}, sizeClassObj), {
      [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
      [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
      [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
      [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
      [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    });
  });
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-${span}`]: span !== undefined,
    [`${prefixCls}-order-${order}`]: order,
    [`${prefixCls}-offset-${offset}`]: offset,
    [`${prefixCls}-push-${push}`]: push,
    [`${prefixCls}-pull-${pull}`]: pull
  }, className, sizeClassObj, hashId);
  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return wrapSSR( /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    style: Object.assign(Object.assign({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ var col = (Col);
;// CONCATENATED MODULE: ./node_modules/antd/es/col/index.js

/* harmony default export */ var es_col = (col);

/***/ }),

/***/ 99134:
/*!*************************************************!*\
  !*** ./node_modules/antd/es/grid/RowContext.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 62435);

const RowContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (RowContext);

/***/ }),

/***/ 6999:
/*!**************************************************!*\
  !*** ./node_modules/antd/es/grid/style/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": function() { return /* binding */ useRowStyle; },
/* harmony export */   "c": function() { return /* binding */ useColStyle; }
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/internal */ 67968);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/internal */ 45503);

// ============================== Row-Shared ==============================
const genGridRowStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: 'flex',
      flexFlow: 'row wrap',
      minWidth: 0,
      '&::before, &::after': {
        display: 'flex'
      },
      '&-no-wrap': {
        flexWrap: 'nowrap'
      },
      // The origin of the X-axis
      '&-start': {
        justifyContent: 'flex-start'
      },
      // The center of the X-axis
      '&-center': {
        justifyContent: 'center'
      },
      // The opposite of the X-axis
      '&-end': {
        justifyContent: 'flex-end'
      },
      '&-space-between': {
        justifyContent: 'space-between'
      },
      '&-space-around ': {
        justifyContent: 'space-around'
      },
      // Align at the top
      '&-top': {
        alignItems: 'flex-start'
      },
      // Align at the center
      '&-middle': {
        alignItems: 'center'
      },
      '&-bottom': {
        alignItems: 'flex-end'
      }
    }
  };
};
// ============================== Col-Shared ==============================
const genGridColStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: 'relative',
      maxWidth: '100%',
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'none'
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: 'block',
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: Object.assign({}, genGridStyle(token, sizeCls))
});
// ============================== Export ==============================
const useRowStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => [genGridRowStyle(token)]);
const useColStyle = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('Grid', token => {
  const gridToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .merge */ .TS)(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });

  const gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(key => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => Object.assign(Object.assign({}, pre), cur), {})];
});

/***/ }),

/***/ 6277:
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/row/index.js + 2 modules ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_row; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js + 1 modules
var useFlexGapSupport = __webpack_require__(37193);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/internal.js + 14 modules
var internal = __webpack_require__(21823);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/responsiveObserver.js


const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = `screen${breakpointUpper}Min`;
    const screen = `screen${breakpointUpper}`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(`${screenMin}<=${screen} fails : !(${indexableToken[screenMin]}<=${indexableToken[screen]})`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = `screen${breakpointUpper}Max`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(`${screen}<=${screenMax} fails : !(${indexableToken[screen]}<=${indexableToken[screenMax]})`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = `screen${nextBreakpointUpperMin}Min`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(`${screenMax}<=${nextScreenMin} fails : !(${indexableToken[screenMax]}<=${indexableToken[nextScreenMin]})`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = (0,internal/* useToken */.dQ)();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add `useMemo` here.
  return react.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}
// EXTERNAL MODULE: ./node_modules/antd/es/grid/RowContext.js
var RowContext = __webpack_require__(99134);
// EXTERNAL MODULE: ./node_modules/antd/es/grid/style/index.js
var grid_style = __webpack_require__(6999);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/row.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







const RowAligns = (/* unused pure expression or super */ null && (['top', 'middle', 'bottom', 'stretch']));
const RowJustify = (/* unused pure expression or super */ null && (['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']));
function useMergePropByScreen(oriProp, screen) {
  const [prop, setProp] = react.useState(typeof oriProp === 'string' ? oriProp : '');
  const clacMergeAlignOrJustify = () => {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if (typeof oriProp !== 'object') {
      return;
    }
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) continue;
      const curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react.useEffect(() => {
    clacMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
const Row = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      justify,
      align,
      className,
      style,
      children,
      gutter = 0,
      wrap
    } = props,
    others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [screens, setScreens] = react.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  // to save screens info when responsiveObserve callback had been call
  const [curScreens, setCurScreens] = react.useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  });
  // ================================== calc reponsive data ==================================
  const mergeAlign = useMergePropByScreen(align, curScreens);
  const mergeJustify = useMergePropByScreen(justify, curScreens);
  const supportFlexGap = (0,useFlexGapSupport/* default */.Z)();
  const gutterRef = react.useRef(gutter);
  const responsiveObserver = useResponsiveObserver();
  // ================================== Effect ==================================
  react.useEffect(() => {
    const token = responsiveObserver.subscribe(screen => {
      setCurScreens(screen);
      const currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && typeof currentGutter === 'object' || Array.isArray(currentGutter) && (typeof currentGutter[0] === 'object' || typeof currentGutter[1] === 'object')) {
        setScreens(screen);
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  const prefixCls = getPrefixCls('row', customizePrefixCls);
  const [wrapSSR, hashId] = (0,grid_style/* useRowStyle */.V)(prefixCls);
  const gutters = getGutter();
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-no-wrap`]: wrap === false,
    [`${prefixCls}-${mergeJustify}`]: mergeJustify,
    [`${prefixCls}-${mergeAlign}`]: mergeAlign,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  if (supportFlexGap) {
    // Set gap direct if flex gap support
    [, rowStyle.rowGap] = gutters;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  const rowContext = react.useMemo(() => ({
    gutter: [gutterH, gutterV],
    wrap,
    supportFlexGap
  }), [gutterH, gutterV, wrap, supportFlexGap]);
  return wrapSSR( /*#__PURE__*/react.createElement(RowContext/* default.Provider */.Z.Provider, {
    value: rowContext
  }, /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    className: classes,
    style: Object.assign(Object.assign({}, rowStyle), style),
    ref: ref
  }), children)));
});
if (false) {}
/* harmony default export */ var row = (Row);
;// CONCATENATED MODULE: ./node_modules/antd/es/row/index.js

/* harmony default export */ var es_row = (row);

/***/ }),

/***/ 67968:
/*!******************************************************************!*\
  !*** ./node_modules/antd/es/theme/util/genComponentStyleHook.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ genComponentStyleHook; }
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/cssinjs */ 29484);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 62435);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style */ 14747);
/* harmony import */ var _config_provider_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config-provider/context */ 53124);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal */ 21823);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal */ 45503);





function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return prefixCls => {
    const [theme, token, hashId] = (0,_internal__WEBPACK_IMPORTED_MODULE_2__/* .useToken */ .dQ)();
    const {
      getPrefixCls,
      iconPrefixCls
    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_config_provider_context__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
    const rootPrefixCls = getPrefixCls();
    // Generate style for all a tags in antd component.
    (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .useStyleRegister */ .xy)({
      theme,
      token,
      hashId,
      path: ['Shared', rootPrefixCls]
    }, () => [{
      // Link
      '&': (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .genLinkStyle */ .Lx)(token)
    }]);
    return [(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .useStyleRegister */ .xy)({
      theme,
      token,
      hashId,
      path: [component, prefixCls, iconPrefixCls]
    }, () => {
      const {
        token: proxyToken,
        flush
      } = (0,_internal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(token);
      const defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = Object.assign(Object.assign({}, defaultComponentToken), token[component]);
      const componentCls = `.${prefixCls}`;
      const mergedToken = (0,_internal__WEBPACK_IMPORTED_MODULE_5__/* .merge */ .TS)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls,
        overrideComponentToken: token[component]
      });
      flush(component, mergedComponentToken);
      return [(0,_style__WEBPACK_IMPORTED_MODULE_4__/* .genCommonStyle */ .du)(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}

/***/ }),

/***/ 45503:
/*!******************************************************!*\
  !*** ./node_modules/antd/es/theme/util/statistic.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TS": function() { return /* binding */ merge; },
/* harmony export */   "ZP": function() { return /* binding */ statisticToken; }
/* harmony export */ });
/* unused harmony exports statistic, _statistic_build_ */
const enableStatistic =  false || typeof CSSINJS_STATISTIC !== 'undefined';
let recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @private Internal Usage. Not use in your production. */
const statistic = {};
/** @private Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
const _statistic_build_ = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
function statisticToken(token) {
  let tokenKeys;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: componentToken
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
}

/***/ }),

/***/ 88305:
/*!***********************************************************!*\
  !*** ./node_modules/unstated-next/dist/unstated-next.mjs ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ createContainer; }
/* harmony export */ });
/* unused harmony export useContainer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 62435);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);