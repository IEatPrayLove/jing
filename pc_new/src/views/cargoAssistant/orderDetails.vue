<template>
  <div>
    <Topnav />
    <Orderdata />
  </div>
</template>

<script>
import Topnav from '@/components/order/topnav.vue'
import Orderdata from '@/components/order/orderdata.vue'
export default {
  components: {
    Topnav, Orderdata
  }
}
</script>

<style lang="less" scoped>
</style>