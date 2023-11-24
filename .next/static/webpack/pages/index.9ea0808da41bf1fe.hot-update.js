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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\nconst Home = ()=>{\n    _s();\n    const [conversation, setConversation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const typewriterEffect = function(text) {\n        let speed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50, callback = arguments.length > 2 ? arguments[2] : void 0;\n        return new Promise((resolve)=>{\n            let i = 0;\n            const typeInterval = setInterval(()=>{\n                const newConversation = [\n                    ...conversation,\n                    {\n                        role: \"assistant\",\n                        content: text.slice(0, i)\n                    }\n                ];\n                setConversation(newConversation);\n                i++;\n                if (i > text.length) {\n                    clearInterval(typeInterval);\n                    resolve();\n                    if (callback) {\n                        callback();\n                    }\n                }\n            }, speed);\n        });\n    };\n    const fetchReply = async ()=>{\n        try {\n            const response = await fetch(\"/api/get-response\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    messages: conversation\n                })\n            });\n            const responseData = await response.json();\n            await typewriterEffect(responseData.response, 10);\n        } catch (error) {\n            console.error(\"Error fetching response from server:\", error);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Add user's input to the conversation\n        setConversation([\n            ...conversation,\n            {\n                role: \"user\",\n                content: \"Me: \".concat(userInput)\n            }\n        ]);\n        // Fetch and display the assistant's response\n        await fetchReply();\n        // Clear the user input\n        setUserInput(\"\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Scroll to the bottom of the response div when conversation changes\n        const responseDiv = document.getElementById(\"response\");\n        responseDiv.scrollTop = responseDiv.scrollHeight;\n    }, [\n        conversation\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next.js OpenAI Chat\"\n            }, void 0, false, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        onChange: (e)=>setUserInput(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"response\",\n                children: conversation.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: message.role === \"assistant\" ? \"assistant-response\" : \"\",\n                        children: message.content\n                    }, index, false, {\n                        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/geofrocker/web-dev/bot/pages/index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"B3P0EX+9BO930oouPKNSDMW+yjA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlCQUFpQjs7O0FBQzJCO0FBRTVDLE1BQU1FLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0MsTUFBTU8sbUJBQW1CLFNBQUNDO1lBQU1DLHlFQUFRLElBQUlDO1FBQzFDLE9BQU8sSUFBSUMsUUFBUSxDQUFDQztZQUNsQixJQUFJQyxJQUFJO1lBQ1IsTUFBTUMsZUFBZUMsWUFBWTtnQkFDL0IsTUFBTUMsa0JBQWtCO3VCQUNuQmI7b0JBQ0g7d0JBQUVjLE1BQU07d0JBQWFDLFNBQVNWLEtBQUtXLEtBQUssQ0FBQyxHQUFHTjtvQkFBRztpQkFDaEQ7Z0JBQ0RULGdCQUFnQlk7Z0JBQ2hCSDtnQkFDQSxJQUFJQSxJQUFJTCxLQUFLWSxNQUFNLEVBQUU7b0JBQ25CQyxjQUFjUDtvQkFDZEY7b0JBQ0EsSUFBSUYsVUFBVTt3QkFDWkE7b0JBQ0Y7Z0JBQ0Y7WUFDRixHQUFHRDtRQUNMO0lBQ0Y7SUFFQSxNQUFNYSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUJBQXFCO2dCQUNoREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLFVBQVUzQjtnQkFBYTtZQUNoRDtZQUVBLE1BQU00QixlQUFlLE1BQU1SLFNBQVNTLElBQUk7WUFDeEMsTUFBTXpCLGlCQUFpQndCLGFBQWFSLFFBQVEsRUFBRTtRQUNoRCxFQUFFLE9BQU9VLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDRjtJQUVBLE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFFaEIsdUNBQXVDO1FBQ3ZDakMsZ0JBQWdCO2VBQUlEO1lBQWM7Z0JBQUVjLE1BQU07Z0JBQVFDLFNBQVMsT0FBaUIsT0FBVmI7WUFBWTtTQUFFO1FBRWhGLDZDQUE2QztRQUM3QyxNQUFNaUI7UUFFTix1QkFBdUI7UUFDdkJoQixhQUFhO0lBQ2Y7SUFFQUwsZ0RBQVNBLENBQUM7UUFDUixxRUFBcUU7UUFDckUsTUFBTXFDLGNBQWNDLFNBQVNDLGNBQWMsQ0FBQztRQUM1Q0YsWUFBWUcsU0FBUyxHQUFHSCxZQUFZSSxZQUFZO0lBQ2xELEdBQUc7UUFBQ3ZDO0tBQWE7SUFFakIscUJBQ0UsOERBQUN3Qzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVWDs7a0NBQ2QsOERBQUNZO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPNUM7d0JBQ1A2QyxVQUFVLENBQUNkLElBQU05QixhQUFhOEIsRUFBRWUsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRTlDLDhEQUFDRzt3QkFBT0osTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0w7Z0JBQUlVLElBQUc7MEJBQ0xsRCxhQUFhbUQsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUMxQiw4REFBQ2I7d0JBRUNjLFdBQVdGLFFBQVF0QyxJQUFJLEtBQUssY0FBYyx1QkFBdUI7a0NBRWhFc0MsUUFBUXJDLE9BQU87dUJBSFhzQzs7Ozs7Ozs7Ozs7Ozs7OztBQVNqQjtHQXBGTXREO0tBQUFBO0FBc0ZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb252ZXJzYXRpb24sIHNldENvbnZlcnNhdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdHlwZXdyaXRlckVmZmVjdCA9ICh0ZXh0LCBzcGVlZCA9IDUwLCBjYWxsYmFjaykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgdHlwZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb252ZXJzYXRpb24gPSBbXG4gICAgICAgICAgLi4uY29udmVyc2F0aW9uLFxuICAgICAgICAgIHsgcm9sZTogJ2Fzc2lzdGFudCcsIGNvbnRlbnQ6IHRleHQuc2xpY2UoMCwgaSkgfSxcbiAgICAgICAgXTtcbiAgICAgICAgc2V0Q29udmVyc2F0aW9uKG5ld0NvbnZlcnNhdGlvbik7XG4gICAgICAgIGkrKztcbiAgICAgICAgaWYgKGkgPiB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodHlwZUludGVydmFsKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgc3BlZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoUmVwbHkgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0LXJlc3BvbnNlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZXM6IGNvbnZlcnNhdGlvbiB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBhd2FpdCB0eXBld3JpdGVyRWZmZWN0KHJlc3BvbnNlRGF0YS5yZXNwb25zZSwgMTApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXNwb25zZSBmcm9tIHNlcnZlcjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gQWRkIHVzZXIncyBpbnB1dCB0byB0aGUgY29udmVyc2F0aW9uXG4gICAgc2V0Q29udmVyc2F0aW9uKFsuLi5jb252ZXJzYXRpb24sIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBgTWU6ICR7dXNlcklucHV0fWAgfV0pO1xuXG4gICAgLy8gRmV0Y2ggYW5kIGRpc3BsYXkgdGhlIGFzc2lzdGFudCdzIHJlc3BvbnNlXG4gICAgYXdhaXQgZmV0Y2hSZXBseSgpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIHVzZXIgaW5wdXRcbiAgICBzZXRVc2VySW5wdXQoJycpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIHJlc3BvbnNlIGRpdiB3aGVuIGNvbnZlcnNhdGlvbiBjaGFuZ2VzXG4gICAgY29uc3QgcmVzcG9uc2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzcG9uc2UnKTtcbiAgICByZXNwb25zZURpdi5zY3JvbGxUb3AgPSByZXNwb25zZURpdi5zY3JvbGxIZWlnaHQ7XG4gIH0sIFtjb252ZXJzYXRpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TmV4dC5qcyBPcGVuQUkgQ2hhdDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXYgaWQ9XCJyZXNwb25zZVwiPlxuICAgICAgICB7Y29udmVyc2F0aW9uLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXttZXNzYWdlLnJvbGUgPT09ICdhc3Npc3RhbnQnID8gJ2Fzc2lzdGFudC1yZXNwb25zZScgOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJjb252ZXJzYXRpb24iLCJzZXRDb252ZXJzYXRpb24iLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0eXBld3JpdGVyRWZmZWN0IiwidGV4dCIsInNwZWVkIiwiY2FsbGJhY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImkiLCJ0eXBlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5ld0NvbnZlcnNhdGlvbiIsInJvbGUiLCJjb250ZW50Iiwic2xpY2UiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZmV0Y2hSZXBseSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlcyIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZURpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJpZCIsIm1hcCIsIm1lc3NhZ2UiLCJpbmRleCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});