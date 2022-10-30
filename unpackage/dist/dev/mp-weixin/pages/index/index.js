"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_swiper2 = common_vendor.resolveComponent("cu-swiper");
  const _easycom_cu_title2 = common_vendor.resolveComponent("cu-title");
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_loading2 = common_vendor.resolveComponent("cu-loading");
  const _easycom_cu_card2 = common_vendor.resolveComponent("cu-card");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_cu_sticky2 = common_vendor.resolveComponent("cu-sticky");
  const _easycom_cu_ps_card2 = common_vendor.resolveComponent("cu-ps-card");
  const _easycom_cu_tabbar2 = common_vendor.resolveComponent("cu-tabbar");
  (_easycom_cu_swiper2 + _easycom_cu_title2 + _easycom_cu_empty2 + _easycom_cu_loading2 + _easycom_cu_card2 + _easycom_unicloud_db2 + _easycom_cu_sticky2 + _easycom_cu_ps_card2 + _easycom_cu_tabbar2)();
}
const _easycom_cu_swiper = () => "../../components/cu-swiper/cu-swiper.js";
const _easycom_cu_title = () => "../../components/cu-title/cu-title.js";
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_loading = () => "../../components/cu-loading/cu-loading.js";
const _easycom_cu_card = () => "../../components/cu-card/cu-card.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_cu_sticky = () => "../../components/cu-sticky/cu-sticky.js";
const _easycom_cu_ps_card = () => "../../components/cu-ps-card/cu-ps-card.js";
const _easycom_cu_tabbar = () => "../../components/cu-tabbar/cu-tabbar.js";
if (!Math) {
  (_easycom_cu_swiper + _easycom_cu_title + _easycom_cu_empty + _easycom_cu_loading + _easycom_cu_card + _easycom_unicloud_db + _easycom_cu_sticky + _easycom_cu_ps_card + _easycom_cu_tabbar)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerList = [{
      url: "/static/banner/banner.jpg",
      title: "\u5DDD\u534E\u9662\u5C0F\u7A0B\u5E8F\u6B63\u5F0F\u4E0A\u7EBF\uFF0C\u70B9\u51FB\u8FDB\u5165\u67E5\u770B\u8BE6\u60C5",
      link: ""
    }, {
      url: "/static/banner/banner.jpg",
      title: "\u5927\u724C\u5973\u88C5\u9650\u65F65\u6298\uFF0C\u70B9\u51FB\u8FDB\u5165\u8D2D\u4E70",
      link: ""
    }];
    const pagination = common_vendor.reactive({
      pageSize: 20,
      page: 1
    });
    const udb = common_vendor.ref(null);
    const triggered = common_vendor.ref(false);
    const refresher = common_vendor.ref(true);
    const scroll = (e) => {
      let flag = e.detail.scrollTop < 10 ? true : false;
      if (refresher.value == flag)
        return;
      refresher.value = flag;
    };
    const refresherrefresh = (e) => {
      triggered.value = true;
      udb.value.loadData({
        clear: true
      }, () => {
        triggered.value = false;
      });
    };
    const refresherrestore = () => {
      triggered.value = false;
    };
    const goSubjectPage = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/subjectPage/subjectPage?ht=" + JSON.stringify(item)
      });
    };
    const scrolltolower = () => {
      udb.value.loadMore();
    };
    common_vendor.onLoad(() => {
      common_vendor.index.hideTabBar();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: bannerList,
          indicator: true
        }),
        b: common_vendor.p({
          title: "\u70ED\u95E8\u8BDD\u9898"
        }),
        c: common_vendor.w(({
          data,
          loading,
          error,
          options,
          hasMore
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "57280228-3-" + i0 + ",57280228-2",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "57280228-4-" + i0 + ",57280228-2"
          } : {
            f: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: common_vendor.t(item.name),
                b: common_vendor.o(($event) => goSubjectPage(item)),
                c: "57280228-5-" + i0 + "-" + i1 + ",57280228-2"
              };
            }),
            g: common_vendor.p({
              customStyle: {
                width: "350rpx",
                margin: "0 15rpx 0 0",
                background: "#3d7eff50"
              }
            })
          }, {
            d: loading,
            h: i0,
            i: s0
          });
        }, {
          name: "d",
          path: "c",
          vueId: "57280228-2"
        }),
        d: common_vendor.p({
          collection: "articles-categories"
        }),
        e: common_vendor.p({
          title: "\u7CBE\u9009\u52A8\u6001",
          bgColor: "#f8f8f8"
        }),
        f: common_vendor.w(({
          data,
          loading,
          error,
          options,
          hasMore
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "57280228-9-" + i0 + ",57280228-8",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "57280228-10-" + i0 + ",57280228-8"
          } : data.length != 0 ? {
            g: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: "57280228-11-" + i0 + "-" + i1 + ",57280228-8",
                b: common_vendor.p({
                  data: item
                })
              };
            })
          } : {
            h: "57280228-12-" + i0 + ",57280228-8"
          }, {
            d: loading,
            f: data.length != 0,
            i: !hasMore && !loading && data.length != 0
          }, !hasMore && !loading && data.length != 0 ? {
            j: "57280228-13-" + i0 + ",57280228-8",
            k: common_vendor.p({
              line: true,
              loadingText: "\u6CA1\u6709\u66F4\u591A\u4E86",
              showCircle: false
            })
          } : {}, {
            l: i0,
            m: s0
          });
        }, {
          name: "d",
          path: "f",
          vueId: "57280228-8"
        }),
        g: common_vendor.sr(udb, "57280228-8", {
          "k": "udb"
        }),
        h: common_vendor.p({
          collection: "articles,users,articles-categories",
          where: `is_essence==${true}`,
          field: "title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}",
          ["page-current"]: pagination.page,
          ["page-size"]: pagination.pageSize
        }),
        i: refresher.value,
        j: common_vendor.o(scroll),
        k: triggered.value,
        l: common_vendor.o(refresherrefresh),
        m: common_vendor.o(refresherrestore),
        n: common_vendor.o((...args) => scrolltolower && scrolltolower(...args))
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
