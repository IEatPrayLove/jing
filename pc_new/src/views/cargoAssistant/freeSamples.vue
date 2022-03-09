<template>
	<div>
		<!-- <h-card>
      <Sampletop />
    </h-card> -->
		<h-card>
			<Samplenav @order_types="order_types" />
		</h-card>
		<h-card>
			<div class="goods" v-for="(item,index) in tableData" :key="index">
				<div>
					<div>订单号：{{item.order_sn}}</div>
					<div>快递：{{item.express}}【单号<span style="color: #409EFF;">{{item.express_number}}</span>】</div>
					<div>寄样状态：{{item.express_status}}</div>
					<div>合作状态：{{item.status_msg}}【{{item.msg}}】</div>
					<div v-if="item.status==2 && item.order_status==1" @click="overOrder(item.id)">确认收货</div>
				</div>
				<div>
					<img :src="item.goods.thumb" alt="" @click.native="goGoods(item.goods.id)" />
					<div style="padding: 0px 10px;">到手价: <span style="color: red;">{{item.goods.price}}</span> </div>
					<div style="padding: 0px 10px;">佣金: <span style="color: red;">{{item.goods.commission}}%</span>
					</div>
				</div>
				<div>
					<div @click.native="goShop(item.shop.id)">店铺名称:<span
							style="color: #409EFF;">{{item.shop.name}}</span></div>
					<div>商品:<span>{{item.shop.goods}}</span></div>
					<div>商家:<span>{{item.shop.shop}}</span></div>
					<div>物流:<span>{{item.shop.wuliu}}</span></div>
				</div>
			</div>
		</h-card>
	</div>
</template>

<script>
	import Sampletop from "@/components/Sample/sampletop.vue"
	import Samplenav from "@/components/Sample/samplenav.vue"
	export default {
		// components: {
		//   Sampletop, Samplenav
		// },
		components: {
			Samplenav
		},
		data() {
			return {
				order_types: -1,
				tableData: [],
				token: localStorage.getItem("token")
			};
		},
		mounted() {
			this.getList();
		},
		methods: {
			overOrder(id) {
				console.log(id)
				this.$axios({
					url: "Assistant/overOrder",
					method: "post",
					data: {
						id: id,
						token: this.token
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.$message({
							message: "操作成功~",
							type: "success",
						});
						this.getList();
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			goGoods(itemId) {
				this.$router.push({
					path: '/goods',
					query: {
						uid: itemId
					}
				})
			},
			goShop(itemId) {
				this.$router.push({
					path: '/shop',
					query: {
						uid: itemId
					}
				})
				sessionStorage.shopId = JSON.stringify(item)
				document.documentElement.scrollTop = 0
			},
			//获取达人列表
			getList() {
				this.$axios({
					url: "Assistant/order_list",
					method: "get",
					params: {
						type: this.order_types,
						token: this.token,
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.tableData = res.data.result;
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	/deep/.h-card-bottom {
		.goods {
			padding: 30px 0px;

			>div:nth-of-type(1) {
				display: flex;
				>div:nth-of-type(5) {
					cursor: pointer;
					color: #4b70a8;
				}
				div{
					padding-right: 30px;
				}
			}

			>div:nth-of-type(2) {
				display: flex;
				align-items: center;
				margin: 20px 0;

				img {
					width: 80px;
					height: 80px;
					margin-right: 100px;
					border-radius: 8px;
				}
			}

			>div:nth-of-type(3) {
				display: flex;

				>div {
					margin-right: 20px;
				}
			}
		}
	}
</style>
