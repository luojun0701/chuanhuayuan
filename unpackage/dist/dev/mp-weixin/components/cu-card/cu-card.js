"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  _easycom_cu_icon2();
}
const _easycom_cu_icon = () => "../cu-icon/cu-icon.js";
if (!Math) {
  _easycom_cu_icon();
}
const _sfc_main = {
  __name: "cu-card",
  props: {
    isShadow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    right: Object,
    customStyle: Object,
    bodyStyle: Object
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: (_a = __props.right) != null ? _a : false
      }, ((_b = __props.right) != null ? _b : false) ? common_vendor.e({
        c: common_vendor.t(__props.right.title),
        d: (_c = __props.right.icon) != null ? _c : false
      }, ((_d = __props.right.icon) != null ? _d : false) ? {
        e: common_vendor.p({
          size: __props.right.size,
          name: __props.right.icon,
          rotate: __props.right.rotate,
          color: __props.right.color
        })
      } : {}) : {}, {
        f: common_vendor.s(__props.bodyStyle),
        g: __props.isShadow ? 1 : "",
        h: common_vendor.s(__props.customStyle)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2336cdc8"], ["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-card/cu-card.vue"]]);
wx.createComponent(Component);
