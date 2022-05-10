(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./resources/js/pages/Customer/order/ReviewOrder.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Customer/order/ReviewOrder.vue + 4 modules ***!
  \***********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextarea/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/ReviewOrder.vue?vue&type=template&id=4adb73cd&
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
        { attrs: { width: "80vw" } },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("request.reviewOrder")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("div", [_vm._v(_vm._s(_vm.$t("request.selectAnOrder")))]),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.tableRows,
                  "single-select": "",
                  "item-key": "id",
                  "show-select": "",
                  "hide-default-footer": true,
                  loading: _vm.isLoading,
                  height: "40vh",
                  "fixed-header": ""
                },
                model: {
                  value: _vm.selectedOrder,
                  callback: function($$v) {
                    _vm.selectedOrder = $$v
                  },
                  expression: "selectedOrder"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.selectErrors, function(e) {
                return _c("div", { key: e, staticClass: "red--text" }, [
                  _vm._v(_vm._s(e))
                ])
              }),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-5" },
                [
                  _c("v-col", { attrs: { cols: "4" } }, [
                    _vm._v(_vm._s(_vm.$t("request.pleaseWriteDesc")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "8" } },
                    [
                      _c("v-textarea", {
                        attrs: {
                          rounded: "",
                          outlined: "",
                          "no-resize": "",
                          "error-messages": _vm.descErrors
                        },
                        model: {
                          value: _vm.description,
                          callback: function($$v) {
                            _vm.description = $$v
                          },
                          expression: "description"
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
                  attrs: { color: "primary", rounded: "" },
                  on: { click: _vm.save }
                },
                [_vm._v(_vm._s(_vm.$t("order.send")))]
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


// CONCATENATED MODULE: ./resources/js/pages/Customer/order/ReviewOrder.vue?vue&type=template&id=4adb73cd&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Customer/order/ReviewOrder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ReviewOrdervue_type_script_lang_js_ = ({
  name: "reviewOrder",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Create review order" : "إنشاء طلب مراجعة"
    };
  },
  data: function data() {
    return {
      headers: [{
        text: this.$t("general.type"),
        value: "type",
        sortable: false
      }, {
        text: this.$t("general.date"),
        value: "created_at",
        sortable: false
      }],
      tableRows: [],
      selectedOrder: [],
      description: null,
      isLoading: false
    };
  },
  validations: {
    selectedOrder: {
      required: validators["required"]
    },
    description: {
      required: validators["required"]
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      this.isLoading = true;
      axios.post("/api/getAuthDetails?atype=1").then(function (res) {
        var data = res.data.data.order_info;
        var filteredRows = [];

        for (var i = 0; i < data.length; i++) {
          if (data[i].status == "order finish") {
            data[i].type = _this.$getOrdertype(data[i].type);
            data[i].created_at = _this.formatDate(data[i].created_at);
            filteredRows.push(data[i]);
          }
        }

        _this.tableRows = filteredRows;
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    save: function save() {
      var _this2 = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      axios.post("/api/OrderReviewOrder", {
        description: this.description,
        order_id: this.selectedOrder[0].id
      }).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "success"
        });

        _this2.$router.push({
          name: "c2"
        });
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  created: function created() {
    this.load();
  },
  computed: {
    descErrors: function descErrors() {
      var errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    selectErrors: function selectErrors() {
      var errors = [];
      if (!this.$v.selectedOrder.$dirty) return errors;
      !this.$v.selectedOrder.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Customer/order/ReviewOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_ReviewOrdervue_type_script_lang_js_ = (ReviewOrdervue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextarea/index.js + 1 modules
var VTextarea = __webpack_require__("./node_modules/vuetify/lib/components/VTextarea/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Customer/order/ReviewOrder.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  order_ReviewOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDataTable: VDataTable["VDataTable"],VRow: VGrid["VRow"],VTextarea: VTextarea["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Customer/order/ReviewOrder.vue"
/* harmony default export */ var ReviewOrder = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);