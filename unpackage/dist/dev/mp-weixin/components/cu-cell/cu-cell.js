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
  __name: "cu-cell",
  props: {
    title: String,
    text: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.text),
        c: common_vendor.p({
          name: "fanhui",
          rotate: "180",
          size: "15px"
        })
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-cell/cu-cell.vue"]]);
wx.createComponent(Component);
