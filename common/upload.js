function upload(target) {
	if (typeof(target) == 'string') {
		target = [target]
	}
	return new Promise((resolve) => {
		uni.showLoading({
			title: '上传中'
		})
		let promiseAll = []
		target.forEach((item, index) => {
			let promise = new Promise((resolve, reject) => {
				let cloudPath = `lbotao-${parseInt(new Date().getTime()/1000)}`
				let result = uniCloud.uploadFile({
					filePath: item,
					cloudPath,
				})
				resolve(result)
			})
			promiseAll.push(promise)
		})
		Promise.all(promiseAll).then(res => {
			let result = []
			res.forEach(item => {
				result.push(item.fileID)
			})
			uni.hideLoading()
			resolve(result)
		})
	})
}
export default upload
