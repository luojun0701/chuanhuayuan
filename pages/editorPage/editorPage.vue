<template>
	<view class="container">
		<editor show-img-resize show-img-toolbar show-img-size id="editor" placeholder="请输入内容..." @ready="onEditorReady" @focus="onEditorFocus"></editor>
		<view class="action">
			<view class="action-bar" v-show="showAction">
				<view v-for="(item,index) in options.actions" :class="['action-bar-item',{'border-left':(index==0||index==(options.actions.length-2))}]" @click="handle(item.parameter)">
					<cu-icon :name="item.name" :color="(index==(options.actions.length-1))?'#3d7eff':'#000000'"></cu-icon>
				</view>
			</view>
			<view class="action-body" v-show="action">
				<view v-if="action=='insert'" class="insertBox">
					<view class="insert" @click="insertImage">
						<cu-icon name="morentupianccccccpx"></cu-icon>
					</view>
					<view class="insert" @click="insertDivider">
						<cu-icon name="line"></cu-icon>
					</view>
				</view>
				<view v-if="action=='font'" class="fontBox">
					<view class="font-row" v-for="(item,index) in options.fontRow">
						<block v-for="(items,i) in item">
							<view v-if="index==0" class="font " @click="format(items.parameter.name,items.parameter.value)" >
								<cu-icon :name="items.name"></cu-icon>
							</view>
							<view v-else-if="index==1" class="font"  @click="format(items.parameter.name,items.parameter.value)">
								{{items.name}}
							</view>
							<view v-else class="round-box"  @click="format(items.parameter.name,items.parameter.value)">
								<view :class="[items.name,'round']"></view>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script setup>
	import { ref,onMounted} from "vue";
	import options from './options.js'
	let editorCtx = null
	const showAction=ref(true)
	const action=ref('font') 
	const onEditorReady = () => {
		uni.createSelectorQuery().select('#editor').context((res) => {
			editorCtx = res.context
			editorCtx.setContents({
				html:uni.getStorageSync('html')||''
			})
		}).exec()
	}
	const onEditorFocus=()=>{
		showAction.value=true
	}
	const handle=(type)=>{
		if(type=='complete'){
			// showAction.value=false
			// action.value=''
			editorCtx.getContents({
				success({html}){
					uni.setStorageSync('html',html)
					uni.navigateBack({
						delta: 1
					})
				}
			})
		}else if(type=='insert'||type=='font'){
			action.value=type
		}else if(type=='setContents'){
			editorCtx.getContents({
				success({html}){
					let tmpHtml=html+'<a style="color:blue">www.baidu.com</a>'
					editorCtx[type]({
						html:tmpHtml
					})
				}
			})
		}else{
			editorCtx[type]()
			action.value=''
		}
	}
	//设置样式 
	const format=(name,value)=>{
		editorCtx.format(name,value)
	}
	//插入图片
	const insertImage=()=>{
		uni.chooseMedia({
			mediaType:['image'],
			success({tempFiles}){
				tempFiles.forEach((item,index)=>{
					editorCtx.insertImage({
						src:item.tempFilePath,
						alt:'图像'+index,
						width:'100%',
					})
				})
			}
		})
	}
	//插入线条
	const insertDivider=()=>{
		editorCtx.insertDivider()
	}
</script>


<style lang="scss">
	page{
		background: #fff;
	}
	.container {
		padding: 0 30rpx;
	}

	#editor {
		width: 100%;
		height: calc(100vh - 100rpx);
	}

	.action{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		&-bar{
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			border: 1rpx solid #00000020;
			&-item{
				width: calc(100% / 7);
				text-align: center;
			}
			.border-left{
				border-right: 1rpx solid #f1f1f1;
			}
		}
		&-body{
			height: 420rpx;
			padding: 30rpx;
			.insertBox{
				display: flex;
				flex-wrap: wrap;
				.insert{
					width: 120rpx;
					height: 120rpx;
					border-radius: 8rpx;
					background: #f1f1f1;
					text-align: center;
					line-height: 120rpx;
					margin-right: 30rpx;
				}
			}
			.fontBox{
				.font-row{
					display: flex;
					align-items: center;
					justify-content: space-around;
					width: 100%;
					height: 75rpx;
					background: #f1f1f1;
					border-radius: 8rpx;
					margin-bottom: 30rpx;
					.round-box{
						// width: calc(100% / 7);
						display: flex;
						align-items: center;
						.round{
							width: 40rpx;
							height: 40rpx;
							border-radius: 50%;
						}
						.black{
							background-color: black;
						}
						.gray{
							background-color: gray;
						}
						.white{
							background-color: white;
						}
						.yellow{
							background-color: yellow;
						}
						.orange{
							background-color: orange;
						}
						.red{
							background-color: red;
						}
						.green{
							background-color: green;
						}
					}
					.font{
						flex: 1;
						text-align: center;
					}
				}
			}
		}
	}
	// .action-content{
	// 	width: ;
	// }
</style>
