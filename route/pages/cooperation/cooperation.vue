<template>
  <view class="content">
    <view class="banner">
      <image src="../../static/image/cooperation_banner.jpg"
             mode="aspectFill"
             class="banner_pics"></image>
      <view class="cooperation_btn"
            @tap="bindCoopreation"></view>
    </view>
    <view class="main">
      <image src="../../static/image/cooperation_image.jpg"
             mode="widthFix"
             class="bg"></image>
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
      <view class="kefu_desc">长按识别添加客服，进行商家合作对接</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      is_coopreation: false
    }
  },
  methods: {
    bindCoopreation: function () {
      this.is_coopreation = true
    },
    bindChannel: function () {
      this.is_coopreation = false
    }
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
.banner {
  width: 100%;
  position: relative;
}
.banner_pics {
  width: 100%;
  height: 650rpx;
}
.cooperation_btn {
  width: 50%;
  position: absolute;
  left: 25%;
  height: 100rpx;
  top: 70%;
  z-index: 99;
}
.main {
  width: 100%;
}
.bg {
  width: 100%;
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
