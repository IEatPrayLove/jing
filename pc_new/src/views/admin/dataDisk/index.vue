<template>
  <div class="dataDisk">
    <h-card>
      <div class="data">
        <div class="top">
          <div>
            <div>我的销售额</div>
            <div class="datanav">
              <div v-for="item in myOrder"
                   @click="changemyOrder(item)"
                   :key="item.id">
                {{item.name}}
              </div>
            </div>
          </div>
          <div>
            <div>我的订单</div>
            <div class="datanav">
              <div v-for="item in mySales"
                   @click="changemySales(item)"
                   :key="item.id">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
        <div class="table">
          <Datatable />
        </div>
      </div>
    </h-card>
    <el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  :close-on-click-modal="closemodal"
  width="30%"
  center>
  <span>当前版块暂未开放</span>
</el-dialog>
  </div>
</template>

<script>
import Datatable from './datatable.vue'
export default {
  components: { Datatable },
  data () {
    return {
      closemodal:false,
      centerDialogVisible:true,
      //token: localStorage.getItem("token"),
      myOrder: [
        { id: 0, name: '今天', isSelect: false },
        { id: 1, name: '7天', isSelect: false },
        { id: 2, name: '30天', isSelect: false },
        { id: 3, name: '总订单', isSelect: false }
      ],
      mySales: [
        { id: 0, name: '今天', isSelect: false },
        { id: 1, name: '7天', isSelect: false },
        { id: 2, name: '30天', isSelect: false },
        { id: 3, name: '总销售额', isSelect: false }
      ],
      tableData:[]
    }
  },
  mounted(){
    //this.getDatasDisk()
  },
  methods: {
    getDatasDisk(){
      this.$axios({
        url: "Workbench/dataDisk",
        method: "get",
        params: {
          token: this.token
        },
      }).then((res) => {
        if (res.data.status == 0) {
          this.tableData = res.data.result;
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    changemyOrder (item) {
      console.log(item);
    },
    changemySales (item) {
      console.log(item);
    },
  }
}
</script>

<style lang="less" scoped>
.dataDisk {
  .h-card {
    margin: 0;
    /deep/.h-card-bottom {
      .data {
        .top {
          display: flex;
          > div:nth-of-type(1) {
            margin-right: 100px;
          }
          .datanav {
            display: flex;
            margin: 20px 0;
            > div {
              padding: 6px 10px;
              background: #4b70a8;
              margin-right: 10px;
              cursor: pointer;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
}
</style>