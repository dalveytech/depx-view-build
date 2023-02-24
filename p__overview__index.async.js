"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[65],{

/***/ 93055:
/*!***************************************************!*\
  !*** ./src/pages/overview/index.tsx + 13 modules ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ overview; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(27424);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@web3-react/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(34713);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/swr/core/dist/index.mjs + 1 modules
var dist = __webpack_require__(59734);
;// CONCATENATED MODULE: ./src/services/datasource/thegraph/overview.ts
//
// summaries(where: {id: "total"}) {
//     openInterest
//     trades
//     tradingVolume
//   }
//    marketInfos(where: {period: total}) {
//     openInterest
//     trades
//     tradingVolume
//   }

var getTime = function getTime() {
  var to = new Date().getTime(); // now
  var from = to - 24 * 60 * 60 * 1000; // 24hrs before
  return {
    to: to,
    from: from
  };
};
var getSummaries = function getSummaries() {
  var to = new Date().getTime(); // now
  var from = to - 24 * 60 * 60 * 1000; // 24hrs before
  // console.log('to from', to, from)
  // const
  // 倒推 24 小时
  var data = [{
    openInterest: '223223000000',
    trades: '1000',
    tradingVolume: '223223000000'
  }];
  return data === null || data === void 0 ? void 0 : data[0];
};
var getMarketInfos = function getMarketInfos(marketName) {
  var _getTime = getTime(),
    to = _getTime.to,
    from = _getTime.from;
  // todo 传marketName to from
  // console.log('to,from', to, from)
  var data = [{
    name: 'ETH',
    openInterest: '223223000000',
    trades: '198243',
    tradingVolume: '223223000000',
    twentyFourHourChange: '234123423',
    key: 'Ethereum',
    coinName: 'ETH',
    marketName: 'Ethereum',
    logo: 'ETH'
  }];
  return data ? data : [];
};
// EXTERNAL MODULE: ./src/services/trade/chart/market.ts + 2 modules
var market = __webpack_require__(61641);
// EXTERNAL MODULE: ./src/lib/chains/index.ts
var chains = __webpack_require__(37432);
;// CONCATENATED MODULE: ./src/pages/overview/overview.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var overview_modulemodules = ({"overview":"overview___Eeiei","header":"header____Yrjj","title":"title___i6w1f","welcome":"welcome___Onf4q"});
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(70794);
;// CONCATENATED MODULE: ./src/assets/banner_logo.svg
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

const SvgBannerLogo = (props) => /* @__PURE__ */ react.createElement("svg", __spreadValues({ width: 415, height: 410, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("g", { filter: "url(#banner_logo_svg__a)", opacity: 0.16 }, /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M154.325 93.036c-.873-4.542 1.873-12.411 10.457-12.411l24.81 4.187c23.229 0 52.604 7.131 70.661 22.13l-4.193 4.187h-98.254l-3.481-18.093Zm11.709 60.857 4.191-4.177 115.338 4.177a89.773 89.773 0 0 1 3.598 13.158c.693 3.606 5.447 5.478 5.658 8.962-.858.921-3.475 3.538-4.193 4.196h-119.53l-5.062-26.316Zm13.29 69.08 3.481 18.093c.873 4.542 5.331 8.224 9.956 8.224h28.474c24.26 0 44.162-10.13 56.342-26.317l-94.057-4.166-4.196 4.166Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M154.325 93.036c-.873-4.542 1.873-12.411 10.457-12.411l24.81 4.187c23.229 0 52.604 7.131 70.661 22.13l-4.193 4.187h-98.254l-3.481-18.093Zm11.709 60.857 4.191-4.177 115.338 4.177a89.773 89.773 0 0 1 3.598 13.158c.693 3.606 5.447 5.478 5.658 8.962-.858.921-3.475 3.538-4.193 4.196h-119.53l-5.062-26.316Zm13.29 69.08 3.481 18.093c.873 4.542 5.331 8.224 9.956 8.224h28.474c24.26 0 44.162-10.13 56.342-26.317l-94.057-4.166-4.196 4.166Z", fill: "#000", fillOpacity: 0.2 }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m289.161 167.051.045.234-.09-.468.045.234Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m289.161 167.051.045.234-.09-.468.045.234Z", fill: "#000", fillOpacity: 0.2 }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m187.288 237.965-4.484 3.186c.874 4.542 5.331 8.224 9.957 8.224h28.474c24.259 0 44.161-10.129 56.341-26.316l-94.057-4.166 3.769 19.072Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m187.288 237.965-4.484 3.186c.874 4.542 5.331 8.224 9.957 8.224h28.474c24.259 0 44.161-10.129 56.341-26.316l-94.057-4.166 3.769 19.072Z", fill: "url(#banner_logo_svg__b)", fillOpacity: 0.4 }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.06 106.881c-.874-4.542-5.862-26.17 2.722-26.17l24.81 4.186c23.229 0 52.604 7.131 70.661 22.131l-4.194 4.186h-98.253l4.254-4.333Zm14.969 67.331-6.804-24.411 115.338 4.177a89.68 89.68 0 0 1 3.597 13.158c.694 3.606 5.447 5.478 5.659 8.962-.858.921-3.475 3.538-4.193 4.196h-119.53l5.933-6.082Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.06 106.881c-.874-4.542-5.862-26.17 2.722-26.17l24.81 4.186c23.229 0 52.604 7.131 70.661 22.131l-4.194 4.186h-98.253l4.254-4.333Zm14.969 67.331-6.804-24.411 115.338 4.177a89.68 89.68 0 0 1 3.597 13.158c.694 3.606 5.447 5.478 5.659 8.962-.858.921-3.475 3.538-4.193 4.196h-119.53l5.933-6.082Z", fill: "url(#banner_logo_svg__c)", fillOpacity: 0.4 }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m289.161 167.051.044.234-.09-.468.046.234Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m289.161 167.051.044.234-.09-.468.046.234Z", fill: "url(#banner_logo_svg__d)", fillOpacity: 0.4 }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M158.512 88.849c-.874-4.542 2.167-8.224 6.793-8.224h28.473c24.26 0 48.06 10.13 66.468 26.316h-98.253l-3.481-18.092Zm11.708 60.857h119.529a89.773 89.773 0 0 1 3.598 13.158 81.945 81.945 0 0 1 1.465 13.158H175.283l-5.063-26.316Zm13.29 69.08 3.481 18.093c.874 4.542 5.332 8.224 9.957 8.224h28.474c24.26 0 44.162-10.13 56.342-26.317H183.51Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m293.348 162.864.044.234-.09-.468.046.234Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("g", { opacity: 0.6, fillRule: "evenodd", clipRule: "evenodd" }, /* @__PURE__ */ react.createElement("path", { d: "M132.193 115.167c-4.194 7.856-6.819 16.741-7.595 26.315h161.777c-.894.906-3.407 3.419-4.187 4.187H120.411c.776-9.574 3.401-18.459 7.596-26.316l4.186-4.186Zm.634 69.081-4.189 4.185c4.461 9.575 10.504 18.459 17.722 26.317h136.459l.252-.245c.946-.916 3.306-3.201 3.935-3.943H150.547c-7.217-7.856-13.26-16.74-17.72-26.314Zm154.187 26.301-.006.011.001-.002.005-.009Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { d: "M132.193 115.167c-4.194 7.856-6.819 16.741-7.595 26.315h161.777c-.894.906-3.407 3.419-4.187 4.187H120.411c.776-9.574 3.401-18.459 7.596-26.316l4.186-4.186Zm.634 69.081-4.189 4.185c4.461 9.575 10.504 18.459 17.722 26.317h136.459l.252-.245c.946-.916 3.306-3.201 3.935-3.943H150.547c-7.217-7.856-13.26-16.74-17.72-26.314Zm154.187 26.301-.006.011.001-.002.005-.009Z", fill: "#000", fillOpacity: 0.2 })), /* @__PURE__ */ react.createElement("g", { opacity: 0.6, fillRule: "evenodd", clipRule: "evenodd" }, /* @__PURE__ */ react.createElement("path", { d: "m124.609 141.354-.011.128h161.777c-.894.906-3.407 3.419-4.187 4.187H120.411l4.171-4.223.027-.092Zm25.925 69.193-4.174 4.203h136.459l.252-.245c.946-.916 3.306-3.201 3.935-3.943H150.547l-.013-.015Zm136.474.013.006-.011-.005.009-.001.002Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { d: "m124.609 141.354-.011.128h161.777c-.894.906-3.407 3.419-4.187 4.187H120.411l4.171-4.223.027-.092Zm25.925 69.193-4.174 4.203h136.459l.252-.245c.946-.916 3.306-3.201 3.935-3.943H150.547l-.013-.015Zm136.474.013.006-.011-.005.009-.001.002Z", fill: "url(#banner_logo_svg__e)", fillOpacity: 0.4 })), /* @__PURE__ */ react.createElement("g", { opacity: 0.6 }, /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M132.194 115.165c-4.195 7.857-6.819 16.742-7.595 26.317h161.776c-4.46-9.575-10.503-18.46-17.721-26.317h-136.46Zm18.354 95.397c-7.218-7.857-13.262-16.742-17.722-26.316h161.777c-.777 9.574-3.401 18.459-7.596 26.316H150.548Z", fill: "#fff" }), /* @__PURE__ */ react.createElement("path", { d: "m275.725 123.699-112.095-8.534h105.024a108.13 108.13 0 0 1 7.071 8.534ZM293.433 192.566l-117.137-8.32h118.307a70.93 70.93 0 0 1-1.17 8.32Z", fill: "#1E1E1E", fillOpacity: 0.2 }))), /* @__PURE__ */ react.createElement("defs", null, /* @__PURE__ */ react.createElement("linearGradient", { id: "banner_logo_svg__b", x1: 231.673, y1: 218.807, x2: 248.455, y2: 255.64, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", { stopOpacity: 0.5 }), /* @__PURE__ */ react.createElement("stop", { offset: 0.127 }), /* @__PURE__ */ react.createElement("stop", { offset: 1, stopOpacity: 0.44 })), /* @__PURE__ */ react.createElement("linearGradient", { id: "banner_logo_svg__c", x1: 166.352, y1: 166.57, x2: 293.592, y2: 191.887, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", null), /* @__PURE__ */ react.createElement("stop", { offset: 1, stopOpacity: 0.44 })), /* @__PURE__ */ react.createElement("linearGradient", { id: "banner_logo_svg__d", x1: 166.352, y1: 166.57, x2: 293.592, y2: 191.887, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", null), /* @__PURE__ */ react.createElement("stop", { offset: 1, stopOpacity: 0.44 })), /* @__PURE__ */ react.createElement("linearGradient", { id: "banner_logo_svg__e", x1: 290.506, y1: 211.375, x2: 146.147, y2: 211.479, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", { stopOpacity: 0.62 }), /* @__PURE__ */ react.createElement("stop", { offset: 1 })), /* @__PURE__ */ react.createElement("filter", { id: "banner_logo_svg__a", x: 0.411, y: 0.625, width: 414.408, height: 408.75, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ react.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ react.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ react.createElement("feOffset", { dy: 40 }), /* @__PURE__ */ react.createElement("feGaussianBlur", { stdDeviation: 60 }), /* @__PURE__ */ react.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ react.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }), /* @__PURE__ */ react.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_2800_10941" }), /* @__PURE__ */ react.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_2800_10941", result: "shape" }))));

/* harmony default export */ var banner_logo = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDE1IiBoZWlnaHQ9IjQxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9Ii4xNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTQuMzI1IDkzLjAzNmMtLjg3My00LjU0MiAxLjg3My0xMi40MTEgMTAuNDU3LTEyLjQxMWwyNC44MSA0LjE4N2MyMy4yMjkgMCA1Mi42MDQgNy4xMzEgNzAuNjYxIDIyLjEzbC00LjE5MyA0LjE4N2gtOTguMjU0bC0zLjQ4MS0xOC4wOTNabTExLjcwOSA2MC44NTcgNC4xOTEtNC4xNzcgMTE1LjMzOCA0LjE3N2E4OS43NzMgODkuNzczIDAgMCAxIDMuNTk4IDEzLjE1OGMuNjkzIDMuNjA2IDUuNDQ3IDUuNDc4IDUuNjU4IDguOTYyLS44NTguOTIxLTMuNDc1IDMuNTM4LTQuMTkzIDQuMTk2aC0xMTkuNTNsLTUuMDYyLTI2LjMxNlptMTMuMjkgNjkuMDggMy40ODEgMTguMDkzYy44NzMgNC41NDIgNS4zMzEgOC4yMjQgOS45NTYgOC4yMjRoMjguNDc0YzI0LjI2IDAgNDQuMTYyLTEwLjEzIDU2LjM0Mi0yNi4zMTdsLTk0LjA1Ny00LjE2Ni00LjE5NiA0LjE2NloiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1NC4zMjUgOTMuMDM2Yy0uODczLTQuNTQyIDEuODczLTEyLjQxMSAxMC40NTctMTIuNDExbDI0LjgxIDQuMTg3YzIzLjIyOSAwIDUyLjYwNCA3LjEzMSA3MC42NjEgMjIuMTNsLTQuMTkzIDQuMTg3aC05OC4yNTRsLTMuNDgxLTE4LjA5M1ptMTEuNzA5IDYwLjg1NyA0LjE5MS00LjE3NyAxMTUuMzM4IDQuMTc3YTg5Ljc3MyA4OS43NzMgMCAwIDEgMy41OTggMTMuMTU4Yy42OTMgMy42MDYgNS40NDcgNS40NzggNS42NTggOC45NjItLjg1OC45MjEtMy40NzUgMy41MzgtNC4xOTMgNC4xOTZoLTExOS41M2wtNS4wNjItMjYuMzE2Wm0xMy4yOSA2OS4wOCAzLjQ4MSAxOC4wOTNjLjg3MyA0LjU0MiA1LjMzMSA4LjIyNCA5Ljk1NiA4LjIyNGgyOC40NzRjMjQuMjYgMCA0NC4xNjItMTAuMTMgNTYuMzQyLTI2LjMxN2wtOTQuMDU3LTQuMTY2LTQuMTk2IDQuMTY2WiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjg5LjE2MSAxNjcuMDUxLjA0NS4yMzQtLjA5LS40NjguMDQ1LjIzNFoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTI4OS4xNjEgMTY3LjA1MS4wNDUuMjM0LS4wOS0uNDY4LjA0NS4yMzRaIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xODcuMjg4IDIzNy45NjUtNC40ODQgMy4xODZjLjg3NCA0LjU0MiA1LjMzMSA4LjIyNCA5Ljk1NyA4LjIyNGgyOC40NzRjMjQuMjU5IDAgNDQuMTYxLTEwLjEyOSA1Ni4zNDEtMjYuMzE2bC05NC4wNTctNC4xNjYgMy43NjkgMTkuMDcyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTg3LjI4OCAyMzcuOTY1LTQuNDg0IDMuMTg2Yy44NzQgNC41NDIgNS4zMzEgOC4yMjQgOS45NTcgOC4yMjRoMjguNDc0YzI0LjI1OSAwIDQ0LjE2MS0xMC4xMjkgNTYuMzQxLTI2LjMxNmwtOTQuMDU3LTQuMTY2IDMuNzY5IDE5LjA3MloiIGZpbGw9InVybCgjYikiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2Mi4wNiAxMDYuODgxYy0uODc0LTQuNTQyLTUuODYyLTI2LjE3IDIuNzIyLTI2LjE3bDI0LjgxIDQuMTg2YzIzLjIyOSAwIDUyLjYwNCA3LjEzMSA3MC42NjEgMjIuMTMxbC00LjE5NCA0LjE4NmgtOTguMjUzbDQuMjU0LTQuMzMzWm0xNC45NjkgNjcuMzMxLTYuODA0LTI0LjQxMSAxMTUuMzM4IDQuMTc3YTg5LjY4IDg5LjY4IDAgMCAxIDMuNTk3IDEzLjE1OGMuNjk0IDMuNjA2IDUuNDQ3IDUuNDc4IDUuNjU5IDguOTYyLS44NTguOTIxLTMuNDc1IDMuNTM4LTQuMTkzIDQuMTk2aC0xMTkuNTNsNS45MzMtNi4wODJaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjIuMDYgMTA2Ljg4MWMtLjg3NC00LjU0Mi01Ljg2Mi0yNi4xNyAyLjcyMi0yNi4xN2wyNC44MSA0LjE4NmMyMy4yMjkgMCA1Mi42MDQgNy4xMzEgNzAuNjYxIDIyLjEzMWwtNC4xOTQgNC4xODZoLTk4LjI1M2w0LjI1NC00LjMzM1ptMTQuOTY5IDY3LjMzMS02LjgwNC0yNC40MTEgMTE1LjMzOCA0LjE3N2E4OS42OCA4OS42OCAwIDAgMSAzLjU5NyAxMy4xNThjLjY5NCAzLjYwNiA1LjQ0NyA1LjQ3OCA1LjY1OSA4Ljk2Mi0uODU4LjkyMS0zLjQ3NSAzLjUzOC00LjE5MyA0LjE5NmgtMTE5LjUzbDUuOTMzLTYuMDgyWiIgZmlsbD0idXJsKCNjKSIgZmlsbC1vcGFjaXR5PSIuNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjg5LjE2MSAxNjcuMDUxLjA0NC4yMzQtLjA5LS40NjguMDQ2LjIzNFoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0ibTI4OS4xNjEgMTY3LjA1MS4wNDQuMjM0LS4wOS0uNDY4LjA0Ni4yMzRaIiBmaWxsPSJ1cmwoI2QpIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTguNTEyIDg4Ljg0OWMtLjg3NC00LjU0MiAyLjE2Ny04LjIyNCA2Ljc5My04LjIyNGgyOC40NzNjMjQuMjYgMCA0OC4wNiAxMC4xMyA2Ni40NjggMjYuMzE2aC05OC4yNTNsLTMuNDgxLTE4LjA5MlptMTEuNzA4IDYwLjg1N2gxMTkuNTI5YTg5Ljc3MyA4OS43NzMgMCAwIDEgMy41OTggMTMuMTU4IDgxLjk0NSA4MS45NDUgMCAwIDEgMS40NjUgMTMuMTU4SDE3NS4yODNsLTUuMDYzLTI2LjMxNlptMTMuMjkgNjkuMDggMy40ODEgMTguMDkzYy44NzQgNC41NDIgNS4zMzIgOC4yMjQgOS45NTcgOC4yMjRoMjguNDc0YzI0LjI2IDAgNDQuMTYyLTEwLjEzIDU2LjM0Mi0yNi4zMTdIMTgzLjUxWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjkzLjM0OCAxNjIuODY0LjA0NC4yMzQtLjA5LS40NjguMDQ2LjIzNFoiIGZpbGw9IiNmZmYiLz48ZyBvcGFjaXR5PSIuNiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMzIuMTkzIDExNS4xNjdjLTQuMTk0IDcuODU2LTYuODE5IDE2Ljc0MS03LjU5NSAyNi4zMTVoMTYxLjc3N2MtLjg5NC45MDYtMy40MDcgMy40MTktNC4xODcgNC4xODdIMTIwLjQxMWMuNzc2LTkuNTc0IDMuNDAxLTE4LjQ1OSA3LjU5Ni0yNi4zMTZsNC4xODYtNC4xODZabS42MzQgNjkuMDgxLTQuMTg5IDQuMTg1YzQuNDYxIDkuNTc1IDEwLjUwNCAxOC40NTkgMTcuNzIyIDI2LjMxN2gxMzYuNDU5bC4yNTItLjI0NWMuOTQ2LS45MTYgMy4zMDYtMy4yMDEgMy45MzUtMy45NDNIMTUwLjU0N2MtNy4yMTctNy44NTYtMTMuMjYtMTYuNzQtMTcuNzItMjYuMzE0Wm0xNTQuMTg3IDI2LjMwMS0uMDA2LjAxMS4wMDEtLjAwMi4wMDUtLjAwOVoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTMyLjE5MyAxMTUuMTY3Yy00LjE5NCA3Ljg1Ni02LjgxOSAxNi43NDEtNy41OTUgMjYuMzE1aDE2MS43NzdjLS44OTQuOTA2LTMuNDA3IDMuNDE5LTQuMTg3IDQuMTg3SDEyMC40MTFjLjc3Ni05LjU3NCAzLjQwMS0xOC40NTkgNy41OTYtMjYuMzE2bDQuMTg2LTQuMTg2Wm0uNjM0IDY5LjA4MS00LjE4OSA0LjE4NWM0LjQ2MSA5LjU3NSAxMC41MDQgMTguNDU5IDE3LjcyMiAyNi4zMTdoMTM2LjQ1OWwuMjUyLS4yNDVjLjk0Ni0uOTE2IDMuMzA2LTMuMjAxIDMuOTM1LTMuOTQzSDE1MC41NDdjLTcuMjE3LTcuODU2LTEzLjI2LTE2Ljc0LTE3LjcyLTI2LjMxNFptMTU0LjE4NyAyNi4zMDEtLjAwNi4wMTEuMDAxLS4wMDIuMDA1LS4wMDlaIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9nPjxnIG9wYWNpdHk9Ii42IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTEyNC42MDkgMTQxLjM1NC0uMDExLjEyOGgxNjEuNzc3Yy0uODk0LjkwNi0zLjQwNyAzLjQxOS00LjE4NyA0LjE4N0gxMjAuNDExbDQuMTcxLTQuMjIzLjAyNy0uMDkyWm0yNS45MjUgNjkuMTkzLTQuMTc0IDQuMjAzaDEzNi40NTlsLjI1Mi0uMjQ1Yy45NDYtLjkxNiAzLjMwNi0zLjIwMSAzLjkzNS0zLjk0M0gxNTAuNTQ3bC0uMDEzLS4wMTVabTEzNi40NzQuMDEzLjAwNi0uMDExLS4wMDUuMDA5LS4wMDEuMDAyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0xMjQuNjA5IDE0MS4zNTQtLjAxMS4xMjhoMTYxLjc3N2MtLjg5NC45MDYtMy40MDcgMy40MTktNC4xODcgNC4xODdIMTIwLjQxMWw0LjE3MS00LjIyMy4wMjctLjA5MlptMjUuOTI1IDY5LjE5My00LjE3NCA0LjIwM2gxMzYuNDU5bC4yNTItLjI0NWMuOTQ2LS45MTYgMy4zMDYtMy4yMDEgMy45MzUtMy45NDNIMTUwLjU0N2wtLjAxMy0uMDE1Wm0xMzYuNDc0LjAxMy4wMDYtLjAxMS0uMDA1LjAwOS0uMDAxLjAwMloiIGZpbGw9InVybCgjZSkiIGZpbGwtb3BhY2l0eT0iLjQiLz48L2c+PGcgb3BhY2l0eT0iLjYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMyLjE5NCAxMTUuMTY1Yy00LjE5NSA3Ljg1Ny02LjgxOSAxNi43NDItNy41OTUgMjYuMzE3aDE2MS43NzZjLTQuNDYtOS41NzUtMTAuNTAzLTE4LjQ2LTE3LjcyMS0yNi4zMTdoLTEzNi40NlptMTguMzU0IDk1LjM5N2MtNy4yMTgtNy44NTctMTMuMjYyLTE2Ljc0Mi0xNy43MjItMjYuMzE2aDE2MS43NzdjLS43NzcgOS41NzQtMy40MDEgMTguNDU5LTcuNTk2IDI2LjMxNkgxNTAuNTQ4WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0yNzUuNzI1IDEyMy42OTktMTEyLjA5NS04LjUzNGgxMDUuMDI0YTEwOC4xMyAxMDguMTMgMCAwIDEgNy4wNzEgOC41MzRaTTI5My40MzMgMTkyLjU2NmwtMTE3LjEzNy04LjMyaDExOC4zMDdhNzAuOTMgNzAuOTMgMCAwIDEtMS4xNyA4LjMyWiIgZmlsbD0iIzFFMUUxRSIgZmlsbC1vcGFjaXR5PSIuMiIvPjwvZz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMjMxLjY3MyIgeTE9IjIxOC44MDciIHgyPSIyNDguNDU1IiB5Mj0iMjU1LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1vcGFjaXR5PSIuNSIvPjxzdG9wIG9mZnNldD0iLjEyNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIuNDQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjE2Ni4zNTIiIHkxPSIxNjYuNTciIHgyPSIyOTMuNTkyIiB5Mj0iMTkxLjg4NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjQ0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSIxNjYuMzUyIiB5MT0iMTY2LjU3IiB4Mj0iMjkzLjU5MiIgeTI9IjE5MS44ODciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcC8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii40NCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iMjkwLjUwNiIgeTE9IjIxMS4zNzUiIHgyPSIxNDYuMTQ3IiB5Mj0iMjExLjQ3OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3Atb3BhY2l0eT0iLjYyIi8+PHN0b3Agb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJhIiB4PSIuNDExIiB5PSIuNjI1IiB3aWR0aD0iNDE0LjQwOCIgaGVpZ2h0PSI0MDguNzUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHk9IjQwIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNjAiLz48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzI4MDBfMTA5NDEiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMjgwMF8xMDk0MSIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/pages/overview/ui/Banner/banner.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var banner_modulemodules = ({"banner":"banner___oOBkY","logo":"logo___lRdUn","statList":"statList___DgXJu","statInfo":"statInfo___rRaIr","title":"title___qD2Se","amount":"amount___oAiPx","desc":"desc___kJh0S"});
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86074);
;// CONCATENATED MODULE: ./src/pages/overview/ui/Banner/index.tsx





var StatInfo = function StatInfo(props) {
  var title = props.title,
    desc = props.desc,
    amount = props.amount;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: banner_modulemodules.statInfo,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: banner_modulemodules.title,
      children: title
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: banner_modulemodules.amount,
      children: ["$".concat((0,bignumber/* default */.Z)(amount).toFormat()), " "]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: banner_modulemodules.desc,
      children: [desc, " "]
    })]
  });
};
var Banner = function Banner(props) {
  var info = props.info;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: banner_modulemodules.banner,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SvgBannerLogo, {
      className: banner_modulemodules.logo
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: banner_modulemodules.statList,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StatInfo, {
        title: "Open Interest",
        amount: info === null || info === void 0 ? void 0 : info.openInterest,
        desc: "In open positions on DVX"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StatInfo, {
        title: "Trading Volume",
        amount: info === null || info === void 0 ? void 0 : info.tradingVolume,
        desc: "Exchanged in the last 24h"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StatInfo, {
        title: "Trades",
        amount: info === null || info === void 0 ? void 0 : info.trades,
        desc: "Executed in the last 24h"
      })]
    })]
  });
};
/* harmony default export */ var ui_Banner = (Banner);
// EXTERNAL MODULE: ./node_modules/rc-table/es/index.js + 45 modules
var es = __webpack_require__(28797);
// EXTERNAL MODULE: ./src/services/datasource/api/api.ts + 4 modules
var api = __webpack_require__(4175);
// EXTERNAL MODULE: ./src/assets/depx_select_icon.svg
var depx_select_icon = __webpack_require__(92583);
// EXTERNAL MODULE: ./src/lib/numbers.ts
var numbers = __webpack_require__(24069);
;// CONCATENATED MODULE: ./src/pages/overview/ui/MarketSituationTable/marketSituationTable.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var marketSituationTable_modulemodules = ({"table":"table___J3lm8","marketSituationPanel":"marketSituationPanel___l_1QO","coinNameBox":"coinNameBox___gX9IN","logo":"logo___G1bcn","coinName":"coinName___YSs6X","marketName":"marketName___aKkCt","up":"up___xF4SL","down":"down___M1zxR","options":"options___OoBW8","option":"option___CX6lJ","optionActive":"optionActive___vRCnI","tradeBtn":"tradeBtn___vTlXs"});
;// CONCATENATED MODULE: ./src/pages/overview/ui/MarketSituationTable/index.tsx









