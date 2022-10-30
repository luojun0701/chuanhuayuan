"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-loading",
  props: {
    showCircle: {
      type: Boolean,
      default: true
    },
    loadingText: {
      type: String,
      default: "\u6B63\u5728\u52A0\u8F7D..."
    },
    line: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.line
      }, __props.line ? {} : {}, {
        b: __props.showCircle
      }, __props.showCircle ? {} : {}, {
        c: common_vendor.t(__props.loadingText),
        d: common_vendor.s(!__props.showCircle ? "margin:0 30rpx" : ""),
        e: __props.line
      }, __props.line ? {} : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-loading/cu-loading.vue"]]);
wx.createComponent(Component);
