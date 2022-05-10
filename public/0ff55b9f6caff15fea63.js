(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue + 4 modules ***!
  \********************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@mdi/js/mdi.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify-loader/lib/runtime/installComponents.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VBtn/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VGrid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vuetify/lib/components/VIcon/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue?vue&type=template&id=090328c4&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v(" Spare Parts ")]),
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue?vue&type=template&id=090328c4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@mdi/js/mdi.js
var mdi = __webpack_require__("./node_modules/@mdi/js/mdi.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
  name: "spareParts",
  metaInfo: function metaInfo() {
    var locale = this.$i18n.locale;
    return {
      title: locale == "en" ? "spare Parts" : "spare Parts"
    };
  },
  data: function data() {
    return {
      page: 1,
      total: 0,
      limit: 5,
      items: [],
      icons: {
        mdiDotsVertical: mdi["mdiDotsVertical"],
        mdiPlusThick: mdi["mdiPlusThick"]
      },
      deleteDialog: false,
      deleteItemId: null
    };
  },
  methods: {
    addItem: function addItem(id) {
      this.$router.push({
        name: "sparePartsAdd",
        params: {
          id: this.id,
          sparePartsId: 0
        }
      });
    },
    deleteItem: function deleteItem(id) {
      this.deleteItemId = id;
      this.deleteDialog = true;
    },
    load: function load() {
      var _this = this;

      axios.get("/api/admin-panel/devices/spareParts/getAllspareParts?page=".concat(this.page)).then(function (res) {
        console.log(res);
        return;
        _this.items = res.data.data.resource.data;
        _this.limit = res.data.data.resource.per_page;
        _this.total = res.data.data.resource.total;
      })["catch"](function (err) {
        console.warn(err);
      });
    },
    confirmDeleteItem: function confirmDeleteItem() {
      var _this2 = this;

      axios["delete"]("/api/admin-panel/devices/delete/".concat(this.deleteItemId)).then(function (res) {
        _this2.$notify({
          text: _this2.$t("general.success"),
          type: "success"
        });

        _this2.load();

        _this2.deleteDialog = false;
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
// CONCATENATED MODULE: ./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue?vue&type=script&lang=js&
 /* harmony default export */ var SpareParts_SparePartsvue_type_script_lang_js_ = (mdi["default"]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("./node_modules/vuetify-loader/lib/runtime/installComponents.js");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__("./node_modules/vuetify/lib/components/VBtn/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/index.js + 7 modules
var VGrid = __webpack_require__("./node_modules/vuetify/lib/components/VGrid/index.js");

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__("./node_modules/vuetify/lib/components/VIcon/index.js");

// CONCATENATED MODULE: ./resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue





/* normalize component */

var component = Object(componentNormalizer["default"])(
  SpareParts_SparePartsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "090328c4",
  null
  
)

/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["VBtn"],VCol: VGrid["VCol"],VIcon: VIcon["VIcon"],VRow: VGrid["VRow"],VSpacer: VGrid["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Admin/Devices/SpareParts/SpareParts.vue"
/* harmony default export */ var SpareParts = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);