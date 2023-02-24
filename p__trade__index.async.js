"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[939],{

/***/ 21650:
/*!***************************!*\
  !*** ./src/lib/legacy.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET": function() { return /* binding */ getAccountUrl; },
/* harmony export */   "FB": function() { return /* binding */ LONG; },
/* harmony export */   "Qo": function() { return /* binding */ SHORT; },
/* harmony export */   "VZ": function() { return /* binding */ LIMIT; },
/* harmony export */   "YO": function() { return /* binding */ MARKET; },
/* harmony export */   "bD": function() { return /* binding */ MIN_PROFIT_TIME; },
/* harmony export */   "pQ": function() { return /* binding */ CHART_PERIODS; }
/* harmony export */ });
/* unused harmony exports MAX_LEVERAGE, INCREASE, DECREASE, STOP, USDG_DECIMALS, SWAP, BASIS_POINTS_DIVISOR, USD_DECIMALS, DUST_BNB, PRECISION */
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/chains */ 13805);
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbers */ 24069);


var MIN_PROFIT_TIME = 0;
var MAX_LEVERAGE = (/* unused pure expression or super */ null && (100 * 10000));
var INCREASE = 'Increase';
var DECREASE = 'Decrease';
var STOP = 'Stop';
var USDG_DECIMALS = 18;
var SWAP = 'Swap';
var LONG = 'Long';
var SHORT = 'Short';
var BASIS_POINTS_DIVISOR = 10000;
var USD_DECIMALS = 30;
var DUST_BNB = '2000000000000000';
var MARKET = 'Market';
var LIMIT = 'Limit';
var PRECISION = (0,_numbers__WEBPACK_IMPORTED_MODULE_1__/* .expandDecimals */ .Jl)(1, 30);
var CHART_PERIODS = {
  '5m': 60 * 5,
  '15m': 60 * 15,
  '1h': 60 * 60,
  '4h': 60 * 60 * 4,
  '1d': 60 * 60 * 24
};
function getAccountUrl(chainId, account) {
  if (!account) {
    return (0,_config_chains__WEBPACK_IMPORTED_MODULE_0__/* .getExplorerUrl */ .jY)(chainId);
  }
  return (0,_config_chains__WEBPACK_IMPORTED_MODULE_0__/* .getExplorerUrl */ .jY)(chainId) + 'address/' + account;
}

/***/ }),

/***/ 14456:
/*!************************************************!*\
  !*** ./src/pages/trade/index.tsx + 69 modules ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ trade; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(861);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(27424);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@web3-react/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(34713);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/recoil/es/index.js
var es = __webpack_require__(4480);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(59734);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(38416);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(42122);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/lodash-es/get.js + 40 modules
var get = __webpack_require__(58967);
// EXTERNAL MODULE: ./node_modules/react-use/esm/useLocalStorage.js + 1 modules
var esm_useLocalStorage = __webpack_require__(13907);
;// CONCATENATED MODULE: ./src/lib/localStorage.ts






var MARKET_SELECTION_KEY = 'depx-market-selection';
function useLocalStorageByChainId(chainId, key, defaultValue) {
  var _useLocalStorage = useLocalStorage(key, {}),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    internalValue = _useLocalStorage2[0],
    setInternalValue = _useLocalStorage2[1];
  var setValue = useCallback(function (value) {
    setInternalValue(function (internalValue) {
      if (typeof value === 'function') {
        value = value((internalValue === null || internalValue === void 0 ? void 0 : internalValue[chainId]) || defaultValue);
      }
      var newInternalValue = _objectSpread(_objectSpread({}, internalValue), {}, _defineProperty({}, chainId, value));
      return newInternalValue;
    });
  }, [chainId, setInternalValue, defaultValue]);
  var value;
  if (internalValue && chainId in internalValue) {
    value = internalValue[chainId];
  } else {
    value = defaultValue;
  }
  return [value, setValue];
}
function useLocalStorageSerializeKey(key, value, opts) {
  var localKey = JSON.stringify(key);
  return (0,esm_useLocalStorage/* default */.Z)(localKey, value, opts);
}
function getStorageByChainId(chainId, key) {
  var res = window.localStorage.getItem(key);
  if (!res) {
    return undefined;
  }
  try {
    var obj = JSON.parse(res);
    return (0,get/* default */.Z)(obj, chainId);
  } catch (e) {
    console.error(e);
  }
  return undefined;
}
var setStorageByChainId = function setStorageByChainId(chainId, key, data) {
  var res = window.localStorage.getItem(key);
  try {
    if (!res) {
      res = Object.create(null);
    } else {
      res = JSON.parse(res);
    }
    ;
    res[chainId] = data;
    window.localStorage.setItem(key, JSON.stringify(res));
  } catch (e) {
    console.error(e);
  }
};
;// CONCATENATED MODULE: ./src/pages/trade/data/index.ts


var marketSelectionAtom = (0,es/* atom */.cn)({
  key: 'marketSelection',
  "default": undefined
});
var marketSelectionSelector = (0,es/* selectorFamily */.CG)({
  key: 'marketSelectionSelector',
  get: function get(chainId) {
    return function (_ref) {
      var get = _ref.get;
      return getStorageByChainId(chainId, MARKET_SELECTION_KEY) || get(marketSelectionAtom);
    };
  },
  set: function set(chainId) {
    return function (_ref2, value) {
      var set = _ref2.set;
      set(marketSelectionAtom, value);
      setStorageByChainId(chainId, MARKET_SELECTION_KEY, value);
    };
  }
});
var positionAtom = (0,es/* atom */.cn)({
  key: 'Position',
  "default": []
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(74704);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/krasulya-lightweight-charts/dist/lightweight-charts.esm.production.js + 1 modules
var lightweight_charts_esm_production = __webpack_require__(33290);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 3 modules
var menu = __webpack_require__(17158);
// EXTERNAL MODULE: ./src/assets/depx_select_icon.svg
var depx_select_icon = __webpack_require__(92583);
;// CONCATENATED MODULE: ./src/assets/more.svg
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

const SvgMore = (props) => /* @__PURE__ */ react.createElement("svg", __spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("g", { filter: "url(#more_svg__b)", clipPath: "url(#more_svg__a)" }, /* @__PURE__ */ react.createElement("path", { d: "m16.8 9-4.837 7.2L7.2 9h9.6Z", fill: "#fff" })), /* @__PURE__ */ react.createElement("defs", null, /* @__PURE__ */ react.createElement("clipPath", { id: "more_svg__a" }, /* @__PURE__ */ react.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })), /* @__PURE__ */ react.createElement("filter", { id: "more_svg__b", x: 3.199, y: 9, width: 17.6, height: 15.2, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ react.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ react.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ react.createElement("feOffset", { dy: 4 }), /* @__PURE__ */ react.createElement("feGaussianBlur", { stdDeviation: 2 }), /* @__PURE__ */ react.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ react.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" }), /* @__PURE__ */ react.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_313_1951" }), /* @__PURE__ */ react.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_313_1951", result: "shape" }))));

/* harmony default export */ var more = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsdGVyPSJ1cmwoI2IpIiBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNi44IDktNC44MzcgNy4yTDcuMiA5aDkuNloiIGZpbGw9IiNmZmYiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48ZmlsdGVyIGlkPSJiIiB4PSIzLjE5OSIgeT0iOSIgd2lkdGg9IjE3LjYiIGhlaWdodD0iMTUuMiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPjxmZU9mZnNldCBkeT0iNCIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18zMTNfMTk1MSIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18zMTNfMTk1MSIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/pages/trade/ui/ChartTokenSelector/chartTokenSelector.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var chartTokenSelector_modulemodules = ({"btn":"btn___r1nTS","targetSelect":"targetSelect___WQeay","menu":"menu___rnv_7","menus":"menus___KY35b","menuItem":"menuItem___wEjP0","activeItem":"activeItem___kB1Rj"});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/pages/trade/ui/ChartTokenSelector/index.tsx








var ChartTokenSelector = function ChartTokenSelector(props) {
  var options = props.options,
    onChange = props.onChange,
    value = props.value;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: chartTokenSelector_modulemodules.menu,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(menu/* Menu */.v, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(menu/* Menu.Button */.v.Button, {
        className: chartTokenSelector_modulemodules.btn,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(depx_select_icon/* ReactComponent */.r, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: chartTokenSelector_modulemodules.targetSelect,
          children: value === null || value === void 0 ? void 0 : value.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgMore, {})]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* Menu.Items */.v.Items, {
        as: "div",
        className: chartTokenSelector_modulemodules.menus,
        children: (options || []).map(function (option, index) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* Menu.Item */.v.Item, {
            children: function children(_ref) {
              var active = _ref.active;
              return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: classnames_default()(chartTokenSelector_modulemodules.menuItem, defineProperty_default()({}, chartTokenSelector_modulemodules.activeItem, active)),
                onClick: function onClick() {
                  onChange(option);
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  style: {
                    marginLeft: 5
                  },
                  children: option.name
                })
              });
            }
          }, index);
        })
      })]
    })
  });
};
/* harmony default export */ var ui_ChartTokenSelector = (ChartTokenSelector);
;// CONCATENATED MODULE: ./src/pages/trade/ui/PeriodTab/periodtab.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var periodtab_modulemodules = ({"tab":"tab___AIepu","periodTab":"periodTab___AU1Sf","tabItem":"tabItem___K48RO","active":"active___yzxjn","statsLabel":"statsLabel___h81vX","statsValue":"statsValue___haDDX"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/PeriodTab/index.tsx





var PeriodTab = function PeriodTab(props) {
  var options = props.options,
    stats = props.stats,
    value = props.value,
    className = props.className,
    onChange = props.onChange;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()(periodtab_modulemodules.tab, className),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: periodtab_modulemodules.periodTab,
      children: options.map(function (i) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          onClick: function onClick() {
            return onChange(i.value);
          },
          className: classnames_default()(periodtab_modulemodules.tabItem, defineProperty_default()({}, periodtab_modulemodules.active, i.value === value)),
          children: i.label
        }, i.value);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()(periodtab_modulemodules.stats, stats === null || stats === void 0 ? void 0 : stats.className),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsLabel,
        children: "O"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsValue,
        children: stats === null || stats === void 0 ? void 0 : stats.O
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsLabel,
        children: "H"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsValue,
        children: stats === null || stats === void 0 ? void 0 : stats.H
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsLabel,
        children: "L"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsValue,
        children: stats === null || stats === void 0 ? void 0 : stats.L
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsLabel,
        children: "C"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: periodtab_modulemodules.statsValue,
        children: stats === null || stats === void 0 ? void 0 : stats.C
      })]
    })]
  });
};
/* harmony default export */ var ui_PeriodTab = (PeriodTab);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(3410);
;// CONCATENATED MODULE: ./src/pages/trade/ui/PriceBox/pricebox.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var pricebox_modulemodules = ({"priceBox":"priceBox___3w9Sl","title":"title___jhIju"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/PriceBox/index.tsx




var PriceBox = function PriceBox(props) {
  var title = props.title,
    children = props.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: pricebox_modulemodules.priceBox,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: pricebox_modulemodules.title,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
        id: title
      })
    }), children]
  });
};
/* harmony default export */ var ui_PriceBox = (PriceBox);
// EXTERNAL MODULE: ./src/services/datasource/api/api.ts + 4 modules
var api = __webpack_require__(4175);
// EXTERNAL MODULE: ./src/lib/bigNumber.ts
var bigNumber = __webpack_require__(61895);
// EXTERNAL MODULE: ./src/lib/chains/index.ts
var chains = __webpack_require__(37432);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 34 modules
var format = __webpack_require__(72167);
;// CONCATENATED MODULE: ./src/lib/dates.ts

function formatDateTime(time) {
  return (0,format/* default */.Z)(time * 1000, 'dd MMM yyyy, h:mm a');
}
// EXTERNAL MODULE: ./src/lib/legacy.ts
var legacy = __webpack_require__(21650);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(36493);
;// CONCATENATED MODULE: ./src/pages/trade/ui/KChart/kchart.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var kchart_modulemodules = ({"main":"main___baTli","chart":"chart___CLGMg","kchart":"kchart___QYDyz","periodTab":"periodTab___cinp7","negative":"negative___R8NaS","positive":"positive___XgCl2","currentPrice":"currentPrice___wEDGk","header":"header___AT8K5","cutOff":"cutOff___sNyqI","price":"price___e2U86","percentage":"percentage___S6CTj"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/KChart/index.tsx

























var timezoneOffset = -new Date().getTimezoneOffset() * 60;
var getSeriesOptions = function getSeriesOptions() {
  return {
    // https://github.com/tradingview/lightweight-charts/blob/master/docs/area-series.md
    lineColor: '#5472cc',
    topColor: 'rgba(49, 69, 131, 0.4)',
    bottomColor: 'rgba(42, 64, 103, 0.0)',
    lineWidth: 2,
    priceLineColor: '#3a3e5e',
    downColor: '#fa3c58',
    wickDownColor: '#fa3c58',
    upColor: '#0ecc83',
    wickUpColor: '#0ecc83',
    borderVisible: false
  };
};
var CHART_PERIODS_OPTIONS = Object.keys(legacy/* CHART_PERIODS */.pQ).map(function (key) {
  return {
    label: key,
    value: key
  };
});
var getChartOptions = function getChartOptions(width, height) {
  return {
    width: width,
    height: height,
    layout: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      textColor: '#ccc',
      fontFamily: 'Relative'
    },
    localization: {
      // https://github.com/tradingview/lightweight-charts/blob/master/docs/customization.md#time-format
      timeFormatter: function timeFormatter(businessDayOrTimestamp) {
        return formatDateTime(businessDayOrTimestamp - timezoneOffset);
      }
    },
    grid: {
      vertLines: {
        visible: true,
        color: 'rgba(35, 38, 59, 1)',
        style: 2
      },
      horzLines: {
        visible: true,
        color: 'rgba(35, 38, 59, 1)',
        style: 2
      }
    },
    // https://github.com/tradingview/lightweight-charts/blob/master/docs/time-scale.md#time-scale
    timeScale: {
      rightOffset: 5,
      borderVisible: false,
      barSpacing: 5,
      timeVisible: true,
      fixLeftEdge: true
    },
    // https://github.com/tradingview/lightweight-charts/blob/master/docs/customization.md#price-axis
    priceScale: {
      borderVisible: false
    },
    crosshair: {
      horzLine: {
        color: '#aaa'
      },
      vertLine: {
        color: '#aaa'
      },
      mode: 0
    }
  };
};

// close : 19003.83
// high: 19138.7600095
// low:18919.63492716
// open:19135.14910522
// time:1664136000

