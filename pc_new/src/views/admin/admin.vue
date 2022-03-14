<template>
	<el-container class="wrapper">
		<Header />
		<div class="contentss">
			<el-aside>
				<el-menu>
					<el-menu-item index="1" @click="jump('/myshop')">
						<span slot="title">我的店铺</span>
					</el-menu-item>
					<!--  <el-menu-item index="2"
                        @click="jump('/shop_info')">
            <i class="el-icon-menu"></i>
            <span slot="title">店铺信息</span>
          </el-menu-item> -->
					<el-menu-item index="4" @click="jump('/goods_list')">
						<span slot="title">我的商品</span>
					</el-menu-item>
					<el-menu-item index="5" @click="jump('/mytalent')">
						<span slot="title">我的达人</span>
					</el-menu-item>
					<el-menu-item index="6" @click="jump('/activity')">
						<span slot="title">官方活动</span>
					</el-menu-item>
					<el-menu-item index="7" @click="jump('/alliance')">
						<span slot="title">建联达人</span>
					</el-menu-item>
					<el-menu-item index="8" @click="jump('/dataDisk')">
						<span slot="title">数据大盘</span>
					</el-menu-item>
					<!-- <el-menu-item index="9"
                        @click="jump('')">
            <span slot="title">会员中心</span>
          </el-menu-item> -->
				</el-menu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</div>
		<Footer />

	</el-container>
</template>

<script>
	import Header from "@/components/header/index.vue";
	import Footer from "@/components/footer/index.vue";
	export default {
		components: {
			Header,
			Footer,
		},
		data() {
			return {
				user: JSON.parse(localStorage.getItem("user")),
			};
		},
		mounted() {
			this.jump("/myshop");
		},
		methods: {
			jump(path) {
				if (path != this.$route.path) {
					this.$router.push(path);
				}
			},
		},
	};
</script>
<style lang='less' scoped>
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
</style>
