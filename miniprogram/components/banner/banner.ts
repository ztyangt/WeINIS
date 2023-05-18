// components/banner/banner.ts

import Article from "../../utils/api/article"

interface IComponentData {
  banner_article: INIS.Article[];
  current_index: number;
  isReady: boolean 
}

Component<IComponentData,any,any>({

  /**
   * 组件的属性列表
   */
  properties: {
    refresh: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    banner_article: [],
    current_index: 0,
    isReady: false
  },

  /**
   * 组件生命周期
   */
  lifetimes: {
    attached: function() {
      // 置顶文章初始化
      this.initData()
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initData: async function () {
      const res = await Article.top()
      if(res.code === 200) {
        this.setData({
          banner_article: res.data.data
        })
      }
    },

    bindchange: function(e:any) {
        this.setData({
          current_index: e.detail.current ? e.detail.current : 0
        })

    }
  },

  observers: {
    'refresh': function() {
      this.initData()
      this.setData({
        current_index: 0
      })
    }
  }
})