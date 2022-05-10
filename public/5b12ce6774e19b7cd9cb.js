(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.b-section[data-v-4f068552] {\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 15px;\n  overflow: hidden;\n}\n.b-form-row[data-v-4f068552] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 100px 30px 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/Customer/order/jobApplicationOrder.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Customer/order/jobApplicationOrder.vue + 4 modules ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VFileInput/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=template&id=4f068552&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ma-5 b-section" }, [
    _c("div", { staticClass: "pa-2 px-5 b-back" }, [
      _c("h3", [_vm._v(_vm._s(_vm.$t("jobApplication.order")))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "pt-4" }, [
      _c(
        "div",
        { staticClass: "b-form-row d-flex align-start" },
        [
          _c("v-file-input", {
            attrs: {
              rounded: "",
              dense: "",
              outlined: "",
              "prepend-icon": _vm.icons.mdiAttachment,
              label: _vm.$t("jobApplication.cv") + "  (PDF)",
              accept: ".pdf",
              "error-messages": _vm.cvErrors
            },
            model: {
              value: _vm.form.cv,
              callback: function($$v) {
                _vm.$set(_vm.form, "cv", $$v)
              },
              expression: "form.cv"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "b-form-row d-flex align-start" },
        [
          _c("v-text-field", {
            attrs: {
              label: _vm.$t("jobApplication.jobType"),
              autocomplete: "off",
              autocorrect: "off",
              spellcheck: "false",
              "error-messages": _vm.jobTypeErrors,
              dense: "",
              outlined: "",
              rounded: ""
            },
            model: {
              value: _vm.form.job_type,
              callback: function($$v) {
                _vm.$set(_vm.form, "job_type", $$v)
              },
              expression: "form.job_type"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pa-6 d-flex justify-end" },
        [
          _c(
            "v-btn",
            {
              staticClass: "mx-2",
              attrs: { rounded: "", color: "primary" },
              on: {
                click: function($event) {
                  return _vm.add()
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("jobApplication.send")))]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mx-2",
              attrs: { rounded: "", color: "secondary", to: { name: "home" } }
            },
            [_vm._v(_vm._s(_vm.$t("general.cancel")))]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=template&id=4f068552&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var jobApplicationOrdervue_type_script_lang_js_ = ({
  name: "jobApplicationOrder",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Job application" : "طلب توظيف"
    };
  },
  data: function data() {
    return {
      icons: {
        mdiAttachment: mdi["mdiAttachment"]
      },
      form: {
        cv: null,
        job_type: ""
      }
    };
  },
  validations: {
    form: {
      cv: {
        required: validators["required"]
      },
      job_type: {
        required: validators["required"]
      }
    }
  },
  methods: {
    add: function add() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      var form = new FormData();
      form.append("cv", this.form.cv);
      form.append("job_type", this.form.job_type);
      axios.post("/api/jobApplicationOrder", form).then(function (_ref) {
        var data = _ref.data;

        if (data.error) {
          _this.$notify({
            text: data.error,
            type: "error"
          });

          return;
        }

        _this.$notify({
          text: "Job application order has been send",
          type: "success"
        });

        _this.$router.push({
          name: 'c2'
        });
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    resetForm: function resetForm() {
      this.form = {
        cv: null
      };
      this.$v.$reset();
    }
  },
  computed: {
    cvErrors: function cvErrors() {
      var errors = [];
      if (!this.$v.form.cv.$dirty) return errors;
      !this.$v.form.cv.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    jobTypeErrors: function jobTypeErrors() {
      var errors = [];
      if (!this.$v.form.job_type.$dirty) return errors;
      !this.$v.form.job_type.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_jobApplicationOrdervue_type_script_lang_js_ = (mdi["default"]); 
// EXTERNAL MODULE: ./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&
var jobApplicationOrdervue_type_style_index_0_id_4f068552_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/index.js + 1 modules
var VFileInput = __webpack_require__("./node_modules/vuetify/lib/components/VFileInput/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Customer/order/jobApplicationOrder.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  order_jobApplicationOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4f068552",
  null
  
)

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["VBtn"],VFileInput: VFileInput["VFileInput"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/order/jobApplicationOrder.vue"
/* harmony default export */ var jobApplicationOrder = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobApplicationOrder_vue_vue_type_style_index_0_id_4f068552_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Customer/order/jobApplicationOrder.vue?vue&type=style&index=0&id=4f068552&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobApplicationOrder_vue_vue_type_style_index_0_id_4f068552_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobApplicationOrder_vue_vue_type_style_index_0_id_4f068552_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobApplicationOrder_vue_vue_type_style_index_0_id_4f068552_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_jobApplicationOrder_vue_vue_type_style_index_0_id_4f068552_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);