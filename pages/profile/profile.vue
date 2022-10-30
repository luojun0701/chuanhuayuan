<template>
	<view class="profile">
		<view class="avatar" @click="chooseAvatar">
			<cu-image width="180rpx" height="180rpx" radius="50%" :src="userinfo?.avatarUrl"></cu-image>
			<view class="icon">
				<cu-icon name="camera" size="20px" color="#fff"></cu-icon>
			</view>
		</view>
		<view class="form-item">
			<text>昵称:</text>
			<cu-input placeholder="" v-model:value="userinfo.nickName" border="bottom"></cu-input>
		</view>
		<view class="btn">
			<cu-button text="保存" @click="onSubmit"></cu-button>
		</view>
	</view>
</template>
 
<script setup>
	import { onMounted, ref } from "vue";
	import {updateDb} from '../../common/db.js'
	const userinfo=ref(null)
	onMounted(()=>{
		userinfo.value=uni.getStorageSync('userinfo')
	})
	const onSubmit=()=>{
		let parameter={
			nickName:userinfo.value.nickName,
			avatarUrl:userinfo.value.avatarUrl
		}
		if(parameter.nickName==''){
			uni.showToast({
				title:'昵称不能为空',
				icon:'none'
			})
			return
		}
		 updateDb('users',`_id=='${userinfo.value._id}'`,parameter).then(res=>{
			 console.log(res)
		 })
	}
	const chooseAvatar=()=>{
		uni.chooseMedia({
			mediaType:['image'],
			success:(res)=>{
				console.log(res)
			}
		})
	}
</script>

<style lang="scss">
	.profile{
		display: flex;
		flex-direction: column;
		align-items: center;
		.avatar{
			margin-top: 80rpx;
			position: relative;
			.icon{
				width: 66rpx;
				height: 66rpx;
				border-radius: 50%;
				background-color: $theme-color;
				text-align: center;
				line-height: 66rpx;
				position: absolute;
				bottom: 0;
				right: 0;
			}
		}
	    .form-item{
			width:80%;
			height: 200rpx;
			display: flex;
			align-items: center;
		}
		.btn{
			width: 80%;
			position: absolute;
			bottom: 300rpx;
		}
	}
	
</style>
