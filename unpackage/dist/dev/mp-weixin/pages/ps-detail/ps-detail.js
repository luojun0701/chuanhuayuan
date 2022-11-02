"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_loading2 = common_vendor.resolveComponent("cu-loading");
  const _easycom_cu_ps_card2 = common_vendor.resolveComponent("cu-ps-card");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_cu_title2 = common_vendor.resolveComponent("cu-title");
  const _easycom_cu_image2 = common_vendor.resolveComponent("cu-image");
  const _easycom_cu_msg_input2 = common_vendor.resolveComponent("cu-msg-input");
  (_easycom_cu_empty2 + _easycom_cu_loading2 + _easycom_cu_ps_card2 + _easycom_unicloud_db2 + _easycom_cu_title2 + _easycom_cu_image2 + _easycom_cu_msg_input2)();
}
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_loading = () => "../../components/cu-loading/cu-loading.js";
const _easycom_cu_ps_card = () => "../../components/cu-ps-card/cu-ps-card.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_cu_title = () => "../../components/cu-title/cu-title.js";
const _easycom_cu_image = () => "../../components/cu-image/cu-image.js";
const _easycom_cu_msg_input = () => "../../components/cu-msg-input/cu-msg-input.js";
if (!Math) {
  (_easycom_cu_empty + _easycom_cu_loading + _easycom_cu_ps_card + _easycom_unicloud_db + _easycom_cu_title + _easycom_cu_image + _easycom_cu_msg_input)();
}
const _sfc_main = {
  __name: "ps-detail",
  setup(__props) {
    common_vendor.ref(null);
    const pagination = common_vendor.reactive({
      pageSize: 20,
      page: 1
    });
    common_vendor.ref({});
    const udb = common_vendor.ref(null);
    const comment = common_vendor.ref("");
    const submit = () => {
      var _a;
      if (comment.value == "") {
        common_vendor.index.showToast({
          title: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",
          icon: "none"
        });
        return;
      }
      (_a = udb.value) == null ? void 0 : _a.add({
        article_id: articles_id.value,
        user_id: getApp().globalData.userinfo._id,
        comment_content: comment.value
      }, {
        toastTitle: "\u8BC4\u8BBA\u6210\u529F",
        success() {
          common_vendor.nextTick(() => {
            comment.value = "";
          });
        }
      });
    };
    const articles_id = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      articles_id.value = options.id;
      common_vendor.index.setNavigationBarTitle({
        title: options.title || "\u8BE6\u60C5"
      });
    });
    common_vendor.onPullDownRefresh(() => {
      udb.value.loadData({
        clear: true
      }, () => {
        common_vendor.index.stopPullDownRefresh();
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data,
          loading,
          error
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "3c79a9b4-1-" + i0 + ",3c79a9b4-0",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "3c79a9b4-2-" + i0 + ",3c79a9b4-0"
          } : data.length != 0 ? {
            g: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: "3c79a9b4-3-" + i0 + "-" + i1 + ",3c79a9b4-0",
                b: common_vendor.p({
                  data: item,
                  detail: true
                })
              };
            })
          } : {
            h: "3c79a9b4-4-" + i0 + ",3c79a9b4-0"
          }, {
            d: loading,
            f: data.length != 0,
            i: i0,
            j: s0
          });
        }, {
          name: "d",
          path: "a",
          vueId: "3c79a9b4-0"
        }),
        b: common_vendor.p({
          collection: "articles,users,articles-categories",
          where: `_id=='${articles_id.value}'`,
          field: "title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}"
        }),
        c: common_vendor.p({
          title: "\u5168\u90E8\u8BC4\u8BBA"
        }),
        d: common_vendor.w(({
          data,
          loading,
          error,
          options
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "3c79a9b4-7-" + i0 + ",3c79a9b4-6",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "3c79a9b4-8-" + i0 + ",3c79a9b4-6"
          } : data.length != 0 ? {
            g: common_vendor.f(data, (item, k1, i1) => {
              return {
                a: "3c79a9b4-9-" + i0 + "-" + i1 + ",3c79a9b4-6",
                b: common_vendor.p({
                  src: item.user_id[0].avatarUrl,
                  width: "80rpx",
                  height: "80rpx",
                  radius: "50%"
                }),
                c: common_vendor.t(item.user_id[0].nickName),
                d: common_vendor.t(item.comment_content),
                e: common_vendor.t(common_vendor.unref(utils_index.formatTime)(item.comment_date))
              };
            })
          } : {
            h: "3c79a9b4-10-" + i0 + ",3c79a9b4-6"
          }, {
            d: loading,
            f: data.length != 0,
            i: i0,
            j: s0
          });
        }, {
          name: "d",
          path: "d",
          vueId: "3c79a9b4-6"
        }),
        e: common_vendor.sr(udb, "3c79a9b4-6", {
          "k": "udb"
        }),
        f: common_vendor.p({
          collection: "comments,users",
          where: `article_id=='${articles_id.value}'`,
          field: "comment_content,child_comments,comment_date,user_id{_id,nickName,avatarUrl,role}",
          ["page-current"]: pagination.page,
          ["page-size"]: pagination.pageSize,
          getcount: true
        }),
        g: common_vendor.o(submit),
        h: common_vendor.o(($event) => comment.value = $event),
        i: common_vendor.p({
          placeholder: "\u53CB\u5584\u8BC4\u8BBA,\u6587\u660E\u53D1\u8A00",
          comment: comment.value,
          value: comment.value
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/ps-detail/ps-detail.vue"]]);
wx.createPage(MiniProgramPage);
