<template>
  <el-container class="shop">
    <el-form ref="form" :model="form" label-width="100px">
      <div style="margin-bottom: 20px" class="form_top">
        <div>基本信息</div>
        <div @click="dialogVisible = true">店铺链接采集+</div>
      </div>
      <el-form-item label="店铺名称">
        <el-input v-model="form.name" placeholder="请输入店铺名称"></el-input>
      </el-form-item>
      <!-- <el-form-item label="主营类目">
        <el-input v-model="form.category"
                  placeholder="请输入店铺主营类目"></el-input>
      </el-form-item> -->
      <el-form-item label="店铺类型">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option
            v-for="(item, index) in type_list"
            :key="index"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主营类目">
        <el-checkbox-group v-model="form.categories">
          <el-checkbox
            v-for="(item, index) in categoryList"
            :key="index"
            :label="item.id"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="动态评分">
        <el-col :span="8">
          <el-form-item label="商品">
            <el-input
              type="number"
              maxlength="3"
              v-model="form.scope.goods"
              placeholder="请输入商品动态评分"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商家">
            <el-input
              v-model="form.scope.shop"
              type="number"
              placeholder="请输入商品商家评分"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="物流">
            <el-input
              v-model="form.scope.wuliu"
              type="number"
              placeholder="请输入商品物流评分"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="商家地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <!-- <el-form-item label="品牌定位">
        <el-input v-model="form.positioning"></el-input>
      </el-form-item> -->
      <!-- <el-form-item label="佣金最高">
        <template>
          <div class="com">
            <el-input v-model="form.positioning"
                      class="commission"></el-input>
            <div>%</div>
          </div>
        </template>
      </el-form-item> -->
      <el-form-item label="店铺ID">
        <!-- <el-input
          v-model="form.shop_id"
          placeholder="请输入店铺ID"
          v-if="form.shop_id"
          disabled
        ></el-input> -->
        <el-input v-model="form.shop_id" placeholder="请输入店铺ID"></el-input>
      </el-form-item>
      <el-form-item label="商家简介">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <!-- Logo -->
      <el-form-item label="Logo">
        <el-upload
          class="avatar-uploader"
          :action="$axios.defaults.baseURL + 'Manager/upload_cover'"
          :show-file-list="false"
          :on-success="handleSuccess"
          :before-upload="beforeAvatarUpload"
          :data="{ check_type: this.$route.query.type }"
        >
          <img v-if="form.logo" :src="$fixImgUrl(form.logo)" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="最高佣金">
        <el-input
          v-model="form.max_commission"
          placeholder="自主填写"
        ></el-input>
      </el-form-item>
      <el-form-item label="推广商品" :span="8">
        <el-input
          type="number"
          v-model="form.goods_count"
          placeholder="请输入推广商品数量"
        ></el-input>
      </el-form-item>

      <el-form-item label="合作达人">
        <el-input
          type="number"
          v-model="form.month_talent"
          placeholder="请输入近30天合作达人数量"
        ></el-input>
      </el-form-item>
      <div class="title">店铺概览</div>

      <el-form-item>
        <el-col :span="12" class="dp_gailan">
          <el-form-item label="近30天销售额">
            <el-input
              type="number"
              maxlength="3"
              v-model="form.month_amount"
              placeholder="请输入近30天销售额"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" class="dp_gailan">
          <el-form-item label="近30天销量(件)">
            <el-input
              v-model="form.month_sales"
              type="number"
              placeholder="请输入近30天销量(件)"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" class="dp_gailan">
          <el-form-item label="近30天关联直播">
            <el-input
              type="number"
              maxlength="3"
              v-model="form.month_live"
              placeholder="请输入近30天关联直播"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" class="dp_gailan">
          <el-form-item label="近30天关联视频">
            <el-input
              v-model="form.month_video"
              type="number"
              placeholder="请输入近30天关联视频"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" class="dp_gailan">
          <el-form-item label="近30天平均转化率">
            <el-input
              type="number"
              maxlength="3"
              v-model="form.month_conversion"
              placeholder="请输入近30天平均转化率"
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" class="dp_gailan">
          <el-form-item label="近30天客单价">
            <el-input
              v-model="form.month_price"
              type="number"
              placeholder="请输入近30天客单价"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <!-- <el-form-item label="主营爆款">
        <el-input v-model="form.top_goods" placeholder="自主填写"></el-input>
      </el-form-item> -->
      <el-form-item label="短视频">
        <el-upload
          :file-list="form.video"
          :action="$axios.defaults.baseURL + 'Manager/upload_video'"
          :on-success="handleSuccess_video"
          :on-remove="handleRemove_video"
          :before-upload="beforeAvatarUpload_video"
          :data="{ check_type: this.$route.query.type }"
        >
          <!--  <el-button size="small"
                     type="primary">点击上传</el-button> -->
          <div class="toupload">点击上传+</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          :file-list="form.imgs"
          :action="$axios.defaults.baseURL + 'Manager/upload_cover'"
          list-type="picture-card"
          :on-success="handleSuccess_imgs"
          :on-remove="handleRemove_imgs"
          :before-upload="beforeAvatarUpload_imgs"
          :data="{ check_type: this.$route.query.type }"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <div class="title">需求分析</div>
      <el-form-item
        v-for="(item, index) in form.demand"
        :key="index"
        :label="item.name"
        width="90"
      >
        <div v-if="item.name == '付费预算' || item.name == '品宣/播放量'">
          <el-radio v-model="item.value" label="有">有</el-radio>
          <el-radio v-model="item.value" label="没有">没有</el-radio>
        </div>
        <div v-else-if="item.name == 'roi保有量'">
          <el-input v-model="item.value" controls-position="right"></el-input>
        </div>
        <div v-else>
          <el-radio v-model="item.value" label="需要">需要</el-radio>
          <el-radio v-model="item.value" label="不需要">不需要</el-radio>
        </div>
      </el-form-item>
      <div class="title">品牌分析</div>
      <el-form-item
        v-for="(item, index) in form.brand"
        :key="index"
        :label="item.name"
      >
        <el-input v-model="item.value" placeholder="自主填写"></el-input>
      </el-form-item>
      <div class="title">实力分析</div>
      <el-form-item
        v-for="(item, index) in form.strength_analysis"
        :key="index"
        :label="item.name"
      >
        <div v-if="item.name == '是否代工'">
          <el-radio v-model="item.value" label="是">是</el-radio>
          <el-radio v-model="item.value" label="否">否</el-radio>
        </div>

        <div v-else>
          <el-input v-model="item.value" :controls="false" :min="1"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="合作支持">
        <el-checkbox-group v-model="form.cooperation">
          <el-checkbox
            v-for="(item, index) in cooperate"
            :key="index"
            :label="item.name"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <div class="title">履约能力</div>
      <el-form-item
        v-for="(item, index) in form.comprehensive"
        :key="index"
        :label="item.name"
      >
        <div v-if="item.name == '风险处理'">
          <el-radio v-model="item.value" label="优">优</el-radio>
          <el-radio v-model="item.value" label="高">高</el-radio>
          <el-radio v-model="item.value" label="良">良</el-radio>
        </div>

        <div v-else>
          <el-input v-model="item.value" placeholder="自主填写"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="企业资质">
        <el-upload
          :file-list="form.qualifications"
          :action="$axios.defaults.baseURL + 'Manager/upload_cover'"
          list-type="picture-card"
          :on-success="handleSuccess_qualifications"
          :on-remove="handleRemove_qualificationss"
          :before-upload="beforeAvatarUpload_qualifications"
          :data="{ check_type: this.$route.query.type }"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <div class="title">合作信息</div>
      <el-form-item label="联系人">
        <el-input v-model="form.call_user"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.cell_phone"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="form.wechat"></el-input>
      </el-form-item>
      <div class="sub">
        <div @click="onSubmit" class="onSubmit">提交审核</div>
      </div>
    </el-form>
    <el-form ref="forms" :model="forms">
      <el-dialog
        title="链接更新店铺信息"
        :visible.sync="dialogVisible"
        width="30%"
        append-to-body
        :before-close="handleClose"
      >
        <span>
          <el-form-item label="店铺主页链接">
            <el-input
              v-model="forms.link"
              placeholder="请输入店铺主页链接"
            ></el-input>
          </el-form-item>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="LinkUp">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
  </el-container>
