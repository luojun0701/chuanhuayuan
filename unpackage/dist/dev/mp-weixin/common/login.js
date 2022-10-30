"use strict";
var common_vendor = require("./vendor.js");
function login(that) {
  common_vendor.index.showLoading({
    title: "\u6B63\u5728\u767B\u5F55...",
    mask: true
  });
  let userinfo = common_vendor.index.getStorageSync("userinfo");
  if (userinfo) {
    that.globalData.userinfo = userinfo;
    that.globalData.isLogin = true;
    common_vendor.index.hideLoading();
    return;
  } else {
    common_vendor.index.login({
      provider: "weixin",
      success: ({ code }) => {
        common_vendor.pn.callFunction({
          name: "login",
          data: { code }
        }).then(({ result }) => {
          that.globalData.userinfo = result;
          that.globalData.isLogin = true;
          common_vendor.index.setStorageSync("userinfo", result);
          common_vendor.index.hideLoading();
        });
      }
    });
  }
}
exports.login = login;
