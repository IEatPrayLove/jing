<template>
  <view class="content">
    <swiper :indicator-dots="true"
            :autoplay="true"
            :interval="3000"
            :duration="1000">
      <swiper-item>
        <view class="swiper-item">
          <image :src="banner1"
                 mode="aspectFill"
                 class="banner"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image :src="banner2"
                 mode="aspectFill"
                 class="banner"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="main">
      <view class="item"
            v-for="(item,index) in allowance_list"
            :key="index">
        <view class="item_t">
          <view class="item_t_l" @tap="bindAllowanceInfo(item.id)">
            <image :src="item.thumb"
                   mode="aspectFill"
                   class="pics"></image>
          </view>
          <view class="item_t_r">
            <view class="title">
				<view @tap="bindAllowanceInfo(item.id)" style="width: 90%;overflow: hidden;-webkit-line-clamp: 1;text-overflow: ellipsis;display: -webkit-box; -webkit-box-orient: vertical;">{{item.title}}</view>
				<!-- <image src="../../static/icon/goods/fuzhi.png" v-if="item.goods_url"  mode="aspectFill" style="width: 30rpx;height: 30rpx;display: inline-block;vertical-align: text-bottom;margin-left: 10rpx;" @tap="copyLink(item.goods_url)"></image> -->
			</view>
            <view class="goods_info" @tap="bindAllowanceInfo(item.id)">
              <view class="goods_info_item">直播价<view class="font-c-os">{{item.price}}</view>
              </view>
              <view class="goods_info_item">佣金<view class="font-c-os">{{item.commission}}%</view>
              </view>
              <view class="goods_info_item">公开<view>{{item.commission_public}}%</view>
              </view>
            </view>
            <view class="times" @tap="bindAllowanceInfo(item.id)">活动时间: {{item.activity_time_start}} ~ {{item.activity_time_end}}</view>
            <view class="join_prize" @tap="bindAllowanceInfo(item.id)">
              <view class="">标的目标：{{item.activity_objectives}} 单</view>
              <view class=""
                    style="margin-left: 15rpx;">瓜分奖金池：<text class="font-c-os">{{item.prize_pool}}</text>元</view>
            </view>
            <view class="join_prize"
                  v-if="item.type==1" @tap="bindAllowanceInfo(item.id)">
              <view class="join_prize_conetnt">（活动时间内有效出单TOP前三名平分奖金池）</view>
            </view>
            <view class="join_prize"
			@tap="bindAllowanceInfo(item.id)"
                  v-else>
              <view class="">核销奖励：{{item.reward}}</view>
            </view>
          </view>
        </view>
        <view class="item_c" @tap="bindAllowanceInfo(item.id)">
          <view class="prize_content">奖励已瓜分 {{item.ok_point}}%</view>
          <view class="prize_points">
            <view class="prize_points_s"
                  :style="{'width':item.ok_point+'%'}">
              <text class="prize_point_nums">{{item.ok_point}}%</text>
            </view>
          </view>
        </view>
        <view class="item_bs"
		@tap="bindAllowanceInfo(item.id)"
              v-if="item.type==1">
          <view class="join_desc">达人榜单：榜单排名根据实时出单数据排列，持续更新中！</view>
          <view class="daren_top">
            <view class="daren_top_item"
                  :class="'top'+(indexs+1)"
                  v-for="(items,indexs) in item.tops"
                  :key="indexs">
              <view :class="['daren_tops',indexs==0 ? 'font-c-os' : '']">TOP{{indexs+1}}</view>
              <view>达人：{{items.name}}</view>
              <view>实时出单数：{{items.sales}}单</view>
            </view>
          </view>
        </view>
        <view class="item_b"
		@tap="bindAllowanceInfo(item.id)"
              v-else>
          <view class="join_desc">参与要求</view>
          达人带货口碑分4.5以上/信用分6以上<text class="font-c-os">（此活动仅限短视频带货达人参与）</text>
        </view>
      </view>
      <view class="non_data">———————— 没有更多数据啦! ————————</view>
    </view>
  </view>
</template>

