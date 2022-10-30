"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-input",
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165"
    },
    disabled: Boolean,
    maxlength: {
      type: Number,
      default: -1
    },
    confirmType: {
      type: String,
      default: "done"
    },
    border: {
      type: String,
      default: "surround"
    }
  },
  emits: ["confirm", "update:value"],
  setup(__props, { emit }) {
    const props = __props;
    const customStyle = common_vendor.computed$1(() => {
      let style = {
        borderWidth: "1rpx",
        borderStyle: "solid",
        borderColor: "#dadbde"
      };
      switch (props.border) {
        case "bottom":
          style.borderStyle = "none none solid";
          break;
        case "none":
          style.borderStyle = "none";
          break;
      }
      return style;
    });
    const onConfirm = (e) => {
      emit("confirm", e.target.value);
    };
    const onInput = (e) => {
      emit("update:value", e.target.value);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.type,
        b: __props.value,
        c: __props.placeholder,
        d: __props.disabled,
        e: __props.maxlength,
        f: __props.confirmType,
        g: common_vendor.o(onConfirm),
        h: common_vendor.o(onInput),
        i: common_vendor.s(common_vendor.unref(customStyle))
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-input/cu-input.vue"]]);
wx.createComponent(Component);
