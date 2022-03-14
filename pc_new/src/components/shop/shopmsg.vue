<template>
	<h-card>
		<div class="shopright">
			<div class="rightyop">
				<div class="shopimg">
					<img :src="shopTitle.logo" alt="">
					<div style="display:flex;position: absolute;left: 0; bottom: 0;">
						<div style="margin:0 10px;">商品:<span style="color:red;">{{shopTitle.goods}}</span></div>
						<div style="margin:0 10px;">商家:<span style="color:red;">{{shopTitle.shop}}</span></div>
						<div style="margin:0 10px;">物流:<span style="color:red;">{{shopTitle.wuliu}}</span></div>
					</div>
				</div>
				<div class="shoptitle">
					<div class="shoptitle_one">
						<div class="shoptitle_one_title">
							{{shopTitle.name}}
							<div class="shoptitle_one_box">
								<img src="../../assets/address.png" alt="">
								{{shopTitle.address}}
							</div>
						</div>
					</div>
					<div class="shoptitle_two">
						<div class="shoptitle_two_one">
							<span style="color: #999;">类目：</span>{{shopTitle.categories}}
						</div>
						<div v-if="shopTitle.type == 1" class="shoptitle_two_two shoptitle_two_two_one">
						</div>
						<div v-else-if="shopTitle.type == 2" class="shoptitle_two_two shoptitle_two_two_two">
						</div>	
						<div v-else-if="shopTitle.type == 3" class="shoptitle_two_two shoptitle_two_two_three">
						</div>
						<div v-else class="shoptitle_two_two">
						</div>
						
					</div>
					<div class="shoptitle_three">
						<div class="shoptitle_three_box">
							<h2>{{ shopTitle.max_commission || 0 }}%</h2>
							<p>最高佣金</p>
						</div>
						<div class="shoptitle_three_box">
							<h2>{{ shopTitle.goods_count || 0 }}</h2>
							<p>推广商品数</p>
						</div>
						<div class="shoptitle_three_box">
							<h2>{{ shopTitle.month_talent || 0 }}</h2>
							<p>近30天合作达人</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</h-card>
</template>

<script>
	export default {
		props: {
			shopTitle: {
				type: Object,
				default: () => {}
			},
		}
	}
</script>

<style lang="less" scoped>
	
	/deep/.h-card{
		display: block;
	}
	.shopright {

		.rightyop {
			display: flex;
			
			.shopimg {
				width: 35%;
				height: 100%;
				min-height: 210px;
				position: relative;
				text-align: center;
				>img {
					width: 150px;
					height: 150px;
					border-radius: 50%;
				}
			}

			.shoptitle {
				width: 680px;
				height: 100%;
				position: relative;
				padding-left: 60px;
				.shoptitle_one {
					position: relative;
					padding-bottom: 20px;
					padding-left: 10px;
					.shoptitle_one_title {
						font-weight: 600;
						font-size: 18px;
					}
					.shoptitle_one_box{
						position: absolute;
						top: 0;
						right: 0;
						font-size: 13px;
						color: #999;
						img{
							width: 13px;
							height: 13px;
						}
					}
				}
				
				.shoptitle_two{
					color: #E37327;
					margin: 20px 0px;
					font-size: 14px;
					padding-left: 10px;
					.shoptitle_two_one{
						margin: 20px 0px;
					}
					.shoptitle_two_two{
						background-repeat: no-repeat;
						background-repeat: no-repeat;
						background-size: 100%;
						height: 30px;
						width: 60px;
						display: block;
					}
					.shoptitle_two_two_one{
						background-image: url(../../assets/top-icon.png);
					}
					.shoptitle_two_two_two{
						background-image: url(../../assets/gongying-icon.png);
					}
					.shoptitle_two_two_three{
						background-image: url(../../assets/yuantou-icon.png);
					}
				}
				
				.shoptitle_three{
					display: flex;
					justify-content: space-between;
					.shoptitle_three_box{
						width: 30%;
						margin: 0 auto;
						h2{
							padding: 10px 0px;
							
						}
						p{
							color: #999;
							font-size: 14px;
						}
					}
				}

			}
		}

		.content {
			margin-top: 20px;
			border: 1px solid #547bb3;
			box-sizing: border-box;
			padding: 10px;
			flex: 1;
		}
	}
</style>
