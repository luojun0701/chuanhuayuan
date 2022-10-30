<template>
	<cu-navbar bgColor="transparent" :placeholder="false" leftIcon="">
		
	</cu-navbar>
	<view class="me">
		<view class="me-top">
			<view class="me-top-bg">
				<image src="../../static/me/bg.png" class="me-top-bg-img"></image>
			</view>
			<view class="me-top-info" @click="login">
				<image
					:src="userinfo?.avatarUrl"
					class="me-top-info-avatar"></image>
				<view class="me-top-info-box">
					<view class="nickname">
						{{userinfo?.nickName}}
					</view>
					<view class="class">
						{{grade}}
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="me-count card">
			
		</view> -->
		<cu-card :customStyle="{top:'48rpx'}" :bodyStyle="{display:'flex',alignItems:'center',justifyContent: 'space-around'}">
			<view class="count-item">
				<view class="num">
					0
				</view>
				<view class="title">
					动态
				</view>
			</view>
			<view class="count-item">
				<view class="num">
					0
				</view>
				<view class="title">
					收藏
				</view>
			</view>
			<view class="count-item">
				<view class="num">
					0
				</view>
				<view class="title">
					任务
				</view>
			</view>
			<view class="count-item">
				<view class="num">
					0
				</view>
				<view class="title">
					钱包
				</view>
			</view>
		</cu-card>
<!-- 		<cu-card :customStyle="{top:'68rpx'}" title="任务管理" :right="{title:'全部',icon:'fanhui',rotate:180,color:'#00000080',size:'16px'}">
			ssssssssssss
		</cu-card> -->
		<cu-card :customStyle="{top:'88rpx'}" title="其他服务" :right="{title:'网络常用工具'}">
			
		</cu-card>
	</view>
	<cu-tabbar></cu-tabbar>
</template>

<script setup>
	import {onLoad,onShow} from '@dcloudio/uni-app'
	import { ref} from "vue";
	const isLogin=ref(null)
	const userinfo=ref(null)
	const grade=ref('')
	onLoad(() => {
		uni.hideTabBar()
	})
	onShow(()=>{
		let {isLogin:tmpIsLogin,userinfo:tmpUserInfo}=getApp().globalData
		grade.value=tmpUserInfo.account?(tmpUserInfo.account.slice(0,4)+'级'):'游客'
		userinfo.value=tmpUserInfo
	    isLogin.value=tmpIsLogin
	})
	const login = () => {
		let url=null
		userinfo.value.account?url='/pages/profile/profile':url= '/pages/login/login'
		uni.navigateTo({
			url
		})
	}
	// const userClass=()=>{
	// 	console.log(user.userinfo.account)
	// 	// return 
	// }
</script>

<style lang="scss">
	.me-top {
		&-bg {
			width: 100%;
			height: 450rpx;
			z-index: -1;

			&-img {
				width: 100%;
				height: 100%;
			}
		}

		&-info {
			margin: 0 30rpx;
			margin-top: -230rpx;
			z-index: 1;
			display: flex;
			align-items: center;
			color: #ffffff;

			&-avatar {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				margin-right: 25rpx;
			}

			.nickname {
				font-size: 38rpx;
				margin-bottom: 7rpx;
			}
		}

	}
	.count-item {
		text-align: center;
		.num {
			font-weight: bold;
		}

		.title {
			color: #00000080;
			margin-top: 8rpx;
		}
	}

	.me-task {

		&-header,
		.more {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.more {
				color: #00000080;
			}

			.title {
				font-weight: bold;
			}
		}
	}
</style>
