// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storyTypes: [
      {
        type: '客户故事',
        typeCode: 'story',
        activeTab: true
      },
      {
        type: '小程序资讯',
        typeCode: 'weAppNews',
        activeTab: false
      },
      {
        type: '骆驼动态',
        typeCode: 'luotuoNews',
        activeTab: false
      }
    ],
    storyList: [
      {
        storyId: '',
        url: '../../image/jb.jpg',
        title: '钟声想去归家的讯号钟声想去归家的讯号钟声想去归家的讯号',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '66',
        isStoryFootShow: false,
        isWxAppNewsShow: true
      },
      {
        storyId: '',
        url: '../../image/c.png',
        title: '用信仰和愿力，去做解决解决不完的问题，陶醉其中...',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '顺为科技 - 2018/01/01',
        pv: '99',
        isStoryFootShow: false,
        isWxAppNewsShow: true
      },
      {
        storyId:'',
        url:'../../image/ljc-1.jpeg',
        title:'使用骆驼软件定制小程序改变公司批发零售模式',
        customer:'上海洛美电子商务有限公司',
        industry:'箱包批发行业',
        date:'骆驼软件 - 2018/01/01',
        pv:'11',
        isStoryFootShow:true,
        isWxAppNewsShow: false
      },
      {
        storyId: '',
        url: '../../image/ljc-2.jpeg',
        title: '使用骆驼软件定制小程序改变公司批发零售模式',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '11',
        isStoryFootShow: false,
        isWxAppNewsShow:true
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  switchStoryTab: function(event) {
    let storyTypes = this.data.storyTypes
    let index = event.currentTarget.dataset.index
    
    for (var i = 0; i < storyTypes.length; i++){
      storyTypes[i].activeTab = false
    }
    storyTypes[index].activeTab = true
    this.setData ({
      storyTypes: storyTypes
    })
  },

  /**
   * 加载故事列表数据
   */
  loadNews: function(type, pageSize, pageIndex) {

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