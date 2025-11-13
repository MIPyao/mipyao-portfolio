// 全局 API 类型声明
// 这个文件不包含 import/export，所以其中的 declare 会创建全局类型

// 基础接口
declare interface index {
  status: boolean;
}

// 数据库类型
declare interface accountInfo {
  userId: string;
  username: string;
  password: string;
  createTime: Date;
}

declare interface comment {
  username: string;
  comment: string;
  device: string;
  like: number;
  addTime: Date;
}

// Auth API 类型
declare interface loginPost extends index {
  data: {
    accountInfo?: accountInfo;
    message: string;
    token?: string | undefined;
  };
}

declare interface registerPost extends index {
  data: {
    message: string;
  };
}

declare interface logoutDelete extends index {
  data: {
    message: string;
  };
}

// Comment API 类型
declare interface addCommentPost extends index {
  data: {
    message: string;
  };
}

declare interface delCommentDelete extends index {
  data: {
    message: string;
  };
}

declare interface getCommentGet extends index {
  data: {
    comments: comment[];
  };
}

declare interface likePut extends index {
  data: {
    message: string;
  };
}

// Form API 类型
declare interface formSendGet extends index {
  data: {
    message: string;
  };
}

// Repo API 类型
declare interface repoInfoGet extends index {
  data: any;
}

declare interface repoSearchByNameGet extends index {
  data: any;
}

declare interface repoSearchByTopicsGet extends index {
  data: any;
}

declare interface allTopicsGet extends index {
  data: any;
}

declare interface repoContributorsGet extends index {
  data: any;
}

declare interface repoLanguagesGet extends index {
  data: any;
}

// User API 类型
declare interface githubUserInfoGet extends index {
  data: {
    status: number;
    data: {
      avatar_url: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
}

declare interface userInfoGet extends index {
  data: accountInfo;
}

// Error 类型
declare interface errorType extends index {
  data: {
    message: string | any;
  };
}
