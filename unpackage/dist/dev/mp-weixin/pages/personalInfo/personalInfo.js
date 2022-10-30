"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_navbar2 = common_vendor.resolveComponent("cu-navbar");
  const _easycom_cu_tabs2 = common_vendor.resolveComponent("cu-tabs");
  const _easycom_cu_loading2 = common_vendor.resolveComponent("cu-loading");
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_ps_card2 = common_vendor.resolveComponent("cu-ps-card");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_cu_popup2 = common_vendor.resolveComponent("cu-popup");
  (_easycom_cu_navbar2 + _easycom_cu_tabs2 + _easycom_cu_loading2 + _easycom_cu_empty2 + _easycom_cu_ps_card2 + _easycom_unicloud_db2 + _easycom_cu_popup2)();
}
const _easycom_cu_navbar = () => "../../components/cu-navbar/cu-navbar.js";
const _easycom_cu_tabs = () => "../../components/cu-tabs/cu-tabs.js";
const _easycom_cu_loading = () => "../../components/cu-loading/cu-loading.js";
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_ps_card = () => "../../components/cu-ps-card/cu-ps-card.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_cu_popup = () => "../../components/cu-popup/cu-popup.js";
if (!Math) {
  (_easycom_cu_navbar + _easycom_cu_tabs + _easycom_cu_loading + _easycom_cu_empty + _easycom_cu_ps_card + _easycom_unicloud_db + _easycom_cu_popup)();
}
const _sfc_main = {
  __name: "personalInfo",
  setup(__props) {
    const userinfo = common_vendor.ref({});
    const current = common_vendor.ref(0);
    const pagination = common_vendor.reactive({
      pageSize: 20,
      page: 1
    });
    const udb = common_vendor.ref(null);
    const scrolltolower = () => {
      udb.value.loadMore();
    };
    const tabList = [{
      name: "ta\u52A8\u6001"
    }];
    const tabChange = (i) => {
      current.value = i;
    };
    const loadData = (data) => {
      for (let i in data) {
        data[i].user_id = [userinfo.value];
      }
    };
    common_vendor.onLoad((options) => {
      userinfo.value = JSON.parse(decodeURIComponent(options.info));
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          bgColor: "transparent",
          placeholder: false,
          leftIconColor: "#ffffff"
        }),
        b: common_vendor.o(($event) => _ctx.show = !_ctx.show),
        c: userinfo.value.avatarUrl,
        d: common_vendor.t(userinfo.value.nickName),
        e: common_vendor.t(userinfo.value.account ? userinfo.value.account.slice(0, 4) + "\u7EA7" : "\u6E38\u5BA2"),
        f: common_vendor.o((...args) => _ctx.login && _ctx.login(...args)),
        g: common_vendor.o(tabChange),
        h: common_vendor.p({
          list: tabList,
          current: current.value
        }),
        i: _ctx.triggered
      }, _ctx.triggered ? {} : {}, {
        j: common_vendor.w(({
          data,
          loading,
          error,
          options,
          hasMore
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "150f6688-5-" + i0 + ",150f6688-4",
            c: common_vendor.p({
              mode: "fail"
            })
          } : {}, {
            d: loading
          }, loading ? {
            e: "150f6688-6-" + i0 + ",150f6688-4"
          } : data.length != 0 ? {
            g: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: "150f6688-7-" + i0 + "-" + i1 + ",150f6688-4",
                b: common_vendor.p({
                  data: item
                })
              };
            })
          } : {
            h: "150f6688-8-" + i0 + ",150f6688-4"
          }, {
            f: data.length != 0,
            i: !hasMore && !loading && data.length != 0
          }, !hasMore && !loading && data.length != 0 ? {
            j: "150f6688-9-" + i0 + ",150f6688-4",
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
          path: "j",
          vueId: "150f6688-4,150f6688-1"
        }),
        k: common_vendor.sr(udb, "150f6688-4,150f6688-1", {
          "k": "udb"
        }),
        l: common_vendor.o(loadData),
        m: common_vendor.p({
          orderby: "publish_date desc",
          collection: "articles,articles-categories",
          where: `user_id=='${userinfo.value._id}'`,
          field: "title,mode,content,img_list,like_count,comment_count,publish_date,category_id{name}",
          ["page-current"]: pagination.page,
          ["page-size"]: pagination.pageSize
        }),
        n: common_vendor.o(scrolltolower),
        o: common_vendor.p({
          show: true,
          overlay: false
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/personalInfo/personalInfo.vue"]]);
wx.createPage(MiniProgramPage);
