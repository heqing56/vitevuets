/**表单字段 */
export interface RuleForm {
  name: string;
  age: string;
  sex: boolean;
  addrName: string;
  addr: string[];
  date: string;
  desc: string;
  id?:string
}

/**组件值 */
export interface Props {
  rows?: {};
  types: "Add" | "Edit" | "Detail";
}

/**城市选择树 */
export interface Arrtype {
  code: string;
  name: string;
  children: Arrtype[];
}

export enum Consttype {
  Add = "新增",
  Edit = "修改",
  Detail = "查看",
}

export enum Typestype {
  Add = "Add",
  Detail = "Detail",
  Edit = "Edit",
}

/**弹框信息 */
export interface AddOrEditType {
  rows?: RuleForms;
  types: Typestype;
  index: number;
  showDialog: boolean;
}
interface RuleForms {
    name?: string;
    age?: string;
    sex?: boolean;
    addrName?: string;
    addr?: string[];
    date?: string;
    desc?: string;
  }

/**分页信息 */
export interface PagesType{
    currentPage:number,
    pageSize: number,
    total:number,
  }


 export interface ResType {
    code: number,
    message: string
    data: {
      list: ListType[],
      currentPage: number,
      pageSize: number,
      total: number,
    }
  }
 export interface ListType {
    addr: string[],
    addrName: string,
    age: number,
    date: string,
    id: string,
    name: string,
    sex: boolean
  }