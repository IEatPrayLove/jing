<template>
	
  <div id="app">
    <Header :path="index" />
    <router-view @event="changePath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      index: 0
    };
  },
  methods:{
    changePath:(value)=>{
      this.index = value
    }
  }
};
</script>

<style lang='less' scoped>
#app {
	font-size: 14px;
	color: #333;
}
</style>