var LOGO_MAP = {
  ETH: depx_select_icon/* default */.Z
};
var MarketSituationTable_api = (0,api/* getApi */.a)();
var MarketSituationTable = function MarketSituationTable(props) {
  //
  var _useSWR = (0,dist/* default */.ZP)('ETHUSDT', {
      fetcher: MarketSituationTable_api.getIndexPrice,
      dedupingInterval: 1000,
      focusThrottleInterval: 1000 * 10
    }),
    data = _useSWR.data;
  var indexPrice = (data === null || data === void 0 ? void 0 : data.toFormat(2, 1)) || '0';
  var marketInfo = props.marketInfo;
  var columns = [{
    title: 'Market',
    dataIndex: 'coinName',
    key: 'coinName',
    render: function render(_, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: marketSituationTable_modulemodules.coinNameBox,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: marketSituationTable_modulemodules.logo,
          style: {
            backgroundImage: "url(".concat(LOGO_MAP[record.logo], ")")
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: marketSituationTable_modulemodules.coinName,
          children: record.coinName
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: marketSituationTable_modulemodules.marketName,
          children: record.marketName
        })]
      });
    }
  }, {
    title: 'Index Price',
    render: function render() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "$".concat(indexPrice)
      });
    }
  }, {
    title: '24h Change',
    dataIndex: 'twentyFourHourChange',
    key: 'twentyFourHourChange',
    render: function render(_, record) {
      var negative = record.twentyFourHourChange >= 0;
      if (negative) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: marketSituationTable_modulemodules.up,
          children: ["+", record.twentyFourHourChange, "%"]
        });
      }
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        className: marketSituationTable_modulemodules.down,
        children: [record.twentyFourHourChange, "%"]
      });
    }
  }, {
    title: '24h Trades',
    dataIndex: 'trades',
    key: 'trades',
    render: function render(value) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["$", (0,numbers/* formatAmount */.dN)(value, 2, 2, true)]
      });
    }
  }, {
    title: '24h Volumn',
    dataIndex: 'tradingVolume',
    key: 'tradingVolume',
    render: function render(value) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["$", (0,numbers/* formatAmount */.dN)(value, 2, 2, true)]
      });
    }
  }, {
    title: 'Open Interest',
    dataIndex: 'openInterest',
    key: 'openInterest',
    render: function render(value) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["$", (0,numbers/* formatAmount */.dN)(value, 2, 2, true)]
      });
    }
  }, {
    width: 120,
    title: '',
    render: function render() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: marketSituationTable_modulemodules.options,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: marketSituationTable_modulemodules.tradeBtn,
          children: "Trade"
        })
      });
    }
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: marketSituationTable_modulemodules.marketSituationPanel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.ZP, {
      emptyText: "No data",
      className: marketSituationTable_modulemodules.table,
      columns: columns,
      data: marketInfo
      // indexPrice={indexPrice}
    })
  });
};

