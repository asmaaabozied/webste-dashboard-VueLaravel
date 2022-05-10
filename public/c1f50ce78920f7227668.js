(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./resources/js/pages/Auth/confirmCode.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Auth/confirmCode.vue + 4 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/confirmCode.vue?vue&type=template&id=eda96522&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", [
    _c(
      "div",
      {
        staticClass: "d-flex flex-column justify-center",
        staticStyle: { height: "90vh", margin: "50px 0" }
      },
      [
        _c(
          "v-row",
          { attrs: { justify: "center" } },
          [
            _c(
              "v-col",
              { attrs: { cols: "12", md: "4", lg: "4" } },
              [
                _c(
                  "v-card",
                  { attrs: { width: "100%" } },
                  [
                    _c("v-card-title", { attrs: { "primary-title": "" } }, [
                      _vm._v(_vm._s(_vm.$t("auth.confirmAccoutn")))
                    ]),
                    _vm._v(" "),
                    _c("v-card-text", [
                      _c("div", {
                        staticClass: "mb-8 text-body-1",
                        domProps: {
                          textContent: _vm._s(_vm.$t("auth.confirmInt"))
                        }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "mb-8 text-body-1 red--text",
                        domProps: {
                          textContent: _vm._s(_vm.$t("auth.codeValidity"))
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("v-text-field", {
                            attrs: {
                              placeholder: _vm.$t("general.code"),
                              outlined: "",
                              rounded: "",
                              dense: "",
                              autocomplete: "off",
                              autocorrect: "off"
                            },
                            model: {
                              value: _vm.code,
                              callback: function($$v) {
                                _vm.code = $$v
                              },
                              expression: "code"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-12" }, [
                            _c("small", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.$t("auth.codeValidPeriod")
                                )
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "mb-12 d-inline",
                            domProps: {
                              textContent: _vm._s(_vm.$t("auth.noCodeYet"))
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "d-inline mx-2",
                              attrs: { text: "", small: "" },
                              on: { click: _vm.resendCode }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("auth.resendCode")) +
                                  "\n                            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      { staticClass: "mt-8 d-flex justify-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2",
                            attrs: { loading: _vm.isLoading },
                            on: { click: _vm.tryConfirm }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("general.confirm")) +
                                "\n                        "
                            )
                          ]
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
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Auth/confirmCode.vue?vue&type=template&id=eda96522&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/confirmCode.vue?vue&type=script&lang=js&
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
/* harmony default export */ var confirmCodevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      username: this.$route.params.username,
      code: null,
      isLoading: false
    };
  },
  methods: {
    tryConfirm: function tryConfirm() {
      var _this = this;

      if (this.username != null && this.code != null) {
        this.isLoading = true;
        var form = new FormData();
        form.append("confirmation_key", this.code);
        form.append("user_name", this.username);
        axios.post("/api/confirmCustomerCode", form).then(function (res) {
          _this.$router.push({
            name: "login"
          });
        })["catch"](function (err) {
          console.warn(err);
        })["finally"](function () {
          return _this.isLoading = false;
        });
      } else {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
      }
    },
    resendCode: function resendCode() {
      var _this2 = this;

      if (this.username != null && this.code != null) {
        var form = new FormData();
        form.append("user_name", this.username);
        axios.post("/api/reSendCustomerConfirmCode", form).then(function (res) {
          _this2.$notify({
            text: _this2.$t("general.success"),
            type: "info"
          });

          console.log("success resend");
        })["catch"](function (err) {
          console.warn(err);
        })["finally"](function () {
          return _this2.isLoading = false;
        });
      } else {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Auth/confirmCode.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_confirmCodevue_type_script_lang_js_ = (confirmCodevue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Auth/confirmCode.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Auth_confirmCodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VContainer: VGrid["VContainer"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/confirmCode.vue"
/* harmony default export */ var confirmCode = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);