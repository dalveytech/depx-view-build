"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[108],{

/***/ 37432:
/*!*********************************!*\
  !*** ./src/lib/chains/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ useChainId; }
/* harmony export */ });
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/core */ 34713);
/* harmony import */ var _config_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/chains */ 13805);
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/localStorage */ 22837);



function useChainId() {
  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3React */ .Ge)(),
    chainId = _useWeb3React.chainId;
  if (!chainId) {
    var chainIdFromLocalStorage = localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .SELECTED_NETWORK_LOCAL_STORAGE_KEY */ .HC);
    if (chainIdFromLocalStorage) {
      chainId = parseInt(chainIdFromLocalStorage);
      if (!chainId) {
        // localstorage value is invalid
        localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_2__/* .SELECTED_NETWORK_LOCAL_STORAGE_KEY */ .HC);
      }
    }
  }
  if (!chainId || !_config_chains__WEBPACK_IMPORTED_MODULE_1__/* .SUPPORTED_CHAIN_IDS.includes */ .FQ.includes(chainId)) {
    chainId = _config_chains__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_CHAIN_ID */ .rC;
  }
  return {
    chainId: chainId
  };
}

/***/ }),

/***/ 4175:
/*!********************************************************!*\
  !*** ./src/services/datasource/api/api.ts + 4 modules ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": function() { return /* binding */ getApi; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/lib/bigNumber.ts
var bigNumber = __webpack_require__(61895);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 39 modules
var axios = __webpack_require__(8433);
;// CONCATENATED MODULE: ./src/services/datasource/api/binance/client.ts

var BINANCEURL = 'https://api.binance.com/api/v3/';
var API_URL = {
  KLINE: 'klines',
  TICKER: 'ticker/24hr',
  TICKER_PRICE: 'ticker/price'
};
var instance = axios/* default.create */.Z.create({
  baseURL: BINANCEURL,
  timeout: 5000
});
var BianClient = {
  getTickerPrice: function getTickerPrice(symbol) {
    return instance.get(API_URL.TICKER_PRICE, {
      params: {
        symbol: symbol
      }
    });
  },
  getTicker: function getTicker(symbol) {
    return instance.get(API_URL.TICKER, {
      params: {
        symbol: symbol
      }
    });
  },
  getKLines: function getKLines(symbol, interval) {
    return instance.get(API_URL.KLINE, {
      params: {
        symbol: symbol,
        interval: interval
      }
    });
  }
};
/* harmony default export */ var client = (BianClient);
;// CONCATENATED MODULE: ./src/services/datasource/api/binance/24h.ts




var get24H = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(marketName) {
    var h24, response;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          h24 = {
            Change: (0,bigNumber/* toBigNumber */.O)(0),
            ChangeRate: (0,bigNumber/* toBigNumber */.O)(0),
            Hige: (0,bigNumber/* toBigNumber */.O)(0),
            Low: (0,bigNumber/* toBigNumber */.O)(0)
          };
          _context.prev = 1;
          _context.next = 4;
          return client.getTicker(marketName.toUpperCase());
        case 4:
          response = _context.sent;
          if (response.data) {
            h24.Hige = (0,bigNumber/* toBigNumber */.O)(response.data.highPrice);
            h24.Low = (0,bigNumber/* toBigNumber */.O)(response.data.lowPrice);
            h24.Change = (0,bigNumber/* toBigNumber */.O)(response.data.priceChange);
            h24.ChangeRate = (0,bigNumber/* toBigNumber */.O)(response.data.priceChangePercent);
          }
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 11:
          return _context.abrupt("return", h24);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function get24H(_x) {
    return _ref.apply(this, arguments);
  };
}();
//GET /api/v3/ticker/24hr?symbol=
// {
//     "symbol": "BNBBTC",
//     "priceChange": "-94.99999800",
//     "priceChangePercent": "-95.960",
//     "weightedAvgPrice": "0.29628482",
//     "prevClosePrice": "0.10002000",
//     "lastPrice": "4.00000200",
//     "lastQty": "200.00000000",
//     "bidPrice": "4.00000000",
//     "bidQty": "100.00000000",
//     "askPrice": "4.00000200",
//     "askQty": "100.00000000",
//     "openPrice": "99.00000000",
//     "highPrice": "100.00000000",
//     "lowPrice": "0.10000000",
//     "volume": "8913.30000000",
//     "quoteVolume": "15.30000000",
//     "openTime": 1499783499040,
//     "closeTime": 1499869899040,
//     "firstId": 28385,   // 首笔成交id
//     "lastId": 28460,    // 末笔成交id
//     "count": 76         // 成交笔数
//   }
;// CONCATENATED MODULE: ./src/services/datasource/api/binance/indexPrice.ts




