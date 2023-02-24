"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[145],{

/***/ 48555:
/*!*****************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/index.js + 4 modules ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(34203);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(91033);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}
// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es/* default */.Z(onResize);
// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);
  var _super = (0,createSuper/* default */.Z)(DomWrapper);
  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/SingleObserver/index.js







function SingleObserver(props) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);
  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,ref/* supportRef */.Yr)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = react.useMemo(function () {
    return (0,ref/* composeRef */.sQ)(originRef, elementRef);
  }, [originRef, elementRef]);
  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;
  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;
      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);
  // Dynamic observe
  react.useEffect(function () {
    var currentElement = (0,findDOMNode/* default */.Z)(elementRef.current) || (0,findDOMNode/* default */.Z)(wrapperRef.current);
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';
function ResizeObserver(props) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,toArray/* default */.Z)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(SingleObserver, (0,esm_extends/* default */.Z)({}, props, {
      key: key
    }), child);
  });
}
ResizeObserver.Collection = Collection;
/* harmony default export */ var es = (ResizeObserver);

/***/ }),

/***/ 28797:
/*!********************************************************!*\
  !*** ./node_modules/rc-table/es/index.js + 45 modules ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ rc_table_es; }
});

// UNUSED EXPORTS: Column, ColumnGroup, EXPAND_COLUMN, INTERNAL_COL_DEFINE, Summary, genTable

;// CONCATENATED MODULE: ./node_modules/rc-table/es/constant.js
var EXPAND_COLUMN = {};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(91881);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react-dom/index.js
var react_dom = __webpack_require__(61254);
;// CONCATENATED MODULE: ./node_modules/@rc-component/context/es/context.js






function createContext(defaultValue) {
  var Context = /*#__PURE__*/react.createContext(undefined);

  var Provider = function Provider(_ref) {
    var value = _ref.value,
        children = _ref.children;
    var valueRef = react.useRef(value);
    valueRef.current = value;

    var _React$useState = react.useState(function () {
      return {
        getValue: function getValue() {
          return valueRef.current;
        },
        listeners: new Set()
      };
    }),
        _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 1),
        context = _React$useState2[0];

    (0,useLayoutEffect/* default */.Z)(function () {
      (0,react_dom.unstable_batchedUpdates)(function () {
        context.listeners.forEach(function (listener) {
          listener(value);
        });
      });
    }, [value]);
    return /*#__PURE__*/react.createElement(Context.Provider, {
      value: context
    }, children);
  };

  return {
    Context: Context,
    Provider: Provider,
    defaultValue: defaultValue
  };
}
/** e.g. useSelect(userContext) => user */

function useContext(holder, selector) {
  var eventSelector = (0,useEvent/* default */.Z)(typeof selector === 'function' ? selector : function (ctx) {
    if (selector === undefined) {
      return ctx;
    }

    if (!Array.isArray(selector)) {
      return ctx[selector];
    }

    var obj = {};
    selector.forEach(function (key) {
      obj[key] = ctx[key];
    });
    return obj;
  });
  var context = react.useContext(holder === null || holder === void 0 ? void 0 : holder.Context);

  var _ref2 = context || {},
      listeners = _ref2.listeners,
      getValue = _ref2.getValue;

  var valueRef = react.useRef();
  valueRef.current = eventSelector(context ? getValue() : holder === null || holder === void 0 ? void 0 : holder.defaultValue);

  var _React$useState3 = react.useState({}),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      forceUpdate = _React$useState4[1];

  (0,useLayoutEffect/* default */.Z)(function () {
    if (!context) {
      return;
    }

    function trigger(nextValue) {
      var nextSelectorValue = eventSelector(nextValue);

      if (!(0,isEqual/* default */.Z)(valueRef.current, nextSelectorValue, true)) {
        forceUpdate({});
      }
    }

    listeners.add(trigger);
    return function () {
      listeners.delete(trigger);
    };
  }, [context]);
  return valueRef.current;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
;// CONCATENATED MODULE: ./node_modules/@rc-component/context/es/Immutable.js



var ImmutableContext = /*#__PURE__*/react.createContext(0);

/**
 * Get render update mark by `makeImmutable` root.
 * Do not deps on the return value as render times
 * but only use for `useMemo` or `useCallback` deps.
 */
function useImmutableMark() {
  return react.useContext(ImmutableContext);
}
/**
 * Wrapped Component will be marked as Immutable.
 * When Component parent trigger render,
 * it will notice children component (use with `responseImmutable`) node that parent has updated.

 * @param Component Passed Component
 * @param triggerRender Customize trigger `responseImmutable` children re-render logic. Default will always trigger re-render when this component re-render.
 */

function makeImmutable(Component, shouldTriggerRender) {
  var refAble = (0,es_ref/* supportRef */.Yr)(Component);

  var ImmutableComponent = function ImmutableComponent(props, ref) {
    var refProps = refAble ? {
      ref: ref
    } : {};
    var renderTimesRef = react.useRef(0);
    var prevProps = react.useRef(props);

    if ( // Always trigger re-render if not provide `notTriggerRender`
    !shouldTriggerRender || shouldTriggerRender(prevProps.current, props)) {
      renderTimesRef.current += 1;
    }

    prevProps.current = props;
    return /*#__PURE__*/react.createElement(ImmutableContext.Provider, {
      value: renderTimesRef.current
    }, /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, props, refProps)));
  };

  if (false) {}

  return refAble ? /*#__PURE__*/react.forwardRef(ImmutableComponent) : ImmutableComponent;
}
/**
 * Wrapped Component with `React.memo`.
 * But will rerender when parent with `makeImmutable` rerender.
 */

function responseImmutable(Component, propsAreEqual) {
  var refAble = (0,es_ref/* supportRef */.Yr)(Component);

  var ImmutableComponent = function ImmutableComponent(props, ref) {
    var refProps = refAble ? {
      ref: ref
    } : {};
    useImmutableMark();
    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, props, refProps));
  };

  if (false) {}

  return refAble ? /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(ImmutableComponent), propsAreEqual) : /*#__PURE__*/react.memo(ImmutableComponent, propsAreEqual);
}
;// CONCATENATED MODULE: ./node_modules/@rc-component/context/es/index.js



;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/TableContext.js

var TableContext = createContext();
/* harmony default export */ var context_TableContext = (TableContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useRenderTimes.js
/* istanbul ignore file */


function useRenderTimes(props, debug) {
  // Render times
  var timesRef = react.useRef(0);
  timesRef.current += 1; // Props changed

  var propsRef = react.useRef(props);
  var keys = [];
  Object.keys(props || {}).map(function (key) {
    var _propsRef$current;

    if ((props === null || props === void 0 ? void 0 : props[key]) !== ((_propsRef$current = propsRef.current) === null || _propsRef$current === void 0 ? void 0 : _propsRef$current[key])) {
      keys.push(key);
    }
  });
  propsRef.current = props; // Cache keys since React rerender may cause it lost

  var keysRef = react.useRef([]);

  if (keys.length) {
    keysRef.current = keys;
  }

  react.useDebugValue(timesRef.current);
  react.useDebugValue(keysRef.current.join(', '));

  if (debug) {
    console.log("".concat(debug, ":"), timesRef.current, keysRef.current);
  }

  return timesRef.current;
}

/* harmony default export */ var hooks_useRenderTimes = ((/* unused pure expression or super */ null && ( false ? 0 : function () {})));
var RenderBlock = /*#__PURE__*/react.memo(function () {
  var times = useRenderTimes();
  return /*#__PURE__*/react.createElement("h1", null, "Render Times: ", times);
});
RenderBlock.displayName = 'RenderBlock';
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(56982);
// EXTERNAL MODULE: ./node_modules/rc-util/es/utils/get.js
var get = __webpack_require__(88306);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var es_warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/context/PerfContext.js

// TODO: Remove when use `responsiveImmutable`
var PerfContext = /*#__PURE__*/react.createContext({
  renderWithProps: false
});
/* harmony default export */ var context_PerfContext = (PerfContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/valueUtil.js
var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';

function toArray(arr) {
  if (arr === undefined || arr === null) {
    return [];
  }

  return Array.isArray(arr) ? arr : [arr];
}

function getColumnsKey(columns) {
  var columnKeys = [];
  var keys = {};
  columns.forEach(function (column) {
    var _ref = column || {},
        key = _ref.key,
        dataIndex = _ref.dataIndex;

    var mergedKey = key || toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;

    while (keys[mergedKey]) {
      mergedKey = "".concat(mergedKey, "_next");
    }

    keys[mergedKey] = true;
    columnKeys.push(mergedKey);
  });
  return columnKeys;
}
function validateValue(val) {
  return val !== null && val !== undefined;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Cell/useCellRender.js











function isRenderCell(data) {
  return data && (0,esm_typeof/* default */.Z)(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/react.isValidElement(data);
}

function useCellRender(record, dataIndex, renderIndex, children, render, shouldCellUpdate) {
  // TODO: Remove this after next major version
  var perfRecord = react.useContext(context_PerfContext);
  var mark = useImmutableMark(); // ======================== Render ========================

  var retData = (0,useMemo/* default */.Z)(function () {
    if (validateValue(children)) {
      return [children];
    }

    var path = dataIndex === null || dataIndex === undefined || dataIndex === '' ? [] : Array.isArray(dataIndex) ? dataIndex : [dataIndex];
    var value = (0,get/* default */.Z)(record, path); // Customize render node

    var returnChildNode = value;
    var returnCellProps = undefined;

    if (render) {
      var renderData = render(value, record, renderIndex);

      if (isRenderCell(renderData)) {
        if (false) {}

        returnChildNode = renderData.children;
        returnCellProps = renderData.props;
        perfRecord.renderWithProps = true;
      } else {
        returnChildNode = renderData;
      }
    }

    return [returnChildNode, returnCellProps];
  }, [// Force update deps
  mark, // Normal deps
  record, children, dataIndex, render, renderIndex], function (prev, next) {
    if (shouldCellUpdate) {
      var _prev = (0,slicedToArray/* default */.Z)(prev, 2),
          prevRecord = _prev[1];

      var _next = (0,slicedToArray/* default */.Z)(next, 2),
          nextRecord = _next[1];

      return shouldCellUpdate(nextRecord, prevRecord);
    } // Legacy mode should always update


    if (perfRecord.renderWithProps) {
      return true;
    }

    return !(0,isEqual/* default */.Z)(prev, next, true);
  });
  return retData;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Cell/useHoverState.js



/** Check if cell is in hover range */
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}

function useHoverState(rowIndex, rowSpan) {
  return useContext(context_TableContext, function (ctx) {
    var hovering = inHoverRange(rowIndex, rowSpan || 1, ctx.hoverStartRow, ctx.hoverEndRow);
    return [hovering, ctx.onHover];
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Cell/index.js













var getTitleFromCellRenderChildren = function getTitleFromCellRenderChildren(_ref) {
  var ellipsis = _ref.ellipsis,
      rowType = _ref.rowType,
      children = _ref.children;
  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;

  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof children === 'string' || typeof children === 'number') {
      title = children.toString();
    } else if ( /*#__PURE__*/react.isValidElement(children) && typeof children.props.children === 'string') {
      title = children.props.children;
    }
  }

  return title;
};

function Cell(props) {
  var _ref2, _ref3, _legacyCellProps$colS, _ref4, _ref5, _legacyCellProps$rowS, _additionalProps$titl, _classNames;

  if (false) {}

  var Component = props.component,
      children = props.children,
      ellipsis = props.ellipsis,
      scope = props.scope,
      prefixCls = props.prefixCls,
      className = props.className,
      align = props.align,
      record = props.record,
      render = props.render,
      dataIndex = props.dataIndex,
      renderIndex = props.renderIndex,
      shouldCellUpdate = props.shouldCellUpdate,
      index = props.index,
      rowType = props.rowType,
      colSpan = props.colSpan,
      rowSpan = props.rowSpan,
      fixLeft = props.fixLeft,
      fixRight = props.fixRight,
      firstFixLeft = props.firstFixLeft,
      lastFixLeft = props.lastFixLeft,
      firstFixRight = props.firstFixRight,
      lastFixRight = props.lastFixRight,
      appendNode = props.appendNode,
      _props$additionalProp = props.additionalProps,
      additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
      isSticky = props.isSticky;
  var cellPrefixCls = "".concat(prefixCls, "-cell");

  var _useContext = useContext(context_TableContext, ['supportSticky', 'allColumnsFixedLeft']),
      supportSticky = _useContext.supportSticky,
      allColumnsFixedLeft = _useContext.allColumnsFixedLeft; // ====================== Value =======================


  var _useCellRender = useCellRender(record, dataIndex, renderIndex, children, render, shouldCellUpdate),
      _useCellRender2 = (0,slicedToArray/* default */.Z)(_useCellRender, 2),
      childNode = _useCellRender2[0],
      legacyCellProps = _useCellRender2[1]; // ====================== Fixed =======================


  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number' && supportSticky;
  var isFixRight = typeof fixRight === 'number' && supportSticky;

  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }

  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  } // ================ RowSpan & ColSpan =================


  var mergedColSpan = (_ref2 = (_ref3 = (_legacyCellProps$colS = legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.colSpan) !== null && _legacyCellProps$colS !== void 0 ? _legacyCellProps$colS : colSpan) !== null && _ref3 !== void 0 ? _ref3 : additionalProps.colSpan) !== null && _ref2 !== void 0 ? _ref2 : 1;
  var mergedRowSpan = (_ref4 = (_ref5 = (_legacyCellProps$rowS = legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.rowSpan) !== null && _legacyCellProps$rowS !== void 0 ? _legacyCellProps$rowS : rowSpan) !== null && _ref5 !== void 0 ? _ref5 : additionalProps.rowSpan) !== null && _ref4 !== void 0 ? _ref4 : 1; // ====================== Hover =======================

  var _useHoverState = useHoverState(index, mergedRowSpan),
      _useHoverState2 = (0,slicedToArray/* default */.Z)(_useHoverState, 2),
      hovering = _useHoverState2[0],
      onHover = _useHoverState2[1];

  var onMouseEnter = function onMouseEnter(event) {
    var _additionalProps$onMo;

    if (record) {
      onHover(index, index + mergedRowSpan - 1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0 ? void 0 : _additionalProps$onMo.call(additionalProps, event);
  };

  var onMouseLeave = function onMouseLeave(event) {
    var _additionalProps$onMo2;

    if (record) {
      onHover(-1, -1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0 ? void 0 : _additionalProps$onMo2.call(additionalProps, event);
  }; // ====================== Render ======================


  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  } // >>>>> Title


  var title = (_additionalProps$titl = additionalProps.title) !== null && _additionalProps$titl !== void 0 ? _additionalProps$titl : getTitleFromCellRenderChildren({
    rowType: rowType,
    ellipsis: ellipsis,
    children: childNode
  }); // >>>>> ClassName

  var mergedClassName = classnames_default()(cellPrefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-left-all"), lastFixLeft && allColumnsFixedLeft && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), (0,defineProperty/* default */.Z)(_classNames, "".concat(cellPrefixCls, "-row-hover"), !legacyCellProps && hovering), _classNames), additionalProps.className, legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.className); // >>>>> Style

  var alignStyle = {};

  if (align) {
    alignStyle.textAlign = align;
  }

  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, additionalProps.style), alignStyle), fixedStyle), legacyCellProps === null || legacyCellProps === void 0 ? void 0 : legacyCellProps.style); // >>>>> Children Node


  var mergedChildNode = childNode; // Not crash if final `childNode` is not validate ReactNode

  if ((0,esm_typeof/* default */.Z)(mergedChildNode) === 'object' && !Array.isArray(mergedChildNode) && ! /*#__PURE__*/react.isValidElement(mergedChildNode)) {
    mergedChildNode = null;
  }

  if (ellipsis && (lastFixLeft || firstFixRight)) {
    mergedChildNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, mergedChildNode);
  }

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, legacyCellProps, additionalProps, {
    className: mergedClassName,
    style: mergedStyle // A11y
    ,
    title: title,
    scope: scope // Hover
    ,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave //Span
    ,
    colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null
  }), appendNode, mergedChildNode);
}

