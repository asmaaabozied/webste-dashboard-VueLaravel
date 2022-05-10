(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/ckeditor4-vue/dist/ckeditor.js":
/*!*****************************************************!*\
  !*** ./node_modules/ckeditor4-vue/dist/ckeditor.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*!*
* @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md.
*/
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,r){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(r=e,e={}),e=e||{},r=r||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,e.attrs),e.text&&(a.text=""+e.text),("onload"in a?n:o)(a,r),a.onload||n(a,r),i.appendChild(a)}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);let i;function a(t,e){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):t.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(i||(i=a.scriptLoader(t).then(t=>(e&&e(t),t))),i)}a.scriptLoader=t=>new Promise((e,n)=>{r()(t,t=>(i=void 0,t?n(t):window.CKEDITOR?void e(CKEDITOR):n(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."))))});var s=function(t,e,n={}){let o;return function(...r){clearTimeout(o),o=setTimeout(t.bind(n,...r),e)}},c={name:"ckeditor",render(t){return t("div",{},[t(this.tagName)])},props:{value:{type:String,default:""},type:{type:String,default:"classic",validator:t=>["classic","inline"].includes(t)},editorUrl:{type:String,default:"https://cdn.ckeditor.com/4.15.1/standard-all/ckeditor.js"},config:{type:Object,default:()=>{}},tagName:{type:String,default:"textarea"},readOnly:{type:Boolean,default:null},throttle:{type:Number,default:80}},mounted(){a(this.editorUrl,t=>{this.$emit("namespaceloaded",t)}).then(()=>{if(this.$_destroyed)return;const t=this.config||{};null!==this.readOnly&&(t.readOnly=this.readOnly);const e="inline"===this.type?"inline":"replace",n=this.$el.firstElementChild,o=this.instance=CKEDITOR[e](n,t);o.on("instanceReady",()=>{const t=this.value;o.fire("lockSnapshot"),o.setData(t,{callback:()=>{this.$_setUpEditorEvents();const e=o.getData();t!==e?(this.$once("input",()=>{this.$emit("ready",o)}),this.$emit("input",e)):this.$emit("ready",o),o.fire("unlockSnapshot")}})})})},beforeDestroy(){this.instance&&this.instance.destroy(),this.$_destroyed=!0},watch:{value(t){this.instance&&this.instance.getData()!==t&&this.instance.setData(t)},readOnly(t){this.instance&&this.instance.setReadOnly(t)}},methods:{$_setUpEditorEvents(){const t=this.instance,e=s(e=>{const n=t.getData();this.value!==n&&this.$emit("input",n,e,t)},this.throttle);t.on("change",e),t.on("focus",e=>{this.$emit("focus",e,t)}),t.on("blur",e=>{this.$emit("blur",e,t)})}}};const l={install(t){t.component("ckeditor",c)},component:c};e.default=l}]).default}));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./resources/js/pages/Admin/contentManagement/editor.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Admin/contentManagement/editor.vue + 4 modules ***!
  \***************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/ckeditor4-vue/dist/ckeditor.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuelidate/lib/validators/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VAlert/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTabs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VTextField/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/contentManagement/editor.vue?vue&type=template&id=52b7ebc9&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        { attrs: { justify: "end" } },
        [
          _c(
            "v-col",
            {
              staticClass: "d-flex justify-end",
              attrs: { cols: "2", md: "1" }
            },
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
      _vm._l(_vm.messages, function(item, i) {
        return _c(
          "v-row",
          { key: i, attrs: { "no-gutters": "" } },
          [
            _c(
              "v-col",
              { attrs: { cols: "12", md: "4" } },
              [
                _c(
                  "v-alert",
                  {
                    attrs: {
                      icon: "mdi-information",
                      color: "red",
                      type: "error"
                    }
                  },
                  [
                    _vm._v(
                      "\n                " + _vm._s(item) + "\n            "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("admin.pageOrder"),
                  type: "number",
                  min: "1",
                  "error-messages": _vm.orderErrors,
                  autocomplete: "off",
                  autocorrect: "off",
                  spellcheck: "false",
                  rounded: "",
                  outlined: "",
                  dense: ""
                },
                model: {
                  value: _vm.pageOrder,
                  callback: function($$v) {
                    _vm.pageOrder = $$v
                  },
                  expression: "pageOrder"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("general.nameAr"),
                  "error-messages": _vm.nameErrors,
                  autocomplete: "off",
                  autocorrect: "off",
                  spellcheck: "false",
                  rounded: "",
                  outlined: "",
                  dense: ""
                },
                model: {
                  value: _vm.name.ar,
                  callback: function($$v) {
                    _vm.$set(_vm.name, "ar", $$v)
                  },
                  expression: "name.ar"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("general.nameEn"),
                  "error-messages": _vm.nameEnErrors,
                  autocomplete: "off",
                  autocorrect: "off",
                  spellcheck: "false",
                  rounded: "",
                  outlined: "",
                  dense: ""
                },
                model: {
                  value: _vm.name.en,
                  callback: function($$v) {
                    _vm.$set(_vm.name, "en", $$v)
                  },
                  expression: "name.en"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "3" } },
            [
              _c(
                "v-btn",
                {
                  staticClass: "mx-4",
                  attrs: { rounded: "" },
                  on: { click: _vm.save }
                },
                [_vm._v(_vm._s(_vm.$t("general.save")) + "\n            ")]
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
            "v-card",
            { attrs: { width: "100%" } },
            [
              _c(
                "v-tabs",
                {
                  attrs: { "background-color": "blue", dark: "" },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                [
                  _c("v-tab", { attrs: { href: "#tab-1" } }, [
                    _vm._v(_vm._s(_vm.$t("admin.arabic")))
                  ]),
                  _vm._v(" "),
                  _c("v-tab", { attrs: { href: "#tab-2" } }, [
                    _vm._v(_vm._s(_vm.$t("admin.english")))
                  ]),
                  _vm._v(" "),
                  _c("v-tab-item", { attrs: { value: "tab-1" } }, [
                    _c("div", { staticClass: "ma-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "ma-2",
                          staticStyle: { height: "70vh" }
                        },
                        [
                          _c("ckeditor", {
                            attrs: { config: _vm.editorConfig },
                            model: {
                              value: _vm.content.ar,
                              callback: function($$v) {
                                _vm.$set(_vm.content, "ar", $$v)
                              },
                              expression: "content.ar"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.contentErrors, function(item) {
                            return _c(
                              "small",
                              { key: item, staticStyle: { color: "red" } },
                              [_vm._v(_vm._s(item))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-tab-item", { attrs: { value: "tab-2" } }, [
                    _c("div", { staticClass: "ma-4" }, [
                      _c(
                        "div",
                        {
                          staticClass: "ma-2",
                          staticStyle: { height: "70vh" }
                        },
                        [
                          _c("ckeditor", {
                            attrs: { config: _vm.editorConfig },
                            model: {
                              value: _vm.content.en,
                              callback: function($$v) {
                                _vm.$set(_vm.content, "en", $$v)
                              },
                              expression: "content.en"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.contentErrors, function(item) {
                            return _c(
                              "small",
                              { key: item, staticStyle: { color: "red" } },
                              [_vm._v(_vm._s(item))]
                            )
                          })
                        ],
                        2
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
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/contentManagement/editor.vue?vue&type=template&id=52b7ebc9&

// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__("./node_modules/ckeditor4-vue/dist/ckeditor.js");
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);

// EXTERNAL MODULE: ./node_modules/vuelidate/lib/validators/index.js
var validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/contentManagement/editor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.use(ckeditor_default.a);

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: "editor",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "Editor" : "محرر المحتوى"
    };
  },
  components: {
    ckeditor: ckeditor_default.a.component
  },
  data: function data() {
    return {
      id: 0,
      tabs: 2,
      tab: "tab-1",
      editorConfig: {},
      name: {
        ar: null,
        en: null
      },
      pageOrder: 0,
      content: {
        ar: "",
        en: ""
      },
      messages: []
    };
  },
  validations: {
    name: {
      ar: {
        required: validators["required"]
      },
      en: {
        required: validators["required"]
      }
    },
    content: {
      ar: {
        required: validators["required"]
      },
      en: {
        required: validators["required"]
      }
    },
    pageOrder: {
      required: validators["required"],
      minValue: Object(validators["minValue"])(1)
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/api/contentManagement/".concat(this.id)).then(function (res) {
        var data = res.data.data;
        _this.name.ar = data.name_ar;
        _this.name.en = data.name_en;
        _this.pageOrder = data.pageOrder;
        _this.content.ar = data.content_ar;
        _this.content.en = data.content_en;
      })["catch"](function (err) {
        _this.$notify({
          text: "Error, " + err,
          type: "error"
        });
      });
    },
    save: function save() {
      var _this2 = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          text: this.$t("general.checkInputs"),
          type: "error"
        });
        return;
      }

      var data = {
        name_ar: this.name.ar,
        name_en: this.name.en,
        content_ar: this.content.ar,
        content_en: this.content.en,
        pageOrder: this.pageOrder
      };

      if (this.id == 0) {
        axios.post("/api/contentManagement", data).then(function (res) {
          _this2.$notify({
            text: _this2.$t("general.success"),
            type: "success"
          });

          _this2.$router.push({
            name: "sa12"
          });
        })["catch"](function (err) {
          _this2.$notify({
            text: "Error while saveing, " + err,
            type: "error"
          });

          _this2.setMessages(err.response.data);
        });
      } else if (this.id > 0) {
        axios.put("/api/contentManagement/".concat(this.id), data).then(function (res) {
          _this2.$notify({
            text: _this2.$t("general.success"),
            type: "success"
          });
        })["catch"](function (err) {
          _this2.$notify({
            text: "Error while saveing, " + err,
            type: "error"
          });

          _this2.setMessages(err.response.data);
        });
      }
    },
    createNew: function createNew() {
      this.name.ar = null;
      this.name.en = null;
      this.content = {
        ar: "<p>اكتب المحتوى هنا ..</p>",
        en: "<p>Type your content here ..</p>"
      };
      this.$v.$reset();
    },
    getBack: function getBack() {
      this.$router.push({
        name: "sa12"
      });
    },
    setMessages: function setMessages(data) {
      for (var key in data) {
        this.messages.push(data[key]);
      }
    }
  },
  computed: {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.ar.$dirty) return errors;
      !this.$v.name.ar.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    nameEnErrors: function nameEnErrors() {
      var errors = [];
      if (!this.$v.name.en.$dirty) return errors;
      !this.$v.name.en.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    contentErrors: function contentErrors() {
      var errors = [];
      if (!this.$v.content.ar.$dirty) return errors;
      !this.$v.content.ar.required && errors.push(this.$t("validate.required"));
      return errors;
    },
    orderErrors: function orderErrors() {
      var errors = [];
      if (!this.$v.pageOrder.$dirty) return errors;
      !this.$v.pageOrder.required && errors.push(this.$t("validate.required"));
      !this.$v.pageOrder.minValue && errors.push(this.$t("validate.biggerThanZero"));
      return errors;
    }
  },
  created: function created() {
    this.id = parseInt(this.$route.params.id);
    if (this.id == 0) this.createNew();else if (this.id > 0) this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Admin/contentManagement/editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var contentManagement_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/index.js + 6 modules
var VTabs = __webpack_require__("./node_modules/vuetify/lib/components/VTabs/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/index.js
var VTextField = __webpack_require__("./node_modules/vuetify/lib/components/VTextField/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/contentManagement/editor.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  contentManagement_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











installComponents_default()(component, {VAlert: VAlert["VAlert"],VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCol: VGrid["VCol"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"],VTab: VTabs["VTab"],VTabItem: VTabs["VTabItem"],VTabs: VTabs["VTabs"],VTextField: VTextField["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/contentManagement/editor.vue"
/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);