<template>
	<view class="content">
		<!-- 标题栏 -->
		<view class='nav-wrap nav_index_wrap' :style="{'height': ((height + 50)*2)+'rpx'}">
			<view class="nav_search">
				<input type="text" placeholder="搜索你想要的商品" placeholder-class="nav_searchs"
					:style="{'margin-top': ((height+10)*2)+'rpx'}" @tap="searchInput" />
			</view>
			<view class='nav-titles'>
				<view class="hezuo" :style="{'margin-top': ((height+10)*2)+'rpx'}" @tap="Darenin">
					达人入驻
				</view>
			</view>
		</view>
		<view class="contents selections" :style="{'top': ((height+43)*2)+'rpx'}">
			<view class="top">
				<view class="top_nav">
					<view class="uni-swiper-tab">
						<scroll-view class="swiper-tab-lists" scroll-x="true" :scroll-left="scrollLeft">
							<view v-for="item in toplist" :key="item.id"
								:class="['swiper-tab-list',item.isSelect==true ? 'isSelect' : '']" @click="goNav(item)">
								{{item.name}}
							</view>
						</scroll-view>
					</view>
					<view class="swiper-tab-lists_jt" @tap="lookAll">
						<image src="../../static/icon/public/bt_jt.png" mode="aspectFill" class="swiper-tab-lists_jt_image">
					</view>
				</view>
			</view>
			<view class="mustcom">
				<Shopcardmore :list="hightlist" @gomore="gomore" @goShop="goShop" title="必推高佣" types="3" />
			</view>
			<view class="onelist">
				<view class="commission" style="width:45%">
					<view class="commission_top">
						<view :class="[isBlack?'c00':'']">一元购</view>
						<view style="fontSize:24rpx" @tap="gomore(1)">更多&gt;</view>
					</view>
					<view class="commission_list" v-if="onelist.length>0">
						<view class="com" v-for="item in onelist" :key="item.id" @tap="goShop(item)">
							<image :src="item.thumb" mode="aspectFill" class="comimg" />
							<view class="com_title">{{item.title}}</view>
							<view class="com_price">
								<view>￥
									<text class="prcie_num">{{item.price}}</text>
								</view>
								<view>佣
									<text class="prcie_num" style="color:#ff914d">{{item.commission}}%</text>
								</view>
							</view>
						</view>
					</view>
					<view class="commission_list" v-else>
						<view class="com">
							<view class="com_title">暂无数据</view>
						</view>
					</view>
				</view>
				<view class="commission" style="width:45%">
					<view class="commission_top">
						<view :class="[isBlack?'c00':'']">引流款</view>
						<view style="fontSize:24rpx" @tap="gomore(2)">更多&gt;</view>
					</view>
					<view class="commission_list" v-if="yinlist.length>0">
						<view class="com" v-for="item in yinlist" :key="item.id" @tap="goShop(item)">
							<image :src="item.thumb" mode="aspectFill" class="comimg" />
							<view class="com_title">{{item.title}}</view>
							<view class="com_price">
								<view>￥
									<text class="prcie_num">{{item.price}}</text>
								</view>
								<view>佣
									<text class="prcie_num" style="color:#ff914d">{{item.commission}}%</text>
								</view>
							</view>
						</view>
					</view>
					<view class="commission_list" v-else>
						<view class="com">
							<view class="com_title">暂无数据</view>
						</view>
					</view>
				</view>
				<!--  <Shopcard :list="onelist"
		            width=45
		            @goShop="goShop"
		            @gomore="gomore"
		            title="引流款" /> -->
			</view>
			<Shopcardmore :list="comlist" more="更多品牌" width=94 @gomore="gomore" @goShop="goShop" title="爆款大牌"  types="4" />
		<view class="home_tongji">
			<image src="../../static/image/goods/goods.png" mode="widthFix" class="home_tongji_img"></image>
			<view class="home_tongji_txt">
				<view style="margin-left: 105rpx;width: 80rpx;"><text v-for="(item,index) in tongji_list.add_goods" :key="index">{{item}}</text></view>
				<view style="margin-left: 80rpx;width: 70rpx;"><text v-for="(item,index) in tongji_list.add_chu" :key="index">{{item}}</text></view>
				<view style="margin-left: 90rpx;"><text v-for="(item,index) in tongji_list.da_ling" :key="index">{{item}}</text></view>
			</view>
		</view>
			<view class="shop_list">
				<!--  <Onecard v-for="item in shoplist"
		           :item="item"
		           :key="item.id"
		           @goShop="goShop" /> -->
		
				<view class="shop" v-for="item in shoplist" :item="item" :key="item.id" @tap="goShop(item)">
					<image :src="item.thumb" mode="aspectFill" class="shopimg" />
					<view class="shop_title">{{item.title}}</view>
					<view class="shop_price">
						<view>￥
							<text class="shop_num">{{item.price}}</text>
						</view>
						<view>佣
							<text class="shop_num" style="color:#ff914d">{{item.commission}}%</text>
						</view>
					</view>
				</view>
		
			</view>
			<view v-if="nodata" style="text-align: center;color: #999999;margin-top:20rpx;margin-bottom: 20rpx;">-- 已经到底了 --
			</view>
			<view class="cover" v-if="tabAll" @tap="bindShopTypeChanel"></view>
			<view class="shop_type_all" style="top:160rpx" v-if="tabAll">
				<view class="shop_type_all_list">
					<view v-for="item in toplist" :key="item.id" :class="['shop_type_info',item.isSelect? 'isSelect' : '']"
						@click="goNav(item)">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Shopcardmore from '@/components/selection/shopcardmore.vue'
	import Shopcard from '@/components/selection/shopcard.vue'
	import Onecard from '@/components/selection/onecard.vue'
	import until from 'common/until.js'
	export default {
		components: {
			Shopcardmore,
			Shopcard,
			Onecard
		},
		data() {
			return {
				height: "32",
				serch: '',
				toplist: [{
					id: -1,
					name: '全部',
					isSelect: true
				}],
				hightlist: [],
				comlist: [],
				yinlist: [],
				onelist: [],
				shoplist: [],
				category: -1,
				scrollLeft: 0,
				tabAll: false,
				page: 1,
				nodata: false,
				tongji_list:[]
			}
		},
		onShow() {
			this.getGoodsList(3)
			this.getGoodsList(1)
			this.getGoodsList(2)
			this.getGoodsList(4)
			this.page = 1
			this.getList(false)
			this.getShopTypeList()
			var that = this;
			uni.getSystemInfo({
			  success: function (res) {
			    that.height = res.statusBarHeight
			  },
			})
			/**
			 * 加载数据
			 */
			until.Requests('Plblics/customGoods', {}, 'GET', function (eve) {
			  var eves = eve.result
				that.tongji_list = eves
			})
		},
		onPullDownRefresh() {
			this.page = 1
			this.getList(false)
		},
		onReachBottom() {
			this.page++
			this.getList(true)
		},
		methods: {
			//顶部搜索框
			searchInput: function () {
			  uni.navigateTo({
			    url: '/pages/selections/goods_list'
			  })
			},
			//获取商家列表数据
			getList: function(isMore) {
				var that = this
				uni.showLoading({
					title: '加载中',
				})
				/**
				 * 加载数据
				 */
				until.Requests('Goods/GoodsListT', {
					p: that.page,
					category: that.category
				}, 'GET', function(eve) {
					uni.stopPullDownRefresh()
					var eves = eve.result
					if (isMore) {
						if (eves.length > 0) {
							that.shoplist = [...that.shoplist, ...eves]
						} else {
							if (that.page == 1 && eves.length < 1) {
								that.nodata = true
							} else {
								that.page--;
								that.nodata = true
							}
						}
					} else {
						if (eves.length > 0) {
							that.shoplist = eves
						} else {
							that.nodata = true
						}
					}
					uni.hideLoading()
				})
			},
			//获取类目
			getShopTypeList: function() {
				var toplists =  [{
					id: -1,
					name: '全部',
					isSelect: true
				}]
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Plblics/getCategory', {}, 'GET', function(eve) {
					var eves = eve.result
					for (var i = 0; i < eves.length; i++) {
						eves[i].isSelect = false
					}
					toplists = [...toplists, ...eves]
					that.toplist = toplists

				})
			},
			getGoodsList: function(type) {
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Goods/GoodsListT', {
					type: type
				}, 'GET', function(eve) {
					var eves = eve.result
					if (type == 1) {
						that.onelist = eves
					} else if (type == 2) {
						that.yinlist = eves
					} else if (type == 3) {
						that.hightlist = eves
					} else {
						that.comlist = eves
					}
				})
			},
			//头部导航栏
			goNav(item) {
				this.shoplist = []
				this.category = item.id
				this.toplist.forEach(v => {
					v.isSelect = false
				});
				item.isSelect = true
				this.tabAll = false
				this.page = 1
				this.getList(false)
			},
			// 去页面
			goShop(item) {
				uni.navigateTo({
					url: '/pages/goods/goods?id=' + item.id
				})
			},
			// 更多
			gomore(list) {
				uni.navigateTo({
				  url: '/pages/selections/goods_list?type='+list
				})
			},
			// 达人入驻
			Darenin() {
				uni.switchTab({
					url: '/pages/talent/talent'
				})
			},
			//点击显示所有分类
			lookAll: function() {
				let tabAll = this.tabAll
				if (tabAll) {
					this.tabAll = false
				} else {
					this.tabAll = true
				}
			},
			// 收起
			bindShopTypeChanel: function() {
				this.tabAll = false
			},
		}
	}
