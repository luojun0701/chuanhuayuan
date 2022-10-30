"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "webview",
  setup(__props) {
    const link = common_vendor.ref(null);
    common_vendor.onLoad(({ url }) => {
      link.value = url;
    });
    return (_ctx, _cache) => {
      return {
        a: link.value
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/webview/webview.vue"]]);
wx.createPage(MiniProgramPage);
