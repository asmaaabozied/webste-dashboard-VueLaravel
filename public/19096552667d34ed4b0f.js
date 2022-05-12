(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./resources/js/pages/Technical/RequestSpare.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Technical/RequestSpare.vue + 4 modules ***!
  \*******************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBadge/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Technical/RequestSpare.vue?vue&type=template&id=4ab5eae3&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.spares.title")))]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex justify-end" },
        [
          _c(
            "v-btn",
            {
              staticClass: "mx-2",
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  _vm.cartDialog = true
                }
              }
            },
            [
              _c(
                "v-badge",
                {
                  attrs: {
                    content: _vm.cart.length,
                    value: _vm.cart.length,
                    color: "grey lighten-1"
                  }
                },
                [
                  _vm.cart.length > 0
                    ? _c("v-icon", { attrs: { color: "blue" } }, [
                        _vm._v(_vm._s(_vm.icons.mdiCart))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.cart.length == 0
                    ? _c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiCartOutline))])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-btn", { staticClass: "mx-2", on: { click: _vm.getBack } }, [
            _vm._v(_vm._s(_vm.$t("general.return")))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex justify-start flex-wrap" },
        _vm._l(_vm.items, function(item, i) {
          return _c(
            "div",
            { key: i, staticClass: "ma-2" },
            [
              _c(
                "v-card",
                { attrs: { width: "20vw" } },
                [
                  _c("v-card-title", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("v-card-subtitle", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(item.name_ar))
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("div", { staticClass: "text-center mt-1" }, [
                      _vm._v(_vm._s(item.manufacturer))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center mt-1" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(item.price + " " + _vm.$t("general.sar")) +
                          "\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-flex justify-center" }, [
                      _c(
                        "div",
                        { staticStyle: { width: "50%" } },
                        [
                          _c("v-text-field", {
                            attrs: { type: "number", min: "0" },
                            model: {
                              value: item.quantity,
                              callback: function($$v) {
                                _vm.$set(item, "quantity", _vm._n($$v))
                              },
                              expression: "item.quantity"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-center mt-1" },
                      [
                        !item.isAdded
                          ? _c(
                              "v-btn",
                              {
                                attrs: { rounded: "", color: "primary" },
                                on: {
                                  click: function($event) {
                                    _vm.cart.push(item)
                                    item.isAdded = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("general.add")) +
                                    "\n            "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.isAdded
                          ? _c(
                              "v-btn",
                              {
                                attrs: { rounded: "" },
                                on: {
                                  click: function($event) {
                                    _vm.cart.splice(
                                      _vm.cart.find(function(e) {
                                        return e.id == item.id
                                      }),
                                      1
                                    )
                                    item.isAdded = false
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("general.remove")) +
                                    "\n            "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "60vw", scrollable: "" },
          model: {
            value: _vm.cartDialog,
            callback: function($$v) {
              _vm.cartDialog = $$v
            },
            expression: "cartDialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { "min-height": "30vh" } },
            [
              _c("v-card-title", [
                _vm._v(_vm._s(_vm.$t("general.cartContent")))
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "div",
                  { staticClass: "d-flex flex-column" },
                  _vm._l(_vm.cart, function(item, i) {
                    return _c(
                      "div",
                      { key: i, staticClass: "ma-2" },
                      [
                        _c(
                          "v-card",
                          { attrs: { width: "100%" } },
                          [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "8" } },
                                  [
                                    _c("v-card-title", [
                                      _vm._v(_vm._s(item.code))
                                    ]),
                                    _vm._v(" "),
                                    _c("v-card-subtitle", [
                                      _vm._v(_vm._s(item.manufacturer))
                                    ]),
                                    _vm._v(" "),
                                    _c("v-card-text", [
                                      _c("div", { staticClass: "mt-1" }, [
                                        _vm._v(_vm._s(item.name))
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "mt-1" }, [
                                        _vm._v(_vm._s(item.name_ar))
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "mt-1" }, [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              item.price +
                                                " " +
                                                _vm.$t("general.sar")
                                            ) +
                                            "\n                    "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              _vm.$t("general.quantity") +
                                                " : " +
                                                item.quantity
                                            ) +
                                            "\n                    "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mt-1" },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { rounded: "" },
                                              on: {
                                                click: function($event) {
                                                  _vm.items.find(function(e) {
                                                    return e.id == item.id
                                                  }).isAdded = false
                                                  _vm.cart.splice(i, 1)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("general.remove")
                                                ) + "\n                      "
                                              )
                                            ]
                                          )
                                        ],
                                        1
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
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-center" },
                [
                  _vm.cart.length > 0
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.confirmCart }
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("general.confirm")) +
                              "\n          "
                          ),
                          _c("v-icon", [
                            _vm._v(_vm._s(_vm.icons.mdiCheckCircleOutline))
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Technical/RequestSpare.vue?vue&type=template&id=4ab5eae3&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Technical/RequestSpare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RequestSparevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      icons: {
        mdiCart: mdi["mdiCart"],
        mdiCartOutline: mdi["mdiCartOutline"],
        mdiCheckCircleOutline: mdi["mdiCheckCircleOutline"]
      },
      orderId: this.$route.params.id,
      cartDialog: false,
      cart: [],
      items: [],
      user_id: null
    };
  },
  methods: {
    confirmCart: function confirmCart() {
      var _this = this;

      var result = "ok"; // axios
      //   .post(`/api/employeeDetermineFixLocation`, {
      //     fix_place: 1,
      //     order_id: this.id
      //   })
      //   .catch(err => {
      //     result = "error";
      //   });

      this.cart.forEach(function (element) {
        if (result !== "error") {
          var form = new FormData();
          form.append("maintenance_order_id", parseInt(_this.orderId));
          form.append("spare_id", element.id);
          form.append("quantity", element.quantity);
          form.append("user_id", user_id);
          axios.post("/api/determineSparePart", form).then(function (res) {
            console.log(res);
            _this.cartDialog = false;

            _this.loadParts();

            _this.cart = [];
          })["catch"](function (err) {
            console.warn(err);
          });
        }
      });
    },
    getBack: function getBack() {
      this.$router.go(-1);
    },
    loadParts: function loadParts() {
      var _this2 = this;

      axios.get("/api/sparePart").then(function (res) {
        _this2.items = res.data.data;

        _this2.items.forEach(function (element) {
          element.quantity = 0;
          element.isAdded = false;
        });
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  mounted: function mounted() {
    this.loadParts();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Technical/RequestSpare.vue?vue&type=script&lang=js&
 /* harmony default export */ var Technical_RequestSparevue_type_script_lang_js_ = (RequestSparevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBadge/index.js + 1 modules
var VBadge = __webpack_require__("./node_modules/vuetify/lib/components/VBadge/index.js");

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Technical/RequestSpare.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Technical_RequestSparevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4ab5eae3",
  null
  
)

/* vuetify-loader */













installComponents_default()(component, {VBadge: VBadge["VBadge"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardSubtitle: VCard["VCardSubtitle"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Technical/RequestSpare.vue"
/* harmony default export */ var RequestSpare = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);