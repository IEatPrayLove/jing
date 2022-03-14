<template>
  <div>
    <div>
      <el-table :data="tableData"
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column v-for="item in navtoplist"
                         :key="item.id"
                         :sortable="item.isSortable"
                         prop="date"
                         width="180">
          <template slot="header">
            <!--  <el-tooltip class="item"
                        effect="dark"
                        v-if="item.title"
                        :content="item.title"
                        placement="top">
              <span>{{item.nav}}</span>
            </el-tooltip>
            <span v-else>{{item.nav}}</span> -->
            <span v-if="item.isImg">{{item.nav}}
              <el-tooltip class="item"
                          effect="dark"
                          v-if="item.title"
                          :content="item.title"
                          placement="top">
                <i class="el-icon-question"
                   style="color:#606266;" />
              </el-tooltip>
            </span>
            <el-tooltip v-else-if="item.title"
                        class="item"
                        effect="dark"
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
        { id: 0, nav: '序号', title: '', isSortable: false },
        { id: 1, nav: '账号名称', title: '', isSortable: false },
        { id: 2, nav: '抖音授权', title: '授权后您可：同步账号基础信息以及查看账号运营数据；发布查看视频列表；获取联盟售卖订单数据；获得选品权限：申请免费验货/定向、添加橱窗等。', isSortable: false, isImg: true },
        { id: 3, nav: '抖音号uid', title: '', isSortable: false },
        { id: 4, nav: '当前运营人', title: '', isSortable: false },
        { id: 5, nav: '全部佣金', title: '全部佣金 = 所有订单收入之和', isSortable: true },
        { id: 6, nav: '有效单数', title: '有效单数 = 订单已支付 + 订单收货 + 已结算状态订单数', isSortable: true },
        { id: 7, nav: '已结算佣金', title: '已结算佣金 = 已结算状态订单的收入之和', isSortable: true },
        { id: 8, nav: '已付款单数', title: '已付款单数 = 订单已支付状态订单数', isSortable: true },
        { id: 9, nav: '已结算单数', title: '已结算单数 = 已结算状态订单数', isSortable: true },
        { id: 10, nav: '退款佣金', title: '退款佣金 = 订单退款 / 退货 状态订单的收入之和', isSortable: true },
        { id: 11, nav: '退款销售额', title: '退款销售额 = 订单退款/退货 付款金额之和', isSortable: true },
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