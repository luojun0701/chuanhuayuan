"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_image2 = common_vendor.resolveComponent("cu-image");
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  (_easycom_cu_image2 + _easycom_cu_icon2)();
}
const _easycom_cu_image = () => "../cu-image/cu-image.js";
const _easycom_cu_icon = () => "../cu-icon/cu-icon.js";
if (!Math) {
  (_easycom_cu_image + _easycom_cu_icon)();
}
const _sfc_main = {
  __name: "cu-upload",
  props: {
    maxCount: {
      type: [Number, String],
      default: 9
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const files = common_vendor.ref([]);
    common_vendor.ref([]);
    const upload = () => {
      return new Promise((resolve) => {
        common_vendor.index.showLoading({
          title: "\u4E0A\u4F20\u4E2D"
        });
        let promiseAll = [];
        files.value.forEach((item, index) => {
          let promise = new Promise((resolve2, reject) => {
            let result = common_vendor.pn.uploadFile({
              filePath: item,
              cloudPath: `lbotao-${new Date().getTime() / 1e3}`
            });
            resolve2(result);
          });
          promiseAll.push(promise);
        });
        Promise.all(promiseAll).then((res) => {
          let result = [];
          res.forEach((item) => {
            result.push(item.fileID);
          });
          common_vendor.index.hideLoading();
          resolve(result);
        });
      });
    };
    const chooseImage = () => {
      common_vendor.index.chooseMedia({
        count: props.maxCount,
        mediaType: ["image"],
        sizeType: ["compressed"],
        success: ({ tempFiles }) => {
          if (files.value.length + tempFiles.length > props.maxCount)
            common_vendor.index.showToast({
              title: `\u56FE\u7247\u603B\u6570\u4E0D\u80FD\u8D85\u8FC7${props.maxCount}\u5F20`,
              icon: "none"
            });
          else
            files.value = files.value.concat(tempFiles.map((item) => item.tempFilePath));
        }
      });
    };
    const deleteImg = (index) => {
      files.value.splice(index, 1);
    };
    expose({ upload });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(files.value, (item, index, i0) => {
          return {
            a: "1c595508-0-" + i0,
            b: common_vendor.p({
              src: item,
              width: "220rpx",
              height: "220rpx",
              radius: "4rpx",
              previewSrcList: files.value,
              initialIndex: index
            }),
            c: "1c595508-1-" + i0,
            d: common_vendor.o(($event) => deleteImg(index)),
            e: common_vendor.s((index + 1) % 3 == 0 ? "margin:0 0 15rpx 0" : "")
          };
        }),
        b: common_vendor.p({
          name: "shanchu",
          color: "#fff",
          size: "10px"
        }),
        c: files.value.length < __props.maxCount
      }, files.value.length < __props.maxCount ? {
        d: common_vendor.p({
          name: "camera",
          color: "rgb(211, 212, 214)"
        }),
        e: common_vendor.o(chooseImage)
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-upload/cu-upload.vue"]]);
wx.createComponent(Component);
