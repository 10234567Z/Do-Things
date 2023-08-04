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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Content/headFont.ttf */ "./src/Content/headFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Content/pangolin.ttf */ "./src/Content/pangolin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "tektur";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "pangolin";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}

.sideHead{
    grid-area: 1/1/2/2;
    font-family: "tektur" , cursive;
    font-size: 3rem;
}

.sidebar{
    grid-area: 2/1/3/2;
    border-right: 1px ridge rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    padding-top: 20px;
    display: grid;
    grid-template-rows: 75px auto;
    place-items: center;
}

.container{
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 150px auto;
    place-items: center;
    gap: 10px;
}

.addProject,.submit{
    height: 45px;
    width: 100px;
    border-radius: 13px;
    background-color: #7fffd4;
    border: 2px ridge #C8C8C8;
    font-size: 1.4rem;
    transition: 0.2s all linear;
}

.addProject:hover,.submit:hover{
    background-color: #5FBE9E;
}

.addProject:active,.submit:active{
    background-color: #509F85;
}

.projectContainer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.projectDIV{
    display: flex;
    flex-direction: row;
    width: 65%;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 1.3rem;
    gap: 15px;
    transition: 0.2s all linear;
    border-radius: 15px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
}

.projectDIV:hover{
    background-color: rgba(0, 0, 0, 0.3);
}

.delProject{
    font-family: 'pangolin';
    border-radius: 50%;
    transition: 0.2s all linear;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
}

.delProject:hover{
    background-color: rgba(0, 0, 0, 0.4);
}

