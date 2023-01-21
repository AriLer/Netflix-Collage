/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ControlledCarousel.jsx":
/*!***********************************************!*\
  !*** ./src/components/ControlledCarousel.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var _collage_Collage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collage/Collage */ "./src/components/collage/Collage.jsx");
/* harmony import */ var _Stats_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats/Stats */ "./src/components/Stats/Stats.jsx");
/* harmony import */ var _shareRow_ShareRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareRow/ShareRow */ "./src/components/shareRow/ShareRow.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ControlledCarousel(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    index = _useState2[0],
    setIndex = _useState2[1];
  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
  };
  if (props.data && props.data.history && props.data.history.length !== 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "carousel-container",
      activeIndex: index,
      onSelect: handleSelect,
      interval: null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
      className: "carousel-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_collage_Collage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: props.data
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
      className: "carousel-page"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stats_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
      history: props.data.history
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shareRow_ShareRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: props.data
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      style: {
        padding: '1rem'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: "empty-history"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Your history for this month is empty ..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "./images/no-connection.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " try Refreshing Netflix and then reopen the extension")));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlledCarousel);

/***/ }),

/***/ "./src/components/Stats/GeneralStats.jsx":
/*!***********************************************!*\
  !*** ./src/components/Stats/GeneralStats.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function GeneralStats(props) {
  var getLongestBinge = function getLongestBinge() {
    var arr = [0]; // date , amount
    var prevDate = props.history[0].dateStr;
    var i = 0;
    props.history.map(function (item) {
      if (item.dateStr === prevDate) {
        arr[i] += item.watchtime;
      } else {
        arr.push(item.watchtime);
        prevDate = item.dateStr;
        i++;
      }
    });
    var most = 0;
    for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
      var day = _arr[_i];
      most = Math.max(day, most);
    }
    var hours = Math.floor(most / 60 / 60);
    var minutes = Math.floor(most / 60) - hours * 60;
    return "".concat(hours, "h ").concat(minutes, "m");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chart",
    id: "general-stats"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Titles watched"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.history.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Most Netflix In a Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, getLongestBinge()));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralStats);

/***/ }),

/***/ "./src/components/Stats/Stats.jsx":
/*!****************************************!*\
  !*** ./src/components/Stats/Stats.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _TypePieChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypePieChart */ "./src/components/Stats/TypePieChart.jsx");
/* harmony import */ var _WatchtimeChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WatchtimeChart */ "./src/components/Stats/WatchtimeChart.jsx");
/* harmony import */ var _GeneralStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GeneralStats */ "./src/components/Stats/GeneralStats.jsx");
/* harmony import */ var _stats_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.css */ "./src/components/Stats/stats.css");






function Stats(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      height: '14rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GeneralStats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    history: props.history
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TypePieChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    history: props.history
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WatchtimeChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    history: props.history
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);

/***/ }),

/***/ "./src/components/Stats/TypePieChart.jsx":
/*!***********************************************!*\
  !*** ./src/components/Stats/TypePieChart.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");


function getTypeStas(history) {
  var typeStats = [0, 0];
  history.map(function (item) {
    item.type === 'tv' ? typeStats[0] += 1 : typeStats[1] += 1;
  });
  return [{
    name: 'tv',
    value: typeStats[0]
  }, {
    name: 'movies',
    value: typeStats[1]
  }];
}
function TypePieChart(props) {
  var data = getTypeStas(props.history);
  var COLORS = ['#c10b0b', '#6b6b6b'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chart",
    id: "type-chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__.PieChart, {
    width: 176,
    height: 176
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__.Pie, {
    data: data,
    cx: "50%",
    cy: "50%",
    stroke: '#00000',
    labelLine: false,
    outerRadius: 70,
    dataKey: "value"
  }, data.map(function (entry, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.Cell, {
      key: "cell-".concat(index),
      fill: COLORS[index % COLORS.length]
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    id: "type-chart-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: '#700000'
    }
  }, "Shows"), " |", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: '#bebebe'
    }
  }, "Movies")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypePieChart);

/***/ }),