var DEFAULT_PERIOD = '4h';
var KChart_api = (0,api/* getApi */.a)();
var KChart = function KChart(props) {
  var _priceIn24$Change, _priceIn24$Change2, _cn2;
  var indexPrice = props.indexPrice,
    onChangeMarketSelection = props.onChangeMarketSelection,
    markets = props.markets;
  var chartRef = (0,react.useRef)();
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    hoveredCandlestick = _useState2[0],
    setHoveredCandlestick = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    chartInited = _useState4[0],
    setChartInited = _useState4[1];
  var _useState5 = (0,react.useState)(),
    _useState6 = slicedToArray_default()(_useState5, 2),
    currentChart = _useState6[0],
    setCurrentChart = _useState6[1];
  var _useState7 = (0,react.useState)(),
    _useState8 = slicedToArray_default()(_useState7, 2),
    currentSeries = _useState8[0],
    setCurrentSeries = _useState8[1];
  var _useChainId = (0,chains/* useChainId */.x)(),
    chainId = _useChainId.chainId;
  var marketSelection = (0,es/* useRecoilValue */.sJ)(marketSelectionSelector(chainId));
  var _useLocalStorageSeria = useLocalStorageSerializeKey([chainId, 'Chart-period'], DEFAULT_PERIOD),
    _useLocalStorageSeria2 = slicedToArray_default()(_useLocalStorageSeria, 2),
    period = _useLocalStorageSeria2[0],
    setPeriod = _useLocalStorageSeria2[1];
  if (!(period in legacy/* CHART_PERIODS */.pQ)) {
    period = DEFAULT_PERIOD;
  }
  var symbol = (0,utils/* getBianSymbol */["do"])(marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.name);
  var swrKey = marketSelection !== null && marketSelection !== void 0 && marketSelection.name ? ['getChartCandles', chainId, symbol, period] : null;
  var _useSWR = (0,dist/* default */.ZP)(symbol ? [symbol] : null, {
      fetcher: function fetcher() {
        return KChart_api.get24H(symbol);
      }
    }),
    priceIn24 = _useSWR.data;
  var _useSWR2 = (0,dist/* default */.ZP)(swrKey, {
      fetcher: function () {
        var _fetcher = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return KChart_api.getKLines(symbol, period);
              case 3:
                return _context.abrupt("return", _context.sent);
              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", []);
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 6]]);
        }));
        function fetcher() {
          return _fetcher.apply(this, arguments);
        }
        return fetcher;
      }(),
      dedupingInterval: 60000,
      focusThrottleInterval: 60000 * 10
    }),
    priceData = _useSWR2.data,
    updatePriceData = _useSWR2.mutate;
  (0,react.useEffect)(function () {
    var interval = setInterval(function () {
      updatePriceData(undefined, true);
    }, 60 * 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [updatePriceData]);
  var onCrosshairMove = (0,react.useCallback)(function (evt) {
    if (!evt.time) {
      setHoveredCandlestick(null);
      return;
    }
    var _iterator = createForOfIteratorHelper_default()(evt.seriesPrices.values()),
      _step;
    try {
      var _loop = function _loop() {
        var point = _step.value;
        setHoveredCandlestick(function (hoveredCandlestick) {
          if (hoveredCandlestick && hoveredCandlestick.time === evt.time) {
            // rerender optimisations
            return hoveredCandlestick;
          }
          return objectSpread2_default()({
            time: evt.time
          }, point);
        });
        return "break";
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ret = _loop();
        if (_ret === "break") break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, [setHoveredCandlestick]);
  var scaleChart = (0,react.useCallback)(function () {
    if (currentChart && period) {
      var from = Date.now() / 1000 - 7 * 24 * legacy/* CHART_PERIODS */.pQ[period] / 2 + timezoneOffset;
      var to = Date.now() / 1000 + timezoneOffset;
      // @ts-ignore
      currentChart.timeScale().setVisibleRange({
        from: from,
        to: to
      });
    }
  }, [currentChart, period]);
  (0,react.useEffect)(function () {
    var _chartRef$current, _chartRef$current2;
    if (!priceData || !priceData.length || currentChart) {
      return;
    }
    var chart = (0,lightweight_charts_esm_production/* createChart */.C2)(chartRef.current, getChartOptions((_chartRef$current = chartRef.current) === null || _chartRef$current === void 0 ? void 0 : _chartRef$current.offsetWidth, (_chartRef$current2 = chartRef.current) === null || _chartRef$current2 === void 0 ? void 0 : _chartRef$current2.offsetHeight));
    chart.subscribeCrosshairMove(onCrosshairMove);
    var series = chart.addCandlestickSeries(getSeriesOptions());
    setCurrentChart(chart);
    setCurrentSeries(series);
  }, [priceData]);
  (0,react.useEffect)(function () {
    if (!currentChart) {
      return;
    }
    var resizeChart = function resizeChart() {
      if (chartRef.current) {
        currentChart.resize(chartRef.current.offsetWidth, chartRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', resizeChart);
    return function () {
      return window.removeEventListener('resize', resizeChart);
    };
  }, [currentChart]);
  (0,react.useEffect)(function () {
    if (currentSeries && priceData && priceData.length) {
      currentSeries.setData(priceData);
      if (!chartInited) {
        scaleChart();
        setChartInited(true);
      }
    }
  }, [priceData, currentSeries, chartInited, scaleChart]);
  var candleStats = (0,react.useMemo)(function () {
    var _cn;
    if (!priceData) {
      return undefined;
    }
    var candlestick = hoveredCandlestick || priceData[priceData.length - 1];
    if (!candlestick) {
      return undefined;
    }
    var className = classnames_default()((_cn = {}, defineProperty_default()(_cn, kchart_modulemodules.positive, candlestick.open <= candlestick.close), defineProperty_default()(_cn, kchart_modulemodules.negative, candlestick.open > candlestick.close), _cn));
    var toFixedNumbers = 2;
    return {
      className: className,
      O: (0,bigNumber/* toBigNumber */.O)(candlestick.open).toFixed(toFixedNumbers, 1),
      H: (0,bigNumber/* toBigNumber */.O)(candlestick.high).toFixed(toFixedNumbers, 1),
      L: (0,bigNumber/* toBigNumber */.O)(candlestick.low).toFixed(toFixedNumbers, 1),
      C: (0,bigNumber/* toBigNumber */.O)(candlestick.close).toFixed(toFixedNumbers, 1)
    };
  }, [hoveredCandlestick, priceData]);
  var onSelectMarket = function onSelectMarket(market) {
    onChangeMarketSelection(market);
  };
  if (!marketSelection) {
    return null;
  }
  var renderPrice = function renderPrice(num) {
    if (!num) {
      return '';
    }
    if (num.gt(0)) {
      return "+".concat(num.toFixed(2));
    }
    return "".concat(num.toFixed(2));
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: kchart_modulemodules.main,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: kchart_modulemodules.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ui_ChartTokenSelector, {
        options: markets || [],
        value: marketSelection,
        onChange: onSelectMarket,
        chainId: chainId
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: kchart_modulemodules.currentPrice,
        children: ["$", indexPrice]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: kchart_modulemodules.cutOff
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_PriceBox, {
        title: "24h Change",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: classnames_default()(kchart_modulemodules.percentage, (_cn2 = {}, defineProperty_default()(_cn2, kchart_modulemodules.positive, priceIn24 === null || priceIn24 === void 0 ? void 0 : (_priceIn24$Change = priceIn24.Change) === null || _priceIn24$Change === void 0 ? void 0 : _priceIn24$Change.gt(0)), defineProperty_default()(_cn2, kchart_modulemodules.negative, priceIn24 === null || priceIn24 === void 0 ? void 0 : (_priceIn24$Change2 = priceIn24.Change) === null || _priceIn24$Change2 === void 0 ? void 0 : _priceIn24$Change2.lt(0)), _cn2)),
          children: [renderPrice(priceIn24 === null || priceIn24 === void 0 ? void 0 : priceIn24.Change), " ".concat(renderPrice(priceIn24 === null || priceIn24 === void 0 ? void 0 : priceIn24.ChangeRate), "%")]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_PriceBox, {
        title: "24h High",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: kchart_modulemodules.price,
          children: priceIn24 === null || priceIn24 === void 0 ? void 0 : priceIn24.Hige.toFixed(2)
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_PriceBox, {
        title: "24h Low",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: kchart_modulemodules.price,
          children: priceIn24 === null || priceIn24 === void 0 ? void 0 : priceIn24.Low.toFixed(2)
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: kchart_modulemodules.kchart,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ui_PeriodTab, {
        stats: candleStats,
        className: kchart_modulemodules.periodTab,
        value: period,
        onChange: setPeriod,
        options: CHART_PERIODS_OPTIONS
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: kchart_modulemodules.chart,
        ref: chartRef
      })]
    })]
  });
};
/* harmony default export */ var ui_KChart = (KChart);
// EXTERNAL MODULE: ./src/services/trade/chart/market.ts + 2 modules
var market = __webpack_require__(61641);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(56690);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(89728);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(61655);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__(26389);
var createSuper_default = /*#__PURE__*/__webpack_require__.n(createSuper);
;// CONCATENATED MODULE: ./src/abis/MarketReader.json
var MarketReader_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"availableLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"uint256","name":"minSlippage","type":"uint256"},{"internalType":"uint256","name":"maxSlippage","type":"uint256"},{"internalType":"uint256","name":"slippageDigits","type":"uint256"},{"internalType":"uint256","name":"minLev","type":"uint256"},{"internalType":"uint256","name":"maxLev","type":"uint256"},{"internalType":"uint256","name":"minCollateral","type":"uint256"},{"internalType":"uint256","name":"maxTradeAmount","type":"uint256"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketReader.ValidOuts","name":"validOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"tokenDigits","type":"uint256"},{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"liquidationFeeUsd","type":"uint256"},{"internalType":"uint256","name":"spread","type":"uint256"},{"internalType":"address","name":"indexToken","type":"address"},{"internalType":"address","name":"collateralToken","type":"address"},{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"marketAddressesProvider","type":"address"},{"internalType":"address","name":"orderBookLong","type":"address"},{"internalType":"address","name":"orderBookShort","type":"address"},{"internalType":"address","name":"positionBook","type":"address"}],"internalType":"struct IMarketReader.MarketOuts","name":"mktOuts","type":"tuple"},{"components":[{"internalType":"uint256","name":"closeFeeRate","type":"uint256"},{"internalType":"uint256","name":"openFeeRate","type":"uint256"},{"internalType":"uint256","name":"execFee","type":"uint256"},{"internalType":"uint256","name":"liquidateFee","type":"uint256"},{"internalType":"uint256","name":"digits","type":"uint256"}],"internalType":"struct IMarketReader.FeeOuts","name":"feeOuts","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"}],"name":"getPositions","outputs":[{"components":[{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"averagePrice","type":"uint256"},{"internalType":"int256","name":"entryFundingRate","type":"int256"},{"internalType":"uint256","name":"realisedPnl","type":"uint256"},{"internalType":"bool","name":"hasProfit","type":"bool"},{"internalType":"uint256","name":"lastTime","type":"uint256"},{"internalType":"bool","name":"isLong","type":"bool"}],"internalType":"struct IMarketReader.PositionOuts[]","name":"_positions","type":"tuple[]"}],"stateMutability":"view","type":"function"}]}');
// EXTERNAL MODULE: ./src/services/datasource/wallet/contracts/SolidityContract.ts + 7 modules
var SolidityContract = __webpack_require__(76935);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(66115);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);
;// CONCATENATED MODULE: ./src/abis/Market.json
var Market_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isLong","type":"bool"},{"indexed":false,"internalType":"bool","name":"isIncrease","type":"bool"},{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"market","type":"address"}],"name":"DeleteOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isLong","type":"bool"},{"indexed":false,"internalType":"bool","name":"isIncrease","type":"bool"},{"indexed":false,"internalType":"uint256","name":"orderID","type":"uint256"},{"indexed":false,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"uint256","name":"size","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateral","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"triggerPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sl","type":"uint256"}],"name":"UpdateOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sizeDelta","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isLong","type":"bool"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"int256","name":"pnl","type":"int256"},{"indexed":false,"internalType":"uint256","name":"execFee","type":"uint256"},{"indexed":false,"internalType":"int256","name":"fundFee","type":"int256"},{"indexed":false,"internalType":"uint256","name":"tradeFee","type":"uint256"},{"indexed":false,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"address","name":"collateralToken","type":"address"},{"indexed":false,"internalType":"address","name":"indexToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"category","type":"uint256"}],"name":"UpdatePosition","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROLE_FACTORY","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROLE_POS_KEEPER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_isIncrease","type":"bool"},{"internalType":"uint256","name":"_orderID","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool[]","name":"_isIncreaseList","type":"bool[]"},{"internalType":"uint256[]","name":"_orderIDList","type":"uint256[]"},{"internalType":"bool[]","name":"_isLongList","type":"bool[]"}],"name":"cancelOrderList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collateralToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"name":"decreaseCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"uint32","name":"updatedAtBlock","type":"uint32"},{"internalType":"uint8","name":"triggerAbove","type":"uint8"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"priceExtra","type":"uint128"},{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"}],"internalType":"struct Order.Props","name":"","type":"tuple"},{"internalType":"bool","name":"","type":"bool"}],"name":"decreasePositionFromOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isLimit","type":"bool"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"bool","name":"_isKeepLev","type":"bool"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_slippage","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"bool","name":"_isExec","type":"bool"}],"name":"decreaseTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_orderKey","type":"bytes32"},{"internalType":"contract IOrderBook","name":"_orderBook","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"bool","name":"_isIncrease","type":"bool"}],"name":"execOrderKey","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_orderKeyList","type":"bytes32[]"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"bool","name":"_isIncrease","type":"bool"}],"name":"execOrderKeys","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"bool","name":"_isIncrease","type":"bool"}],"name":"execOrders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeRouter","outputs":[{"internalType":"contract IFeeRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_collateralDelta","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"increaseCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"uint32","name":"updatedAtBlock","type":"uint32"},{"internalType":"uint8","name":"triggerAbove","type":"uint8"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"collateral","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"},{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint128","name":"priceExtra","type":"uint128"},{"internalType":"uint256","name":"orderID","type":"uint256"},{"internalType":"uint256","name":"extra0","type":"uint256"},{"internalType":"uint256","name":"extra1","type":"uint256"}],"internalType":"struct Order.Props","name":"order","type":"tuple"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"increasePositionFromOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isLimit","type":"bool"},{"internalType":"uint256","name":"_payDelta","type":"uint256"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_tpPrice","type":"uint256"},{"internalType":"uint256","name":"_slPrice","type":"uint256"},{"internalType":"uint256","name":"_slippage","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"bool","name":"_isExec","type":"bool"}],"name":"increaseTrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"indexToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_positionBook","type":"address"},{"internalType":"contract IOrderBook","name":"_orderBookLong","type":"address"},{"internalType":"contract IOrderBook","name":"_orderBookShort","type":"address"},{"internalType":"address","name":"_addressProvider","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_feeRouter","type":"address"},{"internalType":"address","name":"_feeVault","type":"address"},{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"liquidatePosition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"keys","type":"bytes32[]"},{"internalType":"bool","name":"isLong","type":"bool"}],"name":"liquidatePositionByKey","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketAddressesProvider","outputs":[{"internalType":"contract IMarketAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderBookLong","outputs":[{"internalType":"contract IOrderBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"orderBookShort","outputs":[{"internalType":"contract IOrderBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"contract IPositionBook","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_p","type":"bool"}],"name":"setOpenDebug","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_spread","type":"uint256"}],"name":"setSpread","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"spread","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderID","type":"uint256"},{"internalType":"uint256","name":"_triggerPrice","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"updateDecreaseOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_orderID","type":"uint256"},{"internalType":"uint256","name":"_triggerPrice","type":"uint256"},{"internalType":"uint256","name":"_tpPrice","type":"uint256"},{"internalType":"uint256","name":"_slPrice","type":"uint256"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"updateIncreaseOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}');
// EXTERNAL MODULE: ./src/lib/numbers.ts
var numbers = __webpack_require__(24069);
// EXTERNAL MODULE: ./src/services/datasource/wallet/contracts/ERC20.ts + 1 modules
var ERC20 = __webpack_require__(25122);
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/trade/Market.ts













//市场类型 用地址从合约获取

var FEERATEDEFAULTDECIMALS = 8;
var PRICEDEFAULTDECIMALS = 30;
var DEFAULTFEERATE = '0.003';
var PERCENTDECIMALS = 2;
var Market = /*#__PURE__*/function (_SolidityContract) {
  inherits_default()(Market, _SolidityContract);
  var _super = createSuper_default()(Market);
  function Market(library, chainId, address, args, valid, fee) {
    var _this;
    classCallCheck_default()(this, Market);
    _this = _super.call(this, library, chainId, Market_namespaceObject.Mt, address);
    defineProperty_default()(assertThisInitialized_default()(_this), "_args", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "_valid", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "_fee", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "_ctoken", void 0);
    _this._args = args;
    _this._valid = valid;
    _this._fee = fee;
    _this._ctoken = new ERC20/* ERC20 */.a(_this._library, chainId, args.collateralToken, undefined);
    return _this;
  }
  createClass_default()(Market, [{
    key: "getClassName",
    value: function getClassName() {
      return 'Market';
    }
  }, {
    key: "getCollateralToken",
    value: function getCollateralToken() {
      return this._ctoken;
    }
  }, {
    key: "getOpenFeeRate",
    value: function getOpenFeeRate() {
      var _this$formatFeeOrRate;
      return (_this$formatFeeOrRate = this.formatFeeOrRate(this._fee.openFeeRate)) !== null && _this$formatFeeOrRate !== void 0 ? _this$formatFeeOrRate : DEFAULTFEERATE;
    }
  }, {
    key: "getCloseFeeRate",
    value: function getCloseFeeRate() {
      var _this$formatFeeOrRate2;
      return (_this$formatFeeOrRate2 = this.formatFeeOrRate(this._fee.closeFeeRate)) !== null && _this$formatFeeOrRate2 !== void 0 ? _this$formatFeeOrRate2 : DEFAULTFEERATE;
    }
  }, {
    key: "getExecFee",
    value: function getExecFee() {
      return this.formatFeeOrRate(this._fee.executionFee);
    }
  }, {
    key: "getSlippageDecimals",
    value: function getSlippageDecimals(slippage) {
      var decimals = 4;
      if (!this._valid.slippageDigits.isZero()) decimals = this._valid.slippageDigits.toNumber();
      return (0,numbers/* parseValue */.H2)(slippage, decimals);
    }
  }, {
    key: "getFeeDecimals",
    value: function getFeeDecimals(fee) {
      return (0,numbers/* parseValue */.H2)(fee, FEERATEDEFAULTDECIMALS);
    }
  }, {
    key: "getNumDecimals",
    value: function getNumDecimals(n) {
      var decimals = 18;
      if (!this._args.tokenDigits.isZero()) decimals = this._args.tokenDigits.toNumber();
      return (0,numbers/* parseValue */.H2)(n, decimals);
    }
  }, {
    key: "getPriceDecimals",
    value: function getPriceDecimals(n) {
      return (0,numbers/* parseValue */.H2)(n, PRICEDEFAULTDECIMALS);
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(n) {
      return (0,numbers/* formatAmount */.dN)(n, PRICEDEFAULTDECIMALS);
    }
  }, {
    key: "formatNum",
    value: function formatNum(n) {
      return (0,numbers/* formatAmount */.dN)(n, this._args.tokenDigits.toNumber());
    }
  }, {
    key: "formatFeeOrRate",
    value: function formatFeeOrRate(n) {
      return (0,numbers/* formatAmount */.dN)(n, FEERATEDEFAULTDECIMALS);
    }
    // 0.3% => 0.03
  }, {
    key: "formatPercentage",
    value: function formatPercentage(n) {
      return (0,numbers/* parseValue */.H2)(n, PERCENTDECIMALS);
    }
  }, {
    key: "allowance",
    value: function () {
      var _allowance = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(account) {
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getCollateralToken().allowance(account, this._address);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function allowance(_x) {
        return _allowance.apply(this, arguments);
      }
      return allowance;
    }()
  }, {
    key: "approve",
    value: function () {
      var _approve = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(account, amount) {
        var asset, allow, mulNum;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              asset = new ERC20/* ERC20 */.a(this._library, this._chainId, this._args.collateralToken, undefined);
              _context2.next = 3;
              return asset.allowance(account, this._address);
            case 3:
              allow = _context2.sent;
              if (!allow.lt(amount)) {
                _context2.next = 9;
                break;
              }
              mulNum = (0,numbers/* bigNumberify */._b)(1000);
              _context2.next = 8;
              return asset.approve(this._address, amount.mul(mulNum));
            case 8:
              return _context2.abrupt("return", _context2.sent);
            case 9:
              return _context2.abrupt("return", true);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function approve(_x2, _x3) {
        return _approve.apply(this, arguments);
      }
      return approve;
    }()
  }, {
    key: "increaseTrade",
    value: function () {
      var _increaseTrade = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(args) {
        var app, key;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.approve(args.account, args.sizeDelta);
            case 2:
              app = _context3.sent;
              if (!app) {
                _context3.next = 8;
                break;
              }
              _context3.next = 6;
              return this.send('increaseTrade', args.isLimit, args.payDelta, args.sizeDelta, args.price, args.tpPrice, args.slPrice, args.slippage, args.isLong, false);
            case 6:
              key = _context3.sent;
              return _context3.abrupt("return", key);
            case 8:
              return _context3.abrupt("return", Promise.resolve(''));
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function increaseTrade(_x4) {
        return _increaseTrade.apply(this, arguments);
      }
      return increaseTrade;
    }()
  }, {
    key: "decreaseTrade",
    value: function () {
      var _decreaseTrade = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(args) {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.send('decreaseTrade', args.isLimit, args.sizeDelta, args.isKeepLev, args.price, args.slippage, args.isLong, false);
            case 2:
              key = _context4.sent;
              return _context4.abrupt("return", key);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function decreaseTrade(_x5) {
        return _decreaseTrade.apply(this, arguments);
      }
      return decreaseTrade;
    }()
  }, {
    key: "increaseCollateral",
    value: function () {
      var _increaseCollateral = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(collateralDelta, isLong) {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.send('increaseCollateral', collateralDelta, isLong);
            case 2:
              key = _context5.sent;
              return _context5.abrupt("return", key);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function increaseCollateral(_x6, _x7) {
        return _increaseCollateral.apply(this, arguments);
      }
      return increaseCollateral;
    }()
  }, {
    key: "decreaseCollateral",
    value: function () {
      var _decreaseCollateral = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6(collateralDelta, isLong) {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.send('increaseCollateral', (0,numbers/* bigNumberify */._b)(collateralDelta), isLong);
            case 2:
              key = _context6.sent;
              return _context6.abrupt("return", key);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function decreaseCollateral(_x8, _x9) {
        return _decreaseCollateral.apply(this, arguments);
      }
      return decreaseCollateral;
    }()
  }, {
    key: "updateIncreaseOrder",
    value: function () {
      var _updateIncreaseOrder = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7(orderID, triggerPrice, tpPrice, slPrice, isLong) {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.send('updateIncreaseOrder', orderID, triggerPrice, tpPrice, slPrice, isLong);
            case 2:
              key = _context7.sent;
              return _context7.abrupt("return", key);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function updateIncreaseOrder(_x10, _x11, _x12, _x13, _x14) {
        return _updateIncreaseOrder.apply(this, arguments);
      }
      return updateIncreaseOrder;
    }()
  }, {
    key: "updateDecreaseOrder",
    value: function () {
      var _updateDecreaseOrder = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(orderID, triggerPrice, isLong) {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.send('updateDecreaseOrder', orderID, triggerPrice, isLong);
            case 2:
              key = _context8.sent;
              return _context8.abrupt("return", key);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function updateDecreaseOrder(_x15, _x16, _x17) {
        return _updateDecreaseOrder.apply(this, arguments);
      }
      return updateDecreaseOrder;
    }()
  }, {
    key: "cancelOrder",
    value: function () {
      var _cancelOrder = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee9(isIncrease, orderID, isLong) {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.send('cancelOrder', isIncrease, orderID, isLong);
            case 2:
              key = _context9.sent;
              return _context9.abrupt("return", key);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function cancelOrder(_x18, _x19, _x20) {
        return _cancelOrder.apply(this, arguments);
      }
      return cancelOrder;
    }()
  }, {
    key: "cancelOrderList",
    value: function () {
      var _cancelOrderList = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee10() {
        var key;
        return regeneratorRuntime_default()().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.send('cancelOrderList');
            case 2:
              key = _context10.sent;
              return _context10.abrupt("return", key);
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function cancelOrderList() {
        return _cancelOrderList.apply(this, arguments);
      }
      return cancelOrderList;
    }()
  }]);
  return Market;
}(SolidityContract/* SolidityContract */.k);
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/trade/MarketReader.ts










//仓位类型合约返回

var MarketReader = /*#__PURE__*/function (_SolidityContract) {
  inherits_default()(MarketReader, _SolidityContract);
  var _super = createSuper_default()(MarketReader);
  function MarketReader(library, chainId) {
    classCallCheck_default()(this, MarketReader);
    return _super.call(this, library, chainId, MarketReader_namespaceObject.Mt);
  }
  createClass_default()(MarketReader, [{
    key: "getClassName",
    value: function getClassName() {
      return 'MarketReader';
    }
  }, {
    key: "getMarket",
    value: function () {
      var _getMarket = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(address) {
        var res, market;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.call('getMarket', address);
            case 2:
              res = _context.sent;
              market = new Market(this._library, this._chainId, address, res.mktOuts, res.validOuts, res.feeOuts);
              return _context.abrupt("return", market);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getMarket(_x) {
        return _getMarket.apply(this, arguments);
      }
      return getMarket;
    }()
  }, {
    key: "getFundingRate",
    value: function () {
      var _getFundingRate = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(market) {
        var result;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.call('getFundingRate', market);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", result);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getFundingRate(_x2) {
        return _getFundingRate.apply(this, arguments);
      }
      return getFundingRate;
    }()
  }, {
    key: "getFundingFee",
    value: function () {
      var _getFundingFee = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(account, market, isLong) {
        var result;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.call('getFundingFee', account, market, isLong);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", result);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getFundingFee(_x3, _x4, _x5) {
        return _getFundingFee.apply(this, arguments);
      }
      return getFundingFee;
    }()
  }, {
    key: "getPositions",
    value: function () {
      var _getPositions = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(account, market) {
        var result;
        return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.call('getPositions', account, market);
            case 2:
              result = _context4.sent;
              result.forEach(function (row) {
                row.realisedPnl.mul(row.hasProfit ? 1 : -1);
              });
              return _context4.abrupt("return", result);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getPositions(_x6, _x7) {
        return _getPositions.apply(this, arguments);
      }
      return getPositions;
    }()
  }, {
    key: "availableLiquidity",
    value: function () {
      var _availableLiquidity = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(account, market) {
        var result;
        return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.call('availableLiquidity', market, account);
            case 2:
              result = _context5.sent;
              return _context5.abrupt("return", result);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function availableLiquidity(_x8, _x9) {
        return _availableLiquidity.apply(this, arguments);
      }
      return availableLiquidity;
    }()
  }]);
  return MarketReader;
}(SolidityContract/* SolidityContract */.k);
;// CONCATENATED MODULE: ./src/services/datasource/thegraph/order.ts



var getOrders = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(account, marketName) {
    var URL, query, result;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // todo 适配网络
          // debugger
          URL = 'https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji';
          query = "query myQuery {\n    orders(where: {account: \"".concat(account === null || account === void 0 ? void 0 : account.toLowerCase(), "\", marketName:\"").concat(marketName, "\", isDeleted: false}){\n      id\n                tp\n                sl\n                market\n                timestamp\n                collateral\n                triggerPrice\n                timestamp\n                isLong\n                isIncrease\n                orderId\n                size\n              }\n            }\n      ");
          _context.next = 4;
          return (0,utils/* fetchGql */.Dw)(URL, query);
        case 4:
          result = _context.sent;
          return _context.abrupt("return", (result === null || result === void 0 ? void 0 : result.orders) || []);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getOrders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(70794);
;// CONCATENATED MODULE: ./src/lib/ui.ts
/**页面格式化等 */


// 01/04 17:18
var formatTime = function formatTime(timestamp) {
  var isValidate = function isValidate(d) {
    return d instanceof Date && !isNaN(+d);
  };
  if (!timestamp) return '';
  var date = new Date(timestamp * 1000);
  if (!isValidate(date)) return '';
  var mm = (date === null || date === void 0 ? void 0 : date.getMonth()) > 9 ? date === null || date === void 0 ? void 0 : date.getMonth() : '0' + (date === null || date === void 0 ? void 0 : date.getMonth());
  var dd = (date === null || date === void 0 ? void 0 : date.getDay()) > 9 ? date === null || date === void 0 ? void 0 : date.getDay() : '0' + (date === null || date === void 0 ? void 0 : date.getDay());
  var hh = (date === null || date === void 0 ? void 0 : date.getHours()) > 9 ? date === null || date === void 0 ? void 0 : date.getHours() : '0' + (date === null || date === void 0 ? void 0 : date.getHours());
  var ms = (date === null || date === void 0 ? void 0 : date.getMinutes()) > 9 ? date === null || date === void 0 ? void 0 : date.getMinutes() : '0' + (date === null || date === void 0 ? void 0 : date.getMinutes());
  return mm + '/' + dd + ' ' + hh + ':' + ms;
};

// 用于页面两位小数+单位的展示
var formatUIPrice = function formatUIPrice() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var prex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var append = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '-';
  if (isNaN(+data) || !isFinite(+data)) return defaultValue;
  if (isNaN(+data)) return defaultValue;
  return prex + new bignumber/* BigNumber */.O(data).toFixed(decimals, 1) + append;
};
;// CONCATENATED MODULE: ./src/services/trade/orders/orders.ts






var getOrderRows = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(args, indexPrice) {
    var result, rows;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(args.accountAddress == '' || args.accountAddress == undefined)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", []);
        case 2:
          _context.next = 4;
          return getOrders(args.accountAddress, args === null || args === void 0 ? void 0 : args.marketName);
        case 4:
          result = _context.sent;
          // let result = await getOrders(undefined, args?.marketName)
          // console.log('orders', result)
          rows = [];
          result.forEach(function (res) {
            // console.log(res)
            var row = convertRow(res, args, indexPrice);
            rows.push(row);
            // console.log(row)
          });
          return _context.abrupt("return", rows);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getOrderRows(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function convertRow(row, args, indexPrice) {
  var _args$market, _args$market$formatNu, _args$market2, _args$market3, _args$market4, _args$market$formatNu2, _args$market5;
  var type = row !== null && row !== void 0 && row.isIncrease ? 'Limit' : 'Trigger';
  var isOpen = row !== null && row !== void 0 && row.isIncrease ? 'Open' : 'Close';
  var feeRate = args.openFeeRate;
  var sp = {
    pair: args === null || args === void 0 ? void 0 : args.marketName,
    orderID: row['orderId'],
    type: type,
    side: row !== null && row !== void 0 && row.isLong ? isOpen + ' Long' : isOpen + ' Short',
    collateral: args === null || args === void 0 ? void 0 : (_args$market = args.market) === null || _args$market === void 0 ? void 0 : (_args$market$formatNu = _args$market.formatNum(row['collateral'])) === null || _args$market$formatNu === void 0 ? void 0 : _args$market$formatNu.toString(),
    triggerPrice: args === null || args === void 0 ? void 0 : (_args$market2 = args.market) === null || _args$market2 === void 0 ? void 0 : _args$market2.formatPrice(row['triggerPrice']),
    tp: args === null || args === void 0 ? void 0 : (_args$market3 = args.market) === null || _args$market3 === void 0 ? void 0 : _args$market3.formatPrice(row['tp']),
    sl: args === null || args === void 0 ? void 0 : (_args$market4 = args.market) === null || _args$market4 === void 0 ? void 0 : _args$market4.formatPrice(row['sl']),
    time: formatTime(row['timestamp']),
    // 挪到页面处理
    isIncrease: row === null || row === void 0 ? void 0 : row.isIncrease,
    isLong: row === null || row === void 0 ? void 0 : row.isLong,
    size: (_args$market$formatNu2 = args === null || args === void 0 ? void 0 : (_args$market5 = args.market) === null || _args$market5 === void 0 ? void 0 : _args$market5.formatNum(row === null || row === void 0 ? void 0 : row.size)) !== null && _args$market$formatNu2 !== void 0 ? _args$market$formatNu2 : '0'
  };
  sp.liqPrice = getLidPrice(sp, indexPrice, feeRate);
  return sp;
}
function getLidPrice(row, indexPrice, feeRate) {
  var _SwapShow$getNextLiqP;
  var isLong = row.isLong,
    collateral = row.collateral,
    size = row.size;
  var positionFee = (0,bigNumber/* toBigNumber */.O)(size).multipliedBy(feeRate);
  return (_SwapShow$getNextLiqP = swap_SwapShow.getNextLiqPrice({
    size: (0,bigNumber/* toBigNumber */.O)(size),
    // size 为0  mock
    collateral: (0,bigNumber/* toBigNumber */.O)(collateral),
    isLong: isLong,
    fundFee: (0,bigNumber/* toBigNumber */.O)(0),
    positionFee: (0,bigNumber/* toBigNumber */.O)(positionFee),
    entryPrice: (0,bigNumber/* toBigNumber */.O)(indexPrice) // todo
  })) === null || _SwapShow$getNextLiqP === void 0 ? void 0 : _SwapShow$getNextLiqP.toFixed(2);
}
;// CONCATENATED MODULE: ./src/services/trade/positions/positions.ts






var getPositionRows = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(args, indexPrice) {
    var rows, feeRate, fundFeeRate, executionFee, items, i, fundFee;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('---getPositionRows-----', args);
          if (!(args.accountAddress == undefined || args.accountAddress == '')) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", []);
        case 3:
          _context.next = 5;
          return args.reader.getPositions(args.accountAddress, args.market._address);
        case 5:
          rows = _context.sent;
          if (rows == undefined || rows.length == 0) {
            rows = testPositionRows();
          }
          feeRate = args.openFeeRate;
          fundFeeRate = args.fundFeeRate; // const executionFee = args.executionFee
          executionFee = '5.00'; // todo 合约现在返回的是 ‘--’
          // console.log('----rows---', rows)
          items = [];
          rows = rows.filter(function (row) {
            return +row.size > 0;
          });
          for (i = 0; i < rows.length; i++) {
            // const fundFee = await SwapShow.getNextFundFee(args, rows[i]?.isLong)
            fundFee = '3.32'; // mock合约返回值较大
            // Size * (Sum Fund Fee Rate-entryFundingRate)
            // const
            // console.log('---fundFee----', fundFee, executionFee, feeRate, fundFeeRate)
            items.push(positions_convertRow(args, objectSpread2_default()(objectSpread2_default()({}, rows[i]), {}, {
              fundFee: fundFee
            }), args.accountAddress, indexPrice, feeRate, fundFeeRate, executionFee));
          }
          return _context.abrupt("return", items);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getPositionRows(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var changeIndexPrice = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args, indexPrice, rows) {
    var feeRate, fundFeeRate;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          feeRate = args.openFeeRate;
          _context2.next = 3;
          return SwapShow.getFundFeeRete(args);
        case 3:
          fundFeeRate = _context2.sent;
          rows.forEach(function (r) {
            r.indexPrice = indexPrice;
            getPnl(args, r, feeRate, fundFeeRate);
          });
          return _context2.abrupt("return", rows);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function changeIndexPrice(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}()));
function positions_convertRow(args, row, account, indexPrice, feeRate, fundFeeRate, executionFee) {
  var market = args.market;
  try {
    var sp = {
      account: account,
      isLong: row.isLong,
      size: market.formatNum(row.size),
      collateral: '0',
      averagePrice: market.formatPrice(row.averagePrice),
      fundFee: (row === null || row === void 0 ? void 0 : row.fundFee) || '0',
      realisedPnl: market.formatNum(row.realisedPnl),
      hasProfit: row.hasProfit,
      lastTime: row.lastTime,
      pair: args.marketName,
      side: row.isLong ? 'Long' : 'Short',
      leverage: '',
      netValue: '0',
      PNL: '0',
      PNLRate: '0',
      indexPrice: indexPrice,
      liqPrice: '0',
      initialCollateral: market.formatNum(row.collateral),
      fundFeeDay: '0',
      openCloseFees: '0',
      PNLAfterFees: '0',
      feeRate: feeRate,
      //todo 优化冗余数据
      executionFee: executionFee //todo 优化冗余数据
    };
    // prettier-ignore
    sp.collateral = (0,bigNumber/* toBigNumber */.O)(sp.initialCollateral).minus(sp.fundFee).toString();
    // // prettier-ignore
    sp.leverage = sp.collateral === '0' ? '0' : (0,bigNumber/* toBigNumber */.O)(sp.size).dividedBy(sp.collateral).toString();
    // // todo: validate
    sp.liqPrice = positions_getLidPrice(sp, feeRate);
    getPnl(args, sp, feeRate, fundFeeRate);
    // if (+row?.size > 0) {
    //   console.log('----sp pnl----', sp.PNL)
    // }
    return sp;
  } catch (error) {
    console.log('convertRow', error);
  }
  return {};
}
function positions_getLidPrice(row, feeRate) {
  var _SwapShow$getNextLiqP;
  if (+(row === null || row === void 0 ? void 0 : row.collateral) < 65) console.log('======getLidPrice', row, feeRate);
  var fundFee = row.fundFee,
    isLong = row.isLong,
    collateral = row.collateral,
    size = row.size;
  var positionFee = (0,bigNumber/* toBigNumber */.O)(size).multipliedBy(feeRate);
  row.positionFee = positionFee.toString();
  return (_SwapShow$getNextLiqP = swap_SwapShow.getNextLiqPrice({
    size: (0,bigNumber/* toBigNumber */.O)(size),
    // size 为0  mock
    collateral: (0,bigNumber/* toBigNumber */.O)(collateral),
    isLong: isLong,
    fundFee: (0,bigNumber/* toBigNumber */.O)(fundFee),
    positionFee: (0,bigNumber/* toBigNumber */.O)(positionFee),
    entryPrice: (0,bigNumber/* toBigNumber */.O)(row === null || row === void 0 ? void 0 : row.averagePrice)
  })) === null || _SwapShow$getNextLiqP === void 0 ? void 0 : _SwapShow$getNextLiqP.toFixed(2, 1);
}
function getPnl(args, row, feeRate, fundFeeRate) {
  var nCollateral = (0,bigNumber/* toBigNumber */.O)(row.collateral);
  var nIndexPrice = (0,bigNumber/* toBigNumber */.O)(row.indexPrice);
  var nAveragePrice = (0,bigNumber/* toBigNumber */.O)(row.averagePrice);
  var nSize = (0,bigNumber/* toBigNumber */.O)(row.size);
  // console.log('----getPnl---', row)
  var PNL = (0,bigNumber/* toBigNumber */.O)(row.isLong ? 1 : -1).multipliedBy(nIndexPrice.minus(nAveragePrice)).multipliedBy(nSize).dividedBy(nAveragePrice);
  var netValue = nCollateral.plus(PNL);
  row.PNLRate = PNL.div(nCollateral).toString();
  row.netValue = netValue.toString();
  row.PNL = PNL.toString();
  getFee(row, feeRate, fundFeeRate, netValue);
  return PNL.toString();
}
function getFee(row, feeRate, fundFeeRate, netValue) {
  var nSize = (0,bigNumber/* toBigNumber */.O)(row.size);
  var nFeeRate = (0,bigNumber/* toBigNumber */.O)(feeRate);
  var openCloseFees = nSize.multipliedBy(nFeeRate).multipliedBy(2);
  row.fundFeeDay = nSize.multipliedBy(fundFeeRate).multipliedBy(24).toString();
  row.PNLAfterFees = netValue.minus(nFeeRate).minus(openCloseFees).toString();
  row.openCloseFees = openCloseFees.toString();
}
function testPositionRows() {
  return [{
    isLong: true,
    // 是否是多头
    size: (0,numbers/* bigNumberify */._b)(3000.52),
    // 头寸
    collateral: (0,numbers/* bigNumberify */._b)(1500),
    // 保证金
    averagePrice: (0,numbers/* bigNumberify */._b)(130.32),
    // 平均持仓价格
    fundingFee: (0,numbers/* bigNumberify */._b)(12.3),
    // 入场的时候的资金费率(带符号)xcvcxz
    realisedPnl: (0,numbers/* bigNumberify */._b)(482.43),
    // 已实现盈亏(无符号)
    hasProfit: true,
    // 是否有利润(布尔值)
    lastTime: '2023-02-20',
    // 上次修改时间
    fundFee: (0,numbers/* bigNumberify */._b)(23)
  }, {
    isLong: false,
    // 是否是多头
    size: (0,numbers/* bigNumberify */._b)(3000.52),
    // 头寸
    // size: 3000.52,
    collateral: (0,numbers/* bigNumberify */._b)(1500),
    // 保证金
    averagePrice: (0,numbers/* bigNumberify */._b)(130.32),
    // 平均持仓价格
    fundingFee: (0,numbers/* bigNumberify */._b)(-12.3),
    // 入场的时候的资金费率(带符号)
    realisedPnl: (0,numbers/* bigNumberify */._b)(482.43),
    // 已实现盈亏(无符号)
    hasProfit: false,
    // 是否有利润(布尔值)
    lastTime: '2023-02-20',
    // 上次修改时间
    fundFee: (0,numbers/* bigNumberify */._b)(23)
  }];
}
;// CONCATENATED MODULE: ./src/services/datasource/thegraph/trade.ts



var getTrades = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var account,
      marketName,
      URL,
      where,
      query,
      result,
      _args = arguments;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          account = _args.length > 0 && _args[0] !== undefined ? _args[0] : undefined;
          marketName = _args.length > 1 && _args[1] !== undefined ? _args[1] : undefined;
          // todo 适配网络
          URL = 'https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji';
          where = account != undefined ? 'account:"' + (account === null || account === void 0 ? void 0 : account.toLowerCase()) + '"' : '';
          query = "query MyQuery {\n    positions(where: {".concat(where, "}) {\n      collateralDelta\n      collateralToken\n      execFee\n      from\n      fundFee\n      hash\n      indexToken\n      isLong\n      market\n      marketName\n      pnl\n      price\n      sizeDelta\n      timestamp\n      to\n      tradeFee\n    }\n  }");
          _context.next = 7;
          return (0,utils/* fetchGql */.Dw)(URL, query);
        case 7:
          result = _context.sent;
          return _context.abrupt("return", (result === null || result === void 0 ? void 0 : result.positions) || []);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTrades() {
    return _ref.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/services/trade/trades/trades.ts





var getTradeRows = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(args, maketName) {
    var result, feeRate, fundFeeRate, rows;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(args.accountAddress == '' || args.accountAddress == undefined)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", []);
        case 2:
          _context.next = 4;
          return getTrades(args.accountAddress, maketName);
        case 4:
          result = _context.sent;
          // if (result == undefined || result.length == 0) {
          //   return testTradeRows()
          // }
          // console.log('----trades', result)
          feeRate = args.openFeeRate;
          _context.next = 8;
          return swap_SwapShow.getFundFeeRete(args);
        case 8:
          fundFeeRate = _context.sent;
          // console.log('rows', feeRate, fundFeeRate)
          rows = [];
          result.forEach(function (res) {
            rows.push(trades_convertRow(res, args, feeRate, fundFeeRate));
          });
          // console.log('rows', rows)
          return _context.abrupt("return", rows);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTradeRows(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function trades_convertRow(row, args, feeRate, fundFeeRate) {
  var market = args.market;
  var type = row !== null && row !== void 0 && row.isIncrease ? 'Limit' : 'Trigger';
  var isOpen = row !== null && row !== void 0 && row.isIncrease ? 'Open' : 'Close';
  var sp = objectSpread2_default()(objectSpread2_default()({}, row), {}, {
    type: type,
    // missing field
    side: row !== null && row !== void 0 && row.isLong ? isOpen + ' Long' : isOpen + ' Short',
    size: market.formatNum(row['sizeDelta']),
    collateral: market.formatNum(row['collateralDelta']),
    price: market.formatPrice(row['price']),
    PNL: row['pnl'] // todo
    // status: row['status'], // missing
  });

  sp.PNLRate = +sp.collateral !== 0 ? sp.PNL / sp.collateral : '0';
  return sp;
}
function testTradeRows() {
  return [{
    pair: 'ETHUSD',
    type: 'limit',
    side: 'open Long',
    size: '32331.33',
    collateral: '100',
    price: '1453.34',
    PNL: '1553.2',
    PNLpct: '0.34',
    time: '1676539080',
    status: 'executed'
  }, {
    pair: 'ETHUSD',
    type: 'trigger',
    side: 'close Short',
    size: '555.33',
    collateral: '34.78',
    price: '1753.34',
    PNL: '-433.7',
    PNLpct: '-0.92',
    time: '1676539080',
    status: 'executed'
  }];
}
;// CONCATENATED MODULE: ./src/services/trade/swap/swap.ts








var DEFAULT_MAX_LEVERAGE = 30;
var getDefaultSwap = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(indexPrice, setPendingTxns, chainId, marketAddress, marketName, library, account) {
    var reader, m, result;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // console.log('getDefaultSwap', marketAddress)
          reader = new MarketReader(library, chainId); // console.log('getDefaultSwap reader', reader)
          _context.next = 3;
          return reader.getMarket(marketAddress);
        case 3:
          m = _context.sent;
          m.setChainId(chainId);
          m.setPendingTxns(setPendingTxns);
          result = objectSpread2_default()(objectSpread2_default()({}, _initSwapArgs()), {}, {
            accountAddress: account,
            reader: reader,
            market: m,
            library: library,
            marketName: marketName
          });
          _context.next = 9;
          return getPositionRows(result, indexPrice);
        case 9:
          result.Positions = _context.sent;
          _context.next = 12;
          return getOrderRows(result, indexPrice);
        case 12:
          result.Orders = _context.sent;
          _context.next = 15;
          return getTradeRows(result, indexPrice);
        case 15:
          result.Trades = _context.sent;
          _context.next = 18;
          return _initMarketArgs(result, indexPrice);
        case 18:
          result = _context.sent;
          return _context.abrupt("return", result);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getDefaultSwap(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();
function _initSwapArgs() {
  return {
    accountAddress: '',
    isLimit: false,
    //是否限价
    isLong: true,
    //是否多头
    price: '0',
    //价格
    amount: '0',
    //数量
    size: '0',
    //头寸
    avlb: '0',
    //钱包余额
    pay: '0',
    //支付数量
    leverage: '10',
    //杠杠
    entryPrice: '0',
    //进入价
    liqPrice: '0',
    //清仓价
    positionFee: '0',
    //手续费
    executionFee: '0',
    //执行费
    fundFeeRate: '0',
    //资金费率
    availableLiquidity: '0',
    //可用流动性
    // takeProfit: '0', //止盈价
    // stopLoss: '0', //止损价
    slippage: '0.3',
    //滑点
    openFeeRate: '0',
    closeFeeRate: '0',
    Positions: [],
    Orders: [],
    Trades: []
  };
}
function _initMarketArgs(_x8, _x9) {
  return _initMarketArgs2.apply(this, arguments);
}
function _initMarketArgs2() {
  _initMarketArgs2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(result, indexPrice) {
    var amount;
    return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          result.entryPrice = indexPrice;
          // console.log('_initMarketArgs', result)
          if (!result.market) {
            _context5.next = 19;
            break;
          }
          _context5.prev = 2;
          result.openFeeRate = result.market.getOpenFeeRate();
          result.closeFeeRate = result.market.getCloseFeeRate();
          result.executionFee = result.market.getExecFee();
          _context5.next = 8;
          return swap_SwapShow.getFundFeeRete(result);
        case 8:
          result.fundFeeRate = _context5.sent;
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](2);
          console.log('getDefaultSwap', _context5.t0);
        case 14:
          if (!result.accountAddress) {
            _context5.next = 19;
            break;
          }
          _context5.next = 17;
          return result.market.getCollateralToken().balanceOf(result.accountAddress);
        case 17:
          amount = _context5.sent;
          result.avlb = result.market.formatNum(amount);
        case 19:
          return _context5.abrupt("return", result);
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 11]]);
  }));
  return _initMarketArgs2.apply(this, arguments);
}
var swap_SwapShow = {
  getEstimatedPNL: function getEstimatedPNL(params) {
    var isLong = params.isLong,
      entryPrice = params.entryPrice,
      price = params.price,
      size = params.size;
    var pos = isLong ? 1 : -1;
    // Positions * (Take Profit Price - Entry Price) * Size / Entry Price
    return (0,bigNumber/* toBigNumber */.O)(pos).multipliedBy(price.minus(entryPrice)).multipliedBy(size).dividedBy(entryPrice);
  },
  getEntryPriceDisplay: function getEntryPriceDisplay(entryPrice, nextSize, existingPosition) {
    var existingPositionPrice = (0,bigNumber/* toBigNumber */.O)((existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.averagePrice) || 0);
    // Long Next Entry Price = (Price * Next Size) / (Next Size + PNL)
    // Short Next Entry Price = (Price * Next Size) / (Next Size - PNL)
    var mergePositionPrice = entryPrice;
    if (existingPosition) {
      mergePositionPrice = entryPrice.multipliedBy(nextSize).dividedBy(nextSize.plus((0,bigNumber/* toBigNumber */.O)((existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.PNL) || 0)));
    }
    return {
      rise: mergePositionPrice.minus(existingPositionPrice).toNumber(),
      mergePositionPrice: mergePositionPrice,
      existingPositionPrice: existingPositionPrice
    };
  },
  getNextFeeRate: function getNextFeeRate(openFeeRate, leverage) {
    var v1 = (0,bigNumber/* toBigNumber */.O)(1).dividedBy(leverage);
    return v1.plus(openFeeRate);
  },
  getExecFee: function getExecFee(executionFee) {
    // return toBigNumber(result.market._fee.executionFee);
    return (0,bigNumber/* toBigNumber */.O)(executionFee);
  },
  getNextFundFee: function getNextFundFee(args, isLong) {
    return asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var _args$reader, _args$market;
      var res;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return args === null || args === void 0 ? void 0 : (_args$reader = args.reader) === null || _args$reader === void 0 ? void 0 : _args$reader.getFundingFee(args === null || args === void 0 ? void 0 : args.accountAddress, args === null || args === void 0 ? void 0 : (_args$market = args.market) === null || _args$market === void 0 ? void 0 : _args$market._address, isLong);
          case 2:
            res = _context2.sent;
            return _context2.abrupt("return", args.market.formatNum(res));
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  //获取当前市场资金费率
  getFundFeeRete: function getFundFeeRete(args) {
    return asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var retes;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return args.reader.getFundingRate(args.market._address);
          case 2:
            retes = _context3.sent;
            return _context3.abrupt("return", args.market.formatFeeOrRate(retes === null || retes === void 0 ? void 0 : retes[0]));
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  //获取市场总累计资金费率
  getTotalFundFeeRete: function getTotalFundFeeRete(args) {
    return asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var retes;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return args.reader.getFundingRate(args.market._address);
          case 2:
            retes = _context4.sent;
            return _context4.abrupt("return", args.market.formatFeeOrRate(retes === null || retes === void 0 ? void 0 : retes[1]));
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  getConfirmStat: function getConfirmStat(params) {
    var entryPrice = params.entryPrice,
      fundFeeRete = params.fundFeeRete,
      pay = params.pay,
      positionFeeRate = params.positionFeeRate,
      executionFee = params.executionFee,
      size = params.size,
      leverageOption = params.leverageOption,
      existingPosition = params.existingPosition,
      hasExistingPosition = params.hasExistingPosition;
    return {
      getCollateralDisplay: function getCollateralDisplay() {
        // Collateral = Pay - Size * Position Fee Rate -Execution Fee；
        var currentTradeCollateral = pay.minus(size.multipliedBy((0,bigNumber/* toBigNumber */.O)(positionFeeRate))).minus(executionFee);
        var mergePositionPrice = currentTradeCollateral;
        if (hasExistingPosition && existingPosition) {
          // Collateral - FundFee + Pay - Size * Position Fee Rate - Execution Fee；
          mergePositionPrice = currentTradeCollateral.minus((0,bigNumber/* toBigNumber */.O)(existingPosition.fundingFee || 0)).plus(pay).minus(size.multipliedBy((0,bigNumber/* toBigNumber */.O)(positionFeeRate || 1))).minus(executionFee);
        }
        // if (!pendingPositionPrice || isNaN(pendingPositionPrice)) {
        //   debugger
        // }
        return {
          rise: mergePositionPrice.minus(currentTradeCollateral).toNumber(),
          mergePositionPrice: mergePositionPrice,
          existingPositionPrice: (0,bigNumber/* toBigNumber */.O)(existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.collateral)
        };
      },
      getLigPriceDisplay: function getLigPriceDisplay(maxLeverage, isLong, nextPositionFee) {
        console.log('existingPosition?.liqPrice ', existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.liqPrice);
        var existingPositionPrice = (0,bigNumber/* toBigNumber */.O)((existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.liqPrice) || '0');
        var nextLiqPrice = swap_SwapShow.getNextLiqPrice({
          size: size,
          collateral: this.getCollateralDisplay().mergePositionPrice,
          isLong: isLong,
          fundFee: fundFeeRete || (0,bigNumber/* toBigNumber */.O)(0),
          positionFee: nextPositionFee,
          entryPrice: entryPrice,
          maxLeverage: maxLeverage
        });
        return {
          rise: nextLiqPrice.minus(existingPositionPrice).toNumber(),
          existingPositionPrice: existingPositionPrice,
          mergePositionPrice: nextLiqPrice
        };
      },
      getLeverageDisplay: function getLeverageDisplay() {
        var toLeverageOption = (0,bigNumber/* toBigNumber */.O)(leverageOption);
        if (!hasExistingPosition) {
          return {
            rise: 0,
            existingPositionPrice: toLeverageOption,
            mergePositionPrice: toLeverageOption
          };
        }
        var collateral = this.getCollateralDisplay();
        var positionSize = this.getPositionSizeDisplay();
        // Position Size/ Collateral
        var mergePositionPrice = positionSize.mergePositionPrice.dividedBy(collateral.mergePositionPrice);
        return {
          rise: mergePositionPrice.minus(toLeverageOption).toNumber(),
          existingPositionPrice: (0,bigNumber/* toBigNumber */.O)((existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.leverage) || '0'),
          mergePositionPrice: mergePositionPrice
        };
      },
      getPositionSizeDisplay: function getPositionSizeDisplay() {
        var toPositionSize = (0,bigNumber/* toBigNumber */.O)(hasExistingPosition ? (existingPosition === null || existingPosition === void 0 ? void 0 : existingPosition.size) || 0 : 0);
        var mergePositionPrice = size.plus(toPositionSize);
        var existingPositionPrice = existingPosition ? toPositionSize : mergePositionPrice;
        var positionSizeDisplay = {
          existingPositionPrice: existingPositionPrice,
          mergePositionPrice: mergePositionPrice,
          rise: mergePositionPrice.minus(existingPositionPrice).toNumber()
        };
        return positionSizeDisplay;
      }
    };
  },
  getNextLiqPrice: function getNextLiqPrice(params) {
    var _maxLeverage;
    // Long Liq. Price = (Size - Collateral - Deposit + Fund Fee + Postion Fee + Execution Fee + Size / Max leverage) / Size * Entry Price
    // Short Liq. Price = (Size + Collatera + Deposit - Fund Fee - Postion Fee - Execution Fee - Size / Max leverage) / Size * Entry Price
    // Size / Maxleverage < 清算费时，Size / Maxleverage = 清算费
    // prettier-ignore
    var size = params.size,
      entryPrice = params.entryPrice,
      isLong = params.isLong,
      positionFee = params.positionFee,
      maxLeverage = params.maxLeverage,
      collateral = params.collateral,
      fundFee = params.fundFee,
      amount = params.amount;
    if (size.eq(0)) {
      return (0,bigNumber/* toBigNumber */.O)(0);
    }
    if (maxLeverage == undefined) {
      maxLeverage = (0,bigNumber/* toBigNumber */.O)(100);
    }
    if (amount == undefined) {
      amount = (0,bigNumber/* toBigNumber */.O)(0);
    }
    var cleanFee = (0,bigNumber/* toBigNumber */.O)(5);
    // todo: 改成合约 MarketReader liquidationFeeUsd 清算费

    // (Size -Collateral  + PositionFee + Execution Fee + Size / Max leverage)  / Size * Entry Price
    // console.log(' getNextLiqPrice size', size.toNumber())
    // console.log(' getNextLiqPrice entryPrice', entryPrice.toNumber())
    // console.log(' getNextLiqPrice positionFee', positionFee.toNumber())
    // console.log(' getNextLiqPrice maxLeverage', maxLeverage?.toNumber())
    // console.log(' getNextLiqPrice fundFee', fundFee.toNumber())
    // console.log(' getNextLiqPrice collateral', collateral.toNumber())
    // console.log(' getNextLiqPrice amount', amount)

    var sl = size.dividedBy((_maxLeverage = maxLeverage) !== null && _maxLeverage !== void 0 ? _maxLeverage : DEFAULT_MAX_LEVERAGE);
    // prettier-ignore
    // 产品文档更新，不考虑执行费 2023-02-15 去除执行费参与计算 .plus(executionFee) .minus(executionFee)

    if (cleanFee.gt(sl)) {
      // (size - collateral + positionFee + 5)/size * entryprice
      sl = cleanFee;
    }
    var v1_long = size.minus(collateral).plus(fundFee).plus(positionFee).plus(sl);
    // prettier-ignore
    var v1_short = size.plus(collateral).minus(fundFee).minus(positionFee).minus(sl);
    if (amount != undefined) {
      v1_long = v1_long.minus(amount);
      v1_short = v1_short.plus(amount);
    }
    var liqPrice = isLong ? v1_long.dividedBy(size).multipliedBy(entryPrice) : v1_short.dividedBy(size).multipliedBy(entryPrice);
    return liqPrice;
  },
  getNextPay: function getNextPay(amount, price, openFeeRate, leverage) {
    var toAmount = (0,bigNumber/* toBigNumber */.O)(amount);
    return toAmount.multipliedBy(swap_SwapShow.getNextFeeRate(openFeeRate, leverage)).multipliedBy((0,bigNumber/* toBigNumber */.O)(price));
  },
  getNextAmount: function getNextAmount(pay, price, openFeeRate, leverage) {
    if (pay.gt(0)) {
      return pay.dividedBy(swap_SwapShow.getNextFeeRate(openFeeRate, leverage)).dividedBy(price);
    }
    return (0,bigNumber/* toBigNumber */.O)(0);
  },
  getNextSize: function getNextSize(pay, openFeeRate, leverage) {
    if (pay.gt(0)) {
      return (0,bigNumber/* toBigNumber */.O)(pay).dividedBy(swap_SwapShow.getNextFeeRate(openFeeRate, leverage));
    }
    return (0,bigNumber/* toBigNumber */.O)(0);
  },
  getNextPositionFee: function getNextPositionFee(size, openFeeRate) {
    return size.multipliedBy(openFeeRate);
  }
};
// EXTERNAL MODULE: ./src/components/App/state.ts
var state = __webpack_require__(74595);
;// CONCATENATED MODULE: ./src/pages/trade/trade.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var trade_modulemodules = ({"trade":"trade____bxq4"});
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/tabs/tabs.js + 1 modules
var tabs = __webpack_require__(49808);
// EXTERNAL MODULE: ./node_modules/rc-table/es/index.js + 45 modules
var rc_table_es = __webpack_require__(28797);
;// CONCATENATED MODULE: ./src/pages/trade/ui/MarketTrades/market.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var market_modulemodules = ({"card":"card___tsQVf","header":"header___oEyWA","title":"title___CbLbp","right":"right___eKe78","switch":"switch___oG_5Z","table":"table___aXY5t","pnl":"pnl___CoW8t","pnlNegative":"pnlNegative___K9Zzk","side":"side___p341I","colorGrn":"colorGrn___kLWyZ","colorRed":"colorRed___i8TYm"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/MarketTrades/index.tsx








var MarkTrades = function MarkTrades(props) {
  var trades = props.trades,
    infoTokens = props.infoTokens;
  //console.log('MarkTrades', trades)
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var columns = [{
    title: 'Pair',
    width: 150,
    key: 'marketName',
    dataIndex: 'marketName'
  }, {
    title: 'Side',
    render: function render(record) {
      var _cn;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classnames_default()((_cn = {}, defineProperty_default()(_cn, market_modulemodules.colorGrn, record === null || record === void 0 ? void 0 : record.isLong), defineProperty_default()(_cn, market_modulemodules.colorRed, !(record !== null && record !== void 0 && record.isLong)), _cn)),
        children: record === null || record === void 0 ? void 0 : record.side
      });
    }
  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
    // render: (type: string) => {
    //   return type === INCREASE ? 'Limit' : 'Trigger'
    // },
  }, {
    title: 'Size',
    dataIndex: 'size',
    render: function render(size) {
      return formatUIPrice(size, undefined, '$');
    }
  }, {
    title: 'Collateral',
    dataIndex: 'collateral',
    render: function render(value) {
      return formatUIPrice(value, undefined, '$');
    }
  }, {
    title: 'Price',
    dataIndex: 'price',
    render: function render(value) {
      return formatUIPrice(value, undefined, '$');
    }
  }, {
    title: 'PNL',
    render: function render(record) {
      return (record === null || record === void 0 ? void 0 : record.PNL) > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: market_modulemodules.pnl,
        children: "".concat(record === null || record === void 0 ? void 0 : record.PNL, "(").concat(record === null || record === void 0 ? void 0 : record.PNLRate, "%)")
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: market_modulemodules.pnlNegative,
        children: "".concat(record === null || record === void 0 ? void 0 : record.PNL, "(").concat(record === null || record === void 0 ? void 0 : record.PNLRate, "%)")
      });
    }
  }, {
    title: 'Time',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: function render(timestamp) {
      return formatTime(timestamp) || '';
    }
  }, {
    title: 'Status',
    dataIndex: 'status',
    key: 'Status',
    render: function render(value) {
      return 'Executed';
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: market_modulemodules.card,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(rc_table_es/* default */.ZP, {
      className: market_modulemodules.table,
      data: trades,
      columns: columns
    })
  });
};
/* harmony default export */ var MarketTrades = (MarkTrades);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/switch/switch.js + 3 modules
var switch_switch = __webpack_require__(335);
;// CONCATENATED MODULE: ./src/components/Switch/switch.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var switch_modulemodules = ({"switch":"switch___V_gYU","rounded":"rounded___Q_7Ny","switchEnabled":"switchEnabled___Ca9FC"});
;// CONCATENATED MODULE: ./src/components/Switch/index.tsx





var Switch = function Switch(props) {
  var checked = props.checked,
    className = props.className,
    onChange = props.onChange;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(switch_switch/* Switch */.r, {
    checked: checked,
    className: classnames_default()(switch_modulemodules["switch"], defineProperty_default()({}, switch_modulemodules.switchEnabled, checked), className),
    onChange: onChange,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: switch_modulemodules.rounded
    })
  });
};
/* harmony default export */ var components_Switch = (Switch);
;// CONCATENATED MODULE: ./src/services/trade/orders/cancel.ts
var cancelOrder = function cancelOrder(args, isIncrease, orderID, isLong) {
  console.log('orderid', orderID);
  return args.market.cancelOrder(isIncrease, Number(orderID), isLong);
};
var cancelAll = function cancelAll(args) {
  return args.market.cancelOrderList();
};
;// CONCATENATED MODULE: ./src/pages/trade/ui/OrdersTable/index.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_modulemodules = ({"card":"card___fdBku","header":"header___mYjMg","title":"title___DaWZ7","right":"right___VLVON","switch":"switch___JvgPx","table":"table___fNLlk","pnl":"pnl___pZIIu","side":"side___qR1Jt","editCancel":"editCancel___JKw0Q","edit":"edit___DUhY3","submitBtn":"submitBtn___pc5K5","fields":"fields___FDpLc","field":"field___bbKYP","label":"label___CTyu8","value":"value___madrW","old":"old___XZbZw","new":"new___sFZEB","colorGrn":"colorGrn___FQhdW","colorRed":"colorRed___WPYKL"});
;// CONCATENATED MODULE: ./src/services/trade/orders/edit.ts


var showOrder = function showOrder(params) {
  var args = params.args,
    indexPrice = params.indexPrice,
    size = params.size,
    row = params.row;
  var feeRate = args.openFeeRate;
  var nextLiqPrice = getLidPrice(objectSpread2_default()(objectSpread2_default()({}, row), {}, {
    size: size
  }), indexPrice, feeRate);
  return {
    nextLiqPrice: nextLiqPrice
  };
};
var editOrder = function editOrder(args, orderID, triggerPrice, isIncrese, isLong, tpPrice, spPrice) {
  // console.log(
  //   '-----editOrder-----',
  //   args,
  //   orderID,
  //   triggerPrice,
  //   isIncrese,
  //   isLong,
  //   tpPrice,
  //   spPrice,
  // )
  // row?.isIncrease ? 'Limit' : 'Trigger'
  // edit limit order === 开仓
  // edit trigger order === close position
  var market = args.market;
  if (isIncrese) {
    // updateIncreaseOrder edit limit order
    return args.market.updateIncreaseOrder(+orderID, market.getPriceDecimals(triggerPrice), market.getPriceDecimals(tpPrice), market.getPriceDecimals(spPrice), isLong);
  } else {
    // updateDecreaseOrder edit trigger order
    return args.market.updateDecreaseOrder(+orderID, market.getPriceDecimals(triggerPrice), isLong);
  }
};
// EXTERNAL MODULE: ./src/components/Modal/index.tsx + 2 modules
var Modal = __webpack_require__(69499);
// EXTERNAL MODULE: ./src/pages/trade/ui/PriceInput/index.tsx + 1 modules
var PriceInput = __webpack_require__(26977);
;// CONCATENATED MODULE: ./src/assets/down_arrow.svg
var down_arrow_defProp = Object.defineProperty;
var down_arrow_getOwnPropSymbols = Object.getOwnPropertySymbols;
var down_arrow_hasOwnProp = Object.prototype.hasOwnProperty;
var down_arrow_propIsEnum = Object.prototype.propertyIsEnumerable;
var down_arrow_defNormalProp = (obj, key, value) => key in obj ? down_arrow_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var down_arrow_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (down_arrow_hasOwnProp.call(b, prop))
      down_arrow_defNormalProp(a, prop, b[prop]);
  if (down_arrow_getOwnPropSymbols)
    for (var prop of down_arrow_getOwnPropSymbols(b)) {
      if (down_arrow_propIsEnum.call(b, prop))
        down_arrow_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgDownArrow = (props) => /* @__PURE__ */ react.createElement("svg", down_arrow_spreadValues({ width: 16, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "m3 6 5 5 5-5", stroke: "#9597B5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }));

/* harmony default export */ var down_arrow = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMgNiA1IDUgNS01IiBzdHJva2U9IiM5NTk3QjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/question.svg
var question_defProp = Object.defineProperty;
var question_getOwnPropSymbols = Object.getOwnPropertySymbols;
var question_hasOwnProp = Object.prototype.hasOwnProperty;
var question_propIsEnum = Object.prototype.propertyIsEnumerable;
var question_defNormalProp = (obj, key, value) => key in obj ? question_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var question_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (question_hasOwnProp.call(b, prop))
      question_defNormalProp(a, prop, b[prop]);
  if (question_getOwnPropSymbols)
    for (var prop of question_getOwnPropSymbols(b)) {
      if (question_propIsEnum.call(b, prop))
        question_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgQuestion = (props) => /* @__PURE__ */ react.createElement("svg", question_spreadValues({ width: 16, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.7-9V4.6H7.3V6h1.4Zm0 6V7.467H7.3V12h1.4Z", fill: "#797B96" }));

/* harmony default export */ var question = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE1QTcgNyAwIDEgMCA4IDFhNyA3IDAgMCAwIDAgMTRabS43LTlWNC42SDcuM1Y2aDEuNFptMCA2VjcuNDY3SDcuM1YxMmgxLjRaIiBmaWxsPSIjNzk3Qjk2Ii8+PC9zdmc+");

// EXTERNAL MODULE: ./node_modules/rc-tooltip/es/index.js + 3 modules
var rc_tooltip_es = __webpack_require__(92419);
;// CONCATENATED MODULE: ./src/components/Tooltip/tooltip.scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Tooltip/index.tsx




var Tooltip = function Tooltip(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rc_tooltip_es/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
    getTooltipContainer: function getTooltipContainer() {
      return document.getElementById('root');
    }
  }));
};
/* harmony default export */ var components_Tooltip = (Tooltip);
;// CONCATENATED MODULE: ./src/pages/trade/ui/Advanced/advanced.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var advanced_modulemodules = ({"advanced":"advanced___MBdTe","header":"header___ifyUh","collectIcon":"collectIcon___x8hbZ","collectedIcon":"collectedIcon___dhQWJ","item":"item___oTlSJ","input":"input___wbzXJ","flex":"flex___RaHI3","label":"label___E6FRI","questionIcon":"questionIcon___bN9mo","overlay":"overlay___eaqfY","dropdown":"dropdown___itkxP","var":"var___pOK0z","panel":"panel____HyG6","openPanel":"openPanel___unKQ2"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/Advanced/index.tsx












// todo 1.算tip pnl 2.+% 3.回调
var Advanced = function Advanced(props) {
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    collect = _useState2[0],
    setCollect = _useState2[1];
  var ifSlippage = props.ifSlippage,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    stopLossPNL = props.stopLossPNL,
    _onChange = props.onChange,
    ifStopLoss = props.ifStopLoss,
    ifTakeProfit = props.ifTakeProfit,
    ifAll = props.ifAll,
    tkpPNL = props.tkpPNL;
  var tkpTip = (0,react.useMemo)(function () {
    return "\n    When Index Price reaches ".concat(value.takeProfit || '--', " USD, it will trigger Take Profit, and the estimated PNL will be ").concat(tkpPNL || '--', " USD.");
  }, [value.takeProfit, tkpPNL]);
  var stopLossTip = (0,react.useMemo)(function () {
    return "When Index Price reaches ".concat(value.stopLoss || '--', " USD, it will trigger Stop Loss, and the estimated PNL will be ").concat(stopLossPNL || '--', " USD.");
  }, [value.stopLoss, stopLossPNL]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: advanced_modulemodules.advanced,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: advanced_modulemodules.header,
      onClick: function onClick() {
        setCollect(function (v) {
          return !v;
        });
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: advanced_modulemodules.title,
        children: "Advanced"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgDownArrow, {
        className: classnames_default()(advanced_modulemodules.collectIcon, defineProperty_default()({}, advanced_modulemodules.collectedIcon, collect))
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()(advanced_modulemodules.panel, defineProperty_default()({}, advanced_modulemodules.openPanel, collect)),
      children: [(ifStopLoss || ifAll) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: advanced_modulemodules.item,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* default */.ZP, {
          value: value.stopLoss,
          onChange: function onChange(stopLoss) {
            _onChange(objectSpread2_default()(objectSpread2_default()({}, value), {}, {
              stopLoss: stopLoss
            }));
          },
          label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: advanced_modulemodules.flex,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: advanced_modulemodules.label,
              children: "Stop Loss"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Tooltip, {
              placement: "top",
              overlay: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: advanced_modulemodules.overlay,
                children: stopLossTip
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgQuestion, {
                className: advanced_modulemodules.questionIcon
              })
            })]
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: advanced_modulemodules["var"],
            children: "USD"
          })
        })
      }), (ifTakeProfit || ifAll) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: advanced_modulemodules.item,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* default */.ZP, {
          value: value.takeProfit,
          onChange: function onChange(takeProfit) {
            _onChange(objectSpread2_default()(objectSpread2_default()({}, value), {}, {
              takeProfit: takeProfit
            }));
          },
          label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: advanced_modulemodules.flex,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: advanced_modulemodules.label,
              children: "Take Profit"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Tooltip, {
              placement: "top",
              overlay: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: advanced_modulemodules.overlay,
                children: tkpTip
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgQuestion, {
                className: advanced_modulemodules.questionIcon
              })
            })]
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: advanced_modulemodules["var"],
            children: "USD"
          })
        })
      }), (ifSlippage || ifAll) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: advanced_modulemodules.item,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* default */.ZP, {
          value: value.slippage,
          decimals: 2,
          onChange: function onChange(slippage) {
            _onChange(objectSpread2_default()(objectSpread2_default()({}, value), {}, {
              slippage: slippage
            }));
          },
          label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: advanced_modulemodules.flex,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: advanced_modulemodules.label,
              children: "Slippage"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Tooltip, {
              placement: "top",
              overlay: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: advanced_modulemodules.overlay,
                children: ["Note that a low allowed slippage, e.g. less than 0.5%, may result in failed orders if prices are volatile.", ' ']
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgQuestion, {
                className: advanced_modulemodules.questionIcon
              })
            })]
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: advanced_modulemodules["var"],
            children: "%"
          })
        })
      })]
    })]
  });
};
/* harmony default export */ var ui_Advanced = (Advanced);
;// CONCATENATED MODULE: ./src/assets/arrow_16_base.svg
var arrow_16_base_defProp = Object.defineProperty;
var arrow_16_base_getOwnPropSymbols = Object.getOwnPropertySymbols;
var arrow_16_base_hasOwnProp = Object.prototype.hasOwnProperty;
var arrow_16_base_propIsEnum = Object.prototype.propertyIsEnumerable;
var arrow_16_base_defNormalProp = (obj, key, value) => key in obj ? arrow_16_base_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var arrow_16_base_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (arrow_16_base_hasOwnProp.call(b, prop))
      arrow_16_base_defNormalProp(a, prop, b[prop]);
  if (arrow_16_base_getOwnPropSymbols)
    for (var prop of arrow_16_base_getOwnPropSymbols(b)) {
      if (arrow_16_base_propIsEnum.call(b, prop))
        arrow_16_base_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrow16Base = (props) => /* @__PURE__ */ react.createElement("svg", arrow_16_base_spreadValues({ width: 16, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M7.652 12h2.319L13.5 8 9.97 4H7.653l2.795 3.234H2.5v1.532h7.947L7.652 12Z" }));

/* harmony default export */ var arrow_16_base = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNjUyIDEyaDIuMzE5TDEzLjUgOCA5Ljk3IDRINy42NTNsMi43OTUgMy4yMzRIMi41djEuNTMyaDcuOTQ3TDcuNjUyIDEyWiIvPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/pages/trade/ui/Common/nextLabelValue.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var nextLabelValue_modulemodules = ({"field":"field___AEG_L","title":"title___ih8QY","label":"label___JBZb5","value":"value___dSa5M","arrowRed":"arrowRed___HnTAV","arrowGrn":"arrowGrn___ttBc1"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/Common/nextLabelValue.tsx








var nextLabelValue = function nextLabelValue(label, nowValue, nextValue, prefix, append) {
  var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var _params$ntAppend = params.ntAppend,
    ntAppend = _params$ntAppend === void 0 ? append : _params$ntAppend,
    _params$ntPrefix = params.ntPrefix,
    ntPrefix = _params$ntPrefix === void 0 ? prefix : _params$ntPrefix;
  var getArrowType = function getArrowType(value, nextValue) {
    var _ref;
    return _ref = {}, defineProperty_default()(_ref, nextLabelValue_modulemodules.arrowGrn, +value < +nextValue), defineProperty_default()(_ref, nextLabelValue_modulemodules.arrowRed, +value > +nextValue), _ref;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: nextLabelValue_modulemodules.field,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: nextLabelValue_modulemodules.label,
        children: label
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: nextLabelValue_modulemodules.value,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: nextLabelValue_modulemodules.value,
          children: !Number.isNaN(nowValue) && isFinite(+nowValue) && "".concat(prefix || '').concat(formatUIPrice(nowValue)).concat(append || '') || '--'
        }), nextValue && !Number.isNaN(nextValue) && isFinite(+nextValue) && +(+nextValue - +nowValue).toFixed(2) != 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: nextLabelValue_modulemodules.value,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: classnames_default()(getArrowType(nowValue, nextValue)),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgArrow16Base, {})
          }), params === null || params === void 0 ? void 0 : params.defaultValue, !(params !== null && params !== void 0 && params.defaultValue) && "".concat(ntPrefix || '').concat(formatUIPrice(nextValue, 2, '', '', '')).concat(ntAppend || '')]
        }) || '']
      })]
    })
  });
};
/* harmony default export */ var Common_nextLabelValue = (nextLabelValue);
// EXTERNAL MODULE: ./node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(88305);
;// CONCATENATED MODULE: ./src/pages/trade/ui/Orders/context.ts



