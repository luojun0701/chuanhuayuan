<template>
	<view>
		<cu-popup :show="show" mode="center" @close="closePopup">
			<view class="modal">
				<view class="title">{{title}}</view>
				<slot name="content">
					<view class="content">
						{{content}}
					</view>
				</slot>
				<view class="action">
					<view class="action-item" v-if="showCancelButton" @click="cancel">
						{{cancelText}}
					</view>
					<view class="action-item" v-if="showConfirmButton" @click="confirm">
						{{confirmText}}
					</view>
				</view>
			</view>
		</cu-popup> 
	</view>
</template>

<script setup>
	import { ref } from "vue";
	const emits=defineEmits(['confirm','cancel','close'])
	const props=defineProps({
		show:{
			type:Boolean,
			default:false
		},
		title:{
			type:String,
			default:'温馨提示'
		},
		content:{
			type:String,
			default:''
		},
		confirmText:{
			type:String,
			default:'确定'
		},
		cancelText:{
			type:String,
			default:'取消'
		},
		showConfirmButton:{
			type:Boolean,
			default:true
		},
		showCancelButton:{
			type:Boolean,
			default:true
		}
	})
	// cons
	const closePopup=()=>{
		emits('close')
	}
	const cancel=()=>{
		emits('cancel')
	}
	const confirm=()=>{
		emits('confirm')
	}
</script>

<style lang="scss">
	.modal{
		width: 88%;
		padding: 0 30rpx;
		background-color: #fff;
		border-radius: 12rpx;
		.title{
			width: 100%;
			height: 88rpx;
			font-weight: bold;
			text-align: center;
			line-height: 88rpx;
		}
		.content{
			margin-top: 30rpx;
		}
		.action{
			width: 100%;
			display: flex;
			justify-content: space-between;
			border-top: 1rpx solid #f1f1f1;
			&-item{
				flex: 1;
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
				&:last-child{
					color: $theme-color;
					border-left: 1rpx solid #f1f1f1;
				}
			}
		}
	}
</style>