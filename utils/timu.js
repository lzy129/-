var tm = [{
  id: "1",
  timu: "小程序基本语法",
  jianjie: "1.数据绑定--用‘{{}}’，2.列表渲染--wx：for，3.条件渲染--wx：if、wx：elif、wx：else...",
  all: "1基本数据绑定\n数据绑定使用 Mustache 语法（双大括号）将变量包起来\n< view > {{ message }} </view >\nPage({\ndata: {\nmessage:'Hello MINA!'\n}\n}) \n\n 2列表渲染：\nwx:for--在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。\n默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item.\n当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，\n而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。\n<view wx:for='{{ array }}''wx:key='index'>\n{{index}}: {{item}}\n</view>\n\n 3条件渲染\nwx:if满足该条件就显示\n<view wx:if='{ { length > 5 } } '> 1 </view>\n<view wx:elif='{ { length > 2 } } '> 2 </view>\n<view wx:else> 3 </view>\n\n 4模板\nWXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。\n定义模板：\n<template name='msgItem'>\n<view>\n<text> {{index}}: {{msg}} </text>\n<text> Time: {{time}} </text>\n</view>\n</template>\n使用模板：\n使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入，如：\n<template is='msgItem' data='{ {...item } }'/>\n",
  leibie: "xcx"
}, {
  id: "2",
  timu: "小程序全局配置",
  jianjie: "1.pages页面路劲列表，2.window全局默认窗口表现，3.tabBar小程序底部导航...",
  all: "pages  \n用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。文件名不需要写文件后缀，框架会自动去寻找对于位置的 .json, .js, .wxml, .wxss 四个文件进行处理。 \n\nwindow\n用于设置小程序的状态栏、导航条、标题、窗口背景色。一下是常用的样式：\n navigationBarBackgroundColor:导航栏背景颜色，如 #000000 \n navigationBarTextStyle:导航栏标题颜色，仅支持 black / white \n navigationBarTitleText :导航栏标题文字内容 \n backgroundColor :窗口的背景色 \n\ntabBar \n如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。\ntabBar属性值常用:\nlist:tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab \nposition:tabBar 的位置，仅支持 bottom / top \ncolor:tab 上的文字默认颜色，仅支持十六进制颜色 \nselectedColor:tab 上的文字选中时的颜色，仅支持十六进制颜色 \nlist属性值常用：\npagePath：页面路径，必须在 pages 中先定义 \ntext：tab 上按钮文字 \niconPath：图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持络图片。当 position 为 top 时，不显示 icon。\nselectedIconPath：选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon.\n\n全局样式\n写在app.wxss中的样式在pages里面的wxss都会被自动用上，也就是说pages里面都有的样式可以写在app.wxss里面,可以减少带量",
  leibie: "xcx"
}, {
  id: "3",
  timu: "小程序组件Component",
  jianjie: "创建一个组件文件，在里面的json文件配置--'component': true,在需要导入的文件的json配置 'usingComponents': {'Loading': '组件的位置'}",
  all: "创建一个组件文件，在里面的json文件配置--'component': true,在需要导入的文件的json配置 'usingComponents': {'Loading': '组件的位置'} \n主要的属性：\n页面中使用组件位置前面的Loading\nproperties:组件的对外属性，是属性名到属性设置的映射表 \ndata:组件的内部数据，和 properties 一同用于组件的模板渲染 \nmethods:组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 组件间通信与事件",
  leibie: "xcx"
}, {
  id: "4",
  timu: "模块化",
  jianjie: "1.js模块用require导入:var 自定义名称=require('模块的位置')--js模块导出:module.exports={要导出的模块（方法名）}，2.css用import：@import'css模块位置'",
  all: "模块js：common.js \nfunction sayHello(name) {\nconsole.log(`Hello ${name} !`)\n}\nfunction sayGoodbye(name) {\nconsole.log(`Goodbye ${name} !`)\n}\nmodule.exports.sayHello = sayHello\nexports.sayGoodbye = sayGoodbye\n\n引用模块jsvar common = require('common.js')\nPage({\nhelloMINA: function() {\ncommon.sayHello('MINA')\n},\ngoodbyeMINA: function() {\ncommon.sayGoodbye('MINA')\n}\n})\n\n样式css\n通过@import‘需要导入wxss的路劲’",
  leibie: "xcx"
}, {
  id: "5",
  timu: "定时器",
  jianjie: "setInterval、setTimeout、clearInterval、clearTimeout用法和js一样",
  all: "请参考javascript的定时器",
  leibie: "xcx"
}, {
  id: "6",
  timu: "视图容器",
  jianjie: "以什么样的方式显示在页面上--movable-view:可拖动的视图容器、cover-image：覆盖在原生组件之上的图片视图、view：类似div、scroll-view：滚动视图容器...",
  all: "视图容器一共分一下几种：\n\nmovable-view：可移动的视图容器，在页面中可以拖拽滑动。movable-view必须在movable-area 组件中，并且必须是直接子节点，否则不能移动。\n\n cover-image：覆盖在原生组件之上的图片视图。可覆盖的原生组件同cover-view，支持嵌套在cover-view里。\n\ncover-view：覆盖在原生组件之上的文本视图。可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。\n\nmovable-area：movable-view的可移动区域。\n\nscroll-view：可滚动视图区域。使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。\n\n swiper：滑块视图容器。其中只可放置swiper-item组件，否则会导致未定义的行为。\n\n swiper-item：仅可放置在swiper组件中，宽高自动设置为100%。\n\n view：视图容器，相当于前端里面的div标签\n",
  leibie: "xcx"
}, {
  id: "7",
  timu: "表单组件",
  jianjie: "imput、form、checkbox、picker（底部弹起的滚动选择器）....用法和h5一样",
  all: "和h5里面表单组件差不多",
  leibie: "xcx"
}, {
  id: "8",
  timu: "小程序api--updateManager（更新）",
  jianjie: "用来检测小程序的版本，提示用户更新版本",
  all: "例子：\nonLaunch: function() {\nif (wx.canIUse('getUpdateManager')) {\nconst updateManager = wx.getUpdateManager()\nupdateManager.onCheckForUpdate(function(res) {\nif (res.hasUpdate) {\nupdateManager.onUpdateReady(function() {\nwx.showModal({\n title: '更新提示',\n content: '新版本已经准备好，是否重启应用？',\nsuccess: function(res) {\n if (res.confirm) {\n updateManager.applyUpdate()\n }\n}\n})\n})\n}\n })\n }\n}\n",
  leibie: "xcx"
}, {
  id: "9",
  timu: "小程序api--路由（页面跳转）",
  jianjie: "wx.switchTab、wx.switchTab、wx.redirectTo等，后面都可以接参数",
    all: "路由跳转：\nwx.switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 \n\nwx.reLaunch：关闭所有页面，打开到应用内的某个页面 \n\nwx.redirectTo：关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。\n\nwx.navigateTo：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。\n\nwx.navigateBack：关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层\n\n也可以在页面用<navigator url='页面路劲'></navigator>来跳转，navigator等同于wx.navigateTo",
  leibie: "xcx"
}, {
  id: "10",
  timu: "小程序界面交互（消息提示）",
  jianjie: "wx.showToast、wx.showModal、wx.showLoading、wx.hideLoading、都是用来给操作者提示消息的",
  all: "交互（消息提示）\nwx.showToast：显示消息提示框\n\nwx.showToast({\ntitle: '成功',  //title 文本最多显示 7 个汉字长度，如果icon:'none'则没有长度限制\nicon: 'success',\nduration: 2000  //存在时间\n})wx.showModal：显示模态对话框\n\nwx.showLoading：显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框\n\nwx.showActionSheet：显示操作菜单\n\nwx.hideToast：隐藏消息提示框\n\nwx.hideLoading：隐藏 loading 提示框\n\n注意：\nwx.showLoading 和 wx.showToast 同时只能显示一个\nwx.showToast 应与 wx.hideToast 配对使用\n\n",
  leibie: "xcx"
}, {
  id: "11",
  timu: "小程序下拉刷新",
  jianjie: "onPullDownRefresh(){}--需要在app.json设置'enablePullDownRefresh': true",
  all: "例子：\n\nPage({\nonPullDownRefresh () {\n wx.startPullDownRefresh()//开始刷新\n wx.stopPullDownRefresh()//停止刷新\n}\n})\n",
  leibie: "xcx"
}, {
  id: "12",
  timu: "小程序上拉加载更多",
  jianjie: "onReachBottom(){}",
  all: "例子：\n\nonReachBottom: function () {}//下拉刷新后的内容写在这个方法里面",
  leibie: "xcx"
}, {
  id: "13",
  timu: "小程序右上角添加分享功能",
  jianjie: "onShareAppMessage: function () {wx.showShareMenu({ withShareTicket: true})}",
  all: "例子：\n\n wx.showShareMenu({\n withShareTicket: true\n })\n",
  leibie: "xcx"
}, {
  id: "14",
  timu: "小程序发送数据请求--wx.request({})",
  jianjie: "发起 HTTPS 网络请求。和jq的ajax类似",
  all: "例子：\n\n wx.request({\n  url: 'test.php', //仅为示例，并非真实的接口地址\n  data: {  },\n  header: {\n 'content-type': 'application/json' // 默认值\n  },\n  success (res) {\n  console.log(res.data)\n  }\n })\n\n注意:\nrequest路劲要先在小程序api里面配置合法域名",
  leibie: "xcx"
}, {
  id: "15",
  timu: "小程序上传--wx.uploadFile",
  jianjie: "将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。",
  all: "例子：\n\n wx.uploadFile({\n url: '',//请求服务器地址\n filePath: this.data.picture[0],//文件路劲\n  name: 'file',//文件名\n   formData: {},//除文件以外的其他参数\n success(res) { }\n  })",
  leibie: "xcx"
}, {
  id: "16",
  timu: "小程序下载--wx.downloadFile",
  jianjie: "下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。",
  all: "例子：\n\nwx.downloadFile({\nurl: 'https://example.com/audio/123', //仅为示例，并非真实的资源\n success (res) {\n// 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容\n if (res.statusCode === 200) {\n wx.playVoice({\nfilePath: res.tempFilePath\n})\n }\n }\n})",
  leibie: "xcx"
}, {
  id: "17",
  timu: "小程序数据缓存",
  jianjie: "wx.setStorageSync、wx.clearStorageSync()、wx.removeStorageSync同步存入、清除缓存，如果不要Sync就是异步",
  all: '例子：\n\nwx.setStorage({\nkey:"key",\ndata:"value"\n})\n等同与\ntry{\nwx.setStorageSync("key", "value")\n} catch (e) { }\n\n移除指定缓存\nwx.removeStorage({\nkey: "key",\nsuccess (res) {\nconsole.log(res)\n}\n})\n等同于\ntry {\nwx.removeStorageSync("key")\n} catch (e) {\n}\n\n清除所有\nwx.clearStorage() \n等同于\ntry { \n wx.clearStorageSync() \n } catch (e) { \n } \n',
  leibie: "xcx"
}, {
  id: "18",
  timu: "小程序生命周期",
  jianjie: "onLaunch，onShow，onHide，onError",
  all: 'onLaunch\n小程序的初始化---onLaunch (options) { } //可以接受参数 \n\nonShow\n小程序由后台切换到当前页----onShow (options) { },  //可以接受参数\n\nonHide\n与onShow相反----onHide () { },  //不接受参数\nonError\n初始化报错----  onError (msg) { }, //接受错误信息\n\nglobalData（全局）:整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 getApp 方法获取到全局唯一的 App 示例，获取App上的数据或调用开发者注册在 App 上的函数。\nconst appInstance = getApp()\nconsole.log(appInstance.globalData) \n',
  leibie: "xcx"
}, {
  id: "19",
  timu: "小程序页面生命周期",
  jianjie: "onload，omready，onshow，onhide，onunload",
  all: 'data:{}--存放数据（只在当前页面）\n\nonload--监听页面加载 \n\nonReady--监听页面初次渲染完成 \n\nonshow--监听页面显示 \n\nonhide--监听页面隐藏 \n\nonunload---监听页面卸载 \n\n',
  leibie: "xcx"
}, {
  id: "20",
  timu: "小程序设备api接口",
  jianjie: "二维码(一维码)扫码",
  all: '// 允许从相机和相册扫码 \nwx.scanCode({\nsuccess (res) {\nconsole.log(res)\n}\n})\n\n// 只允许从相机扫码\nwx.scanCode({\nonlyFromCamera: true,\nsuccess (res) {\nconsole.log(res)\n}\n})\n',
  leibie: "xcx"
}, {
  id: "21",
  timu: "小程序获取openid,formid等",
  jianjie: "用于发送模板消息(半小时)",
  all: "首先获取用户的登入信息\nwx.login({\nsuccess (res) {\nres.code  //用户登录凭证（有效期五分钟）。用于换取 openid 和 session_key 等信息}\n})\n\n用appid和secret来获取access_token\n请求地址“https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=小程序appid&secret=小程序secret”\n\n用appid，secret，res.code来获取openid\n请求地址“https://api.weixin.qq.com/sns/jscode2 \nsession?appid=小程序appid&secret=小程序secret&js_code=小程序登入的code&grant_type=authorization_code”\n\n定义模板消息需要openid，模板id，formid例子：\nvar data = {\n“touser”: openid,\n“template_id”: “模板id”,\n“page”: “点击进入程序后显示的页面路劲”,\n“form_id”: formId,\n“data”: {\n“keyword1”: {\n“value”: “尊敬的客户: ” + name\n },\n“keyword2”: {\n“value”: “您预约的物品已到达，详情请点击进入小程序查看”\n }\ }\n}\n\n通过token发送到用户：\nhttps://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token\n",
  leibie: "xcx"
}]

