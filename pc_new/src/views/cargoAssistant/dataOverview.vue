<template>
	<div class="data-view">
		<div class="top">
			<div class="title">
				<i class="el-icon-box" style="color: bule; font-size: 16px; margin-right: 8px"></i>我的带货数据
			</div>
			<div class="type">
				<div class="s-title">抖音<i class="el-icon-caret-bottom"></i></div>
				<div class="s-title">付款时间<i class="el-icon-caret-bottom"></i></div>
			</div>
			<div class="time">
				<div class="list">今日</div>
				<div class="list">昨日</div>
				<div class="list">最近7天</div>
				<div class="list">最近30天</div>
				<div class="list">本月</div>
				<div class="list">上月</div>
				<div class="list">最近60天</div>
				<div class="list">最近90天</div>
				<div class="list">全部</div>
			</div>
			<div class="pics">
				<i class="el-icon-question"></i>
			</div>
		</div>
		<div class="center">
			<div class="item">
				<div class="tit">全部销售额（元）<i class="el-icon-question"></i></div>
				<div class="mount">0.00</div>
			</div>
			<div class="item">
				<div class="tit">全部销售额（元）<i class="el-icon-question"></i></div>
				<div class="mount">0.00</div>
			</div>
			<div class="item">
				<div class="tit">全部销售额（元）<i class="el-icon-question"></i></div>
				<div class="mount">0.00</div>
			</div>
			<div class="item">
				<div class="tit">全部销售额（元）<i class="el-icon-question"></i></div>
				<div class="mount">0.00</div>
			</div>
			<div class="item">
				<div class="tit">全部销售额（元）<i class="el-icon-question"></i></div>
				<div class="mount">0.00</div>
			</div>
		</div>
		<div class="bottom">
			<DataOverview />
		</div>
	</div>
</template>
<script>
	import DataOverview from '../../components/dataOverview/index.vue'
	export default {
		components: {
			DataOverview
		}
	};
</script>
<style lang="less" scoped>
	.data-view {
		// width: 100%;
		background: #fff;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 6px 6px 4px rgba(97, 112, 241, 0.26);

		.top {
			display: flex;
			align-items: center;

			.title {
				font-size: 16px;
				font-weight: 600;
			}

			.type {
				display: flex;

				.s-title {
					margin-left: 24px;
					font-size: 14px;
				}
			}

			.time {
				display: flex;
				margin-left: 8px;
				font-size: 14px;
				cursor: pointer;

				.list {
					margin-left: 8px;
				}
			}

			.pics {
				margin-left: 16px;
			}
		}

		.center {
			display: grid;
			margin: 32px;
			grid-template-columns: repeat(5, 20%);

			.item {
				font-size: 10px;
				font-weight: 100;

				.mount {
					font-size: 16px;
					font-weight: 600;
					margin-top: 12px;
				}
			}
		}

		.bottom {
			width: 96%;
			background-color: #f5f7fa;
			padding: 10px;
		}
	}
</style>
