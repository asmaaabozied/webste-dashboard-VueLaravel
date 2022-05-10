(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./resources/js/pages/Sales/Transaction.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Sales/Transaction.vue + 4 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Transaction.vue?vue&type=template&id=bf2fdafc&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("transactions.transaction")))]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mx-4",
              attrs: { rounded: "" },
              on: { click: _vm.viewInvoice }
            },
            [_vm._v(_vm._s(_vm.$t("transactions.viewInvoice")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("general.date")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [_vm._v(_vm._s(_vm.date))])
            ],
            1
          ),
          _vm._v(" "),
          _vm.discount
            ? _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("transactions.discount")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.discount))
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("transactions.netTotal")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _vm._v(_vm._s(_vm.netTotal))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("transactions.paymentMethod")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _vm._v(_vm._s(_vm.paymentMethod))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "4" } }, [
                _vm._v(_vm._s(_vm.$t("transactions.deliveryMethod")))
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "8" } }, [
                _vm._v(_vm._s(_vm.deliveryMethod))
              ])
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
                        _c("th", [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("general.name")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("general.quantity")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("general.price")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.items, function(item, i) {
                        return _c("tr", { key: i }, [
                          _c("td", [_vm._v(_vm._s(i + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.quantity))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.price))])
                        ])
                      }),
                      0
                    )
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Sales/Transaction.vue?vue&type=template&id=bf2fdafc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Transaction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Transactionvue_type_script_lang_js_ = ({
  props: {
    id: Number
  },
  data: function data() {
    return {
      date: null,
      discount: null,
      netTotal: null,
      paymentMethod: null,
      deliveryMethod: null,
      items: [{
        id: 1,
        name: "item 01",
        price: 10,
        quantity: 1
      }, {
        id: 2,
        name: "item 02",
        price: 20,
        quantity: 1
      }]
    };
  },
  methods: {
    load: function load() {
      axios.get("").then(function (res) {})["catch"](function (err) {});
      this.date = "01-01-2020";
      this.discount = 50;
      this.netTotal = 3000;
      this.paymentMethod = "cash";
      this.deliveryMethod = "fastship";
    },
    viewInvoice: function viewInvoice() {
      this.$router.push({
        name: "sm7",
        params: {
          id: this.id
        }
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Sales/Transaction.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sales_Transactionvue_type_script_lang_js_ = (Transactionvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Sales/Transaction.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Sales_Transactionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Sales/Transaction.vue"
/* harmony default export */ var Transaction = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);