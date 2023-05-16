// app.ts

import User from "./utils/api/user"

App<IAppOption>({
  globalData: {},
  async onLaunch() {
    const res = await User.one(2)
    console.log(res.data.nickname)
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
})