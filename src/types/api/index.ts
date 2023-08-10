export interface Pages {
	currentPage: number,
	pageSize: number,
	total: number,
 }

 export interface LoginData {
	name:string
}

export interface Res<T=string> {
	code: number,
	data:T,
	message:string
  }
 export interface List{
	list:ItemList[],
	total:number,
	pageSize:number,
	currentPage:number
  }
 interface ItemList{
	name: string;
	age: string;
	sex: boolean;
	addrName: string;
	addr: string[];
	date: string;
	desc: string;
	id:string
  }
export interface UserInfo{
	token:string,
	userInfo:object
}
