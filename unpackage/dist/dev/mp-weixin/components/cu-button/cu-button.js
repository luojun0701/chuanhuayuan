"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-button",
  props: {
    text: {
      type: String,
      default: "\u786E\u5B9A"
    },
    size: {
      type: String,
      default: "normal"
    },
    customStyle: Object,
    color: {
      type: String,
      default: "#3d7eff"
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const baseStyle = common_vendor.computed$1(() => {
      let style = {};
      style.backgroundColor = props.color;
      if (props.color.indexOf("gradient") != -1) {
        style.backgroundImage = props.color;
      }
      return style;
    });
    const click = (e) => {
      emit("click", e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.text),
        b: common_vendor.s(common_vendor.unref(baseStyle)),
        c: common_vendor.s(__props.customStyle),
        d: common_vendor.n("cu-button-" + __props.size),
        e: common_vendor.o(click)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-button/cu-button.vue"]]);
wx.createComponent(Component);
