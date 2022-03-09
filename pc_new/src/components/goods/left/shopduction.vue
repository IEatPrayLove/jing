<template>
  <div class="shopduction">
    <h-card>
		<div>
		  <span class="shop_sj">商家介绍:</span>
		  <p class="shop_sj_text">{{info.content}}</p>
		</div>
    </h-card>
  </div>
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
.shopduction {
  /deep/.h-card-bottom {
		min-height: 200px;
		padding: 1.5rem 1rem;
  }
}
.shop_sj{
	line-height: 30px;
	margin: 5px 0px;
	font-size: 16px;
	font-weight: 600;
}
.shop_sj_text{
	text-indent: 2rem;
	line-height: 35px;
	font-size: 15px;
	letter-spacing: 2px;
}
</style>