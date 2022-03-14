<template>
  <div class="godright">
    <Goodstitle :info="info" />
	<DataanAlysis :info="info" />
	<MarketingConversion :info="info" />
	<BaoZheng :info="info" />
    <Goodspoint :info="info" />
    <Hotcard :info="info" />
    <Goodproduct :info="info" />
    <Goodsinfo :info="info" />
  </div>
</template>

<script>
import Goodstitle from './right/goodstitle.vue'
import DataanAlysis from './right/dataanalysis.vue'
import MarketingConversion from './right/marketingconversion.vue'
import BaoZheng from './right/baozheng.vue'
import Goodspoint from './right/goodspoint.vue'
import Hotcard from './right/hotcard.vue'
import Goodproduct from './right/goodproduct.vue'
import Goodsinfo from './right/goodsinfo.vue'
export default {
  components: {
    Goodstitle, DataanAlysis, Goodspoint, Hotcard, Goodproduct, Goodsinfo, MarketingConversion, BaoZheng
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
</style>