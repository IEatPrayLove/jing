<template>
	<div class="content">
		<el-row>
			<el-col :span="6" type="flex" align="middle" v-for="(item, index) in dataList" :key="index">
				<div class="box">
					<div class="img">
						<img :src="item.imgUrl" alt="" style="width: 48px;height:48px;">
					</div>
					<div class="title">{{ item.title }}</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				dataList: [{
						title: "行业分析报告",
						imgUrl: require('@/assets/user/8.png')
					},
					{
						title: "优质资源对接",
						imgUrl: require('@/assets/user/2.png')
					},
					{
						title: "商家带货助手",
						imgUrl: require('@/assets/user/3.png')
					},
					{
						title: "专属1对1撮合",
						imgUrl: require('@/assets/user/4.png')
					},
					{
						title: "达人资源建联",
						imgUrl: require('@/assets/user/5.png')
					},
					{
						title: "商家选品入驻",
						imgUrl: require('@/assets/user/6.png')
					},
					{
						title: "专属活动优选",
						imgUrl: require('@/assets/user/4.png')
					},
					{
						title: "会员高级功能特权",
						imgUrl: require('@/assets/user/1.png')
					},
				],
			};
		},
	};
</script>
<style lang="less" scoped>
	.content {
		width: 100%;
		max-width: 1200px;
		height: 320px;
		margin: 0 auto;

		.box {
			height: 96px;
		}

		.img {
			height: 48px;
			width: 48px;
			border-radius: 50%;
		}

		.title {
			padding-top: 8px;
			font-size: 11px;
			color: #606266;
		}

		.el-col {
			padding: 20px 0px;
		}

		i {
			line-height: 48px !important;
			text-align: center !important;
		}
	}
</style>
