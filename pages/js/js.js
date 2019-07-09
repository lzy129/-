// pages/js/js.js
var t = require("../../utils/timu.js")
Page({
  data: {
    arr: "",
  },
  onLoad() {
    var list = []
    for (var x in t.js) {
      list.push(t.js[x])
    }
    this.setData({
      arr: list
    })
  },

  send(e) {
    wx.navigateTo({
      url: '../xiangxi/xiangxi?id=' + e.currentTarget.dataset.id + "-" + e.currentTarget.dataset.leibie,
    })
  }
})