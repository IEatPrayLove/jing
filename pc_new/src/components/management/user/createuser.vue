<template>
	<div class="createuser">
		<h-card>
			<div class="create">
				<div class="top">
					<div>
						<div>我的账号</div>
						<!-- <div>抖音授权号+</div> -->
					</div>
					<div @click="addShow = true" v-if="!addShow">创建账号+</div>
					<div @click="closeadd" v-else>返回</div>
				</div>
				<div class="table" v-if="!addShow">
					<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'id', order: 'descending'}">
						<el-table-column prop="name" label="抖音号名称"> </el-table-column>
						<el-table-column prop="douyin" label="账号ID">
						</el-table-column>
						<el-table-column prop="douyin_link" label="达人主页链接" width="120">
						</el-table-column>
						<el-table-column label="状态">
							<template slot-scope="scope">
								<div v-if="scope.row.status=='1'">审核通过</div>
								<div v-else>待审核</div>
							</template>
						</el-table-column>
						<el-table-column label="详情/操作" width="100">
							<template slot-scope="scope">
								<el-button type="text" @click="handleClick(scope.row)" size="small">编辑</el-button>
							</template>
						</el-table-column>
					</el-table>
				</div>
				<Adduser v-else @click="closeadd" :talenid="edit_id" />
			</div>
		</h-card>
		<!-- <h-card>
      <div class="userbox">
        <div>
          <div @click="addShow = true">创建账号+</div>
          <div>暂无账号信息</div>
        </div>
      </div>
    </h-card> -->
	</div>
</template>

<script>
	import Adduser from './adduser.vue'
	export default {
		components: {
			Adduser
		},
		data() {
			return {
				token: localStorage.getItem("token"),
				tableData: [],
				addShow: false,
				edit_id: '0',
				info: ""
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			getList() {
				this.$axios({
					url: "Assistant/lists",
					method: "get",
					params: {
						token: this.token,
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.tableData = res.data.result
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			closeadd() {
				this.addShow = false
				this.edit_id = '0'
				this.getList();
			},
			handleClick(item) {
				this.addShow = true
				this.edit_id = item.id
			}
		}
	}
</script>

<style lang="less" scoped>
	.createuser {
		/deep/.h-card-bottom {
			.create {
				.top {
					padding-bottom: 10px;
					border-bottom: 1px solid #ccc;
					display: flex;
					justify-content: space-between;
					color: #4b70a8;
					font-size: 16px;
					font-weight: 600;
					>div:nth-of-type(1) {
						margin-left: 10px;
						display: flex;

						>div {
							margin-right: 20px;
							cursor: pointer;
						}
					}

					>div:nth-of-type(2) {
						cursor: pointer;
						margin-right: 20px;
						color: #4b70a8;
					}
				}
			}

			.userbox {
				min-height: 300px;
				display: flex;
				justify-content: center;
				align-items: center;

				>div {
					>div:nth-of-type(1) {
						font-size: 18px;
						width: 100px;
						background: #a5b2ca;
						border-radius: 4px;
						padding: 2px 6px;
						height: 32px;
						line-height: 32px;
						cursor: pointer;
					}

					>div:nth-of-type(2) {
						font-size: 12px;
						margin-top: 20px;
						width: 100px;
						text-align: center;
					}
				}
			}
		}
	}
</style>
