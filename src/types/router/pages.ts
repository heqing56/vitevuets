
import { RouteRecordRaw} from "vue-router";
export type RouteRecordRawId ={
  meta:{
    order: number,
    title: string,
    icon?: string,
    requireAuth?: boolean,
    parentId?: string | number,
    id?:string
  }
  children?:Array<RouteRecordRawId>
} & RouteRecordRaw