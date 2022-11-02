"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_editorPage_options = require("./options.js");
if (!Array) {
  const _easycom_cu_icon2 = common_vendor.resolveComponent("cu-icon");
  _easycom_cu_icon2();
}
const _easycom_cu_icon = () => "../../components/cu-icon/cu-icon.js";
if (!Math) {
  _easycom_cu_icon();
}
const _sfc_main = {
  __name: "editorPage",
  setup(__props) {
    let editorCtx = null;
    const showAction = common_vendor.ref(true);
    const action = common_vendor.ref("font");
    const onEditorReady = () => {
      common_vendor.index.createSelectorQuery().select("#editor").context((res) => {
        editorCtx = res.context;
        editorCtx.setContents({
          html: common_vendor.index.getStorageSync("html") || ""
        });
      }).exec();
    };
    const onEditorFocus = () => {
      showAction.value = true;
    };
    const handle = (type) => {
      if (type == "complete") {
        editorCtx.getContents({
          success({ html }) {
            common_vendor.index.setStorageSync("html", html);
            common_vendor.index.navigateBack({
              delta: 1
            });
          }
        });
      } else if (type == "insert" || type == "font") {
        action.value = type;
      } else if (type == "setContents") {
        editorCtx.getContents({
          success({ html }) {
            let tmpHtml = html + '<a style="color:blue">www.baidu.com</a>';
            editorCtx[type]({
              html: tmpHtml
            });
          }
        });
      } else {
        editorCtx[type]();
        action.value = "";
      }
    };
    const format = (name, value) => {
      editorCtx.format(name, value);
    };
    const insertImage = () => {
      common_vendor.index.chooseMedia({
        mediaType: ["image"],
        success({ tempFiles }) {
          tempFiles.forEach((item, index) => {
            editorCtx.insertImage({
              src: item.tempFilePath,
              alt: "\u56FE\u50CF" + index,
              width: "100%"
            });
          });
        }
      });
    };
    const insertDivider = () => {
      editorCtx.insertDivider();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onEditorReady),
        b: common_vendor.o(onEditorFocus),
        c: common_vendor.f(common_vendor.unref(pages_editorPage_options.options).actions, (item, index, i0) => {
          return {
            a: "3d6dcebc-0-" + i0,
            b: common_vendor.p({
              name: item.name,
              color: index == common_vendor.unref(pages_editorPage_options.options).actions.length - 1 ? "#3d7eff" : "#000000"
            }),
            c: common_vendor.n({
              "border-left": index == 0 || index == common_vendor.unref(pages_editorPage_options.options).actions.length - 2
            }),
            d: common_vendor.o(($event) => handle(item.parameter))
          };
        }),
        d: showAction.value,
        e: action.value == "insert"
      }, action.value == "insert" ? {
        f: common_vendor.p({
          name: "morentupianccccccpx"
        }),
        g: common_vendor.o(insertImage),
        h: common_vendor.p({
          name: "line"
        }),
        i: common_vendor.o(insertDivider)
      } : {}, {
        j: action.value == "font"
      }, action.value == "font" ? {
        k: common_vendor.f(common_vendor.unref(pages_editorPage_options.options).fontRow, (item, index, i0) => {
          return {
            a: common_vendor.f(item, (items, i, i1) => {
              return index == 0 ? {
                a: "3d6dcebc-3-" + i0 + "-" + i1,
                b: common_vendor.p({
                  name: items.name
                }),
                c: common_vendor.o(($event) => format(items.parameter.name, items.parameter.value))
              } : index == 1 ? {
                d: common_vendor.t(items.name),
                e: common_vendor.o(($event) => format(items.parameter.name, items.parameter.value))
              } : {
                f: common_vendor.n(items.name),
                g: common_vendor.o(($event) => format(items.parameter.name, items.parameter.value))
              };
            }),
            b: index == 0,
            c: index == 1
          };
        })
      } : {}, {
        l: action.value
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilder Demo/\u5DDD\u534E\u9662/pages/editorPage/editorPage.vue"]]);
wx.createPage(MiniProgramPage);
