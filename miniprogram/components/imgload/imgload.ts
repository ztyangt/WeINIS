
// components/imgload/imgload.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataUrl: {
      type: String,
    },
    mode: {
      type: String,
      value: "widthFix"
    },
    showMenu: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lazy_img: "../../images/svg/lazy.svg",
    is_loaded: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _imgLoaded: function() {
      this.setData({
        is_loaded: true
      })
    }
  }
})
