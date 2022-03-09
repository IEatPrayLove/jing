<template>
  <div class="mains">
    <div class="bgs">
      <img src="../assets/hezuo.png"
           class="bg" />
      <div class="hezuo_btn"
           @click="dialogVisible = true"></div>
    </div>
    <div class="footer-div">
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple footer_logos">
            <img src="../assets/logo.png"
                 class="footer_logo" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light footer_content">
            <div>联系我们</div>
            <div>电话：138 8888 8888</div>
            <div>地址：四川省成都市合生汇</div>
            <div>晋ICP备18000958号-4</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple route_img">
            <div>小程序</div>
            <img src="@/assets/wechat_route.jpg"
                 class="route_pic" />
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title=""
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <div class="logins">
        <img src="@/assets/kefu_wechat.png"
             class="login_pics" />
      </div>
      <div class="logins">
        <img src="../assets/saoyisao.png"
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
      dialogVisible: false,
    };
  },
  mounted () { },
  methods: {
    handleClose (done) {
      done();
    },
  },
};
</script>

<style lang='less' scoped>
.mains {
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
}
.bgs {
  position: relative;
}
.bg {
  width: 100%;
}
.hezuo_btn {
  width: 300px;
  height: 120px;
  position: absolute;
  top: 10%;
  left: 41%;
  cursor: pointer;
}
.footer-div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 250px;
  background: #26272a;
  position: absolute;
  bottom: 0;
}
.footer_logos {
  text-align: right;
  margin-right: 150px;
}
.footer_logo {
  width: 100px;
  height: 100px;
  margin-top: 100px;
}
.footer_content {
  text-align: left;
  color: #fff;
  height: 200px;
  margin-top: 75px;
  line-height: 30px;
}
.route_img {
  text-align: left;
  height: 150px;
  margin-top: 50px;
  color: #fff;
}
.route_pic {
  margin-top: 20px;
  widows: 100px;
  height: 100px;
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