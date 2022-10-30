"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var common_login = require("./common/login.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/me/me.js";
  "./pages/find/find.js";
  "./pages/task/task.js";
  "./pages/login/login.js";
  "./pages/webview/webview.js";
  "./pages/publish/publish.js";
  "./pages/ps-detail/ps-detail.js";
  "./pages/personalInfo/personalInfo.js";
  "./pages/subjectPage/subjectPage.js";
  "./pages/editorPage/editorPage.js";
  "./pages/profile/profile.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_login.login(this);
    const updateManager = common_vendor.index.getUpdateManager();
    updateManager.onCheckForUpdate(function(res) {
    });
    updateManager.onUpdateReady(function(res) {
      common_vendor.index.showModal({
        title: "\u66F4\u65B0\u63D0\u793A",
        content: "\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u786E\u8BA4\u91CD\u542F\u5E94\u7528\uFF1F",
        showCancel: false,
        success(res2) {
          if (res2.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
    updateManager.onUpdateFailed(function(res) {
      common_vendor.index.showModal({
        title: "\u66F4\u65B0\u63D0\u793A",
        content: "\u65B0\u7248\u672C\u66F4\u65B0\u5931\u8D25,\u786E\u8BA4\u91CD\u8BD5",
        success(res2) {
          if (res2.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
  },
  onShow: function() {
  },
  onHide: function() {
  },
  globalData: {
    isLogin: false,
    userinfo: null
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
