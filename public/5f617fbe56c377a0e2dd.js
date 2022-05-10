(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./resources/js/pages/TechManager/orders.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/TechManager/orders.vue + 4 modules ***!
  \***************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/orders.vue?vue&type=template&id=10563af4&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("technical.orders.title")))]),
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
                  _vm._l(_vm.orders, function(row, i) {
                    return _c("tr", { key: i }, [
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$getOrderStatus(row.status).label))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.$getOrdertype(row.type)))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.formatDate(row.created_at)))
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
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/TechManager/orders.vue?vue&type=template&id=10563af4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TechManager/orders.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ordersvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      orders: [],
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"]
      },
      page: 0
    };
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    open: function open(order) {
      var route = order.type == 'installment_order' ? 'tm6' : 'tm4';
      this.$router.push({
        name: route,
        params: {
          id: order[order.type].id,
          type: order.type
        }
      });
    },
    finish: function finish() {},
    load: function load() {
      var _this = this;

      axios.post("/api/getAuthDetails?atype=1&page=".concat(this.page)).then(function (_ref) {
        var data = _ref.data;
        // this.orders = data.data.order_info;
        _this.orders = [].concat(_toConsumableArray(_this.orders), _toConsumableArray(data.data.order_info));
        _this.page += 1;
        if (res.data.data.order_info != null) _this.load();
      });
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/TechManager/orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var TechManager_ordersvue_type_script_lang_js_ = (ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/TechManager/orders.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  TechManager_ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "10563af4",
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemTitle: VList["VListItemTitle"],VMenu: VMenu["VMenu"],VSimpleTable: VDataTable["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/TechManager/orders.vue"
/* harmony default export */ var orders = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);