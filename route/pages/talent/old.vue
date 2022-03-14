<template>
  <view class="content">
    <image src="../../static/image/banner2.jpg"
           mode="aspectFill"
           class="banner"></image>
    <view class="guize"
          @tap="showGuize">查看规则</view>
    <view class="bang_top">
      <view v-for="(item,index) in bang_top_list"
            :key="index"
            :class="['bang_top_list',cureTopIndex==index ? 'active' : '']"
            @click="tapTop(index)">
        {{item}}
      </view>
    </view>
    <view class="bang_type">
      <view class="bang_type_l">
        <view v-for="(item,index) in bang_type_list"
              :key="index"
              :class="['bang_type_list',cureTypeIndex==index ? 'active' : '']"
              @click="tapType(index)">
          {{item}}
        </view>
      </view>
      <!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="bang_type_r">
					{{date}}
					<image src="../../static/icon/public/jt_bottom.png" mode="aspectFill" class="time_picker"></image>
				</view>
			</picker> -->
    </view>
    <view class="main">
      <view class="persone_list"
            v-for="(item,index) in talent_list"
            :key="index">
        <view class="persone_l">
          <view class="top_nums top_num_one"
                v-if="index ==0">{{index+1}}</view>
          <view class="top_nums top_num_two"
                v-else-if="index ==1">{{index+1}}</view>
          <view class="top_nums top_num_three"
                v-else-if="index ==2">{{index+1}}</view>
          <view class="top_nums"
                v-else>{{index+1}}</view>
          <view class="user_pic">
            <image :src="item.pic"
                   mode="aspectFill"
                   class="user_pics"></image>
          </view>
          <view class="user_infos">
            <view class="user_infos_t">
              <view class="user_name">{{item.name}}</view>
              <view class="user_types">
                <image src="../../static/icon/public/douyin.png"
                       v-if="item.type == 1"
                       mode="aspectFill"
                       class="user_types_icon"></image>
                <image src="../../static/icon/public/douyin_s.png"
                       v-else
                       mode="aspectFill"
                       class="user_types_icon"></image>
              </view>
            </view>
            <view class="user_infos_c">
              <text class="user_infos_c_txt">类目</text>
              {{item.category}}
            </view>
            <view class="user_infos_b">
              <view class="user_fans">
                <image src="../../static/icon/public/fans.png"
                       mode="aspectFill"
                       class="user_fans_icon"></image>
                {{item.fans}}
              </view>
              <view class="user_sale">
                <image src="../../static/icon/public/sale.png"
                       mode="aspectFill"
                       class="user_sale_icon"></image>
                {{item.sales}}
              </view>
            </view>
          </view>
        </view>
        <view class="persone_r">
          <image src="../../static/icon/public/phone.png"
                 mode="aspectFill"
                 class="phone"
                 @tap="lookPhone(item.id)"></image>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="footer_t">鲸大大</view>
      <view class="footer_b">jdd.yxiaowei.com</view>
    </view>
    <view class="cover"
          v-if="is_guize"
          @tap="channelGuize"></view>
    <view class="guize_content"
          v-if="is_guize">
      <view class="guize_title">平台规则</view>
      <view class="guize_desc">
        收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围收益氛围
      </view>
    </view>
  </view>
</template>

