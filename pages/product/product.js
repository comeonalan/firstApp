// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyData:[
      { name: '所有分类', toggle:"true"},
      { name: '洗衣机' },
      { name: '脱水机' },
      { name: '烘干机' },
      { name: '洗脱机' },
      { name: '烫平机'},
      { name: '折叠机'},
      { name: '清洗机'},
      { name: '离心机'}
    ],

    productList: [
      { name: '折叠机', imageSrc: '../../images/index-1.jpg', price: '面议', mode:'scaleToFill',types:'折叠机'},
      { name: '洗脱烘一体机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '洗脱机'},
      { name: '烫平机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '烫平机'},
      { name: '全自动洗脱机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '洗脱机'},
      { name: '全自动台式烘干机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '烘干机'},
      { name: '平板离心机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '离心机'},
      { name: '滤布清洗机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '清洗机'},
      { name: '工业洗衣机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '洗衣机'},
      { name: '多功能烘干机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '烘干机'},
      { name: '离心脱水机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '脱水机'},
      { name: '卫生隔离式洗衣机', imageSrc: '../../images/index-1.jpg', price: '面议', mode: 'scaleToFill', types: '洗衣机'}
    ]
  },

  selectTypes:function(e){
    console.log(e);
    let selectedType = '所有分类';
    if (e.target.dataset.toggle == undefined){
      this.data.classifyData[e.target.dataset.index].toggle = true;
      selectedType = this.data.classifyData[e.target.dataset.index].name;
    }
    for (var i = 0; i < this.data.classifyData.length; i++) {
      if (i != e.target.dataset.index) {
        this.data.classifyData[i].toggle = undefined;
      }
      
    }

    for (var i = 0; i < this.data.productList.length; i++){
      if (selectedType !='所有分类'){
        if (this.data.productList[i].types != selectedType) {
          this.data.productList[i].status = 'true';
        } else {
          this.data.productList[i].status = undefined;
        }
      }else{
        this.data.productList[i].status = undefined;
      }
     
    }

    this.setData({
      classifyData: this.data.classifyData,
      productList: this.data.productList
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.types);
    
  let selectedType = options.types;
 if(selectedType==undefined){
   selectedType ='所有分类';
 }
  for (var i = 0; i < this.data.classifyData.length; i++) {
    if (this.data.classifyData[i].name == selectedType) {
      this.data.classifyData[i].toggle = true;
    }else{
      this.data.classifyData[i].toggle = undefined;
    }

  }
 
  for (var i = 0; i < this.data.productList.length; i++) {
    if (selectedType != '所有分类') {
      if (this.data.productList[i].types != selectedType) {
        this.data.productList[i].status = 'true';
      } else {
        this.data.productList[i].status = undefined;
      }
    } else {
      this.data.productList[i].status = undefined;
    }

  }

  this.setData({
    classifyData: this.data.classifyData,
    productList: this.data.productList
  })
  },

  navToDetail:function(e){
     console.log(e);
    let types = e.target.dataset.types;
    wx.navigateTo({
      url: '../detail/detail?types=' + types,
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