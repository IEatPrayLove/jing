<template>
	<div class="goodstitle">
		<h-card>
			<div class="godstop" style="font-size: 15px;">
				<div class="goods_title">【{{ info.brand }}】{{info.title}}</div>
				<div v-clipboard:copy="info.link" v-clipboard:success="onCopy" v-clipboard:error="onError"
					class="goods_href">复制链接<i></i></div>
			</div>
			<div class="goods_icon">
				<i  v-if="info.goods_tag == '安心购'" class="anxin_icon"></i>
				<i  v-if="info.goods_tag == '随心推'" class="suixin_icon"></i>
			</div>
			<div class="goodsnum">
				<div class="goodsitem">
					<div>直播价</div>
					<div>{{info.price}}</div>
				</div>
				<div class="goodsitem">
					<div>佣金</div>
					<div>{{info.commission}}%</div>
				</div>
				<div class="goodsitem">
					<div>公开</div>
					<div style="color:#000">{{info.commission_public}}%</div>
				</div>
			</div>
			<div class="goodsset">
				<div>总销量&nbsp;{{info.sales}}</div>
				<div>总库存&nbsp;{{info.now_coun}}</div>
				<div>{{info.talent}}&nbsp;个达人在带</div>
				<div>评价&nbsp;<span style="color: #007aff;cursor: pointer;" @click="goGoodsDetails(info.link)">&nbsp;{{info.comment_count || 0}} 条评价</span></div>

				<!-- <div class="goodicon">
					<svg t="1641615387875" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="3553" width="16" height="16">
						<path
							d="M580.266667 0v247.808a266.922667 266.922667 0 0 0-136.533334 0V0zM512 785.066667a249.856 249.856 0 0 0 68.266667-8.874667V1024h-136.533334v-247.808a249.856 249.856 0 0 0 68.266667 8.874667zM273.066667 178.858667l100.352 98.304a273.066667 273.066667 0 0 0-96.256 96.256L178.858667 273.066667 101.717333 198.656 197.973333 101.717333zM922.282667 826.026667l-96.256 96.256-75.093334-76.458667-100.352-98.986667a265.557333 265.557333 0 0 0 96.256-96.256zM247.808 443.733333a266.922667 266.922667 0 0 0 0 136.533334H0v-136.533334zM1024 443.733333v136.533334h-247.808a266.922667 266.922667 0 0 0 0-136.533334zM373.418667 746.837333L273.066667 845.824l-75.093334 76.458667-96.256-96.256 175.445334-175.445334a265.557333 265.557333 0 0 0 96.256 96.256zM922.282667 198.656L845.141333 273.066667l-98.304 100.352a273.066667 273.066667 0 0 0-96.256-96.256L750.933333 178.858667l75.093334-77.141334z"
							p-id="3554" fill="#81a4d8"></path>
						<path
							d="M915.456 443.733333a397.994667 397.994667 0 0 0-68.266667-168.618666A387.754667 387.754667 0 0 0 750.933333 178.858667a397.312 397.312 0 0 0-169.301333-68.266667 382.293333 382.293333 0 0 0-136.533333 0 389.802667 389.802667 0 0 0-172.032 68.266667A358.4 358.4 0 0 0 178.858667 273.066667a397.994667 397.994667 0 0 0-68.266667 168.618666 382.293333 382.293333 0 0 0 0 136.533334 397.994667 397.994667 0 0 0 68.266667 168.618666A371.370667 371.370667 0 0 0 273.066667 845.824a397.312 397.312 0 0 0 168.618666 68.266667 382.293333 382.293333 0 0 0 136.533334 0 397.312 397.312 0 0 0 168.618666-68.266667A371.370667 371.370667 0 0 0 845.141333 750.933333a397.994667 397.994667 0 0 0 68.266667-168.618666 382.293333 382.293333 0 0 0 0-136.533334z m-168.618667 204.8a265.557333 265.557333 0 0 1-96.256 96.256 255.317333 255.317333 0 0 1-68.266666 29.354667 266.922667 266.922667 0 0 1-136.533334 0 255.317333 255.317333 0 0 1-68.266666-29.354667 265.557333 265.557333 0 0 1-100.352-94.208 247.125333 247.125333 0 0 1-29.354667-68.266666 266.922667 266.922667 0 0 1 0-136.533334 255.317333 255.317333 0 0 1 29.354667-68.266666 273.066667 273.066667 0 0 1 96.256-100.352 255.317333 255.317333 0 0 1 68.266666-29.354667 266.922667 266.922667 0 0 1 136.533334 0 255.317333 255.317333 0 0 1 68.266666 29.354667 273.066667 273.066667 0 0 1 96.256 96.256 255.317333 255.317333 0 0 1 29.354667 68.266666 266.922667 266.922667 0 0 1 0 136.533334 247.125333 247.125333 0 0 1-25.258667 72.362666z"
							p-id="3555" fill="#81a4d8"></path>
					</svg>
					商品规格
				</div> -->
			</div>
			<div class="goodsbtn">
				<div class="goodsbtn_txt" v-clipboard:copy="info.link" v-clipboard:success="onCopy" v-clipboard:error="onError">添加橱窗</div>
				<div class="goodsbtn_txt" @click="getGoods(info.id)">免费领样</div>
				<div class="goodsbtn_txt" @click="LookShopInfo(info.shop_id)">直联商家</div>
				<div class="goodsbtn_txt goodicon" @click="shouka">直播手卡</div>
			</div>
		</h-card>
	</div>
