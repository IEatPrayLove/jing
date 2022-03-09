<template>
	<div class="shopbanner">
		<div class="thumb-example">
			<!-- swiper1 -->
			<swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
				
				<swiper-slide v-for="(item,index) in caseHistory" :key="index">
					<img :src="item" alt="">
				</swiper-slide>
				
				
				<!--     <div class="swiper-button-next swiper-button-white"
             slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white"
             slot="button-prev"></div> -->
			 
			</swiper>
			<!-- swiper2 Thumbs -->
			<swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
				<swiper-slide v-for="(item,index) in caseHistory" :key="index"><img :src="item" alt=""></swiper-slide>
				<swiper-slide v-for="(videoitem,index) in caseVideo" :key="index">
					<video ref="myVideo" :src="videoitem" ></video>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			caseHistory: {
				type: Array,
				default: () => {
					return []
				}
			},
			caseVideo: {
				type: Array,
				default: () => {
					return []
				}
			},
		},
		data() {
			return {
				swiperOptionTop: {
					loop: true,
					loopedSlides: 5, // looped slides should be the same
					spaceBetween: 10,
					// navigation: {
					//   nextEl: '.swiper-button-next',
					//   prevEl: '.swiper-button-prev'
					// }
				},
				swiperOptionThumbs: {
					loop: true,
					loopedSlides: 5, // looped slides should be the same
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 'auto',
					touchRatio: 0.2,
					slideToClickedSlide: true
				},
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
		}
	}
</script>

<style lang="less" scoped>
	.h-card-bottom {
		padding: 0px !important;
	}

	.shopbanner {
		width: 100%;

		.swiper {
			.swiper-slide {
				background-size: cover;
				background-position: center;
				width: 100% !important;
			}

			&.gallery-top {
				width: 100%;
				height: 300px;
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
				width: 60px !important;
				height: 60px;
				opacity: 0.4;

				/deep/img {
					width: 100%;
					height: 100%;
				}
			}

			&.gallery-thumbs .swiper-slide-active {
				opacity: 1;
			}
		}
	}
</style>
