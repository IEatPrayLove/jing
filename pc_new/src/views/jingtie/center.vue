<template>
  <div class="center1">
    <img src="@/assets/allowanc/resource.png" class="boo_images" alt="" />
    <div class="content" v-for="(item, index) in list" :key="index">
      <div class="box">
        <div class="top">
          <div class="left">
            <img
              :src="item.thumb"
              width="100%"
              height="100%"
              style="border-radius: 0.1rem"
            />
          </div>
          <div class="right">
            <div class="title">
              <img
                src="https://media-public.canva.cn/_Z_zQ/MAEuAh_Z_zQ/2/t.png"
                alt=""
                class="image"
              />
              <span style="padding-left: 10px">{{ item.title }}</span>
              <img
                v-if="item.goods_url"
                v-clipboard:copy="item.goods_url"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                src="@/assets/copy.png"
                style="margin-left: 10px; cursor: pointer"
              />
            </div>
            <div class="attribute">
              <div>直播价</div>
              <div>佣金</div>
              <div>公开</div>
            </div>
            <div class="attribute">
              <div class="number">{{ item.price }}</div>
              <div class="number">{{ item.commission }}%</div>
              <div>{{ item.commission_public }}%</div>
            </div>
            <div class="time">
              活动时间：{{ item.activity_time_start }}~{{
                item.activity_time_end
              }}
            </div>
            <div class="target">
              <div class="number">
                标的名额：{{ item.activity_objectives }}名
              </div>
              <div class="money">
                瓜分奖金池：<span style="color: red">{{ item.prize_pool }}</span
                >元
              </div>
            </div>
            <div class="target">核销奖励：{{ item.reward }}</div>
          </div>
        </div>
        <div class="center">
          <div
            class="content1"
            v-bind:style="{ width: item.ok_point + '%' }"
          ></div>
          <span class="content1_txt"
            >标的进度：已完成{{ item.ok_point }}%/{{
              item.activity_objectives
            }}名</span
          >
        </div>
        <div class="footer">
          <div class="title">
            <span style="color: red"
              >(此活动仅限短视频带货达人参与)</span
            >
          </div>
        </div>
      </div>

      <div class="box-right">
        <div class="box-top">
          <div class="small">
            <div class="small-box">
              <div>报名活动</div>
            </div>
            <div class="arrow">>>></div>
          </div>
          <div class="small">
            <div class="small-box">
              <div>收样品</div>
            </div>
            <div class="arrow">>>></div>
          </div>
          <div class="small">
            <div class="small-box">
              <div>短视频VS直播</div>
            </div>
            <div class="arrow">>>></div>
          </div>
          <div class="small">
            <div class="small-box">
              <div>活动结束核销订单</div>
            </div>
            <div class="arrow">>>></div>
          </div>
          <div class="small">
            <div class="small-box">
              <div>公示成绩48小时</div>
            </div>
            <div class="arrow">>>></div>
          </div>
          <div class="small">
            <div class="small-box">
              <div>发放奖金</div>
            </div>
          </div>
        </div>
        <div class="box-center">
          <!-- <div class="top-right">平台规则</div> -->
          <el-tabs
            value="first"
            @tab-click="handleClick"
            style="margin: 0 0.2rem"
          >
            <el-tab-pane label="任务要求" name="first">{{
              item.requirements
            }}</el-tab-pane>
            <el-tab-pane label="任务解析" name="fourth">{{
              item.desc
            }}</el-tab-pane>
            <el-tab-pane label="平台规则" name="three">{{
              item.platform_rules
            }}</el-tab-pane>
          </el-tabs>
        </div>
        <div class="box-bottom">
          <div class="left" @click="centerDialogVisible = true">我要报名</div>
          <div class="right" @click="centerDialogVisible = true">
            联系活动商务
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      topList: [],
      list: [],
    };
  },
  mounted() {
    this.$axios({
      url: "Allowance/getList",
      method: "get",
      params: {
        p: 1,
        type: 2,
      },
    }).then((res) => {
      if (res.data.status == 0) {
        var lits = res.data.result;
        for (var i = 0; i < lits.length; i++) {
          var tops = lits[i].tops;
          tops[0].color = "#ffbb7e";
          tops[0].color1 = "#ff7b05";
          tops[1].color = "#d8d9db";
          tops[1].color1 = "#000";
          tops[2].color = "#efb897";
          tops[2].color1 = "#000";
          lits[i].tops = tops;
        }
        this.list = lits;
      } else {
        this.$message.error(res.data.msg);
      }
    });
  },
  methods: {
    handleClose(done) {
      done();
    },
    // 复制成功时的回调函数
    onCopy(e) {
      this.$message.success("链接已复制到剪切板！");
    },
    // 复制失败时的回调函数
    onError(e) {
      this.$message.error("抱歉，复制失败！");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="less" scoped>
.center1 {
  width: 100%;
  height: 100%;

  .boo_images {
    width: 100%;
    margin-top: 20px;
  }

  .content {
    margin-top: 20px;
    background-color: #004aad;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .box {
      background-color: #fff;
      width: 48%;
      padding: 1rem;
      border-radius: 0.3rem;
      height: 17rem;
      margin-left: 15px;
    }

    .top {
      display: flex;
      margin: 0.2rem;

      .left {
        width: 8rem;
        // width: 8rem;
        height: 8rem;
        // background-color: #ce8458;
        border-radius: 0.1rem;
        text-align: center;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        margin-left: 1rem;
        font-size: 0.18rem;

        .title {
          display: flex;
          align-items: center;
          font-size: 1rem;
          font-weight: 400;
          margin-left: 0.1rem;
          margin-bottom: 1.2rem;

          img {
            width: 1rem;
            height: 1rem;
            vertical-align: bottom;
            padding: 0;
            margin: 0;
          }
        }

        .attribute {
          line-height: 2.2;
          display: grid;
          grid-template-columns: repeat(3, 33.3%);
          font-size: 0.12rem;
          margin: 0.1rem 0;
          margin-left: 0.1rem;

          .number {
            font-size: 0.16rem;
            color: red;
            margin-left: 0.05rem;
          }
        }

        .time {
          margin-left: 0.05rem;
          margin-top: 0.12rem;
        }

        .target {
          margin-left: 0.05rem;
          margin-top: 0.1rem;
          display: flex;

          .money {
            // margin-left: 0.2rem;
          }
        }

        .mark {
          color: red;
          margin-top: 0.1rem;
          font-size: 0.14rem;
        }
      }
    }

    .center {
      position: relative;
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      position: relative;
      display: block;
      overflow: hidden;
      height: 30px;
      border-radius: 15px;
      background-color: #c7c7cc;

      .content1 {
        z-index: 8;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 80, 80, 0.3);
        height: 100%;
        border-radius: 5px 0 0 5px;
        background-color: #ff5326;
      }
      .content1_txt {
        z-index: 9;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        line-height: 30px;
        font-size: 12px;
        height: 100%;
      }
      svg {
        -webkit-transform: rotate(-180deg);
      }
    }

    .footer {
      margin: 0.2rem;

      .title {
        font-size: 0.12rem;
      }

      .small-box {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        // height: 0.4rem;
        margin-top: 0.1rem;
      }
    }

    .box-right {
      width: 48%;
      display: flex;
      flex-direction: column;
      height: 17rem;
      margin-right: 15px;

      .box-top {
        padding: 1rem;
        background-color: white;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        .small {
          display: flex;
          align-items: center;
          justify-content: center;

          .small-box {
            background-image: url(../../assets/bisai-icon.png);
            background-size: contain;
            background-repeat: no-repeat;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;

            > div {
              transform: scale(0.8);
              text-align: center;
            }
          }

          .arrow {
            margin: 0 0.06rem;
          }
        }
      }

      .box-center {
        padding: 0.5rem;
        background-color: white;
        border-radius: 0.2rem;
        margin-top: 0.2rem;
        position: relative;
        flex: 1;

        .top-right {
          position: absolute;
          top: 20px;
          right: 1rem;
        }
      }

      .box-bottom {
        margin: 0.2rem 0.1rem 0 0.1rem;
        background-color: #bbc3dd;
        display: grid;
        grid-template-columns: 40% 60%;
        align-items: center;
        border-radius: 0.04rem;
        color: #fff;

        .left {
          width: 100%;
          line-height: 0.4rem;
          text-align: center;
          cursor: pointer;
        }

        .right {
          background-color: #5278af;
          height: 100%;
          width: 100%;
          line-height: 2rem;
          text-align: center;
          border-radius: 0.04rem;
          cursor: pointer;
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
.el-tabs__item {
  font-size: 0.16rem;
}

/deep/.el-tabs__item.is-active {
  font-size: 16px;
  font-weight: 600;
}
</style>
