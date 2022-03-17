<template>
	<div class="selection">
		<div class="content">
			<!-- <img src="@/assets/selection/header.png" alt="" /> -->
			<!-- <div class="image">
        <div class="left">
          <div class="dimage">
            <img src="https://media-public.canva.cn/MADRpor6L3c/1/thumbnail.png"
                 alt="" />
            <div class="small-image">抖音</div>
          </div>
          <div class="title">全平台爆款商品汇集地</div>
          <div class="remarks">必推单品/助力达人每日爆单</div>
        </div>
        <div class="right">
          <div class="content">本周新增商品:<span class="shuju_num"
                  v-for="(item, index) in info.add_goods"
                  :key="index">{{ item }}</span></div>
          <div class="content">达人添加橱窗/次:<span class="shuju_num"
                  v-for="(item, index) in info.add_chu"
                  :key="index">{{ item }}</span></div>
          <div class="content">达人建联/领样:<span class="shuju_num"
                  v-for="(item, index) in info.da_ling"
                  :key="index">{{ item }}</span></div>
        </div>
      </div> -->
			<div class="banners">
				<img src="@/assets/goods_banner.png" style="width: 100%" />
				<div class="top_shuju">
					<el-row>
						<el-col :span="8">
							本周新增商品：<span class="shuju_num" v-for="(item, index) in info.add_goods"
								:key="index">{{ item }}</span>
						</el-col>
						<el-col :span="8">达人添加橱窗/次：<span class="shuju_num" v-for="(item, index) in info.add_chu"
								:key="index">{{ item }}</span>
						</el-col>
						<el-col :span="8">达人建联/领样：<span class="shuju_num" v-for="(item, index) in info.da_ling"
								:key="index">{{ item }}</span>
						</el-col>
					</el-row>
				</div>
			</div>
			<Header @checkCategoy="checkCategoy" @checkNav="checkNav" @changLabel="changLabel"
				@changCloseLabel="changCloseLabel" />
			<Content :goodList="goodList" :vipInfo="vip_info" />
			<div v-if="goodList.length==0" style=" text-align: center;height: 100px;line-height: 100px;">暂无数据</div>
			<!-- <div class="block">
				<el-pagination @current-change="handleCurrentChange" :current-page="pageIndex" :page-size="pageSize"
					layout=" prev, pager, next" :total="total">
				</el-pagination>
			</div> -->
		</div>
	</div>
</template>
<script>
	import Header from "./header.vue";
	import Content from "./content.vue";
	export default {
		components: {
			Header,
			Content,
		},
		data() {
			return {
				info: {},
				goodList: [],
				category: -1,
				type: -1,
				order_field: "",
				total: 0,
				pageSize: 20,
				pageIndex: 1,
				vip_info:{},
				EVENT_DATA_FLOW : "ajax_data_pulled",
				CURRENT_PAGE_INDEX : 1,
				LOCK_STATUS : false,
				loading: true,
				bill_list: [],
			};
		},
		mounted() {
			// 获取商品列表
			window.addEventListener("scroll",this.handleScroll)
			this.getList();
			//console.log(this)
			this.$axios({
				url: "Plblics/customGoods",
				method: "get",
			}).then((res) => {
				if (res.data.status == 0) {
					this.info = res.data.result;
				} else {
					this.$message.error(res.data.msg);
				}
			});
			
			GetUserInfo({
      token: localStorage.getItem("token"),
    }).then((events) => {
      if (events.status == 0) {
        let userInfo = events.result;
        localStorage.setItem("user", JSON.stringify(userInfo));
        //获取商家会员信息
        getVipInfo({
          token: localStorage.getItem("token"),
        }).then((vips) => {
          if (vips.status == 0) {
            that.vip_info = vips.result;
          }
        });
      }
    });
		},
		methods: {
			// 类目切换
			checkCategoy(item) {
				if(JSON.stringify(this.vip_info)==='{}') return
				this.category = item.id
				this.getList()
			},
			// 综合切换
			checkNav(item) {
				if(JSON.stringify(this.vip_info)==='{}') return
				this.order_field = item.filed
				this.getList()
			},
			//秒杀切换
			changLabel(item) {
				if(JSON.stringify(this.vip_info)==='{}') return
				this.type = item.id
				this.getList()
			},
			// 关闭后，重新加载所有商品
			changCloseLabel(item) {
				this.type = -1
				this.getList()
			},
			//获取商品列表
			getList() {
				this.$axios({
					url: "Goods/GoodsList",
					method: "get",
					params: {
						p: this.pageIndex,
						category: this.category,
						type: this.type,
						order_field: this.order_field
					},
				}).then((res) => {

					if (res.data.status == 0) {
						// this.goodList = res.data.result;
						this.goodList = this.goodList.concat(res.data.result.list)
						this.total = res.data.result.count;
						this.pageIndex += 1
					} else {
						this.$message.error(res.data.msg);
					}
				});
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
					if(JSON.stringify(this.vip_info)==='{}') return
				this.throttled(this.getList(e), 300)
			},
			handleScroll($event){
				var el = document.getElementsByClassName('footer-div')[0]
				var offset = el.getBoundingClientRect()
				if(offset.top < window.innerHeight){
					this.scrollEvent($event)
				}
			},
			// 翻页
			handleCurrentChange(val) {
				this.pageIndex = val
				document.body.scrollTop=document.documentElement.scrollTop=0
				// 获取商品列表
				this.getList();
			}
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.handleScroll)
		},
	};
</script>
<style lang="less" scoped>
	.selection {
		background-color: #f5f7fa;

		.content {
			width: 100%;
			max-width: 1200px;
			margin: 0 auto;
		}

		.image {
			width: 100%;
			margin: 32px 0;
			height: 160px;
			border-radius: 16px;
			background: linear-gradient(135deg, #ff5f3a, #fa9769);
			display: grid;
			grid-template-columns: 20% 70%;
			grid-column-gap: 48px;
			color: #fff;

			.left {
				margin-left: 32px;

				.dimage {
					margin-top: 24px;
					display: flex;
					font-size: 12px;
					background-color: #000;
					color: white;
					width: 64px;
					height: 24px;
					line-height: 24px;
					text-align: center;

					img {
						width: 16px;
						height: 16px;
						margin-top: 4px;
						margin-left: 8px;
					}

					.small-image {
						margin-left: 3px;
					}
				}

				.title {
					font-size: 14px;
					margin-top: 32px;
					font-weight: 600;
				}

				.remarks {
					margin-top: 24px;
					font-size: 10px;
					font-weight: 100;
				}
			}

			.right {
				display: grid;
				grid-template-columns: repeat(3, 33%);
				align-items: center;
				justify-content: center;
			}
		}
	}

	// .shuju_num {
	//   color: red;
	//   padding: 0.1rem;
	//   background: #efe4e4;
	//   border-radius: 3px;
	//   margin-right: 0.1rem;
	// }
	.banners {
		width: 100%;
		margin-bottom: 20px;
		margin-top: 20px;
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

	.block {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 0;
	}
</style>
