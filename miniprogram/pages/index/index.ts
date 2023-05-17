// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()
import Sort from "../../utils/api/sort"

interface IComponentData {
  sort_list: INIS.ArticleSort[];
  current_index: number;
}
Page<IComponentData,any>({
  data: {
    sort_list: [],
    current_index: 0
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
      current_index: event.detail.index === 0 ? 0 : event.detail.index - 1
    })
  },

  onLoad() {
    this.initData()
  }
})
