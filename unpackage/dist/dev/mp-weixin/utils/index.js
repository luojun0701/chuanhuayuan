"use strict";
var common_vendor = require("../common/vendor.js");
function getRect(selector, all, that) {
  return new Promise((resolve, reject) => {
    const query = common_vendor.index.createSelectorQuery().in(that);
    let type = all ? query.selectAll(selector) : query.select(selector);
    type.boundingClientRect((res) => {
      if (!res)
        return reject("\u627E\u4E0D\u5230\u5143\u7D20");
      resolve(res);
    }).exec();
  });
}
function formatTime(oldTime) {
  if (!oldTime)
    return;
  let result = "";
  let curTime = new Date().getTime();
  let second = parseInt((curTime - oldTime) / 1e3);
  let min = second / 60;
  let hour = min / 60;
  let day = hour / 24;
  let week = day / 7;
  let month = day / 30;
  let year = day / 360;
  if (year > 1)
    result = parseInt(year) + "\u5E74\u524D";
  else if (month > 1)
    result = parseInt(month) + "\u6708\u524D";
  else if (week > 1)
    result = parseInt(week) + "\u5468\u524D";
  else if (day > 1)
    result = parseInt(day) + "\u5929\u524D";
  else if (hour > 1)
    result = parseInt(hour) + "\u5C0F\u65F6\u524D";
  else if (min > 1)
    result = parseInt(min) + "\u5206\u949F\u524D";
  else
    result = "\u521A\u521A";
  return result;
}
function throttle(fn, delay = 2e3) {
  let timeOut = null;
  return function() {
    if (!timeOut) {
      timeOut = setTimeout(() => {
        fn.apply(this);
        timeOut = null;
      }, delay);
    }
  };
}
exports.formatTime = formatTime;
exports.getRect = getRect;
exports.throttle = throttle;
