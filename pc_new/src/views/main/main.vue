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
      <div class="item" style="margin-top: 80px">
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
        <el-row style="margin-top: 50px;transform:scale(1.1)">
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
      <div class="home_new_banner">
        <div class="home_new_banner_modal"></div>
        <div class="home_new_1 home_new_item animate__animated" :class="{animate__backInLeft:home_new_banner_show}">
          <div class="num_bold">1</div>
          <div class="home_new_item_text">数据标签多达100多种，任意创建，多角度呈现店铺亮点，有效提升30%达人合作意向</div>
        </div>
        <div class="home_new_2 animate__animated " :class="{   animate__backInLeft:home_new_banner_show}">
          <div class="num_bold">2</div>
           <div class="home_new_2_text">
             <div>小程序搭建，开发部署全程服务</div>
             <div>原生开发，快速版本迭代</div>
             <div>行业一线，专业开发团队</div>
           </div>
        </div>
        <div class="home_new_3 animate__animated animate__delay-1s" :class="{animate__backInDown:home_new_banner_show}">
          <h2>鲸妙 </h2>
          <h2 style="color:#4682B4">—笔生花</h2>
        </div>
        <div class="home_new_5 animate__animated animate__delay-1s" :class="{animate__backInUp:home_new_banner_show}">
          <div class="num_bold">3</div>
          <div class="home_new_item_text">商家独立小程序适用不同场景，多渠道铺货分发，私域分发运营长期锁定带货渠道，减少沟通成本有效复播长期经营</div>
        </div>
        <div class="home_new_4 animate__animated animate__delay-1s" :class="{animate__swing:home_new_banner_show}">
          <div class="num_bold">4</div>
          <div class="home_new_item_text">彻底告别传统货盘表发单模式，达人合作有效建联，快递提升50%办公效率</div>
        </div>
        <div class="home_new_6">
          <div class="show_modal">
            <div class="img_modal">
              <img  class="weapp_icon" src="../../assets/home/weapp.png" alt="">
            </div>
            <div class="bottom">
              <div class="show_text">演示版</div>
            <div class="line"></div>
            <div class="samll_icon"></div>
            </div>
          </div>
        </div>
        <div class="home_new_7">
          <img class="home_new_logo weibo" src="../../assets/home/weibo.png" alt="">
          <img class="home_new_logo douyin" src="../../assets/home/douyin.png" alt="">
          <img class="home_new_logo wechat" src="../../assets/home/wechat.png" alt="">
          <img class="home_new_logo hongshu" src="../../assets/home/hongshu.png" alt="">
          <img class="home_new_logo vieo" src="../../assets/home/vieo.png" alt="">
          <img class="home_new_logo ab" src="../../assets/home/ab.png" alt="">
          <img class="home_new_logo taobao" src="../../assets/home/taobao.png" alt="">
          <img class="home_new_logo jingdong" src="../../assets/home/jingdong.png" alt="">
          <img class="home_new_logo fast_hand" src="../../assets/home/fast_hand.png" alt="">
        </div>
      </div>
      <!-- <div class="item-router" v-for="item in routerList" :key="item.id">
        <div>
          <div>{{ item.name }}</div>
          <div>{{ item.title }}</div>
        </div>
        <div class="item-name">
          <div v-for="item2 in item.list" :key="item2.uid">
            <div>鲸大大 {{ item2.name }}</div>
            <div>{{ item2.title }}</div>
            <div @click="gorouter(item2.url,item2.id)" style="marginTop:60px">
              <div></div>
              <div>立即查看</div>
              <div></div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="item">
        <div>
          <img src="@/assets/home/2.png" style="width: 100%" />
        </div>
      </div> -->
      <div class="item">
        <div>
          <div></div>
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
            <div @click="gorouter(item2.url,item2.id)" style="marginTop:60px">
              <div></div>
              <div>立即查看</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="item" style="margin-top: 30px">
        <div>
          <img src="@/assets/home/3.png" style="width: 100%" />
        </div>
      </div> -->
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
import 'animate.css';
export default {
  components: { Banner },
  data() {
    return {
      token: localStorage.getItem("token"),
      user: JSON.parse(localStorage.getItem("user")),
      centerDialogVisible: false,
      info: {},
      home_new_banner_show:false,
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
              id:3
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
    document.addEventListener('scroll',(e)=>{
      var tarEl = document.getElementsByClassName('home_new_banner')[0]
      const offset = tarEl.getBoundingClientRect();
      const offsetTop = offset.top;
      const offsetBottom = offset.bottom;
      if(offsetTop <= window.innerHeight && offsetBottom >=0){
        this.home_new_banner_show = true
      }else{
        this.home_new_banner_show = false
      }
    })
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
    gorouter(url,id) {
      this.$router.push(url);
      this.$emit('event',id)
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
  margin-top: 50px;
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
      border: 8px solid #547BB3;
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
          background: #547BB3;
          border-radius: 50% 0 0 50%;
          border-right: 2px solid #fff;
        }
        > div:nth-of-type(2) {
          line-height: 40px;
          text-indent: 10px;
          background: #547BB3;
          color: #fff;
        }
        > div:nth-of-type(3) {
          width: 30px;
          height: 100%;
          background: #547BB3;
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
  :hover{
    animation: text-shadow-pop-tl 0.6s both;;
  }
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
.home_new_banner{
  height: 500px;
  background-image: url('../../assets/home/home_new_bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  color: #d7d7d9;
  .home_new_banner_modal{
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .3;
    position: absolute;
    top: 0;
    left: 0;
  }
  .home_new_item{
    box-sizing: border-box;
    padding: 10px;
    width: 220px;
    // height: 130px;
    border-radius: 20px;
    background-color: rgba(37, 52, 75, .8);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 100px;
  }
  .home_new_2{
    width: 300px;
    // height: 150px;
    background-color: rgba(37, 52, 75, .8);
    position: absolute;
    top: 310px;
    left: 50px;
    border-radius: 20px;
    padding: 25px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
  }
  .home_new_2_text{
    margin-top: 20px;
    // padding: 0 15px;
    line-height: 24px;
  }
  .home_new_3{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // bottom: 0;
    margin: auto;
    height: 60px;
    width: 280px;
    justify-content: space-between;
    display: flex;
    
    background-color: rgba(37, 52, 75, .8);
    border-radius: 8px;
    align-items: center;
    padding: 20px 30px;
    font-size: 22px;
  }
  .home_new_4{
    position: absolute;
    top: 70px;
    right: 28%;
    width: 500px;
    // height: 120px;
    box-sizing: border-box;
    // padding: 10px;
    background-color: rgba(37, 52, 75, .8);
    border-radius: 20px;
  }
  .home_new_5{
    position: absolute;
    top: 260px;
    left: 35%;
    width: 220px;
    // height: 180px;
    box-sizing: border-box;
    // padding: 10px;
    background-color: rgba(37, 52, 75, .8);
    border-radius: 20px;
  }
  .home_new_6{
    position: absolute;
    top: 260px;
    left: 53%;
    .show_modal{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 200px;
      height: 200px;
      align-items: center;
      &:hover>.img_modal{
        visibility:visible;
          transform: translate3d(0,0,0);
          // display: block;
          opacity: 1;
      }
    }
    .img_modal{
      transform: translate3d(0,150%,0);
      visibility: hidden;
      // display: none;
      opacity: 0;
      transition: all .4s cubic-bezier(0.36, 0.66, 0.04, 1);
    }
    .weapp_icon{
      width: 160px;
      height: 160px;
    }
    .bottom{
      width: 100px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: 1px solid #fff;
      box-sizing: border-box;
      padding: 5px;
    }
    .samll_icon{
      width: 20px;
      height: 20px;
      background-image: url('../../assets/home/small_icon.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .show_text{
      width: 70%;
      text-align: center;
    }
    .line{
      width: 0;
      height: 20px;
      border-left: 1px solid #fff ;
      flex: 1;
    }
  }
  .home_new_7{
    position: absolute;
    top: 0px;
    right: 30px;
    width: 25%;
    height: 100%;
    // border: 1px solid red;
    background-image: url('../../assets/home/home_new_line.png');
    background-size: 80% 50%;
    background-position: 50% 130%;
    background-repeat: no-repeat;
    .home_new_logo{
      width: 50px;
      height: 50px;
      position: absolute;
    }
    .weibo{
      left: 45%;
      bottom: 18%;
    }
    .douyin{
      left: 30%;
      bottom: 30%;
    }
    .wechat{
      right: 35%;
      bottom: 32%;
    }
    .hongshu{
      left: 20%;
      bottom: 38%;
    }
    .vieo{
      right: 38%;
      bottom: 45%;
    }
    .ab{
      left: 15%;
      bottom: 55%;
    }
    .taobao{
      left: 40%;
      bottom: 58%;
    }
    .jingdong{
      left: 10%;
      bottom: 70%;
    }
    .fast_hand{
      left: 35%;
      bottom: 73%;
    }
  }
  .home_new_item_text{
    line-height: 24px;
    // font-size: 16px;
    padding: 20px 30px;
  }
  .num_bold{
    font-weight: bold;
    font-size: 48px;
    text-align: center;
  }
}
@keyframes text-shadow-pop-tl {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: -1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}
</style>