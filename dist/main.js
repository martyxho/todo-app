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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/mtn.webp */ "./src/assets/mtn.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";;\n  box-sizing: border-box;\n}\n\n:focus-visible {\n  outline: none;\n}\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 270px 1fr;\n}\n\n#sidebar {\n  background: white;\n}\n\n#content {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: max-content max-content;\n  gap: 40px;\n  padding: 70px 40px 40px 40px;\n}\n\n#task-div {\n  grid-column: 1;\n  grid-row-: 2;\n}\n\n#list-info-box {\n  height: 50px;\n  width: 250px;\n  background: white;\n  border-radius: 20px;\n  display: flex;\n  padding-left: 20px;\n  align-items: center;\n}\n\n#list-info-box form {\n  width: 70%;\n  align-items: center;\n  padding: 0;\n}\n\n#list-name-info {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  background: none;\n}\n\n.dim:after {\n  content: '';\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  opacity: .2;\n  pointer-events: none;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\n\n.task-div {\n  width: 450px;\n  height: 100%;\n  background: white;\n  border-radius: 20px;\n  border: none;\n  padding: 20px;\n}\n\n.task-div ul {\n  list-style: circle;\n  padding-left: 20px;\n  display: grid;\n  gap: 10px;\n}\n\n#done-ul {\n  list-style: none;\n}\n\n#done-ul p{\n  text-decoration: line-through;\n  opacity: .7;\n}\n.date { \n  font-size: 14px;\n  color: #9b9b9b;\n}\n#task-ul div {\n  display: grid;\n  grid-template-rows: max-content max-content;\n  gap: 5px;\n}\n\n.form {\n  position: absolute;\n  width: 500px;\n  height: 350px;\n  background: white;\n  border-radius: 20px;\n  border: none;\n  left: 50%;\n  margin-left: -250px;\n  top: 50%;\n  margin-top: -175px;\n  z-index: 10000;\n  overflow: hidden;\n}\n\nform {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n}\n\n.task-form {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-template-rows: max-content max-content 1fr;\n  grid-auto-flow: column;\n  gap: 20px;\n  align-items: center;\n  padding: 20px;\n}\n\n.task {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: 1fr 50px;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2px;\n  box-shadow: 0px -1px 5px 2px rgb(231, 229, 229);\n}\n\n#e-task-form .buttons {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n#mark-div {\n  padding-right: 20px;\n}\n#e-task-done {\n  background: #0080ff;\n  color: white;\n  font-size: 16px;\n  border: none;\n  border-radius: 20px;\n  font-weight: bold;\n  width: 100%;\n  padding: 3px;\n}\n\n.buttons button {\n  border: none;\n  background: white;\n  color: #0080ff;\n  font-size: 20px;\n  font-weight: bold;\n  box-shadow: 5px 0px 2px 1px rgb(231, 229, 229);\n}\ntextarea {\n  height: 125px;\n  width: 100%;\n}\n\n.select {\n  display: grid;\n  gap: 5px;\n  margin-right: 20px;\n}\n\nselect {\n  display: block;\n}\n\ninput {\n  border: none;\n  font-size: 24px;\n  width: 100%;\n  background: #f0f0f0;\n  border-radius: 25px;\n  padding: 2px;\n  padding-left: 10px;\n}\n\ninput[type=date] {\n  width: 50%;\n  font-size: 16px;\n  border-radius: 25px;\n}\n\n#list-form, #edit-form{\n  width: 300px;\n  height: 140px;\n}\n\n.list-form {\n  display: grid;\n  grid-template-rows: 1fr 50px;\n  height: 100%;\n}\n\n.list-form input {\n  background: none;\n}\n\n.list-form form {\n  padding: 20px;\n  align-items: center;\n}\n\n.red {\n  border: 1px solid red;\n}\n\n.required::after {\n  content: '*required';\n  color: red;\n}\n\n#sidebar {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  padding: 25px;\n}\n\n#side-top {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 10px;\n}\n\n#side-user {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 20px;\n  align-items: center;\n}\n\n#side-user p {\n  font-weight: bold;\n  font-size: large;\n}\n\n#side-btn {\n  align-self: center;\n}\n\n#taskBtn {\n  width: 100%;\n  height: 35px;\n  background: #0080ff;\n  color: white;\n  font-size: 16px;\n  border-radius: 20px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#taskBtn span {\n  font-size: 30px;\n  padding-right: 10px;\n}\n\n#listBtn {\n  background: none;\n  border: none;\n  font-size: 30px;\n  color: #9b9b9b;\n  padding-right: 7px;\n}\n#list-header {\n  display: flex;\n  justify-content: space-between;\n}\n#list-container {\n  display: grid;\n  gap: 20px;\n}\n\n#list-ul {\n  list-style-type: none;\n  display: grid;\n  gap: 10px;\n}\n\n.list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.editBtn {\n  background: none;\n  border: none;\n  border-radius: 25px;\n  padding-right: 5px;\n} \n\n.pencil {\n  height: 20px;\n  filter: invert(68%) sepia(9%) saturate(15%) hue-rotate(29deg) brightness(89%) contrast(90%);\n}\n\n.cat {\n  height: 50px;\n  border-radius: 25px;\n}\n\n.hide {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";;\n  box-sizing: border-box;\n}\n\n:focus-visible {\n  outline: none;\n}\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 270px 1fr;\n}\n\n#sidebar {\n  background: white;\n}\n\n#content {\n  background: url(./assets/mtn.webp);\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-template-columns: max-content max-content;\n  gap: 40px;\n  padding: 70px 40px 40px 40px;\n}\n\n#task-div {\n  grid-column: 1;\n  grid-row-: 2;\n}\n\n#list-info-box {\n  height: 50px;\n  width: 250px;\n  background: white;\n  border-radius: 20px;\n  display: flex;\n  padding-left: 20px;\n  align-items: center;\n}\n\n#list-info-box form {\n  width: 70%;\n  align-items: center;\n  padding: 0;\n}\n\n#list-name-info {\n  border: none;\n  font-size: 20px;\n  width: 100%;\n  background: none;\n}\n\n.dim:after {\n  content: '';\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  opacity: .2;\n  pointer-events: none;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n}\n\n.task-div {\n  width: 450px;\n  height: 100%;\n  background: white;\n  border-radius: 20px;\n  border: none;\n  padding: 20px;\n}\n\n.task-div ul {\n  list-style: circle;\n  padding-left: 20px;\n  display: grid;\n  gap: 10px;\n}\n\n#done-ul {\n  list-style: none;\n}\n\n#done-ul p{\n  text-decoration: line-through;\n  opacity: .7;\n}\n.date { \n  font-size: 14px;\n  color: #9b9b9b;\n}\n#task-ul div {\n  display: grid;\n  grid-template-rows: max-content max-content;\n  gap: 5px;\n}\n\n.form {\n  position: absolute;\n  width: 500px;\n  height: 350px;\n  background: white;\n  border-radius: 20px;\n  border: none;\n  left: 50%;\n  margin-left: -250px;\n  top: 50%;\n  margin-top: -175px;\n  z-index: 10000;\n  overflow: hidden;\n}\n\nform {\n  display: grid;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n}\n\n.task-form {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-template-rows: max-content max-content 1fr;\n  grid-auto-flow: column;\n  gap: 20px;\n  align-items: center;\n  padding: 20px;\n}\n\n.task {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: 1fr 50px;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2px;\n  box-shadow: 0px -1px 5px 2px rgb(231, 229, 229);\n}\n\n#e-task-form .buttons {\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n#mark-div {\n  padding-right: 20px;\n}\n#e-task-done {\n  background: #0080ff;\n  color: white;\n  font-size: 16px;\n  border: none;\n  border-radius: 20px;\n  font-weight: bold;\n  width: 100%;\n  padding: 3px;\n}\n\n.buttons button {\n  border: none;\n  background: white;\n  color: #0080ff;\n  font-size: 20px;\n  font-weight: bold;\n  box-shadow: 5px 0px 2px 1px rgb(231, 229, 229);\n}\ntextarea {\n  height: 125px;\n  width: 100%;\n}\n\n.select {\n  display: grid;\n  gap: 5px;\n  margin-right: 20px;\n}\n\nselect {\n  display: block;\n}\n\ninput {\n  border: none;\n  font-size: 24px;\n  width: 100%;\n  background: #f0f0f0;\n  border-radius: 25px;\n  padding: 2px;\n  padding-left: 10px;\n}\n\ninput[type=date] {\n  width: 50%;\n  font-size: 16px;\n  border-radius: 25px;\n}\n\n#list-form, #edit-form{\n  width: 300px;\n  height: 140px;\n}\n\n.list-form {\n  display: grid;\n  grid-template-rows: 1fr 50px;\n  height: 100%;\n}\n\n.list-form input {\n  background: none;\n}\n\n.list-form form {\n  padding: 20px;\n  align-items: center;\n}\n\n.red {\n  border: 1px solid red;\n}\n\n.required::after {\n  content: '*required';\n  color: red;\n}\n\n#sidebar {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 20px;\n  padding: 25px;\n}\n\n#side-top {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 10px;\n}\n\n#side-user {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 20px;\n  align-items: center;\n}\n\n#side-user p {\n  font-weight: bold;\n  font-size: large;\n}\n\n#side-btn {\n  align-self: center;\n}\n\n#taskBtn {\n  width: 100%;\n  height: 35px;\n  background: #0080ff;\n  color: white;\n  font-size: 16px;\n  border-radius: 20px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#taskBtn span {\n  font-size: 30px;\n  padding-right: 10px;\n}\n\n#listBtn {\n  background: none;\n  border: none;\n  font-size: 30px;\n  color: #9b9b9b;\n  padding-right: 7px;\n}\n#list-header {\n  display: flex;\n  justify-content: space-between;\n}\n#list-container {\n  display: grid;\n  gap: 20px;\n}\n\n#list-ul {\n  list-style-type: none;\n  display: grid;\n  gap: 10px;\n}\n\n.list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.editBtn {\n  background: none;\n  border: none;\n  border-radius: 25px;\n  padding-right: 5px;\n} \n\n.pencil {\n  height: 20px;\n  filter: invert(68%) sepia(9%) saturate(15%) hue-rotate(29deg) brightness(89%) contrast(90%);\n}\n\n.cat {\n  height: 50px;\n  border-radius: 25px;\n}\n\n.hide {\n  display: none;\n}"],"sourceRoot":""}]);
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
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "displayLists": () => (/* binding */ displayLists),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "notifyRequired": () => (/* binding */ notifyRequired),
/* harmony export */   "removeRequired": () => (/* binding */ removeRequired),
/* harmony export */   "setListName": () => (/* binding */ setListName)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cat.jpg */ "./src/assets/cat.jpg");
/* harmony import */ var _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pencil-outline.svg */ "./src/assets/pencil-outline.svg");




