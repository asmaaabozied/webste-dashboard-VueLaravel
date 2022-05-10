(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map[data-v-79e63cf0] {\n  width: 100%;\n  height: 400px;\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/TechManager/MaintenanceDetails.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/TechManager/MaintenanceDetails.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/components/imagePreview.vue */
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=template&id=79e63cf0&scoped=true&
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
            _vm._v(_vm._s(_vm.$t("technical.serviceDetails")))
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "div",
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
                            { attrs: { complete: _vm.step >= 0, step: "0" } },
                            [_vm._v(_vm._s(_vm.$t("general.received")))]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                complete: _vm.step >= 1 && _vm.step != 4,
                                step: "1"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("general.processing")))]
                          ),
                          _vm._v(" "),
                          _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step !== 5
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: {
                                    complete: _vm.step >= 2 && _vm.step != 4,
                                    step: "2"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("general.inMaintenece")))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step !== 5
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: {
                                    complete: _vm.step >= 3 && _vm.step != 4,
                                    step: "3"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("general.ready")))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step !== 5
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: { complete: _vm.step >= 4, step: "4" }
                                },
                                [_vm._v(_vm._s(_vm.$t("general.declined")))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.step > 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step >= 5
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: { complete: _vm.step >= 5, step: "5" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("myRequests.declinedByCustomer")
                                    )
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.step > 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step >= 6
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: { complete: _vm.step >= 6, step: "6" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("myRequests.unfixedDevice"))
                                  )
                                ]
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
                    _vm._v(" " + _vm._s(_vm.$t("order.appointment")) + " ")
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
                                      _c("v-icon", { staticClass: "mx-1" }, [
                                        _vm._v("mdi-calendar-blank-outline")
                                      ])
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
                                      _vm._v("mdi-clock-in ")
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.appointment.start_time) +
                                        "\n                "
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
                                      _vm._v("mdi-clock-out ")
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.appointment.end_time) +
                                        "\n                "
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
                                      _vm._v("mdi-office-building-marker")
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.$i18n.locale == "en"
                                            ? _vm.appointment.branch.name
                                            : _vm.appointment.branch.name_ar
                                        ) +
                                        "\n                "
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
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.type")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.order.warranty_type == "with warranty"
                          ? _vm.$t("request.maintenancewWarranty")
                          : _vm.$t("request.maintenancenWarranty")
                      )
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("order.deviceType")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.order.device_type == "conditioner"
                          ? _vm.$t("general.conditioner")
                          : _vm.$t("general.electric")
                      )
                    )
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
                    _vm._v(_vm._s(_vm.order.description))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("order.manufactureName")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.order.manufacture))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.image")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "8" } },
                    [
                      _c("previewer", {
                        attrs: {
                          images: _vm.images,
                          width: "100%",
                          height: 200
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.warranty")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "8" } },
                    [
                      _c("previewer", {
                        attrs: {
                          src: _vm.order.warranty_image,
                          width: "100%",
                          height: 200
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.location")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "8" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-text", [
                            _c(
                              "div",
                              { staticClass: "map" },
                              [
                                _c(
                                  "GmapMap",
                                  {
                                    staticStyle: {
                                      width: "100%",
                                      height: "100%"
                                    },
                                    attrs: {
                                      center: _vm.mapCenter,
                                      zoom: 7,
                                      "map-type-id": "terrain"
                                    }
                                  },
                                  [
                                    _c("GmapMarker", {
                                      attrs: { position: _vm.location }
                                    })
                                  ],
                                  1
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
                ],
                1
              ),
              _vm._v(" "),
              _vm.order.warranty_type == "without warranty"
                ? _c(
                    "div",
                    [
                      _c("h4", [_vm._v(_vm._s(_vm.$t("general.fees")))]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticClass: "d-flex align-center",
                              attrs: { cols: "2" }
                            },
                            [_vm._v(_vm._s(_vm.$t("general.newFee")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "2" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: _vm.$t("general.feeType"),
                                  "item-text": "name",
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
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "2" } },
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
                          ),
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
                                    "\n                " +
                                      _vm._s(_vm.$t("general.add")) +
                                      "\n              "
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        { attrs: { outlined: "" } },
                        [
                          _c("v-simple-table", {
                            attrs: { dense: "", "fixed-header": "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function() {
                                    return [
                                      _c("thead", [
                                        _c("tr", [
                                          _c(
                                            "th",
                                            { staticClass: "text-center" },
                                            [_vm._v("#")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("general.feeType")
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("general.description")
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("general.fee"))
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "th",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("general.date"))
                                              )
                                            ]
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "tbody",
                                        _vm._l(_vm.fees, function(item, i) {
                                          return _c("tr", { key: i }, [
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v(_vm._s(item.id))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(
                                                      _vm.$i18n.locale == "en"
                                                        ? item.fees[0].name
                                                        : item.fees[0].name_ar
                                                    ) +
                                                    "\n                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(
                                                      _vm.$i18n.locale == "en"
                                                        ? item.fees[0]
                                                            .description
                                                        : item.fees[0]
                                                            .description_ar
                                                    ) +
                                                    "\n                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v(_vm._s(item.amount))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(
                                                      _vm.formatDate(
                                                        item.created_at
                                                      )
                                                    ) +
                                                    "\n                    "
                                                )
                                              ]
                                            )
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
                              4098620321
                            )
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("br")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.order.order_info.status).value,
                [3, 4, 5, 6]
              )
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: { click: _vm.assignTech }
                    },
                    [_vm._v(_vm._s(_vm.$t("technical.assignTech")))]
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=template&id=79e63cf0&scoped=true&

// EXTERNAL MODULE: ./resources/js/components/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__("./resources/js/components/imagePreview.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MaintenanceDetailsvue_type_script_lang_js_ = ({
  name: "maintenanceDetils",
  components: {
    previewer: imagePreview["default"]
  },
  data: function data() {
    return {
      icons: {},
      id: this.$route.params.id,
      type: this.$route.params.type,
      step: 1,
      items: [],
      feesItems: [],
      feeType: null,
      feeValue: null,
      fees: [],
      order: {
        order_info: {}
      },
      finishDialog: false,
      mapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      location: null,
      images: [],
      appointment: null,
      customerInfo: null
    };
  },
  created: function created() {
    this.load();
  },
  methods: {
    addFee: function addFee() {
      var _this = this;

      var form = new FormData();
      form.append("maintenance_order_id", this.id);
      form.append("fee_id", this.feeType);
      form.append("fee_amount", this.feeValue);
      axios.post("/api/managerCheckUpFee", form).then(function (res) {
        _this.getOrder();
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    addSpare: function addSpare(id) {
      this.$router.push({
        name: "tm7",
        params: {
          id: id
        }
      });
    },
    assignTech: function assignTech() {
      this.$router.push({
        name: "tm5",
        params: {
          orderId: this.order.id,
          id: this.order.order_id,
          type: this.type
        }
      });
    },
    confirmFinishItem: function confirmFinishItem() {
      var _this2 = this;

      axios.put("/api/MaintenanceOrder/".concat(this.id), {
        status: 3
      }).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "info"
        });

        _this2.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this2.finishDialog = false;
      });
    },
    load: function load() {
      var _this3 = this;

      this.getOrder();
      axios.get("/api/fee").then(function (_ref) {
        var data = _ref.data;
        _this3.feesItems = data.data;
      });
    },
    getOrder: function getOrder() {
      var _this4 = this;

      var type = this.type;
      axios.get("/api/".concat(this.$getOrderTypeAPI(type), "/").concat(this.id)).then(function (_ref2) {
        var data = _ref2.data;
        _this4.appointment = data.data.appointment;
        _this4.order = data.data;
        _this4.location = {
          lat: parseFloat(_this4.order.lat),
          lng: parseFloat(_this4.order.lon)
        };
        _this4.mapCenter = _this4.location;
        _this4.fees = data.data.fee_info;
        _this4.step = _this4.$getOrderStatus(data.data.order_info.status).value;
        if (_this4.order.images) _this4.order.images.forEach(function (element) {
          _this4.images.push(element.image);
        });
        _this4.customerInfo = {
          name: data.data.order_info.user_info.customer.name,
          mobile: data.data.order_info.user_info.customer.phone
        };
      })["catch"](function (err) {
        console.log(err);
        console.warn(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var TechManager_MaintenanceDetailsvue_type_script_lang_js_ = (MaintenanceDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&
var MaintenanceDetailsvue_type_style_index_0_id_79e63cf0_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&");

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

// CONCATENATED MODULE: ./resources/js/pages/TechManager/MaintenanceDetails.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  TechManager_MaintenanceDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "79e63cf0",
  null
  
)

/* vuetify-loader */
















installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDivider: VDivider["VDivider"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VSimpleTable: VDataTable["VSimpleTable"],VStepper: VStepper["VStepper"],VStepperHeader: VStepper["VStepperHeader"],VStepperStep: VStepper["VStepperStep"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/TechManager/MaintenanceDetails.vue"
/* harmony default export */ var MaintenanceDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_79e63cf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/MaintenanceDetails.vue?vue&type=style&index=0&id=79e63cf0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_79e63cf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_79e63cf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_79e63cf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_79e63cf0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);