"use strict";var e=require("../../common/vendor.js");const n={__name:"cu-loading",props:{showCircle:{type:Boolean,default:!0},loadingText:{type:String,default:"正在加载..."},line:{type:Boolean,default:!1}},setup:n=>(o,l)=>e.e({a:n.line},(n.line,{}),{b:n.showCircle},(n.showCircle,{}),{c:e.t(n.loadingText),d:e.s(n.showCircle?"":"margin:0 30rpx"),e:n.line},(n.line,{}))};wx.createComponent(n);