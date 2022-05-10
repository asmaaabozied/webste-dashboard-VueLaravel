(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./resources/js/pages/Sales/Transactions.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Sales/Transactions.vue + 4 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/pages/Sales/Product.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VPagination/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Transactions.vue?vue&type=template&id=7045dee1&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("transactions.transactions")))]),
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
                    _c("th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("general.name")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("general.actions")))])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.transactions, function(item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.name))]),
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
                                            return _vm.open(item)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(_vm.$t("products.view"))
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
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.pagesCount, "total-visible": 5, circle: "" },
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
          attrs: { "max-width": "50vw", scrollable: "" },
          model: {
            value: _vm.itemDialog,
            callback: function($$v) {
              _vm.itemDialog = $$v
            },
            expression: "itemDialog"
          }
        },
        [_c("product", { attrs: { id: _vm.itemId } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Sales/Transactions.vue?vue&type=template&id=7045dee1&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// EXTERNAL MODULE: ./resources/js/pages/Sales/Product.vue + 4 modules
var Product = __webpack_require__("./resources/js/pages/Sales/Product.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Transactions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Transactionsvue_type_script_lang_js_ = ({
  components: {
    product: Product["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      page: 1,
      pagesCount: 0,
      transactions: [{
        id: 0,
        name: "transactions 01"
      }, {
        id: 1,
        name: "transactions 02"
      }, {
        id: 2,
        name: "transactions 03"
      }, {
        id: 3,
        name: "transactions 04"
      }],
      itemId: 0
    };
  },
  methods: {
    open: function open(item) {
      this.$router.push({
        name: "sm6",
        params: {
          id: item.id
        }
      });
    },
    load: function load() {
      axios.get(" ").then(function (res) {})["catch"](function () {});
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {// vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Sales/Transactions.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sales_Transactionsvue_type_script_lang_js_ = (Transactionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

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

// CONCATENATED MODULE: ./resources/js/pages/Sales/Transactions.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Sales_Transactionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7045dee1",
  null
  
)

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["VBtn"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VPagination: VPagination["VPagination"],VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Sales/Transactions.vue"
/* harmony default export */ var Transactions = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);