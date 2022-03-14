<template>
	<div class="cooperation">
		<div class="cooperation_title">合作中台</div>
		<div class="coopnavlist">
			<div v-for="item in coopnav" :key="item.id" :class="[item.isSelect ? 'isSelect' : '']"
				@click="checknav(item)">
				{{ item.name }}
			</div>
		</div>
		<div>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="create_time" label="申请时间"> </el-table-column>
				<el-table-column label="商品名称" width="200">
					<template slot-scope="scope">
						<div style="cursor: inherit;" @click="goGoods(scope.row.id)">{{ scope.row.goods_name }}</div>
					</template>
				</el-table-column>
				<el-table-column prop="talent_name" label="达人名称"> </el-table-column>
				<el-table-column prop="express_name" label="收件人"> </el-table-column>
				<el-table-column prop="express_mobile" label="电话"> </el-table-column>
				<el-table-column prop="address" label="寄样地址"> </el-table-column>
				<el-table-column label="审核状态" prop="status_msg"> </el-table-column>
				<el-table-column label="操作" align="center" width="120">
					<template slot-scope="scope">
						<el-dropdown placement="bottom" trigger="click" v-if="scope.row.status=='1'">
							<span class="el-dropdown-link">
								操作<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 2)">通过申请
								</el-dropdown-item>
								<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 3)">拒绝申请
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						<div v-else>暂无操作可用</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-form ref="form" :model="form">
			<el-dialog title="拒绝合作" :append-to-body="is_first" :visible.sync="dialogVisible" width="30%"
				:before-close="handleClose">
				<span>
					<el-form-item label="拒绝理由">
						<el-input v-model="form.msg" placeholder="请输入拒绝理由"></el-input>
					</el-form-item>
				</span>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="checkTalentStatus">确 定</el-button>
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
				check_id: -1,
				form: {
					token: localStorage.getItem("token"),
					status: "",
					id: 0,
					msg: "",
				},
				dialogVisible: false,
				token: localStorage.getItem("token"),
				coopnav: [{
						id: 1,
						name: "寄样申请",
						num: 0,
						isSelect: false
					},
					{
						id: 2,
						name: "已同意",
						num: 0,
						isSelect: false
					},
					{
						id: 3,
						name: "拒绝合作",
						num: 0,
						isSelect: false
					},
				],
				status: 1,
				tableData: [],
			};
		},
		mounted() {
			this.getNowList();
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
			getNowList() {
				this.$axios({
					url: "Workbench/nowList",
					method: "get",
					params: {
						token: this.token,
						status: this.status,
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.tableData = res.data.result;
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			checknav(item) {
				this.status = item.id;
				this.coopnav.map((v) =>
					v.id == item.id ? (v.isSelect = true) : (v.isSelect = false)
				);
				this.getNowList();
			},
			//移至建联
			checkTalentStatus() {
				if (this.form.msg) {
					this.$axios({
						url: "Workbench/checkNowInfo",
						method: "post",
						data: this.form,
					}).then((res) => {
						if (res.data.status == 0) {
							this.$message({
								message: "操作成功~",
								type: "success",
							});
							this.dialogVisible = false;
							this.form.status = "";
							this.form.msg = "";
							this.form.id = 0;
							this.tableData[this.check_id].status_msg = "已拒绝";
							this.check_id = -1;
							this.getNowList();
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error("拒绝理由不能为空~");
					return false;
				}
			},
			handleDetails(index, row, type) {
				if (type == 3) {
					this.dialogVisible = true;
					this.form.status = type;
					this.form.id = row.id;
					this.check_id = index;
				} else {
					this.$axios({
						url: "Workbench/checkNowInfo",
						method: "post",
						data: {
							id: row.id,
							status: type,
							token: this.token
						},
					}).then((res) => {
						if (res.data.status == 0) {
							this.$message({
								message: "操作成功~",
								type: "success",
							});
						} else {
							this.$message.error(res.data.msg);
						}
					});
				}
			},
		},
	};
</script>

<style lang="less" scoped>
	.cooperation {
		.cooperation_title{
			font-size: 16px;
			font-weight: 600;
		}
		.coopnavlist {
			display: flex;
			margin: 20px 0;
			background: #f3f3f3;
			padding: 6px 10px;
			border-radius: 6px;
			width: 300px;
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