const autorun = (() => {
  const taskBtn = document.getElementById('taskBtn');
  taskBtn.addEventListener('click', openForm.bind(null, 'task-form'));
  const listBtn = document.getElementById('listBtn');
  listBtn.addEventListener('click', openForm.bind(null, 'list-form'));
  const taskCancel = document.getElementById('task-cancel');
  taskCancel.addEventListener('click', closeForm.bind(null, 'task-form'));
  const eTaskCancel = document.getElementById('e-task-cancel');
  eTaskCancel.addEventListener('click', closeForm.bind(null, 'e-task-form'));
  const doneClose = document.getElementById('close');
  doneClose.addEventListener('click', closeForm.bind(null, 'd-task-form'));
  const listCancel = document.getElementById('list-cancel');
  listCancel.addEventListener('click', closeForm.bind(null, 'list-form'));
  const listName = document.getElementById('list-name-info');
  listName.addEventListener('input', updateListName);
  const body = document.querySelector('body');
  body.addEventListener('keydown', preventEnter);
})();

function preventEnter(e) {
  if (e.target.id == 'notes') {
    return;
  } else if (e.keyCode == 13) {
    e.preventDefault();
  }
}

const loadImg = (() => {
  const cat = document.querySelector('.cat');
  cat.src = _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_1__;
})();

function updateListName(e) {
  const name = e.target.dataset.name;
  const newName = e.target.value;
  (0,___WEBPACK_IMPORTED_MODULE_0__.changeListName)(name, newName);
  setListName(newName, 'list-name-info');
}

