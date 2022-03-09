<template>
	<view class="content">
		<view class="top_nav">
			<view class="uni-swiper-tab">
				<scroll-view class="swiper-tab-lists" scroll-x="true" :scroll-left="scrollLeft">
					<view v-for="(item,index) in shop_type_list" :key="index"
						:class="['swiper-tab-list',tabIndex==index ? 'active' : '']" @click="tapTab(index)">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="search">
			<view class="nav_search">
				<input type="text" confirm-type="send" maxlength="-1" @confirm="formSubmit" placeholder="搜索你想要的商品"
					placeholder-class="nav_searchs" :style="{'margin-top': ((height+10)*2)+'rpx'}" />
			</view>
		</view>
		<view style="position: relative;">
			<image src="../../static/image/goods/yiyuan.png" mode="aspectFill" v-if="type==1" class="shopimg"></image>
			<image src="../../static/image/goods/yinliu.png" mode="aspectFill" v-else-if="type==2" class="shopimg"></image>
			<image src="../../static/image/goods/gaoyong.png" mode="aspectFill" v-else-if="type==3" class="shopimg"></image>
			<image src="../../static/image/goods/dapai.png" mode="aspectFill" v-else-if="type==4" class="shopimg"></image>
			<image src="../../static/image/goods/goods.png" mode="aspectFill" v-else class="shopimg"></image>
			<view class="home_tongji_txt" v-if="type<0">
				<view style="margin-left: 115rpx;width: 90rpx;"><text v-for="(item,index) in tongji_list.add_goods" :key="index">{{item}}</text></view>
				<view style="margin-left: 90rpx;width: 80rpx;"><text v-for="(item,index) in tongji_list.add_chu" :key="index">{{item}}</text></view>
				<view style="margin-left: 90rpx;"><text v-for="(item,index) in tongji_list.da_ling" :key="index">{{item}}</text></view>
			</view>
		</view>
		<view class="shop_list">
			<view class="shop" v-for="item in shop_list" :item="item" :key="item.id" @tap="GoddsInfo(item.id)">
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
		<view class="cover" v-if="is_condition_info" @tap="bindChanel"></view>
		<view class="condition_info" v-if="is_condition_info">
			<view class="condition_info_list" v-for="(item,index) in condition_lists" :key="index"
				@tap="clickCondition(item)">{{item}}</view>
			<view class="condition_info_exit" @tap="bindChanel">取消</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	export default {
		data() {
			return {
				keywords: "",
				type: -1, //请求类型，-1--所有，1--小店商家，2--供应链，3--源头货源，4--团长高佣
				is_condition_info: false,
				scrollLeft: 0,
				tabIndex: 0,
				tabpreIndex: 0,
				condition_list: [
					['最新更新', '最新上架'],
					['总销量', '24小时', '2小时'],
					['佣金金额', '佣金比例']
				],
				condition_lists: [],
				shop_list: [],
				shop_type_list: [{
					"name": "所有",
					"id": "-1"
				}],
				page: 1,
				nodata: false,
				tongji_list:[]
			}
		},
		onLoad(options) {
			this.type = options.type
			let tab_title = '所有商品'
			if (options.type == 1) {
				tab_title = '一元购'
			} else if (options.type == 2) {
				tab_title = '引流款'
			} else if (options.type == 3) {
				tab_title = '必推高佣'
			} else if (options.type == 4) {
				tab_title = '爆款大牌'
			}
			uni.setNavigationBarTitle({
				title: tab_title
			})
			this.getShopTypeList();
			this.page = 1
			this.getList(false)
			var that = this
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
			formSubmit: function(e) {
				this.shop_list = []
				this.keywords = e.detail.value
				this.page = 1
				this.getList(false)
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
					category: that.shop_type_list[that.tabIndex].id,
					type: that.type,
					keywords: that.keywords
				}, 'GET', function(eve) {
					uni.stopPullDownRefresh()
					var eves = eve.result
					if (isMore) {
						if (eves.length > 0) {
							that.shop_list = [...that.shop_list, ...eves]
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
							that.shop_list = eves
						} else {
							that.nodata = true
						}
					}
					uni.hideLoading()
				})
			},
			//获取类目
			getShopTypeList: function() {
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Plblics/getCategory', {}, 'GET', function(eve) {
					var eves = eve.result
					that.shop_type_list = [...that.shop_type_list, ...eves]
				})
			},
			/*筛选条件选择*/
			binCondition: function(e) {
				let condition_list = this.condition_list
				if (e == 4) {

				} else {
					this.is_condition_info = true
					this.condition_lists = condition_list[Number(e) - 1]
				}
			},
			/*小导航点击*/
			tapTab: function(index) {
				uni.showLoading({
					title: '加载中',
				})
				this.shop_list = []
				this.is_condition_info = false
				if (this.tabIndex === index) {
					return false
				} else {
					this.tabpreIndex = this.tabIndex
					this.tabIndex = index;
					this.is_tab_all = false
					this.checkCor();
				}
				this.page = 1
				this.getList(false)
			},
			//点击时 滑动导航栏
			checkCor: function() {
				let tabindex = this.tabIndex
				let tabpreIndex = this.tabpreIndex
				if (tabindex == 0) {
					this.scrollLeft = 0
				} else {
					if (Number(tabindex) < Number(tabpreIndex)) {
						if (Number(tabindex) < 6) {
							this.scrollLeft -= 50 * (Number(tabpreIndex) - Number(tabindex)) + 30
						} else {
							this.scrollLeft -= 30 * (Number(tabpreIndex) - Number(tabindex))
						}
					} else {
						if (Number(tabindex) > 5) {
							this.scrollLeft += 50 * (Number(tabindex) - Number(tabpreIndex)) + 30
						} else {
							this.scrollLeft += 30 * (Number(tabindex) - Number(tabpreIndex))
						}
					}

				}
			},
			/*点击筛选条件*/
			clickCondition: function(e) {
				console.log('选中的筛选条件为' + e)
				this.is_condition_info = false
			},
			/*取消筛选*/
			bindChanel: function() {
				this.is_condition_info = false
			},
			/*访问商品详情*/
			GoddsInfo: function(id) {
				//console.log("将要访问商品详情，id为" + id)
				uni.navigateTo({
					url: '/pages/goods/goods?id=' + id
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		position: relative;
		background-color: #f1f1f1;
		width: 100%;
		height: 100%;
	}

	.content {
		height: 100vw;
	}
	.shop_list {
		width: 94%;
		margin: 20rpx auto;
		display: flex;
		flex-wrap: wrap;
		// justify-content: space-around;
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
	.search {
		width: 100%;
		background-color: #ffffff;
		padding: 20rpx 0;
	}

	.nav_search {
		width: 90%;
		margin: 0 auto;
	}

	.nav_searchs {
		padding-left: 50rpx;
		background-image: url(../../static/icon/public/search.png);
		background-repeat: no-repeat;
		background-size: 30rpx;
		background-position-y: 12rpx;
		background-position-x: 10rpx;
	}

	.nav_search input {
		font-size: 30rpx;
		background-color: #f1f1f1;
		border-radius: 30rpx;
		padding: 10rpx 30rpx;
		height: 50rpx;
		line-height: 50rpx;
	}

	.top_nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: #ffffff;
		color: #000000;
		width: 100%;
		border-bottom: 1rpx solid #f1f1f1;
		padding-bottom: -1rpx;
		/* position: fixed;
		z-index: 999; */
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

	.swiper-tab-list.active {
		position: relative;
		font-size: 35rpx;
		color: #6f86b3;
	}

	.swiper-tab-list.active:after {
		content: "";
		display: block;
		height: 6rpx;
		width: 60%;
		background: #6f86b3;
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

	/*筛选项*/
	.shop_condition {
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: #ffffff;
	}

	.shop_condition_list_l {
		width: 90%;
		font-size: 24rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.shop_condition_list_l_image {
		width: 25rpx;
		height: 25rpx;
		margin-left: 10rpx;
		vertical-align: middle;
	}

	.shop_condition_list {
		height: 80rpx;
		line-height: 80rpx;
	}

	.shop_condition_list_r {
		width: 10%;
		text-align: center;
	}

	/*商家列表*/
	.shop_main {
		width: 90%;
		margin: 0 auto;
	}

	.shop_list {
		width: 100%;
		margin-top: 50rpx;
		background-color: #ffffff;
		color: #000000;
		border-radius: 8rpx;
	}

	.shop_info_t {
		width: 95%;
		margin: 0 auto;
		padding-top: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20rpx;
	}

	.shop_pic {
		width: 25%;
		width: 120rpx;
		height: 120rpx;
		border-radius: 60rpx;
		/* margin-top: -40rpx; */
	}

	.shop_info_r {
		margin-top: 10rpx;
		width: 75%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.shop_info {
		display: flex;
		flex-direction: row;
	}

	.shop_name {
		font-size: 30rpx;
	}

	.shop_address {
		font-size: 24rpx;
		margin-left: 20rpx;
	}

	.shop_good_num {
		font-size: 24rpx;
		margin-left: 20rpx;
		padding: 3rpx 15rpx;
		background-color: #007aff;
		border-radius: 20rpx;
	}

	.shop_address_image {
		width: 30rpx;
		height: 30rpx;
		vertical-align: bottom;
	}

	.shop_key {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		font-size: 30rpx;
	}

	.shop_key_list {
		padding: 5rpx 10rpx;
		border: 1rpx solid #ff5757;
		border-radius: 10rpx;
		margin: 0 9rpx 10rpx;
	}

	.shop_goods_num_image {
		width: 30rpx;
		height: 30rpx;
		vertical-align: bottom;
	}

	.shop_desc {
		font-size: 24rpx;
		display: flex;
		flex-wrap: wrap;
		/* overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; */
	}

	.bgimg0 {
		background: linear-gradient(to right, #fb8641, #ff9e4e);
	}

	.bgimg1 {
		/* background: url('../../static/image/bgimgs/bg1.jpg') no-repeat;
  background-size: 100% 100% */
		background: linear-gradient(to right, #1a93ff, #5db8ff);
	}

	.bgimg2 {
		/*  background: url('../../static/image/bgimgs/bg2.jpg') no-repeat;
  background-size: 100% 100%; */
		background: linear-gradient(to right, #0faeb5, #3cd3cd);
	}

	.bgimg3 {
		/*  background: url('../../static/image/bgimgs/bg3.jpg') no-repeat;
  background-size: 100% 100%; */
		background: linear-gradient(to right, #fe5b28, #ff845e);
	}

	/*商品信息*/
	.shop_good_list {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		margin-bottom: 50rpx;
		overflow: hidden;
	}

	.goods_list {
		margin: 0 20rpx;
		background-color: #ffffff;
		border-radius: 5rpx;
		margin-bottom: 15rpx;
		display: inline-block;
		width: 200rpx;
		z-index: 3;
	}

	.goods_pic {
		width: 200rpx;
		height: 160rpx;
		border-radius: 5rpx;
	}

	.goods_info {
		padding: 0 10rpx;
		padding-bottom: 10rpx;
	}

	.goods_title {
		font-size: 24rpx;
		color: #000000;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		height: 35rpx;
		line-height: 35rpx;
	}

	.goods_b {
		font-size: 20rpx;
		color: #000000;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 35rpx;
		line-height: 35rpx;
	}

	.goods_price {
		color: red;
	}

	.goods_share_price {
		color: #808080;
	}

	.shop_goods_lists {
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		line-height: 70rpx;
		white-space: nowrap;
		z-index: 99;
	}

	.condition_info {
		position: fixed;
		bottom: 0;
		z-index: 99;
		background-color: #c8c7cc;
		width: 100%;
		text-align: center;
	}

	.condition_info_list {
		background-color: #ffffff;
		padding: 20rpx 0;
		border-top: 1rpx solid #999999;
	}

	.condition_info_exit {
		background-color: #ffffff;
		padding: 20rpx 0;
		border-top: 1rpx solid #999999;
		margin-top: 10rpx;
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

	.shop_type_info.actives {
		color: #6f86b3;
	}

	.shop_goods {
		display: flex;
		justify-content: space-between;
		font-size: 20rpx;
	}

	.shopimg {
		width: 100%;
		height: 226rpx;
	}
	.home_tongji_txt{
		position: absolute;
		color: #fff;
		display: flex;
		bottom: 53rpx;
		font-size: 20rpx;
	}
</style>
