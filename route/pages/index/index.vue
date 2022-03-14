<template>
	<view class="content">
		<!-- 标题栏 -->
		<view class='nav-wrap nav_index_wrap' :style="{'height': ((height + 50)*2)+'rpx'}">
			<view class="nav_search">
				<input type="text" placeholder="搜索你想要的商家" placeholder-class="nav_searchs"
					:style="{'margin-top': ((height+10)*2)+'rpx'}" @tap="searchInput" />
			</view>
			<view class='nav-titles'>
				<view class="hezuo" :style="{'margin-top': ((height+10)*2)+'rpx'}" @tap="shopApply">
					商家合作
				</view>
			</view>
		</view>
		<!-- 主体内容 -->
		<view class="contents" :style="{'top': ((height+43)*2)+'rpx'}">
			<!-- 顶部分类导航 -->
			<view class="top_nav">
				<view class="uni-swiper-tab">
					<scroll-view class="swiper-tab-lists" scroll-x="true" :scroll-left="scrollLeft">
						<view v-for="(item,index) in shop_type_list" :key="index"
							:class="['swiper-tab-list',tabIndex==index ? 'active' : '']" @click="tapTab(index)">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
				<view class="swiper-tab-lists_jt" @tap="lookAll">
					<image src="../../static/icon/public/bt_jt.png" mode="aspectFill" class="swiper-tab-lists_jt_image">
				</view>
			</view>
			<view class="main" :style="{'top': 70+'rpx'}">
				<!-- 轮播图 -->
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item,index) in banner_list" :key="index" @tap="jump(index)">
						<view class="swiper-item">
							<image :src="item.pic" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>

				<view class="tops_shujus tops_shujuss">
					<view class="tops_shuju">
						<view class="tops_shuju_title">直播电商流量大盘</view>
						<view class="tops_shuju_c">
							<view class="tops_shuju_c_t">
								<text class="tops_shuju_c_ts">{{tops_info.live_look_people_sum}}</text>
							</view>
							<view class="tops_shuju_c_desc">
								<text style="color: red;margin-right: 10rpx;">定更</text>电商直播观看总人次
							</view>
						</view>
						<view class="tops_shuju_b">
							<view class="tops_shuju_b_item">
								<view>直播总GMV </view>
								<view>{{tops_info.live_gmv}}</view>
							</view>
							<view class="tops_shuju_b_item">
								<view>在线总人数</view>
								<view>{{tops_info.line_people_sum}}</view>
							</view>
							<view class="tops_shuju_b_item">
								<view>分钟带货产出</view>
								<view>{{tops_info.mintue_sales}}</view>
							</view>
						</view>
					</view>
				</view>
				<view class="tops_shujus" style="margin-bottom: 60rpx;">
					<view class="tops_shuju">
						<view class="tops_shuju_title">直播商品流量大盘</view>
						<view class="top_tops">
							<view class="top_tops_t">
								<view class="top_tops_t_l">
									<view>TOP1</view>
									<view>{{tops_info.top1}}</view>
								</view>
								<view class="top_tops_t_r">
									<view>TOP2</view>
									<view>{{tops_info.top2}}</view>
								</view>
							</view>
							<view class="top_tops_b">
								<view class="top_tops_b_l">
									<view>TOP3</view>
									<view>{{tops_info.top3}}</view>
								</view>
								<view class="top_tops_b_c">
									<view>TOP4</view>
									<view>{{tops_info.top4}}</view>
								</view>
								<view class="top_tops_b_r">
									<view>TOP5</view>
									<view>{{tops_info.top5}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="home_tongji">
					<image src="../../static/icon/public/1.png" mode="widthFix" class="home_tongji_img"></image>
					<view class="home_tongji_txt">
						<view style="margin-left: 120rpx;width: 75rpx;"><text
								v-for="(item,index) in tongji_list.add_shop" :key="index">{{item}}</text></view>
						<view style="margin-left: 95rpx;width: 60rpx;"><text
								v-for="(item,index) in tongji_list.cell_daren" :key="index">{{item}}</text></view>
						<view style="margin-left: 100rpx;"><text v-for="(item,index) in tongji_list.cell_brand"
								:key="index">{{item}}</text></view>
					</view>
				</view>
				<!-- 商家分类 -->
				<view class="center_nav">
					<view class="c_nav_list" @tap="bindShopTop(1)">
						<image src="../../static/icon/public/001.png" mode="aspectFill" class="c_nav_pic"></image>
						<view class="c_nav_txt">小店商家</view>
					</view>
					<view class="c_nav_list" @tap="bindShopTop(2)">
						<image src="../../static/icon/public/002.png" mode="aspectFill" class="c_nav_pic"></image>
						<view class="c_nav_txt">TOP大牌</view>
					</view>
					<view class="c_nav_list" @tap="bindShopTop(3)">
						<image src="../../static/icon/public/003.png" mode="aspectFill" class="c_nav_pic"></image>
						<view class="c_nav_txt">供应链</view>
					</view>
					<view class="c_nav_list" @tap="bindShopTop(4)">
						<image src="../../static/icon/public/004.png" mode="aspectFill" class="c_nav_pic"></image>
						<view class="c_nav_txt">源头厂家</view>
					</view>
				</view>
				<!-- 商家筛选条件 -->
				<!-- <view class="shop_condition">
          <view class="shop_condition_list_l">
            <view class="shop_condition_list"
                  @tap="binCondition(0)">
              综合排序
              <image src="../../static/icon/public/jt_bottom.png"
                     mode="aspectFill"
                     class="shop_condition_list_l_image">
            </view>
            <view class="shop_condition_list"
                  @tap="binCondition(1)">
              最近最新
              <image src="../../static/icon/public/jt_bottom.png"
                     mode="aspectFill"
                     class="shop_condition_list_l_image">
            </view>
            <view class="shop_condition_list"
                  @tap="binCondition(2)">
              销量排序
              <image src="../../static/icon/public/jt_bottom.png"
                     mode="aspectFill"
                     class="shop_condition_list_l_image">
            </view>
            <view class="shop_condition_list"
                  @tap="binCondition(3)">
              佣金排序
              <image src="../../static/icon/public/jt_bottom.png"
                     mode="aspectFill"
                     class="shop_condition_list_l_image">
            </view>
          </view>
          <view class="shop_condition_list_r">
            <image src="../../static/icon/public/many.png"
                   mode="aspectFill"
                   class="swiper-tab-lists_jt_image"
                   @tap="binCondition(4)"></image>
          </view>
        </view> -->
				<!-- 商家列表 -->
				<view class="shop_main">
					<view class="shop_list" v-for="(item,index) in shop_list" :key="index" @tap="ShopInfo(item.id)">
						<view class="shop_info_t">
							<image :src="item.logo" mode="aspectFill" class="shop_pic"></image>
							<view class="shop_info_r">
								<view class="shop_info">
									<view class="shop_name">{{item.name}}</view>
									<view class="shop_address">
										<image src="../../static/icon/public/address.png" mode="aspectFill"
											class="shop_address_image"></image>
										{{item.address}}
									</view>
									<!-- <view class="shop_good_num">
                    <image src="../../static/icon/public/goods.png"
                           mode="aspectFill"
                           class="shop_goods_num_image"></image>
                    {{item.goods_num}}
                  </view> -->
								</view>
								<!-- <view class="shop_desc">
                  品牌简介:
                  <rich-text :nodes="item.content"></rich-text>
                </view> -->
								<view class="shop_desc" style="color: gray;">
									类目:<text style="color: #e37327;">{{item.categories}}</text>
								</view>
								<view class="shop_desc" style="color: gray;">
									<image :src="'../../static/image/shop/'+item.type+'.png'" mode="aspectFill"
										style="width: 90rpx;height: 30rpx;"></image>
								</view>
							</view>
						</view>
						<view class="shop_key" style="justify-content: space-between;margin-bottom: 30rpx;">
							<view class="shop_goods" style="margin: 0 auto;width: 70%;">
								<view>商品
									<text style="color:red">{{item.goods}}</text>
								</view>
								<view>商家
									<text style="color:red">{{item.shop}}</text>
								</view>
								<view>物流
									<text style="color:red">{{item.wuliu}}</text>
								</view>
							</view>
						</view>
						<view class="shop_key" style="justify-content: space-between;margin-bottom: 30rpx;">
							<view class="shop_goods" style="margin: 0 auto;width: 100%;font-size: 28rpx;">
								<view style="text-align: center;margin: 0 20rpx;">
									<view>{{item.max_commission}}%</view>
									<view style="color: gray;">最高佣金</view>
								</view>
								<view style="text-align: center;margin: 0 20rpx;">
									<view>{{item.goods_count}}</view>
									<view style="color: gray;">推广商品数</view>
								</view>
								<view style="text-align: center;margin: 0 20rpx;">
									<view>{{item.month_talent}}</view>
									<view style="color: gray;">近30天合作达人</view>
								</view>
							</view>
						</view>
						<!-- <view class="shop_key">
              <view style="margin-left: 9rpx;">店铺关键词:</view>
              <view v-for="(item2,index) in item.keywords"
                    :key="index"
                    class="shop_key_list">
                {{item2}}
              </view>
            </view> -->
						<view class="shop_good_list">
							<scroll-view class="shop_goods_lists" scroll-x="true">
								<view class="goods_list" v-for="(items,indexs) in item.goods_list" :key="indexs">
									<image :src="items.thumb" mode="aspectFill" class="goods_pic"></image>
									<view class="goods_info">
										<view class="goods_title">{{items.title}}</view>
										<view class="goods_b">
											<view class="goods_price">￥{{items.price}}</view>
											<view class="goods_share_price">佣金 {{items.commission}}%</view>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
				</view>
				<view v-if="nodata" style="text-align: center;color: #999999;margin-top:20rpx;margin-bottom: 20rpx;">--
					已经到底了 --</view>
			</view>
		</view>
		<view class="cover" v-if="is_condition_info" @tap="bindChanel"></view>
		<view class="cover" v-if="is_tab_all" @tap="bindShopTypeChanel"></view>
		<view class="shop_type_all" :style="{'top': ((height+79)*2)+'rpx'}" v-if="is_tab_all">
			<view class="shop_type_all_list">
				<view v-for="(item,index) in shop_type_list" :key="index"
					:class="['shop_type_info',tabIndex==index ? 'actives' : '']" @click="tapTab(index)">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="condition_info" v-if="is_condition_info">
			<view class="condition_info_list" v-for="(item,index) in condition_lists" :key="index"
				@tap="clickCondition(item)">{{item}}</view>
			<view class="condition_info_exit" @tap="bindChanel">取消</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	import config from 'config.js'
	export default {
		data() {
			return {
				height: '32',
				is_condition_info: false,
				condition_list: [
					['最新更新', '最新上架'],
					['总销量', '24小时', '2小时'],
					['佣金金额', '佣金比例']
				],
				is_tab_all: false,
				condition_lists: [],
				shop_type_list: [{
					"name": "首页",
					"id": "-1"
				}],
				banner_list: [],
				shop_list: [],
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				tabpreIndex: 0,
				page: 1,
				nodata: false,
				tops_info: {},
				tongji_list: []
			}
		},
		onShow() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.height = res.statusBarHeight
				},
			})
			/**
			 * 加载数据
			 */
			until.Requests('Plblics/customShop', {}, 'GET', function(eve) {
				var eves = eve.result
				that.tongji_list = eves
			})
			this.getShopTopList()
			this.getShopTypeList();
			this.page = 1
			this.getList(false)
			this.getTopsList()
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
			jump: function(index) {
				if (index == 0) { //达人库
					uni.switchTab({
						url: '/pages/talent/talent'
					})
				} else if (index == 1) { //赢鲸贴
					uni.switchTab({
						url: '/pages/allowance/allowance'
					})
				} else if (index == 2) { //赢鲸贴
					uni.switchTab({
						url: '/pages/allowance/allowance'
					})
				}else if (index == 3) { //选品库
					uni.switchTab({
						url: '/pages/selections/index'
					})
				} else { //推荐商家
					uni.navigateTo({
						url: '/pages/shop/shop_info?id=' + this.banner_list[index].id
					})
				}
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
				until.Requests('Shop/shopList', {
					p: that.page,
					category: that.shop_type_list[that.tabIndex].id
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
				var shoplists = [{
					"name": "首页",
					"id": "-1"
				}]
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Plblics/getCategory', {}, 'GET', function(eve) {
					var eves = eve.result
					shoplists = [...shoplists, ...eves]
					that.shop_type_list = shoplists
				})
			},
			getTopsList: function() {
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Plblics/customIndex', {}, 'GET', function(eve) {
					var eves = eve.result
					that.tops_info = eves
				})
			},
			//获取banner推荐商家数据
			getShopTopList: function() {
				var that = this
				this.banner_list = [{
						"id": 0,
						"pic": config.imgUrl+"/uploads/route_images/talent_banner.jpg"
					},
					{
						"id": 0,
						"pic": config.imgUrl+"/uploads/route_images/allowance_banner1.png"
					},
					{
						"id": 0,
						"pic": config.imgUrl+"/uploads/route_images/allowance_banner2.png"
					},
					{
						"id": 0,
						"pic": config.imgUrl+"/uploads/route_images/goods_banner.jpg"
					},
				];
				/**
				 * 加载数据
				 */
				until.Requests('Plblics/Banner', {}, 'GET', function(eve) {
					var eves = eve.result
					that.banner_list = [...that.banner_list, ...eves]
				})
			},
			//顶部搜索框
			searchInput: function() {
				uni.navigateTo({
					url: '/pages/shop/shop'
				})
			},
			//商家合作
			shopApply: function() {
				uni.navigateTo({
					url: '/pages/cooperation/cooperation'
				})
			},
			//中间导航点击
			bindShopTop: function(e) {
				uni.navigateTo({
					url: '/pages/shop/shop?type=' + e
				})
			},
			//点击显示所有分类
			lookAll: function() {
				let is_tab_all = this.is_tab_all
				if (is_tab_all) {
					this.is_tab_all = false
				} else {
					this.is_tab_all = true
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
						this.scrollLeft -= 30 * (Number(tabpreIndex) - Number(tabindex))
					} else {
						this.scrollLeft += 30 * (Number(tabindex) - Number(tabpreIndex))
					}

				}
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
			/*取消筛选*/
			bindChanel: function() {
				this.is_condition_info = false
			},
			/*收起所有导航展示*/
			bindShopTypeChanel: function() {
				this.is_tab_all = false
			},
			/*访问商品详情*/
			GoddsInfo: function(id) {
				console.log("将要访问商品详情，id为" + id)
				uni.navigateTo({
					url: '/pages/goods/goods?id=' + id
				})
			},
			/*点击筛选条件*/
			clickCondition: function(e) {
				console.log('选中的筛选条件为' + e)
				this.is_condition_info = false
			},
			/*访问店铺主页*/
			ShopInfo: function(id) {
				uni.navigateTo({
					url: '/pages/shop/shop_info?id=' + id
				})
			},
			/**
			 * 分享给好友
			 * @param {Object} res
			 */
			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
					return {
						title: '鲸大大~',
						path: 'pages/index/index',
						imageUrl: '/static/logo.png'
					}
				} else {
					return {
						title: '鲸大大~',
						path: 'pages/index/index',
						imageUrl: '/static/logo.png'
					}
				}
			},
		}
	}