var OrderContext = (0,unstated_next/* createContainer */.f)(function () {
  var _useState = (0,react.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    positions = _useState2[0],
    setPositions = _useState2[1];
  return {
    positions: positions,
    setPositions: setPositions
  };
});
;// CONCATENATED MODULE: ./src/pages/trade/ui/OrdersTable/orderEditor.tsx













var OrderEditor = function OrderEditor(props) {
  var isVisible = props.isVisible,
    setIsVisible = props.setIsVisible,
    row = props.row,
    args = props.args,
    indexPrice = props.indexPrice,
    successCb = props.successCb;
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    price = _useState2[0],
    setPrice = _useState2[1]; // price if isLimit
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    active = _useWeb3React.active,
    account = _useWeb3React.account; // 默认chainid需要确认下
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react.useState)(row === null || row === void 0 ? void 0 : row.triggerPrice),
    _useState6 = slicedToArray_default()(_useState5, 2),
    orderPrice = _useState6[0],
    setOrderPrice = _useState6[1];
  var _useState7 = (0,react.useState)('0'),
    _useState8 = slicedToArray_default()(_useState7, 2),
    stopLoss = _useState8[0],
    setStopLoss = _useState8[1];
  var _useState9 = (0,react.useState)('0'),
    _useState10 = slicedToArray_default()(_useState9, 2),
    takeProfit = _useState10[0],
    setTakeProfit = _useState10[1];
  var _OrderContext$useCont = OrderContext.useContainer(),
    positions = _OrderContext$useCont.positions,
    setPositions = _OrderContext$useCont.setPositions;
  function getPrimaryText(loading) {
    var append = 'ing ';
    var text = 'Update';
    // if (!price && index) return 'Update'
    // if (!sizeDelta) return 'Enter an amount'
    if (loading) text += append;
    text += ' Order';
    return text;
  }
  var onchange = function onchange(value) {
    (value === null || value === void 0 ? void 0 : value.stopLoss) && setStopLoss(value === null || value === void 0 ? void 0 : value.stopLoss);
    (value === null || value === void 0 ? void 0 : value.takeProfit) && setTakeProfit(value === null || value === void 0 ? void 0 : value.takeProfit);
  };
  var _useMemo = (0,react.useMemo)(function () {
      var nextOrderPrice = price;
      var _showOrder = showOrder({
          args: args,
          row: row,
          indexPrice: indexPrice,
          size: price
        }),
        nextLiqPrice = _showOrder.nextLiqPrice;
      return {
        nextOrderPrice: nextOrderPrice,
        nextLiqPrice: nextLiqPrice
      };
    }, [price, orderPrice]),
    nextOrderPrice = _useMemo.nextOrderPrice,
    nextLiqPrice = _useMemo.nextLiqPrice;
  {
    /* 如果有positions有 liqPrice，取，没有，算 */
  }
  var getInitLiqPrice = function getInitLiqPrice() {
    var _getLidPrice;
    var pos = positions.find(function (p) {
      return p.isLong === row.isLong;
    });
    if (pos) return pos === null || pos === void 0 ? void 0 : pos.liqPrice;
    var feeRate = args.openFeeRate;
    return (_getLidPrice = getLidPrice(row, indexPrice, feeRate)) === null || _getLidPrice === void 0 ? void 0 : _getLidPrice.toString();
  };
  var initLiqPrice = getInitLiqPrice();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: index_modulemodules.modal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      title: "Edit ".concat(row === null || row === void 0 ? void 0 : row.type, " Order") // caterogty
      ,
      onClose: function onClose() {
        return setIsVisible(false);
      },
      visible: isVisible,
      width: 512,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PriceInput */.tV, {
        value: price,
        onChange: setPrice
      }), (row === null || row === void 0 ? void 0 : row.isIncrease) && /*#__PURE__*/(0,jsx_runtime.jsx)(ui_Advanced, {
        value: {},
        ifStopLoss: true,
        ifTakeProfit: true,
        onChange: onchange
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: index_modulemodules.fields,
        children: [Common_nextLabelValue('Order Price', orderPrice, price, +orderPrice < +indexPrice ? '<$' : '>$', '', {
          ntPrefix: +nextOrderPrice < +indexPrice ? '<$' : '>$'
        }), Common_nextLabelValue('Index Price', indexPrice, '', '$'), row.isIncrease && Common_nextLabelValue('Liq Price', initLiqPrice, nextLiqPrice, '$')]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: index_modulemodules.submitBtn,
        disabled: loading,
        onClick: function onClick() {
          if (!active || !account) {
            return;
          }
          setLoading(true);
          editOrder(args, row === null || row === void 0 ? void 0 : row.orderID, price, row === null || row === void 0 ? void 0 : row.isIncrease, row.isLong, takeProfit, stopLoss).then(function (res) {
            successCb();
            setIsVisible(false);
          })["catch"](function (err) {
            return console.log('confirm', err);
          })["finally"](function () {
            setLoading(false);
          });
        },
        children: getPrimaryText(loading)
      })]
    })
  });
};
/* harmony default export */ var orderEditor = (OrderEditor);
;// CONCATENATED MODULE: ./src/pages/trade/ui/OrdersTable/index.tsx












