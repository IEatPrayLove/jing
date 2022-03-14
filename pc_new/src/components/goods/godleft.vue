<template>
  <div class="goodshop">
    <Shopname :info="info.shop_info" :shopId="info.shop_id"/>
    <Shopduction :info="info.shop_info" />
    <Shopword :info="info.shop_info" />
  </div>
</template>

<script>
import Shopname from "./left/shopname.vue"
import Shopduction from "./left/shopduction.vue"
import Shopword from "./left/shopword.vue"
export default {
  components: {
    Shopname, Shopduction, Shopword
  },
  props: {
    info: {
      default: () => {
        return []
      }
    }
  },
}
</script>

<style lang="less" scoped>
.goodshop {
}
</style>