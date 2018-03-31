//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     
  },
   
  onLoad: function () {
   
  },

  navToDetail:function(e){
    console.log(e);
    let types =e.target.dataset.types;
    wx.navigateTo({
      url: '../detail/detail?types='+types,
    })
  },

  navToProduct:function(e){
    let types = e.target.dataset.types;
    wx.reLaunch({
      url: '../product/product?types=' + types,
    })
  }
 
})
