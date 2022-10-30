<template>
	<cu-navbar bgColor="transparent" :placeholder="false" leftIconColor="#ffffff">
	</cu-navbar>
	<view class="personalInfo">
		<view class="me-top">
			<view class="me-top-bg" @click="show=!show">
				<image src="../../static/me/bg.png" class="me-top-bg-img"></image>
			</view>
			<view class="me-top-info" @click="login">
				<image :src="userinfo.avatarUrl" class="me-top-info-avatar"></image>
				<view class="me-top-info-box">
					<view class="nickname">
						{{userinfo.nickName}}
					</view>
					<view class="class">
						{{userinfo.account?userinfo.account.slice(0,4)+'级':'游客' }}
					</view>
				</view>
			</view>
		</view>
		<cu-popup show :overlay="false">
			<view class="dt-container">
				<cu-tabs :list="tabList" :current="current" @change="tabChange"></cu-tabs>
				<scroll-view scroll-y @scrolltolower="scrolltolower">
					<cu-loading v-if="triggered"></cu-loading>
					<unicloud-db ref="udb"  orderby="publish_date desc" v-slot:default="{data, loading, error, options,hasMore}"
						collection="articles,articles-categories" 
						:where="`user_id=='${userinfo._id}'`"
						field="title,mode,content,img_list,like_count,comment_count,publish_date,category_id{name}"
						@load="loadData"
						:page-current="pagination.page" :page-size="pagination.pageSize">
						<view v-if="error">
							<cu-empty mode="fail"></cu-empty>
						</view>
						<view v-if="loading" style="height: 60rpx;">
							<cu-loading></cu-loading>
						</view>
						<block v-else-if="data.length!=0" v-for="item in data">
							<cu-ps-card :data="item"></cu-ps-card>
						</block>
						<cu-empty v-else></cu-empty>
						<cu-loading v-if="!hasMore&&!loading&&data.length!=0" line loadingText="没有更多了"
							:showCircle="false"></cu-loading>
					</unicloud-db>
				</scroll-view>
			</view>
		</cu-popup>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref,
		reactive
	} from "vue";
	const userinfo = ref({})
	const current = ref(0)
	const pagination = reactive({
		pageSize: 20,
		page: 1
	})
	const udb = ref(null)
	const scrolltolower = () => {
		udb.value.loadMore()
	}
	const tabList = [{
		name: 'ta动态'
	}]
	const tabChange = (i) => {
		current.value = i
	}
	const loadData=(data)=>{
		for(let i in data){
			data[i].user_id=[userinfo.value]
		}
	}
	onLoad((options) => {
		userinfo.value = JSON.parse(decodeURIComponent(options.info))
	})
</script>

<style lang="scss">
	.me-top {
		&-bg {
			width: 100%;
			height: 450rpx;
			z-index: -1;

			&-img {
				width: 100%;
				height: 100%;
			}
		}

		&-info {
			margin: 0 30rpx;
			margin-top: -230rpx;
			z-index: 1;
			display: flex;
			align-items: center;
			color: #ffffff;

			&-avatar {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				margin-right: 25rpx;
			}

			.nickname {
				font-size: 38rpx;
				margin-bottom: 7rpx;
			}
		}

	}

	.dt-container {
		width: 100%;
		height: calc(100vh - 400rpx);
		background-color: #ffffff;
		border-radius: 30rpx;
		scroll-view{
			height: calc(100vh - 400rpx - 88rpx);
		}
	}
</style>
