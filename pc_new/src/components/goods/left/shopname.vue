<template>
	<div class="goodname">
		<h-card @click.native="goShop(shopId)">
			<img :src="info.logo" alt="">
			<div>{{info.name}}</div>
			<div>
				<div>商品:<span>{{info.goods}}</span></div>
				<div>商家:<span>{{info.shop}}</span></div>
				<div>物流:<span>{{info.wuliu}}</span></div>
			</div>
			<div>
				<img src="../../../assets/address.png" alt="">
				<span style="color: #999;">{{info.address}}</span>
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
			},
			shopId: {
				default: () => {
					return []
				}
			},
		},
		methods: {
			goShop(shopId) {
				this.$router.push({
					path: '/shop',
					query: {
						uid: shopId
					}
				})
				sessionStorage.shopId = shopId
				document.documentElement.scrollTop = 0
			}
		}
	}
</script>

<style lang="less" scoped>
	.goodname {
		/deep/.h-card-bottom {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10px 0px !important;

			>img {
				width: 200px;
				height: 200px;
				// border-radius: 50%;
				// border: 1px solid #999;
			}

			>div:nth-of-type(1) {
				font-size: 18px;
				margin: 10px 0;
				font-weight: 600;
			}

			>div:nth-of-type(2) {
				display: flex;
				margin: 5px 0px;

				>div {
					margin-right: 8px;
				}

				span {
					color: red;
				}
			}

			>div:nth-of-type(3) {
				margin-top: 10px;

				>img {
					width: 20px;
					height: 20px;
					margin-right: 8px;
					vertical-align: sub;
				}
			}
		}
	}
</style>
