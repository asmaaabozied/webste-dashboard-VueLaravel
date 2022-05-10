(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/pages/Auth/Password.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Auth/Password.vue + 4 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Password.vue?vue&type=template&id=5afbb789&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "pa-5" },
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("general.modifyPass")))]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      type: _vm.showPassword ? "text" : "password",
                      "error-messages": _vm.oldPasswordErrors,
                      label: _vm.$t("auth.oldPassword"),
                      outlined: "",
                      rounded: "",
                      dense: "",
                      "append-icon": _vm.showPassword
                        ? _vm.icons.mdiEye
                        : _vm.icons.mdiEyeOff,
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showPassword = !_vm.showPassword
                      }
                    },
                    model: {
                      value: _vm.oldPassword,
                      callback: function($$v) {
                        _vm.oldPassword = $$v
                      },
                      expression: "oldPassword"
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
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      type: _vm.showPassword ? "text" : "password",
                      "error-messages": _vm.passwordErrors,
                      label: _vm.$t("auth.newPassword"),
                      outlined: "",
                      dense: "",
                      rounded: "",
                      "append-icon": _vm.showPassword
                        ? _vm.icons.mdiEye
                        : _vm.icons.mdiEyeOff,
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showPassword = !_vm.showPassword
                      }
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
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
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      type: _vm.showPassword ? "text" : "password",
                      "append-icon": _vm.showPassword
                        ? _vm.icons.mdiEye
                        : _vm.icons.mdiEyeOff,
                      "error-messages": _vm.confirmErrors,
                      label: _vm.$t("auth.confirm"),
                      outlined: "",
                      rounded: "",
                      dense: "",
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showPassword = !_vm.showPassword
                      },
                      change: function($event) {
                        return _vm.$v.confirm.$touch()
                      },
                      blur: function($event) {
                        return _vm.$v.confirm.$touch()
                      }
                    },
                    model: {
                      value: _vm.confirm,
                      callback: function($$v) {
                        _vm.confirm = $$v
                      },
                      expression: "confirm"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
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
                        staticClass: "mx-2",
                        attrs: { rounded: "", color: "primary" },
                        on: { click: _vm.save }
                      },
                      [_vm._v(_vm._s(_vm.$t("general.save")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-2",
                        attrs: {
                          rounded: "",
                          color: "secondary",
                          to: { name: "home" }
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Auth/Password.vue?vue&type=template&id=5afbb789&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Password.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Passwordvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      oldPassword: null,
      password: null,
      confirm: null,
      showPassword: false,
      icons: {
        mdiEye: mdi["mdiEye"],
        mdiEyeOff: mdi["mdiEyeOff"]
      }
    };
  },
  validations: {
    password: {
      required: validators["required"]
    },
    confirm: {
      sameAsPassword: Object(validators["sameAs"])("password"),
      required: validators["required"]
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
        this.$notify({
          text: this.$t('general.checkInputs'),
          type: "error"
        });
      }

      axios_default.a.post("/api/updatePassword", {
        old_password: this.oldPassword,
        new_password: this.password
      }).then(function (res) {
        _this.$notify({
          text: _this.$t("auth.successChangePass"),
          type: "success"
        });

        _this.$store.dispatch("logOut").then(function (res) {
          _this.$notify({
            text: _this.$t("auth.successLogout"),
            type: "info"
          });
        })["catch"](function (err) {
          return console.log(err);
        })["finally"](function () {
          _this.$router.push({
            name: "home"
          });
        });

        _this.$emit('close');
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  computed: {
    oldPasswordErrors: function oldPasswordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    confirmErrors: function confirmErrors() {
      var errors = [];
      if (!this.$v.confirm.$dirty) return errors;
      !this.$v.confirm.required && errors.push(this.$t("validate.required"));
      !this.$v.confirm.sameAsPassword && errors.push(this.$t("validate.confirmNoMatch"));
      return errors;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Auth/Password.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_Passwordvue_type_script_lang_js_ = (Passwordvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Auth/Password.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Auth_Passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/Password.vue"
/* harmony default export */ var Password = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);