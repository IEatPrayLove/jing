<template>
  <div class="h-card"
       :style="{width:`${width}px`}">
    <transition name="card">
      <section class="h-card-bottom">
        <slot></slot>
      </section>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: '100%'
    }
  }
}
</script>
<style lang="less">
.h-card {
  display: flex;
  flex-direction: column;
  margin-bottom: (5px);
  // box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1);
  background: #fff;
  border-radius: 10px;
  margin: 10px 0;
  .h-card-bottom {
    z-index: 1;
    padding: 10px;
    color: #000;
  }
}
</style>