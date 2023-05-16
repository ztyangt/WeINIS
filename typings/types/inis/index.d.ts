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

  interface UserAll extends INIS.InisList<INIS.UserOpt> {}
}