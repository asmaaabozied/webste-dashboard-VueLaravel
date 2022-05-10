(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./resources/js/pages/Customer/order/OrderDetails.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Customer/order/OrderDetails.vue + 4 modules ***!
  \************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@babel/runtime/regenerator/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VRating/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VStepper/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextarea/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/OrderDetails.vue?vue&type=template&id=51e043a6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex justify-center" },
    [
      _c(
        "v-card",
        { attrs: { width: "90%" } },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("general.orderDetails")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
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
                        { attrs: { complete: _vm.step >= 0, step: "1" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.received")) + "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _vm.step !== 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 1, step: "2" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("general.processing")) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step !== 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 2, step: "3" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("general.inMaintenece")) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step !== 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 3, step: "3" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("general.ready")) + "\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step > 4 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step > 4
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 4, step: "4" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("myRequests.declined")) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step > 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step >= 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 5, step: "5" } },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("myRequests.declinedByCustomer")
                                ) + "\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step > 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step > 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 6, step: "5" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("myRequests.unfixedDevice")) +
                                  "\n          "
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
              _vm.appointment
                ? _c(
                    "v-row",
                    { staticStyle: { margin: "10px 0" } },
                    [
                      _c("v-col", { attrs: { cols: "4" } }, [
                        _vm._v(" " + _vm._s(_vm.$t("order.appointment")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "8", md: "4" } },
                        [
                          _vm.appointment
                            ? _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass:
                                        "d-flex flex-column justify-center"
                                    },
                                    [
                                      _c(
                                        "div",
                                        [
                                          _c(
                                            "v-icon",
                                            { staticClass: "mx-1" },
                                            [
                                              _vm._v(
                                                "mdi-calendar-blank-outline"
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "text-body-2",
                                        domProps: {
                                          textContent: _vm._s(
                                            _vm.appointment.date_start
                                          )
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-card-text", [
                                    _c(
                                      "div",
                                      { staticClass: "text-body-2" },
                                      [
                                        _c("v-icon", { staticClass: "mx-1" }, [
                                          _vm._v("mdi-clock-in")
                                        ]),
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(_vm.appointment.start_time) +
                                            "\n              "
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-body-2" },
                                      [
                                        _c("v-icon", { staticClass: "mx-1" }, [
                                          _vm._v("mdi-clock-in")
                                        ]),
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(_vm.appointment.end_time) +
                                            "\n              "
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-body-2" },
                                      [
                                        _c("v-icon", { staticClass: "mx-1" }, [
                                          _vm._v(" mdi-office-building-marker")
                                        ]),
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(
                                              _vm.$i18n.locale == "en"
                                                ? _vm.appointment.branch.name
                                                : _vm.appointment.branch.name_ar
                                            ) +
                                            "\n              "
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "my-1" },
                [
                  _c("v-col", { attrs: { md: "8", lg: "8", xl: "8" } }, [
                    _c("h3")
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { md: "4", lg: "4", xl: "4" } })
                ],
                1
              ),
              _vm._v(" "),
              _vm.step == 4
                ? _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "8" } }, [
                        _c("h3", [_vm._v(_vm._s(_vm.$t("request.leaveRate")))])
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "4" } }, [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c("div", [
                              _vm._v(
                                _vm._s(_vm.$t("request.ServiceQualityRating"))
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-rating", {
                              attrs: {
                                "full-icon": _vm.icons.mdiStar,
                                "empty-icon": _vm.icons.mdiStarOutline,
                                color: "yellow darken-3",
                                "background-color": "grey darken-1",
                                large: ""
                              },
                              model: {
                                value: _vm.ServiceQualityRating,
                                callback: function($$v) {
                                  _vm.ServiceQualityRating = $$v
                                },
                                expression: "ServiceQualityRating"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(_vm._s(_vm.$t("request.EmployeeRating")))
                            ]),
                            _vm._v(" "),
                            _c("v-rating", {
                              attrs: {
                                "full-icon": _vm.icons.mdiStar,
                                "empty-icon": _vm.icons.mdiStarOutline,
                                color: "yellow darken-3",
                                "background-color": "grey darken-1",
                                large: ""
                              },
                              model: {
                                value: _vm.EmployeeRating,
                                callback: function($$v) {
                                  _vm.EmployeeRating = $$v
                                },
                                expression: "EmployeeRating"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                _vm._s(_vm.$t("request.ServicePriceRating"))
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-rating", {
                              attrs: {
                                "full-icon": _vm.icons.mdiStar,
                                "empty-icon": _vm.icons.mdiStarOutline,
                                color: "yellow darken-3",
                                "background-color": "grey darken-1",
                                large: ""
                              },
                              model: {
                                value: _vm.ServicePriceRating,
                                callback: function($$v) {
                                  _vm.ServicePriceRating = $$v
                                },
                                expression: "ServicePriceRating"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                _vm._s(_vm.$t("request.ServiceSpeedRating"))
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-rating", {
                              attrs: {
                                "full-icon": _vm.icons.mdiStar,
                                "empty-icon": _vm.icons.mdiStarOutline,
                                color: "yellow darken-3",
                                "background-color": "grey darken-1",
                                large: ""
                              },
                              model: {
                                value: _vm.ServiceSpeedRating,
                                callback: function($$v) {
                                  _vm.ServiceSpeedRating = $$v
                                },
                                expression: "ServiceSpeedRating"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.step == 4
                ? _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "8" } }, [
                        _c("h3", [_vm._v(_vm._s(_vm.$t("request.comment")))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex flex-column align-center",
                          attrs: { cols: "4" }
                        },
                        [
                          _c("v-textarea", {
                            attrs: { outlined: "", rounded: "" },
                            model: {
                              value: _vm.comment,
                              callback: function($$v) {
                                _vm.comment = $$v
                              },
                              expression: "comment"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "yellow darken-3", rounded: "" },
                              on: { click: _vm.postRating }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("general.confirm")) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    to: { name: "c19", params: { type: "order" } },
                    rounded: "",
                    color: "primary"
                  }
                },
                [_vm._v(_vm._s(_vm.$t("request.orderPayments")) + "\n      ")]
              )
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
            value: _vm.changeWarrntyDialog,
            callback: function($$v) {
              _vm.changeWarrntyDialog = $$v
            },
            expression: "changeWarrntyDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v(_vm._s(_vm.$t("myRequests.changeOrder")))
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.$t("general.isSure")))]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: { click: _vm.confirmChangeWithoutWarranty }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.sure")) + "\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.changeWarrntyDialog = false
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.close")) + "\n        ")]
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Customer/order/OrderDetails.vue?vue&type=template&id=51e043a6&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/OrderDetails.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ var OrderDetailsvue_type_script_lang_js_ = ({
  name: "orderDetails",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Order details" : "تفاصيل طلب"
    };
  },
  props: {
    isMaintenance: Boolean,
    isFromNotification: Boolean
  },
  data: function data() {
    return {
      icons: {
        mdiStar: mdi["mdiStar"],
        mdiStarOutline: mdi["mdiStarOutline"]
      },
      id: this.$route.params.id,
      step: null,
      changeToWithoutWarranty: null,
      notifications: [],
      comment: null,
      status: "",
      ServiceQualityRating: null,
      EmployeeRating: null,
      ServicePriceRating: null,
      ServiceSpeedRating: null,
      changeWarrntyDialog: false,
      warranty_type: null,
      appointment: null
    };
  },
  methods: {
    postRating: function postRating() {
      axios.post("/api/rating", {
        order_id: this.id,
        service_quality_rating: this.ServiceQualityRating,
        employee_rating: this.EmployeeRating,
        service_price_rating: this.ServicePriceRating,
        service_speed_rating: this.ServiceSpeedRating,
        comment: this.comment
      }).then(function (res) {})["catch"](function (err) {
        console.warn(err);
      });
    },
    load: function load() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var url;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.isFromNotification) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return axios.get("/api/order/".concat(_this.id)).then(function (res) {
                  console.log(res);
                  _this.id = res.data.data.id;
                })["catch"](function (err) {
                  console.warn(err);
                });

              case 3:
                url = _this.isMaintenance ? "/api/MaintenanceOrder/".concat(_this.id) : "/api/InstallmentOrder/".concat(_this.id);
                axios.get(url).then(function (res) {
                  _this.status = res.data.data.order_info.status;
                  _this.step = _this.$getOrderStatus(_this.status).value;

                  if (_this.isMaintenance) {
                    _this.warranty_type = res.data.data.warranty_type;
                    _this.appointment = res.data.data.appointment;
                  }
                })["catch"](function (err) {
                  console.warn(err);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    confirmChangeWithoutWarranty: function confirmChangeWithoutWarranty() {
      var _this2 = this;

      axios.post("/api/changeOrderToWithoutWarranty/".concat(this.id)).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "info"
        });

        _this2.changeWarrntyDialog = false;

        _this2.load();
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Customer/order/OrderDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_OrderDetailsvue_type_script_lang_js_ = (OrderDetailsvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VRating/index.js + 1 modules
var VRating = __webpack_require__("./node_modules/vuetify/lib/components/VRating/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js + 3 modules
var VStepper = __webpack_require__("./node_modules/vuetify/lib/components/VStepper/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/index.js + 1 modules
var VTextarea = __webpack_require__("./node_modules/vuetify/lib/components/VTextarea/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Customer/order/OrderDetails.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  order_OrderDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VDivider: VDivider["VDivider"],VIcon: VIcon["VIcon"],VRating: VRating["VRating"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"],VStepper: VStepper["VStepper"],VStepperHeader: VStepper["VStepperHeader"],VStepperStep: VStepper["VStepperStep"],VTextarea: VTextarea["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/order/OrderDetails.vue"
/* harmony default export */ var OrderDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);