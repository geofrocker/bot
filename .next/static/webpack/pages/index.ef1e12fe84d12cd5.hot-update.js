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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [conversation, setConversation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Update conversation with user input\n        setConversation((prev)=>[\n                ...prev,\n                {\n                    role: \"user\",\n                    content: userInput\n                }\n            ]);\n        setUserInput(\"\");\n        try {\n            // Fetch response from the server (update the endpoint accordingly)\n            const response = await fetch(\"/api/get-response\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    messages: conversation\n                })\n            });\n            const responseData = await response.json();\n            console.log(re);\n            // Update conversation with the assistant's response\n            setConversation((prev)=>[\n                    ...prev,\n                    {\n                        role: \"assistant\",\n                        content: responseData.response\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Error fetching response from server:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next.js OpenAI Chat\"\n            }, void 0, false, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        onChange: (e)=>setUserInput(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"response\",\n                children: conversation.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: message.role === \"assistant\" ? \"assistant-response\" : \"\",\n                        children: message.content\n                    }, index, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"uYmaQCHfmsgdueyUJ7UDF7oQEjs=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlCQUFpQjs7O0FBQ2dCO0FBRWpDLE1BQU1DLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0MsTUFBTU0sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixzQ0FBc0M7UUFDdENMLGdCQUFnQixDQUFDTSxPQUFTO21CQUFJQTtnQkFBTTtvQkFBRUMsTUFBTTtvQkFBUUMsU0FBU1A7Z0JBQVU7YUFBRTtRQUN6RUMsYUFBYTtRQUViLElBQUk7WUFDRixtRUFBbUU7WUFDbkUsTUFBTU8sV0FBVyxNQUFNQyxNQUFNLHFCQUFxQjtnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxVQUFVakI7Z0JBQWE7WUFDaEQ7WUFFQSxNQUFNa0IsZUFBZSxNQUFNUixTQUFTUyxJQUFJO1lBQ3hDQyxRQUFRQyxHQUFHLENBQUNDO1lBRVosb0RBQW9EO1lBQ3BEckIsZ0JBQWdCLENBQUNNLE9BQVM7dUJBQ3JCQTtvQkFDSDt3QkFBRUMsTUFBTTt3QkFBYUMsU0FBU1MsYUFBYVIsUUFBUTtvQkFBQztpQkFDckQ7UUFDSCxFQUFFLE9BQU9hLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVdkI7O2tDQUNkLDhEQUFDd0I7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU81Qjt3QkFDUDZCLFVBQVUsQ0FBQzFCLElBQU1GLGFBQWFFLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFOUMsOERBQUNHO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDTDtnQkFBSVUsSUFBRzswQkFDTGxDLGFBQWFtQyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCLDhEQUFDYjt3QkFFQ2MsV0FBV0YsUUFBUTVCLElBQUksS0FBSyxjQUFjLHVCQUF1QjtrQ0FFaEU0QixRQUFRM0IsT0FBTzt1QkFIWDRCOzs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBekRNdEM7S0FBQUE7QUEyRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC5qc1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb252ZXJzYXRpb24sIHNldENvbnZlcnNhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBVcGRhdGUgY29udmVyc2F0aW9uIHdpdGggdXNlciBpbnB1dFxuICAgIHNldENvbnZlcnNhdGlvbigocHJldikgPT4gWy4uLnByZXYsIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiB1c2VySW5wdXQgfV0pO1xuICAgIHNldFVzZXJJbnB1dCgnJyk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gRmV0Y2ggcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyICh1cGRhdGUgdGhlIGVuZHBvaW50IGFjY29yZGluZ2x5KVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXQtcmVzcG9uc2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlczogY29udmVyc2F0aW9uIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlKVxuXG4gICAgICAvLyBVcGRhdGUgY29udmVyc2F0aW9uIHdpdGggdGhlIGFzc2lzdGFudCdzIHJlc3BvbnNlXG4gICAgICBzZXRDb252ZXJzYXRpb24oKHByZXYpID0+IFtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAgeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogcmVzcG9uc2VEYXRhLnJlc3BvbnNlIH0sXG4gICAgICBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVzcG9uc2UgZnJvbSBzZXJ2ZXI6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TmV4dC5qcyBPcGVuQUkgQ2hhdDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgaWQ9XCJyZXNwb25zZVwiPlxuICAgICAgICB7Y29udmVyc2F0aW9uLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXttZXNzYWdlLnJvbGUgPT09ICdhc3Npc3RhbnQnID8gJ2Fzc2lzdGFudC1yZXNwb25zZScgOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJjb252ZXJzYXRpb24iLCJzZXRDb252ZXJzYXRpb24iLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmV2Iiwicm9sZSIsImNvbnRlbnQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZXMiLCJyZXNwb25zZURhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlIiwiZXJyb3IiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJpZCIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});