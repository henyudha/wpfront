webpackHotUpdate("wpfront",{

/***/ "./packages/mars-theme/src/components/post/post-list.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/post/post-list.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontity_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontity/hooks */ \"./node_modules/@frontity/hooks/index.ts\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./packages/mars-theme/src/components/post/post.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ \"./packages/mars-theme/src/components/loading.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const PostList=({actions})=>{const{posts,isFetching,isLimit,isError,fetchNext}=Object(_frontity_hooks__WEBPACK_IMPORTED_MODULE_0__[\"usePostTypeInfiniteScroll\"])({limit:3});Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");},[]);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"div\",{children:[posts.map(({key,link,isLast,Wrapper})=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(Wrapper,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link}),!isLast&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"hr\",{})]},key)),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(Container,{children:[isFetching&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{}),(isLimit||isError)&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Button,{onClick:fetchNext,children:isError?\"Gagal - Coba Lagi\":\"Load More\"})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(PostList));const Container=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"ezgstiu1\",label:\"Container\"})( false?undefined:{name:\"a0idk5\",styles:\"width:100%;text-align:center;margin:40px auto\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUM0QiIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QvcG9zdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUG9zdFR5cGVJbmZpbml0ZVNjcm9sbCB9IGZyb20gXCJAZnJvbnRpdHkvaG9va3NcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vbG9hZGluZ1wiO1xuXG5jb25zdCBQb3N0TGlzdCA9ICh7IGFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcG9zdHMsXG4gICAgaXNGZXRjaGluZyxcbiAgICBpc0xpbWl0LFxuICAgIGlzRXJyb3IsXG4gICAgZmV0Y2hOZXh0LFxuICB9ID0gdXNlUG9zdFR5cGVJbmZpbml0ZVNjcm9sbCh7IGxpbWl0OiAzIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3RzLm1hcCgoeyBrZXksIGxpbmssIGlzTGFzdCwgV3JhcHBlciB9KSA9PiAoXG4gICAgICAgIDxXcmFwcGVyIGtleT17a2V5fT5cbiAgICAgICAgICA8UG9zdCBsaW5rPXtsaW5rfSAvPlxuICAgICAgICAgIHshaXNMYXN0ICYmIDxociAvPn1cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgKSl9XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7aXNGZXRjaGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgeyhpc0xpbWl0IHx8IGlzRXJyb3IpICYmIChcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2ZldGNoTmV4dH0+XG4gICAgICAgICAgICB7aXNFcnJvciA/IFwiR2FnYWwgLSBDb2JhIExhZ2lcIiA6IFwiTG9hZCBNb3JlXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHggYXV0bztcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzU2ZGM0YztcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IC4zNWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTZkYzRjO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRiMzIzO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuYDsiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Button=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"button\", false?undefined:{target:\"ezgstiu0\",label:\"Button\"})( false?undefined:{name:\"1q5par4\",styles:\"cursor:pointer;display:inline-block;text-align:center;white-space:nowrap;font-size:1em;color:#56dc4c;margin:20px 0 0;padding:8px 20px;border-radius:.35em;background:none;border:2px solid #56dc4c;&:hover{background-color:#2db323;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0M0QiIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QvcG9zdC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUG9zdFR5cGVJbmZpbml0ZVNjcm9sbCB9IGZyb20gXCJAZnJvbnRpdHkvaG9va3NcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi9wb3N0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vbG9hZGluZ1wiO1xuXG5jb25zdCBQb3N0TGlzdCA9ICh7IGFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgcG9zdHMsXG4gICAgaXNGZXRjaGluZyxcbiAgICBpc0xpbWl0LFxuICAgIGlzRXJyb3IsXG4gICAgZmV0Y2hOZXh0LFxuICB9ID0gdXNlUG9zdFR5cGVJbmZpbml0ZVNjcm9sbCh7IGxpbWl0OiAzIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3RzLm1hcCgoeyBrZXksIGxpbmssIGlzTGFzdCwgV3JhcHBlciB9KSA9PiAoXG4gICAgICAgIDxXcmFwcGVyIGtleT17a2V5fT5cbiAgICAgICAgICA8UG9zdCBsaW5rPXtsaW5rfSAvPlxuICAgICAgICAgIHshaXNMYXN0ICYmIDxociAvPn1cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgKSl9XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7aXNGZXRjaGluZyAmJiA8TG9hZGluZyAvPn1cbiAgICAgICAgeyhpc0xpbWl0IHx8IGlzRXJyb3IpICYmIChcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2ZldGNoTmV4dH0+XG4gICAgICAgICAgICB7aXNFcnJvciA/IFwiR2FnYWwgLSBDb2JhIExhZ2lcIiA6IFwiTG9hZCBNb3JlXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHggYXV0bztcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzU2ZGM0YztcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IC4zNWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTZkYzRjO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRiMzIzO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuYDsiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QvcG9zdC1saXN0LmpzPzM4ZWEiXSwibmFtZXMiOlsiUG9zdExpc3QiLCJhY3Rpb25zIiwicG9zdHMiLCJpc0ZldGNoaW5nIiwiaXNMaW1pdCIsImlzRXJyb3IiLCJmZXRjaE5leHQiLCJ1c2VQb3N0VHlwZUluZmluaXRlU2Nyb2xsIiwibGltaXQiLCJ1c2VFZmZlY3QiLCJzb3VyY2UiLCJmZXRjaCIsIm1hcCIsImtleSIsImxpbmsiLCJpc0xhc3QiLCJXcmFwcGVyIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQU1BLEtBQU1BLFNBQVEsQ0FBRyxDQUFDLENBQUVDLE9BQUYsQ0FBRCxHQUFpQixDQUNoQyxLQUFNLENBQ0pDLEtBREksQ0FFSkMsVUFGSSxDQUdKQyxPQUhJLENBSUpDLE9BSkksQ0FLSkMsU0FMSSxFQU1GQyxpRkFBeUIsQ0FBQyxDQUFFQyxLQUFLLENBQUUsQ0FBVCxDQUFELENBTjdCLENBUUFDLHVEQUFTLENBQUMsSUFBTSxDQUNkUixPQUFPLENBQUNTLE1BQVIsQ0FBZUMsS0FBZixDQUFxQixHQUFyQixFQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQSxNQUNFLDBGQUNHVCxLQUFLLENBQUNVLEdBQU4sQ0FBVSxDQUFDLENBQUVDLEdBQUYsQ0FBT0MsSUFBUCxDQUFhQyxNQUFiLENBQXFCQyxPQUFyQixDQUFELEdBQ1Qsd0VBQUMsT0FBRCxZQUNFLHVFQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFRixJQUFaLEVBREYsQ0FFRyxDQUFDQyxNQUFELEVBQVcsK0VBRmQsR0FBY0YsR0FBZCxDQURELENBREgsQ0FPRSx3RUFBQyxTQUFELFlBQ0dWLFVBQVUsRUFBSSx1RUFBQyxnREFBRCxJQURqQixDQUVHLENBQUNDLE9BQU8sRUFBSUMsT0FBWixHQUNDLHVFQUFDLE1BQUQsRUFBUSxPQUFPLENBQUVDLFNBQWpCLFVBQ0dELE9BQU8sQ0FBRyxtQkFBSCxDQUF5QixXQURuQyxFQUhKLEdBUEYsR0FERixDQWtCRCxDQS9CRCxDQWlDZVksdUhBQU8sQ0FBQ2pCLFFBQUQsQ0FBdEIsRUFFQSxLQUFNa0IsVUFBUywycEZBQWYsQ0FNQSxLQUFNQyxPQUFNLGs5RkFBWiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LWxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VQb3N0VHlwZUluZmluaXRlU2Nyb2xsIH0gZnJvbSBcIkBmcm9udGl0eS9ob29rc1wiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuL3Bvc3RcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9sb2FkaW5nXCI7XG5cbmNvbnN0IFBvc3RMaXN0ID0gKHsgYWN0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwb3N0cyxcbiAgICBpc0ZldGNoaW5nLFxuICAgIGlzTGltaXQsXG4gICAgaXNFcnJvcixcbiAgICBmZXRjaE5leHQsXG4gIH0gPSB1c2VQb3N0VHlwZUluZmluaXRlU2Nyb2xsKHsgbGltaXQ6IDMgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cG9zdHMubWFwKCh7IGtleSwgbGluaywgaXNMYXN0LCBXcmFwcGVyIH0pID0+IChcbiAgICAgICAgPFdyYXBwZXIga2V5PXtrZXl9PlxuICAgICAgICAgIDxQb3N0IGxpbms9e2xpbmt9IC8+XG4gICAgICAgICAgeyFpc0xhc3QgJiYgPGhyIC8+fVxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICApKX1cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHtpc0ZldGNoaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICB7KGlzTGltaXQgfHwgaXNFcnJvcikgJiYgKFxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZmV0Y2hOZXh0fT5cbiAgICAgICAgICAgIHtpc0Vycm9yID8gXCJHYWdhbCAtIENvYmEgTGFnaVwiIDogXCJMb2FkIE1vcmVcIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0TGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTZkYzRjO1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogLjM1ZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NmRjNGM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZGIzMjM7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/post/post-list.js\n");

/***/ })

})