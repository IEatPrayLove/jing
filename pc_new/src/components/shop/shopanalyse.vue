<template>
	<div class="shopanalyse">
		<h-card>
			<div class="title">
				<i></i>
				<h2>{{title}}</h2>
			</div>
			<div class="list">
				<div class="list_box">
					<div class="list_box_left">
						<h2>近30天销售额</h2>
						<span>{{ info.month_amount }}W</span>
					</div>
					<div class="list_box_right">
						<h2>近30天销量(件)</h2>
						<span>{{ info.month_sales }}W</span>
					</div>
				</div>
				
				<div class="list_box">
					<div class="list_box_left">
						<h2>近30天关联直播</h2>
						<span>{{ info.month_live }}</span>
					</div>
					<div class="list_box_right">
						<h2>近30天关联视频</h2>
						<span>{{ info.month_video }}</span>
					</div>
				</div>
				
				<div class="list_box">
					<div class="list_box_left">
						<h2>近30天平均转化率</h2>
						<span>{{ info.month_conversion }}%</span>
					</div>
					<div class="list_box_right">
						<h2>近30天客单价</h2>
						<span>{{ info.month_price }}</span>
					</div>
				</div>
			</div>
		</h-card>
		
		<h-card>
			<div class="title">
				<i></i>
				<h2>品牌介绍</h2>
			</div>
			<div class="content">
				{{ info.content }}
			</div>
		</h-card>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
			info: {
			  default: () => {
			    return [];
			  },
			},
			
		},
	}
</script>

<style lang="less" scoped>
	.shopanalyse {
		.h-card {
			/deep/.h-card-bottom {
				padding: 20px;
				
				.content{
					padding: 20px;
				}
				.title {
					display: flex;
					width: 100%;
					i{
						background-image: url(../../assets/juxing-icon.png);
						background-size: 100%;
						width: 30px;
						height: 30px;
						display: block;
					}
					h2{
						font-size: 18px;
						font-weight: 600;
						line-height: 30px;
					}
				}
				.list {
					font-size: 14px;
					padding: 0px 30px;
					.list_box{
						width: 100%;
						overflow: hidden;
						position: relative;
						display: flex;
						flex-direction: row;
						margin: 30px 0px;
						.list_box_left{
							width: 50%;
							h2 {
								display: inline-block;
								text-align: left;
								color: #999;
								font-size: 14px;
							}
							span{
								float: right;
								padding-right: 80px;
								font-size: 16px;
								font-weight: 600;
							}
						}
						.list_box_right{
							width: 50%;
							h2 {
								display: inline-block;
								text-align: left;
								color: #999;
								font-size: 14px;
							}
							span{
								float: right;
								padding-right: 80px;
								font-size: 16px;
								font-weight: 600;
							}
						}
					}
				}
			}
		}
	}
</style>