var es6 = [{
  id: "1",
  timu: "变量的解构赋值",
  jianjie: "常用的数组、对象、字符串函数参数的解构赋值",
  all: "ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构\n以前的写法：\nlet a = 1;\nlet b = 2;\nlet c = 3;\n现在的写法\nlet [a, b, c] = [1, 2, 3];\n\n本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。如果解构不成功，变量的值就等于undefined\n\n默认值：\n解构赋值允许指定默认值。\n\n注意:\nES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。\n\n对象的解构赋值:\n对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。\nlet { bar, foo } = { foo: 'aaa', bar: 'bbb' };\n\n如果变量名与属性名不一致，必须写成下面这样。\nlet obj = { first: 'hello', last: 'world' };\nlet { first: f, last: l } = obj;\n对象的默认值与数组的默认值一样\n\n字符串的解构赋值：\n字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。\n\n数值和布尔值的解构赋值\n解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。\n\n",
  leibie: "es6"
}, {
  id: "2",
  timu: "字符串的扩展",
  jianjie: "常用模板字符串",
  all: "模板字符串:\n模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。\n// 普通字符串\n`In JavaScript '\n' is a line-feed.`\n\n// 多行字符串\n`In JavaScript this is\nnot legal.`\n\nconsole.log(`string text line 1\nstring text line 2`);\n\n// 字符串中嵌入变量\nlet name = 'Bob', time = 'today';\n`Hello ${name}, how are you ${time}?`\n\n上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。",
  leibie: "es6"
}, {
  id: "3",
  timu: "字符串的新增方法",
  jianjie: "常用方法:includes(), startsWith(), endsWith(), repeat(),padStart()，padEnd(),trimStart(),trimEnd()",
  all: "includes()：返回布尔值，表示是否找到了参数字符串。\nstartsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。\nendsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。\n\nrepeat方法返回一个新字符串，表示将原字符串重复n次。参数如果是小数，会被取整,但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。\n\npadStart()用于头部补全，padEnd()用于尾部补全。\npadStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。\n如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。\n如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。\n如果省略第二个参数，默认使用空格补全长度。\n\ntrimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。\n\n",
  leibie: "es6"
}, {
  id: "4",
  timu: "函数的扩展",
  jianjie: "常用箭头函数, rest参数",
  all: "rest 参数\nES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。例如:\nfunction add(...values) {\nlet sum = 0;\n for (var val of values) {\nsum += val;\n}\nreturn sum;\n}\nadd(2, 5, 3) // 10\n\n箭头函数\nES6 允许使用“箭头”（=>）定义函数。\n如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分，如只有一个参数 就可以省略圆括号;\n\n注意：\n（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。\n（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。\n（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。\n（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。\n上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。\n",
  leibie: "es6"
}, {
  id: "5",
  timu: "数组的扩展",
  jianjie: "常用：扩展运算符, Array.from(), Array.of(),find() findIndex(), fill(), entries()，keys() , values(),includes(),includes(),flat()flatMap()",
  all: "扩展运算符\n含义:扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。\nconsole.log(1, ...[2, 3, 4], 5)\n// 1 2 3 4 5\n\n扩展运算符后面还可以放置表达式。\nconst arr = [\n ...(x > 0 ? ['a'] : []),\n 'b',\n];\n注意，只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。\n\nArray.from()\nArray.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。\nArray.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。\nArray.from([1, 2, 3], (x) => x * x)\n// [1, 4, 9]\n\nArray.of()\nArray.of方法用于将一组值，转换为数组。\nArray.of(1, 2) // [1, 2] /n/ncopyWithin()\n数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。\n它接受三个参数。\n target（必需）：从该位置开始替换数据。如果为负值，表示倒数。start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。\n\nfind()和findIndex() \n用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。\nfind方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。\nfindIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。\n\nfill() \nfill方法使用给定值，填充一个数组。还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。\n['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c'] \n\nentries()，keys() 和 values()\nES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历entries()是对键值对的遍历。\nfor (let index of ['a', 'b'].keys()) {\nconsole.log(index);\n}\n// 0\n// 1\n\nincludes() \n返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。\n该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。\n\nflat()和flatMap() \nflat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。\nflat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1\nflatMap()对原数组的每个成员执行一个函数，然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。\n[2, 3, 4].flatMap((x) => [x, x * 2]) \n// [2, 4, 3, 6, 4, 8]\nflatMap()只能展开一层数组\n[1, 2, 3, 4].flatMap(x => [[x * 2]])\n// [[2], [4], [6], [8]]\n",
  leibie: "es6"
}, {
  id: "6",
  timu: "对象的扩展",
  jianjie: "常用：解构赋值,super关键字，属性的遍历",
  all: "属性的遍历:\nES6 一共有 5 种方法可以遍历对象的属性。\n（1）for...in\nfor...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。\n\n（2）Object.keys(obj)\nObject.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。\n\n（3）Object.getOwnPropertyNames(obj)\nObject.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。\n\n（4）Object.getOwnPropertySymbols(obj)\nObject.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。\n\n（5）Reflect.ownKeys(obj)\nReflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。\n\nsuper关键字\n我们知道，this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。\n\n解构赋值\n对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。\nlet { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };\nx // 1\ny // 2\nz // { a: 3, b: 4 }\n",
  leibie: "es6"
}, {
  id: "7",
  timu: "对象新增的方法",
  jianjie: "常用：Object.assign()，Object.keys()，Object.values()，Object.entries()，Object.fromEntries()",
  all: "Object.assign()\n基本用法：Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）类似于深拷贝。\n注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。\n\nassign常见用途：\n（1）为对象添加属性\nclass Point {\n  constructor(x, y) {\nObject.assign(this, {x, y});\n}\n}\n\n（2）为对象添加方法\n\n（3）克隆对象\nfunction clone(origin) {\n return Object.assign({}, origin);\n}\n不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。\nfunction clone(origin) {\n let originProto = Object.getPrototypeO(origin);\nreturn Object.assign(Object.create(originProto), origin);\n}\n\n（4）合并多个对象\n将多个对象合并到某个对象。\nconst merge = (target, ...sources) =>Object.assign(target, ...sources);\n如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。\nconst merge = (...sources) => Object.assign({}, ...sources);\n\n（5）为属性指定默认值",
  leibie: "es6"
}, {
  id: "8",
  timu: "set和map",
  jianjie: "set的属性和方法，set的遍历操作，map的属性和方法，map的遍历操作",
  all: "set()\nSet它类似于数组，但是成员的值都是唯一的，没有重复的值。可以用来对数组去重\nconst set = new Set([1, 2, 3, 4, 4]);\n[...set]\n// [1, 2, 3, 4]\n\nSet 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法\nadd(value)：添加某个值，返回 Set 结构本身。\ndelete(value)：删除某个值，返回一个布尔值，表示删除是否成功。\nhas(value)：返回一个布尔值，表示该值是否为Set的成员。\nclear()：清除所有成员，没有返回值。\n\nSet 结构的实例有四个遍历方法，可以用于遍历成员。\nkeys()：返回键名的遍历器\nvalues()：返回键值的遍历器\nentries()：返回键值对的遍历器\nforEach()：使用回调函数遍历每个成员\nfor (let item of set.keys()) {\nconsole.log(item);\n}\n\nweakset()\nWeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。首先，WeakSet 的成员只能是对象，而不能是其他类型的值。WeakSet 没有size属性，没有办法遍历它的成员。\n\nmap()\nJavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。\nconst m = new Map();\nm.set(o, 'content')\nm.get(o) // ‘content’\n\nmap()通过set来添加值。通过get取值，其余方法和set类似，如果对同一个键多次赋值，后面的值将覆盖前面的值。如果读取一个未知的键，则返回undefined。\nmap()的遍历方法与set是一致的\n\nweakmap()\nWeakMap结构与Map结构类似，也是用于生成键值对的集合。\nWeakMap与Map的区别有两点。\n首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。\n其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。\n总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失WeakMap结构有助于防止内存泄漏。\nWeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。",
  leibie: "es6"
}, {
  id: "9",
  timu: "Promise 对象",
  jianjie: "Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。",
  all: "Promise对象有以下两个特点。\n（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。\n（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。\n\n注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。\n\nPromise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。\n\nreturn new Promise((resolve, reject) =>  {\n// ... some code\nif (/* 异步操作成功 */){\nresolve(value);\n} else {\nreject(error);\n}\n});\n\n",
  leibie: "es6"
}, {
  id: "10",
  timu: "async 函数",
  jianjie: "async函数通常和await一块，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。",
  all: "async函数就是依次读取两个文件，通常适合await一块使用的。async函数返回一个 Promise 对象。\n\nfunction timeout(ms) {\nreturn new Promise((resolve) => {\n setTimeout(resolve, ms);\n });\n}\nasyncfunction asyncPrint(value, ms) {\n await timeout(ms);\n console.log(value);\n}\nasyncPrint('hello world', 50);",
  leibie: "es6"
}, {
  id: "11",
  timu: "Class类的基本语法",
  jianjie: "JavaScript 语言中，生成实例对象的传统方法是通过构造函数。",
  all: "ES6 的类，完全可以看作构造函数的另一种写法。\nclass Bar {\ndoStuff() {\nconsole.log('stuff');\n}\n}\nvar b = new Bar();\nb.doStuff() // 'stuff'\n\nconstructor方法\nconstructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。\n\n类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。\n\n静态方法static\nclass Foo {\nstatic classMethod() {\n return 'hello';\n}\n}\nFoo.classMethod() // 'hello'\n\n注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。\n\n静态方法也是可以从super对象上调用的。\n\nclass Foo {\nstatic classMethod() {\nreturn 'hello';\n}\n}\nclass Bar extends Foo {\nstatic classMethod() {\nreturn super.classMethod() + ', too';\n}\n}\nBar.classMethod() // 'hello, too'\n",
  leibie: "es6"
}]