var Orders = function Orders(props) {
  var orders = props.orders,
    indexPrice = props.indexPrice,
    tradeShowArgs = props.tradeShowArgs,
    successCb = props.successCb;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1]; // switch
  var _useState3 = (0,react.useState)({}),
    _useState4 = slicedToArray_default()(_useState3, 2),
    row = _useState4[0],
    setRow = _useState4[1];
  var handleEdit = function handleEdit(row) {
    setRow(row);
    setIsVisible(true);
  };
  var handleCancel = function handleCancel(row) {
    // console.log('handleCancel', row.isIncrease, row.orderID, row.isLong)
    cancelOrder(tradeShowArgs, row.isIncrease, row === null || row === void 0 ? void 0 : row.orderID, row === null || row === void 0 ? void 0 : row.isLong).then(function (res) {
      // console.log('handleCancel return', res)
      setIsVisible(false);
    })["catch"](function (err) {
      return console.log('handleCancel err', err);
    })["finally"](function () {
      // setLoading(false)
    });
  };
  var columns = [{
    title: 'Pair',
    dataIndex: 'pair',
    width: 150,
    render: function render(pair) {
      return pair ? pair : '-';
    }
  }, {
    title: 'Side',
    // dataIndex: 'side',
    key: 'side',
    render: function render(record) {
      var _cn;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classnames_default()((_cn = {}, defineProperty_default()(_cn, index_modulemodules.colorGrn, (record === null || record === void 0 ? void 0 : record.isLong) == (record === null || record === void 0 ? void 0 : record.isIncrease)), defineProperty_default()(_cn, index_modulemodules.colorRed, (record === null || record === void 0 ? void 0 : record.isLong) !== (record === null || record === void 0 ? void 0 : record.isIncrease)), _cn)),
        children: record === null || record === void 0 ? void 0 : record.side
      });
    }
  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  }, {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: function render(size) {
      return formatUIPrice(size, undefined, '$');
    }
  }, {
    title: 'Collateral',
    dataIndex: 'collateral',
    key: 'collateral',
    render: function render(collateral) {
      return formatUIPrice(collateral, undefined, '$');
    }
  }, {
    title: 'Order Price',
    dataIndex: 'triggerPrice',
    render: function render(triggerPrice) {
      return formatUIPrice(triggerPrice, undefined, '$');
    }
  }, {
    title: 'Index Price',
    render: function render() {
      return formatUIPrice(indexPrice, undefined, '$');
    }
  }, {
    title: 'TP/SL',
    render: function render(record) {
      if (!(record !== null && record !== void 0 && record.tp) && !(record !== null && record !== void 0 && record.sl)) return '--';
      return (!!(record !== null && record !== void 0 && record.tp) && formatUIPrice(record === null || record === void 0 ? void 0 : record.tp, undefined, '$') || '--') + '/' + (!!(record !== null && record !== void 0 && record.sl) && formatUIPrice(record === null || record === void 0 ? void 0 : record.sl, undefined, '$') || '--');
      // return record?.tp
      //   ? formatUIPrice(record?.tp, undefined, '$') + (record?.sl ? '/' + record?.sl : '--')
      //   : '--'
    }
  }, {
    title: 'Time',
    dataIndex: 'time',
    key: 'time'
  }, {
    title: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      onClick: handleCancel,
      children: 'Cancel All'
    }),
    render: function render(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: index_modulemodules.editCancel,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: index_modulemodules.edit,
          onClick: function onClick() {
            return handleEdit(row);
          },
          children: "Edit"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: index_modulemodules.edit,
          onClick: function onClick() {
            return handleCancel(row);
          },
          children: "Cancel"
        })]
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [isVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(orderEditor, {
      indexPrice: indexPrice,
      isVisible: isVisible,
      setIsVisible: setIsVisible,
      args: tradeShowArgs,
      row: row,
      successCb: successCb
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: index_modulemodules.card,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rc_table_es/* default */.ZP, {
        className: index_modulemodules.table,
        data: orders,
        columns: columns
      })
    })]
  });
};
/* harmony default export */ var OrdersTable = (Orders);
// EXTERNAL MODULE: ./node_modules/antd/es/dropdown/index.js + 107 modules
var dropdown = __webpack_require__(62250);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js + 4 modules
var index_esm = __webpack_require__(67373);
;// CONCATENATED MODULE: ./src/assets/more_icon.svg
var more_icon_defProp = Object.defineProperty;
var more_icon_getOwnPropSymbols = Object.getOwnPropertySymbols;
var more_icon_hasOwnProp = Object.prototype.hasOwnProperty;
var more_icon_propIsEnum = Object.prototype.propertyIsEnumerable;
var more_icon_defNormalProp = (obj, key, value) => key in obj ? more_icon_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var more_icon_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (more_icon_hasOwnProp.call(b, prop))
      more_icon_defNormalProp(a, prop, b[prop]);
  if (more_icon_getOwnPropSymbols)
    for (var prop of more_icon_getOwnPropSymbols(b)) {
      if (more_icon_propIsEnum.call(b, prop))
        more_icon_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgMoreIcon = (props) => /* @__PURE__ */ react.createElement("svg", more_icon_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { d: "M11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z", stroke: "#fff" }));

