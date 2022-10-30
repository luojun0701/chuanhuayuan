"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-sticky",
  props: {
    top: {
      type: String,
      default: "0px"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.top
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-sticky/cu-sticky.vue"]]);
wx.createComponent(Component);