/***/ "./src/components/Stats/WatchtimeChart.jsx":
/*!*************************************************!*\
  !*** ./src/components/Stats/WatchtimeChart.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/BarChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Bar.js");


function WatchtimeChart(props) {
  var getData = function getData() {
    var data = [{
      day: 'Sun',
      watchtime: 0
    }, {
      day: 'Mon',
      watchtime: 0
    }, {
      day: 'Tue',
      watchtime: 0
    }, {
      day: 'Wed',
      watchtime: 0
    }, {
      day: 'Thu',
      watchtime: 0
    }, {
      day: 'Fri',
      watchtime: 0
    }, {
      day: 'Sat',
      watchtime: 0
    }];
    props.history.forEach(function (item) {
      var watchtime = item.watchtime;
      var myDate = new Date(item.dateStr);
      if (watchtime) {
        data[myDate.getDay()].watchtime += watchtime;
      }
    });
    return data;
  };
  getData();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "chart",
    id: "watchtime-chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Watchtime by day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__.BarChart, {
    width: 300,
    height: 150,
    data: getData()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {
    dataKey: "day"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.Bar, {
    dataKey: "watchtime",
    fill: "#db0000"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchtimeChart);

/***/ }),

/***/ "./src/components/collage/Collage.jsx":
/*!********************************************!*\
  !*** ./src/components/collage/Collage.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _collage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collage.css */ "./src/components/collage/collage.css");
/* harmony import */ var _Poster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Poster */ "./src/components/collage/Poster.jsx");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./src/components/collage/styles.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Collage = function Collage(props) {
  setTimeout(function () {
    return setIsShowing(true);
  }, 50);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowing = _useState2[0],
    setIsShowing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    list = _useState6[0],
    setList = _useState6[1];
  var arrLength = 6;
  var createSummery = function createSummery(lng) {
    var list = [];
    props.data.history.forEach(function (e) {
      if (e.rating !== 1) {
        var idx = list.findIndex(function (t) {
          return t.title === e.title;
        });
        if (idx === -1) {
          var newItem = _objectSpread({}, e);
          newItem.watchtime = e.rating === 2 ? e.watchtime * 2 : e.watchtime;
          list.push(_objectSpread({}, newItem));
        } else {
          list[idx].watchtime += e.watchtime * 2;
        }
      }
    });
    list.sort(function (a, b) {
      return a.watchtime > b.watchtime ? -1 : 1;
    });
    list.length = list.length > lng ? lng : list.length;
    console.log('final list is', list);
    return list;
  };
  var styleData = _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"][list.length - 1];
  if (list.length === 0 && props.data.history.length > 0) {
    setList(createSummery(arrLength));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "collage-container",
    style: {
      display: isShowing ? 'visible' : 'hidden'
    }
  }, list.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Poster__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: item,
      idx: i,
      key: "collage-poster__".concat(i),
      sty: styleData[i],
      focus: function focus(idx) {
        console.log('focusing on ', idx);
        setFocused(idx);
      },
      isFocused: focused === i
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collage);

/***/ }),

/***/ "./src/components/collage/InfoSection.jsx":
/*!************************************************!*\
  !*** ./src/components/collage/InfoSection.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function getDateString(timestamp) {
  var d = new Date(timestamp);
  return "".concat(d.getDate(), "/").concat(d.getMonth(), "/").concat(d.getFullYear());
}
function infoSection(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "poster-info",
    style: {
      visibility: props.isFocused ? 'visible' : 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collage-ranking"
  }, "#", props.idx), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "last-watched"
  }, props.data.type === 'tv' && 'last ', " watched", ' ', getDateString(props.data.dateStr)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (infoSection);

/***/ }),

/***/ "./src/components/collage/Poster.jsx":
/*!*******************************************!*\
  !*** ./src/components/collage/Poster.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _InfoSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoSection */ "./src/components/collage/InfoSection.jsx");


var Poster = function Poster(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onMouseDown: function onMouseDown() {
      props.focus(props.isFocused ? -1 : props.idx);
    },
    className: "poster-item ".concat(props.isFocused ? 'focus' : ''),
    style: {
      position: 'absolute',
      top: "".concat(props.sty.top, "rem"),
      left: "".concat(props.sty.left, "rem"),
      zIndex: "".concat(props.sty.index),
      filter: "blur(".concat(props.sty.blur, "px)"),
      transform: "scale(".concat(props.sty.scale, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: props.data.poster ? props.data.poster : './images/not-found.png',
    alt: "poster not found",
    className: "poster-img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InfoSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isFocused: props.isFocused,
    data: props.data,
    idx: props.idx + 1,
    showTitle: !props.data.poster
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poster);

/***/ }),

