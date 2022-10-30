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
  __name: "cu-title",
  props: {
    title: String,
    showMore: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: __props.showMore
      }, __props.showMore ? {
        c: common_vendor.p({
          name: "fanhui",
          size: "14px",
          rotate: "180"
        })
      } : {}, {
        d: common_vendor.s("background:" + __props.bgColor)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-title/cu-title.vue"]]);
wx.createComponent(Component);
