"use strict";
var options = {
  actions: [{
    name: "jianpan",
    parameter: "blur"
  }, {
    name: "jiahao",
    parameter: "insert"
  }, {
    name: "ziti",
    parameter: "font"
  }, {
    name: "chexiao",
    parameter: "undo"
  }, {
    name: "zhongzuo",
    parameter: "redo"
  }, {
    name: "wancheng",
    parameter: "complete"
  }],
  fontRow: [[{
    name: "bold",
    parameter: {
      name: "bold",
      value: ""
    }
  }, {
    name: "align-left",
    parameter: {
      name: "align",
      value: "left"
    }
  }, {
    name: "align-center",
    parameter: {
      name: "align",
      value: "center"
    }
  }, {
    name: "align-right",
    parameter: {
      name: "align",
      value: "right"
    }
  }], [{
    name: "20",
    parameter: {
      name: "fontSize",
      value: "20px"
    }
  }, {
    name: "18",
    parameter: {
      name: "fontSize",
      value: "18px"
    }
  }, {
    name: "16",
    parameter: {
      name: "fontSize",
      value: "16px"
    }
  }, {
    name: "14",
    parameter: {
      name: "fontSize",
      value: "14px"
    }
  }, {
    name: "12",
    parameter: {
      name: "fontSize",
      value: "12px"
    }
  }], [
    {
      name: "black",
      parameter: {
        name: "color",
        value: "black"
      }
    },
    {
      name: "gray",
      parameter: {
        name: "color",
        value: "gray"
      }
    },
    {
      name: "white",
      parameter: {
        name: "color",
        value: "white"
      }
    },
    {
      name: "yellow",
      parameter: {
        name: "color",
        value: "yellow"
      }
    },
    {
      name: "orange",
      parameter: {
        name: "color",
        value: "orange"
      }
    },
    {
      name: "red",
      parameter: {
        name: "color",
        value: "red"
      }
    },
    {
      name: "green",
      parameter: {
        name: "color",
        value: "green"
      }
    }
  ]]
};
exports.options = options;
