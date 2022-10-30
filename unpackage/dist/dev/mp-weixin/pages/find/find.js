"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_tabs2 = common_vendor.resolveComponent("cu-tabs");
  const _easycom_cu_navbar2 = common_vendor.resolveComponent("cu-navbar");
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_loading2 = common_vendor.resolveComponent("cu-loading");
  const _easycom_cu_ps_card2 = common_vendor.resolveComponent("cu-ps-card");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_cu_button2 = common_vendor.resolveComponent("cu-button");
  const _easycom_cu_tabbar2 = common_vendor.resolveComponent("cu-tabbar");
  (_easycom_cu_tabs2 + _easycom_cu_navbar2 + _easycom_cu_empty2 + _easycom_cu_loading2 + _easycom_cu_ps_card2 + _easycom_unicloud_db2 + _easycom_cu_button2 + _easycom_cu_tabbar2)();
}
const _easycom_cu_tabs = () => "../../components/cu-tabs/cu-tabs.js";
const _easycom_cu_navbar = () => "../../components/cu-navbar/cu-navbar.js";
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_loading = () => "../../components/cu-loading/cu-loading.js";
const _easycom_cu_ps_card = () => "../../components/cu-ps-card/cu-ps-card.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_cu_button = () => "../../components/cu-button/cu-button.js";
const _easycom_cu_tabbar = () => "../../components/cu-tabbar/cu-tabbar.js";
if (!Math) {
  (_easycom_cu_tabs + _easycom_cu_navbar + _easycom_cu_empty + _easycom_cu_loading + _easycom_cu_ps_card + _easycom_unicloud_db + _easycom_cu_button + _easycom_cu_tabbar)();
}
const _sfc_main = {
  __name: "find",
  setup(__props) {
    const list = [{ name: "\u6700\u65B0" }, { name: "\u6700\u70ED" }];
    const btnStyle = {
      position: "fixed",
      bottom: "158rpx",
      right: "50rpx"
    };
    const orderby = common_vendor.ref("publish_date desc");
    const pagination = common_vendor.reactive({
      pageSize: 20,
      page: 1
    });
    const current = common_vendor.ref(0);
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
    const scrolltolower = () => {
      console.log("scrolltolower");
      udb.value.loadMore();
    };
    const changeTbas = (i) => {
      current.value = i;
      let tmpOrderby = i == 0 ? "publish_date desc" : "like_count desc";
      orderby.value = tmpOrderby;
    };
    common_vendor.onLoad(() => {
      common_vendor.index.hideTabBar();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(changeTbas),
        b: common_vendor.p({
          list,
          current: current.value
        }),
        c: common_vendor.p({
          leftIcon: ""
        }),
        d: common_vendor.w(({
          data,
          loading,
          error,
          options,
          hasMore
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "dcd66ac8-3-" + i0 + ",dcd66ac8-2",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "dcd66ac8-4-" + i0 + ",dcd66ac8-2"
          } : data.length != 0 ? {
            g: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: "dcd66ac8-5-" + i0 + "-" + i1 + ",dcd66ac8-2",
                b: common_vendor.p({
                  data: item
                })
              };
            })
          } : {
            h: "dcd66ac8-6-" + i0 + ",dcd66ac8-2"
          }, {
            d: loading,
            f: data.length != 0,
            i: !hasMore && !loading && data.length != 0
          }, !hasMore && !loading && data.length != 0 ? {
            j: "dcd66ac8-7-" + i0 + ",dcd66ac8-2",
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
          path: "d",
          vueId: "dcd66ac8-2"
        }),
        e: common_vendor.sr(udb, "dcd66ac8-2", {
          "k": "udb"
        }),
        f: common_vendor.p({
          orderby: orderby.value,
          collection: "articles,users,articles-categories",
          field: "title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}",
          ["page-current"]: pagination.page,
          ["page-size"]: pagination.pageSize
        }),
        g: refresher.value,
        h: common_vendor.o(scroll),
        i: triggered.value,
        j: common_vendor.o(refresherrefresh),
        k: common_vendor.o(refresherrestore),
        l: common_vendor.o(scrolltolower),
        m: common_vendor.p({
          text: "\u53D1\u5E03\u52A8\u6001",
          size: "small",
          customStyle: btnStyle
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/find/find.vue"]]);
wx.createPage(MiniProgramPage);
