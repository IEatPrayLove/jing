<template>
  <div class="header">
    <!-- <div class="top-index">
      <div class="box-top">
        <div class="title-box active-style">
          <div class="title1">实时爆品榜单</div>
          <div class="dsc">近2小时销售</div>
        </div>
        <div class="title-box">
          <div class="title1">昨日销量榜</div>
          <div class="dsc">近24小时销量</div>
          <div class="line"></div>
        </div>
        <div class="title-box">
          <div class="title1">7日销量榜</div>
          <div class="dsc">近7日销量</div>
          <div class="line"></div>
        </div>
        <div class="title-box">
          <div class="title1">30日销量榜</div>
          <div class="dsc">近30日销量</div>
        </div>
      </div>
      <div class="box-list"></div>
    </div> -->
    <div class="center">
      <!-- <div class="label">
        <div class="activity actives">一元秒杀</div>
        <div class="activity">引流款<div class="line"></div></div>
        <div class="activity">高佣<div class="line"></div></div>
        <div class="activity">超级大牌</div>
      </div> -->
      <div class="label">
        <div :class="['activity',item.isSelect?'actives':'']"
             v-for="item in labelList"
             :key="item.id">
			<div class="activity_txt"  @click="changLabel(item)">
				{{item.name}}
			</div>
			<template v-if="item.isSelect">
				<span @click="changCloseLabel(item)" class="activity_close"></span>
			</template>
          <div v-if="item.isLine"
               class="line"></div>
        </div>
      </div>
      <div class="type"></div>
    </div>
    <h-card>
      <div class="catlist">
		  
        <div class="tag-group" style="display: flex;">
          <div class="tag-group__title">类目</div>
          <div>
            <div v-for="(item,index) in botlist"
                 :key="index"
                 :class="[item.isSelect?'actives':'']"
                 @click="checkCategoy(item)">
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="bottom">
          <div v-for="(item,index) in bottomlist"
               :key="index"
               :class="['list',item.isSelect?'active':'']"
               @click="checkNav(item)">
            {{item.name}}
          </div>
        </div>
      </div>
    </h-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      labelList: [
        {
          id: 1,
          name: '一元秒杀',
          isSelect: false,
          isLine: true
        },
        {
          id: 2,
          name: '引流款',
          isSelect: false,
          isLine: true
        },
        {
          id: 3,
          name: '高佣',
          isSelect: false,
          isLine: true
        },
        {
          id: 4,
          name: '超级大牌',
          isSelect: false,
          isLine: false
        },
      ],
      type: 1,
      order_field: 1,
      pageIndex: 1,
      pageSize: 10,
      category: -1, //类目id,请求达人数据的时候用 -1全部
      botlist: [],
      bottomlist: [
        { filed: "", name: '综合', isSelect: true },
        { filed: "create_time", name: '最新上架', isSelect: false },
        { filed: "price", name: '价格', isSelect: false },
        { filed: "commission", name: '佣金比例', isSelect: false }
      ],

    }
  },
  mounted () {
    this.getCategory();
  },
  methods: {
    // 不是vip不让切换类目
    // 类目切换
    checkCategoy (item) {
      this.pageIndex = 1;
      this.pageSize = 10;
      this.botlist.map((v) => v.name == item.name ? v.isSelect = true : v.isSelect = false)
      // this.category = this.botlist[index].id
      this.category = item.id
      this.$emit('checkCategoy', item)
    },
    // 综合切换
    checkNav (item) {
      // 不是vip不让切换综合
      this.bottomlist.map((v) => v.name == item.name ? v.isSelect = true : v.isSelect = false)
      this.$emit('checkNav', item)
    },
    // 秒杀切换
    changLabel (item) {
      this.pageIndex = 1;
      this.pageSize = 10;
      this.labelList.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
      this.type = item.id
      this.$emit('changLabel', item)
	  
    },
	// 关闭选中
	changCloseLabel (item) {
		this.pageIndex = 1;
		this.pageSize = 10;
		this.labelList.forEach(item2 => {
		  item2.isSelect = false
		})
		this.type = 1
		this.$emit('changCloseLabel', item);
	},
    getCategory () {
      var that = this
      that.botlist = [
        { id: -1, name: '不限', isSelect: true }
      ],
        this.$axios({
          url: "Plblics/getCategory/",
          method: "get",
        }).then((res) => {
          if (res.data.status == 0) {
            var cre_list = res.data.result
            for (var i = 0; i < cre_list.length; i++) {
              cre_list[i].isSelect = false
            }
            that.botlist = [...that.botlist, ...cre_list]
          } else {
            this.$message.error(res.data.msg);
          }
        });
    },
  }
}
</script>

