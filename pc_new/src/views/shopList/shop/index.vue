<template>
	<div class="shop">
		<h-card>
			<div class="shoptop">
				<ShopBanner :caseVideo="info.video" :caseHistory="info.imgs"  />
				<ShopTop :goodsdata="info" />
			</div>
		</h-card>
		<div class="shopcontent">
			<div>
				<!-- <h-card>
          <div>品牌简介:</div>
          <img src="../../../assets/goods.jpg"
               alt="">
        </h-card> -->

				<ShopMsg :info="info" :shopTitle="shopTitle" />

				<ShopAnalyse title="店铺概览" :info="info" />

				<Shopcard title="深度解析" :navlist="parList" />
				<Shopfile title="商家档案" :navlist="fillist" :suplist="info.cooperation" :abilitylist="info.comprehensive"
					:qualifications="info.qualifications" />


			</div>
			<div :class="['boxcard',isfixTab?'boxfixed':'boxab']" id='testNavBar'>
				<h-card>
					<div class='shoptitle'>
						<img :src="info.logo" alt="">
						<div>{{info.call_user}}</div>
						<div>运营总监</div>
						<div>实时在线，欢迎洽谈</div>
						<div>
							<div class="hongxin"></div>
							<div @click="LookShopWechat(info.id)" class="weixin">
								<i></i>
								<span>微信</span>
								</div>
							<div @click="LookShopInfo(info.id)" class="phone"><i></i><span>电话直联</span></div>
						</div>
					</div>
				</h-card>
			</div>
		</div>

		<Content :goodList="info.goods_list" />
		<div v-if="info.goods_list == null " style=" text-align: center;height: 100px;line-height: 100px;">暂无数据</div>
	</div>

</template>

