(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#suggestContainer[data-v-24f6eeb6] {\n  height: 85vh;\n  width: 100%;\n  overflow: hidden;\n}\n#suggestList[data-v-24f6eeb6] {\n  overflow-y: scroll;\n}\n*[data-v-24f6eeb6] {\n  scrollbar-width: thin;\n  scrollbar-color: #8bd886;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/Suggestions/Suggestions.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Suggestions/Suggestions.vue + 4 modules ***!
  \********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VPagination/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=template&id=24f6eeb6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "suggestContainer" } },
    [
      _c(
        "v-row",
        { staticStyle: { height: "100%" } },
        [
          _c(
            "v-col",
            { attrs: { sm: "12", md: "6", lg: "4", xl: "4" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "elevation-0 d-flex flex-column",
                  staticStyle: { height: "100%" }
                },
                [
                  _c("v-card-title", [
                    _vm._v(_vm._s(_vm.$t("topNav.suggestions")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: { flex: "1" },
                      attrs: { id: "suggestList" }
                    },
                    [
                      _vm.items.length > 0
                        ? _c(
                            "v-list",
                            {
                              staticStyle: { cursor: "pointer" },
                              attrs: { "three-line": "" }
                            },
                            [
                              _vm._l(_vm.items, function(item, index) {
                                return [
                                  _c(
                                    "div",
                                    { key: index },
                                    [
                                      _c("v-divider"),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item",
                                        {
                                          on: {
                                            click: function($event) {
                                              _vm.currentItem = item
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-list-item-avatar",
                                            [
                                              _c("v-img", {
                                                attrs: { src: item.avatar }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          item
                                            ? _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", {
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        item.user_info.user_name
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        item.text.length > 50
                                                          ? item.text.substr(
                                                              0,
                                                              45
                                                            ) + "..."
                                                          : item.text
                                                      )
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-list-item-subtitle", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        _vm.formatDate(
                                                          item.created_at
                                                        )
                                                      )
                                                    }
                                                  })
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
                                ]
                              }),
                              _vm._v(" "),
                              _c("v-divider")
                            ],
                            2
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("v-pagination", {
                        attrs: {
                          length: _vm.lastPage,
                          "total-visible": 5,
                          circle: ""
                        },
                        on: { input: _vm.load },
                        model: {
                          value: _vm.page,
                          callback: function($$v) {
                            _vm.page = $$v
                          },
                          expression: "page"
                        }
                      })
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
          _c("v-col", { attrs: { sm: "12", md: "6", lg: "8", xl: "8" } }, [
            _c(
              "div",
              { staticClass: "px-2 mb-2", attrs: { id: "thread" } },
              [
                _vm.items.length > 0
                  ? _c(
                      "v-card",
                      { staticClass: "elevation-1 ma-4" },
                      [
                        _c("v-card-title", { staticClass: "headline" }, [
                          _vm._v(_vm._s(_vm.currentItem.user_info.user_name))
                        ]),
                        _vm._v(" "),
                        _c("v-card-text", [
                          _c("p", {
                            domProps: {
                              textContent: _vm._s(_vm.currentItem.text)
                            }
                          }),
                          _vm._v(" "),
                          _c("p", {
                            domProps: {
                              textContent: _vm._s(
                                _vm.formatDate(_vm.currentItem.created_at)
                              )
                            }
                          })
                        ])
                      ],
                      1
                    )
                  : _vm._e()
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


// CONCATENATED MODULE: ./resources/js/pages/Suggestions/Suggestions.vue?vue&type=template&id=24f6eeb6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Suggestionsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      icons: {},
      page: 1,
      lastPage: 0,
      items: [],
      currentItem: {}
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/api/suggestion", {
        params: {
          page: this.page
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.lastPage = data.data.resource.last_page;
        _this.items = data.data.resource.data;
        if (_this.items.length) _this.currentItem = _this.items[0];
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Suggestions/Suggestions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Suggestions_Suggestionsvue_type_script_lang_js_ = (Suggestionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&
var Suggestionsvue_type_style_index_0_id_24f6eeb6_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/index.js + 1 modules
var VDivider = __webpack_require__("./node_modules/vuetify/lib/components/VDivider/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/index.js + 1 modules
var VPagination = __webpack_require__("./node_modules/vuetify/lib/components/VPagination/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Suggestions/Suggestions.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  Suggestions_Suggestionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "24f6eeb6",
  null
  
)

/* vuetify-loader */















installComponents_default()(component, {VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDivider: VDivider["VDivider"],VImg: VImg["VImg"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemAvatar: VList["VListItemAvatar"],VListItemContent: VList["VListItemContent"],VListItemSubtitle: VList["VListItemSubtitle"],VListItemTitle: VList["VListItemTitle"],VPagination: VPagination["VPagination"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Suggestions/Suggestions.vue"
/* harmony default export */ var Suggestions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_id_24f6eeb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Suggestions/Suggestions.vue?vue&type=style&index=0&id=24f6eeb6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_id_24f6eeb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_id_24f6eeb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_id_24f6eeb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suggestions_vue_vue_type_style_index_0_id_24f6eeb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);