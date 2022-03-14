<template>
  <div class="topnav">
    <h-card>
      <div class="navlist">
        <div v-for="item in navlist"
             @click="checklist(item)"
             :class="[item.isSelect?'isSelect':'']"
             :key="item.id">
          <span v-if="item.isCheck">{{item.name}}</span>
        </div>
      </div>
      <div @click="checkBox= true">
        <img src="../../assets/person/chilun.png"
             alt="">
      </div>
    </h-card>
    <div class="checkbox"
         v-if="checkBox">
      <div class="box">
        <div>
          <div>平台管理</div>
          <div @click="checkBox= false">X</div>
        </div>
        <div class="boxlist">
          <div v-for="item in navlist"
               :key="item.id"
               @click="checkNav(item)">
            <img :src="item.img"
                 alt=""
                 class="navimg">
            <div class="name">{{item.name}}</div>
            <div class="text">实时同步{{item.name}}}订单</div>
            <img :src="item.isCheck?checkedImg:checkImg"
                 class="checkImg"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        { id: 0, name: '抖音', isSelect: true, img: require('@/assets/person/dy.png'), isCheck: true },
        { id: 1, name: '淘宝', isSelect: false, img: require('@/assets/person/taobao.png'), isCheck: true },
        { id: 2, name: '快手', isSelect: false, img: require('@/assets/person/ks.png'), isCheck: false },
      ],
      checkImg: require('@/assets/person/check.png'),
      checkedImg: require('@/assets/person/checked.png'),
      checkBox: false
    }
  },
  methods: {
    checklist (item) {
      this.navlist.forEach(item2 => {
        item2.isSelect = false
      })
      item.isSelect = true
    },
    checkNav (item) {
      if (item.isCheck) {
        this.$confirm('确认停用吗？应用停用后，将会下线该应用。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.navlist.forEach(item2 => {
            if (item2.id == item.id) {
              item.isCheck = false
            }
          });
          this.$message({
            type: 'success',
            message: '关闭成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消关闭'
          });
        });
        return
      } else {
        this.navlist.forEach(item2 => {
          if (item2.id == item.id) {
            item.isCheck = true
          }
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.topnav {
  /deep/.h-card-bottom {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navlist {
      display: flex;
      margin-left: 20px;
      > div {
        margin-right: 20px;
        padding: 8px 0;
        font-size: 14px;
        cursor: pointer;
      }
      .isSelect {
        color: #547bb3;
        border-bottom: 2px solid #547bb3;
      }
    }
    img {
      vertical-align: sub;
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 40px;
    }
  }
  .checkbox {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    .box {
      padding: 20px 30px;
      width: 480px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      > div:nth-of-type(1) {
        font-size: 18px;
        font-weight: 700;
        > div:nth-of-type(2) {
          position: absolute;
          right: 30px;
          top: 20px;
          cursor: pointer;
        }
      }
      .boxlist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        > div {
          margin-top: 30px;
          box-shadow: 0 4px 16px 0 rgb(178, 185, 202, 0.7);
          cursor: pointer;
          padding: 20px;
          position: relative;
          width: 200px;
          height: 130px;
          box-sizing: border-box;
          border-radius: 4px;
          background: #f1f3f8;
          .navimg {
            width: 100%;
            border-radius: 50%;
            width: 30px;
            height: 30px;
          }
          .name {
            font-size: 18px;
            color: #26272a;
            font-weight: 700;
            margin-top: 20px;
          }
          .text {
            font-size: 12px;
            color: #737e97;
            margin-top: 5px;
          }
          .checkImg {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 10px;
            right: 10px;
          }
        }
      }
    }
  }
}
</style>