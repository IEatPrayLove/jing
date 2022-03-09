<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" @change="changefun" @animationfinish="animationfinishfun" :current="1" :circular="true"
					 :vertical="true">
						<swiper-item v-for="(item,index) in PayVideo" :key="index">
							<view class="swiper-item">
								<video :custom-cache="false" loop="true" class="video" :id="'id'+index" :enable-play-gesture="true"
								 :enable-progress-gesture="true" :controls="false" :src="item.url" :show-center-play-btn="false">
								</video>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view v-if="is_active">
			<view class="left">
				<view class="left_box">
					<image :src="logo" class="cover_image" mode="aspectFill"></image>
					<view class="ke_context">
						<cover-view class="">{{name}}</cover-view>
						<view class="itemss">
							<view class="price_point">地址  {{address}}</view>
							
							<view class="go_btn" @tap="ShopInfo">逛一逛</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	export default {
		data() {
			return {
				id:"",
				data:[],
				index_: 1,
				index: '1',
				is_active: true,
				active: 2,
				PayVideo: [],
				current_i: 2,
				_arr: [],
				len: 0,
				name:"",
				address:"",
				logo:""
			}
		},
		onLoad(options) {
			this.id = options.id
			this.name =  options.name
			this.address = options.address
			//this.logo = options.logo
			// var videos = JSON.parse(options.video)
			// videos.forEach((res, index) => {
			//     videos[index] = {'url':res}
			// })
			// this.data = videos
			this.getVideo(options.id)
		},
		props: {
			ind: {
				type: Number,
				default: 0
			},
		},
		mounted() {
		    
		},
		methods: {
			setVideos:function(videos){
				//uni.setStorageSync('video', this.data);
				let ind = 0
				this.index = ind
				const video = videos;
				const len = video.length
				let b_arr = []
				let s_arr = []
				video.forEach((res, index) => {
				    if (ind <= index) {
				        b_arr.push(res)
				    } else {
				        s_arr.push(res)
				    }
				})
				let _arr = b_arr.concat(s_arr.reverse())
				_arr = _arr.map(res => {
				    res['istrue'] = false
				    return res
				})
				_arr[0]['istrue'] = true
				const PayVideo = _arr
				this.PayVideo = PayVideo
				this._arr = _arr
				this.len = len
				this.$nextTick(function() {
				    let videoContext = uni.createVideoContext('id1')
				    videoContext.play()
				})
			},
			getVideo:function(id){
				uni.showLoading({
					title: '加载中',
				})
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Shop/Info',{id:id},'GET',  function(eve) {
						var eves = eve.result
						uni.setNavigationBarTitle({
							title:eves.name
						})
						that.logo = eves.logo
						var videos = eves.video
						videos.forEach((res, index) => {
						    videos[index] = {'url':res}
						})
						that.setVideos(videos)
						//that.data = videos
						uni.hideLoading()
				})
			},
			ShopInfo:function(){
				uni.navigateTo({
					url: '/pages/shop/shop_info?id='+this.id
				})
			},
			changefun(e) {
				this.is_active = false
				let current = e.detail.current
				let {
					len,
					PayVideo,
					active,
					_arr,
					t,
					index_
				} = this
				let videoContext = uni.createVideoContext('id' + index_)
				videoContext.pause()
				this.PayVideo = PayVideo
			},
			animationfinishfun(e) {
				let {
					index_,
					len,
					PayVideo,
					active,
					_arr,
					t
				} = this
				let current = e.detail.current
				this.is_active = true
				PayVideo[current]['istrue'] = true
				this.PayVideo = PayVideo
				let videoContext = uni.createVideoContext('id' + index_)
				videoContext.pause()
				videoContext = uni.createVideoContext('id' + current)
				videoContext.play()
				this.index_ = current
				if (PayVideo.length == len) {
					return
				}
				this.PayVideo.push(_arr[active])
				this.active += 1
			},
			/**
			 * 分享给好友
			 * @param {Object} res
			 */
			onShareAppMessage(res) {
			    if (res.from === 'button') {// 来自页面内分享按钮
			      return {
			        title: this.name,
			        path: '/pages/shop/shop_video?id='+this.id+'&name='+this.name+'&address='+this.address+'&logo='+this.logo+'&video='+JSON.stringify(this.video),
			      	imageUrl:'../../static/image/banner.png'
			      }
			    }else{
					return {
					  title: this.name,
					  path: '/pages/shop/shop_video?id='+this.id+'&name='+this.name+'&address='+this.address+'&logo='+this.logo+'&video='+JSON.stringify(this.video),
					  imageUrl:'../../static/image/banner.png'
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
</style>
