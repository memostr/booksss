"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account",{

/***/ "./services/productService.js":
/*!************************************!*\
  !*** ./services/productService.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCreateProductService\": function() { return /* binding */ setCreateProductService; }\n/* harmony export */ });\n/* harmony import */ var _Users_mberktaskin_Desktop_books_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mberktaskin_Desktop_books_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mberktaskin_Desktop_books_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ \"./services/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n// productService.js\n\n\nvar setCreateProductService = function() {\n    var _ref = _asyncToGenerator(_Users_mberktaskin_Desktop_books_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(product, image) {\n        var docRef;\n        return _Users_mberktaskin_Desktop_books_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"Products\"), {\n                        desc: product.description,\n                        images: image,\n                        mark: product.brand,\n                        price: parseFloat(product.price)\n                    });\n                case 3:\n                    docRef = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        status: 200,\n                        id: docRef.id\n                    });\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.error(\"Error adding document: \", _ctx.t0);\n                    return _ctx.abrupt(\"return\", {\n                        status: 500,\n                        message: _ctx.t0.message\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function setCreateProductService(product, image) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9wcm9kdWN0U2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQSxvQkFBb0I7QUFDWTtBQUN3QjtBQUVqRCxJQUFNRyx1QkFBdUI7ZUFBRywrS0FBT0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7WUFFdkRDLE1BQU07Ozs7OzsyQkFBU0osMERBQU0sQ0FBQ0QsOERBQVUsQ0FBQ0QseUNBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTt3QkFDdERPLElBQUksRUFBRUgsT0FBTyxDQUFDSSxXQUFXO3dCQUN6QkMsTUFBTSxFQUFFSixLQUFLO3dCQUNiSyxJQUFJLEVBQUVOLE9BQU8sQ0FBQ08sS0FBSzt3QkFDbkJDLEtBQUssRUFBRUMsVUFBVSxDQUFDVCxPQUFPLENBQUNRLEtBQUssQ0FBQztxQkFDakMsQ0FBQzs7b0JBTElOLE1BQU0sWUFLVjtpREFDSzt3QkFBRVEsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLEVBQUUsRUFBRVQsTUFBTSxDQUFDUyxFQUFFO3FCQUFFOzs7O29CQUVyQ0MsT0FBTyxDQUFDQyxLQUFLLENBQUMseUJBQXlCLFVBQUksQ0FBQztpREFDckM7d0JBQUVILE1BQU0sRUFBRSxHQUFHO3dCQUFFSSxPQUFPLEVBQUVDLFFBQUVELE9BQU87cUJBQUU7Ozs7Ozs7Ozs7O0tBRTdDO29CQWJZZix1QkFBdUIsQ0FBVUMsT0FBTyxFQUFFQyxLQUFLOzs7R0FhM0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9wcm9kdWN0U2VydmljZS5qcz82ZmUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHByb2R1Y3RTZXJ2aWNlLmpzXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRDcmVhdGVQcm9kdWN0U2VydmljZSA9IGFzeW5jIChwcm9kdWN0LCBpbWFnZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcIlByb2R1Y3RzXCIpLCB7XG4gICAgICBkZXNjOiBwcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2VzOiBpbWFnZSwgLy8gR8O2cnNlbCBVUkwnaW5pIHZleWEgYmFzZTY0IHN0cmluZ2luaSBidXJheWEgZWtsZXlpblxuICAgICAgbWFyazogcHJvZHVjdC5icmFuZCxcbiAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByb2R1Y3QucHJpY2UpLFxuICAgIH0pO1xuICAgIHJldHVybiB7IHN0YXR1czogMjAwLCBpZDogZG9jUmVmLmlkIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGRvY3VtZW50OiBcIiwgZSk7XG4gICAgcmV0dXJuIHsgc3RhdHVzOiA1MDAsIG1lc3NhZ2U6IGUubWVzc2FnZSB9O1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImRiIiwiY29sbGVjdGlvbiIsImFkZERvYyIsInNldENyZWF0ZVByb2R1Y3RTZXJ2aWNlIiwicHJvZHVjdCIsImltYWdlIiwiZG9jUmVmIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwibWFyayIsImJyYW5kIiwicHJpY2UiLCJwYXJzZUZsb2F0Iiwic3RhdHVzIiwiaWQiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/productService.js\n");

/***/ })

});