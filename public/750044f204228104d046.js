(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./resources/js/pages/Auth/RegisterPage.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Auth/RegisterPage.vue + 4 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/pages/Auth/Register.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/RegisterPage.vue?vue&type=template&id=c466ab80&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "text-center" }, [
        _c("h2", { staticClass: "primary--text" }, [
          _vm._v(_vm._s(_vm.$t("auth.title")))
        ]),
        _vm._v(" "),
        _c("h3", [_vm._v(_vm._s(_vm.$t("auth.titleSub")))])
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4", xl: "3" } },
            [
              _c("register", {
                attrs: { type: "registerVisitor" },
                on: { close: _vm.closePage, confirmcode: _vm.confirmCode }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("span", [_vm._v(_vm._s(_vm.$t("auth.ifHave")))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mt-3",
              attrs: { rounded: "", outlined: "", color: "green" }
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-sm-center",
                  staticStyle: { "text-decoration": "none" },
                  attrs: { to: { name: "login" } }
                },
                [_vm._v(_vm._s(_vm.$t("auth.login")))]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { height: "100px", width: "200px" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Auth/RegisterPage.vue?vue&type=template&id=c466ab80&scoped=true&

// EXTERNAL MODULE: ./resources/js/pages/Auth/Register.vue + 4 modules
var Register = __webpack_require__("./resources/js/pages/Auth/Register.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/RegisterPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RegisterPagevue_type_script_lang_js_ = ({
  components: {
    register: Register["default"]
  },
  methods: {
    closePage: function closePage() {
      this.$router.push({
        name: "home"
      });
    },
    confirmCode: function confirmCode(username) {
      this.$router.push({
        name: 'confirmCode',
        params: {
          username: username
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Auth/RegisterPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_RegisterPagevue_type_script_lang_js_ = (RegisterPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Auth/RegisterPage.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Auth_RegisterPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c466ab80",
  null
  
)

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["VBtn"],VCol: VGrid["VCol"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/RegisterPage.vue"
/* harmony default export */ var RegisterPage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);