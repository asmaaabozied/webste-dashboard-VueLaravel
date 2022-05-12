(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#messagesContainer[data-v-61883516] {\n    width: 100%;\n    overflow-x: hidden;\n}\n.messagesList[data-v-61883516] {\n    height: 70vh;\n    overflow-y: scroll;\n}\n#thread[data-v-61883516] {\n    overflow-y: scroll;\n}\n#reply-message[data-v-61883516] {\n    height: 20vh;\n}\n*[data-v-61883516] {\n    scrollbar-width: thin;\n    scrollbar-color: #8bd886;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/Messages/Messages.vue":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Messages/Messages.vue + 4 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./resources/js/components/imagePreview.vue */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VDivider/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VFileInput/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VProgressCircular/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VSelect/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTabs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VToolbar/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Messages/Messages.vue?vue&type=template&id=61883516&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "messagesContainer" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { sm: "12", md: "6", lg: "4", xl: "4" } },
            [
              _c(
                "v-toolbar",
                { staticClass: "elevation-0" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: { rounded: "", color: "indigo" },
                      on: {
                        click: function($event) {
                          _vm.mode = "create"
                          this.currentMessage = { department_info: {} }
                        }
                      }
                    },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "mx-1", attrs: { color: "white" } },
                        [_vm._v(_vm._s(_vm.icons.mdiMessagePlus))]
                      ),
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("general.newMessage")) +
                          "\n                "
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs",
                {
                  attrs: { grow: "", "background-color": "accent-1" },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                [
                  _c("v-tabs-slider"),
                  _vm._v(" "),
                  _c("v-tab", { attrs: { href: "#tab-1" } }, [
                    _vm._v(_vm._s(_vm.$t("general.incomingMessages")))
                  ]),
                  _vm._v(" "),
                  _c("v-tab", { attrs: { href: "#tab-2" } }, [
                    _vm._v(_vm._s(_vm.$t("general.outgoingMessages")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    { attrs: { value: "tab-1" } },
                    [
                      _c("v-card", { staticClass: "elevation-0" }, [
                        _c(
                          "div",
                          { staticClass: "messagesList" },
                          [
                            _vm.isLoading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "text-center",
                                    staticStyle: { height: "50vh" },
                                    attrs: { width: "100%" }
                                  },
                                  [
                                    _c("v-progress-circular", {
                                      attrs: {
                                        width: 7,
                                        size: 70,
                                        color: "primary",
                                        indeterminate: ""
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.isLoading
                              ? _c(
                                  "v-list",
                                  {
                                    staticStyle: { cursor: "pointer" },
                                    attrs: { "three-line": "" }
                                  },
                                  [
                                    _vm._l(_vm.inbox, function(item, i) {
                                      return [
                                        i > 0
                                          ? _c("v-divider", {
                                              key: i + "d",
                                              attrs: { inset: item.inset }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            key: i + "m",
                                            on: {
                                              click: function($event) {
                                                _vm.mode = "view"
                                                _vm.loadMessage(item.id)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.text.substring(0, 20)
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.user_info.user_name
                                                    ) +
                                                      "\n                                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.formatDate(
                                                        item.created_at
                                                      )
                                                    ) +
                                                      "\n                                            "
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    })
                                  ],
                                  2
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.inbox.length == 0 && !_vm.isLoading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "text-center",
                                    attrs: { width: "100%" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("general.noMessages")) +
                                        "\n                            "
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    { attrs: { value: "tab-2" } },
                    [
                      _c("v-card", { staticClass: "elevation-0" }, [
                        _c(
                          "div",
                          { staticClass: "messagesList" },
                          [
                            _vm.isLoading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "text-center",
                                    staticStyle: { height: "50vh" },
                                    attrs: { width: "100%" }
                                  },
                                  [
                                    _c("v-progress-circular", {
                                      attrs: {
                                        width: 7,
                                        size: 70,
                                        color: "primary",
                                        indeterminate: ""
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.isLoading
                              ? _c(
                                  "v-list",
                                  {
                                    staticStyle: { cursor: "pointer" },
                                    attrs: { "three-line": "" }
                                  },
                                  [
                                    _vm._l(_vm.sentMessages, function(item, i) {
                                      return [
                                        i > 0
                                          ? _c("v-divider", {
                                              key: i + "d",
                                              attrs: { inset: item.inset }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            key: i + "m",
                                            on: {
                                              click: function($event) {
                                                _vm.mode = "view"
                                                _vm.loadMessage(item.id)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.text.substring(0, 20)
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item.user_info.user_name
                                                    ) +
                                                      "\n                                            "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.formatDate(
                                                        item.created_at
                                                      )
                                                    ) +
                                                      "\n                                            "
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    })
                                  ],
                                  2
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.sentMessages.length == 0 && !_vm.isLoading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "text-center",
                                    attrs: { width: "100%" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("general.noMessages")) +
                                        "\n                            "
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
            ],
            1
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { sm: "12", md: "6", lg: "8", xl: "8" } }, [
            _vm.mode == "view" && _vm.currentMessage.id
              ? _c(
                  "div",
                  {
                    staticClass: "px-2 mb-2 d-flex flex-column",
                    attrs: { id: "thread" }
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "ma-2",
                        attrs: { width: "55%", outlined: "" }
                      },
                      [
                        _c("v-card-title", [
                          _c("p", {
                            staticClass: "ma-0 pa-0",
                            domProps: {
                              textContent: _vm._s(
                                _vm.currentMessage.user_info.user_name
                              )
                            }
                          }),
                          _vm._v(":\n                    ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c("p", {
                              domProps: {
                                textContent: _vm._s(_vm.currentMessage.text)
                              }
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.currentMessage.image, function(image) {
                              return _c("previewer", {
                                key: image.id,
                                staticClass: "ma-3",
                                attrs: {
                                  src: image.image,
                                  width: "20vw",
                                  height: 150
                                }
                              })
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          { staticClass: "d-flex justify-space-between" },
                          [
                            _c("small", [
                              _vm._v(
                                _vm._s(
                                  _vm.formatDate(_vm.currentMessage.created_at)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-icon", [_vm._v(_vm._s(_vm.icons.mdiMessage))])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(
                      _vm.currentMessage.response_for_current_message,
                      function(item, i) {
                        return _c(
                          "v-card",
                          {
                            key: i,
                            staticClass: "ma-2 align-self-end",
                            attrs: { width: "55%", outlined: "" }
                          },
                          [
                            _c("v-card-title", [
                              _c("p", {
                                staticClass: "ma-0 pa-0",
                                domProps: {
                                  textContent: _vm._s(item.user_info.user_name)
                                }
                              }),
                              _vm._v(":\n                    ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c("p", {
                                  domProps: { textContent: _vm._s(item.text) }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.currentMessage.image, function(
                                  image
                                ) {
                                  return _c("previewer", {
                                    key: image.id,
                                    staticClass: "ma-3",
                                    attrs: {
                                      src: image.image,
                                      width: "10vw",
                                      height: 50
                                    }
                                  })
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              { staticClass: "d-flex justify-space-between" },
                              [
                                _c("small", [
                                  _vm._v(
                                    _vm._s(_vm.formatDate(item.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-icon", [
                                  _vm._v(_vm._s(_vm.icons.mdiReply))
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }
                    )
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "px-10 pt-12" },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "3" } },
                  [
                    _vm.mode == "create"
                      ? _c("v-select", {
                          attrs: {
                            items: _vm.departments,
                            "error-messages": _vm.departmentErrors,
                            label: _vm.$t("general.department"),
                            "item-value": "id",
                            outlined: "",
                            dense: "",
                            "item-text":
                              _vm.$i18n.locale == "ar" ? "name_ar" : "name"
                          },
                          model: {
                            value: _vm.department,
                            callback: function($$v) {
                              _vm.department = $$v
                            },
                            expression: "department"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    "prepend-icon": _vm.icons.mdiPaperclip,
                    "append-outer-icon": _vm.newMessage
                      ? _vm.icons.mdiSend
                      : null,
                    filled: "",
                    "clear-icon": _vm.icons.mdiCloseCircle,
                    clearable: "",
                    rules: [
                      function(v) {
                        return !!v || _vm.$requiredRules
                      }
                    ],
                    label: _vm.$t("general.message"),
                    type: "text"
                  },
                  on: {
                    "click:append-outer": _vm.sendMessage,
                    "click:clear": function($event) {
                      _vm.newMessage = ""
                    },
                    "click:prepend": _vm.addFiles
                  },
                  model: {
                    value: _vm.newMessage,
                    callback: function($$v) {
                      _vm.newMessage = $$v
                    },
                    expression: "newMessage"
                  }
                }),
                _vm._v(" "),
                _c("v-file-input", {
                  staticStyle: { display: "none" },
                  attrs: {
                    multiple: "",
                    id: "selectFiles",
                    chips: "",
                    "show-size": "",
                    counter: "",
                    label: _vm.$t("general.selectFiles"),
                    rounded: "",
                    outlined: "",
                    dense: "",
                    accept: "application/pdf, image/*"
                  },
                  model: {
                    value: _vm.files,
                    callback: function($$v) {
                      _vm.files = $$v
                    },
                    expression: "files"
                  }
                })
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Messages/Messages.vue?vue&type=template&id=61883516&scoped=true&

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// EXTERNAL MODULE: ./resources/js/components/imagePreview.vue + 4 modules
var imagePreview = __webpack_require__("./resources/js/components/imagePreview.vue");

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Messages/Messages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Messagesvue_type_script_lang_js_ = ({
  components: {
    previewer: imagePreview["default"]
  },
  data: function data() {
    return {
      icons: {
        mdiEmailSend: mdi["mdiEmailSend"],
        mdiCloseCircle: mdi["mdiCloseCircle"],
        mdiMessagePlus: mdi["mdiMessagePlus"],
        mdiReply: mdi["mdiReply"],
        mdiMessage: mdi["mdiMessage"],
        mdiSend: mdi["mdiSend"],
        mdiPaperclip: mdi["mdiPaperclip"]
      },
      tab: "tab-1",
      sentMessages: [],
      inbox: [],
      departments: [],
      department: "",
      userDepartmentID: null,
      newMessage: null,
      currentMessage: {
        department_info: {}
      },
      mode: "create",
      files: [],
      isLoading: false
    };
  },
  validations: {
    newMessage: {
      required: validators["required"]
    },
    department: {
      required: validators["required"]
    }
  },
  methods: {
    loadMessages: function loadMessages() {
      var _this = this;

      this.isLoading = true;
      axios.post("/api/getAuthDetails?atype=1").then(function (_ref) {
        var data = _ref.data;
        _this.sentMessages = data.data.messages;
      })["catch"](function (err) {
        console.warn(err);
      })["finally"](function () {
        _this.isLoading = false;
      });
      var departmentID = this.$store.state.user.department_id;
      this.userDepartmentID = this.$store.state.user.department_id;
      if (departmentID) axios.get("/api/department/".concat(departmentID)).then(function (_ref2) {
        var data = _ref2.data;
        _this.inbox = data.data.messages;
      });
      if (this.currentMessage.id) this.loadMessage(this.currentMessage.id);
    },
    loadDefaults: function loadDefaults() {
      var _this2 = this;

      axios.get("/api/department").then(function (res) {
        _this2.departments = res.data.data.filter(function (item) {
          return item.id != _this2.userDepartmentID;
        });
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    loadMessage: function loadMessage(id) {
      var _this3 = this;

      this.currentMessage = {};
      axios.get("/api/Message/".concat(id)).then(function (res) {
        _this3.currentMessage = res.data.data;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    sendMessage: function sendMessage() {
      var _this4 = this;

      this.$v.$touch();
      if (this.$v.$invalid) return;
      var form = new FormData();
      form.append("text", this.newMessage);
      form.append("has_images", this.files.length ? 1 : 0);
      if (this.department) form.append("department_id", this.department);
      this.files.forEach(function (file) {
        return form.append("images[]", file);
      });
      if (this.mode == 'view' && this.currentMessage.id) form.append("response_message_id", this.currentMessage.id);
      axios.post("/api/Message", form).then(function (res) {
        _this4.$notify({
          text: _this4.$t("general.success"),
          type: "success"
        });

        _this4.loadMessages();

        _this4.resetForm();
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    resetForm: function resetForm() {
      this.department = "";
      this.newMessage = "";
      this.image = null;
      this.$v.$reset();
    },
    addFiles: function addFiles() {
      document.getElementById("selectFiles").click();
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.loadMessages();
    });
  },
  mounted: function mounted() {
    this.loadDefaults();
  },
  computed: {
    departmentErrors: function departmentErrors() {
      var errors = [];
      if (!this.$v.department.$dirty) return errors;
      !this.$v.department.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    newMessageErrors: function newMessageErrors() {
      var errors = [];
      if (!this.$v.newMessage.$dirty) return errors;
      !this.$v.newMessage.required && errors.push(this.$t("validate.required"));
      return errors;
    }
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Messages/Messages.vue?vue&type=script&lang=js&
 /* harmony default export */ var Messages_Messagesvue_type_script_lang_js_ = (Messagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&
var Messagesvue_type_style_index_0_id_61883516_scoped_true_lang_css_ = __webpack_require__("./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&");

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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/index.js + 1 modules
var VDivider = __webpack_require__("./node_modules/vuetify/lib/components/VDivider/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VFileInput/index.js + 1 modules
var VFileInput = __webpack_require__("./node_modules/vuetify/lib/components/VFileInput/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 7 modules
var VList = __webpack_require__("./node_modules/vuetify/lib/components/VList/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressCircular/index.js
var VProgressCircular = __webpack_require__("./node_modules/vuetify/lib/components/VProgressCircular/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/index.js
var VSelect = __webpack_require__("./node_modules/vuetify/lib/components/VSelect/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/index.js + 6 modules
var VTabs = __webpack_require__("./node_modules/vuetify/lib/components/VTabs/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__("./node_modules/vuetify/lib/components/VToolbar/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Messages/Messages.vue






/* normalize component */

var component = Object(componentNormalizer["default"])(
  Messages_Messagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "61883516",
  null
  
)

/* vuetify-loader */
























installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardActions: VCard["VCardActions"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCol: VGrid["VCol"],VDivider: VDivider["VDivider"],VFileInput: VFileInput["VFileInput"],VIcon: VIcon["VIcon"],VList: VList["VList"],VListItem: VList["VListItem"],VListItemContent: VList["VListItemContent"],VListItemSubtitle: VList["VListItemSubtitle"],VListItemTitle: VList["VListItemTitle"],VProgressCircular: VProgressCircular["VProgressCircular"],VRow: VGrid["VRow"],VSelect: VSelect["VSelect"],VTab: VTabs["VTab"],VTabItem: VTabs["VTabItem"],VTabs: VTabs["VTabs"],VTabsSlider: VTabs["VTabsSlider"],VTextField: VTextField["VTextField"],VToolbar: VToolbar["VToolbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Messages/Messages.vue"
/* harmony default export */ var Messages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_61883516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Messages/Messages.vue?vue&type=style&index=0&id=61883516&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_61883516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_61883516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_61883516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_61883516_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

}]);