var js = [{
  id: "1",
  timu: "String",
  jianjie: "字符串的方法使用",
  all: "字符串长度\nlength 属性返回字符串的长度\n\n查找字符串中的字符串\nindexOf() 方法返回字符串中指定文本首次出现的索引\n\lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引\n如果未找到文本， indexOf() 和 lastIndexOf() 均返回 -1。\n两种方法都接受作为检索起始位置的第二个参数。\nlastIndexOf() 方法向后进行检索（从尾到头），假如第二个参数是 50，则从位置 50 开始检索，直到字符串的起点。\nsearch() 方法搜索特定值的字符串，并返回匹配的位置,未找到也返回-1,search() 方法无法设置第二个开始位置参数。\n\n提取部分字符串\nslice() 提取字符串的某个部分并在新字符串中返回被提取的部分。该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。如果省略第二个参数，则该方法将裁剪字符串的剩余部分，如果是负数就从尾部开始往头部截取\nsubstring() 类似于 slice()，但是参数不能为负数，如果省略第二个参数，将裁剪字符串的剩余部分。\nsubstr() 类似于 slice()，不同之处在于第二个参数规定被提取部分的长度。如果省略第二个参数，将裁剪字符串的剩余部分。如果首个参数为负，则从字符串的结尾计算位置。第二个参数不能为负，因为它定义的是长度。\n\n替换字符串内容\nreplace() 方法不会改变调用它的字符串。它返回的是新字符串。默认地，replace() 只替换首个匹配。replace() 对大小写敏感。如需替换所有匹配，请使用正则表达式的 g 标志（用于全局搜索）\n例子：str = 'Please visit Microsoft and Microsoft!';\nvar n = str.replace(/Microsoft/g, 'W3School');\n\n转换为大写和小写\ntoUpperCase() 把字符串转换为大写,toLowerCase() 把字符串转换为小写\n\nconcat() 方法\nconcat() 连接两个或多个字符串\n\n注意：所有字符串方法都会返回新字符串。它们不会修改原始字符串。\n\nString.trim()\ntrim() 方法删除字符串两端的空白符\n\n字符串转换为数组\n split() 将字符串转换为数组\n\ntoString()\ntoString() 方法返回字符串。\n\nmatch()\n找到一个或多个正则表达式的匹配。\n\n",
  leibie: "js"
}, {
  id: "2",
  timu: "Array",
  jianjie: "数组的方法使用",
  all: "数组方法\ntoString() 把数组转换为数组值（逗号分隔）的字符串。\n\njoin() 方法也可将所有数组元素结合为一个字符串。还可以规定分隔符\n\npop() 方法从数组中删除并返回最后一个元素\n\npush() 方法（在数组结尾处）向数组添加一个新的元素，并返回新数组的长度\n\nshift() 方法会删除并返回首个数组元素\n\nunshift() 方法（在开头）向数组添加新元素，并返回新数组的长度\n\nsplice()：\n第一个参数定义了应添加新元素的位置（拼接）。\n第二个参数定义应删除多少元素。\n其余参数定义要添加的新元素。其余参数被省略。没有新元素将被添加。\n\nconcat() 方法\n通过合并（连接）现有数组来创建一个新数组，不会更改现有数组。它总是返回一个新数组。可以使用任意数量的数组参数\n\nslice() 方法用数组的某个片段切出新数组。创建新数组。它不会从源数组中删除任何元素。是可接受两个参数，该方法会从开始参数选取元素，直到结束参数（不包括）为止。如果结束参数被省略，则 slice() 会切出数组的剩余部分。\n\n数组排序\nreverse() 方法反转数组中的元素。\n\nsort() 方法以字母顺序对数组进行排序，不过，如果数字按照字符串来排序，则 '25' 大于 '100'，因为 '2' 大于 '1'。通过一个比值函数来修正此问题--- arr.sort(function (a, b) { return a - b }); \n\n",
  leibie: "js"
}, {
  id: "3",
  timu: "Number",
  jianjie: "数值的方法使用",
  all: "Number 方法和属性\ntoExponential() 返回字符串值，它包含已被四舍五入并使用指数计数法的数字\n\ntoFixed() 返回字符串值，它包含了指定位数小数的数字\n\nvalueOf() 以数值返回数值\n\nNumber() 可用于把 JavaScript 变量转换为数值,还可以把日期转换为数字\n\nparseInt() 解析一段字符串并返回数值。允许空格。只返回首个数字\n\nparseFloat() 解析一段字符串并返回数值。允许空格。只返回首个数字\n\nMAX_VALUE 返回 JavaScript 中可能的最大数。\n\nMIN_VALUE 返回 JavaScript 中可能的最小数。\n\n",
  leibie: "js"
}, {
  id: "4",
  timu: "正则表达式",
  jianjie: "正则表达式的使用",
  all: "正则表达式\n正则表达式可以是单字符，或者更复杂的模式。正则表达式可用于执行所有类型的文本搜索和文本替换操作。\n在 JavaScript 中，正则表达式常用于两个字符串方法：search() 和 replace()。\n\n正则表达式修饰符\ni-------执行对大小写不敏感的匹配。\ng------执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。\nm-----执行多行匹配。\n\n拥有特殊含义的字符\n\d-----查找数字。\n\b-----匹配单词边界。\n\s-----查找空白字符。\n\n定义量词\nn+-----匹配任何包含至少一个 n 的字符串\nn* -----匹配任何包含零个或多个 n 的字符串\nn? -----匹配任何包含零个或一个 n 的字符串。\n\nRegExp\nRegExp 对象是带有预定义属性和方法的正则表达式对象。\ntest() 是一个正则表达式方法。它通过模式来搜索字符串，然后根据结果返回 true 或 false\n /e/.test('匹配的内容'); \nexec() 方法是一个正则表达式方法。如果未找到匹配，则返回 null。\n/e/.exec('匹配的内容');\n",
  leibie: "js"
}, {
  id: "5",
  timu: "js函数",
  jianjie: "函数方法",
    all: "js函数\nJavaScript 函数是通过 function 关键词定义的。函数表达式可以在变量中存储，在变量中保存函数表达式之后，此变量可用作函数。\n\n自调用函数\n例子:\n(function () {\nvar x = 'Hello!!';      //我会调用我自己\n})();\n\n箭头函数\n箭头函数允许使用简短的语法来编写函数表达式。您不需要 function 关键字、return 关键字和花括号\n// ES5\nvar x = function(x, y) {\nreturn x * y;\n}\n\n// ES6\nconst x = (x, y) => x * y;\n\n构造函数function obj(name,age,sex){\nthis.name=name||'未知';\nthis.age=age||'未知';\nthis.sex=sex||'未知';\n }\nvar x=new obj()\n",
  leibie: "js"
  }, , {
    id: "6",
    timu: "js事件",
    jianjie: "常用事件",
    all: "鼠标事件\nonclick-----当用户点击某个对象时调用的事件句柄。\noncontextmenu-----在用户点击鼠标右键打开上下文菜单时触发 \n ondblclick-----当用户双击某个对象时调用的事件句柄\nonmousedown-----鼠标按钮被按下\nonmouseenter-----当鼠标指针移动到元素上时触发\nonmouseleave -----当鼠标指针移出元素时触发 \nonmousemove -----鼠标被移动。\nonmouseover-----鼠标移到某元素之上。\nonmouseout -----鼠标从某元素移开。 \nonmouseup-----鼠标按键被松开。\n\n键盘事件\nonkeydown-----某个键盘按键被按下 \nonkeypress-----某个键盘按键被按下并松开 \nonkeyup-----某个键盘按键被松开。 \nfunction keydown(event){ \n//表示键盘监听所触发的事件，同时传递传递参数event \n document.write(event.keyCode);//keyCode表示键盘编码 \n} \n\n滚动事件 \nonscroll-----当文档被滚动时发生的事件。\n\n拖动事件 \nondrag-----该事件在元素正在拖动时触发 \nondragend-----该事件在用户完成元素的拖动时触发\nondragenter-----该事件在拖动的元素进入放置目标时触发  \nondragleave-----该事件在拖动元素离开放置目标时触发  \nondragover-----该事件在拖动元素在放置目标上时触发  \n ondragstart-----该事件在用户开始拖动元素时触发  \n	 ondrop-----该事件在拖动元素放置在目标区域时触发 \n\n表单事件 \nonblur-----元素失去焦点时触发 \nonchange-----该事件在表单元素的内容改变时触发( <input>, <keygen>, <select>, 和 <textarea>)  \nonfocus-----元素获取焦点时触发  \nonfocusin-----元素即将获取焦点时触发 \nonfocusout -----元素即将失去焦点时触发  \noninput-----元素获取用户输入时触发  \nonreset-----表单重置时触发  \nonsubmit-----表单提交时触发 \n",
    leibie: "js"
  }]

