// components/postlist/postlist.ts

import Sort from "../../utils/api/sort"
import Article from "../../utils/api/article"

interface IComponentData {
  page: number;
  allpage: number;
  post_list: INIS.Article[];
}
Component<IComponentData,any,any>({
  /**
   * 组件的属性列表
   */
  properties: {
    sortId: {
      type: Number,
      value: 0
    },
    refresh: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    page: 1,
    allpage: 1,
    post_list: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async getArticle() {
      const storage_data = wx.getStorageSync(`sort-${this.properties.sortId}`)
      if(storage_data){
        this.setData({
          post_list: storage_data
        })
      }else{
        if(this.properties.sortId === 0) {
          const res = await Article.all(this.data.page)
          if(res.code === 200) {
            this.setData({
              post_list: res.data.data
            })
            wx.setStorage({
              key:`sort-${this.properties.sortId}`,
              data:res.data.data
            })
          }
        }else{
          const res = await Sort.article(this.properties.sortId,this.data.page)
          if(res.code === 200) {
            this.setData({
              post_list: res.data.expand.data
            })
            wx.setStorage({
              key:`sort-${this.properties.sortId}`,
              data:res.data.expand.data
            })
          }
        }
      }
    },
  },
  
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function() {
      this.getArticle()
    },
  },

  observers: {
    'sortId,refresh': function() {
      this.getArticle()
    }
  }
})
