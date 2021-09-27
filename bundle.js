/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#projectInputDiv {\n  margin: 10px;\n}\n\n.projectDiv {\n  border: 1px solid red;\n  margin: 10px;\n}\n\n.userInterfaceDiv {\n  display: none;\n  position: fixed;\n  left: 45%;\n  top: 5%;\n  transform: translate(-50%, 5%);\n  border: 5 px solid blue;\n  background-color: grey;\n}\n\n.todoDiv {\n  border: 1px solid purple;\n  margin-top: 10px;\n}\n\n.projectDeleteButton {\n  margin-left: 10px;\n}\n\n/* (A) POPUP */\n.picker-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s;\n}\n.picker-wrap.show {\n  opacity: 1;\n  visibility: visible;\n}\n.picker-wrap .picker {\n  margin: 50vh auto 0 auto;\n  transform: translateY(-50%);\n}\n\n/* (B) CONTAINER */\n.picker {\n  max-width: 500px;\n  background: #444444;\n  padding: 10px;\n}\n\n/* (C) MONTH + YEAR */\n.picker-m,\n.picker-y {\n  width: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n/* (D) DAY */\n.picker-d table {\n  color: #fff;\n  border-collapse: separate;\n  width: 100%;\n  margin-top: 10px;\n}\n.picker-d table td {\n  width: 14.28%; /* 7 EQUAL COLUMNS */\n  padding: 5px;\n  text-align: center;\n}\n/* HEADER CELLS */\n.picker-d-h td {\n  font-weight: bold;\n}\n/* BLANK DATES */\n.picker-d-b {\n  background: #4e4e4e;\n}\n/* TODAY */\n.picker-d-td {\n  background: #d84f4f;\n}\n/* PICKABLE DATES */\n.picker-d-d:hover {\n  cursor: pointer;\n  background: #a33c3c;\n}\n/* UNPICKABLE DATES */\n.picker-d-dd {\n  color: #888;\n  background: #4e4e4e;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,OAAO;EACP,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,cAAc;AACd;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf;;AAEA,qBAAqB;AACrB;;EAEE,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,aAAa,EAAE,oBAAoB;EACnC,YAAY;EACZ,kBAAkB;AACpB;AACA,iBAAiB;AACjB;EACE,iBAAiB;AACnB;AACA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;AACA,UAAU;AACV;EACE,mBAAmB;AACrB;AACA,mBAAmB;AACnB;EACE,eAAe;EACf,mBAAmB;AACrB;AACA,qBAAqB;AACrB;EACE,WAAW;EACX,mBAAmB;AACrB","sourcesContent":["#projectInputDiv {\n  margin: 10px;\n}\n\n.projectDiv {\n  border: 1px solid red;\n  margin: 10px;\n}\n\n.userInterfaceDiv {\n  display: none;\n  position: fixed;\n  left: 45%;\n  top: 5%;\n  transform: translate(-50%, 5%);\n  border: 5 px solid blue;\n  background-color: grey;\n}\n\n.todoDiv {\n  border: 1px solid purple;\n  margin-top: 10px;\n}\n\n.projectDeleteButton {\n  margin-left: 10px;\n}\n\n/* (A) POPUP */\n.picker-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s;\n}\n.picker-wrap.show {\n  opacity: 1;\n  visibility: visible;\n}\n.picker-wrap .picker {\n  margin: 50vh auto 0 auto;\n  transform: translateY(-50%);\n}\n\n/* (B) CONTAINER */\n.picker {\n  max-width: 500px;\n  background: #444444;\n  padding: 10px;\n}\n\n/* (C) MONTH + YEAR */\n.picker-m,\n.picker-y {\n  width: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n/* (D) DAY */\n.picker-d table {\n  color: #fff;\n  border-collapse: separate;\n  width: 100%;\n  margin-top: 10px;\n}\n.picker-d table td {\n  width: 14.28%; /* 7 EQUAL COLUMNS */\n  padding: 5px;\n  text-align: center;\n}\n/* HEADER CELLS */\n.picker-d-h td {\n  font-weight: bold;\n}\n/* BLANK DATES */\n.picker-d-b {\n  background: #4e4e4e;\n}\n/* TODAY */\n.picker-d-td {\n  background: #d84f4f;\n}\n/* PICKABLE DATES */\n.picker-d-d:hover {\n  cursor: pointer;\n  background: #a33c3c;\n}\n/* UNPICKABLE DATES */\n.picker-d-dd {\n  color: #888;\n  background: #4e4e4e;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dataStructure.js":
/*!******************************!*\
  !*** ./src/dataStructure.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsDisplay": () => (/* binding */ projectsDisplay)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterface.js */ "./src/userInterface.js");




let projectsDisplayDiv = document.createElement("div");

function projectsDisplay(){
    projectsDisplayDiv.innerHTML = '';

    for (const [i] in _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray) {
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("class", "projectDiv");
        projectDiv.innerText = _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].projectName;

        let newTODOButton = document.createElement("button");
        newTODOButton.innerText = "New Todo";
        newTODOButton.setAttribute("id", "newTODOButton");

        newTODOButton.addEventListener("click", function(){
            _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.display = "block";
        })

        projectDiv.appendChild(newTODOButton);

        let projectDeleteButton = document.createElement("button");
        projectDeleteButton.setAttribute("class", "projectDeleteButton");
        projectDeleteButton.textContent = 'Delete project';

        projectDeleteButton.addEventListener("click", function(){
            _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.splice(i, 1);
            let jsonProjectsArray = JSON.stringify(_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
            localStorage.setItem('projectsArray', jsonProjectsArray); 
            console.log(_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
            projectsDisplay();
        });

        projectDiv.appendChild(projectDeleteButton);

            for (const todo of _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos){
                let todoDiv = document.createElement("div");
                todoDiv.setAttribute("class", "todoDiv");
                let todoDivTextDiv = document.createElement("div");

                todoDivTextDiv.innerText += todo.title;
                todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;

                let editButton = document.createElement("button");
                editButton.textContent = "Edit todo";
                editButton.addEventListener("click", function(){
                    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.display = "block";
                    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.backgroundColor = "green";
                    console.log("I am the edit button"); 
                         
                    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.display = "block";
                    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.backgroundColor = "green";

                    titleInput.value = todo.title;
                    descriptionInput.value = todo.description;
                    dueDateInput.value = todo.dueDate;
                    priorityInput.value = todo.priority;
                    notesInput.value = todo.notes;

                    createNewTODOButton.addEventListener("click", function(){
                        let updateVariable = todo.title;
                        
                        _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos = _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos.filter(function( todo ){
                            return todo.title !== updateVariable;
                        });

                        let jsonProjectsArray = JSON.stringify(_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
                        localStorage.setItem('projectsArray', jsonProjectsArray); 
                    
                        console.log(_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
                        projectsDisplay();

                        _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.display = "none";
                        _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.backgroundColor = "grey";

                        titleInput.value = '';
                        descriptionInput.value = '';
                        dueDateInput.value = '';
                        notesInput.value = '';

                        titleInput.setAttribute("placeholder", "Enter a name for your TODO");
                        descriptionInput.setAttribute("placeholder", "Enter a description for your TODO");
                        dueDateInput.setAttribute("placeholder", "Select Due Date");
                        notesInput.setAttribute("placeholder", "Enter any notes for your TODO");
                    },{once: true});
                });
                
                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete todo";
                deleteButton.addEventListener("click", function(){
                    
                    let testVariable = todo.title;
                    console.log(testVariable + ' is in the process of being deleted');
                    
                    console.log(todo.title + ' deleted')
                      
                    _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos = _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos.filter(function( todo ){
                        return todo.title !== testVariable;
                    });

                    let jsonProjectsArray = JSON.stringify(_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
                    localStorage.setItem('projectsArray', jsonProjectsArray); 
                    
                    console.log(_todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
                    projectsDisplay();
                });

                let viewTodoButton = document.createElement("button");
                viewTodoButton.textContent = "Expand todo";
                viewTodoButton.addEventListener("click", function(){
                    todoDivTextDiv.innerText = '';
                    todoDivTextDiv.innerText += todo.title;
                    todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;
                    todoDivTextDiv.innerText += "\n Description: " + todo.description;
                    todoDivTextDiv.innerText += "\n Priority: " + todo.priority;
                    todoDivTextDiv.innerText += "\n Notes: " + todo.notes;
                })

                let closeTodoButton = document.createElement("button");
                closeTodoButton.textContent = "Collapse todo";
                closeTodoButton.addEventListener("click", function(){
                    todoDivTextDiv.innerText = '';
                    todoDivTextDiv.innerText += todo.title;
                    todoDivTextDiv.innerText += "\n Due on: " + todo.dueDate;
                })

                todoDiv.appendChild(todoDivTextDiv);
                todoDiv.appendChild(editButton);
                todoDiv.appendChild(deleteButton);
                todoDiv.appendChild(viewTodoButton);
                todoDiv.appendChild(closeTodoButton);
                projectDiv.appendChild(todoDiv);
            }
        
        projectsDisplayDiv.appendChild(projectDiv);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(projectsDisplayDiv);
    }
};

/***/ }),

/***/ "./src/datePicker.js":
/*!***************************!*\
  !*** ./src/datePicker.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "picker": () => (/* binding */ picker)
/* harmony export */ });
//datePicker is adapted from W.S. Toh at https://code-boxx.com/simple-datepicker-pure-javascript-css/#sec-extra