/* harmony default export */ var es_Cell = (/*#__PURE__*/react.memo(Cell));
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/fixUtil.js
function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction, curColumns) {
  var startColumn = columns[colStart] || {};
  var endColumn = columns[colEnd] || {};
  var fixLeft;
  var fixRight;

  if (startColumn.fixed === 'left') {
    fixLeft = stickyOffsets.left[colStart];
  } else if (endColumn.fixed === 'right') {
    fixRight = stickyOffsets.right[colEnd];
  }

  var lastFixLeft = false;
  var firstFixRight = false;
  var lastFixRight = false;
  var firstFixLeft = false;
  var nextColumn = columns[colEnd + 1];
  var prevColumn = columns[colStart - 1]; // no children only

  var canLastFix = !(curColumns !== null && curColumns !== void 0 && curColumns.children);

  if (direction === 'rtl') {
    if (fixLeft !== undefined) {
      var prevFixLeft = prevColumn && prevColumn.fixed === 'left';
      firstFixLeft = !prevFixLeft && canLastFix;
    } else if (fixRight !== undefined) {
      var nextFixRight = nextColumn && nextColumn.fixed === 'right';
      lastFixRight = !nextFixRight && canLastFix;
    }
  } else if (fixLeft !== undefined) {
    var nextFixLeft = nextColumn && nextColumn.fixed === 'left';
    lastFixLeft = !nextFixLeft && canLastFix;
  } else if (fixRight !== undefined) {
    var prevFixRight = prevColumn && prevColumn.fixed === 'right';
    firstFixRight = !prevFixRight && canLastFix;
  }

  return {
    fixLeft: fixLeft,
    fixRight: fixRight,
    lastFixLeft: lastFixLeft,
    firstFixRight: firstFixRight,
    lastFixRight: lastFixRight,
    firstFixLeft: firstFixLeft,
    isSticky: stickyOffsets.isSticky
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/SummaryContext.js

var SummaryContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var Footer_SummaryContext = (SummaryContext);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Cell.js







function SummaryCell(_ref) {
  var className = _ref.className,
      index = _ref.index,
      children = _ref.children,
      _ref$colSpan = _ref.colSpan,
      colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
      rowSpan = _ref.rowSpan,
      align = _ref.align;

  var _useContext = useContext(context_TableContext, ['prefixCls', 'direction']),
      prefixCls = _useContext.prefixCls,
      direction = _useContext.direction;

  var _React$useContext = react.useContext(Footer_SummaryContext),
      scrollColumnIndex = _React$useContext.scrollColumnIndex,
      stickyOffsets = _React$useContext.stickyOffsets,
      flattenColumns = _React$useContext.flattenColumns,
      columns = _React$useContext.columns;

  var lastIndex = index + colSpan - 1;
  var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
  var fixedInfo = getCellFixedInfo(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction, columns === null || columns === void 0 ? void 0 : columns[index]);
  return /*#__PURE__*/react.createElement(es_Cell, (0,esm_extends/* default */.Z)({
    className: className,
    index: index,
    component: "td",
    prefixCls: prefixCls,
    record: null,
    dataIndex: null,
    align: align,
    colSpan: mergedColSpan,
    rowSpan: rowSpan,
    render: function render() {
      return children;
    }
  }, fixedInfo));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Row.js

var _excluded = ["children"];

function FooterRow(_ref) {
  var children = _ref.children,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return /*#__PURE__*/react.createElement("tr", props, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/Summary.js



/**
 * Syntactic sugar. Do not support HOC.
 */
function Summary(_ref) {
  var children = _ref.children;
  return children;
}

Summary.Row = FooterRow;
Summary.Cell = SummaryCell;
/* harmony default export */ var Footer_Summary = (Summary);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Footer/index.js







function Footer(props) {
  if (false) {}

  var children = props.children,
      stickyOffsets = props.stickyOffsets,
      flattenColumns = props.flattenColumns,
      columns = props.columns;
  var prefixCls = useContext(context_TableContext, 'prefixCls');
  var lastColumnIndex = flattenColumns.length - 1;
  var scrollColumn = flattenColumns[lastColumnIndex];
  var summaryContext = react.useMemo(function () {
    return {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns,
      scrollColumnIndex: scrollColumn !== null && scrollColumn !== void 0 && scrollColumn.scrollbar ? lastColumnIndex : null,
      columns: columns
    };
  }, [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets, columns]);
  return /*#__PURE__*/react.createElement(Footer_SummaryContext.Provider, {
    value: summaryContext
  }, /*#__PURE__*/react.createElement("tfoot", {
    className: "".concat(prefixCls, "-summary")
  }, children));
}

/* harmony default export */ var es_Footer = (responseImmutable(Footer));
var FooterComponents = Footer_Summary;
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(48555);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/styleChecker.js

var isStyleNameSupport = function isStyleNameSupport(styleName) {
  if ((0,canUseDom/* default */.Z)() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,objectSpread2/* default */.Z)({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useFlattenRecords.js



// recursion (flat tree structure)
function flatRecord(record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
  var arr = [];
  arr.push({
    record: record,
    indent: indent,
    index: index
  });
  var key = getRowKey(record);
  var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);

  if (record && Array.isArray(record[childrenColumnName]) && expanded) {
    // expanded state, flat record
    for (var i = 0; i < record[childrenColumnName].length; i += 1) {
      var tempArr = flatRecord(record[childrenColumnName][i], indent + 1, childrenColumnName, expandedKeys, getRowKey, i);
      arr.push.apply(arr, (0,toConsumableArray/* default */.Z)(tempArr));
    }
  }

  return arr;
}
/**
 * flat tree data on expanded state
 *
 * @export
 * @template T
 * @param {*} data : table data
 * @param {string} childrenColumnName : 指定树形结构的列名
 * @param {Set<Key>} expandedKeys : 展开的行对应的keys
 * @param {GetRowKey<T>} getRowKey  : 获取当前rowKey的方法
 * @returns flattened data
 */


function useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey) {
  var arr = react.useMemo(function () {
    if (expandedKeys !== null && expandedKeys !== void 0 && expandedKeys.size) {
      var temp = []; // collect flattened record

      for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
        var record = data[i];
        temp.push.apply(temp, (0,toConsumableArray/* default */.Z)(flatRecord(record, 0, childrenColumnName, expandedKeys, getRowKey, i)));
      }

      return temp;
    }

    return data === null || data === void 0 ? void 0 : data.map(function (item, index) {
      return {
        record: item,
        indent: 0,
        index: index
      };
    });
  }, [data, childrenColumnName, expandedKeys, getRowKey]);
  return arr;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/ExpandedRow.js






function ExpandedRow(props) {
  if (false) {}

  var prefixCls = props.prefixCls,
      children = props.children,
      Component = props.component,
      cellComponent = props.cellComponent,
      className = props.className,
      expanded = props.expanded,
      colSpan = props.colSpan,
      isEmpty = props.isEmpty;

  var _useContext = useContext(context_TableContext, ['scrollbarSize', 'fixHeader', 'fixColumn', 'componentWidth', 'horizonScroll']),
      scrollbarSize = _useContext.scrollbarSize,
      fixHeader = _useContext.fixHeader,
      fixColumn = _useContext.fixColumn,
      componentWidth = _useContext.componentWidth,
      horizonScroll = _useContext.horizonScroll; // Cache render node


  var contentNode = children;

  if (isEmpty ? horizonScroll : fixColumn) {
    contentNode = /*#__PURE__*/react.createElement("div", {
      style: {
        width: componentWidth - (fixHeader ? scrollbarSize : 0),
        position: 'sticky',
        left: 0,
        overflow: 'hidden'
      },
      className: "".concat(prefixCls, "-expanded-row-fixed")
    }, componentWidth !== 0 && contentNode);
  }

  return /*#__PURE__*/react.createElement(Component, {
    className: className,
    style: {
      display: expanded ? null : 'none'
    }
  }, /*#__PURE__*/react.createElement(es_Cell, {
    component: cellComponent,
    prefixCls: prefixCls,
    colSpan: colSpan
  }, contentNode));
}

/* harmony default export */ var Body_ExpandedRow = (ExpandedRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/BodyRow.js












function BodyRow(props) {
  if (false) {}

  var className = props.className,
      style = props.style,
      record = props.record,
      index = props.index,
      renderIndex = props.renderIndex,
      rowKey = props.rowKey,
      rowExpandable = props.rowExpandable,
      expandedKeys = props.expandedKeys,
      onRow = props.onRow,
      _props$indent = props.indent,
      indent = _props$indent === void 0 ? 0 : _props$indent,
      RowComponent = props.rowComponent,
      cellComponent = props.cellComponent,
      scopeCellComponent = props.scopeCellComponent,
      childrenColumnName = props.childrenColumnName;

  var _useContext = useContext(context_TableContext, ['prefixCls', 'fixedInfoList', 'flattenColumns', 'expandableType', 'expandRowByClick', 'onTriggerExpand', 'rowClassName', 'expandedRowClassName', 'indentSize', 'expandIcon', 'expandedRowRender', 'expandIconColumnIndex']),
      prefixCls = _useContext.prefixCls,
      fixedInfoList = _useContext.fixedInfoList,
      flattenColumns = _useContext.flattenColumns,
      expandableType = _useContext.expandableType,
      expandRowByClick = _useContext.expandRowByClick,
      onTriggerExpand = _useContext.onTriggerExpand,
      rowClassName = _useContext.rowClassName,
      expandedRowClassName = _useContext.expandedRowClassName,
      indentSize = _useContext.indentSize,
      expandIcon = _useContext.expandIcon,
      expandedRowRender = _useContext.expandedRowRender,
      expandIconColumnIndex = _useContext.expandIconColumnIndex;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      expandRended = _React$useState2[0],
      setExpandRended = _React$useState2[1];

  if (false) {}

  var expanded = expandedKeys && expandedKeys.has(rowKey);
  react.useEffect(function () {
    if (expanded) {
      setExpandRended(true);
    }
  }, [expanded]);
  var rowSupportExpand = expandableType === 'row' && (!rowExpandable || rowExpandable(record)); // Only when row is not expandable and `children` exist in record

  var nestExpandable = expandableType === 'nest';
  var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
  var mergedExpandable = rowSupportExpand || nestExpandable; // ======================== Expandable =========================

  var onExpandRef = react.useRef(onTriggerExpand);
  onExpandRef.current = onTriggerExpand;

  var onInternalTriggerExpand = function onInternalTriggerExpand() {
    onExpandRef.current.apply(onExpandRef, arguments);
  }; // =========================== onRow ===========================


  var additionalProps = onRow === null || onRow === void 0 ? void 0 : onRow(record, index);

  var onClick = function onClick(event) {
    var _additionalProps$onCl;

    if (expandRowByClick && mergedExpandable) {
      onInternalTriggerExpand(record, event);
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onCl = additionalProps.onClick) === null || _additionalProps$onCl === void 0 ? void 0 : _additionalProps$onCl.call.apply(_additionalProps$onCl, [additionalProps, event].concat(args));
  }; // ======================== Base tr row ========================


  var computeRowClassName;

  if (typeof rowClassName === 'string') {
    computeRowClassName = rowClassName;
  } else if (typeof rowClassName === 'function') {
    computeRowClassName = rowClassName(record, index, indent);
  }

  var columnsKey = getColumnsKey(flattenColumns);
  var baseRowNode = /*#__PURE__*/react.createElement(RowComponent, (0,esm_extends/* default */.Z)({}, additionalProps, {
    "data-row-key": rowKey,
    className: classnames_default()(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName, additionalProps && additionalProps.className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), additionalProps ? additionalProps.style : null),
    onClick: onClick
  }), flattenColumns.map(function (column, colIndex) {
    var render = column.render,
        dataIndex = column.dataIndex,
        columnClassName = column.className;
    var key = columnsKey[colIndex];
    var fixedInfo = fixedInfoList[colIndex]; // ============= Used for nest expandable =============

    var appendCellNode;

    if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
      appendCellNode = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
        style: {
          paddingLeft: "".concat(indentSize * indent, "px")
        },
        className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
      }), expandIcon({
        prefixCls: prefixCls,
        expanded: expanded,
        expandable: hasNestChildren,
        record: record,
        onExpand: onInternalTriggerExpand
      }));
    }

    var additionalCellProps;

    if (column.onCell) {
      additionalCellProps = column.onCell(record, index);
    }

    return /*#__PURE__*/react.createElement(es_Cell, (0,esm_extends/* default */.Z)({
      className: columnClassName,
      ellipsis: column.ellipsis,
      align: column.align,
      scope: column.rowScope,
      component: column.rowScope ? scopeCellComponent : cellComponent,
      prefixCls: prefixCls,
      key: key,
      record: record,
      index: index,
      renderIndex: renderIndex,
      dataIndex: dataIndex,
      render: render,
      shouldCellUpdate: column.shouldCellUpdate,
      expanded: appendCellNode && expanded
    }, fixedInfo, {
      appendNode: appendCellNode,
      additionalProps: additionalCellProps
    }));
  })); // ======================== Expand Row =========================

  var expandRowNode;

  if (rowSupportExpand && (expandRended || expanded)) {
    var expandContent = expandedRowRender(record, index, indent + 1, expanded);
    var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
    expandRowNode = /*#__PURE__*/react.createElement(Body_ExpandedRow, {
      expanded: expanded,
      className: classnames_default()("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
      prefixCls: prefixCls,
      component: RowComponent,
      cellComponent: cellComponent,
      colSpan: flattenColumns.length,
      isEmpty: false
    }, expandContent);
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, baseRowNode, expandRowNode);
}

BodyRow.displayName = 'BodyRow';
/* harmony default export */ var Body_BodyRow = (responseImmutable(BodyRow));
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/MeasureCell.js


function MeasureCell(_ref) {
  var columnKey = _ref.columnKey,
      onColumnResize = _ref.onColumnResize;
  var cellRef = react.useRef();
  react.useEffect(function () {
    if (cellRef.current) {
      onColumnResize(columnKey, cellRef.current.offsetWidth);
    }
  }, []);
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    data: columnKey
  }, /*#__PURE__*/react.createElement("td", {
    ref: cellRef,
    style: {
      padding: 0,
      border: 0,
      height: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      height: 0,
      overflow: 'hidden'
    }
  }, "\xA0")));
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/MeasureRow.js



function MeasureRow(_ref) {
  var prefixCls = _ref.prefixCls,
      columnsKey = _ref.columnsKey,
      onColumnResize = _ref.onColumnResize;
  return /*#__PURE__*/react.createElement("tr", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-measure-row"),
    style: {
      height: 0,
      fontSize: 0
    }
  }, /*#__PURE__*/react.createElement(es/* default.Collection */.Z.Collection, {
    onBatchResize: function onBatchResize(infoList) {
      infoList.forEach(function (_ref2) {
        var columnKey = _ref2.data,
            size = _ref2.size;
        onColumnResize(columnKey, size.offsetWidth);
      });
    }
  }, columnsKey.map(function (columnKey) {
    return /*#__PURE__*/react.createElement(MeasureCell, {
      key: columnKey,
      columnKey: columnKey,
      onColumnResize: onColumnResize
    });
  })));
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Body/index.js











function Body(props) {
  if (false) {}

  var data = props.data,
      getRowKey = props.getRowKey,
      measureColumnWidth = props.measureColumnWidth,
      expandedKeys = props.expandedKeys,
      onRow = props.onRow,
      rowExpandable = props.rowExpandable,
      emptyNode = props.emptyNode,
      childrenColumnName = props.childrenColumnName;

  var _useContext = useContext(context_TableContext, ['prefixCls', 'getComponent', 'onColumnResize', 'flattenColumns']),
      prefixCls = _useContext.prefixCls,
      getComponent = _useContext.getComponent,
      onColumnResize = _useContext.onColumnResize,
      flattenColumns = _useContext.flattenColumns;

  var flattenData = useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey); // =================== Performance ====================

  var perfRef = react.useRef({
    renderWithProps: false
  }); // ====================== Render ======================

  var WrapperComponent = getComponent(['body', 'wrapper'], 'tbody');
  var trComponent = getComponent(['body', 'row'], 'tr');
  var tdComponent = getComponent(['body', 'cell'], 'td');
  var thComponent = getComponent(['body', 'cell'], 'th');
  var rows;

  if (data.length) {
    rows = flattenData.map(function (item, idx) {
      var record = item.record,
          indent = item.indent,
          renderIndex = item.index;
      var key = getRowKey(record, idx);
      return /*#__PURE__*/react.createElement(Body_BodyRow, {
        key: key,
        rowKey: key,
        record: record,
        index: idx,
        renderIndex: renderIndex,
        rowComponent: trComponent,
        cellComponent: tdComponent,
        scopeCellComponent: thComponent,
        expandedKeys: expandedKeys,
        onRow: onRow,
        getRowKey: getRowKey,
        rowExpandable: rowExpandable,
        childrenColumnName: childrenColumnName,
        indent: indent
      });
    });
  } else {
    rows = /*#__PURE__*/react.createElement(Body_ExpandedRow, {
      expanded: true,
      className: "".concat(prefixCls, "-placeholder"),
      prefixCls: prefixCls,
      component: trComponent,
      cellComponent: tdComponent,
      colSpan: flattenColumns.length,
      isEmpty: true
    }, emptyNode);
  }

  var columnsKey = getColumnsKey(flattenColumns);
  return /*#__PURE__*/react.createElement(context_PerfContext.Provider, {
    value: perfRef.current
  }, /*#__PURE__*/react.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-tbody")
  }, measureColumnWidth && /*#__PURE__*/react.createElement(MeasureRow, {
    prefixCls: prefixCls,
    columnsKey: columnsKey,
    onColumnResize: onColumnResize
  }), rows));
}

