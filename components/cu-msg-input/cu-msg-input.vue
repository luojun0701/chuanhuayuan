<template>
	<view class="cu-msg-input" :style="{bottom:keyboardheight+'px'}">
		<view class="cu-msg-input-group">
			<textarea :value="comment" :placeholder="placeholder" :show-confirm-bar="false" auto-height :adjust-position="false" @input="setValue" @keyboardheightchange="keyboardheightchange"></textarea>
		</view>
		<cu-button text="发送" :customStyle="btnStyle" @click="onSubmit"></cu-button>
	</view>
	<view style="height: 100rpx;"></view>
</template>

<script setup>
	import { computed, ref, toRefs } from "vue";
	const emits=defineEmits(['update:value','submit'])
	const props=defineProps({
		comment:{
			type:String,
			default:''
		},
		placeholder:{
			type:String,
			default:'请输入'
		},
		detail:{
			type:Boolean,
			default:true
		}
	})
	const btnStyle={
		width: '120rpx',
		height: '70rpx',
		lineHeight: '70rpx',
		fontSize: '28rpx'
	}
	const keyboardheight=ref(0)
	const setValue=(e)=>{
		emits('update:value',e.detail.value)
	}
	const onSubmit=()=>{
		emits('submit')
	}
	const keyboardheightchange=(e)=>{
		keyboardheight.value=e.detail.height
	}
</script>

<style lang="scss">
	.cu-msg-input{
		width: 100%;
		// min-height: 100rpx;
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		padding: 20rpx 0;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		transition: bottom .3s;
		&-group{
			width: 588rpx;
			// min-height: 70rpx;
			padding:15rpx 20rpx; 
			border-radius: 30rpx;
			background-color: #f8f8f8;
			display: flex;
			align-items: center;
			textarea{
				flex: 1;
			}
		}
	}
</style>