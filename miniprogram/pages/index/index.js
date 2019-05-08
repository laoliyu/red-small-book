Page({
  data: {
    tags: [
      "推荐",
      "附近",
      "视频",
      "时尚",
      "护肤",
      "彩妆",
      "美食",
      "旅行",
      "影视",
      "读书",
      "明星",
      "健身",
      "家居",
      "宠物",
      "音乐",
      "婚礼",
      "母婴",
      "萌娃",
      "数码",
      "汽车",
      "男士穿搭"

    ],
    left: 0,
  },
  onLoad() {
  },
  // 导航条鼠标跟随
  fnclick(ev) {
    this.setData({
      left: ev.target.offsetLeft
    })

  },


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










