// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()
import Sort from "../../utils/api/sort"
import { clearStorage } from "../../utils/util"

interface IComponentData {
  sort_list: INIS.ArticleSort[];
  current_index: number;
  refresh: boolean;
}
Page<IComponentData,any>({
  data: {
    sort_list: [],
    current_index: -1,
    refresh: false,
  },

  initData: async function () {
    const res = await Sort.all()
    if(res.code === 200) {
      this.setData({
        sort_list: res.data.data
      })
    }
  },

  handleMenu(event:any) {
    this.setData({
      current_index: event.detail.index - 1
    })
  },

  onLoad() {
    this.initData()
  },

  onUnload() {
    clearStorage('sort')
  },

    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    clearStorage('sort')
    this.setData({
      refresh: !this.data.refresh
    })
    this.initData();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

})
