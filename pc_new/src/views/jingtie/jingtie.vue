<template>
  <div class="mains">
    <Header />
    <Center />
  </div>
</template>
<script>
import Header from "./header.vue";
import Center from "./center.vue";

export default {
  components: {
    Header,
    Center,
  },
};
</script>
<style lang="less" scoped>
	.mains{
		width: 100%;
		max-width: 1200px;
		margin: 20px auto;
	}
	.allowance {
	  width: 1200px;
	  margin: 20px auto;
	}
</style>