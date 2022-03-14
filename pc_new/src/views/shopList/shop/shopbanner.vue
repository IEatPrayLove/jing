<template>
	<div class="shopbanner">
		<div class="thumb-example">
			
			<swiper v-show='isVideo' class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
				
				<swiper-slide v-for="(items,index) in caseVideo" :key="index">
					<video style="width:100%;height:100%;object-fit: fill;" controls="controls">
						<source :src="items" type="video/mp4"></source>
						<source :src="items" type="video/ogg"></source>
						<source :src="items" type="video/webm"></source>
					</video>
				</swiper-slide>
				
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
				
			</swiper>
			
			<swiper v-show='isVideo' class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
				<swiper-slide v-for="(items,index) in caseVideo" :key="index">
					<video style="width:100%;height:100%;object-fit: fill;">
						<source :src="items" type="video/mp4"></source>
						<source :src="items" type="video/ogg"></source>
						<source :src="items" type="video/webm"></source>
					</video>
				</swiper-slide>
			</swiper>
			
			<!-- swiper1 -->
			<swiper v-show="isImage" class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
				
				<swiper-slide v-for="(item,index) in caseHistory" :key="index" class="swiper-slide swiper-slide-active">
					<img :src="item" alt="">
				</swiper-slide>
				
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
			</swiper>
			
			<!-- swiper2 Thumbs -->
			<swiper v-show="isImage" class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
				<swiper-slide v-for="(item,index) in caseHistory" :key="index"><img :src="item" alt=""></swiper-slide>
			</swiper>
			
			<div class="banner_icon">
				<div class="video_icon">
					<div class="video_icon_one" @click="VideoImage('video')">
						<img src="../../../assets/video-icon.png" >
						<div style="font-size: 14px; line-height: 16px; border-radius: 13px;">{{caseVideo.length}}</div>
					</div>
					<div class="video_icon_two" @click="VideoImage('img')">
						<img src="../../../assets/img-icon.png" >
						<div style="font-size: 14px; line-height: 16px; border-radius: 13px;">{{caseHistory.length}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			caseVideo: {
				type: Array,
				default: () => {
					return []
				}
			},
			caseHistory: {
				type: Array,
				default: () => {
					return []
				}
			},
			
		},
		data() {
			return {
				swiperOptionTop: {
					loopedSlides: 5, // looped slides should be the same
					spaceBetween: 10,
					navigation: {
					  nextEl: '.swiper-button-next',
					  prevEl: '.swiper-button-prev'
					}
				},
				swiperOptionThumbs: {
					loopedSlides: 1, // looped slides should be the same
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 'auto',
					touchRatio: 0.2,
					slideToClickedSlide: true
				},
				isVideo: true,
				isImage: false,
				// caseHistory: [
				//   require('../../assets/bgimgs/bg0.jpg'),
				//   require('../../assets/bgimgs/bg1.jpg'),
				//   require('../../assets/bgimgs/bg2.jpg'),
				//   require('../../assets/bgimgs/bg3.jpg'),
				// ]
			}
		},
		mounted() {
			this.$nextTick(() => {
				const swiperTop = this.$refs.swiperTop.$swiper
				const swiperThumbs = this.$refs.swiperThumbs.$swiper
				swiperTop.controller.control = swiperThumbs
				swiperThumbs.controller.control = swiperTop
			})
		},
		methods:{
			VideoImage(type){
				if(type == 'video'){
					this.isVideo = true;
					this.isImage = false;
				}else{
					this.isVideo = false;
					this.isImage = true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.h-card-bottom {
		padding: 0px !important;
	}

	.shopbanner {
		width: 100%;
		position: relative;
		
		.swiper-button-prev,
		.swiper-container-rtl .swiper-button-next {
			background-image: url(../../../assets/banner-left-icon.png);
			background-repeat: no-repeat;
			background-size: 100%;
		}
		
		.swiper-button-next, 
		.swiper-container-rtl .swiper-button-prev {
			background-image: url(../../../assets/banner-right-icon.png);
			background-repeat: no-repeat;
			background-size: 100%;
		}
		
		.swiper-button-prev, 
		.swiper-button-next{
			// height: 100%;
		}
		
		.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after,
		.swiper-button-prev:after, .swiper-button-next:after{
			display: none;
		}
	
		.swiper {
			.swiper-slide {
				background-size: cover;
				background-position: center;
				width: 100% !important;
			}

			&.gallery-top {
				width: 100%;
				height: 430px;
				border-radius: 12px;
				position: relative;
				display: inline-block;
				overflow: hidden;

				/deep/img {
					width: 100%;
					height: 100%;
					vertical-align: top;
				}
			}

			&.gallery-thumbs {
				margin-top: 10px;
				display: flex;

				/deep/.swiper-wrapper {
					position: relative;
					margin-right: 20px;
					cursor: pointer;
					display: flex;
					transform: none !important;
				}
			}

			&.gallery-thumbs .swiper-slide {
				border-radius: 8px;
				width: 100px !important;
				height: 60px;
				margin-right: 5px;
				opacity: 0.52;
				/deep/img {
					width: 100%;
					height: 100%;
				}
			}

			&.gallery-thumbs .swiper-slide-active {
				opacity: 1;
			}
		}
		
		.banner_icon{
			width: 526px;
			height: 26px;
			position: absolute;
			left: 0vw;
			bottom: 120px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			z-index: 99;
			.video_icon{
				background-color: rgba(0, 0, 0, 0.4);
				height: 26px;
				font-size: 14px;
				font-family: "PingFang SC";
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 13px;
				.video_icon_one{
					height: 26px;
					display: flex;
					padding-left: 13px;
					padding-right: 13px;
					justify-content: center;
					align-items: center;
					flex-direction: row;
					color: rgb(255, 255, 255);
					border-radius: 13px;
					background: rgb(55, 115, 255);
					img{
						width: 20px;
						height: 15px;
						margin-right: 7px;
					}
				}
				.video_icon_two{
					display: flex;
					height: 26px;
					padding-left: 13px;
					padding-right: 13px;
					justify-content: center;
					align-items: center;
					flex-direction: row;
					color: rgba(255, 255, 255, 0.82);
					border-radius: 13px;
					background: transparent;
					img{
						width: 20px;
						height: 15px;
						margin-right: 7px;
					}
				}
			}
		}
	}
</style>
