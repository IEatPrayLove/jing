<template>
  <div>
    <div style="margin: 20px 0">
      <!--  <el-row>
        <el-button type="primary"
                   @click="jump('/goods_edit')">手动添加商品</el-button>
        <el-button type="success"
                   @click="dialogVisible = true">链接添加商品</el-button>
      </el-row> -->
      <div class="topbtn">
        <div>基础信息</div>
        <div @click="dialogVisible = true">商品链接采集+</div>
        <div @click="jump('/mannger_goods_edit')">手动添加+</div>
        <div>
          <el-input placeholder="请输入商品名搜索关键词" v-model="search_goods_name" class="input-with-select">
    <el-button slot="append" icon="el-icon-search" @click="searchSubmit"></el-button>
  </el-input>
        </div>
      </div>
    </div>
    <el-table :data="tableData"
              v-if="tableData"
              style="width: 100%">
      <el-table-column label="编号"
                       width="60">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="缩略图"
                       width="200">
        <template slot-scope="scope">
          <img v-if="scope.row.thumb"
               :src="$fixImgUrl(scope.row.thumb)"
               alt=""
               class="thumbnail" />
          <img v-else
               src="@/assets/logo.png"
               alt=""
               class="thumbnail" />
        </template>
      </el-table-column>

      <el-table-column label="商品名称"
                       width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
<el-table-column label="所属店铺"
                       width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.shop_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="到手价"
                       width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="佣金"
                       width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.commission }}</span>
        </template>
      </el-table-column>
      <el-table-column label="公开佣金"
                       width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.commission }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-else
         class="create_item">
      <div>
        <div class="creta_btn"
             @click="jump('/goods_edit')">创建商品+</div>
        <div>暂无商品信息</div>
      </div>
    </div>
    <!-- 添加分页 -->
    <el-pagination layout="total,prev, pager, next"
                    :hide-on-single-page="true"
                   :current-page.sync="pageIndex"
                         :page-size="10"
                   :total="count"
                   @current-change="changePage"
                   @size-change="changeSize">
    </el-pagination>
    <el-form ref="form"
             :model="form">
      <el-dialog title="链接添加商品"
                 :visible.sync="dialogVisible"
                 width="30%"
                 :before-close="handleClose">
        <span>
          <el-form-item label="商品链接">
            <el-input v-model="form.goods_link"
                      placeholder="请输入商品链接"></el-input>
          </el-form-item>
        </span>
        <span>
            <el-form-item label="请选择店铺">
    <el-select v-model="form.shop_id" placeholder="请选择店铺">
      <el-option v-for="(item,index) in shop_list" :key="index" :label="item.name" :value="item.id"></el-option>
    </el-select>
  </el-form-item>
        </span>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="LinkAddGoods">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      check_type:this.$route.query.type,
      form: {
        check_type: this.$route.query.type,
        shop_id:"",
        goods_link: "",
      },
      tableData: [],
      pageIndex: 1,
      pageSize: 10,
      count: 0,
      dialogVisible: false,
      shop_list:[],
      search_goods_name:"",
      keywords:""
    };
  },
  mounted () {
    this.getPostList();
    this.getShopList()
  },
  methods: {
    searchSubmit(){
      this.keywords = this.search_goods_name
          this.getPostList()
    },
    handleClose (done) {
      done();
    },
    jump (path) {
      this.$router.push({
        path: "/mannger_goods_edit",
        query: {
          type: this.$route.query.type,
        },
      });
    },
    //链接添加商品
    LinkAddGoods (e) {
      if(this.form.shop_id && this.form.goods_link){
        this.$axios({
        url: "Manager/linkGiveGoods",
        method: "post",
        data: this.form,
      }).then((res) => {
        if (res.data.status == 0) {
          this.$message({
            message: "添加成功~",
            type: "success",
          });
          this.dialogVisible = false;
          this.form.goods_link = "";
          this.getPostList();
        } else {
          this.$message.error(res.data.msg);
        }
      });
      }else{
          this.$message.error('商品链接或店铺不能为空');
          return false
      }
      
    },
    //获取商品列表
    getPostList () {
      this.$axios({
        url: "Manager/goodsList",
        method: "get",
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
        check_type: this.$route.query.type,
        keywords:this.keywords
        },
      }).then((res) => {
        if (res.data.status == 0) {
          this.tableData = res.data.result.list;
          this.count = res.data.result.count;
        } else {
          this.$message.error(res.data.msg);
        }
      });
      /*  this.tableData = [
         {
           id: 0,
           thumb: require('@/assets/person/taobao.png'),
           title: '测试名称', price: 123, commission: 0.3
         }
       ] */
    },
    //
    getShopList () {
      this.$axios({
        url: "Manager/getShopIdList",
        method: "get",
        params: {
        check_type: this.$route.query.type,
        },
      }).then((res) => {
        if (res.data.status == 0) {
          this.shop_list = res.data.result
        } else {
          this.$message.error(res.data.msg);
        }
      });
      /*  this.tableData = [
         {
           id: 0,
           thumb: require('@/assets/person/taobao.png'),
           title: '测试名称', price: 123, commission: 0.3
         }
       ] */
    },
    handleEdit (index, row) {
      //点击编辑
      this.$router.push({
        path: "/mannger_goods_edit",
        query: {
          id: row.id,
          type: this.$route.query.type,
        },
      });
    },
    //删除商品
    handleDelete (index, row) {
      this.$confirm("删除后将无法恢复，确定要删除该商品?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios({
            url: "Manager/delGoods",
            method: "post",
            data: { id: row.id,  check_type: this.$route.query.type},
          }).then((res) => {
            if (res.data.status == 0) {
              this.$message({
                message: "删除成功~",
                type: "success",
              });
              this.tableData.splice(index, 1);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => { });
    },
    changePage (val) {
      //翻页功能
      this.pageIndex = val;
      this.getPostList();
    },
    changeSize (val) {
      //控制条数的值
      // 会传入一个参数,就是用户选择了的每页数据条数
      this.pageSize = val; // 1.修改每页条数数据
      this.getPostList(); // 2.重新获取数据
    },
  },
};
</script>
<style lang="less" scoped>
.thumbnail {
  width: 100px;
  height: 60px;
  object-fit: cover;
}
/deep/.cell {
  text-align: center;
}
.topbtn {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  > div:nth-of-type(1) {
    font-weight: bold;
    margin-right: 20px;
  }
  > div:not(:first-child) {
    padding: 4px 10px;
    margin-right: 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  > div:nth-of-type(2) {
    background: #bbc3dd;
  }
  > div:nth-of-type(3) {
    background: #547bb3;
  }
}
.create_item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 14px;
  text-align: center;
  .creta_btn {
    font-size: 20px;
    padding: 4px 10px;
    border-radius: 8px;
    background: #a5b2ca;
    margin-bottom: 8px;
    cursor: pointer;
  }
}
</style>