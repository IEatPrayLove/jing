<template>
  <div>
    <el-table :data="tableData"
              style="width: 100%"
              :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column prop="date"
                       label="序号"
                       width="130">
      </el-table-column>
      <el-table-column prop="date"
                       label="商品标题"
                       width="230">
      </el-table-column>
      <el-table-column prop="date"
                       label="订单状态"
                       width="100">
      </el-table-column>
      <el-table-column prop="date"
                       label="提成比"
                       width="80">
      </el-table-column>
      <el-table-column prop="date"
                       width="130">
        <template slot="header">
          <span>佣金
            <el-tooltip class="item"
                        effect="dark"
                        content="此收入未扣除平台10%的技术服务费"
                        placement="top">
              <i class="el-icon-question"
                 style="color:#606266;" />
            </el-tooltip>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="name"
                       width="130">
        <template slot="header">
          <span>净佣金
            <el-tooltip class="item"
                        effect="dark"
                        content="此收入已扣除平台10%的技术服务费"
                        placement="top">
              <i class="el-icon-question"
                 style="color:#606266;" />
            </el-tooltip>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="address"
                       label="账号名称"
                       :formatter="formatter">
      </el-table-column>
      <el-table-column prop="name"
                       label="运营人"
                       width="130">
      </el-table-column>
    </el-table>
    <div>
      <Page />
    </div>
  </div>
</template>

<script>
import Page from '../../pagebtn/index.vue'
export default {
  components: { Page },
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
      }]
    }
  },
  methods: {
    formatter (row, column) {
      return row.address;
    }
  }
}
</script>