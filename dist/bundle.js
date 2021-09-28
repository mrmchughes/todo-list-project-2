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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #f2e2d2;\n}\n\n#projectInputDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n#projectInput {\n  font-size: 1rem;\n}\n\n#newTodoDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n.projectDiv {\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.projectDeleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.editButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.deleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.viewTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.createNewProjectButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.newTODOScreenButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.userInterfaceDiv {\n  display: none;\n  position: fixed;\n  left: 45%;\n  top: 5%;\n  transform: translate(-50%, 5%);\n  border: 5 px solid blue;\n  background-color: grey;\n}\n\n.todoDiv {\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2.5px solid #9fb7b9;\n}\n\n/* (A) POPUP */\n.picker-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s;\n}\n.picker-wrap.show {\n  opacity: 1;\n  visibility: visible;\n}\n.picker-wrap .picker {\n  margin: 50vh auto 0 auto;\n  transform: translateY(-50%);\n}\n\n/* (B) CONTAINER */\n.picker {\n  max-width: 500px;\n  background: #444444;\n  padding: 10px;\n}\n\n/* (C) MONTH + YEAR */\n.picker-m,\n.picker-y {\n  width: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n/* (D) DAY */\n.picker-d table {\n  color: #fff;\n  border-collapse: separate;\n  width: 100%;\n  margin-top: 10px;\n}\n.picker-d table td {\n  width: 14.28%; /* 7 EQUAL COLUMNS */\n  padding: 5px;\n  text-align: center;\n}\n/* HEADER CELLS */\n.picker-d-h td {\n  font-weight: bold;\n}\n/* BLANK DATES */\n.picker-d-b {\n  background: #4e4e4e;\n}\n/* TODAY */\n.picker-d-td {\n  background: #d84f4f;\n}\n/* PICKABLE DATES */\n.picker-d-d:hover {\n  cursor: pointer;\n  background: #a33c3c;\n}\n/* UNPICKABLE DATES */\n.picker-d-dd {\n  color: #888;\n  background: #4e4e4e;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,OAAO;EACP,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA,cAAc;AACd;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf;;AAEA,qBAAqB;AACrB;;EAEE,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,aAAa,EAAE,oBAAoB;EACnC,YAAY;EACZ,kBAAkB;AACpB;AACA,iBAAiB;AACjB;EACE,iBAAiB;AACnB;AACA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;AACA,UAAU;AACV;EACE,mBAAmB;AACrB;AACA,mBAAmB;AACnB;EACE,eAAe;EACf,mBAAmB;AACrB;AACA,qBAAqB;AACrB;EACE,WAAW;EACX,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: #f2e2d2;\n}\n\n#projectInputDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n#projectInput {\n  font-size: 1rem;\n}\n\n#newTodoDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n.projectDiv {\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.projectDeleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.editButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.deleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.viewTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.createNewProjectButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.newTODOScreenButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.userInterfaceDiv {\n  display: none;\n  position: fixed;\n  left: 45%;\n  top: 5%;\n  transform: translate(-50%, 5%);\n  border: 5 px solid blue;\n  background-color: grey;\n}\n\n.todoDiv {\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2.5px solid #9fb7b9;\n}\n\n/* (A) POPUP */\n.picker-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s;\n}\n.picker-wrap.show {\n  opacity: 1;\n  visibility: visible;\n}\n.picker-wrap .picker {\n  margin: 50vh auto 0 auto;\n  transform: translateY(-50%);\n}\n\n/* (B) CONTAINER */\n.picker {\n  max-width: 500px;\n  background: #444444;\n  padding: 10px;\n}\n\n/* (C) MONTH + YEAR */\n.picker-m,\n.picker-y {\n  width: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n/* (D) DAY */\n.picker-d table {\n  color: #fff;\n  border-collapse: separate;\n  width: 100%;\n  margin-top: 10px;\n}\n.picker-d table td {\n  width: 14.28%; /* 7 EQUAL COLUMNS */\n  padding: 5px;\n  text-align: center;\n}\n/* HEADER CELLS */\n.picker-d-h td {\n  font-weight: bold;\n}\n/* BLANK DATES */\n.picker-d-b {\n  background: #4e4e4e;\n}\n/* TODAY */\n.picker-d-td {\n  background: #d84f4f;\n}\n/* PICKABLE DATES */\n.picker-d-d:hover {\n  cursor: pointer;\n  background: #a33c3c;\n}\n/* UNPICKABLE DATES */\n.picker-d-dd {\n  color: #888;\n  background: #4e4e4e;\n}\n"],"sourceRoot":""}]);
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

        let projectDivLabel = document.createElement("label");
        projectDivLabel.textContent = _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].projectName;
        projectDivLabel.setAttribute("for", "projectDeleteButton");

        projectDiv.appendChild(projectDivLabel);

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
                editButton.setAttribute("class", "editButton");
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

                    document.getElementById('createNewTODOButton').addEventListener("click", function(){
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
                deleteButton.setAttribute("class", "deleteButton");
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
                viewTodoButton.setAttribute("class", "viewTodoButton");
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
                closeTodoButton.setAttribute("class", "closeTodoButton");
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
    (0,_newProject_js__WEBPACK_IMPORTED_MODULE_5__.newProjectAndTodoInput)();
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
/* harmony export */   "newProjectAndTodoInput": () => (/* binding */ newProjectAndTodoInput)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");



function newProjectAndTodoInput(){
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
    createNewProjectButton.setAttribute("class", "createNewProjectButton");
    createNewProjectButton.innerText = "Create a new project";
    createNewProjectButton.setAttribute("id", "createNewProjectButton")

    //createNewProjectButton runs the createNewProject() function
    createNewProjectButton.addEventListener('click', _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject);

    projectInputDiv.appendChild(projectInputLabel);
    projectInputDiv.appendChild(projectInput);
    projectInputDiv.appendChild(createNewProjectButton);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(projectInputDiv);

    let newTodoDiv = document.createElement("div");
    newTodoDiv.setAttribute("id", "newTodoDiv");

    let newTodoLabel = document.createElement("label");
    newTodoLabel.textContent = "New Todo: ";
    newTodoLabel.setAttribute("for", "newTODOScreenButton");
    
    let newTODOScreenButton = document.createElement("button");
    newTODOScreenButton.setAttribute("class", "newTODOScreenButton");
    newTODOScreenButton.innerText = "New Todo";
    newTODOScreenButton.setAttribute("id", "newTODOScreenButton");

    newTODOScreenButton.addEventListener("click", function(){
        userInterfaceDiv.style.display = "block";
    })

    newTodoDiv.appendChild(newTodoLabel);
    newTodoDiv.appendChild(newTODOScreenButton);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(newTodoDiv);
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
    createNewTODOButton.setAttribute("class", "createNewTODOButton");
    createNewTODOButton.innerText = "Update Todo";
    createNewTODOButton.setAttribute("id", "createNewTODOButton");
    
    userInterfaceDiv.appendChild(createNewTODOButton);

    _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.appendChild(userInterfaceDiv);

    //createNewTODOButton runs the createNewTODO() function
    document.getElementById("createNewTODOButton").addEventListener('click', _todoFactory_js__WEBPACK_IMPORTED_MODULE_1__.createNewTODO);
    
    let closeButton = document.createElement("button");
    closeButton.setAttribute("class", "closeButton");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBc0I7O0FBRTFCO0FBQ0EsNkVBQTZFLDBEQUFhO0FBQzFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7Ozs7OztVQzVIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9kYXRhU3RydWN0dXJlLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvZGF0ZVBpY2tlci5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL3Byb2plY3RTZWxlY3RMaXN0LmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZTJkMjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI25ld1RvZG9EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3REZWxldGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udmlld1RvZG9CdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jbG9zZVRvZG9CdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jbG9zZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNyZWF0ZU5ld1Byb2plY3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5uZXdUT0RPU2NyZWVuQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi51c2VySW50ZXJmYWNlRGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA0NSU7XFxuICB0b3A6IDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcbiAgYm9yZGVyOiA1IHB4IHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4udG9kb0RpdiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMi41cHggc29saWQgIzlmYjdiOTtcXG59XFxuXFxuLyogKEEpIFBPUFVQICovXFxuLnBpY2tlci13cmFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuLnBpY2tlci13cmFwLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5waWNrZXItd3JhcCAucGlja2VyIHtcXG4gIG1hcmdpbjogNTB2aCBhdXRvIDAgYXV0bztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLyogKEIpIENPTlRBSU5FUiAqL1xcbi5waWNrZXIge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiAoQykgTU9OVEggKyBZRUFSICovXFxuLnBpY2tlci1tLFxcbi5waWNrZXIteSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyogKEQpIERBWSAqL1xcbi5waWNrZXItZCB0YWJsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5waWNrZXItZCB0YWJsZSB0ZCB7XFxuICB3aWR0aDogMTQuMjglOyAvKiA3IEVRVUFMIENPTFVNTlMgKi9cXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogSEVBREVSIENFTExTICovXFxuLnBpY2tlci1kLWggdGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi8qIEJMQU5LIERBVEVTICovXFxuLnBpY2tlci1kLWIge1xcbiAgYmFja2dyb3VuZDogIzRlNGU0ZTtcXG59XFxuLyogVE9EQVkgKi9cXG4ucGlja2VyLWQtdGQge1xcbiAgYmFja2dyb3VuZDogI2Q4NGY0ZjtcXG59XFxuLyogUElDS0FCTEUgREFURVMgKi9cXG4ucGlja2VyLWQtZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjYTMzYzNjO1xcbn1cXG4vKiBVTlBJQ0tBQkxFIERBVEVTICovXFxuLnBpY2tlci1kLWRkIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYmFja2dyb3VuZDogIzRlNGU0ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSxxQkFBcUI7QUFDckI7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWEsRUFBRSxvQkFBb0I7RUFDbkMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZTJkMjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdElucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI25ld1RvZG9EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3REZWxldGVCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udmlld1RvZG9CdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jbG9zZVRvZG9CdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jbG9zZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNyZWF0ZU5ld1Byb2plY3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5uZXdUT0RPU2NyZWVuQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi51c2VySW50ZXJmYWNlRGl2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA0NSU7XFxuICB0b3A6IDUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcbiAgYm9yZGVyOiA1IHB4IHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4udG9kb0RpdiB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMi41cHggc29saWQgIzlmYjdiOTtcXG59XFxuXFxuLyogKEEpIFBPUFVQICovXFxuLnBpY2tlci13cmFwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuLnBpY2tlci13cmFwLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5waWNrZXItd3JhcCAucGlja2VyIHtcXG4gIG1hcmdpbjogNTB2aCBhdXRvIDAgYXV0bztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLyogKEIpIENPTlRBSU5FUiAqL1xcbi5waWNrZXIge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiAoQykgTU9OVEggKyBZRUFSICovXFxuLnBpY2tlci1tLFxcbi5waWNrZXIteSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyogKEQpIERBWSAqL1xcbi5waWNrZXItZCB0YWJsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5waWNrZXItZCB0YWJsZSB0ZCB7XFxuICB3aWR0aDogMTQuMjglOyAvKiA3IEVRVUFMIENPTFVNTlMgKi9cXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyogSEVBREVSIENFTExTICovXFxuLnBpY2tlci1kLWggdGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi8qIEJMQU5LIERBVEVTICovXFxuLnBpY2tlci1kLWIge1xcbiAgYmFja2dyb3VuZDogIzRlNGU0ZTtcXG59XFxuLyogVE9EQVkgKi9cXG4ucGlja2VyLWQtdGQge1xcbiAgYmFja2dyb3VuZDogI2Q4NGY0ZjtcXG59XFxuLyogUElDS0FCTEUgREFURVMgKi9cXG4ucGlja2VyLWQtZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjYTMzYzNjO1xcbn1cXG4vKiBVTlBJQ0tBQkxFIERBVEVTICovXFxuLnBpY2tlci1kLWRkIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgYmFja2dyb3VuZDogIzRlNGU0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Y29udGVudERpdn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7cHJvamVjdHNBcnJheX0gZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcbmltcG9ydCB7dXNlckludGVyZmFjZURpdn0gZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuXG5sZXQgcHJvamVjdHNEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RzRGlzcGxheSgpe1xuICAgIHByb2plY3RzRGlzcGxheURpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAoY29uc3QgW2ldIGluIHByb2plY3RzQXJyYXkpIHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdERpdlwiKTtcblxuICAgICAgICBsZXQgcHJvamVjdERpdkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBwcm9qZWN0RGl2TGFiZWwudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0RGl2TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdERlbGV0ZUJ1dHRvblwiKTtcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXZMYWJlbCk7XG5cbiAgICAgICAgbGV0IHByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdERlbGV0ZUJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgcHJvamVjdCc7XG5cbiAgICAgICAgcHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgbGV0IGpzb25Qcm9qZWN0c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnJheScsIGpzb25Qcm9qZWN0c0FycmF5KTsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgIHByb2plY3RzRGlzcGxheSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdXR0b24pO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRvZG8gb2YgcHJvamVjdHNBcnJheVtpXS50b2Rvcyl7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvRGl2XCIpO1xuICAgICAgICAgICAgICAgIGxldCB0b2RvRGl2VGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gdG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gXCJcXG4gRHVlIG9uOiBcIiArIHRvZG8uZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0IHRvZG9cIjtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdEJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gdGhlIGVkaXQgYnV0dG9uXCIpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcblxuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSB0b2RvLm5vdGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVOZXdUT0RPQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlVmFyaWFibGUgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRvZG9zID0gcHJvamVjdHNBcnJheVtpXS50b2Rvcy5maWx0ZXIoZnVuY3Rpb24oIHRvZG8gKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kby50aXRsZSAhPT0gdXBkYXRlVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb25Qcm9qZWN0c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNBcnJheScsIGpzb25Qcm9qZWN0c0FycmF5KTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGEgbmFtZSBmb3IgeW91ciBUT0RPXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGEgZGVzY3JpcHRpb24gZm9yIHlvdXIgVE9ET1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlbGVjdCBEdWUgRGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBhbnkgbm90ZXMgZm9yIHlvdXIgVE9ET1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfSx7b25jZTogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRvZG9cIjtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGVCdXR0b25cIik7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3RWYXJpYWJsZSA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlc3RWYXJpYWJsZSArICcgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgYmVpbmcgZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kby50aXRsZSArICcgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0udG9kb3MgPSBwcm9qZWN0c0FycmF5W2ldLnRvZG9zLmZpbHRlcihmdW5jdGlvbiggdG9kbyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG8udGl0bGUgIT09IHRlc3RWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzb25Qcm9qZWN0c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCB2aWV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgdmlld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkV4cGFuZCB0b2RvXCI7XG4gICAgICAgICAgICAgICAgdmlld1RvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2aWV3VG9kb0J1dHRvblwiKTtcbiAgICAgICAgICAgICAgICB2aWV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gXCJcXG4gRHVlIG9uOiBcIiArIHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IFwiXFxuIERlc2NyaXB0aW9uOiBcIiArIHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBQcmlvcml0eTogXCIgKyB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gXCJcXG4gTm90ZXM6IFwiICsgdG9kby5ub3RlcztcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgbGV0IGNsb3NlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgY2xvc2VUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb2xsYXBzZSB0b2RvXCI7XG4gICAgICAgICAgICAgICAgY2xvc2VUb2RvQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VUb2RvQnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGNsb3NlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gXCJcXG4gRHVlIG9uOiBcIiArIHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2VGV4dERpdik7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh2aWV3VG9kb0J1dHRvbik7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjbG9zZVRvZG9CdXR0b24pO1xuICAgICAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0c0Rpc3BsYXlEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXNwbGF5RGl2KTtcbiAgICB9XG59OyIsIi8vZGF0ZVBpY2tlciBpcyBhZGFwdGVkIGZyb20gVy5TLiBUb2ggYXQgaHR0cHM6Ly9jb2RlLWJveHguY29tL3NpbXBsZS1kYXRlcGlja2VyLXB1cmUtamF2YXNjcmlwdC1jc3MvI3NlYy1leHRyYVxuXG5leHBvcnQgbGV0IHBpY2tlciA9IHtcbiAgICAvLyAoQSkgQVRUQUNIIERBVEVQSUNLRVIgVE8gVEFSR0VUXG4gICAgLy8gdGFyZ2V0IDogZGF0ZXBpY2tlciB3aWxsIHBvcHVsYXRlIHRoaXMgZmllbGRcbiAgICAvLyBjb250YWluZXIgOiBkYXRlcGlja2VyIHdpbGwgYmUgZ2VuZXJhdGVkIGluIHRoaXMgY29udGFpbmVyXG4gICAgLy8gc3RhcnRtb24gOiBzdGFydCBvbiBNb25kYXkgKGRlZmF1bHQgZmFsc2UpXG4gICAgLy8gZGlzYWJsZWRheSA6IGFycmF5IG9mIGRheXMgdG8gZGlzYWJsZSwgZS5nLiBbMiw3XSB0byBkaXNhYmxlIFR1ZSBhbmQgU3VuXG4gICAgYXR0YWNoIDogZnVuY3Rpb24gKG9wdCkge1xuICAgICAgLy8gKEExKSBDUkVBVEUgTkVXIERBVEVQSUNLRVJcbiAgICAgIHZhciBkcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkcC5kYXRhc2V0LnRhcmdldCA9IG9wdC50YXJnZXQ7XG4gICAgICBkcC5kYXRhc2V0LnN0YXJ0bW9uID0gb3B0LnN0YXJ0bW9uID8gXCIxXCIgOiBcIjBcIjtcbiAgICAgIGRwLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXJcIik7XG4gICAgICBpZiAob3B0LmRpc2FibGVkYXkpIHtcbiAgICAgICAgZHAuZGF0YXNldC5kaXNhYmxlZGF5ID0gSlNPTi5zdHJpbmdpZnkob3B0LmRpc2FibGVkYXkpO1xuICAgICAgfVxuICBcbiAgICAgIC8vIChBMikgREVGQVVMVCBUTyBDVVJSRU5UIE1PTlRIICsgWUVBUiAtIE5PVEU6IFVUQyswIVxuICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKSxcbiAgICAgICAgICB0aGlzTW9udGggPSB0b2RheS5nZXRVVENNb250aCgpLCAvLyBOb3RlOiBKYW4gaXMgMFxuICAgICAgICAgIHRoaXNZZWFyID0gdG9kYXkuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgICAgICBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG4gIFxuICAgICAgLy8gKEEzKSBNT05USCBTRUxFQ1RcbiAgICAgIHZhciBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLFxuICAgICAgICAgIG9wdGlvbiA9IG51bGw7XG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZChcInBpY2tlci1tXCIpO1xuICAgICAgZm9yICh2YXIgbXRoIGluIG1vbnRocykge1xuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwYXJzZUludChtdGgpICsgMTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBtb250aHNbbXRoXTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IHRoaXNNb250aDtcbiAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7IHBpY2tlci5kcmF3KHRoaXMpOyB9KTtcbiAgICAgIGRwLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gIFxuICAgICAgLy8gKEE0KSBZRUFSIFNFTEVDVFxuICAgICAgdmFyIHlSYW5nZSA9IDEwOyAvLyBZZWFyIHJhbmdlIHRvIHNob3csIEkuRS4gZnJvbSB0aGlzWWVhci15UmFuZ2UgdG8gdGhpc1llYXIreVJhbmdlXG4gICAgICBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJwaWNrZXIteVwiKTtcbiAgICAgIGZvciAodmFyIHkgPSB0aGlzWWVhci15UmFuZ2U7IHkgPCB0aGlzWWVhcit5UmFuZ2U7IHkrKykge1xuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSB5O1xuICAgICAgICBvcHRpb24udGV4dCA9IHk7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSB5UmFuZ2U7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpeyBwaWNrZXIuZHJhdyh0aGlzKTsgfSk7XG4gICAgICBkcC5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBcbiAgICAgIC8vIChBNSkgREFZIFNFTEVDVFxuICAgICAgdmFyIGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF5cy5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWRcIik7XG4gICAgICBkcC5hcHBlbmRDaGlsZChkYXlzKTtcbiAgXG4gICAgICAvLyAoQTYpIEFUVEFDSCBEQVRFIFBJQ0tFUiBUTyBUQVJHRVQgQ09OVEFJTkVSICsgRFJBVyBUSEUgREFURVNcbiAgICAgIHBpY2tlci5kcmF3KHNlbGVjdCk7XG4gIFxuICAgICAgLy8gKEE2LUkpIElOTElORSBEQVRFIFBJQ0tFUlxuICAgICAgaWYgKG9wdC5jb250YWluZXIpIHsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0LmNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoZHApOyB9XG4gIFxuICAgICAgLy8gKEE2LVApIFBPUFVQIERBVEUgUElDS0VSXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gKEE2LVAtMSkgTUFSSyBUSElTIEFTIEEgXCJQT1BVUFwiXG4gICAgICAgIHZhciB1bmlxdWVJRCA9IDA7XG4gICAgICAgIHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tlci1cIiArIHVuaXF1ZUlEKSAhPSBudWxsKSB7XG4gICAgICAgICAgdW5pcXVlSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwIC0gMikpICsgMTtcbiAgICAgICAgfVxuICAgICAgICBkcC5kYXRhc2V0LnBvcHVwID0gXCIxXCI7XG4gICAgICAgIGRwLmRhdGFzZXQuZHBpZCA9IHVuaXF1ZUlEO1xuICBcbiAgICAgICAgLy8gKEE2LVAtMikgQ1JFQVRFIFdSQVBQRVJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3cmFwcGVyLmlkID0gXCJwaWNrZXItXCIgKyB1bmlxdWVJRDtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicGlja2VyLXdyYXBcIik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZHApO1xuICBcbiAgICAgICAgLy8gKEE2LVAtMykgQVRUQUNIIE9OQ0xJQ0sgVE8gU0hPVy9ISURFIERBVEVQSUNLRVJcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdC50YXJnZXQpO1xuICAgICAgICB0YXJnZXQuZGF0YXNldC5kcCA9IHVuaXF1ZUlEO1xuICAgICAgICB0YXJnZXQucmVhZE9ubHkgPSB0cnVlOyAvLyBQcmV2ZW50IG9uc2NyZWVuIGtleWJvYXIgb24gbW9iaWxlIGRldmljZXNcbiAgICAgICAgdGFyZ2V0Lm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrZXItXCIgKyB0aGlzLmRhdGFzZXQuZHApLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICB9O1xuICAgICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGlja2VyLXdyYXBcIikpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgXG4gICAgICAgIC8vIChBNi1QLTQpIEFUVEFDSCBQT1BVUCBEQVRFUElDS0VSIFRPIERPQ1VNRU5UXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICB9XG4gICAgfSxcbiAgXG4gIFxuICAgIC8vIChCKSBEUkFXIFRIRSBEQVlTIElOIE1PTlRIXG4gICAgLy8gZWwgOiBIVE1MIHJlZmVyZW5jZSB0byBlaXRoZXIgeWVhciBvciBtb250aCBzZWxlY3RvclxuICAgIGRyYXcgOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIC8vIChCMSkgR0VUIERBVEUgUElDS0VSIENPTVBPTkVOVFNcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgIHllYXIgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBpY2tlci15XCIpWzBdLnZhbHVlLFxuICAgICAgICAgIG1vbnRoID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrZXItbVwiKVswXS52YWx1ZSxcbiAgICAgICAgICBkYXlzID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrZXItZFwiKVswXTtcbiAgXG4gICAgICAvLyAoQjIpIERBVEUgUkFOR0UgQ0FMQ1VMQVRJT04gLSBOT1RFOiBVVEMrMCFcbiAgICAgIHZhciBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoLCAwKSkuZ2V0VVRDRGF0ZSgpLFxuICAgICAgICAgIHN0YXJ0RGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgtMSwgMSkpLmdldFVUQ0RheSgpLCAvLyBOb3RlOiBTdW4gPSAwXG4gICAgICAgICAgZW5kRGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgtMSwgZGF5c0luTW9udGgpKS5nZXRVVENEYXkoKSxcbiAgICAgICAgICBzdGFydERheSA9IHN0YXJ0RGF5PT0wID8gNyA6IHN0YXJ0RGF5LFxuICAgICAgICAgIGVuZERheSA9IGVuZERheT09MCA/IDcgOiBlbmREYXk7XG4gIFxuICAgICAgLy8gKEIzKSBHRU5FUkFURSBEQVRFIFNRVUFSRVMgKElOIEFSUkFZIEZJUlNUKVxuICAgICAgdmFyIHNxdWFyZXMgPSBbXSxcbiAgICAgICAgICBkaXNhYmxlZGF5ID0gbnVsbDtcbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5kaXNhYmxlZGF5KSB7XG4gICAgICAgIGRpc2FibGVkYXkgPSBKU09OLnBhcnNlKHBhcmVudC5kYXRhc2V0LmRpc2FibGVkYXkpO1xuICAgICAgfVxuICBcbiAgICAgIC8vIChCNCkgRU1QVFkgU1FVQVJFUyBCRUZPUkUgRklSU1QgREFZIE9GIE1PTlRIXG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQuc3RhcnRtb249PVwiMVwiICYmIHN0YXJ0RGF5IT0xKSB7XG4gICAgICAgIGZvciAodmFyIGk9MTsgaTxzdGFydERheTsgaSsrKSB7IHNxdWFyZXMucHVzaChcIkJcIik7IH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5zdGFydG1vbj09XCIwXCIgJiYgc3RhcnREYXkhPTcpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHN0YXJ0RGF5OyBpKyspIHsgc3F1YXJlcy5wdXNoKFwiQlwiKTsgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIChCNSkgREFZUyBPRiBNT05USFxuICAgICAgLy8gKEI1LTEpIEFMTCBEQVlTIEVOQUJMRUQsIEpVU1QgQUREXG4gICAgICBpZiAoZGlzYWJsZWRheT09bnVsbCkge1xuICAgICAgICBmb3IgKHZhciBpPTE7IGk8PWRheXNJbk1vbnRoOyBpKyspIHsgc3F1YXJlcy5wdXNoKFtpLCBmYWxzZV0pOyAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIChCNS0yKSBTT01FIERBWVMgRElTQUJMRURcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgdGhpc2RheSA9IHN0YXJ0RGF5O1xuICAgICAgICBmb3IgKHZhciBpPTE7IGk8PWRheXNJbk1vbnRoOyBpKyspIHtcbiAgICAgICAgICAvLyBDSEVDSyBJRiBEQVkgSVMgRElTQUJMRURcbiAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBkaXNhYmxlZGF5LmluY2x1ZGVzKHRoaXNkYXkpO1xuICAgICAgICAgIC8vIERBWSBPRiBNT05USCwgRElTQUJMRURcbiAgICAgICAgICBzcXVhcmVzLnB1c2goW2ksIGRpc2FibGVkXSk7IFxuICAgICAgICAgIC8vIE5FWFQgREFZXG4gICAgICAgICAgdGhpc2RheSsrO1xuICAgICAgICAgIGlmICh0aGlzZGF5PT04KSB7IHRoaXNkYXkgPSAxOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjYpIEVNUFRZIFNRVUFSRVMgQUZURVIgTEFTVCBEQVkgT0YgTU9OVEhcbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5zdGFydG1vbj09XCIxXCIgJiYgZW5kRGF5IT03KSB7XG4gICAgICAgIGZvciAodmFyIGk9ZW5kRGF5OyBpPDc7IGkrKykgeyBzcXVhcmVzLnB1c2goXCJCXCIpOyB9XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQuc3RhcnRtb249PVwiMFwiICYmIGVuZERheSE9Nikge1xuICAgICAgICBmb3IgKHZhciBpPWVuZERheTsgaTwoZW5kRGF5PT03PzEzOjYpOyBpKyspIHsgc3F1YXJlcy5wdXNoKFwiQlwiKTsgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIChCNykgRFJBVyBIVE1MXG4gICAgICB2YXIgZGF5bmFtZXMgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVyXCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LnN0YXJ0bW9uPT1cIjFcIikgeyBkYXluYW1lcy5wdXNoKFwiU3VuXCIpOyB9XG4gICAgICBlbHNlIHsgZGF5bmFtZXMudW5zaGlmdChcIlN1blwiKTsgfVxuICBcbiAgICAgIC8vIChCNy0xKSBIVE1MIERBVEUgSEVBREVSXG4gICAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksXG4gICAgICAgICAgcm93ID0gdGFibGUuaW5zZXJ0Um93KCksXG4gICAgICAgICAgY2VsbCA9IG51bGw7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZChcInBpY2tlci1kLWhcIik7XG4gICAgICBmb3IgKGxldCBkIG9mIGRheW5hbWVzKSB7XG4gICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBjZWxsLmlubmVySFRNTCA9IGQ7XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI3LTIpIEhUTUwgREFURSBDRUxMU1xuICAgICAgdmFyIHRvdGFsID0gc3F1YXJlcy5sZW5ndGgsXG4gICAgICAgICAgcm93ID0gdGFibGUuaW5zZXJ0Um93KCksXG4gICAgICAgICAgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHRvZGF5RGF0ZSA9IG51bGw7XG4gICAgICBpZiAodG9kYXkuZ2V0VVRDTW9udGgoKSsxID09IG1vbnRoICYmIHRvZGF5LmdldFVUQ0Z1bGxZZWFyKCkgPT0geWVhcikge1xuICAgICAgICB0b2RheURhdGUgPSB0b2RheS5nZXRVVENEYXRlKCk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpPTA7IGk8dG90YWw7IGkrKykge1xuICAgICAgICBpZiAoaSE9dG90YWwgJiYgaSU3PT0wKSB7IHJvdyA9IHRhYmxlLmluc2VydFJvdygpOyB9XG4gICAgICAgIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBpZiAoc3F1YXJlc1tpXSA9PSBcIkJcIikgeyBcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZC1iXCIpOyBcbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSBzcXVhcmVzW2ldWzBdOyBcbiAgICAgICAgICAvLyBOT1QgQUxMT1dFRCBUTyBDSE9PU0UgVEhJUyBEQVlcbiAgICAgICAgICBpZiAoc3F1YXJlc1tpXVsxXSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWQtZGRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFMTE9XRUQgVE8gQ0hPT1NFIFRISVMgREFZXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaSA9PSB0b2RheURhdGUpIHsgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWQtdGRcIik7IH1cbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBpY2tlci1kLWRcIik7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyBwaWNrZXIucGljayh0aGlzKTsgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI3LTMpIEFUVEFDSCBORVcgQ0FMRU5EQVIgVE8gREFURVBJQ0tFUlxuICAgICAgZGF5cy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgZGF5cy5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgfSxcbiAgXG4gICAgLy8gKEMpIENIT09TRSBBIERBVEVcbiAgICAvLyBlbCA6IEhUTUwgcmVmZXJlbmNlIHRvIHNlbGVjdGVkIGRhdGUgY2VsbFxuICAgIHBpY2sgOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIC8vIChDMSkgR0VUIEFMTCBDT01QT05FTlRTXG4gICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgIHdoaWxlICghcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBpY2tlclwiKSkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQzIpIEdFVCBGVUxMIFNFTEVDVEVEIFlFQVIgTU9OVEggREFZXG4gICAgICB2YXIgeWVhciA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGlja2VyLXlcIilbMF0udmFsdWUsXG4gICAgICAgICAgbW9udGggPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBpY2tlci1tXCIpWzBdLnZhbHVlLFxuICAgICAgICAgIGRheSA9IGVsLmlubmVySFRNTDtcbiAgXG4gICAgICAvLyBZWVlZLU1NLUREIEZPUk1BVCAtIENIQU5HRSBGT1JNQVQgSEVSRSBJRiBZT1UgV0FOVCAhXG4gICAgICBpZiAocGFyc2VJbnQobW9udGgpPDEwKSB7IG1vbnRoID0gXCIwXCIgKyBtb250aDsgfVxuICAgICAgaWYgKHBhcnNlSW50KGRheSk8MTApIHsgZGF5ID0gXCIwXCIgKyBkYXk7IH1cbiAgICAgIHZhciBmdWxsRGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG4gIFxuICAgICAgLy8gKEMzKSBVUERBVEUgU0VMRUNURUQgREFURVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LmRhdGFzZXQudGFyZ2V0KS52YWx1ZSA9IGZ1bGxEYXRlO1xuICBcbiAgICAgIC8vIChDNCkgUE9QVVAgT05MWSAtIENMT1NFIFRIRSBQT1BVUFxuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LnBvcHVwID09IFwiMVwiKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlja2VyLVwiICsgcGFyZW50LmRhdGFzZXQuZHBpZCkuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICB9XG4gICAgfVxuICB9OyIsImltcG9ydCB7dXNlckludGVyZmFjZX0gZnJvbSAnLi91c2VySW50ZXJmYWNlLmpzJztcbmltcG9ydCB7Y3JlYXRlUHJvamVjdExpc3R9IGZyb20gXCIuL3Byb2plY3RTZWxlY3RMaXN0LmpzXCI7XG5pbXBvcnQge3Byb2plY3RzQXJyYXl9IGZyb20gXCIuL3RvZG9GYWN0b3J5LmpzXCI7XG5pbXBvcnQge3BpY2tlcn0gZnJvbSBcIi4vZGF0ZVBpY2tlci5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c0Rpc3BsYXl9IGZyb20gXCIuL2RhdGFTdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCB7bmV3UHJvamVjdEFuZFRvZG9JbnB1dH0gZnJvbSBcIi4vbmV3UHJvamVjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBuZXdQcm9qZWN0QW5kVG9kb0lucHV0KCk7XG4gICAgdXNlckludGVyZmFjZSgpO1xuICAgIGNyZWF0ZVByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdHNEaXNwbGF5KCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgcGlja2VyLmF0dGFjaCh7XG4gICAgICAgIHRhcmdldDogJ2R1ZURhdGVJbnB1dCdcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBjb250ZW50RGl2IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7Y3JlYXRlTmV3UHJvamVjdH0gZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Byb2plY3RBbmRUb2RvSW5wdXQoKXtcbiAgICBsZXQgcHJvamVjdElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SW5wdXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXREaXZcIik7XG5cbiAgICBsZXQgcHJvamVjdElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdElucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBUb2RvIFByb2plY3Q6IFwiO1xuICAgIHByb2plY3RJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RJbnB1dFwiKTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHRoZSBuYW1lIG9mIHlvdXIgbmV3IHByb2plY3Q6IFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZVwiLCBcIlwiKTtcblxuICAgIGxldCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY3JlYXRlTmV3UHJvamVjdEJ1dHRvblwiKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ3JlYXRlIGEgbmV3IHByb2plY3RcIjtcbiAgICBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3JlYXRlTmV3UHJvamVjdEJ1dHRvblwiKVxuXG4gICAgLy9jcmVhdGVOZXdQcm9qZWN0QnV0dG9uIHJ1bnMgdGhlIGNyZWF0ZU5ld1Byb2plY3QoKSBmdW5jdGlvblxuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdQcm9qZWN0KTtcblxuICAgIHByb2plY3RJbnB1dERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXRMYWJlbCk7XG4gICAgcHJvamVjdElucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgcHJvamVjdElucHV0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5ld1Byb2plY3RCdXR0b24pO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXREaXYpO1xuXG4gICAgbGV0IG5ld1RvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdUb2RvRGl2XCIpO1xuXG4gICAgbGV0IG5ld1RvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuZXdUb2RvTGFiZWwudGV4dENvbnRlbnQgPSBcIk5ldyBUb2RvOiBcIjtcbiAgICBuZXdUb2RvTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV3VE9ET1NjcmVlbkJ1dHRvblwiKTtcbiAgICBcbiAgICBsZXQgbmV3VE9ET1NjcmVlbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV3VE9ET1NjcmVlbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld1RPRE9TY3JlZW5CdXR0b25cIik7XG4gICAgbmV3VE9ET1NjcmVlbkJ1dHRvbi5pbm5lclRleHQgPSBcIk5ldyBUb2RvXCI7XG4gICAgbmV3VE9ET1NjcmVlbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1RPRE9TY3JlZW5CdXR0b25cIik7XG5cbiAgICBuZXdUT0RPU2NyZWVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSlcblxuICAgIG5ld1RvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0xhYmVsKTtcbiAgICBuZXdUb2RvRGl2LmFwcGVuZENoaWxkKG5ld1RPRE9TY3JlZW5CdXR0b24pO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChuZXdUb2RvRGl2KTtcbn07IiwiaW1wb3J0IHtwcm9qZWN0c0FycmF5fSBmcm9tIFwiLi90b2RvRmFjdG9yeS5qc1wiO1xuXG5leHBvcnQgbGV0IHNlbGVjdFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VsZWN0UHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnc2VsZWN0UHJvamVjdERpdicpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpc3QoKXtcblxuICAgIGxldCBzZWxlY3RQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc2VsZWN0UHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIFByb2plY3QgU2VsZWN0b3I6IFwiO1xuICAgIHNlbGVjdFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJzZWxlY3RQcm9qZWN0XCIpO1xuICAgXG4gICAgc2VsZWN0UHJvamVjdERpdi5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0TGFiZWwpO1xuXG4gICAgbGV0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgJ3NlbGVjdFByb2plY3QnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBvcHRpb247XG4gICAgICAgIGVsLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG4gICAgXG4gICAgc2VsZWN0UHJvamVjdERpdi5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVQcm9qZWN0TGlzdH0gZnJvbSBcIi4vcHJvamVjdFNlbGVjdExpc3QuanNcIjtcbmltcG9ydCB7cHJvamVjdHNEaXNwbGF5fSBmcm9tIFwiLi9kYXRhU3RydWN0dXJlLmpzXCI7XG5pbXBvcnQge3VzZXJJbnRlcmZhY2VEaXZ9IGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0FycmF5JykpIHx8IFt7XCJwcm9qZWN0TmFtZVwiOiBcImRlZmF1bHRQcm9qZWN0XCIsXCJ0b2Rvc1wiOiBbXX0sXTtcblxuLy90b2RvIFByb2plY3QgRmFjdG9yeSBGdW5jdGlvbiwgbWFrZXMgbmV3IHRvZG8gcHJvamVjdHNcbmZ1bmN0aW9uIFRPRE9Qcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy50b2RvcyA9IG5ldyBBcnJheSgpOyAgICAgXG59XG5cbi8vdG9kbyBGYWN0b3J5IEZ1bmN0aW9uLCBtYWtlcyBuZXcgdG9kbyBpdGVtc1xuZnVuY3Rpb24gVE9ETyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7ICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCl7XG4gICAgbGV0IGR1cGxpY2F0ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgIFxuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0c0FycmF5KXtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RJbnB1dC52YWx1ZSAnICsgcHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3QucHJvamVjdE5hbWUgJyArIHByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT0gcHJvamVjdC5wcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICBkdXBsaWNhdGVGb3VuZCA9IHRydWU7ICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSAgXG5cbiAgICBpZiAoZHVwbGljYXRlRm91bmQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3QgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgIGFsZXJ0KCdUaGlzIFByb2plY3QgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVOZXdQcm9qZWN0LiBuZXcgcHJvamVjdCBtYWRlJyk7XG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXcgVE9ET1Byb2plY3QocHJvamVjdElucHV0LnZhbHVlKSk7XG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgXG4gICAgICAgIGxldCBqc29uUHJvamVjdHNBcnJheSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpO1xuICAgICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RQcm9qZWN0RGl2JykuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBjcmVhdGVQcm9qZWN0TGlzdCgpO1xuICAgIH1cbiAgICBkdXBsaWNhdGVGb3VuZCA9IGZhbHNlO1xuXG4gICAgcHJvamVjdHNEaXNwbGF5KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUT0RPKCl7XG4gICAgLy9tYWtlcyBuZXcgdG9kbyBvYmplY3RcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0JykudmFsdWU7XG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZUlucHV0JykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5SW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNJbnB1dCcpLnZhbHVlO1xuICAgIFxuICAgIGxldCB0b2RvUHJvamVjdFNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdFByb2plY3QnKS52YWx1ZTtcbiAgXG4gICAgaWYgKHRpdGxlID09PSAnJyB8fCBkZXNjcmlwdGlvbiA9PT0gJycgfHwgZHVlRGF0ZSA9PT0gJycgfHwgcHJpb3JpdHkgPT09ICcnIHx8IG5vdGVzID09PSAnJyl7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbnRvIGVhY2ggZmllbGQgYmVmb3JlIHN1Ym1pdHRpbmcgeW91ciB0b2RvIScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eUlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRPRE8oXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgbm90ZXMsXG4gICAgICAgICk7XG4gIFxuICAgICAgICBsZXQgZG9lc1Byb2plY3RFeGlzdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RTZWxlY3RvciAnICsgdG9kb1Byb2plY3RTZWxlY3RvciArICcgY29tcGFyaW5nIHRvOiAnICsgcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZSk7XG4gICAgXG4gICAgICAgICAgICBpZiAodG9kb1Byb2plY3RTZWxlY3RvciA9PSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lKXsgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHByb2plY3Qgc2VsZWN0aW9uIGV4aXN0cyEnKTtcbiAgICAgICAgICAgICAgICBkb2VzUHJvamVjdEV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkb2VzUHJvamVjdEV4aXN0KXtcbiAgICAgICAgICAgICAgICBhbGVydCh0b2RvLnRpdGxlICsgJyBhZGRlZCB0byAnICsgcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIGxldCBqc29uUHJvamVjdHNBcnJheSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpOyBcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGRvZXNQcm9qZWN0RXhpc3QgPSBmYWxzZTtcbiAgICAgICAgfSAgXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eUlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvUHJvamVjdFNlbGVjdG9yJykudmFsdWUgPSAnJztcbiAgICB9XG4gICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcHJvamVjdHNEaXNwbGF5KCk7XG59IiwiaW1wb3J0IHtjb250ZW50RGl2fSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOZXdUT0RPfSBmcm9tICcuL3RvZG9GYWN0b3J5LmpzJztcbmltcG9ydCB7c2VsZWN0UHJvamVjdERpdn0gZnJvbSBcIi4vcHJvamVjdFNlbGVjdExpc3QuanNcIjtcbi8vaW1wb3J0IHtwcm9qZWN0c0Rpc3BsYXl9IGZyb20gXCIuL2RhdGFTdHJ1Y3R1cmUuanNcIjtcblxuZXhwb3J0IGxldCB1c2VySW50ZXJmYWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnVzZXJJbnRlcmZhY2VEaXYuaWQgPSBcInVzZXJJbnRlcmZhY2VEaXZcIjtcbnVzZXJJbnRlcmZhY2VEaXYuY2xhc3NOYW1lID0gXCJ1c2VySW50ZXJmYWNlRGl2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VySW50ZXJmYWNlKCkge1xuICAgIGxldCB0aXRsZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCB0aXRsZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIE5hbWU6IFwiXG4gICAgdGl0bGVJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlSW5wdXRcIik7XG5cbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZUlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlSW5wdXRcIilcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBuYW1lIGZvciB5b3VyIFRPRE9cIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlXCIsIFwiXCIpO1xuXG4gICAgdGl0bGVJbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0TGFiZWwpO1xuICAgIHRpdGxlSW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0RGl2KTtcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBEZXNjcmlwdGlvbjogXCI7XG4gICAgZGVzY3JpcHRpb25JbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uSW5wdXRcIik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvbklucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uSW5wdXRcIilcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciBUT0RPXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZVwiLCBcIlwiKTtcblxuICAgIGRlc2NyaXB0aW9uSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dExhYmVsKTtcbiAgICBkZXNjcmlwdGlvbklucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dERpdik7XG5cbiAgICBsZXQgZHVlRGF0ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBkdWVEYXRlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkdWVEYXRlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBEdWUgRGF0ZTogXCI7XG4gICAgZHVlRGF0ZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZUlucHV0XCIpO1xuXG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZUlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlNlbGVjdCBEdWUgRGF0ZVwiKTtcblxuICAgIGR1ZURhdGVJbnB1dERpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXRMYWJlbCk7XG4gICAgZHVlRGF0ZUlucHV0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXREaXYpO1xuXG4gICAgbGV0IHByaW9yaXR5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IHByaW9yaXR5SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gUHJpb3JpdHk6IFwiXG4gICAgcHJpb3JpdHlJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5SW5wdXRcIik7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5SW5wdXRcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlJbnB1dFwiKVxuXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0LnZhbHVlID0gaTtcbiAgICAgICAgb3B0LnRleHRDb250ZW50ID0gaTtcbiAgICAgICAgb3B0LmlubmVySFRNTCA9IGk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9XG5cbiAgICBwcmlvcml0eUlucHV0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRMYWJlbCk7XG4gICAgcHJpb3JpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXREaXYpO1xuXG4gICAgbGV0IG5vdGVzSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IG5vdGVzSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBub3Rlc0lucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gTm90ZXM6IFwiO1xuICAgIG5vdGVzSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3Rlc0lucHV0XCIpO1xuXG4gICAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNJbnB1dFwiKTtcbiAgICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3Rlc0lucHV0XCIpXG4gICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGFueSBub3RlcyBmb3IgeW91ciBUT0RPXCIpO1xuICAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZVwiLCBcIlwiKTtcblxuICAgIG5vdGVzSW5wdXREaXYuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dExhYmVsKTtcbiAgICBub3Rlc0lucHV0RGl2LmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dERpdik7XG5cbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3REaXYpO1xuXG4gICAgbGV0IGNyZWF0ZU5ld1RPRE9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZU5ld1RPRE9CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjcmVhdGVOZXdUT0RPQnV0dG9uXCIpO1xuICAgIGNyZWF0ZU5ld1RPRE9CdXR0b24uaW5uZXJUZXh0ID0gXCJVcGRhdGUgVG9kb1wiO1xuICAgIGNyZWF0ZU5ld1RPRE9CdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjcmVhdGVOZXdUT0RPQnV0dG9uXCIpO1xuICAgIFxuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3VE9ET0J1dHRvbik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHVzZXJJbnRlcmZhY2VEaXYpO1xuXG4gICAgLy9jcmVhdGVOZXdUT0RPQnV0dG9uIHJ1bnMgdGhlIGNyZWF0ZU5ld1RPRE8oKSBmdW5jdGlvblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlTmV3VE9ET0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1RPRE8pO1xuICAgIFxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZUJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICB1c2VySW50ZXJmYWNlRGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB1c2VySW50ZXJmYWNlKCk7XG4gICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xuICAgIH0pO1xuXG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9