/***/ "./src/components/collage/styles.js":
/*!******************************************!*\
  !*** ./src/components/collage/styles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var style = [[{
  top: 12,
  left: 8,
  index: 2,
  scale: 2
}],
// 1 item
[
// 2 items
{
  top: 14,
  left: 6.5,
  index: 3,
  scale: 1.8
}, {
  top: 8,
  left: 11,
  index: 2,
  scale: 1.5,
  blur: 0.3
}], [
// 3 items
{
  top: 12,
  left: 8,
  index: 4,
  scale: 1.7
}, {
  top: 16.5,
  left: 3,
  index: 2,
  scale: 1.4
}, {
  top: 7,
  left: 13,
  index: 3,
  blur: 0.5,
  scale: 1.1
}], [
// 4 items
{
  top: 11,
  left: 8,
  index: 4,
  scale: 1.6
}, {
  top: 16.5,
  left: 3.5,
  index: 2,
  scale: 1.25
}, {
  top: 16,
  left: 13,
  index: 4,
  blur: 0.6,
  scale: 1
}, {
  top: 5,
  left: 5,
  index: 2,
  blur: 1,
  scale: 0.9
}], [
// 5 items
{
  top: 12,
  left: 8,
  index: 4,
  scale: 1.7
}, {
  top: 16,
  left: 3.5,
  index: 2,
  scale: 1.3
}, {
  top: 7,
  left: 13,
  index: 3,
  blur: 0.3,
  scale: 1.1
}, {
  top: 5,
  left: 4,
  index: 2,
  blur: 1.1,
  scale: 0.95
}, {
  top: 18.5,
  left: 12,
  index: 2,
  blur: 1.4,
  scale: 0.9
}], [
// 6 items
{
  top: 12.5,
  left: 8,
  index: 4,
  scale: 1.5
}, {
  top: 16.5,
  left: 2.5,
  index: 2,
  scale: 1.2
}, {
  top: 9,
  left: 13.5,
  index: 3,
  blur: 0.3,
  scale: 1
}, {
  top: 4.5,
  left: 8,
  index: 2,
  blur: 0.8,
  scale: 0.9
}, {
  top: 18.5,
  left: 10.5,
  index: 2,
  blur: 1,
  scale: 0.9
}, {
  top: 6.5,
  left: 2.5,
  index: 3,
  blur: 1.7,
  scale: 0.85
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ "./src/components/history/History.jsx":
/*!********************************************!*\
  !*** ./src/components/history/History.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _HistoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HistoryItem */ "./src/components/history/HistoryItem.jsx");
/* harmony import */ var _history_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.css */ "./src/components/history/history.css");



var ShowList = function ShowList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "full-history"
  }, props.data.history.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HistoryItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item,
      key: "historyItem_".concat(index)
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "icons for this app were taken from flaticon.com"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowList);

/***/ }),

/***/ "./src/components/history/HistoryItem.jsx":
/*!************************************************!*\
  !*** ./src/components/history/HistoryItem.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");



var HistoryItem = function HistoryItem(props) {
  var getRatingImgPath = function getRatingImgPath() {
    return props.data.rating === 2 ? './images/like.png' : './images/dislike.png';
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "item-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: props.data.poster,
    alt: "poster",
    className: "history-poster"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 9,
    className: "history-item-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "title"
  }, props.data.rating != 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "rating-icon",
    src: getRatingImgPath()
  }), props.data.title), props.data.type === 'tv' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "ep-title"
  }, props.data.epTitle)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryItem);

/***/ }),

/***/ "./src/components/shareRow/ShareRow.jsx":
/*!**********************************************!*\
  !*** ./src/components/shareRow/ShareRow.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _history_History__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../history/History */ "./src/components/history/History.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var dom_to_image_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-to-image-more */ "./node_modules/dom-to-image-more/dist/dom-to-image-more.min.js");
