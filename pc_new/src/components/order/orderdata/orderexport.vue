<template>
  <div class="orderexport">
    <div class="orderbox">
      <div class="ordertop">
        <div>订单导出</div>
        <div @click="$emit('closeorder')">X</div>
      </div>
      <div class="orderlist">
        <div>导出条件</div>
        <div class="list">
          <div>创建时间：</div>
          <el-date-picker v-model="orderlist.tiem"
                          disabled
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          align="right">
          </el-date-picker>
        </div>
        <div class="list">
          <div>订单状态:</div>
          <input type="text"
                 v-model="orderlist.order"
                 disabled
                 placeholder="-">
        </div>
        <div class="list">
          <div>订单类型：</div>
          <input type="text"
                 v-model="orderlist.shopvalue"
                 disabled
                 placeholder="-">
        </div>
        <div class="list">
          <div>运营人：</div>
          <input type="text"
                 v-model="orderlist.operatorsvalue"
                 disabled
                 placeholder="-">
        </div>
        <div class="list">
          <div>分组:</div>
          <input type="text"
                 v-model="orderlist.groupsvalue"
                 disabled
                 placeholder="-">
        </div>
        <div class="list">
          <div>账号：</div>
          <input type="text"
                 v-model="orderlist.shopvalue"
                 disabled
                 placeholder="-">
        </div>
        <div class="list">
          <div>商品：</div>
          <input type="text"
                 v-model="orderlist.goodsvalue"
                 disabled
                 placeholder="-">
        </div>
      </div>
      <div class="orderbottom">
        <div>导出规则</div>
        <div>1.如果包含当前时间，则只能导出当前时间3分钟前的订单。</div>
        <div>2.已导出的下载任务，会保留30天</div>
      </div>
      <div class="btns">
        <div @click="$emit('closeorder')">取消</div>
        <div @click="$emit('closeorder')">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderlist: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.orderexport {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  .orderbox {
    margin: 12vh auto 0;
    width: 530px;
    text-align: initial;
    padding: 25px 25px 30px;
    background: #fff;
    position: relative;
  }
  .ordertop {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebeef5;
    color: rgba(0, 0, 0, 0.65);
    > div:nth-of-type(2) {
      position: absolute;
      right: 22px;
      top: 26px;
      cursor: pointer;
    }
  }
  .orderlist {
    margin-top: 14px;
    .list {
      display: flex;
      margin: 8px 0;
      > div:nth-of-type(1) {
        width: 140px;
      }
      input {
        width: 300px;
        height: 32px;
        background: #f2f4f8;
        border: none;
        text-indent: 18px;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-around;
    margin-top: 18px;
    > div {
      width: 60px;
      height: 30px;
      line-height: 30px;
      background: #f1f3f8;
      text-align: center;
      border-radius: 8px;
      cursor: pointer;
    }
    > div:nth-of-type(2) {
      background: #547bb3;
      color: #fff;
    }
  }
}
</style>