<template>
  <div>
    <h-card>
      <Ranksearch />
    </h-card>
    <h-card>
      <Ranktable />
    </h-card>

  </div>
</template>

<script>
import Ranksearch from './ranksearch.vue'
import Ranktable from './ranktable.vue'
export default {
  components: {
    Ranksearch, Ranktable
  }
}
</script>

<style lang="less" scoped>
</style>