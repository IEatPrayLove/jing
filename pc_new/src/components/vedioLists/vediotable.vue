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
                         width="130">
          <template slot="header">
            <span>{{item.nav}}</span>
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
        { id: 0, nav: '序号', isSortable: false },
        { id: 1, nav: '视屏名称', isSortable: false },
        { id: 2, nav: '发布时间', isSortable: true },
        { id: 3, nav: '视频时长', isSortable: true },
        { id: 4, nav: '评论数', isSortable: true },
        { id: 5, nav: '点赞数', isSortable: true },
        { id: 6, nav: '累计播放量', isSortable: true },
        { id: 7, nav: '分享数', isSortable: true },
        { id: 8, nav: '转发数', isSortable: true },
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