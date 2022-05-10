(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./resources/assets/images/page401.svg":
/*!*********************************************!*\
  !*** ./resources/assets/images/page401.svg ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "/images/page401.svg?f475de99b471caf81e41bad65c57498e";

/***/ }),

/***/ "./resources/js/pages/Auth/PaymentVerification.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Auth/PaymentVerification.vue + 4 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/PaymentVerification.vue?vue&type=template&id=74667bc3&
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
          _c("v-card-text", [
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "h1",
                  {
                    staticClass: "text-danger mb-5",
                    domProps: {
                      textContent: _vm._s(
                        _vm.responseMessage == ""
                          ? this.$t("general.checkPaymentRunning")
                          : _vm.responseMessage
                      )
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " + _vm._s(_vm.responseMessage)
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(_vm.$t("auth.returnToMain")))]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: { name: "home" } } }, [
                  _vm._v(_vm._s(_vm.$t("topNav.home")) + "\n                ")
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


// CONCATENATED MODULE: ./resources/js/pages/Auth/PaymentVerification.vue?vue&type=template&id=74667bc3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/PaymentVerification.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PaymentVerificationvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      name: "PaymentVerification",
      img: __webpack_require__(/*! ../../../assets/images/page401.svg */ "./resources/assets/images/page401.svg"),
      responseMessage: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    var query = this.$router.currentRoute.query;

    if (query.paymentId != null && query.transaction_id != null) {
      axios.get('/api/payment/checkPayment', {
        params: query
      }).then(function (res) {
        var status = res.data.data.original.data.Data.InvoiceStatus === "Paid";

        if (status) {
          _this.showSuccessMessage(_this.$t("general.paymentRouteSuccess"));

          _this.$router.push({
            name: "c19"
          });
        } else {
          _this.showErrorMessage(_this.$t('general.error'));

          _this.responseMessage = _this.$t('general.error');
        }
      })["catch"](function (error) {
        _this.responseMessage = _this.$t('general.paymentFailedWithError') + error.response.data.message;

        _this.showErrorMessage(error.response.data.message);
      });
    } else {
      this.responseMessage = this.$t('general.paymentFailedWithError') + this.showErrorMessage(this.$t("general.paymentRouteFail"));
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./resources/js/pages/Auth/PaymentVerification.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_PaymentVerificationvue_type_script_lang_js_ = (PaymentVerificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Auth/PaymentVerification.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Auth_PaymentVerificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




installComponents_default()(component, {VCard: VCard["VCard"],VCardText: VCard["VCardText"],VContainer: VGrid["VContainer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/PaymentVerification.vue"
/* harmony default export */ var PaymentVerification = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);