<template>
  <view class="shopcard">
    <h-card>
      <view class="title">
        {{title}}
      </view>
      <view class="navlist">
        <view v-for="item in navlist"
              :class="[item.isSelect?'isSlect':'']"
              :key="item.id"
              @click="changeNav(item)">{{item.name}}</view>
      </view>
      <view class="suplist"
            v-if="num==0">
        <view v-for="(item,index) in suplist"
              :key="index">
          {{item}}
        </view>
      </view>
      <view class="abilitylist"
            v-if="num==1">
        <view v-for="(item,index) in abilitylist"
              :key="index">
          <view>{{item.name}}</view>
          <view>{{item.title}}</view>
        </view>
      </view>

      <view class="list"
            v-if="num==2">
        <view>请上传营业执照，商家资质，品牌/商标证书，生产许可，安全许可相关证书等最多6张</view>
        <view>
          <view v-for="item in 4"
                :key="item"></view>
        </view>
      </view>
    </h-card>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    navlist: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      list: [],
      num: 0,
      suplist: ['免费领样', '自购样品', '一件代发', '源头厂家', '投流补贴'],
      abilitylist: [
        { id: 0, name: '运营团队', title: '运营团队' },
        { id: 1, name: '日均发货', title: '日均发货' },
        { id: 2, name: '客服团队', title: '客服团队' },
        { id: 3, name: '物流合作', title: '物流合作' },
        { id: 4, name: '退换货机制', title: '退换货机制' },
        { id: 5, name: '风险处理', title: '风险处理' },
      ],

    }
  },
  methods: {
    changeNav (item) {
      this.navlist.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
      this.num = item.id
      this.$emit('changeNav', item, this.title)
    }
  }
}
</script>

<style lang="less" scoped>
.shopcard {
  padding: 10rpx;
  font-size: 26rpx;
  .title {
    font-size: 36rpx;
  }
  .navlist {
    display: flex;
    justify-content: space-around;
    margin: 10rpx 0;
    font-size: 30rpx;
    cursor: pointer;
    > view {
      padding-bottom: 8rpx;
    }
    > .isSlect {
      border-bottom: 2rpx solid #b4bfd3;
    }
  }
  .suplist {
    display: flex;
    flex-wrap: wrap;
    > view {
      width: 20%;
      padding: 10rpx;
      background: #ffafaf;
      text-align: center;
      margin: 0 7rpx 10rpx;
      border-radius: 4rpx;
      cursor: pointer;
    }
  }
  .abilitylist {
    > view {
      text-indent: 20rpx;
      margin: 8rpx 0;
      height: 46rpx;
      display: flex;
      align-items: center;
      > view:nth-of-type(1) {
        width: 60%;
      }
    }
  }
  .list {
    > view:nth-of-type(1) {
      text-indent: 20rpx;
    }
    > view:nth-of-type(2) {
      display: flex;
      margin-top: 10rpx;
      > view {
        width: 100rpx;
        height: 100rpx;
        background: #547bb3;
        border-radius: 8rpx;
        margin-right: 40rpx;
      }
    }
  }
}
</style>