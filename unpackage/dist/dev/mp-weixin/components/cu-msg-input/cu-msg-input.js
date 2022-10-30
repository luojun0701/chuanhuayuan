"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_button2 = common_vendor.resolveComponent("cu-button");
  _easycom_cu_button2();
}
const _easycom_cu_button = () => "../cu-button/cu-button.js";
if (!Math) {
  _easycom_cu_button();
}
const _sfc_main = {
  __name: "cu-msg-input",
  props: {
    comment: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165"
    },
    detail: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:value", "submit"],
  setup(__props, { emit: emits }) {
    const btnStyle = {
      width: "120rpx",
      height: "70rpx",
      lineHeight: "70rpx",
      fontSize: "28rpx"
    };
    const keyboardheight = common_vendor.ref(0);
    const setValue = (e) => {
      emits("update:value", e.detail.value);
    };
    const onSubmit = () => {
      emits("submit");
    };
    const keyboardheightchange = (e) => {
      keyboardheight.value = e.detail.height;
    };
    return (_ctx, _cache) => {
      return {
        a: __props.comment,
        b: __props.placeholder,
        c: common_vendor.o(setValue),
        d: common_vendor.o(keyboardheightchange),
        e: common_vendor.o(onSubmit),
        f: common_vendor.p({
          text: "\u53D1\u9001",
          customStyle: btnStyle
        }),
        g: keyboardheight.value + "px"
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-msg-input/cu-msg-input.vue"]]);
wx.createComponent(Component);
