<template>
  <div class="header">
    <img src="@/assets/jintie.png" alt="" class="top_imgs" />
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
                标的目标：{{ item.activity_objectives }}单
              </div>
              <div class="money">
                奖励金额：<span style="color: red">{{ item.prize_pool }}</span
                >元
              </div>
            </div>
            <div class="mark">
              (活动时间内产出有效订单排名TOP前三分平分奖池)
            </div>
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
            }}单</span
          >
        </div>
        <div class="footer">
          <div class="title">
            达人榜单：榜单排名根据实时出单数据排列，持续更新中！
          </div>
          <div
            class="small-box"
            v-for="(item, index) in item.tops"
            :key="index"
            :style="{ background: `${item.color}` }"
          >
            <div
              class="list"
              style="font-weight: 600"
              :style="{ color: `${item.color1}` }"
            >
              TOP{{ index + 1 }}
            </div>
            <div class="list">达人：{{ item.name }}</div>
            <div class="list">实时出单数：{{ item.sales }}单</div>
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
          
          <el-tabs
            value="first"
            @tab-click="handleClick"
            style="margin: 0 0.2rem"
          >
            <el-tab-pane label="任务要求" class="yaoqiu" name="first">{{
              item.requirements
            }}</el-tab-pane>
            <el-tab-pane label="任务解析" class="jiexi" name="fourth">{{
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
        type: 1,
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
.header {
  width: 100%;
  height: 100%;

  .top_imgs {
    min-width: 800px;
    width: 100%;
  }

  .content {
    width: 100%;
    margin-top: 20px;
    background-color: #ff914d;
    padding: 15px 0px;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .box {
      background-color: #fff;
      width: 48%;
      height: 21rem;
      border-radius: 0.3rem;
      padding: 10px;
      margin-left: 15px;

      .top {
        display: flex;
        margin: 0.2rem;
        line-height: 1.8;

        .left {
          width: 30%;
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
          width: 60%;
          margin-left: 1.5rem;
          align-items: center;
          font-size: 0.18rem;
          letter-spacing: 2px;
          .title {
            font-size: 1rem;
            font-weight: 400;
            margin-left: 0.1rem;
            line-height: 1;

            img {
              width: 1rem;
              height: 1rem;
              vertical-align: bottom;
            }
          }

          .attribute {
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
              margin-left: 0.2rem;
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
          font-size: 0.16rem;
        }

        .small-box {
          display: grid;
          grid-template-columns: repeat(3, 33%);
          height: 2rem;
          margin-top: 0.1rem;
          align-items: center;
          padding-left: 0.2rem;

          .list {
            color: white;
          }
        }
      }
    }

    .box-right {
      width: 48%;
      display: flex;
      flex-direction: column;
      margin-right: 15px;
      height: 21rem;

      .yaoqiu {
        text-indent: 2rem;
      }
      .jiexi {
        text-indent: 2rem;
      }
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
        margin: 0.4rem 0;
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

.el-tabs__item {
  font-size: 0.16rem;
}

/deep/.el-tabs__item.is-active {
  font-size: 16px;
  font-weight: 600;
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
