<template>
  <div class="table">
    <el-table :data="tableData"
              style="width:100%"
              size='mini'
              :default-sort="{prop: 'date', order: 'descending'}">
      <el-table-column prop="name"
                       label="TOP10">
      </el-table-column>
      <el-table-column prop="name"
                       :label="tablename">
      </el-table-column>
      <el-table-column prop="date"
                       label="全部销售额"
                       sortable
                       width="130">
      </el-table-column>
      <el-table-column prop="name"
                       label="有效销售额"
                       sortable
                       width="130">
      </el-table-column>
      <el-table-column prop="name"
                       label="全部佣金"
                       sortable
                       width="130">
      </el-table-column>
      <el-table-column prop="name"
                       label="有效佣金"
                       sortable
                       width="130">
      </el-table-column>
      <el-table-column prop="name"
                       label="全部单数"
                       sortable
                       width="130">
      </el-table-column>
      <el-table-column prop="address"
                       label="有效单数"
                       :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    tablename: {
      type: String,
      default: '12'
    }
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
<style lang="less" scoped>
.table {
  width: 100%;
  /deep/th {
    width: 130px;
  }
}
</style>