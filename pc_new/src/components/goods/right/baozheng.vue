<template>
	
<h-card>
    <div class="goodspoint">
		<div class="baozheng">
    		<img src="../../../assets/bao-icon.png">
		</div>
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
    .goodspoint {
		svg {
			vertical-align: sub;
		}
		> div:nth-of-type(1) {
			margin-top: 20px;
			letter-spacing: 2px;
			> div:nth-of-type(2) {
			// min-height: 120px;
			}
		}
		> div:nth-of-type(2) {
			margin: 20px 0px;
			letter-spacing: 2px;
			> div:nth-of-type(2) {
			// min-height: 120px;
			}
		}
		.baozheng{
			width: 100%;
			height: 60px;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		
		
    }
  }
}
</style>