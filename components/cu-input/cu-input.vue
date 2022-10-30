<template>
	<view class="cu-input">
		<input :type="type" :value="value" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength"
			:confirmType="confirmType" @confirm="onConfirm" @input="onInput" :style="customStyle" />
	</view>
</template>

<script setup>
	import {
		computed
	} from "vue";
	const emit = defineEmits(['confirm', 'update:value'])
	const props = defineProps({
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: '请输入'
		},
		disabled: Boolean,
		maxlength: {
			type: Number,
			default: -1
		},
		confirmType: {
			type: String,
			default: 'done'
		},
		border: {
			type: String,
			default: 'surround'
		}
	})
	const customStyle = computed(() => {
		let style = {
			borderWidth: '1rpx',
			borderStyle: 'solid',
			borderColor: '#dadbde'
		}
		switch (props.border) {
			case 'bottom':
				style.borderStyle = 'none none solid'
				break;
			case 'none':
				style.borderStyle = 'none'
				break;
		}
		return style
	})
	const onConfirm = (e) => {
		emit('confirm', e.target.value)
	}
	const onInput = (e) => {
		emit('update:value', e.target.value)
	}
</script>

<style lang="scss">
	.cu-input {
		padding: 15rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 8rpx;

		input {
			width: 100%;
			height: 48rpx;
		}
	}
</style>
