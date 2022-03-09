<template>
  <div>
    <Topnav />
    <Ranking />
  </div>
</template>

<script>
import Topnav from '@/components/order/topnav.vue'
import Ranking from '@/components/productRanking/index.vue'
export default {
  components: {
    Topnav, Ranking
  }
}
</script>

<style lang="less" scoped>
</style>