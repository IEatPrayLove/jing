<template>
  <div>
    <h-card>
      <Vediotop />
    </h-card>
    <h-card>
      <Vediolist />
    </h-card>
    <h-card>
      <Vediotable />
    </h-card>
  </div>
</template>

<script>
import Vediotop from '@/components/vedioLists/vediotop.vue'
import Vediolist from '@/components/vedioLists/vediolist.vue'
import Vediotable from '@/components/vedioLists/vediotable.vue'
export default {
  components: {
    Vediotop, Vediolist, Vediotable
  }
}
</script>

<style lang="less" scoped>
</style>