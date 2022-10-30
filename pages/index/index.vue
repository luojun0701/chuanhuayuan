<template>
	<cu-swiper :list="bannerList" :indicator="true"></cu-swiper>
	<cu-title title="热门话题" ></cu-title>
	<scroll-view class="ht" scroll-x>
		<unicloud-db v-slot:default="{data, loading, error, options,hasMore}" collection="articles-categories">
			<view v-if="error">
				<cu-empty mode="fail"></cu-empty>
			</view>
			<view v-else-if="loading">
				<cu-loading></cu-loading>
			</view>
			<view v-else class="ht-container">
				<block v-for="item in data">
					<cu-card :customStyle="{width:'350rpx',margin:'0 15rpx 0 0',background:'#3d7eff50'}">
						<view class="ht-title"  @click="goSubjectPage(item)">#{{item.name}}</view>
						<!-- <view class="ht-count margin-top-min">12222动态</view> -->
					</cu-card>
				</block>
			</view>
		</unicloud-db>
	</scroll-view> 
	<cu-sticky>
		<cu-title title="精选动态"  bgColor="#f8f8f8"></cu-title>
	</cu-sticky>
	
	<scroll-view class="scroll-view-list" scroll-y :refresher-enabled="refresher" @scroll="scroll" refresher-default-style="none" :refresher-triggered="triggered" @refresherrefresh="refresherrefresh" @refresherrestore="refresherrestore" @scrolltolower="scrolltolower ">
		<!-- <cu-loading v-if="triggered" ></cu-loading> -->
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options,hasMore}" collection="articles,users,articles-categories"
			:where="`is_essence==${true}`"
			field="title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}"
			:page-current="pagination.page" :page-size="pagination.pageSize">
			<view v-if="error">
				<cu-empty mode="fail"></cu-empty>
			</view>
			<view v-else-if="loading" style="height: 60rpx;">
				<cu-loading></cu-loading> 
			</view>
			<block v-else-if="data.length!=0" v-for="item in data">
				<cu-ps-card :data="item"></cu-ps-card>
			</block>
			<cu-empty v-else></cu-empty>
			<cu-loading v-if="!hasMore&&!loading&&data.length!=0" line loadingText="没有更多了" :showCircle="false"></cu-loading>
		</unicloud-db>
	</scroll-view>
	<cu-tabbar></cu-tabbar>
</template>

<script setup>
	import {
		onLoad,onReachBottom
	} from '@dcloudio/uni-app'
	import {
		ref,reactive
	} from "vue";
	const bannerList = [{
		url: '/static/banner/banner.jpg',
		title: '川华院小程序正式上线，点击进入查看详情',
		link: '',
	}, { 
		url: '/static/banner/banner.jpg',
		title: '大牌女装限时5折，点击进入购买',
		link: ''
	}]
	const pagination=reactive({
		pageSize:20,
		page:1
	}) 
	const udb=ref(null)
	const triggered=ref(false)  //下拉刷新是否被触发
	const refresher=ref(true)
	const scroll=(e)=>{
		let flag=e.detail.scrollTop<10?true:false
		if(refresher.value==flag)return
		refresher.value=flag
	}
	const refresherrefresh=(e)=>{
		triggered.value=true
		udb.value.loadData({
				clear: true
			}, () => {
				// 停止下拉刷新
				triggered.value=false
			})
	}
	const refresherrestore=()=>{
		triggered.value=false
	}
	const goSubjectPage=(item)=>{
		uni.navigateTo({
			url:'/pages/subjectPage/subjectPage?ht='+JSON.stringify(item)
		})
	}
	const scrolltolower=()=>{
		udb.value.loadMore()
	}
	onLoad(() => {
		uni.hideTabBar()
	})
</script>

<style lang="scss" scoped>
	page{
		background-color: #fff;
	}
	.ht {
		width: 690rpx;
		margin: 0 auto;
		&-container {
			display: flex;
		}

		&-title {
			color: #fff;
			font-size: 32rpx;
			font-weight: bold;
			margin: 15rpx 0;
		}

		&-count {
			color: #00000070;
			font-size: 26rpx;
		}
	}
	.scroll-view-list{
		height: calc(100vh - 88rpx);
	}
</style>
