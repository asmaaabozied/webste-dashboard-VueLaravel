(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map[data-v-17619510] {\n  width: 100%;\n  height: 400px;\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/MaintenanceManager/OrderDetails.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/MaintenanceManager/OrderDetails.vue + 4 modules ***!
  \****************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=template&id=17619510&scoped=true&
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
          _c("v-card-title", [_vm._v(_vm._s(_vm.$getOrdertype(_vm.type)))]),
          _vm._v(" "),
          _c("v-card-text", [
            _vm.preventiveDetails
              ? _c(
                  "div",
                  [
                    _c(
                      "v-row",
                      [
                        _c("v-col", { attrs: { cols: "4" } }, [
                          _vm._v(_vm._s(_vm.$t("general.name")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(_vm._s(_vm.preventiveDetails.business_name))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c("v-col", { attrs: { cols: "4" } }, [
                          _vm._v(_vm._s(_vm.$t("genral.phone")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(
                            _vm._s(_vm.preventiveDetails.business_phone_number)
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
                          _vm._v(_vm._s(_vm.$t("general.type")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(_vm._s(_vm.preventiveDetails.business_type))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c("v-col", { attrs: { cols: "4" } }, [
                          _vm._v(_vm._s(_vm.$t("general.deviceType")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(
                            _vm._s(
                              _vm.preventiveDetails.maintenance_type ==
                                "electronic"
                                ? _vm.$t("general.electric")
                                : _vm.$t("general.conditioner")
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
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reviewDetails
              ? _c(
                  "div",
                  [
                    _c(
                      "v-row",
                      [
                        _c("v-col", { attrs: { cols: "4" } }, [
                          _vm._v(_vm._s(_vm.$t("general.description")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(_vm._s(_vm.reviewDetails.description))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      [
                        _c("v-col", { attrs: { cols: "4" } }, [
                          _vm._v(_vm._s(_vm.$t("request.orderType")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(
                            _vm._s(
                              _vm.$getOrdertype(
                                _vm.reviewDetails.order_info.type
                              )
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
                          _vm._v(_vm._s(_vm.$t("general.date")))
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "8" } }, [
                          _vm._v(
                            _vm._s(_vm.formatDate(_vm.reviewDetails.created_at))
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.preventiveDetails.order_info.status)
                  .value,
                [-1, 3, 4, 5, 6]
              )
                ? _c(
                    "v-btn",
                    {
                      attrs: { color: "success", rounded: "" },
                      on: { click: _vm.finish }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.finish")))]
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
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: { click: _vm.confirmFinishItem }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.sure")))]
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
                    [_vm._v(_vm._s(_vm.$t("general.close")))]
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


// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=template&id=17619510&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      preventiveDetails: {
        order_info: {}
      },
      reviewDetails: null,
      location: null,
      mapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      finishDialog: false,
      finishInfo: null,
      status: null
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      var url;
      if (this.type == "prevention_maintenance_order") url = "/api/PreventionMaintenanceOrder/".concat(this.id);else if (this.type == "review_order") url = "/api/OrderReviewOrder/".concat(this.id);
      axios.get(url).then(function (res) {
        if (_this.type == "review_order") {
          _this.reviewDetails = res.data.data;
        } else if (_this.type == "prevention_maintenance_order") {
          _this.preventiveDetails = res.data.data;
          _this.location = {
            lat: parseFloat(res.data.data.lat),
            lng: parseFloat(res.data.data.lon)
          };
          _this.mapCenter = _this.location;
        }

        _this.status = res.data.data.order_info.status;
      })["catch"](function (res) {
        console.warn(err);
      });
    },
    finish: function finish() {
      this.finishInfo = {
        type: this.type,
        id: this.id
      };
      this.finishDialog = true;
    },
    confirmFinishItem: function confirmFinishItem() {
      var _this2 = this;

      var url;

      switch (this.finishInfo.type) {
        case "prevention_maintenance_order":
          url = "/api/PreventionMaintenanceOrder/".concat(this.finishInfo.id);
          break;

        case "review_order":
          url = "/api/OrderReviewOrder/".concat(this.finishInfo.id);
          break;

        default:
          break;
      }

      axios.put(url, {
        status: 3
      }).then(function (res) {
        _this2.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this2.finishDialog = false;
      });
    }
  },
  computed: {
    id: function id() {
      return this.$route.params.id;
    },
    type: function type() {
      return this.$route.params.type;
    }
  },
  mounted: function mounted() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var MaintenanceManager_OrderDetailsvue_type_script_lang_js_ = (OrderDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&
var OrderDetailsvue_type_style_index_0_id_17619510_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&");

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

// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/OrderDetails.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  MaintenanceManager_OrderDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "17619510",
  null
  
)

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MaintenanceManager/OrderDetails.vue"
/* harmony default export */ var OrderDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_17619510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/MaintenanceManager/OrderDetails.vue?vue&type=style&index=0&id=17619510&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_17619510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_17619510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_17619510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_17619510_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);