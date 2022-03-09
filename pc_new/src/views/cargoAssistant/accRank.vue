<template>
  <div>
    <Topnav />
    <h-card>
      <Datatop />
    </h-card>
    <h-card>
      <Ranksearch />
    </h-card>
    <h-card>
      <Accrank />
    </h-card>
  </div>
</template>

<script>
import Topnav from '@/components/order/topnav.vue'
import Datatop from '@/components/order/orderdata/datatop.vue'
import Ranksearch from '@/components/productRanking/ranksearch.vue'
import Accrank from '@/components/accrank/index.vue'
export default {
  components: {
    Topnav, Datatop, Ranksearch,
    Accrank
  }
}
</script>

<style lang="less" scoped>
</style>