webpackHotUpdate("main",{

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./../store/me/actions */ \"./src/store/me/actions.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nfunction useUserData() {\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch((0, actions_1.meRequest)());\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \".concat(token) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ username: userData.name, avatarImage: userData.icon_img });\r\n            dispatch((0, actions_1.meRequestSuccess)(userData));\r\n        })\r\n            .catch(function (error) {\r\n            dispatch((0, actions_1.meRequestError)(error));\r\n        });\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequestError = meRequestError;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ })

})