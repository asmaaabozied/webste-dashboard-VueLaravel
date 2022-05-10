(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./resources/js/pages/ConsultManager/Order.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/ConsultManager/Order.vue + 4 modules ***!
  \*****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VStepper/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultManager/Order.vue?vue&type=template&id=4b701a6e&scoped=true&
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
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("consultation.order")))]),
          _vm._v(" "),
          _c(
            "v-stepper",
            {
              model: {
                value: _vm.step,
                callback: function($$v) {
                  _vm.step = $$v
                },
                expression: "step"
              }
            },
            [
              _c(
                "v-stepper-header",
                [
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.step > 0, step: "0" } },
                    [_vm._v(_vm._s(_vm.$t("general.received")))]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-stepper-step",
                    { attrs: { complete: _vm.step > 1, step: "1" } },
                    [_vm._v(_vm._s(_vm.$t("general.processing")))]
                  ),
                  _vm._v(" "),
                  _vm.step !== 4 ? _c("v-divider") : _vm._e(),
                  _vm._v(" "),
                  _vm.step !== 4
                    ? _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.step > 2, step: "2" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.inMaintenece")) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.step !== 4 ? _c("v-divider") : _vm._e(),
                  _vm._v(" "),
                  _vm.step !== 4
                    ? _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.step > 4, step: "3" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.ready")) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.step == 4 ? _c("v-divider") : _vm._e(),
                  _vm._v(" "),
                  _vm.step == 4
                    ? _c(
                        "v-stepper-step",
                        { attrs: { complete: _vm.step == 4, step: "4" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("myRequests.declined")) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "ma-4" },
            [
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("consultation.problemDescription")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _vm._v(_vm._s(_vm.description))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("general.name")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _vm._v(_vm._s(_vm.user.user_name))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("admin.phone")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _vm._v(_vm._s(_vm.user.customer.phone))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.status).value,
                [3, 4, 5, 6]
              )
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: { click: _vm.assignEmp }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.assign")) + "\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.status).value,
                [3, 4, 5, 6]
              )
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.finishDialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.finishOrder")) + "\n            "
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.finishDialog,
            callback: function($$v) {
              _vm.finishDialog = $$v
            },
            expression: "finishDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(_vm._s(_vm.$t("general.finishOrder")))
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.$t("general.isSure")))]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.step < 3
                    ? _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: { click: _vm.confirmFinishItem }
                        },
                        [_vm._v(_vm._s(_vm.$t("general.sure")))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.step < 3
                    ? _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              _vm.finishDialog = false
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("general.close")))]
                      )
                    : _vm._e()
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/ConsultManager/Order.vue?vue&type=template&id=4b701a6e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultManager/Order.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Ordervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      icons: {},
      id: this.$route.params.id,
      step: null,
      user: {
        user_name: '',
        customer: {}
      },
      status: null,
      description: null,
      finishDialog: false
    };
  },
  methods: {
    assignEmp: function assignEmp() {
      this.$router.push({
        name: "cm4",
        params: {
          id: this.$route.params.internalId
        }
      });
    },
    load: function load() {
      var _this = this;

      axios.get("/api/ConsultantOrder/".concat(this.id)).then(function (res) {
        _this.user = res.data.data.order_info['consultant_order'].order_info['user_info'];
        _this.description = res.data.data.description;
        _this.status = res.data.data.order_info.status;
        _this.step = _this.$getOrderStatus(res.data.data.order_info.status).value;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    confirmFinishItem: function confirmFinishItem() {
      var _this2 = this;

      axios.put("/api/ConsultantOrder/".concat(this.id), {
        status: 3
      }).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "info"
        });

        _this2.$router.go(-1);
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this2.finishDialog = false;
      });
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/ConsultManager/Order.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConsultManager_Ordervue_type_script_lang_js_ = (Ordervue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/index.js + 1 modules
var VDivider = __webpack_require__("./node_modules/vuetify/lib/components/VDivider/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js + 3 modules
var VStepper = __webpack_require__("./node_modules/vuetify/lib/components/VStepper/index.js");

// CONCATENATED MODULE: ./resources/js/pages/ConsultManager/Order.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  ConsultManager_Ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4b701a6e",
  null
  
)

/* vuetify-loader */














installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VDivider: VDivider["VDivider"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"],VStepper: VStepper["VStepper"],VStepperHeader: VStepper["VStepperHeader"],VStepperStep: VStepper["VStepperStep"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ConsultManager/Order.vue"
/* harmony default export */ var Order = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);