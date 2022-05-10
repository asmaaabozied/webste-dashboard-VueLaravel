(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./resources/js/pages/Admin/branch/appointments.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/Admin/branch/appointments.vue + 4 modules ***!
  \**********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/branch/appointments.vue?vue&type=template&id=72710f88&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", {
        staticClass: "text-h5 mb-8",
        domProps: { textContent: _vm._s(_vm.$t("technical.appointmentsView")) }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        _vm._l(_vm.appointments, function(item, i) {
          return _c(
            "v-col",
            { key: i, attrs: { cols: "2" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    { staticClass: "d-flex flex-column justify-center" },
                    [
                      _c(
                        "div",
                        [
                          _c("v-icon", { staticClass: "mx-1" }, [
                            _vm._v("mdi-calendar-blank-outline")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "text-body-2",
                        domProps: { textContent: _vm._s(item.date_start) }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("div", {
                      staticClass: "text-body-2",
                      domProps: { textContent: _vm._s(item.date) }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-body-2" },
                      [
                        _c("v-icon", { staticClass: "mx-1" }, [
                          _vm._v("mdi-clock-in ")
                        ]),
                        _vm._v(
                          "\n            " +
                            _vm._s(item.start_time) +
                            "\n          "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-body-2" },
                      [
                        _c("v-icon", { staticClass: "mx-1" }, [
                          _vm._v("mdi-clock-out ")
                        ]),
                        _vm._v(
                          "\n            " +
                            _vm._s(item.end_time) +
                            "\n          "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-body-2" },
                      [
                        _c("v-icon", { staticClass: "mx-1" }, [
                          _vm._v("mdi-account")
                        ]),
                        _vm._v(
                          "\n            " +
                            _vm._s(item.customer) +
                            "\n          "
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
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/branch/appointments.vue?vue&type=template&id=72710f88&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/branch/appointments.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
/* harmony default export */ var appointmentsvue_type_script_lang_js_ = ({
  name: "appointments",
  data: function data() {
    return {
      appointments: []
    };
  },
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Appointments view" : "عرض المواعيد"
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/api/appointment").then(function (res) {
        // console.log("appointments", res.data.data);
        _this.appointments = res.data.data.map(function (a) {
          return _objectSpread(_objectSpread({}, a), {}, {
            customer: a.user ? a.user.customer ? a.user.customer.name : null : null
          });
        });
      })["catch"](function (err) {
        console.log(err);

        _this.$notify({
          text: err.data.message,
          type: "error"
        });
      });
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/branch/appointments.vue?vue&type=script&lang=js&
 /* harmony default export */ var branch_appointmentsvue_type_script_lang_js_ = (appointmentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/branch/appointments.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  branch_appointmentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







installComponents_default()(component, {VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/branch/appointments.vue"
/* harmony default export */ var appointments = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);