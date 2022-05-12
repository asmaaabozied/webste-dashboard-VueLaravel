(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./resources/js/pages/Notifications/Notifications.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Notifications/Notifications.vue + 4 modules ***!
  \************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Notifications/Notifications.vue?vue&type=template&id=8df0cb30&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pa-5" },
    [
      _c("v-simple-table", {
        attrs: { "fixed-header": "" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("general.message")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("general.date")))])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.message))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(item.created_at)))
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
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Notifications/Notifications.vue?vue&type=template&id=8df0cb30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Notifications/Notifications.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Notificationsvue_type_script_lang_js_ = ({
  name: "Notifications",
  data: function data() {
    return {};
  },
  computed: {
    items: function items() {
      return this.$store.state.notifications;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Notifications/Notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var Notifications_Notificationsvue_type_script_lang_js_ = (Notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Notifications/Notifications.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Notifications_Notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8df0cb30",
  null
  
)

/* vuetify-loader */


installComponents_default()(component, {VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Notifications/Notifications.vue"
/* harmony default export */ var Notifications = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);