<template>
	<div class="mains">
		<div class="nav-list">
			<div v-for="item in navList" :class="[item.isDisable?'':'isDisable']" :key="item.index">{{item.name}}</div>
		</div>
		<div class="search" style="width: 60%; margin: auto">
			<el-input placeholder="输入达人昵称关键词" v-model="input3">
				<el-button slot="append" icon="el-icon-search" @click="Search"></el-button>
			</el-input>
		</div>
		<div class="banners">
			<img src="@/assets/daren.png" style="width: 100%" />
			<div class="top_shuju">
				<el-row>
					<el-col :span="8">
						本周新增达人：<span class="shuju_num" v-for="(item, index) in info.add_daren"
							:key="index">{{ item }}</span>
					</el-col>
					<el-col :span="8">获取建联达人/次：<span class="shuju_num" v-for="(item, index) in info.cell_daren"
							:key="index">{{ item }}</span>
					</el-col>
					<el-col :span="8">对接商家/品牌：<span class="shuju_num" v-for="(item, index) in info.cell_brand"
							:key="index">{{ item }}</span>
					</el-col>
				</el-row>
			</div>
		</div>
		<Peesonlabel @tapTab="tapTab" :Index="Index" :categoryList="categoryList" />
		<h-card>
			<Personcore @handlefansminnum="handlefansminnum" @handfansmaxnum="handfansmaxnum" @handminnum="handminnum"
				@handmaxnum="handmaxnum" @handaverageminnum="handaverageminnum"
				@handaveragemaxnum="handaveragemaxnum" />
		</h-card>
		<div class="list">
			<el-tabs v-model="type" @tab-click="handleClick">
				<el-tab-pane label="直播达人" name="2">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column label="达人" width="300">
							<template slot-scope="scope">
								<div class="daren_img" @click="goDaren(scope.row.douyin_link)">{{ scope.row.name }}>
									<img :src="scope.row.pic" class="daren_pic" />
								</div>
								<div class="daren_info">
									<span style="
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
							color: #5075A8;
							cursor: pointer;
						  " @click="goDaren(scope.row.douyin_link)">{{ scope.row.name }}</span>
									<div style="
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						  "><span style="color: #999;">抖音号</span>：{{ scope.row.douyin }}</div>
								</div>

							</template>
						</el-table-column>
						<el-table-column label="粉丝数">
							<template slot-scope="scope">
								<span style="margin-left: 10px;;font-weight: 600;">{{ scope.row.fans }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="场均销售额">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{ scope.row.sales }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="平均在线人数">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{
                  scope.row.line_people
                }}</span>
							</template>
						</el-table-column>
						<el-table-column label="平均停留时长">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{ scope.row.line_time }}</span>
							</template>
						</el-table-column>
						<el-table-column label="30日直播销售额" width="120">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{
                  scope.row.month_sales
                }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="分钟带货产出">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{
                  scope.row.minute_sales
                }}</span>
							</template>
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button v-if="user" icon="el-icon-s-promotion" circle
									@click="handleEdit(scope.$index, scope.row)"></el-button>
								<span v-else style="margin-left: 10px;color:blue">请先登录</span>
							</template>
						</el-table-column>
					</el-table>
					<!-- 添加分页 -->
					<el-pagination :hide-on-single-page="true" @size-change="changeSize" @current-change="changePage"
						:current-page.sync="pageIndex" :page-size="20" layout="prev, pager, next" :total="count">
					</el-pagination>
				</el-tab-pane>
				<el-tab-pane label="短视频达人" name="1">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column label="达人" width="300">
							<template slot-scope="scope">
								<div class="daren_img">
									<img :src="scope.row.pic" class="daren_pic" />
								</div>
								<div class="daren_info">
									<span style="
                	    white-space: nowrap;
                	    overflow: hidden;
                	    text-overflow: ellipsis;
                		color: #5075A8;
						cursor: pointer;
                	  " @click="goDaren(scope.row.douyin_link)">{{ scope.row.name }}</span>
									<div style="
                	    white-space: nowrap;
                	    overflow: hidden;
                	    text-overflow: ellipsis;
                	  "><span style="color: #999;">抖音号</span>：{{ scope.row.douyin }}</div>
								</div>
							</template>



						</el-table-column>
						<el-table-column label="粉丝数">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{ scope.row.fans }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="平均销售额">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{ scope.row.sales }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="带货视频数">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{
                  scope.row.line_people
                }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="平均播放量">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{ scope.row.line_time }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="30日直播销售额" width="120">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{
                  scope.row.month_sales
                }}W</span>
							</template>
						</el-table-column>
						<el-table-column label="推广产品数">
							<template slot-scope="scope">
								<span style="margin-left: 10px;font-weight: 600;">{{
                  scope.row.minute_sales
                }}</span>
							</template>
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button v-if="user" icon="el-icon-s-promotion" circle
									@click="handleEdit(scope.$index, scope.row)"></el-button>
								<span v-else style="margin-left: 10px; color:blue">请先登录</span>
							</template>
						</el-table-column>
					</el-table>
					<!-- 添加分页 -->
					<el-pagination :hide-on-single-page="true" @size-change="changeSize" @current-change="changePage"
						:current-page.sync="pageIndex" :page-size="20" layout="prev, pager, next" :total="count">
					</el-pagination>
				</el-tab-pane>
			</el-tabs>
			<div v-if="vip_info.status !='1'">{{vip_info.status}}您当前为普通用户，升级为 <span style="color:blue">旗舰版</span>
				，直接建联达人</div>
		</div>
	</div>
