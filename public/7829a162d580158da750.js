(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./resources/js/components/confirmDialog.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/confirmDialog.vue + 4 modules ***!
  \***************************************************************/
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/confirmDialog.vue?vue&type=template&id=6af947ed&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    { attrs: { value: _vm.isOpen, "max-width": "290" } },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", {
            staticClass: "headline",
            domProps: { textContent: _vm._s(_vm.title) }
          }),
          _vm._v(" "),
          _c("v-card-text", { domProps: { textContent: _vm._s(_vm.msg) } }),
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
                  on: {
                    click: function($event) {
                      return _vm.$emit("confirm")
                    }
                  }
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
                      return _vm.$emit("cancel")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("general.cancel")))]
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


// CONCATENATED MODULE: ./resources/js/components/confirmDialog.vue?vue&type=template&id=6af947ed&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/confirmDialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var confirmDialogvue_type_script_lang_js_ = ({
  name: "confirm-dialog",
  props: ["isOpen", "title", "msg"]
});
// CONCATENATED MODULE: ./resources/js/components/confirmDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_confirmDialogvue_type_script_lang_js_ = (confirmDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/components/confirmDialog.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_confirmDialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VDialog: VDialog["VDialog"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/confirmDialog.vue"
/* harmony default export */ var confirmDialog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/contentManagement/index.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/Admin/contentManagement/index.vue + 4 modules ***!
  \**************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/components/confirmDialog.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VProgressCircular/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/contentManagement/index.vue?vue&type=template&id=40d1b3a6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ma-10" },
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("admin.pages")))]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", dark: "", icon: "" },
              on: { click: _vm.addItem }
            },
            [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiPlusThick))])],
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
        : _c("v-simple-table", {
            attrs: { dense: "", "fixed-header": "" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("general.nameAr")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("general.nameEn")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("admin.pageOrder")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("general.updatedAt")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.items, function(item, i) {
                        return _c("tr", { key: i }, [
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(i + 1))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(item.name_ar))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(item.name_en))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(item.pageOrder))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(_vm.formatDate(item.updated_at)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "v-menu",
                                  {
                                    attrs: { "offset-y": "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      color: "black",
                                                      icon: "",
                                                      dark: ""
                                                    }
                                                  },
                                                  on
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.icons
                                                          .mdiDotsVertical
                                                      )
                                                    )
                                                  ])
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-list",
                                      [
                                        _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.view(item.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                _vm._s(_vm.$t("general.open"))
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteItem(item.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                _vm._s(_vm.$t("general.delete"))
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
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                },
                proxy: true
              }
            ])
          }),
      _vm._v(" "),
      _c("confirm-dialog", {
        attrs: {
          isOpen: _vm.deleteInfo.dialog,
          title: _vm.$t("general.delete"),
          msg: _vm.$t("general.isSure")
        },
        on: {
          cancel: function($event) {
            _vm.deleteInfo.dialog = false
          },
          confirm: _vm.doDelete
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/contentManagement/index.vue?vue&type=template&id=40d1b3a6&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// EXTERNAL MODULE: ./resources/js/components/confirmDialog.vue + 4 modules
var confirmDialog = __webpack_require__("./resources/js/components/confirmDialog.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/contentManagement/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var contentManagementvue_type_script_lang_js_ = ({
  name: "cms-index",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Content management" : "ادارة المحتوى"
    };
  },
  components: {
    confirmDialog: confirmDialog["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"],
        mdiPlusThick: mdi["mdiPlusThick"]
      },
      items: [],
      itemId: 0,
      deleteItemId: null,
      deleteDialog: false,
      isLoading: false,
      deleteInfo: {
        id: 0,
        dialog: false
      }
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      this.isLoading = true;
      this.items = [];
      axios.get("/api/contentManagement").then(function (res) {
        _this.items = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        return _this.isLoading = false;
      });
    },
    view: function view(id) {
      this.$router.push({
        name: "sa11",
        params: {
          id: id
        }
      });
    },
    deleteItem: function deleteItem(id) {
      this.deleteInfo.id = id;
      this.deleteInfo.dialog = true;
    },
    doDelete: function doDelete() {
      var _this2 = this;

      this.deleteInfo.dialog = false;
      axios["delete"]("/api/contentManagement/".concat(this.deleteInfo.id)).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "success"
        });

        _this2.load();
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    addItem: function addItem() {
      this.$router.push({
        name: "sa11",
        params: {
          id: 0
        }
      });
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/contentManagement/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Admin_contentManagementvue_type_script_lang_js_ = (contentManagementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js
var VProgressCircular = __webpack_require__("./node_modules/vuetify/lib/components/VProgressCircular/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/contentManagement/index.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Admin_contentManagementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











installComponents_default()(component, {VBtn: VBtn["VBtn"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VProgressCircular: VProgressCircular["VProgressCircular"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/contentManagement/index.vue"
/* harmony default export */ var contentManagement = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);