<template>
	<view class="cu-empty" v-if="show">
		<image class="cu-empty-icon" :src="src"></image>
		<view class="cu-empty-title">{{icons[mode]}}</view>
	</view>
</template>

<script setup>
import { computed } from "vue";
	const icons={
		code:'码农正在努力开发中...',
		data:'暂无内容',
		fail:'操作失败',
		msg:'暂无消息', 
		order:'暂无订单',
		success:'操作成功'
	}
	const props=defineProps({
		show:{
			type:Boolean,
			default:true
		},
		mode:{
			type:String,
			default:'data'
		}
	})
	const src=computed(()=>`/static/empty/${props.mode}.png`)
</script>

<style lang="scss">
	.cu-empty{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 80rpx 0;
		&-icon{
			width: 240rpx;
			height: 240rpx;
		}
		&-title{
			color: rgb(192, 196, 204);
			font-size: 28rpx;
			margin-top: 20rpx;
		}
	}
</style>