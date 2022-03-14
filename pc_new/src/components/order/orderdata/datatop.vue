<template>
  <div class="datatop">
    <div>
      汇总数据
      <img src="../../../assets/person/chilun.png"
           alt="">
    </div>
    <div class="topnum">
      <div v-for="item in datalist"
           :key="item.id">
        <div>{{item.name}}
          <el-tooltip class="item"
                      effect="dark"
                      :content="item.title"
                      placement="top">
            <img src="../../../assets/person/help.png"
                 alt="">
          </el-tooltip>

        </div>
        <div v-if="item.isNum"
             class="num">{{item.num.toFixed(2)}}</div>
        <div v-else
             class="num">{{item.num}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: [
        { id: 0, name: '全部销售额', isNum: true, num: 0.00, title: '全部销售额 = 所有订单的付款金额总和' },
        { id: 1, name: '全部佣金', isNum: true, num: 0.00, title: '全部佣金 = 所有订单收入之和' },
        { id: 2, name: '有效佣金', isNum: true, num: 0.00, title: '有效佣金 = 订单已支付 + 订单收货 + 已结算状态订单的付款金额之和' },
        { id: 3, name: '全部单数', isNum: false, num: 0, title: '全部单数= 所有状态订单数' },
        { id: 4, name: '有效单数', isNum: false, num: 0, title: '有效单数 = 订单已支付 + 订单收货 + 已结算状态订单数' },
        { id: 5, name: '退款率', isNum: false, num: 0, title: '退款率 = 退款单数/全部单数' },
      ]
    }
  }

}
</script>

<style lang="less" scoped>
.datatop {
  > div:nth-of-type(1) {
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 0.5px solid #f1f3f8;
    > img {
      margin-left: 10px;
      width: 20px;
      height: 20px;
      vertical-align: sub;
    }
  }
  .topnum {
    display: flex;
    justify-content: space-around;
    margin-top: 14px;
    > div {
      > div:nth-of-type(1) {
        font-size: 12px;
        color: #8d97af;
        height: 30px;
        > img {
          width: 14px;
          height: 14px;
          vertical-align: sub;
          cursor: pointer;
          margin-left: 8px;
        }
      }
      .num {
        font-size: 18px;
      }
    }
  }
}
</style>