<template>
	<button :style="[baseStyle,customStyle]" class="cu-button" :class="'cu-button-'+size" @click="click">{{text}}</button>
</template>

<script setup>
	import {computed} from 'vue'
	const emit=defineEmits(['click'])
	const props=defineProps({
		text:{
			type:String,
			default:'确定'
		},
		size:{
			type:String,
			default:'normal'
		},
		customStyle:Object,
		color:{
			type:String,
			default:'#3d7eff'
		}
	})
	const baseStyle=computed(()=>{
		let style={}
		style.backgroundColor=props.color
		if(props.color.indexOf('gradient')!=-1){
			style.backgroundImage=props.color
		} 
		return style
	})
	const click=(e)=>{
		emit('click',e)
	}
</script>

<style lang="scss">
	.cu-button{
		color: #fff;
		&::after{
			border:none;
		}
		&-normal{
			width: 100%;
		}
		&-small{
			width: 200rpx;
			height:78rpx;
			line-height: 78rpx;
			font-size: 28rpx;
		}
	}
</style>