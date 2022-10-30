"use strict";const e=require("./vendor.js").pn.database();exports.addDb=(s,t)=>new Promise((d=>{e.collection(s).add(t).then((e=>{d(e)}))}));