let picker = {
    // (A) ATTACH DATEPICKER TO TARGET
    // target : datepicker will populate this field
    // container : datepicker will be generated in this container
    // startmon : start on Monday (default false)
    // disableday : array of days to disable, e.g. [2,7] to disable Tue and Sun
    attach : function (opt) {
      // (A1) CREATE NEW DATEPICKER
      var dp = document.createElement("div");
      dp.dataset.target = opt.target;
      dp.dataset.startmon = opt.startmon ? "1" : "0";
      dp.classList.add("picker");
      if (opt.disableday) {
        dp.dataset.disableday = JSON.stringify(opt.disableday);
      }
  
      // (A2) DEFAULT TO CURRENT MONTH + YEAR - NOTE: UTC+0!
      var today = new Date(),
          thisMonth = today.getUTCMonth(), // Note: Jan is 0
          thisYear = today.getUTCFullYear(),
          months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
      // (A3) MONTH SELECT
      var select = document.createElement("select"),
          option = null;
      select.classList.add("picker-m");
      for (var mth in months) {
        option = document.createElement("option");
        option.value = parseInt(mth) + 1;
        option.text = months[mth];
        select.appendChild(option);
      }
      select.selectedIndex = thisMonth;
      select.addEventListener("change", function(){ picker.draw(this); });
      dp.appendChild(select);
  
      // (A4) YEAR SELECT
      var yRange = 10; // Year range to show, I.E. from thisYear-yRange to thisYear+yRange
      select = document.createElement("select");
      select.classList.add("picker-y");
      for (var y = thisYear-yRange; y < thisYear+yRange; y++) {
        option = document.createElement("option");
        option.value = y;
        option.text = y;
        select.appendChild(option);
      }
      select.selectedIndex = yRange;
      select.addEventListener("change", function(){ picker.draw(this); });
      dp.appendChild(select);
  
      // (A5) DAY SELECT
      var days = document.createElement("div");
      days.classList.add("picker-d");
      dp.appendChild(days);
  
      // (A6) ATTACH DATE PICKER TO TARGET CONTAINER + DRAW THE DATES
      picker.draw(select);
  
      // (A6-I) INLINE DATE PICKER
      if (opt.container) { document.getElementById(opt.container).appendChild(dp); }
  
      // (A6-P) POPUP DATE PICKER
      else {
        // (A6-P-1) MARK THIS AS A "POPUP"
        var uniqueID = 0;
        while (document.getElementById("picker-" + uniqueID) != null) {
          uniqueID = Math.floor(Math.random() * (100 - 2)) + 1;
        }
        dp.dataset.popup = "1";
        dp.dataset.dpid = uniqueID;
  
        // (A6-P-2) CREATE WRAPPER
        var wrapper = document.createElement("div");
        wrapper.id = "picker-" + uniqueID;
        wrapper.classList.add("picker-wrap");
        wrapper.appendChild(dp);
  
        // (A6-P-3) ATTACH ONCLICK TO SHOW/HIDE DATEPICKER
        var target = document.getElementById(opt.target);
        target.dataset.dp = uniqueID;
        target.readOnly = true; // Prevent onscreen keyboar on mobile devices
        target.onfocus = function () {
          document.getElementById("picker-" + this.dataset.dp).classList.add("show");
        };
        wrapper.addEventListener("click", function (evt) {
          if (evt.target.classList.contains("picker-wrap")) {
            this.classList.remove("show");
          }
        });
  
        // (A6-P-4) ATTACH POPUP DATEPICKER TO DOCUMENT
        document.body.appendChild(wrapper);
      }
    },
  
  
    // (B) DRAW THE DAYS IN MONTH
    // el : HTML reference to either year or month selector
    draw : function (el) {
      // (B1) GET DATE PICKER COMPONENTS
      var parent = el.parentElement,
          year = parent.getElementsByClassName("picker-y")[0].value,
          month = parent.getElementsByClassName("picker-m")[0].value,
          days = parent.getElementsByClassName("picker-d")[0];
  
      // (B2) DATE RANGE CALCULATION - NOTE: UTC+0!
      var daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate(),
          startDay = new Date(Date.UTC(year, month-1, 1)).getUTCDay(), // Note: Sun = 0
          endDay = new Date(Date.UTC(year, month-1, daysInMonth)).getUTCDay(),
          startDay = startDay==0 ? 7 : startDay,
          endDay = endDay==0 ? 7 : endDay;
  
      // (B3) GENERATE DATE SQUARES (IN ARRAY FIRST)
      var squares = [],
          disableday = null;
      if (parent.dataset.disableday) {
        disableday = JSON.parse(parent.dataset.disableday);
      }
  
      // (B4) EMPTY SQUARES BEFORE FIRST DAY OF MONTH
      if (parent.dataset.startmon=="1" && startDay!=1) {
        for (var i=1; i<startDay; i++) { squares.push("B"); }
      }
      if (parent.dataset.startmon=="0" && startDay!=7) {
        for (var i=0; i<startDay; i++) { squares.push("B"); }
      }
  
      // (B5) DAYS OF MONTH
      // (B5-1) ALL DAYS ENABLED, JUST ADD
      if (disableday==null) {
        for (var i=1; i<=daysInMonth; i++) { squares.push([i, false]);  }
      }
  
      // (B5-2) SOME DAYS DISABLED
      else {
        var thisday = startDay;
        for (var i=1; i<=daysInMonth; i++) {
          // CHECK IF DAY IS DISABLED
          var disabled = disableday.includes(thisday);
          // DAY OF MONTH, DISABLED
          squares.push([i, disabled]); 
          // NEXT DAY
          thisday++;
          if (thisday==8) { thisday = 1; }
        }
      }
  
      // (B6) EMPTY SQUARES AFTER LAST DAY OF MONTH
      if (parent.dataset.startmon=="1" && endDay!=7) {
        for (var i=endDay; i<7; i++) { squares.push("B"); }
      }
      if (parent.dataset.startmon=="0" && endDay!=6) {
        for (var i=endDay; i<(endDay==7?13:6); i++) { squares.push("B"); }
      }
  
      // (B7) DRAW HTML
      var daynames = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      if (parent.dataset.startmon=="1") { daynames.push("Sun"); }
      else { daynames.unshift("Sun"); }
  
      // (B7-1) HTML DATE HEADER
      var table = document.createElement("table"),
          row = table.insertRow(),
          cell = null;
      row.classList.add("picker-d-h");
      for (let d of daynames) {
        cell = row.insertCell();
        cell.innerHTML = d;
      }
  
      // (B7-2) HTML DATE CELLS
      var total = squares.length,
          row = table.insertRow(),
          today = new Date(),
          todayDate = null;
      if (today.getUTCMonth()+1 == month && today.getUTCFullYear() == year) {
        todayDate = today.getUTCDate();
      }
      for (var i=0; i<total; i++) {
        if (i!=total && i%7==0) { row = table.insertRow(); }
        cell = row.insertCell();
        if (squares[i] == "B") { 
          cell.classList.add("picker-d-b"); 
        } else { 
          cell.innerHTML = squares[i][0]; 
          // NOT ALLOWED TO CHOOSE THIS DAY
          if (squares[i][1]) {
            cell.classList.add("picker-d-dd");
          }
          // ALLOWED TO CHOOSE THIS DAY
          else {
            if (i == todayDate) { cell.classList.add("picker-d-td"); }
            cell.classList.add("picker-d-d");
            cell.addEventListener("click", function(){ picker.pick(this); });
          }
        }
      }
  
      // (B7-3) ATTACH NEW CALENDAR TO DATEPICKER
      days.innerHTML = "";
      days.appendChild(table);
    },
  
    // (C) CHOOSE A DATE
    // el : HTML reference to selected date cell
    pick : function (el) {
      // (C1) GET ALL COMPONENTS
      var parent = el.parentElement;
      while (!parent.classList.contains("picker")) {
        parent = parent.parentElement;
      }
  
      // (C2) GET FULL SELECTED YEAR MONTH DAY
      var year = parent.getElementsByClassName("picker-y")[0].value,
          month = parent.getElementsByClassName("picker-m")[0].value,
          day = el.innerHTML;
  
      // YYYY-MM-DD FORMAT - CHANGE FORMAT HERE IF YOU WANT !
      if (parseInt(month)<10) { month = "0" + month; }
      if (parseInt(day)<10) { day = "0" + day; }
      var fullDate = year + "-" + month + "-" + day;
  
      // (C3) UPDATE SELECTED DATE
      document.getElementById(parent.dataset.target).value = fullDate;
  
      // (C4) POPUP ONLY - CLOSE THE POPUP
      if (parent.dataset.popup == "1") {
        document.getElementById("picker-" + parent.dataset.dpid).classList.remove("show");
      }
    }
  };

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv)
/* harmony export */ });
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface.js */ "./src/userInterface.js");
/* harmony import */ var _projectSelectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSelectList.js */ "./src/projectSelectList.js");
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");
/* harmony import */ var _datePicker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datePicker.js */ "./src/datePicker.js");
/* harmony import */ var _dataStructure_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataStructure.js */ "./src/dataStructure.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








