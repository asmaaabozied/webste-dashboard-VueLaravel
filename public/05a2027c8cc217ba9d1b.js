(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./resources/js/pages/Agent/Portal.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Agent/Portal.vue + 4 modules ***!
  \*********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCard/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VCarousel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/Portal.vue?vue&type=template&id=6a82e1df&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-row", { staticClass: "my-1", attrs: { justify: "center" } }, [
        _c(
          "div",
          { staticClass: "ad-container" },
          [
            _c(
              "v-carousel",
              {
                attrs: {
                  height: "100%",
                  cycle: "",
                  "hide-delimiters": "",
                  "show-arrows": false
                }
              },
              _vm._l(_vm.internalAds, function(item, i) {
                return _c("v-carousel-item", {
                  key: i,
                  attrs: { src: item.image, transition: "fade-transition" }
                })
              }),
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "my-3", attrs: { justify: "center" } },
        [
          _c(
            "v-card",
            { attrs: { flat: "", width: "80vw" } },
            [
              _c("v-card-title", [
                _vm._v(
                  _vm._s(
                    _vm.$t("general.welcome") + _vm.$store.state.user.userName
                  )
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "d-flex flex-column align-center" },
                [
                  _c(
                    "div",
                    { staticClass: "my-4" },
                    [
                      _c("v-btn", { attrs: { to: { name: "g3" } } }, [
                        _vm._v(_vm._s(_vm.$t("general.orders")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-4" },
                    [
                      _c("v-btn", { attrs: { to: { name: "g4" } } }, [
                        _vm._v(_vm._s(_vm.$t("general.principalPayment")))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-4" },
                    [
                      _c("v-btn", { attrs: { to: { name: "g7" } } }, [
                        _vm._v(_vm._s(_vm.$t("contactUs.contactUs")))
                      ])
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-row", { staticClass: "my-1", attrs: { justify: "center" } }, [
        _c("div", { staticClass: "ad-container" })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Agent/Portal.vue?vue&type=template&id=6a82e1df&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Agent/Portal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Portalvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      internalAds: []
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/api/advertArea").then(function (res) {
        _this.internalAds = res.data.data.resource.data;
      })["catch"](function (err) {
        console.warn(err);
      });
    }
  },
  created: function created() {
    this.load();
  }
});
// CONCATENATED MODULE: ./resources/js/pages/Agent/Portal.vue?vue&type=script&lang=js&
 /* harmony default export */ var Agent_Portalvue_type_script_lang_js_ = (Portalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js + 1 modules
var VCard = __webpack_require__("./node_modules/vuetify/lib/components/VCard/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/index.js + 2 modules
var VCarousel = __webpack_require__("./node_modules/vuetify/lib/components/VCarousel/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Agent/Portal.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  Agent_Portalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6a82e1df",
  null
  
)

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["VBtn"],VCard: VCard["VCard"],VCardText: VCard["VCardText"],VCardTitle: VCard["VCardTitle"],VCarousel: VCarousel["VCarousel"],VCarouselItem: VCarousel["VCarouselItem"],VRow: VGrid["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Agent/Portal.vue"
/* harmony default export */ var Portal = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);