</template>
<script>
	import Peesonlabel from './personlabel.vue'
	import Personcore from './personcore.vue'
	export default {
		components: {
			Peesonlabel,
			Personcore
		},
		data() {
			return {
				//粉丝数
				fansminnum: 0,
				fansmaxnum: 0,
				//销售额30天/月,
				minnum: 0,
				maxnum: 0,
				//场均视均销售额（单场）
				averageminnum: 0,
				averagemaxnum: 0,
				token: localStorage.getItem("token"),
				user: JSON.parse(localStorage.getItem("user")),
				vip_info: JSON.parse(localStorage.getItem("vip_info")) ? JSON.parse(localStorage.getItem("vip_info")) : "",
				tableData: [],
				pageIndex: 1,
				pageSize: 20,
				count: 0,
				type: "2",
				categoryList: [],
				Index: -1,
				category: -1, //类目id,请求达人数据的时候用 -1全部
				input3: "",
				info: {},
				navList: [{
						id: 0,
						name: '找达人',
						isDisable: true
					},
					{
						id: 1,
						name: '找MCN机构',
						isDisable: false
					},
					{
						id: 2,
						name: '找团长',
						isDisable: false
					},
					{
						id: 3,
						name: '找服务商',
						isDisable: false
					}
				]
			};
		},
		mounted() {
			this.$nextTick(() => {
				this.$axios({
					url: "Plblics/customTalent",
					method: "get",
				}).then((res) => {
					if (res.data.status == 0) {
						this.info = res.data.result;
					} else {
						this.$message.error(res.data.msg);
					}
				});
				this.getCategory();
				this.getList();
			})
		},
		methods: {
			// 跳转达人首页
			goDaren(href) {
				window.location.href = href;
			},
			// 粉丝数
			handlefansminnum(value) {
				this.fansminnum = value
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			handfansmaxnum(value) {
				this.fansmaxnum = value
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			//销售额30天/月,
			handminnum(value) {
				this.handminnum = value
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			handmaxnum(value) {
				this.handmaxnum = value
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			//场均视均销售额（单场）
			handaverageminnum(value) {
				this.handaverageminnum = value
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			handaveragemaxnum(value) {
				this.handaveragemaxnum = value
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			Search: function() {
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			tapTab(index) {
				this.pageIndex = 1;
				this.pageSize = 20;
				if (this.Index === index) {
					return false;
				} else {
					this.Index = index;
					if (index == -1) {
						this.category = -1;
					} else {
						this.category = this.categoryList[index].id;
					}
				}
				this.getList();
			},
			handleEdit(index, row) {
				this.$axios({
					url: "Talent/lookPhone",
					method: "get",
					params: {
						token: this.token,
						id: row.id,
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.$alert(
							"【" +
							row.name + "】联系方式已获取，赶快去我的达人库查看联系吧",
							/* "】的联系方式为：" +
							res.data.result +
							",赶快去联系吧~",
							"查看结果", */
							{
								confirmButtonText: "朕知道了",
								callback: (action) => {},
							}
						);
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			handleClick(tab, event) {
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			getCategory() {
				this.$axios({
					url: "Plblics/getCategory/",
					method: "get",
				}).then((res) => {
					if (res.data.status == 0) {
						this.categoryList = res.data.result;
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			//获取达人列表
			getList() {
				this.$axios({
					url: "Talent/talentList",
					method: "get",
					params: {
						pageIndex: this.pageIndex,
						pageSize: this.pageSize,
						type: this.type,
						category: this.category,
						keywords: this.input3,
						fansminnum: this.fansminnum,
						fansmaxnum: this.fansmaxnum,
						minnum: this.minnum,
						maxnum: this.maxnum,
						averageminnum: this.averageminnum,
						averagemaxnum: this.averagemaxnum,
						token:this.token
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.tableData = res.data.result.list;
						this.count = res.data.result.count;
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			changePage(val) {
				//翻页功能
				this.pageIndex = val;
				document.body.scrollTop=document.documentElement.scrollTop=0
				this.getList();
			},
			changeSize(val) {
				//控制条数的值
				// 会传入一个参数,就是用户选择了的每页数据条数
				this.pageSize = val; // 1.修改每页条数数据
				this.getList(); // 2.重新获取数据
			},
		},
	};
</script>

<style lang='less' scoped>
	.mains {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		
		/deep/.el-pagination{
			display: flex;
			justify-content: center;
		}
		.search {
			display: flex;
			justify-content: center;
			margin: auto;
			padding-bottom: 20px;

			/* box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1); */
			.el-input-group {
				width: 540px;

			}

			.el-input {
				position: relative;
				font-size: 14px;
				display: inline-block;

				/deep/.el-input__inner {
					border-radius: 8px 0 0 8px;
					border: 2px solid #ff7752;
					border-right: none;
					padding-right: 30px;
				}

				/deep/.el-input-group__append {
					position: absolute;
					right: -60px;
					top: 50%;
					transform: translate3d(0, -50%, 0);
					width: 60px;
					height: 40px;
					background: #ff7752;
					border-radius: 0 8px 8px 0;
					overflow: hidden;
					padding: 0;

					.el-button {
						width: 100%;
						height: 100%;

						.el-icon-search {
							font-size: 1.5rem;
							color: #ffffff;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate3d(-50%, -50%, 0);
						}
					}
				}

			}
		}

		.nav-list {
			width: 540px;
			margin: auto;
			padding: 20px 0;
			display: flex;
			font-weight: bold;
			font-size: 16px;
			justify-content: space-around;

			>div {
				padding: 4px 12px;
				cursor: pointer;
				text-align: center;
			}

			.isDisable {
				cursor: not-allowed;
			}
		}

		.nav-list div:hover {
			color: #fff;
			background: #547bb3;
			border-radius: 20px;
		}
	}

	.daren_img {
		height: 100%;
		float: left;
		width: 30%;
	}

	.daren_info {
		height: 100%;
		height: 100%;
		float: right;
		width: 70%;
		text-align: left !important;
		margin-left: 0 !important;

		div {
			text-align: left !important;
			margin-left: 0 !important;
			font-size: 13px;
		}
	}

	.list {
		background-color: #fff;
		padding: 10px 20px;
		border-radius: 5px;
		margin: 10px auto;
		min-height: 37vh;
		box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1);

		>div:nth-of-type(2) {
			margin-top: 10px;
			text-align: center;
		}
		
		/deep/.is-active{
			font-size: 16px;
			font-weight: 600;
		}
	}

	.daren_pic {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		vertical-align: middle;
	}

	.banners {
		width: 100%;
		margin-bottom: 20px;
		position: relative;

		img {
			border-radius: 10px;
		}
	}

	.top_shuju {
		font-size: 14px;
		width: 65%;
		position: absolute;
		right: 8%;
		bottom: 30px;
		font-weight: bold;
		color: #fff;

		.shuju_num {
			color: red;
		}
	}

	/deep/.el-button--primary {
		background: #bbc3dd;
	}

	/deep/.el-button--primary:hover {
		background: #bbc3dd;
	}

	/deep/.el-table th.el-table__cell>.cell {
		font-size: 12px;
		text-align: center;
	}

	/deep/.el-table td.el-table__cell div {
		text-align: center;
	}

	.shuju_num {
		padding: 0.1rem;
		background: #efe4e4;
		border-radius: 3px;
		margin-right: 0.1rem;
	}
</style>
