<template>
  <div class="orderdata">
    <h-card>
      <Datatop />
    </h-card>
    <h-card>
      <Datasearch />
    </h-card>
    <h-card>
      <Datatable />
    </h-card>
  </div>
</template>

<script>
import Datatop from './orderdata/datatop.vue'
import Datasearch from './orderdata/datasearch.vue'
import Datatable from './orderdata/datatable.vue'
export default {
  components: {
    Datatop, Datasearch, Datatable
  }
}
</script>

<style lang="less" scoped>
.orderdata {
  /deep/.h-card-bottom {
  }
}
</style>