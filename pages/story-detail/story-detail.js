// pages/story-detail/story-detail.js
var WxParse = require('../../wxParse/wxParse.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: `<h1 class="article-title" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; font-size: 34px; margin: 0px; padding: 0px; line-height: 44px; color: rgb(34, 34, 34); font-family: &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, &quot;WenQuanYi Micro Hei&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">
    新一届广东省政府领导成员与媒体记者见面
</h1>
<p>
    <span style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; color: rgb(119, 119, 119); margin-right: 2px;">南方杂志</span>&nbsp;<span style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; color: rgb(119, 119, 119); margin-right: 2px;">2018-01-31 20:05:10</span>
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    <img src="http://p9.pstatp.com/large/5e7a0000dc9827deb841" alt="新一届广东省政府领导成员与媒体记者见面"/>
</p>
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">
    新一届广东省政府领导成员与媒体记者见面。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    1月31日上午，省十三届人大一次会议举行第三次全体会议。大会依法选出广东省人民政府省长、副省长。马兴瑞当选省长，林少春、许瑞生、李春生、黄宁生、叶贞琴、陈良贤、欧阳卫民、余艳红当选副省长。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    新一届广东省政府领导成员闭幕后在广州白云国际会议中心与媒体记者见面。马兴瑞省长介绍新一届省政府领导成员并讲话。以下为文字直播实录。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    <img src="http://p3.pstatp.com/large/5e7c0000449a14f091db" alt="新一届广东省政府领导成员与媒体记者见面"/>
</p>
<p class="pgc-img-caption" style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; padding: 0px; text-align: center; font-size: 12px; color: rgb(119, 119, 119); line-height: 16px;">
    广东省省长马兴瑞向媒体记者介绍新一届省政府领导成员并讲话。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    新闻界的朋友们，大家好！这些天来，大家对“两会”做了大量的专业生动的报道，付出了辛勤的劳动，你们辛苦了！在此，我向大家表示衷心的感谢！
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    刚刚闭幕的省十三届人大一次会议选举产生了新一届广东省人民政府领导班子，由九位同志组成，选举我担任省长。下面，我把八位副省长向大家介绍一下，他们是：林少春同志、许瑞生同志、李春生同志、黄宁生同志、叶贞琴同志、陈良贤同志、欧阳卫民同志、余艳红同志。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    前面的五位同志是上一届的副省长。其中，叶贞琴同志到广东任职不久，此前是任农业部的副部长。其他三位同志中，陈良贤同志此前任汕头市委书记；欧阳卫民同志此前任广州市委副书记；余艳红同志此前任南方医科大学的校长。在这里，我代表新一届省政府领导班子，对人大代表和全省人民的信任重托表示衷心的感谢和崇高的敬意！
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    此时此刻，我们倍感责任重大、使命光荣，党的十九大描绘了新时代中国特色社会主义事业发展的宏伟蓝图，习近平总书记先后对广东作出“三个定位、两个率先”和“四个坚持、三个支撑、两个走在前列”的重要指示批示，对广东的发展高度重视、寄予厚望。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    新时代要有新气象，新班子要有新作为，作为新一届省政府领导班子，我们感到肩上的担子沉甸甸的，感到一刻也等不起，一刻也懈怠不得。我们将不忘初心、牢记使命，切实增强“四个意识”，坚定“四个自信”，坚持三个“一以贯之”，始终在思想上、政治上、行动上同以习近平同志为核心的党中央保持高度一致，坚持以习近平新时代中国特色社会主义思想为指导，全面贯彻落实党的十九大提出的新目标、新任务、新要求，更加自觉地把广东工作放在全国发展大局中来谋划和推进，努力把广东打造成为向世界展示习近平新时代中国特色社会主义思想的重要窗口和示范区。我们将聚焦实际，创新引领，全面贯彻以新发展理念为主要内容的习近平新时代中国特色社会主义经济思想，坚持质量第一、效益优先，大力振兴实体经济，加快提高全要素的生产力，推动经济发展质量变革、效率变革、动力变革，努力在建设现代化经济体系上走在前列。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    我们将勇于担当、开拓进取，继承和弘扬广东敢为人先的改革精神，抓住粤港澳大湾区建设的重大机遇，深入推进重点领域、关键环节改革攻坚，加大营商环境改革力度，加快构建开放型经济新体制，努力当好国家参与全球竞争与合作的主力军；我们将聚焦短板，精准发力，坚持全省一盘棋的思路，深入实施乡村振兴战略、区域协调发展战略，优化珠三角、东西两翼和粤北山区发展的格局，健全城乡融合发展体制机制，提高珠三角城市群辐射带动能力，全面推进美丽宜居乡村建设，加快补齐区域性城乡发展不平衡这块最大的短板。
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    我们将牢记宗旨，一心为民，坚持把人民对美好生活的向往作为奋斗目标，扎实办好民生实事，坚决打好防范化解重大风险、精准脱贫、污染防治三大攻坚战，大力地推进生态保护和建设，切实解决好群众最关心、最直接、最现实的利益问题，努力让全省人民更多更好地共享改革发展的成果。我们将勤政廉政、转变作风，牢记空谈误国、实干兴邦，落实“马上就办、真抓实干、办就办好、滴水穿石”的工作要求，以“钉钉子精神”扎实抓好各项工作落实，认真落实中央八项规定和实施细则精神，坚决反对特权思想和特权现象，大力推进依法行政，自觉接受各方面的监督，推动形成风清气正、干事创业的良好氛围。信任就是责任，责任重于泰山，我们将在以习近平同志为核心的党中央坚强领导下，在省委的带领下，始终保持革命精神、革命斗志，始终保持时不我待、只争朝夕的干劲，与全省同志同心协力，努力创造无愧于党、无愧于人民的业绩，不辜负党和人民的信任与重托。谢谢各位！
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    统筹丨戎明迈
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    编辑丨莫群 林琳
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    校对丨华成民
</p>
<p style="-webkit-tap-highlight-color: transparent; box-sizing: border-box; margin-top: 16px; margin-bottom: 16px; padding: 0px;">
    来源丨南方杂志微信公众号
</p>
<p>
    <br/>
</p>`
  },
  
  onLoad: function(options) {
    console.log('params'+options.storyId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this

    WxParse.wxParse('article', 'html', that.data.article, that, 0)
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