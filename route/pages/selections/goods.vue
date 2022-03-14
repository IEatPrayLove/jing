<template>
  <view class="goods">
    <!-- 轮播 -->
    <view class="banner">
      <scroll-view class="banner_lists"
                   scroll-x="true">
        <view class="banner_list banner_listss"
              v-if="info.imgs.length>0"
              @tap="shopImgs">
          <image v-for="(item,index) in info.imgs"
                 :key="index"
                 :src="item.url"
                 mode="aspectFill"
                 class="banner_pic"></image>
          <!-- <view class="banner_infos">共有{{info.imgs.length}}张图片</view> -->
        </view>
        <view class="banner_list banner_listss"
              v-if="info.video.length>0"
              @tap="shopVideo">
          <image src="../../static/image/banner.jpg"
                 mode="aspectFill"
                 class="banner_pic" />
          <!-- <view class="banner_infos">共有{{info.video.length}}个视频</view> -->
        </view>
      </scroll-view>
    </view>
    <Header />
    <Shopcard title="深度解析"
              @changeNav="changeNav"
              :navlist="parList" />
    <Shopfile title="商家档案"
              @changeNav="changeNav"
              :navlist="fillist" />
    <view class="shoplist">
      <!--  <Onecard v-for="item in info.shops"
               :item="item"
               :key="item.id"
               @goShop="goShop" /> -->

      <view class="shop"
            v-for="item in info.shops"
            :item="item"
            :key="item.id"
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
    </view>
    <view class="bottom">
      <view @tap="sendpromote">我要推广</view>
      <view @tap="direct">直联商家</view>
    </view>
  </view>
</template>

<script>
import Header from './goods/header'
import Shopcard from './goods/goodscard'
import Shopfile from './goods/goodsfile'
import Onecard from '@/components/selection/onecard.vue'
export default {
  components: {
    Header, Shopcard, Shopfile,
    Onecard
  },
  onLoad (options) {
    this.id = options.id
  },
  data () {
    return {
      id: '',
      info: {
        imgs: [
          { url: require('@/static/image/logo.png') },
          { url: require('@/static/image/logo.png') },
          { url: require('@/static/image/logo.png') },
        ],
        video: [],
        shops: [
          {
            id: 0, comimg: require('@/static/image/logo.png'), title: "标题-只显示一行标题-只显示一行标题-只显示一行",
            prcir: 29.9, commission: 20
          },
          {
            id: 1, comimg: require('@/static/image/logo.png'), title: "标题-只显示一行标题-只显示一行标题-只显示一行",
            prcir: 29.9, commission: 20
          }
        ]
      },
      parList: [
        {
          id: 0,
          name: "需求分析",
          isSelect: true,
          children: [
            {
              id: 0,
              name: '短视频带货'
            },
            {
              id: 1,
              name: '直播带货'
            },
            {
              id: 2,
              name: '纯佣cps'
            },
            {
              id: 3,
              name: '店铺代播'
            },
            {
              id: 4,
              name: '付费预算'
            },
            {
              id: 5,
              name: 'roi保量要求'
            },
            {
              id: 6,
              name: '品宣/播放量'
            },
            {
              id: 7,
              name: '季/年框合作'
            },
            {
              id: 8,
              name: '代运营'
            },
          ]
        },
        {
          id: 1,
          name: "品牌分析",
          isSelect: false,
          children: [
            {
              id: 0,
              name: '旗下品牌'
            },
            {
              id: 1,
              name: '线上布局'
            },
            {
              id: 2,
              name: '研发团队'
            },
            {
              id: 3,
              name: '品牌/推荐人代言人'
            },
            {
              id: 4,
              name: '品牌荣誉'
            },
            {
              id: 5,
              name: '历史成绩'
            },
            {
              id: 6,
              name: '品牌公益'
            },
          ]

        },
        {
          id: 2,
          name: "实例分析",
          isSelect: false,
          children: [
            {
              id: 0,
              name: '成立时间'
            },
            {
              id: 1,
              name: '公司面积'
            },
            {
              id: 2,
              name: '年交易额'
            },
            {
              id: 3,
              name: '员工规模'
            },
            {
              id: 4,
              name: '日均产能'
            },
            {
              id: 5,
              name: '日销订单'
            },
            {
              id: 6,
              name: '是否代工'
            },
          ]
        },
      ],
      fillist: [
        { id: 0, name: '合作支持', isSelect: true },
        { id: 1, name: '履约能力', isSelect: false },
        { id: 2, name: '企业资质', isSelect: false },
      ],
    }
  },
  methods: {
    /*查看图片*/
    shopImgs: function () {
      var picslist = this.info.imgs
      var picslists = []
      for (var i = 0; i < picslist.length; i++) {
        picslists.push(picslist[i].url)
      }
      uni.previewImage({
        current: this.info.imgs[0].url, // 当前显示图片的http链接  
        urls: picslists // 需要预览的图片http链接列表  
      })
    },
    shopVideo: function () {
      console.log(this.id)
      uni.navigateTo({
        url: '/pages/shop/shop_video?id=' + this.id + '&name=' + this.info.name + '&address=' + this.info.address + '&logo=' + this.info.logo + '&video=' + JSON.stringify(this.info.video)
      })
    },
    //点击商品
    goShop (item) {
      console.log(item);
      uni.navigateTo({
        url: '/pages/selections/goods?id=' + item.id
      })
    },
    //我要推广
    sendpromote () {
      console.log('我要推广');
    },
    //直联商家
    direct () {
      console.log('直联商家');
    },
    changeNav (item, title) {
      console.log(item);
      let list = []
      switch (title) {
        case '深度解析':
          list = this.parList
          break;
        case '商家档案':
          list = this.fillist
          break;
      }
      list.forEach(item2 => {
        item2.isSelect = false
        if (item.id == item2.id) {
          item2.isSelect = true
        }
      })
      // item点的值
      console.log(item);
    }
  }
}
</script>

<style lang="less" scoped>
.goods {
  background: #faf5f5;
}
.banner {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin-top: 20rpx;
}
.banner_lists {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 70rpx;
  white-space: nowrap;
  z-index: 99;
}
.banner_list {
  margin: 0 10rpx;
  border-radius: 5rpx;
  margin-bottom: 15rpx;
  display: inline-block;
  width: 520rpx;
}
.banner_pic {
  width: 520rpx;
  height: 260rpx;
  border-radius: 5rpx;
}
.shoplist {
  padding: 10rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.bottom {
  margin-top: 60rpx;
  padding: 10rxp;
  display: flex;
  height: 80rpx;
  line-height: 80rpx;
  background: #ffb98d;
  border-radius: 16rpx;
  > view {
    width: 50%;
    text-align: center;
  }
  > view:nth-of-type(2) {
    background: #ff5757;
    border-radius: 16rpx;
  }
}
.shops {
  display: flex;
}
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

