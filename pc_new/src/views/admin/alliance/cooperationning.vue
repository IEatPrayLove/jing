<template>
	<div class="cooperation">
		<div class="cooperation_title">合作中</div>
		<div class="coopnavlist">
			<div v-for="item in coopnav" :key="item.id" :class="[item.isSelect ? 'isSelect' : '']"
				@click="checknav(item)">
				{{ item.name }}
			</div>
		</div>
		<div>
			<el-table :data="tableData" style="width: 100%">
			
				<el-table-column label="申请时间" width="100">
					<template slot-scope="scope">
						<span style="color: rgb(80, 117, 168);">{{scope.row.create_time}}</span>
					</template>
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
						<div style="cursor: pointer;color: rgb(80, 117, 168);" @click="goGoods(scope.row.id)">{{ scope.row.goods_name }}</div>
					</template>
				</el-table-column>
				<el-table-column prop="talent_name" label="达人名称" width="120">
				</el-table-column>
				<el-table-column prop="express_name" label="收件人" width="200">
				</el-table-column>
				<el-table-column prop="express_mobile" label="电话" width="120">
				</el-table-column>
				<el-table-column prop="address" label="寄样地址" width="200">
				</el-table-column>
				<el-table-column prop="express" label="快递"> </el-table-column>
				<el-table-column prop="express_number" label="订单号">
				</el-table-column>
				<el-table-column prop="over_time" label="收样时间"> </el-table-column>
				<el-table-column label="操作" align="center" width="120">
					<template slot-scope="scope">
						<el-button @click.native.prevent="expressRow(scope.$index, tableData)" type="text" size="small"
							v-if="!scope.row.is_show">
							发货
						</el-button>
						<div v-else>暂无操作可用</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-form ref="form" :model="form">
			<el-dialog title="发货操作" :append-to-body="is_first" :visible.sync="dialogVisible" width="30%"
				:before-close="handleClose">
				<span>
					<el-form-item label="快递公司名称">
						<el-input v-model="form.express" placeholder="请输入快递公司名称"></el-input>
					</el-form-item>
					<el-form-item label="快递单号">
						<el-input v-model="form.express_number" placeholder="请输入快递单号"></el-input>
					</el-form-item>
				</span>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="checkExpress">确 定</el-button>
				</span>
			</el-dialog>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				is_first: true,
				form: {
					token: localStorage.getItem("token"),
					express: "",
					express_number: "",
					id: 0,
				},
				dialogVisible: false,
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
				tableData: [],
			};
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
			handleClose(done) {
				done();
			},
			expressRow(index, rows) {
				this.form.id = rows[index].id;
				this.dialogVisible = true;
			},
			checkExpress() {
				if (this.form.express || this.form.express_number) {
					this.$axios({
						url: "Workbench/orderOpear",
						method: "post",
						data: this.form,
					}).then((res) => {
						if (res.data.status == 0) {
							this.$message({
								message: "发货成功~",
								type: "success",
							});
							this.dialogVisible = false;
							this.form.express = "";
							this.form.express_number = "";
							this.form.id = 0;
							this.getList();
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error("快递公司名称和快递单号均不能为空~");
					return false;
				}
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
					url: "Workbench/inList",
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
			},
		},
	};
</script>

<style lang="less" scoped>
	.cooperation {
		.cooperation_title {
			font-size: 16px;
			font-weight: 600;
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
				font-size: 16px;
			}
		}

		/deep/.cell {
			text-align: center;
		}
	}
</style>