Body.displayName = 'Body';
/* harmony default export */ var es_Body = (responseImmutable(Body));
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/legacyUtil.js


var legacyUtil_excluded = ["expandable"];

var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
function getExpandableProps(props) {
  var expandable = props.expandable,
      legacyExpandableConfig = (0,objectWithoutProperties/* default */.Z)(props, legacyUtil_excluded);

  var config;

  if ('expandable' in props) {
    config = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, legacyExpandableConfig), expandable);
  } else {
    if (false) {}

    config = legacyExpandableConfig;
  }

  if (config.showExpandColumn === false) {
    config.expandIconColumnIndex = -1;
  }

  return config;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/ColGroup.js


var ColGroup_excluded = ["columnType"];



function ColGroup(_ref) {
  var colWidths = _ref.colWidths,
      columns = _ref.columns,
      columCount = _ref.columCount;
  var cols = [];
  var len = columCount || columns.length; // Only insert col with width & additional props
  // Skip if rest col do not have any useful info

  var mustInsert = false;

  for (var i = len - 1; i >= 0; i -= 1) {
    var width = colWidths[i];
    var column = columns && columns[i];
    var additionalProps = column && column[INTERNAL_COL_DEFINE];

    if (width || additionalProps || mustInsert) {
      var _ref2 = additionalProps || {},
          columnType = _ref2.columnType,
          restAdditionalProps = (0,objectWithoutProperties/* default */.Z)(_ref2, ColGroup_excluded);

      cols.unshift( /*#__PURE__*/react.createElement("col", (0,esm_extends/* default */.Z)({
        key: i,
        style: {
          width: width
        }
      }, restAdditionalProps)));
      mustInsert = true;
    }
  }

  return /*#__PURE__*/react.createElement("colgroup", null, cols);
}

