<template>
	<div class="shopcard">
		<h-card>
			<div class="title">
				<i></i>
				<h2>{{title}}</h2>
			</div>
			<div class="navlist">
				<div v-for="item in navlist" :class="[item.isSelect ? 'isSlect' : '']" :key="item.id"
					@click="changeNav(item)">
					{{ item.name }}
				</div>
			</div>
			<div class="suplist" v-if="num == 0">
				<div v-for="(item, index) in suplist" :key="index">
					{{ item }}
				</div>
			</div>
			<div class="abilitylist" v-if="num == 1">
				<div v-for="(item, index) in abilitylist" :key="index">
					<el-row>
						<el-col :span="12">
							{{ item.name }}
						</el-col>
						<el-col :span="12">
							{{ item.value }}
						</el-col>
					</el-row>
				</div>
			</div>

			<div class="list" v-if="num == 2">
				<!-- <div>请上传营业执照，商家资质，品牌/商标证书，生产许可，安全许可相关证书等最多6张</div> -->
				<div>
					<img class="qualifications_imgs" v-for="(item, index) in qualifications" :key="index" :src="item"
						alt="" />
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
				default: "",
			},
			navlist: {
				type: Array,
				default: () => {
					return [];
				},
			},
			suplist: {
				type: Array,
				default: () => {
					return [];
				},
			},
			abilitylist: {
				type: Array,
				default: () => {
					return [];
				},
			},
			qualifications: {
				type: Array,
				default: () => {
					return [];
				},
			},
		},
		data() {
			return {
				list: [],
				num: 0,
			};
		},
		methods: {
			changeNav(item) {
				this.navlist.forEach((item2) => {
					item2.isSelect = false;
				});
				item.isSelect = true;
				this.num = item.id;
			},
		},
	};
</script>

<style lang="less" scoped>
	.shopcard {
		.h-card {
			/deep/.h-card-bottom {
				.title {
					display: flex;
					width: 100%;

					i {
						background-image: url(../../assets/juxing-icon.png);
						background-size: 100%;
						width: 30px;
						height: 30px;
						display: block;
					}

					h2 {
						font-size: 18px;
						font-weight: 600;
						line-height: 30px;
					}
				}

				.navlist {
					display: flex;
					justify-content: space-around;
					margin: 10px 0;
					cursor: pointer;

					>div {
						padding-bottom: 8px;
					}

					>.isSlect {
						border-bottom: 2px solid #b4bfd3;
					}
				}

				.suplist {
					display: flex;
					flex-wrap: wrap;

					>div {
						width: 20%;
						padding: 10px;
						background: #E0620D;
						color: #fff;
						text-align: center;
						margin: 0 7px 10px;
						border-radius: 4px;
						cursor: pointer;
					}
				}

				.abilitylist {
					cursor: pointer;

					>div {
						text-indent: 20px;
						margin: 8px 0;
						height: 24px;
						// display: flex;
						// align-items: center;
					}

					&>div:hover {
						background: #7191c0;
						border-radius: 4px;
					}
				}

				.list {
					padding: 0px 30px;
					>div:nth-of-type(1) {
						text-indent: 20px;
					}

					>div:nth-of-type(2) {
						display: flex;
						margin-top: 10px;

						>img {
							width: 100px;
							height: 100px;
							background: #547bb3;
							border-radius: 8px;
							margin-right: 10px;
						}
					}
				}
			}
		}
	}

	.qualifications_imgs {
		width: 31%;
		// height: 100px;
		border-radius: 8px;
		margin-right: 10px;
	}
</style>
