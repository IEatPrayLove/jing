<template>
  <div>
    <h-card>
      <Sampletop />
    </h-card>
    <h-card>
      <Samplenav />
    </h-card>
  </div>
</template>

<script>
import Sampletop from "@/components/Sample/sampletop.vue"
import Samplenav from "@/components/Sample/samplenav.vue"
export default {
  components: {
    Sampletop, Samplenav
  }

}
</script>

<style lang="less" scoped>
</style>