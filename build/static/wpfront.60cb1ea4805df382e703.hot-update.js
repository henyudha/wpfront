webpackHotUpdate("wpfront",{

/***/ "./packages/mars-theme/src/components/header/menu-modal.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/header/menu-modal.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * The modal containing the mobile menu items.\n *\n * @param props - The props passed to the component from parent.\n * @returns A React component.\n */const MenuModal=({state})=>{const items=state.source.get(`/menu/${state.theme.menuUrl}/`).items;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(MenuOverlay,{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(MenuContent,{as:\"nav\",children:items.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(MenuLink,{link:item.url,children:item.title},item.ID);})})]});};// const MenuModal = ({ ...props }) => {\n//   const { state } = useConnect();\n//   const { menu } = state.theme;\n//   const isThereLinks = menu?.length > 0;\n//   return (\n//     <div {...props}>\n//       {state.frontity.mode !== \"amp\" && <MenuOverlay />}\n//       <MenuContent as=\"nav\">\n//         {isThereLinks &&\n//           menu.map(([name, link]) => (\n//             <MenuLink\n//               key={name}\n//               link={link}\n//               aria-current={state.router.link === link ? \"page\" : undefined}\n//             >\n//               {name}\n//             </MenuLink>\n//           ))}\n//       </MenuContent>\n//     </div>\n//   );\n// };\nconst MenuOverlay=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e4vf3y12\",label:\"MenuOverlay\"})( false?undefined:{name:\"1nap6to\",styles:\"background-color:hsl(116, 0%, 80%);width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW4vTm9kZXByby93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQ4QiIsImZpbGUiOiIvVXNlcnMvaGVuL05vZGVwcm8vd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuXG4gY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUubWVudVVybH0vYCkuaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUxpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBjb25zdCBNZW51TW9kYWwgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4vLyAgIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbm5lY3QoKTtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudT8ubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgey4uLnByb3BzfT5cbi8vICAgICAgIHtzdGF0ZS5mcm9udGl0eS5tb2RlICE9PSBcImFtcFwiICYmIDxNZW51T3ZlcmxheSAvPn1cbi8vICAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuLy8gICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4vLyAgICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuLy8gICAgICAgICAgICAgPE1lbnVMaW5rXG4vLyAgICAgICAgICAgICAgIGtleT17bmFtZX1cbi8vICAgICAgICAgICAgICAgbGluaz17bGlua31cbi8vICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICB7bmFtZX1cbi8vICAgICAgICAgICAgIDwvTWVudUxpbms+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICA8L01lbnVDb250ZW50PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTE2LCAwJSwgODAlKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuContent=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e4vf3y11\",label:\"MenuContent\"})( false?undefined:{name:\"g0s07w\",styles:\"z-index:3;padding-top:2rem\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW4vTm9kZXByby93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0U4QiIsImZpbGUiOiIvVXNlcnMvaGVuL05vZGVwcm8vd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuXG4gY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUubWVudVVybH0vYCkuaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUxpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBjb25zdCBNZW51TW9kYWwgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4vLyAgIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbm5lY3QoKTtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudT8ubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgey4uLnByb3BzfT5cbi8vICAgICAgIHtzdGF0ZS5mcm9udGl0eS5tb2RlICE9PSBcImFtcFwiICYmIDxNZW51T3ZlcmxheSAvPn1cbi8vICAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuLy8gICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4vLyAgICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuLy8gICAgICAgICAgICAgPE1lbnVMaW5rXG4vLyAgICAgICAgICAgICAgIGtleT17bmFtZX1cbi8vICAgICAgICAgICAgICAgbGluaz17bGlua31cbi8vICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICB7bmFtZX1cbi8vICAgICAgICAgICAgIDwvTWVudUxpbms+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICA8L01lbnVDb250ZW50PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTE2LCAwJSwgODAlKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const MenuLink=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], false?undefined:{target:\"e4vf3y10\",label:\"MenuLink\"})( false?undefined:{name:\"1jcobyf\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1rem 0;&:hover,&:focus{background-color:rgba(0, 0, 0, 0.05);}&[aria-current=\\\"page\\\"]{color:#fff;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZW4vTm9kZXByby93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUU2QiIsImZpbGUiOiIvVXNlcnMvaGVuL05vZGVwcm8vd3Bmcm9udC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCB1c2VDb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuXG4vKipcbiAqIFRoZSBtb2RhbCBjb250YWluaW5nIHRoZSBtb2JpbGUgbWVudSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBUaGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnJvbSBwYXJlbnQuXG4gKiBAcmV0dXJucyBBIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuXG4gY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBpdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUubWVudVVybH0vYCkuaXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWVudUxpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9NZW51TGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBjb25zdCBNZW51TW9kYWwgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4vLyAgIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbm5lY3QoKTtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudT8ubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgey4uLnByb3BzfT5cbi8vICAgICAgIHtzdGF0ZS5mcm9udGl0eS5tb2RlICE9PSBcImFtcFwiICYmIDxNZW51T3ZlcmxheSAvPn1cbi8vICAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuLy8gICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4vLyAgICAgICAgICAgbWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4gKFxuLy8gICAgICAgICAgICAgPE1lbnVMaW5rXG4vLyAgICAgICAgICAgICAgIGtleT17bmFtZX1cbi8vICAgICAgICAgICAgICAgbGluaz17bGlua31cbi8vICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gbGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICB7bmFtZX1cbi8vICAgICAgICAgICAgIDwvTWVudUxpbms+XG4vLyAgICAgICAgICAgKSl9XG4vLyAgICAgICA8L01lbnVDb250ZW50PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTE2LCAwJSwgODAlKTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLy8gc3R5bGVzIGZvciBhY3RpdmUgbGlua1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5gO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCwgeyBpbmplY3RQcm9wczogZmFsc2UgfSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});// export default connect(MenuModal, { injectProps: false });\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2hlYWRlci9tZW51LW1vZGFsLmpzP2UxMjYiXSwibmFtZXMiOlsiTWVudU1vZGFsIiwic3RhdGUiLCJpdGVtcyIsInNvdXJjZSIsImdldCIsInRoZW1lIiwibWVudVVybCIsIm1hcCIsIml0ZW0iLCJ1cmwiLCJ0aXRsZSIsIklEIiwiTWVudU92ZXJsYXkiLCJNZW51Q29udGVudCIsIk1lbnVMaW5rIiwiTGluayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7O3FSQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUVDLEtBQU1BLFVBQVMsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQ2hDLEtBQU1DLE1BQUssQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBa0IsU0FBUUgsS0FBSyxDQUFDSSxLQUFOLENBQVlDLE9BQVEsR0FBOUMsRUFBa0RKLEtBQWhFLENBRUEsTUFDRSx3SkFDRSx1RUFBQyxXQUFELElBREYsQ0FFRSx1RUFBQyxXQUFELEVBQWEsRUFBRSxDQUFDLEtBQWhCLFVBQ0dBLEtBQUssQ0FBQ0ssR0FBTixDQUFXQyxJQUFELEVBQVUsQ0FDbkIsTUFDRSx3RUFBQyxRQUFELEVBQXdCLElBQUksQ0FBRUEsSUFBSSxDQUFDQyxHQUFuQyxVQUNHRCxJQUFJLENBQUNFLEtBRFIsRUFBZUYsSUFBSSxDQUFDRyxFQUFwQixDQURGLENBS0QsQ0FOQSxDQURILEVBRkYsR0FERixDQWNELENBakJBLENBbUJEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsS0FBTUMsWUFBVywrNkdBQWpCLENBV0EsS0FBTUMsWUFBVyxrMUdBQWpCLENBS0EsS0FBTUMsU0FBUSxDQUFHLG9FQUFNLENBQUNDLDZDQUFQLHVEQUFILHU0R0FBZCxDQW1CQTtBQUNlQyx1SEFBTyxDQUFDaEIsU0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaGVhZGVyL21lbnUtbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QsIHVzZUNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5cbi8qKlxuICogVGhlIG1vZGFsIGNvbnRhaW5pbmcgdGhlIG1vYmlsZSBtZW51IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSBwcm9wcyAtIFRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBmcm9tIHBhcmVudC5cbiAqIEByZXR1cm5zIEEgUmVhY3QgY29tcG9uZW50LlxuICovXG5cbiBjb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5tZW51VXJsfS9gKS5pdGVtcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51TGluayBrZXk9e2l0ZW0uSUR9IGxpbms9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIGNvbnN0IE1lbnVNb2RhbCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbi8vICAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29ubmVjdCgpO1xuLy8gICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuLy8gICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51Py5sZW5ndGggPiAwO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiB7Li4ucHJvcHN9PlxuLy8gICAgICAge3N0YXRlLmZyb250aXR5Lm1vZGUgIT09IFwiYW1wXCIgJiYgPE1lbnVPdmVybGF5IC8+fVxuLy8gICAgICAgPE1lbnVDb250ZW50IGFzPVwibmF2XCI+XG4vLyAgICAgICAgIHtpc1RoZXJlTGlua3MgJiZcbi8vICAgICAgICAgICBtZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiAoXG4vLyAgICAgICAgICAgICA8TWVudUxpbmtcbi8vICAgICAgICAgICAgICAga2V5PXtuYW1lfVxuLy8gICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuLy8gICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBsaW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgIHtuYW1lfVxuLy8gICAgICAgICAgICAgPC9NZW51TGluaz5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgIDwvTWVudUNvbnRlbnQ+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMTYsIDAlLCA4MCUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgfVxuICAvLyBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rXG4gICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbmA7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWVudU1vZGFsLCB7IGluamVjdFByb3BzOiBmYWxzZSB9KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWVudU1vZGFsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/header/menu-modal.js\n");

/***/ })

})