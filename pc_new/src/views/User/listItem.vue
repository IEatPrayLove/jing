<template>
	<div class="team-work" :style="{ backgroundColor: `${listItems.color}` }">
		<div class="container">
			<div class="line"></div>
			<div class="title">
				{{ listItems.title
        }}<span style="font-weight: 100">{{ listItems.title1 }}</span>
			</div>
			<div class="list" v-for="(item, index) in listItems.list" :key="index">
				<div class="item-name">{{ item.title }}</div>
				<div class="number" v-for="(o, inx) in item.items" :key="inx">
					<img :src="o.icon" alt="" style="width:24px; height:24px;">
					<div class="none">{{ o.mount }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			listItems: Object,
		},
	};
</script>
<style lang="less" scoped>
	.team-work {
		border-radius: 16px;

		.container {
			position: relative;
			padding: 30px 20px;
		}

		.line {
			position: absolute;
			top: 48px;
			left: 8px;
			width: 80px;
			height: 6px;
			background-color: #87aee0;
			border-radius: 16px;
			// z-index: -1;
			opacity: .5;
		}

		.number {
			display: flex;
			align-items: center;
			width: 120px;
		}
		.item-name{
			width: 200px;
		}
		i {
			font-size: 16px;
			color: tomato;
		}

		.none {
			// width: 50px;
			padding-left: 5px;
			line-height: 24px;
			text-align: left;
		}

		.title {
			font-size: 18px;
			font-weight: 600;
			z-index: 5;
			margin-bottom: 20px;
		}

		.list {
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			line-height: 30px;
			margin: 20px 0px;
		}
	}
</style>
