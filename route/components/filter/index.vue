<template>
  <view>
    <view class="filter_title">{{title}}</view>
    <view class="filter_content">
      <view v-for="item in list"
            :key="item.id"
            @tap="change(item)"
            :class="[item.isSelect?'isSelect':'']"
            class="filter_content_list">
        {{item.name}}
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
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    change (item) {
      this.$emit('checkId', item, this.title)
    }
  }
}
</script>

<style lang="less" scoped>
.filter_title {
  font-weight: bold;
}
.filter_content {
  display: flex;
  flex-wrap: wrap;
  margin: 20rpx 0;
  .filter_content_list {
    font-size: 20rpx;
    padding: 10rpx 20rpx;
    background: #fff;
    margin-right: 20rpx;
    margin-bottom: 16rpx;
  }
  .isSelect {
    background: #7c97be;
  }
}
</style>