/* harmony default export */ var es_ColGroup = (ColGroup);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/FixedHolder/index.js




var FixedHolder_excluded = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];









function useColumnWidth(colWidths, columCount) {
  return (0,react.useMemo)(function () {
    var cloneColumns = [];

    for (var i = 0; i < columCount; i += 1) {
      var val = colWidths[i];

      if (val !== undefined) {
        cloneColumns[i] = val;
      } else {
        return null;
      }
    }

    return cloneColumns;
  }, [colWidths.join('_'), columCount]);
}

var FixedHolder = /*#__PURE__*/react.forwardRef(function (props, ref) {
  if (false) {}

  var className = props.className,
      noData = props.noData,
      columns = props.columns,
      flattenColumns = props.flattenColumns,
      colWidths = props.colWidths,
      columCount = props.columCount,
      stickyOffsets = props.stickyOffsets,
      direction = props.direction,
      fixHeader = props.fixHeader,
      stickyTopOffset = props.stickyTopOffset,
      stickyBottomOffset = props.stickyBottomOffset,
      stickyClassName = props.stickyClassName,
      onScroll = props.onScroll,
      maxContentScroll = props.maxContentScroll,
      children = props.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, FixedHolder_excluded);

  var _useContext = useContext(context_TableContext, ['prefixCls', 'scrollbarSize', 'isSticky']),
      prefixCls = _useContext.prefixCls,
      scrollbarSize = _useContext.scrollbarSize,
      isSticky = _useContext.isSticky;

  var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize; // Pass wheel to scroll event

  var scrollRef = react.useRef(null);
  var setScrollRef = react.useCallback(function (element) {
    (0,es_ref/* fillRef */.mH)(ref, element);
    (0,es_ref/* fillRef */.mH)(scrollRef, element);
  }, []);
  react.useEffect(function () {
    var _scrollRef$current;

    function onWheel(e) {
      var _ref = e,
          currentTarget = _ref.currentTarget,
          deltaX = _ref.deltaX;

      if (deltaX) {
        onScroll({
          currentTarget: currentTarget,
          scrollLeft: currentTarget.scrollLeft + deltaX
        });
        e.preventDefault();
      }
    }

    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.addEventListener('wheel', onWheel);
    return function () {
      var _scrollRef$current2;

      (_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 ? void 0 : _scrollRef$current2.removeEventListener('wheel', onWheel);
    };
  }, []); // Check if all flattenColumns has width

  var allFlattenColumnsWithWidth = react.useMemo(function () {
    return flattenColumns.every(function (column) {
      return column.width >= 0;
    });
  }, [flattenColumns]); // Add scrollbar column

  var lastColumn = flattenColumns[flattenColumns.length - 1];
  var ScrollBarColumn = {
    fixed: lastColumn ? lastColumn.fixed : null,
    scrollbar: true,
    onHeaderCell: function onHeaderCell() {
      return {
        className: "".concat(prefixCls, "-cell-scrollbar")
      };
    }
  };
  var columnsWithScrollbar = (0,react.useMemo)(function () {
    return combinationScrollBarSize ? [].concat((0,toConsumableArray/* default */.Z)(columns), [ScrollBarColumn]) : columns;
  }, [combinationScrollBarSize, columns]);
  var flattenColumnsWithScrollbar = (0,react.useMemo)(function () {
    return combinationScrollBarSize ? [].concat((0,toConsumableArray/* default */.Z)(flattenColumns), [ScrollBarColumn]) : flattenColumns;
  }, [combinationScrollBarSize, flattenColumns]); // Calculate the sticky offsets

  var headerStickyOffsets = (0,react.useMemo)(function () {
    var right = stickyOffsets.right,
        left = stickyOffsets.left;
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, stickyOffsets), {}, {
      left: direction === 'rtl' ? [].concat((0,toConsumableArray/* default */.Z)(left.map(function (width) {
        return width + combinationScrollBarSize;
      })), [0]) : left,
      right: direction === 'rtl' ? right : [].concat((0,toConsumableArray/* default */.Z)(right.map(function (width) {
        return width + combinationScrollBarSize;
      })), [0]),
      isSticky: isSticky
    });
  }, [combinationScrollBarSize, stickyOffsets, isSticky]);
  var mergedColumnWidth = useColumnWidth(colWidths, columCount);
  return /*#__PURE__*/react.createElement("div", {
    style: (0,objectSpread2/* default */.Z)({
      overflow: 'hidden'
    }, isSticky ? {
      top: stickyTopOffset,
      bottom: stickyBottomOffset
    } : {}),
    ref: setScrollRef,
    className: classnames_default()(className, (0,defineProperty/* default */.Z)({}, stickyClassName, !!stickyClassName))
  }, /*#__PURE__*/react.createElement("table", {
    style: {
      tableLayout: 'fixed',
      visibility: noData || mergedColumnWidth ? null : 'hidden'
    }
  }, (!noData || !maxContentScroll || allFlattenColumnsWithWidth) && /*#__PURE__*/react.createElement(es_ColGroup, {
    colWidths: mergedColumnWidth ? [].concat((0,toConsumableArray/* default */.Z)(mergedColumnWidth), [combinationScrollBarSize]) : [],
    columCount: columCount + 1,
    columns: flattenColumnsWithScrollbar
  }), children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, restProps), {}, {
    stickyOffsets: headerStickyOffsets,
    columns: columnsWithScrollbar,
    flattenColumns: flattenColumnsWithScrollbar
  }))));
});
FixedHolder.displayName = 'FixedHolder';
/** Return a table in div as fixed element which contains sticky info */
// export default responseImmutable(FixedHolder);

/* harmony default export */ var es_FixedHolder = (/*#__PURE__*/react.memo(FixedHolder));
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Header/HeaderRow.js








function HeaderRow(_ref) {
  var cells = _ref.cells,
      stickyOffsets = _ref.stickyOffsets,
      flattenColumns = _ref.flattenColumns,
      RowComponent = _ref.rowComponent,
      CellComponent = _ref.cellComponent,
      tdCellComponent = _ref.tdCellComponent,
      onHeaderRow = _ref.onHeaderRow,
      index = _ref.index;

  var _useContext = useContext(context_TableContext, ['prefixCls', 'direction']),
      prefixCls = _useContext.prefixCls,
      direction = _useContext.direction;

  var rowProps;

  if (onHeaderRow) {
    rowProps = onHeaderRow(cells.map(function (cell) {
      return cell.column;
    }), index);
  }

  var columnsKey = getColumnsKey(cells.map(function (cell) {
    return cell.column;
  }));
  return /*#__PURE__*/react.createElement(RowComponent, rowProps, cells.map(function (cell, cellIndex) {
    var column = cell.column;
    var fixedInfo = getCellFixedInfo(cell.colStart, cell.colEnd, flattenColumns, stickyOffsets, direction, column);
    var additionalProps;

    if (column && column.onHeaderCell) {
      additionalProps = cell.column.onHeaderCell(column);
    }

    return /*#__PURE__*/react.createElement(es_Cell, (0,esm_extends/* default */.Z)({}, cell, {
      scope: column.title ? cell.colSpan > 1 ? 'colgroup' : 'col' : null,
      ellipsis: column.ellipsis,
      align: column.align,
      component: column.title ? CellComponent : tdCellComponent,
      prefixCls: prefixCls,
      key: columnsKey[cellIndex]
    }, fixedInfo, {
      additionalProps: additionalProps,
      rowType: "header"
    }));
  }));
}

HeaderRow.displayName = 'HeaderRow';
/* harmony default export */ var Header_HeaderRow = (HeaderRow);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Header/Header.js






function parseHeaderRows(rootColumns) {
  var rows = [];

  function fillRowCells(columns, colIndex) {
    var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    // Init rows
    rows[rowIndex] = rows[rowIndex] || [];
    var currentColIndex = colIndex;
    var colSpans = columns.filter(Boolean).map(function (column) {
      var cell = {
        key: column.key,
        className: column.className || '',
        children: column.title,
        column: column,
        colStart: currentColIndex
      };
      var colSpan = 1;
      var subColumns = column.children;

      if (subColumns && subColumns.length > 0) {
        colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
          return total + count;
        }, 0);
        cell.hasSubColumns = true;
      }

      if ('colSpan' in column) {
        colSpan = column.colSpan;
      }

      if ('rowSpan' in column) {
        cell.rowSpan = column.rowSpan;
      }

      cell.colSpan = colSpan;
      cell.colEnd = cell.colStart + colSpan - 1;
      rows[rowIndex].push(cell);
      currentColIndex += colSpan;
      return colSpan;
    });
    return colSpans;
  } // Generate `rows` cell data


  fillRowCells(rootColumns, 0); // Handle `rowSpan`

  var rowCount = rows.length;

  var _loop = function _loop(rowIndex) {
    rows[rowIndex].forEach(function (cell) {
      if (!('rowSpan' in cell) && !cell.hasSubColumns) {
        // eslint-disable-next-line no-param-reassign
        cell.rowSpan = rowCount - rowIndex;
      }
    });
  };

  for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    _loop(rowIndex);
  }

  return rows;
}

function Header(props) {
  if (false) {}

  var stickyOffsets = props.stickyOffsets,
      columns = props.columns,
      flattenColumns = props.flattenColumns,
      onHeaderRow = props.onHeaderRow;

  var _useContext = useContext(context_TableContext, ['prefixCls', 'getComponent']),
      prefixCls = _useContext.prefixCls,
      getComponent = _useContext.getComponent;

  var rows = react.useMemo(function () {
    return parseHeaderRows(columns);
  }, [columns]);
  var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
  var trComponent = getComponent(['header', 'row'], 'tr');
  var thComponent = getComponent(['header', 'cell'], 'th');
  var tdComponent = getComponent(['header', 'cell'], 'td');
  return /*#__PURE__*/react.createElement(WrapperComponent, {
    className: "".concat(prefixCls, "-thead")
  }, rows.map(function (row, rowIndex) {
    var rowNode = /*#__PURE__*/react.createElement(Header_HeaderRow, {
      key: rowIndex,
      flattenColumns: flattenColumns,
      cells: row,
      stickyOffsets: stickyOffsets,
      rowComponent: trComponent,
      cellComponent: thComponent,
      tdCellComponent: tdComponent,
      onHeaderRow: onHeaderRow,
      index: rowIndex
    });
    return rowNode;
  }));
}

/* harmony default export */ var Header_Header = (responseImmutable(Header));
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var Children_toArray = __webpack_require__(50344);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useColumns.js




var useColumns_excluded = ["children"],
    _excluded2 = ["fixed"];





function convertChildrenToColumns(children) {
  return (0,Children_toArray/* default */.Z)(children).filter(function (node) {
    return /*#__PURE__*/react.isValidElement(node);
  }).map(function (_ref) {
    var key = _ref.key,
        props = _ref.props;

    var nodeChildren = props.children,
        restProps = (0,objectWithoutProperties/* default */.Z)(props, useColumns_excluded);

    var column = (0,objectSpread2/* default */.Z)({
      key: key
    }, restProps);

    if (nodeChildren) {
      column.children = convertChildrenToColumns(nodeChildren);
    }

    return column;
  });
}

function flatColumns(columns) {
  return columns.reduce(function (list, column) {
    var fixed = column.fixed; // Convert `fixed='true'` to `fixed='left'` instead

    var parsedFixed = fixed === true ? 'left' : fixed;
    var subColumns = column.children;

    if (subColumns && subColumns.length > 0) {
      return [].concat((0,toConsumableArray/* default */.Z)(list), (0,toConsumableArray/* default */.Z)(flatColumns(subColumns).map(function (subColum) {
        return (0,objectSpread2/* default */.Z)({
          fixed: parsedFixed
        }, subColum);
      })));
    }

    return [].concat((0,toConsumableArray/* default */.Z)(list), [(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, column), {}, {
      fixed: parsedFixed
    })]);
  }, []);
}

