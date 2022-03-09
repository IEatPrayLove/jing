<template>
  <div>
    <Banner />
    <div class="mains">
      <div class="item">
        <el-row>
          <el-col :span="12">
            <div style="margin-top: 12%; line-height: 50px">
              <div class="title">鲸大大</div>
              <div class="title1">直接建联海量纯佣达人</div>
              <div class="desc">轻松自建达人矩阵</div>
              <div class="hezuo_btn" @click="centerDialogVisible = true">
                商家入驻
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="index1">
              <img src="@/assets/home/1.png" class="index1_pic" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="item" style="margin-top: 100px">
        <el-row>
          <el-col :span="12">
            <div>
              <div class="title2">直播商品数据大盘</div>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <div class="title2">直播电商流量大盘</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top: 80px">
          <el-col :span="12" style="margin-top: 20px">
            <el-row>
              <el-col :span="13" class="border_r border_b title3_bg">
                <div>
                  <div class="title3">TOP1</div>
                  <div class="title3">{{ info.top1 }}</div>
                </div>
              </el-col>
              <el-col :span="11" class="border_b title3_bg">
                <div>
                  <div class="title3">TOP2</div>
                  <div class="title3">{{ info.top2 }}</div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" class="border_r title3_bg">
                <div>
                  <div class="title3">TOP3</div>
                  <div class="title3">{{ info.top3 }}</div>
                </div>
              </el-col>
              <el-col :span="8" class="border_r title3_bg">
                <div>
                  <div class="title3">TOP4</div>
                  <div class="title3">{{ info.top4 }}</div>
                </div>
              </el-col>
              <el-col :span="6" class="title3_bg">
                <div>
                  <div class="title3">TOP5</div>
                  <div class="title3">{{ info.top5 }}</div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top: 20px">
            <el-row>
              <el-col :span="24">
                <div style="text-align: center; height: 100px">
                  <div class="title4 font_c_r">
                    {{ info.live_look_people_sum }}
                  </div>
                  <div
                    class="title5"
                    style="display: flex; justify-content: center"
                  >
                    <div class="font_c_r">定更</div>
                    &nbsp; 电商直播观看总人数
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row style="text-align: center; height: 100px">
              <el-col :span="8">
                <div>
                  <div class="title5">直播总GMV</div>
                  <div class="title5">{{ info.live_gmv }}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div>
                  <div class="title5">在线总人数</div>
                  <div class="title5">{{ info.line_people_sum }}</div>
                </div>
              </el-col>
              <el-col :span="8">
                <div>
                  <div class="title5">分钟带货产出</div>
                  <div class="title5">{{ info.mintue_sales }}</div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="item" style="margin-top: 100px">
        <div>
          <img src="@/assets/home/4.png" style="width: 100%" />
        </div>
      </div>
      <div class="item-router" v-for="item in routerList" :key="item.id">
        <div>
          <div>{{ item.name }}</div>
          <div>{{ item.title }}</div>
        </div>
        <div class="item-name">
          <div v-for="item2 in item.list" :key="item2.uid">
            <div>鲸大大 {{ item2.name }}</div>
            <div>{{ item2.title }}</div>
            <div @click="gorouter(item2.url)">
              <div></div>
              <div>立即查看</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div>
          <img src="@/assets/home/2.png" style="width: 100%" />
        </div>
      </div>
      <div class="item" style="margin-top: 30px">
        <div>
          <img src="@/assets/home/3.png" style="width: 100%" />
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
  </div>
</template>
<script>
import Banner from "@/components/Banner/index.vue";
export default {
  components: { Banner },
  data() {
    return {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
      centerDialogVisible: false,
      info: {},
      routerList: [
        {
          id: 0,
          name: "数据+流量",
          title:
            "致力于构建基于大数据的数字营销服务平台，提供流量变现解决方案。",
          list: [
            {
              uid: 0,
              name: "达人库",
              title:
                "提供抖音达人，机构直接建联途径，助力商家搭建达人矩阵为商家智能匹配最适合店铺产品的优质达人。",
              url: "/person_list",
            },
            {
              uid: 1,
              name: "鲸贴",
              title:
                "爆款打造，平台提供多样化爆款打造能力，满足商家及时需求，增强品牌产品快速起量。",
              url: "/jingtie",
            },
          ],
        },
        {
          id: 1,
          name: "数据+产品",
          title:
            "全平台人工审核，全渠道直播+短视频带货商家服务商，赋能达人高效选品。",
          list: [
            {
              uid: 0,
              name: "商品库",
              title: "商品库粘性，为全网百万达人提供优质可靠的全品类选品平台。",
              url: "/selection",
            },
            {
              uid: 1,
              name: "商家库",
              title:
                "小店，供应链，源头厂家，团长等，励志打造全网最丰富的货源平台，多维度满足达人不同需求",
              url: "/shop_list",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$axios({
      url: "Plblics/customIndex",
      method: "get",
    }).then((res) => {
      if (res.data.status == 0) {
        this.info = res.data.result;
      } else {
        this.$message.error(res.data.msg);
      }
    });
  },
  methods: {
    handleClose(done) {
      done();
    },
    gorouter(url) {
      this.$router.push(url);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang='less' scoped>
.el-main {
  background-color: #fff !important;
}
.mains {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
}
.item {
}
.index1 {
  width: 100%;
}
.index1_pic {
  width: 100%;
}
.title {
  font-size: 2rem;
  font-weight: bold;
}
.title1 {
  font-size: 1.2rem;
  font-weight: bold;
}
.desc {
}
.item-router {
  margin-top: 100px;
  > div:nth-of-type(1) {
    display: flex;
    align-items: baseline;
    > div:nth-of-type(1) {
      font-size: 26px;
      font-weight: bold;
      margin-right: 20px;
    }
  }
  .item-name {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    > div:nth-of-type(1) {
      margin-right: 20px;
    }
    > div {
      border: 8px solid #90a7d2;
      border-radius: 8px;
      padding: 16px;
      width: 46%;
      > div:nth-of-type(1) {
        font-size: 22px;
        font-weight: bold;
      }
      > div:nth-of-type(2) {
        margin: 10px 0;
        line-height: 2;
      }
      > div:nth-of-type(3) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        cursor: pointer;
        > div:nth-of-type(1) {
          width: 30px;
          height: 100%;
          background: #90a7d2;
          border-radius: 50% 0 0 50%;
          border-right: 2px solid #fff;
        }
        > div:nth-of-type(2) {
          line-height: 40px;
          text-indent: 10px;
          background: #90a7d2;
          color: #fff;
        }
        > div:nth-of-type(3) {
          width: 30px;
          height: 100%;
          background: #90a7d2;
          border-radius: 0 60% 60% 0;
        }
      }
    }
  }
}
.hezuo_btn {
  width: 120px;
  height: 35px;
  border-radius: 5px;
  line-height: 35px;
  border: 1px solid #66b1ff;
  text-align: center;
  color: #66b1ff;
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

.title2 {
  margin-left: 50px;
  font-size: 1.1rem;
  font-weight: bold;
}
.title3_bg {
  background-color: #547bb3;
  height: 100px;
}
.title3 {
  color: #fff;
  padding-left: 10px;
  padding-top: 10px;
}
.title4 {
  font-size: 1.5rem;
  color: red;
}
.title5 {
  font-size: 0.8rem;
  color: #000;
  padding-left: 10px;
  padding-top: 10px;
}
</style>