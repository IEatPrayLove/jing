<template>
  <view class="mymaster">
    <view class="top"></view>
    <view class="userinfo"
          v-if="userinfo">
      <view class="userinfo_top">
        <view>
          <image :src="userinfo.pic"
                 mode="aspectFill"
                 class="userimg">
        </view>
        <view class="userinfo_name">
          <view>{{userinfo.name}}</view>
          <view @tap="gocrreate">设置</view>
        </view>
      </view>
      <view class="userinfo_list">
        <view>角色</view>
        <view>达人</view>
      </view>
      <view class="userinfo_list">
        <view>手机</view>
        <view>{{userinfo.phone}}</view>
      </view>
      <view class="userinfo_list">
        <view>微信</view>
        <view>{{userinfo.wechat}}</view>
      </view>
      <view class="customerservice"
            @tap="bindCoopreation">专属客服</view>
    </view>
    <view v-else
          class="create">
      <view>暂无账号信息</view>
      <view class="createbtn"
            @tap="gocrreate">创建账号+</view>
    </view>
    <view class="cover"
          v-if="is_coopreation"
          @tap="bindChannel"></view>
    <view class="coopreations"
          v-if="is_coopreation">
      <view class="coopreation_exit"
            @tap="bindChannel">关闭</view>
      <view class="kefu">
        <image src="../../static/image/kefu_erweima.png"
               mode="aspectFill"
               class="kefu_pic"></image>
      </view>
      <view class="kefu_desc">长按可识别二维码</view>
    </view>
  </view>
</template>

<script>
	import until from 'common/until.js'
export default {
  data () {
    return {
      userinfo: "",
      is_coopreation: false
    }
  },
  onLoad(){
	  //先判断token问题
	  var that =this
	  until.updateUserToken();
	  until.Requests('Assistant/lists',{token:uni.getStorageSync('token').token},'GET',function(res){
		  if (res.msg != 'success') {
		  	uni.showToast({
		  		title: events.msg,
		  		icon: 'none'
		  	})
		  } else {
		  	that.userinfo = res.result[0]
		  }
	  })
  },
  methods: {
    gocrreate () {
		if(this.userinfo){
			uni.navigateTo({
			  url: '/pages/mine/createmaster?id='+this.userinfo.id
			})
		}else{
			uni.navigateTo({
			  url: '/pages/mine/createmaster'
			})
		}
    },
    bindCoopreation: function () {
      this.is_coopreation = true
    },
    bindChannel: function () {
      this.is_coopreation = false
    },
  }
}
</script>

<style lang="less" scoped>
.mymaster {
  background: #eeeef4;
  height: 100vh;
  .userinfo {
    box-sizing: border-box;
    padding: 40rpx;
    width: 90%;
    margin: 0 auto;
    background: #fff;
    box-shadow: 8rpx 18rpx 18rpx rgba(97, 112, 241, 0.1);
    margin-top: -300rpx;
    padding-top: 20rpx;
    border-radius: 20rpx;
    .userinfo_top {
      display: flex;
      .userimg {
        width: 270rpx;
        height: 270rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }
      .userinfo_name {
        width: 100%;
        margin-top: 40rpx;
        display: flex;
        justify-content: space-between;
        font-size: 40rpx;
      }
    }
    .userinfo_list {
      display: flex;
      justify-content: space-between;
      margin: 20rpx 0;
    }
    .customerservice {
      margin-top: 200rpx;
      text-align: center;
    }
  }
  .create {
    display: flex;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    background: #fff;
    box-shadow: 8rpx 18rpx 18rpx rgba(97, 112, 241, 0.1);
    margin-top: -300rpx;
    padding-top: 20rpx;
    border-radius: 20rpx;
    > view:nth-of-type(1) {
      flex: 1;
      margin: auto 0;
    }
    .createbtn {
      width: 100%;
      background: #a5b2ca;
      border-radius: 10rpx;
      text-align: center;
      padding: 8rpx 0;
      color: #fff;
      font-size: 40rpx;
    }
  }
  .top {
    min-height: 400rpx;
    background: #7a8db7;
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
}
</style>