<style lang="less" scoped>
.header {
  // width: 1024px;
  margin: 0 auto;
  .top-index {
    height: 80px;
    width: 100%;
    background-color: #fff;
    margin: 80px 0;
    position: relative;
    .box-top {
      width: 992px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 0 0.8px #d9d9d9;
      height: 64px;
      display: grid;
      grid-template-columns: repeat(4, 25%);
      justify-content: center;
      align-items: center;
      .title-box {
        // border-right: 016px solid #d9d9d9;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 64px;
        position: relative;
        .title1 {
          font-size: 12px;
          font-weight: 600;
        }
        .dsc {
          padding: 5px 0;
          font-size: 10px;
          font-weight: 100;
        }
        .line {
          width: 16px;
          height: 32px;
          position: absolute;
          background-color: #d9d9d9;
          right: 0;
        }
      }
      .active-style {
        background-color: #ff914d;
        color: white;
      }
      .title-box:nth-last-child(1) {
        border: none;
      }
    }
  }
  .center {
    margin-bottom: 20px;
    .label {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        height: 80px;
        background: #fff;
        box-shadow: 0 1px 5px 0 #999;
        border-radius: 4px;
		overflow: hidden;
		.activity {
			cursor: pointer;
			height: 100%;
			font-size: 16px;
			font-weight: 600;
			width: 100%;
			padding-bottom: 15px;
			padding-top: 15px;
			box-sizing: border-box;
			.activity_txt{
				display: flex;
				width: 100%;
				height: 100%;
				border-right: 1px solid #e4e7ed;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				position: relative;
			}
			.activity_close{
				background-image: url('../../assets/close-icon.png');
				background-size: 100%;
				background-repeat: no-repeat;
				position: absolute;
				right: 5px;
				top: 5px;
				width: 20px;
				height: 20px;
				display: block;
			}
		}
		.actives {
			background: linear-gradient(135deg,#ff8b55,#ff5f3a);
			color: #fff!important;
			position: relative;
			.activity_txt{
				border-right: none;
			}
		}
      .activity:nth-last-child(1) {
        border: none;
      }
    }
  }

.tag-group {
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  /* margin: 10px auto; */
  box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1);
  margin-bottom: 20px;
  .tag-group__title {
  	min-width: 40px;
  	max-width: 40px;
  	font-weight: bold;
	margin-top: 8px;
	font-size: 14px;
	color: #333 !important;
	text-indent: unset !important;
  }
  .actives {
  	background: #ff7752;
    color: #fff !important;
  	border-radius: 18px;
    padding: 8px 15px;
  }
  div{
  	flex-flow: row wrap;
  	align-items: center;
  }
  
}




  /deep/.h-card-bottom {
    .catlist {
      > div:nth-of-type(1) {
        display: flex;
        > div:nth-of-type(1) {
          color: #a699b3;
          width: 140px;
          text-indent: 30px;
          font-weight: bold;
        }
        > div:nth-of-type(2) {
          // margin-left: 10px;
          display: flex;
          flex-wrap: wrap;
          > div {
            // margin: 0 10px 10px;
            // cursor: pointer;
            // padding: 2px 6px;
            margin: 0 20px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            padding: 0 15px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            color: #606266;
          }
        }
      }
    }
  }
  .bottom {
    height: 30px;
    margin: 15px 0;
    border-radius: 8px;
    background-color: rgba(231, 236, 241, 0.5);
    display: flex;
    align-items: center;
    .list {
      width: 80px;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
    }
    .active {
      color: #ff6940;
    }
  }
}
</style>