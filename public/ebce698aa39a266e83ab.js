(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue + 4 modules ***!
  \********************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VStepper/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue?vue&type=template&id=bb557f12&scoped=true&
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
          _c("v-card-title", [
            _vm._v(_vm._s(_vm.$t("technical.RequestProcess.title")))
          ]),
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
                        { attrs: { complete: _vm.step > 0, step: "0" } },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.received")) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-stepper-step",
                        {
                          attrs: {
                            complete: _vm.step >= 1 && _vm.step != 4,
                            step: "2"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.processing")) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step >= 2
                        ? _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                complete: _vm.step >= 2 && _vm.step != 4,
                                step: "2"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("myRequests.maintaining")) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step >= 3
                        ? _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                complete: _vm.step >= 3 && _vm.step != 4,
                                step: "3"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("myRequests.ready")) +
                                  "\n                    "
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
                            { attrs: { complete: _vm.step >= 4, step: "4" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("myRequests.declined")) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step >= 5 ? _c("v-divider") : _vm._e(),
                      _vm._v(" "),
                      _vm.step >= 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 5, step: "5" } },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("myRequests.declinedByCustomer")
                                ) + "\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.step >= 6 && _vm.step !== 5
                        ? _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 6, step: "6" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("myRequests.unfixedDevice")) +
                                  "\n                    "
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
              _c("br"),
              _vm._v(" "),
              _vm.customerInfo
                ? _c(
                    "div",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _vm._v(_vm._s(_vm.$t("order.customername")))
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "8" } }, [
                            _vm._v(_vm._s(_vm.customerInfo.name))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _vm._v(_vm._s(_vm.$t("auth.mobile")))
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "8" } }, [
                            _vm._v(_vm._s(_vm.customerInfo.mobile))
                          ])
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
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("order.manufactureName")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.manufacture))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.description")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.description))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.appointment
                ? _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "4" } }, [
                        _vm._v(" " + _vm._s(_vm.$t("order.appointment")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "8" } },
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
                                          "\n                                " +
                                            _vm._s(_vm.appointment.start_time) +
                                            "\n                            "
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
                                          "\n                                " +
                                            _vm._s(_vm.appointment.end_time) +
                                            "\n                            "
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
                                          _vm._v(" mdi-clock-out")
                                        ]),
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm.$i18n.locale == "en"
                                                ? _vm.appointment.branch.name
                                                : _vm.appointment.branch.name_ar
                                            ) +
                                            "\n                            "
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
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.order_info.status).value,
                [-1, 3, 4, 5, 6]
              )
                ? _c("h4", [_vm._v(_vm._s(_vm.$t("admin.spareParts")))])
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.order_info.status).value,
                [-1, 3, 4, 5, 6]
              )
                ? _c("v-simple-table", {
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function() {
                            return [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("general.code")))
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("general.name")))
                                  ]),
                                  _vm._v(" "),
                                  _c("th", [
                                    _vm._v(_vm._s(_vm.$t("general.quantity")))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.spareParts, function(item, i) {
                                  return _c("tr", { key: i }, [
                                    _c("td", [_vm._v(_vm._s(i + 1))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.name))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.quantity))])
                                  ])
                                }),
                                0
                              )
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      false,
                      3603473744
                    )
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.order_info.status).value,
                [-1, 3, 4, 5, 6]
              )
                ? _c("h4", [_vm._v(_vm._s(_vm.$t("general.fees")))])
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.order_info.status).value,
                [-1, 3, 4, 5, 6]
              )
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "d-flex align-center",
                          attrs: { cols: "2" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.newFee")) +
                              "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.$checkIfOrderStatusNotIn(
                        _vm.$getOrderStatus(_vm.order_info.status).value,
                        [-1, 3, 4, 5, 6]
                      )
                        ? _c(
                            "v-col",
                            { attrs: { cols: "2" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: _vm.$t("general.feeType"),
                                  "item-text": "label",
                                  "item-value": "id",
                                  items: _vm.feesItems
                                },
                                model: {
                                  value: _vm.feeType,
                                  callback: function($$v) {
                                    _vm.feeType = $$v
                                  },
                                  expression: "feeType"
                                }
                              }),
                              _vm._v(" "),
                              _vm.$checkIfOrderStatusNotIn(
                                _vm.$getOrderStatus(_vm.order_info.status)
                                  .value,
                                [-1, 3, 4, 5, 6]
                              )
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: _vm.$t("general.value"),
                                          type: "Number",
                                          min: "0"
                                        },
                                        model: {
                                          value: _vm.feeValue,
                                          callback: function($$v) {
                                            _vm.feeValue = $$v
                                          },
                                          expression: "feeValue"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex align-center",
                                  attrs: { cols: "2" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { rounded: "" },
                                      on: { click: _vm.addFee }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v(
                                          _vm._s(_vm.icons.mdiPlusCircleOutline)
                                        )
                                      ]),
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(_vm.$t("general.add")) +
                                          "\n                    "
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
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-simple-table", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("th", [_vm._v(_vm._s(_vm.$t("general.type")))]),
                            _vm._v(" "),
                            _c("th", [_vm._v(_vm._s(_vm.$t("general.value")))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.fees, function(item, i) {
                            return _c("tr", { key: i }, [
                              _c("td", [_vm._v(_vm._s(i + 1))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    item.fees &&
                                      item.fees[0] &&
                                      item.fees[0].name
                                      ? item.fees[0].name
                                      : ""
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.amount))])
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue?vue&type=template&id=bb557f12&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MaintenanceOrdervue_type_script_lang_js_ = ({
  name: "maintenanceOrder",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Maintenance order details" : "تفاصيل طلب صيانة"
    };
  },
  data: function data() {
    return {
      icons: {
        mdiPlusCircleOutline: mdi["mdiPlusCircleOutline"]
      },
      id: null,
      step: null,
      order: null,
      Notifications: [],
      order_info: [],
      spareParts: [],
      fees: [],
      feeType: null,
      feeValue: null,
      feesItems: [],
      appointment: null,
      customerInfo: null,
      manufacture: null,
      description: null
    };
  },
  methods: {
    setPayState: function setPayState(state) {
      if (state == "yes") {
        axios.post("/api/").then(function (res) {})["catch"](function (err) {});
      } else if (state == "no") {
        axios.post("/api/").then(function (res) {})["catch"](function (err) {});
      }
    },
    load: function load() {
      var _this = this;

      axios.get("/api/MaintenanceOrder/".concat(this.id)).then(function (_ref) {
        var data = _ref.data;
        _this.order = data.data;
        _this.fees = data.data.fee_info;
        _this.order_info = data.data.order_info;
        _this.appointment = data.data.appointment;
        _this.step = _this.$getOrderStatus(data.data.order_info.status).value;
        _this.customerInfo = {
          name: data.data.order_info.user_info.customer.name,
          mobile: data.data.order_info.user_info.customer.phone
        };
        _this.manufacture = data.data.manufacture;
        _this.description = data.data.description;
      })["catch"](function (err) {
        console.warn(err);
      });
      axios.get("/api/fee").then(function (_ref2) {
        var data = _ref2.data;

        if (data.data) {
          data.data.forEach(function (item) {
            _this.feesItems.push({
              id: item.id,
              label: item.name
            });
          });
        }
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    addFee: function addFee() {
      var _this2 = this;

      var form = new FormData();
      form.append("maintenance_order_id", this.id);
      form.append("fee_id", this.feeType);
      form.append("fee_amount", this.feeValue);
      axios.post("/api/managerCheckUpFee", form).then(function (res) {
        _this2.showSuccessMessage(_this2.$t('general.addFeesSuccess'));

        _this2.load();
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  created: function created() {
    this.id = parseInt(this.$route.params.id);
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var MaintenanceManager_MaintenanceOrdervue_type_script_lang_js_ = (MaintenanceOrdervue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/index.js + 1 modules
var VDivider = __webpack_require__("./node_modules/vuetify/lib/components/VDivider/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js + 3 modules
var VStepper = __webpack_require__("./node_modules/vuetify/lib/components/VStepper/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/MaintenanceOrder.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  MaintenanceManager_MaintenanceOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "bb557f12",
  null
  
)

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDivider: VDivider["VDivider"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VSimpleTable: VDataTable["VSimpleTable"],VStepper: VStepper["VStepper"],VStepperHeader: VStepper["VStepperHeader"],VStepperStep: VStepper["VStepperStep"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MaintenanceManager/MaintenanceOrder.vue"
/* harmony default export */ var MaintenanceOrder = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);