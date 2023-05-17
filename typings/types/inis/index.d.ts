declare namespace INIS {
  interface User {
    id: number ;
    account: string;
    nickname: string;
    sex: string;
    email: string | null;
    phone: string | null;
    head_img: string | null;
    description: string | null;
    status: number;
    level: string;
    address_url: string | null;
    opt: INIS.UserOpt;
    expand: any;
    longtext: string | null;
    create_time: string;
    update_time: string;
    last_login_time: number;
  }

  interface UserOpt {
    login_auth: string;
    qq_pay: string;
    alipay: string;
    wechat_pay: string;
  }

  interface InisList<T> {
    page: number,
    count: number,
    data: T[]
  }

  interface Login {
    "login-token": string;
    user: INIS.User;
  }

  

  interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    is_top: number;
    is_show: number;
    img_src: string | null;
    views: number;
    font_count: number;
    sort_id: string | null;
    tag_id: string | null;
    users_id: number;
    expand: ArticleExpand;
    opt: ArticleOpt;
    longtext: string | null;
    delete_time: string | null;
    create_time: string;
    update_time: string;
    last_update_time: string;
  }

  interface ArticleOpt {
    auth: string;
    comments: {
      show: string;
      allow: string;
    }
  }

  interface ArticleExpand {
    author: ArticleAuthor;
    tag: ArticleTag[];
    sort: ArticleSort[];
    img_src: string | null;
    images: ArticleImage[];
    comments: ArticleComment;
  }

  interface ArticleAuthor {
    nickname: string;
    head_img: string | null;
    email: string | null;
    address_url: string | null;
    description: string | null;
    pay: any;
  }

  interface ArticleTag {
    id: number;
    name: string;
    color: number;
  }

  interface ArticleSort {
    id: number;
    name: string;
  }

  interface ArticleImage {
    src: string;
    alt: string;
  }

  interface ArticleComment {
    show: boolean;
    allow: boolean;
    count: number;
  }

  
  interface ArticleNext {
    prev: INIS.Article | null;
    next: INIS.Article | null;
  }

  interface ArticleSort {
    is: number;
    name: string;
    description: string;
    is_show: number;
    expand: {
      count: number;
    };
    opt: any;
    longtext: string | null;
    create_time: string;
    update_time: string;
  }


  interface UserList extends INIS.InisList<INIS.User> {}
  interface ArticleList extends INIS.InisList<INIS.Article> {}
  interface ArticleSortList extends INIS.InisList<INIS.ArticleSort> {}
  interface SortArticle extends ArticleSort {
    expand: {
      page: number;
      count: number;
      data: INIS.Article[];
    };
  }
}