<script>
import until from 'common/until.js'
import config from 'config.js'
export default {
  data () {
    return {
      allowance_list: [],
      page: 1,
      nodata: false,
	  banner1:config.imgUrl+"/uploads/route_images/allowance_banner1.png",
	  banner2:config.imgUrl+"/uploads/route_images/allowance_banner2.png"
    }
  },
  onShow () {
    this.page = 1
    this.getList(false)
  },
  onPullDownRefresh () {
    this.page = 1
    this.getList(false)
  },
  onReachBottom () {
    this.page++
    this.getList(true)
  },
  methods: {
	copyLink:function(link){
	  if (link) {
	    uni.setClipboardData({
	      data: link,
	      success: function () {
	        uni.showToast({
	          title: "复制成功",
	          icon: 'none'
	        })
	      }
	    });
	  } else {
	    uni.showModal({
	      title: '提示',
	      content: '当前内容为空，复制失败~',
	      showCancel: false
	    });
	  }
	},
    getList: function (isMore) {
      var that = this
      uni.showLoading({
        title: '加载中',
      })
      /**
       * 加载数据
       */
      until.Requests('Allowance/getList', {
        p: that.page
      }, 'GET', function (eve) {
        uni.stopPullDownRefresh()
        var eves = eve.result
        if (isMore) {
          if (eves.length > 0) {
            that.allowance_list = [...that.allowance_list, ...eves]
          } else {
            if (that.page == 1 && eves.length < 1) {
              that.nodata = true
            } else {
              that.page--;
              that.nodata = true
            }
          }
        } else {
          if (eves.length > 0) {
            that.allowance_list = eves
          } else {
            that.nodata = true
          }
        }
        uni.hideLoading()
      })
    },
    /*进入任务详情*/
    bindAllowanceInfo: function (e) {
      uni.navigateTo({
        url: '/pages/allowance/allowance_info?id=' + e
      })
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
  height: 300rpx;
}
.main {
  width: 95%;
  margin: 10rpx auto;
  margin-bottom: 80rpx;
}
.item {
  margin: 20rpx 0;
  padding: 20rpx;
  background-color: #ffffff;
  font-size: 24rpx;
  border-radius: 8rpx;
}
.item_t {
  display: flex;
}
.item_t_l {
}
.pics {
  width: 200rpx;
  height: 210rpx;
  border-radius: 5rpx;
}
.item_t_r {
  margin-left: 30rpx;
}
.title {
  font-size: 26rpx;
  display: flex;
  /* overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; */
}
.times {
  color: #808080;
  font-size: 20rpx;
  margin-top: 10rpx;
}
.types {
  margin-top: 10rpx;
  display: inline-block;
  font-size: 20rpx;
  padding: 3rpx 15rpx;
  border-radius: 10rpx;
  color: #808080;
  background-color: #f1f1f1;
}
.join_prize {
  display: flex;
  margin-top: 10rpx;
  font-size: 20rpx;
}
.join_prize_title {
  padding: 5rpx 10rpx;
  color: #ffffff;
  background-color: #ff5722;
  border-top-right-radius: 10rpx;
  border-bottom-left-radius: 10rpx;
}
.join_prize_conetnt {
  color: #ff5722;
  /* margin-left: 20rpx; */
}
.item_c {
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  font-size: 24rpx;
  display: flex;
}
.prize_content {
}
.prize_points {
  font-size: 20rpx;
  width: 70%;
  margin-left: 20rpx;
  height: 30rpx;
  line-height: 30rpx;
  color: #ffffff;
  background-color: #c8c7cc;
  border-radius: 15rpx;
}
.prize_points_s {
  /* width: 11%; */
  height: 30rpx;
  border-top-left-radius: 15rpx;
  border-bottom-left-radius: 15rpx;
  background-color: #ff5722;
}
.prize_point_nums {
  margin-left: 10rpx;
}
.item_b {
  font-size: 20rpx;
  display: flex;
  padding-top: 10rpx;
  border-top: 1rpx solid #c8c7cc;
  color: #555555;
}
.join_desc {
  color: #000000;
  font-weight: bold;
  margin-right: 30rpx;
}
.join_desc_content {
  margin-left: 10rpx;
  color: #6f86b3;
}
.goods_info {
  display: flex;
  justify-content: space-around;
  margin: 10rpx 0;
}
.goods_info_item {
  color: #000000;
  font-size: 20rpx;
}
.goods_info_item view {
  margin-top: 5rpx;
}

.daren_top {
}
.top1 {
  background-color: rgb(255, 187, 126);
}
.top2 {
  background-color: rgb(216, 217, 219);
}
.top3 {
  background-color: rgb(239, 184, 151);
}
.daren_tops {
  font-size: 30rpx;
  font-weight: bold;
  color: #000000;
  margin-right: 30rpx;
}
.daren_top_item {
  display: flex;
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  margin-top: 15rpx;
  color: #ffffff;
  font-weight: bold;
}
.daren_top_item view {
  margin-left: 20rpx;
}
</style>
