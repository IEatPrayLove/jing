<template>
  <div class="mains">
		<div class="tabs">
				<img :class="[curTabs === 0 ?'active':'']" @click="changeTabs(0)" src="../../assets/jingtie/1.png" alt="">
				<img :class="[curTabs === 1 ?'active':'']" @click="changeTabs(1)" src="../../assets/jingtie/2.png" alt="">
		</div>
    <Header v-if="curTabs === 0" />
    <Center v-if="curTabs === 1" />
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
	data(){
		return{
			curTabs:0
		}
	},
	methods:{
		changeTabs(index){
			this.curTabs = index
		}
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
	.tabs{
		display: flex;
		justify-items: center;
		align-items: center;
		img{
			width: 48%;
			height: 200px;
			flex: 1;
			&:not(:first-child){
				margin-left: 2%;
			}
		}
	}
	.active{
		box-shadow: 0px 0px 8px 4px orange;
		box-sizing: border-box;
	}
</style>