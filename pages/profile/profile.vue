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
	import upload from '../../common/upload.js'
	import { onMounted, ref } from "vue";
	import {updateDb} from '../../common/db.js'
	const app=getApp()
	const userinfo=ref(null)
	onMounted(()=>{
		userinfo.value=uni.getStorageSync('userinfo')
	})
	const onSubmit= async()=>{
		let parameter={
			nickName:userinfo.value.nickName,
			avatarUrl:userinfo.value.avatarUrl
		}
		let reg=/(http):\/\/([\w.]+\/?)\S*/　
		if(reg.test(parameter.avatarUrl)){
			parameter.avatarUrl=await upload(parameter.avatarUrl)
		}
		parameter.avatarUrl=parameter.avatarUrl[0]
		console.log(parameter.avatarUrl)
		if(parameter.nickName==''){
			uni.showToast({
				title:'昵称不能为空',
				icon:'none'
			})
			return
		}
		// 根据链接判断是否本地临时文件
		// uniCloud.uploadFile({
		// 	filePath:item,
		// 	cloudPath,
		// })
		 updateDb('users',`_id=='${userinfo.value._id}'`,parameter).then(({result})=>{
			 let {errCode,errMsg}=result
			 uni.showToast({
			 	title:errCode==0?'修改成功':errMsg,
			 	icon:'none'
			 })
			 if(errCode==0){//成功
				 let tmpUserinfo=app.globalData.userinfo
				 tmpUserinfo.avatarUrl=parameter.avatarUrl
				 tmpUserinfo.nickName=parameter.nickName
				 app.globalData.userinfo=tmpUserinfo
				 //更新本地用户信息
				 uni.setStorageSync('userinfo',tmpUserinfo)
				 setTimeout(()=>{
				 	uni.navigateBack()
				 },1200)
			 }
		 })
	}
	const chooseAvatar=()=>{
		uni.chooseMedia({
			count:1,
			mediaType:['image'],
			success:(res)=>{
				userinfo.value.avatarUrl=res.tempFiles[0].tempFilePath
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
