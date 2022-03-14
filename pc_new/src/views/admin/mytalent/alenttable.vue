<template>
	<div class="alenttable">
		<el-table :data="tableData" style="width: 100%">

			<el-table-column label="头像" width="80">
				<template slot-scope="scope">
					<div class="usr_avatar" @click="goDaren(scope.row.douyin_link)">
						<img :src="scope.row.pic" alt="" />
					</div>
				</template>
			</el-table-column>
			<el-table-column label="名称" width="260" align="left">
				<template slot-scope="scope">
					<div class="usrinfo" @click="goDaren(scope.row.douyin_link)">
						<div>
							<div class="usrinfo_name">{{ scope.row.name }}</div>
							<div>抖音号：{{ scope.row.douyin }}</div>
						</div>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="粉丝数" width="100" align="left">
				<template slot-scope="scope" >
					<span style="margin-left: 10px; font-weight: 600;">{{ scope.row.fans }}W</span>
				</template>
			</el-table-column>
		
			<el-table-column label="场均销售额" width="120" align="left">
				<template slot-scope="scope" >
					<span style="margin-left: 10px; font-weight: 600;">{{ scope.row.sales }}W</span>
				</template>
			</el-table-column>
			<el-table-column prop="line_people" label="平均在线人数" width="120">
			</el-table-column>
			<el-table-column prop="line_time" label="平均停留时长" width="300">
			</el-table-column>
			
		
			<el-table-column label="30日直播销售额" width="120" align="left">
				<template slot-scope="scope" >
					<span style="margin-left: 10px; font-weight: 600;">{{ scope.row.month_sales }}W</span>
				</template>
			</el-table-column>
			
			<el-table-column prop="minute_sales" label="分钟带货产出" width="120">
			</el-table-column>
			<el-table-column prop="phone" label="联系方式" width="150">
			</el-table-column>
			<el-table-column prop="wechat" label="达人微信" width="150">
			</el-table-column>
			<el-table-column prop="line_wechat" label="微信归属" width="120">
			</el-table-column>
			<el-table-column label="操作" align="center" width="120">
				<template slot-scope="scope">
					<el-dropdown placement="bottom" trigger="click">
						<span class="el-dropdown-link">
							添加至<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown" v-if="scope.row.talent_type=='1'">
							<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 2)">已合作
							</el-dropdown-item>
							<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 3)">已复播
							</el-dropdown-item>
						</el-dropdown-menu>
						<el-dropdown-menu slot="dropdown" v-else-if="scope.row.talent_type=='2'">
							<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 3)">已复播
							</el-dropdown-item>
						</el-dropdown-menu>
						<el-dropdown-menu slot="dropdown" v-else-if="scope.row.talent_type=='3'">
							暂无可执行操作
						</el-dropdown-menu>
						<el-dropdown-menu slot="dropdown" v-else>
							<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 1)">已建联
							</el-dropdown-item>
							<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 2)">已合作
							</el-dropdown-item>
							<el-dropdown-item @click.native="handleDetails(scope.$index, scope.row, 3)">已复播
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</template>
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="120">
				<template slot-scope="scope">
					<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
						移除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-form ref="form" :model="form">
			<el-dialog title="添加建联" :append-to-body="is_first" :visible.sync="dialogVisible" width="30%"
				:before-close="handleClose">
				<span>
					<el-form-item label="建联所用微信号">
						<el-input v-model="form.line_wechat" placeholder="请输入建联所用微信号"></el-input>
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
		props: {
			tableData: {
				type: Array,
				default: () => {
					return [];
				},
			},
		},
		methods: {
			handleClose(done) {
				done();
			},
			// 跳转达人首页
			goDaren(href) {
				window.location.href = href;
			},
			// 移除
			deleteRow(index, rows) {
				this.$confirm("移除后将无法恢复，确定要移除该达人?", "提示", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning",
					})
					.then(() => {
						this.$axios({
							url: "Workbench/delTalent",
							method: "post",
							data: {
								id: rows[index].id,
								token: this.token
							},
						}).then((res) => {
							if (res.data.status == 0) {
								this.$message({
									message: "移除成功~",
									type: "success",
								});
								rows.splice(index, 1);
							} else {
								this.$message.error(res.data.msg);
							}
						});
					})
					.catch(() => {});
			},
			//移至建联
			checkTalentStatus() {
				if (this.form.line_wechat) {
					this.$axios({
						url: "Workbench/checkTalent",
						method: "post",
						data: this.form,
					}).then((res) => {
						if (res.data.status == 0) {
							this.$message({
								message: "操作成功~",
								type: "success",
							});
							this.dialogVisible = false;
							this.form.talent_type = "";
							this.form.id = 0;
							this.tableData[this.check_id].line_wechat = this.form.line_wechat
							this.check_id = -1
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					this.$message.error("微信号不能为空~");
					return false;
				}
			},
			// 添加至
			handleDetails(index, row, type) {
				if (type == 1) {
					this.dialogVisible = true;
					this.form.talent_type = type;
					this.form.id = row.id;
					this.check_id = index
				} else {
					this.$axios({
						url: "Workbench/checkTalent",
						method: "post",
						data: {
							id: row.id,
							talent_type: type,
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
		data() {
			return {
				is_first: true,
				check_id: -1,
				form: {
					token: localStorage.getItem("token"),
					talent_type: "",
					id: 0,
					line_wechat: "",
				},
				dialogVisible: false,
				token: localStorage.getItem("token"),
			};
		},
		mounted() {},
	};
</script>

<style lang="less" scoped>
	.alenttable {
		/deep/.usrinfo {
			display: flex;
			align-items: center;
			text-align: left;
			.usrinfo_name{
				color: rgb(80, 117, 168);
			}
		}
		/deep/.usr_avatar{
			display: flex;
			align-items: center;
			>img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				margin-right: 10px;
			}
		}

		/deep/.cell {
			text-align: left;
		}
	}

	.el-form {
		z-index: 2099;
	}
</style>
