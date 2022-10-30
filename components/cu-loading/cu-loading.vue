<template>
	<view class="cu-loading">
		<view class="cu-loading-line" v-if="line"></view>
		<view v-if="showCircle" class="cu-loading-circle"></view>
		<view class="cu-loading-text" :style="!showCircle?'margin:0 30rpx':''">
			{{loadingText}}
		</view>
		<view class="cu-loading-line" v-if="line"></view>
	</view>
</template>

<script setup>
	const props=defineProps({
		showCircle:{
			type:Boolean,
			default:true
		},
		loadingText:{
			type:String,
			default:'正在加载...'
		},
		line:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss">
	.cu-loading{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 30rpx 0;
		&-circle{
			width: 48rpx;
			height: 48rpx;
			border-radius: 50%;
			border: 4rpx solid rgb(241, 241, 241);
			border-top-color: rgb(183, 183, 183);
			animation: rotate 1.2s linear infinite;
		}
		&-text{
			font-size: 28rpx;
			color: rgb(96, 98, 102);
			margin-left: 16rpx;
		}
		&-line{
			height: 0;
			width: 100rpx;
			border: 2rpx solid rgb(230, 232, 235);
		}
	}
	@keyframes rotate{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(1turn);
		}
	}
</style>