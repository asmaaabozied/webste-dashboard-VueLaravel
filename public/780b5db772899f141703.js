(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./resources/js/pages/Admin/users/user.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Admin/users/user.vue + 4 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
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
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("admin.users")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                { attrs: { justify: "center", "no-gutters": "" } },
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
                          dense: "",
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
                { attrs: { justify: "center", "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "error-messages": _vm.usernameErrors,
                          label: _vm.$t("auth.username"),
                          required: "",
                          outlined: "",
                          rounded: "",
                          dense: "",
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
                { attrs: { justify: "center", "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          type: _vm.showPassword ? "text" : "password",
                          "error-messages": _vm.passwordErrors,
                          label: _vm.$t("auth.password"),
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
                { attrs: { justify: "center", "no-gutters": "" } },
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
                          required: "",
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
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { attrs: { justify: "center", "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "error-messages": _vm.phoneErrors,
                          label: _vm.$t("auth.mobile"),
                          outlined: "",
                          rounded: "",
                          dense: "",
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
              _c("div", { staticClass: "text-center" }, [
                _c("p", [_vm._v(_vm._s(_vm.$t("auth.mobileForm")))])
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { attrs: { justify: "center", "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-select", {
                        attrs: {
                          label: _vm.$t("auth.accountType"),
                          items: _vm.accountTypes,
                          "item-value": "id",
                          "item-text": "label",
                          outlined: "",
                          rounded: "",
                          dense: ""
                        },
                        model: {
                          value: _vm.accountType,
                          callback: function($$v) {
                            _vm.accountType = $$v
                          },
                          expression: "accountType"
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
                { attrs: { justify: "center", "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-select", {
                        attrs: {
                          label: _vm.$t("auth.types"),
                          items: _vm.types,
                          "item-value": "name",
                          "item-text": "label",
                          outlined: "",
                          rounded: "",
                          dense: ""
                        },
                        model: {
                          value: _vm.type,
                          callback: function($$v) {
                            _vm.type = $$v
                          },
                          expression: "type"
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
                { attrs: { justify: "center", "no-gutters": "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("v-card-title", [
                            _vm._v(_vm._s(_vm.$t("general.location")))
                          ]),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c(
                              "div",
                              { staticClass: "map" },
                              [
                                _c(
                                  "GmapMap",
                                  {
                                    staticStyle: {
                                      width: "100%",
                                      height: "100%"
                                    },
                                    attrs: {
                                      center: _vm.mapCenter,
                                      zoom: 7,
                                      "map-type-id": "terrain"
                                    },
                                    on: { center_changed: _vm.updateCenter }
                                  },
                                  [
                                    _c("GmapMarker", {
                                      attrs: {
                                        position: _vm.location,
                                        draggable: true
                                      },
                                      on: {
                                        dragend: function($event) {
                                          return _vm.setLocation($event.latLng)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(_vm.locationErrors, function(e) {
                                  return _c(
                                    "div",
                                    { key: e, staticClass: "red--text" },
                                    [
                                      _vm._v(
                                        "\n                                  " +
                                          _vm._s(e) +
                                          "\n                              "
                                      )
                                    ]
                                  )
                                })
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            { staticClass: "d-flex justify-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { rounded: "" },
                                  on: { click: _vm.addMarker }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(_vm._s(_vm.icons.mdiMapMarkerPlus))
                                  ]),
                                  _vm._v(
                                    "\n                              " +
                                      _vm._s(_vm.$t("general.addMarker")) +
                                      "\n                          "
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { rounded: "" },
                                  on: { click: _vm.deleteMarker }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(_vm._s(_vm.icons.mdiMapMarkerOff))
                                  ]),
                                  _vm._v(
                                    "\n                              " +
                                      _vm._s(_vm.$t("general.deleteMarker")) +
                                      "\n                          "
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

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/users/user.vue?vue&type=script&lang=js&
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return _defineProperty({
      id: this.$route.params.id,
      name: "",
      username: null,
      password: null,
      confirm: null,
      phone: null,
      location: null,
      type: null,
      mapCenter: {
        lat: 24.774265,
        lng: 46.738586
      },
      showPassword: false,
      icons: {
        mdiEye: mdi["mdiEye"],
        mdiEyeOff: mdi["mdiEyeOff"],
        mdiMapMarkerPlus: mdi["mdiMapMarkerPlus"],
        mdiMapMarkerOff: mdi["mdiMapMarkerOff"]
      },
      accountTypes: [{
        id: 1,
        label: this.$t("auth.customerAccount")
      }, {
        id: 2,
        label: this.$t("auth.agentAccount")
      }],
      types: [{
        name: 'customer',
        label: this.$t("auth.customerAccount")
      }, {
        name: 'employee',
        label: this.$t("auth.employeeAccount")
      }],
      accountType: 1,
      acceptTerms: null,
      errorMessages: []
    }, "icons", {});
  },
  validations: {
    name: {
      required: validators["required"]
    },
    username: {
      required: validators["required"]
    },
    password: {
      required: validators["required"]
    },
    confirm: {
      required: validators["required"]
    },
    phone: {
      required: validators["required"],
      numeric: validators["numeric"],
      minLength: Object(validators["minLength"])(10)
    },
    location: {
      required: validators["required"]
    },
    acceptTerms: {
      sameAs: Object(validators["sameAs"])(function () {
        return true;
      })
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
    phoneErrors: function phoneErrors() {
      var errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push(this.$t("validate.required"));
      !this.$v.phone.numeric && errors.push(this.$t("validate.numeric"));
      !this.$v.phone.minLength && errors.push(this.$t("validate.minLengthNumric", {
        x: 10
      }));
      return errors;
    },
    locationErrors: function locationErrors() {
      var errors = [];
      if (!this.$v.location.$dirty) return errors;
      !this.$v.location.required && errors.push(this.$t("validate.setLocation"));
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

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











installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/users/user.vue"
/* harmony default export */ var user = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);