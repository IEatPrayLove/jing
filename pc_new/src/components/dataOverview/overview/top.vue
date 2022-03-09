<template>
  <div class="datatop">
    <div>
      <div v-for="item in toplist"
           @click="checklist(item)"
           :class="[item.isSelect?'isSelect':'']"
           :key="item.id">{{item.name}}</div>
    </div>
    <div @click="check">
      {{checkup}}
      <img :src="checkimg"
           alt="">
    </div>
  </div>
</template>

<script>
import down from '@/assets/person/down.png'
import up from '@/assets/person/up.png'
export default {
  data () {
    return {
      toplist: [
        { id: 0, name: '趋势图', isSelect: true },
        { id: 1, name: '商品排行', isSelect: false },
        { id: 2, name: '账号排行', isSelect: false },
        { id: 3, name: '运营人排行', isSelect: false },
      ],
      checkup: '收起',
      checkimg: down
    }
  },
  methods: {
    checklist (item) {
      this.toplist.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
      this.$emit('checkId', item)
    },
    check () {
      this.checkup == '收起' ? this.checkup = "展开" : this.checkup = "收起"
      this.checkimg == down ? this.checkimg = up : this.checkimg = down
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.datatop {
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div:nth-of-type(1) {
    display: flex;
    > div {
      margin-right: 10px;
      padding: 4px 8px;
      border-radius: 10px;
      background: #fff;
      cursor: pointer;
      &:hover {
        color: #bbc3dd;
      }
    }
    .isSelect {
      background: #547bb3;
      color: #fff;
    }
  }
  > div:nth-of-type(2) {
    margin-right: 40px;
    color: #2361ff;
    cursor: pointer;
    > img {
      vertical-align: sub;
    }
  }
}
</style>