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
					<p class="how_to_pay" @click="showModal">企业对公账户如何支付？</p>
				</div>
				<div class="pay_pay_three" @click="showxieyi">
					<span>确认购买即表示您同意鲸大大<em style="color: #5A7FB6;">服务协议</em>
					<!-- <em style="color: #5A7FB6;">隐私条款</em> -->
					</span>
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
		<el-dialog
			title="企业对公账户"
			:visible.sync="modalStatus"
			width="30%"
		>
			<el-row type="flex" justify="center" style="marginTop:20px;fontSize:18px;">
				<el-col :span="6" :offset="2">账户名称</el-col>
				<el-col :span="12"><div class="copy_item">
					<input id="copy1" type="text" style="border:none;background:#fff;" value="成都鲸至电子商务有限公司">
					<div>成都鲸至电子商务有限公司</div>
					</div></el-col>
				<el-col :span="6">
					<div class="copy" @click="copyText('copy1')">复制</div>
				</el-col>
			</el-row>
			<el-row type="flex" justify="center" style="marginTop:20px;fontSize:18px;">
				<el-col :span="6" :offset="2">银行账户</el-col>
				<el-col :span="12"><div class="copy_item"><input id="copy2" type="text" style="border:none;background:#fff;" value="128909870010802">	<div class="input_item">128909870010802</div></div></el-col>
				<el-col :span="6">
					<div class="copy" @click="copyText('copy2')">复制</div>
				</el-col>
			</el-row>
			<el-row type="flex" justify="center" style="marginTop:20px;fontSize:18px;">
				<el-col :span="6" :offset="2">开户银行</el-col>
				<el-col :span="12"><div class="copy_item"><input id="copy3" type="text"  style="border:none;background:#fff;" value="招商银行成都天府大道支行">	<div>招商银行成都天府大道支行</div></div></el-col>
				<el-col :span="6">
					<div class="copy" @click="copyText('copy3')">复制</div>
				</el-col>
			</el-row>
			<el-row type="flex" justify="center" style="marginTop:20px;fontSize:12px;">
				<el-col style="textAlign:center;color:gray;">对公转账到帐时间可能受银行处理时间影响，建议采用在线支付；</el-col>
			</el-row>
			<el-row type="flex" justify="center" style="marginTop:20px;fontSize:12px;">
				<el-col style="textAlign:center;color:gray;">请通过网银转账或自行到银行进行转账，转账成功后请将汇款底单拍照或截图发送给客服；</el-col>
			</el-row>
			<el-row type="flex" justify="center" style="marginTop:20px;fontSize:12px;">
				<el-col style="textAlign:center;color:gray;">确认汇款到账后即会为您开通相关会员，开通后您可向客服索取发票。</el-col>
			</el-row>
		</el-dialog>
		<el-dialog
			title=""
			:visible.sync="xieyiShow"
		>
			<el-row>
				<el-row type="flex" justify="center">使用协议</el-row>
<el-row>以下详述鲸大大为您提供服务的条款。</el-row>
<el-row>
本协议详述您使用鲸大大的服务所须遵守的条款和条件。请您在使用鲸大大各项服务之前，务必审慎阅读、充分理解本协议各条款内容。
您只有完全同意下列所有服务条款并完成注册程序，才能成为鲸大大的用户并使用相应服务。您注册成为鲸大大用户前，必须仔细阅读本《使用协议》和《信息发布规则》，一旦您注册成为了鲸大大用户即表示您已经阅读、同意并接受本《使用协议》和《信息发布规则》中所含的所有条款和条件。您只要使用了鲸大大提供的服务，即视为您已了解并完全同意本服务条款各项内容，包括鲸大大对服务条款随时做的任何修改。如您不同意该修订，您必须终止您与鲸大大的用户关系。
<el-row>1、 服务内容</el-row>
<el-row>1.1鲸大大的具体服务内容由本公司根据实际情况提供具体功能与服务。本公司保留变更、调整或终止部分服务内容的权利。</el-row>
<el-row>1.2本公司保留根据实际情况随时调整鲸大大提供的服务种类、形式。本公司不承担因业务调整给用户造成的损失。</el-row>
<el-row>2、内容使用权</el-row>
<el-row>2.1您可以在鲸大大中查阅、发布信息，但发布内容必须符合中国知识产权法的规定,不得侵犯他人的知识产权。本公司如果收到版权投诉,有权删除被投诉侵权的内容。</el-row>
<el-row>3、账号使用规则</el-row>
<el-row>3.1用户再鲸大大平台完成申请注册手续后,获得账号的使用权，该使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖。因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用，鲸大大不承担任何责任。</el-row>
<el-row>4、隐私保护</el-row>
<el-row>4.1保护用户隐私是鲸大大平台的重点原则，本公司通过技术手段、提供隐私保护服务功能、强化内部管理等办法充分保护用户的个人资料安全。</el-row>
<el-row>4.2本公司保证不对外公开或向第三方提供用户注册的个人隐私资料，及用户在使用服务时存储的非公开内容。但下列情况除外:</el-row>
<el-row>4.2.1事先获得用户的明确授权;</el-row>
<el-row>4.2.2按照相关司法机构或政府主管部门的要求。</el-row>
<el-row>5、服务准则</el-row>
<el-row>5.1用户在申请使用鲸大大服务时，必须提供真实的个人资料或企业信息。如果因信息不真实而引起的问题及其后果，鲸大大不承担任何责任。</el-row>
<el-row type="flex" justify="end">[生效时间:2021年12月31日]</el-row>
</el-row>
			</el-row>
		</el-dialog>
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
				modalStatus:false,
				xieyiShow:false
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
			showModal(){
				this.modalStatus = true
			},
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
			},
			copyText(index){
				var taxt = document.getElementById(`${index}`)
				taxt.select()
				console.log(index,55)
				console.log(document.execCommand('Copy'))
				document.execCommand('Copy')
				this.$message.success('复制成功')
			},
			showxieyi(){
				this.xieyiShow = true
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
				.how_to_pay{
					cursor: pointer;
					&:hover{
						color:orange;
					}
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
				cursor: pointer;
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
	.copy{
		border: 1px solid blue;
		width: 60px;
		text-align: center;
		color: blue;
		border-radius: 8px;
		cursor: pointer;
	}
	.copy_item{
		position: relative;
	}
	#copy1{
		// visibility: hidden;
		position: absolute;
		z-index: -1;
	}
		#copy2{
		// visibility: hidden;
		position: absolute;
		z-index: -1;
	}
		#copy3{
		// visibility: hidden;
		position: absolute;
		z-index: -1;
	}
	.input_item{
		width: 100%;
		height: 100%;
		// text-align: center;
	}
	
</style>
