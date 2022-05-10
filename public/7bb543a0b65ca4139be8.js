(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./resources/js/pages/Agent/Orders.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Agent/Orders.vue + 4 modules ***!
  \*********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VProgressCircular/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/Orders.vue?vue&type=template&id=eec45050&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.orders.title")))]),
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
                          _vm._v(_vm._s(_vm.$t("myRequests.requestStatus")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("myRequests.requestType")))
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("myRequests.requestDate")))
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
                            _vm._v(_vm._s(item.id))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(_vm.$getOrderStatus(item.status).label)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(_vm.$getOrdertype(item.type)))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(_vm.formatDate(item.created_at)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
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
                                                return _vm.open(
                                                  item[item.type].id
                                                )
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
                                                return _vm.deleteOrder(item.id)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                _vm._s(_vm.$t("general.finish"))
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


// CONCATENATED MODULE: ./resources/js/pages/Agent/Orders.vue?vue&type=template&id=eec45050&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/Orders.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Ordersvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      items: [],
      deleteDialog: false,
      deleteInfo: {
        id: null
      },
      isLoading: false
    };
  },
  methods: {
    open: function open(id) {
      this.$router.push({
        name: "g6",
        params: {
          id: id
        }
      });
    },
    deleteOrder: function deleteOrder(id) {
      this.deleteInfo.id = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this = this;

      axios["delete"]("/api/InstallmentOrder/".concat(this.deleteInfo.id)).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "info"
        });

        _this.deleteInfo.id = null;
        _this.deleteInfo.type = null;
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.deleteDialog = false;

        _this.load();
      });
    },
    load: function load() {
      var _this2 = this;

      axios.post("/api/getAuthDetails?atype=1").then(function (res) {
        _this2.items = res.data.data.order_info;
      })["catch"](function () {
        console.warn(err);
      })["finally"](function () {
        _this2.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Agent/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var Agent_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js
var VProgressCircular = __webpack_require__("./node_modules/vuetify/lib/components/VProgressCircular/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Agent/Orders.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Agent_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "eec45050",
  null
  
)

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VProgressCircular: VProgressCircular["VProgressCircular"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Agent/Orders.vue"
/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);