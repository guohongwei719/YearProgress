//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '',
    secondCount: '',
    dayCount: '',
    progress:0,
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {

  },


  startTimer: function () {
    var that = this
    this.timer = setInterval((function () {
      that.startProgress()
    }).bind(that), 1000)
  },

onShareAppMessage: function(){
    return {
        title: '年进度',
        path: "/pages/index/index"
    }
},

startProgress:function() {
  var that = this
  var dateYearStart = new Date("2017-01-01")
  var dateYearNow = new Date()

  var nowYear = dateYearNow.getUTCFullYear();
  dateYearStart.setUTCFullYear(nowYear)

  var time = dateYearNow.valueOf() - dateYearStart.valueOf()
  var percent = time.valueOf() / (365 * 24 * 60 * 60 * 1000) * 100
  var percentStr = percent.toFixed(6)
  var seconds = (time.valueOf() / 1000).toFixed(0)
  var day = (time.valueOf() / (24 * 60 * 60 * 1000)).toFixed(0)
  this.setData({ progress: percent.toFixed(0)})
  this.setData({secondCount:seconds})
  this.setData({ dayCount: day})
  this.setData({ motto: percentStr.toString() + "%" })
},

  onLoad: function () {
    console.log('onLoad')
    var that = this
    var dateYearStart = new Date("2017-01-01")
    var dateYearNow = new Date()
    var time = dateYearNow.valueOf() - dateYearStart.valueOf()
    var percent = time.valueOf() / (365 * 24 * 60 * 60 * 1000) * 100
    var percentStr = percent.toFixed(6)
    //调用应用实例的方法获取全局数据

    that.startTimer()
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        motto: percentStr.toString() + "%"
      })
    })
  }
})
