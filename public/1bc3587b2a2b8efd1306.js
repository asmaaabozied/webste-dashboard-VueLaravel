(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue + 9 modules ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue?vue&type=template&id=fcdd67ba&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("admin.spareParts")))]),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "60vw" },
          model: {
            value: _vm.sparePartDialog,
            callback: function($$v) {
              _vm.sparePartDialog = $$v
            },
            expression: "sparePartDialog"
          }
        },
        [
          _vm.sparePartDialog
            ? _c("spare-part", {
                attrs: { id: _vm.itemId },
                on: {
                  close: function($event) {
                    _vm.sparePartDialog = false
                    _vm.load()
                  }
                }
              })
            : _vm._e()
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "2" } },
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
      _c(
        "div",
        { staticClass: "d-flex flex-wrap", staticStyle: { width: "100%" } },
        _vm._l(_vm.items, function(item, i) {
          return _c(
            "v-card",
            {
              key: i,
              staticClass: "ma-4",
              attrs: { outlined: "", width: "25vw", elevation: "1" }
            },
            [
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-end" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "", icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(item.id)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiClose))])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "", icon: "" },
                      on: {
                        click: function($event) {
                          return _vm.editItem(item.id)
                        }
                      }
                    },
                    [
                      _c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiPencilOutline))])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { "two-line": "" } },
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c(
                        "v-list-item-title",
                        { staticClass: "headline mb-1" },
                        [_vm._v(_vm._s(item.code))]
                      ),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _c("div", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(item.name_ar))]),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(item.manufacturer))]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            _vm._s(item.price + " " + _vm.$t("general.sar"))
                          )
                        ])
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
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue?vue&type=template&id=fcdd67ba&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/SpareParts/SparePart.vue?vue&type=template&id=ad8e1600&scoped=true&
var SparePartvue_type_template_id_ad8e1600_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("admin.sparePart")))]),
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
                      "error-messages": _vm.codeErrors,
                      label: _vm.$t("general.code"),
                      required: "",
                      outlined: "",
                      rounded: "",
                      dense: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.code,
                      callback: function($$v) {
                        _vm.code = $$v
                      },
                      expression: "code"
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
            [
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.nameErrors,
                      label: _vm.$t("general.name"),
                      required: "",
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.nameEnErrors,
                      label: _vm.$t("general.name") + " En",
                      required: "",
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
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.productionCompanyErrors,
                      label: _vm.$t("general.productionCompany"),
                      required: "",
                      outlined: "",
                      dense: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.productionCompany,
                      callback: function($$v) {
                        _vm.productionCompany = $$v
                      },
                      expression: "productionCompany"
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
                      type: "number",
                      min: "0",
                      "error-messages": _vm.priceErrors,
                      label: _vm.$t("general.price"),
                      required: "",
                      outlined: "",
                      rounded: "",
                      dense: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false",
                      hint: _vm.$t("general.sar"),
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.price,
                      callback: function($$v) {
                        _vm.price = $$v
                      },
                      expression: "price"
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
                  return _vm.$emit("close")
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("general.cancel")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var SparePartvue_type_template_id_ad8e1600_scoped_true_staticRenderFns = []
SparePartvue_type_template_id_ad8e1600_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/SpareParts/SparePart.vue?vue&type=template&id=ad8e1600&scoped=true&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/SpareParts/SparePart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SparePartvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      code: null,
      name: null,
      nameEn: null,
      productionCompany: null,
      price: null,
      icons: {}
    };
  },
  validations: {
    code: {
      required: validators["required"]
    },
    name: {
      required: validators["required"]
    },
    nameEn: {
      required: validators["required"]
    },
    productionCompany: {
      required: validators["required"]
    },
    price: {
      required: validators["required"]
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "warning"
        });
        return;
      }

      if (this.id == 0) axios_default.a.post("/api/sparePart", {
        name: this.nameEn,
        name_ar: this.name,
        manufacturer: this.productionCompany,
        code: this.code,
        price: this.price
      }).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });

        _this.$emit("close");
      })["catch"](function (err) {
        console.warn(err);
      });else if (this.id > 0) axios_default.a.put("/api/sparePart/".concat(this.id), {
        name: this.nameEn,
        name_ar: this.name,
        manufacturer: this.productionCompany,
        code: this.code,
        price: this.price
      }).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "success"
        });

        _this.$emit("close");
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    load: function load() {
      var _this2 = this;

      axios_default.a.get("/api/sparePart/".concat(this.id)).then(function (res) {
        _this2.code = res.data.data.code;
        _this2.name = res.data.data.name_ar;
        _this2.nameEn = res.data.data.name;
        _this2.productionCompany = res.data.data.manufacturer;
        _this2.price = res.data.data.price;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    createNew: function createNew() {
      this.code = null;
      this.name = null;
      this.nameEn = null;
      this.productionCompany = null;
      this.price = null;
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
  computed: {
    codeErrors: function codeErrors() {
      var errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors: function nameEnErrors() {
      var errors = [];
      if (!this.$v.nameEn.$dirty) return errors;
      !this.$v.nameEn.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    productionCompanyErrors: function productionCompanyErrors() {
      var errors = [];
      if (!this.$v.productionCompany.$dirty) return errors;
      !this.$v.productionCompany.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    priceErrors: function priceErrors() {
      var errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/SpareParts/SparePart.vue?vue&type=script&lang=js&
 /* harmony default export */ var SpareParts_SparePartvue_type_script_lang_js_ = (SparePartvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/SpareParts/SparePart.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  SpareParts_SparePartvue_type_script_lang_js_,
  SparePartvue_type_template_id_ad8e1600_scoped_true_render,
  SparePartvue_type_template_id_ad8e1600_scoped_true_staticRenderFns,
  false,
  null,
  "ad8e1600",
  null
  
)

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MaintenanceManager/SpareParts/SparePart.vue"
/* harmony default export */ var SparePart = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SparePartsvue_type_script_lang_js_ = ({
  components: {
    "spare-part": SparePart
  },
  data: function data() {
    return {
      icons: {
        mdiClose: mdi["mdiClose"],
        mdiPencilOutline: mdi["mdiPencilOutline"],
        mdiMagnify: mdi["mdiMagnify"],
        mdiPlusThick: mdi["mdiPlusThick"],
        mdiCheck: mdi["mdiCheck"]
      },
      searchString: null,
      sparePartDialog: false,
      deleteDialog: false,
      items: [],
      itemId: 0,
      deleteItemId: null
    };
  },
  methods: {
    deleteItem: function deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this = this;

      axios_default.a["delete"]("/api/sparePart/".concat(this.deleteItemId)).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "info"
        });

        _this.deleteDialog = false;

        _this.load();
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    editItem: function editItem(id) {
      this.itemId = id;
      this.sparePartDialog = true;
    },
    addItem: function addItem() {
      this.itemId = 0;
      this.sparePartDialog = true;
    },
    load: function load() {
      var _this2 = this;

      axios_default.a.get("/api/sparePart").then(function (res) {
        _this2.items = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue?vue&type=script&lang=js&
 /* harmony default export */ var SpareParts_SparePartsvue_type_script_lang_js_ = (SparePartsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue





/* normalize component */

var SpareParts_component = Object(componentNormalizer["default"])(
  SpareParts_SparePartsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fcdd67ba",
  null
  
)

/* vuetify-loader */















installComponents_default()(SpareParts_component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VListItem: VList["VListItem"],VListItemContent: VList["VListItemContent"],VListItemSubtitle: VList["VListItemSubtitle"],VListItemTitle: VList["VListItemTitle"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var SpareParts_api; }
SpareParts_component.options.__file = "resources/js/pages/MaintenanceManager/SpareParts/SpareParts.vue"
/* harmony default export */ var SpareParts = __webpack_exports__["default"] = (SpareParts_component.exports);

/***/ })

}]);