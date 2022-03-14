<template>
  <div class="dataoverview">
    <Top @click="isSshow = !isSshow"
         @checkId="checkId" />
    <div v-show="isSshow">
      <Echart v-if="showId==0" />
      <Table v-else
             :tablename="tablename" />
    </div>
  </div>
</template>

<script>
import Top from './overview/top.vue'
import Echart from './overview/echart.vue'
import Table from './overview/table.vue'
export default {
  components: {
    Top, Echart, Table
  },
  data () {
    return {
      isSshow: true,
      showId: 0,
      tablename: ''
    }
  },
  methods: {
    checkId (item) {
      this.showId = item.id
      this.tablename = item.name.substring(0, item.name.length - 2)
    }
  }
}
</script>

<style lang="less" scoped>
.dataoverview {
  > div:nth-of-type(2) {
    padding: 10px 0;
    width: 100%;
  }
}
</style>