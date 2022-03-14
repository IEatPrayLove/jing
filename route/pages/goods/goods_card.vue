<template>
  <view class="content">
    <view class="card">
      <view class="cardss">
        <view class="cards">
          <view class="goods">
            <image :src="info.thumb"
                   mode="aspectFill"
                   class="goods_pic"></image>
            <view class="goods_info">
              <view class="goods_title">{{info.title}}</view>
              <view class="goods_price">
                <text class="sell_price">到手价：￥{{info.price}}</text>
                <text class="old_price">原价：￥0</text>
              </view>
            </view>
          </view>
          <view class="item"
                v-if="info.interest_point">
            <view class="item_title">直播亮点</view>
            <view class="item_desc">{{info.interest_point}}</view>
          </view>
          <view class="item"
                v-if="info.selling_point">
            <view class="item_title">商品卖点</view>
            <view class="item_desc">{{info.selling_point}}</view>
          </view>
          <view class="item">
            <view class="item_title">快递物流</view>
            <view class="item_desc">
              <view class="desc_item"
                    v-if="info.address">
                <text class="desc_title">发货地点</text>
                {{info.address}}
              </view>
              <view class="desc_item"
                    v-if="info.express">
                <text class="desc_title">发货快递</text>
                {{info.express}}
              </view>
              <view class="desc_item"
                    v-if="info.delivery_speed">
                <text class="desc_title">发货时间</text>
                {{info.delivery_speed}}
              </view>
              <view class="desc_item"
                    v-if="info.un_shipping_area">
                <text class="desc_title">发货地区</text>
                {{info.un_shipping_area}}
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import until from 'common/until.js'
export default {
  data () {
    return {
      id: "",
      info: {}
    }
  },
  onLoad (options) {
    this.id = options.id
    this.getInfo(options.id)
  },
  methods: {
    //获取商品信息
    getInfo: function (id) {
      uni.showLoading({
        title: '加载中',
      })
      var that = this
      /**
       * 加载数据
       */
      until.Requests('Goods/Info', { id: id }, 'GET', function (eve) {
        var eves = eve.result
        uni.setNavigationBarTitle({
          title: eves.title
        })
        that.info = eves
        uni.hideLoading()
      })
    },
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
.card {
  background-color: #6f86b3;
}
.cardss {
  width: 95%;
  margin: 2.5%;
  display: inline-block;
  background-color: #ffffff;
}
.cards {
  padding: 20rpx;
  font-size: 24rpx;
}
.goods {
  display: flex;
}
.goods_pic {
  width: 250rpx;
  height: 150rpx;
  display: inline-block;
}
.goods_info {
  margin-left: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goods_title {
  font-size: 30rpx;
  font-weight: bold;
}
.goods_price {
}
.sell_price {
  color: red;
}
.old_price {
  margin-left: 30rpx;
  text-decoration: line-through;
  color: #c8c7cc;
}
.item {
  margin: 20rpx auto;
}
.item_title {
  font-weight: bold;
  margin: 20rpx auto;
}
.item_desc {
  color: #555555;
}
.desc_item {
  margin: 20rpx 0;
}
.desc_title {
  color: #808080;
  margin-right: 30rpx;
}
</style>
