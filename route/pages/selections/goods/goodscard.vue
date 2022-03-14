<template>
  <view class="shopcard">
    <view class="title">
      {{title}}
    </view>
    <view class="navlist">
      <view v-for="item in navlist"
            :class="[item.isSelect?'isSelect':'']"
            :key="item.id"
            @tap="changeNav(item)">{{item.name}}</view>
    </view>
    <view class="list">
      <view v-for="item in list"
            class="list_title"
            :key="item.id">
        <view>{{item.name}}</view>
        <view>{{item.name}}</view>
      </view>
    </view>
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
      list: []
    }
  },
  mounted () {
    this.list = this.navlist[0].children
  },
  methods: {
    changeNav (item) {
      this.$emit('changeNav', item, this.title)
    }
  }
}
</script>

<style lang="less" scoped>
.shopcard {
  padding: 10rpx;
  margin: 20rpx 0;
  .navlist {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    font-size: 30rpx;
    cursor: pointer;
    > view {
      padding-bottom: 8rpx;
    }
    > .isSelect {
      border-bottom: 2rpx solid #b4bfd3;
    }
  }
  .list {
    font-size: 26rpx;
    .list_title {
      display: flex;
      > view:nth-of-type(1) {
        width: 60%;
      }
    }
    > view {
      line-height: 2;
      text-indent: 16rpx;
    }
    > view:nth-of-type(2n-1) {
      background: #ffafaf;
    }
  }
}
</style>