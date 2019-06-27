// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad(){
    // console.log(this.date.city)
    let that = this
    wx.request({
      
      url: 'https://www.easy-mock.com/mock/5ca4584bc4e9a575b66b62e4/example/1234',
      success(res) {
        console.log(res)
        that.setData({
          items:res.data.data.movieList
        })
      }
      
    })
  },

  onPullDownRefresh(){
  
  },
  onReachBottom(){
  console.log(8);
  }
})