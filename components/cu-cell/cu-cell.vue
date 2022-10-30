<template>
	<view class="cu-cell">
		<text>{{title}}</text>
		<slot name="right">
			<view class="right">
				<text>{{text}}</text>
				<cu-icon name="fanhui" rotate="180" size="15px"></cu-icon>
			</view>
		</slot>
	</view>
</template>

<script setup>
	const props=defineProps({
		title:String,
		text:String,
	})
</script>

<style lang="scss">
	.cu-cell{
		width: 100%;
		height: 84rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0 30rpx;
	}
</style>