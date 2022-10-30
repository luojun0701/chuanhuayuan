<template>
	<view class="cu-navbar" :style="{height:nav_height}">
		<view class="navbar-status" :style="{height:`${getSys('statusBarHeight')}px`,backgroundColor:bgColor}"></view>
		<view class="navbar-content" :style="{height:`${height}px`,backgroundColor:bgColor}">
			<slot name="left">
				<view class="navbar-content-left" @click="back" v-if="leftIcon">
					<cu-icon  :name="leftIcon" :color="leftIconColor"></cu-icon>
				</view>
			</slot>
			<slot name="title">
				<view class="navbar-content-title" :style="{color}">
					{{title}} 
				</view>
			</slot>
		</view>
	</view>
	<view :style="{height:nav_height}" v-if="placeholder"></view>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {ref,computed} from 'vue'
	const props=defineProps({
		height:{
			type:Number,
			default:44
		},
		bgColor:{
			type:String,
			default:'#fff'
		},
		leftIcon:{
			type:String,
			default:'fanhui'
		},
		leftIconColor:{
			type:String,
			default:'#000000'
		},
		title:String,
		color:{
			type:String,
			default:'#000000'
		},
		placeholder:{
			type:Boolean,
			default:true
		}
	}) 
	//顶部高度导航栏
	const nav_height=computed(()=>{
		return `${props.height+getSys('statusBarHeight')}px`
	})
	const getSys=(val)=>{
		return uni.getSystemInfoSync()[val]
	}
	const back=()=>{
		uni.navigateBack({
			delta:1,
		})
	}
	onLoad(()=>{
		
	})
</script>

<style lang="scss">
	.cu-navbar{
		width:100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		.navbar-content{
			display: flex;
			align-items: center;
			position: relative;
			&-left{
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				padding: 0 13px;
			}
			&-title{
				width: 100%;
				text-align: center;
			}
		}
	}
</style>