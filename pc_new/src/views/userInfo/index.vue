<template>
  <div class="info-box">
    <div>
      <div class="top">
        <div class="image">
          <img src="../../assets/person/logo.png"
               alt="">
        </div>
        <div class="name">你说的对</div>
      </div>
      <div class="center">
        <div class="left">
          <div class="type">普通会员</div>
          <div class="time">2022.01.01到期</div>
        </div>
        <div class="right">
          <div>购买续费</div>
        </div>
      </div>
      <div class="bottom">
        <div class="list">个人资料</div>
        <div class="list">会员中心</div>
        <div class="list">专属客服</div>
        <div class="list">退出登录</div>
      </div>
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
  computed: {
    usrInfo () {
      return JSON.parse(localStorage.user)
    }
  }
}
</script>

<style lang="less" scoped>
.info-box {
  width: 60%;
  margin: 20px auto;
  line-height: 1.8;
  > div {
    padding: 10px;
    border-radius: 8px;
    border: 3px solid #ccc;
    width: 200px;
    .top {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .image {
        margin-right: 40px;
        > img {
          width: 40px;
          height: 40px;
          border: 1px solid #4b70a8;
          border-radius: 50%;
        }
      }
    }
    .center {
      display: flex;
      align-items: center;
      .left {
        > div:nth-of-type(1) {
          margin-bottom: 10px;
        }
      }
      .right {
        margin-left: 18px;
        > div {
          padding: 4px 6px;
          background: #87aee0;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .bottom {
      line-height: 2;
      margin-top: 10px;
      .list {
        cursor: pointer;
      }
    }
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