"use strict";
var common_vendor = require("./vendor.js");
function upload(target) {
  if (typeof target == "string") {
    target = [target];
  }
  return new Promise((resolve) => {
    common_vendor.index.showLoading({
      title: "\u4E0A\u4F20\u4E2D"
    });
    let promiseAll = [];
    target.forEach((item, index) => {
      let promise = new Promise((resolve2, reject) => {
        let cloudPath = `lbotao-${parseInt(new Date().getTime() / 1e3)}`;
        let result = common_vendor.pn.uploadFile({
          filePath: item,
          cloudPath
        });
        resolve2(result);
      });
      promiseAll.push(promise);
    });
    Promise.all(promiseAll).then((res) => {
      let result = [];
      res.forEach((item) => {
        result.push(item.fileID);
      });
      common_vendor.index.hideLoading();
      resolve(result);
    });
  });
}
exports.upload = upload;
