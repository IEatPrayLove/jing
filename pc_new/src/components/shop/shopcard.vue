<template>
	<div class="shopcard">
		<h-card>
			<div class="title">
				<i></i>
				<h2>{{title}}</h2>
			</div>
			<div class="navlist">
				<div v-for="item in navlist" :class="[item.isSelect?'isSlect':'']" :key="item.id"
					@click="changeNav(item)">{{item.name}}</div>
			</div>
			<div class="list">
				<div v-for="(item,index) in list" :key="index">
					<el-row>
						<el-col :span="12">
							{{item.name}}
						</el-col>
						<el-col :span="12">
							{{item.value}}
						</el-col>
					</el-row>
				</div>
			</div>
		</h-card>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			navlist: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				lists: this.navlist[0].children
			}
		},
		computed: {
			list() {
				return this.lists == 0 ? this.navlist[0].children : this.lists
			}
		},
		methods: {
			changeNav(item) {
				this.navlist.forEach(item2 => {
					item2.isSelect = false
				})
				item.isSelect = true
				this.lists = item.children
			}
		}
	}
</script>

<style lang="less" scoped>
	.shopcard {
		.h-card {
			/deep/.h-card-bottom {
				padding: 20px;
				.title {
					display: flex;
					width: 100%;
					i{
						background-image: url(../../assets/juxing-icon.png);
						background-size: 100%;
						width: 30px;
						height: 30px;
						display: block;
					}
					h2{
						font-size: 18px;
						font-weight: 600;
						line-height: 30px;
					}
				}

				.navlist {
					display: flex;
					justify-content: space-around;
					padding: 20px 0px;
					cursor: pointer;

					>div {
						padding-bottom: 8px;
					}

					>.isSlect {
						border-bottom: 2px solid #b4bfd3;
						font-weight: 600;
						font-size: 16px;
					}
				}

				.list {
					>div {
						line-height: 32px;
						text-indent: 16px;
					}

					>div:nth-of-type(2n - 1) {
						background: #F6E2D6;
					}
				}
			}
		}
	}
</style>
