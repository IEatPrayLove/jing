import config from '../config.js'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
 * 获取当前时间戳
 */
const getTimestamp = function(callback) {
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  return callback(timestamp)
}
/**
 * http请求
 * action 方法名
 * data  传输数据
 * Method 请求方式 GET POST
 */
const Requests = function (action,data,Method='GET',event) {
	var headers = {
		'content-type': 'application/json' // 默认值
	}
	if (Method == 'POST') {
		if(action!='Assistant/add/' && action != 'Assistant/update/'){
			headers = {
				'content-type': 'application/x-www-form-urlencoded' // 默认值
			}
		}
	}
	uni.request({
		url: config.requestUrl + action,
		method:Method,
		header:headers,
		data: data,
		success(res) {
			if (res.data.status == 0) {
				return event(res.data);
			}else if (res.data.status == 10000 || res.data.status == 10003 || res.data.status == 10001){
				uni.setStorageSync('token', '')
				uni.showToast({
					title: res.data.msg,
					icon: 'none'
				})
				setTimeout(function () {
					uni.switchTab({
						url: '/pages/mine/mine'
					})
				}, 1500)
			}else {
				uni.showToast({
					title: res.data.msg,
					icon:'none'
				})
			}
		},fail() {
			uni.showToast({
			  title: '网络异常',
			  icon: 'none',
			  duration: 2000
			})
		}
	})
}
/**
 * 
 * 判断用户token是否存在 是否到期 不存在或者 到期就更新 否则无视
 */
const updateUserToken = function(event){
	//判断token是否到期 或者token是否存在
  if (uni.getStorageSync('token').expire_in < getTimestamp(function(e) {
	  return e
	}) || uni.getStorageSync('token') == '') {
	uni.login({
	  success(res) {
		if (res.code) {
		  //发起网络请求
		  Requests('Login/login',{code: res.code,oauth: 'wechat'},'POST', function(es) {
			var e = es.result
			if(es.msg != 'success'){
				uni.showToast({
					title: es.msg,
					icon: 'none'
				})
			}
			Requests('User/getUserInfo',{token:e.users_token},'GET',function(resss){
				var ee = resss.result
				if(resss.msg != 'success'){
					uni.showToast({
						title: es.msg,
						icon: 'none'
					})
				}
				// 如果有用户信息返回 则缓存起来
				if (ee.user_info) {
				  if (ee.user_info.gender == 1) {
					ee.user_info.sexs = '男'
				  } else if (ee.user_info.gender == 2) {
					ee.user_info.sexs = '女'
				  }
				  if(ee.user_info.type>2){
					  Requests('User/getVipInfo',{token:e.users_token},'GET',function(vips){
						  if(vips.msg != 'success'){
						  	uni.showToast({
						  		title: es.msg,
						  		icon: 'none'
						  	})
						  }
						  uni.setStorageSync('vip_info', vips.result)
					  })
				  }
				  uni.setStorageSync('userInfo', ee.user_info)
				}
			})
			uni.setStorageSync('unionid', e.unionid)
			uni.setStorageSync('token', {
			  token: e.users_token,
			  expire_in: Number(e.expire_in) - Number(60) + Number(getTimestamp(function(e) {
				return e
			  }))
			})
		  })
		}
	  }
	})
  }else{
	  //更新会员信息，防止信息修改后 系统缓存没更新过来
	  Requests('User/getUserInfo',{token: uni.getStorageSync('token').token},'GET', function(es) {
	  			var e = es.result
	  			if(es.msg != 'success'){
	  				uni.showToast({
	  					title: es.msg,
	  					icon: 'none'
	  				})
	  			}
				if (e.gender == 1) {
					e.sexs = '男'
				} else if (e.gender == 2) {
					e.sexs = '女'
				}
				uni.setStorageSync('userInfo', e)
	  })
  }
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
export default {
	formatTime,
	Requests,
	updateUserToken,
	getTimestamp
}