webpackHotUpdate("main",{

/***/ "./src/hooks/usePostData.ts":
/*!**********************************!*\
  !*** ./src/hooks/usePostData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostData = void 0;\r\nvar tokenContext_1 = __webpack_require__(/*! ./../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction usePostData() {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        axios_1.default.get('', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData(userData);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostData = usePostData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostData.ts?");

/***/ }),

/***/ "./src/shared/context/postContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/postContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.postContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar usePostData_1 = __webpack_require__(/*! ../../hooks/usePostData */ \"./src/hooks/usePostData.ts\");\r\nexports.postContext = react_1.default.createContext([]);\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, usePostData_1.usePostData)()[0];\r\n    return (react_1.default.createElement(exports.postContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postContext.tsx?");

/***/ })

})