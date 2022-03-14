<template>
  <div class="team">
    <div class="function">
      <div class="theme">
        <div class="circle"></div>
        <div class="circle1"></div>
        <div class="title">功能对比</div>
        <div class="content">助力商家轻松拓展流量阵地</div>
      </div>
      <div class="major">
        <div class="title">专业版</div>
        <div class="money">仅需￥6999/年</div>
        <div class="scope">适用个人/个体小店</div>
        <el-button
          size="small"
          style="font-weight: 600"
          @click="vippay(zhuanye)"
          >立即开通</el-button
        >
      </div>
      <div class="flagship">
        <div class="title">旗舰版</div>
        <div class="money">仅需￥19999/年</div>
        <div class="scope">适用于团队/品牌/源厂</div>
        <el-button size="small" style="font-weight: 600" @click="vippay(qijian)"
          >立即开通</el-button
        >
      </div>
    </div>
    <ListItem :listItems="listItems" />
    <ListItem :listItems="resourceLists" />
    <ListItem :listItems="talentData" />
    <ListItem :listItems="privileges" />
    <ListItem :listItems="shopFunction" />
    <ListItem :listItems="merchant" />
    <ListItem :listItems="roundService" />
    <ListItem :listItems="upService" />
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
import ListItem from "./listItem.vue";
export default {
  components: {
    ListItem,
  },
  data() {
    return {
      centerDialogVisible: false,
      listItems: {
        title: "团队协作",
        list: [
          {
            title: "多设备登录",
            items: [
              {
                mount: "2个",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "1个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "创建子账号",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "5个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "创建店铺",
            items: [
              {
                mount: "1个",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "4个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
      resourceLists: {
        title: "平台资源",
        color: "#efe9e9",
        list: [
          {
            title: "首页推送",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "优先排序",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "优先",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "平台助推",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "优先",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "渠道分发",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "优先",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "商品代发",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "在线领样",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
      talentData: {
        title: "达人数据",
        title1: "（查阅建联）",
        list: [
          {
            title: "短视频达人",
            items: [
              {
                mount: "20次/日",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "100次/日",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "直播达人",
            items: [
              {
                mount: "20次/日",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "100次/日",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "抖音团长",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "优先",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "MCN机构",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "商家服务商",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
      privileges: {
        title: "会员特权",
        color: "#efe9e9",
        list: [
          {
            title: "卡位赛（鲸贴）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "优先",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "领任务（鲸贴）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "优先",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "全息商家主页",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "企业风采（视频）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "企业风采（图片）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "商品热门（视频）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "达人建联商家",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "达人添加窗口",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
      shopFunction: {
        title: "店铺功能",
        list: [
          {
            title: "商品数量",
            items: [
              {
                mount: "小于15款",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "小于100款",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "类目数量",
            items: [
              {
                mount: "1个",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "5个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "品牌数量",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "专属主页",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "商品详情",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "店铺分享",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "商品分享",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "视频分享",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "关联抖音小店",
            items: [
              {
                mount: "1个",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "5个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "账号平台托管",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
      merchant: {
        title: "商家工作台",
        color: "#efe9e9",
        list: [
          {
            title: "带货数据大盘",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "达人数据管理",
            items: [
              {
                mount: "1个",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "5个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "达人总库存",
            items: [
              {
                mount: "200个",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "1000个",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "建联合作",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "自建合作",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "我的收藏",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },

      roundService: {
        title: "周边服务",
        title1: "（服务市场）",
        list: [
          {
            title: "入驻小店",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "头部达人定向撮合",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "企业号搭建（含主页装修）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "蓝V认证",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "内容策划/创作指导",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "千川开户",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "千川代投放",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "精选联盟入驻",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "类目报白",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
      upService: {
        title: "增值服务",
        title1: "（服务市场）",
        color: "#efe9e9",
        list: [
          {
            title: "商品托管（单品）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "品牌年框合作",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "达人矩阵搭建",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "品牌流量池搭建",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "店铺自播（辅助）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "店铺代播",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "代运营CPS（品牌/店铺）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "BD渠道代运营（辅助）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "BD团队搭建（辅助）",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "一对一DB商务对接",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "行业头部资源推送",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
          {
            title: "平台选品库",
            items: [
              {
                mount: "",
                icon: require("@/assets/user/period.png"),
              },
              {
                mount: "",
                icon: require("@/assets/user/arrow.png"),
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    vippay(type) {
      this.$router.push({
        path: "/vippay",
        query: { type: type },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.team {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 16px auto;

  .container {
    position: relative;
    padding: 30px 20px;
  }

  .function {
    display: grid;
    position: relative;
    grid-template-columns: 20% 40% 40%;
    justify-content: center;
    align-items: center;

    .theme {
      .circle {
        position: absolute;
        top: 25px;
        left: 9.6px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #547bb3;
        border: 4px solid #87aee0;
        z-index: -2;
        opacity: 0.6;
      }

      .circle1 {
        position: absolute;
        top: 32px;
        left: -12px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #547bb3;
        border: 4px solid #87aee0;
        z-index: -2;
        opacity: 0.6;
      }

      .title {
        margin-top: 8px;
        margin-left: 16px;
        font-size: 32px;
        font-weight: 600;
      }

      .content {
        font-size: 16px;
        margin-top: 32px;
        font-weight: 600;
      }
    }

    .major {
      background: linear-gradient(
        to right,
        rgb(84, 123, 179) 0%,
        rgb(84, 123, 179) 100%
      );
    }

    .flagship {
      background-color: black;
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      color: rgb(250, 186, 111);

      .el-button {
        background: r-gradient(
          to right,
          rgb(250, 186, 111) 0%,
          rgb(250, 186, 111) 100%
        );
      }
    }

    .major,
    .flagship {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0px;

      .title {
        margin-top: 16px;
        font-size: 32px;
        font-weight: 600;
      }

      .money {
        font-size: 18px;
        font-weight: 600;
        margin-top: 16px;
      }

      .scope {
        font-size: 9.6px;
        margin-top: 16px;
        font-weight: 600;
      }

      .el-button {
        margin: 16px 0;
        width: 160px;
        border-radius: 9.6px;
        border: none;
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
