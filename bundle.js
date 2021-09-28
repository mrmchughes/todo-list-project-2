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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #f2e2d2;\n}\n\n#projectInputDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n#projectInput {\n  font-size: 1rem;\n}\n\n#newTodoDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n.projectDiv {\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.projectDeleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.editButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.deleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.viewTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.createNewProjectButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.newTODOScreenButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.createNewTODOButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.userInterfaceDiv {\n  display: none;\n  position: fixed;\n  left: 45%;\n  top: 5%;\n  transform: translate(-50%, 5%);\n  border: 5 px solid blue;\n  background-color: #9fb7b9;\n}\n\n.todoDiv {\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2.5px solid #9fb7b9;\n}\n\n/* (A) POPUP */\n.picker-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s;\n}\n.picker-wrap.show {\n  opacity: 1;\n  visibility: visible;\n}\n.picker-wrap .picker {\n  margin: 50vh auto 0 auto;\n  transform: translateY(-50%);\n}\n\n/* (B) CONTAINER */\n.picker {\n  max-width: 500px;\n  background: #444444;\n  padding: 10px;\n}\n\n/* (C) MONTH + YEAR */\n.picker-m,\n.picker-y {\n  width: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n/* (D) DAY */\n.picker-d table {\n  color: #fff;\n  border-collapse: separate;\n  width: 100%;\n  margin-top: 10px;\n}\n.picker-d table td {\n  width: 14.28%; /* 7 EQUAL COLUMNS */\n  padding: 5px;\n  text-align: center;\n}\n/* HEADER CELLS */\n.picker-d-h td {\n  font-weight: bold;\n}\n/* BLANK DATES */\n.picker-d-b {\n  background: #4e4e4e;\n}\n/* TODAY */\n.picker-d-td {\n  background: #d84f4f;\n}\n/* PICKABLE DATES */\n.picker-d-d:hover {\n  cursor: pointer;\n  background: #a33c3c;\n}\n/* UNPICKABLE DATES */\n.picker-d-dd {\n  color: #888;\n  background: #4e4e4e;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,OAAO;EACP,8BAA8B;EAC9B,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA,cAAc;AACd;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA,kBAAkB;AAClB;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;AACf;;AAEA,qBAAqB;AACrB;;EAEE,UAAU;EACV,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,yBAAyB;EACzB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,aAAa,EAAE,oBAAoB;EACnC,YAAY;EACZ,kBAAkB;AACpB;AACA,iBAAiB;AACjB;EACE,iBAAiB;AACnB;AACA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;AACA,UAAU;AACV;EACE,mBAAmB;AACrB;AACA,mBAAmB;AACnB;EACE,eAAe;EACf,mBAAmB;AACrB;AACA,qBAAqB;AACrB;EACE,WAAW;EACX,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: #f2e2d2;\n}\n\n#projectInputDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n#projectInput {\n  font-size: 1rem;\n}\n\n#newTodoDiv {\n  display: flex;\n  justify-content: center;\n  font-size: 1.25rem;\n  align-items: center;\n}\n\n.projectDiv {\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.projectDeleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.editButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.deleteButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.viewTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeTodoButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.createNewProjectButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.newTODOScreenButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n  font-size: 1rem;\n}\n\n.closeButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.createNewTODOButton {\n  background-color: #bcc1ba;\n  border: 1px solid black;\n  margin: 5px;\n  color: black;\n  text-align: center;\n  padding: 5px;\n}\n\n.userInterfaceDiv {\n  display: none;\n  position: fixed;\n  left: 45%;\n  top: 5%;\n  transform: translate(-50%, 5%);\n  border: 5 px solid blue;\n  background-color: #9fb7b9;\n}\n\n.todoDiv {\n  margin: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 2.5px solid #9fb7b9;\n}\n\n/* (A) POPUP */\n.picker-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s;\n}\n.picker-wrap.show {\n  opacity: 1;\n  visibility: visible;\n}\n.picker-wrap .picker {\n  margin: 50vh auto 0 auto;\n  transform: translateY(-50%);\n}\n\n/* (B) CONTAINER */\n.picker {\n  max-width: 500px;\n  background: #444444;\n  padding: 10px;\n}\n\n/* (C) MONTH + YEAR */\n.picker-m,\n.picker-y {\n  width: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n/* (D) DAY */\n.picker-d table {\n  color: #fff;\n  border-collapse: separate;\n  width: 100%;\n  margin-top: 10px;\n}\n.picker-d table td {\n  width: 14.28%; /* 7 EQUAL COLUMNS */\n  padding: 5px;\n  text-align: center;\n}\n/* HEADER CELLS */\n.picker-d-h td {\n  font-weight: bold;\n}\n/* BLANK DATES */\n.picker-d-b {\n  background: #4e4e4e;\n}\n/* TODAY */\n.picker-d-td {\n  background: #d84f4f;\n}\n/* PICKABLE DATES */\n.picker-d-d:hover {\n  cursor: pointer;\n  background: #a33c3c;\n}\n/* UNPICKABLE DATES */\n.picker-d-dd {\n  color: #888;\n  background: #4e4e4e;\n}\n"],"sourceRoot":""}]);
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
                    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__.userInterfaceDiv.style.backgroundColor = "#84C0C6";
                    console.log("I am the edit button"); 
                    
                    titleInput.value = todo.title + " ";
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
                        priorityInput.value = '';
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
        userInterfaceDiv.style.backgroundColor = "#9FB7B9";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsOEJBQThCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEdBQUcsaUJBQWlCLGdCQUFnQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLEdBQUcsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsaUJBQWlCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsbUJBQW1CLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcscUJBQXFCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsc0JBQXNCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsa0JBQWtCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsNkJBQTZCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLG9CQUFvQixHQUFHLDBCQUEwQiw4QkFBOEIsNEJBQTRCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxrQkFBa0IsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRywwQkFBMEIsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyx1QkFBdUIsa0JBQWtCLG9CQUFvQixjQUFjLFlBQVksbUNBQW1DLDRCQUE0Qiw4QkFBOEIsR0FBRyxjQUFjLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQ0FBb0MsR0FBRyxtQ0FBbUMsb0JBQW9CLFdBQVcsWUFBWSxpQkFBaUIsa0JBQWtCLG1DQUFtQyxlQUFlLHVCQUF1Qiw2QkFBNkIsR0FBRyxxQkFBcUIsZUFBZSx3QkFBd0IsR0FBRyx3QkFBd0IsNkJBQTZCLGdDQUFnQyxHQUFHLGtDQUFrQyxxQkFBcUIsd0JBQXdCLGtCQUFrQixHQUFHLG1EQUFtRCxlQUFlLGlCQUFpQiwyQkFBMkIsb0JBQW9CLEdBQUcsb0NBQW9DLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLHNCQUFzQixtQkFBbUIsc0NBQXNDLHVCQUF1QixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDJDQUEyQyxvQkFBb0Isd0JBQXdCLEdBQUcsd0NBQXdDLGdCQUFnQix3QkFBd0IsR0FBRyxTQUFTLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssc0JBQXNCLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGdDQUFnQyw4QkFBOEIsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRywwQkFBMEIsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyxpQkFBaUIsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyxtQkFBbUIsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyxxQkFBcUIsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyxzQkFBc0IsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyxrQkFBa0IsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyw2QkFBNkIsOEJBQThCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsb0JBQW9CLEdBQUcsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsaUJBQWlCLG9CQUFvQixHQUFHLGtCQUFrQiw4QkFBOEIsNEJBQTRCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlCQUFpQixHQUFHLDBCQUEwQiw4QkFBOEIsNEJBQTRCLGdCQUFnQixpQkFBaUIsdUJBQXVCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0Isb0JBQW9CLGNBQWMsWUFBWSxtQ0FBbUMsNEJBQTRCLDhCQUE4QixHQUFHLGNBQWMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9DQUFvQyxHQUFHLG1DQUFtQyxvQkFBb0IsV0FBVyxZQUFZLGlCQUFpQixrQkFBa0IsbUNBQW1DLGVBQWUsdUJBQXVCLDZCQUE2QixHQUFHLHFCQUFxQixlQUFlLHdCQUF3QixHQUFHLHdCQUF3Qiw2QkFBNkIsZ0NBQWdDLEdBQUcsa0NBQWtDLHFCQUFxQix3QkFBd0Isa0JBQWtCLEdBQUcsbURBQW1ELGVBQWUsaUJBQWlCLDJCQUEyQixvQkFBb0IsR0FBRyxvQ0FBb0MsZ0JBQWdCLDhCQUE4QixnQkFBZ0IscUJBQXFCLEdBQUcsc0JBQXNCLG1CQUFtQixzQ0FBc0MsdUJBQXVCLEdBQUcsc0NBQXNDLHNCQUFzQixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsMkNBQTJDLG9CQUFvQix3QkFBd0IsR0FBRyx3Q0FBd0MsZ0JBQWdCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUN6OVI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHNCQUFzQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDUztBQUNLOztBQUVwRDs7QUFFTztBQUNQOztBQUVBLHNCQUFzQiwwREFBYTtBQUNuQztBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDBEQUFhO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksaUVBQW9CO0FBQ2hDLG1EQUFtRCwwREFBYTtBQUNoRTtBQUNBLHdCQUF3QiwwREFBYTtBQUNyQztBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsK0JBQStCLDBEQUFhO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZFQUE4QjtBQUNsRCxvQkFBb0IscUZBQXNDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBYSxZQUFZLDBEQUFhO0FBQzlEO0FBQ0EseUJBQXlCOztBQUV6QiwrREFBK0QsMERBQWE7QUFDNUU7QUFDQTtBQUNBLG9DQUFvQywwREFBYTtBQUNqRDs7QUFFQSx3QkFBd0IsNkVBQThCO0FBQ3RELHdCQUF3QixxRkFBc0M7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRSxXQUFXO0FBQ2xDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFhLFlBQVksMERBQWE7QUFDMUQ7QUFDQSxxQkFBcUI7O0FBRXJCLDJEQUEyRCwwREFBYTtBQUN4RTtBQUNBO0FBQ0EsZ0NBQWdDLDBEQUFhO0FBQzdDO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQXNCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeklBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG9CQUFvQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG9CQUFvQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVksT0FBTztBQUN6QztBQUNBO0FBQ0Esc0JBQXNCLFlBQVksT0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQixPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUssT0FBTztBQUN2QztBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQixPQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSx1REFBdUQsb0JBQW9CO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T2lEO0FBQ1E7QUFDVjtBQUNSO0FBQ1k7QUFDSTtBQUNsQzs7QUFFZDs7QUFFUDtBQUNBLElBQUksc0VBQXNCO0FBQzFCLElBQUksZ0VBQWE7QUFDakIsSUFBSSx3RUFBaUI7QUFDckIsSUFBSSxrRUFBZTtBQUNuQixnQkFBZ0IsMERBQWE7QUFDN0IsSUFBSSx5REFBYTtBQUNqQjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cd0M7QUFDVTs7QUFFM0M7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsNkRBQWdCOztBQUVyRTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBc0I7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLElBQUksNkRBQXNCO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEQrQzs7QUFFeEM7QUFDUDs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLElBQUksaUVBQW9CLEVBQUU7QUFDOUMscUJBQXFCLDBEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnlEO0FBQ047QUFDQzs7QUFFN0MsNkVBQTZFLDRDQUE0Qzs7QUFFaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsd0VBQWlCO0FBQ3pCO0FBQ0E7O0FBRUEsSUFBSSxrRUFBZTtBQUNuQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQThCO0FBQ2xDLElBQUksa0VBQWU7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIc0M7QUFDUztBQUNTOztBQUVqRDtBQUNQO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1FQUFnQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkRBQXNCOztBQUUxQjtBQUNBLDZFQUE2RSwwREFBYTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7VUMzSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvZGF0YVN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL2RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC8uL3NyYy9wcm9qZWN0U2VsZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0Ly4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3QvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZV9vZGluX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVfb2Rpbl9wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhlX29kaW5fcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmUyZDI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNuZXdUb2RvRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0RGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnZpZXdUb2RvQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xvc2VUb2RvQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jcmVhdGVOZXdQcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubmV3VE9ET1NjcmVlbkJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY3JlYXRlTmV3VE9ET0J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnVzZXJJbnRlcmZhY2VEaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDQ1JTtcXG4gIHRvcDogNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxuICBib3JkZXI6IDUgcHggc29saWQgYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmI3Yjk7XFxufVxcblxcbi50b2RvRGl2IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAyLjVweCBzb2xpZCAjOWZiN2I5O1xcbn1cXG5cXG4vKiAoQSkgUE9QVVAgKi9cXG4ucGlja2VyLXdyYXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG4ucGlja2VyLXdyYXAuc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnBpY2tlci13cmFwIC5waWNrZXIge1xcbiAgbWFyZ2luOiA1MHZoIGF1dG8gMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4vKiAoQikgQ09OVEFJTkVSICovXFxuLnBpY2tlciB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIChDKSBNT05USCArIFlFQVIgKi9cXG4ucGlja2VyLW0sXFxuLnBpY2tlci15IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiAoRCkgREFZICovXFxuLnBpY2tlci1kIHRhYmxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnBpY2tlci1kIHRhYmxlIHRkIHtcXG4gIHdpZHRoOiAxNC4yOCU7IC8qIDcgRVFVQUwgQ09MVU1OUyAqL1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBIRUFERVIgQ0VMTFMgKi9cXG4ucGlja2VyLWQtaCB0ZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLyogQkxBTksgREFURVMgKi9cXG4ucGlja2VyLWQtYiB7XFxuICBiYWNrZ3JvdW5kOiAjNGU0ZTRlO1xcbn1cXG4vKiBUT0RBWSAqL1xcbi5waWNrZXItZC10ZCB7XFxuICBiYWNrZ3JvdW5kOiAjZDg0ZjRmO1xcbn1cXG4vKiBQSUNLQUJMRSBEQVRFUyAqL1xcbi5waWNrZXItZC1kOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNhMzNjM2M7XFxufVxcbi8qIFVOUElDS0FCTEUgREFURVMgKi9cXG4ucGlja2VyLWQtZGQge1xcbiAgY29sb3I6ICM4ODg7XFxuICBiYWNrZ3JvdW5kOiAjNGU0ZTRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUEsY0FBYztBQUNkO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUEscUJBQXFCO0FBQ3JCOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhLEVBQUUsb0JBQW9CO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQSxVQUFVO0FBQ1Y7RUFDRSxtQkFBbUI7QUFDckI7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmUyZDI7XFxufVxcblxcbiNwcm9qZWN0SW5wdXREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RJbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNuZXdUb2RvRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0RGl2IHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0RGVsZXRlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnZpZXdUb2RvQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xvc2VUb2RvQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xvc2VCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYzFiYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jcmVhdGVOZXdQcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubmV3VE9ET1NjcmVlbkJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNsb3NlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2MxYmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY3JlYXRlTmV3VE9ET0J1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNjMWJhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnVzZXJJbnRlcmZhY2VEaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDQ1JTtcXG4gIHRvcDogNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxuICBib3JkZXI6IDUgcHggc29saWQgYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmI3Yjk7XFxufVxcblxcbi50b2RvRGl2IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAyLjVweCBzb2xpZCAjOWZiN2I5O1xcbn1cXG5cXG4vKiAoQSkgUE9QVVAgKi9cXG4ucGlja2VyLXdyYXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbn1cXG4ucGlja2VyLXdyYXAuc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnBpY2tlci13cmFwIC5waWNrZXIge1xcbiAgbWFyZ2luOiA1MHZoIGF1dG8gMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4vKiAoQikgQ09OVEFJTkVSICovXFxuLnBpY2tlciB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIChDKSBNT05USCArIFlFQVIgKi9cXG4ucGlja2VyLW0sXFxuLnBpY2tlci15IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiAoRCkgREFZICovXFxuLnBpY2tlci1kIHRhYmxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnBpY2tlci1kIHRhYmxlIHRkIHtcXG4gIHdpZHRoOiAxNC4yOCU7IC8qIDcgRVFVQUwgQ09MVU1OUyAqL1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBIRUFERVIgQ0VMTFMgKi9cXG4ucGlja2VyLWQtaCB0ZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLyogQkxBTksgREFURVMgKi9cXG4ucGlja2VyLWQtYiB7XFxuICBiYWNrZ3JvdW5kOiAjNGU0ZTRlO1xcbn1cXG4vKiBUT0RBWSAqL1xcbi5waWNrZXItZC10ZCB7XFxuICBiYWNrZ3JvdW5kOiAjZDg0ZjRmO1xcbn1cXG4vKiBQSUNLQUJMRSBEQVRFUyAqL1xcbi5waWNrZXItZC1kOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNhMzNjM2M7XFxufVxcbi8qIFVOUElDS0FCTEUgREFURVMgKi9cXG4ucGlja2VyLWQtZGQge1xcbiAgY29sb3I6ICM4ODg7XFxuICBiYWNrZ3JvdW5kOiAjNGU0ZTRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjb250ZW50RGl2fSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c0FycmF5fSBmcm9tIFwiLi90b2RvRmFjdG9yeS5qc1wiO1xuaW1wb3J0IHt1c2VySW50ZXJmYWNlRGl2fSBmcm9tIFwiLi91c2VySW50ZXJmYWNlLmpzXCI7XG5cbmxldCBwcm9qZWN0c0Rpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdHNEaXNwbGF5KCl7XG4gICAgcHJvamVjdHNEaXNwbGF5RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChjb25zdCBbaV0gaW4gcHJvamVjdHNBcnJheSkge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0RGl2XCIpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0RGl2TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHByb2plY3REaXZMYWJlbC50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgIHByb2plY3REaXZMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0RGVsZXRlQnV0dG9uXCIpO1xuXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkxhYmVsKTtcblxuICAgICAgICBsZXQgcHJvamVjdERlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3REZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0RGVsZXRlQnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBwcm9qZWN0JztcblxuICAgICAgICBwcm9qZWN0RGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXNwbGF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0c0FycmF5W2ldLnRvZG9zKXtcbiAgICAgICAgICAgICAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9EaXZcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG9EaXZUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBEdWUgb246IFwiICsgdG9kby5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXQgdG9kb1wiO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0QnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4NEMwQzZcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIHRoZSBlZGl0IGJ1dHRvblwiKTsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZSArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9IHRvZG8ubm90ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZU5ld1RPRE9CdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVWYXJpYWJsZSA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0udG9kb3MgPSBwcm9qZWN0c0FycmF5W2ldLnRvZG9zLmZpbHRlcihmdW5jdGlvbiggdG9kbyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvLnRpdGxlICE9PSB1cGRhdGVWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0FycmF5JywganNvblByb2plY3RzQXJyYXkpOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzRGlzcGxheSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBuYW1lIGZvciB5b3VyIFRPRE9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciBUT0RPXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VsZWN0IER1ZSBEYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGFueSBub3RlcyBmb3IgeW91ciBUT0RPXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgdG9kb1wiO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZUJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdFZhcmlhYmxlID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdFZhcmlhYmxlICsgJyBpcyBpbiB0aGUgcHJvY2VzcyBvZiBiZWluZyBkZWxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvLnRpdGxlICsgJyBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNBcnJheVtpXS50b2RvcyA9IHByb2plY3RzQXJyYXlbaV0udG9kb3MuZmlsdGVyKGZ1bmN0aW9uKCB0b2RvICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kby50aXRsZSAhPT0gdGVzdFZhcmlhYmxlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQganNvblByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyYXknLCBqc29uUHJvamVjdHNBcnJheSk7IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHZpZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICB2aWV3VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRXhwYW5kIHRvZG9cIjtcbiAgICAgICAgICAgICAgICB2aWV3VG9kb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInZpZXdUb2RvQnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIHZpZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBEdWUgb246IFwiICsgdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgKz0gXCJcXG4gRGVzY3JpcHRpb246IFwiICsgdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IFwiXFxuIFByaW9yaXR5OiBcIiArIHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBOb3RlczogXCIgKyB0b2RvLm5vdGVzO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgY2xvc2VUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbGxhcHNlIHRvZG9cIjtcbiAgICAgICAgICAgICAgICBjbG9zZVRvZG9CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZVRvZG9CdXR0b25cIik7XG4gICAgICAgICAgICAgICAgY2xvc2VUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGl2VGV4dERpdi5pbm5lclRleHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RpdlRleHREaXYuaW5uZXJUZXh0ICs9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9EaXZUZXh0RGl2LmlubmVyVGV4dCArPSBcIlxcbiBEdWUgb246IFwiICsgdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EaXZUZXh0RGl2KTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHZpZXdUb2RvQnV0dG9uKTtcbiAgICAgICAgICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGNsb3NlVG9kb0J1dHRvbik7XG4gICAgICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzRGlzcGxheURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpc3BsYXlEaXYpO1xuICAgIH1cbn07IiwiLy9kYXRlUGlja2VyIGlzIGFkYXB0ZWQgZnJvbSBXLlMuIFRvaCBhdCBodHRwczovL2NvZGUtYm94eC5jb20vc2ltcGxlLWRhdGVwaWNrZXItcHVyZS1qYXZhc2NyaXB0LWNzcy8jc2VjLWV4dHJhXG5cbmV4cG9ydCBsZXQgcGlja2VyID0ge1xuICAgIC8vIChBKSBBVFRBQ0ggREFURVBJQ0tFUiBUTyBUQVJHRVRcbiAgICAvLyB0YXJnZXQgOiBkYXRlcGlja2VyIHdpbGwgcG9wdWxhdGUgdGhpcyBmaWVsZFxuICAgIC8vIGNvbnRhaW5lciA6IGRhdGVwaWNrZXIgd2lsbCBiZSBnZW5lcmF0ZWQgaW4gdGhpcyBjb250YWluZXJcbiAgICAvLyBzdGFydG1vbiA6IHN0YXJ0IG9uIE1vbmRheSAoZGVmYXVsdCBmYWxzZSlcbiAgICAvLyBkaXNhYmxlZGF5IDogYXJyYXkgb2YgZGF5cyB0byBkaXNhYmxlLCBlLmcuIFsyLDddIHRvIGRpc2FibGUgVHVlIGFuZCBTdW5cbiAgICBhdHRhY2ggOiBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAvLyAoQTEpIENSRUFURSBORVcgREFURVBJQ0tFUlxuICAgICAgdmFyIGRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRwLmRhdGFzZXQudGFyZ2V0ID0gb3B0LnRhcmdldDtcbiAgICAgIGRwLmRhdGFzZXQuc3RhcnRtb24gPSBvcHQuc3RhcnRtb24gPyBcIjFcIiA6IFwiMFwiO1xuICAgICAgZHAuY2xhc3NMaXN0LmFkZChcInBpY2tlclwiKTtcbiAgICAgIGlmIChvcHQuZGlzYWJsZWRheSkge1xuICAgICAgICBkcC5kYXRhc2V0LmRpc2FibGVkYXkgPSBKU09OLnN0cmluZ2lmeShvcHQuZGlzYWJsZWRheSk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEEyKSBERUZBVUxUIFRPIENVUlJFTlQgTU9OVEggKyBZRUFSIC0gTk9URTogVVRDKzAhXG4gICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAgIHRoaXNNb250aCA9IHRvZGF5LmdldFVUQ01vbnRoKCksIC8vIE5vdGU6IEphbiBpcyAwXG4gICAgICAgICAgdGhpc1llYXIgPSB0b2RheS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgIG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLFxuICAgICAgICAgICAgICAgICAgICBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcbiAgXG4gICAgICAvLyAoQTMpIE1PTlRIIFNFTEVDVFxuICAgICAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksXG4gICAgICAgICAgb3B0aW9uID0gbnVsbDtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKFwicGlja2VyLW1cIik7XG4gICAgICBmb3IgKHZhciBtdGggaW4gbW9udGhzKSB7XG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHBhcnNlSW50KG10aCkgKyAxO1xuICAgICAgICBvcHRpb24udGV4dCA9IG1vbnRoc1ttdGhdO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gdGhpc01vbnRoO1xuICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXsgcGlja2VyLmRyYXcodGhpcyk7IH0pO1xuICAgICAgZHAuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgXG4gICAgICAvLyAoQTQpIFlFQVIgU0VMRUNUXG4gICAgICB2YXIgeVJhbmdlID0gMTA7IC8vIFllYXIgcmFuZ2UgdG8gc2hvdywgSS5FLiBmcm9tIHRoaXNZZWFyLXlSYW5nZSB0byB0aGlzWWVhcit5UmFuZ2VcbiAgICAgIHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZChcInBpY2tlci15XCIpO1xuICAgICAgZm9yICh2YXIgeSA9IHRoaXNZZWFyLXlSYW5nZTsgeSA8IHRoaXNZZWFyK3lSYW5nZTsgeSsrKSB7XG4gICAgICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHk7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0geTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IHlSYW5nZTtcbiAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7IHBpY2tlci5kcmF3KHRoaXMpOyB9KTtcbiAgICAgIGRwLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gIFxuICAgICAgLy8gKEE1KSBEQVkgU0VMRUNUXG4gICAgICB2YXIgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXlzLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZFwiKTtcbiAgICAgIGRwLmFwcGVuZENoaWxkKGRheXMpO1xuICBcbiAgICAgIC8vIChBNikgQVRUQUNIIERBVEUgUElDS0VSIFRPIFRBUkdFVCBDT05UQUlORVIgKyBEUkFXIFRIRSBEQVRFU1xuICAgICAgcGlja2VyLmRyYXcoc2VsZWN0KTtcbiAgXG4gICAgICAvLyAoQTYtSSkgSU5MSU5FIERBVEUgUElDS0VSXG4gICAgICBpZiAob3B0LmNvbnRhaW5lcikgeyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHQuY29udGFpbmVyKS5hcHBlbmRDaGlsZChkcCk7IH1cbiAgXG4gICAgICAvLyAoQTYtUCkgUE9QVVAgREFURSBQSUNLRVJcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyAoQTYtUC0xKSBNQVJLIFRISVMgQVMgQSBcIlBPUFVQXCJcbiAgICAgICAgdmFyIHVuaXF1ZUlEID0gMDtcbiAgICAgICAgd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGlja2VyLVwiICsgdW5pcXVlSUQpICE9IG51bGwpIHtcbiAgICAgICAgICB1bmlxdWVJRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAgLSAyKSkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGRwLmRhdGFzZXQucG9wdXAgPSBcIjFcIjtcbiAgICAgICAgZHAuZGF0YXNldC5kcGlkID0gdW5pcXVlSUQ7XG4gIFxuICAgICAgICAvLyAoQTYtUC0yKSBDUkVBVEUgV1JBUFBFUlxuICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdyYXBwZXIuaWQgPSBcInBpY2tlci1cIiArIHVuaXF1ZUlEO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItd3JhcFwiKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChkcCk7XG4gIFxuICAgICAgICAvLyAoQTYtUC0zKSBBVFRBQ0ggT05DTElDSyBUTyBTSE9XL0hJREUgREFURVBJQ0tFUlxuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0LnRhcmdldCk7XG4gICAgICAgIHRhcmdldC5kYXRhc2V0LmRwID0gdW5pcXVlSUQ7XG4gICAgICAgIHRhcmdldC5yZWFkT25seSA9IHRydWU7IC8vIFByZXZlbnQgb25zY3JlZW4ga2V5Ym9hciBvbiBtb2JpbGUgZGV2aWNlc1xuICAgICAgICB0YXJnZXQub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY2tlci1cIiArIHRoaXMuZGF0YXNldC5kcCkuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIH07XG4gICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwaWNrZXItd3JhcFwiKSkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgLy8gKEE2LVAtNCkgQVRUQUNIIFBPUFVQIERBVEVQSUNLRVIgVE8gRE9DVU1FTlRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9LFxuICBcbiAgXG4gICAgLy8gKEIpIERSQVcgVEhFIERBWVMgSU4gTU9OVEhcbiAgICAvLyBlbCA6IEhUTUwgcmVmZXJlbmNlIHRvIGVpdGhlciB5ZWFyIG9yIG1vbnRoIHNlbGVjdG9yXG4gICAgZHJhdyA6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgLy8gKEIxKSBHRVQgREFURSBQSUNLRVIgQ09NUE9ORU5UU1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgeWVhciA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGlja2VyLXlcIilbMF0udmFsdWUsXG4gICAgICAgICAgbW9udGggPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBpY2tlci1tXCIpWzBdLnZhbHVlLFxuICAgICAgICAgIGRheXMgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBpY2tlci1kXCIpWzBdO1xuICBcbiAgICAgIC8vIChCMikgREFURSBSQU5HRSBDQUxDVUxBVElPTiAtIE5PVEU6IFVUQyswIVxuICAgICAgdmFyIGRheXNJbk1vbnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGgsIDApKS5nZXRVVENEYXRlKCksXG4gICAgICAgICAgc3RhcnREYXkgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aC0xLCAxKSkuZ2V0VVRDRGF5KCksIC8vIE5vdGU6IFN1biA9IDBcbiAgICAgICAgICBlbmREYXkgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aC0xLCBkYXlzSW5Nb250aCkpLmdldFVUQ0RheSgpLFxuICAgICAgICAgIHN0YXJ0RGF5ID0gc3RhcnREYXk9PTAgPyA3IDogc3RhcnREYXksXG4gICAgICAgICAgZW5kRGF5ID0gZW5kRGF5PT0wID8gNyA6IGVuZERheTtcbiAgXG4gICAgICAvLyAoQjMpIEdFTkVSQVRFIERBVEUgU1FVQVJFUyAoSU4gQVJSQVkgRklSU1QpXG4gICAgICB2YXIgc3F1YXJlcyA9IFtdLFxuICAgICAgICAgIGRpc2FibGVkYXkgPSBudWxsO1xuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LmRpc2FibGVkYXkpIHtcbiAgICAgICAgZGlzYWJsZWRheSA9IEpTT04ucGFyc2UocGFyZW50LmRhdGFzZXQuZGlzYWJsZWRheSk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI0KSBFTVBUWSBTUVVBUkVTIEJFRk9SRSBGSVJTVCBEQVkgT0YgTU9OVEhcbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5zdGFydG1vbj09XCIxXCIgJiYgc3RhcnREYXkhPTEpIHtcbiAgICAgICAgZm9yICh2YXIgaT0xOyBpPHN0YXJ0RGF5OyBpKyspIHsgc3F1YXJlcy5wdXNoKFwiQlwiKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LnN0YXJ0bW9uPT1cIjBcIiAmJiBzdGFydERheSE9Nykge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c3RhcnREYXk7IGkrKykgeyBzcXVhcmVzLnB1c2goXCJCXCIpOyB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI1KSBEQVlTIE9GIE1PTlRIXG4gICAgICAvLyAoQjUtMSkgQUxMIERBWVMgRU5BQkxFRCwgSlVTVCBBRERcbiAgICAgIGlmIChkaXNhYmxlZGF5PT1udWxsKSB7XG4gICAgICAgIGZvciAodmFyIGk9MTsgaTw9ZGF5c0luTW9udGg7IGkrKykgeyBzcXVhcmVzLnB1c2goW2ksIGZhbHNlXSk7ICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI1LTIpIFNPTUUgREFZUyBESVNBQkxFRFxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciB0aGlzZGF5ID0gc3RhcnREYXk7XG4gICAgICAgIGZvciAodmFyIGk9MTsgaTw9ZGF5c0luTW9udGg7IGkrKykge1xuICAgICAgICAgIC8vIENIRUNLIElGIERBWSBJUyBESVNBQkxFRFxuICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGRpc2FibGVkYXkuaW5jbHVkZXModGhpc2RheSk7XG4gICAgICAgICAgLy8gREFZIE9GIE1PTlRILCBESVNBQkxFRFxuICAgICAgICAgIHNxdWFyZXMucHVzaChbaSwgZGlzYWJsZWRdKTsgXG4gICAgICAgICAgLy8gTkVYVCBEQVlcbiAgICAgICAgICB0aGlzZGF5Kys7XG4gICAgICAgICAgaWYgKHRoaXNkYXk9PTgpIHsgdGhpc2RheSA9IDE7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIChCNikgRU1QVFkgU1FVQVJFUyBBRlRFUiBMQVNUIERBWSBPRiBNT05USFxuICAgICAgaWYgKHBhcmVudC5kYXRhc2V0LnN0YXJ0bW9uPT1cIjFcIiAmJiBlbmREYXkhPTcpIHtcbiAgICAgICAgZm9yICh2YXIgaT1lbmREYXk7IGk8NzsgaSsrKSB7IHNxdWFyZXMucHVzaChcIkJcIik7IH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuZGF0YXNldC5zdGFydG1vbj09XCIwXCIgJiYgZW5kRGF5IT02KSB7XG4gICAgICAgIGZvciAodmFyIGk9ZW5kRGF5OyBpPChlbmREYXk9PTc/MTM6Nik7IGkrKykgeyBzcXVhcmVzLnB1c2goXCJCXCIpOyB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gKEI3KSBEUkFXIEhUTUxcbiAgICAgIHZhciBkYXluYW1lcyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodXJcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQuc3RhcnRtb249PVwiMVwiKSB7IGRheW5hbWVzLnB1c2goXCJTdW5cIik7IH1cbiAgICAgIGVsc2UgeyBkYXluYW1lcy51bnNoaWZ0KFwiU3VuXCIpOyB9XG4gIFxuICAgICAgLy8gKEI3LTEpIEhUTUwgREFURSBIRUFERVJcbiAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKSxcbiAgICAgICAgICByb3cgPSB0YWJsZS5pbnNlcnRSb3coKSxcbiAgICAgICAgICBjZWxsID0gbnVsbDtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWQtaFwiKTtcbiAgICAgIGZvciAobGV0IGQgb2YgZGF5bmFtZXMpIHtcbiAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGNlbGwuaW5uZXJIVE1MID0gZDtcbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjctMikgSFRNTCBEQVRFIENFTExTXG4gICAgICB2YXIgdG90YWwgPSBzcXVhcmVzLmxlbmd0aCxcbiAgICAgICAgICByb3cgPSB0YWJsZS5pbnNlcnRSb3coKSxcbiAgICAgICAgICB0b2RheSA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgdG9kYXlEYXRlID0gbnVsbDtcbiAgICAgIGlmICh0b2RheS5nZXRVVENNb250aCgpKzEgPT0gbW9udGggJiYgdG9kYXkuZ2V0VVRDRnVsbFllYXIoKSA9PSB5ZWFyKSB7XG4gICAgICAgIHRvZGF5RGF0ZSA9IHRvZGF5LmdldFVUQ0RhdGUoKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGk9MDsgaTx0b3RhbDsgaSsrKSB7XG4gICAgICAgIGlmIChpIT10b3RhbCAmJiBpJTc9PTApIHsgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7IH1cbiAgICAgICAgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGlmIChzcXVhcmVzW2ldID09IFwiQlwiKSB7IFxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInBpY2tlci1kLWJcIik7IFxuICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICBjZWxsLmlubmVySFRNTCA9IHNxdWFyZXNbaV1bMF07IFxuICAgICAgICAgIC8vIE5PVCBBTExPV0VEIFRPIENIT09TRSBUSElTIERBWVxuICAgICAgICAgIGlmIChzcXVhcmVzW2ldWzFdKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZC1kZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQUxMT1dFRCBUTyBDSE9PU0UgVEhJUyBEQVlcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpID09IHRvZGF5RGF0ZSkgeyBjZWxsLmNsYXNzTGlzdC5hZGQoXCJwaWNrZXItZC10ZFwiKTsgfVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwicGlja2VyLWQtZFwiKTtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7IHBpY2tlci5waWNrKHRoaXMpOyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAvLyAoQjctMykgQVRUQUNIIE5FVyBDQUxFTkRBUiBUTyBEQVRFUElDS0VSXG4gICAgICBkYXlzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBkYXlzLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICB9LFxuICBcbiAgICAvLyAoQykgQ0hPT1NFIEEgREFURVxuICAgIC8vIGVsIDogSFRNTCByZWZlcmVuY2UgdG8gc2VsZWN0ZWQgZGF0ZSBjZWxsXG4gICAgcGljayA6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgLy8gKEMxKSBHRVQgQUxMIENPTVBPTkVOVFNcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgd2hpbGUgKCFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGlja2VyXCIpKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICBcbiAgICAgIC8vIChDMikgR0VUIEZVTEwgU0VMRUNURUQgWUVBUiBNT05USCBEQVlcbiAgICAgIHZhciB5ZWFyID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWNrZXIteVwiKVswXS52YWx1ZSxcbiAgICAgICAgICBtb250aCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGlja2VyLW1cIilbMF0udmFsdWUsXG4gICAgICAgICAgZGF5ID0gZWwuaW5uZXJIVE1MO1xuICBcbiAgICAgIC8vIFlZWVktTU0tREQgRk9STUFUIC0gQ0hBTkdFIEZPUk1BVCBIRVJFIElGIFlPVSBXQU5UICFcbiAgICAgIGlmIChwYXJzZUludChtb250aCk8MTApIHsgbW9udGggPSBcIjBcIiArIG1vbnRoOyB9XG4gICAgICBpZiAocGFyc2VJbnQoZGF5KTwxMCkgeyBkYXkgPSBcIjBcIiArIGRheTsgfVxuICAgICAgdmFyIGZ1bGxEYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcbiAgXG4gICAgICAvLyAoQzMpIFVQREFURSBTRUxFQ1RFRCBEQVRFXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQuZGF0YXNldC50YXJnZXQpLnZhbHVlID0gZnVsbERhdGU7XG4gIFxuICAgICAgLy8gKEM0KSBQT1BVUCBPTkxZIC0gQ0xPU0UgVEhFIFBPUFVQXG4gICAgICBpZiAocGFyZW50LmRhdGFzZXQucG9wdXAgPT0gXCIxXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWNrZXItXCIgKyBwYXJlbnQuZGF0YXNldC5kcGlkKS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07IiwiaW1wb3J0IHt1c2VySW50ZXJmYWNlfSBmcm9tICcuL3VzZXJJbnRlcmZhY2UuanMnO1xuaW1wb3J0IHtjcmVhdGVQcm9qZWN0TGlzdH0gZnJvbSBcIi4vcHJvamVjdFNlbGVjdExpc3QuanNcIjtcbmltcG9ydCB7cHJvamVjdHNBcnJheX0gZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcbmltcG9ydCB7cGlja2VyfSBmcm9tIFwiLi9kYXRlUGlja2VyLmpzXCI7XG5pbXBvcnQge3Byb2plY3RzRGlzcGxheX0gZnJvbSBcIi4vZGF0YVN0cnVjdHVyZS5qc1wiO1xuaW1wb3J0IHtuZXdQcm9qZWN0QW5kVG9kb0lucHV0fSBmcm9tIFwiLi9uZXdQcm9qZWN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIG5ld1Byb2plY3RBbmRUb2RvSW5wdXQoKTtcbiAgICB1c2VySW50ZXJmYWNlKCk7XG4gICAgY3JlYXRlUHJvamVjdExpc3QoKTtcbiAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICBwaWNrZXIuYXR0YWNoKHtcbiAgICAgICAgdGFyZ2V0OiAnZHVlRGF0ZUlucHV0J1xuICAgIH0pO1xufSIsImltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0fSBmcm9tIFwiLi90b2RvRmFjdG9yeS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3UHJvamVjdEFuZFRvZG9JbnB1dCgpe1xuICAgIGxldCBwcm9qZWN0SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJbnB1dERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dERpdlwiKTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qZWN0SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFRvZG8gUHJvamVjdDogXCI7XG4gICAgcHJvamVjdElucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdElucHV0XCIpO1xuXG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdElucHV0XCIpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdElucHV0XCIpXG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgdGhlIG5hbWUgb2YgeW91ciBuZXcgcHJvamVjdDogXCIpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlXCIsIFwiXCIpO1xuXG4gICAgbGV0IGNyZWF0ZU5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjcmVhdGVOZXdQcm9qZWN0QnV0dG9uXCIpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDcmVhdGUgYSBuZXcgcHJvamVjdFwiO1xuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjcmVhdGVOZXdQcm9qZWN0QnV0dG9uXCIpXG5cbiAgICAvL2NyZWF0ZU5ld1Byb2plY3RCdXR0b24gcnVucyB0aGUgY3JlYXRlTmV3UHJvamVjdCgpIGZ1bmN0aW9uXG4gICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld1Byb2plY3QpO1xuXG4gICAgcHJvamVjdElucHV0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dExhYmVsKTtcbiAgICBwcm9qZWN0SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcbiAgICBwcm9qZWN0SW5wdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UHJvamVjdEJ1dHRvbik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dERpdik7XG5cbiAgICBsZXQgbmV3VG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1RvZG9EaXZcIik7XG5cbiAgICBsZXQgbmV3VG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5ld1RvZG9MYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFRvZG86IFwiO1xuICAgIG5ld1RvZG9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXdUT0RPU2NyZWVuQnV0dG9uXCIpO1xuICAgIFxuICAgIGxldCBuZXdUT0RPU2NyZWVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdUT0RPU2NyZWVuQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3VE9ET1NjcmVlbkJ1dHRvblwiKTtcbiAgICBuZXdUT0RPU2NyZWVuQnV0dG9uLmlubmVyVGV4dCA9IFwiTmV3IFRvZG9cIjtcbiAgICBuZXdUT0RPU2NyZWVuQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3VE9ET1NjcmVlbkJ1dHRvblwiKTtcblxuICAgIG5ld1RPRE9TY3JlZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KVxuXG4gICAgbmV3VG9kb0Rpdi5hcHBlbmRDaGlsZChuZXdUb2RvTGFiZWwpO1xuICAgIG5ld1RvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VE9ET1NjcmVlbkJ1dHRvbik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5ld1RvZG9EaXYpO1xufTsiLCJpbXBvcnQge3Byb2plY3RzQXJyYXl9IGZyb20gXCIuL3RvZG9GYWN0b3J5LmpzXCI7XG5cbmV4cG9ydCBsZXQgc2VsZWN0UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zZWxlY3RQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsICdzZWxlY3RQcm9qZWN0RGl2Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdCgpe1xuXG4gICAgbGV0IHNlbGVjdFByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzZWxlY3RQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gUHJvamVjdCBTZWxlY3RvcjogXCI7XG4gICAgc2VsZWN0UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNlbGVjdFByb2plY3RcIik7XG4gICBcbiAgICBzZWxlY3RQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RMYWJlbCk7XG5cbiAgICBsZXQgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnc2VsZWN0UHJvamVjdCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lO1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IG9wdGlvbjtcbiAgICAgICAgZWwudmFsdWUgPSBvcHRpb247XG4gICAgICAgIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBcbiAgICBzZWxlY3RQcm9qZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xufTsiLCJpbXBvcnQge2NyZWF0ZVByb2plY3RMaXN0fSBmcm9tIFwiLi9wcm9qZWN0U2VsZWN0TGlzdC5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c0Rpc3BsYXl9IGZyb20gXCIuL2RhdGFTdHJ1Y3R1cmUuanNcIjtcbmltcG9ydCB7dXNlckludGVyZmFjZURpdn0gZnJvbSBcIi4vdXNlckludGVyZmFjZS5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzQXJyYXknKSkgfHwgW3tcInByb2plY3ROYW1lXCI6IFwiZGVmYXVsdFByb2plY3RcIixcInRvZG9zXCI6IFtdfSxdO1xuXG4vL3RvZG8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uLCBtYWtlcyBuZXcgdG9kbyBwcm9qZWN0c1xuZnVuY3Rpb24gVE9ET1Byb2plY3QocHJvamVjdE5hbWUpe1xuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB0aGlzLnRvZG9zID0gbmV3IEFycmF5KCk7ICAgICBcbn1cblxuLy90b2RvIEZhY3RvcnkgRnVuY3Rpb24sIG1ha2VzIG5ldyB0b2RvIGl0ZW1zXG5mdW5jdGlvbiBUT0RPKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKXtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlczsgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcbiAgICBsZXQgZHVwbGljYXRlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzQXJyYXkpe1xuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdElucHV0LnZhbHVlICcgKyBwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdC5wcm9qZWN0TmFtZSAnICsgcHJvamVjdC5wcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgaWYgKHByb2plY3RJbnB1dC52YWx1ZSA9PSBwcm9qZWN0LnByb2plY3ROYW1lKXtcbiAgICAgICAgICAgIGR1cGxpY2F0ZUZvdW5kID0gdHJ1ZTsgICAgICAgIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9ICBcblxuICAgIGlmIChkdXBsaWNhdGVGb3VuZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlTmV3UHJvamVjdCwgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgYWxlcnQoJ1RoaXMgUHJvamVjdCBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZU5ld1Byb2plY3QuIG5ldyBwcm9qZWN0IG1hZGUnKTtcbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKG5ldyBUT0RPUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpKTtcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgICBcbiAgICAgICAgbGV0IGpzb25Qcm9qZWN0c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyYXknLCBqc29uUHJvamVjdHNBcnJheSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdFByb2plY3REaXYnKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIGNyZWF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuICAgIGR1cGxpY2F0ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1RPRE8oKXtcbiAgICAvL21ha2VzIG5ldyB0b2RvIG9iamVjdFxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0JykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlSW5wdXQnKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlJbnB1dCcpLnZhbHVlO1xuICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3Rlc0lucHV0JykudmFsdWU7XG4gICAgXG4gICAgbGV0IHRvZG9Qcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0UHJvamVjdCcpLnZhbHVlO1xuICBcbiAgICBpZiAodGl0bGUgPT09ICcnIHx8IGRlc2NyaXB0aW9uID09PSAnJyB8fCBkdWVEYXRlID09PSAnJyB8fCBwcmlvcml0eSA9PT0gJycgfHwgbm90ZXMgPT09ICcnKXtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBhIHZhbHVlIGludG8gZWFjaCBmaWVsZCBiZWZvcmUgc3VibWl0dGluZyB5b3VyIHRvZG8hJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZUlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5SW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVE9ETyhcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBub3RlcyxcbiAgICAgICAgKTtcbiAgXG4gICAgICAgIGxldCBkb2VzUHJvamVjdEV4aXN0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdFNlbGVjdG9yICcgKyB0b2RvUHJvamVjdFNlbGVjdG9yICsgJyBjb21wYXJpbmcgdG86ICcgKyBwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lKTtcbiAgICBcbiAgICAgICAgICAgIGlmICh0b2RvUHJvamVjdFNlbGVjdG9yID09IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdE5hbWUpeyAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgcHJvamVjdCBzZWxlY3Rpb24gZXhpc3RzIScpO1xuICAgICAgICAgICAgICAgIGRvZXNQcm9qZWN0RXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRvZXNQcm9qZWN0RXhpc3Qpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KHRvZG8udGl0bGUgKyAnIGFkZGVkIHRvICcgKyBwcm9qZWN0c0FycmF5W2ldLnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGpzb25Qcm9qZWN0c0FycmF5ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzQXJyYXknLCBqc29uUHJvamVjdHNBcnJheSk7IFxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZG9lc1Byb2plY3RFeGlzdCA9IGZhbHNlO1xuICAgICAgICB9ICBcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZUlucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5SW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXNJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9Qcm9qZWN0U2VsZWN0b3InKS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICB1c2VySW50ZXJmYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwcm9qZWN0c0Rpc3BsYXkoKTtcbn0iLCJpbXBvcnQge2NvbnRlbnREaXZ9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQge2NyZWF0ZU5ld1RPRE99IGZyb20gJy4vdG9kb0ZhY3RvcnkuanMnO1xuaW1wb3J0IHtzZWxlY3RQcm9qZWN0RGl2fSBmcm9tIFwiLi9wcm9qZWN0U2VsZWN0TGlzdC5qc1wiO1xuXG5leHBvcnQgbGV0IHVzZXJJbnRlcmZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudXNlckludGVyZmFjZURpdi5pZCA9IFwidXNlckludGVyZmFjZURpdlwiO1xudXNlckludGVyZmFjZURpdi5jbGFzc05hbWUgPSBcInVzZXJJbnRlcmZhY2VEaXZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2UoKSB7XG4gICAgbGV0IHRpdGxlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IHRpdGxlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRvZG8gTmFtZTogXCJcbiAgICB0aXRsZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVJbnB1dFwiKTtcblxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlSW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVJbnB1dFwiKVxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBhIG5hbWUgZm9yIHlvdXIgVE9ET1wiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVcIiwgXCJcIik7XG5cbiAgICB0aXRsZUlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXRMYWJlbCk7XG4gICAgdGl0bGVJbnB1dERpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXREaXYpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIERlc2NyaXB0aW9uOiBcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25JbnB1dFwiKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uSW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25JbnB1dFwiKVxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIFRPRE9cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlXCIsIFwiXCIpO1xuXG4gICAgZGVzY3JpcHRpb25JbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0TGFiZWwpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0RGl2KTtcblxuICAgIGxldCBkdWVEYXRlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IGR1ZURhdGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGR1ZURhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUb2RvIER1ZSBEYXRlOiBcIjtcbiAgICBkdWVEYXRlSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlSW5wdXRcIik7XG5cbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlSW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VsZWN0IER1ZSBEYXRlXCIpO1xuXG4gICAgZHVlRGF0ZUlucHV0RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dExhYmVsKTtcbiAgICBkdWVEYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dERpdik7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBQcmlvcml0eTogXCJcbiAgICBwcmlvcml0eUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlJbnB1dFwiKTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlJbnB1dFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eUlucHV0XCIpXG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHQudmFsdWUgPSBpO1xuICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICBvcHQuaW5uZXJIVE1MID0gaTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cblxuICAgIHByaW9yaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dExhYmVsKTtcbiAgICBwcmlvcml0eUlucHV0RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dERpdik7XG5cbiAgICBsZXQgbm90ZXNJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgbm90ZXNJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5vdGVzSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVG9kbyBOb3RlczogXCI7XG4gICAgbm90ZXNJbnB1dExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5vdGVzSW5wdXRcIik7XG5cbiAgICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc0lucHV0XCIpO1xuICAgIG5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5vdGVzSW5wdXRcIilcbiAgICBub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYW55IG5vdGVzIGZvciB5b3VyIFRPRE9cIik7XG4gICAgbm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlXCIsIFwiXCIpO1xuXG4gICAgbm90ZXNJbnB1dERpdi5hcHBlbmRDaGlsZChub3Rlc0lucHV0TGFiZWwpO1xuICAgIG5vdGVzSW5wdXREaXYuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChub3Rlc0lucHV0RGl2KTtcblxuICAgIHVzZXJJbnRlcmZhY2VEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdERpdik7XG5cbiAgICBsZXQgY3JlYXRlTmV3VE9ET0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlTmV3VE9ET0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNyZWF0ZU5ld1RPRE9CdXR0b25cIik7XG4gICAgY3JlYXRlTmV3VE9ET0J1dHRvbi5pbm5lclRleHQgPSBcIlVwZGF0ZSBUb2RvXCI7XG4gICAgY3JlYXRlTmV3VE9ET0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNyZWF0ZU5ld1RPRE9CdXR0b25cIik7XG4gICAgXG4gICAgdXNlckludGVyZmFjZURpdi5hcHBlbmRDaGlsZChjcmVhdGVOZXdUT0RPQnV0dG9uKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodXNlckludGVyZmFjZURpdik7XG5cbiAgICAvL2NyZWF0ZU5ld1RPRE9CdXR0b24gcnVucyB0aGUgY3JlYXRlTmV3VE9ETygpIGZ1bmN0aW9uXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVOZXdUT0RPQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VE9ETyk7XG4gICAgXG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlQnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHVzZXJJbnRlcmZhY2UoKTtcbiAgICAgICAgdXNlckludGVyZmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVzZXJJbnRlcmZhY2VEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjOUZCN0I5XCI7XG4gICAgfSk7XG5cbiAgICB1c2VySW50ZXJmYWNlRGl2LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=