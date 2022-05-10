(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./resources/js/pages/Agent/PaymentInfo.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Agent/PaymentInfo.vue + 4 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/PaymentInfo.vue?vue&type=template&id=55265471&
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
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("general.details")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6" } }, [
                    _vm._v(_vm._s(_vm.$t("general.orderId")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6" } }, [
                    _vm._v(_vm._s(_vm.orderId))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "6" } }, [
                    _vm._v(_vm._s(_vm.$t("general.price")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "6" } }, [
                    _vm._v(_vm._s(_vm.price))
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _c("v-btn", { on: { click: _vm.pay } }, [
                _vm._v(_vm._s(_vm.$t("payment.pay")))
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Agent/PaymentInfo.vue?vue&type=template&id=55265471&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/PaymentInfo.vue?vue&type=script&lang=js&
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
//
/* harmony default export */ var PaymentInfovue_type_script_lang_js_ = ({
  props: {
    id: 0
  },
  data: function data() {
    return {
      id: 0,
      orderId: 0,
      price: 0
    };
  },
  methods: {
    load: function load() {
      axios.get("").then(function (res) {})["catch"](function () {});
    },
    pay: function pay() {
      this.$router.push({
        name: "payment"
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {// vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Agent/PaymentInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Agent_PaymentInfovue_type_script_lang_js_ = (PaymentInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Agent/PaymentInfo.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Agent_PaymentInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Agent/PaymentInfo.vue"
/* harmony default export */ var PaymentInfo = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);