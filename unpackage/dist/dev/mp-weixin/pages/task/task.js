"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_tabbar2 = common_vendor.resolveComponent("cu-tabbar");
  (_easycom_cu_empty2 + _easycom_cu_tabbar2)();
}
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_tabbar = () => "../../components/cu-tabbar/cu-tabbar.js";
if (!Math) {
  (_easycom_cu_empty + _easycom_cu_tabbar)();
}
const _sfc_main = {
  __name: "task",
  setup(__props) {
    common_vendor.onLoad(() => {
      common_vendor.index.hideTabBar();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          show: true,
          mode: "code"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/task/task.vue"]]);
wx.createPage(MiniProgramPage);
