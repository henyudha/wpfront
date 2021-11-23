webpackHotUpdate("wpfront",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */ /* legacy menu default from mars-theme */ // const Nav = ({ state }) => (\n//   <NavContainer>\n//     {state.theme.menu.map(([name, link]) => {\n//       // Check if the link matched the current page url\n//       const data = state.source.get(state.router.link);\n//       const isCurrentPage = data.route === link;\n//       return (\n//         <NavItem key={name}>\n//           {/* If link url is the current page, add `aria-current` for a11y */}\n//           <Link link={link} aria-current={isCurrentPage ? \"page\" : undefined}>\n//             {name}\n//           </Link>\n//         </NavItem>\n//       );\n//     })}\n//   </NavContainer>\n// );\nconst Nav=({state})=>{const items=state.source.get(`/menu/${state.theme.menuUrl}/`).items;// console.log('ITEMS:', items)\nreturn Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(NavContainer,{children:items.map(item=>{if(!item.child_items){return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(NavItem,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:item.url,children:item.title})},item.ID);}else{const childItems=item.child_items;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(NavItemWithChild,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(NavItem,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:item.url,children:item.title})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(ChildMenu,{children:childItems.map(childItem=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(NavItem,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:childItem.url,children:chileItem.title})},childItem.ID);})})]},item.ID);}})});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Nav));const NavContainer=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"nav\", false?undefined:{target:\"e1bkzu9n1\",label:\"NavContainer\"})( false?undefined:{name:\"25p2lr\",styles:\"list-style:none;display:flex;width:1130px;justify-content:center;max-width:100%;box-sizing:border-box;padding:0 24px;margin:10px 0 0;overflow-x:auto;border-bottom:1px solid #cccccc;@media screen and (max-width: 560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FK0IiLCJmaWxlIjoiL1VzZXJzL2ltYWMvTm9kZXByb2plY3RzL3dwZnJvbnQvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7ICBcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5cbi8qIGxlZ2FjeSBtZW51IGRlZmF1bHQgZnJvbSBtYXJzLXRoZW1lICovXG4vLyBjb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4vLyAgIDxOYXZDb250YWluZXI+XG4vLyAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbi8vICAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbi8vICAgICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbi8vICAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBkYXRhLnJvdXRlID09PSBsaW5rO1xuXG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuLy8gICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4vLyAgICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuLy8gICAgICAgICAgICAge25hbWV9XG4vLyAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8L05hdkl0ZW0+XG4vLyAgICAgICApO1xuLy8gICAgIH0pfVxuLy8gICA8L05hdkNvbnRhaW5lcj5cbi8vICk7XG5cbmNvbnN0IE5hdiA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLm1lbnVVcmx9L2ApLml0ZW1zO1xuICAvLyBjb25zb2xlLmxvZygnSVRFTVM6JywgaXRlbXMpXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLmNoaWxkX2l0ZW1zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOYXZJdGVtIGtleT17aXRlbS5JRH0+XG4gICAgICAgICAgICAgIDxMaW5rIGxpbms9e2l0ZW0udXJsfT57aXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZEl0ZW1zID0gaXRlbS5jaGlsZF9pdGVtcztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdkl0ZW1XaXRoQ2hpbGQga2V5PXtpdGVtLklEfT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgbGluaz17aXRlbS51cmx9PntpdGVtLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8Q2hpbGRNZW51PlxuICAgICAgICAgICAgICAgIHtjaGlsZEl0ZW1zLm1hcCgoY2hpbGRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBrZXk9e2NoaWxkSXRlbS5JRH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17Y2hpbGRJdGVtLnVybH0+e2NoaWxlSXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQ2hpbGRNZW51PlxuICAgICAgICAgICAgPC9OYXZJdGVtV2l0aENoaWxkPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgIDwvTmF2Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTEzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxMnB4IDZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwNTE1MDQ7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const NavItem=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"div\", false?undefined:{target:\"e1bkzu9n0\",label:\"NavItem\"})( false?undefined:{name:\"mf2lq5\",styles:\"padding:0;margin:0 12px 6px;box-sizing:border-box;flex-shrink:0;&>a{display:inline-block;line-height:2em;&[aria-current=\\\"page\\\"]{font-weight:bold;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL05vZGVwcm9qZWN0cy93cGZyb250L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGMEIiLCJmaWxlIjoiL1VzZXJzL2ltYWMvTm9kZXByb2plY3RzL3dwZnJvbnQvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7ICBcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5cbi8qIGxlZ2FjeSBtZW51IGRlZmF1bHQgZnJvbSBtYXJzLXRoZW1lICovXG4vLyBjb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4vLyAgIDxOYXZDb250YWluZXI+XG4vLyAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbi8vICAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbi8vICAgICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbi8vICAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBkYXRhLnJvdXRlID09PSBsaW5rO1xuXG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuLy8gICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4vLyAgICAgICAgICAgPExpbmsgbGluaz17bGlua30gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuLy8gICAgICAgICAgICAge25hbWV9XG4vLyAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICA8L05hdkl0ZW0+XG4vLyAgICAgICApO1xuLy8gICAgIH0pfVxuLy8gICA8L05hdkNvbnRhaW5lcj5cbi8vICk7XG5cbmNvbnN0IE5hdiA9ICh7IHN0YXRlIH0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLm1lbnVVcmx9L2ApLml0ZW1zO1xuICAvLyBjb25zb2xlLmxvZygnSVRFTVM6JywgaXRlbXMpXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtLmNoaWxkX2l0ZW1zKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOYXZJdGVtIGtleT17aXRlbS5JRH0+XG4gICAgICAgICAgICAgIDxMaW5rIGxpbms9e2l0ZW0udXJsfT57aXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZEl0ZW1zID0gaXRlbS5jaGlsZF9pdGVtcztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdkl0ZW1XaXRoQ2hpbGQga2V5PXtpdGVtLklEfT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgbGluaz17aXRlbS51cmx9PntpdGVtLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8Q2hpbGRNZW51PlxuICAgICAgICAgICAgICAgIHtjaGlsZEl0ZW1zLm1hcCgoY2hpbGRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBrZXk9e2NoaWxkSXRlbS5JRH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgbGluaz17Y2hpbGRJdGVtLnVybH0+e2NoaWxlSXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvQ2hpbGRNZW51PlxuICAgICAgICAgICAgPC9OYXZJdGVtV2l0aENoaWxkPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgIDwvTmF2Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTEzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxMnB4IDZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAvLyBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwNTE1MDQ7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwiaXRlbXMiLCJzb3VyY2UiLCJnZXQiLCJ0aGVtZSIsIm1lbnVVcmwiLCJtYXAiLCJpdGVtIiwiY2hpbGRfaXRlbXMiLCJ1cmwiLCJ0aXRsZSIsIklEIiwiY2hpbGRJdGVtcyIsImNoaWxkSXRlbSIsImNoaWxlSXRlbSIsImNvbm5lY3QiLCJOYXZDb250YWluZXIiLCJOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FSQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyxDQUVBLHlDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLEtBQU1BLElBQUcsQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQ3pCLEtBQU1DLE1BQUssQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBa0IsU0FBUUgsS0FBSyxDQUFDSSxLQUFOLENBQVlDLE9BQVEsR0FBOUMsRUFBa0RKLEtBQWhFLENBQ0E7QUFDQSxNQUNFLHdFQUFDLFlBQUQsV0FDR0EsS0FBSyxDQUFDSyxHQUFOLENBQVdDLElBQUQsRUFBVSxDQUNuQixHQUFJLENBQUNBLElBQUksQ0FBQ0MsV0FBVixDQUF1QixDQUNyQixNQUNFLHdFQUFDLE9BQUQsV0FDRSx1RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRUQsSUFBSSxDQUFDRSxHQUFqQixVQUF1QkYsSUFBSSxDQUFDRyxLQUE1QixFQURGLEVBQWNILElBQUksQ0FBQ0ksRUFBbkIsQ0FERixDQUtELENBTkQsSUFNTyxDQUNMLEtBQU1DLFdBQVUsQ0FBR0wsSUFBSSxDQUFDQyxXQUF4QixDQUNBLE1BQ0UseUVBQUMsZ0JBQUQsWUFDRSx1RUFBQyxPQUFELFdBQ0UsdUVBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUVELElBQUksQ0FBQ0UsR0FBakIsVUFBdUJGLElBQUksQ0FBQ0csS0FBNUIsRUFERixFQURGLENBSUUsdUVBQUMsU0FBRCxXQUNHRSxVQUFVLENBQUNOLEdBQVgsQ0FBZ0JPLFNBQUQsRUFBZSxDQUM3QixNQUNFLHdFQUFDLE9BQUQsV0FDRSx1RUFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRUEsU0FBUyxDQUFDSixHQUF0QixVQUE0QkssU0FBUyxDQUFDSixLQUF0QyxFQURGLEVBQWNHLFNBQVMsQ0FBQ0YsRUFBeEIsQ0FERixDQUtELENBTkEsQ0FESCxFQUpGLEdBQXVCSixJQUFJLENBQUNJLEVBQTVCLENBREYsQ0FnQkQsQ0FDRixDQTFCQSxDQURILEVBREYsQ0ErQkQsQ0FsQ0QsQ0FvQ2VJLHVIQUFPLENBQUNoQixHQUFELENBQXRCLEVBRUEsS0FBTWlCLGFBQVksa25KQUFsQixDQWlCQSxLQUFNQyxRQUFPLDhvSkFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiOyAgXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuXG4vKiBsZWdhY3kgbWVudSBkZWZhdWx0IGZyb20gbWFycy10aGVtZSAqL1xuLy8gY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxuLy8gICA8TmF2Q29udGFpbmVyPlxuLy8gICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiB7XG4vLyAgICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4vLyAgICAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4vLyAgICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gZGF0YS5yb3V0ZSA9PT0gbGluaztcblxuLy8gICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbi8vICAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuLy8gICAgICAgICAgIDxMaW5rIGxpbms9e2xpbmt9IGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbi8vICAgICAgICAgICAgIHtuYW1lfVxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9OYXZJdGVtPlxuLy8gICAgICAgKTtcbi8vICAgICB9KX1cbi8vICAgPC9OYXZDb250YWluZXI+XG4vLyApO1xuXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5tZW51VXJsfS9gKS5pdGVtcztcbiAgLy8gY29uc29sZS5sb2coJ0lURU1TOicsIGl0ZW1zKVxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbS5jaGlsZF9pdGVtcykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2SXRlbSBrZXk9e2l0ZW0uSUR9PlxuICAgICAgICAgICAgICA8TGluayBsaW5rPXtpdGVtLnVybH0+e2l0ZW0udGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRJdGVtcyA9IGl0ZW0uY2hpbGRfaXRlbXM7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOYXZJdGVtV2l0aENoaWxkIGtleT17aXRlbS5JRH0+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e2l0ZW0udXJsfT57aXRlbS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPENoaWxkTWVudT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRJdGVtcy5tYXAoKGNoaWxkSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0ga2V5PXtjaGlsZEl0ZW0uSUR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9e2NoaWxkSXRlbS51cmx9PntjaGlsZUl0ZW0udGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0NoaWxkTWVudT5cbiAgICAgICAgICAgIDwvTmF2SXRlbVdpdGhDaGlsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KX1cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDExMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTJweCA2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDUxNTA0O1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})