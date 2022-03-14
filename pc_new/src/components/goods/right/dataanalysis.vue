<template>
	
<h-card>
    <div class="goodspoint">
    	<div>
			<div class="danpin">
    			<i></i>
    			<h2 class="danpin_liyi">单品数据分析</h2>
			</div>
			<div class="danpin_list">
				<div class="danpin_box">
					<h2>{{info.month_views}}W</h2>
					<p>30天浏览量</p>
					<span>30天带货视频 {{info.month_videos}}个</span>
				</div>
				<div class="danpin_box">
					<h2>{{info.month_sales}}W</h2>
					<p>30天销量</p>
					<span>30天带货直播 {{info.month_live}}个</span>
				</div>
				<div class="danpin_box">
					<h2>{{info.month_conversion}}%</h2>
					<p>30天转化率</p>
					<span>30天热推达人 {{info.month_hot_talent}}个</span>
				</div>
			</div>
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
		.danpin_list{
			width: 100%;
			display: flex;
			justify-content: space-between;
			text-align: center;
			letter-spacing: 2px;
			padding: 20px 0px;
			h2{
				font-size: 18px;
				line-height: 30px;
				font-weight: 600;
			}
			p{
				font-size: 14px;
				color: #999;
				line-height: 20px;
				padding: 10px 0px;
				margin-bottom: 20px;
			}
			span{
				background-color: #FFF8F3;
				text-align: center;
				line-height: 20px;
				font-size: 14px;
				padding: 10px 20px;
			}
		}
		
    }
  }
}
</style>