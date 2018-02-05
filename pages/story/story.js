// pages/story/story.js
import { storyListUrl } from '../../config.js'
import { requestPost } from '../../utils/apiUtil.js'
import { pageSize } from '../../common/constant.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curPage: 0,
    curTypeCode: 'story',
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
        storyId: '1',
        url: '../../image/jb.jpg',
        title: '钟声想去归家的',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '66',
        isStoryFootShow: false,
        isWxAppNewsShow: true
      },
      {
        storyId: '3',
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
        storyId: '2',
        url: '../../image/ljc-1.jpeg',
        title: '使用骆驼软件定制小程序改变公司批发零售模式',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '11',
        isStoryFootShow: true,
        isWxAppNewsShow: false
      },
      {
        storyId: '3',
        url: '../../image/ljc-2.jpeg',
        title: '使用骆驼软件定制小程序改变公司批发零售模式',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '11',
        isStoryFootShow: false,
        isWxAppNewsShow: true
      },
      {
        storyId: '1',
        url: '../../image/ljc-2.jpeg',
        title: '使用骆驼软件定制小程序改变公司批发零售模式',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '11',
        isStoryFootShow: false,
        isWxAppNewsShow: true
      },
      {
        storyId: '2',
        url: '../../image/ljc-2.jpeg',
        title: '使用骆驼软件定制小程序改变公司批发零售模式',
        customer: '上海洛美电子商务有限公司',
        industry: '箱包批发行业',
        date: '骆驼软件 - 2018/01/01',
        pv: '11',
        isStoryFootShow: false,
        isWxAppNewsShow: true
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  switchStoryTab: function (event) {
    let self = this
    let storyTypes = self.data.storyTypes
    let index = event.currentTarget.dataset.index
    // 设置当前的typeCode 为全局变量
    self.data.curTypeCode = storyTypes[index].typeCode

    self.changeTabDisplay(index, storyTypes)
    self.loadFirstPageNews(self.data.curTypeCode)
  },
  
  /**
   * 改变tab样式
   */
  changeTabDisplay: function (index, storyTypes) {
    for (var i = 0; i < storyTypes.length; i++) {
      storyTypes[i].activeTab = false
    }
    storyTypes[index].activeTab = true
    this.setData({
      storyTypes: storyTypes
    })
  },


  /**
   * 加载第一页数据
   */
  loadFirstPageNews: function(type) {
     this.data.curPage = 0
     this.data.storyList = []
     this.loadNews(type)
  },
  
  /**
   * 加载故事列表数据
   */
  loadNews: function (type) {
    let self = this
    requestPost({
      url: storyListUrl,
      data: {
        type: type,
        pageSize: pageSize,
        pageIndex: ++ self.data.curPage,
        success: function(res) {
          self.onLoadNewsSuccess(res)
        },
        fail: function(res) {
          //
        }
      }
    })
  },

  /**
   * 加载数据成功
   */
  onLoadNewsSuccess: function(res) {
    let storyList = this.data.storyList
    storyList = storyList.contact(res.data.data.storyList)
    this.setData({
      storyList: storyList
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
    console.log('onReachBottom')
    if(this.data.storyList.length == this.data.curPage * pageSize) {
      this.loadNews(this.data.curTypeCode)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})