<script>
	import ShopBanner from './shopbanner.vue'
	import ShopTop from '@/components/shop/shoptop.vue'
	import ShopMsg from '@/components/shop/shopmsg.vue'
	import Shopcard from '@/components/shop/shopcard.vue'
	import ShopAnalyse from '@/components/shop/shopanalyse.vue'
	import Shopfile from '@/components/shop/shopfile.vue'
	import Content from "./content.vue";
	import {
		ShopInfo
	} from "@/utils/request.js";
	export default {
		components: {
			ShopBanner,
			Content,
			ShopTop,
			ShopMsg,
			Shopcard,
			ShopAnalyse,
			Shopfile
		},
		data() {
			return {
				user: JSON.parse(localStorage.getItem("user")),
				token: localStorage.getItem("token"),
				info: [],
				parList: [{
						id: 0,
						name: "需求分析",
						isSelect: true,
						children: []
					},
					{
						id: 1,
						name: "品牌分析",
						isSelect: false,
						children: []

					},
					{
						id: 2,
						name: "实例分析",
						isSelect: false,
						children: []
					},
				],
				fillist: [{
						id: 0,
						name: '合作支持',
						isSelect: true
					},
					{
						id: 1,
						name: '履约能力',
						isSelect: false
					},
					{
						id: 2,
						name: '企业资质',
						isSelect: false
					},
				],
				isfixTab: false,

			}
		},
		computed: {
			shopID() {
				return this.$route.query.uid;
			},
			shopTitle() {
				return JSON.parse(sessionStorage.shopId)
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleTabFix, true)
			//获取商家信息
			ShopInfo({
				id: this.$route.query.uid
			}).then((vips) => {
				if (vips.status == 0) {
					this.info = vips.result
					this.parList[0].children = vips.result.demand
					this.parList[1].children = vips.result.brand
					this.parList[2].children = vips.result.strength_analysis
					sessionStorage.shopId = JSON.stringify(vips.result)
				} else {
					this.$message.error(vips.msg);
					return false;
				}
			})
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleTabFix, true)
		},
		methods: {
			//直联商家
			LookShopInfo(id) {
				if (this.user) {
					this.$axios({
						url: "Shop/lookPhone",
						method: "get",
						params: {
							token: this.token,
							id: id,
						},
					}).then((res) => {
						if (res.data.status == 0) {
							this.$alert(
								"商家联系方式为:" +
								res.data.result, {
									confirmButtonText: "朕知道了",
									callback: (action) => {},
								}
							);
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error('登录后才能查看哟');
					return false
				}
			},
			LookShopWechat(id) {
				if (this.user) {
					this.$axios({
						url: "Shop/lookWechat",
						method: "get",
						params: {
							token: this.token,
							id: id,
						},
					}).then((res) => {
						if (res.data.status == 0) {
							this.$alert(
								"商家微信为:" +
								res.data.result, {
									confirmButtonText: "朕知道了",
									callback: (action) => {},
								}
							);
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error('登录后才能查看哟');
					return false
				}
			},
			handleTabFix() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				
				if(scrollTop >= 75){
					console.log(scrollTop);
					var offsetTop = document.querySelector('#testNavBar').offsetTop
					var shopheight = document.querySelector('.shop').offsetHeight
				}
				
				scrollTop > offsetTop ? this.isfixTab = true : this.isfixTab = false
				// console.log(scrollTop, offsetTop);
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.shopbanner {
		width: 70%;
	}

	.shop {
		width: 100%;
		max-width: 1200px;
		margin: 10px auto;
		position: relative;
		/deep/.h-card .h-card-bottom {
			padding: 20px !important;
		}

		>div:nth-of-type(1) {
			width: 70%;
			background-color: #ffffff;
			border-radius: 10px;

			.shoptop {
				display: flex;
			}

			>div:nth-of-type(2) {
				margin-top: 10px;
			}
		}

		.shopcontent {
			display: flex;

			>div:nth-of-type(1) {
				width: 70%;

				.h-card {
					/deep/.h-card-bottom {
						// display: flex;
						// justify-content: space-around;
						// align-items: center;

						>img {
							width: 200px;
							height: 200px;
						}
					}
				}
			}
		}

		.boxcard {
			width: 28%;

			.h-card {
				/deep/.h-card-bottom {
					.shoptitle {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						>img {
							border-radius: 50%;
							width: 180px;
							height: 180px;
							margin-bottom: 30px;
						}

						>div:nth-of-type(1) {
							font-size: 20px;
							margin-bottom: 18px;
						}

						>div:nth-of-type(2) {
							font-size: 20px;
							padding: 6px;
							background: #FF6254;
							color: #fff;
							border-radius: 4px;
							margin-bottom: 60px;
						}

						>div:nth-of-type(3) {
							font-size: 18px;
							margin-bottom: 40px;
						}

						>div:nth-of-type(4) {
							width: 100%;
							display: flex;
							justify-content: space-around;
							font-size: 18px;
							text-align: center;
							height: 28px;

							>div:nth-of-type(1) {
								flex: 1;
							}

							>div:nth-of-type(2) {
								background: #abbed9;
								flex: 2;
							}

							>div:nth-of-type(3) {
								background: #7191c0;
								flex: 2;
							}
						}
					}
				}
			}
		}

		.boxfixed {
			position: fixed;
			right: 30px;
			top: 0;
			width: 335px;
			z-index: 10;
		}

		.boxab {
			position: absolute;
			top: 0;
			right: 0;
			/deep/.h-card{
				margin: 0px !important;
			}
			.hongxin{
				display: block;
				background-image: url(../../../assets/hongxin-icon.png);
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center;
				width: 28px;
				height: 28px;
			}
			.weixin{
				// position: relative;
				// padding-left: 10px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				border-radius: 8px;
				color: #fff;
				font-weight: normal;
				i{
					// position: absolute;
					// left: 10px;
					// top: 50%;
					// transform: translate3d(0,-50%,0);
					display: block;
					background-image: url('../../../assets/wechat-icon.png');
					background-repeat: no-repeat;
					background-size: 20px 20px;
					background-position: 100% 100%;
					width: 20px;
					height: 20px;
				}
				span{
					margin-left: 10px;
				}
			}
			
			.phone{
				// position: relative;
				// padding-left: 10px;
					display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				border-radius: 8px;
				color: #fff;
				font-weight: normal;
				margin-left: 5px;
				i{
					// position: absolute;
					// left: 10px;
					// top: 50%;
					// transform: translate3d(0,-50%,0);
					display: block;
					background-image: url(../../../assets/phone-icon.png);
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
					width: 20px;
					height: 20px;
				}
			}
		}
	}
</style>
