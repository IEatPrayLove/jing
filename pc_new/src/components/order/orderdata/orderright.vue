<template>
  <div class="orderright">
    <div class="box">
      <div class="top">
        <div>导出任务列表</div>
        <div @click="$emit('closeright')">X</div>
      </div>
      <div class="list">
        暂无任务
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.orderright {
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
  .box {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 628px;
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: rtldrawerin 225ms cubic-bezier(0, 0, 0.2, 1) 0s;
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 20px 4px;
      position: relative;
      border-bottom: 1px solid #ccc;
      > div:nth-of-type(1) {
        font-weight: 700;
        font-size: 16px;
      }
      > div:nth-of-type(2) {
        position: absolute;
        top: 24px;
        right: 24px;
        cursor: pointer;
      }
    }
    .list {
      flex: 1;
    }
  }
}
@keyframes rtldrawerin {
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translate(0);
  }
}
</style>