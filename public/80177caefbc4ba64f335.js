(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "devices",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "device" : "device"
    };
  },
  data: function data() {
    return {
      id: this.$route.params.id,
      name_ar: null,
      name_en: null,
      code: null,
      device_id: null,
      devices: [],
      preDepartment: this.$route.params.preDepartment,
      icons: {}
    };
  },
  validations: {
    name_ar: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    name_en: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    code: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      var url = "/api/admin-panel/sparePart/createUpdate";
      var data = {
        name_ar: this.name_ar,
        name_en: this.name_en,
        code: this.code,
        device_id: this.device_id
      };

      if (this.id != 0) {
        data["id"] = this.id;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });

        _this.$router.push({
          name: "sparePart"
        });
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    load: function load() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/admin-panel/sparePart/getData/".concat(this.id)).then(function (res) {
        _this2.name_ar = res.data.data.resource.name_ar;
        _this2.name_en = res.data.data.resource.name_en;
        _this2.code = res.data.data.resource.code;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    loadDefaults: function loadDefaults() {
      var _this3 = this;

      // axios.get(`api/devices`)
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/admin-panel/devices/getAlldevices?page=".concat(this.page)).then(function (res) {
        if (!_this3.$roleEquals('admin') || _this3.$roleEquals('system_manager')) {
          _this3.devices = res.data.data.filter(function (item) {
            return item.id == _this3.device;
          });
          _this3.types = _this3.types.filter(function (item) {
            return item.id == _this3.device;
          });
        } else {
          _this3.devices = res.data.data;
        }
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    createNew: function createNew() {
      this.name_ar = null;
      this.name_en = null;
      this.code = null;
      this.$v.$reset();
    },
    watch: {
      id: {
        immediate: true,
        handler: function handler(val, oldVal) {
          if (val > 0) this.load();else if (val == 0) this.createNew();
        }
      }
    },
    computed: {
      name_ar_errors: function name_ar_errors() {
        var errors = [];
        if (!this.$v.type.$dirty) return errors;
        !this.$v.type.required && errors.push(this.$t("validate.required"));
        return errors;
      },
      name_en_errors: function name_en_errors() {
        var errors = [];
        if (!this.$v.no.$dirty) return errors;
        !this.$v.no.required && errors.push(this.$t("validate.required"));
        return errors;
      }
    },
    created: function created() {
      this.loadDefaults();
      if (this.preDepartment) this.device = this.device;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SparePart_vue_vue_type_template_id_31b8803f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SparePart.vue?vue&type=template&id=31b8803f&scoped=true& */ "./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=template&id=31b8803f&scoped=true&");
/* harmony import */ var _SparePart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SparePart.vue?vue&type=script&lang=js& */ "./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SparePart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SparePart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SparePart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SparePart_vue_vue_type_template_id_31b8803f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SparePart_vue_vue_type_template_id_31b8803f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31b8803f",
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Devices/SpareParts/SparePart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SparePart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SparePart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SparePart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=template&id=31b8803f&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=template&id=31b8803f&scoped=true& + 1 modules ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "render", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=template&id=31b8803f&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex flex-row justify-center mt-10" },
    [
      _c(
        "v-card",
        {
          staticClass: "pa-12 mb-12",
          attrs: { width: "60vw", elevation: "3" }
        },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("admin.sparePart")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: _vm.$t("service.name_ar"),
                          required: "",
                          outlined: "",
                          rounded: "",
                          autocomplete: "off",
                          autocorrect: "off",
                          spellcheck: "false"
                        },
                        model: {
                          value: _vm.name_ar,
                          callback: function($$v) {
                            _vm.name_ar = $$v
                          },
                          expression: "name_ar"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: _vm.$t("service.name_en"),
                          required: "",
                          outlined: "",
                          rounded: "",
                          autocomplete: "off",
                          autocorrect: "off",
                          spellcheck: "false"
                        },
                        model: {
                          value: _vm.name_en,
                          callback: function($$v) {
                            _vm.name_en = $$v
                          },
                          expression: "name_en"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: _vm.$t("code"),
                          required: "",
                          outlined: "",
                          rounded: "",
                          autocomplete: "off",
                          autocorrect: "off",
                          spellcheck: "false"
                        },
                        model: {
                          value: _vm.code,
                          callback: function($$v) {
                            _vm.code = $$v
                          },
                          expression: "code"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.devices,
                          "error-messages": _vm.departmentErrors,
                          label: _vm.$t("general.devices"),
                          "item-text":
                            _vm.$i18n.locale == "en" ? "name_en" : "name_ar",
                          "item-value": "id",
                          outlined: "",
                          rounded: "",
                          dense: ""
                        },
                        model: {
                          value: _vm.device_id,
                          callback: function($$v) {
                            _vm.device_id = $$v
                          },
                          expression: "device_id"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "12" } }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-1",
                            attrs: { rounded: "", color: "primary" },
                            on: { click: _vm.save }
                          },
                          [_vm._v(_vm._s(_vm.$t("general.save")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-1",
                            attrs: { rounded: "" },
                            on: {
                              click: function($event) {
                                return _vm.$router.go(-1)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("general.cancel")))]
                        )
                      ],
                      1
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/Devices/SpareParts/SparePart.vue?vue&type=template&id=31b8803f&scoped=true&


/***/ })

}]);