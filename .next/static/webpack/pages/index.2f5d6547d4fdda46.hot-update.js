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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Home = ()=>{\n    _s();\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [conversation, setConversation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const apiResponse = await fetch(\"/api/get-response\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    messages: [\n                        {\n                            role: \"user\",\n                            content: userInput\n                        }\n                    ]\n                })\n            });\n            const responseData = await apiResponse.json();\n            const newConversation = [\n                ...conversation,\n                {\n                    role: \"assistant\",\n                    content: responseData.response\n                }\n            ];\n            setConversation(newConversation);\n            setResponse(responseData.response);\n            typewriterEffect(responseData.response);\n        } catch (error) {\n            console.error(\"Error fetching response from server:\", error);\n        }\n    };\n    const typewriterEffect = async function(text) {\n        let speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;\n        let newText = \"\";\n        for(let i = 0; i <= text.length; i++){\n            newText = text.slice(0, i);\n            setResponse(newText);\n            await new Promise((resolve)=>setTimeout(resolve, speed));\n        }\n        // Now, you can update the last message in the conversation array\n        const updatedConversation = [\n            ...conversation\n        ];\n        updatedConversation[updatedConversation.length - 1] = {\n            ...updatedConversation[updatedConversation.length - 1],\n            content: newText\n        };\n        setConversation(updatedConversation);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1a6293bfe80fd74f\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1a6293bfe80fd74f\",\n                children: \"body.jsx-1a6293bfe80fd74f{font-family:Arial,sans-serif;text-align:left;margin:50px}#userInput.jsx-1a6293bfe80fd74f{width:80%;padding:8px;font-size:16px;margin-bottom:10px}#response.jsx-1a6293bfe80fd74f{margin-top:20px}.assistant-response.jsx-1a6293bfe80fd74f{background-color:#f5f5f5;border:1px solid#ddd;padding:5px;margin-bottom:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;white-space:pre-line}.assistant-response.jsx-1a6293bfe80fd74f p.jsx-1a6293bfe80fd74f{margin:0}\"\n            }, void 0, false, void 0, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-1a6293bfe80fd74f\",\n                children: \"Next.js OpenAI Chat\"\n            }, void 0, false, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"jsx-1a6293bfe80fd74f\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        onChange: (e)=>setUserInput(e.target.value),\n                        className: \"jsx-1a6293bfe80fd74f\"\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"jsx-1a6293bfe80fd74f\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1a6293bfe80fd74f\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: \"jsx-1a6293bfe80fd74f\",\n                        children: \"Response:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \",\n                    response\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1a6293bfe80fd74f\",\n                children: conversation.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-1a6293bfe80fd74f\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"jsx-1a6293bfe80fd74f\",\n                                children: message.role === \"user\" ? \"Me:\" : \"Assistant:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            message.content\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"Qf5XQ+Y5RYPl3xB/SnsObf/ItWI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELE1BQU1TLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLGNBQWMsTUFBTUMsTUFBTSxxQkFBcUI7Z0JBQ25EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsVUFBVTt3QkFBQzs0QkFBRUMsTUFBTTs0QkFBUUMsU0FBU2hCO3dCQUFVO3FCQUFFO2dCQUFDO1lBQzFFO1lBRUEsTUFBTWlCLGVBQWUsTUFBTVYsWUFBWVcsSUFBSTtZQUMzQyxNQUFNQyxrQkFBa0I7bUJBQUlqQjtnQkFBYztvQkFBRWEsTUFBTTtvQkFBYUMsU0FBU0MsYUFBYW5CLFFBQVE7Z0JBQUM7YUFBRTtZQUNoR0ssZ0JBQWdCZ0I7WUFDaEJwQixZQUFZa0IsYUFBYW5CLFFBQVE7WUFDakNzQixpQkFBaUJILGFBQWFuQixRQUFRO1FBQ3hDLEVBQUUsT0FBT3VCLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDRjtJQUVBLE1BQU1ELG1CQUFtQixlQUFPRztZQUFNQyx5RUFBUTtRQUM1QyxJQUFJQyxVQUFVO1FBQ2QsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLEtBQUtILEtBQUtJLE1BQU0sRUFBRUQsSUFBSztZQUNyQ0QsVUFBVUYsS0FBS0ssS0FBSyxDQUFDLEdBQUdGO1lBQ3hCM0IsWUFBWTBCO1lBQ1osTUFBTSxJQUFJSSxRQUFRQyxDQUFBQSxVQUFXQyxXQUFXRCxTQUFTTjtRQUNuRDtRQUNBLGlFQUFpRTtRQUNqRSxNQUFNUSxzQkFBc0I7ZUFBSTlCO1NBQWE7UUFDN0M4QixtQkFBbUIsQ0FBQ0Esb0JBQW9CTCxNQUFNLEdBQUcsRUFBRSxHQUFHO1lBQ3BELEdBQUdLLG1CQUFtQixDQUFDQSxvQkFBb0JMLE1BQU0sR0FBRyxFQUFFO1lBQ3REWCxTQUFTUztRQUNYO1FBQ0F0QixnQkFBZ0I2QjtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDQzs7Ozs7OzswQkFtQ0MsOERBQUNDOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVWhDOzs7a0NBQ2QsOERBQUNpQzt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBT3ZDO3dCQUNQd0MsVUFBVSxDQUFDbkMsSUFBTUosYUFBYUksRUFBRW9DLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OztrQ0FFOUMsOERBQUNHO3dCQUFPSixNQUFLOztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0w7OztrQ0FDQyw4REFBQ1U7O2tDQUFPOzs7Ozs7b0JBQWtCO29CQUFFN0M7Ozs7Ozs7MEJBRTlCLDhEQUFDbUM7OzBCQUNFL0IsYUFBYTBDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDMUIsOERBQUNiOzs7MENBQ0MsOERBQUNVOzswQ0FBUUUsUUFBUTlCLElBQUksS0FBSyxTQUFTLFFBQVE7Ozs7Ozs0QkFBc0I7NEJBQUU4QixRQUFRN0IsT0FBTzs7dUJBRDFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7R0FwR01qRDtLQUFBQTtBQXNHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbiwgc2V0Q29udmVyc2F0aW9uXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldC1yZXNwb25zZScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2VzOiBbeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IHVzZXJJbnB1dCB9XSB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCBuZXdDb252ZXJzYXRpb24gPSBbLi4uY29udmVyc2F0aW9uLCB7IHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiByZXNwb25zZURhdGEucmVzcG9uc2UgfV07XG4gICAgICBzZXRDb252ZXJzYXRpb24obmV3Q29udmVyc2F0aW9uKTtcbiAgICAgIHNldFJlc3BvbnNlKHJlc3BvbnNlRGF0YS5yZXNwb25zZSk7XG4gICAgICB0eXBld3JpdGVyRWZmZWN0KHJlc3BvbnNlRGF0YS5yZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlc3BvbnNlIGZyb20gc2VydmVyOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHlwZXdyaXRlckVmZmVjdCA9IGFzeW5jICh0ZXh0LCBzcGVlZCA9IDUwKSA9PiB7XG4gICAgbGV0IG5ld1RleHQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBuZXdUZXh0ID0gdGV4dC5zbGljZSgwLCBpKTtcbiAgICAgIHNldFJlc3BvbnNlKG5ld1RleHQpO1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHNwZWVkKSk7XG4gICAgfVxuICAgIC8vIE5vdywgeW91IGNhbiB1cGRhdGUgdGhlIGxhc3QgbWVzc2FnZSBpbiB0aGUgY29udmVyc2F0aW9uIGFycmF5XG4gICAgY29uc3QgdXBkYXRlZENvbnZlcnNhdGlvbiA9IFsuLi5jb252ZXJzYXRpb25dO1xuICAgIHVwZGF0ZWRDb252ZXJzYXRpb25bdXBkYXRlZENvbnZlcnNhdGlvbi5sZW5ndGggLSAxXSA9IHtcbiAgICAgIC4uLnVwZGF0ZWRDb252ZXJzYXRpb25bdXBkYXRlZENvbnZlcnNhdGlvbi5sZW5ndGggLSAxXSxcbiAgICAgIGNvbnRlbnQ6IG5ld1RleHQsXG4gICAgfTtcbiAgICBzZXRDb252ZXJzYXRpb24odXBkYXRlZENvbnZlcnNhdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAvKiBzdHlsZXMuY3NzICovXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3VzZXJJbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgI3Jlc3BvbnNlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5hc3Npc3RhbnQtcmVzcG9uc2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAuYXNzaXN0YW50LXJlc3BvbnNlIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGgxPk5leHQuanMgT3BlbkFJIENoYXQ8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17dXNlcklucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Ryb25nPlJlc3BvbnNlOjwvc3Ryb25nPiB7cmVzcG9uc2V9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjb252ZXJzYXRpb24ubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8c3Ryb25nPnttZXNzYWdlLnJvbGUgPT09ICd1c2VyJyA/ICdNZTonIDogJ0Fzc2lzdGFudDonfTwvc3Ryb25nPiB7bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJjb252ZXJzYXRpb24iLCJzZXRDb252ZXJzYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhcGlSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJuZXdDb252ZXJzYXRpb24iLCJ0eXBld3JpdGVyRWZmZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwidGV4dCIsInNwZWVkIiwibmV3VGV4dCIsImkiLCJsZW5ndGgiLCJzbGljZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVwZGF0ZWRDb252ZXJzYXRpb24iLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJzdHJvbmciLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});