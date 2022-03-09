<template>
  <div class="vediolist">
    <div v-for="item in vediolist"
         :key="item.id">
      <div>{{item.name}}</div>
      <div>{{item.num}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vediolist: [
        { id: 0, name: '累计播放量', num: 0 },
        { id: 1, name: '点赞数', num: 0 },
        { id: 2, name: '评论数', num: 0 },
        { id: 3, name: '分享数', num: 0 },
        { id: 4, name: '转发数', num: 0 },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.vediolist {
  display: flex;
  justify-content: space-around;
  > div {
    > div:nth-of-type(1) {
      font-size: 12px;
      color: #8e98b0;
    }
    > div:nth-of-type(2) {
      font-size: 24px;
      color: #26272a;
      margin-top: 8px;
    }
  }
}
</style>