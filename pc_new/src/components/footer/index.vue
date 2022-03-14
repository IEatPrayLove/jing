<template>
  <el-footer>
    <div class="footer-div">
      <el-row class="index_footrt">
        <!-- <el-col :span="4">
          <div class="grid-content bg-purple footer_logos">
            <img src="@/assets/home/logo.png"
                 class="footer_logo" />
          </div>
        </el-col> -->
        <el-col :span="4">
          <div class="item grid-content bg-purple-light footer_content">
            <div>关于我们</div>
            <div class="gray">投诉建议</div>
            <div class="gray">使用协议</div>
            <div class="gray">免责声明</div>
            <div class="gray">信息发布规则</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item grid-content bg-purple-light footer_content">
            <div>产品服务</div>
            <div class="gray">会员中心</div>
            <div class="gray">带货助手</div>
            <div class="gray">鲸贴活动</div>
            <div class="gray">商家工作台</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item grid-content bg-purple-light footer_content">
            <div>合作咨询</div>
            <div class="gray">商务合作：17138231888</div>
            <div class="gray">客服微信：jingzhi711</div>
            <div class="gray">产品经理：18100828051</div>
            <div class="gray">(工作时间：09:00-22:00)</div>
          </div>
        </el-col>
        <el-col :span="4"
                style="text-algin: center">
          <div class="grid-content bg-purple route_img">
            <div>微信小程序</div>
            <img src="@/assets/wechat_route.jpg"
                 class="route_pic" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple route_img">
            <div>商务合作</div>
            <img src="@/assets/kefu_wechat.png"
                 class="route_pic" />
          </div>
        </el-col>
      </el-row>
      <div style="
            height: 1px;
            background-color: #fff;
            width: 100%;
            margin: 0 auto;
          "></div>
      <el-row class="index_footrt index_footrts">
        <el-col :span="24">蜀ICP备2021032021号 | 鲸大大-成都鲸至电子商务有限公司 2018-2022 All Rights Reserved.</el-col>
      </el-row>
    </div>
  </el-footer>
</template>
<script>

export default {

};
</script>
<style lang="less" scoped>
.el-footer {
	height: auto !important;
	padding: 0;
	overflow: hidden;
	margin: 0;
	background-color: #26272a;
}

.footer-div {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}
.index_footrt {
  // background: #26272a;
  // height: 220px;
  // width: 50%;
  // margin: 0 auto;
  // min-width: 800px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.index_footrts {
  // height: 100px;
  // color: #fff;
  height: 70px;
  color: #fff;
  text-align: center;
  line-height: 70px;
}
.item {
  > div:nth-of-type(1) {
    font-size: 16px;
  }
}
.footer_logos {
  text-align: right;
  margin-right: 50px;
}
.footer_logo {
  width: 100px;
  height: 100px;
  margin-top: 70px;
}
.footer_content {
  text-align: left;
  color: #fff;
  height: 200px;
  margin-top: 75px;
  line-height: 30px;
}
.route_img {
  text-align: center;
  height: 150px;
  margin-top: 50px;
  color: #fff;
}
.route_pic {
  margin-top: 20px;
  widows: 100px;
  height: 100px;
}
.gray{
  color: #999;
}
</style>