<template>
	<text :style="{fontSize:size,color,transform:`rotate(${rotate}deg)`}" :class="icon_class"></text>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import {computed} from 'vue'
	const props=defineProps({
		name:String,
		size:{
			type:String,
			default:'22px'
		},
		color:{
			type:String,
			default:'#000000'
		},
		rotate:{
			type:[String,Number],
			default:0
		}
	})
	const icon_class = computed(()=>{
		return `custom-icon custom-icon-${props.name}`
	})
</script> 

<style lang="scss">
	@import "./iconfont.css";
	text{
		display:inline-block;
		// vertical-align: 25%;
	}
</style>