/* harmony default export */ var more_icon = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDZhMSAxIDAgMSAwIDIgMCAxIDEgMCAwIDAtMiAwWk0xMSAxMmExIDEgMCAxIDAgMiAwIDEgMSAwIDAgMC0yIDBaTTExIDE4YTEgMSAwIDEgMCAyIDAgMSAxIDAgMCAwLTIgMFoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTEgNmExIDEgMCAxIDAgMiAwIDEgMSAwIDAgMC0yIDBaTTExIDEyYTEgMSAwIDEgMCAyIDAgMSAxIDAgMCAwLTIgMFpNMTEgMThhMSAxIDAgMSAwIDIgMCAxIDEgMCAwIDAtMiAwWiIgc3Ryb2tlPSIjZmZmIi8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/pages/trade/ui/Orders/orders.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var orders_modulemodules = ({"table":"table___O0oos","orderPanel":"orderPanel___weQ4q","tabList":"tabList___iDvkP","tabItem":"tabItem___UJec7","selected":"selected___lGODG","header":"header___Y18Vk","right":"right___ExK0Y","switch":"switch___yJrUb","card":"card___XRXfM","field":"field___FpNrg","title":"title___yYuon","proportion":"proportion___QGANZ","label":"label___SMjK4","value":"value___uc2J5","btns":"btns___hXniu","btn":"btn___pQpOE","position":"position___w7OYz","pos":"pos___p0qaQ","long":"long___FKFu2","short":"short___HopEm","positive":"positive___ff65M","muted":"muted___r5n5R","loadingIcon":"loadingIcon___pK2VX","spin-animation":"spin-animation___ZnGWk","options":"options___iGkMe","closeBtn":"closeBtn___vbPJq","moreIcon":"moreIcon___LxjYg","dropdown":"dropdown___DFroc","overlay":"overlay___LURQM","colorGrn":"colorGrn___RhXul","colorRed":"colorRed___vivXI","collateral":"collateral___I5qZP","collateralTxt":"collateralTxt___sEChq","underline":"underline___SHqOx"});
;// CONCATENATED MODULE: ./src/services/trade/positions/close.ts






var showClosePosition = function showClosePosition(args, row, indexPrice, sizeDelta, keepLeverage, isLimit, price) {
  var _row$initialCollatera = row.initialCollateral,
    initialCollateral = _row$initialCollatera === void 0 ? '200' : _row$initialCollatera,
    _row$executionFee = row.executionFee,
    executionFee = _row$executionFee === void 0 ? '0.09' : _row$executionFee,
    _row$fundFee = row.fundFee,
    fundFee = _row$fundFee === void 0 ? '10' : _row$fundFee,
    feeRate = row.feeRate,
    _row$size = row.size,
    size = _row$size === void 0 ? '2000' : _row$size;

  // console.log('----executionFee', executionFee)
  var _collateral = new bignumber/* BigNumber */.O(initialCollateral);
  var _sizeDelta = new bignumber/* BigNumber */.O(sizeDelta || 0);
  // console.log('---sizedelta----', sizeDelta, _sizeDelta)
  var _size = new bignumber/* BigNumber */.O(size);
  var _nextSize = _size.minus(_sizeDelta).isGreaterThan(0) ? _size.minus(_sizeDelta) : new bignumber/* BigNumber */.O(0);
  var ifSizePos = _size.minus(_sizeDelta).isGreaterThan(0);
  var ifAll = _size.minus(sizeDelta).toNumber() === 0; // 全部平仓

  var _feeRate = new bignumber/* BigNumber */.O(feeRate);
  var _executionFee = isLimit ? new bignumber/* BigNumber */.O(executionFee) : 0;
  var _fundFee = new bignumber/* BigNumber */.O(fundFee);
  var _sizeDeltaRate = _sizeDelta.dividedBy(_size);
  var fundFeeRate = args === null || args === void 0 ? void 0 : args.fundFeeRate;
  var _positionFee = +sizeDelta > 0 ? _sizeDelta.multipliedBy(_feeRate) :
  // : _size.multipliedBy(_feeRate)
  _size.multipliedBy(_feeRate);

  // Close * Positon Fee Rate + Fund Fee + Execution Fee
  // ExecutionFee：Market为0，Trigger为合约获取配置
  var _fees = _fundFee.plus(_executionFee).plus(_positionFee);
  var _indexPrice = isLimit ? price || '0' : indexPrice;
  // console.log('---positionFee----', sizeDelta, _sizeDelta)

  // depends on sizeDelta and indexPrice(market=indexPrice, trigger=price)
  var _nextPNL = new bignumber/* BigNumber */.O(+getPnl(args, objectSpread2_default()(objectSpread2_default()({}, row), {}, {
    indexPrice: _indexPrice,
    size: _nextSize.toString()
  }), args === null || args === void 0 ? void 0 : args.openFeeRate, fundFeeRate));
  var getReceive = function getReceive() {
    // 全部平仓：Collateral + PNL - Fund Fee - Position Fee - Execution Fee。
    // 部分平仓-保持杠杆倍数：Collateral*平仓比例 * + PNL*平仓比例 - FundFee - Execution Fee - Position Fee;
    // 部分平仓-不保持杠杆倍数：PNL*平仓比例 - FundFee - Execution Fee - Position Fee;
    // Positon Fee = Close  * Position Fee Rate
    // ExecutionFee：Market为0，Trigger为合约获取配置
    if (ifAll) {
      return _collateral.plus(_nextPNL).minus(_fundFee).minus(_positionFee).minus(_positionFee).toFixed(2, 1);
    } else {
      return keepLeverage ? _collateral.plus(_nextPNL).multipliedBy(_sizeDeltaRate).minus(_fees).toFixed(2) : _nextPNL.multipliedBy(_sizeDeltaRate).minus(_fees);
    }
  };
  var receive = getReceive().toString();

  // Keep Leverage On：Collateral - Delta Collateral + Recive (Recive<0时)
  // Delta Collateral = Collateral*(close/size)  + PNL*平仓比例（PNL < 0时）
  // Keep Leverage Off: Collateral + Recive (Recive<0时)
  var getNextCollByKeeep = function getNextCollByKeeep() {
    if (!ifSizePos) return new bignumber/* BigNumber */.O(0);
    if (+_nextPNL < 0) {
      return new bignumber/* BigNumber */.O(1).minus(_sizeDeltaRate).multipliedBy(_collateral.plus(_nextPNL));
    } else {
      return new bignumber/* BigNumber */.O(1).minus(_sizeDeltaRate).multipliedBy(_collateral);
    }
  };
  var _nextCollateral = keepLeverage ? getNextCollByKeeep() : _collateral;
  if (+receive < 0) _nextCollateral.plus(receive);
  var nextCollateral = _nextCollateral.toFixed(2);
  // -1 * (Index Price - Entry Price) * sizeDelta) / Entry Price
  var nextPNLRate = new bignumber/* BigNumber */.O(_nextPNL).multipliedBy(nextCollateral).toFixed(2);

  //Size(new)/ Collateral(new)

  var nextPNL = _nextPNL.toFixed(2); // check with actual data
  var nextSize = _nextSize.toFixed(2);
  var nextLeverage = ifSizePos ? _nextSize.dividedBy(_nextCollateral).toFixed(2) : '0.01';
  // liqPrice depends on size collateral
  var nextLiqPrice = positions_getLidPrice(objectSpread2_default()(objectSpread2_default()({}, row), {}, {
    size: nextSize,
    collateral: nextCollateral
  }), row === null || row === void 0 ? void 0 : row.feeRate);
  var nextNetValue = Math.floor(_nextCollateral.plus(_nextPNL).minus(_nextSize.multipliedBy(0.001)).toNumber() * 100) / 100;
  return {
    nextSize: nextSize,
    nextLeverage: nextLeverage,
    nextLiqPrice: nextLiqPrice,
    nextCollateral: nextCollateral,
    receive: receive,
    nextPNL: nextPNL,
    nextPNLRate: nextPNLRate,
    fees: _fees.toFixed(2, 1),
    positionFee: _positionFee.toFixed(2, 1),
    nextNetValue: nextNetValue
  };
};
var confirmClose = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(tsa, params) {
    var tradeArgs, market, result;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // console.log('----confirmClose-----', tsa, params)
          tradeArgs = {
            isLimit: params.isLimit,
            // market or trigger
            sizeDelta: (0,numbers/* bigNumberify */._b)(0),
            price: (0,numbers/* bigNumberify */._b)(0),
            slippage: (0,numbers/* bigNumberify */._b)(0),
            isLong: params.isLong,
            isExec: false,
            account: tsa.accountAddress,
            isKeepLev: params.keepLeverage
          };
          market = tsa.market;
          tradeArgs.sizeDelta = market.getNumDecimals(params.sizeDelta);
          tradeArgs.price = market.getPriceDecimals(params.price);
          tradeArgs.slippage = market.getSlippageDecimals(market.formatPercentage(tsa.slippage));
          _context.next = 7;
          return market.decreaseTrade(tradeArgs);
        case 7:
          result = _context.sent;
          return _context.abrupt("return", result);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function confirmClose(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/pages/trade/ui/PositionTableEditor/editor.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var editor_modulemodules = ({"table":"table___O1XQH","submitBtn":"submitBtn___GOq9M","orderPanel":"orderPanel___UpOZv","tabList":"tabList___Ynh2Z","tabItem":"tabItem___mxzqS","selected":"selected___hpXfr","fields":"fields___jqoiL","field":"field___gznn3","title":"title___cDyBA","label":"label___d6Gje","value":"value___VUuPy","modal":"modal___yrezj","ant-modal-content":"ant-modal-content___YHsA0","cut":"cut___xmhqm"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/PositionTableEditor/cutLine.tsx


/* harmony default export */ var cutLine = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: editor_modulemodules.cut
  });
});
;// CONCATENATED MODULE: ./src/pages/trade/ui/PositionTableEditor/close.tsx




















