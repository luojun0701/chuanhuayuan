"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  _easycom_cu_icon2();
}
const _easycom_cu_icon = () => "../cu-icon/cu-icon.js";
if (!Math) {
  _easycom_cu_icon();
}
const _sfc_main = {
  __name: "cu-navbar",
  props: {
    height: {
      type: Number,
      default: 44
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    leftIcon: {
      type: String,
      default: "fanhui"
    },
    leftIconColor: {
      type: String,
      default: "#000000"
    },
    title: String,
    color: {
      type: String,
      default: "#000000"
    },
    placeholder: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const nav_height = common_vendor.computed$1(() => {
      return `${props.height + getSys("statusBarHeight")}px`;
    });
    const getSys = (val) => {
      return common_vendor.index.getSystemInfoSync()[val];
    };
    const back = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    common_vendor.onLoad(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: `${getSys("statusBarHeight")}px`,
        b: __props.bgColor,
        c: __props.leftIcon
      }, __props.leftIcon ? {
        d: common_vendor.p({
          name: __props.leftIcon,
          color: __props.leftIconColor
        }),
        e: common_vendor.o(back)
      } : {}, {
        f: common_vendor.t(__props.title),
        g: __props.color,
        h: `${__props.height}px`,
        i: __props.bgColor,
        j: common_vendor.unref(nav_height),
        k: __props.placeholder
      }, __props.placeholder ? {
        l: common_vendor.unref(nav_height)
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-navbar/cu-navbar.vue"]]);
wx.createComponent(Component);
