<template>
  <div class="add">
    <div>
      <div>
        <div class="input-item">
          <div>头像：</div>
          <el-upload
            :action="$axios.defaults.baseURL + 'User/upload_cover'"
            :show-file-list="false"
            :on-success="handleSuccess"
            :before-upload="beforeAvatarUpload"
            :data="{ token: token }"
          >
            <img v-if="form.pic" :src="$fixImgUrl(form.pic)" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="input-item">
          <div>抖音号名称：</div>
          <el-input v-model="form.name"></el-input>
        </div>
        <div class="input-item">
          <div>账号ID：</div>
          <el-input v-model="form.douyin"></el-input>
        </div>
        <div class="input-item">
          <div>带货类型：</div>
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="(item, index) in type_list"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="input-item">
          <div>带货类目：</div>
          <el-checkbox-group v-model="form.category" :min="1" :max="3" style="width: 90%;">
            <el-checkbox
              v-for="(item, index) in categoryList"
              :key="index"
              :label="item.id"
              >{{ item.name }}</el-checkbox
            >
          </el-checkbox-group>
        </div>
        <div class="input-item">
          <div>达人主页链接：</div>
          <el-input v-model="form.douyin_link"></el-input>
        </div>
        <div class="input-item">
          <div>粉丝数：</div>
          <el-input v-model="form.fans"></el-input>
        </div>
        <div class="input-item">
          <div>场均销售额:</div>
          <el-input v-model="form.sales"></el-input>
        </div>
        <div class="input-item">
          <div>平均在线人数:</div>
          <el-input v-model="form.line_people"></el-input>
        </div>
        <div class="input-item">
          <div>平均停留时长:</div>
          <el-input v-model="form.line_time"></el-input>
        </div>
        <div class="input-item">
          <div>30日直播销售额:</div>
          <el-input v-model="form.month_sales"></el-input>
        </div>
        <div class="input-item">
          <div>分钟带货产出:</div>
          <el-input v-model="form.minute_sales"></el-input>
        </div>
        <div class="input-item">
          <div>收件人：</div>
          <el-input v-model="form.call_user"></el-input>
        </div>
        <div class="input-item">
          <div>微信：</div>
          <el-input v-model="form.wechat"></el-input>
        </div>
        <div class="input-item">
          <div>电话：</div>
          <el-input v-model="form.phone"></el-input>
        </div>
        <div class="input-item">
          <div>寄样收货地址：</div>
          <el-input v-model="form.address"></el-input>
        </div>
      </div>
    </div>
    <div>
      <div @click="submitbtn">提交审核</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    talenid: {
      type: String,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      categoryList: [],
      type_list: [
        {
          id: "1",
          name: "短视频",
        },
        {
          id: "2",
          name: "直播",
        },
        {
          id: "3",
          name: "mcn",
        },
        {
          id: "4",
          name: "团长",
        },
      ],
      form: {
        id:0,
        token: localStorage.getItem("token"),
        pic: "",
        name: "",
        douyin: "",
        type: "",
        category: [],
        douyin_link: "",
        fans: "",
        sales: "",
        line_people: "",
        line_time: "",
        month_sales: "",
        minute_sales:"",
        call_user:"",
        wechat:"",
        phone:"",
        address:""
      },
    };
  },
  created() {
    this.form = {
        id:0,
        token: localStorage.getItem("token"),
        pic: "",
        name: "",
        douyin: "",
        type: "",
        category: [],
        douyin_link: "",
        fans: "",
        sales: "",
        line_people: "",
        line_time: "",
        month_sales: "",
        minute_sales:"",
        call_user:"",
        wechat:"",
        phone:"",
        address:""
      }
    this.getCategory();
    if (this.talenid > 0) {
      this.getInfo(this.talenid);
    }
  },
  methods: {
    getInfo(id) {
      this.$axios({
        url: "Assistant/info",
        method: "get",
        params: {
          token: this.token,
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
    submitbtn() {
     var actions = "Assistant/add/";
      if (this.talenid > 0) {
        this.form.id=this.talenid
        actions = "Assistant/update/";
      }
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
          this.$emit('click')
        } else {
          this.$message.error(res.data.msg);
          return false
        }
      });
    },
    handleSuccess(res) {
      if (res.status == 0) {
        this.form.pic = res.result;
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg"  || file.type === 'image/png';;
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
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
.add {
  .input-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    /deep/.el-input {
      width: 260px;
    }
    > div:nth-of-type(1) {
      width: 120px;
      text-align: right;
    }
  }
  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    > div:nth-of-type(2) {
      margin-right: 28px;
      margin-top: 10px;
      cursor: pointer;
      color: #4b70a8;
    }
  }
  > div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    > div {
      padding: 4px 6px;
      background: #4b70a8;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }
  }
}
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
</style>