<template>
	<cu-empty show mode="code"></cu-empty>
	<cu-tabbar></cu-tabbar>
</template>

<script setup>
	import {onLoad} from '@dcloudio/uni-app'
	onLoad(()=>{
		uni.hideTabBar()
	})
</script>

<style lang="scss">

</style>
