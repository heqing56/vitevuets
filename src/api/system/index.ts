


import {
	request
} from '../request.ts'
import { Pages } from '@/types/api/index.ts'

//  登录
export const getAdminList = (data:Pages) => {
	return request({
		url: "/getAdminList",//对应mock中的接口
		method: 'get',//对应mock中的请求的type
		data
	})
}
