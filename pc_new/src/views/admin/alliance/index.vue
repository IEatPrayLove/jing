<template>
  <div class="alliance">
    <h-card>
      <Cooperation />
    </h-card>
    <h-card>
      <Cooperationning />
    </h-card>
    <h-card>
      <Cooperationed />
    </h-card>
  </div>
</template>

<script>
import Cooperation from './cooperation.vue'
import Cooperationning from './cooperationning.vue'
import Cooperationed from './cooperationed.vue'
export default {
  components: {
    Cooperation, Cooperationed, Cooperationning
  },

}
</script>

<style lang="less" scoped>
.alliance {
  overflow-x: hidden;
  overflow-y: scroll;
  .alliance::-webkit-scrollbar {
    display: none;
  }
  .h-card:nth-of-type(1) {
    margin: 0;
  }
  .h-card:not(:nth-of-type(1)) {
    margin: 40px 0;
  }
}
</style>