(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./resources/assets/images/page401.svg":
/*!*********************************************!*\
  !*** ./resources/assets/images/page401.svg ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "/images/page401.svg?f475de99b471caf81e41bad65c57498e";

/***/ }),

/***/ "./resources/js/pages/Auth/Page401.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Auth/Page401.vue + 4 modules ***!
  \*********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Page401.vue?vue&type=template&id=502a3570&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      staticClass: "d-flex align-center justify-center",
      attrs: { "fill-height": "" }
    },
    [
      _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c("v-img", {
            attrs: { src: _vm.img, height: "20rem", contain: "" }
          }),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c("h2", [_vm._v(_vm._s(_vm.$t("auth.error401")))]),
                _vm._v(" "),
                _c("div", [
                  _c("h4", [_vm._v(_vm._s(_vm.$t("auth.unauthorized")))])
                ]),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(_vm.$t("auth.returnToMain")))]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: { name: "home" } } }, [
                  _vm._v(_vm._s(_vm.$t("topNav.home")))
                ])
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Auth/Page401.vue?vue&type=template&id=502a3570&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Page401.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Page401vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      img: __webpack_require__(/*! ../../../assets/images/page401.svg */ "./resources/assets/images/page401.svg")
    };
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Auth/Page401.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_Page401vue_type_script_lang_js_ = (Page401vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Auth/Page401.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Auth_Page401vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["VCard"],VCardText: VCard["VCardText"],VContainer: VGrid["VContainer"],VImg: VImg["VImg"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/Page401.vue"
/* harmony default export */ var Page401 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);