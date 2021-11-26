webpackHotUpdate("wpfront",{

/***/ "./packages/mars-theme/src/components/header/menu-modal.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/header/menu-modal.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The modal containing the mobile menu items.\n *\n * @param props - The props passed to the component from parent.\n * @returns A React component.\n */const MenuModal=_ref=>{let props=_extends({},_ref);const{state}=Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"useConnect\"])();const{menu}=state.theme;const isThereLinks=(menu===null||menu===void 0?void 0:menu.length)>0;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxs\"])(\"div\",_objectSpread(_objectSpread({},props),{},{children:[state.frontity.mode!==\"amp\"&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuOverlay,{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuContent,{as:\"nav\",children:isThereLinks&&menu.map(([name,link])=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(MenuLink,{link:link,\"aria-current\":state.router.link===link?\"page\":undefined,children:name},name))})]}));};const MenuOverlay=Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])(\"div\", false?undefined:{target:\"e4vf3y12\",label:\"MenuOverlay\"})( false?undefined:{name:\"1dkgel2\",styles:\"background-color:#fffc4c;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUM4QiIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb25uZWN0KCk7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnU/Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICB7c3RhdGUuZnJvbnRpdHkubW9kZSAhPT0gXCJhbXBcIiAmJiA8TWVudU92ZXJsYXkgLz59XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM0YztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuContent=Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])(\"div\", false?undefined:{target:\"e4vf3y11\",label:\"MenuContent\"})( false?undefined:{name:\"1n49slo\",styles:\"z-index:3;position:relative\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEM4QiIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb25uZWN0KCk7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnU/Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICB7c3RhdGUuZnJvbnRpdHkubW9kZSAhPT0gXCJhbXBcIiAmJiA8TWVudU92ZXJsYXkgLz59XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM0YztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuLink=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], false?undefined:{target:\"e4vf3y10\",label:\"MenuLink\"})( false?undefined:{name:\"qq1hlh\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;&:hover,&:focus{background-color:rgba(0, 0, 0, 0.05);}&[aria-current=\\\"page\\\"]{color:#fff;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUQ2QiIsImZpbGUiOiIvVXNlcnMvaW1hYy9Ob2RlcHJvamVjdHMvd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb25uZWN0KCk7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnU/Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICB7c3RhdGUuZnJvbnRpdHkubW9kZSAhPT0gXCJhbXBcIiAmJiA8TWVudU92ZXJsYXkgLz59XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM0YztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(MenuModal,{injectProps:false}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzP2UxMjYiXSwibmFtZXMiOlsiTWVudU1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsInVzZUNvbm5lY3QiLCJtZW51IiwidGhlbWUiLCJpc1RoZXJlTGlua3MiLCJsZW5ndGgiLCJmcm9udGl0eSIsIm1vZGUiLCJtYXAiLCJuYW1lIiwibGluayIsInJvdXRlciIsInVuZGVmaW5lZCIsIk1lbnVPdmVybGF5IiwiTWVudUNvbnRlbnQiLCJNZW51TGluayIsIkxpbmsiLCJjb25uZWN0IiwiaW5qZWN0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2dnREFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxLQUFNQSxVQUFTLENBQUcsTUFBa0IsSUFBWkMsTUFBWSxtQkFDbEMsS0FBTSxDQUFFQyxLQUFGLEVBQVlDLDJEQUFVLEVBQTVCLENBQ0EsS0FBTSxDQUFFQyxJQUFGLEVBQVdGLEtBQUssQ0FBQ0csS0FBdkIsQ0FDQSxLQUFNQyxhQUFZLENBQUcsQ0FBQUYsSUFBSSxPQUFKLEVBQUFBLElBQUksU0FBSixRQUFBQSxJQUFJLENBQUVHLE1BQU4sRUFBZSxDQUFwQyxDQUVBLE1BQ0UsOEdBQVNOLEtBQVQsZ0JBQ0dDLEtBQUssQ0FBQ00sUUFBTixDQUFlQyxJQUFmLEdBQXdCLEtBQXhCLEVBQWlDLHVFQUFDLFdBQUQsSUFEcEMsQ0FFRSx1RUFBQyxXQUFELEVBQWEsRUFBRSxDQUFDLEtBQWhCLFVBQ0dILFlBQVksRUFDWEYsSUFBSSxDQUFDTSxHQUFMLENBQVMsQ0FBQyxDQUFDQyxJQUFELENBQU9DLElBQVAsQ0FBRCxHQUNQLHVFQUFDLFFBQUQsRUFFRSxJQUFJLENBQUVBLElBRlIsQ0FHRSxlQUFjVixLQUFLLENBQUNXLE1BQU4sQ0FBYUQsSUFBYixHQUFzQkEsSUFBdEIsQ0FBNkIsTUFBN0IsQ0FBc0NFLFNBSHRELFVBS0dILElBTEgsRUFDT0EsSUFEUCxDQURGLENBRkosRUFGRixJQURGLENBaUJELENBdEJELENBd0JBLEtBQU1JLFlBQVcsaXZGQUFqQixDQVdBLEtBQU1DLFlBQVcsZ3FGQUFqQixDQUtBLEtBQU1DLFNBQVEsQ0FBRyxvRUFBTSxDQUFDQyw2Q0FBUCx1REFBSCxvdEZBQWQsQ0FtQmVDLHVIQUFPLENBQUNuQixTQUFELENBQVksQ0FBRW9CLFdBQVcsQ0FBRSxLQUFmLENBQVosQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuY29uc3QgTWVudU1vZGFsID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb25uZWN0KCk7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnU/Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+XG4gICAgICB7c3RhdGUuZnJvbnRpdHkubW9kZSAhPT0gXCJhbXBcIiAmJiA8TWVudU92ZXJsYXkgLz59XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmM0YztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/header/menu-modal.js\n");

/***/ })

})