// 1. 输入框精度限制
var PositionClose = function PositionClose(props) {
  var isVisible = props.isVisible,
    setIsVisible = props.setIsVisible,
    _props$row = props.row,
    row = _props$row === void 0 ? {} : _props$row,
    args = props.args,
    successCb = props.successCb,
    indexPrice = props.indexPrice;
  var _row$size = row.size,
    size = _row$size === void 0 ? '2000.999999' : _row$size,
    _row$initialCollatera = row.initialCollateral,
    initialCollateral = _row$initialCollatera === void 0 ? '200,000000000001' : _row$initialCollatera,
    _row$leverage = row.leverage,
    leverage = _row$leverage === void 0 ? '10.000001' : _row$leverage,
    _row$fundFee = row.fundFee,
    fundFee = _row$fundFee === void 0 ? '20' : _row$fundFee,
    _row$liqPrice = row.liqPrice,
    liqPrice = _row$liqPrice === void 0 ? '0.00000001' : _row$liqPrice;
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var _useState3 = (0,react.useState)('0'),
    _useState4 = slicedToArray_default()(_useState3, 2),
    sizeDelta = _useState4[0],
    setAmount = _useState4[1]; // close
  var _useState5 = (0,react.useState)(indexPrice),
    _useState6 = slicedToArray_default()(_useState5, 2),
    price = _useState6[0],
    setPrice = _useState6[1];
  var _useState7 = (0,react.useState)(true),
    _useState8 = slicedToArray_default()(_useState7, 2),
    keepLeverage = _useState8[0],
    setKeepLeverate = _useState8[1]; //
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    active = _useWeb3React.active,
    account = _useWeb3React.account;
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = (0,react.useState)('0.3'),
    _useState12 = slicedToArray_default()(_useState11, 2),
    slippage = _useState12[0],
    setSlippage = _useState12[1];
  var MKT_TXT = 'Market';
  var TGR_TXT = 'Trigger';
  var ISMARKER = 0;
  var verifyParams = function verifyParams() {
    if (!price && index) {
      return 'Enter A Price';
    }
    if (!+sizeDelta) {
      return 'Enter an amount';
    }
    if (+nextLeverage < 2.0 && +sizeDelta !== +avlb) return ' Min Leverage: 2.00x';
    if (+nextLeverage > 100.0 && +sizeDelta !== +avlb) return 'Max Leverage: 100.00x';
    // if (+sizeDelta > +size) return 'Max close amount exceeded'
    if (+nextCollateral < 5.0 && +sizeDelta !== +avlb) return 'Leftover Collateral Size below 5 USD';
    // Leftover Net Value below 5 USD 剩余保证金
    if (+nextNetValue < 5.0 && +sizeDelta !== +avlb) return 'Leftover Net Value Size below 5 USD';
    if (loading) return index ? 'Creating Order' : 'Closing';
    if (index && row !== null && row !== void 0 && row.isLong && +price < +nextLiqPrice) return "Price Below Liq. Price";
    if (index && !(row !== null && row !== void 0 && row.isLong) && +price > +nextLiqPrice) return "Price Above Liq. Price";
    return '';
  };
  var getPrimaryTxt = function getPrimaryTxt() {
    var btnTxt = verifyParams();
    if (btnTxt) return {
      btnTxt: btnTxt,
      btnValid: false
    };
    return {
      btnTxt: index ? 'Create Order' : 'Close',
      btnValid: true
    };
  };
  var avlb = formatUIPrice(row === null || row === void 0 ? void 0 : row.size);
  var setPayValueToMaximumAvailable = function setPayValueToMaximumAvailable() {
    setAmount(avlb);
  };
  var onchange = function onchange(value) {
    (value === null || value === void 0 ? void 0 : value.slippage) && setSlippage(value === null || value === void 0 ? void 0 : value.slippage);
  };
  var _useMemo = (0,react.useMemo)(function () {
      var isLimit = index !== ISMARKER;
      var result = showClosePosition(args, row, indexPrice, sizeDelta, keepLeverage, isLimit, price);
      return objectSpread2_default()({
        isLimit: isLimit
      }, result);
    }, [sizeDelta, index, keepLeverage, price, indexPrice]),
    nextSize = _useMemo.nextSize,
    nextCollateral = _useMemo.nextCollateral,
    nextLeverage = _useMemo.nextLeverage,
    nextLiqPrice = _useMemo.nextLiqPrice,
    isLimit = _useMemo.isLimit,
    receive = _useMemo.receive,
    nextPNL = _useMemo.nextPNL,
    fees = _useMemo.fees,
    positionFee = _useMemo.positionFee,
    nextNetValue = _useMemo.nextNetValue;
  var _useMemo2 = (0,react.useMemo)(function () {
      if (+sizeDelta > +avlb) return {
        btnTxt: 'Max close amount exceeded',
        btnValid: false
      };
      return getPrimaryTxt();
    }, [size, price, sizeDelta, loading, keepLeverage]),
    btnTxt = _useMemo2.btnTxt,
    btnValid = _useMemo2.btnValid;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: editor_modulemodules.modal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z
    // title="Close Long ETH"
    // todo ETH marketName?
    , {
      title: "Close ".concat(row !== null && row !== void 0 && row.isLong ? 'Long' : 'Short', " ETH"),
      onClose: function onClose() {
        return setIsVisible(false);
      },
      visible: isVisible,
      width: 512,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: editor_modulemodules.tabs,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Group */.O.Group, {
          defaultIndex: index,
          onChange: function onChange(v) {
            setIndex(v);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.header,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab.List */.O.List, {
              className: editor_modulemodules.tabList,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab */.O, {
                className: function className(_ref) {
                  var selected = _ref.selected;
                  return classnames_default()(editor_modulemodules.tabItem, defineProperty_default()({}, editor_modulemodules.selected, selected));
                },
                children: MKT_TXT
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab */.O, {
                className: function className(_ref2) {
                  var selected = _ref2.selected;
                  return classnames_default()(editor_modulemodules.tabItem, defineProperty_default()({}, editor_modulemodules.selected, selected));
                },
                children: TGR_TXT
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PriceInput */.tV, {
        value: !isLimit ? indexPrice : price,
        disabled: !isLimit,
        onChange: setPrice
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: editor_modulemodules.field,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: editor_modulemodules.label,
            children: ["Index Price:", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: "\xA0"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.value,
            children: indexPrice
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: editor_modulemodules.label,
            children: ["Available:", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: "\xA0"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: editor_modulemodules.value,
            children: ['$', avlb]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PayInput */.gp, {
        label: "Close",
        onClickMaxBtn: setPayValueToMaximumAvailable,
        value: sizeDelta,
        onChange: function onChange(v) {
          // setAnchorOnFromAmount(true)
          setAmount(v);
        }
        // max={avlb}
      }), !isLimit && /*#__PURE__*/(0,jsx_runtime.jsx)(ui_Advanced, {
        value: {
          slippage: slippage
        },
        ifSlippage: true,
        onChange: onchange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(cutLine, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: editor_modulemodules.fields,
        children: [Common_nextLabelValue('Position Size', size, nextSize, '$'), Common_nextLabelValue('Collateral', initialCollateral, +sizeDelta === 0 ? initialCollateral : nextCollateral, '$'), Common_nextLabelValue('Leverage', leverage, +sizeDelta === 0 ? leverage : nextLeverage, '', 'x', {
          defaultValue: nextLeverage === '0.01' ? '-' : ''
        }), Common_nextLabelValue('PNL', nextPNL || (row === null || row === void 0 ? void 0 : row.PNL), undefined, '$'), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: editor_modulemodules.label,
            children: ["Fees", /*#__PURE__*/(0,jsx_runtime.jsx)(components_Tooltip, {
              placement: "bottom",
              overlay: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: editor_modulemodules.overlay,
                children: ['Fees', /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Fund Fee: ".concat(formatUIPrice(fundFee, 2, '$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Position Fee: ".concat(formatUIPrice(positionFee, 2, '$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Execution Fee: ".concat(formatUIPrice(isLimit ? row === null || row === void 0 ? void 0 : row.executionFee : '0', 2, '$'))]
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgQuestion, {
                className: editor_modulemodules.questionIcon
              })
            })]
          }), fees, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.value,
            children: formatUIPrice(fees, 2, '$')
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.label,
            children: "Keep Leverage"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.value,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Switch, {
              checked: keepLeverage,
              onChange: setKeepLeverate
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(cutLine, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.label,
            children: "Entry Price"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.value,
            children: formatUIPrice(row === null || row === void 0 ? void 0 : row.averagePrice, 2, '$')
          })]
        }), Common_nextLabelValue('Liq. Price', liqPrice, !isFinite(+nextLiqPrice) ? '0.001' : +sizeDelta > 0 ? nextLiqPrice : liqPrice, '$')]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(cutLine, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: editor_modulemodules.fields,
        children: [Common_nextLabelValue('Spread', '0', undefined, '', '%'), Common_nextLabelValue('Slippage', slippage || '0.3', '', '', '%'), Common_nextLabelValue('Receive', +receive > 0 ? receive : '0', undefined, undefined, ' USDC')]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: editor_modulemodules.submitBtn,
        disabled: loading || !btnValid,
        onClick: function onClick() {
          if (!active || !account) {
            return;
          }
          setLoading(true);
          confirmClose(args, {
            keepLeverage: keepLeverage,
            slippage: +slippage,
            sizeDelta: +sizeDelta,
            price: +price,
            isLong: row === null || row === void 0 ? void 0 : row.isLong,
            isLimit: isLimit,
            nextSize: nextSize,
            nextPNL: nextPNL
          }).then(function (res) {
            setIsVisible(false);
            successCb();
          })["catch"](function (err) {
            return console.log('confirm', err);
          })["finally"](function () {
            setLoading(false);
          });
        },
        children: btnTxt
      })]
    })
  });
};
/* harmony default export */ var PositionTableEditor_close = (PositionClose);
;// CONCATENATED MODULE: ./src/config/trade.ts
var MIN_LEVERAGE = 2;
var MAX_LEVERAGE = 100;
var MIN_SLIPPAGE = 0.01;
var MAX_SLIPPAGE = 5;
var MIN_PAY_USD = 10;
var MAX_ORDER_SIZE = 100000;
;// CONCATENATED MODULE: ./src/services/trade/positions/editcollateral.ts




var showEditcollateral = function showEditcollateral(row, isDeposit, amount, avlb, indexPrice) {
  // nextCollateral => collateral_now - fun fee +- amount
  // nextLiqPrice => getLiqPrice() row executeFee indexPrice feeRate
  // indexPrice = constant
  // nextLeverage => size/nextCollateral
  // nextFund => amount > 0 ? 0: nextFund

  var collateral = row.collateral,
    size = row.size,
    fundFee = row.fundFee;
  var getNextCollateral = function getNextCollateral(amount) {
    var _JsBigNumber, _JsBigNumber$operator, _JsBigNumber$operator2;
    var operator = isDeposit ? 'plus' : 'minus';
    return (_JsBigNumber = new bignumber/* BigNumber */.O(collateral)) === null || _JsBigNumber === void 0 ? void 0 : (_JsBigNumber$operator = _JsBigNumber[operator]) === null || _JsBigNumber$operator === void 0 ? void 0 : (_JsBigNumber$operator2 = _JsBigNumber$operator.call(_JsBigNumber, new bignumber/* BigNumber */.O(amount))) === null || _JsBigNumber$operator2 === void 0 ? void 0 : _JsBigNumber$operator2.toString();
  };
  var nextCollateral = !amount ? row === null || row === void 0 ? void 0 : row.collateral : getNextCollateral(amount);
  var nextLeverage = !amount ? row === null || row === void 0 ? void 0 : row.leverage : new bignumber/* BigNumber */.O(row === null || row === void 0 ? void 0 : row.size).dividedBy(new bignumber/* BigNumber */.O(nextCollateral)).toString();
  var nextFund = !amount ? fundFee : '0';
  var _size = new bignumber/* BigNumber */.O(size);
  var nextLiqPrice = !amount ? '' : positions_getLidPrice(objectSpread2_default()(objectSpread2_default()({}, row), {}, {
    size: size,
    collateral: nextCollateral
  }), row === null || row === void 0 ? void 0 : row.feeRate) || '';

  // console.log('----nextCollateral', getNextCollateral(amount), nextCollateral)
  var _depositAvlb = new bignumber/* BigNumber */.O(collateral).minus(fundFee).minus(_size.dividedBy(MAX_LEVERAGE).isLessThan(10) ? 10 : _size.dividedBy(MAX_LEVERAGE));
  var nextAvlb = !isDeposit ? _depositAvlb.isGreaterThan(0) ? _depositAvlb.toString() : '0' : avlb;
  return {
    nextCollateral: nextCollateral,
    nextLeverage: nextLeverage,
    nextFund: nextFund,
    nextLiqPrice: nextLiqPrice,
    nextAvlb: nextAvlb
  };
};
var confirmEditCollateral = function confirmEditCollateral(isLong, amount, market) {
  if (market) {
    console.log('---submit collateral----', amount, isLong, market);
    var bigAmount = market.getNumDecimals(amount);
    if (isLong) {
      return market.increaseCollateral(bigAmount, isLong);
    } else {
      return market.decreaseCollateral(bigAmount, isLong);
    }
  }
  return Promise.resolve('confirmEditCollateral failed');
};
;// CONCATENATED MODULE: ./src/pages/trade/ui/PositionTableEditor/collateral.tsx














// todo: 刷新仓位之后重置弹窗row
var PositionEditor = function PositionEditor(props) {
  var isVisible = props.isVisible,
    setIsVisible = props.setIsVisible,
    _props$row = props.row,
    row = _props$row === void 0 ? {} : _props$row,
    market = props.market,
    tradeShowArgs = props.tradeShowArgs,
    successCb = props.successCb,
    indexPrice = props.indexPrice;
  var _row$size = row.size,
    size = _row$size === void 0 ? '2000' : _row$size,
    _row$collateral = row.collateral,
    collateral = _row$collateral === void 0 ? '200' : _row$collateral,
    _row$leverage = row.leverage,
    leverage = _row$leverage === void 0 ? '10' : _row$leverage,
    _row$fundFee = row.fundFee,
    fundFee = _row$fundFee === void 0 ? '20' : _row$fundFee,
    _row$liqPrice = row.liqPrice,
    liqPrice = _row$liqPrice === void 0 ? '0.001' : _row$liqPrice;
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    active = _useWeb3React.active,
    account = _useWeb3React.account;
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var DEPOST_TXT = 'Deposit';
  var WT_TXT = 'Withdraw';
  var ISLONG = 0;
  var AVABDECIMAL = 4; // todo 取market

  var verifyParams = function verifyParams() {
    if (!+amount) {
      return 'Enter an amount';
    }
    if (!index && +amount > +nextAvlb) return 'Insufficient USDC Balance';
    if (index && +nextCollateral < 10.0) return 'Min residual collateral: 10 USD';
    if (+nextLeverage < 2.0) return ' Min Leverage: 2.00x';
    if (+nextLeverage > 100.0) return 'Max Leverage: 100.00x';
    if (loading) return index ? 'Withdrawing' : 'Depositing';
    return '';
  };
  var getPrimaryTxt = function getPrimaryTxt() {
    var btnTxt = verifyParams();
    if (btnTxt) return {
      btnTxt: btnTxt,
      btnValid: false
    };
    return {
      btnTxt: index ? 'Withdraw' : 'Deposit',
      btnValid: true
    };
  };
  var getDepositText = function getDepositText() {
    return index === ISLONG ? DEPOST_TXT : WT_TXT;
  };
  var getAvlbText = function getAvlbText() {
    return index === ISLONG ? 'Balance: ' : 'Available: ';
  };
  var setPayValueToMaximumAvailable = function setPayValueToMaximumAvailable() {
    setAmount(nextAvlb);
  };
  var _useMemo = (0,react.useMemo)(function () {
      return showEditcollateral(row, index === ISLONG,
      // isDeposited
      amount, tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.avlb, indexPrice);
    }, [amount, index, indexPrice]),
    nextCollateral = _useMemo.nextCollateral,
    nextLeverage = _useMemo.nextLeverage,
    nextFund = _useMemo.nextFund,
    nextLiqPrice = _useMemo.nextLiqPrice,
    nextAvlb = _useMemo.nextAvlb;
  var _useMemo2 = (0,react.useMemo)(function () {
      // if (+amount > +nextAvlb) {
      //   return index
      //     ? {
      //       btnTxt: `Max Order：${formatUIPrice(nextAvlb, AVABDECIMAL)} USD`,
      //       btnValid: false,
      //     }
      //     : { btnTxt: 'Insufficient USDC Balance', btnValid: false }
      // }

      return getPrimaryTxt();
    }, [index, amount, loading]),
    btnTxt = _useMemo2.btnTxt,
    btnValid = _useMemo2.btnValid;
  var isDeposit = (0,react.useMemo)(function () {
    return index === ISLONG;
  }, [index]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: editor_modulemodules.modal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Modal/* default */.Z, {
      title: "Edit Collateral",
      onClose: function onClose() {
        return setIsVisible(false);
      },
      visible: isVisible,
      width: 512,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: editor_modulemodules.tabs,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Group */.O.Group, {
          defaultIndex: index,
          onChange: function onChange(v) {
            //reset
            setAmount('0.00');
            setIndex(v);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.header,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab.List */.O.List, {
              className: editor_modulemodules.tabList,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab */.O, {
                className: function className(_ref) {
                  var selected = _ref.selected;
                  return classnames_default()(editor_modulemodules.tabItem, defineProperty_default()({}, editor_modulemodules.selected, selected));
                },
                children: DEPOST_TXT
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab */.O, {
                className: function className(_ref2) {
                  var selected = _ref2.selected;
                  return classnames_default()(editor_modulemodules.tabItem, defineProperty_default()({}, editor_modulemodules.selected, selected));
                },
                children: "Withdraw"
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PayInput */.gp, {
        onClickMaxBtn: setPayValueToMaximumAvailable,
        value: amount,
        onChange: function onChange(v) {
          // setAnchorOnFromAmount(true)
          setAmount(v);
        },
        label: index === ISLONG ? 'Pay' : 'Receive'
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: editor_modulemodules.fields,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: editor_modulemodules.field,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: editor_modulemodules.label,
              children: [getDepositText() + ': ', /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "\xA0"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: editor_modulemodules.value,
              children: formatUIPrice(amount, undefined, '$')
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: editor_modulemodules.field,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: editor_modulemodules.label,
              children: [getAvlbText(), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "\xA0"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: editor_modulemodules.value,
              children: formatUIPrice(nextAvlb, 4, undefined, ' USDC')
            })]
          })]
        }), Common_nextLabelValue('Collateral', collateral, nextCollateral, '$'), Common_nextLabelValue('Leverage', leverage, nextLeverage, '', 'X'), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: editor_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.label,
            children: "Index Price"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: editor_modulemodules.value,
            children: formatUIPrice(indexPrice, undefined, '$') || '-'
          })]
        }), Common_nextLabelValue('Liq. Price', liqPrice, nextLiqPrice, '$'), Common_nextLabelValue('Fund Fee', fundFee, +amount > 0 ? '0.00000001' : '', '$')]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: editor_modulemodules.submitBtn,
        disabled: loading || !btnValid,
        onClick: function onClick() {
          if (!active || !account) {
            return;
          }
          setLoading(true);
          // setTimeout(() = {}, 0)
          confirmEditCollateral(isDeposit, amount, market).then(function (res) {
            console.log('collateral succussed', res);
            successCb();
            setIsVisible(false);
          })["catch"](function (err) {
            return console.log('confirm', err);
          })["finally"](function () {
            setLoading(false);
          });
        },
        children: btnTxt
      })]
    })
  });
};
/* harmony default export */ var collateral = (PositionEditor);
;// CONCATENATED MODULE: ./src/pages/trade/ui/PositionTable/index.tsx
















var PositionDropDown = function PositionDropDown(props) {
  var handleSelectMarket = props.handleSelectMarket,
    handleEditCollateral = props.handleEditCollateral,
    handleShare = props.handleShare;
  var items = [{
    key: '1',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      onClick: handleEditCollateral,
      children: "Edit Collateral"
    })
  }, {
    key: '2',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      onClick: handleSelectMarket,
      children: "Select Market"
    })
  }, {
    key: '3',
    label: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      onClick: handleShare,
      children: "Share Position"
    })
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z
  // open={true} //dropdown
  , {
    overlayClassName: orders_modulemodules.dropdown,
    placement: "bottom",
    trigger: ['click'],
    menu: {
      items: items
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SvgMoreIcon, {
      className: orders_modulemodules.moreIcon
    })
  });
};
var PositionTable = function PositionTable(props) {
  var positions = props.positions,
    showPnlAfterFees = props.showPnlAfterFees,
    market = props.market,
    indexPrice = props.indexPrice,
    successCb = props.successCb,
    tradeShowArgs = props.tradeShowArgs;
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    currPosition = _useState2[0],
    setCurrPosition = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isPositionEditorVisible = _useState4[0],
    setIsPositionEditorVisible = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    isPositionCloseVisible = _useState6[0],
    setIsPositionCloseVisible = _useState6[1];
  var _handleEditCollateral = function handleEditCollateral(row) {
    setIsPositionEditorVisible(true);
    setCurrPosition(row);
  };
  var handleClosePositon = function handleClosePositon(row) {
    setIsPositionCloseVisible(true);
    setCurrPosition(row);
  };
  var handleSelectMarket = function handleSelectMarket() {};
  var handleShare = function handleShare() {};
  var columns = [{
    title: 'Position',
    render: function render(record) {
      var _cn;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: orders_modulemodules.position,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: record.pair
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: formatUIPrice(record === null || record === void 0 ? void 0 : record.leverage, undefined, '', 'x')
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classnames_default()(orders_modulemodules.pos, (_cn = {}, defineProperty_default()(_cn, orders_modulemodules.long, record.isLong), defineProperty_default()(_cn, orders_modulemodules.short, !record.isLong), _cn)),
          children: record.isLong ? 'Long' : 'Short'
        })]
      });
    }
  }, {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: function render(value) {
      return formatUIPrice(value, undefined, '$');
    }
  }, {
    title: 'Collateral',
    render: function render(row) {
      var _row$collateral;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: orders_modulemodules.collateral,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: orders_modulemodules.collateralTxt,
            children: [formatUIPrice(row.collateral, undefined, '$'), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Tooltip, {
              placement: "bottom",
              overlay: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: orders_modulemodules.overlay,
                children: ['Collateral', /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Collateral:  Initial Collateral - Fund Fee", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Initial Collateral: ".concat(+(row === null || row === void 0 ? void 0 : row.initialCollateral) < 0 ? formatUIPrice(Math.abs(+(row === null || row === void 0 ? void 0 : row.initialCollateral)).toFixed(2), undefined, '-$') : formatUIPrice(Math.abs(+(row === null || row === void 0 ? void 0 : row.initialCollateral)).toFixed(2), undefined, '+$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Fund Fee: ".concat(formatUIPrice(row === null || row === void 0 ? void 0 : row.fundFee, undefined, '$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Fund Fee / Day: ".concat(formatUIPrice(row === null || row === void 0 ? void 0 : row.fundFeeDay, undefined, '$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), 'Use the Edit Collateral icon to deposit or withdraw collateral.']
              }),
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: orders_modulemodules.underline,
                children: new Array((row === null || row === void 0 ? void 0 : (_row$collateral = row.collateral) === null || _row$collateral === void 0 ? void 0 : _row$collateral.length) || 0).fill('-').join('')
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* AiOutlineEdit */.$iz, {
            style: {
              cursor: 'pointer'
            },
            size: "16",
            onClick: function onClick() {
              return _handleEditCollateral(row);
            }
          })]
        })
      });
    }
  }, {
    title: 'NetValue',
    render: function render(row) {
      var _formatUIPrice;
      var getPnlText = function getPnlText(PNL, PNLpct) {
        return +PNL >= 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: orders_modulemodules.colorGrn,
          children: "".concat(formatUIPrice(PNL, undefined, '$'), "(").concat(formatUIPrice(PNLpct, undefined, '$'), "%)")
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: orders_modulemodules.colorRed,
          children: "".concat(formatUIPrice(PNL, undefined, '$'), "(").concat(formatUIPrice(PNLpct, undefined, '$'), "%)")
        });
      };
      var openFees = Math.floor(+(row === null || row === void 0 ? void 0 : row.size) * 0.2) / 100;
      var pnlAfterFees = +(row === null || row === void 0 ? void 0 : row.PNL) - openFees - +(row === null || row === void 0 ? void 0 : row.fundFee);
      var pnlAfterFeesRate = pnlAfterFees / +(row === null || row === void 0 ? void 0 : row.collateral) * 100;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [formatUIPrice(row === null || row === void 0 ? void 0 : row.netValue, undefined, '$'), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: getPnlText(row === null || row === void 0 ? void 0 : row.PNL, (Math.floor(+(row === null || row === void 0 ? void 0 : row.PNLRate) * 10000) / 100).toFixed(2))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Tooltip, {
            placement: "bottom",
            overlay: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: orders_modulemodules.overlay,
              children: ['Net Value', /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Net Value: Initial Collateral + PnL - Fund Fee", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Initial Collateral: ".concat(+(row === null || row === void 0 ? void 0 : row.initialCollateral) < 0 ? formatUIPrice(Math.abs(+(row === null || row === void 0 ? void 0 : row.initialCollateral)).toFixed(2), undefined, '-$') : formatUIPrice(Math.abs(+(row === null || row === void 0 ? void 0 : row.initialCollateral)).toFixed(2), undefined, '+$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Pnl: ".concat(+(row === null || row === void 0 ? void 0 : row.PNL) > 0 ? formatUIPrice(Math.abs(+(row === null || row === void 0 ? void 0 : row.PNL)).toFixed(2), undefined, '+$') : formatUIPrice(Math.abs(+(row === null || row === void 0 ? void 0 : row.PNL)).toFixed(2), undefined, '-$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Fund Fee: ".concat(formatUIPrice(row === null || row === void 0 ? void 0 : row.fundFee, undefined, '$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Open + Close Fees: ".concat(formatUIPrice(openFees.toFixed(2), undefined, '$')), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "PnL After Fees: ".concat(pnlAfterFees.toFixed(2), "(").concat(pnlAfterFeesRate.toFixed(2), "%)")]
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: orders_modulemodules.underline,
              style: {
                cursor: 'pointer'
              },
              children: new Array(((_formatUIPrice = formatUIPrice(row === null || row === void 0 ? void 0 : row.netValue, undefined, '')) === null || _formatUIPrice === void 0 ? void 0 : _formatUIPrice.length) || 0).fill('-').join('')
            })
          })]
        })
      });
    }
  }, {
    title: 'Entry Price',
    dataIndex: 'averagePrice',
    key: 'averagePrice',
    render: function render(averagePrice) {
      return formatUIPrice(averagePrice, undefined, '$');
    }
  }, {
    title: 'Index Price',
    render: function render() {
      return formatUIPrice(indexPrice, undefined, '$');
    }
  }, {
    title: 'Liq. Price',
    dataIndex: 'liqPrice',
    render: function render(liqPrice) {
      return formatUIPrice(liqPrice, undefined, '$');
    }
  }, {
    width: 120,
    title: '',
    render: function render(row) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: orders_modulemodules.options,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: orders_modulemodules.closeBtn,
          onClick: function onClick() {
            return handleClosePositon(row);
          },
          children: "Close"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PositionDropDown, {
          row: row,
          handleEditCollateral: function handleEditCollateral() {
            return _handleEditCollateral(row);
          },
          handleSelectMarket: handleSelectMarket,
          handleShare: handleShare
        })]
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [isPositionEditorVisible && currPosition && /*#__PURE__*/(0,jsx_runtime.jsx)(collateral
    // positionKey={positionToEditKey}
    , {
      isVisible: isPositionEditorVisible,
      setIsVisible: setIsPositionEditorVisible,
      row: currPosition,
      market: market,
      tradeShowArgs: props.tradeShowArgs,
      successCb: successCb,
      indexPrice: indexPrice
    }), isPositionCloseVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(PositionTableEditor_close, {
      indexPrice: indexPrice,
      isVisible: isPositionCloseVisible,
      setIsVisible: setIsPositionCloseVisible,
      row: currPosition,
      args: tradeShowArgs,
      successCb: successCb
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: orders_modulemodules.card,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rc_table_es/* default */.ZP, {
        emptyText: "No open positions",
        className: orders_modulemodules.table,
        columns: columns,
        data: positions
      })
    })]
  });
};
/* harmony default export */ var ui_PositionTable = (PositionTable);
;// CONCATENATED MODULE: ./src/pages/trade/ui/Orders/index.tsx



