</script>

<style>
	page {
		position: relative;
		background-color: #f1f1f1;
		width: 100%;
		height: 100%;
	}

	.content {
		height: 100vw;
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
		color: #6f86b3;
		border-radius: 25rpx;
		height: 50rpx;
		line-height: 50rpx;
		width: 100%;
	}

	.nav_search {
		width: 45%;
		margin: 0 20rpx;
	}

	.nav_searchs {}

	.nav_search input {
		padding-left: 50rpx;
		background-image: url(../../static/icon/public/search.png);
		background-repeat: no-repeat;
		background-size: 30rpx;
		background-position-y: 12rpx;
		background-position-x: 10rpx;
		font-size: 30rpx;
		background-color: #f1f1f1;
		border-radius: 25rpx;
		height: 50rpx;
		line-height: 50rpx;
	}

	.contents {
		position: relative;
	}

	.top_nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: #6f86b3;
		color: #fff;
		width: 100%;
		position: fixed;
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

	.swiper-tab-list.active {
		position: relative;
		font-size: 35rpx;
	}

	.swiper-tab-list.active:after {
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

	/*轮播图*/
	.swiper-item {
		width: 100%;
	}

	.swiper-item image {
		width: 100%;
		height: 300rpx !important;
	}

	/*中间小导航*/
	.center_nav {
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: #f1f1f1;
	}

	.c_nav_list {
		text-align: center;
	}

	.c_nav_pic {
		width: 100rpx;
		height: 100rpx;
	}

	.c_nav_txt {
		font-size: 24rpx;
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
		margin-top: -20rpx;
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
		/* margin-top: 10rpx; */
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
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		height: 30rpx;
		line-height: 30rpx;
	}

	.shop_address {
		font-size: 24rpx;
		margin-left: 20rpx;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		height: 30rpx;
		line-height: 30rpx;
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

	.shop_goods {
		display: flex;
		justify-content: space-between;
		font-size: 20rpx;
	}

	.shop_key {
		width: 93%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		font-size: 28rpx;
	}

	.shop_key_list {
		padding: 5rpx 10rpx;
		border: 1rpx solid #547BB3;
		border-radius: 10rpx;
		margin: 0 10rpx 10rpx;
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
	}

	.goods_pic {
		width: 200rpx;
		height: 160rpx;
		border-radius: 5rpx;
	}

	.goods_info {
		padding: 0 10rpx;
		padding-bottom: 10rpx;
		margin-top: -15rpx;
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

	.tops_shujuss {
		margin-top: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}

	.tops_shujus {
		background-color: #ffffff;
		width: 100%;
		padding: 50rpx 0;
	}

	.tops_shuju {
		width: 90%;
		margin: 0 auto;
	}

	.tops_shuju_title {
		font-size: 40rpx;
		font-weight: bold;
	}

	.tops_shuju_c {
		text-align: center;
	}

	.tops_shuju_c_t {
		margin: 20rpx 0;
		font-size: 30rpx;
		font-weight: bold;
		color: red;
	}

	.tops_shuju_c_ts {
		font-size: 50rpx;
	}

	.tops_shuju_c_desc {
		margin: 40rpx 0;
	}

	.tops_shuju_b {
		font-size: 30rpx;
		display: flex;
		justify-content: space-between;
	}

	.tops_shuju_b_item {
		text-align: center;
		color: #808080;
	}

	.top_tops {
		margin-top: 50rpx;
		color: #ffffff;
		font-size: 28rpx;
	}

	.top_tops_t {
		display: flex;
	}

	.top_tops_t_l {
		width: 53%;
		padding: 20rpx;
		border-right: 1rpx solid #ffffff;
		border-bottom: 1rpx solid #ffffff;
		height: 200rpx;
		background-color: rgb(84, 123, 179);
	}

	.top_tops_t_r {
		width: 47%;
		padding: 20rpx;
		border-bottom: 1rpx solid #ffffff;
		height: 200rpx;
		background-color: rgb(84, 123, 179);
	}

	.top_tops_b {
		display: flex;
	}

	.top_tops_b_l {
		padding: 20rpx;
		width: 35%;
		border-right: 1rpx solid #ffffff;
		height: 200rpx;
		background-color: rgb(84, 123, 179);
	}

	.top_tops_b_c {
		padding: 20rpx;
		width: 33%;
		border-right: 1rpx solid #ffffff;
		height: 200rpx;
		background-color: rgb(84, 123, 179);
	}

	.top_tops_b_r {
		padding: 20rpx;
		width: 32%;
		height: 200rpx;
		background-color: rgb(84, 123, 179);
	}

	.home_tongji {
		width: 90%;
		margin: -30rpx auto 20rpx;
		position: relative;
	}

	.home_tongji_img {
		width: 100%;
	}

	.home_tongji_txt {
		position: absolute;
		color: #fff;
		display: flex;
		bottom: 40rpx;
		font-size: 20rpx;
	}
</style>
