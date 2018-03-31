// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:'',
    instandText:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let imageSrc = '';
  if(options.types=='洗衣机'){
    imageSrc = '../../images/index-1.jpg';
  }
  switch(options.types){
    case '洗衣机':
      imageSrc = '../../images/index-1.jpg';
      break;
    case '脱水机':
      imageSrc = '../../images/index-2.jpg';
      break;
    case '烘干机':
      imageSrc = '../../images/index-3.jpg';
      break;
    default:
      imageSrc ='##' 
        
  }
  
  this.setData(
    { imageSrc: imageSrc,
      instandText:true}
  )
  },

  bindError:function(e){
    console.log(e);
    this.setData({
      instandText: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})