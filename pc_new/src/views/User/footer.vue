<template>
  <div class="footer">
    <h-card>
      <div class="title">常见问题</div>
      <div class="box">
        <div class="list" v-for="(item, index) in problems" :key="index">
          <div class="title1">{{ item.title }}</div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>
      <div class="info">
        <div class="title2">鲸大大.只专注于抖音内容电商</div>
        <el-button @click="centerDialogVisible = true">咨询客服</el-button>
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
    </h-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      problems: [
        {
          title: "购买后是否可以开具发票？",
          content:
            "购买成功后，联系客服，可提供纸质/电子发票（开票时间15个工作日内）",
        },
        {
          title: "服务市场说明？",
          content:
            "服务市场部分服务如有涉及第三方渠道对接合作产生相关费用，需由商家自行承担。平台方只负责合作接洽，具体费用由供需双方自行协商交易完成，合作中出现任何单方违约，与平台无关，任何一方出现损失平台均无相关连带责任。投资有风险，合作需谨慎！！！",
        },
        {
          title: "违规处罚说明？",
          content:
            "严谨倒卖转让平台资源，如有发现永久封号。严禁发布违规违禁商品，如有发现永久封号。严禁发布非关联店铺，非审核通过之外的信息内容，如有发现永久封号。严谨刷榜刷排名，严谨恶意重复发布多次审核不通过内容，如有发现永久封号。",
        },
        {
          title: "购买成功后是否可以退款？",
          content:
            "已购会员属于虚拟产品，购买请仔细确认购买信息，购买成功后立即生效可使用，不支持退款。",
        },
        {
          title: "关于达人资源？",
          content:
            "我们承诺全平台达人资源，真实有效，均通过正规渠道获取而来，鲸大大只负责整理分析后推荐。（除不可抗力因素外，如：达人A主动更换联系方式）",
        },
        {
          title: "关于官方活动",
          content:
            "官方“鲸贴”活动由平台独立运营部门负责，不参与任何承诺捆绑合作，全平台根据活动需要公平公正选品，合作商品均由平台选品官自行决定。会员商家主动提报商品会第一时间查看优先审核，产品达标选品审核通过会考虑优先排期上架发布。",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
  },
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    font-size: 22px;
    padding: 20px;
    font-weight: 600;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 13px;
    .list {
      width: 46%;
      margin: 20px;
      padding: 20px;
      box-shadow: 0 4px 4px #e4e7ed;
    }
    .title1 {
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
      line-height: 20px;
    }

    .content {
      padding-top: 20px;
      line-height: 16px;
      font-size: 14px;
      letter-spacing: 2px;
      line-height: 20px;
    }
  }

  .info {
    margin: 30px 60px;
    font-size: 26px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      font-weight: 200;
      font-size: 14px;
    }

    .el-button {
      width: 160px;
      border-radius: 16px;
      background-color: #faba6f;
      border: none;
      font-size: 19px;
      font-weight: 200;
      margin-left: 50px;
      &:hover {
        color: white;
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
