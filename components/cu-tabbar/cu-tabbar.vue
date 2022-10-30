<template>
	<view class="cu-tabbar" @touchmove.stop.prevent="noop">
		<block v-for="(item,index) in list">
			<view class="cu-tabbar-item" :class="{active:isCheck(item.path)}" @click="change(index,item)">
				<cu-icon  :name="item.icon" :color="isCheck(item.path)?'#3d7eff':'rgb(125, 126, 128)'"></cu-icon>
				<text>{{item.text}}</text>
			</view>
		</block>
	</view>
	<view :style="{height:placeholderHeight}"></view>
</template>

<script setup>
	import { 
		onMounted,
		ref,
		getCurrentInstance,
		reactive
	} from 'vue'
	import {
		getRect
	} from '@/utils/index.js'
	const placeholderHeight = ref(0)
	const instance = getCurrentInstance()
	const emit = defineEmits(['change'])
	const props = defineProps({
		router: {
			type: Boolean,
			default: true
		},
		list: {
			type: Array,
			default: [{
				icon: 'shouye',
				text: '首页',
				path: 'pages/index/index'
			}, {
				icon: 'faxian',
				text: '发现',
				path: 'pages/find/find'
			}, {
				icon: 'shequ',
				text: '任务',
				path: 'pages/task/task'
			}, {
				icon: 'me',
				text: '我的',
				path: 'pages/me/me'
			}]
		}
	})

	onMounted(() => {
		setPlaceholderHeight()
	})
	const change = (index, item) => {
		if (props.router)
			uni.switchTab({
				url: `/${item.path}`
			})
		emit('change', {
			index,
			item
		})
	}
	const isCheck = (path) => {
		return getCurrentPages()[0].route == path ? true : false
	}
	const setPlaceholderHeight = () => {
		getRect('.cu-tabbar', false, instance).then(({
			height
		}) => {
			placeholderHeight.value = height+'px'
		})
	}
</script>

<style lang="scss">
	.cu-tabbar {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #fff;
		z-index: 9999;
		border-top: 1rpx solid #dadbde;

		&-item {
			width: 100rpx;
			height: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			text {
				font-size: 26rpx;
				color: rgb(125, 126, 128);
				margin-top: 4rpx;
			}

			&.active {
				text {
					color: #3d7eff !important;
				}
			}
		}

		&-round {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			position: absolute;
			top: -30rpx;
			left: 0;
			background: #fff;
			z-index: -1;
			transition: all .5s;
			border-top: 1rpx solid #dadbde;
		}
	}
</style>
