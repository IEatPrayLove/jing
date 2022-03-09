<template>
	<div class="cooperation">
		<div class="cooperation_title">已合作/复盘</div>
		<div class="coopnavlist">
			<div v-for="item in coopnav" :key="item.id" :class="[item.isSelect ? 'isSelect' : '']"
				@click="checknav(item)">
				{{item.name}}
			</div>
		</div>
		<div>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="create_time" label="创建时间" width="100">
				</el-table-column>
				<el-table-column label="商品图" width="80">
					<template slot-scope="scope">
						<div class="usr_avatar">
							<img :src="scope.row.thumb" alt="" />
						</div>
					</template>
				</el-table-column>
				<el-table-column label="商品名称" width="200">
					<template slot-scope="scope">
						<div style="cursor: inherit;" @click="goGoods(scope.row.id)">{{ scope.row.goods_name }}</div>
					</template>
				</el-table-column>
				<el-table-column prop="talent_name" label="达人名称" width="80">
				</el-table-column>
				<el-table-column prop="price" label="销售额" width="80">
				</el-table-column>

			</el-table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				token: localStorage.getItem("token"),
				coopnav: [{
						id: 0,
						name: "全部",
						isSelect: true
					},
					{
						id: 2,
						name: "直播达人",
						isSelect: false
					},
					{
						id: 1,
						name: "短视频达人",
						isSelect: false
					},
					{
						id: 4,
						name: "招商团长",
						isSelect: false
					},
					{
						id: 3,
						name: "MCN机构",
						isSelect: false
					},
				],
				type: 0,
				tableData: []
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			goGoods (id) {
			    this.$router.push({
			      path: '/goods',
			      query: { uid: id }
			    })
			},
			checknav(item) {
				this.type = item.id;
				this.coopnav.map((v) =>
					v.id == item.id ? (v.isSelect = true) : (v.isSelect = false)
				);
				this.getList();
			},
			getList() {
				this.$axios({
					url: "Workbench/overList",
					method: "get",
					params: {
						token: this.token,
						type: this.type,
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.tableData = res.data.result;
					} else {
						this.$message.error(res.data.msg);
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.cooperation {
		.cooperation_title {
			font-size: 16px;
			font-weight: 600;
		}
		/deep/.el-table__header,
		/deep/.el-table__body,
		/deep/.el-table__empty-block{
			width: 100% !important;
		}
		.coopnavlist {
			display: flex;
			margin: 20px 0;
			background: #f3f3f3;
			padding: 6px 10px;
			border-radius: 6px;
			width: 50%;
			justify-content: space-between;
			align-items: center;
			.isSelect {
				color: #007aff;
			}
			>div {
				cursor: pointer;
				margin-right: 10px;
			}
		}

		/deep/.cell {
			text-align: center;
		}
	}
</style>
