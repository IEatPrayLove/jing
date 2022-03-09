<template>
  <view class="shop"
        @tap="goShop(item)">
    <image :src="item.comimg"
           mode="aspectFill"
           class="shopimg" />
    <view class="shop_title">{{item.title}}</view>
    <view class="shop_price">
      <view>￥
        <text class="shop_num">{{item.prcir}}</text>
      </view>
      <view>佣
        <text class="shop_num"
              style="color:#ff914d">{{item.commission}}%</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    goShop (item) {
      this.$emit('goShop', item)
    }
  }
}
</script>

<style lang="less" scoped>
.shop {
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18rpx;
  padding: 18rpx;
  box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);
  .shopimg {
    width: 186rpx;
    height: 186rpx;
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
</style>