import { httpRequest } from "../request"

/**
 * 用户类API
 */
export default class UserApi {
  /**
   * 传统登录
   * @param account 用户名
   * @param password 密码
   */
  static login(account: string, password: string) {
    return httpRequest.post<INIS.Login>("users/login", { account, password })
  }

  /**
   * 获取全部用户
   * @param page 分页
   * @param limit 限制条目
   */
  static all(page: number, limit: number) {
    return httpRequest.get<INIS.UserList>("users/all", { page, limit })
  }

  /**
   * 获取单个用户
   * @param id 用户ID
   */
  static one (id: number) {
    return httpRequest.get<INIS.User>("users/one", { id })
  }
}

