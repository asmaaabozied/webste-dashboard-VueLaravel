(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./resources/js/pages/Admin/Employee/Employee.vue":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Admin/Employee/Employee.vue + 4 modules ***!
  \********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAvatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Employee/Employee.vue?vue&type=template&id=0d484536&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("admin.employee")))]),
      _vm._v(" "),
      _c("v-card-actions"),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-row",
            [
              _c(
                "v-avatar",
                {
                  attrs: {
                    color: "grey lighten-4",
                    size: "150",
                    onclick:
                      "document.getElementById('profileImageInput').click();"
                  }
                },
                [
                  _vm.profileImagePreview
                    ? _c("img", { attrs: { src: _vm.profileImagePreview } })
                    : _c(
                        "v-btn",
                        { attrs: { icon: "", "x-large": "" } },
                        [
                          _c(
                            "v-icon",
                            { attrs: { "x-large": "", color: "primary" } },
                            [_vm._v(_vm._s(_vm.icons.mdiAccountCircle))]
                          )
                        ],
                        1
                      )
                ],
                1
              ),
              _vm._v(" "),
              _c("input", {
                ref: "profileImage",
                staticStyle: { display: "none" },
                attrs: { type: "file", id: "profileImageInput" },
                on: { change: _vm.onProfileImageChange }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.imageErrors, function(e) {
            return _c("div", { key: e, staticClass: "red--text" }, [
              _vm._v(_vm._s(e))
            ])
          }),
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
                      "error-messages": _vm.usernameErrors,
                      label: _vm.$t("auth.username"),
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.username,
                      callback: function($$v) {
                        _vm.username = $$v
                      },
                      expression: "username"
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
                  _vm.id == 0
                    ? _c("v-text-field", {
                        attrs: {
                          type: _vm.showPassword ? "text" : "password",
                          "error-messages": _vm.passwordErrors,
                          label: _vm.$t("auth.password"),
                          outlined: "",
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
                    : _vm._e()
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
                  _vm.id == 0
                    ? _c("v-text-field", {
                        attrs: {
                          type: _vm.showPassword ? "text" : "password",
                          "append-icon": _vm.showPassword
                            ? _vm.icons.mdiEye
                            : _vm.icons.mdiEyeOff,
                          "error-messages": _vm.confirmErrors,
                          label: _vm.$t("auth.confirm"),
                          outlined: "",
                          rounded: "",
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
                    : _vm._e()
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
                      "error-messages": _vm.nameErrors,
                      label: _vm.$t("general.name"),
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
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
                      "error-messages": _vm.nationalityErrors,
                      label: _vm.$t("admin.nationality"),
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.nationality,
                      callback: function($$v) {
                        _vm.nationality = $$v
                      },
                      expression: "nationality"
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
                      "error-messages": _vm.phoneErrors,
                      label: _vm.$t("auth.phone"),
                      outlined: "",
                      rounded: "",
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.phone,
                      callback: function($$v) {
                        _vm.phone = $$v
                      },
                      expression: "phone"
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
                      label: _vm.$t("admin.idNumber"),
                      outlined: "",
                      rounded: "",
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.idNumber,
                      callback: function($$v) {
                        _vm.idNumber = $$v
                      },
                      expression: "idNumber"
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
                  _c("v-select", {
                    attrs: {
                      items: _vm.roles,
                      "item-text": "label",
                      "item-value": "id",
                      label: _vm.$t("admin.role"),
                      "error-messages": _vm.roleErrors,
                      rounded: "",
                      outlined: ""
                    },
                    model: {
                      value: _vm.role,
                      callback: function($$v) {
                        _vm.role = $$v
                      },
                      expression: "role"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "d-flex justify-center" },
        [
          _c(
            "v-btn",
            {
              attrs: { rounded: "", color: "primary", dark: "" },
              on: { click: _vm.save }
            },
            [_vm._v(_vm._s(_vm.$t("general.save")))]
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


// CONCATENATED MODULE: ./resources/js/pages/Admin/Employee/Employee.vue?vue&type=template&id=0d484536&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Employee/Employee.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Employeevue_type_script_lang_js_ = ({
  name: "employee",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Employee" : "موظف"
    };
  },
  data: function data() {
    return {
      icons: {
        mdiEye: mdi["mdiEye"],
        mdiEyeOff: mdi["mdiEyeOff"],
        mdiAccountCircle: mdi["mdiAccountCircle"]
      },
      name: null,
      username: null,
      password: null,
      confirm: null,
      nationality: null,
      phone: null,
      idNumber: null,
      showPassword: false,
      profileImagePreview: null,
      profileImage: null,
      roles: [],
      role: null,
      id: this.$route.params.id
    };
  },
  validations: {
    name: {
      required: validators["required"]
    },
    username: {
      required: validators["required"]
    },
    password: {
      required: Object(validators["requiredUnless"])(function () {
        if (this.id == 0) return false;else return true;
      })
    },
    confirm: {
      sameAsPassword: Object(validators["sameAs"])("password"),
      required: Object(validators["requiredUnless"])(function () {
        if (this.state == 0) return false;else return true;
      })
    },
    nationality: {
      required: validators["required"]
    },
    phone: {
      required: validators["required"]
    },
    idNumber: {
      required: validators["required"]
    },
    role: {
      required: validators["required"]
    },
    profileImage: {
      required: Object(validators["requiredUnless"])(function () {
        if (this.id == 0) return false;else return true;
      })
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

      var form = new FormData();
      form.append("name", this.name);
      form.append("user_name", this.username);
      if (this.id == 0) form.append("password", this.password);
      form.append("nationality", this.nationality);
      form.append("phone", this.phone);
      form.append("id_number", this.idNumber);
      if (this.profileImage) form.append("image", this.profileImage);
      form.append("role", this.role);
      if (this.id != 0) form.append("_method", "PUT");
      var url = this.id ? "/api/employee".concat(this.id == 0 ? '' : '/' + this.id) : "/api/employee";
      axios.post(url, form).then(function (res) {
        if (res.data.status != 200) {
          console.warn(err);
          return;
        }

        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });

        _this.$router.go(-1);
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    onProfileImageChange: function onProfileImageChange(e) {
      var file = e.target.files[0];
      this.profileImagePreview = URL.createObjectURL(file);
      this.profileImage = this.$refs.profileImage.files[0];
    },
    load: function load() {
      var _this2 = this;

      //load employee
      axios.get("/api/employee/".concat(this.id)).then(function (res) {
        var data = res.data.data;
        _this2.name = data.name;
        _this2.phone = data.phone;
        _this2.nationality = data.nationality;
        _this2.idNumber = data.id_number;
        _this2.role = data.role;
        _this2.username = data.user_info.user_name;
        _this2.profileImagePreview = data.image;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    createNew: function createNew() {
      this.name = null;
      this.username = null;
      this.password = null;
      this.confirm = null;
      this.nationality = null;
      this.phone = null;
      this.idNumber = null;
      this.showPassword = false;
      this.profileImagePreview = null;
      this.profileImage = null;
      this.role = null;
      this.$v.$reset();
    },
    loadDefaults: function loadDefaults() {
      var _this3 = this;

      //load roles
      axios.get("/api/allRole").then(function (res) {
        _this3.roles = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  computed: {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    usernameErrors: function usernameErrors() {
      var errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push(this.$t("validate.required"));
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
    },
    nationalityErrors: function nationalityErrors() {
      var errors = [];
      if (!this.$v.nationality.$dirty) return errors;
      !this.$v.nationality.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    phoneErrors: function phoneErrors() {
      var errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    roleErrors: function roleErrors() {
      var errors = [];
      if (!this.$v.role.$dirty) return errors;
      !this.$v.role.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    imageErrors: function imageErrors() {
      var errors = [];
      if (!this.$v.profileImage.$dirty) return errors;
      !this.$v.profileImage.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      if (vm.id == 0) vm.createNew();else vm.load();
    });
  },
  created: function created() {
    this.loadDefaults();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/Employee/Employee.vue?vue&type=script&lang=js&
 /* harmony default export */ var Employee_Employeevue_type_script_lang_js_ = (Employeevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/index.js + 1 modules
var VAvatar = __webpack_require__("./node_modules/vuetify/lib/components/VAvatar/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Employee/Employee.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Employee_Employeevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0d484536",
  null
  
)

/* vuetify-loader */












installComponents_default()(component, {VAvatar: VAvatar["VAvatar"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Employee/Employee.vue"
/* harmony default export */ var Employee = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);