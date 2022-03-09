<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :current="1" :circular="true"
					 :vertical="true">
						<swiper-item>
							<view class="swiper-item">
								<video :custom-cache="false" loop="true" class="video" id="videos" :enable-play-gesture="true"
								 :enable-progress-gesture="true" :controls="false" :src="url" :show-center-play-btn="false">
								</video>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view>
			<view class="left">
				<view class="left_box">
					<view style="position: relative;">
						<image :src="pic" class="cover_image" mode="aspectFill"></image>
						<view class="price">￥{{price}}</view>
					</view>
					<view class="ke_context">
						<cover-view class="">{{title}} </cover-view>
						<view class="itemss">
							<view class="price_point">高佣  {{commission}}%</view>
							<!-- <view class="sale_price">
								赚  <text class="font-c-o">￥200</text>
							</view> -->
							<view class="go_btn" @tap="GoodsInfo">去领样</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				url:"",
				title:"",
				pic:"",
				price:"",
				commission:""
			}
		},
		onReady() {
			let videoContext = uni.createVideoContext('videos')
			videoContext.play()
		},
		onLoad(options) {
			this.id = options.id
			this.url = options.url
			this.title = options.title
			this.pic = options.pic
			this.price = options.price
			this.commission = options.commission
			uni.setNavigationBarTitle({
				title:options.title
			})
		},
		methods: {
			GoodsInfo:function(){
				uni.navigateTo({
					url: '/pages/goods/goods?id='+this.id
				})
			},
			/**
			 * 分享给好友
			 * @param {Object} res
			 */
			onShareAppMessage(res) {
			    if (res.from === 'button') {// 来自页面内分享按钮
			      return {
			        title: this.title,
			        path: '/pages/goods/goods_video_info?id='+this.id+'&title='+this.title+'&pic='+this.pic+'&url='+this.url,
			      	imageUrl:this.pic
			      }
			    }else{
					return {
					  title: this.title,
					  path: '/pages/goods/goods_video_info?id='+this.id+'&title='+this.title+'&pic='+this.pic+'&url='+this.url,
					  imageUrl:this.pic
					}
				}
			},
		}
	}
</script>
<style scoped lang="less">
	page {
		background-color: #F1F1F1;
		width: 100%;
		height: auto;
	}
	.content{
		height: auto;
		/* position: relative; */
	}
    .swiper {
        height: 100vh;
        .swiper-item {
            height: 100vh;
            position: relative;
        }
    }
    .video {
        width: 100%;
        height: 100vh;
        position: relative;
    }
	.left_box {
		display: flex;
		width: 90%;
		align-items: center;
		margin-top: 24rpx;
		opacity: 2;
		border-radius: 8rpx;
		padding-left: 10rpx;
		position: fixed;
		bottom: 30rpx;
		background: #fff;
		left: 3%;
		padding: 15rpx;
		.ke_context {
			width: 516rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			height: 130rpx;
			display: flex;
			color: #000;
			justify-content: space-around;
			flex-direction: column;
		}
		.cover_image {
			margin-right: 10rpx;
			height: 130rpx;
			width: 130rpx;
		}
	}
	.itemss{
		display:flex;
		justify-content: space-between;
	}
	.go_btn{
		background-color: #007AFF;
		color: #FFFFFF;
		font-size: 24rpx;
		padding: 5rpx 15rpx;
		border-radius: 15rpx;
	}
	.price{
		width: 130rpx;
		position: absolute;
		bottom: 8rpx;
		left: 0;
		color: #FFFFFF;
		background-color: #00000085;
		font-size: 24rpx;
		text-align: center;
	}
</style>

