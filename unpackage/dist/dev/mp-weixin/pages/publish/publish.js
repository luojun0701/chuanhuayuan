"use strict";
var common_vendor = require("../../common/vendor.js");
var common_upload = require("../../common/upload.js");
var utils_index = require("../../utils/index.js");
var common_db = require("../../common/db.js");
if (!Array) {
  const _easycom_cu_input2 = common_vendor.resolveComponent("cu-input");
  const _easycom_cu_modal2 = common_vendor.resolveComponent("cu-modal");
  const _easycom_cu_upload2 = common_vendor.resolveComponent("cu-upload");
  const _easycom_cu_empty2 = common_vendor.resolveComponent("cu-empty");
  const _easycom_cu_loading2 = common_vendor.resolveComponent("cu-loading");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_cu_cell2 = common_vendor.resolveComponent("cu-cell");
  const _easycom_cu_button2 = common_vendor.resolveComponent("cu-button");
  (_easycom_cu_input2 + _easycom_cu_modal2 + _easycom_cu_upload2 + _easycom_cu_empty2 + _easycom_cu_loading2 + _easycom_unicloud_db2 + _easycom_cu_cell2 + _easycom_cu_button2)();
}
const _easycom_cu_input = () => "../../components/cu-input/cu-input.js";
const _easycom_cu_modal = () => "../../components/cu-modal/cu-modal.js";
const _easycom_cu_upload = () => "../../components/cu-upload/cu-upload.js";
const _easycom_cu_empty = () => "../../components/cu-empty/cu-empty.js";
const _easycom_cu_loading = () => "../../components/cu-loading/cu-loading.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_cu_cell = () => "../../components/cu-cell/cu-cell.js";
const _easycom_cu_button = () => "../../components/cu-button/cu-button.js";
if (!Math) {
  (_easycom_cu_input + _easycom_cu_modal + _easycom_cu_upload + _easycom_cu_empty + _easycom_cu_loading + _easycom_unicloud_db + _easycom_cu_cell + _easycom_cu_button)();
}
const _sfc_main = {
  __name: "publish",
  setup(__props) {
    const upload = common_vendor.ref(null);
    const btnStyle = {
      marginTop: "100rpx"
    };
    const popupShow = common_vendor.ref(false);
    const current = common_vendor.ref(null);
    const content = common_vendor.ref("");
    const title = common_vendor.ref("");
    const htmlContent = common_vendor.ref("");
    var category_id = "";
    const isEeditor = common_vendor.ref(false);
    common_vendor.onShow(() => {
      htmlContent.value = common_vendor.index.getStorageSync("html") || "";
    });
    const hidePopup = () => {
      popupShow.value = false;
    };
    const closePopup = () => {
      popupShow.value = false;
    };
    const changeEditor = (e) => {
      let tmp = e.detail.value;
      isEeditor.value = tmp;
    };
    const toEditorPage = () => {
      common_vendor.index.navigateTo({
        url: "/pages/editorPage/editorPage"
      });
    };
    const changeht = (index, id) => {
      if (current.value == index) {
        category_id = "";
        current.value = null;
      } else {
        category_id = id;
        current.value = index;
      }
    };
    const publish = () => {
      if (title.value == "" && isEeditor.value) {
        if (popupShow.value) {
          common_vendor.index.showToast({
            title: "\u8BF7\u586B\u5199\u6587\u7AE0\u6807\u9898",
            icon: "none"
          });
        } else {
          popupShow.value = true;
        }
        return;
      }
      publishFnc();
    };
    const publishFnc = utils_index.throttle(async () => {
      var _a;
      let tmpHtmlContent = null;
      if (isEeditor.value) {
        if (htmlContent.value == "") {
          common_vendor.index.showToast({
            title: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
          return;
        }
        let reg = /(\/|http)[^>]+\.(jpg|jpeg|png|gif)/g;
        let tmpEditorImgs = htmlContent.value.match(reg);
        let editorImgs = await common_upload.upload(tmpEditorImgs);
        let i = 0;
        tmpHtmlContent = htmlContent.value.replace(/(\/|http)[^>]+\.(jpg|jpeg|png|gif)/g, function() {
          ++i;
          return editorImgs[i - 1];
        });
        console.log(tmpHtmlContent);
      } else {
        if (content.value == "") {
          common_vendor.index.showToast({
            title: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
          return;
        }
      }
      let result = await ((_a = upload.value) == null ? void 0 : _a.upload());
      common_vendor.index.showLoading({
        title: "\u53D1\u5E03\u4E2D..."
      });
      common_db.addDb("articles", {
        content: isEeditor.value ? tmpHtmlContent : content.value,
        img_list: result,
        user_id: getApp().globalData.userinfo._id,
        title: title.value,
        mode: isEeditor.value ? 2 : 1,
        category_id
      }).then(({
        result: result2
      }) => {
        let {
          errCode
        } = result2;
        common_vendor.index.showToast({
          title: errCode == 0 ? "\u53D1\u5E03\u6210\u529F" : "\u53D1\u5E03\u5931\u8D25,\u8BF7\u91CD\u8BD5",
          icon: "none"
        });
        if (errCode == 0) {
          common_vendor.index.removeStorageSync("html");
          common_vendor.index.navigateBack();
        }
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isEeditor.value
      }, isEeditor.value ? common_vendor.e({
        b: htmlContent.value
      }, htmlContent.value ? {
        c: htmlContent.value,
        d: common_vendor.o(toEditorPage)
      } : {
        e: common_vendor.o(toEditorPage)
      }, {
        f: common_vendor.o(($event) => title.value = $event),
        g: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u6587\u7AE0\u6807\u9898",
          value: title.value
        }),
        h: common_vendor.o(closePopup),
        i: common_vendor.o(publish),
        j: common_vendor.o(hidePopup),
        k: common_vendor.p({
          show: popupShow.value,
          title: "\u586B\u5199\u6807\u9898"
        })
      }) : {
        l: content.value,
        m: common_vendor.o(($event) => content.value = $event.detail.value)
      }, {
        n: common_vendor.sr(upload, "ca1e2ac8-2", {
          "k": "upload"
        }),
        o: common_vendor.w(({
          data,
          loading,
          error,
          options,
          hasMore
        }, s0, i0) => {
          return common_vendor.e({
            a: error
          }, error ? {
            b: "ca1e2ac8-4-" + i0 + ",ca1e2ac8-3",
            c: common_vendor.p({
              mode: "fail"
            })
          } : loading ? {
            e: "ca1e2ac8-5-" + i0 + ",ca1e2ac8-3"
          } : {}, {
            d: loading,
            f: common_vendor.f(data, (item, index, i1) => {
              return {
                a: common_vendor.t(item.name),
                b: current.value == index ? 1 : "",
                c: common_vendor.o(($event) => changeht(index, item._id))
              };
            }),
            g: i0,
            h: s0
          });
        }, {
          name: "d",
          path: "o",
          vueId: "ca1e2ac8-3"
        }),
        p: common_vendor.p({
          collection: "articles-categories"
        }),
        q: isEeditor.value,
        r: common_vendor.o(changeEditor),
        s: common_vendor.p({
          title: isEeditor.value ? "\u5BCC\u6587\u672C\u5185\u5BB9" : "\u666E\u901A\u5185\u5BB9"
        }),
        t: common_vendor.o(publish),
        v: common_vendor.p({
          text: "\u4E00\u952E\u53D1\u5E03",
          customStyle: btnStyle
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/publish/publish.vue"]]);
wx.createPage(MiniProgramPage);
