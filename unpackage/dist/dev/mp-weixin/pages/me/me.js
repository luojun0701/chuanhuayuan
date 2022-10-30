"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_navbar2 = common_vendor.resolveComponent("cu-navbar");
  const _easycom_cu_card2 = common_vendor.resolveComponent("cu-card");
  const _easycom_cu_tabbar2 = common_vendor.resolveComponent("cu-tabbar");
  (_easycom_cu_navbar2 + _easycom_cu_card2 + _easycom_cu_tabbar2)();
}
const _easycom_cu_navbar = () => "../../components/cu-navbar/cu-navbar.js";
const _easycom_cu_card = () => "../../components/cu-card/cu-card.js";
const _easycom_cu_tabbar = () => "../../components/cu-tabbar/cu-tabbar.js";
if (!Math) {
  (_easycom_cu_navbar + _easycom_cu_card + _easycom_cu_tabbar)();
}
const _sfc_main = {
  __name: "me",
  setup(__props) {
    const isLogin = common_vendor.ref(null);
    const userinfo = common_vendor.ref(null);
    const grade = common_vendor.ref("");
    common_vendor.onLoad(() => {
      common_vendor.index.hideTabBar();
    });
    common_vendor.onShow(() => {
      let { isLogin: tmpIsLogin, userinfo: tmpUserInfo } = getApp().globalData;
      grade.value = tmpUserInfo.account ? tmpUserInfo.account.slice(0, 4) + "\u7EA7" : "\u6E38\u5BA2";
      userinfo.value = tmpUserInfo;
      isLogin.value = tmpIsLogin;
    });
    const login = () => {
      let url = null;
      userinfo.value.account ? url = "/pages/profile/profile" : url = "/pages/login/login";
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: common_vendor.p({
          bgColor: "transparent",
          placeholder: false,
          leftIcon: ""
        }),
        b: (_a = userinfo.value) == null ? void 0 : _a.avatarUrl,
        c: common_vendor.t((_b = userinfo.value) == null ? void 0 : _b.nickName),
        d: common_vendor.t(grade.value),
        e: common_vendor.o(login),
        f: common_vendor.p({
          customStyle: {
            top: "48rpx"
          },
          bodyStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
          }
        }),
        g: common_vendor.p({
          customStyle: {
            top: "88rpx"
          },
          title: "\u5176\u4ED6\u670D\u52A1",
          right: {
            title: "\u7F51\u7EDC\u5E38\u7528\u5DE5\u5177"
          }
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
