"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-empty",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: "data"
    }
  },
  setup(__props) {
    const props = __props;
    const icons = {
      code: "\u7801\u519C\u6B63\u5728\u52AA\u529B\u5F00\u53D1\u4E2D...",
      data: "\u6682\u65E0\u5185\u5BB9",
      fail: "\u64CD\u4F5C\u5931\u8D25",
      msg: "\u6682\u65E0\u6D88\u606F",
      order: "\u6682\u65E0\u8BA2\u5355",
      success: "\u64CD\u4F5C\u6210\u529F"
    };
    const src = common_vendor.computed$1(() => `/static/empty/${props.mode}.png`);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.show
      }, __props.show ? {
        b: common_vendor.unref(src),
        c: common_vendor.t(icons[__props.mode])
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-empty/cu-empty.vue"]]);
wx.createComponent(Component);
