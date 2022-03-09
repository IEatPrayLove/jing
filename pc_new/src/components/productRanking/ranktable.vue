<template>
  <div>
    <div>
      <el-table :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column prop=""
                         width="50">
          <template slot="header">
            <img src="../../assets/person/chilun.png"
                 alt="">
          </template>
        </el-table-column>
        <el-table-column v-for="item in navtoplist"
                         :key="item.id"
                         :sortable="item.isSortable"
                         prop="date"
                         width="180">
          <template slot="header">
            <el-tooltip class="item"
                        effect="dark"
                        v-if="item.title"
                        :content="item.title"
                        placement="top">
              <span>{{item.nav}}</span>
            </el-tooltip>
            <span v-else>{{item.nav}}</span>
          </template>
        </el-table-column>
      </el-table>

    </div>
    <div>
      <Page />
    </div>
  </div>
</template>

<script>
import Page from '../pagebtn/index.vue'
export default {
  components: {
    Page
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      navtoplist: [
        { id: 0, nav: '商品标题', title: '', isSortable: false },
        { id: 1, nav: '全部佣金', title: '全部佣金 = 所有订单收入之和', isSortable: true },
        { id: 2, nav: '有效单数', title: '有效单数 = 订单已支付 + 订单收货 + 已结算状态订单数', isSortable: true },
        { id: 3, nav: '已结算佣金', title: '已结算佣金 = 已结算状态订单的收入之和', isSortable: true },
        { id: 4, nav: '已付款单数', title: '已付款单数 = 订单已支付状态订单数', isSortable: true },
        { id: 5, nav: '已结算单数', title: '已结算单数 = 已结算状态订单数', isSortable: true },
        { id: 6, nav: '退款佣金', title: '退款佣金 = 订单退款 / 退货 状态订单的收入之和', isSortable: true },
      ]
    }
  },
  methods: {
    formatter (row, column) {
      return row.address;
    }
  }
}
</script>

<style lang="less" scoped>
</style>