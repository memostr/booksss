"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./services/firebase.js":
/*!******************************!*\
  !*** ./services/firebase.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": function() { return /* binding */ auth; },\n/* harmony export */   \"db\": function() { return /* binding */ db; },\n/* harmony export */   \"storage\": function() { return /* binding */ storage; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n// firebaseConfig.js\n\n\nvar firebaseConfig = {\n    apiKey: \"AIzaSyADFybOU1WW3DMUB04E-dEa3gm71X2C3rM\",\n    authDomain: \"books-c14ef.firebaseapp.com\",\n    projectId: \"books-c14ef\",\n    storageBucket: \"books-c14ef.appspot.com\",\n    messagingSenderId: \"1058844041741\",\n    appId: \"1:1058844041741:web:fa50bee13876cf2564ab44\",\n    measurementId: \"G-H4J6KS0CH6\"\n};\n// Initialize Firebase\nvar app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nvar auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nvar db = getFirestore(app);\nvar storage = getStorage(app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG9CQUFvQjtBQUN5QjtBQUNMO0FBRXhDLElBQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLDZCQUE2QjtJQUN6Q0MsU0FBUyxFQUFFLGFBQWE7SUFDeEJDLGFBQWEsRUFBRSx5QkFBeUI7SUFDeENDLGlCQUFpQixFQUFFLGVBQWU7SUFDbENDLEtBQUssRUFBRSw0Q0FBNEM7SUFDbkRDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRUQsc0JBQXNCO0FBQ3RCLElBQU1DLEdBQUcsR0FBR1YsMkRBQWEsQ0FBQ0UsY0FBYyxDQUFDO0FBQ2xDLElBQU1TLElBQUksR0FBR1Ysc0RBQU8sQ0FBQ1MsR0FBRyxDQUFDLENBQUM7QUFDMUIsSUFBTUUsRUFBRSxHQUFHQyxZQUFZLENBQUNILEdBQUcsQ0FBQyxDQUFDO0FBQzdCLElBQU1JLE9BQU8sR0FBR0MsVUFBVSxDQUFDTCxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9maXJlYmFzZS5qcz9iZTc2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZpcmViYXNlQ29uZmlnLmpzXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QURGeWJPVTFXVzNETVVCMDRFLWRFYTNnbTcxWDJDM3JNXCIsXG4gIGF1dGhEb21haW46IFwiYm9va3MtYzE0ZWYuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJib29rcy1jMTRlZlwiLFxuICBzdG9yYWdlQnVja2V0OiBcImJvb2tzLWMxNGVmLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwNTg4NDQwNDE3NDFcIixcbiAgYXBwSWQ6IFwiMToxMDU4ODQ0MDQxNzQxOndlYjpmYTUwYmVlMTM4NzZjZjI1NjRhYjQ0XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1INEo2S1MwQ0g2XCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImF1dGgiLCJkYiIsImdldEZpcmVzdG9yZSIsInN0b3JhZ2UiLCJnZXRTdG9yYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/firebase.js\n");

/***/ })

});