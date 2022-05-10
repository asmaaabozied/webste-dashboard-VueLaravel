(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.b-section[data-v-2dbae867] {\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 15px;\n}\n.b-container[data-v-2dbae867] {\n  display: flex;\n  flex-wrap: wrap;\n  width: auto;\n  justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/Customer/services/Services.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Customer/services/Services.vue + 5 modules ***!
  \***********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/services/Services.vue?vue&type=template&id=2dbae867&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "b-section b-back ma-5" }, [
    _c("div", { staticClass: "pa-4" }, [
      _c(
        "h3",
        { staticClass: "m-0", class: { "text-right": _vm.$vuetify.rtl } },
        [_vm._v(_vm._s(_vm.$t("services.inmaServicesSection")))]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "pa-3" }, [
      _c(
        "div",
        { staticClass: "b-container" },
        _vm._l(_vm.items, function(item) {
          return _c("service-item", {
            key: item.id,
            staticClass: "ma-4",
            attrs: { item: item }
          })
        }),
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Customer/services/Services.vue?vue&type=template&id=2dbae867&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./resources/js/pages/Customer/services/ServiceItem.vue
var ServiceItem_render, ServiceItem_staticRenderFns
var script = {}


/* normalize component */

var component = Object(componentNormalizer["default"])(
  script,
  ServiceItem_render,
  ServiceItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/pages/Customer/services/ServiceItem.vue"
/* harmony default export */ var ServiceItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/services/Services.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Servicesvue_type_script_lang_js_ = ({
  components: {
    ServiceItem: ServiceItem
  },
  data: function data() {
    return {
      items: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/getAllService').then(function (_ref) {
      var data = _ref.data;
      _this.items = data.data;
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Customer/services/Services.vue?vue&type=script&lang=js&
 /* harmony default export */ var services_Servicesvue_type_script_lang_js_ = (Servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&
var Servicesvue_type_style_index_0_id_2dbae867_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&");

// CONCATENATED MODULE: ./resources/js/pages/Customer/services/Services.vue






/* normalize component */

var Services_component = Object(componentNormalizer["default"])(
  services_Servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2dbae867",
  null
  
)

/* hot reload */
if (false) { var api; }
Services_component.options.__file = "resources/js/pages/Customer/services/Services.vue"
/* harmony default export */ var Services = __webpack_exports__["default"] = (Services_component.exports);

/***/ }),

/***/ "./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_2dbae867_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/services/Services.vue?vue&type=style&index=0&id=2dbae867&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_2dbae867_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_2dbae867_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_2dbae867_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_2dbae867_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);