(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./resources/js/pages/Admin/manufacturer/manufacturer.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Admin/manufacturer/manufacturer.vue + 4 modules ***!
  \****************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/manufacturer/manufacturer.vue?vue&type=template&id=39ea7a96&scoped=true&
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
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("general.manufacturer")))]),
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
                          "error-messages": _vm.nameArErrors,
                          label: _vm.$t("order.name"),
                          outlined: "",
                          rounded: "",
                          dense: "",
                          autocomplete: "off",
                          autocorrect: "off",
                          spellcheck: "false"
                        },
                        model: {
                          value: _vm.nameAr,
                          callback: function($$v) {
                            _vm.nameAr = $$v
                          },
                          expression: "nameAr"
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
                          "error-messages": _vm.nameEnErrors,
                          label: _vm.$t("order.name") + "En",
                          outlined: "",
                          rounded: "",
                          dense: "",
                          autocomplete: "off",
                          autocorrect: "off",
                          spellcheck: "false"
                        },
                        model: {
                          value: _vm.nameEn,
                          callback: function($$v) {
                            _vm.nameEn = $$v
                          },
                          expression: "nameEn"
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
            { staticClass: "d-flex justify-center" },
            [
              _c("v-btn", { attrs: { rounded: "" }, on: { click: _vm.save } }, [
                _vm._v(_vm._s(_vm.$t("general.save")))
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


// CONCATENATED MODULE: ./resources/js/pages/Admin/manufacturer/manufacturer.vue?vue&type=template&id=39ea7a96&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/manufacturer/manufacturer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var manufacturervue_type_script_lang_js_ = ({
  name: "manufacture",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "manufacturer" : "المصانع"
    };
  },
  data: function data() {
    return {
      icons: {},
      id: this.$route.params.id,
      nameAr: null,
      nameEn: null,
      devicesIds: []
    };
  },
  validations: {
    nameAr: {
      required: validators["required"]
    },
    nameEn: {
      required: validators["required"]
    }
  },
  computed: {
    nameArErrors: function nameArErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.nameAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors: function nameEnErrors() {
      var errors = [];
      if (!this.$v.nameEn.$dirty) return errors;
      !this.$v.nameEn.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$v.$touch();
      if (this.$v.$invalid) return;
      var form = new FormData();
      form.append("name_ar", this.nameAr);
      form.append("name_en", this.nameEn);
      form.append('devicesIds', this.devicesIds);
      if (this.id > 0) form.append("_method", "put");
      if (this.id == 0) axios.post("/api/manufacture", form).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });

        _this.$router.go(-1);
      })["catch"](function (err) {
        console.warn(err);
      });else if (this.id > 0) axios.post("/api/manufacture/".concat(this.id), form).then(function (res) {
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
    load: function load() {
      var _this2 = this;

      axios.get("/api/manufacture/".concat(this.id)).then(function (res) {
        var data = res.data.data;
        _this2.nameAr = data.name_ar;
        _this2.nameEn = data.name_en;
        _this2.devicesIds = data.devicesIds;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    createNew: function createNew() {
      this.nameAr = null;
      this.nameEn = null;
      this.devicesIds = [];
      this.$v.$reset();
    },
    getAllDevices: function getAllDevices() {
      var _this3 = this;

      axios.get("/api/admin-panel/".concat(this.id)).then(function (res) {
        _this3.devicesIds = data.devicesIds;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function handler(val, oldVal) {
        //get all devices Details
        getAllDevices();
        if (val > 0) this.load();else if (val == 0) this.createNew();
      }
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/manufacturer/manufacturer.vue?vue&type=script&lang=js&
 /* harmony default export */ var manufacturer_manufacturervue_type_script_lang_js_ = (manufacturervue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./resources/js/pages/Admin/manufacturer/manufacturer.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  manufacturer_manufacturervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "39ea7a96",
  null
  
)

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/manufacturer/manufacturer.vue"
/* harmony default export */ var manufacturer = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);