/* harmony import */ var dom_to_image_more__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_to_image_more__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shareRow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareRow.css */ "./src/components/shareRow/shareRow.css");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ShareRow(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showHistory = _useState2[0],
    setShowHistory = _useState2[1];
  var shareClickHandler = function shareClickHandler() {
    console.log('this is the download image method');
    var indicatorsEl = document.getElementsByClassName('carousel-indicators')[0];
    var shareRowEl = document.getElementById('share-row');
    indicatorsEl.style.visibility = 'hidden';
    shareRowEl.style.visibility = 'hidden';
    document.body.style.height = '30rem';
    dom_to_image_more__WEBPACK_IMPORTED_MODULE_2___default().toPng(document.getElementById('root'), {
      quality: 5
    }).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.png';
      link.href = dataUrl;
      link.click();
      indicatorsEl.style.visibility = 'visible';
      shareRowEl.style.visibility = 'visible';
    })["catch"](function (error) {
      console.error('oops, something went wrong!', error);
      indicatorsEl.style.visibility = 'visible';
      shareRowEl.style.visibility = 'visible';
    });
  };
  var handleHistoryClick = function handleHistoryClick(IsShowing) {
    var indicatorsEl = document.getElementsByClassName('carousel-indicators')[0];
    if (IsShowing) {
      indicatorsEl.style.visibility = 'visible';
      setShowHistory(false);
    } else {
      indicatorsEl.style.visibility = 'hidden';
      setShowHistory(true);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "share-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "download-btn",
    onClick: shareClickHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "./images/download.png"
  })), "Download Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "history-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "./images/history.png",
    onClick: function onClick() {
      return handleHistoryClick(false);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showHistory,
    onHide: function onHide() {
      return handleHistoryClick(true);
    },
    id: "history-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
    id: "history-modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_history_History__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: props.data
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareRow);

/***/ }),