var Orders_Orders = function Orders(props) {
  // infoTokens mock
  var indexPrice = props.indexPrice,
    market = props.market,
    _props$infoTokens = props.infoTokens,
    infoTokens = _props$infoTokens === void 0 ? {
      '0x0000000000000000000000000000000000000000': {
        isWrapped: true,
        symbol: 'WETH',
        baseSymbol: 'ETH'
      }
    } : _props$infoTokens,
    tradeShowArgs = props.tradeShowArgs,
    showPnlAfterFees = props.showPnlAfterFees;
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1]; // switch
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    checked = _useState4[0],
    setChecked = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = slicedToArray_default()(_useState5, 2),
    orders = _useState6[0],
    setOrders = _useState6[1];
  // const [positions, setPositions] = useState<SPosition[]>([])
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    trades = _useState8[0],
    setTrades = _useState8[1];
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    tableFlag = _AppContext$useContai.tableFlag,
    setTableFlag = _AppContext$useContai.setTableFlag;
  var _useRecoilState = (0,es/* useRecoilState */.FV)(positionAtom),
    _useRecoilState2 = slicedToArray_default()(_useRecoilState, 2),
    positions = _useRecoilState2[0],
    setPositions = _useRecoilState2[1];
  (0,react.useEffect)(function () {
    if (!tradeShowArgs) return;
    getOrderRows(tradeShowArgs, indexPrice).then(function (res) {
      return setOrders(res);
    });
    getPositionRows(tradeShowArgs, indexPrice).then(function (res) {
      return setPositions(res);
    });
    getTradeRows(tradeShowArgs, tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.marketName).then(function (res) {
      return setTrades(res);
    });
    // console.log('orders  ', orders)
    // console.log('trades  ', trades)
    console.log('positions  ', positions);
  }, [tradeShowArgs, tableFlag, indexPrice]);
  var handleTableChane = function handleTableChane() {
    setTableFlag(!tableFlag);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: orders_modulemodules.orderPanel,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab.Group */.O.Group, {
      defaultIndex: index,
      onChange: function onChange(v) {
        setIndex(v);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: orders_modulemodules.header,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab.List */.O.List, {
          className: orders_modulemodules.tabList,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab */.O, {
            className: function className(_ref) {
              var selected = _ref.selected;
              return classnames_default()(orders_modulemodules.tabItem, defineProperty_default()({}, orders_modulemodules.selected, selected));
            },
            children: ["Positions (", (positions || []).length, ")"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab */.O, {
            className: function className(_ref2) {
              var selected = _ref2.selected;
              return classnames_default()(orders_modulemodules.tabItem, defineProperty_default()({}, orders_modulemodules.selected, selected));
            },
            children: ["Orders (", (orders || []).length, ")"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab */.O, {
            className: function className(_ref3) {
              var selected = _ref3.selected;
              return classnames_default()(orders_modulemodules.tabItem, defineProperty_default()({}, orders_modulemodules.selected, selected));
            },
            children: ["Trades (", (trades || []).length, ")"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: orders_modulemodules.right,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
            id: "Hide Other Pairs"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Switch, {
            className: orders_modulemodules["switch"],
            checked: checked,
            onChange: setChecked
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* Tab.Panels */.O.Panels, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Panel */.O.Panel, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ui_PositionTable, {
            successCb: handleTableChane,
            indexPrice: indexPrice,
            showPnlAfterFees: showPnlAfterFees,
            market: market,
            tradeShowArgs: tradeShowArgs,
            positions: positions
          }, +tableFlag)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Panel */.O.Panel, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(OrdersTable, {
            indexPrice: indexPrice,
            tradeShowArgs: props.tradeShowArgs,
            orders: orders,
            successCb: handleTableChane
          }, +tableFlag)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* Tab.Panel */.O.Panel, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(MarketTrades, {
            infoTokens: infoTokens,
            indexPrice: indexPrice,
            trades: trades,
            successCb: handleTableChane
          }, +tableFlag)
        })]
      })]
    })
  });
};
/* harmony default export */ var ui_Orders = (Orders_Orders);
;// CONCATENATED MODULE: ./src/assets/arrow24.svg
var arrow24_defProp = Object.defineProperty;
var arrow24_getOwnPropSymbols = Object.getOwnPropertySymbols;
var arrow24_hasOwnProp = Object.prototype.hasOwnProperty;
var arrow24_propIsEnum = Object.prototype.propertyIsEnumerable;
var arrow24_defNormalProp = (obj, key, value) => key in obj ? arrow24_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var arrow24_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (arrow24_hasOwnProp.call(b, prop))
      arrow24_defNormalProp(a, prop, b[prop]);
  if (arrow24_getOwnPropSymbols)
    for (var prop of arrow24_getOwnPropSymbols(b)) {
      if (arrow24_propIsEnum.call(b, prop))
        arrow24_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrow24 = (props) => /* @__PURE__ */ react.createElement("svg", arrow24_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M11.478 18h3.478l5.294-6-5.294-6h-3.478l4.193 4.85H3.75v2.3h11.921L11.478 18Z", fill: "#F44364" }));

/* harmony default export */ var arrow24 = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjQ3OCAxOGgzLjQ3OGw1LjI5NC02LTUuMjk0LTZoLTMuNDc4bDQuMTkzIDQuODVIMy43NXYyLjNoMTEuOTIxTDExLjQ3OCAxOFoiIGZpbGw9IiNGNDQzNjQiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/assets/arrow.svg
var arrow_defProp = Object.defineProperty;
var arrow_getOwnPropSymbols = Object.getOwnPropertySymbols;
var arrow_hasOwnProp = Object.prototype.hasOwnProperty;
var arrow_propIsEnum = Object.prototype.propertyIsEnumerable;
var arrow_defNormalProp = (obj, key, value) => key in obj ? arrow_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var arrow_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (arrow_hasOwnProp.call(b, prop))
      arrow_defNormalProp(a, prop, b[prop]);
  if (arrow_getOwnPropSymbols)
    for (var prop of arrow_getOwnPropSymbols(b)) {
      if (arrow_propIsEnum.call(b, prop))
        arrow_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrow = (props) => /* @__PURE__ */ react.createElement("svg", arrow_spreadValues({ width: 16, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M7.652 12h2.319L13.5 8 9.97 4H7.653l2.795 3.234H2.5v1.532h7.947L7.652 12Z", fill: "#3DDB7C" }));

/* harmony default export */ var arrow = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNjUyIDEyaDIuMzE5TDEzLjUgOCA5Ljk3IDRINy42NTNsMi43OTUgMy4yMzRIMi41djEuNTMyaDcuOTQ3TDcuNjUyIDEyWiIgZmlsbD0iIzNEREI3QyIvPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/pages/trade/ui/DiffPrice/diffPrice.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var diffPrice_modulemodules = ({"value":"value___QTafV","old":"old___nWboE","new":"new___MFwco","arrowIcon":"arrowIcon___wpnLP","red":"red___ta54J"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/DiffPrice/index.tsx







var DiffPrice = function DiffPrice(props) {
  var _props$symbolPrefix = props.symbolPrefix,
    symbolPrefix = _props$symbolPrefix === void 0 ? '$' : _props$symbolPrefix,
    hasExistingPosition = props.hasExistingPosition,
    priceDisplay = props.priceDisplay;
  var renderPrice = function renderPrice(n) {
    if (n && Number(n) > 0) {
      return "".concat(symbolPrefix).concat(n);
    }
    return '-';
  };
  var showDiff = function showDiff() {
    return hasExistingPosition && priceDisplay && priceDisplay.mergePositionPrice && priceDisplay.mergePositionPrice.gt(0);
  };
  var renderPriceDiff = function renderPriceDiff() {
    return showDiff() ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: diffPrice_modulemodules.old,
        children: renderPrice(priceDisplay === null || priceDisplay === void 0 ? void 0 : priceDisplay.existingPositionPrice.toFixed(2, 1))
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgArrow, {
        className: classnames_default()(diffPrice_modulemodules.arrowIcon, defineProperty_default()({}, diffPrice_modulemodules.red, ((priceDisplay === null || priceDisplay === void 0 ? void 0 : priceDisplay.rise) || 0) < 0))
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: diffPrice_modulemodules["new"],
        children: renderPrice(priceDisplay === null || priceDisplay === void 0 ? void 0 : priceDisplay.mergePositionPrice.toFixed(2, 1))
      })]
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: diffPrice_modulemodules["new"],
      children: renderPrice(priceDisplay === null || priceDisplay === void 0 ? void 0 : priceDisplay.mergePositionPrice.toFixed(2, 1))
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: diffPrice_modulemodules.value,
    children: renderPriceDiff()
  });
};
/* harmony default export */ var ui_DiffPrice = (DiffPrice);
;// CONCATENATED MODULE: ./src/pages/trade/ui/ConfirmDialog/confirm.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var confirm_modulemodules = ({"arrowIcon":"arrowIcon___iG0uS","red":"red___cXHfH","header":"header___hkqkP","row":"row___gfzWa","price":"price___k5Z9o","tip":"tip___F0_el","title":"title___FCH8V","changeInfoItem":"changeInfoItem___LaDtd","titleLabel":"titleLabel___EWjyx","changeInfo":"changeInfo___rSff6","fields":"fields___x3gUc","field":"field___qxsTj","label":"label___J7n5A","value":"value___m6nh9","old":"old___CU5un","new":"new___dIyoY","cut":"cut___T5uNM","submitBtn":"submitBtn___aBHIR","longColor":"longColor___DWLUi"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/ConfirmDialog/index.tsx














var ConfirmDialog = function ConfirmDialog(props) {
  var _parseValue, _tradeShowArgs$market, _tradeShowArgs$market2;
  var indexPrice = props.indexPrice,
    slippage = props.slippage,
    liqPriceDisplay = props.liqPriceDisplay,
    positionFee = props.positionFee,
    collateralDisplay = props.collateralDisplay,
    entryPrice = props.entryPrice,
    leverageDisplay = props.leverageDisplay,
    positionSizeDisplay = props.positionSizeDisplay,
    tradeShowArgs = props.tradeShowArgs,
    fundingFee = props.fundingFee,
    hasExistingPosition = props.hasExistingPosition,
    marketSelection = props.marketSelection,
    isPendingConfirmation = props.isPendingConfirmation,
    isMarketOrder = props.isMarketOrder,
    isLong = props.isLong,
    fromValue = props.fromValue,
    toValue = props.toValue,
    toSymbol = props.toSymbol,
    entryPriceDisplay = props.entryPriceDisplay;
  var visible = props.visible,
    onClickSubmit = props.onClickSubmit,
    onClose = props.onClose;
  var spread = (_parseValue = (0,numbers/* parseValue */.H2)((tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : (_tradeShowArgs$market = tradeShowArgs.market) === null || _tradeShowArgs$market === void 0 ? void 0 : (_tradeShowArgs$market2 = _tradeShowArgs$market._args) === null || _tradeShowArgs$market2 === void 0 ? void 0 : _tradeShowArgs$market2.spread) || 0, 10)) === null || _parseValue === void 0 ? void 0 : _parseValue.toNumber();
  var getTitle = function getTitle() {
    if (!isMarketOrder) {
      return 'Confirm Limit Order';
    }
    return isLong ? "Confirm ".concat(toSymbol, " Long") : "Confirm ".concat(toSymbol, " Short");
  };
  var getError = function getError() {
    return false;
  };
  var getPrimaryText = function getPrimaryText() {
    if (!isPendingConfirmation) {
      var error = getError();
      if (error) {
        return error;
      }
      var action = isMarketOrder ? isLong ? 'Long' : 'Short' : 'Create Order';
      return isMarketOrder && legacy/* MIN_PROFIT_TIME */.bD > 0 ? "Accept minimum and ".concat(action) : action;
    }
    if (!isMarketOrder) {
      return 'Creating Order...';
    }
    if (isLong) {
      return 'Longing...';
    }
    return 'Shorting...';
  };
  var displays = [{
    label: 'Position Size',
    display: positionSizeDisplay
  }, {
    label: 'Leverage',
    display: leverageDisplay,
    prefix: ''
  }, {
    label: 'Collateral',
    display: collateralDisplay
  }];
  var memoFundingFee = (0,react.useMemo)(function () {
    return (0,numbers/* formatAmount */.dN)(fundingFee, 18, 2);
  }, [fundingFee]);
  var toUsd = (0,react.useMemo)(function () {
    if (toValue) {
      return (0,bigNumber/* toBigNumber */.O)(indexPrice).multipliedBy((0,bigNumber/* toBigNumber */.O)(toValue)).toFixed(2, 1);
    }
    return 0;
  }, [indexPrice, toValue]);
  var fromUsd = (0,react.useMemo)(function () {
    return (0,bigNumber/* toBigNumber */.O)(fromValue || 0).toFixed(2, 1);
  }, [fromValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* default */.Z, {
    width: 512,
    title: getTitle(),
    onClose: onClose,
    visible: visible,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: confirm_modulemodules.wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: confirm_modulemodules.header,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.title,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: depx_select_icon/* default */.Z
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: classnames_default()(confirm_modulemodules.titleLabel, defineProperty_default()({}, confirm_modulemodules.longColor, isLong)),
            children: [marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.name, " ", isLong ? 'LONG' : 'SHORT']
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.changeInfo,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: confirm_modulemodules.changeInfoItem,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [" Pay ", fromUsd, " USDC"]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["($", fromUsd, ")"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgArrow24, {
            className: classnames_default()(confirm_modulemodules.arrowIcon, defineProperty_default()({}, confirm_modulemodules.longColor, isLong))
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: confirm_modulemodules.changeInfoItem,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: confirm_modulemodules.row,
              children: [isLong ? 'Long ' : 'Short ', /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: confirm_modulemodules.price,
                title: toValue,
                children: "".concat(toValue, " ")
              }), toSymbol]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["($", toUsd, ")"]
            })]
          })]
        })]
      }), hasExistingPosition && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: confirm_modulemodules.tip,
        children: ["You already have an ", isLong ? 'long' : 'short', " position that will increase the size of an existing position."]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: confirm_modulemodules.fields,
        children: [(displays || []).map(function (_ref) {
          var display = _ref.display,
            prefix = _ref.prefix,
            label = _ref.label;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: confirm_modulemodules.field,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: confirm_modulemodules.label,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
                id: label
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_DiffPrice, {
              symbolPrefix: prefix,
              hasExistingPosition: hasExistingPosition,
              priceDisplay: display
            })]
          }, label);
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Open Fee"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.value,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: confirm_modulemodules["new"],
              children: ["$", positionFee]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Fund Fee"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.value,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: confirm_modulemodules["new"],
              children: "".concat(memoFundingFee || 0, "/1 h")
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: confirm_modulemodules.cut
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Entry Price"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_DiffPrice, {
            hasExistingPosition: hasExistingPosition,
            priceDisplay: entryPriceDisplay
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Liq. Price"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_DiffPrice, {
            hasExistingPosition: hasExistingPosition,
            priceDisplay: liqPriceDisplay
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: confirm_modulemodules.cut
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Type"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.value,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: confirm_modulemodules["new"],
              children: isMarketOrder ? 'Market' : 'Limit'
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Spread"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.value,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: confirm_modulemodules["new"],
              children: [spread, "%"]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: confirm_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.label,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* FormattedMessage */._H, {
              id: "Slippage"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: confirm_modulemodules.value,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: confirm_modulemodules["new"],
              children: [slippage, "%"]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        disabled: isPendingConfirmation,
        type: "button",
        className: confirm_modulemodules.submitBtn,
        onClick: onClickSubmit,
        children: getPrimaryText()
      })]
    })
  });
};
/* harmony default export */ var ui_ConfirmDialog = (ConfirmDialog);
// EXTERNAL MODULE: ./node_modules/rc-slider/es/index.js + 13 modules
var rc_slider_es = __webpack_require__(15560);
// EXTERNAL MODULE: ./node_modules/rc-slider/assets/index.css
var assets = __webpack_require__(39843);
;// CONCATENATED MODULE: ./src/pages/trade/ui/Leverage/leverage.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var leverage_modulemodules = ({"header":"header___TC62F","field":"field___SKQvO","value":"value___ZPyQn","leverage":"leverage___DJlMu","multiple":"multiple___TgITL","customInput":"customInput___vG08t","item":"item___kY23e","active":"active___NJOgJ","sliderBox":"sliderBox___OugRQ","slider":"slider___JsDOm"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/Leverage/index.tsx











var multiple = ['10', '20', '50', '100'];
var leverageMarks = {
  2: '2x',
  100: '100x'
};
var Leverage = function Leverage(props) {
  var _onChange = props.onChange,
    value = props.value;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    enabled = _useState2[0],
    setEnabled = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: leverage_modulemodules.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: leverage_modulemodules.field,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: leverage_modulemodules.label,
          children: "Leverage: "
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: leverage_modulemodules.value,
          children: [value, "x"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Switch, {
        checked: enabled,
        onChange: setEnabled
      })]
    }), enabled ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: leverage_modulemodules.sliderBox,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rc_slider_es/* default */.Z, {
        value: Number(value),
        onChange: function onChange(v) {
          return _onChange(String(v));
        },
        className: leverage_modulemodules.slider,
        min: 2,
        max: 100,
        marks: leverageMarks,
        step: 0.1
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: leverage_modulemodules.leverage,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: leverage_modulemodules.custom,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* default */.ZP, {
          decimals: 2,
          value: value,
          onChange: function onChange(v) {
            return _onChange(v);
          },
          className: leverage_modulemodules.customInput
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: leverage_modulemodules.multiple,
        children: multiple.map(function (i) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            onClick: function onClick() {
              _onChange(i);
            },
            className: classnames_default()(leverage_modulemodules.item, defineProperty_default()({}, leverage_modulemodules.active, i === value)),
            children: "".concat(i, "x")
          }, i);
        })
      })]
    })]
  });
};
/* harmony default export */ var ui_Leverage = (Leverage);
;// CONCATENATED MODULE: ./src/services/trade/swap/confirm.ts
var confirmSwap = function confirmSwap(chainId, account, swap, setPendingTxns) {
  if (swap.market) {
    var args = {
      isLimit: swap.isLimit,
      payDelta: swap.market.getNumDecimals(swap.pay),
      sizeDelta: swap.market.getNumDecimals(swap.size),
      price: swap.market.getPriceDecimals(swap.price),
      tpPrice: swap.market.getPriceDecimals(swap.takeProfit || '0'),
      slPrice: swap.market.getPriceDecimals(swap.stopLoss || '0'),
      slippage: swap.market.getSlippageDecimals(swap.market.formatPercentage(swap.slippage)),
      isLong: swap.isLong,
      isExec: false,
      isKeepLev: false,
      account: account
    };
    // debugger
    console.log('[confirmSwap]  ', args);
    swap.market.setChainId(chainId);
    swap.market.setPendingTxns(setPendingTxns);
    return swap.market.increaseTrade(args);
  }
  return Promise.reject();
};
;// CONCATENATED MODULE: ./src/assets/trending-down.svg
var trending_down_defProp = Object.defineProperty;
var trending_down_getOwnPropSymbols = Object.getOwnPropertySymbols;
var trending_down_hasOwnProp = Object.prototype.hasOwnProperty;
var trending_down_propIsEnum = Object.prototype.propertyIsEnumerable;
var trending_down_defNormalProp = (obj, key, value) => key in obj ? trending_down_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var trending_down_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (trending_down_hasOwnProp.call(b, prop))
      trending_down_defNormalProp(a, prop, b[prop]);
  if (trending_down_getOwnPropSymbols)
    for (var prop of trending_down_getOwnPropSymbols(b)) {
      if (trending_down_propIsEnum.call(b, prop))
        trending_down_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgTrendingDown = (props) => /* @__PURE__ */ react.createElement("svg", trending_down_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "m10 12.586 4-4 5.707 5.707L22 12v6h-6l2.293-2.293L14 11.414l-4 4-7.707-7.707 1.414-1.414L10 12.586Z", fill: "#F44364" }));

/* harmony default export */ var trending_down = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEwIDEyLjU4NiA0LTQgNS43MDcgNS43MDdMMjIgMTJ2NmgtNmwyLjI5My0yLjI5M0wxNCAxMS40MTRsLTQgNC03LjcwNy03LjcwNyAxLjQxNC0xLjQxNEwxMCAxMi41ODZaIiBmaWxsPSIjRjQ0MzY0Ii8+PC9zdmc+");

;// CONCATENATED MODULE: ./src/assets/trending-up.svg
var trending_up_defProp = Object.defineProperty;
var trending_up_getOwnPropSymbols = Object.getOwnPropertySymbols;
var trending_up_hasOwnProp = Object.prototype.hasOwnProperty;
var trending_up_propIsEnum = Object.prototype.propertyIsEnumerable;
var trending_up_defNormalProp = (obj, key, value) => key in obj ? trending_up_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var trending_up_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (trending_up_hasOwnProp.call(b, prop))
      trending_up_defNormalProp(a, prop, b[prop]);
  if (trending_up_getOwnPropSymbols)
    for (var prop of trending_up_getOwnPropSymbols(b)) {
      if (trending_up_propIsEnum.call(b, prop))
        trending_up_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgTrendingUp = (props) => /* @__PURE__ */ react.createElement("svg", trending_up_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "m10 12.414 4 4 5.707-5.707L22 13V7h-6l2.293 2.293L14 13.586l-4-4-7.707 7.707 1.414 1.414L10 12.414Z", fill: "#fff" }));

/* harmony default export */ var trending_up = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEwIDEyLjQxNCA0IDQgNS43MDctNS43MDdMMjIgMTNWN2gtNmwyLjI5MyAyLjI5M0wxNCAxMy41ODZsLTQtNC03LjcwNyA3LjcwNyAxLjQxNCAxLjQxNEwxMCAxMi40MTRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+");

// EXTERNAL MODULE: ./src/config/chains.ts
var config_chains = __webpack_require__(13805);
;// CONCATENATED MODULE: ./src/pages/trade/ui/TradeInfo/tradeinfo.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var tradeinfo_modulemodules = ({"field":"field___lFCUO","label":"label___Ut9cW","value":"value___TeWjD"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/TradeInfo/index.tsx






var TradeInfo = function TradeInfo(props) {
  var liqPriceDisplay = props.liqPriceDisplay,
    entryPriceDisplay = props.entryPriceDisplay,
    hasExistingPosition = props.hasExistingPosition,
    fundingFee = props.fundingFee,
    availableLiquidity = props.availableLiquidity,
    positionFee = props.positionFee;
  var memoFundingFee = (0,react.useMemo)(function () {
    if (!fundingFee) {
      return '-';
    }
    var n = (0,numbers/* formatAmount */.dN)(fundingFee, 18, 2);
    if (n === '...') {
      return '-';
    }
    return "".concat(n, "/1 h");
  }, [fundingFee]);
  var renderPrice = function renderPrice(n) {
    if (n && Number(n) > 0) {
      return "$".concat(n);
    }
    return '-';
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradeinfo_modulemodules.field,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.label,
        children: "Entry Price"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_DiffPrice, {
        hasExistingPosition: hasExistingPosition,
        priceDisplay: entryPriceDisplay
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradeinfo_modulemodules.field,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.label,
        children: "Liq. Price"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_DiffPrice, {
        hasExistingPosition: hasExistingPosition,
        priceDisplay: liqPriceDisplay
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradeinfo_modulemodules.field,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.label,
        children: "Open Fee"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.value,
        children: renderPrice(positionFee)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradeinfo_modulemodules.field,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.label,
        children: "Fund Fee"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.value,
        children: memoFundingFee
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradeinfo_modulemodules.field,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.label,
        children: "Available Liquidity"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradeinfo_modulemodules.value,
        children: renderPrice((0,numbers/* formatAmount */.dN)(availableLiquidity, 18, 2, false))
      })]
    })]
  });
};
/* harmony default export */ var ui_TradeInfo = (TradeInfo);
;// CONCATENATED MODULE: ./src/pages/trade/ui/TradeBar/tradebar.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var tradebar_modulemodules = ({"tabList":"tabList___yWdXa","tabLong":"tabLong___tGsCL","tabShort":"tabShort___bAVl0","selected":"selected___YaUw9","label":"label___V2PWs","tradeBar":"tradeBar___CpLnN","tradePanel":"tradePanel___AMHi2","options":"options___ewpuO","option":"option___NDplS","optionActive":"optionActive___Kv41n","row":"row___dT_JX","size":"size___EuhIT","value":"value___BtMri","field":"field___ob36v","panel":"panel___lJHih","cut":"cut___YHMHw","submitBtn":"submitBtn___zk5iO"});
;// CONCATENATED MODULE: ./src/pages/trade/ui/TradeBar/index.tsx




























