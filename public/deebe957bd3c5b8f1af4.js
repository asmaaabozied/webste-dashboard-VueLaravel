(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map[data-v-61245b4a] {\n    width: 100%;\n    height: 400px;\n    background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/Technical/MaintenanceDetails.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Technical/MaintenanceDetails.vue + 4 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/components/imagePreview.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtnToggle/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VStepper/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=template&id=61245b4a&scoped=true&
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
                            { attrs: { complete: _vm.step >= 0, step: "1" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("general.received")) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            { attrs: { complete: _vm.step >= 1, step: "1" } },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("general.processing")) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.step !== 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step !== 5
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: { complete: _vm.step >= 2, step: "2" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("general.inMaintenece")) +
                                      "\n                        "
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
                                {
                                  attrs: { complete: _vm.step >= 3, step: "3" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("myRequests.ready")) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.step >= 4 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step >= 4
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: { complete: _vm.step >= 4, step: "4" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("myRequests.declined")) +
                                      "\n                        "
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
                                {
                                  attrs: { complete: _vm.step >= 5, step: "5" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("myRequests.declinedByCustomer")
                                    ) + "\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.step >= 5 ? _c("v-divider") : _vm._e(),
                          _vm._v(" "),
                          _vm.step >= 6
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: { complete: _vm.step >= 6, step: "5" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("myRequests.unfixedDevice")) +
                                      "\n                        "
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
                                      _vm._v("mdi-clock-out")
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
                                      _vm._v("mdi-office-building-marker")
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
                        _vm.orderInfo.warranty_type == "with warranty"
                          ? _vm.$t("request.maintenancewWarranty")
                          : _vm.$t("request.maintenancenWarranty")
                      ) + "\n                "
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
                        _vm.orderInfo.device_type == "conditioner"
                          ? _vm.$t("general.conditioner")
                          : _vm.$t("general.electric")
                      ) + "\n                "
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
                    _vm._v(_vm._s(_vm.orderInfo.description))
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
                    _vm._v(_vm._s(_vm.orderInfo.manufacture))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.images.length > 0
                ? _c(
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
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.orderInfo.warranty_image
                ? _c(
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
                              src: _vm.orderInfo.warranty_image,
                              width: "100%",
                              height: 200
                            }
                          })
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
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { md: "8", lg: "8", xl: "8" } }, [
                    _vm._v(_vm._s(_vm.$t("general.customerPaid")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { md: "4", lg: "4", xl: "4" } },
                    [
                      _c(
                        "v-btn-toggle",
                        {
                          attrs: { group: "" },
                          model: {
                            value: _vm.payState,
                            callback: function($$v) {
                              _vm.payState = $$v
                            },
                            expression: "payState"
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { value: "0" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mx-1",
                                  attrs: { color: "teal" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.icons.mdiCheckOutline) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("general.yes")) +
                                  "\n                        "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: "1" } },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mx-1",
                                  attrs: { color: "danger" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.icons.mdiCloseOutline) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("general.no")) +
                                  "\n                        "
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
              ),
              _vm._v(" "),
              _c("h3", {
                domProps: { textContent: _vm._s(_vm.$t("admin.spareParts")) }
              }),
              _vm._v(" "),
              _c("v-simple-table", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", {
                              staticClass: "text-center",
                              domProps: {
                                textContent: _vm._s(_vm.$t("general.code"))
                              }
                            }),
                            _vm._v(" "),
                            _c("th", {
                              staticClass: "text-center",
                              domProps: {
                                textContent: _vm._s(_vm.$t("general.name"))
                              }
                            }),
                            _vm._v(" "),
                            _c("th", {
                              staticClass: "text-center",
                              domProps: {
                                textContent: _vm._s(_vm.$t("general.quantity"))
                              }
                            }),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.spareParts, function(item, i) {
                            return _c("tr", { key: i }, [
                              _c("td", {
                                staticClass: "text-center",
                                domProps: { textContent: _vm._s(item.code) }
                              }),
                              _vm._v(" "),
                              _c("td", {
                                staticClass: "text-center",
                                domProps: { textContent: _vm._s(item.name) }
                              }),
                              _vm._v(" "),
                              _c("td", {
                                staticClass: "text-center",
                                domProps: {
                                  textContent: _vm._s(item.pivot.quantity)
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ma-2",
                                      attrs: {
                                        color: "error",
                                        rounded: "",
                                        "x-small": ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.del(item)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Delete\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
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
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _vm.step <= 3
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: { click: _vm.addSpare }
                    },
                    [
                      _c("v-icon", [
                        _vm._v(_vm._s(_vm.icons.mdiPlusCircleOutline))
                      ]),
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("general.addSpare")) +
                          "\n            "
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.step <= 3 &&
              _vm.$checkIfOrderStatusNotIn(_vm.step, [-1, 3, 4, 5, 6])
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.confirmMoveDialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.requestToMove")) +
                          "\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.step <= 3 &&
              _vm.$checkIfOrderStatusNotIn(_vm.step, [-1, 3, 4, 5, 6])
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: { click: _vm.finishOrder }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.finishOrder")) + "\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.step <= 3 &&
              _vm.$checkIfOrderStatusNotIn(_vm.step, [-1, 3, 4, 5, 6])
                ? _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: { click: _vm.finishFailOrder }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.finishFailOrder")) +
                          "\n            "
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
          attrs: { width: "40vw" },
          model: {
            value: _vm.confirmMoveDialog,
            callback: function($$v) {
              _vm.confirmMoveDialog = $$v
            },
            expression: "confirmMoveDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v(_vm._s(_vm.$t("order.confirm")))]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("p", [_vm._v(_vm._s(_vm.$t("general.isSure")))])
              ]),
              _vm._v(" "),
              _vm.$checkIfOrderStatusNotIn(_vm.step, [-1, 3, 4, 5, 6])
                ? _c(
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { rounded: "", color: "primary" },
                          on: { click: _vm.requestToMove }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.yes")) + "\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { rounded: "" },
                          on: {
                            click: function($event) {
                              _vm.confirmMoveDialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("general.no")) + "\n                "
                          )
                        ]
                      )
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
                _vm._v(_vm._s(_vm.$t("general.finishOrder")) + "\n            ")
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
                      attrs: { text: "" },
                      on: { click: _vm.confirmFinishItem }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.sure")) + "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.finishDialog = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.close")) + "\n                "
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.finishFailOrderDialog,
            callback: function($$v) {
              _vm.finishFailOrderDialog = $$v
            },
            expression: "finishFailOrderDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(
                  _vm._s(_vm.$t("general.finishFailOrder")) + "\n            "
                )
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
                      attrs: { text: "" },
                      on: { click: _vm.confirmFailFinishItem }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.sure")) + "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.finishFailOrderDialog = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.close")) + "\n                "
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=template&id=61245b4a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// EXTERNAL MODULE: ./resources/js/components/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__("./resources/js/components/imagePreview.vue");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "maintenanceDetails",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Maintenance details" : "طلب صيانة"
    };
  },
  components: {
    previewer: imagePreview["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiPlusCircleOutline: mdi["mdiPlusCircleOutline"],
        mdiCheckOutline: mdi["mdiCheckOutline"],
        mdiCloseOutline: mdi["mdiCloseOutline"]
      },
      id: this.$route.params.id,
      step: 1,
      confirmMoveDialog: false,
      finishDialog: false,
      finishFailOrderDialog: false,
      finishInfo: null,
      payState: null,
      orderInfo: {},
      mapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      location: null,
      images: [],
      spareParts: [],
      appointment: null,
      customerInfo: null
    };
  },
  methods: {
    addSpare: function addSpare(id) {
      this.$router.push({
        name: "t3",
        params: {
          orderId: id
        }
      });
    },
    del: function del(item) {
      var _this = this;

      axios_default.a.post("/api/deleteSparePart", {
        maintenance_order_id: item.pivot.maintenance_order_id,
        spare_id: item.pivot.spare_id
      }).then(function () {
        _this.load();
      });
    },
    requestToMove: function requestToMove() {
      var _this2 = this;

      axios_default.a.post("/api/employeeDetermineFixLocation", {
        fix_place: 2,
        order_id: this.id
      }).then(function (res) {
        _this2.confirmMoveDialog = false;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    finishOrder: function finishOrder() {
      this.finishDialog = true;
    },
    finishFailOrder: function finishFailOrder() {
      this.finishFailOrderDialog = true;
    },
    confirmFinishItem: function confirmFinishItem() {
      var _this3 = this;

      axios_default.a.put("/api/MaintenanceOrder/".concat(this.id), {
        technical_status: 1
      }).then(function (res) {
        _this3.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this3.finishDialog = false;
      });
    },
    confirmFailFinishItem: function confirmFailFinishItem() {
      var _this4 = this;

      axios_default.a.put("/api/MaintenanceOrder/".concat(this.id), {
        technical_status: 0
      }).then(function (res) {
        _this4.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this4.finishDialog = false;
      });
    },
    load: function load() {
      var _this5 = this;

      axios_default.a.get("/api/MaintenanceOrder/".concat(this.id)).then(function (res) {
        _this5.appointment = res.data.appointment;
        _this5.customerInfo = {
          name: res.data.data.order_info.user_info.customer.name,
          mobile: res.data.data.order_info.user_info.customer.phone
        };
        _this5.step = _this5.$getOrderStatus(res.data.data.order_info.status).value;
        _this5.orderInfo = res.data.data;
        _this5.location = {
          lat: parseFloat(_this5.orderInfo.lat),
          lng: parseFloat(_this5.orderInfo.lon)
        };
        _this5.mapCenter = _this5.location;
        if (_this5.orderInfo.images) _this5.orderInfo.images.forEach(function (element) {
          _this5.images.push(element.image);
        });
        _this5.spareParts = _this5.orderInfo.spare_part;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var Technical_MaintenanceDetailsvue_type_script_lang_js_ = (MaintenanceDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&
var MaintenanceDetailsvue_type_style_index_0_id_61245b4a_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtnToggle/index.js + 1 modules
var VBtnToggle = __webpack_require__("./node_modules/vuetify/lib/components/VBtnToggle/index.js");

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js + 3 modules
var VStepper = __webpack_require__("./node_modules/vuetify/lib/components/VStepper/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Technical/MaintenanceDetails.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  Technical_MaintenanceDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "61245b4a",
  null
  
)

/* vuetify-loader */

















installComponents_default()(component, {VBtn: VBtn["VBtn"],VBtnToggle: VBtnToggle["VBtnToggle"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VDivider: VDivider["VDivider"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"],VStepper: VStepper["VStepper"],VStepperHeader: VStepper["VStepperHeader"],VStepperStep: VStepper["VStepperStep"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Technical/MaintenanceDetails.vue"
/* harmony default export */ var MaintenanceDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_61245b4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Technical/MaintenanceDetails.vue?vue&type=style&index=0&id=61245b4a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_61245b4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_61245b4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_61245b4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MaintenanceDetails_vue_vue_type_style_index_0_id_61245b4a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);