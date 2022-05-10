(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./resources/js/pages/TechManager/Assign.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/TechManager/Assign.vue + 4 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/Assign.vue?vue&type=template&id=7da5c7b0&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        { staticClass: "mb-5", attrs: { justify: "end" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [
              _c("v-btn", {
                domProps: { textContent: _vm._s(_vm.$t("general.return")) },
                on: {
                  click: function($event) {
                    return _vm.$router.go(-1)
                  }
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
        "v-card",
        { staticClass: "mt-5" },
        [
          _c("v-card-title", [_vm._v(_vm._s(_vm.$t("technical.assignTech")))]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "d-flex align-center",
                      attrs: { cols: "2" }
                    },
                    [_vm._v(_vm._s(_vm.$t("technical.selectTech")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.employees,
                          "item-text": "name",
                          "item-value": "id",
                          multiple: ""
                        },
                        model: {
                          value: _vm.selectedEmps,
                          callback: function($$v) {
                            _vm.selectedEmps = $$v
                          },
                          expression: "selectedEmps"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-btn", { on: { click: _vm.add } }, [
                        _vm._v(_vm._s(_vm.$t("general.add")))
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", [_vm._v(_vm._s(_vm.$t("technical.assignedTech")))]),
              _vm._v(" "),
              _c("v-simple-table", {
                attrs: { dense: "", "fixed-header": "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("#")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(_vm.$t("general.name")))
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.assigned, function(employee, i) {
                            return _c("tr", { key: i }, [
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(i + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(employee.name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ma-2",
                                      attrs: {
                                        color: "error",
                                        rounded: "",
                                        "x-small": ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.del(employee.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Delete\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/TechManager/Assign.vue?vue&type=template&id=7da5c7b0&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/Assign.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      assigned: [],
      employees: [],
      selectedEmps: []
    };
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    load: function load() {
      var _this = this;

      axios_default.a.post("/api/getAuthDetails?atype=1").then(function (_ref) {
        var data = _ref.data;
        _this.employees = data.data.employee_by_manager;
      });
      this.getOrder();
    },
    getOrder: function getOrder() {
      var _this2 = this;

      axios_default.a.get("/api/".concat(this.$getOrderTypeAPI(this.$route.params.type), "/").concat(this.$route.params.orderId)).then(function (_ref2) {
        var data = _ref2.data;
        _this2.assigned = data.data.order_info.employee_info;
      });
    },
    add: function add() {
      var _this3 = this;

      axios_default.a.post("/api/addEmployeesToOrder", {
        order_id: this.$route.params.id,
        employee_id: this.selectedEmps
      }).then(function (_ref3) {
        var data = _ref3.data;

        _this3.getOrder();
      });
    },
    del: function del(id) {
      var _this4 = this;

      axios_default.a["delete"]("/api/deleteEmployeesFromOrder", {
        params: {
          order_id: this.$route.params.id,
          employee_id: [id]
        }
      }).then(function (_ref4) {
        var data = _ref4.data;

        _this4.getOrder();
      });
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/TechManager/Assign.vue?vue&type=script&lang=js&
 /* harmony default export */ var TechManager_Assignvue_type_script_lang_js_ = (Assignvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/TechManager/Assign.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  TechManager_Assignvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/TechManager/Assign.vue"
/* harmony default export */ var Assign = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);