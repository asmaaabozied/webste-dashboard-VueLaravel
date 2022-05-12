(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./resources/js/pages/Admin/users/user.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Admin/users/user.vue + 4 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/users/user.vue?vue&type=template&id=67ac4abb&scoped=true&
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
                          "error-messages": _vm.nameArErrors,
                          rules: [
                            function(v) {
                              return !!v || _vm.$requiredRules
                            }
                          ],
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
                          rules: [
                            function(v) {
                              return !!v || _vm.$requiredRules
                            }
                          ],
                          "error-messages": _vm.nameEnErrors,
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
                          rules: [
                            function(v) {
                              return !!v || _vm.$requiredRules
                            }
                          ],
                          label: _vm.$t("code"),
                          "error-messages": _vm.CodeErrors,
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
                    { attrs: { cols: "12" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.devices,
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.manufactures,
                          label: _vm.$t("manufactures"),
                          "item-text":
                            _vm.$i18n.locale == "en" ? "name_en" : "name_ar",
                          "item-value": "id",
                          outlined: "",
                          rounded: "",
                          dense: ""
                        },
                        model: {
                          value: _vm.manufacture_id,
                          callback: function($$v) {
                            _vm.manufacture_id = $$v
                          },
                          expression: "manufacture_id"
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


// CONCATENATED MODULE: ./resources/js/pages/Admin/users/user.vue?vue&type=template&id=67ac4abb&scoped=true&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/users/user.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var uservue_type_script_lang_js_ = ({
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
      items: [],
      devices: [],
      manufactures: [],
      manufacture_id: [],
      icons: {}
    };
  },
  validations: {
    name_ar: {
      required: validators["required"]
    },
    name_en: {
      required: validators["required"]
    },
    code: {
      required: validators["required"]
    }
  },
  computed: {
    nameArErrors: function nameArErrors() {
      var errors = [];
      if (!this.$v.name_ar.$dirty) return errors;
      !this.$v.name_ar.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors: function nameEnErrors() {
      var errors = [];
      if (!this.$v.name_en.$dirty) return errors;
      !this.$v.name_en.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    CodeErrors: function CodeErrors() {
      var errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$v.$touch();
      if (this.$v.$invalid) return; // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   this.$notify({
      //     text: this.$t("general.checkInputs"),
      //     type: "warning",
      //   });
      //   return;
      // }

      var url = "/api/admin-panel/sparePart/createUpdate";
      var data = {
        name_ar: this.name_ar,
        name_en: this.name_en,
        code: this.code,
        device_id: this.device_id,
        manufacture_id: this.manufacture_id
      };

      if (this.id != 0) {
        data["id"] = this.id;
      }

      axios_default.a.post(url, data).then(function (res) {
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

      axios_default.a.get("/api/admin-panel/sparePart/getData/".concat(this.id)).then(function (res) {
        _this2.name_ar = res.data.data.resource.name_ar;
        _this2.name_en = res.data.data.resource.name_en;
        _this2.code = res.data.data.resource.code;
        _this2.device_id = res.data.data.resource.device_id;
        _this2.manufacture_id = res.data.data.resource.manufacture_id;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    loadDefaults: function loadDefaults() {
      var _this3 = this;

      axios_default.a.get("/api/admin-panel/devices/getAlldevices?page=".concat(this.page)).then(function (res) {
        _this3.devices = res.data.data.resource.data;
      });
      axios_default.a.get("/api/manufacture").then(function (res) {
        _this3.manufactures = res.data.data.data;
      });
    },
    createNew: function createNew() {
      this.name_ar = null;
      this.name_en = null;
      this.code = null;
      this.device_id = null;
      this.manufacture_id = null;
      this.$v.$reset();
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function handler(val, oldVal) {
        if (val > 0) this.load();else if (val == 0) this.createNew();
      }
    }
  },
  created: function created() {
    this.loadDefaults();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/users/user.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/users/user.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  users_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "67ac4abb",
  null
  
)

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/users/user.vue"
/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);