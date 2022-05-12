(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./resources/js/pages/Admin/Orders/Orders.vue":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Admin/Orders/Orders.vue + 4 modules ***!
  \****************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Orders/Orders.vue?vue&type=template&id=194e3d16&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.orders.title")))]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [
              _c("v-select", {
                attrs: {
                  label: _vm.$t("general.filterByState"),
                  items: _vm.statusItems,
                  "item-text": "text",
                  "item-value": "value",
                  clearable: ""
                },
                model: {
                  value: _vm.statusFilter,
                  callback: function($$v) {
                    _vm.statusFilter = $$v
                  },
                  expression: "statusFilter"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [
              _c("v-select", {
                attrs: {
                  label: _vm.$t("general.filterByType"),
                  items: _vm.filterByTypeItems,
                  "item-text": "text",
                  "item-value": "value",
                  clearable: ""
                },
                model: {
                  value: _vm.typeFilter,
                  callback: function($$v) {
                    _vm.typeFilter = $$v
                  },
                  expression: "typeFilter"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-simple-table", {
        attrs: { "fixed-header": "" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("myRequests.requestStatus")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(_vm.$t("myRequests.requestTechnicalStatus"))
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("myRequests.requestType")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("auth.users")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("myRequests.requestDate")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("actions")))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.status))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.technical_status))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.type))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.user))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.formatDate(item.created_at)))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
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
                                      return _vm.openItem(item.id)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(_vm._s(_vm.icons.mdiOpenInApp))
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/Orders/Orders.vue?vue&type=template&id=194e3d16&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Orders/Orders.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Ordersvue_type_script_lang_js_ = ({
  name: "orders",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Orders" : "الطلبات"
    };
  },
  data: function data() {
    return {
      items: [],
      statusItems: [{
        value: "received",
        text: this.$t("myRequests.received")
      }, {
        value: "order is being processed",
        text: this.$t("myRequests.processing")
      }, {
        value: "under maintenance",
        text: this.$t("myRequests.maintaining")
      }, {
        value: "order finish",
        text: this.$t("myRequests.finished")
      }, {
        value: "order declined",
        text: this.$t("myRequests.declined")
      }],
      filterByTypeItems: [{
        value: "prevention_maintenance_order",
        text: this.$t("preventiveMaintenance.order")
      }, {
        value: "maintenance_order",
        text: this.$t("myRequests.maintenanceRequest")
      }, {
        value: "review_order",
        text: this.$t("services.srv05.title")
      }],
      statusFilter: null,
      typeFilter: null
    };
  },
  computed: {
    itemsFiltered: function itemsFiltered() {
      var filter = {};
      if (this.statusFilter) filter["status"] = this.statusFilter;
      if (this.typeFilter) filter["type"] = this.typeFilter;

      function filterBy(item) {
        for (var key in filter) {
          if (item[key] === undefined || item[key] !== filter[key]) {
            return false;
          }
        }

        return true;
      }

      var items = this.items.slice(0);
      return items.filter(filterBy);
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      debugger;
      axios.get("/api/orderss").then(function (res) {
        _this.items = res.data.data;
        console.log("itemss", _this.items);
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
// CONCATENATED MODULE: ./resources/js/pages/Admin/Orders/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var Orders_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Orders/Orders.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Orders_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "194e3d16",
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCardActions: VCard["VCardActions"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Orders/Orders.vue"
/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);