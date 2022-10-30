"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_cu_image2 = common_vendor.resolveComponent("cu-image");
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  const _easycom_cu_card2 = common_vendor.resolveComponent("cu-card");
  (_easycom_cu_image2 + _easycom_cu_icon2 + _easycom_cu_card2)();
}
const _easycom_cu_image = () => "../cu-image/cu-image.js";
const _easycom_cu_icon = () => "../cu-icon/cu-icon.js";
const _easycom_cu_card = () => "../cu-card/cu-card.js";
if (!Math) {
  (_easycom_cu_image + _easycom_cu_icon + _easycom_cu_card)();
}
const _sfc_main = {
  __name: "cu-ps-card",
  props: {
    data: {
      type: Object,
      default: {}
    },
    detail: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const goDetail = (type) => {
      if (props.detail)
        return;
      common_vendor.index.navigateTo({
        url: `/pages/ps-detail/ps-detail?id=${props.data._id}&type=${type}&title=${props.data.title}`
      });
    };
    const goPersonalInfo = () => {
      common_vendor.index.navigateTo({
        url: `/pages/personalInfo/personalInfo?info=${JSON.stringify(props.data.user_id[0])}`
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      return common_vendor.e({
        a: (_a = __props.data) == null ? void 0 : _a.user_id[0].avatarUrl,
        b: common_vendor.o(goPersonalInfo),
        c: common_vendor.t((_b = __props.data) == null ? void 0 : _b.user_id[0].nickName),
        d: common_vendor.t(common_vendor.unref(utils_index.formatTime)((_c = __props.data) == null ? void 0 : _c.publish_date)),
        e: __props.detail
      }, __props.detail ? {
        f: (_d = __props.data) == null ? void 0 : _d.content
      } : {
        g: common_vendor.t(((_e = __props.data) == null ? void 0 : _e.mode) == 1 ? (_f = __props.data) == null ? void 0 : _f.content : (_g = __props.data) == null ? void 0 : _g.title)
      }, {
        h: (_h = __props.data) == null ? void 0 : _h.category_id.length
      }, ((_i = __props.data) == null ? void 0 : _i.category_id.length) ? {
        i: common_vendor.t((_j = __props.data) == null ? void 0 : _j.category_id[0].name)
      } : {}, {
        j: !__props.detail
      }, !__props.detail ? {
        k: common_vendor.f((_k = __props.data) == null ? void 0 : _k.img_list, (items, index, i0) => {
          return {
            a: (index + 1) % 3 == 0 ? "0 0 15rpx 0" : "0 15rpx 15rpx 0",
            b: "4945c72e-1-" + i0 + ",4945c72e-0",
            c: common_vendor.p({
              src: items,
              mode: "aspectFill",
              previewSrcList: __props.data.img_list,
              width: __props.data.img_list.length > 1 ? "200rpx" : "630rpx",
              height: "200rpx",
              initialIndex: index
            })
          };
        })
      } : {}, {}, {
        t: common_vendor.o(goDetail)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-ps-card/cu-ps-card.vue"]]);
wx.createComponent(Component);
