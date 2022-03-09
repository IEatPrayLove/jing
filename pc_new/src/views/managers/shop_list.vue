<template>
  <div class="myshop">
    <h-card>
      <div class="shop" v-if="!showShop">
       <div style="display:flex;flex-direction: row;justify-content: space-between;">
          <div class="shopname">我的店铺</div>
        <div style="margin-left:30rpx;" >
          <el-input placeholder="请输入店铺名搜索关键词" v-model="search_shop_name" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" @click="searchSubmit"></el-button>
  </el-input>
        </div>
       </div>
        <div>
          <el-table :data="tableData" style="width: 100%" max-height="450">
            <el-table-column label="类型" width="150">
              <template slot-scope="scope">
                <div v-if="scope.row.type == 1">小店</div>
                <div v-else-if="scope.row.type == 2">供应链</div>
                <div v-else-if="scope.row.type == 3">源厂</div>
                <div v-else>大牌</div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="店铺名称" width="120">
            </el-table-column>
            <el-table-column prop="categories" label="类目" width="120">
            </el-table-column>
            <el-table-column label="状态" width="120">
              <template slot-scope="scope">
                <div v-if="scope.row.status == 1">已通过</div>
                <div v-else-if="scope.row.status == 2">待审核</div>
                <div v-else>审核未通过</div>
              </template>
            </el-table-column>
            <el-table-column prop="status_msg" label="审核意见" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="详情/操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="createShop(scope.$index, tableData)"
                  type="text"
                  size="small"
                >
                  修改
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="createshop">
            <div @click="createShop">创建店铺</div>
          </div>
        </div>
      </div>
    </h-card>
  </div>
</template>

<script>
import { ManagerShopList } from "@/utils/request.js";
export default {
  methods: {
    createShop(index, row) {
      if (row) {
        //点击编辑
        this.$router.push({
            path: "/mannger_shop_edit",
            query: {
            id: row[index].id,
            type:this.$route.query.type,
            },
        });
      }else{
          this.$router.push({
            path: "/mannger_shop_edit",
            query: {
            type:this.$route.query.type,
            },
        });
      }
      
    },
    searchSubmit(){
       this.keywords = this.search_shop_name
          this.getShopList()
    },
    getShopList(){
    //获取店铺列表
    ManagerShopList({ check_type:this.$route.query.type,keywords:this.keywords }).then((shops) => {
      if (shops.status == 0) {
        this.tableData = shops.result;
      } else {
        this.$message.error(shops.msg);
        return false;
      }
    });
    }
  },
  mounted() {
    this.getShopList()
  },
  data() {
    return {
    type:"",
      edit_id: "0",
      tableData: [],
      showShop: false,
      search_shop_name:"",
      keywords:""
    };
  },
};
</script>

<style lang="less" scoped>
.myshop {
  .h-card {
    margin: 0;
    /deep/.h-card-bottom {
      .shop {
        // min-height: 440px;
        .shopname {
          padding: 6px 10px;
          background: #a5b2ca;
          width: 100px;
          text-align: center;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        .cell {
          text-align: center;
        }
        .createshop {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
          > div {
            padding: 6px 10px;
            background: #a5b2ca;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>