/* harmony default export */ var ui_MarketSituationTable = (MarketSituationTable);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(38416);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/assets/arrow_circle.svg
var arrow_circle_defProp = Object.defineProperty;
var arrow_circle_getOwnPropSymbols = Object.getOwnPropertySymbols;
var arrow_circle_hasOwnProp = Object.prototype.hasOwnProperty;
var arrow_circle_propIsEnum = Object.prototype.propertyIsEnumerable;
var arrow_circle_defNormalProp = (obj, key, value) => key in obj ? arrow_circle_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var arrow_circle_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (arrow_circle_hasOwnProp.call(b, prop))
      arrow_circle_defNormalProp(a, prop, b[prop]);
  if (arrow_circle_getOwnPropSymbols)
    for (var prop of arrow_circle_getOwnPropSymbols(b)) {
      if (arrow_circle_propIsEnum.call(b, prop))
        arrow_circle_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrowCircle = (props) => /* @__PURE__ */ react.createElement("svg", arrow_circle_spreadValues({ width: 24, height: 24, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { d: "M22 11.975a10 10 0 1 0-20 .05 10 10 0 0 0 20-.05Zm-9.718 5.024a.894.894 0 0 1-.004-1.25l2.85-2.882-8.838.023a.875.875 0 1 1-.005-1.75l8.75-.023-2.775-2.761a.884.884 0 1 1 1.246-1.254l4.932 4.932-4.919 4.962a.873.873 0 0 1-1.237.003Z", fill: "#9597B5" }));

/* harmony default export */ var arrow_circle = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyIDExLjk3NWExMCAxMCAwIDEgMC0yMCAuMDUgMTAgMTAgMCAwIDAgMjAtLjA1Wm0tOS43MTggNS4wMjRhLjg5NC44OTQgMCAwIDEtLjAwNC0xLjI1bDIuODUtMi44ODItOC44MzguMDIzYS44NzUuODc1IDAgMSAxLS4wMDUtMS43NWw4Ljc1LS4wMjMtMi43NzUtMi43NjFhLjg4NC44ODQgMCAxIDEgMS4yNDYtMS4yNTRsNC45MzIgNC45MzItNC45MTkgNC45NjJhLjg3My44NzMgMCAwIDEtMS4yMzcuMDAzWiIgZmlsbD0iIzk1OTdCNSIvPjwvc3ZnPg==");

;// CONCATENATED MODULE: ./src/pages/overview/ui/Notification/notification.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var notification_modulemodules = ({"notification":"notification___jiAny","text":"text___AtxgG","right":"right___Q6nJV","step":"step___prJac","arrow":"arrow___Z8HIj","disable":"disable___I1h4k","arrowLeft":"arrowLeft___w4hf2"});
;// CONCATENATED MODULE: ./src/pages/overview/ui/Notification/index.tsx









var textList = ['Enjoy no trading fees on your first $100,000 in volume every month!', 'The weather is good today.', "It's a decentralized exchange", 'Long time no see. Have a good time', "Hi, it's being tested"];
var Notification = function Notification(props) {
  var _useState = (0,react.useState)(0),
    _useState2 = slicedToArray_default()(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  if (textList.length === 0) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
  function updateIndex(add) {
    if (add && index === textList.length - 1) {
      return;
    }
    if (!add && index === 0) {
      return;
    }
    setIndex(function (i) {
      return add ? i + 1 : i - 1;
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: notification_modulemodules.notification,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: notification_modulemodules.text,
      children: textList[index]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: notification_modulemodules.right,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SvgArrowCircle, {
        className: classnames_default()(notification_modulemodules.arrow, notification_modulemodules.arrowLeft, defineProperty_default()({}, notification_modulemodules.disable, index === 0)),
        onClick: function onClick() {
          return updateIndex();
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: notification_modulemodules.step,
        children: [index + 1, "/", textList.length]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgArrowCircle, {
        className: classnames_default()(notification_modulemodules.arrow, defineProperty_default()({}, notification_modulemodules.disable, index === textList.length - 1)),
        onClick: function onClick() {
          return updateIndex(true);
        }
      })]
    })]
  });
};
/* harmony default export */ var ui_Notification = (Notification);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 2 modules
var row = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(6226);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 7 modules
var _umi_production_exports = __webpack_require__(3410);
// EXTERNAL MODULE: ./src/assets/overview_statistical_icon1.svg
var overview_statistical_icon1 = __webpack_require__(79369);
// EXTERNAL MODULE: ./src/assets/overview_statistical_icon2.svg
var overview_statistical_icon2 = __webpack_require__(87755);
;// CONCATENATED MODULE: ./src/assets/overview_statistical_icon3.svg
var overview_statistical_icon3_defProp = Object.defineProperty;
var overview_statistical_icon3_getOwnPropSymbols = Object.getOwnPropertySymbols;
var overview_statistical_icon3_hasOwnProp = Object.prototype.hasOwnProperty;
var overview_statistical_icon3_propIsEnum = Object.prototype.propertyIsEnumerable;
var overview_statistical_icon3_defNormalProp = (obj, key, value) => key in obj ? overview_statistical_icon3_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var overview_statistical_icon3_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (overview_statistical_icon3_hasOwnProp.call(b, prop))
      overview_statistical_icon3_defNormalProp(a, prop, b[prop]);
  if (overview_statistical_icon3_getOwnPropSymbols)
    for (var prop of overview_statistical_icon3_getOwnPropSymbols(b)) {
      if (overview_statistical_icon3_propIsEnum.call(b, prop))
        overview_statistical_icon3_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgOverviewStatisticalIcon3 = (props) => /* @__PURE__ */ react.createElement("svg", overview_statistical_icon3_spreadValues({ width: 48, height: 48, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z", fill: "url(#overview_statistical_icon3_svg__a)" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "m18.437 18.44 5.056-1.85a1.48 1.48 0 0 1 .89-.04l.124.04 5.056 1.849c.256.094.48.256.645.47.165.212.264.466.287.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.231 6.231 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.356-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.546 3.546 0 0 1-1.381-1.285 3.714 3.714 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.98-.507.083-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.043.016h2.963l-.012-.006Z", fill: "url(#overview_statistical_icon3_svg__b)" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01a2.684 2.684 0 0 0-1.127.975 2.634 2.634 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.359 2.359 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.474 7.474 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.08-1.859-.178-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z", fill: "url(#overview_statistical_icon3_svg__c)" }), /* @__PURE__ */ react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.383 16.55a1.48 1.48 0 0 0-.89.04l-5.056 1.85-.11.045a1.434 1.434 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.231 6.231 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.388 1.388 0 0 0-.288-.734 1.442 1.442 0 0 0-.644-.469l-5.056-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.827.827 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z", fill: "#3CEAAA" }), /* @__PURE__ */ react.createElement("defs", null, /* @__PURE__ */ react.createElement("linearGradient", { id: "overview_statistical_icon3_svg__a", x1: 24, y1: 7.256, x2: 24, y2: 41.758, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", { stopColor: "#5C72FF" }), /* @__PURE__ */ react.createElement("stop", { offset: 0.411, stopColor: "#5C72FF", stopOpacity: 0.707 }), /* @__PURE__ */ react.createElement("stop", { offset: 1, stopColor: "#5C72FF", stopOpacity: 0.5 })), /* @__PURE__ */ react.createElement("linearGradient", { id: "overview_statistical_icon3_svg__b", x1: 24, y1: 9.934, x2: 24, y2: 37.066, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", { stopColor: "#5C72FF" }), /* @__PURE__ */ react.createElement("stop", { offset: 1, stopColor: "#5C72FF", stopOpacity: 0.7 })), /* @__PURE__ */ react.createElement("linearGradient", { id: "overview_statistical_icon3_svg__c", x1: 24, y1: 9.934, x2: 24, y2: 37.066, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ react.createElement("stop", { stopColor: "#5C72FF" }), /* @__PURE__ */ react.createElement("stop", { offset: 1, stopColor: "#5C72FF", stopOpacity: 0.7 }))));

/* harmony default export */ var overview_statistical_icon3 = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMjggOC4xNzJBNCA0IDAgMCAwIDM5LjUgN2gtMzFhNCA0IDAgMCAwLTQgNHYyNWE0IDQgMCAwIDAgNCA0aDJhMiAyIDAgMCAwIDQgMGgxOWEyIDIgMCAwIDAgNCAwaDJhNCA0IDAgMCAwIDQtNFYxMWE0IDQgMCAwIDAtMS4xNzItMi44MjhaTTkgOWEyLjUgMi41IDAgMCAwLTIuNSAyLjV2MjRBMi41IDIuNSAwIDAgMCA5IDM4aDMwYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtMjRBMi41IDIuNSAwIDAgMCAzOSA5SDlaIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im0xOC40MzcgMTguNDQgNS4wNTYtMS44NWExLjQ4IDEuNDggMCAwIDEgLjg5LS4wNGwuMTI0LjA0IDUuMDU2IDEuODQ5Yy4yNTYuMDk0LjQ4LjI1Ni42NDUuNDcuMTY1LjIxMi4yNjQuNDY2LjI4Ny43MzNsLjAwNS4xMTd2My43NzhhNi4yMjMgNi4yMjMgMCAwIDEtLjkxNSAzLjI0MiA2LjQzMiA2LjQzMiAwIDAgMS0yLjQ4NiAyLjMzbC0uMTkyLjA5OS0yLjQyMiAxLjE4YTEuMTA0IDEuMTA0IDAgMCAxLS44NjYuMDQ1bC0uMTA0LS4wNDUtMi40MjItMS4xODFhNi40NDcgNi40NDcgMCAwIDEtMi41NjUtMi4yNDggNi4yMzEgNi4yMzEgMCAwIDEtMS4wMjQtMy4yMTJsLS4wMDQtLjIxMXYtMy43NzdjMC0uMjY3LjA3OC0uNTI4LjIyNC0uNzU0LjE0Ni0uMjI1LjM1Ni0uNDA1LjYwMy0uNTJsLjExLS4wNDVabTUuODM2IDEuMTExIDIuNzIyIDEuMDU3YS43OC43OCAwIDAgMSAuMzQ4LjI2OC44MjIuODIyIDAgMCAxIC4xNTQuNDJsLjAwMy4wNjZ2Mi4xNTlhMy43MiAzLjcyIDAgMCAxLS40OTMgMS44NTMgMy41NTYgMy41NTYgMCAwIDEtMS4zMzggMS4zMzFsLS4xMDQuMDU3LTEuMzA0LjY3NGEuNTY4LjU2OCAwIDAgMS0uNDY2LjAyNmwtLjA1Ni0uMDI2LTEuMzA0LS42NzVhMy41NDYgMy41NDYgMCAwIDEtMS4zODEtMS4yODUgMy43MTQgMy43MTQgMCAwIDEtLjU1Mi0xLjgzNWwtLjAwMi0uMTJ2LTIuMTU5YzAtLjE1Mi4wNDItLjMwMS4xMi0uNDNhLjc4Ny43ODcgMCAwIDEgLjMyNS0uMjk3bC4zNDQuNzA1LjAwOC4wMjJoMS4yMmwtLjc2Ny4yOTh2MS44NWwuMDAyLjFjLjAxNS40MzIuMTQyLjg1LjM2NCAxLjIwOC4yMjQuMzYuNTM0LjY0Ny44OTMuODMzbC45OTEuNTEzLjk4LS41MDcuMDgzLS4wNDVjLjM1MS0uMTk5LjY1LS40OTUuODYtLjg2MWEyLjQ3IDIuNDcgMCAwIDAgLjMyNy0xLjIzVjIxLjY2bC0uNzY5LS4yOTloMS4xOThsLTEuMjEtLjAwNS0xLjQ2OS0uNTctMS40NC41Ni0xLjI3MS0uMDA2LS4wMDctLjAxOC0uMzM3LS42ODcuMDYtLjAyNyAyLjcyMi0xLjA1N2EuNzUzLjc1MyAwIDAgMSAuNDgtLjAyMmwuMDY2LjAyMlptMS4xOTYgMS44MDUtMi45MDgtLjAxLS4wNDMuMDE2aDIuOTYzbC0uMDEyLS4wMDZaIiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDEwYTEuNSAxLjUgMCAwIDAtMS41IDEuNXYyNEExLjUgMS41IDAgMCAwIDkgMzdoMzBhMS41IDEuNSAwIDAgMCAxLjUtMS41di0yNEExLjUgMS41IDAgMCAwIDM5IDEwSDlabTE0LjA2NCA1LjQxNi0uODIxLjMtNC4yNiAxLjU1OS0uMTU3LjA2NS0uMDIzLjAxYTIuNjg0IDIuNjg0IDAgMCAwLTEuMTI3Ljk3NSAyLjYzNCAyLjYzNCAwIDAgMC0uNDI2IDEuNDM0djMuNzg4bC4wMDQuMjMydi4wMWE3LjQ4IDcuNDggMCAwIDAgMS4yMyAzLjg1NiA3LjY5NyA3LjY5NyAwIDAgMCAzLjA2MSAyLjY4NWwyLjQ1IDEuMTk2LjE2NC4wNy4wMy4wMWEyLjM1OSAyLjM1OSAwIDAgMCAxLjg0My0uMDk0bDIuNDM0LTEuMTg2LjIxLS4xMDguMDA4LS4wMDRhNy42ODIgNy42ODIgMCAwIDAgMi45NjgtMi43ODQgNy40NzQgNy40NzQgMCAwIDAgMS4wOTgtMy44OTN2LTMuODA1bC0uMDA3LS4xNy0uMDAzLS4wMjdhMi42MzkgMi42MzkgMCAwIDAtLjU0NS0xLjM5MyAyLjY5MyAyLjY5MyAwIDAgMC0xLjIwMy0uODc3bC01LjA4LTEuODU5LS4xNzgtLjA1Ni0uMDI4LS4wMDdhMi43MjggMi43MjggMCAwIDAtMS42NDIuMDczWiIgZmlsbD0idXJsKCNjKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuMzgzIDE2LjU1YTEuNDggMS40OCAwIDAgMC0uODkuMDRsLTUuMDU2IDEuODUtLjExLjA0NWExLjQzNCAxLjQzNCAwIDAgMC0uNjAzLjUyIDEuMzg0IDEuMzg0IDAgMCAwLS4yMjQuNzU0djMuNzc3bC4wMDQuMjExYTYuMjMxIDYuMjMxIDAgMCAwIDEuMDI0IDMuMjEyIDYuNDQ3IDYuNDQ3IDAgMCAwIDIuNTY1IDIuMjQ4bDIuNDIyIDEuMTgxLjEwNC4wNDVhMS4xMDYgMS4xMDYgMCAwIDAgLjg2Ni0uMDQ1bDIuNDIyLTEuMTguMTkyLS4wOTlhNi40MzIgNi40MzIgMCAwIDAgMi40ODYtMi4zM2MuNTk5LS45OC45MTUtMi4xMDEuOTE1LTMuMjQydi0zLjc3OGwtLjAwNS0uMTE3YTEuMzg4IDEuMzg4IDAgMCAwLS4yODgtLjczNCAxLjQ0MiAxLjQ0MiAwIDAgMC0uNjQ0LS40NjlsLTUuMDU2LTEuODUtLjEyNC0uMDM5Wm0tLjE3NyAyLjk3OWEuNzUzLjc1MyAwIDAgMC0uNDc5LjAyMmwtMi43MjIgMS4wNTctLjA2LjAyN2EuNzg3Ljc4NyAwIDAgMC0uMzI0LjI5Ny44MjcuODI3IDAgMCAwLS4xMjEuNDN2Mi4xNTlsLjAwMi4xMmMuMDIuNjUyLjIxMiAxLjI4Ni41NTIgMS44MzUuMzQuNTUuODE3Ljk5MyAxLjM4IDEuMjg1bDEuMzA1LjY3NS4wNTYuMDI2YS41NjYuNTY2IDAgMCAwIC40NjYtLjAyNmwxLjMwNC0uNjc0LjEwNC0uMDU3YTMuNTU2IDMuNTU2IDAgMCAwIDEuMzM4LTEuMzMxYy4zMjMtLjU2LjQ5My0xLjIuNDkzLTEuODUzdi0yLjE1OWwtLjAwMy0uMDY3YS44MjIuODIyIDAgMCAwLS4xNTQtLjQxOS43OC43OCAwIDAgMC0uMzQ4LS4yNjhsLTIuNzIyLTEuMDU3LS4wNjctLjAyMloiIGZpbGw9IiMzQ0VBQUEiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIyNCIgeTE9IjcuMjU2IiB4Mj0iMjQiIHkyPSI0MS43NTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PHN0b3Agb2Zmc2V0PSIuNDExIiBzdG9wLWNvbG9yPSIjNUM3MkZGIiBzdG9wLW9wYWNpdHk9Ii43MDciLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1QzcyRkYiIHN0b3Atb3BhY2l0eT0iLjUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjI0IiB5MT0iOS45MzQiIHgyPSIyNCIgeTI9IjM3LjA2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1QzcyRkYiIHN0b3Atb3BhY2l0eT0iLjciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjI0IiB5MT0iOS45MzQiIHgyPSIyNCIgeTI9IjM3LjA2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM1QzcyRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1QzcyRkYiIHN0b3Atb3BhY2l0eT0iLjciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/pages/overview/ui/StatisticalDataGrid/statisticalDataGrid.module.scss?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var statisticalDataGrid_modulemodules = ({"statisticalDataGrid":"statisticalDataGrid___eZhQf","item":"item___bDuaw","btn":"btn___iPiGO","primary":"primary___pCrr1","text":"text___zIh8r","head":"head___phrnC","content":"content___zlm0M","footer":"footer___bvtie","icon":"icon___tWS5N"});
;// CONCATENATED MODULE: ./src/pages/overview/ui/StatisticalDataGrid/index.tsx









var StatisticalDataGrid = function StatisticalDataGrid() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
    className: statisticalDataGrid_modulemodules.StatisticalDataGrid,
    gutter: 24,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 8,
      className: statisticalDataGrid_modulemodules.gutterRow,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: statisticalDataGrid_modulemodules.item,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: statisticalDataGrid_modulemodules.head,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: statisticalDataGrid_modulemodules.text,
            children: "Up to 20%"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(overview_statistical_icon1/* ReactComponent */.r, {
            className: statisticalDataGrid_modulemodules.icon
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: statisticalDataGrid_modulemodules.content,
          children: "Stake USDC and earn rewadrs from fees generated on the DEI."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: statisticalDataGrid_modulemodules.footer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
            type: "button",
            className: "".concat(statisticalDataGrid_modulemodules.btn, " ").concat(statisticalDataGrid_modulemodules.primary),
            to: "/trade",
            children: "Earn"
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 8,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: statisticalDataGrid_modulemodules.item,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: statisticalDataGrid_modulemodules.head,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: statisticalDataGrid_modulemodules.text,
            children: "<0.10%"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(overview_statistical_icon2/* ReactComponent */.r, {
            className: statisticalDataGrid_modulemodules.icon
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: statisticalDataGrid_modulemodules.content,
          children: "Lowest transaction fees."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: statisticalDataGrid_modulemodules.footer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
            type: "button",
            className: statisticalDataGrid_modulemodules.btn,
            to: "#",
            children: "Learn More"
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
      span: 8,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: statisticalDataGrid_modulemodules.item,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: statisticalDataGrid_modulemodules.head,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: statisticalDataGrid_modulemodules.text,
            children: "1200+"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SvgOverviewStatisticalIcon3, {
            className: statisticalDataGrid_modulemodules.icon
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: statisticalDataGrid_modulemodules.content,
          children: "Trusted by over 12,00 traders."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: statisticalDataGrid_modulemodules.footer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports/* Link */.rU, {
            type: "button",
            className: statisticalDataGrid_modulemodules.btn,
            to: "#",
            children: "Learn More"
          })
        })]
      })
    })]
  });
};
/* harmony default export */ var ui_StatisticalDataGrid = (StatisticalDataGrid);
;// CONCATENATED MODULE: ./src/pages/overview/index.tsx














