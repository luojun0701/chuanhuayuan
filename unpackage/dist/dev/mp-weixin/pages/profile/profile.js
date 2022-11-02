"use strict";
var common_vendor = require("../../common/vendor.js");
var common_upload = require("../../common/upload.js");
var common_db = require("../../common/db.js");
if (!Array) {
  const _easycom_cu_image2 = common_vendor.resolveComponent("cu-image");
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  const _easycom_cu_input2 = common_vendor.resolveComponent("cu-input");
  const _easycom_cu_button2 = common_vendor.resolveComponent("cu-button");
  (_easycom_cu_image2 + _easycom_cu_icon2 + _easycom_cu_input2 + _easycom_cu_button2)();
}
const _easycom_cu_image = () => "../../components/cu-image/cu-image.js";
const _easycom_cu_icon = () => "../../components/cu-icon/cu-icon.js";
const _easycom_cu_input = () => "../../components/cu-input/cu-input.js";
const _easycom_cu_button = () => "../../components/cu-button/cu-button.js";
if (!Math) {
  (_easycom_cu_image + _easycom_cu_icon + _easycom_cu_input + _easycom_cu_button)();
}
const _sfc_main = {
  __name: "profile",
  setup(__props) {
    const app = getApp();
    const userinfo = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      userinfo.value = common_vendor.index.getStorageSync("userinfo");
    });
    const onSubmit = async () => {
      let parameter = {
        nickName: userinfo.value.nickName,
        avatarUrl: userinfo.value.avatarUrl
      };
      let reg = /(http):\/\/([\w.]+\/?)\S*/;
      if (reg.test(parameter.avatarUrl)) {
        parameter.avatarUrl = await common_upload.upload(parameter.avatarUrl);
      }
      parameter.avatarUrl = parameter.avatarUrl[0];
      console.log(parameter.avatarUrl);
      if (parameter.nickName == "") {
        common_vendor.index.showToast({
          title: "\u6635\u79F0\u4E0D\u80FD\u4E3A\u7A7A",
          icon: "none"
        });
        return;
      }
      common_db.updateDb("users", `_id=='${userinfo.value._id}'`, parameter).then(({ result }) => {
        let { errCode, errMsg } = result;
        common_vendor.index.showToast({
          title: errCode == 0 ? "\u4FEE\u6539\u6210\u529F" : errMsg,
          icon: "none"
        });
        if (errCode == 0) {
          let tmpUserinfo = app.globalData.userinfo;
          tmpUserinfo.avatarUrl = parameter.avatarUrl;
          tmpUserinfo.nickName = parameter.nickName;
          app.globalData.userinfo = tmpUserinfo;
          common_vendor.index.setStorageSync("userinfo", tmpUserinfo);
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 1200);
        }
      });
    };
    const chooseAvatar = () => {
      common_vendor.index.chooseMedia({
        count: 1,
        mediaType: ["image"],
        success: (res) => {
          userinfo.value.avatarUrl = res.tempFiles[0].tempFilePath;
        }
      });
    };
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.p({
          width: "180rpx",
          height: "180rpx",
          radius: "50%",
          src: (_a = userinfo.value) == null ? void 0 : _a.avatarUrl
        }),
        b: common_vendor.p({
          name: "camera",
          size: "20px",
          color: "#fff"
        }),
        c: common_vendor.o(chooseAvatar),
        d: common_vendor.o(($event) => userinfo.value.nickName = $event),
        e: common_vendor.p({
          placeholder: "",
          border: "bottom",
          value: userinfo.value.nickName
        }),
        f: common_vendor.o(onSubmit),
        g: common_vendor.p({
          text: "\u4FDD\u5B58"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