function warningFixed(flattenColumns) {
  var allFixLeft = true;

  for (var i = 0; i < flattenColumns.length; i += 1) {
    var col = flattenColumns[i];

    if (allFixLeft && col.fixed !== 'left') {
      allFixLeft = false;
    } else if (!allFixLeft && col.fixed === 'left') {
      warning(false, "Index ".concat(i - 1, " of `columns` missing `fixed='left'` prop."));
      break;
    }
  }

  var allFixRight = true;

  for (var _i = flattenColumns.length - 1; _i >= 0; _i -= 1) {
    var _col = flattenColumns[_i];

    if (allFixRight && _col.fixed !== 'right') {
      allFixRight = false;
    } else if (!allFixRight && _col.fixed === 'right') {
      warning(false, "Index ".concat(_i + 1, " of `columns` missing `fixed='right'` prop."));
      break;
    }
  }
}

function revertForRtl(columns) {
  return columns.map(function (column) {
    var fixed = column.fixed,
        restProps = (0,objectWithoutProperties/* default */.Z)(column, _excluded2); // Convert `fixed='left'` to `fixed='right'` instead


    var parsedFixed = fixed;

    if (fixed === 'left') {
      parsedFixed = 'right';
    } else if (fixed === 'right') {
      parsedFixed = 'left';
    }

    return (0,objectSpread2/* default */.Z)({
      fixed: parsedFixed
    }, restProps);
  });
}
/**
 * Parse `columns` & `children` into `columns`.
 */


function useColumns(_ref2, transformColumns) {
  var prefixCls = _ref2.prefixCls,
      columns = _ref2.columns,
      children = _ref2.children,
      expandable = _ref2.expandable,
      expandedKeys = _ref2.expandedKeys,
      columnTitle = _ref2.columnTitle,
      getRowKey = _ref2.getRowKey,
      onTriggerExpand = _ref2.onTriggerExpand,
      expandIcon = _ref2.expandIcon,
      rowExpandable = _ref2.rowExpandable,
      expandIconColumnIndex = _ref2.expandIconColumnIndex,
      direction = _ref2.direction,
      expandRowByClick = _ref2.expandRowByClick,
      columnWidth = _ref2.columnWidth,
      fixed = _ref2.fixed;
  var baseColumns = react.useMemo(function () {
    return columns || convertChildrenToColumns(children);
  }, [columns, children]); // ========================== Expand ==========================

  var withExpandColumns = react.useMemo(function () {
    if (expandable) {
      var _expandColumn;

      var cloneColumns = baseColumns.slice(); // >>> Warning if use `expandIconColumnIndex`

      if (false) {} // >>> Insert expand column if not exist


      if (!cloneColumns.includes(EXPAND_COLUMN)) {
        var expandColIndex = expandIconColumnIndex || 0;

        if (expandColIndex >= 0) {
          cloneColumns.splice(expandColIndex, 0, EXPAND_COLUMN);
        }
      } // >>> Deduplicate additional expand column


      if (false) {}

      var expandColumnIndex = cloneColumns.indexOf(EXPAND_COLUMN);
      cloneColumns = cloneColumns.filter(function (column, index) {
        return column !== EXPAND_COLUMN || index === expandColumnIndex;
      }); // >>> Check if expand column need to fixed

      var prevColumn = baseColumns[expandColumnIndex];
      var fixedColumn;

      if ((fixed === 'left' || fixed) && !expandIconColumnIndex) {
        fixedColumn = 'left';
      } else if ((fixed === 'right' || fixed) && expandIconColumnIndex === baseColumns.length) {
        fixedColumn = 'right';
      } else {
        fixedColumn = prevColumn ? prevColumn.fixed : null;
      } // >>> Create expandable column


      var expandColumn = (_expandColumn = {}, (0,defineProperty/* default */.Z)(_expandColumn, INTERNAL_COL_DEFINE, {
        className: "".concat(prefixCls, "-expand-icon-col"),
        columnType: 'EXPAND_COLUMN'
      }), (0,defineProperty/* default */.Z)(_expandColumn, "title", columnTitle), (0,defineProperty/* default */.Z)(_expandColumn, "fixed", fixedColumn), (0,defineProperty/* default */.Z)(_expandColumn, "className", "".concat(prefixCls, "-row-expand-icon-cell")), (0,defineProperty/* default */.Z)(_expandColumn, "width", columnWidth), (0,defineProperty/* default */.Z)(_expandColumn, "render", function render(_, record, index) {
        var rowKey = getRowKey(record, index);
        var expanded = expandedKeys.has(rowKey);
        var recordExpandable = rowExpandable ? rowExpandable(record) : true;
        var icon = expandIcon({
          prefixCls: prefixCls,
          expanded: expanded,
          expandable: recordExpandable,
          record: record,
          onExpand: onTriggerExpand
        });

        if (expandRowByClick) {
          return /*#__PURE__*/react.createElement("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, icon);
        }

        return icon;
      }), _expandColumn);
      return cloneColumns.map(function (col) {
        return col === EXPAND_COLUMN ? expandColumn : col;
      });
    }

    if (false) {}

    return baseColumns.filter(function (col) {
      return col !== EXPAND_COLUMN;
    });
  }, [expandable, baseColumns, getRowKey, expandedKeys, expandIcon, direction]); // ========================= Transform ========================

  var mergedColumns = react.useMemo(function () {
    var finalColumns = withExpandColumns;

    if (transformColumns) {
      finalColumns = transformColumns(finalColumns);
    } // Always provides at least one column for table display


    if (!finalColumns.length) {
      finalColumns = [{
        render: function render() {
          return null;
        }
      }];
    }

    return finalColumns;
  }, [transformColumns, withExpandColumns, direction]); // ========================== Flatten =========================

  var flattenColumns = react.useMemo(function () {
    if (direction === 'rtl') {
      return revertForRtl(flatColumns(mergedColumns));
    }

    return flatColumns(mergedColumns);
  }, [mergedColumns, direction]); // Only check out of production since it's waste for each render

  if (false) {}

  return [mergedColumns, flattenColumns];
}

/* harmony default export */ var hooks_useColumns = (useColumns);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/utils/expandUtil.js



function renderExpandIcon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      record = _ref.record,
      onExpand = _ref.onExpand,
      expanded = _ref.expanded,
      expandable = _ref.expandable;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");

  if (!expandable) {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()(expandClassName, "".concat(prefixCls, "-row-spaced"))
    });
  }

  var onClick = function onClick(event) {
    onExpand(record, event);
    event.stopPropagation();
  };

  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(expandClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick: onClick
  });
}
function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
  var keys = [];

  function dig(list) {
    (list || []).forEach(function (item, index) {
      keys.push(getRowKey(item, index));
      dig(item[childrenColumnName]);
    });
  }

  dig(data);
  return keys;
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useExpand.js








