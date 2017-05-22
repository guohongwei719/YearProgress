// pages/story/story.js
var util = require('../../utils/util.js')

Page({
  data:{
    back_img:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487654177004&di=777500cd27afb65f5910a1fe1cfe4ff7&imgtype=0&src=http%3A%2F%2Fwww.jydoc.com%2Fuploads%2Fjydoc%2Fp30001%2F20092121595443777803.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487654177004&di=db91ab34571a12b765fa160d85c5753e&imgtype=0&src=http%3A%2F%2Fimage14.360doc.com%2FDownloadImg%2F2010%2F09%2F0109%2F4979072_42.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487654177004&di=71c751947e2b61112f6b81a3fec584b4&imgtype=0&src=http%3A%2F%2Fpic23.photophoto.cn%2F20120607%2F0034034829190693_b.jpg'],
    music_list: ['http://www.0dutv.com/upload/dance/D722E498C4D79EEA838B5504C3DCF210.mp3','http://ac-5g9r20ds.clouddn.com/e54ad7f0a834b9c07ec6.mp3','http://music2.tool.hexun.com/Save/Music/2007/1025/3601/M_573524E125B58A18.MP3'],
   item_title:['祝郭懿翎生日快乐！','世界的一公里','家，与你'],
   item_detail:['','项目位置及周边交通','户型，空间，精装'],
   windowHeight:0,
   currentStoryIndex:0,
   currentPlayIndex:-1,
   isPlaying:false,
   currentState:false, //记录当前页面是否播放状态，true为播放，false为停止.
   playProgress:0,
   startTime:'00:00',
   endTime:'00:00',
   audioDuartion:0,
   currentPosition:0,
   playIcon:'../../source/img/play.png',
   pauseIcon:'../../source/img/pause.png',
   loadingIcon:'../../source/img/loading.png',
   guoIcon: ['../../source/img/guoyiling.png'],
   phoneNumber:'18818203635',
   hasLoading:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    var sysInfo= wx.getStorageSync('systemInfo')
    var height = sysInfo['windowHeight']
    this.setData({
      windowHeight:height
    })
    wx.onBackgroundAudioStop(function() {
      that.stopTimer()
    })
    
    var flipIndex = options['index']
    if(flipIndex != undefined){
      this.setData({
      currentStoryIndex:flipIndex
    })
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  onShareAppMessage: function () {
    var index = this.data.currentStoryIndex
    return {
      title: '南滨特区',
      path: '/pages/story/story?index='+index
    }
  },

  play:function(){
    if(this.data.isPlaying) {
      this.pauseAudio()
    } else {
      this.playAudio()
    }
  },
   
  playAudio:function() {
    var index = this.data.currentStoryIndex
    var musicUrl = this.data.music_list[index]
    this.setData({
      isPlaying:true
    })
    wx.playBackgroundAudio({
      dataUrl: musicUrl,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
       
      }
    })
  },

  pauseAudio:function() {
    var that = this
    this.setData({
      isPlaying:false
    })
    wx.pauseBackgroundAudio({
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
})