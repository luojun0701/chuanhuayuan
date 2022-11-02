// 手机号处理
export function phoneNumber(phoneNumber) {
	let regx = /(\d{3})\d*(\d{4})/
	return phoneNumber.replace(regx, '$1****$2')
}
//获取节点信息
export function getRect(selector, all, that) {
	return new Promise((resolve, reject) => {
		const query = uni.createSelectorQuery().in(that)
		let type = all ? query.selectAll(selector) : query.select(selector)
		type.boundingClientRect(res => {
			if (!res) return reject('找不到元素');
			resolve(res);
		}).exec()
	})
}
//筛选数据
export function filterData(data, key, val) {
	return data.filter(item => item[key] != val)
}
//格式化时间
export function formatTime(oldTime) {
	if (!oldTime) return
	let result = ''
	let curTime = new Date().getTime()
	let second = parseInt((curTime - oldTime) / 1000) //秒
	let min = second / 60 //分钟
	let hour = min / 60 //小时
	let day = hour / 24
	let week = day / 7
	let month = day / 30
	let year = day / 360
	if (year > 1)
		result = parseInt(year) + '年前'
	else if (month > 1)
		result = parseInt(month) + '月前'
	else if (week > 1)
		result = parseInt(week) + '周前'
	else if (day > 1)
		result = parseInt(day) + '天前'
	else if (hour > 1)
		result = parseInt(hour) + '小时前'
	else if (min > 1)
		result = parseInt(min) + '分钟前'
	else
		result = '刚刚'
	return result
}
//节流
export function throttle(fn,delay=2000) {
	let timeOut=null
	return function() {
		if (!timeOut) {
			fn.apply(this)
			timeOut = setTimeout(() => {
				timeOut=null
			}, delay)
		}
	}
}
