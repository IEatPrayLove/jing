<template>
  <view class="content">
    <view class="item">
      <view class="item_t">
        <view class="item_t_l">
          <image :src="info.thumb"
                 mode="aspectFill"
                 class="pics"></image>
        </view>
        <view class="item_t_r">
          <view class="title">
			<view style="width: 90%;overflow: hidden;-webkit-line-clamp: 1;text-overflow: ellipsis;display: -webkit-box; -webkit-box-orient: vertical;">{{info.title}}</view>
			<image src="../../static/icon/goods/fuzhi.png" v-if="info.goods_url"  mode="aspectFill" style="width: 30rpx;height: 30rpx;display: inline-block;vertical-align: text-bottom;margin-left: 10rpx;" @tap="copyLink(info.goods_url)"></image>
		  </view>
          <view class="goods_info">
            <view class="goods_info_item">直播价<view class="font-c-os">{{info.price}}</view>
            </view>
            <view class="goods_info_item">佣金<view class="font-c-os">{{info.commission}}%</view>
            </view>
            <view class="goods_info_item">公开<view>{{info.commission_public}}%</view>
            </view>
          </view>
          <view class="times">活动时间: {{info.activity_time_start}} ~ {{info.activity_time_end}}</view>
          <view class="join_prize">
            <view class="">标的目标：{{info.activity_objectives}}单</view>
            <view class=""
                  style="margin-left: 15rpx;">瓜分奖金池：<text class="font-c-os">{{info.prize_pool}}</text>元</view>
          </view>
          <view class="join_prize"
                v-if="info.type==1">
            <view class="join_prize_conetnt">（活动时间内有效出单TOP前三名平分奖金池）</view>
          </view>
          <view class="join_prize"
                v-else>
            <view class="">核销奖励：{{info.reward}}</view>
          </view>
        </view>
      </view>
      <view class="item_c">
        <view class="prize_content">奖励已瓜分 {{info.ok_point}}%</view>
        <view class="prize_points">
          <view class="prize_points_s"
                :style="{'width':info.ok_point+'%'}">
            <text class="prize_point_nums">{{info.ok_point}}%</text>
          </view>
        </view>
      </view>
      <view class="item_bs"
            v-if="info.type==1">
        <view class="join_desc">达人榜单：榜单排名根据实时出单数据排列，持续更新中！</view>
        <view class="daren_top">
          <view class="daren_top_item"
                :class="'top'+(indexs+1)"
                v-for="(items,indexs) in info.tops"
                :key="indexs">
            <view :class="['daren_tops',indexs==0 ? 'font-c-os' : '']">TOP{{indexs+1}}</view>
            <view>达人：{{items.name}}</view>
            <view>实时出单数：{{items.sales}}单</view>
          </view>
        </view>
      </view>
      <view class="item_b"
            v-else>
        <view class="join_desc">参与要求</view>
        达人带货口碑分4.5以上/信用分6以上<text class="font-c-os">（此活动仅限短视频带货达人参与）</text>
      </view>
    </view>
    <view class="renwuliucheng">
      <image src="../../static/image/renwuliucheng.png"
             mode="aspectFill"
             class="renwuliucheng_pics"></image>
    </view>
    <view class="allow_content">
      <view class="allow_title">
        <view @tap="change(0)"
              :class="{active:btnnum == 0}">任务要求</view>
        <view @tap="change(1)"
              :class="{active:btnnum == 1}">任务解析</view>
        <view class="guize"
              @tap="showGuize">
          <image src="../../static/icon/public/help.png"
                 mode="aspectFill"
                 class="guize_pics"></image>
          平台规则
        </view>
      </view>
      <view class="allow_desc"
            v-if="btnnum ==0">
        {{info.requirements}}
      </view>
      <view class="allow_desc"
            v-else>
        {{info.desc}}
      </view>
    </view>
    <view class="allow_btn">
      <button open-type="share"
              class="allow_btn_l"
              style="background-color: #FFFFFF;margin-right: 0;">
        <image src="../../static/icon/public/share.png"
               mode="aspectFill"
               class="shares_pics"></image>
        分享
      </button>
      <view class="allow_btn_r"
            @tap="bindCoopreation"
            style="background-color: rgb(135, 174, 224);">我要报名</view>
      <view class="allow_btn_r"
            @tap="bindCoopreation"
            style="background-color: rgb(0, 121, 191);">联系客服</view>
    </view>
    <view class="cover"
          v-if="is_guize"
          @tap="channelGuize"></view>
    <view class="guize_content"
          v-if="is_guize">
      <view class="guize_title">平台规则</view>
      <view class="guize_desc">
        {{info.platform_rules}}
      </view>
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
      id: 0,
      info: {},
      btnnum: 0,
      is_guize: false,
      is_coopreation: false
    }
  },
  onLoad (options) {
    this.id = options.id
    this.getAllowanceInfo(options.id)
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
    getAllowanceInfo: function (id) {
      uni.showLoading({
        title: '加载中',
      })
      var that = this
      /**
       * 加载数据
       */
      until.Requests('Allowance/Info', { id: id }, 'GET', function (eve) {
        var eves = eve.result
        uni.setNavigationBarTitle({
          title: eves.name
        })
        that.info = eves
        uni.hideLoading()
      })
    },
    /*切换*/
    change: function (e) {
      this.btnnum = e
    },
    /*显示规则*/
    showGuize: function () {
      this.is_guize = true
    },
    channelGuize: function () {
      this.is_guize = false
    },
    bindCoopreation: function () {
      this.is_coopreation = true
    },
    bindChannel: function () {
      this.is_coopreation = false
    },
    /**
     * 分享给好友
     * @param {Object} res
     */
    onShareAppMessage (res) {
      if (res.from === 'button') {// 来自页面内分享按钮
        return {
          title: this.info.title,
          path: 'pages/allowance/allowance_info?id=' + this.id,
          imageUrl: this.info.thumb
        }
      } else {
        return {
          title: this.info.title,
          path: 'pages/allowance/allowance_info?id=' + this.id,
          imageUrl: this.info.thumb
        }
      }
    },
    /**
     * 分享到朋友圈
     * @param {Object} res
     */
    onShareTimeline (res) {
      if (res.from === 'button') {// 来自页面内分享按钮
        return {
          title: this.info.title,
          path: 'pages/allowance/allowance_info?id=' + this.id,
          imageUrl: this.info.thumb
        }
      } else {
        return {
          title: this.info.title,
          path: 'pages/allowance/allowance_info?id=' + this.id,
          imageUrl: this.info.thumb
        }
      }
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
button::after {
  border: none;
}
.content {
  height: 100vw;
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
  font-size: 20rpx;
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
/* .item{
		padding: 20rpx;
		background-color: #DD524D;
		font-size: 24rpx;
		color: #FFFFFF;
	}
	.item_t{
		display: flex;
	}
	.item_t_l{
		
	}
	.pics{
		width: 200rpx;
		height: 200rpx;
		border-radius: 5rpx;
	}
	.item_t_r{
		margin-left: 30rpx;
	}
	.title{
		font-size: 26rpx;
	}
	.times{
		margin-top: 10rpx;
	}
	.join_prize{
		display: flex;
		margin-top: 10rpx;
		font-size: 20rpx;
	}
	.join_prize_title{
		padding: 5rpx 10rpx;
		color: #DD524D;
		background-color: #FFFFFF;
		border-top-right-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
	}
	.join_prize_conetnt{
		margin-left: 20rpx;
	}
	.item_c{
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		font-size: 24rpx;
		display: flex;
	}
	.prize_content{
		
	}
	.prize_points{
		font-size: 20rpx;
		width: 70%;
		margin-left: 20rpx;
		height: 30rpx;
		line-height: 30rpx;
		color: #FFFFFF;
		background-color: #C8C7CC;
		border-radius: 15rpx;
	}
	.prize_points_s{
		width: 11%;
		height: 30rpx;
		border-top-left-radius: 15rpx;
		border-bottom-left-radius: 15rpx;
		background-color: #FF5722;
	}
	.prize_point_nums{
		margin-left: 10rpx;
	} */
.item_b {
  font-size: 20rpx;
  display: flex;
  padding: 20rpx;
  background-color: #ffffff;
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
.renwuliucheng {
  width: 95%;
  margin: 20rpx auto;
  background-color: #ffffff;
  border-radius: 10rpx;
}
.renwuliucheng_pics {
  width: 95%;
  margin-left: 2.5%;
  height: 120rpx;
}
.allow_content {
  width: 100%;
  background-color: #ffffff;
}
.allow_title {
  font-size: 30rpx;
  display: flex;
  border-bottom: 1rpx solid #c8c7cc;
      justify-content: space-around;
}
.allow_title view {
  margin-left: 20rpx;
  padding: 20rpx;
  padding-bottom: 10rpx;
}
.active {
  border-bottom: 4rpx solid #000000;
}
.allow_desc {
  padding: 30rpx;
  font-size: 24rpx;
  color: #555555;
}
.guize {
  font-size: 24rpx;
  width: 20%;
  text-align: right;
}
.guize_pics {
  width: 30rpx;
  height: 30rpx;
  vertical-align: sub;
  margin-right: 10rpx;
}
.guize_content {
  width: 100%;
  height: 600rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #ffffff;
}
.guize_title {
  padding: 20rpx;
  font-size: 24rpx;
  color: #555555;
  background-color: #c8c7cc;
}
.guize_desc {
  font-size: 28rpx;
  height: 496rpx;
  overflow-y: scroll;
  padding: 20rpx;
}
.allow_btn {
  width: 100%;
  position: fixed;
  bottom: 0;
  flex: 0;
  height: 130rpx;
  line-height: 130rpx;
  background-color: #ffffff;
  font-size: 30rpx;
  display: flex;
}
.allow_btn_l {
  font-size: 30rpx;
  margin-left: 30rpx;
  color: #999999;
  height: 60rpx;
  line-height: 60rpx;
  margin-top: 35rpx;
}
.shares_pics {
  width: 30rpx;
  height: 30rpx;
  vertical-align: sub;
  margin-right: 15rpx;
}
.allow_btn_r {
  text-align: center;
  border-radius: 30rpx;
  color: #ffffff;
  height: 60rpx;
  line-height: 60rpx;
  margin-top: 35rpx;
  width: 30%;
  background-color: #ff5722;
  margin-left: 10rpx;
  margin-right: 10rpx;
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