.formBG{
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: white;
    opacity: 0.8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

textarea{
    resize: none;
}

input[type="text"]{
    height: 35px;
    width: 95%;
    border-radius: 15px;
    border: 2px ridge cornflowerblue;
    padding: 5px;
    font-size: 1.3rem;
}

.formArea{
    display: flex;
    height: 250px;
    flex-direction: column;
    place-items: center;
    gap: 5px;
    z-index: 2;
}

label{
    text-align: center;
    width: 100%;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
}

.submit{
    height: 25px;
    width: 90px;
    font-size: 1.1rem;
    z-index: 2;
}

.taskArea{
    display: grid;
    grid-template-rows: 50px auto;
    place-items: flex-start;
    width: 100%;
    height: 100%;
}

.taskContainer{
    height: 100%;
    width: 100%;
}

.addTask{
    padding: 5px;
    font-size: medium;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,4CAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,iBAAiB;IACjB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,0CAA0C;IAC1C,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,yBAAyB;IACzB,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;IACT,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,MAAM;IACN,OAAO;IACP,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,UAAU;IACV,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,yCAAyC;AAC7C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":["@font-face {\n    font-family: \"tektur\";\n    src: url(./Content/headFont.ttf);\n}\n\n@font-face {\n    font-family: \"pangolin\";\n    src: url(./Content/pangolin.ttf);\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    user-select: none;\n    -webkit-user-select: none;\n    -webkit-user-drag: none;\n}\n\n.sideHead{\n    grid-area: 1/1/2/2;\n    font-family: \"tektur\" , cursive;\n    font-size: 3rem;\n}\n\n.sidebar{\n    grid-area: 2/1/3/2;\n    border-right: 1px ridge rgba(0, 0, 0, 0.6);\n    height: 100%;\n    width: 100%;\n    padding-top: 20px;\n    display: grid;\n    grid-template-rows: 75px auto;\n    place-items: center;\n}\n\n.container{\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 30% 70%;\n    grid-template-rows: 150px auto;\n    place-items: center;\n    gap: 10px;\n}\n\n.addProject,.submit{\n    height: 45px;\n    width: 100px;\n    border-radius: 13px;\n    background-color: #7fffd4;\n    border: 2px ridge #C8C8C8;\n    font-size: 1.4rem;\n    transition: 0.2s all linear;\n}\n\n.addProject:hover,.submit:hover{\n    background-color: #5FBE9E;\n}\n\n.addProject:active,.submit:active{\n    background-color: #509F85;\n}\n\n.projectContainer{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.projectDIV{\n    display: flex;\n    flex-direction: row;\n    width: 65%;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 10px;\n    font-size: 1.3rem;\n    gap: 15px;\n    transition: 0.2s all linear;\n    border-radius: 15px;\n    padding: 10px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n\n.projectDIV:hover{\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.delProject{\n    font-family: 'pangolin';\n    border-radius: 50%;\n    transition: 0.2s all linear;\n    padding: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.delProject:hover{\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n.formBG{\n    top: 0;\n    left: 0;\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    z-index: 1;\n    background-color: white;\n    opacity: 0.8;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n}\n\ntextarea{\n    resize: none;\n}\n\ninput[type=\"text\"]{\n    height: 35px;\n    width: 95%;\n    border-radius: 15px;\n    border: 2px ridge cornflowerblue;\n    padding: 5px;\n    font-size: 1.3rem;\n}\n\n.formArea{\n    display: flex;\n    height: 250px;\n    flex-direction: column;\n    place-items: center;\n    gap: 5px;\n    z-index: 2;\n}\n\nlabel{\n    text-align: center;\n    width: 100%;\n    display: block;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.submit{\n    height: 25px;\n    width: 90px;\n    font-size: 1.1rem;\n    z-index: 2;\n}\n\n.taskArea{\n    display: grid;\n    grid-template-rows: 50px auto;\n    place-items: flex-start;\n    width: 100%;\n    height: 100%;\n}\n\n.taskContainer{\n    height: 100%;\n    width: 100%;\n}\n\n.addTask{\n    padding: 5px;\n    font-size: medium;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addToUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToUI.js */ "./src/addToUI.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _Content_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content/delete.svg */ "./src/Content/delete.svg");
/* harmony import */ var _Content_plus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content/plus.svg */ "./src/Content/plus.svg");









/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    if (document.querySelector('.formBG') === undefined || document.querySelector('.formBG') === null) {
        let formBG = document.createElement('div');
        formBG.classList.add('formBG');
        document.querySelector('body').append(formBG);
    }
    let formBG = document.querySelector('.formBG');

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'title');
    nameLabel.innerHTML = 'Project Name';
    let projectName = document.createElement('input');
    projectName.type = 'text';
    projectName.setAttribute('id', 'title')
    projectName.classList.add('title');
    projectName.maxLength = '20'

    let submitButton = document.createElement('button');
    submitButton.classList.add('submit');
    submitButton.innerHTML = 'Submit';

    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formBG.append(formArea);
    formArea.append(nameLabel, projectName, submitButton);
}


function addProject(name) {
    if (name.value.trim() !== '') {
        new _tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"](name.value, 'No').AddToLibrary();
        document.querySelector('.formBG').remove();
        (0,_addToUI_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    else {
        document.querySelector('.formBG').remove();
    }
}

/***/ }),

/***/ "./src/addToUI.js":
/*!************************!*\
  !*** ./src/addToUI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    _index_js__WEBPACK_IMPORTED_MODULE_1__.projectContainer.innerHTML = ''
    for(let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary.length;i++){
        let newProject = document.createElement('div');
        newProject.classList.add('projectDIV');
        let projectName = document.createElement('div');
        projectName.classList.add('projectName');

        let title = document.createElement('p');
        title.classList.add('genTitle');
        title.innerHTML = _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary[i].name;

        let editName = document.createElement('input');
        editName.type = 'text';
        editName.value = _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary[i].name;
        editName.style.display = 'none';
        editName.maxLength = 20;

        projectName.append(title,editName);

        let deleteDIV = document.createElement('div');
        deleteDIV.classList.add('delProject');
        deleteDIV.innerHTML = 'X';
        newProject.append(projectName,deleteDIV);
        _index_js__WEBPACK_IMPORTED_MODULE_1__.projectContainer.append(newProject);
    }
}

/***/ }),

