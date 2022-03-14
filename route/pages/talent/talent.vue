<template>
  <view class="talent">
    <!-- 头部 -->
    <view class="talent_top">
      <!-- <view class="talentserch"
            @tap="Darenin">
        <input type="text"
               v-model="talentserch">
        <view>达人入驻</view>
      </view> -->
      <!-- <view class="ft14">？基于海量达人的带货数据，作品互动，账号指数等计算生成，助您及时了解行业动态，快速查询并找到最适合建联的带货达人。</view> -->
      <view class="ft14">（数据均通过正规渠道获取，鲸大大负责进行统计分析）</view>
      <view class="talent_top_bt">
		  <view style="width: 30%;">
		    <image src="../../static/image/talent.png" mode="widthFix" style="width: 80%;margin-left: 20%;margin-top: 20rpx;"></image>
		  </view>
        <view style="width: 70%;">
          <view class="talent_title">全平台优质达人汇聚</view>
          <view class="ft14 talent_titles">助力商家轻松自建达人矩阵</view>
        </view>
      </view>
	  <view class="talent_list">
	    <view>本周新增达人:<text v-for="(itmess,index) in customTalent.add_daren"
	            :key="index">{{itmess}}</text></view>
	    <view>达人撮合建联:<text v-for="(itmess,index) in customTalent.cell_daren"
	            :key="index">{{itmess}}</text></view>
	    <view>对接商家/品牌:<text v-for="(itmess,index) in customTalent.cell_brand"
	            :key="index">{{itmess}}</text></view>
	  </view>
    </view>
    <!-- 导航 -->
    <view class="center_nav">
      <view class="c_nav_list"
            @tap="bindShopTop(1)">
        <image src="../../static/icon/public/01.png"
               mode="aspectFill"
               class="c_nav_pic"></image>
        <view class="c_nav_txt"
              style="color:#547BB3;">找达人</view>
      </view>
      <view class="c_nav_list"
            @tap="bindShopTop(2)">
        <image src="../../static/icon/public/02.png"
               mode="aspectFill"
               class="c_nav_pic"></image>
        <view class="c_nav_txt">MCN机构</view>
      </view>
      <view class="c_nav_list"
            @tap="bindShopTop(3)">
        <image src="../../static/icon/public/04.png"
               mode="aspectFill"
               class="c_nav_pic"></image>
        <view class="c_nav_txt">找团长</view>
      </view>
      <view class="c_nav_list"
            @tap="bindShopTop(4)">
        <image src="../../static/icon/public/03.png"
               mode="aspectFill"
               class="c_nav_pic"></image>
        <view class="c_nav_txt">找服务商</view>
      </view>
    </view>
    <!-- 底部 -->
    <view class="talent_bt">
      <view class="talent_topnav">
        <view class="talent_nav">
          <view v-for="item in topnav"
                :key="item.id"
                @tap="checknav(item)"
                :class="[item.isSelect?'isSlect':'','nav']">
            <view>{{item.name}}</view>
          </view>
        </view>
        <view @tap="showShaixuan" style="color: #547BB3;">
			<image src="../../static/icon/public/shaixuan.png" mode="aspectFill" style="width: 40rpx;height: 40rpx;display: inline-block;vertical-align: text-bottom;margin-right: 10rpx;" ></image>
			筛选
		</view>
      </view>
      <!-- 商家信息 -->
      <Streamingcard :shop="shop"
                     v-if="isShortvideo"
                     @lookPhone="lookPhone" />
      <Shortvideo :shop="shop"
                  v-else
                  @lookPhone="lookPhone" />
      <!--  <view class="talent_data"
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
              <view> {{item.name}} </view>
              <view>
                <image src="../../static/image/dy.png"
                       mode="aspectFill"
                       class="appimg">
              </view>
            </view>
            <view class="shopnum">
              <view>抖音号： {{item.douyin}} </view>
              <view>
                <image src="../../static/image/personal/phone.png"
                       mode="aspectFill"
                       class="wximg">
                  <image src="../../static/image/personal/wx.png"
                         mode="aspectFill"
                         class="wximg">
                    <text @tap="lookPhone(item.id)">直联达人</text>
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
            <view style="fontSize:30rpx"> {{item.line_people}} </view>
            <view>平均在线人数</view>
          </view>
          <view class="shop_data">
            <view style="fontSize:30rpx">{{item.line_time}}分</view>
            <view>平均停留时长</view>
          </view>
          <view class="shop_data">
            <view style="fontSize:30rpx">{{item.month_sales}}W</view>
            <view>30/日销售额</view>
          </view>
          <view class="shop_data">
            <view style="fontSize:30rpx">{{item.minute_sales}}W</view>
            <view>分钟带货产出</view>
          </view>
        </view>
      </view> -->
    </view>
    <!-- 筛选 -->
    <view class="cover"
          v-if="isShaixuan"
          @tap="channelGuize"></view>
    <view class="filter"
          v-if="isShaixuan">
      <!-- <Filters title="达人类型"
               @checkId='checkId'
               :list="talent" /> -->
      <Filters title="粉丝区间"
               @checkId='checkId'
               :list="fansection" />
      <Filters title="销售额（30天/月）"
               @checkId='checkId'
               :list="saleslist" />
      <Filters title="场均/视均"
               @checkId='checkId'
               :list="averagelist" />
      <Filters title="主推类目"
               @checkId='checkId'
               :list="category" />
    </view>
  </view>