function displayLists(obj) {
  const ul = document.getElementById('list-ul');
  clear(ul);
  for (const prop in obj) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.id = prop;
    div.classList = 'list';
    div.addEventListener('click', listClick.bind(null, prop));
    const p = document.createElement('p');
    p.textContent = prop;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.classList = 'editBtn';
    btn.addEventListener('click', editClick.bind(null, prop));
    const img = document.createElement('img');
    img.src = _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    img.classList = 'pencil';
    btn.appendChild(img);
    div.appendChild(p);
    div.appendChild(btn);
    li.appendChild(div);
    ul.appendChild(li);
  }
}

function displayTasks(arr, id, a) {
  const taskUl = document.getElementById(id);
  clear(taskUl);
  arr.forEach((e, i) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList = 'task';
    div.addEventListener('click', displayDetails.bind(null, e, i, a));
    const title = document.createElement('p');
    title.textContent = e.title;
    title.classList = 'title';
    const date = document.createElement('p');
    date.textContent = e.dueDate;
    date.classList = 'date';
    div.appendChild(title);
    div.appendChild(date);
    li.appendChild(div);
    taskUl.appendChild(li);
  });
}

function displayDetails(e, i, a) {
  changeValue(`${a}-title`, e.title);
  changeValue(`${a}-notes`, e.notes);
  changeValue(`${a}-due-date`, e.dueDate);
  changeValue(`${a}-priority`, e.priority);
  changeTaskIndex(i);
  openForm(`${a}-task-form`); 
}

function changeTaskIndex(i) {
  const del = document.getElementById('e-task-delete');
  del.dataset.i = i;
  const save = document.getElementById('e-task-save');
  save.dataset.i = i;
  const done = document.getElementById('e-task-done');
  done.dataset.i = i;
  const unmark = document.getElementById('unmark');
  unmark.dataset.i = i;
}

function changeValue(id, value) {
  const input = document.getElementById(id);
  input.value = value;
}

function openForm(id) {
  toggleForm(id);
}

function closeForm(id) {
  toggleForm(id);
  resetForm(id);
  removeRequired();
}

function toggleForm(id) {
  const tint = document.querySelector('.tint');
  tint.classList.toggle('dim');
  const form = document.getElementById(id);
  form.classList.toggle('hide');
}

function resetForm(id) {
  const div = document.getElementById(id);
  const form = div.querySelector('form');
  form.reset();
}

function notifyRequired(inputId) {
  const input = document.getElementById(inputId);
  input.classList.add('red');
  const div = input.parentElement;
  div.classList.add('required');
}

function removeRequired() {
  const red = document.querySelector('.red');
  if(red) {
    red.classList.toggle('red');
  } else {
    return;
  }
  const div = document.querySelector('.required');
  div.classList.toggle('required');
}



function listClick(prop) {
  setListName(prop, 'list-name-info');
  (0,___WEBPACK_IMPORTED_MODULE_0__.changeList)(prop);
}

function editClick(prop) {
  setListName(prop, 'edit-list-name');
  openForm('edit-form');
}


function setListName(name, id) {
  const input = document.getElementById(id);
  input.value = name;
  input.dataset.name = name;
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}







/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeList": () => (/* binding */ changeList),
/* harmony export */   "changeListName": () => (/* binding */ changeListName)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const lists = (() => {
  let listObj = {};
  listObj['default'] = list('default');
  let currentList = listObj['default'];
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setListName)('default', 'list-name-info');
  const getList = () => listObj;
  const addList = (name, list) => {
    listObj[name] = list;
  };
  const getCurrent = () => currentList;
  const changeCurrent = (name) => {
    currentList = listObj[name];
  };
  function changeListName(name, newName) {
    delete Object.assign(listObj, {[newName]: listObj[name]})[name];
    console.log(listObj);
  }
  function listDel(name) {
    delete listObj[name];
  }
  function load(obj) {
    listObj = obj;
    for (const prop in listObj) {
      currentList = listObj[prop];
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setListName)(prop, 'list-name-info');
      break;
    }
  }

  return {getList, addList, getCurrent, changeCurrent, changeListName, listDel, load };
})();

const storage = (() => {
  function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
  }
  function save() {
    if(storageAvailable('localStorage')) {
      const listObj = lists.getList();
      const newObj = {};
      for (const prop in listObj) {
        const obj = [];
        obj.push(listObj[prop].getArr());
        obj.push(listObj[prop].getDoneArr());
        newObj[prop] = obj;
      }
      localStorage.setItem('listObj', JSON.stringify(newObj));
    } else {
      console.log('local storage unavailable');
    }
  }
  function load() {
    const listObj = JSON.parse(localStorage.getItem('listObj'));
    if(!listObj) {
      return;
    }
    const newObj = {};
    for (const prop in listObj) {
      const newList = list(prop);
      listObj[prop][0].forEach(e => {
        const newTask = task(e.title, e.notes, e.dueDate, e.priority);
        newList.addTask(newTask);
      });
      listObj[prop][1].forEach(e => {
        const newTask = task(e.title, e.notes, e.dueDate, e.priority);
        newList.addDone(newTask);
      });
      newObj[prop] = newList;
    }
    lists.load(newObj);
  }

  return {save, load};
})();

const calls = (() => {
  function dLists() {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayLists)(lists.getList());
    storage.save();
  }
  function dTasks() {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(lists.getCurrent().getArr(), 'task-ul', 'e');
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(lists.getCurrent().getDoneArr(), 'done-ul', 'd');
    storage.save();
  }
  return { dLists, dTasks };
})();

const autorun = (() => {
  const taskCreate = document.getElementById('task-create');
  taskCreate.onclick = addTask;
  const eTaskSave = document.getElementById('e-task-save');
  eTaskSave.onclick = saveTask;
  const taskDone = document.getElementById('e-task-done');
  taskDone.onclick = markDone;
  const listCreate = document.getElementById('list-create');
  listCreate.onclick = addList;
  const taskDelete = document.getElementById('e-task-delete');
  taskDelete.addEventListener('click', deleteTask);
  const editSave = document.getElementById('edit-save');
  editSave.addEventListener('click', saveEdit);
  const editDelete = document.getElementById('edit-delete');
  editDelete.addEventListener('click', listDel);
  const doneUnmark = document.getElementById('unmark');
  doneUnmark.addEventListener('click', unmarkDone);
  storage.load();
  calls.dLists();
  calls.dTasks();
})();

