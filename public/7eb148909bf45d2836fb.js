(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./resources/js/pages/MaintenanceManager/Orders.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/MaintenanceManager/Orders.vue + 4 modules ***!
  \**********************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/Orders.vue?vue&type=template&id=9f04993e&scoped=true&
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "2" } },
            [
              _c("v-text-field", {
                attrs: { label: "ID", clearable: "" },
                model: {
                  value: _vm.id,
                  callback: function($$v) {
                    _vm.id = $$v
                  },
                  expression: "id"
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
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      return _vm.search()
                    }
                  }
                },
                [_vm._v("search")]
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
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("myRequests.requestStatus")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$t("myRequests.requestTechnicalStatus")) +
                          "\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("general.type")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("general.date")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.itemsFiltered, function(item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(item.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$getOrderStatus(item.status).label) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              _vm.$getTechnicalStatus(item.technical_status)
                                .label
                            ) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$getOrdertype(item.type)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.formatDate(item.created_at)))
                      ]),
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
                                            return _vm.open(
                                              item.type,
                                              item.status,
                                              item[item.type].id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(_vm.$t("general.open")) +
                                              "\n                    "
                                          )
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.$checkIfOrderStatusNotIn(
                                      _vm.$getOrderStatus(item.status).value,
                                      [3, 4, 5, 6]
                                    )
                                      ? _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.finish(item)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("general.finish")
                                                ) + "\n                    "
                                              )
                                            ])
                                          ],
                                          1
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
          attrs: { "max-width": "500" },
          model: {
            value: _vm.finishDialog,
            callback: function($$v) {
              _vm.finishDialog = $$v
            },
            expression: "finishDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(_vm._s(_vm.$t("general.finishOrder")) + "\n      ")
              ]),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.$t("general.isSure")))]),
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
                      on: {
                        click: function($event) {
                          return _vm.confirmFinishItem()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.getFinishMessage()) +
                          "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { text: "" },
                      on: {
                        click: function($event) {
                          _vm.finishDialog = false
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.close")) + "\n        ")]
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


// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/Orders.vue?vue&type=template&id=9f04993e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/MaintenanceManager/Orders.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      items: [],
      statusItems: [{
        value: "received",
        text: this.$t("myRequests.received")
      }, {
        value: "order is being processed",
        text: this.$t("myRequests.processing")
      }, {
        value: "order under maintenance",
        text: this.$t("myRequests.maintaining")
      }, {
        value: "order finish",
        text: this.$t("myRequests.finished")
      }, {
        value: "order declined",
        text: this.$t("myRequests.declined")
      }, {
        value: "order declined by client",
        text: this.$t("myRequests.declinedByCustomer")
      }, {
        value: "order finish with unfixed device",
        text: this.$t("myRequests.unfixedDevice")
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
      typeFilter: null,
      finishInfo: {
        type: "",
        id: "",
        technical_status: ""
      },
      finishDialog: false,
      page: 0,
      id: null
    };
  },
  methods: {
    getFinishMessage: function getFinishMessage() {
      return this.$getTechnicalStatus(this.finishInfo.technical_status).value ? this.$t("general.sure") : this.$t("myRequests.unfixedDevice");
    },
    open: function open(type, status, id) {
      if (status == "received") this.$router.push({
        name: "mm8",
        params: {
          id: id,
          type: type
        }
      });else {
        if (type == "maintenance_order") this.$router.push({
          name: "mm9",
          params: {
            id: id
          }
        });else this.$router.push({
          name: "mm10",
          params: {
            id: id,
            type: type
          }
        });
      }
    },
    finish: function finish(item) {
      this.finishInfo = {
        type: item.type,
        id: item[item.type].id,
        technical_status: item.technical_status
      };
      this.finishDialog = true;
    },
    confirmFinishItem: function confirmFinishItem() {
      var _this = this;

      var status = 3;
      var techStatus = this.$getTechnicalStatus(this.finishInfo.technical_status).value;

      if (techStatus != -1) {
        status = techStatus == 1 ? 3 : 6;
      }

      var url;

      switch (this.finishInfo.type) {
        case "maintenance_order":
          url = "/api/MaintenanceOrder/".concat(this.finishInfo.id);
          break;

        case "prevention_maintenance_order":
          url = "/api/PreventionMaintenanceOrder/".concat(this.finishInfo.id);
          break;

        case "review_order":
          url = "/api/OrderReviewOrder/".concat(this.finishInfo.id);
          break;

        default:
          break;
      }

      axios.put(url, {
        status: status
      }).then(function (res) {
        _this.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.finishDialog = false;
      });
    },
    load: function load() {
      var _this2 = this;

      axios.post("/api/getAuthDetails?atype=1&page=".concat(this.page)).then(function (res) {
        // this.items = res.data.data.order_info;
        _this2.items = [].concat(_toConsumableArray(_this2.items), _toConsumableArray(res.data.data.order_info));
        _this2.page += 1;
        if (res.data.data.order_info != null) _this2.load(); // let reviewOrders = res.data.data.order_review_order;
        // reviewOrders.forEach((element) => {
        //     this.items.push({
        //         id: element.id,
        //         status: element.status,
        //         type: "review_order",
        //         created_at: element.created_at,
        //         review_order: {
        //             id: element.id,
        //         },
        //     });
        // });
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    search: function search() {
      var _this3 = this;

      axios.post("/api/getAuthDetails?atype=1&page=".concat(this.page), {
        id: this.id
      }).then(function (res) {
        _this3.items = _toConsumableArray(res.data.data.order_info); //this.page = 9999999;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
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
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var MaintenanceManager_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/MaintenanceManager/Orders.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  MaintenanceManager_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9f04993e",
  null
  
)

/* vuetify-loader */


















installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/MaintenanceManager/Orders.vue"
/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);