/***/ "./src/popup/popup.jsx":
/*!*****************************!*\
  !*** ./src/popup/popup.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _components_ControlledCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ControlledCarousel */ "./src/components/ControlledCarousel.jsx");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isShown = _useState8[0],
    setIsShown = _useState8[1];
  var getHistory = function getHistory() {
    if (!data) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {}, function (response) {
          setData(_objectSpread({}, response));
          console.log('data has been set: ', response);
          setIsLoading(false);
          setExpanded(true);
          setTimeout(function () {
            return setIsShown(true);
          }, 150);
        });
      });
    }
  };
  var handleClick = function handleClick() {
    setIsLoading(true);
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      var url = tabs[0].url;
      if (!url.includes('www.netflix.com')) {
        chrome.tabs.create({
          url: 'https://www.netflix.com/YourAccount'
        }, function (tab) {
          getHistory();
        });
      } else {
        getHistory();
      }
    });
  };
  var startWindow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Your Netflix Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "action-section"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    animation: "border",
    variant: "danger"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "welcome-button",
    onClick: handleClick
  }, "View & share")));
  var mainWindow = isShown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ControlledCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: expanded ? 'main-window' : 'start-window'
  }, expanded ? mainWindow : startWindow);
};
var root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
document.head.append('<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">');
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), root);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Stats/stats.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Stats/stats.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chart {\n  background-color: #72737369;\n  border-radius: 12px;\n}\n\n#general-stats {\n  padding: 1.2rem 0.36rem 1rem 0.6rem;\n  height: 13rem;\n  width: 7rem;\n}\n\n#general-stats h2 {\n  font-size: 1.1rem;\n  color: #bebebe;\n  margin-bottom: 0.2rem;\n}\n\n#general-stats p {\n  color: black;\n  padding-left: 0.2rem;\n}\n\n#general-stats hr {\n  border-top: 2px solid !important;\n  margin: -0.3rem 0rem 0.9rem !important;\n  color: #000000d9 !important;\n  width: 80%;\n}\n\n#type-chart {\n  height: 13rem;\n  width: 11rem;\n  text-align: center;\n}\n\n#type-chart-title {\n  font-size: 1.2rem;\n  margin-top: -0.4rem !important;\n}\n\n#watchtime-chart {\n  height: 12.3rem;\n  padding: 1.3rem 0.3rem;\n  text-align: center;\n}\n\n#watchtime-chart h2 {\n  margin-bottom: 0rem;\n  margin-top: -0.2rem;\n  color: #bebebe;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Stats/stats.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;EAChC,sCAAsC;EACtC,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":[".chart {\n  background-color: #72737369;\n  border-radius: 12px;\n}\n\n#general-stats {\n  padding: 1.2rem 0.36rem 1rem 0.6rem;\n  height: 13rem;\n  width: 7rem;\n}\n\n#general-stats h2 {\n  font-size: 1.1rem;\n  color: #bebebe;\n  margin-bottom: 0.2rem;\n}\n\n#general-stats p {\n  color: black;\n  padding-left: 0.2rem;\n}\n\n#general-stats hr {\n  border-top: 2px solid !important;\n  margin: -0.3rem 0rem 0.9rem !important;\n  color: #000000d9 !important;\n  width: 80%;\n}\n\n#type-chart {\n  height: 13rem;\n  width: 11rem;\n  text-align: center;\n}\n\n#type-chart-title {\n  font-size: 1.2rem;\n  margin-top: -0.4rem !important;\n}\n\n#watchtime-chart {\n  height: 12.3rem;\n  padding: 1.3rem 0.3rem;\n  text-align: center;\n}\n\n#watchtime-chart h2 {\n  margin-bottom: 0rem;\n  margin-top: -0.2rem;\n  color: #bebebe;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/collage/collage.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/collage/collage.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#collage-container {\n  width: 15rem !important;\n  height: 25rem !important;\n}\n\n.poster-item {\n  transition-duration: 0.4s;\n  max-height: 7.5rem;\n  max-width: 5rem;\n}\n\n.poster-img {\n  max-width: 5rem;\n  border-radius: 10px;\n  box-shadow: #0000004d 0px 0px 5px 0px;\n  transition: opacity 0.3s;\n}\n\n.poster-item:not(.focus) > .poster-img:hover {\n  opacity: 0.9;\n}\n\n/* INFO Section */\n\n.poster-info {\n  color: #cecece !important;\n  font-size: 0.5rem !important;\n  padding: 0.1rem;\n  width: 6rem;\n  translate: -10px -2px;\n}\n\n.collage-ranking {\n  display: inline-block !important;\n  background-color: antiquewhite;\n  margin: 0.5rem;\n  padding: 0.2rem;\n  border-radius: 2px;\n  font-size: 0.6rem;\n  color: #db0000;\n  translate: 5px 0px;\n}\n\n.last-watched {\n  display: inline-block !important;\n  width: 50%;\n  font-size: 0.45rem;\n  translate: 10px 4px;\n  color: #cecece;\n}\n\n.focus {\n  background-color: #283133;\n  opacity: 0.98;\n  border-radius: 8px !important;\n  transform: scale(2.2) !important;\n  filter: blur(0) !important;\n  z-index: 5 !important;\n  left: 7.5rem !important;\n  top: 9rem !important;\n  padding: 0.5rem;\n  max-height: 10rem !important;\n  max-width: 6rem !important;\n}\n", "",{"version":3,"sources":["webpack://./src/components/collage/collage.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,qCAAqC;EACrC,wBAAwB;AAC1B;;AAEA;EACE,YAAY;AACd;;AAEA,iBAAiB;;AAEjB;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,eAAe;EACf,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,8BAA8B;EAC9B,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,6BAA6B;EAC7B,gCAAgC;EAChC,0BAA0B;EAC1B,qBAAqB;EACrB,uBAAuB;EACvB,oBAAoB;EACpB,eAAe;EACf,4BAA4B;EAC5B,0BAA0B;AAC5B","sourcesContent":["#collage-container {\n  width: 15rem !important;\n  height: 25rem !important;\n}\n\n.poster-item {\n  transition-duration: 0.4s;\n  max-height: 7.5rem;\n  max-width: 5rem;\n}\n\n.poster-img {\n  max-width: 5rem;\n  border-radius: 10px;\n  box-shadow: #0000004d 0px 0px 5px 0px;\n  transition: opacity 0.3s;\n}\n\n.poster-item:not(.focus) > .poster-img:hover {\n  opacity: 0.9;\n}\n\n/* INFO Section */\n\n.poster-info {\n  color: #cecece !important;\n  font-size: 0.5rem !important;\n  padding: 0.1rem;\n  width: 6rem;\n  translate: -10px -2px;\n}\n\n.collage-ranking {\n  display: inline-block !important;\n  background-color: antiquewhite;\n  margin: 0.5rem;\n  padding: 0.2rem;\n  border-radius: 2px;\n  font-size: 0.6rem;\n  color: #db0000;\n  translate: 5px 0px;\n}\n\n.last-watched {\n  display: inline-block !important;\n  width: 50%;\n  font-size: 0.45rem;\n  translate: 10px 4px;\n  color: #cecece;\n}\n\n.focus {\n  background-color: #283133;\n  opacity: 0.98;\n  border-radius: 8px !important;\n  transform: scale(2.2) !important;\n  filter: blur(0) !important;\n  z-index: 5 !important;\n  left: 7.5rem !important;\n  top: 9rem !important;\n  padding: 0.5rem;\n  max-height: 10rem !important;\n  max-width: 6rem !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/history/history.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/history/history.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".full-history {\n  overflow-y: scroll;\n  box-sizing: content-box;\n  height: 25rem;\n  padding-left: 0.75rem;\n  width: 100%;\n}\n\n.full-history::-webkit-scrollbar {\n  display: none;\n}\n\n.item-card {\n  background-color: #3a4749 !important;\n  padding: 0.4rem 0rem !important;\n  border-radius: 8px !important;\n  margin: 0.6rem -0.6rem !important;\n  width: 99.5%;\n}\n\n.history-poster {\n  width: 3rem;\n  border-radius: 8px;\n}\n\n.history-item-info {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0.5rem;\n  padding-left: 0.4rem;\n}\n\n.title {\n  color: rgb(206, 206, 206) !important;\n  font-size: 1.15rem !important;\n}\n\n.ep-title {\n  color: rgb(157, 157, 157);\n  font-size: 0.75rem;\n  margin-bottom: 0rem;\n  transform: translateY(-6px);\n  line-height: 0.9rem;\n  padding-left: 0.2rem;\n}\n\n.rating-icon {\n  height: 1.2rem;\n  transform: translate(-4px, -4px);\n}\n\n.full-history p {\n  color: #777777;\n  font-size: 0.7rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/history/history.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,+BAA+B;EAC/B,6BAA6B;EAC7B,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB","sourcesContent":[".full-history {\n  overflow-y: scroll;\n  box-sizing: content-box;\n  height: 25rem;\n  padding-left: 0.75rem;\n  width: 100%;\n}\n\n.full-history::-webkit-scrollbar {\n  display: none;\n}\n\n.item-card {\n  background-color: #3a4749 !important;\n  padding: 0.4rem 0rem !important;\n  border-radius: 8px !important;\n  margin: 0.6rem -0.6rem !important;\n  width: 99.5%;\n}\n\n.history-poster {\n  width: 3rem;\n  border-radius: 8px;\n}\n\n.history-item-info {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0.5rem;\n  padding-left: 0.4rem;\n}\n\n.title {\n  color: rgb(206, 206, 206) !important;\n  font-size: 1.15rem !important;\n}\n\n.ep-title {\n  color: rgb(157, 157, 157);\n  font-size: 0.75rem;\n  margin-bottom: 0rem;\n  transform: translateY(-6px);\n  line-height: 0.9rem;\n  padding-left: 0.2rem;\n}\n\n.rating-icon {\n  height: 1.2rem;\n  transform: translate(-4px, -4px);\n}\n\n.full-history p {\n  color: #777777;\n  font-size: 0.7rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/shareRow/shareRow.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/shareRow/shareRow.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#share-row {\n  padding-top: 0.3rem;\n  background-color: #1c1c1c !important;\n  animation: fadeInFromNone 0.3s ease-out;\n  bottom: 0;\n}\n\n#download-btn {\n  height: 2.5rem;\n  width: 15.5rem;\n  font-size: 0.8rem;\n  background-color: #00000000 !important;\n  border-width: 0 !important;\n  margin-left: 2.5rem;\n}\n\n#download-btn div {\n  height: 2rem;\n  width: 2rem;\n  background-color: #c8c8c8;\n  translate: -6px -18%;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#download-btn div img {\n  height: 1.1rem;\n  translate: 0 25%;\n}\n\n#history-btn {\n  height: 1.5rem;\n  width: 1.5rem;\n  background-color: #646464;\n  translate: 50% -10%;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#history-btn img {\n  height: 1.2rem;\n  width: 1.3rem;\n  translate: 3% -7%;\n}\n\n/* History Modal */\n\n#history-modal {\n  top: 0.7rem;\n  right: 0.4rem;\n  background-color: #1c1c1c !important;\n  border-radius: 8px;\n}\n\n.modal-content {\n  background-color: #1c1c1c !important;\n}\n\n#history-modal-body {\n  background-color: #202627;\n  border-radius: 8px;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/shareRow/shareRow.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,uCAAuC;EACvC,SAAS;AACX;;AAEA;EACE,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,sCAAsC;EACtC,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;AACnB;;AAEA,kBAAkB;;AAElB;EACE,WAAW;EACX,aAAa;EACb,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE;IACE,aAAa;IACb,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,UAAU;EACZ;AACF","sourcesContent":["#share-row {\n  padding-top: 0.3rem;\n  background-color: #1c1c1c !important;\n  animation: fadeInFromNone 0.3s ease-out;\n  bottom: 0;\n}\n\n#download-btn {\n  height: 2.5rem;\n  width: 15.5rem;\n  font-size: 0.8rem;\n  background-color: #00000000 !important;\n  border-width: 0 !important;\n  margin-left: 2.5rem;\n}\n\n#download-btn div {\n  height: 2rem;\n  width: 2rem;\n  background-color: #c8c8c8;\n  translate: -6px -18%;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#download-btn div img {\n  height: 1.1rem;\n  translate: 0 25%;\n}\n\n#history-btn {\n  height: 1.5rem;\n  width: 1.5rem;\n  background-color: #646464;\n  translate: 50% -10%;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#history-btn img {\n  height: 1.2rem;\n  width: 1.3rem;\n  translate: 3% -7%;\n}\n\n/* History Modal */\n\n#history-modal {\n  top: 0.7rem;\n  right: 0.4rem;\n  background-color: #1c1c1c !important;\n  border-radius: 8px;\n}\n\n.modal-content {\n  background-color: #1c1c1c !important;\n}\n\n#history-modal-body {\n  background-color: #202627;\n  border-radius: 8px;\n}\n\n@keyframes fadeInFromNone {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n\n  1% {\n    display: block;\n    opacity: 0;\n  }\n\n  100% {\n    display: block;\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Elements */\n\nbody {\n  background-color: #1c1c1c !important;\n  font-family: 'Roboto Condensed', sans-serif !important;\n}\n\nh1 {\n  color: rgb(207, 211, 215) !important;\n  font-size: 2rem !important;\n  font-weight: bold !important;\n}\n\n/* Start window */\n\n#start-window {\n  padding: 0.5rem 0 0 0.6rem;\n  width: 13rem;\n  height: 9rem;\n  justify-content: center;\n  align-items: center;\n}\n\n#action-section {\n  margin: 0.6rem;\n  display: flex;\n  justify-content: center;\n}\n\n#welcome-button {\n  background-color: #db0000 !important;\n  border: #db0000 !important;\n  margin-right: 3.5rem;\n}\n\n/* Main window */\n\n#main-window {\n  width: 21rem;\n  height: 31.8rem;\n  transition: all 0.3s ease-out !important;\n  background: linear-gradient(322deg, #000000 0%, #b52a2a 56%, #000000 100%);\n}\n\n/* Carousel */\n\n.carousel {\n  border-radius: 8px;\n  height: 29rem;\n}\n\n.carousel-item {\n  padding-top: 2rem;\n}\n\n.carousel-control-next,\n.carousel-control-prev {\n  width: 10% !important;\n  height: 29rem !important;\n  opacity: 0 !important;\n  transition: opacity cubic-bezier(0.19, 1, 0.22, 1) 0.3s !important;\n}\n.carousel-control-next:hover,\n.carousel-control-prev:hover {\n  opacity: 0.3 !important;\n}\n\n.carousel-indicators {\n  top: 0.1rem !important;\n}\n.carousel-indicators button {\n  width: 45px !important;\n  margin-right: 6px !important;\n  margin-left: 6px !important;\n}\n\n/* Empty History */\n\n#empty-history {\n  background-color: #3b3535;\n  text-align: center;\n  border-radius: 1rem;\n  padding: 2rem 1.5rem;\n  margin: 0rem 2rem;\n  translate: 0rem 3rem;\n}\n\n#empty-history h1 {\n  line-height: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n#empty-history img {\n  width: 45%;\n}\n\n#empty-history p {\n  color: #988686;\n  font-size: 0.9rem;\n  line-height: 1.2rem;\n  margin-top: 2rem;\n  margin-bottom: 0rem;\n}\n", "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA,aAAa;;AAEb;EACE,oCAAoC;EACpC,sDAAsD;AACxD;;AAEA;EACE,oCAAoC;EACpC,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA,iBAAiB;;AAEjB;EACE,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,0BAA0B;EAC1B,oBAAoB;AACtB;;AAEA,gBAAgB;;AAEhB;EACE,YAAY;EACZ,eAAe;EACf,wCAAwC;EACxC,0EAA0E;AAC5E;;AAEA,aAAa;;AAEb;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,qBAAqB;EACrB,wBAAwB;EACxB,qBAAqB;EACrB,kEAAkE;AACpE;AACA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA,kBAAkB;;AAElB;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["/* Elements */\n\nbody {\n  background-color: #1c1c1c !important;\n  font-family: 'Roboto Condensed', sans-serif !important;\n}\n\nh1 {\n  color: rgb(207, 211, 215) !important;\n  font-size: 2rem !important;\n  font-weight: bold !important;\n}\n\n/* Start window */\n\n#start-window {\n  padding: 0.5rem 0 0 0.6rem;\n  width: 13rem;\n  height: 9rem;\n  justify-content: center;\n  align-items: center;\n}\n\n#action-section {\n  margin: 0.6rem;\n  display: flex;\n  justify-content: center;\n}\n\n#welcome-button {\n  background-color: #db0000 !important;\n  border: #db0000 !important;\n  margin-right: 3.5rem;\n}\n\n/* Main window */\n\n#main-window {\n  width: 21rem;\n  height: 31.8rem;\n  transition: all 0.3s ease-out !important;\n  background: linear-gradient(322deg, #000000 0%, #b52a2a 56%, #000000 100%);\n}\n\n/* Carousel */\n\n.carousel {\n  border-radius: 8px;\n  height: 29rem;\n}\n\n.carousel-item {\n  padding-top: 2rem;\n}\n\n.carousel-control-next,\n.carousel-control-prev {\n  width: 10% !important;\n  height: 29rem !important;\n  opacity: 0 !important;\n  transition: opacity cubic-bezier(0.19, 1, 0.22, 1) 0.3s !important;\n}\n.carousel-control-next:hover,\n.carousel-control-prev:hover {\n  opacity: 0.3 !important;\n}\n\n.carousel-indicators {\n  top: 0.1rem !important;\n}\n.carousel-indicators button {\n  width: 45px !important;\n  margin-right: 6px !important;\n  margin-left: 6px !important;\n}\n\n/* Empty History */\n\n#empty-history {\n  background-color: #3b3535;\n  text-align: center;\n  border-radius: 1rem;\n  padding: 2rem 1.5rem;\n  margin: 0rem 2rem;\n  translate: 0rem 3rem;\n}\n\n#empty-history h1 {\n  line-height: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n#empty-history img {\n  width: 45%;\n}\n\n#empty-history p {\n  color: #988686;\n  font-size: 0.9rem;\n  line-height: 1.2rem;\n  margin-top: 2rem;\n  margin-bottom: 0rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Stats/stats.css":
/*!****************************************!*\
  !*** ./src/components/Stats/stats.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stats_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./stats.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Stats/stats.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stats_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stats_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/collage/collage.css":
/*!********************************************!*\
  !*** ./src/components/collage/collage.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_collage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./collage.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/collage/collage.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_collage_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_collage_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/history/history.css":
/*!********************************************!*\
  !*** ./src/components/history/history.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_history_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./history.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/history/history.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_history_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_history_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/shareRow/shareRow.css":
/*!**********************************************!*\
  !*** ./src/components/shareRow/shareRow.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shareRow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./shareRow.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/shareRow/shareRow.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shareRow_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shareRow_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_chrome_extension"] = self["webpackChunkreact_chrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_dom-to-image-more_dist_dom-to-image-more_min_js-node_modules_react-boots-eb404d"], () => (__webpack_require__("./src/popup/popup.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map