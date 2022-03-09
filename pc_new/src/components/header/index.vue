<template>
  <div class="header">
    <el-header>
      <div class="heider_top">
        <img src="@/assets/logo.png" class="logo" />
        <div class="navs" v-for="(item, index) in menus" :key="index">
          <div
            class="navs_item"
            @click="jump(item.router, item.id)"
            :class="nowPath == item.id ? 'actives' : ''"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="users">
          <!-- <div class="hezuo"
               @click="jump('/user')">个人中心</div> -->
          <!-- <div class="hezuo" @click="personalInfo = true">个人中心</div> -->
          <div class="hezuo" @click="centerDialogVisible = true">专属客服</div>
          <!-- <div class="hezuo"
               @click="jump('/admin')"
               v-if="user.id && user.type >2">
            商家中心
          </div> -->
          <div class="user_fenzu" style="margin-right: 1rem;" v-if="!vip_info">
            <img
              src="../../assets/user-icon.png"
              @click="$router.push('/user')"
			  style=" width: 100%;height: 30px;"
            />
          </div>
          <!-- 修改了此处 -->
          <div class="user_login" @click="dialogVisible = true" v-if="!user.id">
            登录 / 注册
          </div>
          <div class="user_login_over" v-else>
            <div class="user_fenzu" v-if="vip_info">
              <img
                v-if="vip_info.vip_name == '我是达人'"
                src="../../assets/user-icon.png"
                @click="$router.push('/user')"
              />
              <img
                v-if="vip_info.vip_name == '会员中心'"
                src="../../assets/user-icon.png"
                @click="$router.push('/user')"
              />
              <img
                v-if="vip_info.vip_name == '专业版'"
                src="../../assets/zhuanye-icon.png"
                @click="$router.push('/user')"
              />
              <img
                v-if="vip_info.vip_name == '旗舰版'"
                src="../../assets/qijian-icon.png"
                @click="$router.push('/user')"
              />
            </div>
            <el-popover placement="bottom" width="250" trigger="click">
              <el-row>
                <el-col>
                  <div class="info-box">
                    <div class="top">
                      <div class="image">
                        <img :src="user.avatarUrl" alt="" />
                      </div>
                      <div class="name">{{ user.nickName }}</div>
                    </div>
                    <div class="center">
                      <div class="left" v-if="vip_info">
                        <div class="type">
                          <img
                            style="width: 100px; height: 30px"
                            v-if="vip_info.vip_name == '我是达人'"
                            src="../../assets/user-icon.png"
                          />
                          <img
                            style="width: 100px; height: 30px"
                            v-if="vip_info.vip_name == '会员中心'"
                            src="../../assets/user-icon.png"
                          />
                          <img
                            style="width: 100px; height: 30px"
                            v-if="vip_info.vip_name == '专业版'"
                            src="../../assets/zhuanye-icon.png"
                          />
                          <img
                            style="width: 100px; height: 30px"
                            v-if="vip_info.vip_name == '旗舰版'"
                            src="../../assets/qijian-icon.png"
                          />
                        </div>
                        <div class="time">{{ vip_info.vip_over_time }}到期</div>
                      </div>
                      <div
                        class="right"
                        @click="centerDialogVisible = true"
                        v-if="vip_info"
                      >
                        <div>购买续费</div>
                      </div>
                    </div>
                    <div class="bottom">
                      <div
                        class="list"
                        @click="$router.push('/vippage')"
                        v-if="vip_info"
                      >
                        个人资料
                      </div>
                      <div
                        class="list"
                        @click="$router.push('/vippage')"
                        v-if="vip_info"
                      >
                        会员中心
                      </div>
                      <div class="list" @click="centerDialogVisible = true">
                        专属客服
                      </div>
                      <div class="list" @click="outLogin">退出登录</div>
                    </div>
                  </div>
                </el-col>
              </el-row>

              <el-button slot="reference">
                <img :src="user.avatarUrl" class="user_pic" />
              </el-button>
            </el-popover>
          </div>
        </div>
      </div>
    </el-header>

    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="logins">
        <wxlogin
          appid="wxa1289cc057f29906"
          :scope="'snsapi_login'"
          :theme="'black'"
          :redirect_uri="encodeURIComponent('https://jjjdada.com/main')"
          :href="'data:text/css;base64,LmxvZ2luX3BpY3N7CiAgICAgIHdpZHRoOiA0MDBycHg7CiAgICAgIGhlaWdodDogNDAwcnB4OwogIH0='"
          rel="external nofollow"
        >
        </wxlogin>
      </div>
      <div class="logins">
        <img src="@/assets/saoyisao.png" class="login_icon" />
        打开微信扫一扫，立即注册或登录
      </div>
    </el-dialog>
    <!-- 手机验证 -->
    <el-dialog
      title=""
      :visible.sync="phoneVisible"
      width="26%"
      :before-close="handleClose"
    >
      <div class="phones">
        <img src="../../assets/person/logo.png" alt="" />
        <div>绑定手机</div>
        <el-input v-model="userphone" placeholder="请输入手机号"></el-input>
        <div class="code">
          <el-input v-model="phonecode" placeholder="请输入验证码"></el-input>
          <div @click="sendCode">{{ content }}</div>
        </div>
        <div class="subbtn" @click="gomain">确定</div>
      </div>
    </el-dialog>
    <!-- 新用户验证 -->
    <el-dialog
      title=""
      :visible.sync="newUser"
      width="20%"
      :before-close="handleClose"
    >
      <div class="userinfo">
        <img src="../../assets/person/logo.png" alt="" />
        <div>
          <div>昵称</div>
          <div>{{ user.nickName }}</div>
        </div>
        <div>
          <div>身份</div>
          <div>
            <div
              v-for="item in useridlist"
              :key="item.id"
              :class="[item.isSelect ? 'isSelect' : '']"
              @click="changUser(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="subbtn" @click="userbtn">完成</div>
      </div>
    </el-dialog>
    <el-dialog
      title=""
      :visible.sync="centerDialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="logins">
        <img src="@/assets/kefu_wechat.png" class="login_pics" />
      </div>
      <div class="logins">
        <img src="@/assets/saoyisao.png" class="login_icon" />
        打开微信扫一扫，添加客服微信
      </div>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisiblems"
      width="30%"
      center
    >
      <span>攻城狮正在撸起袖子加油干~</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisiblems = false"
          >朕知道了</el-button
        >
      </span>
    </el-dialog>
    <!-- <el-dialog title=""
               custom-class="person-info"
               :visible.sync="personalInfo"
               width="24%"
               center>
      <div class="info-box">
        <div class="top">
          <div class="image"></div>
          <div class="name">你说的对</div>
        </div>
        <div class="center">
          <div class="left">
            <div class="type">普通会员</div>
            <div class="time">2022.01.01到期</div>
          </div>
          <div class="right">
            <el-button>购买续费</el-button>
          </div>
        </div>
        <div class="bottom">
          <div class="list">个人资料</div>
          <div class="list">我的店铺</div>
          <div class="list">会员中心</div>
          <div class="list">我的达人</div>
          <div class="list">专属客服</div>
          <div class="list">合作工作台</div>
          <div class="list">退出登录</div>
        </div>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
