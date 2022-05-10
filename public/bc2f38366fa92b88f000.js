(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./resources/js/pages/Customer/payment/PaymentWays.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Customer/payment/PaymentWays.vue + 4 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/payment/PaymentWays.vue?vue&type=template&id=2f6e7439&
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
          _c(
            "v-card-text",
            [
              _c("div", { staticClass: "text-center my-4" }, [
                _c("h3", [_vm._v(_vm._s(_vm.$t("payment.chooseMethod")))])
              ]),
              _vm._v(" "),
              _vm._l(_vm.paymentWays, function(item, i) {
                return _c(
                  "v-row",
                  { key: i },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "3", xl: "2" } },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-img", {
                              attrs: {
                                src: item.ImageUrl,
                                height: "5rem",
                                contain: ""
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-btn", {
                                  attrs: { text: "" },
                                  domProps: {
                                    textContent: _vm._s(
                                      _vm.$i18n.locale == "en"
                                        ? item.PaymentMethodAr
                                        : item.PaymentMethodEn
                                    )
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
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


// CONCATENATED MODULE: ./resources/js/pages/Customer/payment/PaymentWays.vue?vue&type=template&id=2f6e7439&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/payment/PaymentWays.vue?vue&type=script&lang=js&
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
//
/* harmony default export */ var PaymentWaysvue_type_script_lang_js_ = ({
  name: "paymentWays",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Transactions" : "عمليات الدفع"
    };
  },
  data: function data() {
    return {
      paymentWays: []
    };
  },
  methods: {
    load: function load() {
      axios.post("/api/").then(function (res) {//
      })["catch"](function (err) {//
      });
    },
    created: function created() {
      this.load();
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Customer/payment/PaymentWays.vue?vue&type=script&lang=js&
 /* harmony default export */ var payment_PaymentWaysvue_type_script_lang_js_ = (PaymentWaysvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Customer/payment/PaymentWays.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  payment_PaymentWaysvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCol: VGrid["VCol"],VImg: VImg["VImg"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/payment/PaymentWays.vue"
/* harmony default export */ var PaymentWays = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);