/***/ "./src/changeName.js":
/*!***************************!*\
  !*** ./src/changeName.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(input) {
    input.select();
    let index = _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary.findIndex(e => input.value === e.name);
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            input.style.display = 'none';
            input.parentNode.getElementsByTagName('p')[0].innerHTML = input.value;
            input.parentNode.getElementsByTagName('p')[0].style.display = 'block';
            _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary[index].name = input.value
            _tasks__WEBPACK_IMPORTED_MODULE_0__.currentProject.name = input.value;
        }
    })
}

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name){
    let index = _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary.findIndex(e => e.name === name);
    _tasks__WEBPACK_IMPORTED_MODULE_0__.projectLibrary.splice(index , 1);
    _tasks__WEBPACK_IMPORTED_MODULE_0__.currentProject.name = '';
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer),
/* harmony export */   taskArea: () => (/* binding */ taskArea),
/* harmony export */   taskHead: () => (/* binding */ taskHead)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _deleteProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteProject.js */ "./src/deleteProject.js");
/* harmony import */ var _changeName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeName.js */ "./src/changeName.js");
/* harmony import */ var _todoAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoAdd */ "./src/todoAdd.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _updateTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateTask */ "./src/updateTask.js");








let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

let sideHead = document.createElement('h1');
sideHead.classList.add('sideHead');
sideHead.innerHTML = 'Projects';

let sideBar = document.createElement('div');
sideBar.classList.add('sidebar');

let projectContainer = document.createElement('div');
projectContainer.classList.add('projectContainer');

let addButton = document.createElement('button');
addButton.classList.add('addProject');
addButton.innerHTML = "Add"

let taskHead = document.createElement('h1');
taskHead.classList.add('taskHead');
taskHead.innerHTML = 'Tasks'

let addTask = document.createElement('button');
addTask.classList.add('addProject', 'addTask');
addTask.innerHTML = "Add Task"

let taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');

let taskArea = document.createElement('div');
taskArea.classList.add('taskArea');
taskArea.append(addTask, taskContainer)
sideBar.append(addButton, projectContainer)
container.append(sideHead, sideBar, taskHead, taskArea)
taskArea.style.display = 'none';
taskHead.style.display = 'none';

document.addEventListener('click', e => {
    if (e.target.classList.contains('addProject') && !(e.target.classList.contains('addTask'))) {
        (0,_addProject_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    if (e.target.classList.contains('submit')) {
        (0,_addProject_js__WEBPACK_IMPORTED_MODULE_1__.addProject)(document.querySelector('.title'));
    }
    if (e.target.classList.contains('formBG')) {
        e.target.remove();
    }
    if (e.target.classList.contains('delProject')) {
        let projectName = e.target.parentNode.getElementsByTagName('div')[0].innerHTML;
        (0,_deleteProject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectName);
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains('genTitle')) {
        e.target.parentNode.getElementsByTagName('p')[0].style.display = 'none';
        let inputEL = e.target.parentNode.getElementsByTagName('input')[0];
        inputEL.style.display = 'block';
        (0,_changeName_js__WEBPACK_IMPORTED_MODULE_3__["default"])(inputEL);
    }
    if (e.target.classList.contains('projectDIV')) {
        _tasks__WEBPACK_IMPORTED_MODULE_5__.currentProject.name = e.target.getElementsByTagName('div')[0].getElementsByTagName('p')[0].innerHTML;
        console.log(_tasks__WEBPACK_IMPORTED_MODULE_5__.currentProject)
    }
    if (e.target.classList.contains('addTask')) {
        (0,_todoAdd__WEBPACK_IMPORTED_MODULE_4__["default"])(_tasks__WEBPACK_IMPORTED_MODULE_5__.currentProject.name)
    }
    (0,_updateTask__WEBPACK_IMPORTED_MODULE_6__["default"])();
    console.log(_tasks__WEBPACK_IMPORTED_MODULE_5__.currentProject)
})

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   projectLibrary: () => (/* binding */ projectLibrary)
/* harmony export */ });

let projectLibrary = [];
let currentProject = {
    name: ''
};