import wxlogin from "vue-wxlogin";
import {
  Login,
  GetUserInfo,
  isMobile,
  getVipInfo,
  sendEms,
  bindMobile,
  userCheckUserType,
} from "@/utils/request.js";
import { log } from "util";
export default {
  components: {
    wxlogin,
  },
  data() {
    return {
      menus: [
        {
          title: "首页",
          router: "/main",
          id: 0,
        },
        {
          title: "商家库",
          router: "/shop_list",
          id: 1,
        },
        {
          title: "选品库",
          router: "/selection",
          id: 3,
        },
        {
          title: "达人库",
          router: "/person_list",
          id: 2,
        },
        {
          title: "鲸贴",
          router: "/jingtie",
          id: 4,
        },
        {
          title: "商家工作台",
          router: "/myshop",
          id: 5,
        },
        {
          title: "带货助手",
          router: "/cargo_assistant",
          id: 6,
        },
      ],
      user: "",
      centerDialogVisible: false,
      dialogVisible: false,
      phoneVisible: false,
      centerDialogVisiblems: false,
      nowPath: 0,
      personalInfo: false,
      phonecode: "",
      userphone: "",
      // 用户验证
      newUser: false,
      vip_info: "",
      useridlist: [
        {
          id: 1,
          name: "达人",
          isSelect: true,
        },
        {
          id: 2,
          name: "商家",
          isSelect: false,
        },
      ],
      userId: 1,
      //验证码
      canClick: true,
      content: "获取验证码",
      totalTime: 180, //验证码时间
    };
  },
  mounted() {
    if (this.$route.query.code) {
      //登录
      let data = {
        code: this.$route.query.code,
      };
      let that = this;
      Login(data).then((res) => {
        if (res.status == 0) {
          localStorage.setItem("token", res.result.users_token);
          //登陆成功后获取用户基础信息
          GetUserInfo({
            token: res.result.users_token,
          }).then((events) => {
            if (events.status == 0) {
              let userInfo = events.result;
              localStorage.setItem("user", JSON.stringify(userInfo));
              that.user = userInfo;
              //请求是否绑定手机号码
              isMobile({
                token: res.result.users_token,
              }).then((ress) => {
                if (ress.status == 0) {
                  if (ress.result == false) {
                    that.phoneVisible = true;
                  }
                }
              });
              //获取商家会员信息
              getVipInfo({
                token: res.result.users_token,
              }).then((vips) => {
                if (vips.status == 0) {
                  that.vip_info = vips.result;
                  localStorage.setItem("vip_info", JSON.stringify(vips.result));
                }
              });
            }
          });

          this.$router.push("/main");
        } else {
          this.$message.error("登陆失败，请联系管理员~");
        }
      });
    } else {
      if (this.$route.path != "/") {
        this.jump(this.$route.path);
      } else {
        this.jump("/main");
      }
      let that = this;
      if (
        JSON.parse(localStorage.getItem("user")) ||
        localStorage.getItem("token")
      ) {
        //请求是否绑定手机号码
        isMobile({
          token: localStorage.getItem("token"),
        }).then((ress) => {
          if (ress.status == 0) {
            if (ress.result == false) {
              that.phoneVisible = true;
            }
          }
        });
        //获取商家会员信息
        getVipInfo({
          token: localStorage.getItem("token"),
        }).then((vips) => {
          if (vips.status == 0) {
            that.vip_info = vips.result;
            localStorage.setItem("vip_info", JSON.stringify(vips.result));
          }
        });
        that.user = JSON.parse(localStorage.getItem("user"));
      }
    }
  },
  methods: {
    outLogin: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("vip_info");
      this.user = "";
      this.vip_info = "";
    },
    handleClose(done) {
      done();
    },
    jump(path, index) {
      this.nowPath = index;
      var menus = this.menus;
      for (var io = 0; io < menus.length; io++) {
        if (menus[io].router == path) {
          this.nowPath = menus[io].id;
        }
      }
      //this.nowPath = index;
      // if (path == "/jingtie") {
      //   this.centerDialogVisiblems = true;
      //   this.nowPath = index;
      // } else
      if (path != this.$route.path) {
        // 更改的
        if (index == 5 && !localStorage.getItem("token")) {
          this.$message.error("你还没有登录~");
          return false;
        } else if (index == 6 && !localStorage.getItem("token")) {
          this.$message.error("你还没有登录~");
          return false;
        }
        // this.Index = path;
        //this.nowPath = index;
        console.log(this.nowPath);
        this.$router.push(path);
      }
    },
    // 手机绑定
    gomain() {
      if (!this.userphone || !this.phonecode) {
        this.$message.error("手机号码和验证码不能为空~");
        return false;
      }

      bindMobile({
        token: localStorage.getItem("token"),
        mobile: this.userphone,
        code: this.phonecode,
      }).then((vips) => {
        if (vips.status == 0) {
          this.$message.success("绑定成功");
          this.phoneVisible = false;
          //验证(如是新用户就弹出身份界面，不是就去主页)
          if (this.user.type == 1) {
            this.newUser = true;
          }
        } else {
          this.$message.error(vips.msg);
          return false;
        }
      });
    },
    // 发送验证码
    sendCode() {
      //获取手机号
      if (!this.userphone) {
        this.$message.error("请输入手机号码~");
        return false;
      }
      sendEms({
        token: localStorage.getItem("token"),
        mobile: this.userphone,
      }).then((codes) => {
        if (codes.status == 0) {
          this.$message.success("验证码发送成功");
          if (!this.canClick) return;
          this.canClick = false;
          this.content = this.totalTime + "s";
          let clock = window.setInterval(() => {
            this.totalTime--;
            this.content = this.totalTime + "s";
            if (this.totalTime < 0) {
              window.clearInterval(clock);
              this.content = "重新发送验证码";
              this.totalTime = 180; //验证码时间
              this.canClick = true; //这里重新开启
            }
          }, 1000);
        } else {
          this.$message.error(codes.msg);
          return false;
        }
      });
    },
    //身份选择
    changUser(item) {
      this.useridlist.map((v) =>
        v.id == item.id ? (v.isSelect = true) : (v.isSelect = false)
      );
      this.userId = item.id;
    },
    userbtn() {
      userCheckUserType({
        token: localStorage.getItem("token"),
        type: this.userId,
      }).then((Utypes) => {
        if (Utypes.status == 0) {
          this.newUser = false;
        } else {
          this.$message.error(Utypes.msg);
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.wrapper {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}

.el-header {
  width: 100%;
  height: 70px !important;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}

.heider_top {
  width: 80%;
  max-height: 70px;
  margin: 0 auto;
  min-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #606266;
  // padding: 0 3rem;
  font-size: 0.8rem;
}

.logo {
  height: 70px;
  cursor: pointer;
}

.navs {
  // height: 70px;
  display: flex;
}

.navs_item {
  //margin: 0 1.5rem;

  line-height: 70px;
  cursor: pointer;
}

.navs_item:hover {
  color: #007aff;
}

.users {
  display: flex;
  align-items: center;
  min-width: 200px;
  max-height: 70px;
}

.hezuo {
  line-height: 70px;
  margin-right: 1rem;
  cursor: pointer;
}

.hezuo:hover {
  color: #007aff;
}

.user_login {
  cursor: pointer;
  border-radius: 30px;
  height: 35px;
  width: 90px;
  text-align: center;
  line-height: 35px;
  border: 1px solid #007aff;
}

.user_login:hover {
  color: #fff;
  background-color: #007aff;
}

.user_login_over {
  display: flex;
  cursor: pointer;
  .user_fenzu {
    width: 100px;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0px 15px;
    img {
      width: 100%;
      height: 30px;
    }
  }
  > div:nth-of-type(1) {
    margin-right: 10px;
  }
}

.user_pic {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.logins {
  text-align: center;
  margin: 20px auto;
}

.phones {
  text-align: center;
  margin: 20px auto;

  > img {
    width: 120px;
    height: 120px;
  }

  /deep/.el-input__inner {
    border: none;
    border-bottom: 1px solid #ccc;
  }

  .code {
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;

    /deep/.el-input__inner {
      width: 150px;
    }

    /deep/.el-input {
      width: 150px;
    }

    > div:nth-of-type(2) {
      cursor: pointer;
      margin-right: 40px;
    }
  }

  .subbtn {
    margin-top: 60px;
    color: #fff;
    background: #87aee0;
    line-height: 32px;
    cursor: pointer;
  }
}

.login_pics {
  width: 400rpx;
  height: 400rpx;
}

.login_icon {
  width: 20px;
  vertical-align: sub;
}

.el-container {
  width: 100%;
  min-width: 800px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.el-main {
  //height: 500px;
  overflow: hidden;
  //margin-bottom: 250px;
}

// .el-footer {
//   height: 250px !important;
//   // position: fixed;
//   // bottom: 0;
//   // left: 0;
//   padding: 0;
//   margin: 0;
// }
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

.actives {
  color: #007aff;
  border-bottom: 4px solid #007aff;
  font-size: 16px;
}

button::after {
  border: none;
  padding: 0;
}

button {
  border: none;
  padding: 0;
}

.info-box {
  padding: 10px;
  border-radius: 8px;
  // width: 200px;

  .top {
    display: flex;
    align-items: center;
    padding: 10px 0px;
    .image {
      margin-right: 40px;

      > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
  }

  .center {
    display: flex;
    // align-items: center;
    flex-direction: column;
    padding: 5px 0px;
    .left {
      .type,
      .time {
        padding: 5px 0px;
      }
    }

    .right {
      width: 70px;
      text-align: center;
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
      padding: 5px 0px;
    }
  }
}

.userinfo {
  text-align: center;
  margin: 20px auto;

  > img {
    width: 120px;
    height: 120px;
    border: 1px solid #4b70a8;
    border-radius: 50%;
    margin-bottom: 40px;
  }

  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #4b70a8;
  }

  > div:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    > div:nth-of-type(2) {
      display: flex;

      > div {
        cursor: pointer;
        padding: 2px 6px;
      }

      > div:not(:last-child) {
        margin-right: 10px;
      }

      .isSelect {
        background: #87aee0;
      }
    }
  }

  .subbtn {
    background: #87aee0;
    color: #fff;
    line-height: 30px;
    margin-top: 60px;
    cursor: pointer;
  }
}
</style>
