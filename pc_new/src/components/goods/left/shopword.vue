<template>
  <div class="shopword">
    <h-card>
      <div class="tab_title">店铺标签</div>
      <div class="list">
        <div v-for="item in info.cooperation "
             :key="item"
			 :class="{tabs:tabs}" :data="ComputedTabs(item)">{{item}}</div>
      </div>
    </h-card>
  </div>
</template>

<script>
export default {
	data(){
		return {
			tabs: false
		}
	},
	props: {
		info: {
		  default: () => {
			return []
		  }
		}
	},
	methods:{
		// 判断是否存在
		ComputedTabs(item) {
			
			var arr= this.info.keywords;// 获取标签
			var status = arr.indexOf(item);
			if(status != '-1')
			{
				this.tabs = true;
			}else{
				this.tabs = false;
			}
		}
	},
	
}
</script>

<style lang="less" scoped>
.shopword {
  /deep/.h-card-bottom {
    min-height: 200px;
    padding: 1.5rem 1rem;
    .list {
      display: flex;
      flex-wrap: wrap;
      > div {
        width: 26%;
        margin: 5px;
		padding: 5px;
		color: #ffffff;
        border-radius: 4px;
        text-align: center;
		background-color: #EFB591;
      }
	  .tabs{
		  background-color: #E0620D;
	  }
    }
	.tab_title{
		line-height: 30px;
		margin: 5px 0px;
		font-size: 16px;
		font-weight: 600;
	}
  }
}
</style>