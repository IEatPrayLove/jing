<template>
  <view class="shop">
    <view class="header">
      <view class="left">
        <image :src="shop.shopimg"
               mode="aspectFill"
               class="shopimg"></image>
        <view class="wuliu">
          <view>商品
            <text style="color:red">{{shop.goods}}</text>
          </view>
          <view>商家
            <text style="color:red">{{shop.shop}}</text>
          </view>
          <view>物流
            <text style="color:red">{{shop.wuliu}}</text>
          </view>
        </view>
      </view>
      <view class="right">
        <view class="shop_name">
          <view>{{shop.name}}</view>
          <view>
            <image src="../../../static/icon/public/address.png"
                   mode="aspectFill"
                   class="address"></image>
            {{shop.address}}
          </view>
        </view>
        <view class="shop_title">
          <view>品牌名称:
            <text>{{shop.brand}}</text>
          </view>
          <view>品牌定位:
            <text>{{shop.positioning}}</text>
          </view>
          <view>主营类目:
            <text>{{shop.category}}</text>
          </view>
          <view>佣金最高:
            <text>{{shop.commission}}</text>
          </view>
        </view>
        <view class="shop_hot">
          主营爆款产品：
          <text v-for="(item,index) in shop.hot"
                :key="index">{{item}},</text>
        </view>
      </view>
    </view>
    <view class="bottom">
      <view>商家简介：{{shop.profile}}</view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      shop: {
        shopimg: require('../../../static/image/logo.png'),
        goods: 4.96, shop: 4.96, wuliu: 4.96,
        name: '网易严选官方旗舰店', address: '四川，成都',
        brand: '品牌名称', positioning: '品牌定位',
        category: '主营类目', commission: '佣金最高',
        hot: ['毛巾', '抹布', '口水巾'],
        profile: '商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介商家简介'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.shop {
  width: 96%;
  margin: 10rpx auto;
  box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);
  padding: 10rpx;
}
.header {
  display: flex;

  .left {
    width: 36%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10rpx;
    .shopimg {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      border: 2rpx solid #000;
      margin-bottom: 16rpx;
    }
    .wuliu {
      width: 100%;
      font-size: 20rpx;
      display: flex;
      justify-content: space-around;
    }
  }
  .right {
    flex: 1;
    font-size: 20rpx;
    .address {
      width: 40rpx;
      height: 40rpx;
    }
    .shop_name {
      display: flex;
      align-items: center;
      margin-bottom: 16rpx;
      > view:nth-of-type(1) {
        font-size: 30rpx;
        font-weight: bold;
        margin-right: 40rpx;
      }
    }
    .shop_title {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      line-height: 2;
    }
    .shop_hot {
      margin-top: 20rpx;
    }
  }
}
.bottom {
  padding: 20rpx;
  border: 4rpx solid #ccc;
  margin-top: 20rpx;
}
</style>
