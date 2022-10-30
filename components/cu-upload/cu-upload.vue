<template>
	<view class="cu-upload">
		<block v-for="(item,index) in files">
			<view class="cu-upload-item" :style="(index+1)%3==0?'margin:0 0 15rpx 0':''">
				<cu-image :src="item" width="220rpx" height="220rpx" radius="4rpx" :previewSrcList="files" :initialIndex="index">
					
				</cu-image>
				<view class="cu-upload-item-delete" @click="deleteImg(index)"> 
					<view class="cu-upload-item-delete-icon">
						<cu-icon name="shanchu" color="#fff" size="10px"></cu-icon>
					</view>
				</view>
			</view>
		</block> 
		<view class="cu-upload-box" @click="chooseImage" v-if="files.length<maxCount">
			<cu-icon name="camera" color="rgb(211, 212, 214)"></cu-icon>
		</view>
	</view> 
</template>

<script setup>
import { computed, ref } from "vue";
	const props=defineProps({
		maxCount:{
			type:[Number,String],
			default:9
		},
		
	})
	const files=ref([])
	const errIndex=ref([])
	const upload= ()=>{
		return new Promise((resolve)=>{
			uni.showLoading({
				title:'上传中'
			})
			let promiseAll=[]
			files.value.forEach((item,index)=>{
				let promise=new Promise((resolve,reject)=>{
					let result=uniCloud.uploadFile({
						filePath:item,
						cloudPath:`lbotao-${new Date().getTime()/1000}`,
					})
					resolve(result)
				})
				promiseAll.push(promise)
			})
			Promise.all(promiseAll).then(res=>{
				let result=[]
				res.forEach(item=>{
					result.push(item.fileID)
				})
				uni.hideLoading()
				resolve(result)
			})
		})
	}
	const chooseImage=()=>{
		uni.chooseMedia({
			count:props.maxCount,
			mediaType:['image'],
			sizeType:['compressed'],
			success:({tempFiles})=>{
				if((files.value.length+tempFiles.length)>props.maxCount)
				uni.showToast({
					title:`图片总数不能超过${props.maxCount}张`,
					icon:'none'
				})
				else
				files.value=files.value.concat(tempFiles.map(item=>item.tempFilePath))
			}
		})
	}
	const deleteImg=(index)=>{
		files.value.splice(index,1)
	}
	defineExpose({upload})
</script>

<style lang="scss" >
	$upload-width:220rpx;
	$upload-height:220rpx;
	$upload-margin:0 15rpx 15px 0;
	$upload-bgColor: #f4f5f7;
	$upload-radius:4rpx;
	.cu-upload{
		display: flex;
		flex-wrap: wrap;
	}
	.cu-upload-box{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: $upload-width;
		height: $upload-height;
		background-color:$upload-bgColor;
		border-radius: $upload-radius;
		margin-bottom: 15rpx;
	}
	.cu-upload-item{
		position: relative;
		margin: $upload-margin;
		&-delete{
			position: absolute;
			right: 0;
			top: 0;
			width: 14px;
			height: 14px;
			background: #373737;
			border-bottom-left-radius: 100px;
			z-index: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			&-icon{
				position: relative;
				bottom: 4px;
				left: 2px;
			}
		}
	}
</style>