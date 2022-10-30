"use strict";var e=require("../../common/vendor.js");const r={__name:"webview",setup(r){const a=e.ref(null);return e.onLoad((({url:e})=>{a.value=e})),(e,r)=>({a:a.value})}};wx.createPage(r);
