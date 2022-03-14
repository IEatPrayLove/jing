<template>
  <view class="commission"
        :style="{width:`${width}%`}">
    <view class="commission_top">
      <view :class="[isBlack?'c00':'']">{{title}}</view>
      <view style="fontSize:24rpx"
            @tap="gomore">{{more}}&gt;</view>
    </view>
    <view class="commission_list">
      <view class="com"
            v-for="item in list"
            :key="item.id"
            @tap="goShop(item)">
        <image :src="item.comimg"
               mode="aspectFill"
               class="comimg" />
        <view class="com_title">{{item.title}}</view>
        <view class="com_price">
          <view>￥
            <text class="prcie_num">{{item.prcir}}</text>
          </view>
          <view>佣
            <text class="prcie_num"
                  style="color:#ff914d">{{item.commission}}%</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    more: {
      type: String,
      default: '更多'
    },
    isBlack: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 96
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    goShop (item) {
      this.$emit('goShop', item)
    },
    gomore () {
      this.$emit('gomore', this.title)
    }
  }

}
</script>

<style lang="less" scoped>
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
    justify-content: space-around;
    .com {
      width: 48%;
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
</style>