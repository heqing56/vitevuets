

/**
 * 存储localStorage
 */
export type SetStore = {
    name:string;
    content?:string | object;
    type?:string;
  };

/**
 * 获取localStorage
 */
  export type GetStore = {
    name:string;
    debug?:boolean;
    type?:string
  };

  /**
 * 删除localStorage
 */
export type RemoveStore={
    name:string,
    type:string
  }

  /**
 * 获取全部localStorage
 */
 export type GetAllStore={
    type?:string
  }

  /**
 * 清空全部localStorage
 */
export type ClearStore={
    type?:string
  }