</template>

<script>
	export default {
		props: {
			info: {
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				user: JSON.parse(localStorage.getItem("user")),
				token: localStorage.getItem("token"),
			}
		},
		methods: {
			// 复制成功时的回调函数
			onCopy(e) {
				this.$message.success("高佣链接已复制 打开抖音精选联盟添加橱窗！")
			},
			// 复制失败时的回调函数
			onError(e) {
				this.$message.error("抱歉，复制失败！")
			},
			
			// 跳转商品详情
			goGoodsDetails (link) {
				window.location.href = link;
			},
			
			shouka() {
				this.$alert(
					"请前往小程序端查看直播手卡内容~", {
						confirmButtonText: "朕知道了",
						callback: (action) => {},
					}
				);
			},
			//免费领样
			getGoods(id) {
				if (this.user) {
					this.$axios({
						url: "Goods/getGoods",
						method: "get",
						params: {
							token: this.token,
							id: id,
						},
					}).then((res) => {
						if (res.data.status == 0) {
							this.$message.success("领样申请成功，请前往带货助手查看状态~")
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error('登录后才能操作哟');
					return false
				}
			},
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
		}
	}
</script>

<style lang="less" scoped>
	.goodstitle {
		/deep/.h-card-bottom {
			.godstop {
				display: flex;
				position: relative;
				.goods_title {
					margin-right: 100px;
					font-size: 18px;
					font-weight: 600;
					line-height: 30px;
				}

				.goods_href {
					color: #547BB3;
					cursor: pointer;
					border: 1px solid #547BB3;
					padding: 1px;
					font-size: 12px;
					height: 20px;
					position: absolute;
					right: 50px;
					top: 50%;
					transform: translate3d(0,-50%,0);
					i{
						position: absolute;
						top: 50%;
						right: -20px;
						transform: translate3d(0,-50%,0);
						background-image: url(../../../assets/copy.png);
						background-size: 100%;
						background-repeat: no-repeat;
						width: 15px;
						height: 15px;
						display: block;
					}
				}
				
			}

			.goods_icon {
				display: flex;
				margin-bottom: 20px;
				padding-left: 9px;
				.anxin_icon {
					display: block;
					background-image: url(../../../assets/anxin-icon.png);
					background-repeat: no-repeat;
					background-size: 100%;
					width: 90px;
					height: 30px;
					margin-right: 20px;
				}
				.suixin_icon {
					display: block;
					background-image: url(../../../assets/suixin-icon.png);
					background-repeat: no-repeat;
					background-size: 100%;
					width: 90px;
					height: 30px;
				}
			}

			.goodsnum {
				display: flex;
				font-size: 16px;

				.goodsitem {
					text-align: center;
					width: 15%;

					>div {
						margin-right: 40px;
					}

					>div:nth-of-type(2) {
						color: red;
						margin-top: 10px;
					}
				}
			}

			.goodsset {
				margin: 20px 0;
				display: flex;
				align-items: center;
				padding-left: 9px;
				.goodicon {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}

				>div {
					// margin-right: 100px;
					width: 15%;
				}
			}

			.goodsbtn {
				display: flex;
				padding-left: 9px;
				.goodsbtn_txt{
					background: #edf2ff!important;
					border-color: #547BB3!important;
					color: #547BB3!important;
				}
				.goodsbtn_txt:first-child{
					color: #fff!important;
					background: #547BB3!important;
					border-color: #547BB3!important;
				}
				>div {
					padding: 4px 6px;
					border: 1px solid #000;
					border-radius: 6px;
					margin-right: 30px;
					cursor: pointer;
				}

				>div:hover {
					background: #81a4d8;
					border: 1px solid #81a4d8;
					color: #fff;
				}
			}
		}
	}
</style>
