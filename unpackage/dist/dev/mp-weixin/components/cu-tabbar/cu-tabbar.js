"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  _easycom_cu_icon2();
}
const _easycom_cu_icon = () => "../cu-icon/cu-icon.js";
if (!Math) {
  _easycom_cu_icon();
}
const _sfc_main = {
  __name: "cu-tabbar",
  props: {
    router: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: [{
        icon: "shouye",
        text: "\u9996\u9875",
        path: "pages/index/index"
      }, {
        icon: "faxian",
        text: "\u53D1\u73B0",
        path: "pages/find/find"
      }, {
        icon: "shequ",
        text: "\u4EFB\u52A1",
        path: "pages/task/task"
      }, {
        icon: "me",
        text: "\u6211\u7684",
        path: "pages/me/me"
      }]
    }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const placeholderHeight = common_vendor.ref(0);
    const instance = common_vendor.getCurrentInstance();
    common_vendor.onMounted(() => {
      setPlaceholderHeight();
    });
    const change = (index, item) => {
      if (props.router)
        common_vendor.index.switchTab({
          url: `/${item.path}`
        });
      emit("change", {
        index,
        item
      });
    };
    const isCheck = (path) => {
      return getCurrentPages()[0].route == path ? true : false;
    };
    const setPlaceholderHeight = () => {
      utils_index.getRect(".cu-tabbar", false, instance).then(({
        height
      }) => {
        placeholderHeight.value = height + "px";
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: "2d35e6fc-0-" + i0,
            b: common_vendor.p({
              name: item.icon,
              color: isCheck(item.path) ? "#3d7eff" : "rgb(125, 126, 128)"
            }),
            c: common_vendor.t(item.text),
            d: isCheck(item.path) ? 1 : "",
            e: common_vendor.o(($event) => change(index, item))
          };
        }),
        b: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args)),
        c: placeholderHeight.value
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-tabbar/cu-tabbar.vue"]]);
wx.createComponent(Component);