function Project(name,status) {
    this.status = status;
    this.name = name;
    this.AddToLibrary = () => {
        let project = { name , status};
        projectLibrary.push(project);
        currentProject.name = name;
    }
}

/***/ }),

/***/ "./src/todoAdd.js":
/*!************************!*\
  !*** ./src/todoAdd.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoForm)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



function Todo(title , date , name){
    this.title = title;
    this.date = date;
    this.AddToDo = () =>{
        let bookIndex = _tasks__WEBPACK_IMPORTED_MODULE_0__.taskLibrary.findIndex(t => t.name === name);
        let todo = { title , date}
        _tasks__WEBPACK_IMPORTED_MODULE_0__.taskLibrary[bookIndex].push(todo)
    }
}


function TodoForm(name){
    if (document.querySelector('.formBG') === undefined || document.querySelector('.formBG') === null) {
        let formBG = document.createElement('div');
        formBG.classList.add('formBG' , 'taskForm');
        document.querySelector('body').append(formBG);
    }
    let formBG = document.querySelector('.formBG');

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'title');
    nameLabel.innerHTML = 'Task Name';
    let projectName = document.createElement('input');
    projectName.type = 'text';
    projectName.setAttribute('id', 'title')
    projectName.classList.add('title');
    projectName.maxLength = '40'

    let submitButton = document.createElement('button');
    submitButton.classList.add('submitTask');
    submitButton.innerHTML = 'Submit';

    let formArea = document.createElement('div');
    formArea.classList.add('formArea');
    formBG.append(formArea);
    formArea.append(nameLabel, projectName, submitButton);
}

/***/ }),

/***/ "./src/updateTask.js":
/*!***************************!*\
  !*** ./src/updateTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTaskUI)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




function updateTaskUI(){
    if(_tasks__WEBPACK_IMPORTED_MODULE_0__.currentProject.name.trim() !== ''){
        ___WEBPACK_IMPORTED_MODULE_1__.taskArea.style.display = 'grid';
        ___WEBPACK_IMPORTED_MODULE_1__.taskHead.style.display = 'block'
    }
    else{
        ___WEBPACK_IMPORTED_MODULE_1__.taskArea.style.display = 'none';
        ___WEBPACK_IMPORTED_MODULE_1__.taskHead.style.display = 'none'
    }
}

/***/ }),

/***/ "./src/Content/delete.svg":
/*!********************************!*\
  !*** ./src/Content/delete.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82aee49300bf56d4b9c3.svg";

/***/ }),

/***/ "./src/Content/headFont.ttf":
/*!**********************************!*\
  !*** ./src/Content/headFont.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d120d1180b75dca72626.ttf";

/***/ }),

/***/ "./src/Content/pangolin.ttf":
/*!**********************************!*\
  !*** ./src/Content/pangolin.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df5f537c56b8f162c1d1.ttf";

/***/ }),

