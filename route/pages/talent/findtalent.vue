<template>
  <view class="content">
    <view class="search">
      <view class="nav_search">
        <input type="text"
               confirm-type="send"
               maxlength="-1"
               @confirm="formSubmit"
               placeholder="搜索你想要的达人"
               placeholder-class="nav_searchs"
               :style="{'margin-top': ((height+10)*2)+'rpx'}" />
      </view>
    </view>
    <view class="top_nav">
      <view class="uni-swiper-tab">
        <scroll-view class="swiper-tab-lists"
                     scroll-x="true"
                     :scroll-left="scrollLeft">
          <view v-for="(item,index) in shop_type_list"
                :key="index"
                :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
                @click="tapTab(index)">
            {{item.name}}
          </view>
        </scroll-view>
      </view>
    </view>
    <!-- 商家筛选条件 -->
    <view class="shop_condition">
      <view class="shop_condition_list_l">
        <view class="shop_condition_list"
              @tap="binCondition(1)">
          最新
          <image src="../../static/icon/public/jt_bottom.png"
                 mode="aspectFill"
                 class="shop_condition_list_l_image">
        </view>
        <view class="shop_condition_list"
              @tap="binCondition(2)">
          销量
          <image src="../../static/icon/public/jt_bottom.png"
                 mode="aspectFill"
                 class="shop_condition_list_l_image">
        </view>
        <view class="shop_condition_list"
              @tap="binCondition(3)">
          佣金
          <image src="../../static/icon/public/jt_bottom.png"
                 mode="aspectFill"
                 class="shop_condition_list_l_image">
        </view>
      </view>
      <view class="shop_condition_list_r">
        <!-- <image src="../../static/icon/public/many.png" mode="aspectFill"  class="swiper-tab-lists_jt_image" @tap="binCondition(4)"></image> -->
      </view>
    </view>
    <!-- 商家列表 -->
    <view class="shop_main">
      <view :class="['shop_list',`bgimg${index}`]"
            v-for="(item,index) in shop_list"
            :key="index">
        <view class="shop_info_t">
          <image :src="item.logo"
                 mode="aspectFill"
                 class="shop_pic"
                 @tap="ShopInfo(item.id)"></image>
          <view class="shop_info_r">
            <view class="shop_info">
              <view class="shop_name">{{item.name}}</view>
              <view class="shop_address">
                <image src="../../static/icon/public/address.png"
                       mode="aspectFill"
                       class="shop_address_image"></image>
                {{item.address}}
              </view>
              <view class="shop_good_num">
                <image src="../../static/icon/public/goods.png"
                       mode="aspectFill"
                       class="shop_goods_num_image"></image>
                {{item.goods_num}}
              </view>
            </view>
            <view class="shop_desc">
              品牌简介:
              <rich-text :nodes="item.content"></rich-text>
            </view>
            <view class="shop_goods">
              <view>商品
                <text style="color:red">{{item.goods}}</text>
              </view>
              <view>商家
                <text style="color:red">{{item.shop}}</text>
              </view>
              <view>物流
                <text style="color:red">{{item.wuliu}}</text>
              </view>
            </view>
          </view>

        </view>
        <view class="shop_key">
          店铺关键词:
          <view v-for="(item2,index) in item.keywords"
                :key="index"
                class="shop_key_list">
            {{item2}}
          </view>
        </view>
        <view class="shop_good_list">
          <scroll-view class="shop_goods_lists"
                       scroll-x="true">
            <view class="goods_list"
                  v-for="(items,indexs) in item.goods_list"
                  :key="indexs"
                  @tap="GoddsInfo(items.id)">
              <image :src="items.thumb"
                     mode="aspectFill"
                     class="goods_pic"></image>
              <view class="goods_info">
                <view class="goods_title">{{items.title}}</view>
                <view class="goods_b">
                  <view class="goods_price">￥{{items.price}}</view>
                  <view class="goods_share_price">佣金 {{items.commission}}%</view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>

      </view>
    </view>
    <view v-if="nodata"
          style="text-align: center;color: #999999;margin-top:20rpx;margin-bottom: 20rpx;">-- 已经到底了 --</view>
    <view class="cover"
          v-if="is_condition_info"
          @tap="bindChanel"></view>
    <view class="condition_info"
          v-if="is_condition_info">
      <view class="condition_info_list"
            v-for="(item,index) in condition_lists"
            :key="index"
            @tap="clickCondition(item)">{{item}}</view>
      <view class="condition_info_exit"
            @tap="bindChanel">取消</view>
    </view>
  </view>
</template>

