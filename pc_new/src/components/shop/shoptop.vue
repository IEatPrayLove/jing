<template>
	<div class="shopright" >
		<div v-for="(item,index) in goodsdata.goods_list" :key="index" v-show="index <= 1" class="shopright_box">
			<img :src="item.thumb" >
			<i></i>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			goodsdata:
			{	
				default: () => {
				  return [];
				},
			}
		},
	
	}
</script>

<style lang="less" scoped>
	.shopright {
		width: 30%;
		overflow: hidden;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
			
		.shopright_box{
			width: 100%;
			height: 50%;
			overflow: hidden;
			position: relative;
			img{
				width: 100%;
				height: 100%;
			}
		}
		
		.shopright_box:nth-of-type(1){
			margin-bottom: 20px;
			i{
				background-image: url(../../assets/zhutui-icon.png);
				background-repeat: no-repeat;
				background-size: contain;
				width: 100px;
				height: 30px;
				display: block;
				position: absolute;
				top: 0;
				left: 0;
			}
			
		}
		
		.shopright_box:nth-of-type(2){
			i{
				background-image: url(../../assets/gengduo-icon.png);
				background-repeat: no-repeat;
				background-size: contain;
				width: 100px;
				height: 30px;
				display: block;
				position: absolute;
				bottom: 0;
				right: 0;
			}
		}
		
		
	}
</style>
