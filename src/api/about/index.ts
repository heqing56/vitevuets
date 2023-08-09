import {
	request
} from '../request.ts'
 
//  文章
export const des = () => {
	return request({
		url: "/des",//对应mock中的接口
		method: 'get',//对应mock中的请求的type
	})
}

