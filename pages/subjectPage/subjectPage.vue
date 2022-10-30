<template>
	<cu-navbar bgColor="transparent" title="话题" color="#fff"  :placeholder="false" leftIconColor="#ffffff"></cu-navbar>
	<view class="ht-container">
		<view class="title">
			{{ht?.name}}
		</view>
		<view class="describe">
			{{ht?.description}}
		</view>
	</view>
	<cu-popup show :overlay="false">
		<view class="dt-container">
			<scroll-view scroll-y @scrolltolower="scrolltolower">
				<cu-loading v-if="triggered"></cu-loading>
				<unicloud-db ref="udb" v-slot:default="{data, loading, error, options,hasMore}" collection="articles,users"
					:where="`category_id=='${ht?._id}'`"
					field="title,mode,content,img_list,like_count,comment_count,publish_date,user_id{_id,nickName,avatarUrl,role,account}"
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
		</view>
	</cu-popup>
</template> 

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	import { ref,reactive } from "vue";
	const ht=ref(null)
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
	const scrolltolower=()=>{
		udb.value.loadMore()
	}
	onLoad((options)=>{
		ht.value=JSON.parse(decodeURIComponent(options.ht))
	})
</script>

<style lang="scss">
	page{
		background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
	}
	.ht-container{
		width: 100%;
		position:absolute;
		top: 160rpx;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #ffffff;
		.title{
			font-size: 40rpx;
			font-weight: bold;
		}
		.describe{
			font-size: 28rpx;
		}
	}
	.dt-container {
		width: 100%;
		height: calc(100vh - 300rpx);
		background-color: #ffffff;
		border-radius: 30rpx;
		scroll-view{
			height: calc(100vh - 300rpx);
		}
	}
</style>