var indexPrice_axios = __webpack_require__(/*! axios */ 97218);
var indexPrice_BINANCEURL = 'https://api.binance.com/api/v3/';
var getIndexPrice = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(marketName) {
    var response;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return client.getTickerPrice(marketName.toUpperCase());
        case 3:
          response = _context.sent;
          if (!response.data) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", (0,bigNumber/* toBigNumber */.O)(response.data.price));
        case 6:
          return _context.abrupt("return", response.data);
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 12:
          return _context.abrupt("return", (0,bigNumber/* toBigNumber */.O)(0));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getIndexPrice(_x) {
    return _ref.apply(this, arguments);
  };
}();

//测试api是否能连接，超时不能联通，自动替换api
function _testNetwork(api) {
  ///api/v3/ping
  return true;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(27424);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
;// CONCATENATED MODULE: ./src/services/datasource/api/binance/kline.ts




var getKLines = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(marketName, period) {
    var klines, response, i, row, _row, time, open, high, low, close;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          klines = [];
          _context.prev = 1;
          _context.next = 4;
          return client.getKLines(marketName.toUpperCase(), period);
        case 4:
          response = _context.sent;
          if (response.data) {
            for (i = 0; i < response.data.length; i++) {
              row = response.data[i];
              _row = slicedToArray_default()(row, 5), time = _row[0], open = _row[1], high = _row[2], low = _row[3], close = _row[4];
              klines.push({
                time: time / 1000,
                open: open,
                high: high,
                low: low,
                close: close
              });
            }
          }
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 11:
          return _context.abrupt("return", klines);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function getKLines(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
///api/v3/klines
//     参数:

// 名称	类型	是否必需	描述
// symbol	STRING	YES
// interval	ENUM	YES	详见枚举定义：K线间隔
// startTime	LONG	NO
// endTime	LONG	NO
// limit	INT	NO	默认 500; 最大 1000.
// [
//     [
//       1499040000000,      // k线开盘时间
//       "0.01634790",       // 开盘价
//       "0.80000000",       // 最高价
//       "0.01575800",       // 最低价
//       "0.01577100",       // 收盘价(当前K线未结束的即为最新价)
//       "148976.11427815",  // 成交量
//       1499644799999,      // k线收盘时间
//       "2434.19055334",    // 成交额
//       308,                // 成交笔数
//       "1756.87402397",    // 主动买入成交量
//       "28.46694368",      // 主动买入成交额
//       "17928899.62484339" // 请忽略该参数
//     ]
//   ]
;// CONCATENATED MODULE: ./src/services/datasource/api/api.ts






var getApi = function getApi() {
  var indexPrice = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(marketName) {
      var binancePrice;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getIndexPrice(marketName);
          case 2:
            binancePrice = _context.sent;
            return _context.abrupt("return", binancePrice);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function indexPrice(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var g24H = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(marketName) {
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return get24H(marketName);
          case 2:
            return _context2.abrupt("return", _context2.sent);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function g24H(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var gKLines = function gKLines(marketName, period) {
    return getKLines(marketName, period);
  };
  return {
    getIndexPrice: indexPrice,
    get24H: g24H,
    getKLines: gKLines
  };
};
function _compoundPrice() {
  for (var _len = arguments.length, prices = new Array(_len), _key = 0; _key < _len; _key++) {
    prices[_key] = arguments[_key];
  }
  if (prices.length == 0) {
    return toDecimal(0);
  }
  var avgPrice = _avgPrice(prices);
  //范围内价格数组
  var iswidePrices = [];
  prices.forEach(function (price) {
    if (_isWide(price, avgPrice)) {
      iswidePrices.push(price);
    }
  });
  if (iswidePrices.length == prices.length) {
    return avgPrice;
  }
  return _avgPrice(iswidePrices);
}
function _avgPrice(prices) {
  // debugger
  if (prices.length < 2) {
    throw 'avgPrice It must be more than two prices';
  }
  var sumPrice = toDecimal(0);
  prices.forEach(function (price) {
    sumPrice = sumPrice.plus(price);
  });
  var avgPrice = sumPrice.div(toDecimal(prices.length));
  return avgPrice;
}
function _isWide(price, avgPrice) {
  var wide = toDecimal(0.05);
  var widePrice = avgPrice.multipliedBy(wide);
  if (price > avgPrice.plus(widePrice)) return false;
  if (price < avgPrice.minus(widePrice)) return false;
  return true;
}

/***/ }),

/***/ 61641:
/*!********************************************************!*\
  !*** ./src/services/trade/chart/market.ts + 2 modules ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": function() { return /* binding */ getMarkets; }
});

// UNUSED EXPORTS: DEFAULT_MARKET

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(17061);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(42122);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(17156);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
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
;// CONCATENATED MODULE: ./src/abis/MarketFactory.json
var MarketFactory_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"address","name":"marketValid","type":"address"},{"indexed":false,"internalType":"address","name":"orderBookLong","type":"address"},{"indexed":false,"internalType":"address","name":"orderBookShort","type":"address"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allMarketsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_marketAddress","type":"address"},{"internalType":"address","name":"_marketValid","type":"address"},{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_orderBookLong","type":"address"},{"internalType":"address","name":"_orderBookShort","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_feeRouter","type":"address"},{"internalType":"address","name":"_feeVault","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"},{"internalType":"address","name":"_openStoreLong","type":"address"},{"internalType":"address","name":"_closeStoreLong","type":"address"},{"internalType":"address","name":"_openStoreShort","type":"address"},{"internalType":"address","name":"_closeStoreShort","type":"address"},{"internalType":"address","name":"_addressProvider","type":"address"},{"internalType":"uint256","name":"_minSlippage","type":"uint256"},{"internalType":"uint256","name":"_maxSlippage","type":"uint256"},{"internalType":"uint256","name":"_minLeverage","type":"uint256"},{"internalType":"uint256","name":"_maxLeverage","type":"uint256"},{"internalType":"uint256","name":"_maxTradeAmount","type":"uint256"},{"internalType":"uint256","name":"_minPay","type":"uint256"},{"internalType":"uint256","name":"_minCollateral","type":"uint256"},{"internalType":"bool","name":"_allowOpen","type":"bool"},{"internalType":"bool","name":"_allowClose","type":"bool"},{"internalType":"uint256","name":"_tokenDigits","type":"uint256"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"}],"internalType":"struct MarketFactory.CreateInputs","name":"_inputs","type":"tuple"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct IMarketFactory.Props","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct IMarketFactory.Props[]","name":"_markets","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketsV2","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketFactory.Outs[]","name":"_outs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"markets","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"},{"internalType":"address","name":"_newMarketAddr","type":"address"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
// EXTERNAL MODULE: ./src/services/datasource/wallet/contracts/SolidityContract.ts + 7 modules
var SolidityContract = __webpack_require__(76935);
;// CONCATENATED MODULE: ./src/services/datasource/wallet/contracts/trade/MarketFactory.ts








var MarketFactory = /*#__PURE__*/function (_SolidityContract) {
  inherits_default()(MarketFactory, _SolidityContract);
  var _super = createSuper_default()(MarketFactory);
  function MarketFactory(library, chainId, address) {
    classCallCheck_default()(this, MarketFactory);
    return _super.call(this, library, chainId, MarketFactory_namespaceObject.Mt, address);
  }
  createClass_default()(MarketFactory, [{
    key: "getMarkets",
    value: function () {
      var _getMarkets = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var ms;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.call('getMarkets');
            case 2:
              ms = _context.sent;
              return _context.abrupt("return", ms);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getMarkets() {
        return _getMarkets.apply(this, arguments);
      }
      return getMarkets;
    }()
  }, {
    key: "getClassName",
    value: function getClassName() {
      return 'MarketFactory';
    }
  }]);
  return MarketFactory;
}(SolidityContract/* SolidityContract */.k);
// EXTERNAL MODULE: ./src/config/contracts.ts + 3 modules
var contracts = __webpack_require__(27960);
;// CONCATENATED MODULE: ./src/services/trade/chart/market.ts





var DEFAULT_MARKET = {
  name: 'BTC/USDT',
  address: '0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99'
};
var getMarkets = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(chainId, library) {
    var MarketFactoryAddress, factory, items;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          MarketFactoryAddress = (0,contracts/* getAddress */.K)(chainId, 'MarketFactory');
          factory = new MarketFactory(library, chainId, MarketFactoryAddress);
          _context.next = 4;
          return factory.getMarkets();
        case 4:
          _context.t0 = _context.sent.map(function (i) {
            return objectSpread2_default()(objectSpread2_default()({}, i), {}, {
              // @ts-ignore
              address: i.addr
            });
          });
          if (_context.t0) {
            _context.next = 7;
            break;
          }
          _context.t0 = [];
        case 7:
          items = _context.t0;
          //测试使用，没返回时，返回eth市场
          if (items.length == 0) {
            console.warn('failed to get markets');
            items.push(DEFAULT_MARKET);
          }
          return _context.abrupt("return", items);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getMarkets(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 92583:
/*!*****************************************!*\
  !*** ./src/assets/depx_select_icon.svg ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ SvgDepxSelectIcon; }
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

const SvgDepxSelectIcon = (props) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __spreadValues({ width: 32, height: 32, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { width: 32, height: 32, rx: 16, fill: "url(#depx_select_icon_svg__a)" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", { width: 32, height: 32, rx: 16, fill: "url(#depx_select_icon_svg__b)" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.05 5.95a1.2 1.2 0 0 1 1.2-1.2H16a11.22 11.22 0 0 1 8.248 3.6H11.05v-2.4Zm0 8.25h16.057a11.337 11.337 0 0 1 0 3.6H11.05v-3.6Zm0 9.45v2.4a1.2 1.2 0 0 0 1.2 1.2H16a11.22 11.22 0 0 0 8.248-3.6H11.05Z", fill: "#fff" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { opacity: 0.6, fillRule: "evenodd", clipRule: "evenodd", d: "M6.834 9.475a11.201 11.201 0 0 0-1.7 3.6h21.732a11.202 11.202 0 0 0-1.7-3.6H6.833Zm0 13.05a11.203 11.203 0 0 1-1.7-3.6h21.732a11.205 11.205 0 0 1-1.7 3.6H6.833Zm9.148 4.725h.035-.035Z", fill: "#fff" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", { id: "depx_select_icon_svg__a", x1: 0, y1: 0, x2: 39.172, y2: 10.86, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { stopColor: "#3CEAAA" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { offset: 0.771, stopColor: "#5C72FF" })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", { id: "depx_select_icon_svg__b", x1: 0, y1: 0, x2: 39.172, y2: 10.86, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { stopColor: "#3CEAAA" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", { offset: 0.771, stopColor: "#5C72FF" }))));

/* harmony default export */ __webpack_exports__["Z"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMDUgNS45NWExLjIgMS4yIDAgMCAxIDEuMi0xLjJIMTZhMTEuMjIgMTEuMjIgMCAwIDEgOC4yNDggMy42SDExLjA1di0yLjRabTAgOC4yNWgxNi4wNTdhMTEuMzM3IDExLjMzNyAwIDAgMSAwIDMuNkgxMS4wNXYtMy42Wm0wIDkuNDV2Mi40YTEuMiAxLjIgMCAwIDAgMS4yIDEuMkgxNmExMS4yMiAxMS4yMiAwIDAgMCA4LjI0OC0zLjZIMTEuMDVaIiBmaWxsPSIjZmZmIi8+PHBhdGggb3BhY2l0eT0iLjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi44MzQgOS40NzVhMTEuMjAxIDExLjIwMSAwIDAgMC0xLjcgMy42aDIxLjczMmExMS4yMDIgMTEuMjAyIDAgMCAwLTEuNy0zLjZINi44MzNabTAgMTMuMDVhMTEuMjAzIDExLjIwMyAwIDAgMS0xLjctMy42aDIxLjczMmExMS4yMDUgMTEuMjA1IDAgMCAxLTEuNyAzLjZINi44MzNabTkuMTQ4IDQuNzI1aC4wMzUtLjAzNVoiIGZpbGw9IiNmZmYiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMCIgeTE9IjAiIHgyPSIzOS4xNzIiIHkyPSIxMC44NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMzQ0VBQUEiLz48c3RvcCBvZmZzZXQ9Ii43NzEiIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");


/***/ })

}]);