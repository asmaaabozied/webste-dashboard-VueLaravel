(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map[data-v-70ab21e8] {\n  width: 100%;\n  height: 400px;\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/TechManager/InstallDetails.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/TechManager/InstallDetails.vue + 4 modules ***!
  \***********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VStepper/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=template&id=70ab21e8&scoped=true&
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
                                complete: _vm.step >= 1 && _vm.step != 5,
                                step: "1"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("general.processing")))]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                complete: _vm.step >= 2 && _vm.step != 5,
                                step: "2"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("general.inMaintenece")))]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            {
                              attrs: {
                                complete: _vm.step >= 3 && _vm.step != 5,
                                step: "3"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("myRequests.ready")))]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _vm.step >= 4
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: {
                                    complete: _vm.step >= 4 && _vm.step != 5,
                                    step: "4"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("myRequests.declined")))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _vm.step >= 5
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: {
                                    complete: _vm.step >= 5 && _vm.step != 5,
                                    step: "5"
                                  }
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
                          _c("v-divider"),
                          _vm._v(" "),
                          _vm.step >= 6
                            ? _c(
                                "v-stepper-step",
                                {
                                  attrs: {
                                    complete: _vm.step >= 6 && _vm.step != 5,
                                    step: "4"
                                  }
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
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.name")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.order.name))
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
                      "\n            " +
                        _vm._s(
                          _vm.order.device_type == "conditioner"
                            ? this.$t("general.conditioner")
                            : this.$t("general.electric")
                        ) +
                        "\n          "
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
                    _vm._v(_vm._s(_vm.$t("order.manufactureName")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.order.manufacturer))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "2" } }, [
                    _vm._v(_vm._s(_vm.$t("general.location")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "5" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _vm._v(
                              _vm._s(_vm.$t("installment.disassembleLocation"))
                            )
                          ]),
                          _vm._v(" "),
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
                                      center: _vm.disassembleMapCenter,
                                      zoom: 7,
                                      "map-type-id": "terrain"
                                    }
                                  },
                                  [
                                    _c("GmapMarker", {
                                      attrs: {
                                        position: _vm.disassembleLocation
                                      }
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "5" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _vm._v(
                              _vm._s(_vm.$t("installment.installmentLocation"))
                            )
                          ]),
                          _vm._v(" "),
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
                                      center: _vm.installMapCenter,
                                      zoom: 7,
                                      "map-type-id": "terrain"
                                    }
                                  },
                                  [
                                    _c("GmapMarker", {
                                      attrs: {
                                        position: _vm.installmentLocation
                                      }
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
              _c("br")
            ],
            1
          ),
          _vm._v(" "),
          _vm.$checkIfOrderStatusNotIn(
            _vm.$getOrderStatus(_vm.order.order_info.status).value,
            [1, 2, 3, 4, 5, 6]
          )
            ? _c(
                "v-card-actions",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: { color: "primary" },
                      on: { click: _vm.assignTech }
                    },
                    [_vm._v(_vm._s(_vm.$t("technical.assignTech")))]
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
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/TechManager/InstallDetails.vue?vue&type=template&id=70ab21e8&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InstallDetailsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      icons: {
        mdiPlusCircleOutline: mdi["mdiPlusCircleOutline"]
      },
      id: this.$route.params.id,
      type: this.$route.params.type,
      step: 1,
      items: [],
      price: null,
      order: {
        order_info: {}
      },
      disassembleMapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      installMapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      disassembleLocation: null,
      installmentLocation: null
    };
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    setPrice: function setPrice() {
      var _this = this;

      var type = this.type;
      axios.put("/api/".concat(this.$getOrderTypeAPI(type), "/").concat(this.id), {
        price: this.price
      }).then(function (_ref) {
        var data = _ref.data;

        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });
      })["catch"](function (res) {});
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
    finishOrder: function finishOrder() {
      axios.post("/api/").then(function (res) {})["catch"](function (err) {});
    },
    load: function load() {
      var _this2 = this;

      var type = this.type;
      axios.get("/api/".concat(this.$getOrderTypeAPI(type), "/").concat(this.id)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.order = data.data;
        _this2.step = _this2.$getOrderStatus(_this2.order.order_info.status).value;
        _this2.disassembleLocation = {
          lat: _this2.order.decoding_lat,
          lng: _this2.order.decoding_lon
        };
        _this2.installmentLocation = {
          lat: _this2.order.installation_lat,
          lng: _this2.order.installation_lon
        };
        _this2.disassembleMapCenter = _this2.disassembleLocation;
        _this2.installMapCenter = _this2.installmentLocation;
      });
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/TechManager/InstallDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var TechManager_InstallDetailsvue_type_script_lang_js_ = (InstallDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&
var InstallDetailsvue_type_style_index_0_id_70ab21e8_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&");

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VStepper/index.js + 3 modules
var VStepper = __webpack_require__("./node_modules/vuetify/lib/components/VStepper/index.js");

// CONCATENATED MODULE: ./resources/js/pages/TechManager/InstallDetails.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  TechManager_InstallDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "70ab21e8",
  null
  
)

/* vuetify-loader */












installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDivider: VDivider["VDivider"],VRow: VGrid["VRow"],VStepper: VStepper["VStepper"],VStepperHeader: VStepper["VStepperHeader"],VStepperStep: VStepper["VStepperStep"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/TechManager/InstallDetails.vue"
/* harmony default export */ var InstallDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallDetails_vue_vue_type_style_index_0_id_70ab21e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TechManager/InstallDetails.vue?vue&type=style&index=0&id=70ab21e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallDetails_vue_vue_type_style_index_0_id_70ab21e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallDetails_vue_vue_type_style_index_0_id_70ab21e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallDetails_vue_vue_type_style_index_0_id_70ab21e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InstallDetails_vue_vue_type_style_index_0_id_70ab21e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);