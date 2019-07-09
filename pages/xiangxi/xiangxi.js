var t = require("../../utils/timu.js")
Page({
  data: {
    all: "",
    index: null,
    title: "",
    leibie:""
  },

  onLoad: function(options) {
    this.setData({
      leibie: options.id.split("-")[1]
    })
    if (options.id.split("-")[1]=="xcx"){
      for (var x in t.tm) {
        if (options.id.split("-")[0] == t.tm[x].id) {
          this.setData({
            all: t.tm[x].all,
            index: t.tm[x].id,
            title: t.tm[x].timu
          })
        }
      }
    } else if (options.id.split("-")[1] == "es6") {
      for (var x in t.es6) {
        if (options.id.split("-")[0] == t.es6[x].id) {
          this.setData({
            all: t.es6[x].all,
            index: t.es6[x].id,
            title: t.es6[x].timu
          })
        }
      }
    } else if (options.id.split("-")[1] == "js") {
      for (var x in t.js) {
        if (options.id.split("-")[0] == t.js[x].id) {
          this.setData({
            all: t.js[x].all,
            index: t.js[x].id,
            title: t.js[x].timu
          })
        }
      }
    } else if (options.id.split("-")[1] == "html") {
      for (var x in t.html) {
        if (options.id.split("-")[0] == t.html[x].id) {
          this.setData({
            all: t.html[x].all,
            index: t.html[x].id,
            title: t.html[x].timu
          })
        }
      }
    } else if (options.id.split("-")[1] == "node") {
      for (var x in t.node) {
        if (options.id.split("-")[0] == t.node[x].id) {
          this.setData({
            all: t.node[x].all,
            index: t.node[x].id,
            title: t.node[x].timu
          })
        }
      }
    } else if (options.id.split("-")[1] == "vue") {
      for (var x in t.vue) {
        if (options.id.split("-")[0] == t.vue[x].id) {
          this.setData({
            all: t.vue[x].all,
            index: t.vue[x].id,
            title: t.vue[x].timu
          })
        }
      }
    }
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },

  prev() {
    if (this.data.leibie=="xcx"){
      if (this.data.index > 1) {
        this.setData({
          index: this.data.index - 1
        })
        for (var x in t.tm) {
          if (this.data.index == t.tm[x].id) {
            this.setData({
              all: t.tm[x].all,
              title: t.tm[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '已回到首页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "es6"){
      if (this.data.index > 1) {
        this.setData({
          index: this.data.index - 1
        })
        for (var x in t.es6) {
          if (this.data.index == t.es6[x].id) {
            this.setData({
              all: t.es6[x].all,
              title: t.es6[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '已回到首页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "js") {
      if (this.data.index > 1) {
        this.setData({
          index: this.data.index - 1
        })
        for (var x in t.js) {
          if (this.data.index == t.js[x].id) {
            this.setData({
              all: t.js[x].all,
              title: t.js[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '已回到首页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "html") {
      if (this.data.index > 1) {
        this.setData({
          index: this.data.index - 1
        })
        for (var x in t.html) {
          if (this.data.index == t.html[x].id) {
            this.setData({
              all: t.html[x].all,
              title: t.html[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '已回到首页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "node") {
      if (this.data.index > 1) {
        this.setData({
          index: this.data.index - 1
        })
        for (var x in t.node) {
          if (this.data.index == t.node[x].id) {
            this.setData({
              all: t.node[x].all,
              title: t.node[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '已回到首页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "vue") {
      if (this.data.index > 1) {
        this.setData({
          index: this.data.index - 1
        })
        for (var x in t.vue) {
          if (this.data.index == t.vue[x].id) {
            this.setData({
              all: t.vue[x].all,
              title: t.vue[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '已回到首页',
          icon: "none",
          duration: 2000
        })
      }
    }
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },
  next() {
    if (this.data.leibie == "xcx"){
      if (this.data.index >= 1 && this.data.index < t.tm.length) {
        this.setData({
          index: Number(this.data.index) + 1
        })
        for (var x in t.tm) {
          if (this.data.index == t.tm[x].id) {
            this.setData({
              all: t.tm[x].all,
              title: t.tm[x].timu
            })
          }
        }
      } else {
        console.log(this.data.index)
        wx.showToast({
          title: '到达最后一页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "es6"){
      if (this.data.index >= 1 && this.data.index < t.es6.length) {
        this.setData({
          index: Number(this.data.index) + 1
        })
        for (var x in t.es6) {
          if (this.data.index == t.es6[x].id) {
            this.setData({
              all: t.es6[x].all,
              title: t.es6[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '到达最后一页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "js") {
      if (this.data.index >= 1 && this.data.index < t.js.length) {
        this.setData({
          index: Number(this.data.index) + 1
        })
        for (var x in t.js) {
          if (this.data.index == t.js[x].id) {
            this.setData({
              all: t.js[x].all,
              title: t.js[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '到达最后一页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "html") {
      if (this.data.index >= 1 && this.data.index < t.html.length) {
        this.setData({
          index: Number(this.data.index) + 1
        })
        for (var x in t.html) {
          if (this.data.index == t.html[x].id) {
            this.setData({
              all: t.html[x].all,
              title: t.html[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '到达最后一页',
          icon: "none",
          duration: 2000
        })
      }
    }else if (this.data.leibie == "node") {
      if (this.data.index >= 1 && this.data.index < t.node.length) {
        this.setData({
          index: Number(this.data.index) + 1
        })
        for (var x in t.node) {
          if (this.data.index == t.node[x].id) {
            this.setData({
              all: t.node[x].all,
              title: t.node[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '到达最后一页',
          icon: "none",
          duration: 2000
        })
      }
    } else if (this.data.leibie == "vue") {
      if (this.data.index >= 1 && this.data.index < t.vue.length) {
        this.setData({
          index: Number(this.data.index) + 1
        })
        for (var x in t.vue) {
          if (this.data.index == t.vue[x].id) {
            this.setData({
              all: t.vue[x].all,
              title: t.vue[x].timu
            })
          }
        }
      } else {
        wx.showToast({
          title: '到达最后一页',
          icon: "none",
          duration: 2000
        })
      }
    }
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  }
})