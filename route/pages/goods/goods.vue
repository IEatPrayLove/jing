<template>
	<view class="content">
		<view class="banner">
			<!-- 轮播图 -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper-itemss">
				<swiper-item class="swiper-items" v-for="(item,index) in info.imgs" :key="index">
					<view class="swiper-item">
						<image :src="item" mode="scaleToFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="items">
			<view class="items_list">
				<view class="title font_b">
					<image src="../../static/image/dy.png" mode="aspectFill" class="item_t_r_item_icon"
						style="vertical-align: bottom;"></image>{{info.title}}
				</view>
				<view class="items_c" style="justify-content: unset;">
					<image src="../../static/image/goods/1.png" mode="aspectFill"
						style="width: 120rpx;height: 40rpx;margin: 0 20rpx;"></image>
					<image src="../../static/image/goods/2.png" mode="aspectFill"
						style="width: 120rpx;height: 40rpx;margin: 0 20rpx;"></image>
				</view>
				<view class="items_c">
					<view class="item_c_item">
						直播价
						<text class="font_b font_c_red font-s_30">{{info.price}}</text>
					</view>
					<view class="item_c_item">
						佣金
						<text class="font_b font_c_red font-s_30">{{info.commission}}%</text>
					</view>
					<view class="item_c_item">
						公开
						<text class="font_b font-s_30">{{info.commission_public}}%</text>
					</view>
				</view>
				<view class="items_c" style="justify-content: space-between;">
					<view class="item_c_item">
						总销量 {{info.sales}}
					</view>
					<view class="item_c_item">
						总库存 {{info.now_count}}
					</view>
				</view>
				<view class="item_t">
					<view class="item_c_item">
						{{info.talent}}
						<text>达人带过</text>
					</view>
					<view class="item_c_item" v-if="info.comment_count>0">
						{{info.comment_count}}条
						<text>评价</text>
					</view>
					<view class="item_c_item" v-else>
						0条
						<text>评价</text>
					</view>
					<view class="item_c_item">
						<view class="item_t_r_item" @tap="Shouka(info.id)">
							<image src="../../static/icon/goods/card.png" mode="aspectFill" class="item_t_r_item_icon">
							</image>
							<view class="">直播手卡</view>
						</view>
					</view>
				</view>
				<view class="liness"></view>
				<view class="item_b">
					<view class="item_b_item" @tap="Copy(info.link)">
						<image src="../../static/icon/goods/fuzhi.png" mode="aspectFill" class="item_b_item_icon">
						</image>
						复制链接
					</view>
					<view class="item_b_item">
						<button open-type="share" class="allow_btn_l"
							style="background-color: #FFFFFF;margin-right: 0;">
							<image src="../../static/icon/goods/share.png" mode="aspectFill" class="item_b_item_icons">
							</image>
							分享
						</button>
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						单品数据分析
					</view>
				</view>
				<view class="item_desc goods_desc">
					<view style="display: flex;justify-content: space-between;">
						<view style="text-align: center;" v-if="info.month_views">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.month_views}}w</view>
							<view>30天浏览量</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>30天浏览量</view>
						</view>
						<view style="text-align: center;" v-if="info.month_sales">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.month_sales}}w</view>
							<view>30天销量</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>30天销量</view>
						</view>
						<view style="text-align: center;" v-if="info.month_conversion">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.month_conversion}}%</view>
							<view>30天转化率</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0%</view>
							<view>30天转化率</view>
						</view>
					</view>
				</view>
				<view class="item_desc goods_desc">
					<view style="">
						<view style="margin: 40rpx 0;font-size: 35rpx;color: #000000;background-color: #fff8f3;padding: 10rpx 10rpx;">
							30天带货视频:
							<text style="margin-left: 10rpx;">{{info.month_videos}}个</text>
						</view>
						<view style="margin: 40rpx 0;font-size: 35rpx;color: #000000;background-color: #fff8f3;padding: 10rpx 10rpx;">
							30天带货直播:
							<text>{{info.month_live}}个</text>
						</view>
						<view style="margin: 40rpx 0;font-size: 35rpx;color: #000000;background-color: #fff8f3;padding: 10rpx 10rpx;">
							30天热推达人:
							<text>{{info.month_hot_talent}}个</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						营销转化<text style="font-size: 20rpx;color: gray;">(近7日)</text>
					</view>
				</view>
				<view class="item_desc goods_desc">
					<view style="display: flex;justify-content: space-between;">
						<view style="text-align: center;" v-if="info.estimate_sales">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.estimate_sales}}w</view>
							<view>预估总销量(件)</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>预估总销量(件)</view>
						</view>
						<view style="text-align: center;" v-if="info.estimate_live_sales">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.estimate_live_sales}}w</view>
							<view>预估直播销量(件)</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>预估直播销量(件)</view>
						</view>
						<view style="text-align: center;" v-if="info.estimate_video_sales">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.estimate_video_sales}}w</view>
							<view>预估视频销量(件)</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>预估视频销量(件)</view>
						</view>
					</view>
				</view>
				<view class="item_desc goods_desc">
					<view style="display: flex;justify-content: space-between;">
						<view style="text-align: center;" v-if="info.estimate_amount">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.estimate_amount}}w</view>
							<view>预估总销售额</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>预估总销售额</view>
						</view>
						<view style="text-align: center;" v-if="info.estimate_live_amount">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.estimate_live_amount}}w</view>
							<view>预估直播销售额</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>预估直播销售额</view>
						</view>
						<view style="text-align: center;" v-if="info.estimate_video_amount">
							<view style="color: #000000;margin-bottom: 20rpx;">{{info.estimate_video_amount}}w</view>
							<view>预估视频销售额</view>
						</view>
						<view style="text-align: center;" v-else>
							<view style="color: #000000;margin-bottom: 20rpx;">0w</view>
							<view>预估视频销售额</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list" style="padding: 0 10rpx;">
				<image src="../../static/image/seven_day.png" mode="widthFix" style="width: 100%;"></image>
			</view>
		</view>
		<view class="items" v-if="info.interest_point">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						<image src="../../static/icon/goods/liyi.png" mode="aspectFill" class="item_b_item_icon">
						</image>
						直播利益点
					</view>
					<view class="item_b_item" @tap="Copy(info.interest_point)">
						<image src="../../static/icon/goods/fuzhi.png" mode="aspectFill" class="item_b_item_icon">
						</image>
					</view>
				</view>
				<view class="item_desc">
					{{info.interest_point}}
				</view>
			</view>
		</view>
		<view class="items" v-if="info.selling_point">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						<image src="../../static/icon/goods/maidian.png" mode="aspectFill" class="item_b_item_icon">
						</image>
						商品卖点
					</view>
					<view class="item_b_item" @tap="Copy(info.selling_point)">
						<image src="../../static/icon/goods/fuzhi.png" mode="aspectFill" class="item_b_item_icon">
						</image>
					</view>
				</view>
				<view class="item_desc">
					{{info.selling_point}}
				</view>
			</view>
		</view>
		<view class="items" v-if="info.video.length>0">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						<image src="../../static/icon/goods/remen.png" mode="aspectFill" class="item_b_item_icon">
						</image>
						热门视频
					</view>
				</view>
				<view class="item_video">
					<view class="shop_good_list">
						<scroll-view class="shop_goods_lists" scroll-x="true">
							<view class="goods_list" v-for="(items,indexs) in info.video" :key="indexs">
								<video :src="items" :show-center-play-btn="false" mode="aspectFill" class="goods_pic"
									@tap="VideoInfo(info.id,info.title,info.thumb,items,info.price,info.commission)"></video>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						产品信息
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list item-lists">
				<view class="item_list_list" v-if="info.brand">
					<view style="width: 50%;">品牌名称</view>
					<view style="width: 50%;">{{info.brand}}</view>
				</view>
				<view class="item_list_list" v-if="info.guarantee">
					<view style="width: 50%;">保质期</view>
					<view style="width: 50%;">{{info.guarantee}}</view>
				</view>
				<view class="item_list_list" v-if="info.address">
					<view style="width: 50%;">发货地点</view>
					<view style="width: 50%;">{{info.address}}</view>
				</view>
				<view class="item_list_list" v-if="info.net_content">
					<view style="width: 50%;">净含量</view>
					<view style="width: 50%;">{{info.net_content}}</view>
				</view>
				<view class="item_list_list" v-if="info.express">
					<view style="width: 50%;">发货快递</view>
					<view style="width: 50%;">{{info.express}}</view>
				</view>
				<view class="item_list_list" v-if="info.factory_price">
					<view style="width: 50%;">出厂价</view>
					<view style="width: 50%;">{{info.factory_price}}</view>
				</view>
				<view class="item_list_list" v-if="info.un_shipping_area">
					<view style="width: 50%;">不发货区域</view>
					<view style="width: 50%;">{{info.un_shipping_area}}</view>
				</view>
				<view class="item_list_list" v-if="info.manufacture_time">
					<view style="width: 50%;">生产日期</view>
					<view style="width: 50%;">{{info.manufacture_time}}</view>
				</view>
				<view class="item_list_list" v-if="info.delivery_speed">
					<view style="width: 50%;">发样速度</view>
					<view style="width: 50%;">{{info.delivery_speed}}</view>
				</view>
				<view class="item_list_list" v-if="info.activity_time">
					<view style="width: 50%;">活动时间</view>
					<view style="width: 50%;">{{info.activity_time}}</view>
				</view>
				<view class="item_list_list" v-if="info.sending_threshold">
					<view style="width: 50%;">寄样门槛</view>
					<view style="width: 50%;">{{info.sending_threshold}}</view>
				</view>
				<view class="item_list_list" v-if="info.packing">
					<view style="width: 50%;">包装方式</view>
					<view style="width: 50%;">{{info.packing}}</view>
				</view>
				<view class="item_list_list" v-if="info.purchase_sample">
					<view style="width: 50%;">成本购样</view>
					<view style="width: 50%;">{{info.purchase_sample}}</view>
				</view>
				<view class="item_list_list" v-if="info.origin_address">
					<view style="width: 50%;">产地</view>
					<view style="width: 50%;">{{info.origin_address}}</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						履约能力
						<!--  <image src="../../static/icon/public/stars_ok.png"
                   mode="aspectFill"
                   class="item_b_item_icon"></image> -->
					</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list item-lists">
				<view class="item_list_list" v-if="info.daily_energy">
					<view style="width: 50%;">日产能</view>
					<view style="width: 50%;">{{info.daily_energy}}</view>
				</view>
				<view class="item_list_list" v-if="info.quality_inspection_report">
					<view style="width: 50%;">质检报告</view>
					<view style="width: 50%;">{{info.quality_inspection_report}}</view>
				</view>
				<view class="item_list_list" v-if="info.daily_delivery_capacity">
					<view style="width: 50%;">日发货能力</view>
					<view style="width: 50%;">{{info.daily_delivery_capacity}}</view>
				</view>
				<view class="item_list_list" v-if="info.product_qualification">
					<view style="width: 50%;">产品资质</view>
					<view style="width: 50%;">{{info.product_qualification}}</view>
				</view>
				<view class="item_list_list" v-if="info.customer_service">
					<view style="width: 50%;">客服响应</view>
					<view style="width: 50%;">{{info.customer_service}}</view>
				</view>
				<view class="item_list_list" v-if="info.security_inspection_report">
					<view style="width: 50%;">安检报告</view>
					<view style="width: 50%;">{{info.security_inspection_report}}</view>
				</view>
				<view class="item_list_list" v-if="info.operation_configuration">
					<view style="width: 50%;">运营配置</view>
					<view style="width: 50%;">{{info.operation_configuration}}</view>
				</view>
				<view class="item_list_list" v-if="info.historical_lowest_price">
					<view style="width: 50%;">历史最低价</view>
					<view style="width: 50%;">{{info.historical_lowest_price}}</view>
				</view>
			</view>
		</view>
		<view class="items">
			<view class="items_list item-lists" @tap="ShopInfo(info.shop_id)">
				<view class="shop_list">
					<view class="shop_info_t">
						<image :src="info.shop_info.logo" mode="aspectFill" class="shop_pic"></image>
						<view class="shop_info_r">
							<view class="shop_info">
								<view class="shop_name">{{info.shop_info.name}}</view>
								<view class="shop_address" v-if="info.shop_info.address">
									<image src="../../static/icon/public/address.png" mode="aspectFill"
										class="shop_address_image"></image>
									{{info.shop_info.address}}
								</view>
							</view>
							<!-- <view class="shop_desc">
								品牌简介:
								<rich-text :nodes="info.shop_info.content"></rich-text>
							</view> -->
						</view>
					</view>
					<view class="shop_scope">
						<view class="shop_scope_list">
							商品
							<text class="scope">{{info.shop_info.goods}}</text>
						</view>
						<view class="shop_scope_list">
							商家
							<text class="scope">{{info.shop_info.shop}}</text>
						</view>
						<view class="shop_scope_list">
							物流
							<text class="scope">{{info.shop_info.wuliu}}</text>
						</view>
					</view>
					<!-- <view class="shop_info_tags"
                v-if="info.shop_info.cooperation.length>0">
            关键词:
            <view class="shop_info_tag_list"
                  v-for="(itemss,indexss) in info.shop_info.cooperation"
                  :key="indexss">{{itemss}}</view>
          </view> -->
				</view>
			</view>
		</view>
		<view class="items" style="margin-bottom: 150rpx;">
			<view class="items_list">
				<view class="item_b item_bs">
					<view class="item_b_item">
						商品详情
					</view>
				</view>
				<view class="item_desc goods_desc">
					<rich-text :nodes="info.content"></rich-text>
				</view>
			</view>
		</view>
		<view class="item_btns">
			<view class="item_btns_item" style="width: 25%;" @tap="Copys(info.link)">
				+ 橱窗
			</view>
			<view class="item_btns_item border-r-r item_btn_gred" style="width: 37.5%;" @tap="getGoods(info.id)">
				免费领样
			</view>
			<view class="item_btns_item border-r-r item_btn_grln" style="width: 39%;margin-left: -1.5%;"
				@tap="LookShopInfo(info.shop_id)">
				直联商家
			</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	export default {
		data() {
			return {
				id: "",
				info: {}
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getInfo(options.id)
		},
		methods: {
			//获取商品信息
			getInfo: function(id) {
				uni.showLoading({
					title: '加载中',
				})
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Goods/Info', {
					id: id
				}, 'GET', function(eve) {
					var eves = eve.result
					uni.setNavigationBarTitle({
						title: eves.title
					})
					eves.content = eves.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ')
					that.info = eves
					uni.hideLoading()
				})
			},
			/*访问店铺主页*/
			ShopInfo: function(id) {
				uni.navigateTo({
					url: '/pages/shop/shop_info?id=' + id
				})
			},
			//直播手卡
			Shouka: function(id) {
				uni.navigateTo({
					url: '/pages/goods/goods_card?id=' + id
				})
			},
			Copy: function(e) {
				if (e) {
					uni.setClipboardData({
						data: e,
						success: function() {
							uni.showToast({
								title: "复制成功",
								icon: 'none'
							})
						}
					});
				} else {
					uni.showModal({
						title: '提示',
						content: '当前内容为空，复制失败~',
						showCancel: false
					});
				}
			},
			Copys: function(e) {
				//先判断是否有用户信息
				var userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					if (e) {
						uni.setClipboardData({
							data: e,
							success: function() {
								uni.showToast({
									title: "复制成功",
									icon: 'none'
								})
							}
						});
					} else {
						uni.showModal({
							title: '提示',
							content: '当前商品链接为空，复制链接失败~',
							showCancel: false
						});
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '授权登录后才能查看哟~',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/mine/mine'
								})
							} else if (res.cancel) {
								//console.log('用户点击取消');
							}
						}
					});
				}
			},
			VideoInfo: function(id, title, pic, video_url, price, commission) {
				uni.navigateTo({
					url: '/pages/goods/goods_video_info?id=' + id + '&title=' + title + '&pic=' + pic +
						'&url=' + video_url + '&price=' + price + '&commission=' + commission
				})
			},
			//弹出商家联系方式 需要验证是否是达人身份
			LookShopInfo: function(e) {
				//先判断是否有用户信息
				var userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					var that = this
					until.Requests('Shop/lookPhone', {
						id: e,
						token: uni.getStorageSync('token').token
					}, 'GET', function(eve) {
						var eves = eve.result
						uni.showModal({
							title: '提示',
							content: '商家联系方式为：' + eves,
							showCancel: false
						});
					})
				} else {
					uni.showModal({
						title: '提示',
						content: '授权登录后才能查看哟~',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/mine/mine'
								})
							} else if (res.cancel) {
								//console.log('用户点击取消');
							}
						}
					});
				}
			},
			getGoods: function(e) {
				//先判断是否有用户信息
				var userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					var that = this
					until.Requests('Goods/getGoods', {
						id: e,
						token: uni.getStorageSync('token').token
					}, 'GET', function(eve) {
						uni.showModal({
							title: '提示',
							content: '领样申请成功，请前往个人中心查看状态~',
							showCancel: false
						});
					})
				} else {
					uni.showModal({
						title: '提示',
						content: '授权登录后才能领取哟~',
						success: function(res) {
							if (res.confirm) {
								uni.switchTab({
									url: '/pages/mine/mine'
								})
							} else if (res.cancel) {
								//console.log('用户点击取消');
							}
						}
					});
				}
			},
			/**
			 * 分享给好友
			 * @param {Object} res
			 */
			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
					return {
						title: this.info.title,
						path: 'pages/goods/goods?id=' + this.id,
						imageUrl: this.info.thumb
					}
				} else {
					return {
						title: this.info.title,
						path: 'pages/goods/goods?id=' + this.id,
						imageUrl: this.info.thumb
					}
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #f1f1f1;
		width: 100%;
		height: auto;
	}

	.content {
		height: auto;
		/* position: relative; */
	}

	.banner {
		width: 100%;
	}

	.swiper-itemss {
		height: 800rpx !important;
	}

	/*轮播图*/
	.swiper-item {
		width: 100%;
	}

	.swiper-item image {
		width: 100%;
		height: 800rpx;
	}

	button::after {
		border: none;
	}

	.allow_btn_l {
		font-size: 30rpx;
		margin-left: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
	}

	.item_b_item_icons {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
		vertical-align: middle;
		margin-right: 10rpx;
	}

	.items {
		font-size: 30rpx;
		width: 95%;
		height: auto;
		margin: 20rpx auto;
		border-radius: 20rpx;
		background-color: #ffffff;
	}

	.items_list {
		padding: 20rpx;
	}

	.title {
		margin-bottom: 20rpx;
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.items_c {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.item_c_item {
		text-align: center;
		display: flex;
		flex-direction: column;
		line-height: 60rpx;
		font-size: 24rpx;
	}

	.item_t {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}

	.item_t_l {}

	.item_t_l view {
		margin: 15rpx 0;
	}

	.item_t_r {
		display: flex;
	}

	.item_t_r_item {
		margin: 0 10rpx;
		text-align: center;
		padding-top: 15rpx;
	}

	.item_t_r_item_icon {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
	}

	.item_b {
		margin-top: 15rpx;
		display: flex;
		justify-content: space-between;
	}

	.item_b_item {
		height: 60rpx;
		line-height: 60rpx;
	}

	.item_b_item_icon {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
		vertical-align: top;
		margin-right: 10rpx;
	}

	.item_bs {
		margin-top: 0 !important;
	}

	.item_desc {
		margin-top: 20rpx;
		color: #808080;
	}

	.item_video {
		margin-top: 20rpx;
	}

	.item-lists {
		overflow: hidden;
	}

	.item_list_list {
		width: 100%;
		margin: 10rpx auto;
		font-size: 28rpx;
		color: #808080;
		display: flex;
		justify-content: space-around;
	}

	.item_btns {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 25rpx;
		z-index: 99;
	}

	.item_btns_item {
		text-align: center;
		float: left;
		width: 33.3%;
		font-weight: bold;
	}

	.border-r-r {
		border-top-left-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
	}

	.item_btn_gr {
		background-color: #6f86b3;
	}

	.item_btn_bl {
		background-color: #007aff;
	}

	/*店铺信息*/
	.shop_list {
		width: 100%;
		/* margin-top: 50rpx; */
		background-color: #ffffff;
		color: #000000;
		border-radius: 8rpx;
	}

	.shop_info_t {
		width: 100%;
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
		justify-content: space-around;
	}

	.shop_info {
		display: flex;
		flex-direction: row;
	}

	.shop_name {
		font-size: 30rpx;
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
		font-size: 30rpx;
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
		overflow: hidden;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.shop_scope {
		margin-top: 10rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.shop_scope_list {
		margin-left: 10rpx;
	}

	.scope {
		margin-left: 10rpx;
	}

	.scope_desc {
		margin-left: 10rpx;
	}

	.shop_info_tags {
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	.shop_info_tag_list {
		display: inline-block;
		padding: 5rpx 10rpx;
		border-radius: 5rpx;
		margin: 10rpx 10rpx;
		font-size: 25rpx;
		border-radius: 10rpx;
		border: 1rpx solid #547BB3;
	}

	/*视频列表*/
	.shop_goods_lists {
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		line-height: 70rpx;
		white-space: nowrap;
		z-index: 99;
	}

	.shop_good_list {
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}

	.goods_list {
		margin: 0 20rpx;
		border-radius: 5rpx;
		display: inline-block;
		width: 200rpx;
	}

	.goods_pic {
		width: 200rpx;
		height: 160rpx;
		border-radius: 5rpx;
	}

	.goods_desc image {
		max-width: 100% !important;
	}
</style>
