webpackHotUpdate("main",{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\r\n/*!\r\n  Copyright (c) 2018 Jed Watson.\r\n  Licensed under the MIT License (MIT), see\r\n  http://jedwatson.github.io/classnames\r\n*/\r\n/* global define */\r\n(function () {\r\n    'use strict';\r\n    var hasOwn = {}.hasOwnProperty;\r\n    function classNames() {\r\n        var classes = [];\r\n        for (var i = 0; i < arguments.length; i++) {\r\n            var arg = arguments[i];\r\n            if (!arg)\r\n                continue;\r\n            var argType = typeof arg;\r\n            if (argType === 'string' || argType === 'number') {\r\n                classes.push(arg);\r\n            }\r\n            else if (Array.isArray(arg)) {\r\n                if (arg.length) {\r\n                    var inner = classNames.apply(null, arg);\r\n                    if (inner) {\r\n                        classes.push(inner);\r\n                    }\r\n                }\r\n            }\r\n            else if (argType === 'object') {\r\n                if (arg.toString === Object.prototype.toString) {\r\n                    for (var key in arg) {\r\n                        if (hasOwn.call(arg, key) && arg[key]) {\r\n                            classes.push(key);\r\n                        }\r\n                    }\r\n                }\r\n                else {\r\n                    classes.push(arg.toString());\r\n                }\r\n            }\r\n        }\r\n        return classes.join(' ');\r\n    }\r\n    if ( true && module.exports) {\r\n        classNames.default = classNames;\r\n        module.exports = classNames;\r\n    }\r\n    else if (true) {\r\n        // register as 'classnames', consistent with npm package name\r\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\r\n            return classNames;\r\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n    }\r\n    else {}\r\n}());\r\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".userblock__userBox--24rEF {\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n}\\n.userblock__userBox--24rEF:hover span {\\n  color: var(--orange);\\n}\\n.userblock__userBox--24rEF:hover .userblock__avatarBox--2OTfi {\\n  box-shadow: 0 0 0 1px var(--orange);\\n}\\n.userblock__avatarBox--2OTfi {\\n  width: 60px;\\n  height: 60px;\\n  padding: 5px;\\n  border-radius: 100%;\\n  box-shadow: none;\\n}\\n.userblock__avatarImage--2ryXC {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 100%;\\n}\\n.userblock__username--3bLc0 {\\n  display: none;\\n}\\n@media all and (min-width: 1024px) {\\n  .userblock__username--3bLc0 {\\n    display: flex;\\n  }\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Text/text.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/shared/Text/text.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".text__s28--Puvgs {\\n  font-size: 28px;\\n  line-height: 33px;\\n}\\n.text__s20--3Xq66 {\\n  font-size: 20px;\\n  line-height: 23px;\\n}\\n.text__s16--G_lUr {\\n  font-size: 16px;\\n  line-height: 19px;\\n}\\n.text__s14--jvCoO {\\n  font-size: 14px;\\n  line-height: 16px;\\n}\\n.text__s12--2S2T2 {\\n  font-size: 12px;\\n  line-height: 14px;\\n}\\n.text__s10--DYLfy {\\n  font-size: 10px;\\n  line-height: 12px;\\n}\\n.text__black--1zchg {\\n  color: var(--black);\\n}\\n.text__orange--1RyAM {\\n  color: var(--orange);\\n}\\n.text__green--3mYQn {\\n  color: var(--green);\\n}\\n.text__white--13JGE {\\n  color: var(--white);\\n}\\n.text__greyF4--V0fR0 {\\n  color: var(--greyF4);\\n}\\n.text__greyF3--2Lfsi {\\n  color: var(--greyF3);\\n}\\n.text__grey66--373uw {\\n  color: var(--grey66);\\n}\\n.text__grey99--35u3B {\\n  color: var(--grey99);\\n}\\n.text__greyD9--7iRFr {\\n  color: var(--greyD9);\\n}\\n.text__greyC4--3oiNM {\\n  color: var(--greyc4);\\n}\\n.text__bold--gb02H {\\n  font-weight: bold;\\n}\\n@media all and (max-width: 1024px) {\\n  .text__m28--2u2zs {\\n    font-size: 28px;\\n    line-height: 33px;\\n  }\\n  .text__m20--1gFlM {\\n    font-size: 20px;\\n    line-height: 23px;\\n  }\\n  .text__m16--cSY4u {\\n    font-size: 16px;\\n    line-height: 19px;\\n  }\\n  .text__m14--s6pnr {\\n    font-size: 14px;\\n    line-height: 16px;\\n  }\\n  .text__m12--1W0av {\\n    font-size: 12px;\\n    line-height: 14px;\\n  }\\n  .text__m10--UtIkW {\\n    font-size: 10px;\\n    line-height: 12px;\\n  }\\n}\\n@media all and (min-width: 1024px) and (max-width: 1539px) {\\n  .text__t28--A4rHF {\\n    font-size: 28px;\\n    line-height: 33px;\\n  }\\n  .text__t20--78tCz {\\n    font-size: 20px;\\n    line-height: 23px;\\n  }\\n  .text__t16--nkVMz {\\n    font-size: 16px;\\n    line-height: 19px;\\n  }\\n  .text__t14--1Rj72 {\\n    font-size: 14px;\\n    line-height: 16px;\\n  }\\n  .text__t12--7txjW {\\n    font-size: 12px;\\n    line-height: 14px;\\n  }\\n  .text__t10--n2R7f {\\n    font-size: 10px;\\n    line-height: 12px;\\n  }\\n}\\n@media all and (min-width: 1540px) {\\n  .text__d28--3oIok {\\n    font-size: 28px;\\n    line-height: 33px;\\n  }\\n  .text__d20--uwHxr {\\n    font-size: 20px;\\n    line-height: 23px;\\n  }\\n  .text__d16--1Pwd1 {\\n    font-size: 16px;\\n    line-height: 19px;\\n  }\\n  .text__d14--3Futo {\\n    font-size: 14px;\\n    line-height: 16px;\\n  }\\n  .text__d12--5X_qc {\\n    font-size: 12px;\\n    line-height: 14px;\\n  }\\n  .text__d10--3pWnc {\\n    font-size: 10px;\\n    line-height: 12px;\\n  }\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"greyF4\": \"text__greyF4--V0fR0\",\n\t\"greyF3\": \"text__greyF3--2Lfsi\",\n\t\"grey66\": \"text__grey66--373uw\",\n\t\"grey99\": \"text__grey99--35u3B\",\n\t\"greyD9\": \"text__greyD9--7iRFr\",\n\t\"greyC4\": \"text__greyC4--3oiNM\",\n\t\"bold\": \"text__bold--gb02H\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/icons/anonym.tsx":
/*!******************************!*\
  !*** ./src/icons/anonym.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction AnonymIcon() {\r\n    return (react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.default = AnonymIcon;\r\n\n\n//# sourceURL=webpack:///./src/icons/anonym.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar anonym_1 = __importDefault(__webpack_require__(/*! ../../../../icons/anonym */ \"./src/icons/anonym.tsx\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=zyDry8dyH8XMFAD0Z5V7Qg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: username, className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(anonym_1.default, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username }, loading\r\n            ? react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || 'Аноним')\r\n            : react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.grey99 }, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/less-loader/dist/cjs.js!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/less-loader/dist/cjs.js!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/less-loader/dist/cjs.js!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"greyF4\"] = \"greyF4\";\r\n    EColors[\"greyF3\"] = \"greyF3\";\r\n    EColors[\"grey66\"] = \"grey66\";\r\n    EColors[\"grey99\"] = \"grey99\";\r\n    EColors[\"greyD9\"] = \"greyD9\";\r\n    EColors[\"greyC4\"] = \"greyC4\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(_a) {\r\n    var _b, _c, _d, _e;\r\n    var _f = _a.As, As = _f === void 0 ? 'span' : _f, children = _a.children, size = _a.size, mobileSize = _a.mobileSize, tabletSize = _a.tabletSize, desktopSize = _a.desktopSize, _g = _a.color, color = _g === void 0 ? EColors.black : _g, _h = _a.bold, bold = _h === void 0 ? false : _h;\r\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_b = {}, _b[text_css_1.default.bold] = bold, _b), (_c = {}, _c[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _c), (_d = {}, _d[text_css_1.default[\"d\".concat(mobileSize)]] = desktopSize, _d), (_e = {}, _e[text_css_1.default[\"t\".concat(mobileSize)]] = tabletSize, _e), text_css_1.default[color]);\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/less-loader/dist/cjs.js!./text.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Text/text.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/less-loader/dist/cjs.js!./text.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Text/text.css\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/less-loader/dist/cjs.js!./text.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Text/text.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ })

})