</template>

<script>
// import { VueEditor } from "vue2-editor";
export default {
  /*  components: {
     VueEditor,
   }, */
  data() {
    return {
      shopid: this.$route.query.id ? this.$route.query.id : 0,
      dialogVisible: false,
      forms: {
        check_type: this.$route.query.type,
        link: "",
      },
      type_list: [
        {
          id: 2,
          name: "供应链",
        },
        {
          id: 3,
          name: "源厂",
        },
        {
          id: 4,
          name: "大牌",
        },
      ],
      form: {
        check_type: this.$route.query.type,
        type: "",
        shop_id: "",
        cell_phone: "",
        name: "",
        content: "",
        address: "",
        qualifications: [],
        demand: [
          {
            name: "短视频带货",
            value: "",
          },
          {
            name: "直播带货",
            value: "",
          },
          {
            name: "纯佣cps",
            value: "",
          },
          {
            name: "店铺代播",
            value: "",
          },
          {
            name: "付费预算",
            value: "",
          },
          {
            name: "roi保有量",
            value: "",
          },
          {
            name: "品宣/播放量",
            value: "",
          },
          {
            name: "季/年框合作",
            value: "",
          },
          {
            name: "代运营",
            value: "",
          },
        ],
        brand: [
          {
            name: "旗下品牌",
            value: "",
          },
          {
            name: "线上布局",
            value: "",
          },
          {
            name: "研发团队",
            value: "",
          },
          {
            name: "推荐人/代言人",
            value: "",
          },
          {
            name: "品牌荣誉",
            value: "",
          },
          {
            name: "历史成绩",
            value: "",
          },
          {
            name: "品牌公益",
            value: "",
          },
        ],
        strength_analysis: [
          {
            name: "成立时间",
            value: "",
          },
          {
            name: "公司面积",
            value: "",
          },
          {
            name: "年交易额",
            value: "",
          },
          {
            name: "员工规模",
            value: "",
          },
          {
            name: "日均产能",
            value: "",
          },
          {
            name: "日销订单",
            value: "",
          },
          {
            name: "是否代工",
            value: "",
          },
        ],
        comprehensive: [
          {
            name: "运营团队",
            value: "",
          },
          {
            name: "日均发货",
            value: "",
          },
          {
            name: "客服团队",
            value: "",
          },
          {
            name: "物流合作",
            value: "",
          },
          {
            name: "退换货机制",
            value: "",
          },
          {
            name: "风险处理",
            value: "",
          },
        ],
        categories: [],
        cooperation: [],
        video: [],
        imgs: [],
        scope: {
          goods: "4.9",
          shop: "4.8",
          wuliu: "4.6",
        },
        logo: "",
        max_commission: "0",
        goods_count: "0",
        month_talent: "0",
        month_amount: "0",
        month_conversion: "0",
        month_live: "0",
        month_sales: "0",
        month_video: "0",
        month_price: "0",
      },
      categoryList: [],
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"],
      ],
      num: 0,
      cooperate: [
        { id: 0, name: "免费领样", isSelect: false },
        { id: 1, name: "自购样品", isSelect: false },
        { id: 2, name: "一件代发", isSelect: false },
        { id: 3, name: "源头厂家", isSelect: false },
        { id: 4, name: "投流补贴", isSelect: false },
        { id: 5, name: "商标授权", isSelect: false },
        { id: 6, name: "承接代工", isSelect: false },
        { id: 7, name: "定制打板", isSelect: false },
        { id: 8, name: "内容创作", isSelect: false },
        { id: 9, name: "素材提供", isSelect: false },
        { id: 10, name: "运营支持", isSelect: false },
        { id: 11, name: "渠道代理", isSelect: false },
      ],
    };
  },
  created() {
    this.getCategory();
    if (this.shopid > 0) {
      this.getShopInfo(this.shopid);
    }
  },
  methods: {
    handleClose(done) {
      done();
    },
    handleChange(value) {
      // console.log(value);
    },
    // 合作支持
    changeCooperate(item) {
      if (item.isSelect) {
        item.isSelect = false;
      } else {
        item.isSelect = true;
      }
    },
    //链接添加
    LinkUp(e) {
      this.$axios({
        url: "Manager/linkGiveShop",
        method: "post",
        data: this.forms,
      }).then((res) => {
        if (res.data.status == 0) {
          console.log(res.data);
          this.$message({
            message: "获取成功~",
            type: "success",
          });
          this.dialogVisible = false;
          this.forms.link = "";
          this.form.name = res.data.result.name;
          this.form.logo = res.data.result.logo;
          this.form.shop_id = res.data.result.shop_id;
          // this.getCategory();
          // this.getShopInfo();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    getCategory() {
      this.$axios({
        url: "Plblics/getCategory/",
        method: "get",
      }).then((res) => {
        if (res.data.status == 0) {
          this.categoryList = res.data.result;
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    getShopInfo(id) {
      this.$axios({
        url: "Manager/shopInfo/",
        method: "get",
        params: {
          check_type: this.$route.query.type,
          id: id,
        },
      }).then((res) => {
        if (res.data.status == 0) {
          this.form = res.data.result;
          this.form.token = this.token;
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    onSubmit() {
      var actions = "Manager/addShop/";
      if (this.shopid > 0) {
        this.form.id = this.shopid;
        actions = "Manager/updateShop/";
      }
      (this.form.check_type = this.$route.query.type),
        this.$axios({
          url: actions,
          method: "post",
          data: this.form,
        }).then((res) => {
          if (res.data.status == 0) {
            this.$message({
              message: "提交成功~",
              type: "success",
            });
            this.$router.push({
              path: "/manager_shop_list",
              query: {
                type: this.$route.query.type,
              },
            });
          } else {
            this.$message.error(res.data.msg);
            return false;
          }
        });
    },
    imgUpload(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);
      // this.$axios({
      //   url: "/upload",
      //   method: "POST",
      //   data: formData
      // })
      //   .then(res => {
      //     const { data } = res.data;
      //     let url = this.$axios.defaults.baseURL + data.url;
      //     Editor.insertEmbed(cursorLocation, "image", url);
      //     // 有一个必须要做的就是重置上传组件
      //     resetUploader();
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    handleRemove(file, fileList) {
      this.form.logo = "";
    },
    handleSuccess(res) {
      if (res.status == 0) {
        this.form.logo = res.result;
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove_video(file, fileList) {
      this.form.video = fileList;
    },
    handleSuccess_video(res) {
      if (res.status == 0) {
        this.form.video.push({
          url: this.$axios.defaults.baseImgUrl + res.result.url,
          name: res.result.name,
        });
      } else {
        this.$message.error(res.msg);
      }
    },
    beforeAvatarUpload_video(file) {
      const isJPG = file.type === "video/mp4";
      const isLt2M = file.size / 1024 / 1024 < 20;

      if (!isJPG) {
        this.$message.error("上传视频只能是 mp4 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传视频大小不能超过 20MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove_imgs(file, fileList) {
      this.form.imgs = fileList;
    },
    handleSuccess_imgs(res) {
      if (res.status == 0) {
        this.form.imgs.push({
          url: this.$axios.defaults.baseImgUrl + res.result,
        });
      } else {
        this.$message.error(res.msg);
      }
    },
    beforeAvatarUpload_imgs(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("图片格式错误!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove_qualifications(file, fileList) {
      this.form.qualifications = fileList;
    },
    handleSuccess_qualifications(res) {
      if (res.status == 0) {
        this.form.qualifications.push({
          url: this.$axios.defaults.baseImgUrl + res.result,
        });
      } else {
        this.$message.error(res.msg);
      }
    },
    beforeAvatarUpload_qualifications(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("图片格式错误!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>
<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  background-color: #fff;
  font-size: 28px;
  color: #8c939d;
  width: 145px;
  height: 145px;
  line-height: 145px;
  text-align: center;
}
.avatar {
  width: 145px;
  height: 145px;
  display: block;
}
.form_top {
  display: flex;
  align-items: center;
  > div:nth-of-type(1) {
    margin-right: 30px;
    font-size: 20px;
  }
  > div:nth-of-type(2) {
    padding: 6px 12px;
    background: #bbc3dd;
    border-radius: 8px;
    cursor: pointer;
  }
}
.com {
  display: flex;
  align-items: center;
  > div:nth-of-type(2) {
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 4px;
    margin-left: 4px;
  }
}
.commission {
  width: 60px;
}
.title {
  margin: 10px 0;
}
.sub {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.onSubmit {
  background: #bbc3dd;
  width: 100px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  border-radius: 8px;
}
.coolist {
  display: flex;
  flex-wrap: wrap;
  .list {
    padding: 2px 14px;
    background: #a5b2ca;
    border-radius: 8px;
    margin: 0 10px 10px 0;
    cursor: pointer;
  }
  .isSelect {
    background: #547bb3;
  }
}
.toupload {
  padding: 0 10px;
  background: #bbc3dd;
  color: #fff;
  border-radius: 8px;
}
/deep/.el-input__inner {
  border: 1px solid #4b70a8;
}
/deep/.el-textarea__inner {
  border: 1px solid #4b70a8;
}
</style>