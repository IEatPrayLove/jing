<template>
	
<h-card>
    <div class="goodspoint">
    	<div>
			<div class="yingxiao">
    			<i></i>
    			<h2 class="yingxiao_liyi">营销转化<span style="color: #999;">(近7日)</span></h2>
			</div>
			<div class="yingxiao_list">
				<div class="yingxiao_box">
					<h2>{{info.estimate_sales||0}}W</h2>
					<p>预估总销量(件)</p>
				</div>
				<div class="yingxiao_box">
					<h2>{{info.estimate_live_sales||0}}W</h2>
					<p>预估直播销量(件)</p>
				</div>
				<div class="yingxiao_box">
					<h2>{{info.estimate_video_sales||0}}W</h2>
					<p>预估视频销量(件)</p>
				</div>
			</div>
			<div class="yingxiao_list_two">
				<div class="yingxiao_box">
					<h2>{{info.estimate_amount||0}}W</h2>
					<p>预估总销售额</p>
				</div>
				<div class="yingxiao_box">
					<h2>{{info.estimate_live_amount||0}}W</h2>
					<p>预估直播销售额</p>
				</div>
				<div class="yingxiao_box">
					<h2>{{info.estimate_video_amount||0}}W</h2>
					<p>预估视频销售额</p>
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
		.yingxiao{
			display: flex;
			width: 100%;
			i{
				background-image: url('../../../assets/juxing-icon.png');
				background-size: 100%;
				width: 30px;
				height: 30px;
				display: block;
			}
			.yingxiao_liyi{
				font-size: 18px;
				font-weight: 600;
				line-height: 30px;
			}
		}
		.yingxiao_list{
			width: 100%;
			display: flex;
			justify-content: space-between;
			text-align: center;
			letter-spacing: 2px;
			padding: 20px 50px;
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
			.yingxiao_box{
				width: 30%;
			}
		}
		
		.yingxiao_list_two{
			width: 100%;
			display: flex;
			justify-content: space-between;
			text-align: center;
			letter-spacing: 2px;
			padding: 0 50px;
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
			.yingxiao_box{
				width: 30%;
			}
		}
		
    }
  }
}
</style>