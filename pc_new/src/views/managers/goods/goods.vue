<template>
  <el-form ref="form" :model="form" label-width="100px">
    <el-form-item label="商品标题">
      <el-input v-model="form.title" placeholder="商品标题"></el-input>
    </el-form-item>
    <el-form-item label="所属店铺">
      <el-select v-model="form.shop_id" placeholder="请选择">
        <el-option
          v-for="(item, index) in shop_list"
          :key="index"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="高佣链接">
      <el-input v-model="form.link" placeholder="高佣链接"></el-input>
    </el-form-item>
    <!-- 封面图 -->
    <el-form-item label="商品图片">
      <el-upload
        :action="$axios.defaults.baseURL + 'Manager/upload_cover'"
        :show-file-list="false"
        :on-success="handleSuccess"
        :before-upload="beforeAvatarUpload"
        :data="{ check_type: this.$route.query.type }"
      >
        <img v-if="form.thumb" :src="$fixImgUrl(form.thumb)" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="商品轮播图">
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
    <el-form-item label="所属类目">
      <el-checkbox-group v-model="form.categories">
        <el-checkbox
          v-for="(item, index) in categoryList"
          :key="index"
          :label="item.id"
          >{{ item.name }}</el-checkbox
        >
      </el-checkbox-group>
    </el-form-item>
    <div class="goods_data">
      <el-form-item label-width="0">
        <el-col :span="5">
          <el-form-item label="直播价格">
            <!--  <el-input v-model="form.price"
                    type="number"></el-input> -->
            <el-input
              v-model="form.price"
              :controls="false"
              :min="1"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="总销量">
            <el-input
              v-model="form.sales"
              :controls="false"
              :min="1"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="活动佣金">
            <el-input
              v-model="form.commission"
              :controls="false"
              :min="1"
            ></el-input>
            <div>%</div>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="公开佣金">
            <el-input
              v-model="form.commission_public"
              :controls="false"
              :min="1"
            ></el-input>
            <div>%</div>
          </el-form-item>
        </el-col>
      </el-form-item>
    </div>
    <div class="goods_data">
      <el-form-item label-width="0">
        <el-col :span="8">
          <el-form-item label="带货达人数">
            <el-input v-model="form.talent"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
    </div>
    <div class="goods_data">
      <el-form-item label-width="0">
        <el-col :span="8">
          <el-form-item label="总库存">
            <el-input v-model="form.now_count"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
    </div>

    <div class="goods_data">
      <el-form-item label-width="0">
        <el-col :span="8">
          <el-form-item label="评价数">
            <el-input v-model="form.comment_count"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
    </div>
    <el-form-item label="直播利益点">
      <el-input
        type="textarea"
        v-model="form.interest_point"
        placeholder="直播利益点"
      ></el-input>
    </el-form-item>
    <el-form-item label="商品卖点">
      <el-input
        type="textarea"
        v-model="form.selling_point"
        placeholder="商品卖点"
      ></el-input>
    </el-form-item>
    <el-form-item label="标签选项">
      <el-checkbox-group v-model="form.goods_tag">
        <el-checkbox
          v-for="(item, index) in goods_tagList"
          :key="index"
          :label="item.id"
        >
          {{ item.name }}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <div class="title">单品数据分析</div>

    <el-form-item>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="30天浏览量(W)">
          <el-input
            type="number"
            maxlength="3"
            v-model="form.month_views"
            placeholder="0"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="30天销量(W)">
          <el-input
            v-model="form.month_sales"
            type="number"
            placeholder="0"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="30天转化率(%)">
          <el-input
            type="number"
            maxlength="3"
            v-model="form.month_conversion"
            placeholder="0"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="30天带货视频(个)">
          <el-input
            v-model="form.month_videos"
            type="number"
            placeholder="0"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="30天带货直播(个)">
          <el-input
            type="number"
            maxlength="3"
            v-model="form.month_live"
            placeholder="0"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="30天热推达人(个)">
          <el-input
            v-model="form.month_hot_talent"
            type="number"
            placeholder="0"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>

    <div class="title">营销转化(近7日)</div>

    <el-form-item>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="预估总销量(件)">
          <el-input
            type="number"
            maxlength="3"
            v-model="form.estimate_sales"
            placeholder="0"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="预估直播销量(件)">
          <el-input
            v-model="form.estimate_live_sales"
            type="number"
            placeholder="0"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="预估视频销量(件)">
          <el-input
            type="number"
            maxlength="3"
            v-model="form.estimate_video_sales"
            placeholder="0"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="预估总销售额(W)">
          <el-input
            v-model="form.estimate_amount"
            type="number"
            placeholder="0.00"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="预估直播销售额(W)">
          <el-input
            type="number"
            maxlength="3"
            v-model="form.estimate_live_amount"
            placeholder="0.00"
          >
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" class="dp_gailan">
        <el-form-item label="预估视频销售额(W)">
          <el-input
            v-model="form.estimate_video_amount"
            type="number"
            placeholder="0.00"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="产品热门视频">
      <el-upload
        :file-list="form.video"
        :action="$axios.defaults.baseURL + 'Manager/upload_video'"
        :on-success="handleSuccess_video"
        :on-remove="handleRemove_video"
        :before-upload="beforeAvatarUpload_video"
        :data="{ check_type: this.$route.query.type }"
      >
        <div class="toupload">点击上传+</div>
      </el-upload>
    </el-form-item>
    <div class="title">产品相关</div>
    <el-form-item label-width="0">
      <el-col :span="12">
        <el-form-item label="品牌名称">
          <el-input v-model="form.brand" placeholder="品牌名称"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="保质期">
          <el-input v-model="form.guarantee" placeholder="保质期"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="发货地点">
          <el-input v-model="form.address" placeholder="发货地点"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="净含量">
          <el-input v-model="form.net_content" placeholder="净含量"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="发货快递">
          <el-input v-model="form.express" placeholder="发货快递"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="出厂价">
          <el-input
            v-model="form.factory_price"
            :controls="false"
            :min="1"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="不发货区域">
          <el-input
            v-model="form.un_shipping_area"
            placeholder="不发货区域"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="生产日期">
          <el-input
            v-model="form.manufacture_time"
            placeholder="生产日期"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="发货速度">
          <el-input
            v-model="form.delivery_speed"
            placeholder="发货速度"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="活动时间">
          <el-input
            v-model="form.activity_time"
            placeholder="活动时间"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="寄样门槛">
          <el-input
            v-model="form.sending_threshold"
            placeholder="寄样门槛"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="包装方式">
          <el-input v-model="form.packing" placeholder="包装方式"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="成本购样">
          <el-input
            v-model="form.purchase_sample"
            placeholder="成本购样"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="产地">
          <el-input v-model="form.origin_address" placeholder="产地"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="历史最低价">
          <el-input
            v-model="form.historical_lowest_price"
            :controls="false"
            :min="1"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <div class="title">履约能力</div>
    <el-form-item label-width="0">
      <el-col :span="12">
        <el-form-item label="日产能">
          <el-input v-model="form.daily_energy" placeholder="日产能"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="质检报告">
          <el-input
            v-model="form.quality_inspection_report"
            placeholder="质检报告"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="日发货能力">
          <el-input
            v-model="form.daily_delivery_capacity"
            placeholder="日发货能力"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="产品资质">
          <el-input
            v-model="form.product_qualification"
            placeholder="产品资质"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="客服响应">
          <el-input
            v-model="form.customer_service"
            placeholder="客服响应"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="安检报告">
          <el-input
            v-model="form.security_inspection_report"
            placeholder="安检报告"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="运营配置">
          <el-input
            v-model="form.operation_configuration"
            placeholder="运营配置"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="商品详情">
      <vue-editor
        :useCustomImageHandler="true"
        @image-added="imgUpload"
        v-model="form.content"
      ></vue-editor>
    </el-form-item>
    <div class="bottom">
      <div @click="onSubmit" class="signbtn">提交审核</div>
    </div>
  </el-form>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      // 获取传递进来的商品id
      postId: this.$route.query.id ? this.$route.query.id : 0,
      form: {
        check_type: this.$route.query.type,
        title: "",
        shop_id: "",
        link: "",
        price: "0",
        sales: "0",
        commission: "0",
        commission_public: "0",
        talent: "0",
        interest_point: "",
        selling_point: "",
        brand: "",
        address: "",
        express: "",
        un_shipping_area: "",
        delivery_speed: "",
        sending_threshold: "",
        purchase_sample: "",
        guarantee: "",
        net_content: "",
        factory_price: "0",
        manufacture_time: "",
        activity_time: "",
        packing: "",
        origin_address: "",
        daily_energy: "",
        daily_delivery_capacity: "",
        customer_service: "",
        operation_configuration: "",
        quality_inspection_report: "",
        product_qualification: "",
        security_inspection_report: "",
        historical_lowest_price: "0",
        imgs: [],
        categories: [],
        goods_tag: [],
        content: "",
        thumb: "",
        video: [],
        comment_count: "0",
        now_count: "",
        month_views: "",
        month_videos: "",
        month_sales: "",
        month_live: "",
        month_conversion: "",
        month_hot_talent: "",
        estimate_sales: "",
        estimate_amount: "",
        estimate_live_sales: "",
        estimate_live_amount: "",
        estimate_video_sales: "",
        estimate_video_amount: "",
      },
      categoryList: [],
      goods_tagList:[
					{ id: "1",  name: '安心购'},
					{ id: "2",  name: '随心推'}
				],
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
      shop_list: [],
    };
  },
  mounted() {
    // 如果能够拿到 this.postId 证明我们是在编辑商品,
    // 使用 ajax 获取商品数据
    this.getCategory();
    this.getShopList();
    if (this.postId) {
      this.$axios({
        url: "Manager/goodsInfo",
        method: "get",
        params: {
          id: this.postId,
          check_type: this.$route.query.type,
        },
      }).then((res) => {
        if (res.data.status == 0) {
          const data = res.data.result;
          data.imgs.forEach((element, index) => {
            //请求过来的图片 赋值 给这个路径
            element.url = this.$fixImgUrl(element.url);
            element.uid = index;
          });
          data.content = data.content.replace(/div/g, "p");
          this.form = data;
        } else {
          this.$message.error(res.data.msg);
        }
      });
    }
  },
  methods: {
    getShopList() {
      this.$axios({
        url: "Manager/getShopIdList",
        method: "get",
        params: {
          check_type: this.$route.query.type,
        },
      }).then((res) => {
        if (res.data.status == 0) {
          this.shop_list = res.data.result;
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
    onSubmit() {
      var actions = "Manager/addGoods/";
      if (this.postId > 0) {
        actions = "Manager/updateGoods/";
        this.form.id = this.postId;
      }
      this.form.check_type = this.$route.query.type;
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
            path: "/manager_goods_list",
            query: {
              type: this.$route.query.type,
            },
          });
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    imgUpload(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);
      formData.append("check_type", this.$route.query.type);
      this.$axios({
        url: "Manager/upload_cover",
        method: "POST",
        data: formData,
      })
        .then((res) => {
          const data = res.data.result;
          let url = this.$axios.defaults.baseImgUrl + data;
          Editor.insertEmbed(cursorLocation, "image", url);
          // 有一个必须要做的就是重置上传组件
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleRemove(file, fileList) {
      this.form.thumb = "";
    },
    handleSuccess(res) {
      if (res.status == 0) {
        this.form.thumb = res.result;
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
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
  width: 150px;
  height: 150px;
  display: block;
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
.goods_data {
  /deep/.el-input__inner {
    width: 50px;
    padding: 0;
  }
  /deep/.el-form-item__content {
    display: flex;
  }
}
.title {
  margin: 10px 0;
}
/deep/.el-col {
  margin-bottom: 10px;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  .signbtn {
    background: #bbc3dd;
    padding: 4px 12px;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>