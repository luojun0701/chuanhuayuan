<template>
	<block v-if="previewSrcList">
		<image :src="src" :mode="mode" :lazy-load="lazyLoad" class="cu-image" :style="customStyle" @click.stop="preview"></image>
	</block>
	<block v-else>
		<image :src="src" :mode="mode" :lazy-load="lazyLoad" class="cu-image" :style="customStyle"></image>
	</block>
</template>

<script setup>
	import {computed} from 'vue'
	const props=defineProps({
		src:String,
		mode:{
			type:String,
			default:'scaleToFill'
		},
		lazyLoad:{
			type:Boolean,
			default:true
		},
		width:{
			type:String,
			default:'150rpx'
		},
		height:{
			type:String,
			default:''
		},
		radius:{
			type:String,
			default:'12rpx'
		},
		previewSrcList:{
			type:[Array,String],
			default:''
		},
		initialIndex:{
			type:Number,
			default:0
		}
	})
	const customStyle=computed(()=>{
		return {
			width:props.width,
			height:props.height,
			borderRadius:props.radius 
		}
	})
	const preview=()=>{
		let {previewSrcList,initialIndex}=props
		if(previewSrcList)
		uni.previewImage({
			urls:typeof(previewSrcList)=='string'?[previewSrcList]:previewSrcList,
			current:initialIndex
		})
	}
</script>

<style lang="scss">
	
</style>