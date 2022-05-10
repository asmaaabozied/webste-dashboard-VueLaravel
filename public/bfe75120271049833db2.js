(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./resources/js/pages/InstallManager/Orders.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/InstallManager/Orders.vue + 4 modules ***!
  \******************************************************************/
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
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VPagination/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/InstallManager/Orders.vue?vue&type=template&id=1fb9c369&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.orders.title")))]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("v-simple-table", {
        attrs: { height: "50vh", dense: "", "fixed-header": "" },
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
                      _vm._v(_vm._s(_vm.$t("general.name")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("general.date")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("order.deviceType")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("order.manufactureName")))
                    ]),
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
                    _c("th", { staticClass: "text-center" })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.orders, function(row, i) {
                    return _c("tr", { key: i }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(row.order_info.id))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(row.name))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.formatDate(row.created_at)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(row.device_type))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(row.manufacturer))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$getOrderStatus(row.order_info.status).label
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.$getTechnicalStatus(
                                row.order_info.technical_status
                              ).label
                            ) +
                            "\n                "
                        )
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
                                            return _vm.open(row)
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
                                    _vm.$checkIfOrderStatusNotIn(
                                      _vm.$getOrderStatus(row.order_info.status)
                                        .value,
                                      [3, 4, 5, 6]
                                    )
                                      ? _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.finish(row)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(
                                                _vm._s(_vm.$t("general.finish"))
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
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: {
              length: Math.ceil(_vm.total / _vm.limit),
              "total-visible": 5,
              circle: ""
            },
            on: { input: _vm.load },
            model: {
              value: _vm.page,
              callback: function($$v) {
                _vm.page = $$v
              },
              expression: "page"
            }
          })
        ],
        1
      ),
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
                _vm._v(_vm._s(_vm.$t("general.finishOrder")))
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
                      on: { click: _vm.confirmFinishItem }
                    },
                    [_vm._v(_vm._s(_vm.getFinishMessage()))]
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


// CONCATENATED MODULE: ./resources/js/pages/InstallManager/Orders.vue?vue&type=template&id=1fb9c369&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/InstallManager/Orders.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      page: 1,
      total: 0,
      limit: 5,
      orders: [],
      statusItems: [{
        value: "received",
        text: this.$t("myRequests.received")
      }, {
        value: "being processed",
        text: this.$t("myRequests.processing")
      }, {
        value: "under maintenance",
        text: this.$t("myRequests.maintaining")
      }, {
        value: "order finish",
        text: this.$t("myRequests.finished")
      }, {
        value: "declined",
        text: this.$t("myRequests.declined")
      }],
      filterByStateValue: null,
      finishInfo: {},
      finishDialog: false
    };
  },
  methods: {
    open: function open(order) {
      var destination;
      if (this.$getOrderStatus(order.order_info.status).value == 0) destination = "im5";else destination = "im6";
      this.$router.push({
        name: destination,
        params: {
          id: order.id
        }
      });
    },
    finish: function finish(item) {
      this.finishInfo = {
        id: item.id,
        technical_status: item.order_info.technical_status
      };
      this.finishDialog = true;
    },
    getFinishMessage: function getFinishMessage() {
      return this.$getTechnicalStatus(this.finishInfo.technical_status).value ? this.$t("general.sure") : this.$t('myRequests.unfixedDevice');
    },
    confirmFinishItem: function confirmFinishItem() {
      var _this = this;

      var status = 3;
      var techStatus = this.$getTechnicalStatus(this.finishInfo.technical_status).value;

      if (techStatus != -1) {
        status = techStatus == 1 ? 3 : 6;
      }

      axios.put("/api/InstallmentOrder/".concat(this.finishInfo.id), {
        status: status
      }).then(function (res) {
        _this.$notify({
          text: _this.$t("general.success"),
          type: "info"
        });

        _this.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.finishDialog = false;
      });
    },
    load: function load() {
      var _this2 = this;

      axios.get("/api/InstallmentOrder?page=".concat(this.page)).then(function (res) {
        _this2.orders = res.data.data.resource.data;
        _this2.total = res.data.data.resource.total;
      })["catch"](function () {});
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/InstallManager/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var InstallManager_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/index.js + 1 modules
var VPagination = __webpack_require__("./node_modules/vuetify/lib/components/VPagination/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/pages/InstallManager/Orders.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  InstallManager_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1fb9c369",
  null
  
)

/* vuetify-loader */















installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VPagination: VPagination["VPagination"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/InstallManager/Orders.vue"
/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);