(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./resources/js/pages/Sales/Invoice.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Sales/Invoice.vue + 4 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Invoice.vue?vue&type=template&id=8822ad5e&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("transactions.invoice")))]),
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Sales/Invoice.vue?vue&type=template&id=8822ad5e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Sales/Invoice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Invoicevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      icons: {},
      page: 1,
      pagesCount: 0,
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
      axios.get(" ").then(function (res) {})["catch"](function () {});
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {// vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Sales/Invoice.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sales_Invoicevue_type_script_lang_js_ = (Invoicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Sales/Invoice.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Sales_Invoicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8822ad5e",
  null
  
)

/* vuetify-loader */


installComponents_default()(component, {VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Sales/Invoice.vue"
/* harmony default export */ var Invoice = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);