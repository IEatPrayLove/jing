<template>
	<view class="phoneverify">
		<view style="margin-top: 50rpx;">
			<img :src="userInfo.avatarUrl" alt="" v-if="userInfo.avatarUrl">
			<img src="../../static/image/logo.png" alt="" v-else>
			<view>绑定手机</view>
			<input v-model="userphone" class="userphone" placeholder="请输入手机号" />
			<view class="code">
				<input v-model="phonecode" placeholder="请输入验证码" />
				<view @tap="sendCode">{{send_txt}}</view>
			</view>
			<view class="subbtn" @click="gomain">
				确定
			</view>
			<view class="is_friend">
				<view class="is_friend_radio" :class="is_query" @click="is_friends_click"></view>
				登录即表示您同意<text style="color: #547BB3;margin-left: 10rpx;margin-right: 10rpx;" @tap="lookXieyi('user')">使用协议</text>和<text style="color: #547BB3;margin-left: 10rpx;" @tap="lookXieyi('push')">信息发布规则</text>
			</view>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	export default {
		data() {
			return {
				userphone: '',
				phonecode: '',
				send_txt: "获取验证码",
				userInfo: uni.getStorageSync('userInfo'),
				is_query:'',
				is_friends:2,
			}
		},
		onLoad() {
			//先判断token问题
			until.updateUserToken();
			this.userInfo = uni.getStorageSync('userInfo');
		},
		methods: {
			is_friends_click:function(){
				if(this.is_query ==""){
					this.is_query = 'is_query';
					this.is_friends = 1
				}else{
					this.is_query =""
					this.is_friends = 2
				}
			},
			lookXieyi:function(type){
				uni.navigateTo({
					url:'/pages/verify/xieyi?type='+type
				})
			},
			sendCode: function() {
				if (!this.userphone) {
					uni.showModal({
						title: '提示',
						content: '手机号码不能为空~',
						showCancel: false
					});
					return false;
				}
				var that = this
				until.Requests('User/sendEms/', {
					token: uni.getStorageSync('token').token,
					mobile: this.userphone
				}, 'POST', function(e) {
					if (e.msg != 'success') {
						uni.showToast({
							title: e.msg,
							icon: 'none'
						})
					} else {
						that.send_txt = '已发送';
						uni.showToast({
							title: '验证码发送成功',
							icon: 'none'
						})
					}
				})
			},
			gomain() {
				if(this.is_friends!=1){
					uni.showModal({
						title: '提示',
						content: '用户协议和信息发布规则~',
						showCancel: false
					});
					return false
				}
				if (!this.userphone || !this.phonecode) {
					uni.showModal({
						title: '提示',
						content: '手机号码和验证码不能为空~',
						showCancel: false
					});
					return false
				}
				var that = this
				until.Requests('User/bindMobile/', {
					token: uni.getStorageSync('token').token,
					mobile: that.userphone,
					code: that.phonecode
				}, 'POST', function(e) {
					if (e.msg != 'success') {
						uni.showToast({
							title: e.msg,
							icon: 'none'
						})
					} else {
						uni.showToast({
							title: '绑定成功',
							icon: 'none'
						})
						if (that.userInfo && that.userInfo.type == 1) {
							uni.navigateTo({
								url: '/pages/verify/userinfo'
							})
						} else {
							uni.switchTab({
								url: '../mine/mine'
							})
						}
					}
				})

			}
		}
	}
</script>

<style lang="less" scoped>
	.phoneverify {
		img {
			width: 260rpx;
			height: 260rpx;
		}

		>view:nth-of-type(1) {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;

			.userphone {
				width: 460rpx;
				margin: 20rpx 0;
			}

			.code {
				display: flex;
				margin: 20rpx 0;
				justify-content: space-between;
			}

			.subbtn {
				padding: 10rpx 200rpx;
				margin-top: 100rpx;
				border-radius: 10rpx;
				background: #7d8fb9;
			}
		}
	}
	.is_friend{
		display: flex;
		margin-top: 30rpx;
		color: #000000;
		font-size: 24rpx;
		height: 20rpx;
		line-height: 20rpx;
	}
	.is_friend_radio{
		width: 20rpx;
		height: 20rpx;
		border-radius: 11rpx;
		border: 1rpx solid;
		margin-right: 10rpx;
	}
	.is_query{
		background-color: #3d6efc;
	}
</style>
