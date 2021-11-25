webpackHotUpdate("wpfront",{

/***/ "./packages/mars-theme/src/components/featured-media.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-media.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The Component that renders a featured media, typically an image. The featured\n * media can represent an individual Post, Page, or Custom Post Type.\n *\n * @param props - The state injected by {@link connect } and the ID of the\n * featured media.\n *\n * @returns A react component.\n */const FeaturedMedia=({state,id})=>{var _media$media_details,_media$media_details2;const media=state.source.attachment[id];if(!media)return null;const srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(`${current.join(\" \")}w${index!==array.length-1?\", \":\"\"}`),\"\")||null;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,{isAmp:state.frontity.mode===\"amp\",children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{alt:media.title.rendered,src:media.source_url,srcSet:srcset,width:media===null||media===void 0?void 0:(_media$media_details=media.media_details)===null||_media$media_details===void 0?void 0:_media$media_details.width,height:media===null||media===void 0?void 0:(_media$media_details2=media.media_details)===null||_media$media_details2===void 0?void 0:_media$media_details2.height})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(FeaturedMedia));const Container=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1veh4wk1\",label:\"Container\"})(\"margin-top:16px;max-height:360px;\",({isAmp})=>isAmp&&\"position: relative;\",\";\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkM0QiIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbi8qKlxuICogVGhlIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBmZWF0dXJlZCBtZWRpYSwgdHlwaWNhbGx5IGFuIGltYWdlLiBUaGUgZmVhdHVyZWRcbiAqIG1lZGlhIGNhbiByZXByZXNlbnQgYW4gaW5kaXZpZHVhbCBQb3N0LCBQYWdlLCBvciBDdXN0b20gUG9zdCBUeXBlLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBzdGF0ZSBpbmplY3RlZCBieSB7QGxpbmsgY29ubmVjdCB9IGFuZCB0aGUgSUQgb2YgdGhlXG4gKiBmZWF0dXJlZCBtZWRpYS5cbiAqXG4gKiBAcmV0dXJucyBBIHJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNBbXA9e3N0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCJ9PlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgIHdpZHRoPXttZWRpYT8ubWVkaWFfZGV0YWlscz8ud2lkdGh9XG4gICAgICAgIGhlaWdodD17bWVkaWE/Lm1lZGlhX2RldGFpbHM/LmhlaWdodH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgJHsoeyBpc0FtcCB9KSA9PiBpc0FtcCAmJiBcInBvc2l0aW9uOiByZWxhdGl2ZTtcIn07XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXX0= */\"));const StyledImage=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false?undefined:{target:\"e1veh4wk0\",label:\"StyledImage\"})( false?undefined:{name:\"p0llbi\",styles:\"display:block;height:100%;width:100%;object-fit:cover\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURpQyIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbi8qKlxuICogVGhlIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBmZWF0dXJlZCBtZWRpYSwgdHlwaWNhbGx5IGFuIGltYWdlLiBUaGUgZmVhdHVyZWRcbiAqIG1lZGlhIGNhbiByZXByZXNlbnQgYW4gaW5kaXZpZHVhbCBQb3N0LCBQYWdlLCBvciBDdXN0b20gUG9zdCBUeXBlLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBzdGF0ZSBpbmplY3RlZCBieSB7QGxpbmsgY29ubmVjdCB9IGFuZCB0aGUgSUQgb2YgdGhlXG4gKiBmZWF0dXJlZCBtZWRpYS5cbiAqXG4gKiBAcmV0dXJucyBBIHJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNBbXA9e3N0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCJ9PlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgIHdpZHRoPXttZWRpYT8ubWVkaWFfZGV0YWlscz8ud2lkdGh9XG4gICAgICAgIGhlaWdodD17bWVkaWE/Lm1lZGlhX2RldGFpbHM/LmhlaWdodH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgJHsoeyBpc0FtcCB9KSA9PiBpc0FtcCAmJiBcInBvc2l0aW9uOiByZWxhdGl2ZTtcIn07XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzPzdmNjAiXSwibmFtZXMiOlsiRmVhdHVyZWRNZWRpYSIsInN0YXRlIiwiaWQiLCJtZWRpYSIsInNvdXJjZSIsImF0dGFjaG1lbnQiLCJzcmNzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJtYXAiLCJpdGVtIiwic291cmNlX3VybCIsIndpZHRoIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImNvbmNhdCIsImpvaW4iLCJsZW5ndGgiLCJmcm9udGl0eSIsIm1vZGUiLCJ0aXRsZSIsInJlbmRlcmVkIiwiaGVpZ2h0IiwiY29ubmVjdCIsIkNvbnRhaW5lciIsImlzQW1wIiwiU3R5bGVkSW1hZ2UiLCJJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxUkFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxLQUFNQSxjQUFhLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQVNDLEVBQVQsQ0FBRCxHQUFtQixnREFDdkMsS0FBTUMsTUFBSyxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkgsRUFBeEIsQ0FBZCxDQUVBLEdBQUksQ0FBQ0MsS0FBTCxDQUFZLE1BQU8sS0FBUCxDQUVaLEtBQU1HLE9BQU0sQ0FDVkMsTUFBTSxDQUFDQyxNQUFQLENBQWNMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkMsS0FBbEMsQ0FDRTtBQURGLENBRUdDLEdBRkgsQ0FFUUMsSUFBRCxFQUFVLENBQUNBLElBQUksQ0FBQ0MsVUFBTixDQUFrQkQsSUFBSSxDQUFDRSxLQUF2QixDQUZqQixDQUdFO0FBSEYsQ0FJR0MsTUFKSCxDQUtJLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFpQkMsS0FBakIsQ0FBd0JDLEtBQXhCLEdBQ0VILEtBQUssQ0FBQ0ksTUFBTixDQUNHLEdBQUVILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLEdBQWIsQ0FBa0IsSUFBR0gsS0FBSyxHQUFLQyxLQUFLLENBQUNHLE1BQU4sQ0FBZSxDQUF6QixDQUE2QixJQUE3QixDQUFvQyxFQUFHLEVBRGpFLENBTk4sQ0FTSSxFQVRKLEdBVU8sSUFYVCxDQWFBLE1BQ0Usd0VBQUMsU0FBRCxFQUFXLEtBQUssQ0FBRXJCLEtBQUssQ0FBQ3NCLFFBQU4sQ0FBZUMsSUFBZixHQUF3QixLQUExQyxVQUNFLHVFQUFDLFdBQUQsRUFDRSxHQUFHLENBQUVyQixLQUFLLENBQUNzQixLQUFOLENBQVlDLFFBRG5CLENBRUUsR0FBRyxDQUFFdkIsS0FBSyxDQUFDVSxVQUZiLENBR0UsTUFBTSxDQUFFUCxNQUhWLENBSUUsS0FBSyxDQUFFSCxLQUFGLFNBQUVBLEtBQUYsdUNBQUVBLEtBQUssQ0FBRU0sYUFBVCwrQ0FBRSxxQkFBc0JLLEtBSi9CLENBS0UsTUFBTSxDQUFFWCxLQUFGLFNBQUVBLEtBQUYsd0NBQUVBLEtBQUssQ0FBRU0sYUFBVCxnREFBRSxzQkFBc0JrQixNQUxoQyxFQURGLEVBREYsQ0FXRCxDQTdCRCxDQStCZUMsdUhBQU8sQ0FBQzVCLGFBQUQsQ0FBdEIsRUFFQSxLQUFNNkIsVUFBUyw0SkFHWCxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlQSxLQUFLLEVBQUkscUJBSGIsay9FQUFmLENBTUEsS0FBTUMsWUFBVyxDQUFHLG9FQUFNLENBQUNDLGtFQUFQLDJEQUFILHltRkFBakIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbi8qKlxuICogVGhlIENvbXBvbmVudCB0aGF0IHJlbmRlcnMgYSBmZWF0dXJlZCBtZWRpYSwgdHlwaWNhbGx5IGFuIGltYWdlLiBUaGUgZmVhdHVyZWRcbiAqIG1lZGlhIGNhbiByZXByZXNlbnQgYW4gaW5kaXZpZHVhbCBQb3N0LCBQYWdlLCBvciBDdXN0b20gUG9zdCBUeXBlLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBzdGF0ZSBpbmplY3RlZCBieSB7QGxpbmsgY29ubmVjdCB9IGFuZCB0aGUgSUQgb2YgdGhlXG4gKiBmZWF0dXJlZCBtZWRpYS5cbiAqXG4gKiBAcmV0dXJucyBBIHJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaXNBbXA9e3N0YXRlLmZyb250aXR5Lm1vZGUgPT09IFwiYW1wXCJ9PlxuICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgIHdpZHRoPXttZWRpYT8ubWVkaWFfZGV0YWlscz8ud2lkdGh9XG4gICAgICAgIGhlaWdodD17bWVkaWE/Lm1lZGlhX2RldGFpbHM/LmhlaWdodH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkTWVkaWEpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgJHsoeyBpc0FtcCB9KSA9PiBpc0FtcCAmJiBcInBvc2l0aW9uOiByZWxhdGl2ZTtcIn07XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-media.js\n");

/***/ })

})