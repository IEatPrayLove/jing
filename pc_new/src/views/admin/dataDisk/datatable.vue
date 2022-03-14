 <template>
  <div class="tabledate">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="date"
                       label="">
      </el-table-column>
      <el-table-column label="达人收藏">
        <template slot-scope="scope">
          <div v-if="scope.row.num>0"
               class="up">
            {{scope.row.num}}
            <img src="../../../assets/person/labelup.png"
                 alt="">
          </div>
          <div v-else
               class="down">
            {{Math.abs(scope.row.num)}}
            <img src="../../../assets/person/labeldown.png"
                 alt="">
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name"
                       label="达人建联">
      </el-table-column>
      <el-table-column prop="address"
                       label="寄出样品数"
                       width="90">
      </el-table-column>
      <el-table-column prop="address"
                       label="确认收货">
      </el-table-column>
      <el-table-column prop="address"
                       label="确认上线">
      </el-table-column>
      <el-table-column prop="address"
                       label="佣金支出">
      </el-table-column>
      <el-table-column prop="address"
                       label="复播场次">
      </el-table-column>
      <el-table-column prop="address"
                       label="平均佣金">
      </el-table-column>
      <el-table-column prop="address"
                       label="总订单">
      </el-table-column>
      <el-table-column prop="address"
                       label="总销售额">
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>

export default {
  data () {
    return {
      tableData: []
    }
  }
}
  </script>

  <style lang="less" scoped>
.tabledate {
  /deep/.el-table .cell {
    text-align: center;
  }
  .up {
    color: red;
    > img {
      vertical-align: text-bottom;
    }
  }
  .down {
    color: #000000;
    > img {
      vertical-align: text-bottom;
    }
  }
}
</style>