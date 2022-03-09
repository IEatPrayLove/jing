<template>
	<view class="content">
		<view class="mine_info">
			<view class="mine_infos" v-if="userInfo">
				<!-- <view class="mine_info_top">
					<image :src="userInfo.avatarUrl" mode="aspectFill" class="mine_pic"></image>
					<view class="mine_rts">
						<view class="mine_nickname">
							{{userInfo.nickName}}
						</view>
					</view>
				</view>
				<image src="../../static/icon/public/edit.png" mode="aspectFill" class="info_set"
					@click="bindNativeSpecials('/pages/mine/mine_info')"></image> -->
					<!-- 登录信息 -->
					<Userinfo
					          @bindCoopreation="bindCoopreation"
					          :userInfo="userInfo" :vip_info="vip_info" style="width: 100%;" />
			</view>

			<view class="mine_infos_login" v-else>
				<view class="mine_info_top">
					<image src="../../static/icon/public/un_login.png" mode="aspectFill" class="mine_pic"></image>
					<view class="mine_rt">
						<view class="mine_nickname" @click="bindUserLogin">
							请点击授权登录
						</view>
						<view class="mine_login">
							登录解锁更多功能
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 商家 -->
		<view class="mine_item" v-if="userInfo.type>2">
			<view class="shoplist">
				<view class="shop_item">
					<view class="shop_item_name">店铺名称</view>
					<view>{{shop_info.name}}</view>
				</view>
				<view class="shop_item">
					<view class="shop_item_name">商家类型</view>
					<view>{{type_list[shop_info.type]}}</view>
				</view>
			</view>
		</view>
		<!-- 达人 -->
		<view class="mine_item" v-if="userInfo.type==2">
			<!-- <view class="list">
        <view class="list-t">
          <view class="list_t_title">我的样品</view>
          <view class="list_t_all"
                @click="bindNativeSpecials('/pages/mine/mine_sample?type=-1')">查看全部 ></view>
        </view>
        <view class="list_b">
          <view class="mine_list"
                @click="bindNativeSpecials('/pages/mine/mine_sample?type=1')">
            <view class="mine_list_nums">9</view>
            <view class="mine_list_desc">待审核</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials('/pages/mine/mine_sample?type=2')">
            <view class="mine_list_nums">9</view>
            <view class="mine_list_desc">待发货</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials('/pages/mine/mine_sample?type=3')">
            <view class="mine_list_nums">9</view>
            <view class="mine_list_desc">快递中</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials('/pages/mine/mine_sample?type=4')">
            <view class="mine_list_nums">9</view>
            <view class="mine_list_desc">已收货</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials('/pages/mine/mine_sample?type=5')">
            <view class="mine_list_nums">9</view>
            <view class="mine_list_desc">已完成</view>
          </view>
        </view>
      </view> -->
			<view class="operate">
				<view class="operate-my" @tap="bindNativeSpecials('/pages/mine/mymaster')">
					<view>我的达人</view>
					<view>&gt;</view>
				</view>
				<!-- <view>退出登录</view> -->
			</view>
		</view>
		<!-- <view class="mine_item" style="margin-top: 20rpx;border-radius: 0;"> -->
		<view class="mine_bottom">
			<view class="list">
				<view class="list_bs">
					<view class="mine_list" @click="bindNativeSpecialss('/pages/mine/mine_info')">
						<view class="mine_list_nums mine_list_numss">
							<image src="../../static/icon/tarbar/allowance_tag.png" mode="aspectFill"
								class="other_pics"></image>
						</view>
						<view class="mine_list_desc">平台公告</view>
					</view>
					<view class="mine_list" @click="bindNativeSpecialss('/pages/mine/mine_info')">
						<view class="mine_list_nums mine_list_numss">
							<image src="../../static/icon/tarbar/allowance_tag.png" mode="aspectFill"
								class="other_pics"></image>
						</view>
						<view class="mine_list_desc">投诉建议</view>
					</view>
					<view class="mine_list" @click="bindNativeSpecials('/pages/cooperation/cooperation')">
						<view class="mine_list_nums mine_list_numss">
							<image src="../../static/icon/tarbar/allowance_tag.png" mode="aspectFill"
								class="other_pics"></image>
						</view>
						<view class="mine_list_desc">商家入驻</view>
					</view>
				</view>
			</view>
		</view>
		<view class="kehu">
			<image src="../../static/icon/public/douyin.png" mode="aspectFill" class="kehu_pic"></image>
			您的专属服务官： 鲸大大
			<text class="kehu_click" @tap="bindCoopreation">联系Ta</text>
		</view>
		<!-- 授权登陆框 -->
		<view class="cover" v-if="is_show" @click="bindChanelLogin"></view>
		<view class="del_plan" v-if="is_show">
			<view class="del_plan_info">
				<image src="../../static/icon/public/exit.png" mode="aspectFill" class="del_exit"
					@click="bindChanelLogin"></image>
				<view class="del_main">
					<image src="../../static/logo.png" mode="aspectFill" class="del_main_icon"></image>
					微信一键授权登录
				</view>
				<view class="del_btn_list">
					<button type="default" size="mini" class="del_btn del_btn_ok" @click="bindChanelLogin">暂不授权</button>
					<button type="default" size="mini" class="del_btn" @click="getUserInfo" @getuserinfo="getUserInfo"
						lang="zh_CN">马上授权</button>
				</view>
			</view>
		</view>
		<view class="cover" v-if="is_coopreation" @tap="bindChannel"></view>
		<view class="coopreations" v-if="is_coopreation">
			<view class="coopreation_exit" @tap="bindChannel">关闭</view>
			<view class="kefu">
				<image src="../../static/image/kefu_erweima.png" mode="aspectFill" class="kefu_pic"></image>
			</view>
			<view class="kefu_desc">长按可识别二维码</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	import Userinfo from '@/components/mine/userinfo.vue'
	export default {
		components: {
			Userinfo
		},
		data() {
			return {
				userInfo: '',
				is_show: false,
				is_coopreation: false,
				vip_info:"",
				shop_info:"",
				type_list:['小店','供应链','源厂','大牌']
			}
		},
		onShow: function() {
			uni.showLoading({
				title: '加载中',
			})
			var that = this
			//先判断token问题
			until.updateUserToken();
			//判断是否有用户信息缓存，没有则显示授权文字
			var userInfo = uni.getStorageSync('userInfo');
			if (userInfo) {
				this.userInfo = userInfo
				if(userInfo.type>2){
					until.Requests('User/getVipInfo',{token:uni.getStorageSync('token').token},'GET',function(vips){
						  if(vips.msg != 'success'){
							uni.showToast({
								title: vips.msg,
								icon: 'none'
							})
						  }
						  that.vip_info = vips.result
						  uni.setStorageSync('vip_info', vips.result)
					})
					until.Requests('Workbench/lists',{token:uni.getStorageSync('token').token},'GET',function(shops){
						  if(shops.msg != 'success'){
							uni.showToast({
								title: shops.msg,
								icon: 'none'
							})
						  }
						  var shops = shops.result[0]
						  shops.type = Number(shops.type)-Number(1)
						  that.shop_info = shops
					})
				}
				until.Requests('User/isMobile',{token:uni.getStorageSync('token').token},'GET',function(res){
					if(res.msg != 'success'){
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}else{
						if(!res.result){
							uni.navigateTo({
							  url: '/pages/verify/phone'
							})
						}
					}
				})
			} else {
				this.userInfo = ''
			}
			uni.hideLoading()
		},
		methods: {
			bindCoopreation: function() {
				this.is_coopreation = true
			},
			bindChannel: function() {
				this.is_coopreation = false
			},
			//点击登录
			bindUserLogin: function() {
				this.is_show = true
			},
			//取消登录
			bindChanelLogin: function() {
				this.is_show = false
			},
			//进入对应需登录方可访问的列表
			bindNativeSpecials: function(e) {
				uni.navigateTo({
					url: e
				})
				/* if (this.userInfo) {
				  uni.navigateTo({
				    url: e
				  })
				} else {
				  uni.showToast({
				    title: '请先授权登陆',
				  })
				} */
			},
			bindNativeSpecialss: function() {
				uni.showModal({
					title: '提示',
					content: '待开通~',
					showCancel: false
				});
			},
			/**
			 * 
			 * 获取用户微信信息
			 */
			getUserInfo: function(e) {
				var that = this
				// 获取用户信息的
				uni.getUserProfile({
					desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						if (res.errMsg == 'getUserProfile:ok') {
							until.Requests('User/buildUserInfo', {
								token: uni.getStorageSync('token').token,
								signature: res.signature,
								rawData: res.rawData,
								userInfo: res.userInfo
							}, 'POST', function(events) {
								if (events.msg != 'success') {
									uni.showToast({
										title: events.msg,
										icon: 'none'
									})
								} else {
									uni.showToast({
										title: '登陆成功',
										icon: 'none'
									})
									until.Requests('User/isMobile',{token:uni.getStorageSync('token').token},'GET',function(dres){
										if(dres.msg != 'success'){
											uni.showToast({
												title: dres.msg,
												icon: 'none'
											})
										}else{
											if(!dres.result){
												uni.navigateTo({
												  url: '/pages/verify/phone'
												})
											}
										}
									})
								}
								var event = events.result
								if (event.gender == 1) {
									event.sexs = '男'
								} else if (event.gender == 2) {
									event.sexs = '女'
								}
								uni.setStorageSync('userInfo', event)
								that.userInfo = event,
									that.is_show = false
							})
						}
					}
				})
			},
			signout: function() {
				console.log('退出登录');
			}
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

	.mine_info {
		width: 100%;
		height: 360rpx;
		background-color: #6f86b3;
	}

	/**
	 * 背景图
	 */
	.mine_infos_login {
		width: 90%;
		height: auto;
		position: relative;
		margin: 0 auto 20rpx;
		z-index: 9;
		padding-top: 20rpx;
	}

	.mine_infos {
		width: 90%;
		height: auto;
		position: relative;
		margin: 0 auto 20rpx;
		z-index: 9;
		padding-top: 20rpx;
		display: flex;
	}

	.mine_info_top {
		width: 100%;
		color: #ffffff;
		display: flex;
	}

	.mine_pic {
		width: 160rpx;
		height: 160rpx;
		border-radius: 80rpx;
		margin-right: 20rpx;
	}

	.mine_rt {
		margin-top: 3%;
	}

	.mine_rts {
		line-height: 160rpx;
	}

	.mine_nickname {
		font-size: 35rpx;
	}

	.info_set {
		width: 80rpx;
		height: 70rpx;
		margin-top: 50rpx;
		margin-left: 15rpx;
	}

	.mine_vip {
		padding: 4rpx 20rpx;
		border-radius: 30rpx;
		margin-top: 20rpx;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.mine_login {
		margin-top: 20rpx;
		color: #d8d8d8;
	}

	.mine_info_center {
		width: 100%;
		height: 10rpx;
		margin: 20rpx auto;
		border-radius: 10rpx;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.vip_point {
		height: 10rpx;
		border-top-left-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
		background-color: #ffffff;
	}

	.mine_info_but {
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: #ffffff;
	}

	.mine_item {
		height: auto;
		margin-top: -20rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #ffffff;
		margin-bottom: 40rpx;
		padding: 20rpx;
	}

	.shoplist {
		line-height: 2;
	}

	.shop_item {
		display: flex;
	}

	.shop_item_name {
		width: 60%;
	}

	.mine_bottom {
		height: auto;
		margin-top: -20rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #ffffff;
	}

	.operate {
		margin-top: 60rpx;
	}

	.operate-my {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #4b70a8;
		margin-bottom: 30rpx;
	}

	.list {
		width: 95%;
		margin: 20rpx auto;
	}

	.list-t {
		display: flex;
		justify-content: space-between;
	}

	.list_t_title {}

	.list_t_all {
		font-size: 24rpx;
		color: darkgray;
	}

	.list_b {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		margin-top: 30rpx;
	}

	.list_bs {
		display: flex;
		font-size: 24rpx;
		margin-top: 30rpx;
	}

	.mine_list_nums {
		font-size: 30rpx;
		margin-bottom: 15rpx;
	}

	.mine_list {
		text-align: center;
	}

	.mine_list_l {
		display: flex;
		height: 35rpx;
		line-height: 35rpx;
		color: #2c2b2b;
	}

	.list_icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 30rpx;
	}

	.list_icon_j {
		width: 16rpx;
		height: 32rpx;
	}

	.del_plan {
		width: 90%;
		position: absolute;
		top: 20%;
		left: 5%;
		border-radius: 20rpx;
		background-color: #ffffff;
		z-index: 99999;
	}

	.del_plan_info {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.del_exit {
		width: 30rpx;
		height: 30rpx;
		margin-top: 20rpx;
		margin-left: 95%;
	}

	.del_main {
		margin-top: 60rpx;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.del_main_icon {
		width: 200rpx;
		height: 200rpx;
		margin: 0 auto;
		margin-bottom: 30rpx;
	}

	.del_btn_list {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 60rpx;
		margin-bottom: 30rpx;
	}

	.del_btn {
		border: 2rpx solid #3d6efc !important;
		color: #3d6efc !important;
	}

	.del_btn_ok {
		background-color: #3d6efc !important;
		color: #fff !important;
	}

	.other_pics {
		width: 50rpx;
		height: 50rpx;
	}

	.mine_list_numss {
		margin: auto 50rpx;
	}

	.kehu {
		margin: 20rpx auto;
		text-align: center;
		height: 80rpx;
		background: #ffffff;
		line-height: 80rpx;
		width: 80%;
		font-size: 24rpx;
		border-radius: 40rpx;
	}

	.kehu_pic {
		width: 40rpx;
		height: 40rpx;
		border-radius: 20rpx;
		vertical-align: sub;
		margin-right: 10rpx;
	}

	.kehu_click {
		color: #6f86b3;
		margin-left: 20rpx;
	}

	.coopreations {
		width: 80%;
		position: fixed;
		top: 20%;
		left: 10%;
		background-color: #6f86b3;
		border-radius: 15rpx;
		z-index: 99;
		color: #ffffff;
	}

	.coopreation_exit {
		padding-top: 20rpx;
		padding-right: 20rpx;
		padding-bottom: 20rpx;
		color: #fff;
		text-align: right;
	}

	.kefu {
		width: 70%;
		margin: 20rpx auto;
	}

	.kefu_pic {
		width: 420rpx;
		height: 420rpx;
	}

	.kefu_desc {
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		margin: 20rpx auto 50rpx;
	}
</style>
