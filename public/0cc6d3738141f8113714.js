(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./resources/js/pages/Admin/Workshops/Workshops.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Admin/Workshops/Workshops.vue + 4 modules ***!
  \**********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAvatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VPagination/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Workshops/Workshops.vue?vue&type=template&id=2d1ccc90&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.workshops")))]),
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
                  attrs: { color: "primary", dark: "", icon: "" },
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
      _c("v-simple-table", {
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
                    _c("th", { staticClass: "text-center" }, [_vm._v("??")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("general.name")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [_vm._v("??")])
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
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          _c("v-avatar", { attrs: { size: "100" } }, [
                            _c("img", { attrs: { src: item.image } })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.name))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
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
                                      on: {
                                        click: function($event) {
                                          return _vm.open(item.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v(_vm._s(_vm.$t("general.open")))
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
                                        _vm._v(_vm._s(_vm.$t("general.delete")))
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
      _c(
        "div",
        [
          _c("v-pagination", {
            attrs: {
              length: Math.ceil(_vm.total / _vm.limit),
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
      ),
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/Workshops/Workshops.vue?vue&type=template&id=2d1ccc90&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Workshops/Workshops.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Workshopsvue_type_script_lang_js_ = ({
  name: "workshops",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Workshops" : "??????????"
    };
  },
  data: function data() {
    return {
      page: 1,
      total: 0,
      limit: 5,
      items: [],
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"],
        mdiPlusThick: mdi["mdiPlusThick"]
      },
      deleteDialog: false,
      deleteItemId: null
    };
  },
  methods: {
    open: function open(id) {
      this.$router.push({
        name: "sa7-2",
        params: {
          id: id
        }
      });
    },
    addItem: function addItem(id) {
      this.$router.push({
        name: "sa7-2",
        params: {
          id: 0
        }
      });
    },
    deleteItem: function deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    load: function load() {
      var _this = this;

      axios.get("/api/workshop?page=".concat(this.page)).then(function (res) {
        _this.items = res.data.data.resource.data;
        _this.limit = res.data.data.resource.per_page;
        _this.total = res.data.data.resource.total;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this2 = this;

      axios["delete"]("/api/workshop/".concat(this.deleteItemId)).then(function (res) {
        _this2.load();

        _this2.deleteDialog = false;
      })["catch"](function (err) {
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
// CONCATENATED MODULE: ./resources/js/pages/Admin/Workshops/Workshops.vue?vue&type=script&lang=js&
 /* harmony default export */ var Workshops_Workshopsvue_type_script_lang_js_ = (Workshopsvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/index.js + 1 modules
var VPagination = __webpack_require__("./node_modules/vuetify/lib/components/VPagination/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Workshops/Workshops.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Workshops_Workshopsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2d1ccc90",
  null
  
)

/* vuetify-loader */


















installComponents_default()(component, {VAvatar: VAvatar["VAvatar"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VPagination: VPagination["VPagination"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Workshops/Workshops.vue"
/* harmony default export */ var Workshops = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);