"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[59],{

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

/***/ 69499:
/*!****************************************************!*\
  !*** ./src/components/Modal/index.tsx + 2 modules ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Modal; }
});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(11355);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 10 modules
var dialog = __webpack_require__(82546);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./src/assets/close.svg
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

const SvgClose = (props) => /* @__PURE__ */ react.createElement("svg", __spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("rect", { width: 32, height: 32, rx: 16, fill: "#232538" }), /* @__PURE__ */ react.createElement("path", { d: "m12 12 4 4m0 0 4-4m-4 4-4 4m4-4 4 4", stroke: "#9597B5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));

/* harmony default export */ var assets_close = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiMyMzI1MzgiLz48cGF0aCBkPSJtMTIgMTIgNCA0bTAgMCA0LTRtLTQgNC00IDRtNC00IDQgNCIgc3Ryb2tlPSIjOTU5N0I1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/components/Modal/modal.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/components/Modal/index.tsx






var Modal = function Modal(props) {
  var visible = props.visible,
    title = props.title,
    width = props.width,
    onClose = props.onClose,
    children = props.children,
    className = props.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(transition/* Transition */.u, {
    appear: true,
    show: visible,
    as: react.Fragment,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
      open: visible,
      onClose: onClose,
      className: "dialog",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, {
        as: react.Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "fixed inset-0 bg-black bg-opacity-25 opacity-100"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "fixed inset-0 overflow-y-auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex min-h-full items-center justify-center p-4 text-center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, {
            as: react.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dialog/* Dialog.Panel */.V.Panel, {
              className: "dialog-panel transform overflow-hidden shadow-xl transition-all ".concat(className !== null && className !== void 0 ? className : ''),
              style: {
                width: width
              },
              children: [title && /*#__PURE__*/(0,jsx_runtime.jsxs)(dialog/* Dialog.Title */.V.Title, {
                className: "dialog-title",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                  children: [title, " "]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgClose, {
                  onClick: function onClick() {
                    onClose();
                  }
                })]
              }), children]
            })
          })
        })
      })]
    })
  });
};
/* harmony default export */ var components_Modal = (Modal);

/***/ }),

/***/ 26977:
/*!*************************************************************!*\
  !*** ./src/pages/trade/ui/PriceInput/index.tsx + 1 modules ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bW": function() { return /* binding */ LongPriceInput; },
  "gp": function() { return /* binding */ PayInput; },
  "tV": function() { return /* binding */ PriceInput; },
  "mU": function() { return /* binding */ ReceiveInput; },
  "ZP": function() { return /* binding */ ui_PriceInput; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(42122);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/pages/trade/ui/PriceInput/priceinput.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var priceinput_modulemodules = ({"input":"input___FmRXa","wrapper":"wrapper___FSDBG","var":"var___VCDiS","flex":"flex___gOhnV","max":"max___hao26"});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/pages/trade/ui/PriceInput/index.tsx





var Input = function Input(props) {
  var label = props.label,
    children = props.children,
    disabled = props.disabled,
    className = props.className,
    _props$decimals = props.decimals,
    decimals = _props$decimals === void 0 ? 18 : _props$decimals,
    onChange = props.onChange,
    value = props.value,
    max = props.max;
  var handleChange = function handleChange(val) {
    if (onChange) {
      var reg = new RegExp("^\\D*(\\d*(?:\\.\\d{0,".concat(decimals, "})?).*$"), 'g');
      var num = val.replace(reg, '$1');
      if (max && +num > +max) num = max;
      onChange(num);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()(priceinput_modulemodules.input, className),
    children: [label && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: priceinput_modulemodules.label,
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: priceinput_modulemodules.wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        type: "text",
        value: value,
        disabled: disabled,
        onChange: function onChange(e) {
          handleChange(e.target.value);
        },
        placeholder: "0.0"
      }), children]
    })]
  });
};
var PriceInput = function PriceInput(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Input, objectSpread2_default()(objectSpread2_default()({
    label: "Price"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: priceinput_modulemodules["var"],
      children: "USD"
    })
  }));
};
var LongPriceInput = function LongPriceInput(props) {
  var symbol = props.symbol;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Input, objectSpread2_default()(objectSpread2_default()({
    label: "Long"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: priceinput_modulemodules["var"],
      children: symbol
    })
  }));
};
var PayInput = function PayInput(props) {
  var onClickMaxBtn = props.onClickMaxBtn,
    symbol = props.symbol;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Input, objectSpread2_default()(objectSpread2_default()({
    label: 'Pay'
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: priceinput_modulemodules.flex,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: priceinput_modulemodules.max,
        onClick: onClickMaxBtn,
        children: "MAX"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: priceinput_modulemodules["var"],
        children: symbol !== null && symbol !== void 0 ? symbol : 'USDC'
      })]
    })
  }));
};
var ReceiveInput = function ReceiveInput(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Input, objectSpread2_default()(objectSpread2_default()({
    label: "Receive"
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: priceinput_modulemodules.flex,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: priceinput_modulemodules["var"],
        children: props.symbol
      })
    })
  }));
};
/* harmony default export */ var ui_PriceInput = (Input);