<script>
import until from 'common/until.js'
export default {
  data () {
    return {
      keywords: "",
      type: -1,//请求类型，-1--所有，1--小店商家，2--供应链，3--源头货源，4--团长高佣
      is_condition_info: false,
      scrollLeft: 0,
      tabIndex: 0,
      tabpreIndex: 0,
      condition_list: [
        ['最新更新', '最新上架'],
        ['总销量', '24小时', '2小时'],
        ['佣金金额', '佣金比例']
      ],
      condition_lists: [],
      shop_list: [],
      shop_type_list: [
        {
          "name": "所有",
          "id": "-1"
        }
      ],
      page: 1,
      nodata: false,
    }
  },
  onLoad (options) {
    this.type = options.type
    let tab_title = '达人列表'
    if (options.type == 1) {
      tab_title = '小店商家'
    } else if (options.type == 2) {
      tab_title = 'TOP大牌'
    } else if (options.type == 3) {
      tab_title = '供应链'
    } else if (options.type == 4) {
      tab_title = '源头厂家'
    }
    uni.setNavigationBarTitle({
      title: tab_title
    })
    this.getShopTypeList();
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
    formSubmit: function (e) {
      this.shop_list = []
      this.keywords = e.detail.value
      this.page = 1
      this.getList(false)
    },
    //获取商家列表数据
    getList: function (isMore) {
      var that = this
      uni.showLoading({
        title: '加载中',
      })
      /**
       * 加载数据
       */
      until.Requests('Shop/shopList', {
        p: that.page,
        category: that.shop_type_list[that.tabIndex].id,
        type: that.type,
        keywords: that.keywords
      }, 'GET', function (eve) {
        uni.stopPullDownRefresh()
        var eves = eve.result
        if (isMore) {
          if (eves.length > 0) {
            that.shop_list = [...that.shop_list, ...eves]
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
            that.shop_list = eves
          } else {
            that.nodata = true
          }
        }
        uni.hideLoading()
      })
    },
    //获取类目
    getShopTypeList: function () {
      var that = this
      /**
       * 加载数据
       */
      until.Requests('Plblics/getCategory', {}, 'GET', function (eve) {
        var eves = eve.result
        that.shop_type_list = [...that.shop_type_list, ...eves]
      })
    },
    /*筛选条件选择*/
    binCondition: function (e) {
      let condition_list = this.condition_list
      if (e == 4) {

      } else {
        this.is_condition_info = true
        this.condition_lists = condition_list[Number(e) - 1]
      }
    },
    /*小导航点击*/
    tapTab: function (index) {
      uni.showLoading({
        title: '加载中',
      })
      this.shop_list = []
      this.is_condition_info = false
      if (this.tabIndex === index) {
        return false
      } else {
        this.tabpreIndex = this.tabIndex
        this.tabIndex = index;
        this.is_tab_all = false
        this.checkCor();
      }
      this.page = 1
      this.getList(false)
    },
    //点击时 滑动导航栏
    checkCor: function () {
      let tabindex = this.tabIndex
      let tabpreIndex = this.tabpreIndex
      if (tabindex == 0) {
        this.scrollLeft = 0
      } else {
        if (Number(tabindex) < Number(tabpreIndex)) {
          if (Number(tabindex) < 6) {
            this.scrollLeft -= 50 * (Number(tabpreIndex) - Number(tabindex)) + 30
          } else {
            this.scrollLeft -= 30 * (Number(tabpreIndex) - Number(tabindex))
          }
        } else {
          if (Number(tabindex) > 5) {
            this.scrollLeft += 50 * (Number(tabindex) - Number(tabpreIndex)) + 30
          } else {
            this.scrollLeft += 30 * (Number(tabindex) - Number(tabpreIndex))
          }
        }

      }
    },
    /*点击筛选条件*/
    clickCondition: function (e) {
      console.log('选中的筛选条件为' + e)
      this.is_condition_info = false
    },
    /*取消筛选*/
    bindChanel: function () {
      this.is_condition_info = false
    },
    /*访问商品详情*/
    GoddsInfo: function (id) {
      console.log("将要访问商品详情，id为" + id)
      uni.navigateTo({
        url: '/pages/goods/goods?id=' + id
      })
    },
    /*访问店铺主页*/
    ShopInfo: function (id) {
      uni.navigateTo({
        url: '/pages/shop/shop_info?id=' + id
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
.search {
  width: 100%;
  background-color: #ffffff;
  padding: 20rpx 0;
}
.nav_search {
  width: 90%;
  margin: 0 auto;
}
.nav_searchs {
  padding-left: 50rpx;
  background-image: url(../../static/icon/public/search.png);
  background-repeat: no-repeat;
  background-size: 30rpx;
  background-position-y: 12rpx;
  background-position-x: 10rpx;
}
.nav_search input {
  font-size: 30rpx;
  background-color: #f1f1f1;
  border-radius: 30rpx;
  padding: 10rpx 30rpx;
  height: 50rpx;
  line-height: 50rpx;
}

.top_nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  border-bottom: 1rpx solid #f1f1f1;
  padding-bottom: -1rpx;
  /* position: fixed;
		z-index: 999; */
}
.uni-swiper-tab {
  width: 90%;
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
  font-size: 35rpx;
  color: #6f86b3;
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
.swiper-tab-lists_jt {
  width: 10%;
  height: 70rpx;
  line-height: 70rpx;
  font-size: 30rpx;
  text-align: center;
}
.swiper-tab-lists_jt_image {
  width: 50rpx;
  height: 30rpx;
  margin-top: 20rpx;
}
/*筛选项*/
.shop_condition {
  height: 80rpx;
  line-height: 80rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
.shop_condition_list_l {
  width: 90%;
  font-size: 24rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.shop_condition_list_l_image {
  width: 25rpx;
  height: 25rpx;
  margin-left: 10rpx;
  vertical-align: middle;
}
.shop_condition_list {
  height: 80rpx;
  line-height: 80rpx;
}
.shop_condition_list_r {
  width: 10%;
  text-align: center;
}
/*商家列表*/
.shop_main {
  width: 90%;
  margin: 0 auto;
}
.shop_list {
  width: 100%;
  margin-top: 50rpx;
  background-color: #6f86b3;
  color: #ffffff;
  border-radius: 8rpx;
}
.shop_info_t {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20rpx;
}
.shop_pic {
  width: 25%;
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
  margin-top: -40rpx;
}
.shop_info_r {
  margin-top: 10rpx;
  width: 75%;
}
.shop_info {
  display: flex;
  flex-direction: row;
}
.shop_name {
  font-size: 30rpx;
}
.shop_address {
  font-size: 24rpx;
  margin-left: 20rpx;
}
.shop_good_num {
  font-size: 24rpx;
  margin-left: 20rpx;
  padding: 3rpx 15rpx;
  background-color: #007aff;
  border-radius: 20rpx;
}
.shop_address_image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: bottom;
}
.shop_key {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 30rpx;
}
.shop_key_list {
  padding: 10rpx 20rpx;
  border: 2rpx solid red;
  border-radius: 10rpx;
  margin: 0 20rpx 10rpx;
}
.shop_goods_num_image {
  width: 30rpx;
  height: 30rpx;
  vertical-align: bottom;
}
.shop_desc {
  font-size: 24rpx;
  font-size: 24rpx;
  display: flex;
  flex-wrap: wrap;
  /* overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; */
}
.bgimg0 {
  background: linear-gradient(to right, #fb8641, #ff9e4e);
}
.bgimg1 {
  /* background: url('../../static/image/bgimgs/bg1.jpg') no-repeat;
  background-size: 100% 100% */
  background: linear-gradient(to right, #1a93ff, #5db8ff);
}
.bgimg2 {
  /*  background: url('../../static/image/bgimgs/bg2.jpg') no-repeat;
  background-size: 100% 100%; */
  background: linear-gradient(to right, #0faeb5, #3cd3cd);
}
.bgimg3 {
  /*  background: url('../../static/image/bgimgs/bg3.jpg') no-repeat;
  background-size: 100% 100%; */
  background: linear-gradient(to right, #fe5b28, #ff845e);
}
/*商品信息*/
.shop_good_list {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 50rpx;
  overflow: hidden;
}
.goods_list {
  margin: 0 20rpx;
  background-color: #ffffff;
  border-radius: 5rpx;
  margin-bottom: 15rpx;
  display: inline-block;
  width: 200rpx;
  z-index: 3;
}
.goods_pic {
  width: 200rpx;
  height: 160rpx;
  border-radius: 5rpx;
}
.goods_info {
  padding: 0 10rpx;
  padding-bottom: 10rpx;
}
.goods_title {
  font-size: 24rpx;
  color: #000000;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 35rpx;
  line-height: 35rpx;
}
.goods_b {
  font-size: 20rpx;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 35rpx;
  line-height: 35rpx;
}
.goods_price {
  color: red;
}
.goods_share_price {
  color: #808080;
}
.shop_goods_lists {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 70rpx;
  white-space: nowrap;
  z-index: 99;
}
.condition_info {
  position: fixed;
  bottom: 0;
  z-index: 99;
  background-color: #c8c7cc;
  width: 100%;
  text-align: center;
}
.condition_info_list {
  background-color: #ffffff;
  padding: 20rpx 0;
  border-top: 1rpx solid #999999;
}
.condition_info_exit {
  background-color: #ffffff;
  padding: 20rpx 0;
  border-top: 1rpx solid #999999;
  margin-top: 10rpx;
}
.shop_type_all {
  position: fixed;
  z-index: 99;
  background-color: #ffffff;
  width: 100%;
}
.shop_type_all_list {
  margin: 0 auto;
  padding: 30rpx 0;
  padding-left: 15rpx;
  font-size: 24rpx;
}
.shop_type_info {
  display: inline-block;
  width: 160rpx;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 10rpx;
  margin: 10rpx 10rpx;
}
.shop_type_info.actives {
  color: #6f86b3;
}
.shop_goods {
  display: flex;
  justify-content: space-between;
  font-size: 12rpx;
}
</style>
