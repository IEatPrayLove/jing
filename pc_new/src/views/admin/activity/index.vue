<template>
  <div class="activity">
    <h-card>
      <div class="actlist">
        <div>
          <div v-for="item in actList"
               :key="item.id"
               :class="[item.isSelect?'isSelect':'']"
               @click="changeNav(item)">{{item.name}}
          </div>
        </div>
      </div>
    </h-card>
    <h-card>
      <div class="actbox">
        <div class="signup">
          <div @click="qrVisible= true">我要报名+</div>
          <!-- <div>暂无活动信息</div> -->
        </div>
      </div>
    </h-card>
    <el-dialog title=""
               :visible.sync="qrVisible"
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
  components: {
    
  },
  data () {
    return {
      actList: [
        { id: 0, name: '全部', isSelect: true },
        { id: 1, name: '卡位赛', isSelect: false },
        { id: 2, name: '领任务', isSelect: false },
        { id: 3, name: '一元购', isSelect: false },
        { id: 4, name: '引流', isSelect: false },
        { id: 5, name: '高佣', isSelect: false }
      ],
      qrVisible: false
    }
  },
  methods: {
    changeNav (item) {
      this.actList.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
    },
    handleClose (done) {
      done();
    },
  }
}
</script>

<style lang="less" scoped>
.activity {
  /deep/.h-card-bottom {
    .actlist {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      > div:nth-of-type(1) {
        display: flex;
        > div {
          margin-right: 24px;
          cursor: pointer;
        }
        .isSelect {
          color: #4b70a8;
        }
      }
      > div:nth-of-type(2) {
        cursor: pointer;
        color: #4b70a8;
      }
    }
    .actbox {
      min-height: 400px;
      .signup {
        min-height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div:nth-of-type(1) {
          background: #a5b2ca;
          padding: 4px 8px;
          border-radius: 4px;
          color: #4b70a8;
          font-size: 20px;
          cursor: pointer;
        }
        > div:nth-of-type(2) {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
  .logins {
    text-align: center;
  }
}
</style>