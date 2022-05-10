(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./resources/js/pages/ConsultManager/Assign.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/ConsultManager/Assign.vue + 4 modules ***!
  \******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAutocomplete/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VForm/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultManager/Assign.vue?vue&type=template&id=fd3ddef8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      ref: "form",
      staticClass: "d-flex justify-center",
      attrs: { "lazy-validation": "", value: _vm.valid }
    },
    [
      _c(
        "v-card",
        { attrs: { width: "60vw" } },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("general.assign")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.employees,
                  outlined: "",
                  rules: [
                    function(v) {
                      return !!v || _vm.$requiredRules
                    }
                  ],
                  dense: "",
                  chips: "",
                  "item-text": "name",
                  "item-value": "id",
                  label: _vm.$t("topNav.employees")
                },
                model: {
                  value: _vm.employee,
                  callback: function($$v) {
                    _vm.employee = $$v
                  },
                  expression: "employee"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "d-flex justify-center" },
            [
              _c(
                "v-btn",
                {
                  attrs: { rounded: "", color: "success" },
                  on: { click: _vm.confirm }
                },
                [_vm._v(_vm._s(_vm.$t("general.confirm")))]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { rounded: "" }, on: { click: _vm.close } },
                [_vm._v(_vm._s(_vm.$t("general.cancel")))]
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


// CONCATENATED MODULE: ./resources/js/pages/ConsultManager/Assign.vue?vue&type=template&id=fd3ddef8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ConsultManager/Assign.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Assignvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      valid: true,
      employees: [],
      employee: null,
      id: this.$route.params.id
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/api/getAuthDetails").then(function (_ref) {
        var data = _ref.data;
        _this.employees = data.data.employee_by_manager;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    confirm: function confirm() {
      var _this2 = this;

      if (!this.$refs.form.validate()) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      if (this.id > 0 && this.employee > 0) {
        var form = new FormData();
        form.append("employee_id[]", this.employee);
        form.append("order_id", this.id);
        axios.post("/api/addEmployeesToOrder", form).then(function (res) {
          _this2.$notify({
            text: _this2.$t("general.success"),
            type: "success"
          });

          _this2.close();
        })["catch"](function (err) {
          console.warn(err);
        });
      }
    },
    close: function close() {
      this.$router.go(-1);
    }
  },
  mounted: function mounted() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/ConsultManager/Assign.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConsultManager_Assignvue_type_script_lang_js_ = (Assignvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAutocomplete/index.js
var VAutocomplete = __webpack_require__("./node_modules/vuetify/lib/components/VAutocomplete/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/index.js + 1 modules
var VForm = __webpack_require__("./node_modules/vuetify/lib/components/VForm/index.js");

// CONCATENATED MODULE: ./resources/js/pages/ConsultManager/Assign.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  ConsultManager_Assignvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VAutocomplete: VAutocomplete["VAutocomplete"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VForm: VForm["VForm"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ConsultManager/Assign.vue"
/* harmony default export */ var Assign = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);