var Overview = function Overview() {
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    info = _useState2[0],
    setInfo = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    marketInfo = _useState4[0],
    settMarketInfo = _useState4[1];
  var _useChainId = (0,chains/* useChainId */.x)(),
    chainId = _useChainId.chainId;
  var _useWeb3React = (0,core_esm/* useWeb3React */.Ge)(),
    library = _useWeb3React.library;
  // const { setPendingTxns } = AppContext.useContainer()
  // const [orderOption, setOrderOption] = useState<string>(MARKET)
  // const [swapOption, setSwapOption] = useState<string>(LONG)

  var _useSWR = (0,dist/* default */.ZP)("".concat(chainId), function () {
      return (0,market/* getMarkets */.t)(chainId, library);
    }),
    markets = _useSWR.data;
  var query = function query(markets) {
    var data = getSummaries();
    var marketInfo = getMarketInfos(markets === null || markets === void 0 ? void 0 : markets.map(function (m) {
      return m.name;
    }));
    setInfo(data);
    settMarketInfo(marketInfo);
  };
  (0,react.useEffect)(function () {
    query(markets);
    var id = setInterval(query, 60 * 1000);
    return function () {
      return clearInterval(id);
    };
  }, [markets]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: overview_modulemodules.overview,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: overview_modulemodules.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: overview_modulemodules.title,
        children: "Hello\uFF01"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: overview_modulemodules.welcome,
        children: "Webcome back to Deepx Aritrum"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_Notification, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_Banner, {
      info: info
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_MarketSituationTable, {
      marketInfo: marketInfo
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ui_StatisticalDataGrid, {})]
  });
};
/* harmony default export */ var overview = (Overview);

/***/ })

}]);