function useExpand(props, mergedData, getRowKey) {
  var expandableConfig = getExpandableProps(props);
  var expandIcon = expandableConfig.expandIcon,
      expandedRowKeys = expandableConfig.expandedRowKeys,
      defaultExpandedRowKeys = expandableConfig.defaultExpandedRowKeys,
      defaultExpandAllRows = expandableConfig.defaultExpandAllRows,
      expandedRowRender = expandableConfig.expandedRowRender,
      onExpand = expandableConfig.onExpand,
      onExpandedRowsChange = expandableConfig.onExpandedRowsChange,
      childrenColumnName = expandableConfig.childrenColumnName;
  var mergedExpandIcon = expandIcon || renderExpandIcon;
  var mergedChildrenColumnName = childrenColumnName || 'children';
  var expandableType = react.useMemo(function () {
    if (expandedRowRender) {
      return 'row';
    }
    /* eslint-disable no-underscore-dangle */

    /**
     * Fix https://github.com/ant-design/ant-design/issues/21154
     * This is a workaround to not to break current behavior.
     * We can remove follow code after final release.
     *
     * To other developer:
     *  Do not use `__PARENT_RENDER_ICON__` in prod since we will remove this when refactor
     */


    if (props.expandable && props.internalHooks === INTERNAL_HOOKS && props.expandable.__PARENT_RENDER_ICON__ || mergedData.some(function (record) {
      return record && (0,esm_typeof/* default */.Z)(record) === 'object' && record[mergedChildrenColumnName];
    })) {
      return 'nest';
    }
    /* eslint-enable */


    return false;
  }, [!!expandedRowRender, mergedData]);

  var _React$useState = react.useState(function () {
    if (defaultExpandedRowKeys) {
      return defaultExpandedRowKeys;
    }

    if (defaultExpandAllRows) {
      return findAllChildrenKeys(mergedData, getRowKey, mergedChildrenColumnName);
    }

    return [];
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerExpandedKeys = _React$useState2[0],
      setInnerExpandedKeys = _React$useState2[1];

  var mergedExpandedKeys = react.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = react.useCallback(function (record) {
    var key = getRowKey(record, mergedData.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);

    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = (0,toConsumableArray/* default */.Z)(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat((0,toConsumableArray/* default */.Z)(mergedExpandedKeys), [key]);
    }

    setInnerExpandedKeys(newExpandedKeys);

    if (onExpand) {
      onExpand(!hasKey, record);
    }

    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, mergedData, onExpand, onExpandedRowsChange]); // Warning if use `expandedRowRender` and nest children in the same time

  if (false) {}

  return [expandableConfig, expandableType, mergedExpandedKeys, mergedExpandIcon, mergedChildrenColumnName, onTriggerExpand];
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useFixedInfo.js



function useFixedInfo(flattenColumns, stickyOffsets, direction, columns) {
  var fixedInfoList = flattenColumns.map(function (_, colIndex) {
    return getCellFixedInfo(colIndex, colIndex, flattenColumns, stickyOffsets, direction, columns === null || columns === void 0 ? void 0 : columns[colIndex]);
  });
  return (0,useMemo/* default */.Z)(function () {
    return fixedInfoList;
  }, [fixedInfoList], function (prev, next) {
    return !(0,isEqual/* default */.Z)(prev, next);
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useFrame.js



/**
 * Execute code before next frame but async
 */
function useLayoutState(defaultState) {
  var stateRef = (0,react.useRef)(defaultState);

  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      forceUpdate = _useState2[1];

  var lastPromiseRef = (0,react.useRef)(null);
  var updateBatchRef = (0,react.useRef)([]);

  function setFrameState(updater) {
    updateBatchRef.current.push(updater);
    var promise = Promise.resolve();
    lastPromiseRef.current = promise;
    promise.then(function () {
      if (lastPromiseRef.current === promise) {
        var prevBatch = updateBatchRef.current;
        var prevState = stateRef.current;
        updateBatchRef.current = [];
        prevBatch.forEach(function (batchUpdater) {
          stateRef.current = batchUpdater(stateRef.current);
        });
        lastPromiseRef.current = null;

        if (prevState !== stateRef.current) {
          forceUpdate({});
        }
      }
    });
  }

  (0,react.useEffect)(function () {
    return function () {
      lastPromiseRef.current = null;
    };
  }, []);
  return [stateRef.current, setFrameState];
}
/** Lock frame, when frame pass reset the lock. */

function useTimeoutLock(defaultState) {
  var frameRef = (0,react.useRef)(defaultState || null);
  var timeoutRef = (0,react.useRef)();

  function cleanUp() {
    window.clearTimeout(timeoutRef.current);
  }

  function setState(newState) {
    frameRef.current = newState;
    cleanUp();
    timeoutRef.current = window.setTimeout(function () {
      frameRef.current = null;
      timeoutRef.current = undefined;
    }, 100);
  }

  function getState() {
    return frameRef.current;
  }

  (0,react.useEffect)(function () {
    return cleanUp;
  }, []);
  return [setState, getState];
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useHover.js


function useHover() {
  var _React$useState = react.useState(-1),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      startRow = _React$useState2[0],
      setStartRow = _React$useState2[1];

  var _React$useState3 = react.useState(-1),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      endRow = _React$useState4[0],
      setEndRow = _React$useState4[1];

  var onHover = react.useCallback(function (start, end) {
    setStartRow(start);
    setEndRow(end);
  }, []);
  return [startRow, endRow, onHover];
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useSticky.js



// fix ssr render
var defaultContainer = (0,canUseDom/* default */.Z)() ? window : null;
/** Sticky header hooks */

function useSticky(sticky, prefixCls) {
  var _ref = (0,esm_typeof/* default */.Z)(sticky) === 'object' ? sticky : {},
      _ref$offsetHeader = _ref.offsetHeader,
      offsetHeader = _ref$offsetHeader === void 0 ? 0 : _ref$offsetHeader,
      _ref$offsetSummary = _ref.offsetSummary,
      offsetSummary = _ref$offsetSummary === void 0 ? 0 : _ref$offsetSummary,
      _ref$offsetScroll = _ref.offsetScroll,
      offsetScroll = _ref$offsetScroll === void 0 ? 0 : _ref$offsetScroll,
      _ref$getContainer = _ref.getContainer,
      getContainer = _ref$getContainer === void 0 ? function () {
    return defaultContainer;
  } : _ref$getContainer;

  var container = getContainer() || defaultContainer;
  return react.useMemo(function () {
    var isSticky = !!sticky;
    return {
      isSticky: isSticky,
      stickyClassName: isSticky ? "".concat(prefixCls, "-sticky-holder") : '',
      offsetHeader: offsetHeader,
      offsetSummary: offsetSummary,
      offsetScroll: offsetScroll,
      container: container
    };
  }, [offsetScroll, offsetHeader, offsetSummary, prefixCls, container]);
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/hooks/useStickyOffsets.js


/**
 * Get sticky column offset width
 */
function useStickyOffsets(colWidths, columnCount, direction) {
  var stickyOffsets = (0,react.useMemo)(function () {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;

    for (var start = 0; start < columnCount; start += 1) {
      if (direction === 'rtl') {
        // Left offset
        rightOffsets[start] = right;
        right += colWidths[start] || 0; // Right offset

        var end = columnCount - start - 1;
        leftOffsets[end] = left;
        left += colWidths[end] || 0;
      } else {
        // Left offset
        leftOffsets[start] = left;
        left += colWidths[start] || 0; // Right offset

        var _end = columnCount - start - 1;

        rightOffsets[_end] = right;
        right += colWidths[_end] || 0;
      }
    }

    return {
      left: leftOffsets,
      right: rightOffsets
    };
  }, [colWidths, columnCount, direction]);
  return stickyOffsets;
}

/* harmony default export */ var hooks_useStickyOffsets = (useStickyOffsets);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Panel/index.js


function Panel(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: className
  }, children);
}

/* harmony default export */ var es_Panel = (Panel);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js
var addEventListener = __webpack_require__(64019);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/css.js
/* eslint-disable no-nested-ternary */
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;
var removePixel = {
  left: true,
  top: true
};
var floatMap = {
  cssFloat: 1,
  styleFloat: 1,
  float: 1
};
function css_getComputedStyle(node) {
  return node.nodeType === 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
}
function getStyleValue(node, type, value) {
  type = type.toLowerCase();
  if (value === 'auto') {
    if (type === 'height') {
      return node.offsetHeight;
    }
    if (type === 'width') {
      return node.offsetWidth;
    }
  }
  if (!(type in removePixel)) {
    removePixel[type] = PIXEL_PATTERN.test(type);
  }
  return removePixel[type] ? parseFloat(value) || 0 : value;
}
function css_get(node, name) {
  var length = arguments.length;
  var style = css_getComputedStyle(node);
  name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
  return length === 1 ? style : getStyleValue(node, name, style[name] || node.style[name]);
}
function set(node, name, value) {
  var length = arguments.length;
  name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
  if (length === 3) {
    if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
      value = "".concat(value, "px");
    }
    node.style[name] = value; // Number
    return value;
  }
  for (var x in name) {
    if (name.hasOwnProperty(x)) {
      set(node, x, name[x]);
    }
  }
  return css_getComputedStyle(node);
}
function getOuterWidth(el) {
  if (el === document.body) {
    return document.documentElement.clientWidth;
  }
  return el.offsetWidth;
}
function getOuterHeight(el) {
  if (el === document.body) {
    return window.innerHeight || document.documentElement.clientHeight;
  }
  return el.offsetHeight;
}
function getDocSize() {
  var width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  var height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  return {
    width: width,
    height: height
  };
}
function getClientSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width: width,
    height: height
  };
}
function getScroll() {
  return {
    scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
    scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
  };
}
function getOffset(node) {
  var box = node.getBoundingClientRect();
  var docElem = document.documentElement;

  // < ie8 不支持 win.pageXOffset, 则使用 docElem.scrollLeft
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-table/es/stickyScrollBar.js












var StickyScrollBar = function StickyScrollBar(_ref, ref) {
  var _scrollBodyRef$curren, _scrollBodyRef$curren2;

  var scrollBodyRef = _ref.scrollBodyRef,
      onScroll = _ref.onScroll,
      offsetScroll = _ref.offsetScroll,
      container = _ref.container;
  var prefixCls = useContext(context_TableContext, 'prefixCls');
  var bodyScrollWidth = ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0 ? void 0 : _scrollBodyRef$curren.scrollWidth) || 0;
  var bodyWidth = ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0 ? void 0 : _scrollBodyRef$curren2.clientWidth) || 0;
  var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
  var scrollBarRef = react.useRef();

  var _useLayoutState = useLayoutState({
    scrollLeft: 0,
    isHiddenScrollBar: false
  }),
      _useLayoutState2 = (0,slicedToArray/* default */.Z)(_useLayoutState, 2),
      scrollState = _useLayoutState2[0],
      setScrollState = _useLayoutState2[1];

  var refState = react.useRef({
    delta: 0,
    x: 0
  });

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      isActive = _React$useState2[0],
      setActive = _React$useState2[1];

  var onMouseUp = function onMouseUp() {
    setActive(false);
  };

  var onMouseDown = function onMouseDown(event) {
    event.persist();
    refState.current.delta = event.pageX - scrollState.scrollLeft;
    refState.current.x = 0;
    setActive(true);
    event.preventDefault();
  };

  var onMouseMove = function onMouseMove(event) {
    var _window;

    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
    var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
        buttons = _ref2.buttons;

    if (!isActive || buttons === 0) {
      // If out body mouse up, we can set isActive false when mouse move
      if (isActive) {
        setActive(false);
      }

      return;
    }

    var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;

    if (left <= 0) {
      left = 0;
    }

    if (left + scrollBarWidth >= bodyWidth) {
      left = bodyWidth - scrollBarWidth;
    }

    onScroll({
      scrollLeft: left / bodyWidth * (bodyScrollWidth + 2)
    });
    refState.current.x = event.pageX;
  };

  var onContainerScroll = function onContainerScroll() {
    if (!scrollBodyRef.current) {
      return;
    }

    var tableOffsetTop = getOffset(scrollBodyRef.current).top;
    var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
    var currentClientOffset = container === window ? document.documentElement.scrollTop + window.innerHeight : getOffset(container).top + container.clientHeight;

    if (tableBottomOffset - getScrollBarSize() <= currentClientOffset || tableOffsetTop >= currentClientOffset - offsetScroll) {
      setScrollState(function (state) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          isHiddenScrollBar: true
        });
      });
    } else {
      setScrollState(function (state) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          isHiddenScrollBar: false
        });
      });
    }
  };

  var setScrollLeft = function setScrollLeft(left) {
    setScrollState(function (state) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
        scrollLeft: left / bodyScrollWidth * bodyWidth || 0
      });
    });
  };

  react.useImperativeHandle(ref, function () {
    return {
      setScrollLeft: setScrollLeft
    };
  });
  react.useEffect(function () {
    var onMouseUpListener = (0,addEventListener/* default */.Z)(document.body, 'mouseup', onMouseUp, false);
    var onMouseMoveListener = (0,addEventListener/* default */.Z)(document.body, 'mousemove', onMouseMove, false);
    onContainerScroll();
    return function () {
      onMouseUpListener.remove();
      onMouseMoveListener.remove();
    };
  }, [scrollBarWidth, isActive]);
  react.useEffect(function () {
    var onScrollListener = (0,addEventListener/* default */.Z)(container, 'scroll', onContainerScroll, false);
    var onResizeListener = (0,addEventListener/* default */.Z)(window, 'resize', onContainerScroll, false);
    return function () {
      onScrollListener.remove();
      onResizeListener.remove();
    };
  }, [container]);
  react.useEffect(function () {
    if (!scrollState.isHiddenScrollBar) {
      setScrollState(function (state) {
        var bodyNode = scrollBodyRef.current;

        if (!bodyNode) {
          return state;
        }

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
        });
      });
    }
  }, [scrollState.isHiddenScrollBar]);

  if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    style: {
      height: getScrollBarSize(),
      width: bodyWidth,
      bottom: offsetScroll
    },
    className: "".concat(prefixCls, "-sticky-scroll")
  }, /*#__PURE__*/react.createElement("div", {
    onMouseDown: onMouseDown,
    ref: scrollBarRef,
    className: classnames_default()("".concat(prefixCls, "-sticky-scroll-bar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive)),
    style: {
      width: "".concat(scrollBarWidth, "px"),
      transform: "translate3d(".concat(scrollState.scrollLeft, "px, 0, 0)")
    }
  }));
};

/* harmony default export */ var stickyScrollBar = (/*#__PURE__*/react.forwardRef(StickyScrollBar));
;// CONCATENATED MODULE: ./node_modules/rc-table/es/sugar/Column.js
/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Column(_) {
  return null;
}

/* harmony default export */ var sugar_Column = (Column);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/sugar/ColumnGroup.js
/* istanbul ignore next */

/**
 * This is a syntactic sugar for `columns` prop.
 * So HOC will not work on this.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ColumnGroup(_) {
  return null;
}

/* harmony default export */ var sugar_ColumnGroup = (ColumnGroup);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/Table.js





/**
 * Feature:
 *  - fixed not need to set width
 *  - support `rowExpandable` to config row expand logic
 *  - add `summary` to support `() => ReactNode`
 *
 * Update:
 *  - `dataIndex` is `array[]` now
 *  - `expandable` wrap all the expand related props
 *
 * Removed:
 *  - expandIconAsCell
 *  - useFixedHeader
 *  - rowRef
 *  - columns[number].onCellClick
 *  - onRowClick
 *  - onRowDoubleClick
 *  - onRowMouseEnter
 *  - onRowMouseLeave
 *  - getBodyWrapper
 *  - bodyStyle
 *
 * Deprecated:
 *  - All expanded props, move into expandable
 */






























 // Used for conditions cache

var EMPTY_DATA = []; // Used for customize scroll

var EMPTY_SCROLL_TARGET = {};
var INTERNAL_HOOKS = 'rc-table-internal-hook';

function defaultEmpty() {
  return 'No Data';
}

