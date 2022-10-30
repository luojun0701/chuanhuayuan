<template>
	<view class="cu-sticky" :style="{top}">
		<slot></slot>
	</view>
</template>

<script setup>
	import {computed} from 'vue'
	const props=defineProps({
		top:{
			type:String,
			default:'0px'
		}
	})
</script>

<style lang="scss">
	.cu-sticky{
		position: sticky;
		z-index: 999;
	}
</style>