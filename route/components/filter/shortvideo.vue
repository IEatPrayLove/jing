<template>
  <view>
    <view class="talent_data"
          v-for="item in shop"
          :key="item.id">
      <view class="data_top">
        <view>
          <image :src="item.pic"
                 mode="aspectFill"
                 class="userimg">
        </view>
        <view class="talent_right">
          <view class="shop_name">
			  <view style="margin-right: 20rpx;">
			    <image src="../../static/image/dy.png"
			           mode="aspectFill"
			           class="appimg">
			  </view>
            <view> {{item.name}} </view>
          </view>
          <view class="shopnum">
            <view>抖音号： {{item.douyin}} </view>
            <view>
              <image src="../../static/icon/talent/phone.png"
                     mode="aspectFill"
                     class="wximg">
                <image src="../../static/icon/talent/wechat.png"
                       mode="aspectFill"
                       class="wximg">
                  <text @tap="lookPhone(item.id)" style="color: #547BB3;">直联达人</text>
            </view>
          </view>
          <view class="shop_sales">
            <view>粉丝数：{{item.fans}}W </view>
            <view>场均销售额：{{item.sales}}W</view>
          </view>
          <view class="shop_category">
            主推类目：
            <view class="category"
                  v-for="(item2,index) in item.categorys"
                  :key="index">
              {{item2}}
            </view>
          </view>
        </view>
      </view>
      <view class="data_bt">
        <view class="shop_data">
          <view class="fz"> {{item.line_people}} </view>
          <view>带货视频数/30天</view>
        </view>
        <view class="shop_data">
          <view class="fz">{{item.line_time}}</view>
          <view>平均播放量</view>
        </view>
        <view class="shop_data">
          <view class="fz">{{item.month_sales}}W</view>
          <view>30/日销售额</view>
        </view>
        <view class="shop_data">
          <view class="fz">{{item.minute_sales}}W</view>
          <view>推广商品数</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    shop: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    lookPhone (item) {
      this.$emit('lookPhone', item)
    }
  }
}
</script>

<style lang="less" scoped>
.talent_data {
  margin-top: 20rpx;
  font-size: 20rpx;
  padding: 10rpx;
  box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);
  border-radius: 8rpx;
  .data_top {
    display: flex;
    .userimg {
      border-radius: 50%;
      width: 180rpx;
      height: 180rpx;
      // border: 2rpx solid #000;
      margin-right: 30rpx;
    }
    .appimg {
      width: 32rpx;
      height: 32rpx;
      // margin-left: 40rpx;
	      vertical-align: middle;
    }
    .wximg {
      width: 26rpx;
      height: 26rpx;
      margin-right: 20rpx;
	  vertical-align: text-bottom;
    }
    .talent_right {
      line-height: 1.8;
    }
    .shop_name {
      display: flex;
      align-items: center;
      > view {
        font-size: 32rpx;
      }
    }
    .shopnum {
      display: flex;
      align-items: center;
      justify-content: space-between;
	  width: 450rpx;
    }
    .shop_sales {
      display: flex;
      margin: 10rpx 0;
      > view:nth-of-type(1) {
        margin-right: 90rpx;
      }
    }
    .shop_category {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .category {
        padding: 8rpx 10rpx;
        border: 2rpx solid #5075a8;
        border-radius: 8rpx;
        margin: 0 10rpx 10rpx 0;
      }
    }
  }
  .data_bt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16rpx;
    .shop_data {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
}
.fz {
  font-size: 26rpx;
  margin-bottom: 10rpx;
}
</style>