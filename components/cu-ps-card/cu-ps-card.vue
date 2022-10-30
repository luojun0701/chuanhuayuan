<template>
	<view class="ps-card" @click="goDetail">
		<cu-card>
			<template #header>
				<view class="ps-header">
					<image :src="data?.user_id[0].avatarUrl" class="avatar" @click.stop="goPersonalInfo"></image>
					<view class="ps-user">
						<view class="nickname">
							{{data?.user_id[0].nickName}}
						</view>
						<view class="date">
							{{formatTime(data?.publish_date)}}
						</view>
					</view>
				</view>
			</template>
			<view class="ps-content margin-top-min">
				<block v-if="detail">
					<rich-text :nodes="data?.content"></rich-text>
				</block>
				<block v-else>
					{{data?.mode==1?(data?.content):(data?.title)}}
				</block>
				<navigator v-if="data?.category_id.length" url="" hover-class="none" class="ht">#{{data?.category_id[0].name}}</navigator>
			</view>
			<view class="ps-img margin-top-min" v-if="!detail">
				<block v-for="(items,index) in data?.img_list">
					<cu-image :style="{margin:(index+1)%3==0?'0 0 15rpx 0':'0 15rpx 15rpx 0'}" :src="items"
						mode="aspectFill" :previewSrcList="data.img_list"
						:width="data.img_list.length>1?'200rpx':'630rpx'" height="200rpx" :initialIndex="index">
					</cu-image>
				</block>
			</view>
			<view class="ps-action" v-if="false">
				<view class="ps-action-right">
					<view class="action-item" @click.stop="share">
						<cu-icon name="fenxiang"></cu-icon>
					</view>
				</view>
				<view class="ps-action-left">
					<view class="action-item" @click.stop="onLike(data._id)">
						<cu-icon name="B1"></cu-icon>
						<text>{{data.like_count}}</text>
					</view>
					<view class="action-item" style="margin-left: 20rpx;" @click.stop="goDetail('comment')">
						<cu-icon name="B"></cu-icon>
						<text>{{data.comment_count}}</text>
					</view>
				</view>
			</view>
		</cu-card>
	</view>
</template>

<script setup>
	import {
		formatTime
	} from '../../utils/index.js'
	const props = defineProps({
		data: {
			type: Object,
			default: {}
		},
		detail: {
			type: Boolean,
			default: false
		}
	})
	const goDetail = (type) => {
		if (props.detail) return
		uni.navigateTo({
			url: `/pages/ps-detail/ps-detail?id=${props.data._id}&type=${type}&title=${props.data.title}`
		})
	}
	const goPersonalInfo = () => {
		uni.navigateTo({
			url: `/pages/personalInfo/personalInfo?info=${JSON.stringify(props.data.user_id[0])}`
		})
	}
	const onLike = (id) => {

	}
</script>

<style lang="scss">
	.ps-card {
		margin-bottom: 20rpx;
	}

	.ps-header {
		display: flex;
		align-items: center;

		.avatar {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}

		.ps-user {
			margin-left: 10rpx;
			font-size: 28rpx;

			.date {
				font-size: 22rpx;
				color: #00000080;
				margin-top: 8rpx;
			}
		}
	}

	.ps-content {
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
	}

	.ps-img {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-between;
	}

	.ps-action {
		padding-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&-left {
			display: flex;
		}

		.action-item {
			display: flex;
			align-items: center;

			text {
				margin-left: 10rpx;
			}
		}
	}

	.ht {
		display: inline-block;
		color: #3d7eff;
	}
</style>