</script>

<style lang="less" scoped>
	page {
	  position: relative;
	  width: 100%;
	  height: 100%;
	}
	.content {
	  height: 100vw;
	}
	.contents {
	  position: relative;
	}
	.nav-wrap{
		background-color: #fb5144;
	}
	.nav_index_wrap {
	  display: flex;
	  flex-direction: row;
	}
	.nav-titles {
	  width: 20%;
	}
	.hezuo {
	  text-align: center;
	  font-size: 30rpx;
	  background-color: #ffffff;
	  color: #fb5144;
	  border-radius: 25rpx;
	  height: 50rpx;
	  line-height: 50rpx;
	  width: 100%;
	}
	.nav_search {
	  width: 45%;
	  margin: 0 20rpx;
	}
	.nav_searchs {
	  
	}
	.nav_search input {
	  font-size: 30rpx;
	  background-image: url(../../static/icon/public/search.png);
	  padding-left: 50rpx;
	  background-repeat: no-repeat;
	  background-size: 30rpx;
	  background-position-y: 12rpx;
	  background-position-x: 10rpx;
	  background-color: #f1f1f1;
	  border-radius: 25rpx;
	  height: 50rpx;
	  line-height: 50rpx;
	}
	.top {
		min-height: 90rpx;
		background: linear-gradient(to right, #fb4c44, #fd7349);
		color: #fff;
		padding: 10rpx;
		padding-top: 23rpx;

		.serch {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;

			>input {
				background: #fff;
				margin-right: 20rpx;
				border-radius: 25rpx;
			}

			>view {
				padding: 6rpx 20rpx;
				background: #fff;
				border-radius: 25rpx;
				color: #ff914d;
			}
		}

		/* .top_nav {
    display: flex;
    .nav {
      display: flex;
      .nav_list {
        margin: 0 10rpx;
      }
    }
  } */
		.top_nav {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			color: #fff;
			width: 100%;
			z-index: 999;
		}

		.main {
			position: relative;
		}

		.uni-swiper-tab {
			width: 90%;
			height: 70rpx;
			line-height: 70rpx;
			font-size: 30rpx;
		}

		.swiper-tab-lists {
			height: 70rpx;
			width: 100%;
			box-sizing: border-box;
			overflow: hidden;
			line-height: 70rpx;
			white-space: nowrap;
			z-index: 99;
		}

		.swiper-tab-list {
			margin: 0 20rpx;
			display: inline-block;
			text-align: center;
		}

		.swiper-tab-list.isSelect {
			position: relative;
			font-size: 35rpx;
		}

		.swiper-tab-list.isSelect:after {
			content: "";
			display: block;
			height: 6rpx;
			width: 60%;
			background: #ffffff;
			position: absolute;
			bottom: 0;
			left: 20%;
			border-radius: 20rpx;
		}

		.swiper-tab-lists_jt {
			width: 10%;
			height: 70rpx;
			line-height: 70rpx;
			font-size: 30rpx;
			text-align: center;
		}

		.swiper-tab-lists_jt_image {
			width: 50rpx;
			height: 30rpx;
			margin-top: 20rpx;
		}
	}

	.mustcom {
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		width: 96%;
		background-color: #f1f1f1;
		margin: 0 auto;
		height: auto;
		margin-top: -18rpx;
		padding-top: 18rpx;
		padding-bottom: 18rpx;
		border-radius: 18rpx;
		background-color: #ffffff;
	}

	.onelist {
		margin: 20rpx auto;
		display: flex;
		justify-content: space-around;
		width: 96%;
	}

	.shop_list {
		width: 94%;
		margin: 20rpx auto;
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-around;
	}

	.commission {
		border-radius: 18rpx;
		padding: 18rpx;
		box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);

		.commission_top {
			width: 100%;
			display: flex;
			justify-content: space-between;
			color: #ff914d;
			align-items: end;
			margin-bottom: 20rpx;
		}

		.c00 {
			color: #000;
		}

		.commission_list {
			display: flex;
			// justify-content: space-around;

			.com {
				width: 50%;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 18rpx;
			}

			.comimg {
				width: 150rpx;
				height: 150rpx;
				border-radius: 16rpx;
			}

			.com_title {
				width: 102%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin: 12rpx 0 8rpx;
			}

			.com_price {
				width: 100%;
				display: flex;
				justify-content: space-between;
				font-size: 16rpx;

				.prcie_num {
					font-size: 29rpx;
				}
			}
		}
	}

	.shop {
		width: 42%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 18rpx;
		padding: 18rpx;
		margin: auto 1%;
		// box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);

		.shopimg {
			width: 300rpx;
			height: 300rpx;
		}

		.shop_price {
			width: 100%;
			display: flex;
			justify-content: space-around;
		}

		.shop_title {
			width: 102%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			margin: 12rpx 0 8rpx;
		}

		.shop_num {
			font-size: 40rpx;
		}
	}

	.shop_type_all {
		position: fixed;
		z-index: 99;
		background-color: #ffffff;
		width: 100%;
	}

	.shop_type_all_list {
		margin: 0 auto;
		padding: 30rpx 0;
		padding-left: 15rpx;
		font-size: 24rpx;
	}

	.shop_type_info {
		display: inline-block;
		width: 160rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		background-color: #f1f1f1;
		border-radius: 10rpx;
		margin: 10rpx 10rpx;
	}

	.shop_type_info.isSelect {
		color: #6f86b3;
	}
	.home_tongji{
		width: 90%;
		margin:40rpx auto 0;
		position: relative;
	}
	.home_tongji_img{
		width: 100%;
	}
	.home_tongji_txt{
		position: absolute;
		color: #fff;
		display: flex;
		bottom: 50rpx;
		font-size: 20rpx;
	}
</style>
