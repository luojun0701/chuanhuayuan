"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-popup",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "bottom"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const customStyle = common_vendor.computed$1(() => {
      let style = {};
      switch (props.mode) {
        case "bottom":
          style = Object.assign(style, {
            right: "0",
            left: " 0",
            bottom: "0",
            transform: "translateY(100%)"
          });
          break;
        case "center":
          style = Object.assign(style, {
            top: "50%",
            left: "50%",
            transform: " translate(-50%,-50%)",
            display: "none"
          });
          break;
      }
      return style;
    });
    const customClass = common_vendor.ref(`cu-popup-${props.mode}-show`);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.overlay
      }, __props.overlay ? {
        b: __props.show,
        c: common_vendor.o(($event) => emits("close")),
        d: common_vendor.o(() => {
        })
      } : {}, {
        e: common_vendor.s(common_vendor.unref(customStyle)),
        f: common_vendor.n(__props.show ? customClass.value : "")
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-popup/cu-popup.vue"]]);
wx.createComponent(Component);
