<template>
	<div id="myChart" :style="{width: '100%', height: '400px'}"></div>
</template>

<script>
	import * as echarts from "echarts";
	export default {
		mounted() {
			this.$nextTick(() => {
				this.drawLine();
			})
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {},
					tooltip: {},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						itemStyle: {
							normal: {
								color: '#4B70A8', //圈圈的颜色

							}
						},
						data: [5, 20, 36, 10, 10, 20]
					}]
				});
			}
		}
	}
</script>

<style lang="less" scoped>
</style>
