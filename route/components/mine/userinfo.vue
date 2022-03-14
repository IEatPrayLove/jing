<template>
  <view style="width: 100%;">
    <view class="mine_infos">
      <view class="mine_info_top">
        <image :src="userInfo.avatarUrl"
               mode="aspectFill"
               class="mine_pic"></image>
        <view class="mine_rts">
          <view class="mine_nickname">
            {{userInfo.nickName}}
          </view>
        </view>
      </view>
      <image src="../../static/icon/public/set_mine.png"
             mode="aspectFill"
             class="info_set"
             @click="bindNativeSpecials('/pages/mine/mine_info')"></image>
    </view>
    <view class="userdate" v-if="userInfo.type>'2'">
      <view class="version">
        <view>{{vip_info.vip_name}}</view>
        <view>{{vip_info.vip_over_time}}到期</view>
      </view>
      <view>
        <!-- 是达人可以隐藏 -->
        <view class="btn"
              @tap="bindCoopreation">购买/续费</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
	vip_info: {
	  type: Object,
	  default: () => {
	    return {}
	  }
	}
  },
  methods: {
    bindCoopreation () {
      // this.is_coopreation = true
      this.$emit('bindCoopreation')
    },
    //进入对应需登录方可访问的列表
    bindNativeSpecials: function (e) {
      uni.navigateTo({
        url: e
      })
    },
  }
}
</script>

<style lang="less" scoped>
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
.userdate {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20rpx;
  align-items: center;
  color: #fff;
  .version {
    line-height: 1.5;
  }
  .btn {
    padding: 8rpx 16rpx;
    background: #bbc3dd;
    border-radius: 10rpx;
    color: #000;
  }
}
</style>