(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

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

/***/ "./resources/js/pages/Admin/Roles/Roles.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Admin/Roles/Roles.vue + 4 modules ***!
  \**************************************************************/
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Roles/Roles.vue?vue&type=template&id=59de8632&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("topNav.roles")))]),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "end" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "success",
                    to: { name: "sa14", params: { id: 0 } },
                    icon: ""
                  }
                },
                [_c("v-icon", [_vm._v("mdi-plus")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-simple-table", {
        attrs: { dense: "", "fixed-header": "", height: "60vh" },
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
                      _vm._v(_vm._s(_vm.$t("general.name")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [_vm._v(" ")])
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
                        _vm._v(_vm._s(item.display_name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
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
                                                    _vm.icons.mdiDotsVertical
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
                                        attrs: {
                                          to: {
                                            name: "role",
                                            params: { id: item.id }
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            textContent: _vm._s(
                                              _vm.$t("general.open")
                                            )
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


// CONCATENATED MODULE: ./resources/js/pages/Admin/Roles/Roles.vue?vue&type=template&id=59de8632&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// EXTERNAL MODULE: ./resources/js/components/confirmDialog.vue + 4 modules
var confirmDialog = __webpack_require__("./resources/js/components/confirmDialog.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Roles/Roles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Rolesvue_type_script_lang_js_ = ({
  name: "branch-index",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Roles And Permission" : "Roles And Permission"
    };
  },
  components: {
    confirmDialog: confirmDialog["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      items: [],
      deleteInfo: {
        id: 0,
        dialog: false
      }
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      this.items = [];
      axios.get("/api/admin-panel/getALLRoles").then(function (res) {
        _this.items = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    deleteItem: function deleteItem(id) {
      this.deleteInfo.id = id;
      this.deleteInfo.dialog = true;
    },
    doDelete: function doDelete() {
      var _this2 = this;

      axios["delete"]("/api/branch/".concat(this.deleteInfo.id)).then(function () {
        _this2.load();
      })["catch"](function (err) {
        _this2.$notify({
          text: err,
          type: "error"
        });
      })["finally"](function () {
        return _this2.deleteInfo.dialog = true;
      });
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/Roles/Roles.vue?vue&type=script&lang=js&
 /* harmony default export */ var Roles_Rolesvue_type_script_lang_js_ = (Rolesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Roles/Roles.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Roles_Rolesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "59de8632",
  null
  
)

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["VBtn"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Roles/Roles.vue"
/* harmony default export */ var Roles = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);