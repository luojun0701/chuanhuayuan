"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cu-swiper",
  props: {
    list: {
      type: Array,
      default: []
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    current: {
      type: Number,
      default: 0
    },
    interval: {
      type: Number,
      default: 3e3
    },
    duration: {
      type: Number,
      default: 300
    },
    indicator: {
      type: Boolean,
      default: false
    },
    circular: {
      type: Boolean,
      default: false
    },
    acceleration: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    },
    keyName: {
      type: String,
      default: "url"
    },
    height: {
      type: String,
      default: "260rpx"
    }
  },
  setup(__props) {
    const currentIndex = common_vendor.ref(0);
    const onChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const clickHandler = ({ link }) => {
      const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      let url = null;
      reg.test(link) ? url = `/pages/webview/webview?url=${link}` : url = link;
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(__props.list, (item, index, i0) => {
          return common_vendor.e({
            a: item[__props.keyName]
          }, __props.showTitle ? {
            b: common_vendor.t(item.title)
          } : {}, {
            c: common_vendor.o(($event) => clickHandler(item))
          });
        }),
        b: __props.showTitle,
        c: __props.current,
        d: __props.autoplay,
        e: __props.interval,
        f: __props.duration,
        g: __props.circular,
        h: __props.acceleration,
        i: common_vendor.o(onChange),
        j: __props.indicator && !__props.showTitle
      }, __props.indicator && !__props.showTitle ? {
        k: common_vendor.f(__props.list.length, (item, index, i0) => {
          return {
            a: common_vendor.n({
              "cu-swiper-indicator-item-active": currentIndex.value == index
            })
          };
        })
      } : {}, {
        l: __props.height
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/components/cu-swiper/cu-swiper.vue"]]);
wx.createComponent(Component);
