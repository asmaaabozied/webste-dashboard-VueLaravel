(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./resources/js/pages/Customer/order/ChooseOrderType.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Customer/order/ChooseOrderType.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/ChooseOrderType.vue?vue&type=template&id=24c84748&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-text", [
            _c("div", { staticClass: "text-center my-4" }, [
              _c("h3", [_vm._v(_vm._s(_vm.$t("request.chooseOrderType")))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-row justify-center" },
              [
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-1",
                    attrs: { to: { name: "c1" }, rounded: "" }
                  },
                  [_vm._v(_vm._s(_vm.$t("request.maintenancewWarranty")))]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    staticClass: "mx-1",
                    attrs: { to: { name: "c3" }, rounded: "" }
                  },
                  [_vm._v(_vm._s(_vm.$t("request.maintenancenWarranty")))]
                )
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


// CONCATENATED MODULE: ./resources/js/pages/Customer/order/ChooseOrderType.vue?vue&type=template&id=24c84748&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/ChooseOrderType.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ChooseOrderTypevue_type_script_lang_js_ = ({
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Create Maintenance Order" : "إنشاء طلب صيانة"
    };
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Customer/order/ChooseOrderType.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_ChooseOrderTypevue_type_script_lang_js_ = (ChooseOrderTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Customer/order/ChooseOrderType.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  order_ChooseOrderTypevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/order/ChooseOrderType.vue"
/* harmony default export */ var ChooseOrderType = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);