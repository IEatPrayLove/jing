<template>
	<div class="mains" @scroll="scrollEvent($event)">
		<div class="nav-list">
			<div v-for="(item, index) in navList" :key="index" @click="checkShopType(item)">{{item.name}}</div>
		</div>
		<div class="search">
			<el-input placeholder="输入商家名称关键词" v-model="input3">
				<el-button slot="append" icon="el-icon-search" @click="Search"></el-button>
			</el-input>
		</div>
		<div class="banners">
			<img src="@/assets/shop_banner.png" style="width: 100%" />
			<div class="top_shuju">
				<el-row>
					<el-col :span="8">
						本周新增商家：<span class="shuju_num" v-for="(item, index) in info.add_shop"
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
		<div class="tag-group" style="display: flex;">
			<span class="tag-group__title">类目</span>
			<div>
				<el-link :class="Index == -1 ? 'active' : ''" class="tags" :underline="false" @click="tapTab(-1)">
					不限
				</el-link>
				<el-link :class="Index == index ? 'active' : ''" class="tags" :underline="false"
					v-for="(item, index) in categoryList" :key="index" @click="tapTab(index)">
					{{ item.name }}
				</el-link>
			</div>
		</div>
		<div class="list">
			<el-row v-if="tableData.length > 0">
				<el-col :span="11" :class="['items',getroundClass(index)]" 
					v-for="(item, index) in tableData" :key="index" @click.native="goShop(item)">
					<el-row>
						<el-col :span="10" class="shop_img">
							<img :src="item.logo" class="shop_logo" />
							<div class="shop_info_scope">
								<el-row>
									<el-col style="color: #fff;text-align: left;"> 商品 <span style="color:#ffe000;">{{ item.goods }}</span> </el-col>
									<el-col style="color: #fff;text-align: left;"> 商家 <span style="color:#ffe000;">{{ item.shop }}</span> </el-col>
									<el-col style="color: #fff;text-align: left;"> 物流 <span style="color:#ffe000;">{{ item.wuliu }}</span> </el-col>
								</el-row>
							</div>
						</el-col>
						<el-col :span="14" class="shop_info_content">
							<div class="shop_info_top">
								<el-row>
									<el-col :span="16" class="shop_info_title">
										{{ item.name }}
									</el-col>
									<el-col :span="8" class="shop_info_address">
										<img src="@/assets/address.png" class="address_icon" />
										<span>{{item.address}}</span>
									</el-col>
								</el-row>
							</div>
							
							<div class="shoptitle_two">
								<div class="shoptitle_two_one">
									<span style="color: #fff;">类目：</span>{{item.categories}}
								</div>
								<div v-if="item.type == 1" class="shoptitle_two_two shoptitle_two_two_one">
								</div>
								<div v-else-if="item.type == 2" class="shoptitle_two_two shoptitle_two_two_two">
								</div>	
								<div v-else-if="item.type == 3" class="shoptitle_two_two shoptitle_two_two_three">
								</div>
								<div v-else class="shoptitle_two_two">
								</div>
							</div>
							<div class="shoptitle_three">
								<div class="shoptitle_three_box">
									<h2>{{ item.max_commission || 0 }}%</h2>
									<p>最高佣金</p>
								</div>
								<div class="shoptitle_three_box">
									<h2>{{ item.goods_count || 0 }}</h2>
									<p>推广商品数</p>
								</div>
								<div class="shoptitle_three_box">
									<h2>{{ item.month_talent || 0 }}</h2>
									<p>近30天合作达人</p>
								</div>
							</div>
							
							
						
						</el-col>
					</el-row>
					
					<el-row class="goods_lists">
						<el-col :span="24">
							<el-row>
								<el-col :span="7" class="goods_list" 
									v-for="(itemss, indexss) in item.goods_list" :key="indexss">
									<div class="goods_info_top">
										<img :src="itemss.thumb" class="goods_info_pic" />
										<div class="goods_info_top_desc">
											{{ itemss.talent }}个达人在带
										</div>
									</div>
									<div class="goods_info_titles">
										{{ itemss.title }}
									</div>
									<div class="">
										<el-row style="marginTop:10px">
											<el-col :span="8">
												<div class="goods_info_price">{{ itemss.price }}</div>
												<div class="goods_info_price_desc">到手价</div>
											</el-col>
											<el-col :span="8">
												<div class="goods_info_price">
													{{ itemss.commission }}%
												</div>
												<div class="goods_info_price_desc">高佣</div>
											</el-col>
											<el-col :span="8">
												<div class="goods_info_price">
													{{ itemss.commission_price }}
												</div>
												<div class="goods_info_price_desc">佣金</div>
											</el-col>
										</el-row>
									</div>
								</el-col>
							</el-row>
						</el-col>
					</el-row>
					
				</el-col>
			</el-row>
			<el-row v-else>
				<el-col :span="24" style="text-align: center"> 暂无数据 </el-col>
			</el-row>
			<!-- 添加分页 -->
			<!-- <el-pagination @current-change="changePage" :current-page="pageIndex" :page-size="pageSize"
				layout=" prev, pager, next" :total="total">
			</el-pagination> -->
			<div class="back_top" @click="backTop">回到顶部</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				token: localStorage.getItem("token"),
				user: JSON.parse(localStorage.getItem("user")),
				tableData: [],
				pageIndex: 1,
				total: 0,
				pageSize: 20,
				count: 0,
				type: "-1",
				categoryList: [],
				Index: -1,
				category: -1, //类目id,请求达人数据的时候用 -1全部
				input3: "",
				info: {},
				navList: [
					{
						id: 1,
						name: '找小店'
					},
					{
						id: 4,
						name: '找大牌'
					},
					{
						id: 2,
						name: '找供应链'
					},
					{
						id: 3,
						name: '找源头'
					}
				],
				EVENT_DATA_FLOW : "ajax_data_pulled",
				CURRENT_PAGE_INDEX : 1,
				LOCK_STATUS : false,
				loading: true,
				bill_list: [],
			};
		},
		mounted() {
			this.$axios({
				url: "Plblics/customShop",
				method: "get",
			}).then((res) => {
				if (res.data.status == 0) {
					this.info = res.data.result;
				} else {
					this.$message.error(res.data.msg);
				}
			});
			this.getCategory();
			window.addEventListener("scroll",this.handleScroll)
			this.getList();
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.handleScroll)
		},
		methods: {
			handleScroll($event){
				var el = document.getElementsByClassName('footer-div')[0]
				var offset = el.getBoundingClientRect()
				if(offset.top < window.innerHeight){
					this.scrollEvent($event)
				}
			},
			getroundClass(index) {
				return `bgimg` + Math.round(Math.random() * 3)
			},
			Search: function() {
				this.pageIndex = 1;
				this.pageSize = 20;
				this.getList();
			},
			checkShopType: function(item) {
				this.pageIndex = 1;
				this.pageSize = 20;
				this.type = item.id
				this.getList();
			},
			tapTab(index) {
				this.tableData = []
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
			handleClick(tab, event) {
				this.pageIndex = 1;
				this.pageSize = 4;
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
			//获取店铺列表
			getList(e) {
				if (this.LOCK_STATUS) return;
				// if (e instanceof Event) {
				// 			var el = e.target;
				// 			var scHeight = el.scrollHeight, scTop = el.scrollTop, clHeight = el.clientHeight;
				// 			//距离底部100px时，开始加载数据
				// 			if (scHeight - scTop > clHeight + 100) return;
				// }
				this.LOCK_STATUS = true;
				this.$axios({
					url: "Shop/shopListPc",
					method: "get",
					params: {
						p: this.pageIndex,
						category: this.category,
						keywords: this.input3,
						type: this.type
					},
				}).then((res) => {
					if (res.data.status == 0) {
						++this.pageIndex
						this.LOCK_STATUS = false;
						this.tableData = this.tableData.concat(res.data.result.list);
						this.total = res.data.result.count;
						this.tableDat = this.tableDat.forEach(item => {
							if (item.goods_list.length > 2) {
								item.goods_list = item.goods_list.slice(0, 2)
							}
						});
						this.count = res.data.result.count;
					} else {
						this.LOCK_STATUS = false;
						this.$message.error(res.data.msg);
					}
				});
			},
			changePage(val) {
				//翻页功能
				this.pageIndex = val;
				// document.body.scrollTop=document.documentElement.scrollTop=0
				this.getList();
			},
			backTop(){
				document.body.scrollTop=document.documentElement.scrollTop=0
			},
			changeSize(val) {
				//控制条数的值
				// 会传入一个参数,就是用户选择了的每页数据条数
				this.pageSize = val; // 1.修改每页条数数据
				this.getList(); // 2.重新获取数据
			},
			goShop(item) {
				this.$router.push({
					path: '/shop',
					query: {
						uid: item.id
					}
				})
				sessionStorage.shopId = JSON.stringify(item)
				document.documentElement.scrollTop = 0
			},
			//节流
			throttled:  function (func, wait, options) {
					var self = this;
					var timeout, context, args, result
					var previous = 0
					if (!options) options = {}

					var later = function () {
								previous = options.leading === false ? 0 : self.now()
								timeout = null
								result = func.apply(context, args)
								if (!timeout) context = args = null
					}

						var throttled = function () {
							var now = self.now()
							if (!previous && options.leading === false) previous = now
							var remaining = wait - (now - previous)
							context = this
							args = arguments
							if (remaining <= 0 || remaining > wait) {
										if (timeout) {
											clearTimeout(timeout)
											timeout = null
									}
									previous = now
									result = func.apply(context, args)
									if (!timeout) context = args = null
							} else if (!timeout && options.trailing !== false) {
									timeout = setTimeout(later, remaining)
							}
							return result;
					}

					throttled.cancel = function () {
							clearTimeout(timeout)
							previous = 0
							timeout = context = args = null
					}

					return throttled;
			},
			//滚动时对滚动事件进行节流
			scrollEvent(e) {
				this.throttled(this.getList(e), 300)
			},
		},
	};
</script>

<style lang='less' scoped>
	.back_top{
		position: fixed;
		right: 30px;
		bottom: 50px;
		width: 100px;
		height: 100px;
		border-radius: 100%;
		background-color: #fff;
		color: orange;
		text-align: center;
		line-height: 100px;
		cursor: pointer;
		&:hover{
			background-color: orange;
			color: #fff;
		}
	}
	.mains {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;

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
		}

		.nav-list div:hover {
			color: #fff;
			background: #547bb3;
			border-radius: 20px;
		}
	}

	.tag-group {
		background-color: #fff;
		padding: 10px 20px;
		border-radius: 5px;
		/* margin: 10px auto; */
		box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1);
		margin-bottom: 20px;

		.tag-group__title {
			min-width: 40px;
			max-width: 40px;
			font-weight: bold;
			margin-top: 8px;
		}

		div {
			flex-flow: row wrap;
			align-items: center;
		}

	}



	.tags {
		color: #333;
		border-radius: 18px;
		padding: 8px 15px;
		font-size: 14px;
		margin-right: 20px;
	}

	.tags.active {
		background: #ff7752;
		color: #fff;
		border-radius: 18px;
		padding: 8px 15px;
	}

	.list {
		background-color: #fff;
		padding: 20px 10px;
		border-radius: 5px;
		box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1);
		
		.shop_img{
			width: 210px;
			display: flex;
			/* justify-content: center; */
			position: relative;
			padding-top: 10px;
			padding-left: 20px;
			.shop_logo {
				width: 140px;
				height: 140px;
				border-radius: 50%;
			}
			
			.shop_info_scope {
				position: absolute;
				left: 0;
				bottom: 0;
				font-size: 0.7rem;
				width: 210px;
				text-align: center;
				/deep/.el-row{
					/* justify-content: center; */
					flex-wrap: inherit;
				}
			}
			
		}
		
		.shop_info_content {
			width: 340px;
			.shop_info_top{
				margin: 20px 0px;
				/deep/.el-row{
					justify-content: space-between;
					align-items: center;
				}
				.shop_info_title{
					font-size: 18px;
					font-weight: 600;
					line-height: 20px;
					color: #fff;
				}
				.shop_info_address{
					text-align: center;
					display: flex;
					align-items: center;
					.address_icon {
						width: 18px;
						height: 18px;
					}
				}
			}
			
			.shoptitle_two{
				color: #E37327;
				/* margin: 10px 0px; */
				font-size: 14px;
				/* padding-left: 10px; */
				position: relative;
				.shoptitle_two_one{
					margin: 10px 0px;
					color:#fff;
					overflow:hidden;text-overflow:ellipsis;word-break:break-all;white-space:nowrap;
					max-width: 180px;
				}
				.shoptitle_two_two{
					background-repeat: no-repeat;
					background-repeat: no-repeat;
					background-size: 100%;
					height: 30px;
					width: 60px;
					display: block;
				}
				.shoptitle_two_two_one{
					background-image: url(../../assets/top-icon.png);
				}
				.shoptitle_two_two_two{
					background-image: url(../../assets/gongying-icon.png);
				}
				.shoptitle_two_two_three{
					background-image: url(../../assets/yuantou-icon.png);
				}
			}
			.shoptitle_three{
				display: flex;
				justify-content: space-between;
				.shoptitle_three_box{
					width: 30%;
					margin: 0 auto;
					h2{
						padding: 15px 0px;
						color: #fff;
					}
					p{
						color: #fff;
						font-size: 14px;
						font-weight: 600;
					}
				}
			}
		}
		
		/deep/.el-row{
			display: flex;
			flex-wrap: wrap;
		}
		.items {
			margin: 20px 10px;
			padding: 10px;
			// background-color: #9aacc1;
			border-radius: 5px;
			color: #000;
			width: 570px !important;
		}

		.bgimg0 {
			background: url("../../assets/bgimgs/bg0.jpg") no-repeat;
			background-size: 100% 100%;
		}

		.bgimg1 {
			background: url("../../assets/bgimgs/bg1.jpg") no-repeat;
			background-size: 100% 100%;
		}

		.bgimg2 {
			background: url("../../assets/bgimgs/bg2.jpg") no-repeat;
			background-size: 100% 100%;
		}

		.bgimg3 {
			background: url("../../assets/bgimgs/bg3.jpg") no-repeat;
			background-size: 100% 100%;
		}
		
		/deep/.el-pagination{
			text-align: center;
		}
	}

	

	

	

	.shop_info_title {
		font-size: 1.2rem;
	}

	.shop_info_desc_title {
		font-weight: bold;
	}

	.shop_info_desc {
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.goods_info_keywords {
		font-size: 0.7rem;
	}

	.keywords_title {
		font-size: 0.8rem;
		font-weight: bold;
		margin-top: 10px;
		margin-right: 10px;
	}

	.keywordss {
		border: 1px solid grey;
		margin-right: 10px;
		margin-top: 10px;
		text-align: center;
		border-radius: 5px;
	}

	.goods_info_pic {
		width: 100%;
		// height: 8rem;
		display: block;
		border-radius: 8px;
	}

	.goods_lists_container{
		height: 100%;
		overflow-y: scroll;
	}

	.goods_lists {
		background: #fff;
		border-radius: 5px;
		margin-top: 20px;
		padding: 10px;
	}

	.goods_list {
		text-align: center;
		margin: 0 11px;
	}

	.goods_info_top {
		position: relative;
	}

	.goods_info_top_desc {
		position: absolute;
		width: 100%;
		bottom: 0;
		font-size: 0.9rem;
		padding: 5px 0;
		left: 0;
		background-color: #0000006b;
		color: #fff;
		text-align: center;
	}

	.goods_info_titles {
		text-align: left;
		margin: 5px 0;
		font-size: 14px;
		font-weight: bold;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.goods_info_price {
		color: red;
		font-weight: bold;
		font-size: 0.7rem;
	}

	.goods_info_price_desc {
		font-size: 0.7rem;
		color: #9aacc1;
		margin-top: 10px;
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

	.shuju_num {
		padding: 0.1rem;
		background: #efe4e4;
		border-radius: 3px;
		margin-right: 0.1rem;
	}
</style>
