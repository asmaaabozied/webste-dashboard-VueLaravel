(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.map[data-v-593630de] {\n    width: 100%;\n    height: 400px;\n    background-color: gray;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue + 4 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCheckbox/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { elevation: "3" } },
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("auth.registerTitle")))]),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "mt-16" },
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
                                staticStyle: { width: "100%", height: "100%" },
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
                                    "\n                                " +
                                      _vm._s(e) +
                                      "\n                            "
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
                                "\n                            " +
                                  _vm._s(_vm.$t("general.addMarker")) +
                                  "\n                        "
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
                                "\n                            " +
                                  _vm._s(_vm.$t("general.deleteMarker")) +
                                  "\n                        "
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
            { attrs: { justify: "center", "no-gutters": "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-checkbox", {
                    attrs: { "error-messages": _vm.termsErrors },
                    scopedSlots: _vm._u([
                      {
                        key: "label",
                        fn: function() {
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.$t("general.iAccept")) +
                                "  \n                        "
                            ),
                            _c(
                              "router-link",
                              {
                                staticClass: "blue--text",
                                attrs: { to: { name: "terms" } }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("general.acceptTerms")) +
                                    "\n                        "
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.acceptTerms,
                      callback: function($$v) {
                        _vm.acceptTerms = $$v
                      },
                      expression: "acceptTerms"
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
                        on: { click: _vm.register }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("auth.register")) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-2",
                        attrs: { rounded: "", color: "secondary" },
                        on: {
                          click: function($event) {
                            return _vm.$emit("close")
                          }
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("general.cancel")) +
                            "\n                    "
                        )
                      ]
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


// CONCATENATED MODULE: ./resources/js/pages/Auth/Register.vue?vue&type=template&id=593630de&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Registervue_type_script_lang_js_ = ({
  name: "register",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Inma register new account" : "تسجيل حساب جديد إنماء"
    };
  },
  props: {
    type: String
  },
  data: function data() {
    return {
      name: "",
      username: null,
      password: null,
      confirm: null,
      phone: null,
      location: null,
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
      accountType: 1,
      acceptTerms: null,
      errorMessages: []
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
      required: validators["required"]
    },
    confirm: {
      sameAsPassword: Object(validators["sameAs"])("password"),
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
  methods: {
    register: function register() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      var url = this.accountType == 1 ? "/api/customer/register" : "/api/gallery/register";
      var form = new FormData();
      form.append("user_name", this.username);
      form.append("password", this.password);
      form.append("name", this.name);
      form.append("phone", this.phone);
      form.append("lat", this.location.lat);
      form.append("lon", this.location.lng);
      axios.post(url, form).then(function (res) {
        if (res.data.status != 200) {
          console.warn(err);
          return;
        }

        _this.$notify({
          text: _this.$t("auth.successRegister"),
          type: "success"
        });

        if (_this.type == "registerVisitor") {
          _this.$emit("confirmcode", _this.username);
        }

        _this.close();
      })["catch"](function (err) {
        for (var key in err.response.data) {
          if (err.response.data.hasOwnProperty(key)) {
            _this.errorMessages.push(err.response.data[key]);
          }
        }

        console.warn(err);
      });
    },
    close: function close() {
      this.$emit('close');
    },
    setLocation: function setLocation(evnt) {
      this.location = {
        lat: evnt.lat(),
        lng: evnt.lng()
      };
    },
    updateCenter: function updateCenter(evnt) {
      this.mapCenter = {
        lat: evnt.lat(),
        lng: evnt.lng()
      };
    },
    addMarker: function addMarker() {
      this.location = JSON.parse(JSON.stringify(this.mapCenter));
    },
    deleteMarker: function deleteMarker() {
      this.location = null;
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
    },
    termsErrors: function termsErrors() {
      var errors = [];
      if (!this.$v.acceptTerms.$dirty) return errors;
      !this.$v.acceptTerms.sameAs && errors.push(this.$t("validate.acceptTerms"));
      return errors;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Auth/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ var Auth_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&
var Registervue_type_style_index_0_id_593630de_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCheckbox/index.js + 1 modules
var VCheckbox = __webpack_require__("./node_modules/vuetify/lib/components/VCheckbox/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Auth/Register.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  Auth_Registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "593630de",
  null
  
)

/* vuetify-loader */












installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCheckbox: VCheckbox["VCheckbox"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Auth/Register.vue"
/* harmony default export */ var Register = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_593630de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Auth/Register.vue?vue&type=style&index=0&id=593630de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_593630de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_593630de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_593630de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_593630de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);