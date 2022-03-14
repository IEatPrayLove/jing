<template>
  <div class="users">
    <div class="user_info">
      <div class="user_infos">昵称:{{ user.nickName }}</div>
      <div class="user_infos">
        头像：<img :src="user.avatarUrl"
             class="user_pic" />
      </div>
    </div>
    <div class="user_info">
      <div class="user_infos">
        当前等级：<span class="vip_desc">{{ user.vip_info.grade }}</span>
      </div>
      <div class="user_infos">
        会员有效期：{{ user.vip_info.vip_over_time }}
        <span class="vip_buy"
              @click="dialogVisible = true">续费/升级</span>
      </div>
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
      user: JSON.parse(localStorage.getItem("user")),
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
<style lang="less" scoped>
.users {
  background-color: #fff;
  padding: 20px;
}
.user_info {
  display: flex;
  margin: 20px 0;
}
.user_infos {
  width: 50%;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
}
.user_pic {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  vertical-align: middle;
}
.vip_desc {
  color: #f56c6c;
}
.vip_buy {
  color: #e6a23c;
  cursor: pointer;
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