<template>
	<div class="mytalent">
		<h-card>
			<div class="topnav">
				<div>
					<div v-for="item in navlist" :key="item.id" :class="[item.isSelect?'isSelect':'']"
						@click="checknav(item)">
						{{item.name}}
					</div>
				</div>
				<!-- <div>创建达人+</div> -->
			</div>
		</h-card>
		<h-card>
			<div class="bottom">
				<div class="bottomnav">
					<div v-for="item in botnav" :key="item.id" :class="[item.isSelect?'isSelect':'']"
						@click="checkbtnav(item)">
						{{item.name}} <span v-if="(item.num>=0)">({{item.num}})</span>
					</div>
				</div>
				<div></div>
				<div>
					<Alenttable :tableData="tableData" />
				</div>
			</div>
		</h-card>
	</div>
</template>

<script>
	import Alenttable from './alenttable.vue'
	export default {
		components: {
			Alenttable
		},
		data() {
			return {
				token: localStorage.getItem("token"),
				navlist: [{
						id: 0,
						name: '全部',
						isSelect: true
					},
					{
						id: 2,
						name: '直播达人',
						isSelect: false
					},
					{
						id: 1,
						name: '短视频达人',
						isSelect: false
					},
					{
						id: 4,
						name: '招商团长',
						isSelect: false
					},
					{
						id: 3,
						name: 'MCN机构',
						isSelect: false
					},
					// { id: 5, name: '自建', isSelect: false },
				],
				botnav: [{
						id: 0,
						name: '达人库（总数）',
						isSelect: true
					},
					{
						id: 1,
						name: '以建联',
						isSelect: false,
						num: 0
					},
					{
						id: 2,
						name: '已合作',
						isSelect: false,
						num: 0
					},
					{
						id: 3,
						name: '已复播',
						isSelect: false,
						num: 0
					},
				],
				type: 0,
				talent_type: 0,
				tableData: []
			}
		},
		mounted() {
			this.getList();
		},
		methods: {
			getList() {
				this.$axios({
					url: "Workbench/talentList",
					method: "get",
					params: {
						type: this.type,
						talent_type: this.talent_type,
						token: this.token,
					},
				}).then((res) => {
					if (res.data.status == 0) {
						this.tableData = res.data.result.list
						this.botnav[1].num = Number(res.data.result.jianlian)
						this.botnav[2].num = Number(res.data.result.hezuo)
						this.botnav[3].num = Number(res.data.result.fubo)
					} else {
						this.$message.error(res.data.msg);
					}
				});
			},
			checknav(item) {
				this.type = item.id
				this.navlist.map(v => v.id == item.id ? v.isSelect = true : v.isSelect = false)
				this.getList();
			},
			checkbtnav(item) {
				this.talent_type = item.id
				this.botnav.map(v => v.id == item.id ? v.isSelect = true : v.isSelect = false)
				this.getList();
			},
		}
	}
</script>

<style lang="less" scoped>
	.mytalent {
		.h-card:nth-of-type(1) {
			margin: 0;
		}

		/deep/.h-card-bottom {
			.isSelect {
				color: #007aff;
			}

			.topnav {
				display: flex;
				justify-content: space-between;
				align-items: center;

				>div:nth-of-type(1) {
					display: flex;
					background: #f3f3f3;
					border-radius: 4px;
					width: 500px;
					justify-content: space-around;

					>div {
						padding: 4px 8px;
						cursor: pointer;
						font-size: 16px;
						font-weight: 600;
					}
				}

				>div:nth-of-type(2) {
					margin-right: 20px;
					cursor: pointer;
				}
			}

			.bottom {
				.bottomnav {
					display: flex;

					>div {
						padding: 4px 10px;
						cursor: pointer;
						font-weight: 600;
					}
				}

				>div:nth-of-type(2) {
					width: 100%;
					height: 1px;
					background: #a5b2ca;
					margin: 10px 0;
				}
			}
		}
	}
</style>
