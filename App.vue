<script>
	import login from '/common/login.js'
	export default {
		onLaunch: function() {
			//登录
			login(this)
			// #ifdef MP
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {});
			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，确认重启应用？',
					showCancel: false,
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});
			}); 
			
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
				uni.showModal({ 
					title: '更新提示',
					content: '新版本更新失败,确认重试',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				}); 
			})
			// #endif
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		},
		globalData:{
			isLogin:false,
			userinfo:null
		}
	}
</script>

<style>
	page{
		background-color: #f8f8f8;
	}
	view,text{
		box-sizing: border-box;
	}
	.margin-top-min{
		margin-top: 30rpx !important;
	}
	.margin-top-max{
		margin-top: 80rpx !important; 
	}
</style>
