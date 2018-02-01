// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutList: {
      componeyIntroduce: {
        imgPath: '../../image/compony-introduce.png',
        text: '公司介绍',
        navigateUrl: 'compony-introduce'
      },
      togetherWays: {
        imgPath: '../../image/together-ways.png',
        text: '合作方式',
        navigateUrl: 'together-ways'
      },
      contactUs: {
        imgPath: '../../image/contact-us.png',
        text: '联系我们',
        navigateUrl: 'contact-us'
      },
      wxApp: {
        imgPath: '',
        text:'微信小程序',
        navigateUrl: 'we-app'
      },
      softSystem: {
        imgPath: '../../image/soft-system.png',
        text: '大型软件系统（app）',
        navigateUrl: 'soft-system'
      },
      websizeMade: {
        imgPath: '../../image/websize-custom-made.png',
        text: '网址定制',
        navigateUrl: 'websize'
      },
      productCase: {
        imgPath: '../../image/product-case.png',
        text: '产品案例',
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('about-onload')
  },

  test: function (){
    console.log("123");
  },

  jumpToCase : function() {
    wx.switchTab({
      url: '../index/index',
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