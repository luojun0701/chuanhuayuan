"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-icon",
  props: {
    name: String,
    size: {
      type: String,
      default: "22px"
    },
    color: {
      type: String,
      default: "#000000"
    },
    rotate: {
      type: [String, Number],
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const icon_class = common_vendor.computed$1(() => {
      return `custom-icon custom-icon-${props.name}`;
    });
    return (_ctx, _cache) => {
      return {
        a: __props.size,
        b: __props.color,
        c: `rotate(${__props.rotate}deg)`,
        d: common_vendor.n(common_vendor.unref(icon_class))
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-icon/cu-icon.vue"]]);
wx.createComponent(Component);
