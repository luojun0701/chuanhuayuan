<template>
	<view class="publish">
		<!-- //富文本模式 -->
		<block v-if="isEeditor">
			<rich-text v-if="htmlContent" :nodes="htmlContent" @click="toEditorPage"></rich-text>
			<view v-else class="rich-text" @click="toEditorPage">
				点击编辑内容
			</view>
			<!-- 富文本模式提交时需要填写文章标题 -->
			<cu-modal :show="popupShow" @close="closePopup" title="填写标题" @confirm="publish" @cancel="hidePopup">
				<template #content>
					<cu-input placeholder="请输入文章标题" v-model:value="title"></cu-input>
				</template>
			</cu-modal>
		</block>
		<!-- 普通内容模式 -->
		<block v-else>
			<textarea  placeholder="写下你想说的话吧..." v-model="content" class="textarea" maxlength="-1"></textarea>
		</block>
		
		<view class="margin-top-min">
			<cu-upload ref="upload"></cu-upload>
		</view>
		
		<unicloud-db v-slot:default="{data, loading, error, options,hasMore}" collection="articles-categories">
			<view v-if="error">
				<cu-empty mode="fail"></cu-empty>
			</view>
			<view v-else-if="loading">
				<cu-loading></cu-loading>
			</view>
			<scroll-view scroll-x enable-flex class="ht-container">
				<block v-for="(item,index) in data">
					<view class="ht-title" :class="{active:current==index}" @click="changeht(index,item._id)">
						#{{item.name}}</view>
				</block>
			</scroll-view>
		</unicloud-db>
			<cu-cell :title="isEeditor?'富文本内容':'普通内容'" >
			<template #right>
				<switch :checked="isEeditor" @change="changeEditor" />
			</template>
		</cu-cell>
		<cu-button text="一键发布" :customStyle="btnStyle" @click="publish"></cu-button>
	</view>
</template>

<script setup>
	import {
		throttle
	} from '../../utils/index.js'
	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		addDb
	} from '../../common/db.js'
	import {
		ref
	} from "vue";
	const upload = ref(null)
	const btnStyle = {
		marginTop: '100rpx'
	}
	const popupShow=ref(false)//填写标题弹窗
	const current = ref(null)
	const content = ref('') //接收普通内容
	const title=ref('')
	const htmlContent = ref('') //接收富文本
	var category_id = '' //分类id
	const isEeditor = ref(true)
	onShow(() => {
		console.log('onShow')
		htmlContent.value = uni.getStorageSync('html') || ''
	})
	const hidePopup=()=>{
		popupShow.value=false
	}
	const closePopup=()=>{
		popupShow.value=false
	}
	const changeEditor = (e) => {
		let tmp = e.detail.value
		isEeditor.value = tmp
	} 
	const toEditorPage = () => {	
		uni.navigateTo({
			url: '/pages/editorPage/editorPage'
		})
	}
	const changeht = (index, id) => {
		//相等则是取消选中
		if (current.value == index) {
			category_id = ''
			current.value = null
		} else {
			category_id = id
			current.value = index 
		}
	}
	const publish = () => {
		if(title.value==''){
			popupShow.value=true
			return
		}
		//使用节流防止误操作
		publishFnc()
	}
	const publishFnc = throttle(async () => {
		if(isEeditor.value){
			if (htmlContent.value == '') {
				uni.showToast({
					title: '内容不能为空',
					icon: 'none'
				})
				return
			}
		}else{
			if (content.value == '') {
				uni.showToast({
					title: '内容不能为空',
					icon: 'none'
				})
				return
			}
		}

		let result = await upload.value?.upload()
		uni.showLoading({
			title: '发布中...'
		})
		addDb('articles', {
			content: isEeditor.value?htmlContent.value:content.value,
			img_list: result,
			user_id: getApp().globalData.userinfo._id,
			title:title.value,
			mode:isEeditor.value?2:1,//1普通内容2富文本
			category_id
		}).then(({
			result
		}) => {
			let {
				errCode
			} = result
			uni.showToast({
				title: errCode == 0 ? '发布成功' : '发布失败,请重试',
				icon: 'none'
			})
			if (errCode == 0) {
				uni.navigateBack()
			}
		})
	})
	
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.publish {
		padding: 0 30rpx;

		.textarea {
			width: 100%;
			height: 388rpx;
		}
	}

	.ht-container {
		display: flex;
		height: 150rpx;
		align-items: center;
	}

	.ht-title {
		padding: 0rpx 20rpx;
		height: 65rpx;
		line-height: 65rpx;
		text-align: center;
		border-radius: 30rpx;
		background-color: #f8f8f8;
		margin-right: 20rpx;
		white-space: nowrap;
		font-size: 28rpx;
	}

	.active {
		border: 1rpx solid $theme-color;
		color: $theme-color;
	}

	.wx-switch-wrapper {
		transform: scale(.8);
	}

	.rich-text {
		width: 100%;
		height: 300rpx;
		color: gray;
	}
</style>
