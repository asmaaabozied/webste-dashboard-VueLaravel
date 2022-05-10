(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./resources/js/pages/CustomPages/page.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/CustomPages/page.vue + 4 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VProgressCircular/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CustomPages/page.vue?vue&type=template&id=21680f58&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ma-4" }, [
    _vm.isLoading
      ? _c(
          "div",
          {
            staticClass: "d-flex align-center justify-center",
            staticStyle: { height: "50vh" },
            attrs: { width: "100%" }
          },
          [
            _c("v-progress-circular", {
              attrs: { width: 7, size: 70, color: "primary", indeterminate: "" }
            })
          ],
          1
        )
      : _c("div", { domProps: { innerHTML: _vm._s(_vm.content) } })
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/CustomPages/page.vue?vue&type=template&id=21680f58&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/CustomPages/page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var pagevue_type_script_lang_js_ = ({
  props: {
    id: Number
  },
  data: function data() {
    return {
      isLoading: false,
      content: null
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      this.isLoading = true;
      axios.get("/api/contentManagement/".concat(this.id)).then(function (res) {
        _this.$i18n.locale == "ar" ? _this.content = res.data.data.content_ar : _this.content = res.data.data.content_en;
      })["catch"](function (err) {})["finally"](function () {
        _this.isLoading = false;
      });
    }
  },
  created: function created() {
    if (this.id > 0) this.load();
  },
  watch: {
    id: {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal) this.load();
      }
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/CustomPages/page.vue?vue&type=script&lang=js&
 /* harmony default export */ var CustomPages_pagevue_type_script_lang_js_ = (pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js
var VProgressCircular = __webpack_require__("./node_modules/vuetify/lib/components/VProgressCircular/index.js");

// CONCATENATED MODULE: ./resources/js/pages/CustomPages/page.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  CustomPages_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


installComponents_default()(component, {VProgressCircular: VProgressCircular["VProgressCircular"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/CustomPages/page.vue"
/* harmony default export */ var page = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);