function Table(tableProps) {
  var _classNames;

  var props = (0,objectSpread2/* default */.Z)({
    rowKey: 'key',
    prefixCls: 'rc-table',
    emptyText: defaultEmpty
  }, tableProps);

  var prefixCls = props.prefixCls,
      className = props.className,
      rowClassName = props.rowClassName,
      style = props.style,
      data = props.data,
      rowKey = props.rowKey,
      scroll = props.scroll,
      tableLayout = props.tableLayout,
      direction = props.direction,
      title = props.title,
      footer = props.footer,
      summary = props.summary,
      caption = props.caption,
      id = props.id,
      showHeader = props.showHeader,
      components = props.components,
      emptyText = props.emptyText,
      onRow = props.onRow,
      onHeaderRow = props.onHeaderRow,
      internalHooks = props.internalHooks,
      transformColumns = props.transformColumns,
      internalRefs = props.internalRefs,
      sticky = props.sticky;
  var mergedData = data || EMPTY_DATA;
  var hasData = !!mergedData.length; // ===================== Warning ======================

  if (false) {} // ==================== Customize =====================


  var getComponent = react.useCallback(function (path, defaultComponent) {
    return (0,get/* default */.Z)(components, path) || defaultComponent;
  }, [components]);
  var getRowKey = react.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return function (record) {
      var key = record && record[rowKey];

      if (false) {}

      return key;
    };
  }, [rowKey]); // ====================== Hover =======================

  var _useHover = useHover(),
      _useHover2 = (0,slicedToArray/* default */.Z)(_useHover, 3),
      startRow = _useHover2[0],
      endRow = _useHover2[1],
      onHover = _useHover2[2]; // ====================== Expand ======================


  var _useExpand = useExpand(props, mergedData, getRowKey),
      _useExpand2 = (0,slicedToArray/* default */.Z)(_useExpand, 6),
      expandableConfig = _useExpand2[0],
      expandableType = _useExpand2[1],
      mergedExpandedKeys = _useExpand2[2],
      mergedExpandIcon = _useExpand2[3],
      mergedChildrenColumnName = _useExpand2[4],
      onTriggerExpand = _useExpand2[5]; // ====================== Column ======================


  var _React$useState = react.useState(0),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      componentWidth = _React$useState2[0],
      setComponentWidth = _React$useState2[1];

  var _useColumns = hooks_useColumns((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), expandableConfig), {}, {
    expandable: !!expandableConfig.expandedRowRender,
    columnTitle: expandableConfig.columnTitle,
    expandedKeys: mergedExpandedKeys,
    getRowKey: getRowKey,
    // https://github.com/ant-design/ant-design/issues/23894
    onTriggerExpand: onTriggerExpand,
    expandIcon: mergedExpandIcon,
    expandIconColumnIndex: expandableConfig.expandIconColumnIndex,
    direction: direction
  }), internalHooks === INTERNAL_HOOKS ? transformColumns : null),
      _useColumns2 = (0,slicedToArray/* default */.Z)(_useColumns, 2),
      columns = _useColumns2[0],
      flattenColumns = _useColumns2[1];

  var columnContext = react.useMemo(function () {
    return {
      columns: columns,
      flattenColumns: flattenColumns
    };
  }, [columns, flattenColumns]); // ====================== Scroll ======================

  var fullTableRef = react.useRef();
  var scrollHeaderRef = react.useRef();
  var scrollBodyRef = react.useRef();
  var scrollBodyContainerRef = react.useRef();
  var scrollSummaryRef = react.useRef();

  var _React$useState3 = react.useState(false),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      pingedLeft = _React$useState4[0],
      setPingedLeft = _React$useState4[1];

  var _React$useState5 = react.useState(false),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      pingedRight = _React$useState6[0],
      setPingedRight = _React$useState6[1];

  var _useLayoutState = useLayoutState(new Map()),
      _useLayoutState2 = (0,slicedToArray/* default */.Z)(_useLayoutState, 2),
      colsWidths = _useLayoutState2[0],
      updateColsWidths = _useLayoutState2[1]; // Convert map to number width


  var colsKeys = getColumnsKey(flattenColumns);
  var pureColWidths = colsKeys.map(function (columnKey) {
    return colsWidths.get(columnKey);
  });
  var colWidths = react.useMemo(function () {
    return pureColWidths;
  }, [pureColWidths.join('_')]);
  var stickyOffsets = hooks_useStickyOffsets(colWidths, flattenColumns.length, direction);
  var fixHeader = scroll && validateValue(scroll.y);
  var horizonScroll = scroll && validateValue(scroll.x) || Boolean(expandableConfig.fixed);
  var fixColumn = horizonScroll && flattenColumns.some(function (_ref) {
    var fixed = _ref.fixed;
    return fixed;
  }); // Sticky

  var stickyRef = react.useRef();

  var _useSticky = useSticky(sticky, prefixCls),
      isSticky = _useSticky.isSticky,
      offsetHeader = _useSticky.offsetHeader,
      offsetSummary = _useSticky.offsetSummary,
      offsetScroll = _useSticky.offsetScroll,
      stickyClassName = _useSticky.stickyClassName,
      container = _useSticky.container; // Footer (Fix footer must fixed header)


  var summaryNode = react.useMemo(function () {
    return summary === null || summary === void 0 ? void 0 : summary(mergedData);
  }, [summary, mergedData]);
  var fixFooter = (fixHeader || isSticky) && /*#__PURE__*/react.isValidElement(summaryNode) && summaryNode.type === Footer_Summary && summaryNode.props.fixed; // Scroll

  var scrollXStyle;
  var scrollYStyle;
  var scrollTableStyle;

  if (fixHeader) {
    scrollYStyle = {
      overflowY: 'scroll',
      maxHeight: scroll.y
    };
  }

  if (horizonScroll) {
    scrollXStyle = {
      overflowX: 'auto'
    }; // When no vertical scrollbar, should hide it
    // https://github.com/ant-design/ant-design/pull/20705
    // https://github.com/ant-design/ant-design/issues/21879

    if (!fixHeader) {
      scrollYStyle = {
        overflowY: 'hidden'
      };
    }

    scrollTableStyle = {
      width: (scroll === null || scroll === void 0 ? void 0 : scroll.x) === true ? 'auto' : scroll === null || scroll === void 0 ? void 0 : scroll.x,
      minWidth: '100%'
    };
  }

  var onColumnResize = react.useCallback(function (columnKey, width) {
    if ((0,isVisible/* default */.Z)(fullTableRef.current)) {
      updateColsWidths(function (widths) {
        if (widths.get(columnKey) !== width) {
          var newWidths = new Map(widths);
          newWidths.set(columnKey, width);
          return newWidths;
        }

        return widths;
      });
    }
  }, []);

  var _useTimeoutLock = useTimeoutLock(null),
      _useTimeoutLock2 = (0,slicedToArray/* default */.Z)(_useTimeoutLock, 2),
      setScrollTarget = _useTimeoutLock2[0],
      getScrollTarget = _useTimeoutLock2[1];

  function forceScroll(scrollLeft, target) {
    if (!target) {
      return;
    }

    if (typeof target === 'function') {
      target(scrollLeft);
    } else if (target.scrollLeft !== scrollLeft) {
      target.scrollLeft = scrollLeft; // Delay to force scroll position if not sync
      // ref: https://github.com/ant-design/ant-design/issues/37179

      if (target.scrollLeft !== scrollLeft) {
        setTimeout(function () {
          target.scrollLeft = scrollLeft;
        }, 0);
      }
    }
  }

  var onScroll = (0,useEvent/* default */.Z)(function (_ref2) {
    var currentTarget = _ref2.currentTarget,
        scrollLeft = _ref2.scrollLeft;
    var isRTL = direction === 'rtl';
    var mergedScrollLeft = typeof scrollLeft === 'number' ? scrollLeft : currentTarget.scrollLeft;
    var compareTarget = currentTarget || EMPTY_SCROLL_TARGET;

    if (!getScrollTarget() || getScrollTarget() === compareTarget) {
      var _stickyRef$current;

      setScrollTarget(compareTarget);
      forceScroll(mergedScrollLeft, scrollHeaderRef.current);
      forceScroll(mergedScrollLeft, scrollBodyRef.current);
      forceScroll(mergedScrollLeft, scrollSummaryRef.current);
      forceScroll(mergedScrollLeft, (_stickyRef$current = stickyRef.current) === null || _stickyRef$current === void 0 ? void 0 : _stickyRef$current.setScrollLeft);
    }

    if (currentTarget) {
      var scrollWidth = currentTarget.scrollWidth,
          clientWidth = currentTarget.clientWidth; // There is no space to scroll

      if (scrollWidth === clientWidth) {
        setPingedLeft(false);
        setPingedRight(false);
        return;
      }

      if (isRTL) {
        setPingedLeft(-mergedScrollLeft < scrollWidth - clientWidth);
        setPingedRight(-mergedScrollLeft > 0);
      } else {
        setPingedLeft(mergedScrollLeft > 0);
        setPingedRight(mergedScrollLeft < scrollWidth - clientWidth);
      }
    }
  });

  var triggerOnScroll = function triggerOnScroll() {
    if (horizonScroll && scrollBodyRef.current) {
      onScroll({
        currentTarget: scrollBodyRef.current
      });
    } else {
      setPingedLeft(false);
      setPingedRight(false);
    }
  };

  var onFullTableResize = function onFullTableResize(_ref3) {
    var width = _ref3.width;

    if (width !== componentWidth) {
      triggerOnScroll();
      setComponentWidth(fullTableRef.current ? fullTableRef.current.offsetWidth : width);
    }
  }; // Sync scroll bar when init or `horizonScroll`, `data` and `columns.length` changed


  var mounted = react.useRef(false);
  react.useEffect(function () {
    // onFullTableResize will be trigger once when ResizeObserver is mounted
    // This will reduce one duplicated triggerOnScroll time
    if (mounted.current) {
      triggerOnScroll();
    }
  }, [horizonScroll, data, columns.length]);
  react.useEffect(function () {
    mounted.current = true;
  }, []); // ===================== Effects ======================

  var _React$useState7 = react.useState(0),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      scrollbarSize = _React$useState8[0],
      setScrollbarSize = _React$useState8[1];

  var _React$useState9 = react.useState(true),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      supportSticky = _React$useState10[0],
      setSupportSticky = _React$useState10[1]; // Only IE not support, we mark as support first


  react.useEffect(function () {
    if (scrollBodyRef.current instanceof Element) {
      setScrollbarSize(getTargetScrollBarSize(scrollBodyRef.current).width);
    } else {
      setScrollbarSize(getTargetScrollBarSize(scrollBodyContainerRef.current).width);
    }

    setSupportSticky(isStyleSupport('position', 'sticky'));
  }, []); // ================== INTERNAL HOOKS ==================

  react.useEffect(function () {
    if (internalHooks === INTERNAL_HOOKS && internalRefs) {
      internalRefs.body.current = scrollBodyRef.current;
    }
  }); // ========================================================================
  // ==                               Render                               ==
  // ========================================================================
  // =================== Render: Func ===================

  var renderFixedHeaderTable = react.useCallback(function (fixedHolderPassProps) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Header_Header, fixedHolderPassProps), fixFooter === 'top' && /*#__PURE__*/react.createElement(es_Footer, fixedHolderPassProps, summaryNode));
  }, [fixFooter, summaryNode]);
  var renderFixedFooterTable = react.useCallback(function (fixedHolderPassProps) {
    return /*#__PURE__*/react.createElement(es_Footer, fixedHolderPassProps, summaryNode);
  }, [summaryNode]); // =================== Render: Node ===================

  var TableComponent = getComponent(['table'], 'table'); // Table layout

  var mergedTableLayout = react.useMemo(function () {
    if (tableLayout) {
      return tableLayout;
    } // https://github.com/ant-design/ant-design/issues/25227
    // When scroll.x is max-content, no need to fix table layout
    // it's width should stretch out to fit content


    if (fixColumn) {
      return (scroll === null || scroll === void 0 ? void 0 : scroll.x) === 'max-content' ? 'auto' : 'fixed';
    }

    if (fixHeader || isSticky || flattenColumns.some(function (_ref4) {
      var ellipsis = _ref4.ellipsis;
      return ellipsis;
    })) {
      return 'fixed';
    }

    return 'auto';
  }, [fixHeader, fixColumn, flattenColumns, tableLayout, isSticky]);
  var groupTableNode; // Header props

  var headerProps = {
    colWidths: colWidths,
    columCount: flattenColumns.length,
    stickyOffsets: stickyOffsets,
    onHeaderRow: onHeaderRow,
    fixHeader: fixHeader,
    scroll: scroll
  }; // Empty

  var emptyNode = react.useMemo(function () {
    if (hasData) {
      return null;
    }

    if (typeof emptyText === 'function') {
      return emptyText();
    }

    return emptyText;
  }, [hasData, emptyText]); // Body

  var bodyTable = /*#__PURE__*/react.createElement(es_Body, {
    data: mergedData,
    measureColumnWidth: fixHeader || horizonScroll || isSticky,
    expandedKeys: mergedExpandedKeys,
    rowExpandable: expandableConfig.rowExpandable,
    getRowKey: getRowKey,
    onRow: onRow,
    emptyNode: emptyNode,
    childrenColumnName: mergedChildrenColumnName
  });
  var bodyColGroup = /*#__PURE__*/react.createElement(es_ColGroup, {
    colWidths: flattenColumns.map(function (_ref5) {
      var width = _ref5.width;
      return width;
    }),
    columns: flattenColumns
  });
  var captionElement = caption !== null && caption !== undefined ? /*#__PURE__*/react.createElement("caption", {
    className: "".concat(prefixCls, "-caption")
  }, caption) : undefined;
  var customizeScrollBody = getComponent(['body']);

  if (false) {}

  var dataProps = pickAttrs(props, {
    data: true
  });
  var ariaProps = pickAttrs(props, {
    aria: true
  });

  if (fixHeader || isSticky) {
    // >>>>>> Fixed Header
    var bodyContent;

    if (typeof customizeScrollBody === 'function') {
      bodyContent = customizeScrollBody(mergedData, {
        scrollbarSize: scrollbarSize,
        ref: scrollBodyRef,
        onScroll: onScroll
      });
      headerProps.colWidths = flattenColumns.map(function (_ref6, index) {
        var width = _ref6.width;
        var colWidth = index === columns.length - 1 ? width - scrollbarSize : width;

        if (typeof colWidth === 'number' && !Number.isNaN(colWidth)) {
          return colWidth;
        }

        (0,es_warning/* default */.ZP)(false, 'When use `components.body` with render props. Each column should have a fixed `width` value.');
        return 0;
      });
    } else {
      bodyContent = /*#__PURE__*/react.createElement("div", {
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollXStyle), scrollYStyle),
        onScroll: onScroll,
        ref: scrollBodyRef,
        className: classnames_default()("".concat(prefixCls, "-body"))
      }, /*#__PURE__*/react.createElement(TableComponent, (0,esm_extends/* default */.Z)({
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollTableStyle), {}, {
          tableLayout: mergedTableLayout
        })
      }, ariaProps), captionElement, bodyColGroup, bodyTable, !fixFooter && summaryNode && /*#__PURE__*/react.createElement(es_Footer, {
        stickyOffsets: stickyOffsets,
        flattenColumns: flattenColumns,
        columns: columns
      }, summaryNode)));
    } // Fixed holder share the props


    var fixedHolderProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      noData: !mergedData.length,
      maxContentScroll: horizonScroll && scroll.x === 'max-content'
    }, headerProps), columnContext), {}, {
      direction: direction,
      stickyClassName: stickyClassName,
      onScroll: onScroll
    });

    groupTableNode = /*#__PURE__*/react.createElement(react.Fragment, null, showHeader !== false && /*#__PURE__*/react.createElement(es_FixedHolder, (0,esm_extends/* default */.Z)({}, fixedHolderProps, {
      stickyTopOffset: offsetHeader,
      className: "".concat(prefixCls, "-header"),
      ref: scrollHeaderRef
    }), renderFixedHeaderTable), bodyContent, fixFooter && fixFooter !== 'top' && /*#__PURE__*/react.createElement(es_FixedHolder, (0,esm_extends/* default */.Z)({}, fixedHolderProps, {
      stickyBottomOffset: offsetSummary,
      className: "".concat(prefixCls, "-summary"),
      ref: scrollSummaryRef
    }), renderFixedFooterTable), isSticky && /*#__PURE__*/react.createElement(stickyScrollBar, {
      ref: stickyRef,
      offsetScroll: offsetScroll,
      scrollBodyRef: scrollBodyRef,
      onScroll: onScroll,
      container: container
    }));
  } else {
    // >>>>>> Unique table
    groupTableNode = /*#__PURE__*/react.createElement("div", {
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollXStyle), scrollYStyle),
      className: classnames_default()("".concat(prefixCls, "-content")),
      onScroll: onScroll,
      ref: scrollBodyRef
    }, /*#__PURE__*/react.createElement(TableComponent, (0,esm_extends/* default */.Z)({
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, scrollTableStyle), {}, {
        tableLayout: mergedTableLayout
      })
    }, ariaProps), captionElement, bodyColGroup, showHeader !== false && /*#__PURE__*/react.createElement(Header_Header, (0,esm_extends/* default */.Z)({}, headerProps, columnContext)), bodyTable, summaryNode && /*#__PURE__*/react.createElement(es_Footer, {
      stickyOffsets: stickyOffsets,
      flattenColumns: flattenColumns,
      columns: columns
    }, summaryNode)));
  }

  var fullTable = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ping-left"), pingedLeft), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ping-right"), pingedRight), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-layout-fixed"), tableLayout === 'fixed'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-fixed-header"), fixHeader), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-fixed-column"), fixColumn), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-scroll-horizontal"), horizonScroll), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-fix-left"), flattenColumns[0] && flattenColumns[0].fixed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-fix-right"), flattenColumns[flattenColumns.length - 1] && flattenColumns[flattenColumns.length - 1].fixed === 'right'), _classNames)),
    style: style,
    id: id,
    ref: fullTableRef
  }, dataProps), title && /*#__PURE__*/react.createElement(es_Panel, {
    className: "".concat(prefixCls, "-title")
  }, title(mergedData)), /*#__PURE__*/react.createElement("div", {
    ref: scrollBodyContainerRef,
    className: "".concat(prefixCls, "-container")
  }, groupTableNode), footer && /*#__PURE__*/react.createElement(es_Panel, {
    className: "".concat(prefixCls, "-footer")
  }, footer(mergedData)));

  if (horizonScroll) {
    fullTable = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: onFullTableResize
    }, fullTable);
  }

  var fixedInfoList = useFixedInfo(flattenColumns, stickyOffsets, direction, columns);
  var TableContextValue = react.useMemo(function () {
    return {
      // Table
      prefixCls: prefixCls,
      getComponent: getComponent,
      scrollbarSize: scrollbarSize,
      direction: direction,
      fixedInfoList: fixedInfoList,
      isSticky: isSticky,
      supportSticky: supportSticky,
      componentWidth: componentWidth,
      fixHeader: fixHeader,
      fixColumn: fixColumn,
      horizonScroll: horizonScroll,
      // Body
      tableLayout: mergedTableLayout,
      rowClassName: rowClassName,
      expandedRowClassName: expandableConfig.expandedRowClassName,
      expandIcon: mergedExpandIcon,
      expandableType: expandableType,
      expandRowByClick: expandableConfig.expandRowByClick,
      expandedRowRender: expandableConfig.expandedRowRender,
      onTriggerExpand: onTriggerExpand,
      expandIconColumnIndex: expandableConfig.expandIconColumnIndex,
      indentSize: expandableConfig.indentSize,
      allColumnsFixedLeft: flattenColumns.every(function (col) {
        return col.fixed === 'left';
      }),
      // Column
      columns: columns,
      flattenColumns: flattenColumns,
      onColumnResize: onColumnResize,
      // Row
      hoverStartRow: startRow,
      hoverEndRow: endRow,
      onHover: onHover
    };
  }, [// Table
  prefixCls, getComponent, scrollbarSize, direction, fixedInfoList, isSticky, supportSticky, componentWidth, fixHeader, fixColumn, horizonScroll, // Body
  mergedTableLayout, rowClassName, expandableConfig.expandedRowClassName, mergedExpandIcon, expandableType, expandableConfig.expandRowByClick, expandableConfig.expandedRowRender, onTriggerExpand, expandableConfig.expandIconColumnIndex, expandableConfig.indentSize, // Column
  columns, flattenColumns, onColumnResize, // Row
  startRow, endRow, onHover]);
  return /*#__PURE__*/react.createElement(context_TableContext.Provider, {
    value: TableContextValue
  }, fullTable);
}

