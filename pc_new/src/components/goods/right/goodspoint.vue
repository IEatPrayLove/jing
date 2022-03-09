<template>
<h-card v-if="info.interest_point || info.selling_point">
	
    <div class="goodspoint">
		
      <div v-if="info.interest_point">
        <div class="live">
			<i></i>
			<h2 class="live_liyi">直播利益点:</h2>
        </div>
        <div class="live_txt">{{info.interest_point}}</div>
      </div>
      <div v-if="info.selling_point">
        <div class="goods_md">
         <i></i>
          <h2 class="goods_md_title">商品卖点：</h2>
        </div>
        <div class="goods_md_txt">{{info.selling_point}}</div>
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
			margin: 20px 0px;
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
		.danpin{
			display: flex;
			width: 100%;
			i{
				background-image: url('../../../assets/juxing-icon.png');
				background-size: 100%;
				width: 30px;
				height: 30px;
				display: block;
			}
			.danpin_liyi{
				font-size: 18px;
				font-weight: 600;
				line-height: 30px;
			}
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
		.live_txt{
			margin-left: 30px;
			padding: 20px 0px;
			white-space: break-spaces;
		}
		
		.goods_md{
			display: flex;
			width: 100%;
			i{
				background-image: url('../../../assets/juxing-icon.png');
				background-size: 100%;
				width: 30px;
				height: 30px;
				display: block;
			}
			.goods_md_title{
				font-size: 18px;
				font-weight: 600;
				line-height: 30px;
			}
		}
		.goods_md_txt{
			margin-left: 30px;
			padding: 20px 0px;
			white-space: break-spaces;
		}
    }
  }
}
</style>