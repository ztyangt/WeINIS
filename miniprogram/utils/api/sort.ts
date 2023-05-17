import { httpRequest } from "../request"

/**
 * 文章分类API
 */
export default class SortApi {
  /**
   * 获取全部分类
   * @param page 分页
   * @param limit 每页数量
   */
  static all(page: number = 1, limit: number = 0) {
    return httpRequest.get<INIS.ArticleSortList>("article-sort/all", { page, limit })
  }

  /**
   * 获取置顶分类
   * @param id 分类ID
   */
  static one(id: number) {
    return httpRequest.get<INIS.ArticleSort>('article-sort/one', { id })
  }

  /**
   * 获取分类下的文章
   * @param id 分类ID
   * @param page 分页
   * @param limit 每页文章数
   */
  static article(id:number, page: number, limit: number = 10) {
    return httpRequest.get<INIS.SortArticle>('article-sort/article', { id, page, limit })
  }

}

