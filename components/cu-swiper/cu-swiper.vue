<template>
	<view class="cu-swiper" :style="{height}">
		<swiper :current="current"  :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :acceleration="acceleration" @change="onChange">
			<swiper-item v-for="(item,index) in list">
				<view class="cu-swiper-item" @click="clickHandler(item)">
					<image :src="item[keyName]" mode="aspectFill"></image>
					<text class="cu-swiper-item-title" v-if="showTitle">{{item.title}}</text>
				</view>
			</swiper-item>
		</swiper>
		<view class="cu-swiper-indicator" v-if="indicator&&!showTitle">
			<slot name="indicator">
				<view v-for="(item,index) in list.length" :class="['cu-swiper-indicator-item',{'cu-swiper-indicator-item-active':currentIndex==index}]"></view>
			</slot>
		</view>
	</view>
</template>

<script setup>
	import { computed, ref } from "vue";
	const currentIndex=ref(0)//指示器
	const props=defineProps({
		list:{
			type:Array,
			default:[]
		},
		autoplay:{
			type:Boolean,
			default:true
		},
		current:{
			type:Number,
			default:0
		},
		interval:{
			type:Number,
			default:3000
		},
		duration:{
			type:Number,
			default:300
		},
		indicator:{
			type:Boolean,
			default:false
		},
		circular:{
			type:Boolean,
			default:false
		},
		acceleration:{
			type:Boolean,
			default:false
		},
		showTitle:{
			type:Boolean,
			default:false
		},
		keyName:{
			type:String,
			default:'url'
		},
		height:{
			type:String,
			default:'260rpx'
		}
	})
	const onChange=(e)=>{
		currentIndex.value=e.detail.current
	}
	const clickHandler=({link})=>{
		const reg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
		let url=null
		reg.test(link)?url=`/pages/webview/webview?url=${link}`:url=link
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss">
	.cu-swiper{
		position: relative;
		width: 690rpx;
		background-color: #dedede;
		border-radius: 12rpx;
		margin: 0 auto;
		overflow: hidden;
		swiper{
			height: inherit !important;
		}
		&-indicator{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			bottom: 20rpx	;
			left: 0;
			&-item{
				width: 15rpx;
				height: 15rpx;
				border-radius: 50%;
				background-color: #00000030;
				transition: all .8s;
				margin: 0 7rpx;
				&-active{
					width: 45rpx;
					border-radius: 8rpx;
					background-color: #fff;
				}
			}
		}
		&-item{
			position: relative;
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
			&-title{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background-color: #00000030;
				color: #fff;
				font-size: 28rpx;
				padding: 8rpx 18rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
</style>