/***/ }),

/***/ 25122:
/*!***********************************************************************!*\
  !*** ./src/services/datasource/wallet/contracts/ERC20.ts + 1 modules ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": function() { return /* binding */ ERC20; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(56690);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(89728);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(94993);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(61655);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(26389);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
;// CONCATENATED MODULE: ./src/abis/Token.json
var Token_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
// EXTERNAL MODULE: ./src/services/datasource/wallet/contracts/SolidityContract.ts + 7 modules
var SolidityContract = __webpack_require__(76935);
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/ERC20.ts









var ERC20 = /*#__PURE__*/function (_SolidityContract) {
  inherits_default()(ERC20, _SolidityContract);
  var _super = createSuper_default()(ERC20);
  function ERC20(library, chainId) {
    var _this;
    var address = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var abi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    classCallCheck_default()(this, ERC20);
    if (abi == undefined) {
      _this = _super.call(this, library, chainId, Token_namespaceObject.Mt, address);
    } else {
      _this = _super.call(this, library, chainId, abi, address);
    }
    return possibleConstructorReturn_default()(_this);
  }
  createClass_default()(ERC20, [{
    key: "name",
    value: function () {
      var _name = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.call('name');
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function name() {
        return _name.apply(this, arguments);
      }
      return name;
    }()
  }, {
    key: "symbol",
    value: function () {
      var _symbol = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.call('symbol');
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function symbol() {
        return _symbol.apply(this, arguments);
      }
      return symbol;
    }()
  }, {
    key: "decimals",
    value: function () {
      var _decimals = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.call('decimals');
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function decimals() {
        return _decimals.apply(this, arguments);
      }
      return decimals;
    }()
  }, {
    key: "totalSupply",
    value: function () {
      var _totalSupply = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
        var supply;
        return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.call('totalSupply');
            case 2:
              supply = _context4.sent;
              return _context4.abrupt("return", supply);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function totalSupply() {
        return _totalSupply.apply(this, arguments);
      }
      return totalSupply;
    }()
  }, {
    key: "balanceOf",
    value: function () {
      var _balanceOf = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(account) {
        return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.call('balanceOf', account);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function balanceOf(_x) {
        return _balanceOf.apply(this, arguments);
      }
      return balanceOf;
    }()
  }, {
    key: "transfer",
    value: function () {
      var _transfer = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6(to, amount) {
        return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.call('transfer', to, amount);
            case 2:
              return _context6.abrupt("return", _context6.sent);
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function transfer(_x2, _x3) {
        return _transfer.apply(this, arguments);
      }
      return transfer;
    }()
  }, {
    key: "allowance",
    value: function () {
      var _allowance = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7(owner, spender) {
        return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.call('allowance', owner, spender);
            case 2:
              return _context7.abrupt("return", _context7.sent);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function allowance(_x4, _x5) {
        return _allowance.apply(this, arguments);
      }
      return allowance;
    }()
  }, {
    key: "approve",
    value: function () {
      var _approve = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(spender, amount) {
        return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.call('approve', spender, amount);
            case 2:
              return _context8.abrupt("return", _context8.sent);
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function approve(_x6, _x7) {
        return _approve.apply(this, arguments);
      }
      return approve;
    }()
  }, {
    key: "transferFrom",
    value: function () {
      var _transferFrom = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee9(from, to, amount) {
        return regeneratorRuntime_default()().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.call('transferFrom', from, to, amount);
            case 2:
              return _context9.abrupt("return", _context9.sent);
            case 3:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function transferFrom(_x8, _x9, _x10) {
        return _transferFrom.apply(this, arguments);
      }
      return transferFrom;
    }()
  }, {
    key: "increaseAllowance",
    value: function () {
      var _increaseAllowance = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee10(spender, addedValue) {
        return regeneratorRuntime_default()().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.call('increaseAllowance', spender, addedValue);
            case 2:
              return _context10.abrupt("return", _context10.sent);
            case 3:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function increaseAllowance(_x11, _x12) {
        return _increaseAllowance.apply(this, arguments);
      }
      return increaseAllowance;
    }()
  }, {
    key: "decreaseAllowance",
    value: function () {
      var _decreaseAllowance = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee11(spender, subtractedValue) {
        return regeneratorRuntime_default()().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.call('decreaseAllowance', spender, subtractedValue);
            case 2:
              return _context11.abrupt("return", _context11.sent);
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function decreaseAllowance(_x13, _x14) {
        return _decreaseAllowance.apply(this, arguments);
      }
      return decreaseAllowance;
    }()
  }]);
  return ERC20;
}(SolidityContract/* SolidityContract */.k);

/***/ })

}]);