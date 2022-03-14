<template>
  <view class="content">
    <view class="header">
      <view class="uni-swiper-tab">
        <scroll-view class="swiper-tab-lists"
                     scroll-x="true">
          <view v-for="(item,index) in type_list"
                :key="index"
                :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
                @click="tapTab(index)">
            {{item.name}}
          </view>
        </scroll-view>
      </view>
    </view>
    <view class="contents">
      <swiper :indicator-dots="true">
        <swiper-item>
          <view class="swiper-item">
            <view class="item_list">
              全部销售额
              <text class="item_list_title">￥0.00</text>
            </view>
            <view class="item_list">
              全部单数
              <text class="item_list_title">0</text>
            </view>
            <view class="item_list">
              全部佣金
              <text class="item_list_title">￥0.00</text>
            </view>
            <view class="item_list">
              有效销售额
              <text class="item_list_title">￥0.00</text>
            </view>
            <view class="item_list">
              有效单数
              <text class="item_list_title">0</text>
            </view>
            <view class="item_list">
              有效佣金
              <text class="item_list_title">￥0.00</text>
            </view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <view class="item_list">
              退款销售额
              <text class="item_list_title">￥0.00</text>
            </view>
            <view class="item_list">
              退单数
              <text class="item_list_title">0</text>
            </view>
            <view class="item_list">
              退款佣金
              <text class="item_list_title">￥0.00</text>
            </view>
            <view class="item_list">
              退款率
              <text class="item_list_title">0</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="mine_item">
      <view class="list">
        <view class="list_bs">
          <view class="mine_list"
                @click="bindNativeSpecials">
            <view class="mine_list_nums mine_list_numss">
              <image src="../../static/icon/tarbar/allowance_tag.png"
                     mode="aspectFill"
                     class="other_pics"></image>
            </view>
            <view class="mine_list_desc">产品排行</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials">
            <view class="mine_list_nums mine_list_numss">
              <image src="../../static/icon/tarbar/allowance_tag.png"
                     mode="aspectFill"
                     class="other_pics"></image>
            </view>
            <view class="mine_list_desc">账号排行</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials">
            <view class="mine_list_nums mine_list_numss">
              <image src="../../static/icon/tarbar/allowance_tag.png"
                     mode="aspectFill"
                     class="other_pics"></image>
            </view>
            <view class="mine_list_desc">店铺排行</view>
          </view>
          <view class="mine_list"
                @click="bindNativeSpecials">
            <view class="mine_list_nums mine_list_numss">
              <image src="../../static/icon/tarbar/allowance_tag.png"
                     mode="aspectFill"
                     class="other_pics"></image>
            </view>
            <view class="mine_list_desc">视频列表</view>
          </view>
        </view>
      </view>
    </view>
    <view class="mian">
      暂无数据
      <text class="shouquan"
            @click="bindNativeSpecials">授权账号</text>
    </view>
    <view class="footer">
      <view class="footer_t">鲸大大</view>
      <view class="footer_b">jjjdada.com</view>
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
      <view class="kefu_desc">暂无此功能权限，详询长按识别添加客服</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      is_coopreation: false,
      tabIndex: 0,
      type_list: [
        {
          "name": "今天",
          "type": "1"
        }, {
          "name": "昨天",
          "type": "2"
        }, {
          "name": "近7天",
          "type": "3"
        }, {
          "name": "近30天",
          "type": "4"
        }, {
          "name": "本月",
          "type": "5"
        }, {
          "name": "上月",
          "type": "6"
        }, {
          "name": "近60天",
          "type": "7"
        }, {
          "name": "近90天",
          "type": "8"
        }, {
          "name": "全部",
          "type": "-1"
        }
      ],
    }
  },
  methods: {
    tapTab: function (index) {
      if (this.tabIndex === index) {
        return false
      } else {
        this.tabIndex = index;
      }
    },
    bindChannel: function () {
      this.is_coopreation = false
    },
    bindNativeSpecials: function () {
      this.is_coopreation = true
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #d8d8d8;
  width: 100%;
  border-bottom: 1rpx solid #f1f1f1;
  padding-bottom: -1rpx;
  background-color: #6f86b3;
}
.uni-swiper-tab {
  width: 100%;
  height: 70rpx;
  line-height: 70rpx;
  font-size: 30rpx;
}
.swiper-tab-lists {
  height: 70rpx;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 70rpx;
  white-space: nowrap;
  z-index: 99;
}
.swiper-tab-list {
  margin: 0 20rpx;
  display: inline-block;
  text-align: center;
}
.swiper-tab-list.active {
  position: relative;
  color: #ffffff;
}
.swiper-tab-list.active:after {
  content: "";
  display: block;
  height: 6rpx;
  width: 60%;
  background: #6f86b3;
  position: absolute;
  bottom: 0;
  left: 20%;
  border-radius: 20rpx;
}
.contents {
  background-color: #6f86b3;
}
.swiper-item {
  width: 90%;
  margin: 20rpx auto;
  overflow: hidden;
}
.item_list {
  font-size: 28rpx;
  width: 30%;
  text-align: center;
  color: #d8d8d8;
  display: flex;
  flex-direction: column;
  float: left;
  margin: 15rpx 1.6%;
}
.item_list_title {
  color: #ffffff;
  font-weight: bold;
  margin-top: 10rpx;
}
.mine_item {
  height: auto;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  background-color: #ffffff;
}
.list {
  width: 95%;
  margin: 20rpx auto;
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
.other_pics {
  width: 50rpx;
  height: 50rpx;
}
.mine_list_numss {
  margin: auto 50rpx;
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
.mian {
  height: 250rpx;
  color: #999999;
  line-height: 250rpx;
  text-align: center;
}
.footer {
  width: 100%;
  text-align: center;
  color: #c8c7cc;
  margin-bottom: 80rpx;
}
.footer_b {
  font-size: 24rpx;
}
.shouquan {
  margin-left: 20rpx;
  color: #6f86b3;
}
</style>
