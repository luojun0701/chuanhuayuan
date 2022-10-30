<template>
	<cu-navbar bgColor="transparent" :placeholder="false" leftIconColor="#ffffff">
	</cu-navbar>
	<view class="login-top">
		<view class="login-top-bg">
			<image src="../../static/login/login_top.jpg" mode=""></image>
		</view>
		<view class="login-top-bg2">
			<image src="../../static/login/login_top2.png" mode=""></image>
		</view>
	</view>
	<cu-card isShadow :customStyle="{top:'-166rpx'}" :bodyStyle="{ padding:'60rpx 40rpx'}">
		<cu-input placeholder="请输入学号" v-model:value="form.username" type="number"></cu-input>
		<view class="margin-top-min">
			<cu-input placeholder="请输入密码" v-model:value="form.password" type="text"></cu-input>
		</view>
		<view class="margin-top-max">
			<cu-button color="linear-gradient(to right, #0acffe 0%, #495aff80 100%)" @click="login()"></cu-button>
		</view>
	</cu-card>
	<view class="tips">
		<p>温馨提示</p>
		本次模拟登录仅验证用户是否为川华院学子，不会爬取或者保存用户隐私信息。
	</view>
	<view class="login-bottom">
		<image src="../../static/login/login_bottom_bg.jpg" mode=""></image>
	</view>
</template>

<script setup>
	import {reactive} from 'vue'
	const app=getApp()
	const form=reactive({
		username:'',
		password:'',
		openid:app.globalData.userinfo.openid
	})
	const login=()=>{
		uni.showLoading({
			title:'验证账户...',
			mask:true
		})
		uniCloud.callFunction({
			name:'authentication',
			data:form
		}).then(({result})=>{
			let {msg,status}=result
			uni.showToast({
				title:msg,
				icon:'none',
				mask:true
			})
			//更新本地储存信息
			if(status==200){
				let userinfo=app.globalData.userinfo
				userinfo.account=form.username
				userinfo.password=form.password
				app.globalData.userinfo=userinfo
				//更新本地用户信息
				uni.setStorageSync('userinfo',userinfo)
				setTimeout(()=>{
					uni.navigateBack()
				},1200)
			}
		})
	}
</script>

<style lang="scss">
	page{
		background-color: #fff;
	}
	.login-top{
		width: 100%;
		position: relative;
		height: 652rpx;
		&-bg{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
		&-bg2{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			image{
				position: fixed;
				width: 380rpx;
				height:380rpx;
				margin: 40px 25% 0 25%;
				animation: move 1.8s infinite alternate;
			}
		}
	}
	.tips{
		width:660rpx;
		margin: auto;
		text-align: center;
		color: #00000090;
	}
	.login-bottom{
		width: 100%;
		height: 289rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: -1;
		image{
			width: 100%;
			height: 100%;
		}
	}
	@keyframes move{
		10%{
			top: 0px;
			left: 0px;
		}
		100%{
			top: -20px;
			left: 20px;
		}
	}
</style>
