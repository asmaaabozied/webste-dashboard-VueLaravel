(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./resources/js/pages/Admin/branch/appointment-generate.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Admin/branch/appointment-generate.vue + 4 modules ***!
  \******************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDatePicker/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTimePicker/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/branch/appointment-generate.vue?vue&type=template&id=3eefab37&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "6", xl: "4" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", {
                    attrs: { "primary-title": "" },
                    domProps: {
                      textContent: _vm._s(
                        _vm.$t("technical.GenerateNewAppointments")
                      )
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.branches,
                                  label: _vm.$t("general.branch"),
                                  outlined: "",
                                  dense: "",
                                  rounded: "",
                                  "item-text": _vm.$i18n.locale
                                    ? "name"
                                    : "name_en",
                                  "item-value": "id",
                                  "error-messages": _vm.branchErrors
                                },
                                model: {
                                  value: _vm.branch,
                                  callback: function($$v) {
                                    _vm.branch = $$v
                                  },
                                  expression: "branch"
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
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("div", {
                                staticClass: "text-body-1 black--text mb-2",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$t("technical.serviceDuration")
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  min: "0",
                                  "error-messages": _vm.durationErrors,
                                  dense: "",
                                  rounded: "",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.duration,
                                  callback: function($$v) {
                                    _vm.duration = $$v
                                  },
                                  expression: "duration"
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
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: _vm.$t(
                                                    "general.sDate"
                                                  ),
                                                  "prepend-icon":
                                                    "mdi-calendar",
                                                  "error-messages":
                                                    _vm.sDateErrors,
                                                  readonly: "",
                                                  rounded: "",
                                                  outlined: "",
                                                  dense: "",
                                                  clearable: ""
                                                },
                                                model: {
                                                  value: _vm.sDate,
                                                  callback: function($$v) {
                                                    _vm.sDate = $$v
                                                  },
                                                  expression: "sDate"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.sDateMenu,
                                    callback: function($$v) {
                                      _vm.sDateMenu = $$v
                                    },
                                    expression: "sDateMenu"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: {
                                      locale: _vm.$i18n.locale,
                                      color: "blue"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.sDateMenu = false
                                      }
                                    },
                                    model: {
                                      value: _vm.sDate,
                                      callback: function($$v) {
                                        _vm.sDate = $$v
                                      },
                                      expression: "sDate"
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
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: _vm.$t(
                                                    "general.eDate"
                                                  ),
                                                  "prepend-icon":
                                                    "mdi-calendar",
                                                  "error-messages":
                                                    _vm.eDateErrors,
                                                  readonly: "",
                                                  rounded: "",
                                                  outlined: "",
                                                  dense: "",
                                                  clearable: ""
                                                },
                                                model: {
                                                  value: _vm.eDate,
                                                  callback: function($$v) {
                                                    _vm.eDate = $$v
                                                  },
                                                  expression: "eDate"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.eDateMenu,
                                    callback: function($$v) {
                                      _vm.eDateMenu = $$v
                                    },
                                    expression: "eDateMenu"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: {
                                      locale: _vm.$i18n.locale,
                                      color: "blue"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.eDateMenu = false
                                      }
                                    },
                                    model: {
                                      value: _vm.eDate,
                                      callback: function($$v) {
                                        _vm.eDate = $$v
                                      },
                                      expression: "eDate"
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
                        "v-row",
                        { attrs: { justify: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  ref: "sTimeMenu",
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    "return-value": _vm.sTime,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "max-width": "290px",
                                    "min-width": "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      _vm.sTime = $event
                                    },
                                    "update:return-value": function($event) {
                                      _vm.sTime = $event
                                    }
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    label: _vm.$t(
                                                      "general.sTime"
                                                    ),
                                                    "prepend-icon":
                                                      "mdi-timelapse",
                                                    "error-messages":
                                                      _vm.sTimeErrors,
                                                    readonly: "",
                                                    clearable: "",
                                                    dense: "",
                                                    rounded: "",
                                                    outlined: ""
                                                  },
                                                  model: {
                                                    value: _vm.sTime,
                                                    callback: function($$v) {
                                                      _vm.sTime = $$v
                                                    },
                                                    expression: "sTime"
                                                  }
                                                },
                                                "v-text-field",
                                                attrs,
                                                false
                                              ),
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.sTimeMenu,
                                    callback: function($$v) {
                                      _vm.sTimeMenu = $$v
                                    },
                                    expression: "sTimeMenu"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _vm.sTimeMenu
                                    ? _c("v-time-picker", {
                                        attrs: {
                                          color: "blue",
                                          "full-width": ""
                                        },
                                        on: {
                                          "click:minute": function($event) {
                                            return _vm.$refs.sTimeMenu.save(
                                              _vm.sTime
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.sTime,
                                          callback: function($$v) {
                                            _vm.sTime = $$v
                                          },
                                          expression: "sTime"
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
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  ref: "eTimeMenu",
                                  attrs: {
                                    "close-on-content-click": false,
                                    "nudge-right": 40,
                                    "return-value": _vm.eTime,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "max-width": "290px",
                                    "min-width": "290px"
                                  },
                                  on: {
                                    "update:returnValue": function($event) {
                                      _vm.eTime = $event
                                    },
                                    "update:return-value": function($event) {
                                      _vm.eTime = $event
                                    }
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        var attrs = ref.attrs
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              _vm._b(
                                                {
                                                  attrs: {
                                                    label: _vm.$t(
                                                      "general.eTime"
                                                    ),
                                                    "prepend-icon":
                                                      "mdi-timelapse",
                                                    "error-messages":
                                                      _vm.eTimeErrors,
                                                    readonly: "",
                                                    clearable: "",
                                                    dense: "",
                                                    rounded: "",
                                                    outlined: ""
                                                  },
                                                  model: {
                                                    value: _vm.eTime,
                                                    callback: function($$v) {
                                                      _vm.eTime = $$v
                                                    },
                                                    expression: "eTime"
                                                  }
                                                },
                                                "v-text-field",
                                                attrs,
                                                false
                                              ),
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.eTimeMenu,
                                    callback: function($$v) {
                                      _vm.eTimeMenu = $$v
                                    },
                                    expression: "eTimeMenu"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _vm.eTimeMenu
                                    ? _c("v-time-picker", {
                                        attrs: {
                                          color: "blue",
                                          "full-width": ""
                                        },
                                        on: {
                                          "click:minute": function($event) {
                                            return _vm.$refs.eTimeMenu.save(
                                              _vm.eTime
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.eTime,
                                          callback: function($$v) {
                                            _vm.eTime = $$v
                                          },
                                          expression: "eTime"
                                        }
                                      })
                                    : _vm._e()
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
                    "v-card-actions",
                    { staticClass: "d-flex justify-center" },
                    [
                      _c("v-btn", {
                        attrs: { rounded: "", color: "success" },
                        domProps: {
                          textContent: _vm._s(_vm.$t("technical.generate"))
                        },
                        on: { click: _vm.generate }
                      })
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
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/branch/appointment-generate.vue?vue&type=template&id=3eefab37&

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/branch/appointment-generate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var appointment_generatevue_type_script_lang_js_isTimeAfter = function isTimeAfter(value, vm) {
  var format = "hh:mm";
  var sTime = moment_default()(vm.sTime, format);
  var eTime = moment_default()(vm.eTime, format);
  return eTime.isAfter(sTime);
};

var isAfterDate = function isAfterDate(value, vm) {
  return new Date(value).getTime() > new Date(vm.sDate).getTime();
};

var biggerThanZero = function biggerThanZero(value, vm) {
  return value > 0;
};

/* harmony default export */ var appointment_generatevue_type_script_lang_js_ = ({
  name: "generate-appointments",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Appointments generate" : "توليد المواعيد"
    };
  },
  data: function data() {
    return {
      branches: [],
      branch: null,
      sDateMenu: false,
      sDate: null,
      eDateMenu: false,
      eDate: null,
      sTime: null,
      eTime: null,
      sTimeMenu: false,
      eTimeMenu: false,
      duration: 0
    };
  },
  validations: {
    branch: {
      required: validators["required"]
    },
    duration: {
      required: validators["required"],
      biggerThanZero: biggerThanZero
    },
    sDate: {
      required: validators["required"]
    },
    eDate: {
      required: validators["required"],
      isAfterDate: isAfterDate
    },
    sTime: {
      required: validators["required"]
    },
    eTime: {
      required: validators["required"],
      isTimeAfter: appointment_generatevue_type_script_lang_js_isTimeAfter
    }
  },
  methods: {
    generate: function generate() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "error"
        });
        return;
      }

      var form = new FormData();
      form.append("start_time", this.sTime);
      form.append("end_time", this.eTime);
      form.append("duration", this.duration);
      form.append("date_start", this.sDate);
      form.append("date_end", this.eDate);
      form.append("branch_id", this.branch);
      axios.post("/api/appointment", form).then(function () {
        return _this.$router.push({
          name: "sa13"
        });
      })["catch"](function (err) {
        _this.$notify({
          text: err.data.message,
          type: "error"
        });
      });
    },
    load: function load() {
      var _this2 = this;

      axios.get("/api/branch").then(function (res) {
        _this2.branches = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  computed: {
    branchErrors: function branchErrors() {
      var errors = [];
      if (!this.$v.branch.$dirty) return errors;
      !this.$v.branch.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    durationErrors: function durationErrors() {
      var errors = [];
      if (!this.$v.duration.$dirty) return errors;
      !this.$v.duration.required && errors.push(this.$t("validate.required"));
      !this.$v.duration.biggerThanZero && errors.push(this.$t("validate.biggerThanZero"));
      return errors;
    },
    sDateErrors: function sDateErrors() {
      var errors = [];
      if (!this.$v.sDate.$dirty) return errors;
      !this.$v.sDate.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    eDateErrors: function eDateErrors() {
      var errors = [];
      if (!this.$v.eDate.$dirty) return errors;
      !this.$v.eDate.required && errors.push(this.$t("validate.required"));
      !this.$v.eDate.isAfterDate && errors.push(this.$t("validate.dateAfter"));
      return errors;
    },
    sTimeErrors: function sTimeErrors() {
      var errors = [];
      if (!this.$v.sTime.$dirty) return errors;
      !this.$v.sTime.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    eTimeErrors: function eTimeErrors() {
      var errors = [];
      if (!this.$v.eTime.$dirty) return errors;
      !this.$v.eTime.required && errors.push(this.$t("validate.required"));
      !this.$v.eTime.isTimeAfter && errors.push(this.$t("validate.timeAfter"));
      return errors;
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/branch/appointment-generate.vue?vue&type=script&lang=js&
 /* harmony default export */ var branch_appointment_generatevue_type_script_lang_js_ = (appointment_generatevue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/index.js + 8 modules
var VDatePicker = __webpack_require__("./node_modules/vuetify/lib/components/VDatePicker/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTimePicker/index.js + 4 modules
var VTimePicker = __webpack_require__("./node_modules/vuetify/lib/components/VTimePicker/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/branch/appointment-generate.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  branch_appointment_generatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VContainer: VGrid["VContainer"],VDatePicker: VDatePicker["VDatePicker"],VMenu: VMenu["VMenu"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VTextField: VTextField["VTextField"],VTimePicker: VTimePicker["VTimePicker"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/branch/appointment-generate.vue"
/* harmony default export */ var appointment_generate = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);