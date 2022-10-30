"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_popup2 = common_vendor.resolveComponent("cu-popup");
  _easycom_cu_popup2();
}
const _easycom_cu_popup = () => "../cu-popup/cu-popup.js";
if (!Math) {
  _easycom_cu_popup();
}
const _sfc_main = {
  __name: "cu-modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "\u6E29\u99A8\u63D0\u793A"
    },
    content: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    }
  },
  emits: ["confirm", "cancel", "close"],
  setup(__props, { emit: emits }) {
    const closePopup = () => {
      emits("close");
    };
    const cancel = () => {
      emits("cancel");
    };
    const confirm = () => {
      emits("confirm");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.content),
        c: __props.showCancelButton
      }, __props.showCancelButton ? {
        d: common_vendor.t(__props.cancelText),
        e: common_vendor.o(cancel)
      } : {}, {
        f: __props.showConfirmButton
      }, __props.showConfirmButton ? {
        g: common_vendor.t(__props.confirmText),
        h: common_vendor.o(confirm)
      } : {}, {
        i: common_vendor.o(closePopup),
        j: common_vendor.p({
          show: __props.show,
          mode: "center"
        })
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-modal/cu-modal.vue"]]);
wx.createComponent(Component);