<script>
import until from 'common/until.js'
export default {
  data () {
    const currentDate = this.getDate({
      format: true
    })
    return {
      is_guize: false,
      date: currentDate,
      bang_top_list: ['短视频达人', '直播达人'],
      type: 1,//榜单类型，默认短视频达人 1-短视频 2-直播
      bang_type: 1,//筛选项，1-最新 2-粉丝数，3-销售额 默认粉丝数
      cureTopIndex: 0,
      bang_type_list: ['最新', '粉丝数', '销售额'],
      cureTypeIndex: 0,
      talent_list: [],

    }
  },
  computed: {
    startDate () {
      return this.getDate('start');
    },
    endDate () {
      return this.getDate('end');
    }
  },
  onShow () {
    this.getList();
  },
  methods: {
    /*显示规则*/
    showGuize: function () {
      this.is_guize = true
    },
    channelGuize: function () {
      this.is_guize = false
    },
    //获取类目
    getList: function () {
      var that = this
      uni.showLoading({
        title: '加载中',
      })
      /**
       * 加载数据
       */
      until.Requests('Talent/talentList', { type: that.type, bang_type: this.bang_type }, 'GET', function (eve) {
        var eves = eve.result
        that.talent_list = eves.list
        uni.hideLoading()
      })
    },
    /*顶部分类点击*/
    tapTop: function (e) {
      this.shop_list = []
      if (this.cureTopIndex === e) {
        return false
      } else {
        if (e == 0) {
          this.type = 1
        } else {
          this.type = 2
        }
        this.cureTopIndex = e;
      }
      this.getList();
    },
    /*筛选项点击*/
    tapType: function (e) {
      this.shop_list = []
      if (this.cureTypeIndex === e) {
        return false
      } else {
        if (e == 0) {
          this.bang_type = 1
        } else if (e == 1) {
          this.bang_type = 2
        } else {
          this.bang_type = 3
        }
        this.cureTypeIndex = e;
      }
      this.getList();
    },
    /**
     * 日期选择
     * @param {Object} e
     */
    bindDateChange: function (e) {
      if (e.target.value > this.getDate({})) {
        uni.showToast({
          title: '请选择今天以前的日期',
          icon: "none"
        })
      } else {
        console.log('日期选择，类型为' + this.type + '，筛选项为' + this.bang_type)
        this.date = e.target.value
      }
    },
    /*查看号码*/
    lookPhone: function (e) {
      //先判断是否有用户信息
      var userInfo = uni.getStorageSync('userInfo');
      if (userInfo) {
        var that = this
        until.Requests('Talent/lookPhone', { id: e, token: uni.getStorageSync('token').token }, 'GET', function (eve) {
          var eves = eve.result
          uni.showModal({
            title: '查看结果',
            content: '联系方式为：' + eves,
            showCancel: false
          });
        })
      } else {
        uni.showModal({
          title: '提示',
          content: '授权登录后才能查看哟~',
          success: function (res) {
            if (res.confirm) {
              uni.switchTab({
                url: '/pages/mine/mine'
              })
            } else if (res.cancel) {
              //console.log('用户点击取消');
            }
          }
        });
      }
    },
    getDate (type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
        year = year - 60;
      } else if (type === 'end') {
        year = year + 2;
      }
      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;
      return `${year}-${month}-${day}`;
    },
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
}
.bang_top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -70rpx;
  color: #ffffff;
}
.bang_top_list {
  font-size: 30rpx;
  height: 40rpx;
  line-height: 40rpx;
}
.bang_top_list.active {
  font-size: 40rpx;
  font-weight: 600;
}
.bang_type {
  width: 90%;
  margin: 40rpx auto 20rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bang_type_l {
  display: flex;
}
.bang_type_list {
  font-size: 30rpx;
  margin-left: 20rpx;
}
.bang_type_list.active {
  color: #007aff;
}
.bang_type_r {
  font-size: 28rpx;
}
.time_picker {
  margin-left: 10rpx;
  width: 20rpx;
  height: 20rpx;
}
.main {
  width: 100%;
  border-top: 1rpx solid #c8c7cc;
  margin-bottom: 50rpx;
}
.persone_list {
  padding: 40rpx 10rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1rpx solid #c8c7cc;
}
.persone_l {
  display: flex;
}
.top_nums {
  color: #ffffff;
  text-align: center;
  font-size: 24rpx;
  margin: auto;
  width: 50rpx;
  height: 60rpx;
  line-height: 50rpx;
  clip-path: polygon(100% 0, 100% 100%, 52% 79%, 0 100%, 0 0);
  background-color: #c8c7cc;
}
.top_num_one {
  background-color: #ff0000;
}
.top_num_two {
  background-color: #ff5722;
}
.top_num_three {
  background-color: #ffc107;
}
.user_pic {
  margin: auto 20rpx;
}
.user_pics {
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
}
.user_infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.user_infos_t {
  display: flex;
}
.user_name {
  font-size: 30rpx;
  color: #000000;
  margin-right: 20rpx;
}
.user_types {
}
.user_types_icon {
  width: 40rpx;
  height: 40rpx;
}
.user_infos_c {
  font-size: 20rpx;
  color: #555555;
}
.user_infos_c_txt {
  color: #808080;
  margin-right: 20rpx;
}
.user_infos_b {
  display: flex;
}
.user_fans {
  padding: 5rpx 15rpx;
  color: #ffffff;
  text-align: center;
  background: #6f86b3;
  transform: skew(-15deg);
  font-size: 20rpx;
}
.user_fans_icon {
  width: 25rpx;
  height: 25rpx;
  vertical-align: middle;
  margin-right: 10rpx;
}
.user_sale {
  margin-left: 15rpx;
  padding: 5rpx 15rpx;
  color: #ffffff;
  text-align: center;
  background: #f0ad4e;
  transform: skew(-15deg);
  font-size: 20rpx;
}
.user_sale_icon {
  width: 25rpx;
  height: 25rpx;
  vertical-align: middle;
  margin-right: 10rpx;
}
.persone_r {
  margin: auto 0;
}
.phone {
  width: 60rpx;
  height: 60rpx;
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
.guize {
  position: absolute;
  right: 0;
  top: 5%;
  background-color: #c8c7cc;
  color: #ffffff;
  padding: 5rpx 10rpx;
  font-size: 24rpx;
  border-top-left-radius: 10rpx;
  border-bottom-left-radius: 10rpx;
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
</style>
