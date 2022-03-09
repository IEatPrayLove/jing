<template>
  <div class="personcore">
    <b class="person-name">核心指标</b>
    <div class="person-search">
      <div>
        粉丝数
        <el-input-number type="number"
                         :controls="false"
                         :min="0"
                         @change="handlefansminnum"
                         v-model="fansminnum" /><span>万——</span>
        <el-input-number type="number"
                         :controls="false"
                         :min="0"
                         @change="handfansmaxnum"
                         v-model="fansmaxnum" />万
      </div>
      <div class="titlebtn">销售额30天/月
        <el-input-number type="number"
                         :controls="false"
                         :min="0"
                         @change="handminnum"
                         v-model="minnum" />
        <span>万——</span>
        <el-input-number type="number"
                         :controls="false"
                         :min="0"
                         @change="handmaxnum"
                         v-model="maxnum" />万
      </div>
      <div class="titlebtn">场均视均销售额（单场）
        <el-input-number type="number"
                         :controls="false"
                         :min="0"
                         @change="handaverageminnum"
                         v-model="averageminnum" /><span>万——</span>
        <el-input-number type="number"
                         :controls="false"
                         :min="0"
                         @change="handaveragemaxnum"
                         v-model="averagemaxnum" />万
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //粉丝数
      fansminnum: 0,
      fansmaxnum: 9999999,
      //销售额30天/月,
      minnum: 0,
      maxnum: 999999999,
      //场均视均销售额（单场）
      averageminnum: 0,
      averagemaxnum: 999999999,
    }
  },
  methods: {
    // 粉丝数
    handlefansminnum (value) {
      this.fansminnum = value
      this.$emit('handlefansminnum', value)
    },
    handfansmaxnum (value) {
      this.fansmaxnum = value
      this.$emit('handfansmaxnum', value)
    },
    //销售额30天/月,
    handminnum (value) {
      this.minnum = value
      this.$emit('handminnum', value)
    },
    handmaxnum (value) {
      this.maxnum = value
      this.$emit('handmaxnum', value)
    },
    //场均视均销售额（单场）
    handaverageminnum (value) {
      this.averageminnum = value
      this.$emit('handaverageminnum', value)
    },
    handaveragemaxnum (value) {
      this.averagemaxnum = value
      this.$emit('handaveragemaxnum', value)
    },
  }
}
</script>

<style lang="less" scoped>
.personcore {
  display: flex;
  align-items: center;
  text-indent: 10px;
  .person-name {
    width: 74px;
    height: 30px;
    line-height: 38px;
  }
  .person-search {
    display: flex;
    align-items: center;
    > div:nth-of-type(1) {
      margin-right: 20px;
    }
    > div:nth-of-type(2) {
      margin-right: 20px;
    }
  }
  /deep/.el-input-number {
    width: 40px;
    margin: 0 16px 0 0;
    height: 30px;
    .el-input__inner {
      height: 30px;
      padding: 0;
    }
  }
}
</style>