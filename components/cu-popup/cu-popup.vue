<template>
	<view v-if="overlay" v-show="show" class="cu-mask" @click="emits('close')" @touchmove.stop.prevent="">

	</view>
	<view class="cu-popup" :style="customStyle" :class="show?customClass:''">
		<view class="cu-popup-body">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from "vue";
	const emits = defineEmits(['close'])
	const props = defineProps({
		show: {
			type: Boolean,
			default: false
		},
		mode: {
			type: String,
			default: 'bottom'
		},
		bgColor: {
			type: String,
			default: '#fff'
		},
		overlay: {
			type: Boolean,
			default: true
		}
	})
	const customStyle = computed(() => {
		let style = {}
		switch (props.mode) {
			case 'bottom':
				style = Object.assign(style, {
					right: '0',
					left: ' 0',
					bottom: '0',
					transform: 'translateY(100%)'
				})
				break;
			case 'center':
				style = Object.assign(style, {
					top: '50%',
					left: '50%',
					transform: ' translate(-50%,-50%)',
					display:'none'
				})
				break;

		}
		return style
	})
	const customClass = ref(`cu-popup-${props.mode}-show`)
</script>

<style lang="scss">
	.cu-mask {
		width: 100%;
		height: 100vh;
		background: #00000040;
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
	}

	.cu-popup {
		width: 100%;
		position: fixed;
		display: flex;
		z-index: 100;
		transition: all 1.2s;

		&-body {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			// background-color: #fff;
		}

		&-bottom-show {
			transform: translateY(0) !important;
		}

		&-center-show {
			display: flex !important;
		}
	}
</style>