let contentDiv = document.getElementById('content');

window.onload = function() {
    (0,_newProject_js__WEBPACK_IMPORTED_MODULE_5__.newProjectInput)();
    (0,_userInterface_js__WEBPACK_IMPORTED_MODULE_0__.userInterface)();
    (0,_projectSelectList_js__WEBPACK_IMPORTED_MODULE_1__.createProjectList)();
    (0,_dataStructure_js__WEBPACK_IMPORTED_MODULE_4__.projectsDisplay)();
    console.log(_todoFactory_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray);
    _datePicker_js__WEBPACK_IMPORTED_MODULE_3__.picker.attach({
        target: 'dueDateInput'
    });
}

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectInput": () => (/* binding */ newProjectInput)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");



function newProjectInput(){
    let projectInputDiv = document.createElement("div");
        projectInputDiv.setAttribute("id", "projectInputDiv");

        let projectInputLabel = document.createElement("label");
        projectInputLabel.textContent = "New Todo Project: ";
        projectInputLabel.setAttribute("for", "projectInput");

        let projectInput = document.createElement("input");
        projectInput.setAttribute("type", "text");
        projectInput.setAttribute("id", "projectInput");
        projectInput.setAttribute("name", "projectInput")
        projectInput.setAttribute("placeholder", "Enter the name of your new project: ");
        projectInput.setAttribute("require", "");

        let createNewProjectButton = document.createElement("button");
        createNewProjectButton.innerText = "Create a new project";
        createNewProjectButton.setAttribute("id", "createNewProjectButton")

        projectInputDiv.appendChild(projectInputLabel);
        projectInputDiv.appendChild(projectInput);
        projectInputDiv.appendChild(createNewProjectButton);

    //createNewProjectButton runs the createNewProject() function
    createNewProjectButton.addEventListener('click', _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(projectInputDiv);
};

/***/ }),

/***/ "./src/projectSelectList.js":
/*!**********************************!*\
  !*** ./src/projectSelectList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectProjectDiv": () => (/* binding */ selectProjectDiv),
/* harmony export */   "createProjectList": () => (/* binding */ createProjectList)
/* harmony export */ });
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");


let selectProjectDiv = document.createElement("div");
selectProjectDiv.setAttribute("id", 'selectProjectDiv');

function createProjectList(){

    let selectProjectLabel = document.createElement("label");
    selectProjectLabel.textContent = "Todo Project Selector: ";
    selectProjectLabel.setAttribute("for", "selectProject");
   
    selectProjectDiv.appendChild(selectProjectLabel);

    let selectProject = document.createElement("select");
    selectProject.setAttribute("id", 'selectProject');

    for (let i = 0; i < _todoFactory_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
        let option = _todoFactory_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].projectName;
        let el = document.createElement("option");
        el.textContent = option;
        el.value = option;
        selectProject.appendChild(el);
    }
    
    selectProjectDiv.appendChild(selectProject);
};

/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "createNewTODO": () => (/* binding */ createNewTODO)
/* harmony export */ });
/* harmony import */ var _projectSelectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSelectList.js */ "./src/projectSelectList.js");
/* harmony import */ var _dataStructure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStructure.js */ "./src/dataStructure.js");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterface.js */ "./src/userInterface.js");




const projectsArray = JSON.parse(localStorage.getItem('projectsArray')) || [{"projectName": "defaultProject","todos": []},];

//todo Project Factory Function, makes new todo projects
function TODOProject(projectName){
    this.projectName = projectName;
    this.todos = new Array();     
}

//todo Factory Function, makes new todo items
function TODO(title, description, dueDate, priority, notes){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;   
}

function createNewProject(){
    let duplicateFound = false;
        
    for (const project of projectsArray){
        console.log('projectInput.value ' + projectInput.value);
        console.log('project.projectName ' + project.projectName);

        if (projectInput.value == project.projectName){
            duplicateFound = true;        
            break;
        }
    }  

    if (duplicateFound){
        console.log("createNewProject, project already exists");
        alert('This Project already exists.');
        projectInput.value = '';
    } else {
        console.log('createNewProject. new project made');
        projectsArray.push(new TODOProject(projectInput.value));
        projectInput.value = '';
      
        let jsonProjectsArray = JSON.stringify(projectsArray);
      
        localStorage.setItem('projectsArray', jsonProjectsArray);

        document.getElementById('selectProjectDiv').innerHTML = "";

        (0,_projectSelectList_js__WEBPACK_IMPORTED_MODULE_0__.createProjectList)();
    }
    duplicateFound = false;

    (0,_dataStructure_js__WEBPACK_IMPORTED_MODULE_1__.projectsDisplay)();
}

function createNewTODO(){
    //makes new todo object
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;
    let dueDate = document.getElementById('dueDateInput').value;
    let priority = document.getElementById('priorityInput').value;
    let notes = document.getElementById('notesInput').value;
    
    let todoProjectSelector = document.getElementById('selectProject').value;
  
    if (title === '' || description === '' || dueDate === '' || priority === '' || notes === ''){
        alert('Please input a value into each field before submitting your todo!');
        document.getElementById('titleInput').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('dueDateInput').value = '';
        document.getElementById('priorityInput').value = '';
        document.getElementById('notesInput').value = '';
    } else {
        let todo = new TODO(
            title,
            description,
            dueDate,
            priority,
            notes,
        );
  
        let doesProjectExist = false;

        for (let i = 0; i < projectsArray.length; i++) {
            console.log('projectSelector ' + todoProjectSelector + ' comparing to: ' + projectsArray[i].projectName);
    
            if (todoProjectSelector == projectsArray[i].projectName){  
                console.log('This project selection exists!');
                doesProjectExist = true;
            } 
            
            if (doesProjectExist){
                alert(todo.title + ' added to ' + projectsArray[i].projectName);
                
                projectsArray[i].todos.push(todo);
                
    
                let jsonProjectsArray = JSON.stringify(projectsArray);
                localStorage.setItem('projectsArray', jsonProjectsArray); 

                break;
    
            } 
            doesProjectExist = false;
        }  
        
        document.getElementById('titleInput').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('dueDateInput').value = '';
        document.getElementById('priorityInput').value = '';
        document.getElementById('notesInput').value = '';
        //document.getElementById('todoProjectSelector').value = '';
    }
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.display = "none";
    (0,_dataStructure_js__WEBPACK_IMPORTED_MODULE_1__.projectsDisplay)();
}

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userInterfaceDiv": () => (/* binding */ userInterfaceDiv),
/* harmony export */   "userInterface": () => (/* binding */ userInterface)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");
/* harmony import */ var _projectSelectList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectSelectList.js */ "./src/projectSelectList.js");



//import {projectsDisplay} from "./dataStructure.js";

let userInterfaceDiv = document.createElement("div");
userInterfaceDiv.id = "userInterfaceDiv";
userInterfaceDiv.className = "userInterfaceDiv";

