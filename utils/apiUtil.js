// 检测是否微信登录过期
function isSessionInvalid() {
  wx.checkSession({
    success: function () {
      return false
    },
    fail: function () {
      console.log('登录过期')
      return true
    }
  })
}

// post 网络请求
function requestPost(obj) {
  if (!obj) {
    return
  }
  if(isSessionInvalid) {
    wxPostQuery(obj)
  }else {
    wx.login({
      success: function() {
        wxPostQuery(obj)
        console.log('微信登录成功')
      },
    })
  }
}

// post 方法 
function wxPostQuery(obj) {
  wx.request({
    url: obj.url,
    method: 'POST',
    header: {
      // token: wx.getStorageSync("userInfo").token || '',
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: obj.data,
    success: function(res) {
      console.log('request-success')
      console.log(res.data)
      typeof obj.success == 'function' && obj.success(res)
    },
    fail: function(res) {
      console.log('request-fail')
      console.log(res.data)
      typeof obj.fail == 'function' && obj.fail(res)
    }
  })
}

module.exports = {
  requestPost: requestPost
}