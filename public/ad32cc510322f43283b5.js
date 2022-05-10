(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./resources/js/pages/Admin/Ads/Ads.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Admin/Ads/Ads.vue + 9 modules ***!
  \**********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/moment/moment.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAlert/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAvatar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDataTable/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDatePicker/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VFileInput/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VImg/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VMenu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VPagination/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSwitch/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Ads/Ads.vue?vue&type=template&id=764b1ed0&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(_vm._s(_vm.$t("admin.ads")))]),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "60vw" },
          model: {
            value: _vm.itemDialog,
            callback: function($$v) {
              _vm.itemDialog = $$v
            },
            expression: "itemDialog"
          }
        },
        [
          _c("ad", {
            attrs: { id: _vm.itemId },
            on: {
              close: function($event) {
                _vm.itemDialog = false
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
      ),
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
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.$t("service.img")))
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Title En")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Title Ar")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Sub Title En")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Sub Title Ar")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Sub Title Ar")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("description En")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("description Ar")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("description Ar")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.items, function(item, i) {
                    return _c("tr", [
                      _c(
                        "td",
                        [
                          _c(
                            "v-avatar",
                            {
                              staticClass: "ms-2 me-2 mb-2",
                              attrs: { size: "80", color: "grey lighten-4" }
                            },
                            [_c("v-img", { attrs: { src: item.image } })],
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
              "next-icon": _vm.icons.mdiChevronRight,
              "prev-icon": _vm.icons.mdiChevronLeft,
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/Ads/Ads.vue?vue&type=template&id=764b1ed0&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Ads/ad.vue?vue&type=template&id=0b4a01cb&scoped=true&
var advue_type_template_id_0b4a01cb_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c("v-card-title", [_vm._v(_vm._s(_vm.$t("admin.ad")))]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  _vm.itemDialog = false
                }
              }
            },
            [_c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiClose))])],
            1
          )
        ],
        1
      ),
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
                      "error-messages": _vm.mainTitleErrors,
                      label: _vm.$t("general.mainTitle") + " En",
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.mainTitle,
                      callback: function($$v) {
                        _vm.mainTitle = $$v
                      },
                      expression: "mainTitle"
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
                      "error-messages": _vm.mainTitleErrorsAr,
                      label: _vm.$t("general.mainTitle"),
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.mainTitleAr,
                      callback: function($$v) {
                        _vm.mainTitleAr = $$v
                      },
                      expression: "mainTitleAr"
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
                      "error-messages": _vm.subTitleErrors,
                      label: _vm.$t("general.subTitle") + " En",
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.subTitle,
                      callback: function($$v) {
                        _vm.subTitle = $$v
                      },
                      expression: "subTitle"
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
                      "error-messages": _vm.subTitleErrorsAr,
                      label: _vm.$t("general.subTitle"),
                      outlined: "",
                      rounded: "",
                      autocomplete: "off",
                      autocorrect: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.subTitleAr,
                      callback: function($$v) {
                        _vm.subTitleAr = $$v
                      },
                      expression: "subTitleAr"
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
                      "error-messages": _vm.descriptionErrors,
                      label: _vm.$t("general.description") + " En",
                      outlined: "",
                      rounded: "",
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.descriptionErrorsAr,
                      label: _vm.$t("general.description"),
                      outlined: "",
                      rounded: "",
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
                    },
                    model: {
                      value: _vm.descriptionAr,
                      callback: function($$v) {
                        _vm.descriptionAr = $$v
                      },
                      expression: "descriptionAr"
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
                { attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.$t("general.price"),
                      type: "number",
                      min: "0",
                      "error-messages": _vm.priceErrors,
                      outlined: "",
                      rounded: "",
                      autocorrect: "off",
                      autocapitalize: "off",
                      spellcheck: "false"
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
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "290px"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  {
                                    attrs: {
                                      label: _vm.$t("general.sDate"),
                                      "error-messages": _vm.sDateErrors,
                                      "prepend-icon": _vm.icons.mdiCalendar,
                                      readonly: "",
                                      rounded: "",
                                      outlined: "",
                                      dense: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.sDate,
                                      callback: function($$v) {
                                        _vm.sDate = $$v
                                      },
                                      expression: "sDate"
                                    }
                                  },
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.sDateMenu,
                        callback: function($$v) {
                          _vm.sDateMenu = $$v
                        },
                        expression: "sDateMenu"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        attrs: { locale: _vm.$i18n.locale },
                        on: {
                          input: function($event) {
                            _vm.sDateMenu = false
                          }
                        },
                        model: {
                          value: _vm.sDate,
                          callback: function($$v) {
                            _vm.sDate = $$v
                          },
                          expression: "sDate"
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
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "290px"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  {
                                    attrs: {
                                      label: _vm.$t("general.eDate"),
                                      "error-messages": _vm.eDateErrors,
                                      "prepend-icon": _vm.icons.mdiCalendar,
                                      readonly: "",
                                      rounded: "",
                                      outlined: "",
                                      dense: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.eDate,
                                      callback: function($$v) {
                                        _vm.eDate = $$v
                                      },
                                      expression: "eDate"
                                    }
                                  },
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.eDateMenu,
                        callback: function($$v) {
                          _vm.eDateMenu = $$v
                        },
                        expression: "eDateMenu"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        attrs: { locale: _vm.$i18n.locale },
                        on: {
                          input: function($event) {
                            _vm.eDateMenu = false
                          }
                        },
                        model: {
                          value: _vm.eDate,
                          callback: function($$v) {
                            _vm.eDate = $$v
                          },
                          expression: "eDate"
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
            "v-row",
            [
              _c("v-alert", { attrs: { type: "info" } }, [
                _vm._v(_vm._s(_vm.$t("admin.adSize")))
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-file-input", {
                    attrs: {
                      "error-messages": _vm.imageErrors,
                      accept: "image/*",
                      label: _vm.$t("general.image"),
                      outlined: "",
                      dense: "",
                      rounded: ""
                    },
                    model: {
                      value: _vm.image,
                      callback: function($$v) {
                        _vm.image = $$v
                      },
                      expression: "image"
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
                { attrs: { cols: "12" } },
                [
                  _c("v-switch", {
                    staticClass: "mx-2",
                    attrs: { color: "blue", label: _vm.$t("general.active") },
                    model: {
                      value: _vm.isEnabled,
                      callback: function($$v) {
                        _vm.isEnabled = $$v
                      },
                      expression: "isEnabled"
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
              attrs: { rounded: "", color: "primary", dark: "" },
              on: { click: _vm.save }
            },
            [_vm._v(_vm._s(_vm.$t("general.save")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var advue_type_template_id_0b4a01cb_scoped_true_staticRenderFns = []
advue_type_template_id_0b4a01cb_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/Ads/ad.vue?vue&type=template&id=0b4a01cb&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("./node_modules/moment/moment.js");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Ads/ad.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var isAfterDate = function isAfterDate(value, vm) {
  return new Date(value).getTime() > new Date(vm.sDate).getTime();
};

/* harmony default export */ var advue_type_script_lang_js_ = ({
  props: {
    id: {
      type: Number,
      "default": 0
    }
  },
  // metaInfo() {
  //   const locale = this.$i18n.locale;
  //   return {
  //     title: locale == "en" ? "Ad" : "اعلان",
  //   };
  // },
  data: function data() {
    return {
      icons: {
        mdiCalendar: mdi["mdiCalendar"]
      },
      mainTitle: null,
      subTitle: null,
      description: null,
      mainTitleAr: null,
      subTitleAr: null,
      descriptionAr: null,
      price: null,
      sDateMenu: false,
      sDate: null,
      eDateMenu: false,
      eDate: null,
      image: null,
      isEnabled: true
    };
  },
  validations: {
    mainTitle: {
      required: validators["required"]
    },
    subTitle: {
      required: validators["required"]
    },
    description: {
      required: validators["required"]
    },
    mainTitleAr: {
      required: validators["required"]
    },
    subTitleAr: {
      required: validators["required"]
    },
    descriptionAr: {
      required: validators["required"]
    },
    price: {
      required: validators["required"]
    },
    image: {
      required: Object(validators["requiredUnless"])(function () {
        return this.id != 0;
      })
    },
    sDate: {
      required: validators["required"],
      minValue: function minValue(value) {
        return moment_default()(value).format("YYYY-MM-DD") >= moment_default()().format("YYYY-MM-DD");
      }
    },
    eDate: {
      required: validators["required"],
      isAfterDate: isAfterDate
    }
  },
  methods: {
    save: function save() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      var form = new FormData();
      form.append("start_date", this.sDate);
      form.append("end_date", this.eDate);
      form.append("main_title", this.mainTitle);
      form.append("description", this.description);
      form.append("sub_title", this.subTitle);
      form.append("price", this.price);
      form.append("description_ar", this.descriptionAr);
      form.append("sub_title_ar", this.descriptionAr);
      form.append("main_title_ar", this.mainTitleAr);
      form.append("isEnabled", this.isEnabled ? 1 : 0);
      if (this.image) form.append("image", this.image);
      if (this.id > 0) form.append("_method", "PUT");
      var url = this.id == 0 ? "/api/advertArea" : "/api/advertArea/".concat(this.id);
      axios.post(url, form).then(function (res) {
        if (res.data.status != 200) {
          console.warn(err);
          return;
        }

        _this.$emit("close");
      })["catch"](function (res) {
        console.warn(err);
      });
    },
    load: function load() {
      var _this2 = this;

      axios.get("/api/advertArea/".concat(this.id)).then(function (res) {
        var data = res.data.data;
        _this2.mainTitle = data.main_title;
        _this2.subTitle = data.sub_title;
        _this2.description = data.description;
        _this2.mainTitleAr = data.main_title_ar;
        _this2.subTitleAr = data.sub_title_ar;
        _this2.descriptionAr = data.description_ar;
        _this2.price = data.price;
        _this2.sDate = data.start_date;
        _this2.eDate = data.end_date;
        _this2.isEnabled = data.isEnabled;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    createNew: function createNew() {
      this.mainTitle = null;
      this.subTitle = null;
      this.description = null;
      this.price = null;
      this.mainTitleAr = null;
      this.subTitleAr = null;
      this.descriptionAr = null;
      this.price = null;
      this.sDate = null;
      this.eDate = null;
      this.image = null;
      this.$v.$reset();
    }
  },
  computed: {
    mainTitleErrors: function mainTitleErrors() {
      var errors = [];
      if (!this.$v.mainTitle.$dirty) return errors;
      !this.$v.mainTitle.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    subTitleErrors: function subTitleErrors() {
      var errors = [];
      if (!this.$v.subTitle.$dirty) return errors;
      !this.$v.subTitle.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionErrors: function descriptionErrors() {
      var errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    mainTitleErrorsAr: function mainTitleErrorsAr() {
      var errors = [];
      if (!this.$v.mainTitleAr.$dirty) return errors;
      !this.$v.mainTitleAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    subTitleErrorsAr: function subTitleErrorsAr() {
      var errors = [];
      if (!this.$v.subTitleAr.$dirty) return errors;
      !this.$v.subTitleAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    descriptionErrorsAr: function descriptionErrorsAr() {
      var errors = [];
      if (!this.$v.descriptionAr.$dirty) return errors;
      !this.$v.descriptionAr.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    priceErrors: function priceErrors() {
      var errors = [];
      if (!this.$v.price.$dirty) return errors;
      !this.$v.price.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    imageErrors: function imageErrors() {
      var errors = [];
      if (!this.$v.image.$dirty) return errors;
      !this.$v.image.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    sDateErrors: function sDateErrors() {
      var errors = [];
      if (!this.$v.sDate.$dirty) return errors;
      !this.$v.sDate.required && errors.push(this.$t("validate.required"));
      !this.$v.sDate.minValue && errors.push(this.$t("validate.isStartDateOk"));
      return errors;
    },
    eDateErrors: function eDateErrors() {
      var errors = [];
      if (!this.$v.eDate.$dirty) return errors;
      !this.$v.eDate.required && errors.push(this.$t("validate.required"));
      !this.$v.eDate.isAfterDate && errors.push(this.$t("validate.greaterDate"));
      return errors;
    }
  },
  watch: {
    id: {
      immediate: true,
      handler: function handler(val, oldVal) {
        if (val) this.load();else this.createNew();
      }
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/Ads/ad.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ads_advue_type_script_lang_js_ = (advue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/index.js + 1 modules
var VAlert = __webpack_require__("./node_modules/vuetify/lib/components/VAlert/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDatePicker/index.js + 8 modules
var VDatePicker = __webpack_require__("./node_modules/vuetify/lib/components/VDatePicker/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/index.js + 1 modules
var VFileInput = __webpack_require__("./node_modules/vuetify/lib/components/VFileInput/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMenu/index.js + 1 modules
var VMenu = __webpack_require__("./node_modules/vuetify/lib/components/VMenu/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/index.js + 1 modules
var VSwitch = __webpack_require__("./node_modules/vuetify/lib/components/VSwitch/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Ads/ad.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Ads_advue_type_script_lang_js_,
  advue_type_template_id_0b4a01cb_scoped_true_render,
  advue_type_template_id_0b4a01cb_scoped_true_staticRenderFns,
  false,
  null,
  "0b4a01cb",
  null
  
)

/* vuetify-loader */
















installComponents_default()(component, {VAlert: VAlert["VAlert"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDatePicker: VDatePicker["VDatePicker"],VFileInput: VFileInput["VFileInput"],VIcon: VIcon["VIcon"],VMenu: VMenu["VMenu"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"],VSwitch: VSwitch["VSwitch"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Ads/ad.vue"
/* harmony default export */ var ad = (component.exports);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var node_modules_axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(node_modules_axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Ads/Ads.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Adsvue_type_script_lang_js_ = ({
  components: {
    ad: ad
  },
  data: function data() {
    return {
      icons: {
        mdiClose: mdi["mdiClose"],
        mdiPencilOutline: mdi["mdiPencilOutline"],
        mdiMagnify: mdi["mdiMagnify"],
        mdiPlusThick: mdi["mdiPlusThick"],
        mdiCheck: mdi["mdiCheck"],
        mdiChevronRight: mdi["mdiChevronRight"],
        mdiChevronLeft: mdi["mdiChevronLeft"]
      },
      items: [],
      search: null,
      itemDialog: false,
      deleteDialog: false,
      isLoading: false,
      itemId: 0,
      deleteItemId: null,
      page: 1,
      total: 0,
      limit: 5
    };
  },
  methods: {
    deleteItem: function deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this = this;

      axios_default.a["delete"]("/api/advertArea/".concat(this.deleteItemId)).then(function (res) {
        _this.load();
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.deleteDialog = false;
      });
    },
    editItem: function editItem(item) {
      this.itemId = item.id;
      this.itemDialog = true;
    },
    addItem: function addItem() {
      this.itemId = 0;
      this.itemDialog = true;
    },
    load: function load() {
      var _this2 = this;

      this.isLoading = true;
      axios_default.a.get("/api/advertArea?page=".concat(this.page)).then(function (res) {
        _this2.items = res.data.data.resource.data;
        _this2.total = res.data.data.resource.total;
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this2.isLoading = false;
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.load();
    });
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/Ads/Ads.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ads_Adsvue_type_script_lang_js_ = (Adsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/index.js + 1 modules
var VAvatar = __webpack_require__("./node_modules/vuetify/lib/components/VAvatar/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDialog/index.js
var VDialog = __webpack_require__("./node_modules/vuetify/lib/components/VDialog/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/index.js
var VImg = __webpack_require__("./node_modules/vuetify/lib/components/VImg/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/index.js + 1 modules
var VPagination = __webpack_require__("./node_modules/vuetify/lib/components/VPagination/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDataTable/index.js + 13 modules
var VDataTable = __webpack_require__("./node_modules/vuetify/lib/components/VDataTable/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Ads/Ads.vue





/* normalize component */

var Ads_component = Object(componentNormalizer["default"])(
  Ads_Adsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "764b1ed0",
  null
  
)

/* vuetify-loader */















installComponents_default()(Ads_component, {VAvatar: VAvatar["VAvatar"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDialog: VDialog["VDialog"],VIcon: VIcon["VIcon"],VImg: VImg["VImg"],VPagination: VPagination["VPagination"],VRow: VGrid["VRow"],VSimpleTable: VDataTable["VSimpleTable"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var Ads_api; }
Ads_component.options.__file = "resources/js/pages/Admin/Ads/Ads.vue"
/* harmony default export */ var Ads = __webpack_exports__["default"] = (Ads_component.exports);

/***/ })

}]);