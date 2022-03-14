<template>
  <div class="vip">
    <div class="left">
      <div class="list">
        <div
          v-for="item in navlist"
          :class="[item.isSelect ? 'isSelect' : '']"
          :key="item.id"
          @click="checkNav(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="right">
      <div class="userinfo">
        <h-card>
          <div>
            <div class="top">
              <div>
                <div><img :src="user.avatarUrl" alt="" /></div>
                <div>{{ user.nickName }}</div>
              </div>
              <!-- <div>修改</div> -->
            </div>
            <div class="vipdate">
              <div>
                <div class="user_fenzu">
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
                <div>{{ vip_info.vip_over_time }}到期</div>
              </div>
              <div @click="centerDialogVisible = true">购买续费</div>
            </div>
          </div>
        </h-card>
      </div>
      <div class="checkbox">
        <h-card>
          <!-- <div class="user"
               v-if="navId == 0">
            <div v-for="item in infolist"
                 :key="item">
              <div>
                <div>{{item.name}}</div>
                <div>换绑</div>
              </div>
              <div>{{item.info}}</div>
            </div>
          </div> -->
          <div class="mrorder" v-if="navId == 1">
            <div>我的订单</div>
            <div @click="centerDialogVisible = true">开具发票</div>
          </div>
        </h-card>
      </div>
    </div>
    <el-dialog
      title=""
      :visible.sync="centerDialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="logins">
        <img
          src="@/assets/kefu_wechat.png"
          class="login_pics"
        />
      </div>
      <div class="logins">
        <img src="@/assets/saoyisao.png" class="login_icon" />
        打开微信扫一扫，添加客服微信
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { GetUserInfo, getVipInfo } from "@/utils/request.js";
export default {
  data() {
    return {
      centerDialogVisible: false,
      navlist: [
        {
          id: 0,
          name: "个人资料",
          isSelect: true,
        },
        {
          id: 1,
          name: "会员中心",
          isSelect: false,
        },
      ],
      infolist: [
        {
          id: 0,
          name: "绑定手机号",
          info: "12345678900",
        },
        {
          id: 0,
          name: "绑定微信号",
          info: "12345678900",
        },
      ],
      navId: 0,
      vip_info: "",
      user: "",
    };
  },
  mounted() {
    let that = this;
    GetUserInfo({
      token: localStorage.getItem("token"),
    }).then((events) => {
      if (events.status == 0) {
        let userInfo = events.result;
        localStorage.setItem("user", JSON.stringify(userInfo));
        that.user = userInfo;
        //获取商家会员信息
        getVipInfo({
          token: localStorage.getItem("token"),
        }).then((vips) => {
          if (vips.status == 0) {
            that.vip_info = vips.result;
          }
        });
      }
    });
  },
  methods: {
    checkNav(item) {
      this.navlist.forEach((item2) => {
        item2.isSelect = false;
      });
      item.isSelect = true;
      this.navId = item.id;
    },
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang="less" scoped>
.vip {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  .left {
    width: 120px !important;
    padding: 20px 0px;
    border-radius: 5px;
    background: #fff;
    min-height: 600px;
    .list {
      display: flex;
      flex-direction: column;
      line-height: 5;
      font-size: 16px;
      text-align: center;
      > div {
        cursor: pointer;
      }

      .isSelect {
        color: #4b70a8;
      }
    }
  }

  .right {
    flex: 1;
    margin-left: 18px;

    .userinfo {
      /deep/.h-card-bottom {
        > div {
          padding: 10px;
          background: rgba(229, 229, 229, 0.8);
          border-radius: 10px;
        }

        .top {
          display: flex;
          align-items: center;
          margin-bottom: 40px;

          > div:nth-of-type(1) {
            display: flex;
            align-items: center;

            img {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              margin-right: 40px;
            }
          }

          > div:nth-of-type(2) {
            color: #4b70a8;
            cursor: pointer;
            margin-left: 60px;
          }
        }

        .vipdate {
          display: flex;
          align-items: center;
          position: relative;
          .user_fenzu {
            width: 100px;
            height: 30px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          > div:nth-of-type(1) {
            line-height: 2;
          }

          > div:nth-of-type(2) {
            margin-left: 60px;
            width: 100px;
            padding: 2px 6px;
            background: #87aee0;
            border-radius: 4px;
            font-size: 20px;
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }

    .checkbox {
      /deep/.h-card-bottom {
        min-height: 300px;
        padding: 60px;

        .user {
          display: flex;

          > div {
            line-height: 2;
            margin-right: 140px;

            > div:nth-of-type(1) {
              display: flex;

              > div:nth-of-type(2) {
                cursor: pointer;
                margin-left: 40px;
                color: #4b70a8;
              }
            }
          }
        }

        .mrorder {
          > div:nth-of-type(2) {
            width: 120px;
            padding: 2px 6px;
            background: #87aee0;
            border-radius: 4px;
            cursor: pointer;
            text-align: center;
            font-size: 20px;
            margin-top: 20px;
          }
        }
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
