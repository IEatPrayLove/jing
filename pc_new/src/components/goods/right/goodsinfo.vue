<template>
  <h-card>
	  <div class="live">
	  	<i></i>
	  	<h2 class="live_liyi">商品详情</h2>
	  </div>
		<div v-html="info.content" class="goods_content">
			{{info.content}}
		</div>
  </h-card>
</template>

<script>
export default {
props: {
    info: {
      default: () => {
        return []
      }
    }
  },
}
</script>

<style lang="less" scoped>
.h-card {
  /deep/.h-card-bottom {
    > div:nth-of-type(2) {
      min-height: 200px;
    }
  }
  .goods_content{
	  padding: 20px 10px;
  }
  .live{
  	display: flex;
  	width: 100%;
  	i{
  		background-image: url('../../../assets/juxing-icon.png');
  		background-size: 100%;
  		width: 30px;
  		height: 30px;
  		display: block;
  	}
  	.live_liyi{
  		font-size: 18px;
  		font-weight: 600;
  		line-height: 30px;
  	}
  }
}
</style>