var html = [{
  id: "1",
  timu: "HTML 标签",
  jianjie: "HTML常用标签",
  all: '常用html标签\n<h1> to <h6> -----定义 HTML 标题\n<p>------定义一个段落\n<br>-----换行\n<hr>-----定义水平线。\n<bdo>----控制文本方向\n<sub>-----定义下标文本。\n<sup>-----定义上标文本。\n<img>-----定义图像。\n<video>----定义一个音频或者视频\n<audio>----定义声音，比如音乐或其他音频流。\n\n--表单标签\n<form>------定义一个 HTML 表单，用于用户输入。\n\n<input>------定义一个输入控件\nrequired 	属性规定必需在提交表单之前填写输入字段。\nmultiple 	属性规定允许用户上传多个文件\nautofocus ----属性规定当页面加载时 <input> 元素应该自动获得焦点。\n....\n\n<textarea>------定义多行的文本输入控件。\nreadonly------规定文本区域为只读。\ndisabled------规定禁用文本区域。\npattern-------属性规定用于验证 <input> 元素的值的正则表达式。\nresize: none;固定大小\n\n<button>------定义按钮。\n\n<select>------定义选择列表（下拉列表）。\n< select >\n<optgroup label="Swedish Cars"\n< optionvalue="volvo" > Volvo</option >\n < option value = "saab" > Saab</option >\n</optgroup >\n < optgroup label = "German Cars" >\n < option value = "mercedes" > Mercedes</option >\n < option value = "audi" > Audi</option >\n</optgroup >\n</select > \n\n < fieldset > ------定义围绕表单中元素的边框。\n < fieldset >\n < legend > Personalia:</legend >\nName: <input type="text"><br>\nEmail: <input type="text"><br>\nDate of birth: <input type="text">\n</fieldset>\n\n<datalist>------规定了 input 元素可能的选项列表。\n<input list="browsers" name="browser">\n<datalist id="browsers">\n<option value="Internet Explorer">\n<option value="Firefox">\n<option value="Chrome">\n<option value="Opera">\n<option value="Safari">\n</datalist>\n\n链接标签\n<a>-------定义一个链接\n<link>----定义文档与外部资源的关系。\n<nav>-----定义导航链接\n<base>----定义页面中所有url链接的默认地址或默认目标。\n\n列表标签\n<ul>-----定义一个无序列表\n<ol>-----定义一个有序列表\n<li>------定义一个列表项\n',
  leibie: "html"
}, {
  id: "2",
  timu: "HTML 属性",
  jianjie: "HTML 元素可以设置属性,属性可以在元素中添加附加信息,属性一般描述于开始标签,属性总是以名称/值对的形式出现",
    all: "常用html属性\nclass-----为html元素定义一个或多个类名（classname）(类名从样式文件引入)\n\nid--------定义元素的唯一id\n\nstyle-----规定元素的行内样式（inline style）\n\ntitle------描述了元素的额外信息 (作为工具条使用)\n\ndata-id--用于存储页面的自定义数据\n\ndir-------设置元素中内容的文本方向。(rtl右到左，ltr左到右，auto自定义---必需是<bdo> 元素内的文本方向。)\n\nhidden属------性规定对元素进行隐藏。\n\ndraggable-----指定某个元素是否可以拖动\n\ndropzone------指定是否将数据复制，移动，或链接，或删除\n\naccesskey 	-----设置访问元素的键盘快捷键（window下）。\n\b\b Internet Explorer----[Alt] + accesskey\n\b\b Firefox----[Alt] [Shift] + accesskey\n\b\b Safari----[Alt] + accesskey\n\ndocumengt.body.clientWidth-----获取屏幕的宽度\noffsetWidth-----获取当前盒子的宽度\noffsetTop-------获取当前盒子距离顶部的距离\nonresize根据窗口大小的改变而执行的函数\nwindow.onresize=function(){}\n\n/*当屏幕小于1200px且大于992px*/\n@media (min-width: 992px) and (max-width: 1200px) {...}",
  leibie: "html"
  }, {
    id: "3",
    timu: "伪元素",
    jianjie: "CSS伪元素是用来添加一些选择器的特殊效果。",
    all: '比较常用的\n:first-line：伪元素用于向文本的首行设置特殊样式。但是只能用于块级元素。\n\n:first-letter：用于向文本的首字母设置特殊样式 \n\n:before 伪元素可以在元素的内容前面插入新内容--h1:before {content:url(smiley.gif);}\n\n:after" 伪元素可以在元素的内容之后插入新内容。\n\n:link----选择所有未访问链接\n\n:visited----选择所有访问过的链接\n\n:active-----选择正在活动链接\n\n:hover-----把鼠标放在链接上的状态\n\n:nth-child(n)----选择所有当前元素的父元素的第n个子元素\n\n:not(p)---------选择所有p以外的元素\n\n',
    leibie: "html"
  }, {
    id: "4",
    timu: "选择器",
    jianjie: "CSS选择器用于选择你想要的元素的样式的模式。",
    all: '.intro--------选择所有class="intro"的元素\n\n#firstname-----选择所有id="firstname"的元素\n\n*---------选择所有元素\n\np---------选择所有<p>元素\n\ndiv,p-------选择所有<div>元素和<p>元素 \n\ndiv p-------选择<div>元素内的所有<p>元素\n\ndiv>p------选择所有父级是 <div> 元素的 <p> 元素 \n\ndiv+p------选择所有紧接着<div>元素之后的<p>元素\n\n[target]-----选择所有带有target属性元素\n\n[target=-blank]-----选择所有使用target="-blank"的元素\n\n[title~=flower]------选择标题属性包含单词"flower"的所有元素\n\n[lang|=en]--------选择 lang 属性以 en 为开头的所有元素\n\na[src^="https"]-----选择每一个src属性的值以"https"开头的元素 	\n\na[src$=".pdf"]-------选择每一个src属性的值以".pdf"结尾的元素 	\n\na[src*="runoob"]----选择每一个src属性的值包含子字符串"runoob"的元素\n\n:valid------用于匹配输入值为合法的元素\n\n:invalid----用于匹配输入值为非法的元素\n\n',
    leibie: "html"
  }]

  var node=[
    {
      id:"1",
      timu: "node服务器搭建",
      jianjie: "nodejs服务器的搭建",
    all: "nodejs搭建服务器 \nvar express = require('express');\nvar app = express();\nif (!module.parent) {\napp.listen('3000', function () {\n console.log('服务开启了');\n});\n}\n\nnodejs的静态托管\napp.use('/public/', express.static('./public/')) \n\nnodejs的template应用\nvar template = require('express-art-template'); \nvar path = require('path'); \n\napp.engine('html', template); \napp.set('views', path.join(__dirname, './view')); \napp.set('view engine', 'html'); \n\nnodejs跨域处理\nvar cors = require('cors'); //处理跨域\napp.use('/', cors(), router);\n\nnodejs的路由\nvar router = express.Router();\nmodule.exports = router;\n\nnodejs的post接受数据\nvar bodyparser = require('body-parser')\nrouter.use(bodyparser.urlencoded({ extended: false }))\nrouter.use(bodyparser.json())\npost通过req.body-----get通过req.query\n\nnodejs的文件上传\nvar formidable = require('formidable')\n//多个文件\n var form = new formidable.IncomingForm()\nvar arr = []\nform.on('file', function (filed, file) {\n arr.push(file);\n});\nform.parse(req, (err, fields, files) => {\nvar x = [], nm = ''\narr.forEach((item, index) => {\n x.push('/public/img/' + item.name)\n nm = item.name\nfs.rename(item.path, './public/img/' + item.name, err => { })\n })\n })",
      leibie: "node"
    }, {
      id: "2",
      timu: "node链接数据库",
      jianjie: "nodejs与数据库的应用---连接池",
      all: "var mysql = require('mysql'); // 创建 mysql 连接池资源 \n\nvar pool = mysql.createPool({ \nhost: 'bdm289907355.my3w.com',    //主机 \nuser: 'bdm289907355', \npassword: 'visu103.', \nport: 3306, \ndatabase: 'bdm289907355_db', \nmultipleStatements: true \n}); \n\nexports.query = function (sql, arr, callback) { //建立链接 \npool.getConnection(function (err, connection) { \nif (err) { throw err; return; } \nconnection.query(sql, arr, function (error, results, fields) { //将链接返回到连接池中，准备由其他人重复使用  \nconnection.release(); if (error) throw error; //执行回调函数，将数据返回 \ncallback && callback(results, fields); \n}); \n}); \n}; \n",
      leibie: "node"
    }, , {
      id: "3",
      timu: "node内部的数据请求",
      jianjie: "node内部的数据请求",
      all: 'node内部的请求\n先导入request模块var request=require("request")\nvar data = {  //数据 }\n request({\nurl: "路劲",\nmethod: "POST",\nbody: JSON.stringify(data)\n}, function (error, response, body) {})',
      leibie: "node"
    }
  ]
  var vue=[
    {
      id: "1",
      timu: "vue的初始化",
      jianjie: "vue框架初始化",
      all: '首先导入vue\n<script src="./vue.min.js"></script>\n\n<script>\nnew Vue({\nel: "#app",\ndata: {\n},\nmethods: {\n //函数\n},\ncreated() {\n //一开始加载数据\n}\n})\n</script>',
      leibie: "vue"
    }, {
      id: "2",
      timu: "vue数据请求",
      jianjie: "vue的axios请求",
      all: '数据请求\n<script src="./vue-resource.js"></script>\nthis.$http.get("请求地址").then(result => {\nvar res = result.body; //接收数据\n})\n\naxios数据请求\n<script src="https://unpkg.com/axios@0.18.0/dist/axios.min.js"></script>\naxios.get("请求地址",{\nparams:{\nname:this.users.name,\nage:this.users.age\n}\n})\n .then(function (response) {\n console.log(response.data);\n})\n.catch(function (error) {\n console.log(error);\n});\n',
      leibie: "vue"
    }
  ]
module.exports = {
  tm,
  es6,
  js,
  html,
  node,
  vue
}