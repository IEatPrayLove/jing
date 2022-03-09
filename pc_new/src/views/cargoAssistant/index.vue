<template>
	<el-container class="wrapper">
		<Header />
		
		<div class="contentss">
			<el-aside>
				<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
					<template v-for="item in items">
						<template v-if="item.subs">
							<el-submenu :index="item.index" :key="item.index">
								<template slot="title">
									<i :class="item.icon"></i>
									<span slot="title">{{ item.title }}</span>
								</template>
								<el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.index"
									@click="Com = subItem.com">{{ subItem.title }}</el-menu-item>
							</el-submenu>
						</template>
						<template v-else>
							<el-menu-item :index="item.index" :key="item.index" @click="Com = item.com">
								<i :class="item.icon"></i>
								<span slot="title">{{ item.title }}</span>
							</el-menu-item>
						</template>
					</template>
				</el-menu>
			</el-aside>
			
			<el-container>
				<el-main>
					<component :is="Com"></component>
				</el-main>
			</el-container>
			
		</div>

		<Footer />
	</el-container>
</template>
<script>
	import AccManagement from "./accManagement.vue";
	import DataOverview from "./dataOverview.vue";
	import OrderDetails from "./orderDetails.vue";
	import ProductRanking from "./productRanking.vue";
	import AccRank from "./accRank.vue";
	import ShopRank from "./shopRank.vue";
	import FreeSample from "./freeSamples.vue";
	import PurSample from "./purSample.vue";
	import VedioList from "./vedioLists.vue";
	import Header from "@/components/header/index.vue";
	import Footer from "@/components/footer/index.vue";
	export default {
		components: {
			Header,
			Footer,
		},
		data() {
			return {
				items: [{
						icon: "el-icon-folder-opened",
						index: "1",
						title: "数据概览",
						com: DataOverview,
					},
					{
						icon: "el-icon-setting",
						index: "2",
						title: "账号管理",
						com: AccManagement,
					},
					// {
					//   icon: "el-icon-date",
					//   index: "3",
					//   title: "订单统计",
					//   subs: [
					//     {
					//       index: "3-1",
					//       title: "订单明细",
					//       com: OrderDetails,
					//     },
					//     {
					//       index: "3-2",
					//       title: "产品排行",
					//       com: ProductRanking,
					//     },
					//     {
					//       index: "3-3",
					//       title: "账号排行",
					//       com: AccRank,
					//     },
					//     {
					//       index: "3-4",
					//       title: "店铺排行",
					//       com: ShopRank,
					//     },
					//   ],
					// },
					{
						icon: "el-icon-date",
						index: "4",
						title: "样品管理",
						subs: [{
								index: "4-1",
								title: "免费领样",
								com: FreeSample,
							},
							// {
							//   index: "4-2",
							//   title: "成本购样",
							//   com: PurSample,
							// },
						],
					},
					// {
					//   icon: "el-icon-video-camera",
					//   index: "5",
					//   title: "视频列表",
					//   com: VedioList,
					// },
					// {
					//   icon: "el-icon-date",
					//   index: "6",
					//   title: "关注中心",
					//   subs: [
					//     {
					//       index: "6-1",
					//       title: "免费领样",
					//       com: AccManagement,
					//     },
					//     {
					//       index: "6-2",
					//       title: "成本购样",
					//       com: AccManagement,
					//     },
					//   ],
					// },

				],
				Com: DataOverview,
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>
<style lang="less" scoped>
	.logo {
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #000;
		font-size: 1.2rem;
		font-weight: bold;
		display: flex;
		justify-content: center;
		border-bottom: 2px solid #eceef2;
		border-right: 2px solid #eceef2;
	}
	
	.logo div {
		height: 60px;
		line-height: 60px;
	}
	
	.logo_pic {
		width: 110px;
		height: 30px;
		margin-top: 15px;
	}
	
	.wrapper {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		min-width: 850px;
	
		.el-aside {
			width: 120px !important;
			padding: 20px 0px;
			border-radius: 5px;
			
			.el-menu-item [class^=el-icon-]{
				width: auto !important;
			}
		}
	}
	
	.el-header {
		background-color: rgb(121, 120, 120);
		color: #000;
		text-align: center;
		line-height: 60px;
	}
	
	.contentss {
		display: flex;
		width: 100%;
		max-width: 1200px;
		margin: 20px auto;
		min-height: 800px;
	}
	
	.el-aside {
		text-align: center;
		line-height: 200px;
		background-color: #fff;
	}
	
	.el-main {
		color: rgb(14, 13, 13);
		padding: 0;
		margin-left: 20px;
	}
	
	.el-header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		background-color: #fff;
	
	.avatar {
			width: 50px;
			height: 50px;
			object-fit: cover;
			border-radius: 50%;
			margin-right: 10px;
			cursor: pointer;
		}
	}
	
	/deep/.h-card .h-card-bottom {
		padding: 20px;
	}
	/deep/.el-submenu .el-menu-item{
		min-width: unset !important;
	}
</style>