function task(title, notes, dueDate, priority) {
  return {title, notes, dueDate, priority}
}

function list(name) {
  const taskArr = [];
  const doneArr = [];
  function addTask(task) {
    taskArr.push(task);
    sort(taskArr);
  }
  function addDone(task) {
    doneArr.push(task);
    sort(doneArr);
  }
  function saveTask(i, task) {
    taskArr.splice(i, 1, task);
    sort(taskArr);
  }
  function sort(arr) {
    arr.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }
  function getArr() {
    return taskArr;
  }
  function getDoneArr() {
    return doneArr;
  }
  function delTask(i) {
    taskArr.splice(i, 1);
  }
  function markDone(i) {
    doneArr.push(taskArr[i]);
    delTask(i);
    sort(doneArr);
  }
  function unmark(i) {
    taskArr.push(doneArr[i]);
    doneArr.splice(i, 1);
    sort(taskArr);
    sort(doneArr);
  }

  return {addTask, getArr, delTask, saveTask, getDoneArr, addDone, markDone, unmark};
}

function changeList(prop) {
  lists.changeCurrent(prop);
  calls.dTasks();
}

function addList() {
  const name = getValue('list-name').trim();
  if(!name) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.notifyRequired)('list-name');
    return;
  }
  const newList = list(name);
  lists.addList(name, newList);
  calls.dLists();
  changeList(name);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeRequired)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.closeForm)('list-form');
}

function addTask() {
  const newTask = createNewTask(true);
  if(newTask) {
    lists.getCurrent().addTask(newTask);
    resetTasks('task-form');
  }
}

function createNewTask(add) {
  let t, n, d, p;
  if (add) {
    t = 'title', n = 'notes', d = 'due-date', p = 'priority';
  } else {
    t = 'e-title', n = 'e-notes', d = 'e-due-date', p = 'e-priority';
  }

  const title = getValue(t).trim();
  if (!title) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.notifyRequired)(t);
    return false;
  }
  const notes = getValue(n);
  const dueDate = getValue(d);
  const priority = getValue(p);
  return task(title, notes, dueDate, priority);
}

function saveTask(e) {
  const i = e.target.dataset.i;
  const newTask = createNewTask(false);
  lists.getCurrent().saveTask(i, newTask);
  resetTasks('e-task-form');
}

function deleteTask(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().delTask(i);
  resetTasks('e-task-form');
}

function markDone(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().markDone(i);
  resetTasks('e-task-form');
}

function unmarkDone(e) {
  const i = e.target.dataset.i;
  lists.getCurrent().unmark(i);
  resetTasks('d-task-form');
}

function resetTasks(id) {
  calls.dTasks();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeRequired)();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.closeForm)(id);
}

function getValue(id) {
  return document.getElementById(id).value;
}

function changeListName(name, newName) {
  if (name == newName) {
    return;
  }
  lists.changeListName(name, newName);
  calls.dLists();
}

function saveEdit() {
  const input = document.getElementById('edit-list-name');
  const name = input.dataset.name;
  const newName = input.value;
  changeListName(name, newName);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.closeForm)('edit-form');
}

function listDel() {
  const input = document.getElementById('edit-list-name');
  const name = input.dataset.name;
  lists.listDel(name);
  calls.dLists();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.closeForm)('edit-form');
}



/***/ }),

/***/ "./src/assets/cat.jpg":
/*!****************************!*\
  !*** ./src/assets/cat.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b006c0178e87b0c45e4e.jpg";

/***/ }),

/***/ "./src/assets/mtn.webp":
/*!*****************************!*\
  !*** ./src/assets/mtn.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a35f007405349812ecf2.webp";

/***/ }),

