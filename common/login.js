export default function login(that){
	uni.showLoading({
		title:'正在登录...',
		mask:true
	})
	let userinfo=uni.getStorageSync('userinfo')
	if(userinfo){
		that.globalData.userinfo=userinfo
		that.globalData.isLogin=true
		uni.hideLoading()
		return
	}else{
		uni.login({
			provider:'weixin',
			success: ({code}) => {
				uniCloud.callFunction({
					name:'login',
					data:{code}
				}).then(({result})=>{
					that.globalData.userinfo=result
					that.globalData.isLogin=true
					uni.setStorageSync('userinfo',result)
					uni.hideLoading()
				})
			}
		})
	}
}