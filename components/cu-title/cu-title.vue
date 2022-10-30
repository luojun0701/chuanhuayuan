<template>
	<view class="cu-title" :style="'background:'+bgColor">
		<view class="cu-title-left">
			<text>{{title}}</text>
		</view>
		<slot name="right">
			<view class="cu-title-right" v-if="showMore">
				<text>查看更多</text>
				<cu-icon name="fanhui" size="14px" rotate="180"></cu-icon>
			</view>
		</slot>
	</view>
</template>

<script setup>
	const props = defineProps({
		title: String,
		showMore: {
			type: Boolean,
			default: false
		},
		bgColor:{
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss">
	.cu-title {
		width: 690rpx;
		height: 88rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-left {
			text {
				font-weight: bold;
				position: relative;
				&::after {
					content: '';
					display: inline-block;
					width: 60rpx;
					height: 15rpx;
					background: $theme-color;
					opacity: .5;
					z-index: 1;
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}

		&-right {
			display: flex;
			align-items: center;
			text{
				font-size: 28rpx;
				color: rgb(125, 126, 128);
			}
		}
	}
</style>
