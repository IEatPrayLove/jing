<template>
	<h-card>
		<div class="goods_list">
			<div class="titless">
				爆款商品
			</div>
			<div class="goods">
				<div class="goods-list" v-for="(item, index) in goodList" :key="index" @click="goGoods(item)">
					<div class="image">
						<img :src="item.thumb" alt="" />
						<div class="mask">{{ item.talent }}个达人在带</div>
					</div>
					<div class="title">{{ item.title }}</div>
					<div class="remarks">
						<div class="price">
							<div class="number">{{ item.price }}</div>
							<div class="name">价格</div>
						</div>
						<div class="highCommission">
							<div class="number">{{ item.commission }}%</div>
							<div class="name">高佣</div>
						</div>
						<div class="commission">
							<div class="number">{{ item.commission_money }}</div>
							<div class="name">佣金</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</h-card>
</template>
<script>
	export default {
		props: {
			goodList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		methods: {
			goGoods(item) {
				this.$router.push({
					path: '/goods',
					query: {
						uid: item.id
					}
				})
			},

		}
	};
</script>
<style lang="less" scoped>
	
	/deep/.h-card-bottom{
		padding: 20px !important;
	}
	
	.goods_list 
	{
		.titless {
			font-size: 18px;
			font-weight: 600;
			line-height: 30px;
		}
		
		.goods 
		{	
			margin-top: 20px;
			display: flex;
			grid-template-columns: repeat(5, 192px);
			grid-column-gap: 16px;
			margin-bottom: 40px;

			.goods-list {
				background-color: #fff;
				box-shadow: 6px 6px 5px rgba(97, 112, 241, 0.26);
				height: 272px;
				width: 232px;
				border-radius: 8px;
				cursor: pointer;

					.image {
						position: relative;
						width: 100%;
						overflow: hidden;
						img {
							width: 100%;
							height: 176px;
							padding: 8px;
						}

						.mask {
							position: absolute;
							bottom: 0;
							left: 8px;
							width: 100%;
							height: 30px;
							line-height: 30px;
							font-size: 14px;
							color: white;
							text-align: center;
							background-color: #0000006b;
						}
					}

					.title {
						text-align: left;
						margin: 4px 8px;
						font-size: 12px;
						font-weight: bold;
						overflow: hidden;
						-webkit-line-clamp: 1;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}

					.remarks {
						display: flex;
						align-items: center;
						justify-content: center;

						.price,
						.highCommission,
						.commission {
							width: 52px;
							line-height: 16px;
							text-align: center;

							.number {
								color: red;
								margin-top: 4px;
							}

							.name {
								color: #9aacc1;
								margin: 2px;
							}
						}
					}
				}
		}

			
	}
</style>
