(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#image-preview[data-v-0f921738] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n#preview-toolbar[data-v-0f921738] {\n  background: linear-gradient(to bottom, black, rgba(255, 0, 0, 0));\n}\n#image-preview-full[data-v-0f921738] {\n  width: 70%;\n}\n#preview-card-back[data-v-0f921738] {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/imagePreview.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/imagePreview.vue + 4 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCarousel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VHover/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VOverlay/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagePreview.vue?vue&type=template&id=0f921738&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-hover", {
        attrs: { "close-delay": "200" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var hover = ref.hover
              return [
                _vm.src
                  ? _c(
                      "v-img",
                      {
                        attrs: {
                          src: _vm.src,
                          width: _vm.width,
                          height: _vm.height
                        },
                        on: {
                          click: function($event) {
                            _vm.imageModal = true
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "d-flex justify-center align-center",
                            attrs: { id: "image-preview" }
                          },
                          [
                            _c(
                              "v-overlay",
                              { attrs: { absolute: true, value: hover } },
                              [
                                _c(
                                  "v-icon",
                                  { attrs: { color: "white", "x-large": "" } },
                                  [_vm._v(_vm._s(_vm.icons.mdiArrowExpandAll))]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  : _vm.images
                  ? _c(
                      "v-carousel",
                      { attrs: { width: _vm.width, height: _vm.height } },
                      _vm._l(_vm.images, function(item, i) {
                        return _c(
                          "v-carousel-item",
                          {
                            key: i,
                            attrs: {
                              src: item,
                              "reverse-transition": "fade-transition",
                              transition: "fade-transition"
                            },
                            on: {
                              click: function($event) {
                                _vm.imageModal = true
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-center align-center",
                                attrs: { id: "image-preview" }
                              },
                              [
                                _c(
                                  "v-overlay",
                                  { attrs: { absolute: true, value: hover } },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        attrs: { color: "white", "x-large": "" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.icons.mdiArrowExpandAll)
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      1
                    )
                  : _c("div", {
                      style: {
                        width: _vm.width,
                        height: _vm.height,
                        "background-color: lightgray;": 1
                      }
                    })
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            scrollable: "",
            fullscreen: "",
            transition: "fade-transition"
          },
          model: {
            value: _vm.imageModal,
            callback: function($$v) {
              _vm.imageModal = $$v
            },
            expression: "imageModal"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { id: "preview-card-back" } },
            [
              _c(
                "v-card-title",
                {
                  staticClass: "d-flex justify-space-between",
                  attrs: { id: "preview-toolbar" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "", fab: "" },
                      on: {
                        click: function($event) {
                          _vm.imageModal = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiArrowLeft))])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "", fab: "" },
                      on: { click: _vm.downloadFile }
                    },
                    [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiDownload))])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "d-flex justify-center align-center" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "d-flex justify-center align-center",
                      attrs: { id: "image-preview-full" }
                    },
                    [
                      _vm.src
                        ? _c("v-img", { attrs: { src: _vm.src, contain: "" } })
                        : _vm.images
                        ? _c(
                            "v-carousel",
                            {
                              attrs: {
                                height: "100%",
                                "hide-delimiters": "",
                                "hide-delimiter-background": ""
                              },
                              model: {
                                value: _vm.currentIndex,
                                callback: function($$v) {
                                  _vm.currentIndex = $$v
                                },
                                expression: "currentIndex"
                              }
                            },
                            _vm._l(_vm.images, function(item, i) {
                              return _c(
                                "v-carousel-item",
                                {
                                  key: i,
                                  attrs: {
                                    "reverse-transition": "fade-transition",
                                    transition: "fade-transition"
                                  }
                                },
                                [
                                  _c("v-img", {
                                    attrs: { src: item, contain: "" }
                                  })
                                ],
                                1
                              )
                            }),
                            1
                          )
                        : _vm._e()
                    ],
                    1
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/components/imagePreview.vue?vue&type=template&id=0f921738&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/imagePreview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var imagePreviewvue_type_script_lang_js_ = ({
  props: ["width", "height", "src", "images"],
  data: function data() {
    return {
      icons: {
        mdiArrowExpandAll: mdi["mdiArrowExpandAll"],
        mdiArrowLeft: mdi["mdiArrowLeft"],
        mdiDownload: mdi["mdiDownload"]
      },
      imageModal: false,
      currentIndex: null
    };
  },
  methods: {
    downloadFile: function downloadFile() {
      var url = this.src ? this.src : this.images[this.currentIndex];
      var method = "GET";
      axios.request({
        url: url,
        method: method,
        responseType: "blob"
      }).then(function (response) {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", url.replace(/^.*[\\\/]/, ""));
        document.body.appendChild(fileLink);
        fileLink.click();
        fileLink.remove();
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./resources/js/components/imagePreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_imagePreviewvue_type_script_lang_js_ = (imagePreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&
var imagePreviewvue_type_style_index_0_id_0f921738_scoped_true_lang_css_ = __webpack_require__("./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/index.js + 2 modules
var VCarousel = __webpack_require__("./node_modules/vuetify/lib/components/VCarousel/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/index.js + 1 modules
var VHover = __webpack_require__("./node_modules/vuetify/lib/components/VHover/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VOverlay/index.js + 1 modules
var VOverlay = __webpack_require__("./node_modules/vuetify/lib/components/VOverlay/index.js");

// CONCATENATED MODULE: ./resources/js/components/imagePreview.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_imagePreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0f921738",
  null
  
)

/* vuetify-loader */












installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCarousel: VCarousel["VCarousel"],VCarouselItem: VCarousel["VCarouselItem"],VDialog: VDialog["VDialog"],VHover: VHover["VHover"],VIcon: VIcon["VIcon"],VImg: VImg["VImg"],VOverlay: VOverlay["VOverlay"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/imagePreview.vue"
/* harmony default export */ var imagePreview = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imagePreview_vue_vue_type_style_index_0_id_0f921738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/imagePreview.vue?vue&type=style&index=0&id=0f921738&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imagePreview_vue_vue_type_style_index_0_id_0f921738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imagePreview_vue_vue_type_style_index_0_id_0f921738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imagePreview_vue_vue_type_style_index_0_id_0f921738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imagePreview_vue_vue_type_style_index_0_id_0f921738_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);