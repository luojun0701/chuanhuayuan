<template>
	<web-view :src="link"></web-view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	const link=ref(null)
	onLoad(({url})=>{
		link.value=url
	})
</script>

<style lang="scss">

</style>
