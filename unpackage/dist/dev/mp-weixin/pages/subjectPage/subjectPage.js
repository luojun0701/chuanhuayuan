"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cu_navbar2 = common_vendor.resolveComponent("cu-navbar");
  const _easycom_cu_loading2 = common_vendor.resolveComponent("cu-loading");
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_ps_card2 = common_vendor.resolveComponent("cu-ps-card");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_cu_popup2 = common_vendor.resolveComponent("cu-popup");
  (_easycom_cu_navbar2 + _easycom_cu_loading2 + _easycom_cu_empty2 + _easycom_cu_ps_card2 + _easycom_unicloud_db2 + _easycom_cu_popup2)();
}
const _easycom_cu_navbar = () => "../../components/cu-navbar/cu-navbar.js";
const _easycom_cu_loading = () => "../../components/cu-loading/cu-loading.js";
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_ps_card = () => "../../components/cu-ps-card/cu-ps-card.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_cu_popup = () => "../../components/cu-popup/cu-popup.js";
if (!Math) {
  (_easycom_cu_navbar + _easycom_cu_loading + _easycom_cu_empty + _easycom_cu_ps_card + _easycom_unicloud_db + _easycom_cu_popup)();
}
const _sfc_main = {
  __name: "subjectPage",
  setup(__props) {
    const ht = common_vendor.ref(null);
    const pagination = common_vendor.reactive({
      pageSize: 20,
      page: 1
    });
    const udb = common_vendor.ref(null);
    const triggered = common_vendor.ref(false);
    common_vendor.ref(true);
    const scrolltolower = () => {
      udb.value.loadMore();
    };
    common_vendor.onLoad((options) => {
      ht.value = JSON.parse(decodeURIComponent(options.ht));
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: common_vendor.p({
          bgColor: "transparent",
          title: "\u8BDD\u9898",
          color: "#fff",
          placeholder: false,
          leftIconColor: "#ffffff"
        }),
        b: common_vendor.t((_a = ht.value) == null ? void 0 : _a.name),
        c: common_vendor.t((_b = ht.value) == null ? void 0 : _b.description),
        d: triggered.value
      }, triggered.value ? {} : {}, {
        e: common_vendor.w(({
          data,
          loading,
          error,
          options,
          hasMore
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "3e7e0d98-4-" + i0 + ",3e7e0d98-3",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "3e7e0d98-5-" + i0 + ",3e7e0d98-3"
          } : data.length != 0 ? {
            g: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: "3e7e0d98-6-" + i0 + "-" + i1 + ",3e7e0d98-3",
                b: common_vendor.p({
                  data: item
                })
              };
            })
          } : {
            h: "3e7e0d98-7-" + i0 + ",3e7e0d98-3"
          }, {
            d: loading,
            f: data.length != 0,
            i: !hasMore && !loading && data.length != 0
          }, !hasMore && !loading && data.length != 0 ? {
            j: "3e7e0d98-8-" + i0 + ",3e7e0d98-3",
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
          path: "e",
          vueId: "3e7e0d98-3,3e7e0d98-1"
        }),
        f: common_vendor.sr(udb, "3e7e0d98-3,3e7e0d98-1", {
          "k": "udb"
        }),
        g: common_vendor.p({
          collection: "articles,users",
          where: `category_id=='${(_c = ht.value) == null ? void 0 : _c._id}'`,
          field: "title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account}",
          ["page-current"]: pagination.page,
          ["page-size"]: pagination.pageSize
        }),
        h: common_vendor.o(scrolltolower),
        i: common_vendor.p({
          show: true,
          overlay: false
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/subjectPage/subjectPage.vue"]]);
wx.createPage(MiniProgramPage);
