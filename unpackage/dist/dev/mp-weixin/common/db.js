"use strict";
var common_vendor = require("./vendor.js");
const db = common_vendor.pn.database();
const addDb = (collection, data) => {
  return new Promise((resolve) => {
    db.collection(collection).add(data).then((res) => {
      resolve(res);
    });
  });
};
const updateDb = (collection, where, data) => {
  return new Promise((resolve) => {
    db.collection(collection).where(where).update(data).then((res) => {
      resolve(res);
    });
  });
};
exports.addDb = addDb;
exports.updateDb = updateDb;
