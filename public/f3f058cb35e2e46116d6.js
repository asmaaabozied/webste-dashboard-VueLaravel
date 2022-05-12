(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#selected[data-v-3b55a7c0],\n#employees[data-v-3b55a7c0] {\n  height: 50vh;\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/AssignEmpToWorkshop.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/AssignEmpToWorkshop.vue + 4 modules ***!
  \*********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAutocomplete/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=template&id=3b55a7c0&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { height: "80vh", elevation: "3" } },
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("technical.assignEmps")))]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-autocomplete", {
            attrs: {
              items: _vm.employees,
              outlined: "",
              dense: "",
              chips: "",
              "item-text": "name",
              "item-value": "id",
              label: _vm.$t("topNav.employees")
            },
            model: {
              value: _vm.selectedEmp,
              callback: function($$v) {
                _vm.selectedEmp = $$v
              },
              expression: "selectedEmp"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  return _vm.addEmpToWorkshop(_vm.selectedEmp)
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("general.assign")))]
          )
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
              attrs: { rounded: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("general.close")))]
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


// CONCATENATED MODULE: ./resources/js/components/AssignEmpToWorkshop.vue?vue&type=template&id=3b55a7c0&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AssignEmpToWorkshopvue_type_script_lang_js_ = ({
  props: {
    id: Number
  },
  data: function data() {
    return {
      icons: {
        mdiClose: mdi["mdiClose"]
      },
      selectedEmp: null,
      employees: [],
      activeEmpsInWorkshop: []
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      //load all employees
      axios.get("/api/employee").then(function (res) {
        _this.employees = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      }); //load activeEmployeesInWorkshop

      axios.get("/api/workshop/".concat(this.id)).then(function (res) {
        _this.activeEmpsInWorkshop = res.data.data.employees_info;
      })["catch"](function (err) {
        console.warn(err);
      });
      this.selectedEmp = null;
    },
    addEmpToWorkshop: function addEmpToWorkshop(empId) {
      var _this2 = this;

      axios.post("/api/workIn", {
        workshop_id: this.id,
        employee_id: [empId]
      }).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "success"
        });

        _this2.$emit('close');
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    removeEmp: function removeEmp(id) {
      var _this3 = this;

      axios["delete"]("/api/workIn/".concat(this.id)).then(function (res) {
        _this3.$notify({
          text: _this3.$t("general.success"),
          type: "success"
        });

        _this3.load();
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function handler(val, oldVal) {
        if (val > 0) this.load();
      }
    }
  }
});
// CONCATENATED MODULE: ./resources/js/components/AssignEmpToWorkshop.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AssignEmpToWorkshopvue_type_script_lang_js_ = (AssignEmpToWorkshopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&
var AssignEmpToWorkshopvue_type_style_index_0_id_3b55a7c0_scoped_true_lang_css_ = __webpack_require__("./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&");

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

// CONCATENATED MODULE: ./resources/js/components/AssignEmpToWorkshop.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  components_AssignEmpToWorkshopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3b55a7c0",
  null
  
)

/* vuetify-loader */







