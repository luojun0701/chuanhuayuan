<template>
	<view class="cu-card" :class="{'shadow':isShadow}" :style="customStyle" >
		<slot name="header">
			<view class="cu-card-header">
				<view class="title">
					{{title}}
				</view>
				<view class="right" v-if="right??false">
					<text>{{right.title}}</text>
					<cu-icon v-if="right.icon??false" :size="right.size" :name="right.icon" :rotate="right.rotate" :color="right.color"></cu-icon>
				</view>
			</view> 
		</slot>
		<view class="cu-card-body" :style="bodyStyle">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {onMounted} from 'vue'
	const props=defineProps({
		isShadow:{
			type:Boolean,
			default:false
		},
		title:{
			type:String,
			default:''
		},
		right:Object,
		customStyle:Object,
		bodyStyle:Object 
	})
</script>

<style lang="scss" scoped>
	.cu-card{
		position: relative;
		margin: 0 auto;
		width:690rpx;
		padding:30rpx;
		background-color: #fff;
		border-radius: 12rpx;
		&-header,.right{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.right{
				color: #00000080;
				font-size: 28rpx
			}
			.title{
				font-weight: bold;
			}
		}
	}
	.shadow{
		box-shadow: 2rpx 2px 20rpx rgba(0,0,0,0.1);
	}
</style>