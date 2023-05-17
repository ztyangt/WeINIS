// components/postlist/postlist.ts

import Sort from "../../utils/api/sort"

interface IComponentData {
  page: number;
  allpage: number;
  post_list: INIS.Article[]
}
Component<IComponentData,any,any>({
  /**
   * 组件的属性列表
   */
  properties: {
    sortId: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    page: 1,
    allpage: 1,
    post_list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async getArticle() {
      const res = await Sort.article(this.properties.sortId,this.data.page)
      console.log(res.data.expand.data)
      if(res.code === 200) {
        this.setData({
          post_list: res.data.expand.data
        })
      }
    }
  },
  
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function() {
      // console.log(this.properties.sortId)
      this.getArticle()
    },
  },

  observers: {
    'sortId': function(sortId) {
      this.getArticle()
    }
  }
})