installComponents_default()(component, {VAutocomplete: VAutocomplete["VAutocomplete"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AssignEmpToWorkshop.vue"
/* harmony default export */ var AssignEmpToWorkshop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignEmpToWorkshop_vue_vue_type_style_index_0_id_3b55a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AssignEmpToWorkshop.vue?vue&type=style&index=0&id=3b55a7c0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignEmpToWorkshop_vue_vue_type_style_index_0_id_3b55a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignEmpToWorkshop_vue_vue_type_style_index_0_id_3b55a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignEmpToWorkshop_vue_vue_type_style_index_0_id_3b55a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignEmpToWorkshop_vue_vue_type_style_index_0_id_3b55a7c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/MaintenanceManager/Workshops.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/MaintenanceManager/Workshops.vue + 4 modules ***!
  \*************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/components/AssignEmpToWorkshop.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAvatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VChip/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/Workshops.vue?vue&type=template&id=30c74980&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.workshops")))]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { md: "2", lg: "2", xl: "2" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", dark: "", icon: "" },
                  on: { click: _vm.addItem }
                },
                [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiPlusThick))])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
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
                    _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("general.name")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("topNav.employees")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [_vm._v(" ")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.id))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          _c("v-avatar", [
                            _c("img", { attrs: { src: item.image } })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$i18n.locale == "en" ? item.name : item.name_ar
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        _vm._l(item.employees_info, function(emp, j) {
                          return _c(
                            "v-chip",
                            {
                              key: j + "e",
                              attrs: { close: "" },
                              on: {
                                "click:close": function($event) {
                                  return _vm.removeEmpAssign(item.id, emp.id)
                                }
                              }
                            },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { left: "" } },
                                [_c("v-img", { attrs: { src: emp.image } })],
                                1
                              ),
                              _vm._v(
                                "\n              " +
                                  _vm._s(emp.name) +
                                  "\n            "
                              )
                            ],
                            1
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "v-menu",
                              {
                                attrs: { "offset-y": "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  color: "black",
                                                  icon: "",
                                                  dark: ""
                                                }
                                              },
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.icons.mdiDotsVertical
                                                  )
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  [
                                    _c(
                                      "v-list-item",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.open(item.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(_vm._s(_vm.$t("general.open")))
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteItem(item.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(_vm.$t("general.delete"))
                                          )
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.assignEmp(item.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("technical.assignEmps")
                                            )
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
                      ])
                    ])
                  }),
                  0
                )
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "40vw", scrollable: "" },
          model: {
            value: _vm.addEmpModal,
            callback: function($$v) {
              _vm.addEmpModal = $$v
            },
            expression: "addEmpModal"
          }
        },
        [
          _c("assign-emp", {
            attrs: { id: _vm.selectedWorkshopId },
            on: {
              close: function($event) {
                _vm.addEmpModal = false
                _vm.load()
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.deleteDialog,
            callback: function($$v) {
              _vm.deleteDialog = $$v
            },
            expression: "deleteDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(_vm._s(_vm.$t("general.delete")))
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.$t("general.deleteMsg")))]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: { click: _vm.confirmDeleteItem }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.sure")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.deleteDialog = false
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.close")))]
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


// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/Workshops.vue?vue&type=template&id=30c74980&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// EXTERNAL MODULE: ./resources/js/components/AssignEmpToWorkshop.vue + 4 modules
var AssignEmpToWorkshop = __webpack_require__("./resources/js/components/AssignEmpToWorkshop.vue");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/Workshops.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Workshopsvue_type_script_lang_js_ = ({
  components: {
    "assign-emp": AssignEmpToWorkshop["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiPlaylistEdit: mdi["mdiPlaylistEdit"],
        mdiMagnify: mdi["mdiMagnify"],
        mdiPlusThick: mdi["mdiPlusThick"],
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      items: [],
      searchValue: null,
      addEmpModal: false,
      selectedEmps: [],
      selectedWorkshopId: null,
      deleteDialog: false,
      deleteInfo: {
        id: null
      }
    };
  },
  methods: {
    assignEmp: function assignEmp(id) {
      this.selectedWorkshopId = id;
      this.addEmpModal = true;
    },
    open: function open(id) {
      this.$router.push({
        name: "mm11",
        params: {
          id: id,
          preType: 1,
          preDepartment: this.$store.state.user.department_id
        }
      });
    },
    deleteItem: function deleteItem(id) {
      this.deleteInfo.id = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this = this;

      axios["delete"]("/api/workshop/".concat(this.deleteInfo.id)).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "info"
        });

        _this.deleteInfo.id = null;
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.deleteDialog = false;

        _this.load();
      });
    },
    load: function load() {
      var _this2 = this;

      axios.get("/api/department/".concat(this.$store.state.user.department_id)).then(function (res) {
        _this2.items = res.data.data.workshops;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    addItem: function addItem() {
      this.$router.push({
        name: "mm11",
        params: {
          id: 0,
          preType: 1,
          preDepartment: this.$store.state.user.department_id
        }
      });
    },
    removeEmpAssign: function removeEmpAssign(workshopId, empId) {
      var _this3 = this;

      axios["delete"]("/api/workIn/".concat(workshopId), {
        headers: {
          Authorization: "Bearer " + this.$store.state.token
        },
        data: {
          employee_id: [empId]
        }
      }).then(function (res) {
        _this3.$notify({
          text: _this3.$t("general.success"),
          type: "success"
        });

        _this3.load();
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  mounted: function mounted() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/Workshops.vue?vue&type=script&lang=js&
 /* harmony default export */ var MaintenanceManager_Workshopsvue_type_script_lang_js_ = (Workshopsvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/index.js + 1 modules
var VChip = __webpack_require__("./node_modules/vuetify/lib/components/VChip/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/Workshops.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  MaintenanceManager_Workshopsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "30c74980",
  null
  
)

/* vuetify-loader */



















installComponents_default()(component, {VAvatar: VAvatar["VAvatar"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VChip: VChip["VChip"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VImg: VImg["VImg"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MaintenanceManager/Workshops.vue"
/* harmony default export */ var Workshops = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);