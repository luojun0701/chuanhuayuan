<template>
	<cu-navbar leftIcon=''>
		<template #title>
			<cu-tabs :list="list" :current="current" @change="changeTbas"></cu-tabs>
		</template>
	</cu-navbar>
	<view style="height: 15rpx"></view>
	<scroll-view scroll-y :refresher-enabled="refresher" @scroll="scroll" refresher-default-style="none" :refresher-triggered="triggered" @refresherrefresh="refresherrefresh" @refresherrestore="refresherrestore" @scrolltolower="scrolltolower" >
		<!-- <cu-loading v-if="triggered" ></cu-loading> -->
		<unicloud-db  ref="udb" :orderby="orderby" v-slot:default="{data, loading, error, options,hasMore}" collection="articles,users,articles-categories"
			field="title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account},category_id{name}"
			:page-current="pagination.page" :page-size="pagination.pageSize">
			<view v-if="error">
				<cu-empty mode="fail"></cu-empty>
			</view>
			<view v-else-if="loading">
				<cu-loading></cu-loading>
			</view>
			<block v-else-if="data.length!=0" v-for="item in data">
				<cu-ps-card :data="item"></cu-ps-card>
			</block>
			<cu-empty v-else></cu-empty>
			<cu-loading v-if="!hasMore&&!loading&&data.length!=0" line loadingText="没有更多了" :showCircle="false"></cu-loading>
		</unicloud-db>
	</scroll-view>
	
	<navigator url="../publish/publish" hover-class="none">
		<cu-button text="发布动态" size="small" :customStyle="btnStyle"></cu-button>
	</navigator>
	<cu-tabbar></cu-tabbar>
</template>

<script setup>
	import { ref,reactive} from "vue";
	import {onLoad} from '@dcloudio/uni-app'
	const list=[{name:'最新'},{name:'最热'}]
	const btnStyle={
		position: 'fixed',
		bottom: '158rpx',
		right: '50rpx'
	}
	const orderby=ref('publish_date desc')
	const pagination=reactive({
		pageSize:20,
		page:1
	}) 
	const current=ref(0)
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
	const scrolltolower=()=>{
		console.log('scrolltolower')
		udb.value.loadMore()
	}
	const changeTbas=(i)=>{
		current.value=i
		let tmpOrderby=(i==0?'publish_date desc':'like_count desc')
		orderby.value=tmpOrderby
	}
	onLoad(()=>{
		uni.hideTabBar() 
	})
</script>

<style lang="scss">
	scroll-view{
		height: calc(100vh - 243rpx);
	}
</style>
