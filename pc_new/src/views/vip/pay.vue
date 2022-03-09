<template>
	
	<div class="mains">
		<h-card>
			<div class="user_info">
				<div class="user_info_avatar">
					<img :src="user.avatarUrl" >
				</div>
				<div class="user_info_txt">
					<h2>{{user.nickName}} <span>商家</span></h2>
					<div class="user_fenzu">
						<img v-if="vip_info.vip_name == '我是达人'" src="../../assets/user-icon.png" @click="$router.push('/user')">
						<img v-if="vip_info.vip_name == '会员中心'" src="../../assets/user-icon.png" @click="$router.push('/user')">
						<img v-if="vip_info.vip_name == '专业版'" src="../../assets/zhuanye-icon.png" @click="$router.push('/user')">
						<img v-if="vip_info.vip_name == '旗舰版'" src="../../assets/qijian-icon.png" @click="$router.push('/user')">
					</div>
				</div>
				<!-- <div class="shop_logo">
					<img src="@/assets/logo.png" />
				</div> -->
			</div>
		</h-card>
		
		<h-card>
			<div class="user_info_path" @click="$router.push('/user')">
			</div>
			<div class="pay_type">
				<div class="pay_zyb" :class="{istype:iszhuanye}" @click="viptype('jichu')">
					<h2>专业版<i></i></h2>
					<p>年卡 <i></i> <em>6999</em>/年</p>
				</div>
				<div class="pay_qijian" :class="{istype:isqijian}" @click="viptype('qijian')">
					<h2>旗舰版<i></i></h2>
					<p>年卡 <i></i> <em>19999</em>/年</p>
				</div>
			</div>
			
			<div class="pay_pay">
				<div class="pay_pay_one">
					<span>支付方式</span>
				</div>
				<div class="pay_pay_two">
					<span :class="{ispay:iszfb}" @click="paytype('zfb')"><i></i>支付宝</span>
					<span :class="{ispay:isweixin}" @click="paytype('weixin')"><i></i>微信</span>
					<p>企业对公账户如何支付？</p>
				</div>
				<div class="pay_pay_three">
					<span>确认购买即表示您同意鲸大大<em style="color: #5A7FB6;">服务协议</em>和<em style="color: #5A7FB6;">隐私条款</em></span>
				</div>
				<div class="pay_pay_for">
					<img v-show="iszfb" src="@/assets/zfb.png" >
					<img v-show="isweixin" src="@/assets/weixin.png" >
				</div>
			</div>
			
			<div class="pay_btn">
				<div class="pay_btn_one">
					<span>支付金额：</span>
				</div>
				<div class="pay_btn_info">
					<div class="pay_btn_money">
						<i></i> <em style="color: #FABA7A;">{{price}}</em>/年
					</div>
					<div class="pay_btn_tj" @click="$router.push('/user')">
						<h2>我已付款</h2>
					</div>
				</div>
			</div>
		</h-card>
	</div>
</template>

