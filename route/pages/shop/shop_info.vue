<template>
	<view class="content">
		<view class="banner">
			<scroll-view class="banner_lists" scroll-x="true">
				<view class="banner_list banner_listss" v-if="info.video.length>0" @tap="shopVideo">
					<image src="../../static/image/banner.png" mode="aspectFill" class="banner_pic"></image>
					<view class="banner_infos">共有{{info.video.length}}个视频</view>
				</view>
				<view class="banner_list banner_listss" v-if="info.imgs.length>0" @tap="shopImgs">
					<image :src="info.imgs[0]" mode="aspectFill" class="banner_pic"></image>
					<view class="banner_infos">共有{{info.imgs.length}}张图片</view>
				</view>
			</scroll-view>
		</view>
		<view class="shop_info">
			<view class="shop_infos_t">
				<image :src="info.logo" mode="aspectFill" class="shop_logo"></image>
				<view class="shop_info" style="display: flex;flex-direction: column;justify-content: space-around;">
					<view class="shop_info_t">
						<view class="shop_name">{{info.name}}</view>
					</view>
					<view class="shop_sale_type" style="display: flex;justify-content: space-between;">
						<view style="color: gray;">
							类目:<text style="color: #e37327;">{{info.categories}}</text>
						</view>
						<view class="shop_address" v-if="info.address">
							<image src="../../static/icon/public/address.png" mode="aspectFill"
								class="shop_address_image"></image>
							{{info.address}}
						</view>

					</view>
					<view class="shop_sale_type" style="color: gray;">
						<image :src="'../../static/image/shop/'+info.type+'.png'" mode="aspectFill"
							style="width: 120rpx;height: 40rpx;"></image>
					</view>
					<!-- <view class="shop_info_c">
						营业执照
					</view> -->
				</view>
			</view>
			<view class="shop_scope">
				<view class="shop_scope_list">
					商品 <text class="scope" style="color:red">{{info.goods}}</text>
					<!-- <text class="scope_desc">平</text> -->
				</view>
				<view class="shop_scope_list">
					商家 <text class="scope" style="color:red">{{info.shop}}</text>
					<!-- <text class="scope_desc">平</text> -->
				</view>
				<view class="shop_scope_list">
					物流 <text class="scope" style="color:red">{{info.wuliu}}</text>
					<!-- <text class="scope_desc">平</text> -->
				</view>
			</view>
			<view class="shop_scope" style="margin: 20rpx auto;padding-bottom:20rpx;width: 100%;font-size: 28rpx;">
				<view class="shop_scope_list" style="text-align: center;">
					<view>{{info.max_commission}}%</view>
					<view style="color: gray;">最高佣金</view>
				</view>
				<view class="shop_scope_list" style="text-align: center;">
					<view>{{info.goods_count}}</view>
					<view style="color: gray;">推广商品数</view>
				</view>
				<view class="shop_scope_list" style="text-align: center;">
					<view>{{info.month_talent}}</view>
					<view style="color: gray;">近30天合作达人</view>
				</view>
			</view>
			<!-- <view class="shop_info_tags" style="padding-left: 20rpx;padding-right: 20rpx;">
				主营爆款产品：
				<view class="shop_info_tag_list" v-for="(items,indexs) in info.top_goods" :key="indexs">{{items}}</view>
			</view> -->
			<!-- <view class="shop_info_desc">商家简介:<rich-text :nodes="info.content"></rich-text></view> -->
		</view>
		<view class="allow_content">
			<view
				style="padding:20rpx 0 0 40rpx;font-size: 36rpx;border-bottom: 1rpx solid #C8C7CC;padding-bottom: 20rpx;">
				店铺概览</view>
			<view class="shop_good_list" style="font-size: 26rpx;margin-bottom: 10rpx;padding-bottom: 20rpx;">
				<view style="width: 50%;">
					<view style="margin-left: 40rpx;width: 80%;">
						<view
							style="display: flex;flex-direction: row;justify-content: space-between;margin: 20rpx auto;">
							<view style="color: gray;">近30天销售额</view>
							<view>{{info.month_amount}}W</view>
						</view>
						<view
							style="display: flex;flex-direction: row;justify-content: space-between;margin: 20rpx auto;">
							<view style="color: gray;">近30天关联直播</view>
							<view>{{info.month_live}}W</view>
						</view>
						<view
							style="display: flex;flex-direction: row;justify-content: space-between;margin: 20rpx auto;">
							<view style="color: gray;">近30天平均转化率</view>
							<view>{{info.month_conversion}}%</view>
						</view>
					</view>
				</view>
				<view style="width: 50%;border-left: 1rpx solid #C8C7CC;">
					<view style="margin-left: 30rpx;width: 80%;">
						<view
							style="display: flex;flex-direction: row;justify-content: space-between;margin: 20rpx auto;">
							<view style="color: gray;">近30天销量（件）</view>
							<view>{{info.month_sales}}W</view>
						</view>
						<view
							style="display: flex;flex-direction: row;justify-content: space-between;margin: 20rpx auto;">
							<view style="color: gray;">近30天关联视频</view>
							<view>{{info.month_video}}W</view>
						</view>
						<view
							style="display: flex;flex-direction: row;justify-content: space-between;margin: 20rpx auto;">
							<view style="color: gray;">近30天客单价</view>
							<view>{{info.month_price}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="allow_content" style="margin-top: 0;">
			<view
				style="padding:20rpx 0 0 40rpx;font-size: 36rpx;padding-bottom: 20rpx;">
				品牌介绍</view>
			<view class="shop_good_list" style="font-size: 26rpx;width: 90%;margin: auto;padding-bottom: 20rpx;">
				<rich-text :nodes="info.content"></rich-text>
			</view>
		</view>
		<view class="allow_content">
			<view style="padding:20rpx 0 0 40rpx;font-size: 36rpx;">深度解析</view>
			<view class="allow_title">
				<view @tap="change(0)" :class="{active:btnnum == 0}">需求分析</view>
				<view @tap="change(1)" :class="{active:btnnum == 1}">品牌分析</view>
				<view @tap="change(2)" :class="{active:btnnum == 2}">实力分析</view>
			</view>
			<view class="allow_desc" v-if="btnnum ==0">
				<view class="listsss" v-for="(item,index) in info.demand" :key="index">
					<view class="listss-l">{{item.name}}</view>
					<view class="listss-r">{{item.value}}</view>
				</view>
			</view>
			<view class="allow_desc" v-else-if="btnnum==1">
				<view class="listsss" v-for="(item,index) in info.brand" :key="index">
					<view class="listss-l">{{item.name}}</view>
					<view class="listss-r">{{item.value}}</view>
				</view>
			</view>
			<view class="allow_desc" v-else>
				<view class="listsss" v-for="(item,index) in info.strength_analysis" :key="index">
					<view class="listss-l">{{item.name}}</view>
					<view class="listss-r">{{item.value}}</view>
				</view>
			</view>
		</view>
		<view class="allow_content">
			<view style="padding:20rpx 0 0 40rpx;font-size: 36rpx;">商家档案</view>
			<view class="allow_title">
				<view @tap="changes(0)" :class="{active:btnnums == 0}">合作模块</view>
				<view @tap="changes(1)" :class="{active:btnnums == 1}">综合概览</view>
				<view @tap="changes(2)" :class="{active:btnnums == 2}">企业资质</view>
			</view>
			<view class="allow_desc" v-if="btnnums ==0">
				<view class="shop_info_tag_list" style="background-color: #F66105;" v-for="(items,indexs) in info.cooperation" :key="indexs">{{items}}
				</view>
			</view>
			<view class="allow_desc" v-else-if="btnnums==1">
				<view class="listsss" v-for="(item,index) in info.comprehensive" :key="index">
					<view class="listss-l">{{item.name}}</view>
					<view class="listss-r">{{item.value}}</view>
				</view>
			</view>
			<view class="allow_desc" v-else>
				<view class="qualifications_img">
					<image v-for="(item,index) in info.qualifications" :key="index" :src="item"></image>
				</view>
			</view>
		</view>
		<view class="goods">
			<view style="padding: 0 0 40rpx 40rpx;font-size: 36rpx;">爆款商品</view>
			<view class="shop_good_list">
				<scroll-view class="shop_goods_lists" scroll-x="true">
					<view class="goods_list" v-for="(items,indexs) in info.goods_list" :key="indexs"
						@tap="GoddsInfo(items.id)">
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
		<view class="allow_btn">
			<button open-type="share" class="allow_btn_l" style="background-color: #FFFFFF;margin-right: 0;">
				<image src="../../static/icon/goods/share.png" mode="aspectFill" class="shares_pics"></image>
				分享
			</button>
			<view class="allow_btn_r" @tap="LookShopInfo">直联商家</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	export default {
		data() {
			return {
				id: "",
				info: {},
				btnnum: 0,
				btnnums: 0
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getShopInfo(options.id)
		},
		methods: {
			//获取店铺信息
			getShopInfo: function(id) {
				uni.showLoading({
					title: '加载中',
				})
				var that = this
				/**
				 * 加载数据
				 */
				until.Requests('Shop/Info', {
					id: id
				}, 'GET', function(eve) {
					var eves = eve.result
					uni.setNavigationBarTitle({
						title: eves.name
					})
					that.info = eves
					uni.hideLoading()
				})
			},
			/*切换*/
			change: function(e) {
				this.btnnum = e
			},
			changes: function(e) {
				this.btnnums = e
			},
			/*访问商品详情*/
			GoddsInfo: function(id) {
				console.log("将要访问商品详情，id为" + id)
				uni.navigateTo({
					url: '/pages/goods/goods?id=' + id
				})
			},
			//弹出商家联系方式 需要验证是否是达人身份
			LookShopInfo: function(e) {
				//先判断是否有用户信息
				var userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					var that = this
					until.Requests('Shop/lookPhone', {
						id: that.id,
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
			/*查看图片*/
			shopImgs: function() {
				var picslist = this.info.imgs
				var picslists = []
				for (var i = 0; i < picslist.length; i++) {
					picslists.push(picslist[i])
				}
				uni.previewImage({
					current: this.info.imgs[0], // 当前显示图片的http链接  
					urls: picslists // 需要预览的图片http链接列表  
				})
			},
			shopVideo: function() {
				console.log(this.id)
				uni.navigateTo({
					url: '/pages/shop/shop_video?id=' + this.id + '&name=' + this.info.name + '&address=' +
						this.info.address + '&logo=' + this.info.logo + '&video=' + JSON.stringify(this.info
							.video)
				})
			},
			/**
			 * 分享给好友
			 * @param {Object} res
			 */
			onShareAppMessage(res) {
				if (res.from === 'button') { // 来自页面内分享按钮
			  return {
						title: this.info.name,
						path: 'pages/shop/shop_info?id=' + this.id,
						imageUrl: this.info.logo
					}
				} else {
					return {
						title: this.info.name,
						path: 'pages/shop/shop_info?id=' + this.id,
						imageUrl: this.info.logo
					}
				}
			},
		}
	}
</script>

<style>
	page {
		position: relative;
		background-color: #F1F1F1;
		width: 100%;
		height: 100%;
	}

	.shop_address {
		font-size: 24rpx;
		/* margin: 10rpx; */
	}

	.shop_address_image {
		width: 30rpx;
		height: 30rpx;
		vertical-align: bottom;
	}

	.content {
		height: 100vw;
	}

	.banner {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		margin-top: 20rpx;
	}

	.banner_lists {
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		line-height: 70rpx;
		white-space: nowrap;
		z-index: 99;
	}

	.banner_list {
		margin: 0 10rpx;
		border-radius: 5rpx;
		margin-bottom: 15rpx;
		display: inline-block;
		width: 520rpx;
	}

	.banner_pic {
		width: 520rpx;
		height: 320rpx;
		border-radius: 5rpx;
	}

	.shop_info {
		width: 95%;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		font-size: 30rpx;
	}

	.shop_infos_t {
		padding: 20rpx;
		display: flex;
	}

	.shop_logo {
		width: 260rpx;
		height: 200rpx;
		border-radius: 20rpx;
	}

	.shop_info {
		margin-left: 20rpx;
	}

	.shop_info_t {}

	.shop_name {
		font-size: 35rpx;
		font-weight: bold;
	}

	.shop_sale_type {
		margin-top: 10rpx;
		font-size: 25rpx;
	}

	.shop_info_c {
		margin-top: 10rpx;
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

	.shop_info_tags {}

	.shop_info_tag_list {
		display: inline-block;
		padding: 5rpx 10rpx;
		border-radius: 5rpx;
		margin: 10rpx 10rpx;
		color: #FFFFFF;
		background-color: #C0C0C0;
	}

	.shop_info_desc {
		padding: 20rpx;
	}

	.allow_content {
		width: 95%;
		margin: 20rpx auto;
		background-color: #FFFFFF;
	}

	.allow_title {
		font-size: 30rpx;
		display: flex;
		border-bottom: 1rpx solid #C8C7CC;
		justify-content: space-around;
	}

	.allow_title view {
		margin-left: 20rpx;
		padding: 20rpx;
		padding-bottom: 10rpx;
	}

	.active {
		border-bottom: 4rpx solid #547BB3;
	}

	.allow_desc {
		padding: 30rpx;
		font-size: 24rpx;
		color: #555555;
	}

	/*商品信息*/
	.goods {
		width: 95%;
		margin: 0 auto;
		padding-top: 20rpx;
		background-color: #FFFFFF;
		margin-bottom: 200rpx;
	}

	.shop_good_list {
		display: flex;
		flex-direction: row;
		margin-bottom: 50rpx;
		overflow: hidden;
	}

	.goods_list {
		margin: 0 20rpx;
		background-color: #D8D8D8;
		border-radius: 5rpx;
		margin-bottom: 15rpx;
		display: inline-block;
		width: 280rpx;
	}

	.goods_pic {
		width: 280rpx;
		height: 240rpx;
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

	.allow_btn {
		width: 100%;
		position: fixed;
		bottom: 0;
		flex: 0;
		height: 130rpx;
		line-height: 130rpx;
		background-color: #FFFFFF;
		font-size: 30rpx;
		display: flex;
		z-index: 99;
	}

	.allow_btn_l {
		font-size: 30rpx;
		margin-left: 30rpx;
		color: #999999;
		height: 60rpx;
		line-height: 60rpx;
		margin-top: 35rpx;
	}

	.shares_pics {
		width: 30rpx;
		height: 30rpx;
		vertical-align: sub;
		margin-right: 15rpx;
	}

	.allow_btn_r {
		text-align: center;
		border-radius: 30rpx;
		color: #FFFFFF;
		height: 60rpx;
		line-height: 60rpx;
		margin-top: 35rpx;
		width: 70%;
		background-color: #FF5722;
	}

	button::after {
		border: none;
	}

	.banner_listss {
		position: relative;
	}

	.banner_infos {
		position: absolute;
		bottom: 11px;
		z-index: 99;
		background-color: #0000007a;
		color: #fff;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
	}

	.qualifications_img {
		display: flex;
		justify-content: space-around;
	}

	.qualifications_img image {
		width: 90%;
		margin: auto;
	}

	.listsss {
		margin: 10rpx auto;
		display: flex;
		font-weight: bold;
	}

	.listss-l {
		width: 50%;
	}

	.listss-r {
		width: 50%;
	}
</style>
