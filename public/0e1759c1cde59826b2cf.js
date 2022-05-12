(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ "./resources/js/pages/Sales/Products.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/Sales/Products.vue + 4 modules ***!
  \***********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/pages/Sales/Product.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAvatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VProgressCircular/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/transitions/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Products.vue?vue&type=template&id=3a346170&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("products.products")))]),
      _vm._v(" "),
      _vm.itemDialog
        ? _c(
            "v-dialog",
            {
              attrs: { scrollable: "", "max-width": "60vw" },
              model: {
                value: _vm.itemDialog,
                callback: function($$v) {
                  _vm.itemDialog = $$v
                },
                expression: "itemDialog"
              }
            },
            [
              _c("product", {
                attrs: { id: _vm.itemId },
                on: {
                  close: function($event) {
                    _vm.itemDialog = false
                    _vm.load()
                  }
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.deleteDialog,
            callback: function($$v) {
              _vm.deleteDialog = $$v
            },
            expression: "deleteDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(_vm._s(_vm.$t("general.delete")))
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.$t("general.deleteMsg")))]),
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
                      on: { click: _vm.confirmDeleteItem }
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
                          _vm.deleteDialog = false
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { md: "2", lg: "2", xl: "2" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", icon: "" },
                  on: { click: _vm.addItem }
                },
                [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiPlusThick))])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.isLoading
        ? _c(
            "div",
            {
              staticClass: "text-center",
              staticStyle: { height: "50vh" },
              attrs: { width: "100%" }
            },
            [
              _c("v-progress-circular", {
                attrs: {
                  width: 7,
                  size: 70,
                  color: "primary",
                  indeterminate: ""
                }
              })
            ],
            1
          )
        : _c("v-slide-y-transition", { attrs: { mode: "in-out" } }, [
            _c(
              "div",
              {
                staticClass: "d-flex flex-wrap",
                staticStyle: { width: "100%" }
              },
              _vm._l(_vm.items, function(item, i) {
                return _c(
                  "v-card",
                  {
                    key: i,
                    staticClass: "ma-4",
                    attrs: { outlined: "", width: "25vw", elevation: "1" }
                  },
                  [
                    _c(
                      "v-card-actions",
                      { staticClass: "d-flex justify-end" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { small: "", icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteItem(item.id)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiClose))])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { small: "", icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.editItem(item)
                              }
                            }
                          },
                          [
                            _c("v-icon", [
                              _vm._v(_vm._s(_vm.icons.mdiPencilOutline))
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item",
                      { attrs: { "two-line": "" } },
                      [
                        _c(
                          "v-avatar",
                          {
                            staticClass: "ms-2 me-2 mb-2",
                            attrs: { size: "80", color: "grey lighten-4" }
                          },
                          [_c("v-img", { attrs: { src: item.image } })],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-content",
                          [
                            _c("v-list-item-title", {
                              staticClass: "headline mb-1",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.$i18n.locale == "en"
                                    ? item.name
                                    : item.name_ar
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("v-list-item-subtitle", [
                              _c("div", {
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$i18n.locale == "en"
                                      ? _vm.checkIfNotNull(
                                          item.category,
                                          "name"
                                        )
                                      : _vm.checkIfNotNull(
                                          item.category,
                                          "name_ar"
                                        )
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("div", {
                                domProps: {
                                  textContent: _vm._s(item.model_code)
                                }
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(
                                    item.price + " " + _vm.$t("general.sar")
                                  )
                                )
                              ])
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
              }),
              1
            )
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Sales/Products.vue?vue&type=template&id=3a346170&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// EXTERNAL MODULE: ./resources/js/pages/Sales/Product.vue + 4 modules
var Product = __webpack_require__("./resources/js/pages/Sales/Product.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Products.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Productsvue_type_script_lang_js_ = ({
  components: {
    product: Product["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiClose: mdi["mdiClose"],
        mdiPencilOutline: mdi["mdiPencilOutline"],
        mdiMagnify: mdi["mdiMagnify"],
        mdiPlusThick: mdi["mdiPlusThick"],
        mdiCheck: mdi["mdiCheck"],
        mdiChevronRight: mdi["mdiChevronRight"],
        mdiChevronLeft: mdi["mdiChevronLeft"]
      },
      items: [],
      itemDialog: false,
      deleteDialog: false,
      isLoading: false,
      itemId: 0,
      deleteItemId: null
    };
  },
  methods: {
    checkIfNotNull: function checkIfNotNull(item, prop) {
      if (item != undefined || item != null) {
        return item[prop];
      }

      return "";
    },
    deleteItem: function deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this = this;

      axios["delete"]("/api/product/".concat(this.deleteItemId)).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });

        _this.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.deleteDialog = false;
      });
    },
    editItem: function editItem(item) {
      this.itemId = item.id;
      this.itemDialog = true;
    },
    addItem: function addItem() {
      this.itemId = 0;
      this.itemDialog = true;
    },
    load: function load() {
      var _this2 = this;

      this.isLoading = true;
      axios.get("/api/product").then(function (res) {
        _this2.items = res.data.data;
      })["catch"](function (err) {
        _this2.$notify({
          text: err.response.data.message,
          type: "error"
        });
      })["finally"](function () {
        _this2.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Sales/Products.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sales_Productsvue_type_script_lang_js_ = (Productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/index.js + 1 modules
var VAvatar = __webpack_require__("./node_modules/vuetify/lib/components/VAvatar/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js
var VProgressCircular = __webpack_require__("./node_modules/vuetify/lib/components/VProgressCircular/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__("./node_modules/vuetify/lib/components/transitions/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Sales/Products.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Sales_Productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3a346170",
  null
  
)

/* vuetify-loader */



















installComponents_default()(component, {VAvatar: VAvatar["VAvatar"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VImg: VImg["VImg"],VListItem: VList["VListItem"],VListItemContent: VList["VListItemContent"],VListItemSubtitle: VList["VListItemSubtitle"],VListItemTitle: VList["VListItemTitle"],VProgressCircular: VProgressCircular["VProgressCircular"],VRow: VGrid["VRow"],VSlideYTransition: transitions["VSlideYTransition"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Sales/Products.vue"
/* harmony default export */ var Products = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);