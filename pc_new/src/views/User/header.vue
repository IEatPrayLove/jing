<template>
  <div class="banner">
    <div class="contain">
      <div class="title">鲸大大—内容电商数据分析商业工具</div>
      <div class="little-title">助力商家轻松自建达人矩阵</div>
      <el-button @click="centerDialogVisible = true">咨询客服</el-button>
    </div>
    <el-dialog title=""
               :visible.sync="centerDialogVisible"
               width="30%"
               :before-close="handleClose">
      <div class="logins">
        <img src="@/assets/kefu_wechat.png"
             class="login_pics" />
      </div>
      <div class="logins">
        <img src="@/assets/saoyisao.png"
             class="login_icon" />
        打开微信扫一扫，添加客服微信
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
data () {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      done();
    },
  }
}
</script>
<style lang="less">
.banner {
  width: 100%;
  height: 320px;
  background: url("../../assets/banner.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  .contain {
    width: 60%;
    margin: 0 auto;
    position: relative;
    top: 64px;
  }
  .title {
    font-size: 38px;
    height: 38px;
  }
  .little-title {
    font-size: 16px;
	font-weight: 600;
    margin: 24px 0;
  }
  .el-button {
    line-height: 32px;
    padding: 1.6px !important;
    font-size: 16px;
    border-radius: 8px;
    margin-left: 64px;
    width: 160px;
    background: linear-gradient(94.61deg, #ebc08f -0.89%, #fbdab7 101.28%);
    border: 1px solid #ebc08f;
  }
}
.logins {
  text-align: center;
  margin: 20px auto;
}
.login_pics {
  width: 200px;
  height: 200px;
}
.login_icon {
  width: 20px;
  vertical-align: sub;
}
</style>