var LIQPRICE_DECIMALS = 2;
var COMMON_DECIMALS = 2;
var TradeBar = function TradeBar(props) {
  var indexPrice = props.indexPrice,
    tradeShowArgs = props.tradeShowArgs,
    orderOption = props.orderOption,
    swapOption = props.swapOption,
    onChangeSwapOption = props.onChangeSwapOption,
    onChangOrderOption = props.onChangOrderOption;
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    active = _useWeb3React.active,
    account = _useWeb3React.account;
  var _useChainId = (0,chains/* useChainId */.x)(),
    chainId = _useChainId.chainId;
  var marketSelection = (0,es/* useRecoilValue */.sJ)(marketSelectionSelector(chainId));
  var _useState = (0,react.useState)(indexPrice),
    _useState2 = slicedToArray_default()(_useState, 2),
    triggerPriceValue = _useState2[0],
    setTriggerPriceValue = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isPendingConfirmation = _useState4[0],
    setIsPendingConfirmation = _useState4[1];
  var isMarketOrder = orderOption === legacy/* MARKET */.YO;
  var isLong = swapOption === legacy/* LONG */.FB;
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    visibleConfirm = _useState6[0],
    setVisibleConfirm = _useState6[1];
  var _useState7 = (0,react.useState)(true),
    _useState8 = slicedToArray_default()(_useState7, 2),
    anchorOnFromAmount = _useState8[0],
    setAnchorOnFromAmount = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = slicedToArray_default()(_useState9, 2),
    fromValue = _useState10[0],
    setFromValue = _useState10[1];
  var _useState11 = (0,react.useState)(''),
    _useState12 = slicedToArray_default()(_useState11, 2),
    toValue = _useState12[0],
    setToValue = _useState12[1];
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    setWalletVisible = _AppContext$useContai.setWalletVisible;
  var positions = (0,es/* useRecoilValue */.sJ)(positionAtom);
  var _useState13 = (0,react.useState)(),
    _useState14 = slicedToArray_default()(_useState13, 2),
    advancedValue = _useState14[0],
    setAdvancedValue = _useState14[1];
  var _AppContext$useContai2 = state/* AppContext.useContainer */.I.useContainer(),
    setPendingTxns = _AppContext$useContai2.setPendingTxns;
  var openFeeRate = tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.openFeeRate;
  var executionFee = tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.executionFee;
  var market = tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.market;
  var maxLev = market === null || market === void 0 ? void 0 : market._valid.maxLev;
  var entryPrice = isMarketOrder ? indexPrice : triggerPriceValue;
  var _AppContext$useContai3 = state/* AppContext.useContainer */.I.useContainer(),
    tableFlag = _AppContext$useContai3.tableFlag,
    setTableFlag = _AppContext$useContai3.setTableFlag;
  (0,react.useEffect)(function () {
    if (!advancedValue && tradeShowArgs) {
      setAdvancedValue({
        takeProfit: tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.takeProfit,
        stopLoss: tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.stopLoss,
        slippage: tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.slippage
      });
    }
  }, [tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.takeProfit, tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.stopLoss, tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.slippage]);
  var clickOrderOption = function clickOrderOption(opt) {
    if (orderOption === opt) {
      return;
    }
    if (opt === legacy/* LIMIT */.VZ && (!triggerPriceValue || triggerPriceValue === '0')) {
      setTriggerPriceValue(indexPrice);
    }
    setAdvancedValue(objectSpread2_default()(objectSpread2_default()({}, advancedValue), {}, {
      stopLoss: '',
      takeProfit: ''
    }));
    onChangOrderOption(opt);
  };
  var clickSwapOption = function clickSwapOption(opt) {
    if (opt === swapOption) {
      return;
    }
    setAdvancedValue(objectSpread2_default()(objectSpread2_default()({}, advancedValue), {}, {
      stopLoss: '',
      takeProfit: ''
    }));
    setTriggerPriceValue('');
    onChangeSwapOption(opt);
  };
  var existingPosition = (0,react.useMemo)(function () {
    if (marketSelection && positions && positions.length > 0) {
      var side = "".concat(isLong ? 'Long' : 'Short');
      return positions.find(function (i) {
        return i.pair === marketSelection.name && i.account === account && i.side === side;
      });
    }
    return null;
  }, [positions, isLong, marketSelection]);
  (0,react.useEffect)(function () {
    setAnchorOnFromAmount(true);
    setFromValue('');
  }, [isMarketOrder, isLong]);
  var hasExistingPosition = (0,react.useMemo)(function () {
    return Boolean(existingPosition && existingPosition.size && (0,bigNumber/* toBigNumber */.O)(existingPosition.size).gt(0));
  }, [existingPosition]);
  var _useSWR = (0,dist/* default */.ZP)(function () {
      return account && marketSelection !== null && marketSelection !== void 0 && marketSelection.address ? [account, marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.address] : null;
    }, function () {
      var _tradeShowArgs$reader;
      return tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : (_tradeShowArgs$reader = tradeShowArgs.reader) === null || _tradeShowArgs$reader === void 0 ? void 0 : _tradeShowArgs$reader.availableLiquidity(account, marketSelection.address);
    }),
    availableLiquidity = _useSWR.data;
  var _useSWR2 = (0,dist/* default */.ZP)(function () {
      return tradeShowArgs !== null && tradeShowArgs !== void 0 && tradeShowArgs.market ? tradeShowArgs : null;
    }, swap_SwapShow.getFundFeeRete),
    fundFeeRete = _useSWR2.data;
  var _useSWR3 = (0,dist/* default */.ZP)(function () {
      return account && marketSelection !== null && marketSelection !== void 0 && marketSelection.address ? [account, marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.address, isLong] : null;
    }, function () {
      var _tradeShowArgs$reader2;
      return tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : (_tradeShowArgs$reader2 = tradeShowArgs.reader) === null || _tradeShowArgs$reader2 === void 0 ? void 0 : _tradeShowArgs$reader2.getFundingFee(account, marketSelection.address, isLong);
    }),
    fundingFee = _useSWR3.data;
  var toSymbol = (0,react.useMemo)(function () {
    if (marketSelection !== null && marketSelection !== void 0 && marketSelection.name) {
      return marketSelection.name.split('/')[0];
    }
    return '';
  }, [marketSelection]);
  var _useLocalStorageSeria = useLocalStorageSerializeKey([chainId, 'depx-swap-leverage-option'], '10'),
    _useLocalStorageSeria2 = slicedToArray_default()(_useLocalStorageSeria, 2),
    leverageOption = _useLocalStorageSeria2[0],
    setLeverageOption = _useLocalStorageSeria2[1];
  function setPayValueToMaximumAvailable() {
    setAnchorOnFromAmount(true);
    setFromValue((tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.avlb) || '0');
  }
  function verifyParam() {
    if (!isMarketOrder && (!triggerPriceValue || triggerPriceValue === '0')) {
      return "Enter a price";
    }
    if (!entryPrice) {
      return "Enter a price";
    }
    if (!toValue || toValue === '0') {
      return "Enter an amount";
    }
    var fromValueNumber = (0,bigNumber/* toBigNumber */.O)(fromValue);
    if (fromValueNumber.gt((0,bigNumber/* toBigNumber */.O)((tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.avlb) || fromValue))) {
      return "Insufficient USDC Balance";
    }
    if (Number(leverageOption) < MIN_LEVERAGE) {
      return "Min Leverage: ".concat(MIN_LEVERAGE, ".00x");
    }
    var maxLeverage = (maxLev === null || maxLev === void 0 ? void 0 : maxLev.toNumber()) || MAX_LEVERAGE;
    if (Number(leverageOption) > maxLeverage) {
      return "Max Leverage: ".concat(maxLeverage, ".00x");
    }
    if (advancedValue !== null && advancedValue !== void 0 && advancedValue.slippage) {
      if (Number(advancedValue.slippage) > MAX_SLIPPAGE) {
        return "Slippage should be less than ".concat(MAX_SLIPPAGE, "%");
      }
      if (Number(advancedValue.slippage) < MIN_SLIPPAGE) {
        return "Slippage should be more than ".concat(MIN_SLIPPAGE, "%");
      }
    }
    if ((0,bigNumber/* toBigNumber */.O)(fromValue).lt(MIN_PAY_USD)) {
      return "Min Pay: ".concat(MIN_PAY_USD, " USD");
    }
    var entryPriceNumber = (0,bigNumber/* toBigNumber */.O)(entryPrice);
    if (advancedValue !== null && advancedValue !== void 0 && advancedValue.takeProfit) {
      var takeProfitNumber = (0,bigNumber/* toBigNumber */.O)(advancedValue.takeProfit);
      if (isLong && takeProfitNumber.lt(entryPriceNumber)) {
        return 'Take Profit Below Current Price';
      }
      if (!isLong && takeProfitNumber.gt(entryPriceNumber)) {
        return 'Take Profit Above Current Price';
      }
    }
    if (advancedValue !== null && advancedValue !== void 0 && advancedValue.stopLoss) {
      var stopLossNumber = (0,bigNumber/* toBigNumber */.O)(advancedValue.stopLoss);
      if (isLong && stopLossNumber.gt(entryPriceNumber)) {
        return 'Stop Loss Above Current Price';
      }
      if (!isLong && stopLossNumber.lt(entryPriceNumber)) {
        return 'Stop Loss Below Current Price';
      }
    }
    // Stop Loss/Take Profit Below/Above Liq. Price
    if (!isMarketOrder) {
      if (isLong && entryPriceNumber.gt((0,bigNumber/* toBigNumber */.O)(indexPrice))) {
        return 'Price Above Current Price';
      }
      if (!isLong && entryPriceNumber.lt((0,bigNumber/* toBigNumber */.O)(indexPrice))) {
        return 'Price Below Current Price';
      }
    }

    // Stop Loss/Take Profit Below/Above Liq. Price
    if (liqPriceDisplay !== null && liqPriceDisplay !== void 0 && liqPriceDisplay.mergePositionPrice) {
      if (isLong && entryPriceNumber.lt(liqPriceDisplay.mergePositionPrice)) {
        return 'Price Above Liq. Price';
      }
      if (!isLong && entryPriceNumber.gt(liqPriceDisplay.mergePositionPrice)) {
        return 'Price Below Liq. Price';
      }
    }
    if (fromValueNumber.gt(MAX_ORDER_SIZE)) {
      return "Max Order Size\uFF1A".concat(MAX_ORDER_SIZE, " USD");
    }
    return '';
  }
  function getPrimaryState() {
    if (!active) {
      return ['Connect Wallet', false];
    }
    if (!(0,config_chains/* isSupportedChain */.EC)(chainId)) {
      return ["Incorrect Network", true];
    }
    var ver = verifyParam();
    if (ver) {
      return [ver, true];
    }
    if (toSymbol) {
      if (!isMarketOrder) {
        return ['Create Limit Order', false];
      }
      return ["".concat(isLong ? 'Long' : 'Short', " ").concat(toSymbol), false];
    }
    return ["Create", false];
  }
  var nextSize = (0,react.useMemo)(function () {
    return swap_SwapShow.getNextSize((0,bigNumber/* toBigNumber */.O)(fromValue), (0,bigNumber/* toBigNumber */.O)(openFeeRate || '0'), Number(leverageOption));
  }, [fromValue, leverageOption, openFeeRate]);
  (0,react.useEffect)(function () {
    var entryPriceNumber = (0,bigNumber/* toBigNumber */.O)(entryPrice);
    var openFeeRateNumber = (0,bigNumber/* toBigNumber */.O)(openFeeRate || '0');
    if (anchorOnFromAmount) {
      if (!fromValue) {
        setToValue('');
        return;
      }
      if (!openFeeRate || Number(entryPrice) === 0) {
        return;
      }
      var nextAmount = swap_SwapShow.getNextAmount((0,bigNumber/* toBigNumber */.O)(fromValue), entryPriceNumber, openFeeRateNumber, Number(leverageOption)).toFixed(18, 1);
      setToValue(nextAmount);
      return;
    }
    if (!toValue || !leverageOption || Number(entryPrice) === 0) {
      setFromValue('');
      return;
    }
    var nextPay = swap_SwapShow.getNextPay((0,bigNumber/* toBigNumber */.O)(toValue), entryPriceNumber, openFeeRateNumber || (0,bigNumber/* toBigNumber */.O)(0), Number(leverageOption)).toFixed(8, 1);
    setFromValue(nextPay);
  }, [tradeShowArgs, toValue, anchorOnFromAmount, leverageOption, openFeeRate, fromValue]);
  function onClickSubmit() {
    if (!active) {
      setWalletVisible(true);
      return;
    }
    if (isPendingConfirmation) {
      return;
    }
    if (account && entryPrice) {
      setIsPendingConfirmation(true);
      confirmSwap(chainId, account, objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, tradeShowArgs), advancedValue), {}, {
        pay: fromValue,
        isLimit: !isMarketOrder,
        size: nextSize.toFixed(18, 1),
        price: entryPrice,
        isLong: isLong
      }), setPendingTxns).then(function (arg) {
        setTableFlag(!tableFlag);
        setVisibleConfirm(false);
      })["finally"](function () {
        setIsPendingConfirmation(false);
      });
    }
  }
  var _useMemo = (0,react.useMemo)(function () {
      console.log('maxLev  ', maxLev === null || maxLev === void 0 ? void 0 : maxLev.toNumber());
      var openFeeRateNumber = (0,bigNumber/* toBigNumber */.O)(openFeeRate || 0);
      console.log('openFeeRate  ', openFeeRate);
      console.log('executionFee  ', executionFee);
      var nextPositionFee = swap_SwapShow.getNextPositionFee(nextSize, openFeeRateNumber);
      var positionFee = nextPositionFee.toFixed(COMMON_DECIMALS, 1);
      var entryPriceNumber = (0,bigNumber/* toBigNumber */.O)(entryPrice);
      var fromValueNumber = (0,bigNumber/* toBigNumber */.O)(fromValue);
      var executionFeeNumber = (0,bigNumber/* toBigNumber */.O)(isMarketOrder ? 0 : executionFee);
      var entryPriceDisplay = swap_SwapShow.getEntryPriceDisplay(entryPriceNumber, nextSize, existingPosition);
      if (fromValue && leverageOption && entryPrice) {
        var confirm = swap_SwapShow.getConfirmStat({
          size: nextSize,
          leverageOption: Number(leverageOption),
          executionFee: executionFeeNumber,
          entryPrice: entryPriceDisplay.mergePositionPrice,
          existingPosition: existingPosition,
          positionFeeRate: (0,bigNumber/* toBigNumber */.O)(openFeeRate || 0),
          hasExistingPosition: hasExistingPosition,
          pay: fromValueNumber
        });
        var _collateralDisplay = confirm.getCollateralDisplay();
        var maxLeverage = (0,bigNumber/* toBigNumber */.O)((maxLev === null || maxLev === void 0 ? void 0 : maxLev.toNumber()) || 100);
        var _liqPriceDisplay = confirm.getLigPriceDisplay(maxLeverage, isLong, nextPositionFee);
        var _positionSizeDisplay = confirm.getPositionSizeDisplay();
        var _leverageDisplay = confirm.getLeverageDisplay();
        return {
          entryPriceDisplay: entryPriceDisplay,
          positionFee: positionFee,
          liqPriceDisplay: _liqPriceDisplay,
          collateralDisplay: _collateralDisplay,
          leverageDisplay: _leverageDisplay,
          positionSizeDisplay: _positionSizeDisplay
        };
      }
      return {
        entryPriceDisplay: entryPriceDisplay,
        positionFee: positionFee
      };
    }, [fromValue, nextSize, maxLev, existingPosition, entryPrice, toValue, executionFee, isLong, fundFeeRete, isMarketOrder, leverageOption, openFeeRate]),
    positionFee = _useMemo.positionFee,
    liqPriceDisplay = _useMemo.liqPriceDisplay,
    collateralDisplay = _useMemo.collateralDisplay,
    leverageDisplay = _useMemo.leverageDisplay,
    positionSizeDisplay = _useMemo.positionSizeDisplay,
    entryPriceDisplay = _useMemo.entryPriceDisplay;
  var _getPrimaryState = getPrimaryState(),
    _getPrimaryState2 = slicedToArray_default()(_getPrimaryState, 2),
    primaryText = _getPrimaryState2[0],
    primaryState = _getPrimaryState2[1];
  var _useMemo2 = (0,react.useMemo)(function () {
      return [advancedValue !== null && advancedValue !== void 0 && advancedValue.takeProfit ? swap_SwapShow.getEstimatedPNL({
        isLong: isLong,
        entryPrice: (0,bigNumber/* toBigNumber */.O)(entryPrice),
        price: (0,bigNumber/* toBigNumber */.O)(advancedValue === null || advancedValue === void 0 ? void 0 : advancedValue.takeProfit),
        size: nextSize
      }).toFixed(COMMON_DECIMALS, 1) : '', advancedValue !== null && advancedValue !== void 0 && advancedValue.stopLoss ? swap_SwapShow.getEstimatedPNL({
        isLong: isLong,
        entryPrice: (0,bigNumber/* toBigNumber */.O)(entryPrice),
        price: (0,bigNumber/* toBigNumber */.O)(advancedValue === null || advancedValue === void 0 ? void 0 : advancedValue.stopLoss),
        size: nextSize
      }).toFixed(COMMON_DECIMALS, 1) : ''];
    }, [advancedValue === null || advancedValue === void 0 ? void 0 : advancedValue.takeProfit, advancedValue === null || advancedValue === void 0 ? void 0 : advancedValue.stopLoss, isLong, nextSize, entryPrice]),
    _useMemo3 = slicedToArray_default()(_useMemo2, 2),
    tkpPNL = _useMemo3[0],
    stopLossPNL = _useMemo3[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: tradebar_modulemodules.tradeBar,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradebar_modulemodules.tradePanel,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ui_ConfirmDialog, {
        indexPrice: indexPrice,
        entryPriceDisplay: entryPriceDisplay,
        slippage: (advancedValue === null || advancedValue === void 0 ? void 0 : advancedValue.slippage) || '0',
        tradeShowArgs: tradeShowArgs,
        entryPrice: entryPrice,
        positionFee: positionFee,
        liqPriceDisplay: liqPriceDisplay,
        collateralDisplay: collateralDisplay,
        leverageDisplay: leverageDisplay,
        positionSizeDisplay: positionSizeDisplay,
        fundingFee: fundingFee,
        isPendingConfirmation: isPendingConfirmation,
        existingPosition: existingPosition,
        hasExistingPosition: hasExistingPosition,
        toSymbol: toSymbol,
        fromValue: fromValue,
        marketSelection: marketSelection,
        onClickSubmit: onClickSubmit,
        isMarketOrder: isMarketOrder,
        isLong: isLong,
        chainId: chainId,
        visible: visibleConfirm,
        toValue: toValue,
        onClose: function onClose() {
          setVisibleConfirm(false);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: tradebar_modulemodules.tabList,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: classnames_default()(tradebar_modulemodules.tabLong, defineProperty_default()({}, tradebar_modulemodules.selected, isLong)),
          onClick: function onClick() {
            clickSwapOption(legacy/* LONG */.FB);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SvgTrendingUp, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: tradebar_modulemodules.label,
            children: "Long"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: classnames_default()(tradebar_modulemodules.tabShort, defineProperty_default()({}, tradebar_modulemodules.selected, !isLong)),
          onClick: function onClick() {
            clickSwapOption(legacy/* SHORT */.Qo);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SvgTrendingDown, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: tradebar_modulemodules.label,
            children: "Short"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: tradebar_modulemodules.options,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          onClick: function onClick() {
            clickOrderOption(legacy/* MARKET */.YO);
          },
          className: classnames_default()(tradebar_modulemodules.option, defineProperty_default()({}, tradebar_modulemodules.optionActive, isMarketOrder)),
          children: "Market"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          onClick: function onClick() {
            clickOrderOption(legacy/* LIMIT */.VZ);
          },
          className: classnames_default()(tradebar_modulemodules.option, defineProperty_default()({}, tradebar_modulemodules.optionActive, !isMarketOrder)),
          children: "Limit"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PriceInput */.tV, {
        disabled: isMarketOrder,
        onChange: setTriggerPriceValue,
        value: entryPrice
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* LongPriceInput */.bW, {
        symbol: toSymbol,
        value: toValue,
        onChange: function onChange(v) {
          setAnchorOnFromAmount(false);
          setToValue(v);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: tradebar_modulemodules.row,
        children: [nextSize && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "".concat(tradebar_modulemodules.field, " ").concat(tradebar_modulemodules.size),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: tradebar_modulemodules.label,
            children: "Size:"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: tradebar_modulemodules.value,
            title: nextSize.toFixed(COMMON_DECIMALS, 1),
            children: ["$", nextSize.toFixed(COMMON_DECIMALS, 1)]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: tradebar_modulemodules.field,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: tradebar_modulemodules.label,
            children: "Avlb:"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: tradebar_modulemodules.value,
            children: (tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.avlb) || '-'
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PriceInput/* PayInput */.gp, {
        onClickMaxBtn: setPayValueToMaximumAvailable,
        value: fromValue,
        onChange: function onChange(v) {
          setAnchorOnFromAmount(true);
          setFromValue(v);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_Leverage, {
        value: leverageOption,
        onChange: function onChange(v) {
          return setLeverageOption(v);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: tradebar_modulemodules.submitBtn,
        disabled: primaryState,
        onClick: function onClick() {
          if (!active) {
            setWalletVisible(true);
            return;
          }
          setVisibleConfirm(true);
        },
        children: primaryText
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: tradebar_modulemodules.panel,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ui_Advanced, {
        tkpPNL: tkpPNL,
        stopLossPNL: stopLossPNL,
        onChange: setAdvancedValue,
        value: advancedValue,
        ifAll: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: tradebar_modulemodules.cut
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_TradeInfo, {
        hasExistingPosition: hasExistingPosition,
        positionFee: positionFee,
        fundingFee: fundingFee,
        entryPriceDisplay: entryPriceDisplay,
        availableLiquidity: availableLiquidity,
        liqPriceDisplay: liqPriceDisplay
      })]
    })]
  });
};
/* harmony default export */ var ui_TradeBar = (TradeBar);
;// CONCATENATED MODULE: ./src/pages/trade/index.tsx





















var trade_api = (0,api/* getApi */.a)();
var Trade = function Trade() {
  var _useChainId = (0,chains/* useChainId */.x)(),
    chainId = _useChainId.chainId;
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    account = _useWeb3React.account,
    library = _useWeb3React.library;
  var _AppContext$useContai = state/* AppContext.useContainer */.I.useContainer(),
    setPendingTxns = _AppContext$useContai.setPendingTxns;
  var _useState = (0,react.useState)(legacy/* MARKET */.YO),
    _useState2 = slicedToArray_default()(_useState, 2),
    orderOption = _useState2[0],
    setOrderOption = _useState2[1];
  var _useState3 = (0,react.useState)(legacy/* LONG */.FB),
    _useState4 = slicedToArray_default()(_useState3, 2),
    swapOption = _useState4[0],
    setSwapOption = _useState4[1];
  var _useSWR = (0,dist/* default */.ZP)("".concat(chainId), function () {
      return (0,market/* getMarkets */.t)(chainId, library);
    }),
    markets = _useSWR.data;
  var _useRecoilState = (0,es/* useRecoilState */.FV)(marketSelectionSelector(chainId)),
    _useRecoilState2 = slicedToArray_default()(_useRecoilState, 2),
    marketSelection = _useRecoilState2[0],
    setMarketSelection = _useRecoilState2[1];
  var symbol = (0,utils/* getBianSymbol */["do"])(marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.name);
  var _useSWR2 = (0,dist/* default */.ZP)(symbol ? symbol : null, {
      fetcher: trade_api.getIndexPrice,
      dedupingInterval: 1000,
      focusThrottleInterval: 1000 * 10
    }),
    data = _useSWR2.data;
  var indexPrice = (data === null || data === void 0 ? void 0 : data.toFixed(2, 1)) || '0';
  (0,react.useEffect)(function () {
    if (markets && markets.length > 0) {
      if (!marketSelection) {
        setMarketSelection(markets[0]);
        return;
      }
      var hasExist = markets.find(function (i) {
        return i.name === (marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.name) && i.address === marketSelection.address;
      });
      if (!hasExist) {
        setMarketSelection(markets[0]);
      }
    }
  }, [markets, marketSelection]);
  var _useSWR3 = (0,dist/* default */.ZP)(marketSelection !== null && marketSelection !== void 0 && marketSelection.address ? [chainId, marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.address, marketSelection === null || marketSelection === void 0 ? void 0 : marketSelection.name, library, account] : null, function (args) {
      return getDefaultSwap.apply(void 0, [indexPrice, setPendingTxns].concat(toConsumableArray_default()(args)));
    }),
    tradeShowArgs = _useSWR3.data;
  function onChangeMarketSelection(m) {
    setMarketSelection(m);
  }
  console.log('markets', markets);
  console.log('marketSelection', marketSelection);
  if (!marketSelection) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: trade_modulemodules.trade,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ui_KChart, {
        indexPrice: indexPrice,
        markets: markets || [],
        onChangeMarketSelection: onChangeMarketSelection,
        swapOption: swapOption
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_TradeBar, {
        indexPrice: indexPrice,
        tradeShowArgs: tradeShowArgs,
        swapOption: swapOption,
        orderOption: orderOption,
        onChangOrderOption: setOrderOption,
        onChangeSwapOption: setSwapOption
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_Orders, {
      indexPrice: indexPrice,
      orders: tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.Orders,
      trades: tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.Trades,
      market: tradeShowArgs === null || tradeShowArgs === void 0 ? void 0 : tradeShowArgs.market,
      tradeShowArgs: tradeShowArgs
    })]
  });
};
var WrapperTrade = function WrapperTrade() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es/* RecoilRoot */.Wh, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trade, {})
  });
};
/* harmony default export */ var trade = (WrapperTrade);

/***/ })

}]);