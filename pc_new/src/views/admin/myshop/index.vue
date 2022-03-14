<template>
	<div class="myshop">
		<h-card>
			<div class="shop" v-if="!showShop">
				<div class="shopname">我的店铺</div>
				<div>
					<el-table :data="tableData" style="width: 100%" max-height="450">
						<el-table-column label="类型" width="150">
							<template slot-scope="scope">
								<div v-if="scope.row.type == 1">小店</div>
								<div v-else-if="scope.row.type == 2">供应链</div>
								<div v-else-if="scope.row.type == 3">源厂</div>
								<div v-else>大牌</div>
							</template>
						</el-table-column>
						<el-table-column prop="name" label="店铺名称" width="120">
						</el-table-column>
						<el-table-column prop="categories" label="类目" width="120">
						</el-table-column>
						<el-table-column label="状态" width="120">
							<template slot-scope="scope">
								<div v-if="scope.row.status == 1">已通过</div>
								<div v-else-if="scope.row.status == 2">待审核</div>
								<div v-else>审核未通过</div>
							</template>
						</el-table-column>
						<el-table-column prop="status_msg" label="审核意见" width="120">
						</el-table-column>
						<el-table-column fixed="right" label="详情/操作" width="120">
							<template slot-scope="scope">
								<el-button @click.native.prevent="createShop(scope.$index, tableData)" type="text"
									size="small">
									修改
								</el-button>
							</template>
						</el-table-column>
					</el-table>
					<div v-if="tableData.length == 0" class="createshop">
						<div @click="createShop">创建店铺</div>
					</div>
				</div>
			</div>
			<Shop v-if="showShop" @click="closeShop" :shopid="edit_id" />
		</h-card>
	</div>
</template>

<script>
	import Shop from "../shop/shop.vue";
	import {
		ShopList
	} from "@/utils/request.js";
	export default {
		components: {
			Shop
		},
		methods: {
			createShop(index, row) {
				this.showShop = true;
				if (row) {
					this.edit_id = row[index].id;
				}
			},
			closeShop() {
				this.showShop = false;
				//获取店铺列表
				ShopList({
					token: localStorage.getItem("token")
				}).then((shops) => {
					if (shops.status == 0) {
						this.tableData = shops.result;
					} else {
						this.$message.error(shops.msg);
						return false;
					}
				});
			},
		},
		mounted() {
			//获取店铺列表
			ShopList({
				token: localStorage.getItem("token")
			}).then((shops) => {
				if (shops.status == 0) {
					this.tableData = shops.result;
				} else {
					this.$message.error(shops.msg);
					return false;
				}
			});
		},
		data() {
			return {
				edit_id: "0",
				tableData: [],
				showShop: false,
			};
		},
	};
</script>

<style lang="less" scoped>
	.myshop {
		.h-card {
			margin: 0;

			/deep/.h-card-bottom {
				.shop {

					// min-height: 440px;
					.shopname {
						padding: 5px 10px;
						background: #a5b2ca;
						width: 100px;
						text-align: center;
						border-radius: 4px;
					}

					.cell {
						text-align: center;
					}

					.createshop {
						display: flex;
						align-items: center;
						justify-content: center;
						margin-top: 40px;

						>div {
							padding: 6px 10px;
							background: #a5b2ca;
							border-radius: 4px;
							cursor: pointer;
						}
					}
				}
			}
		}
	}
</style>
