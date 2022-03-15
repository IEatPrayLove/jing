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
      <el-row class="platform_custom">
        <el-row>
            <h1 style="text-align: center;">鲸大大</h1>
          </el-row>
          <el-row style="marginTop:40px">
            <el-col :span="10" :offset="7" style="text-align: center;lineHeight:24px;">内容电商（直播，短视频）工具化决策平台，在这里可以精准高效找达人、找商品快速突破电商行业闭环交互，提升效率</el-col>
          </el-row>
          <el-row  style="marginTop:60px" type="flex" justify="center">
            <div class="platform_custom_mir">
              <img src="../../assets/home/weapp.png" alt="">
              <p>小程序</p>
              <img class="home_weapp" src="../../assets/home/weapp.png" alt="">
            </div>
          </el-row>
          <el-row>
            <el-col :span="22" style="text-align:end;">{{bangdanList.update_date}}更新</el-col>
          </el-row>
          <el-row style="marginTop:10px">
            <el-col class="bangdan" :span="22" :offset="1">
              <div class="bangdan_container">
                <el-row style="paddingTop:10px;fontSize:22px;" type="flex" justify="center">
                  <el-col class="line_tabs" style="text-align: center;" :span="4" >
                     <div class="line" :class="[curBangdan===1?'active':'']"></div> <div @click="changeBangdan(1)">找达人</div></el-col>
                  <el-col class="line_tabs" style="text-align: center;" :span="4" @click="changeBangdan(2)">
                    <div @click="changeBangdan(2)">找商品</div> <div class="line" :class="[curBangdan===2?'active':'']"></div></el-col>
                  <el-col class="line_tabs" style="text-align: center;" :span="4" ><div class="line" :class="[curBangdan===3?'active':'']"></div><div @click="changeBangdan(3)">找直播</div></el-col>
                  <el-col class="line_tabs" style="text-align: center;" :span="4" ><div class="line" :class="[curBangdan===4?'active':'']"></div><div @click="changeBangdan(4)">找视频</div></el-col>
                </el-row>
                <el-row style="flex:1;marginTop:40px;">
                  <el-col>
                    <div class="bangdan_content">
                      <div class="bang_dan_item" v-for="(item,index) in bangdanList.temp" :key="item.info.id" :class="[active[index]?'active':'']" @mouseenter="handleMoseEnter(index)">
                        <div class="bang_dan_item_left">
                          <img class="bang_dan_pic" @click="goDaren(item.info && item.info.link)" :src="item.info && item.info.pic" alt="">
                          <div class="bangdan_info">
                            <div class="bang_dan_name">{{item.info && item.info.name}}</div>
                            <div class="bang_dan_rank">NO.{{index+1}}</div>
                          </div>
                        </div>
                        <div class="bang_dan_item_right" :class="[active[index]?'active':'']">
                          <div class="flex-col">
                            <div class="bang_dan_item_right_text">{{item.right_top}}</div>
                            <div class="bang_dan_item_right_num">{{item.right_top_num}}</div>
                          </div>
                          <div class="flex-col" v-if="curBangdan === 4">
                            <div class="bang_dan_item_right_text">{{item.right_middle}}</div>
                            <div class="bang_dan_item_right_num">{{item.right_middle_num}}</div>
                          </div>
                          <div class="flex-col">
                            <div class="bang_dan_item_right_text">{{item.right_bottom}}</div>
                            <div class="bang_dan_item_right_num">{{item.right_bottom_num}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
      </el-row>
      
      <div class="item platform_custom">
        <div>
          <el-row>
            <h1 style="text-align: center;">进准爆款，人工审核精选</h1>
          </el-row>
          <el-row style="marginTop:40px">
            <el-col :span="10" :offset="7" style="text-align: center;lineHeight:24px;">鲸大大只负责分析整理推荐全网实力商家，最新最全热卖爆款商品，全平台人工审核入驻，实时维护排查，全天持续上新</el-col>
          </el-row>
          <el-row  style="marginTop:60px" type="flex" justify="center">
            <div class="platform_custom_mir">
              
              <img src="../../assets/home/weapp.png" alt="">
              <p>小程序</p>
              <img class="home_weapp" src="../../assets/home/weapp.png" alt="">
              <!-- </div> -->
            </div>
          </el-row>
          <el-row type="flex" justify="center" style="marginTop:40px;fontSize:24px">
            <el-col :span="8" :offset="4">
              <span style="color:#547BB3">1，{{platformCustom.goods_sum}}</span>
              <span>在线高佣爆品</span>
            </el-col>
            <el-col :span="8" >
              <span style="color:#547BB3">2，{{platformCustom.talent_sum}}</span>
              <span>位直联达人</span>
            </el-col>
            <el-col :span="8" >
              <span style="color:#547BB3">3，{{platformCustom.shop_sum}}</span>
              <span>位实力商家</span>
            </el-col>
          </el-row>
          <swiper class="top_w" :options="initData3">
              <swiper-slide class="top_w_item" v-for="item in topShop" :key="item.id + item.name">
                  <div class="top_shop_container">
                    <img class="top_img" :src="item.logo" alt="">
                    <div class="top_name">
                      {{item.name}}
                    </div>
                  </div>
              </swiper-slide>
            </swiper>
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
      <el-row type="flex" justify="center" style="marginTop:60px;">
        <el-col style="textAlign:center;"><h1 style="color:red">实例品牌商户</h1></el-col>
      </el-row>
      <!-- <el-row>
          <el-col> -->
            
          <!-- </el-col>
      </el-row> -->
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
      <!-- <div class="con">
        <div
          v-for="item in log1"
          :key="item"
          class="con_item"
          
        >
        <img :src="require(`../../assets/home/log${item}.jpeg`)" alt="">
        </div>
        
  </div>
   <div class="con">
        <div
          v-for="item in log2"
          :key="item"
          class="con_item"
        >
        <img :src="require(`../../assets/home/log${item}.jpeg`)" alt="">
        </div>
        
  </div>
   <div class="con">
        <div
          v-for="item in log3"
          :key="item"
          class="con_item"
        >
        <img :src="require(`../../assets/home/log${item}.jpeg`)" alt="">
        </div>
        
  </div> -->
  <swiper :options="initData" class="con">
    
    <swiper-slide class="con_item"  v-for="item in log1" :key="item">
      
        <img :src="require(`../../assets/home/log${item}.jpeg`)" alt="">
        
    </swiper-slide>
    
  </swiper>
  <swiper :options="initData2" class="con">
    
    <swiper-slide class="con_item"  v-for="item in log2" :key="item">
      
        <img :src="require(`../../assets/home/log${item}.jpeg`)" alt="">
        
    </swiper-slide>
    
  </swiper>
  <swiper :options="initData" class="con">
    
    <swiper-slide class="con_item"  v-for="item in log3" :key="item">
      
        <img :src="require(`../../assets/home/log${item}.jpeg`)" alt="">
        
    </swiper-slide>
    
  </swiper>
  </div>
  
</template>
<script>
import Banner from "@/components/Banner/index.vue";
import 'animate.css';
var vm = null
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
      platformCustom:{},
      bangdanList:{},
      curBangdan:1,
      log1:[],
      log2:[],
      log3:[],
      topShop:{},
      initData:{
        loop: true,
        observer:true,
        observeParents:true,
        // loopedSlides: 5,
        slidesPerView: 'auto',
        autoplay:{
          delay:1000,
          disableOnInteraction: false,
          reverseDirection:false
        }
      },
      initData2:{
        loop: true,
        observer:true,
        observeParents:true,
        // loopedSlides: 5,
        slidesPerView: 'auto',
        autoplay:{
          delay:1000,
          disableOnInteraction: false,
          reverseDirection:true
        }
      },
       initData3:{
        loop: true,
        observer:true,
        observeParents:true,
        // loopedSlides: 5,
        slidesPerView: 'auto',
        autoplay:{
          delay:1000,
          disableOnInteraction: false,
          reverseDirection:false
        },
        on:{
          click:function(){
             vm.toShopFn(this.realIndex)
          }
        }
      },
      active:[true,false,false,false,false]
    };
  },
  created(){
    vm = this;
  },
  beforeMount(){
    let arr1  = []
    let arr2  = []
    let arr3  = []
    Array(20).fill(1).map((item,index)=>{
      arr1.push(index+1)
      arr2.push(index+21)
      arr3.push(index+41)
    })
    this.log1 = arr1
    this.log2 = arr2
    this.log3 = arr3
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
     this.getHomeCustom()
    this.getTopShop()
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
    
   
  },
  methods: {
    toShopFn(index){
      this.$router.push(`/shop?uid=${this.topShop[index].id}`)
    },
    changp(arr){
      var a = arr.splice(0,1)
      this.log1.push(a)
    },
     changm(arr){
      var a = arr.splice(0,1)
      this.log3.push(a)
    },
    changpt(arr){
      var a = arr.splice(-1,1)
      this.log2.unshift(a)
    },
    handleMoseEnter(index){
      var tempData = JSON.parse(JSON.stringify(this.active))
      for(let i =0;i<tempData.length;i++){
        if(i == index){
          tempData[i] = true
        }else{
          tempData[i] = false
        }
      }
      this.active =  tempData
    },
    // 跳转达人首页
			goDaren(href) {
				window.location.href = href;
			},
    handleClose(done) {
      done();
    },
    gorouter(url,id) {
      this.$router.push(url);
      this.$emit('event',id)
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    getHomeCustom(){
      this.$axios({
        url:'Plblics/platformCustom',
        method:'get',
      }).then((res)=>{
        if (res.data.status == 0) {
        this.platformCustom = res.data.result;
      } else {
        this.$message.error(res.data.msg);
      }
      })
      this.$nextTick(()=>{
        this.getBangdan(1)
      })
    },
    getTopShop(){
      this.$axios({
        url:'/Plblics/TopShop',
        method:'get'
      }).then(res=>{
         if (res.data.status == 0) {
        this.topShop = res.data.result;
      } else {
        this.$message.error(res.data.msg);
      }
      })
    },
    getBangdan(type){ // 1-达人 2-商品 3-直播带货 4-视频带货
      this.$axios({
        url:`/Plblics/TopList?type=${type}`,
        method:'get',
      }).then((res)=>{
        if (res.data.status == 0) {
          const result = res.data.result
          // 获取长度
          let temp = []
          const keys = Object.keys(result)
          const ln = keys.length;
          for(let i = 0; i<ln-1;i++){
            temp.push(result[keys[i]])
          }
          temp.map((item,index)=>{
            item.id = item.info.id;
            if(type === 1){
              item.info.link = item.info.douyin_link
              item.right_top = '昨日增粉';
              item.right_bottom = '粉丝总量';
              item.right_top_num = item.daren_add;
              item.right_bottom_num = item.daren_sum
            }else if(type === 2){
              item.info.name = item.info.title
              item.info.pic = item.info.thumb
              item.right_top = '价格';
              item.right_bottom = '昨日销量';
              item.right_top_num = item.goods_price;
              item.right_bottom_num = item.goods_sales
            } else if ( type === 3){
              item.right_top = '带货热度';
              item.right_bottom = '人气峰值';
              item.right_top_num = item.daren_hits;
              item.right_bottom_num = item.daren_sales
              item.info.link = item.info.douyin_link
            } else if( type === 4){
              item.info.link = item.info.douyin_link
              item.right_top = '点赞';
              item.right_middle = '转发'
              item.right_bottom = '评论';
              item.right_top_num = item.daren_zan;
              item.right_middle_num = item.daren_commit 
              item.right_bottom_num = item.daren_sales
            }
          })
          this.bangdanList = {temp,update_date:result.update_date};
      } else {
        this.$message.error(res.data.msg);
      }
      })
    },
    changeBangdan(type){
      this.curBangdan = type;
      this.getBangdan(type)
    }
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
.platform_custom{
  box-shadow: 0px 2px 2px 2px #666;
  padding: 60px 0;
  margin-top: 10px;
}
.bangdan{
  background-color: rgba(255, 255, 255, .5);
  height: 300px;
  padding: 15px;
}
.bangdan_container{
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
}
.bang_dan_name{
  font-size: 18px;
  font-weight: 600;
  color: #233;
  max-width: 160px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
}
.bang_dan_rank{
  color: #233;
    font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
}
.bangdan_content{
  display: flex;
  justify-content: space-around;
  position: relative;
  &:not(:first-child):before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-left: 1px solid rgb(245,245,245);
    opacity: 1;
  }
}
.bang_dan_item{
  width: 206px;
  overflow: hidden;
  transition: width .3s ease-in-out;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active{
    width:365px;  
  }
}
.bang_dan_pic{
  width: 86px;
  height: 86px;
  border-radius: 50%;
}
.bang_dan_item_left{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 206px;
  flex-grow: 0;
  flex-shrink: 0;
  img{
    margin-bottom: 20px;
  }
}
.flex-col{
  display: flex;
  flex-direction: column;
}
.bang_dan_item_right{
  visibility: hidden;
  flex-basis: 159px;
  flex-grow: 0;
  flex-shrink: 0;
  transition: visibility .3s ease-in-out;
  &.active{
    visibility: visible;
  }
  .bang_dan_item_right_num{
    font-family: CDSHT-Regular,CDSHT;
    font-size: 22px;
  }
  .bang_dan_item_right_text{
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
    font-weight: 400;
  }
}
.bangdan_info{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line_tabs{
  position: relative;
  .line{
    content: '';
    width: 20%;
    height: 8px;
    bottom: -10px;
    left: 50%;
    position: absolute;
    transform: translate3d(-50%,0,0) scale(0);
    background-color: orange;
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.active{
      transform: translate3d(-50%,0,0) scale(1);
    }
  }
}
.top_w{
  width:1200px
}
.top_w_item{
  width: 200px;
}
.top_shop_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 200px;
}
.top_img{
  width: 180px;
  height: 200px;
}
.top_name{
  font-weight: 600;
  color: #233;
  margin-top: 20px;
}
.platform_custom_mir{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  width: 120px;
  // background-color: #666;
  padding: 5px;
  position: relative;
  .home_weapp{
    width: 200px;
    height: 200px;
    position: absolute;
    top: -200px;
    left: -50px;
    visibility: hidden;
  }
  img{
    width: 35px;
    height: 35px;
  }
  p{
    font-size: 22px;
    color: #233;
    &:hover{
      color:orange;
    }
  }
  &:hover>.home_weapp{
    visibility:visible;
    color:orange
  }
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
.con{
  width: 100%;
  height:150px;
  display: flex;
  overflow: hidden;
  margin-top: 20px;
  // position: relative;
  img{
    height: 150px;
    width: 150px;
  }
}
.con_item{
  transition: all .3s ease-in-out;
   width: 150px;
  height:150px;
  // position: absolute;
  // top: 0;
  // left: 0;
  &:not(:nth-child(1)){
    margin-left: 20px;
  }
  &:hover{
    transform: scale(1.2);
    box-shadow: -1px -1px 2px 2px orange;
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