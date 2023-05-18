import { httpRequest } from "../request"

/**
 * 文章类API
 */
export default class ArticleApi {
  /**
   * 获取置顶文章
   * @param id 文章id
   * @param mode 渲染模式(html,md)
   * @param password 文章密码
   */
  static one(id: number, mode: string = 'html', password?: string) {
    return httpRequest.get<INIS.Article>("article/one", { id, mode, password })
  }

  /**
   * 获取全部文章
   * @param page 分页
   * @param limit 限制条目
   * @param mode 渲染模式(html,md)
   */
  static all(page: number = 1, limit: number = 10, mode: string = 'html', sortId?: number) {
    return httpRequest.get<INIS.ArticleList>("article/sql", { 
      page, 
      limit, 
      mode, 
      where: sortId ? `is_show=1 and sort_id like '%|${sortId}|%'` : "is_show=1" 
    })
  }

  /**
   * 获取上下篇文章
   * @param id 文章ID
   */
  static next(id:number) {
    return httpRequest.get<INIS.ArticleNext>("article/next", { id })
  }

  /**
   * 获取置顶文章
   */
  static top() {
    return httpRequest.get<INIS.ArticleList>("article/sql", { 'where': "is_top=1 and is_show=1" })
  }
}

