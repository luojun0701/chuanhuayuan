"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_navbar2 = common_vendor.resolveComponent("cu-navbar");
  const _easycom_cu_input2 = common_vendor.resolveComponent("cu-input");
  const _easycom_cu_button2 = common_vendor.resolveComponent("cu-button");
  const _easycom_cu_card2 = common_vendor.resolveComponent("cu-card");
  (_easycom_cu_navbar2 + _easycom_cu_input2 + _easycom_cu_button2 + _easycom_cu_card2)();
}
const _easycom_cu_navbar = () => "../../components/cu-navbar/cu-navbar.js";
const _easycom_cu_input = () => "../../components/cu-input/cu-input.js";
const _easycom_cu_button = () => "../../components/cu-button/cu-button.js";
const _easycom_cu_card = () => "../../components/cu-card/cu-card.js";
if (!Math) {
  (_easycom_cu_navbar + _easycom_cu_input + _easycom_cu_button + _easycom_cu_card)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const app = getApp();
    const form = common_vendor.reactive({
      username: "",
      password: "",
      openid: app.globalData.userinfo.openid
    });
    const login = () => {
      common_vendor.index.showLoading({
        title: "\u9A8C\u8BC1\u8D26\u6237...",
        mask: true
      });
      common_vendor.pn.callFunction({
        name: "authentication",
        data: form
      }).then(({ result }) => {
        let { msg, status } = result;
        common_vendor.index.showToast({
          title: msg,
          icon: "none",
          mask: true
        });
        if (status == 200) {
          let userinfo = app.globalData.userinfo;
          userinfo.account = form.username;
          userinfo.password = form.password;
          app.globalData.userinfo = userinfo;
          common_vendor.index.setStorageSync("userinfo", userinfo);
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 1200);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          bgColor: "transparent",
          placeholder: false,
          leftIconColor: "#ffffff"
        }),
        b: common_vendor.o(($event) => form.username = $event),
        c: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u5B66\u53F7",
          type: "number",
          value: form.username
        }),
        d: common_vendor.o(($event) => form.password = $event),
        e: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
          type: "text",
          value: form.password
        }),
        f: common_vendor.o(($event) => login()),
        g: common_vendor.p({
          color: "linear-gradient(to right, #0acffe 0%, #495aff80 100%)"
        }),
        h: common_vendor.p({
          isShadow: true,
          customStyle: {
            top: "-166rpx"
          },
          bodyStyle: {
            padding: "60rpx 40rpx"
          }
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