</template>

<script>
import until from 'common/until.js'
import Filters from '@/components/filter/index.vue'
import Streamingcard from '@/components/filter/streamingcard.vue'
import Shortvideo from '@/components/filter/shortvideo.vue'
export default {
  components: { Filters, Streamingcard, Shortvideo },
  data () {
    return {
      talentserch: '',
      customTalent: {},
	  //粉丝数
		fansminnum: 0,
		fansmaxnum: 0,
		//销售额30天/月,
		minnum: 0,
		maxnum: 0,
		//场均视均销售额（单场）
		averageminnum: 0,
		averagemaxnum: 0,
      topnav: [
        { id: 2, name: '直播达人', isSelect: true },
        { id: 1, name: '短视频达人', isSelect: false },
      ],
	  categorys:-1,
      type: 2,
      shop: [],
      isShaixuan: false,
      // 达人类型
      talent: [
        { id: 0, name: '直播', isSelect: true },
        { id: 1, name: '短视频', isSelect: false },
        { id: 2, name: '团长', isSelect: false },
        { id: 3, name: 'MCN机构', isSelect: false },
        { id: 4, name: '商家服务商', isSelect: false },
      ],
      //粉丝区间
      fansection: [
        { id: 0, name: '不限', isSelect: true },
        { id: 1, name: '＜1w',fansminnum:0,fansmaxnum:1, isSelect: false },
        { id: 2, name: '1w-10w', fansminnum:1,fansmaxnum:10,isSelect: false },
        { id: 3, name: '10w-100w',fansminnum:10,fansmaxnum:100, isSelect: false },
        { id: 4, name: '100w-500w',fansminnum:100,fansmaxnum:500, isSelect: false },
        { id: 5, name: '500w-1000w',fansminnum:500,fansmaxnum:1000, isSelect: false },
        { id: 6, name: '1000w＞',fansminnum:1000,fansmaxnum:100000000000000, isSelect: false },
      ],
      //销售额
      saleslist: [
        { id: 0, name: '不限', isSelect: true },
        { id: 1, name: '＜1w',minnum:0,maxnum:1, isSelect: false },
        { id: 2, name: '1w-10w',minnum:1,maxnum:10, isSelect: false },
        { id: 3, name: '10w-100w',minnum:10,maxnum:100, isSelect: false },
        { id: 4, name: '100w-500w',minnum:100,maxnum:500, isSelect: false },
        { id: 5, name: '500w-1000w',minnum:500,maxnum:1000, isSelect: false },
        { id: 6, name: '1000w＞',minnum:1000,maxnum:100000000000000, isSelect: false },
      ],
      //场均
      averagelist: [
        { id: 0, name: '不限', isSelect: true },
        { id: 1, name: '＜1w',averageminnum:0,averagemaxnum:1, isSelect: false },
        { id: 2, name: '1w-10w',averageminnum:1,averagemaxnum:10, isSelect: false },
        { id: 3, name: '10w-100w', averageminnum:10,averagemaxnum:100,isSelect: false },
        { id: 4, name: '100w-500w',averageminnum:100,averagemaxnum:500, isSelect: false },
        { id: 5, name: '500w-1000w',averageminnum:500,averagemaxnum:1000, isSelect: false },
        { id: 6, name: '1000w＞',averageminnum:1000,averagemaxnum:100000000000000, isSelect: false },
      ],
      //主推类目
      category: [
        { id: -1, name: '不限', isSelect: true },
      ],
      isShortvideo: true
    }
  },
  mounted () {
    this.getList();
	this.getShopTypeList()
    var that = this
    until.Requests('Plblics/customTalent', {}, 'GET', function (eve) {
      var eves = eve.result
      that.customTalent = eves
    })
  },
  methods: {
	  //获取类目
	  getShopTypeList: function () {
	    var that = this
	    /**
	     * 加载数据
	     */
	    until.Requests('Plblics/getCategory', {}, 'GET', function (eve) {
	      var eves = eve.result
		  for(var i=0;i<eves.length;i++){
			  eves[i].isSelect = false
		  }
	      that.category = [...that.category, ...eves]
	    })
	  },
    getList: function () {
      var that = this
      uni.showLoading({
        title: '加载中',
      })
      /**
       * 加载数据
       */
      until.Requests('Talent/talentList', { source:"wechat",type: that.type,fansminnum:that.fansminnum,
          fansmaxnum:that.fansmaxnum,
          minnum:that.minnum,
          maxnum:that.maxnum,
          averageminnum:that.averageminnum,
          averagemaxnum:that.averagemaxnum,category:that.categorys }, 'GET', function (eve) {
        var eves = eve.result
        that.shop = eves.list
        uni.hideLoading()
      })
    },
    //中间导航点击
    bindShopTop: function (e) {
      if (e == 1) {
        // uni.navigateTo({
        //   url: '/pages/shop/shop?type=' + e
        // })
      } else {
        uni.showModal({
          title: '提示',
          content: '正在邀请入驻中',
          showCancel: false
        });
      }

    },
    // 切换点击
    checknav (item) {
      this.shop = []
      this.type = item.id
      this.topnav.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
      if (item.id == 2) {
        this.isShortvideo = true
      } else {
        this.isShortvideo = false
      }
      // 获取子类
      this.list = item.children
      this.getList();
    },
    // 筛选
    showShaixuan () {
      // 先判断会员等级再显示
	  var userInfo = uni.getStorageSync('userInfo');
	  if (userInfo) {
			if(userInfo.type<3){
				uni.showModal({
				  title: '提示',
				  content: '暂无权限，开通专业版会员即可获取权限哦~',
				  showCancel: false
				});
			}else{
				this.isShaixuan = true
			}
		}else{
			uni.showModal({
			  title: '提示',
			  content: '暂无权限，开通专业版会员即可获取权限哦~',
			  showCancel: false
			});
		}
      
    },
    channelGuize: function () {
      this.isShaixuan = false
    },
    // 达人类型
    checkId (item, title) {
      let list = []
      switch (title) {
        case '达人类型':
          list = this.talent
          break;
        case '粉丝区间':
          list = this.fansection
		  this.fansminnum = item.fansminnum
		  this.fansmaxnum = item.fansmaxnum
          break;
        case '销售额（30天/月）':
          list = this.saleslist
		  this.minnum = item.minnum
		  this.maxnum = item.maxnum
          break;
        case '场均/视均':
          list = this.averagelist
		  this.averageminnum = item.averageminnum
		  this.averagemaxnum = item.averagemaxnum
          break;
        case '主推类目':
		console.log()
          list = this.category
		  this.categorys = item.id
          break;
      }
      list.forEach(item2 => {
        item2.isSelect = false
        if (item.id == item2.id) {
          item2.isSelect = true
        }
      })
	  this.getList();
      // item点的值
      //console.log(item);
    },
    // 达人入驻
    Darenin () {
      /*  uni.navigateTo({
         url: '/pages/talent/findtalent'
       }) */
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
            content: '联系方式已获取，赶快去我的达人库查看联系吧',
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
  }
}
</script>

<style lang="less" scoped>
.talent {
  .talent_top {
    min-height: 300rpx;
    background: #6f86b3;
    color: #fff;
    padding: 10rpx;
    .talentserch {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;
      > input {
        background: #fff;
        margin-right: 20rpx;
        border-radius: 25rpx;
      }
      > view {
        padding: 6rpx 20rpx;
        background: #fff;
        border-radius: 25rpx;
        color: #000;
      }
    }
    .talent_title {
      color: #C0D2FF;
      font-size: 32rpx;
      margin: 20rpx 0;
	  text-align: right;
	  margin-right: 170rpx;
	  font-weight: bold;
    }
	.talent_titles{
		font-size: 25rpx;
		text-align: right;
		margin-right: 70rpx;
		color: #DBCB8E;
	}
    .talent_list {
		width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 23rpx;
      margin-top: 30rpx;
    }
    .talent_top_bt {
      display: flex;
    }
  }
  /*中间小导航*/
  .center_nav {
    padding-top: 30rpx;
    padding-bottom: 30rpx;
    width: 96%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f1f1f1;
    margin: 0 auto;
    height: auto;
    margin-top: -40rpx;
    padding-top: 18rpx;
    padding-bottom: 18rpx;
    border-radius: 18rpx;
    background-color: #ffffff;
    box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);
  }
  .c_nav_list {
    text-align: center;
  }
  .c_nav_pic {
    width: 100rpx;
    height: 100rpx;
  }
  .c_nav_txt {
    font-size: 24rpx;
  }
}
.talent_right {
  flex: 1;
}
.talent_bt {
  width: 96%;
  margin: 30rpx auto 0;
  box-shadow: 0 8rpx 8rpx rgba(97, 112, 241, 0.1);
  .talent_topnav {
    display: flex;
    .talent_nav {
      display: flex;
      margin-left: 20rpx;
      margin-right: 200rpx;
    }
    .nav {
      padding-bottom: 20rpx;
      margin-right: 40rpx;
      text-align: center;
    }
    .isSlect {
      border-bottom: 2rpx solid #5075a8;
    }
  }
}
.filter {
  position: fixed;
  top: 0;
  right: 0;
  width: 76%;
  height: 100vh;
  background: #d9d9d9;
  z-index: 99;
  padding: 10rpx;
}
.ft14 {
  font-size: 20rpx;
}
</style>