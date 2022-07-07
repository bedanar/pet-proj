webpackHotUpdate("main",{

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Controls/CommentButton/commentbutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Controls/controls.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Menu/menu.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/Preview/preview.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/TextContent/Title/title.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/TextContent/textcontent.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/Card/card.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardsList/cardslist.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CommentForm/commentform.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Content/content.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Dropdown/dropdown.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/UserBlock/userblock.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SearchBlock/searchblock.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/SortBlock/sortblock.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/ThreadTitle/threadtitle.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Header/header.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Layout/layout.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Post/post.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Text/text.css":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = exports.timeout = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\"));\r\nvar store = (0, redux_1.createStore)(store_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nvar timeout = function () { return function (dispatch, _getState) {\r\n    dispatch({ type: 'START' });\r\n    setTimeout(function () {\r\n        dispatch({ type: 'FINISH' });\r\n    }, 1500);\r\n}; };\r\nexports.timeout = timeout;\r\nfunction AppComponent() {\r\n    // const [token] = useToken()\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    // useEffect(() => {  \r\n    //     const token = localStorage.getItem('token') || window.__token__\r\n    //     dispatch(setToken(token))\r\n    //     // @ts-ignore\r\n    //     dispatch(timeout())\r\n    //     // if (token){\r\n    //     //     localStorage.setItem('token', token)\r\n    //     // }\r\n}\r\n[];\r\nreturn (\r\n// <tokenContext.Provider value={token}>\r\n//     <UserContextProvider>\r\n// <CommentProvider value={{\r\n//     value: commentValue,\r\n//     onChange: setCommentValue\r\n// }}>\r\nreact_1.default.createElement(react_redux_1.Provider, { store: store },\r\n    react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null))))\r\n// </CommentProvider>\r\n//     </UserContextProvider>\r\n// </tokenContext.Provider>\r\n);\r\nexports.App = (0, root_1.hot)(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nwindow.addEventListener(\"load\", function () {\r\n    ReactDom.hydrate(React.createElement(App_tsx_1.App, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/icons/anonym.tsx":
false,

/***/ "./src/icons/commentsbutton.tsx":
false,

/***/ "./src/icons/down.tsx":
false,

/***/ "./src/icons/dropdown.tsx":
false,

/***/ "./src/icons/hide.tsx":
false,

/***/ "./src/icons/report.tsx":
false,

/***/ "./src/icons/save.tsx":
false,

/***/ "./src/icons/share.tsx":
false,

/***/ "./src/icons/up.tsx":
false,

/***/ "./src/shared/CardsList/Card/Card.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/CommentButton/CommentButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/CommentButton/commentbutton.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/CommentButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/SaveButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/SaveButton/savebutton.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/ShareButton.tsx":
false,

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Controls/ShareButton/sharebutton.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
false,

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
false,

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
false,

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css":
false,

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
false,

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
false,

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
false,

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
false,

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
false,

/***/ "./src/shared/CardsList/Card/TextContent/Title/Title.tsx":
false,

/***/ "./src/shared/CardsList/Card/TextContent/Title/index.ts":
false,

/***/ "./src/shared/CardsList/Card/TextContent/Title/title.css":
false,

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
false,

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
false,

/***/ "./src/shared/CardsList/Card/card.css":
false,

/***/ "./src/shared/CardsList/CardsList.tsx":
false,

/***/ "./src/shared/CardsList/cardslist.css":
false,

/***/ "./src/shared/CardsList/index.ts":
false,

/***/ "./src/shared/CommentForm/CommentForm.tsx":
false,

/***/ "./src/shared/CommentForm/commentform.css":
false,

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
false,

/***/ "./src/shared/CommentFormContainer/index.ts":
false,

/***/ "./src/shared/Content/Content.tsx":
false,

/***/ "./src/shared/Content/content.css":
false,

/***/ "./src/shared/Content/index.ts":
false,

/***/ "./src/shared/Dropdown/Dropdown.tsx":
false,

/***/ "./src/shared/Dropdown/dropdown.css":
false,

/***/ "./src/shared/Dropdown/index.ts":
false,

/***/ "./src/shared/Header/Header.tsx":
false,

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
false,

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
false,

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
false,

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
false,

/***/ "./src/shared/Header/SearchBlock/index.ts":
false,

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
false,

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
false,

/***/ "./src/shared/Header/SortBlock/index.ts":
false,

/***/ "./src/shared/Header/SortBlock/sortblock.css":
false,

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
false,

/***/ "./src/shared/Header/ThreadTitle/index.ts":
false,

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
false,

/***/ "./src/shared/Header/header.css":
false,

/***/ "./src/shared/Header/index.ts":
false,

/***/ "./src/shared/Layout/Layout.tsx":
false,

/***/ "./src/shared/Layout/index.ts":
false,

/***/ "./src/shared/Layout/layout.css":
false,

/***/ "./src/shared/Post/Post.tsx":
false,

/***/ "./src/shared/Post/index.ts":
false,

/***/ "./src/shared/Post/post.css":
false,

/***/ "./src/shared/Text/Text.tsx":
false,

/***/ "./src/shared/Text/index.ts":
false,

/***/ "./src/shared/Text/text.css":
false

})