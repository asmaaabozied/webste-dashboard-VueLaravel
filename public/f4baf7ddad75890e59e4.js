(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./resources/js/pages/ConsultEmp/Orders.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/ConsultEmp/Orders.vue + 4 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultEmp/Orders.vue?vue&type=template&id=a63c1602&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("general.orders")))]),
      _vm._v(" "),
      _vm.items.length > 0
        ? _c("v-simple-table", {
            attrs: { height: "80vh", dense: "", "fixed-header": "" },
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function() {
                    return [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("#")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(_vm.$t("general.description")))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(_vm.$t("myRequests.requestStatus")))
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(_vm._s(_vm.$t("general.createdAt")))
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
                              _vm._v(
                                _vm._s(
                                  item.consultant_order.description.substr(
                                    0,
                                    25
                                  ) + " .."
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.$getOrderStatus(
                                    item.consultant_order.order_info.status
                                  ).label
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.formatDate(
                                    item.consultant_order.created_at
                                  )
                                )
                              )
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
                                                  return _vm.open(
                                                    item.consultant_order.id
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
              ],
              null,
              false,
              880977134
            )
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/ConsultEmp/Orders.vue?vue&type=template&id=a63c1602&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultEmp/Orders.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: [],
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      }
    };
  },
  methods: {
    open: function open(id) {
      this.$router.push({
        name: "ce3",
        params: {
          id: id
        }
      });
    },
    load: function load() {
      var _this = this;

      axios.post("/api/getAuthDetails?atype=1").then(function (res) {
        _this.items = res.data.data.order_info;
      })["catch"](function (err) {
        console.warn(err);
      });
      this.items = [];
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/ConsultEmp/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConsultEmp_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/ConsultEmp/Orders.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  ConsultEmp_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a63c1602",
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ConsultEmp/Orders.vue"
/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);