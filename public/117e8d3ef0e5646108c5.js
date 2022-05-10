(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map[data-v-4edc4447] {\n  width: 100%;\n  height: 400px;\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/Agent/OrderDetails.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Agent/OrderDetails.vue + 4 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/OrderDetails.vue?vue&type=template&id=4edc4447&scoped=true&
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
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("general.details")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.customerName")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.customerName))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.phone")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.phone))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.deviceType")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.deviceType))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.manufacturer")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "4", sm: "4", md: "4", lg: "4", xl: "4" }
                    },
                    [_vm._v(_vm._s(_vm.manufacturer))]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _vm._v(_vm._s(_vm.$t("general.location")))
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
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _c(
                "v-btn",
                {
                  attrs: { to: { name: "g4" }, rounded: "", color: "primary" }
                },
                [_vm._v(_vm._s(_vm.$t("request.orderPayments")))]
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


// CONCATENATED MODULE: ./resources/js/pages/Agent/OrderDetails.vue?vue&type=template&id=4edc4447&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/OrderDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      customerName: null,
      phone: null,
      deviceType: null,
      manufacturer: null,
      location: null,
      mapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      id: this.$route.params.id
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      if (this.id) axios.get("/api/InstallmentOrder/".concat(this.id)).then(function (res) {
        var data = res.data.data;
        _this.customerName = data.name;
        _this.phone = data.phone;
        _this.manufacturer = data.manufacturer;
        _this.deviceType = data.device_type == "electronic" ? _this.$t("general.electric") : _this.$t("general.conditioner");
        _this.location = {
          lat: parseFloat(data.installation_lat),
          lng: parseFloat(data.installation_lon)
        };
        _this.mapCenter = _this.location;
      })["catch"](function (e) {
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
// CONCATENATED MODULE: ./resources/js/pages/Agent/OrderDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var Agent_OrderDetailsvue_type_script_lang_js_ = (OrderDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&
var OrderDetailsvue_type_style_index_0_id_4edc4447_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&");

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

// CONCATENATED MODULE: ./resources/js/pages/Agent/OrderDetails.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  Agent_OrderDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4edc4447",
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Agent/OrderDetails.vue"
/* harmony default export */ var OrderDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_4edc4447_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Agent/OrderDetails.vue?vue&type=style&index=0&id=4edc4447&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_4edc4447_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_4edc4447_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_4edc4447_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderDetails_vue_vue_type_style_index_0_id_4edc4447_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);