/***/ "./src/Content/plus.svg":
/*!******************************!*\
  !*** ./src/Content/plus.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kby10aGluZ3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RvLXRoaW5ncy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RvLXRoaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kby10aGluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RvLXRoaW5ncy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kby10aGluZ3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL2FkZFRvVUkuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL2NoYW5nZU5hbWUuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RvLXRoaW5ncy8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9kby10aGluZ3MvLi9zcmMvdG9kb0FkZC5qcyIsIndlYnBhY2s6Ly9kby10aGluZ3MvLi9zcmMvdXBkYXRlVGFzay5qcyIsIndlYnBhY2s6Ly9kby10aGluZ3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RvLXRoaW5ncy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RvLXRoaW5ncy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kby10aGluZ3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2RvLXRoaW5ncy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2RvLXRoaW5ncy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZG8tdGhpbmdzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Db250ZW50L2hlYWRGb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQ29udGVudC9wYW5nb2xpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJ0ZWt0dXJcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwicGFuZ29saW5cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG5cbi5zaWRlSGVhZHtcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gICAgZm9udC1mYW1pbHk6IFwidGVrdHVyXCIgLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnNpZGViYXJ7XG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHJpZGdlIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggYXV0bztcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggYXV0bztcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmFkZFByb2plY3QsLnN1Ym1pdHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmZmZkNDtcbiAgICBib3JkZXI6IDJweCByaWRnZSAjQzhDOEM4O1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcbn1cblxuLmFkZFByb2plY3Q6aG92ZXIsLnN1Ym1pdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUZCRTlFO1xufVxuXG4uYWRkUHJvamVjdDphY3RpdmUsLnN1Ym1pdDphY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwOUY4NTtcbn1cblxuLnByb2plY3RDb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucHJvamVjdERJVntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGdhcDogMTVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnByb2plY3RESVY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZGVsUHJvamVjdHtcbiAgICBmb250LWZhbWlseTogJ3BhbmdvbGluJztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmRlbFByb2plY3Q6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZm9ybUJHe1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxudGV4dGFyZWF7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXXtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMnB4IHJpZGdlIGNvcm5mbG93ZXJibHVlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmZvcm1BcmVhe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgei1pbmRleDogMjtcbn1cblxubGFiZWx7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uc3VibWl0e1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4udGFza0FyZWF7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcbiAgICBwbGFjZS1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YXNrQ29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZFRhc2t7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJ0ZWt0dXJcXFwiO1xcbiAgICBzcmM6IHVybCguL0NvbnRlbnQvaGVhZEZvbnQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicGFuZ29saW5cXFwiO1xcbiAgICBzcmM6IHVybCguL0NvbnRlbnQvcGFuZ29saW4udHRmKTtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxufVxcblxcbi5zaWRlSGVhZHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBmb250LWZhbWlseTogXFxcInRla3R1clxcXCIgLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHJpZGdlIHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCBhdXRvO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCBhdXRvO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGRQcm9qZWN0LC5zdWJtaXR7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZmZmQ0O1xcbiAgICBib3JkZXI6IDJweCByaWRnZSAjQzhDOEM4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xcbn1cXG5cXG4uYWRkUHJvamVjdDpob3Zlciwuc3VibWl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUZCRTlFO1xcbn1cXG5cXG4uYWRkUHJvamVjdDphY3RpdmUsLnN1Ym1pdDphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDlGODU7XFxufVxcblxcbi5wcm9qZWN0Q29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnByb2plY3RESVZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGdhcDogMTVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wcm9qZWN0RElWOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5kZWxQcm9qZWN0e1xcbiAgICBmb250LWZhbWlseTogJ3BhbmdvbGluJztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZGVsUHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uZm9ybUJHe1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbnRleHRhcmVhe1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXXtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCByaWRnZSBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmZvcm1BcmVhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxubGFiZWx7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnN1Ym1pdHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrQXJlYXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG87XFxuICAgIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZFRhc2t7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVUlNYWtlciBmcm9tICcuL2FkZFRvVUkuanMnXG5pbXBvcnQgVGFza01ha2VyLCB7IHByb2plY3RMaWJyYXJ5IH0gZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0Q29udGFpbmVyIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL0NvbnRlbnQvZGVsZXRlLnN2ZydcbmltcG9ydCBwbHVzIGZyb20gJy4vQ29udGVudC9wbHVzLnN2Zyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2tzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQkcnKSA9PT0gdW5kZWZpbmVkIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQkcnKSA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgZm9ybUJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1CRy5jbGFzc0xpc3QuYWRkKCdmb3JtQkcnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChmb3JtQkcpO1xuICAgIH1cbiAgICBsZXQgZm9ybUJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1CRycpO1xuXG4gICAgbGV0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJylcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHByb2plY3ROYW1lLm1heExlbmd0aCA9ICcyMCdcblxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICdTdWJtaXQnO1xuXG4gICAgbGV0IGZvcm1BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUFyZWEuY2xhc3NMaXN0LmFkZCgnZm9ybUFyZWEnKTtcbiAgICBmb3JtQkcuYXBwZW5kKGZvcm1BcmVhKTtcbiAgICBmb3JtQXJlYS5hcHBlbmQobmFtZUxhYmVsLCBwcm9qZWN0TmFtZSwgc3VibWl0QnV0dG9uKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XG4gICAgaWYgKG5hbWUudmFsdWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICBuZXcgVGFza01ha2VyKG5hbWUudmFsdWUsICdObycpLkFkZFRvTGlicmFyeSgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUJHJykucmVtb3ZlKCk7XG4gICAgICAgIFVJTWFrZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQkcnKS5yZW1vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtwcm9qZWN0TGlicmFyeX0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlicmFyeS5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RElWJyk7XG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2VuVGl0bGUnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdExpYnJhcnlbaV0ubmFtZTtcblxuICAgICAgICBsZXQgZWRpdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0TmFtZS50eXBlID0gJ3RleHQnO1xuICAgICAgICBlZGl0TmFtZS52YWx1ZSA9IHByb2plY3RMaWJyYXJ5W2ldLm5hbWU7XG4gICAgICAgIGVkaXROYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVkaXROYW1lLm1heExlbmd0aCA9IDIwO1xuXG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZCh0aXRsZSxlZGl0TmFtZSk7XG5cbiAgICAgICAgbGV0IGRlbGV0ZURJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVESVYuY2xhc3NMaXN0LmFkZCgnZGVsUHJvamVjdCcpO1xuICAgICAgICBkZWxldGVESVYuaW5uZXJIVE1MID0gJ1gnO1xuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZChwcm9qZWN0TmFtZSxkZWxldGVESVYpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChuZXdQcm9qZWN0KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcHJvamVjdExpYnJhcnksIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgbGV0IGluZGV4ID0gcHJvamVjdExpYnJhcnkuZmluZEluZGV4KGUgPT4gaW5wdXQudmFsdWUgPT09IGUubmFtZSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgcHJvamVjdExpYnJhcnlbaW5kZXhdLm5hbWUgPSBpbnB1dC52YWx1ZVxuICAgICAgICAgICAgY3VycmVudFByb2plY3QubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJpbXBvcnQgeyBwcm9qZWN0TGlicmFyeSAsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vdGFza3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKXtcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0TGlicmFyeS5maW5kSW5kZXgoZSA9PiBlLm5hbWUgPT09IG5hbWUpO1xuICAgIHByb2plY3RMaWJyYXJ5LnNwbGljZShpbmRleCAsIDEpO1xuICAgIGN1cnJlbnRQcm9qZWN0Lm5hbWUgPSAnJztcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBhZGRQcm9qZWN0VUksIHsgYWRkUHJvamVjdCB9IGZyb20gJy4vYWRkUHJvamVjdC5qcydcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4vZGVsZXRlUHJvamVjdC5qcydcbmltcG9ydCBjaGFuZ2VQTmFtZSBmcm9tICcuL2NoYW5nZU5hbWUuanMnXG5pbXBvcnQgVG9kb0Zvcm0gZnJvbSAnLi90b2RvQWRkJztcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0TGlicmFyeSB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHVwZGF0ZVRhc2tVSSBmcm9tICcuL3VwZGF0ZVRhc2snO1xuXG5leHBvcnQgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmxldCBzaWRlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5zaWRlSGVhZC5jbGFzc0xpc3QuYWRkKCdzaWRlSGVhZCcpO1xuc2lkZUhlYWQuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcblxubGV0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG5leHBvcnQgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRhaW5lcicpO1xuXG5sZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCJcblxuZXhwb3J0IGxldCB0YXNrSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG50YXNrSGVhZC5jbGFzc0xpc3QuYWRkKCd0YXNrSGVhZCcpO1xudGFza0hlYWQuaW5uZXJIVE1MID0gJ1Rhc2tzJ1xuXG5sZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0JywgJ2FkZFRhc2snKTtcbmFkZFRhc2suaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiXG5cbmxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKTtcblxuZXhwb3J0IGxldCB0YXNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudGFza0FyZWEuY2xhc3NMaXN0LmFkZCgndGFza0FyZWEnKTtcbnRhc2tBcmVhLmFwcGVuZChhZGRUYXNrLCB0YXNrQ29udGFpbmVyKVxuc2lkZUJhci5hcHBlbmQoYWRkQnV0dG9uLCBwcm9qZWN0Q29udGFpbmVyKVxuY29udGFpbmVyLmFwcGVuZChzaWRlSGVhZCwgc2lkZUJhciwgdGFza0hlYWQsIHRhc2tBcmVhKVxudGFza0FyZWEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbnRhc2tIZWFkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkUHJvamVjdCcpICYmICEoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRUYXNrJykpKSB7XG4gICAgICAgIGFkZFByb2plY3RVSSgpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXQnKSkge1xuICAgICAgICBhZGRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZm9ybUJHJykpIHtcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbFByb2plY3QnKSkge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXS5pbm5lckhUTUw7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZW5UaXRsZScpKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsZXQgaW5wdXRFTCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgICAgIGlucHV0RUwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNoYW5nZVBOYW1lKGlucHV0RUwpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0RElWJykpIHtcbiAgICAgICAgY3VycmVudFByb2plY3QubmFtZSA9IGUudGFyZ2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncCcpWzBdLmlubmVySFRNTDtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFRhc2snKSkge1xuICAgICAgICBUb2RvRm9ybShjdXJyZW50UHJvamVjdC5uYW1lKVxuICAgIH1cbiAgICB1cGRhdGVUYXNrVUkoKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdClcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KVxuIiwiXG5leHBvcnQgbGV0IHByb2plY3RMaWJyYXJ5ID0gW107XG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0ge1xuICAgIG5hbWU6ICcnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KG5hbWUsc3RhdHVzKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLkFkZFRvTGlicmFyeSA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgPSB7IG5hbWUgLCBzdGF0dXN9O1xuICAgICAgICBwcm9qZWN0TGlicmFyeS5wdXNoKHByb2plY3QpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC5uYW1lID0gbmFtZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgdGFza0xpYnJhcnksY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUgLCBkYXRlICwgbmFtZSl7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5BZGRUb0RvID0gKCkgPT57XG4gICAgICAgIGxldCBib29rSW5kZXggPSB0YXNrTGlicmFyeS5maW5kSW5kZXgodCA9PiB0Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICBsZXQgdG9kbyA9IHsgdGl0bGUgLCBkYXRlfVxuICAgICAgICB0YXNrTGlicmFyeVtib29rSW5kZXhdLnB1c2godG9kbylcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0Zvcm0obmFtZSl7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQkcnKSA9PT0gdW5kZWZpbmVkIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQkcnKSA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgZm9ybUJHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1CRy5jbGFzc0xpc3QuYWRkKCdmb3JtQkcnICwgJ3Rhc2tGb3JtJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoZm9ybUJHKTtcbiAgICB9XG4gICAgbGV0IGZvcm1CRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQkcnKTtcblxuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSAnVGFzayBOYW1lJztcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpXG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBwcm9qZWN0TmFtZS5tYXhMZW5ndGggPSAnNDAnXG5cbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdFRhc2snKTtcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ1N1Ym1pdCc7XG5cbiAgICBsZXQgZm9ybUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQXJlYS5jbGFzc0xpc3QuYWRkKCdmb3JtQXJlYScpO1xuICAgIGZvcm1CRy5hcHBlbmQoZm9ybUFyZWEpO1xuICAgIGZvcm1BcmVhLmFwcGVuZChuYW1lTGFiZWwsIHByb2plY3ROYW1lLCBzdWJtaXRCdXR0b24pO1xufSIsImltcG9ydCB7IHByb2plY3RMaWJyYXJ5ICwgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgdGFza0FyZWEsdGFza0hlYWQgfSBmcm9tIFwiLlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tVSSgpe1xuICAgIGlmKGN1cnJlbnRQcm9qZWN0Lm5hbWUudHJpbSgpICE9PSAnJyl7XG4gICAgICAgIHRhc2tBcmVhLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgIHRhc2tIZWFkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHRhc2tBcmVhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRhc2tIZWFkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==