<script>
	import {
		GetUserInfo,
		getVipInfo
	} from "@/utils/request.js";
	export default {
		data() {
			return {
				centerDialogVisible: false,
				navlist: [{
						id: 0,
						name: '个人资料',
						isSelect: true
					},
					{
						id: 1,
						name: '会员中心',
						isSelect: false
					},
				],
				infolist: [{
						id: 0,
						name: '绑定手机号',
						info: '12345678900'
					},
					{
						id: 0,
						name: '绑定微信号',
						info: '12345678900'
					}
				],
				navId: 0,
				vip_info: "",
				user: "",
				iszfb: true,
				isweixin:false,
				iszhuanye: true,
				isqijian: false,
				price: 6999,
			}
		},
		mounted() {
			let that = this
			GetUserInfo({
				token: localStorage.getItem("token")
			}).then((events) => {
				
				if (events.status == 0) {
					let userInfo = events.result
					localStorage.setItem(
						"user",
						JSON.stringify(userInfo)
					);
					that.user = userInfo;
					//获取商家会员信息
					getVipInfo({
						token: localStorage.getItem("token")
					}).then((vips) => {
						if (vips.status == 0) {
							that.vip_info = vips.result
						}
					})
				}
			})
		},
		methods: {

			checkNav(item) {
				this.navlist.forEach(item2 => {
					item2.isSelect = false
				})
				item.isSelect = true
				this.navId = item.id
			},
			handleClose(done) {
				done();
			},
			paytype(type){
				if(type == 'zfb'){
					this.iszfb = true;
					this.isweixin = false;
				}else{
					this.iszfb = false;
					this.isweixin = true;
				}
			},
			viptype(type){
				if(type == 'jichu'){
					this.iszhuanye = true;
					this.isqijian = false;
					this.price = 6999
				}else{
					this.isqijian = true;
					this.iszhuanye = false;
					this.price = 19999
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	
	.mains{
		width: 100%;
		max-width: 1200px;
		position: relative;
		margin: 0 auto;
		overflow: hidden;
		em{
			font-style: normal;
		}
		.user_info{
			width: 100%;
			min-height: 140px;
			padding: 50px 100px;
			position: relative;
			overflow: hidden;
			display: flex;
			.user_info_avatar{
				width: 100px;
				height: 100px;
				overflow: hidden;
				margin-right: 50px;
				img{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.user_info_txt{
				height: 100px;
				max-width: 300px;
				position: relative;
				overflow: hidden;
				h2{
					span{
						font-weight: 400;
						padding-left: 30px;
					}
				}
				.user_fenzu{
					position: absolute;
					left:0;
					bottom: 0;
					width: 100px;
					height: 30px;
					overflow: hidden;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
			.shop_logo{
				position: absolute;
				top: 0;
				right: 0;
				width: 180px;
				height: 70px;
				overflow: hidden;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		
		/deep/.h-card .h-card-bottom{
			position: relative;
		}
		.user_info_path{
			position: absolute;
			top: 30px;
			right: 100px;
			width: 30px;
			height: 30px;
			font-size: 20px;
			font-weight: 600;
			cursor: pointer;
			background-image: url(../../assets/close-icon.png);
			background-repeat: no-repeat;
			background-size: contain;
		}
		.pay_type{
			width: 100%;
			height: 180px;
			display: flex;
			// justify-content: space-between;
			padding: 10px 100px;
			text-align: center;
			.istype{
				background-color: #4E658E !important;
				em{
					color: #FABA7A;;
				}
			}
			.pay_zyb{
				width: 35%;
				height: 100%;
				margin-right: 50px;
				background-color: #C7DBF4;
				border-radius: 20px;
				position: relative;
				h2{
					margin-top: 30px;
					font-size: 28px;
					font-weight: 600;
					display: flex;
					justify-content: center;
					align-items: center;
					i{	
						display: block;
						width: 30px;
						height: 30px;
						margin-left: 10px;
						background-image: url(../../assets/zhuanye.png);
						background-size: 30px;
					}
				}
				p{
					position: absolute;
					left: 50%;
					bottom: 30px;
					transform: translate3d(-50%,0,0);
					font-size: 18px;
					display: flex;
					justify-content: center;
					align-items: center;
					i{	
						display: block;
						width: 20px;
						height: 20px;
						margin: 0px 5px;
						background-image: url(../../assets/qian.png);
						background-size: 20px;
					}
				}
			}
			
			.pay_qijian{
				width: 35%;
				height: 100%;
				background-color: #C7DBF4;
				border-radius: 20px;
				position: relative;
				h2{
					margin-top: 30px;
					font-size: 28px;
					font-weight: 600;
					display: flex;
					justify-content: center;
					align-items: center;
					i{	
						display: block;
						width: 30px;
						height: 30px;
						margin-left: 10px;
						background-image: url(../../assets/qijian.png);
						background-size: 30px;
					}
				}
				p{
					position: absolute;
					left: 50%;
					bottom: 30px;
					transform: translate3d(-50%,0,0);
					font-size: 18px;
					display: flex;
					justify-content: center;
					align-items: center;
					i{	
						display: block;
						width: 20px;
						height: 20px;
						margin: 0px 5px;
						background-image: url(../../assets/qian.png);
						background-size: 20px;
					}
				}
			}
		}
		
		.pay_pay{
			width: 100%;
			height: 600px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20px 100px;
			padding-bottom: 35px;
			border-bottom: 1px solid #C7DBF4;
			.pay_pay_one{
				font-size: 18px;
				font-weight: 600;
			}
			.pay_pay_two{
				display: flex;
				.ispay{
					background-color: #C7DBF4;
				}
				span{
					text-align: center;
					position: relative;
					line-height: 20px;
					width: 150px;
					padding: 10px 30px;
					border: 1px solid #C7DBF4;
					border-radius: 5px;
					font-size: 16px;
				}
				span:nth-of-type(1){
					margin-right: 20px;
					i{
						position: absolute;
						top: 50%;
						left: 15px;
						transform: translate3d(0,-50%,0);
						background-image: url(../../assets/zhifubao.png);
						background-size: 30px;
						width: 30px;
						height: 30px;
						display: block;
					}
				}
				span:nth-of-type(2){
					i{
						position: absolute;
						top: 50%;
						left: 15px;
						transform: translate3d(0,-50%,0);
						background-image: url(../../assets/wechat-icon.png);
						background-size: 30px;
						width: 30px;
						height: 30px;
						display: block;
					}
				}
				p{
					line-height: 20px;
					padding: 10px 30px;
					font-size: 18px;
					color: #66b1ff;
				}
			}
			.pay_pay_three{
				font-size: 16px;
			}
			.pay_pay_for{
				margin-top: 50px;
				width: 350px;
				height: 350px; 
				margin: 0 auto;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		
		
		.pay_btn{
			width: 100%;
			height: 120px;
			display: flex;
			position: relative;
			overflow: hidden;
			flex-direction: column;
			justify-content: space-between;
			padding: 20px 100px;
			
			.pay_btn_one{
				font-size: 18px;
				font-weight: 600;
			}
			.pay_btn_info{
				position: relative;
				overflow: hidden;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.pay_btn_money{
					width: 300px;
					font-size: 26px;
					display: flex;
					align-items: center;
					i{	
						display: block;
						width: 20px;
						height: 20px;
						margin: 0px 5px;
						background-image: url(../../assets/qian.png);
						background-size: 20px;
					}
				}
				
				.pay_btn_tj{
					width: 150px;
					background-color: #4E658E;
					padding: 10px 20px;
					border-radius: 5px;
					h2{
						font-weight: 400;
						text-align: center;
						line-height: 18px;
					}
				}
			}
		}
	}
	
</style>