/***/ "./src/assets/pencil-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/pencil-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d2cdf6ea77c1c4de76e.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcDIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tYXBwMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcDIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWFwcDIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwMi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL210bi53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjs7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNzBweCAxZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDcwcHggNDBweCA0MHB4IDQwcHg7XFxufVxcblxcbiN0YXNrLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93LTogMjtcXG59XFxuXFxuI2xpc3QtaW5mby1ib3gge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaXN0LWluZm8tYm94IGZvcm0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbGlzdC1uYW1lLWluZm8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZGltOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAuMjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLWRpdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZG9uZS11bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jZG9uZS11bCBwe1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAuNztcXG59XFxuLmRhdGUgeyBcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjOWI5YjliO1xcbn1cXG4jdGFzay11bCBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xNzVweDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4O1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAycHg7XFxuICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggMnB4IHJnYigyMzEsIDIyOSwgMjI5KTtcXG59XFxuXFxuI2UtdGFzay1mb3JtIC5idXR0b25zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcblxcbiNtYXJrLWRpdiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4jZS10YXNrLWRvbmUge1xcbiAgYmFja2dyb3VuZDogIzAwODBmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzAwODBmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogNXB4IDBweCAycHggMXB4IHJnYigyMzEsIDIyOSwgMjI5KTtcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jbGlzdC1mb3JtLCAjZWRpdC1mb3Jte1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLmxpc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpc3QtZm9ybSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubGlzdC1mb3JtIGZvcm0ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ucmVxdWlyZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcqcmVxdWlyZWQnO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbiNzaWRlLXRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc2lkZS11c2VyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlLXVzZXIgcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNzaWRlLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrQnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZDogIzAwODBmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFza0J0biBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNsaXN0QnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogIzliOWI5YjtcXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuI2xpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNsaXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbGlzdC11bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRCdG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufSBcXG5cXG4ucGVuY2lsIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDY4JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDE1JSkgaHVlLXJvdGF0ZSgyOWRlZykgYnJpZ2h0bmVzcyg4OSUpIGNvbnRyYXN0KDkwJSk7XFxufVxcblxcbi5jYXQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEpBQTBKO0VBQzFKLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbURBQWtDO0VBQ2xDLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsOENBQThDO0VBQzlDLFNBQVM7RUFDVCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7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Q3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJGQUEyRjtBQUM3Rjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjs7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNzBweCAxZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9hc3NldHMvbXRuLndlYnApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gIGdhcDogNDBweDtcXG4gIHBhZGRpbmc6IDcwcHggNDBweCA0MHB4IDQwcHg7XFxufVxcblxcbiN0YXNrLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93LTogMjtcXG59XFxuXFxuI2xpc3QtaW5mby1ib3gge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsaXN0LWluZm8tYm94IGZvcm0ge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbGlzdC1uYW1lLWluZm8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uZGltOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAuMjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLWRpdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZG9uZS11bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jZG9uZS11bCBwe1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAuNztcXG59XFxuLmRhdGUgeyBcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjOWI5YjliO1xcbn1cXG4jdGFzay11bCBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xNzVweDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4O1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAycHg7XFxuICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggMnB4IHJnYigyMzEsIDIyOSwgMjI5KTtcXG59XFxuXFxuI2UtdGFzay1mb3JtIC5idXR0b25zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcblxcbiNtYXJrLWRpdiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4jZS10YXNrLWRvbmUge1xcbiAgYmFja2dyb3VuZDogIzAwODBmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzAwODBmZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogNXB4IDBweCAycHggMXB4IHJnYigyMzEsIDIyOSwgMjI5KTtcXG59XFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jbGlzdC1mb3JtLCAjZWRpdC1mb3Jte1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLmxpc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpc3QtZm9ybSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubGlzdC1mb3JtIGZvcm0ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ucmVxdWlyZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcqcmVxdWlyZWQnO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbiNzaWRlLXRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc2lkZS11c2VyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlLXVzZXIgcCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbiNzaWRlLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrQnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZDogIzAwODBmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGFza0J0biBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbiNsaXN0QnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogIzliOWI5YjtcXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcXG59XFxuI2xpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNsaXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbGlzdC11bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRCdG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufSBcXG5cXG4ucGVuY2lsIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDY4JSkgc2VwaWEoOSUpIHNhdHVyYXRlKDE1JSkgaHVlLXJvdGF0ZSgyOWRlZykgYnJpZ2h0bmVzcyg4OSUpIGNvbnRyYXN0KDkwJSk7XFxufVxcblxcbi5jYXQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNoYW5nZUxpc3QsIGNoYW5nZUxpc3ROYW1lIH0gZnJvbSBcIi5cIjtcbmltcG9ydCBjYXRJbWcgZnJvbSAnLi9hc3NldHMvY2F0LmpwZyc7XG5pbXBvcnQgcGVuY2lsIGZyb20gJy4vYXNzZXRzL3BlbmNpbC1vdXRsaW5lLnN2Zyc7XG5cbmNvbnN0IGF1dG9ydW4gPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tCdG4nKTtcbiAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtLmJpbmQobnVsbCwgJ3Rhc2stZm9ybScpKTtcbiAgY29uc3QgbGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0QnRuJyk7XG4gIGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybS5iaW5kKG51bGwsICdsaXN0LWZvcm0nKSk7XG4gIGNvbnN0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jYW5jZWwnKTtcbiAgdGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybS5iaW5kKG51bGwsICd0YXNrLWZvcm0nKSk7XG4gIGNvbnN0IGVUYXNrQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2UtdGFzay1jYW5jZWwnKTtcbiAgZVRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0uYmluZChudWxsLCAnZS10YXNrLWZvcm0nKSk7XG4gIGNvbnN0IGRvbmVDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpO1xuICBkb25lQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0uYmluZChudWxsLCAnZC10YXNrLWZvcm0nKSk7XG4gIGNvbnN0IGxpc3RDYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdC1jYW5jZWwnKTtcbiAgbGlzdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybS5iaW5kKG51bGwsICdsaXN0LWZvcm0nKSk7XG4gIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtbmFtZS1pbmZvJyk7XG4gIGxpc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlTGlzdE5hbWUpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBwcmV2ZW50RW50ZXIpO1xufSkoKTtcblxuZnVuY3Rpb24gcHJldmVudEVudGVyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkID09ICdub3RlcycpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5cbmNvbnN0IGxvYWRJbWcgPSAoKCkgPT4ge1xuICBjb25zdCBjYXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0Jyk7XG4gIGNhdC5zcmMgPSBjYXRJbWc7XG59KSgpO1xuXG5mdW5jdGlvbiB1cGRhdGVMaXN0TmFtZShlKSB7XG4gIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWU7XG4gIGNvbnN0IG5ld05hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgY2hhbmdlTGlzdE5hbWUobmFtZSwgbmV3TmFtZSk7XG4gIHNldExpc3ROYW1lKG5ld05hbWUsICdsaXN0LW5hbWUtaW5mbycpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TGlzdHMob2JqKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtdWwnKTtcbiAgY2xlYXIodWwpO1xuICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pZCA9IHByb3A7XG4gICAgZGl2LmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0Q2xpY2suYmluZChudWxsLCBwcm9wKSk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gcHJvcDtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4udHlwZSA9ICdidXR0b24nO1xuICAgIGJ0bi5jbGFzc0xpc3QgPSAnZWRpdEJ0bic7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdENsaWNrLmJpbmQobnVsbCwgcHJvcCkpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBwZW5jaWw7XG4gICAgaW1nLmNsYXNzTGlzdCA9ICdwZW5jaWwnO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoYXJyLCBpZCwgYSkge1xuICBjb25zdCB0YXNrVWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGNsZWFyKHRhc2tVbCk7XG4gIGFyci5mb3JFYWNoKChlLCBpKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QgPSAndGFzayc7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheURldGFpbHMuYmluZChudWxsLCBlLCBpLCBhKSk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBlLnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdCA9ICd0aXRsZSc7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZS5kdWVEYXRlO1xuICAgIGRhdGUuY2xhc3NMaXN0ID0gJ2RhdGUnO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgdGFza1VsLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEZXRhaWxzKGUsIGksIGEpIHtcbiAgY2hhbmdlVmFsdWUoYCR7YX0tdGl0bGVgLCBlLnRpdGxlKTtcbiAgY2hhbmdlVmFsdWUoYCR7YX0tbm90ZXNgLCBlLm5vdGVzKTtcbiAgY2hhbmdlVmFsdWUoYCR7YX0tZHVlLWRhdGVgLCBlLmR1ZURhdGUpO1xuICBjaGFuZ2VWYWx1ZShgJHthfS1wcmlvcml0eWAsIGUucHJpb3JpdHkpO1xuICBjaGFuZ2VUYXNrSW5kZXgoaSk7XG4gIG9wZW5Gb3JtKGAke2F9LXRhc2stZm9ybWApOyBcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza0luZGV4KGkpIHtcbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2UtdGFzay1kZWxldGUnKTtcbiAgZGVsLmRhdGFzZXQuaSA9IGk7XG4gIGNvbnN0IHNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZS10YXNrLXNhdmUnKTtcbiAgc2F2ZS5kYXRhc2V0LmkgPSBpO1xuICBjb25zdCBkb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2UtdGFzay1kb25lJyk7XG4gIGRvbmUuZGF0YXNldC5pID0gaTtcbiAgY29uc3QgdW5tYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VubWFyaycpO1xuICB1bm1hcmsuZGF0YXNldC5pID0gaTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVmFsdWUoaWQsIHZhbHVlKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9ybShpZCkge1xuICB0b2dnbGVGb3JtKGlkKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKGlkKSB7XG4gIHRvZ2dsZUZvcm0oaWQpO1xuICByZXNldEZvcm0oaWQpO1xuICByZW1vdmVSZXF1aXJlZCgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGb3JtKGlkKSB7XG4gIGNvbnN0IHRpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGludCcpO1xuICB0aW50LmNsYXNzTGlzdC50b2dnbGUoJ2RpbScpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JtKGlkKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgY29uc3QgZm9ybSA9IGRpdi5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gIGZvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gbm90aWZ5UmVxdWlyZWQoaW5wdXRJZCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgY29uc3QgZGl2ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JlcXVpcmVkJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlcXVpcmVkKCkge1xuICBjb25zdCByZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkJyk7XG4gIGlmKHJlZCkge1xuICAgIHJlZC5jbGFzc0xpc3QudG9nZ2xlKCdyZWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVpcmVkJyk7XG4gIGRpdi5jbGFzc0xpc3QudG9nZ2xlKCdyZXF1aXJlZCcpO1xufVxuXG5cblxuZnVuY3Rpb24gbGlzdENsaWNrKHByb3ApIHtcbiAgc2V0TGlzdE5hbWUocHJvcCwgJ2xpc3QtbmFtZS1pbmZvJyk7XG4gIGNoYW5nZUxpc3QocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDbGljayhwcm9wKSB7XG4gIHNldExpc3ROYW1lKHByb3AsICdlZGl0LWxpc3QtbmFtZScpO1xuICBvcGVuRm9ybSgnZWRpdC1mb3JtJyk7XG59XG5cblxuZnVuY3Rpb24gc2V0TGlzdE5hbWUobmFtZSwgaWQpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlucHV0LnZhbHVlID0gbmFtZTtcbiAgaW5wdXQuZGF0YXNldC5uYW1lID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gY2xlYXIoZGl2KSB7XG4gIHdoaWxlKGRpdi5maXJzdENoaWxkKSB7XG4gICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5cblxuXG5cbmV4cG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheUxpc3RzLCBub3RpZnlSZXF1aXJlZCwgcmVtb3ZlUmVxdWlyZWQsIGNsb3NlRm9ybSwgc2V0TGlzdE5hbWUgfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyAsIGRpc3BsYXlMaXN0cywgbm90aWZ5UmVxdWlyZWQsIHJlbW92ZVJlcXVpcmVkLCBjbG9zZUZvcm0sIHNldExpc3ROYW1lIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBsaXN0cyA9ICgoKSA9PiB7XG4gIGxldCBsaXN0T2JqID0ge307XG4gIGxpc3RPYmpbJ2RlZmF1bHQnXSA9IGxpc3QoJ2RlZmF1bHQnKTtcbiAgbGV0IGN1cnJlbnRMaXN0ID0gbGlzdE9ialsnZGVmYXVsdCddO1xuICBzZXRMaXN0TmFtZSgnZGVmYXVsdCcsICdsaXN0LW5hbWUtaW5mbycpO1xuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdE9iajtcbiAgY29uc3QgYWRkTGlzdCA9IChuYW1lLCBsaXN0KSA9PiB7XG4gICAgbGlzdE9ialtuYW1lXSA9IGxpc3Q7XG4gIH07XG4gIGNvbnN0IGdldEN1cnJlbnQgPSAoKSA9PiBjdXJyZW50TGlzdDtcbiAgY29uc3QgY2hhbmdlQ3VycmVudCA9IChuYW1lKSA9PiB7XG4gICAgY3VycmVudExpc3QgPSBsaXN0T2JqW25hbWVdO1xuICB9O1xuICBmdW5jdGlvbiBjaGFuZ2VMaXN0TmFtZShuYW1lLCBuZXdOYW1lKSB7XG4gICAgZGVsZXRlIE9iamVjdC5hc3NpZ24obGlzdE9iaiwge1tuZXdOYW1lXTogbGlzdE9ialtuYW1lXX0pW25hbWVdO1xuICAgIGNvbnNvbGUubG9nKGxpc3RPYmopO1xuICB9XG4gIGZ1bmN0aW9uIGxpc3REZWwobmFtZSkge1xuICAgIGRlbGV0ZSBsaXN0T2JqW25hbWVdO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWQob2JqKSB7XG4gICAgbGlzdE9iaiA9IG9iajtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gbGlzdE9iaikge1xuICAgICAgY3VycmVudExpc3QgPSBsaXN0T2JqW3Byb3BdO1xuICAgICAgc2V0TGlzdE5hbWUocHJvcCwgJ2xpc3QtbmFtZS1pbmZvJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge2dldExpc3QsIGFkZExpc3QsIGdldEN1cnJlbnQsIGNoYW5nZUN1cnJlbnQsIGNoYW5nZUxpc3ROYW1lLCBsaXN0RGVsLCBsb2FkIH07XG59KSgpO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgdmFyIHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgdmFyIHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgICAgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICBpZihzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgY29uc3QgbGlzdE9iaiA9IGxpc3RzLmdldExpc3QoKTtcbiAgICAgIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIGxpc3RPYmopIHtcbiAgICAgICAgY29uc3Qgb2JqID0gW107XG4gICAgICAgIG9iai5wdXNoKGxpc3RPYmpbcHJvcF0uZ2V0QXJyKCkpO1xuICAgICAgICBvYmoucHVzaChsaXN0T2JqW3Byb3BdLmdldERvbmVBcnIoKSk7XG4gICAgICAgIG5ld09ialtwcm9wXSA9IG9iajtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0T2JqJywgSlNPTi5zdHJpbmdpZnkobmV3T2JqKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2NhbCBzdG9yYWdlIHVuYXZhaWxhYmxlJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgY29uc3QgbGlzdE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RPYmonKSk7XG4gICAgaWYoIWxpc3RPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3T2JqID0ge307XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGxpc3RPYmopIHtcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBsaXN0KHByb3ApO1xuICAgICAgbGlzdE9ialtwcm9wXVswXS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayhlLnRpdGxlLCBlLm5vdGVzLCBlLmR1ZURhdGUsIGUucHJpb3JpdHkpO1xuICAgICAgICBuZXdMaXN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgICB9KTtcbiAgICAgIGxpc3RPYmpbcHJvcF1bMV0uZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2soZS50aXRsZSwgZS5ub3RlcywgZS5kdWVEYXRlLCBlLnByaW9yaXR5KTtcbiAgICAgICAgbmV3TGlzdC5hZGREb25lKG5ld1Rhc2spO1xuICAgICAgfSk7XG4gICAgICBuZXdPYmpbcHJvcF0gPSBuZXdMaXN0O1xuICAgIH1cbiAgICBsaXN0cy5sb2FkKG5ld09iaik7XG4gIH1cblxuICByZXR1cm4ge3NhdmUsIGxvYWR9O1xufSkoKTtcblxuY29uc3QgY2FsbHMgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBkTGlzdHMoKSB7XG4gICAgZGlzcGxheUxpc3RzKGxpc3RzLmdldExpc3QoKSk7XG4gICAgc3RvcmFnZS5zYXZlKCk7XG4gIH1cbiAgZnVuY3Rpb24gZFRhc2tzKCkge1xuICAgIGRpc3BsYXlUYXNrcyhsaXN0cy5nZXRDdXJyZW50KCkuZ2V0QXJyKCksICd0YXNrLXVsJywgJ2UnKTtcbiAgICBkaXNwbGF5VGFza3MobGlzdHMuZ2V0Q3VycmVudCgpLmdldERvbmVBcnIoKSwgJ2RvbmUtdWwnLCAnZCcpO1xuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xuICB9XG4gIHJldHVybiB7IGRMaXN0cywgZFRhc2tzIH07XG59KSgpO1xuXG5jb25zdCBhdXRvcnVuID0gKCgpID0+IHtcbiAgY29uc3QgdGFza0NyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWNyZWF0ZScpO1xuICB0YXNrQ3JlYXRlLm9uY2xpY2sgPSBhZGRUYXNrO1xuICBjb25zdCBlVGFza1NhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZS10YXNrLXNhdmUnKTtcbiAgZVRhc2tTYXZlLm9uY2xpY2sgPSBzYXZlVGFzaztcbiAgY29uc3QgdGFza0RvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZS10YXNrLWRvbmUnKTtcbiAgdGFza0RvbmUub25jbGljayA9IG1hcmtEb25lO1xuICBjb25zdCBsaXN0Q3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QtY3JlYXRlJyk7XG4gIGxpc3RDcmVhdGUub25jbGljayA9IGFkZExpc3Q7XG4gIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZS10YXNrLWRlbGV0ZScpO1xuICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVGFzayk7XG4gIGNvbnN0IGVkaXRTYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtc2F2ZScpO1xuICBlZGl0U2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVFZGl0KTtcbiAgY29uc3QgZWRpdERlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlbGV0ZScpO1xuICBlZGl0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdERlbCk7XG4gIGNvbnN0IGRvbmVVbm1hcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5tYXJrJyk7XG4gIGRvbmVVbm1hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bm1hcmtEb25lKTtcbiAgc3RvcmFnZS5sb2FkKCk7XG4gIGNhbGxzLmRMaXN0cygpO1xuICBjYWxscy5kVGFza3MoKTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHRhc2sodGl0bGUsIG5vdGVzLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4ge3RpdGxlLCBub3RlcywgZHVlRGF0ZSwgcHJpb3JpdHl9XG59XG5cbmZ1bmN0aW9uIGxpc3QobmFtZSkge1xuICBjb25zdCB0YXNrQXJyID0gW107XG4gIGNvbnN0IGRvbmVBcnIgPSBbXTtcbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgdGFza0Fyci5wdXNoKHRhc2spO1xuICAgIHNvcnQodGFza0Fycik7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRG9uZSh0YXNrKSB7XG4gICAgZG9uZUFyci5wdXNoKHRhc2spO1xuICAgIHNvcnQoZG9uZUFycik7XG4gIH1cbiAgZnVuY3Rpb24gc2F2ZVRhc2soaSwgdGFzaykge1xuICAgIHRhc2tBcnIuc3BsaWNlKGksIDEsIHRhc2spO1xuICAgIHNvcnQodGFza0Fycik7XG4gIH1cbiAgZnVuY3Rpb24gc29ydChhcnIpIHtcbiAgICBhcnIuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEFycigpIHtcbiAgICByZXR1cm4gdGFza0FycjtcbiAgfVxuICBmdW5jdGlvbiBnZXREb25lQXJyKCkge1xuICAgIHJldHVybiBkb25lQXJyO1xuICB9XG4gIGZ1bmN0aW9uIGRlbFRhc2soaSkge1xuICAgIHRhc2tBcnIuc3BsaWNlKGksIDEpO1xuICB9XG4gIGZ1bmN0aW9uIG1hcmtEb25lKGkpIHtcbiAgICBkb25lQXJyLnB1c2godGFza0FycltpXSk7XG4gICAgZGVsVGFzayhpKTtcbiAgICBzb3J0KGRvbmVBcnIpO1xuICB9XG4gIGZ1bmN0aW9uIHVubWFyayhpKSB7XG4gICAgdGFza0Fyci5wdXNoKGRvbmVBcnJbaV0pO1xuICAgIGRvbmVBcnIuc3BsaWNlKGksIDEpO1xuICAgIHNvcnQodGFza0Fycik7XG4gICAgc29ydChkb25lQXJyKTtcbiAgfVxuXG4gIHJldHVybiB7YWRkVGFzaywgZ2V0QXJyLCBkZWxUYXNrLCBzYXZlVGFzaywgZ2V0RG9uZUFyciwgYWRkRG9uZSwgbWFya0RvbmUsIHVubWFya307XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUxpc3QocHJvcCkge1xuICBsaXN0cy5jaGFuZ2VDdXJyZW50KHByb3ApO1xuICBjYWxscy5kVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gYWRkTGlzdCgpIHtcbiAgY29uc3QgbmFtZSA9IGdldFZhbHVlKCdsaXN0LW5hbWUnKS50cmltKCk7XG4gIGlmKCFuYW1lKSB7XG4gICAgbm90aWZ5UmVxdWlyZWQoJ2xpc3QtbmFtZScpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBuZXdMaXN0ID0gbGlzdChuYW1lKTtcbiAgbGlzdHMuYWRkTGlzdChuYW1lLCBuZXdMaXN0KTtcbiAgY2FsbHMuZExpc3RzKCk7XG4gIGNoYW5nZUxpc3QobmFtZSk7XG4gIHJlbW92ZVJlcXVpcmVkKCk7XG4gIGNsb3NlRm9ybSgnbGlzdC1mb3JtJyk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVOZXdUYXNrKHRydWUpO1xuICBpZihuZXdUYXNrKSB7XG4gICAgbGlzdHMuZ2V0Q3VycmVudCgpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgcmVzZXRUYXNrcygndGFzay1mb3JtJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhhZGQpIHtcbiAgbGV0IHQsIG4sIGQsIHA7XG4gIGlmIChhZGQpIHtcbiAgICB0ID0gJ3RpdGxlJywgbiA9ICdub3RlcycsIGQgPSAnZHVlLWRhdGUnLCBwID0gJ3ByaW9yaXR5JztcbiAgfSBlbHNlIHtcbiAgICB0ID0gJ2UtdGl0bGUnLCBuID0gJ2Utbm90ZXMnLCBkID0gJ2UtZHVlLWRhdGUnLCBwID0gJ2UtcHJpb3JpdHknO1xuICB9XG5cbiAgY29uc3QgdGl0bGUgPSBnZXRWYWx1ZSh0KS50cmltKCk7XG4gIGlmICghdGl0bGUpIHtcbiAgICBub3RpZnlSZXF1aXJlZCh0KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbm90ZXMgPSBnZXRWYWx1ZShuKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGdldFZhbHVlKGQpO1xuICBjb25zdCBwcmlvcml0eSA9IGdldFZhbHVlKHApO1xuICByZXR1cm4gdGFzayh0aXRsZSwgbm90ZXMsIGR1ZURhdGUsIHByaW9yaXR5KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRhc2soZSkge1xuICBjb25zdCBpID0gZS50YXJnZXQuZGF0YXNldC5pO1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlTmV3VGFzayhmYWxzZSk7XG4gIGxpc3RzLmdldEN1cnJlbnQoKS5zYXZlVGFzayhpLCBuZXdUYXNrKTtcbiAgcmVzZXRUYXNrcygnZS10YXNrLWZvcm0nKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0Lmk7XG4gIGxpc3RzLmdldEN1cnJlbnQoKS5kZWxUYXNrKGkpO1xuICByZXNldFRhc2tzKCdlLXRhc2stZm9ybScpO1xufVxuXG5mdW5jdGlvbiBtYXJrRG9uZShlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0Lmk7XG4gIGxpc3RzLmdldEN1cnJlbnQoKS5tYXJrRG9uZShpKTtcbiAgcmVzZXRUYXNrcygnZS10YXNrLWZvcm0nKTtcbn1cblxuZnVuY3Rpb24gdW5tYXJrRG9uZShlKSB7XG4gIGNvbnN0IGkgPSBlLnRhcmdldC5kYXRhc2V0Lmk7XG4gIGxpc3RzLmdldEN1cnJlbnQoKS51bm1hcmsoaSk7XG4gIHJlc2V0VGFza3MoJ2QtdGFzay1mb3JtJyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza3MoaWQpIHtcbiAgY2FsbHMuZFRhc2tzKCk7XG4gIHJlbW92ZVJlcXVpcmVkKCk7XG4gIGNsb3NlRm9ybShpZCk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlKGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUxpc3ROYW1lKG5hbWUsIG5ld05hbWUpIHtcbiAgaWYgKG5hbWUgPT0gbmV3TmFtZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsaXN0cy5jaGFuZ2VMaXN0TmFtZShuYW1lLCBuZXdOYW1lKTtcbiAgY2FsbHMuZExpc3RzKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVFZGl0KCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWxpc3QtbmFtZScpO1xuICBjb25zdCBuYW1lID0gaW5wdXQuZGF0YXNldC5uYW1lO1xuICBjb25zdCBuZXdOYW1lID0gaW5wdXQudmFsdWU7XG4gIGNoYW5nZUxpc3ROYW1lKG5hbWUsIG5ld05hbWUpO1xuICBjbG9zZUZvcm0oJ2VkaXQtZm9ybScpO1xufVxuXG5mdW5jdGlvbiBsaXN0RGVsKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWxpc3QtbmFtZScpO1xuICBjb25zdCBuYW1lID0gaW5wdXQuZGF0YXNldC5uYW1lO1xuICBsaXN0cy5saXN0RGVsKG5hbWUpO1xuICBjYWxscy5kTGlzdHMoKTtcbiAgY2xvc2VGb3JtKCdlZGl0LWZvcm0nKTtcbn1cblxuZXhwb3J0IHsgY2hhbmdlTGlzdCwgY2hhbmdlTGlzdE5hbWUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9