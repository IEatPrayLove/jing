<template>
  <div class="samplenav">
    <div class="navlist">
      <div v-for="item in navlist"
           :class="[item.isSelect?'isSelect':'']"
           @click="checknav(item)"
           :key="item.id">
        {{item.name}}({{item.num}})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        { id: -1, name: "全部", num: 0, isSelect: true },
        { id: 1, name: "待审核", num: 0, isSelect: false },
        { id: 2, name: "待发货", num: 0, isSelect: false },
        { id: 3, name: "快递中", num: 0, isSelect: false },
        { id: 4, name: "已完成", num: 0, isSelect: false },
        { id: 5, name: "已拒绝", num: 0, isSelect: false }
      ]
    }
  },
  methods: {
    checknav (item) {
      this.navlist.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
      this.$emit('order_types', item.id)
    }
  }
}
</script>

<style lang="less" scoped>
.samplenav {
  .navlist {
    display: flex;
    > div {
      margin-right: 32px;
      color: #737e97;
      cursor: pointer;
    }
    .isSelect {
      color: #2361ff;
    }
  }
}
</style>