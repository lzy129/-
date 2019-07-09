// pages/es6/es6.js
var t = require("../../utils/timu.js")
Page({
  data: {
    arr: "",
    value: ""
  },
  onLoad() {
    var list = []
    for (var x in t.es6) {
      list.push(t.es6[x])
    }
    this.setData({
      arr: list
    })
  },

  send(e) {
    wx.navigateTo({
      url: '../xiangxi/xiangxi?id=' + e.currentTarget.dataset.id + "-" + e.currentTarget.dataset.leibie,
    })
  },
  input(e) {
    this.setData({
      value: e.detail.value
    })
  },
  find() {
    this.setData({
      arr: ""
    })
    var list = [], list1 = []
    for (var i in t.tm) {
      list.push(t.tm[i].timu)
    }
    for (var x in list) {
      if (list[x].includes(this.data.value)) {
        list1.push(t.tm[x])
      }
    }
    this.setData({
      arr: list1
    })
  }
})