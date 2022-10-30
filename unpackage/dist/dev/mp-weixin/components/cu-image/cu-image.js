"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-image",
  props: {
    src: String,
    mode: {
      type: String,
      default: "scaleToFill"
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: "150rpx"
    },
    height: {
      type: String,
      default: ""
    },
    radius: {
      type: String,
      default: "12rpx"
    },
    previewSrcList: {
      type: [Array, String],
      default: ""
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const customStyle = common_vendor.computed$1(() => {
      return {
        width: props.width,
        height: props.height,
        borderRadius: props.radius
      };
    });
    const preview = () => {
      let { previewSrcList, initialIndex } = props;
      if (previewSrcList)
        common_vendor.index.previewImage({
          urls: typeof previewSrcList == "string" ? [previewSrcList] : previewSrcList,
          current: initialIndex
        });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.previewSrcList
      }, __props.previewSrcList ? {
        b: __props.src,
        c: __props.mode,
        d: __props.lazyLoad,
        e: common_vendor.s(common_vendor.unref(customStyle)),
        f: common_vendor.o(preview)
      } : {
        g: __props.src,
        h: __props.mode,
        i: __props.lazyLoad,
        j: common_vendor.s(common_vendor.unref(customStyle))
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-image/cu-image.vue"]]);
wx.createComponent(Component);
