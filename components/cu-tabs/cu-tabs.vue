<template>
	<view class="cu-tabs">
		<block v-for="(item,index) in list">
			<view class="cu-tabs-item" @click="onChange(index)">
				<text class="cu-tabs-name" :class="{active:index==current}">{{item.name}}</text>
			</view>
		</block>
		<view class="cu-tabs-line" :style="customLineStyle"></view>
	</view>
</template>

<script setup>
	import {computed,getCurrentInstance,onMounted, ref, watch} from 'vue'
	import {getRect} from '../../utils/index.js'
	const emit=defineEmits(['change'])
	const props = defineProps({
		list:{
			type:Array,
			default:[]
		},
		current:{
			type:[Number,String],
			default:''
		}
	})
	const customLineStyle=ref({})
	let tablist=[]
	watch(()=>props.current,(value)=>{
		setLineStyle()
	})
	const setLineStyle=()=>{
		let style={}
		style.width=`${tablist[props.current]?.width||32}px`
		style.transform=`translateX(${tablist[props.current]?.left||15}px)`
		customLineStyle.value=style
	}
	const onChange=(i)=>{
		if(props.current==i)
		return
		else
		emit('change',i)
	}
	onMounted(()=>{
		tablist=props.list
		getRect('.cu-tabs-name',true,getCurrentInstance()).then(res=>{
			for(let i in tablist){
				tablist[i].width=res[i].width
				tablist[i].left=res[i].left
			}
			setLineStyle()
		})
		// const query=uni.createSelectorQuery().in(getCurrentInstance())
		// query.selectAll('.cu-tabs-name').boundingClientRect().exec()
	})
</script> 

<style lang="scss">
	.cu-tabs{
		position: relative;
		display: flex;
		height: 88rpx;
		align-items: center;
		&-item{
			padding: 0 30rpx;
		}
	}
	.cu-tabs-line{
		position: absolute;
		bottom: 0;
		height: 6rpx;
		background: $theme-color;
		transition:all .3s ;
	}
	.active{
		color: $theme-color;
		font-weight: bold;
	}
</style>