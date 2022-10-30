"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
const _sfc_main = {
  __name: "cu-tabs",
  props: {
    list: {
      type: Array,
      default: []
    },
    current: {
      type: [Number, String],
      default: ""
    }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const customLineStyle = common_vendor.ref({});
    let tablist = [];
    common_vendor.watch(() => props.current, (value) => {
      setLineStyle();
    });
    const setLineStyle = () => {
      var _a, _b;
      let style = {};
      style.width = `${((_a = tablist[props.current]) == null ? void 0 : _a.width) || 32}px`;
      style.transform = `translateX(${((_b = tablist[props.current]) == null ? void 0 : _b.left) || 15}px)`;
      customLineStyle.value = style;
    };
    const onChange = (i) => {
      if (props.current == i)
        return;
      else
        emit("change", i);
    };
    common_vendor.onMounted(() => {
      tablist = props.list;
      utils_index.getRect(".cu-tabs-name", true, common_vendor.getCurrentInstance()).then((res) => {
        for (let i in tablist) {
          tablist[i].width = res[i].width;
          tablist[i].left = res[i].left;
        }
        setLineStyle();
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index == __props.current ? 1 : "",
            c: common_vendor.o(($event) => onChange(index))
          };
        }),
        b: common_vendor.s(customLineStyle.value)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-tabs/cu-tabs.vue"]]);
wx.createComponent(Component);