function userInterface() {
    let titleInputDiv = document.createElement("div");

    let titleInputLabel = document.createElement("label");
    titleInputLabel.textContent = "Todo Name: "
    titleInputLabel.setAttribute("for", "titleInput");

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("name", "titleInput")
    titleInput.setAttribute("placeholder", "Enter a name for your TODO");
    titleInput.setAttribute("require", "");

    titleInputDiv.appendChild(titleInputLabel);
    titleInputDiv.appendChild(titleInput);
    userInterfaceDiv.appendChild(titleInputDiv);

    let descriptionInputDiv = document.createElement("div");
    
    let descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.textContent = "Todo Description: ";
    descriptionInputLabel.setAttribute("for", "descriptionInput");

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "descriptionInput");
    descriptionInput.setAttribute("name", "descriptionInput")
    descriptionInput.setAttribute("placeholder", "Enter a description for your TODO");
    descriptionInput.setAttribute("require", "");

    descriptionInputDiv.appendChild(descriptionInputLabel);
    descriptionInputDiv.appendChild(descriptionInput);
    userInterfaceDiv.appendChild(descriptionInputDiv);

    let dueDateInputDiv = document.createElement("div");

    let dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.textContent = "Todo Due Date: ";
    dueDateInputLabel.setAttribute("for", "dueDateInput");

    let dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("id", "dueDateInput");
    dueDateInput.setAttribute("placeholder", "Select Due Date");

    dueDateInputDiv.appendChild(dueDateInputLabel);
    dueDateInputDiv.appendChild(dueDateInput);
    userInterfaceDiv.appendChild(dueDateInputDiv);

    let priorityInputDiv = document.createElement("div");

    let priorityInputLabel = document.createElement("label");
    priorityInputLabel.textContent = "Todo Priority: "
    priorityInputLabel.setAttribute("for", "priorityInput");

    let priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "priorityInput");
    priorityInput.setAttribute("name", "priorityInput")

    for(let i = 1; i < 4; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.textContent = i;
        opt.innerHTML = i;
        priorityInput.appendChild(opt);
    }

    priorityInputDiv.appendChild(priorityInputLabel);
    priorityInputDiv.appendChild(priorityInput);
    userInterfaceDiv.appendChild(priorityInputDiv);

    let notesInputDiv = document.createElement("div");

    let notesInputLabel = document.createElement("label");
    notesInputLabel.textContent = "Todo Notes: ";
    notesInputLabel.setAttribute("for", "notesInput");

    let notesInput = document.createElement("input");
    notesInput.setAttribute("type", "text");
    notesInput.setAttribute("id", "notesInput");
    notesInput.setAttribute("name", "notesInput")
    notesInput.setAttribute("placeholder", "Enter any notes for your TODO");
    notesInput.setAttribute("require", "");

    notesInputDiv.appendChild(notesInputLabel);
    notesInputDiv.appendChild(notesInput);
    userInterfaceDiv.appendChild(notesInputDiv);

    userInterfaceDiv.appendChild(_projectSelectList_js__WEBPACK_IMPORTED_MODULE_2__.selectProjectDiv);

    let createNewTODOButton = document.createElement("button");
    createNewTODOButton.innerText = "Update Todo";
    createNewTODOButton.setAttribute("id", "createNewTODOButton");
    
    userInterfaceDiv.appendChild(createNewTODOButton);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(userInterfaceDiv);

    //createNewTODOButton runs the createNewTODO() function
    document.getElementById("createNewTODOButton").addEventListener('click', _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.createNewTODO);
    
    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";

    closeButton.addEventListener("click", function(){
        userInterfaceDiv.innerHTML = '';
        userInterface();
        userInterfaceDiv.style.display = "none";
        userInterfaceDiv.style.backgroundColor = "grey";
    });

    userInterfaceDiv.appendChild(closeButton);
}

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw0REFBNEQsaUJBQWlCLEdBQUcsaUJBQWlCLDBCQUEwQixpQkFBaUIsR0FBRyx1QkFBdUIsa0JBQWtCLG9CQUFvQixjQUFjLFlBQVksbUNBQW1DLDRCQUE0QiwyQkFBMkIsR0FBRyxjQUFjLDZCQUE2QixxQkFBcUIsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsbUNBQW1DLG9CQUFvQixXQUFXLFlBQVksaUJBQWlCLGtCQUFrQixtQ0FBbUMsZUFBZSx1QkFBdUIsNkJBQTZCLEdBQUcscUJBQXFCLGVBQWUsd0JBQXdCLEdBQUcsd0JBQXdCLDZCQUE2QixnQ0FBZ0MsR0FBRyxrQ0FBa0MscUJBQXFCLHdCQUF3QixrQkFBa0IsR0FBRyxtREFBbUQsZUFBZSxpQkFBaUIsMkJBQTJCLG9CQUFvQixHQUFHLG9DQUFvQyxnQkFBZ0IsOEJBQThCLGdCQUFnQixxQkFBcUIsR0FBRyxzQkFBc0IsbUJBQW1CLHNDQUFzQyx1QkFBdUIsR0FBRyxzQ0FBc0Msc0JBQXNCLEdBQUcsa0NBQWtDLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywyQ0FBMkMsb0JBQW9CLHdCQUF3QixHQUFHLHdDQUF3QyxnQkFBZ0Isd0JBQXdCLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssc0JBQXNCLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLDRDQUE0QyxpQkFBaUIsR0FBRyxpQkFBaUIsMEJBQTBCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0Isb0JBQW9CLGNBQWMsWUFBWSxtQ0FBbUMsNEJBQTRCLDJCQUEyQixHQUFHLGNBQWMsNkJBQTZCLHFCQUFxQixHQUFHLDBCQUEwQixzQkFBc0IsR0FBRyxtQ0FBbUMsb0JBQW9CLFdBQVcsWUFBWSxpQkFBaUIsa0JBQWtCLG1DQUFtQyxlQUFlLHVCQUF1Qiw2QkFBNkIsR0FBRyxxQkFBcUIsZUFBZSx3QkFBd0IsR0FBRyx3QkFBd0IsNkJBQTZCLGdDQUFnQyxHQUFHLGtDQUFrQyxxQkFBcUIsd0JBQXdCLGtCQUFrQixHQUFHLG1EQUFtRCxlQUFlLGlCQUFpQiwyQkFBMkIsb0JBQW9CLEdBQUcsb0NBQW9DLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLHNCQUFzQixtQkFBbUIsc0NBQXNDLHVCQUF1QixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDJDQUEyQyxvQkFBb0Isd0JBQXdCLEdBQUcsd0NBQXdDLGdCQUFnQix3QkFBd0IsR0FBRyxxQkFBcUI7QUFDNWtJO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixzQkFBc0I7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ1M7QUFDSzs7QUFFcEQ7O0FBRU87QUFDUDs7QUFFQSxzQkFBc0IsMERBQWE7QUFDbkM7QUFDQTtBQUNBLCtCQUErQiwwREFBYTs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSw2RUFBOEI7QUFDMUMsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGlFQUFvQjtBQUNoQyxtREFBbUQsMERBQWE7QUFDaEU7QUFDQSx3QkFBd0IsMERBQWE7QUFDckM7QUFDQSxTQUFTOztBQUVUOztBQUVBLCtCQUErQiwwREFBYTtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkVBQThCO0FBQ2xELG9CQUFvQixxRkFBc0M7QUFDMUQ7QUFDQTtBQUNBLG9CQUFvQiw2RUFBOEI7QUFDbEQsb0JBQW9CLHFGQUFzQzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQWEsWUFBWSwwREFBYTtBQUM5RDtBQUNBLHlCQUF5Qjs7QUFFekIsK0RBQStELDBEQUFhO0FBQzVFO0FBQ0E7QUFDQSxvQ0FBb0MsMERBQWE7QUFDakQ7O0FBRUEsd0JBQXdCLDZFQUE4QjtBQUN0RCx3QkFBd0IscUZBQXNDOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFLFdBQVc7QUFDbEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFhLFlBQVksMERBQWE7QUFDMUQ7QUFDQSxxQkFBcUI7O0FBRXJCLDJEQUEyRCwwREFBYTtBQUN4RTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUFhO0FBQzdDO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBc0I7QUFDOUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1SUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWSxPQUFPO0FBQ3pDO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWSxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0Isa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLHVEQUF1RCxvQkFBb0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pPaUQ7QUFDUTtBQUNWO0FBQ1I7QUFDWTtBQUNIO0FBQzNCOztBQUVkOztBQUVQO0FBQ0EsSUFBSSwrREFBZTtBQUNuQixJQUFJLGdFQUFhO0FBQ2pCLElBQUksd0VBQWlCO0FBQ3JCLElBQUksa0VBQWU7QUFDbkIsZ0JBQWdCLDBEQUFhO0FBQzdCLElBQUkseURBQWE7QUFDakI7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQndDO0FBQ1U7O0FBRTNDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsNkRBQWdCOztBQUVyRSxJQUFJLDZEQUFzQjtBQUMxQjs7Ozs7Ozs7Ozs7Ozs7OztBQzlCK0M7O0FBRXhDO0FBQ1A7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixJQUFJLGlFQUFvQixFQUFFO0FBQzlDLHFCQUFxQiwwREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ5RDtBQUNOO0FBQ0M7O0FBRTdDLDZFQUE2RSw0Q0FBNEM7O0FBRWhJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLHdFQUFpQjtBQUN6QjtBQUNBOztBQUVBLElBQUksa0VBQWU7QUFDbkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUE4QjtBQUNsQyxJQUFJLGtFQUFlO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSHNDO0FBQ1M7QUFDUztBQUN4RCxVQUFVLGlCQUFpQjs7QUFFcEI7QUFDUDtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtRUFBZ0I7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBc0I7O0FBRTFCO0FBQ0EsNkVBQTZFLDBEQUFhO0FBQzFGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7VUMxSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvZGF0YVN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL2RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9wcm9qZWN0U2VsZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcHJvamVjdElucHV0RGl2IHtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udXNlckludGVyZmFjZURpdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNDUlO1xcbiAgdG9wOiA1JTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcXG4gIGJvcmRlcjogNSBweCBzb2xpZCBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnRvZG9EaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnByb2plY3REZWxldGVCdXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi8qIChBKSBQT1BVUCAqL1xcbi5waWNrZXItd3JhcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XFxufVxcbi5waWNrZXItd3JhcC5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucGlja2VyLXdyYXAgLnBpY2tlciB7XFxuICBtYXJnaW46IDUwdmggYXV0byAwIGF1dG87XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi8qIChCKSBDT05UQUlORVIgKi9cXG4ucGlja2VyIHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogKEMpIE1PTlRIICsgWUVBUiAqL1xcbi5waWNrZXItbSxcXG4ucGlja2VyLXkge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi8qIChEKSBEQVkgKi9cXG4ucGlja2VyLWQgdGFibGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ucGlja2VyLWQgdGFibGUgdGQge1xcbiAgd2lkdGg6IDE0LjI4JTsgLyogNyBFUVVBTCBDT0xVTU5TICovXFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qIEhFQURFUiBDRUxMUyAqL1xcbi5waWNrZXItZC1oIHRkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiBCTEFOSyBEQVRFUyAqL1xcbi5waWNrZXItZC1iIHtcXG4gIGJhY2tncm91bmQ6ICM0ZTRlNGU7XFxufVxcbi8qIFRPREFZICovXFxuLnBpY2tlci1kLXRkIHtcXG4gIGJhY2tncm91bmQ6ICNkODRmNGY7XFxufVxcbi8qIFBJQ0tBQkxFIERBVEVTICovXFxuLnBpY2tlci1kLWQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2EzM2MzYztcXG59XFxuLyogVU5QSUNLQUJMRSBEQVRFUyAqL1xcbi5waWNrZXItZC1kZCB7XFxuICBjb2xvcjogIzg4ODtcXG4gIGJhY2tncm91bmQ6ICM0ZTRlNGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSxxQkFBcUI7QUFDckI7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWEsRUFBRSxvQkFBb0I7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwcm9qZWN0SW5wdXREaXYge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi51c2VySW50ZXJmYWNlRGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA0NSU7XFxuICB0b3A6IDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcbiAgYm9yZGVyOiA1IHB4IHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4udG9kb0RpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdERlbGV0ZUJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLyogKEEpIFBPUFVQICovXFxuLnBpY2tlci13cmFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuLnBpY2tlci13cmFwLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5waWNrZXItd3JhcCAucGlja2VyIHtcXG4gIG1hcmdpbjogNTB2aCBhdXRvIDAgYXV0bztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLyogKEIpIENPTlRBSU5FUiAqL1xcbi5waWNrZXIge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiAoQykgTU9OVEggKyBZRUFSICovXFxuLnBpY2tlci1tLFxcbi5waWNrZXIteSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyogKEQpIERBWSAqL1xcbi5waWNrZXItZCB0YWJsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5waWNrZXItZCB0YWJsZSB0ZCB7XFxuICB3aWR0aDogMTQuMjglOyAvKiA3IEVRVUFMIENPTFVNTlMgKi9cXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogSEVBREVSIENFTExTICovXFxuLnBpY2tlci1kLWggdGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi8qIEJMQU5LIERBVEVTICovXFxuLnBpY2tlci1kLWIge1xcbiAgYmFja2dyb3VuZDogIzRlNGU0ZTtcXG59XFxuLyogVE9EQVkgKi9cXG4ucGlja2VyLWQtdGQge1xcbiAgYmFja2dyb3VuZDogI2Q4NGY0ZjtcXG59XFxuLyogUElDS0FCTEUgREFURVMgKi9cXG4ucGlja2VyLWQtZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjYTMzYzNjO1xcbn1cXG4vKiBVTlBJQ0tBQkxFIERBVEVTICovXFxuLnBpY2tlci1kLWRkIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYmFja2dyb3VuZDogIzRlNGU0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y29udGVudERpdn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7cHJvamVjdHNBcnJheX0gZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcbmltcG9ydCB7dXNlckludGVyZmFjZURpdn0gZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuXG5sZXQgcHJvamVjdHNEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzRGlzcGxheSgpe1xuICAgIHByb2plY3RzRGlzcGxheURpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAoY29uc3QgW2ldIGluIHByb2plY3RzQXJyYXkpIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdERpdlwiKTtcbiAgICAgICAgcHJvamVjdERpdi5pbm5lclRleHQgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lO1xuXG4gICAgICAgIGxldCBuZXdUT0RPQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3VE9ET0J1dHRvbi5pbm5lclRleHQgPSBcIk5ldyBUb2RvXCI7XG4gICAgICAgIG5ld1RPRE9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUT0RPQnV0dG9uXCIpO1xuXG4gICAgICAgIG5ld1RPRE9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdUT0RPQnV0dG9uKTtcblxuICAgICAgICBsZXQgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0RGVsZXRlQnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBwcm9qZWN0JztcblxuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXNwbGF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0c0FycmF5W2ldLnRvZG9zKXtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9EaXZcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EaXZUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBEdWUgb246IFwiICsgdG9kby5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXQgdG9kb1wiO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSB0aGUgZWRpdCBidXR0b25cIik7IFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9IHRvZG8ubm90ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3VE9ET0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVWYXJpYWJsZSA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0udG9kb3MgPSBwcm9qZWN0c0FycmF5W2ldLnRvZG9zLmZpbHRlcihmdW5jdGlvbiggdG9kbyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvLnRpdGxlICE9PSB1cGRhdGVWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRGlzcGxheSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBuYW1lIGZvciB5b3VyIFRPRE9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciBUT0RPXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VsZWN0IER1ZSBEYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGFueSBub3RlcyBmb3IgeW91ciBUT0RPXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgdG9kb1wiO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXN0VmFyaWFibGUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0VmFyaWFibGUgKyAnIGlzIGluIHRoZSBwcm9jZXNzIG9mIGJlaW5nIGRlbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8udGl0bGUgKyAnIGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRvZG9zID0gcHJvamVjdHNBcnJheVtpXS50b2Rvcy5maWx0ZXIoZnVuY3Rpb24oIHRvZG8gKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvLnRpdGxlICE9PSB0ZXN0VmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBqc29uUHJvamVjdHNBcnJheSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnJheScsIGpzb25Qcm9qZWN0c0FycmF5KTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdmlld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIHZpZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJFeHBhbmQgdG9kb1wiO1xuICAgICAgICAgICAgICAgIHZpZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBEdWUgb246IFwiICsgdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gXCJcXG4gRGVzY3JpcHRpb246IFwiICsgdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IFwiXFxuIFByaW9yaXR5OiBcIiArIHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBOb3RlczogXCIgKyB0b2RvLm5vdGVzO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbGxhcHNlIHRvZG9cIjtcbiAgICAgICAgICAgICAgICBjbG9zZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gdG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IFwiXFxuIER1ZSBvbjogXCIgKyB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0RpdlRleHREaXYpO1xuICAgICAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodmlld1RvZG9CdXR0b24pO1xuICAgICAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY2xvc2VUb2RvQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdHNEaXNwbGF5RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RzRGlzcGxheURpdik7XG4gICAgfVxufTsiLCIvL2RhdGVQaWNrZXIgaXMgYWRhcHRlZCBmcm9tIFcuUy4gVG9oIGF0IGh0dHBzOi8vY29kZS1ib3h4LmNvbS9zaW1wbGUtZGF0ZXBpY2tlci1wdXJlLWphdmFzY3JpcHQtY3NzLyNzZWMtZXh0cmFcblxuZXhwb3J0IGxldCBwaWNrZXIgPSB7XG4gICAgLy8gKEEpIEFUVEFDSCBEQVRFUElDS0VSIFRPIFRBUkdFVFxuICAgIC8vIHRhcmdldCA6IGRhdGVwaWNrZXIgd2lsbCBwb3B1bGF0ZSB0aGlzIGZpZWxkXG4gICAgLy8gY29udGFpbmVyIDogZGF0ZXBpY2tlciB3aWxsIGJlIGdlbmVyYXRlZCBpbiB0aGlzIGNvbnRhaW5lclxuICAgIC8vIHN0YXJ0bW9uIDogc3RhcnQgb24gTW9uZGF5IChkZWZhdWx0IGZhbHNlKVxuICAgIC8vIGRpc2FibGVkYXkgOiBhcnJheSBvZiBkYXlzIHRvIGRpc2FibGUsIGUuZy4gWzIsN10gdG8gZGlzYWJsZSBUdWUgYW5kIFN1blxuICAgIGF0dGFjaCA6IGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgIC8vIChBMSkgQ1JFQVRFIE5FVyBEQVRFUElDS0VSXG4gICAgICB2YXIgZHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHAuZGF0YXNldC50YXJnZXQgPSBvcHQudGFyZ2V0O1xuICAgICAgZHAuZGF0YXNldC5zdGFydG1vbiA9IG9wdC5zdGFydG1vbiA/IFwiMVwiIDogXCIwXCI7XG4gICAgICBkcC5jbGFzc0xpc3QuYWRkKFwicGlja2VyXCIpO1xuICAgICAgaWYgKG9wdC5kaXNhYmxlZGF5KSB7XG4gICAgICAgIGRwLmRhdGFzZXQuZGlzYWJsZWRheSA9IEpTT04uc3RyaW5naWZ5KG9wdC5kaXNhYmxlZGF5KTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQTIpIERFRkFVTFQgVE8gQ1VSUkVOVCBNT05USCArIFlFQVIgLSBOT1RFOiBVVEMrMCFcbiAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgdGhpc01vbnRoID0gdG9kYXkuZ2V0VVRDTW9udGgoKSwgLy8gTm90ZTogSmFuIGlzIDBcbiAgICAgICAgICB0aGlzWWVhciA9IHRvZGF5LmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICAgICAgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xuICBcbiAgICAgIC8vIChBMykgTU9OVEggU0VMRUNUXG4gICAgICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcbiAgICAgICAgICBvcHRpb24gPSBudWxsO1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItbVwiKTtcbiAgICAgIGZvciAodmFyIG10aCBpbiBtb250aHMpIHtcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcGFyc2VJbnQobXRoKSArIDE7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gbW9udGhzW210aF07XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSB0aGlzTW9udGg7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpeyBwaWNrZXIuZHJhdyh0aGlzKTsgfSk7XG4gICAgICBkcC5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBcbiAgICAgIC8vIChBNCkgWUVBUiBTRUxFQ1RcbiAgICAgIHZhciB5UmFuZ2UgPSAxMDsgLy8gWWVhciByYW5nZSB0byBzaG93LCBJLkUuIGZyb20gdGhpc1llYXIteVJhbmdlIHRvIHRoaXNZZWFyK3lSYW5nZVxuICAgICAgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwicGlja2VyLXlcIik7XG4gICAgICBmb3IgKHZhciB5ID0gdGhpc1llYXIteVJhbmdlOyB5IDwgdGhpc1llYXIreVJhbmdlOyB5KyspIHtcbiAgICAgICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0geTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSB5O1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0geVJhbmdlO1xuICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXsgcGlja2VyLmRyYXcodGhpcyk7IH0pO1xuICAgICAgZHAuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgXG4gICAgICAvLyAoQTUpIERBWSBTRUxFQ1RcbiAgICAgIHZhciBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRheXMuY2xhc3NMaXN0LmFkZChcInBpY2tlci1kXCIpO1xuICAgICAgZHAuYXBwZW5kQ2hpbGQoZGF5cyk7XG4gIFxuICAgICAgLy8gKEE2KSBBVFRBQ0ggREFURSBQSUNLRVIgVE8gVEFSR0VUIENPTlRBSU5FUiArIERSQVcgVEhFIERBVEVTXG4gICAgICBwaWNrZXIuZHJhdyhzZWxlY3QpO1xuICBcbiAgICAgIC8vIChBNi1JKSBJTkxJTkUgREFURSBQSUNLRVJcbiAgICAgIGlmIChvcHQuY29udGFpbmVyKSB7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdC5jb250YWluZXIpLmFwcGVuZENoaWxkKGRwKTsgfVxuICBcbiAgICAgIC8vIChBNi1QKSBQT1BVUCBEQVRFIFBJQ0tFUlxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIChBNi1QLTEpIE1BUksgVEhJUyBBUyBBIFwiUE9QVVBcIlxuICAgICAgICB2YXIgdW5pcXVlSUQgPSAwO1xuICAgICAgICB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrZXItXCIgKyB1bmlxdWVJRCkgIT0gbnVsbCkge1xuICAgICAgICAgIHVuaXF1ZUlEID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDIpKSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZHAuZGF0YXNldC5wb3B1cCA9IFwiMVwiO1xuICAgICAgICBkcC5kYXRhc2V0LmRwaWQgPSB1bmlxdWVJRDtcbiAgXG4gICAgICAgIC8vIChBNi1QLTIpIENSRUFURSBXUkFQUEVSXG4gICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IFwicGlja2VyLVwiICsgdW5pcXVlSUQ7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInBpY2tlci13cmFwXCIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRwKTtcbiAgXG4gICAgICAgIC8vIChBNi1QLTMpIEFUVEFDSCBPTkNMSUNLIFRPIFNIT1cvSElERSBEQVRFUElDS0VSXG4gICAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHQudGFyZ2V0KTtcbiAgICAgICAgdGFyZ2V0LmRhdGFzZXQuZHAgPSB1bmlxdWVJRDtcbiAgICAgICAgdGFyZ2V0LnJlYWRPbmx5ID0gdHJ1ZTsgLy8gUHJldmVudCBvbnNjcmVlbiBrZXlib2FyIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgIHRhcmdldC5vbmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlja2VyLVwiICsgdGhpcy5kYXRhc2V0LmRwKS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgfTtcbiAgICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBpY2tlci13cmFwXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgICAgICAvLyAoQTYtUC00KSBBVFRBQ0ggUE9QVVAgREFURVBJQ0tFUiBUTyBET0NVTUVOVFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICBcbiAgICAvLyAoQikgRFJBVyBUSEUgREFZUyBJTiBNT05USFxuICAgIC8vIGVsIDogSFRNTCByZWZlcmVuY2UgdG8gZWl0aGVyIHllYXIgb3IgbW9udGggc2VsZWN0b3JcbiAgICBkcmF3IDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAvLyAoQjEpIEdFVCBEQVRFIFBJQ0tFUiBDT01QT05FTlRTXG4gICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudCxcbiAgICAgICAgICB5ZWFyID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrZXIteVwiKVswXS52YWx1ZSxcbiAgICAgICAgICBtb250aCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGlja2VyLW1cIilbMF0udmFsdWUsXG4gICAgICAgICAgZGF5cyA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGlja2VyLWRcIilbMF07XG4gIFxuICAgICAgLy8gKEIyKSBEQVRFIFJBTkdFIENBTENVTEFUSU9OIC0gTk9URTogVVRDKzAhXG4gICAgICB2YXIgZGF5c0luTW9udGggPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgMCkpLmdldFVUQ0RhdGUoKSxcbiAgICAgICAgICBzdGFydERheSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLTEsIDEpKS5nZXRVVENEYXkoKSwgLy8gTm90ZTogU3VuID0gMFxuICAgICAgICAgIGVuZERheSA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLTEsIGRheXNJbk1vbnRoKSkuZ2V0VVRDRGF5KCksXG4gICAgICAgICAgc3RhcnREYXkgPSBzdGFydERheT09MCA/IDcgOiBzdGFydERheSxcbiAgICAgICAgICBlbmREYXkgPSBlbmREYXk9PTAgPyA3IDogZW5kRGF5O1xuICBcbiAgICAgIC8vIChCMykgR0VORVJBVEUgREFURSBTUVVBUkVTIChJTiBBUlJBWSBGSVJTVClcbiAgICAgIHZhciBzcXVhcmVzID0gW10sXG4gICAgICAgICAgZGlzYWJsZWRheSA9IG51bGw7XG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQuZGlzYWJsZWRheSkge1xuICAgICAgICBkaXNhYmxlZGF5ID0gSlNPTi5wYXJzZShwYXJlbnQuZGF0YXNldC5kaXNhYmxlZGF5KTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjQpIEVNUFRZIFNRVUFSRVMgQkVGT1JFIEZJUlNUIERBWSBPRiBNT05USFxuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LnN0YXJ0bW9uPT1cIjFcIiAmJiBzdGFydERheSE9MSkge1xuICAgICAgICBmb3IgKHZhciBpPTE7IGk8c3RhcnREYXk7IGkrKykgeyBzcXVhcmVzLnB1c2goXCJCXCIpOyB9XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQuc3RhcnRtb249PVwiMFwiICYmIHN0YXJ0RGF5IT03KSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzdGFydERheTsgaSsrKSB7IHNxdWFyZXMucHVzaChcIkJcIik7IH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjUpIERBWVMgT0YgTU9OVEhcbiAgICAgIC8vIChCNS0xKSBBTEwgREFZUyBFTkFCTEVELCBKVVNUIEFERFxuICAgICAgaWYgKGRpc2FibGVkYXk9PW51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaT0xOyBpPD1kYXlzSW5Nb250aDsgaSsrKSB7IHNxdWFyZXMucHVzaChbaSwgZmFsc2VdKTsgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjUtMikgU09NRSBEQVlTIERJU0FCTEVEXG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRoaXNkYXkgPSBzdGFydERheTtcbiAgICAgICAgZm9yICh2YXIgaT0xOyBpPD1kYXlzSW5Nb250aDsgaSsrKSB7XG4gICAgICAgICAgLy8gQ0hFQ0sgSUYgREFZIElTIERJU0FCTEVEXG4gICAgICAgICAgdmFyIGRpc2FibGVkID0gZGlzYWJsZWRheS5pbmNsdWRlcyh0aGlzZGF5KTtcbiAgICAgICAgICAvLyBEQVkgT0YgTU9OVEgsIERJU0FCTEVEXG4gICAgICAgICAgc3F1YXJlcy5wdXNoKFtpLCBkaXNhYmxlZF0pOyBcbiAgICAgICAgICAvLyBORVhUIERBWVxuICAgICAgICAgIHRoaXNkYXkrKztcbiAgICAgICAgICBpZiAodGhpc2RheT09OCkgeyB0aGlzZGF5ID0gMTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI2KSBFTVBUWSBTUVVBUkVTIEFGVEVSIExBU1QgREFZIE9GIE1PTlRIXG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQuc3RhcnRtb249PVwiMVwiICYmIGVuZERheSE9Nykge1xuICAgICAgICBmb3IgKHZhciBpPWVuZERheTsgaTw3OyBpKyspIHsgc3F1YXJlcy5wdXNoKFwiQlwiKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LnN0YXJ0bW9uPT1cIjBcIiAmJiBlbmREYXkhPTYpIHtcbiAgICAgICAgZm9yICh2YXIgaT1lbmREYXk7IGk8KGVuZERheT09Nz8xMzo2KTsgaSsrKSB7IHNxdWFyZXMucHVzaChcIkJcIik7IH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjcpIERSQVcgSFRNTFxuICAgICAgdmFyIGRheW5hbWVzID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1clwiLCBcIkZyaVwiLCBcIlNhdFwiXTtcbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5zdGFydG1vbj09XCIxXCIpIHsgZGF5bmFtZXMucHVzaChcIlN1blwiKTsgfVxuICAgICAgZWxzZSB7IGRheW5hbWVzLnVuc2hpZnQoXCJTdW5cIik7IH1cbiAgXG4gICAgICAvLyAoQjctMSkgSFRNTCBEQVRFIEhFQURFUlxuICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLFxuICAgICAgICAgIHJvdyA9IHRhYmxlLmluc2VydFJvdygpLFxuICAgICAgICAgIGNlbGwgPSBudWxsO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZC1oXCIpO1xuICAgICAgZm9yIChsZXQgZCBvZiBkYXluYW1lcykge1xuICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBkO1xuICAgICAgfVxuICBcbiAgICAgIC8vIChCNy0yKSBIVE1MIERBVEUgQ0VMTFNcbiAgICAgIHZhciB0b3RhbCA9IHNxdWFyZXMubGVuZ3RoLFxuICAgICAgICAgIHJvdyA9IHRhYmxlLmluc2VydFJvdygpLFxuICAgICAgICAgIHRvZGF5ID0gbmV3IERhdGUoKSxcbiAgICAgICAgICB0b2RheURhdGUgPSBudWxsO1xuICAgICAgaWYgKHRvZGF5LmdldFVUQ01vbnRoKCkrMSA9PSBtb250aCAmJiB0b2RheS5nZXRVVENGdWxsWWVhcigpID09IHllYXIpIHtcbiAgICAgICAgdG9kYXlEYXRlID0gdG9kYXkuZ2V0VVRDRGF0ZSgpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaT0wOyBpPHRvdGFsOyBpKyspIHtcbiAgICAgICAgaWYgKGkhPXRvdGFsICYmIGklNz09MCkgeyByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTsgfVxuICAgICAgICBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgaWYgKHNxdWFyZXNbaV0gPT0gXCJCXCIpIHsgXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWQtYlwiKTsgXG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gc3F1YXJlc1tpXVswXTsgXG4gICAgICAgICAgLy8gTk9UIEFMTE9XRUQgVE8gQ0hPT1NFIFRISVMgREFZXG4gICAgICAgICAgaWYgKHNxdWFyZXNbaV1bMV0pIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBpY2tlci1kLWRkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBTExPV0VEIFRPIENIT09TRSBUSElTIERBWVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGkgPT0gdG9kYXlEYXRlKSB7IGNlbGwuY2xhc3NMaXN0LmFkZChcInBpY2tlci1kLXRkXCIpOyB9XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZC1kXCIpO1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgcGlja2VyLnBpY2sodGhpcyk7IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIChCNy0zKSBBVFRBQ0ggTkVXIENBTEVOREFSIFRPIERBVEVQSUNLRVJcbiAgICAgIGRheXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGRheXMuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIH0sXG4gIFxuICAgIC8vIChDKSBDSE9PU0UgQSBEQVRFXG4gICAgLy8gZWwgOiBIVE1MIHJlZmVyZW5jZSB0byBzZWxlY3RlZCBkYXRlIGNlbGxcbiAgICBwaWNrIDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAvLyAoQzEpIEdFVCBBTEwgQ09NUE9ORU5UU1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICB3aGlsZSAoIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwaWNrZXJcIikpIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEMyKSBHRVQgRlVMTCBTRUxFQ1RFRCBZRUFSIE1PTlRIIERBWVxuICAgICAgdmFyIHllYXIgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBpY2tlci15XCIpWzBdLnZhbHVlLFxuICAgICAgICAgIG1vbnRoID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrZXItbVwiKVswXS52YWx1ZSxcbiAgICAgICAgICBkYXkgPSBlbC5pbm5lckhUTUw7XG4gIFxuICAgICAgLy8gWVlZWS1NTS1ERCBGT1JNQVQgLSBDSEFOR0UgRk9STUFUIEhFUkUgSUYgWU9VIFdBTlQgIVxuICAgICAgaWYgKHBhcnNlSW50KG1vbnRoKTwxMCkgeyBtb250aCA9IFwiMFwiICsgbW9udGg7IH1cbiAgICAgIGlmIChwYXJzZUludChkYXkpPDEwKSB7IGRheSA9IFwiMFwiICsgZGF5OyB9XG4gICAgICB2YXIgZnVsbERhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xuICBcbiAgICAgIC8vIChDMykgVVBEQVRFIFNFTEVDVEVEIERBVEVcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5kYXRhc2V0LnRhcmdldCkudmFsdWUgPSBmdWxsRGF0ZTtcbiAgXG4gICAgICAvLyAoQzQpIFBPUFVQIE9OTFkgLSBDTE9TRSBUSEUgUE9QVVBcbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5wb3B1cCA9PSBcIjFcIikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tlci1cIiArIHBhcmVudC5kYXRhc2V0LmRwaWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTsiLCJpbXBvcnQge3VzZXJJbnRlcmZhY2V9IGZyb20gJy4vdXNlckludGVyZmFjZS5qcyc7XG5pbXBvcnQge2NyZWF0ZVByb2plY3RMaXN0fSBmcm9tIFwiLi9wcm9qZWN0U2VsZWN0TGlzdC5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c0FycmF5fSBmcm9tIFwiLi90b2RvRmFjdG9yeS5qc1wiO1xuaW1wb3J0IHtwaWNrZXJ9IGZyb20gXCIuL2RhdGVQaWNrZXIuanNcIjtcbmltcG9ydCB7cHJvamVjdHNEaXNwbGF5fSBmcm9tIFwiLi9kYXRhU3RydWN0dXJlLmpzXCI7XG5pbXBvcnQge25ld1Byb2plY3RJbnB1dH0gZnJvbSBcIi4vbmV3UHJvamVjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBuZXdQcm9qZWN0SW5wdXQoKTtcbiAgICB1c2VySW50ZXJmYWNlKCk7XG4gICAgY3JlYXRlUHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICBwaWNrZXIuYXR0YWNoKHtcbiAgICAgICAgdGFyZ2V0OiAnZHVlRGF0ZUlucHV0J1xuICAgIH0pO1xufSIsImltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0fSBmcm9tIFwiLi90b2RvRmFjdG9yeS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3UHJvamVjdElucHV0KCl7XG4gICAgbGV0IHByb2plY3RJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RJbnB1dERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dERpdlwiKTtcblxuICAgICAgICBsZXQgcHJvamVjdElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3RJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgVG9kbyBQcm9qZWN0OiBcIjtcbiAgICAgICAgcHJvamVjdElucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdElucHV0XCIpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdElucHV0XCIpO1xuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciB0aGUgbmFtZSBvZiB5b3VyIG5ldyBwcm9qZWN0OiBcIik7XG4gICAgICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlXCIsIFwiXCIpO1xuXG4gICAgICAgIGxldCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkNyZWF0ZSBhIG5ldyBwcm9qZWN0XCI7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjcmVhdGVOZXdQcm9qZWN0QnV0dG9uXCIpXG5cbiAgICAgICAgcHJvamVjdElucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dExhYmVsKTtcbiAgICAgICAgcHJvamVjdElucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgICAgIHByb2plY3RJbnB1dERpdi5hcHBlbmRDaGlsZChjcmVhdGVOZXdQcm9qZWN0QnV0dG9uKTtcblxuICAgIC8vY3JlYXRlTmV3UHJvamVjdEJ1dHRvbiBydW5zIHRoZSBjcmVhdGVOZXdQcm9qZWN0KCkgZnVuY3Rpb25cbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3UHJvamVjdCk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dERpdik7XG59OyIsImltcG9ydCB7cHJvamVjdHNBcnJheX0gZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcblxuZXhwb3J0IGxldCBzZWxlY3RQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlbGVjdFByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgJ3NlbGVjdFByb2plY3REaXYnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RMaXN0KCl7XG5cbiAgICBsZXQgc2VsZWN0UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNlbGVjdFByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBQcm9qZWN0IFNlbGVjdG9yOiBcIjtcbiAgICBzZWxlY3RQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2VsZWN0UHJvamVjdFwiKTtcbiAgIFxuICAgIHNlbGVjdFByb2plY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdExhYmVsKTtcblxuICAgIGxldCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3RQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsICdzZWxlY3RQcm9qZWN0Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gb3B0aW9uO1xuICAgICAgICBlbC52YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdFByb2plY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG59OyIsImltcG9ydCB7Y3JlYXRlUHJvamVjdExpc3R9IGZyb20gXCIuL3Byb2plY3RTZWxlY3RMaXN0LmpzXCI7XG5pbXBvcnQge3Byb2plY3RzRGlzcGxheX0gZnJvbSBcIi4vZGF0YVN0cnVjdHVyZS5qc1wiO1xuaW1wb3J0IHt1c2VySW50ZXJmYWNlRGl2fSBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNBcnJheScpKSB8fCBbe1wicHJvamVjdE5hbWVcIjogXCJkZWZhdWx0UHJvamVjdFwiLFwidG9kb3NcIjogW119LF07XG5cbi8vdG9kbyBQcm9qZWN0IEZhY3RvcnkgRnVuY3Rpb24sIG1ha2VzIG5ldyB0b2RvIHByb2plY3RzXG5mdW5jdGlvbiBUT0RPUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRoaXMudG9kb3MgPSBuZXcgQXJyYXkoKTsgICAgIFxufVxuXG4vL3RvZG8gRmFjdG9yeSBGdW5jdGlvbiwgbWFrZXMgbmV3IHRvZG8gaXRlbXNcbmZ1bmN0aW9uIFRPRE8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzOyAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpe1xuICAgIGxldCBkdXBsaWNhdGVGb3VuZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHNBcnJheSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0SW5wdXQudmFsdWUgJyArIHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0LnByb2plY3ROYW1lICcgKyBwcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgICAgICBpZiAocHJvamVjdElucHV0LnZhbHVlID09IHByb2plY3QucHJvamVjdE5hbWUpe1xuICAgICAgICAgICAgZHVwbGljYXRlRm91bmQgPSB0cnVlOyAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0gIFxuXG4gICAgaWYgKGR1cGxpY2F0ZUZvdW5kKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICBhbGVydCgnVGhpcyBQcm9qZWN0IGFscmVhZHkgZXhpc3RzLicpO1xuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlTmV3UHJvamVjdC4gbmV3IHByb2plY3QgbWFkZScpO1xuICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3IFRPRE9Qcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSkpO1xuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgIFxuICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnJheScsIGpzb25Qcm9qZWN0c0FycmF5KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0UHJvamVjdERpdicpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG4gICAgZHVwbGljYXRlRm91bmQgPSBmYWxzZTtcblxuICAgIHByb2plY3RzRGlzcGxheSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VE9ETygpe1xuICAgIC8vbWFrZXMgbmV3IHRvZG8gb2JqZWN0XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlO1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVJbnB1dCcpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eUlucHV0JykudmFsdWU7XG4gICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzSW5wdXQnKS52YWx1ZTtcbiAgICBcbiAgICBsZXQgdG9kb1Byb2plY3RTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RQcm9qZWN0JykudmFsdWU7XG4gIFxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgZGVzY3JpcHRpb24gPT09ICcnIHx8IGR1ZURhdGUgPT09ICcnIHx8IHByaW9yaXR5ID09PSAnJyB8fCBub3RlcyA9PT0gJycpe1xuICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IGEgdmFsdWUgaW50byBlYWNoIGZpZWxkIGJlZm9yZSBzdWJtaXR0aW5nIHlvdXIgdG9kbyEnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlc0lucHV0JykudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUT0RPKFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIG5vdGVzLFxuICAgICAgICApO1xuICBcbiAgICAgICAgbGV0IGRvZXNQcm9qZWN0RXhpc3QgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0U2VsZWN0b3IgJyArIHRvZG9Qcm9qZWN0U2VsZWN0b3IgKyAnIGNvbXBhcmluZyB0bzogJyArIHByb2plY3RzQXJyYXlbaV0ucHJvamVjdE5hbWUpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHRvZG9Qcm9qZWN0U2VsZWN0b3IgPT0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZSl7ICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBwcm9qZWN0IHNlbGVjdGlvbiBleGlzdHMhJyk7XG4gICAgICAgICAgICAgICAgZG9lc1Byb2plY3RFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZG9lc1Byb2plY3RFeGlzdCl7XG4gICAgICAgICAgICAgICAgYWxlcnQodG9kby50aXRsZSArICcgYWRkZWQgdG8gJyArIHByb2plY3RzQXJyYXlbaV0ucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0udG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnJheScsIGpzb25Qcm9qZWN0c0FycmF5KTsgXG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBkb2VzUHJvamVjdEV4aXN0ID0gZmFsc2U7XG4gICAgICAgIH0gIFxuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlc0lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb1Byb2plY3RTZWxlY3RvcicpLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHByb2plY3RzRGlzcGxheSgpO1xufSIsImltcG9ydCB7Y29udGVudERpdn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7Y3JlYXRlTmV3VE9ET30gZnJvbSAnLi90b2RvRmFjdG9yeS5qcyc7XG5pbXBvcnQge3NlbGVjdFByb2plY3REaXZ9IGZyb20gXCIuL3Byb2plY3RTZWxlY3RMaXN0LmpzXCI7XG4vL2ltcG9ydCB7cHJvamVjdHNEaXNwbGF5fSBmcm9tIFwiLi9kYXRhU3RydWN0dXJlLmpzXCI7XG5cbmV4cG9ydCBsZXQgdXNlckludGVyZmFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG51c2VySW50ZXJmYWNlRGl2LmlkID0gXCJ1c2VySW50ZXJmYWNlRGl2XCI7XG51c2VySW50ZXJmYWNlRGl2LmNsYXNzTmFtZSA9IFwidXNlckludGVyZmFjZURpdlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlckludGVyZmFjZSgpIHtcbiAgICBsZXQgdGl0bGVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgdGl0bGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBOYW1lOiBcIlxuICAgIHRpdGxlSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZUlucHV0XCIpO1xuXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVJbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZUlucHV0XCIpXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGEgbmFtZSBmb3IgeW91ciBUT0RPXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZVwiLCBcIlwiKTtcblxuICAgIHRpdGxlSW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dExhYmVsKTtcbiAgICB0aXRsZUlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dERpdik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gRGVzY3JpcHRpb246IFwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvbklucHV0XCIpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25JbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvbklucHV0XCIpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGEgZGVzY3JpcHRpb24gZm9yIHlvdXIgVE9ET1wiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVcIiwgXCJcIik7XG5cbiAgICBkZXNjcmlwdGlvbklucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRMYWJlbCk7XG4gICAgZGVzY3JpcHRpb25JbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXREaXYpO1xuXG4gICAgbGV0IGR1ZURhdGVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgZHVlRGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZHVlRGF0ZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gRHVlIERhdGU6IFwiO1xuICAgIGR1ZURhdGVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZURhdGVJbnB1dFwiKTtcblxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVJbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWxlY3QgRHVlIERhdGVcIik7XG5cbiAgICBkdWVEYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0TGFiZWwpO1xuICAgIGR1ZURhdGVJbnB1dERpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0RGl2KTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIFByaW9yaXR5OiBcIlxuICAgIHByaW9yaXR5SW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eUlucHV0XCIpO1xuXG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUlucHV0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5SW5wdXRcIilcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdC52YWx1ZSA9IGk7XG4gICAgICAgIG9wdC50ZXh0Q29udGVudCA9IGk7XG4gICAgICAgIG9wdC5pbm5lckhUTUwgPSBpO1xuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfVxuXG4gICAgcHJpb3JpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0TGFiZWwpO1xuICAgIHByaW9yaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0RGl2KTtcblxuICAgIGxldCBub3Rlc0lucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBub3Rlc0lucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbm90ZXNJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIE5vdGVzOiBcIjtcbiAgICBub3Rlc0lucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibm90ZXNJbnB1dFwiKTtcblxuICAgIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzSW5wdXRcIik7XG4gICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZXNJbnB1dFwiKVxuICAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBhbnkgbm90ZXMgZm9yIHlvdXIgVE9ET1wiKTtcbiAgICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVcIiwgXCJcIik7XG5cbiAgICBub3Rlc0lucHV0RGl2LmFwcGVuZENoaWxkKG5vdGVzSW5wdXRMYWJlbCk7XG4gICAgbm90ZXNJbnB1dERpdi5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKG5vdGVzSW5wdXREaXYpO1xuXG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0RGl2KTtcblxuICAgIGxldCBjcmVhdGVOZXdUT0RPQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVOZXdUT0RPQnV0dG9uLmlubmVyVGV4dCA9IFwiVXBkYXRlIFRvZG9cIjtcbiAgICBjcmVhdGVOZXdUT0RPQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3JlYXRlTmV3VE9ET0J1dHRvblwiKTtcbiAgICBcbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1RPRE9CdXR0b24pO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh1c2VySW50ZXJmYWNlRGl2KTtcblxuICAgIC8vY3JlYXRlTmV3VE9ET0J1dHRvbiBydW5zIHRoZSBjcmVhdGVOZXdUT0RPKCkgZnVuY3Rpb25cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZU5ld1RPRE9CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUT0RPKTtcbiAgICBcbiAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHVzZXJJbnRlcmZhY2UoKTtcbiAgICAgICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gICAgfSk7XG5cbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=