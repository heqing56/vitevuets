

import {
	request
} from '../request.ts'
 import { LoginData } from '@/types/api/index.ts'

//  登录
export const login =( data:LoginData) => {
	return request({
		url: "/login",//对应mock中的接口
		method: 'post',//对应mock中的请求的type
		data
	})
}
//  退出
export const logout = () => {
	return request({
		url: "/logout",//对应mock中的接口
		method: 'post',//对应mock中的请求的type
	})
}
