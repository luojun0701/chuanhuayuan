<template>
	<view class="ps-container">
		<unicloud-db  v-slot:default="{data, loading, error}" collection="articles,users,articles-categories" :where="`_id=='${articles_id}'`" 
			field="title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}">
			<view v-if="error">
				<cu-empty mode="fail"></cu-empty>
			</view>
			<view v-else-if="loading">
				<cu-loading></cu-loading>
			</view>
			<block v-else-if="data.length!=0" v-for="item in data">
				<cu-ps-card :data="item" detail></cu-ps-card>
			</block>
			<cu-empty v-else></cu-empty>
		</unicloud-db>
		<!-- <cu-ps-card :data="ps_data" :detail="false"></cu-ps-card> -->
	</view>
	<view class="comment-container">
		<cu-title title="全部评论"></cu-title>
		<unicloud-db ref="udb"  v-slot:default="{data, loading, error, options}"
			collection="comments,users" :where="`article_id=='${articles_id}'`"
			field="comment_content,child_comments,comment_date,user_id{_id,nickName,avatarUrl,role}"
			:page-current="pagination.page" :page-size="pagination.pageSize" :getcount="true">
			<view v-if="error">
				<cu-empty mode="fail"></cu-empty>
			</view>
			<view v-else-if="loading">
				<cu-loading></cu-loading>
			</view>
			<block v-else-if="data.length!=0" v-for="item in data">
				<view class="comment-item">
					<cu-image :src="item.user_id[0].avatarUrl" width="80rpx" height="80rpx" radius="50%"></cu-image>
					<view class="user">
						<view class="nickname">
							{{item.user_id[0].nickName}}
						</view>
						<view class="content">
							{{item.comment_content}}
						</view>
						<view class="date">
							{{formatTime(item.comment_date)}}
						</view>
					</view>
				</view>
			</block>
			<cu-empty v-else></cu-empty>
		</unicloud-db>
	</view>
	<cu-msg-input placeholder="友善评论,文明发言" :comment="comment" v-model:value="comment" @submit="submit"></cu-msg-input>
</template>

<script setup>
	import {
		onLoad,
		onPullDownRefresh
	} from '@dcloudio/uni-app'
	import {
		formatTime
	} from '../../utils/index.js'
	import {
		reactive,
		ref,nextTick
	} from "vue";
	const ps_data = ref(null)
	const pagination = reactive({
		pageSize: 20,
		page: 1
	})
	const where = ref({})
	const udb = ref(null)
	const comment = ref('')
	const submit = () => {
		if (comment.value == '') {
			uni.showToast({
				title: '内容不能为空',
				icon: 'none'
			})
			return
		}
		udb.value?.add({
			article_id: articles_id.value,
			user_id: getApp().globalData.userinfo._id,
			comment_content: comment.value
		}, {
			toastTitle: '评论成功',
			success() {
				nextTick(()=>{
					comment.value = ''
				}) 
			}
		})
	} 
	const articles_id=ref('')
	onLoad((options) => {
		articles_id.value=options.id
		uni.setNavigationBarTitle({
			title:options.title||'详情'
		})
		// console.log(options)
		// let data = JSON.parse(decodeURIComponent(options.data))
		// // ps_data.value = data
	})
	onPullDownRefresh(() => {
		udb.value.loadData({
			clear: true
		}, () => {
			// 停止下拉刷新
			uni.stopPullDownRefresh()
		})
	})
</script>

<style lang="scss">
	.ps-container,
	.comment-container {
		background: #fff;
	}

	.comment-item {
		width: 690rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1rpx;
		padding: 20rpx 0;
		display: flex;

		.user {
			flex: 1;
			margin-left: 10rpx;
			font-size: 28rpx;
			border-bottom: 1rpx solid #f8f8f8;

			.nickname {
				color: #00000080;
			}

			.content {
				margin-top: 10rpx;
			}

			.date {
				color: #00000080;
				font-size: 24rpx;
				margin-top: 10rpx;
			}
		}
	}
</style>