function genTable(shouldTriggerRender) {
  return makeImmutable(Table, shouldTriggerRender);
}
var ImmutableTable = genTable();
ImmutableTable.EXPAND_COLUMN = EXPAND_COLUMN;
ImmutableTable.Column = sugar_Column;
ImmutableTable.ColumnGroup = sugar_ColumnGroup;
ImmutableTable.Summary = FooterComponents;
/* harmony default export */ var es_Table = (ImmutableTable);
;// CONCATENATED MODULE: ./node_modules/rc-table/es/index.js







/* harmony default export */ var rc_table_es = (es_Table);

/***/ }),

/***/ 64019:
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ addEventListenerWrap; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ 61254);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates(cb, e);
  } : cb;
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}

/***/ }),

/***/ 34203:
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/findDOMNode.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ findDOMNode; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ 61254);

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }
  return react_dom__WEBPACK_IMPORTED_MODULE_0__.findDOMNode(node);
}

/***/ }),

/***/ 5110:
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/isVisible.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__["Z"] = (function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof HTMLElement && element.offsetParent) {
    return true;
  }
  if (element instanceof SVGGraphicsElement && element.getBBox) {
    var _element$getBBox = element.getBBox(),
      width = _element$getBBox.width,
      height = _element$getBBox.height;
    if (width || height) {
      return true;
    }
  }
  if (element instanceof HTMLElement && element.getBoundingClientRect) {
    var _element$getBoundingC = element.getBoundingClientRect(),
      _width = _element$getBoundingC.width,
      _height = _element$getBoundingC.height;
    if (_width || _height) {
      return true;
    }
  }
  return false;
});

/***/ }),

/***/ 66680:
/*!***************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useEvent.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 62435);

function useEvent(callback) {
  var fnRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  fnRef.current = callback;
  var memoFn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ 8410:
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useLayoutEffect.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": function() { return /* binding */ useLayoutUpdateEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 62435);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dom/canUseDom */ 98924);


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useLayoutEffect =  true && (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ __webpack_exports__["Z"] = (useLayoutEffect);
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  var firstMountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps);
  // We tell react that first mount has passed
  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};

/***/ }),

/***/ 42550:
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/ref.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yr": function() { return /* binding */ supportRef; },
/* harmony export */   "mH": function() { return /* binding */ fillRef; },
/* harmony export */   "sQ": function() { return /* binding */ composeRef; }
/* harmony export */ });
/* unused harmony export useComposeRef */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ 71002);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ 11805);
/* harmony import */ var _hooks_useMemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useMemo */ 56982);



function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length === next.length && prev.every(function (ref, i) {
      return ref === next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0,react_is__WEBPACK_IMPORTED_MODULE_0__.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  }
  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
/* eslint-enable */

/***/ }),

/***/ 91033:
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["Z"] = (index);


/***/ }),

/***/ 97218:
/*!***************************************************!*\
  !*** ./node_modules/axios/dist/browser/axios.cjs ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ 48764)["lW"];
// Axios v1.3.3 Copyright (c) 2023 Matt Zabriskie and contributors


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : __webpack_require__.g)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

var utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


var platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

var cookies = platform.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.3.3";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer !== undefined) {
      validator.assertOptions(paramsSerializer, {
        encode: validators.function,
        serialize: validators.function
      }, true);
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map


/***/ }),

/***/ 8433:
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/axios.js + 39 modules ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ lib_axios; }
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    utils_toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

/* harmony default export */ var utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ var core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ var helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ 48764)["lW"];




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ var helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ var helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ var core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ var defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ var classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ var classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js



/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ var browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new browser.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ var helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: browser.classes.FormData,
    Blob: browser.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ var lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ var parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

/* harmony default export */ var core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ var cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ var cookies = (browser.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ var isURLSameOrigin = (browser.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ var helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ var xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (browser.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && browser.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: helpers_null,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ var adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new core_AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.3.3";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ var validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer !== undefined) {
      validator.assertOptions(paramsSerializer, {
        encode: Axios_validators.function,
        serialize: Axios_validators.function
      }, true);
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ var core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ var cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ var helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ var lib_axios = (axios);


/***/ })

}]);