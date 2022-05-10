(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./resources/js/pages/ConsultEmp/Order.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/ConsultEmp/Order.vue + 4 modules ***!
  \*************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultEmp/Order.vue?vue&type=template&id=3701c0a4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex justify-center" },
    [
      _c(
        "v-card",
        { attrs: { width: "60vw" } },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("consultation.order")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("general.name")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.user.user_name))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("consultation.problemDescription")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.description))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("admin.phone")))
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { cols: "8" } }, [
                    _vm._v(_vm._s(_vm.user.customer.phone))
                  ])
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
              _vm.$checkIfOrderStatusNotIn(
                _vm.$getOrderStatus(_vm.status).value,
                [3, 4, 5, 6]
              )
                ? _c(
                    "v-btn",
                    { attrs: { color: "primary" }, on: { click: _vm.finish } },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("general.finish")) + "\n            "
                      )
                    ]
                  )
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/ConsultEmp/Order.vue?vue&type=template&id=3701c0a4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultEmp/Order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Ordervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      id: this.$route.params.id,
      description: null,
      status: null,
      user: {
        user_name: '',
        customer: {}
      }
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/api/ConsultantOrder/".concat(this.id)).then(function (res) {
        _this.user = res.data.data.order_info['consultant_order'].order_info['user_info'];
        _this.description = res.data.data.description;
        _this.status = res.data.data.order_info.status;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    finish: function finish() {
      var _this2 = this;

      if (this.status == "order finish") return;
      axios.put("/api/ConsultantOrder/".concat(this.id), {
        status: 3
      }).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "success"
        });

        _this2.$router.go(-1);
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      if (vm.id) vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/ConsultEmp/Order.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConsultEmp_Ordervue_type_script_lang_js_ = (Ordervue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./resources/js/pages/ConsultEmp/Order.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  ConsultEmp_Ordervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ConsultEmp/Order.vue"
/* harmony default export */ var Order = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);