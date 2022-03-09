<template>
	<view class="content">
		<view class="desc">
			<rich-text :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	import until from 'common/until.js'
	import config from '../../config.js'
	export default {
		data() {
			return {
				content: "",
				list:[
					'<p><p class="MsoNormal" align="center" style="text-align: center;"><span><b>使用协议</b></span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>以下详述鲸大大为您提供服务的条款。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>本协议详述您使用鲸大大的服务所须遵守的条款和条件。请您在使用鲸大大各项服务之前，务必审慎阅读、充分理解本协议各条款内容。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>您只有完全同意下列所有服务条款并完成注册程序，才能成为鲸大大的用户并使用相应服务。您注册成为鲸大大用户前，必须仔细阅读本《使用协议》和《信息发布规则》，一旦您注册成为了鲸大大用户即表示您已经阅读、同意并接受本《使用协议》和《信息发布规则》中所含的所有条款和条件。您只要使用了鲸大大提供的服务，即视为您已了解并完全同意本服务条款各项内容，包括鲸大大对服务条款随时做的任何修改。如您不同意该修订，您必须终止您与鲸大大的用户关系。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1</span><span>、</span> <span>服务内容</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.1</span><span>鲸大大的具体服务内容由本公司根据实际情况提供具体功能与服务。本公司保留变更、调整或终止部分服务内容的权利。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.2</span><span>本公司保留根据实际情况随时调整鲸大大提供的服务种类、形式。本公司不承担因业务调整给用户造成的损失。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2</span><span>、内容使用权</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2.1</span><span>您可以在鲸大大中查阅、发布信息，但发布内容必须符合中国知识产权法的规定</span><span lang="EN-US">,</span><span>不得侵犯他人的知识产权。本公司如果收到版权投诉</span><span lang="EN-US">,</span><span>有权删除被投诉侵权的内容。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3</span><span>、账号使用规则</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3.1</span><span>用户再鲸大大平台完成申请注册手续后</span><span lang="EN-US">,</span><span>获得账号的使用权，该使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖。因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用，鲸大大不承担任何责任。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4</span><span>、隐私保护</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.1</span><span>保护用户隐私是鲸大大平台的重点原则，本公司通过技术手段、提供隐私保护服务功能、强化内部管理等办法充分保护用户的个人资料安全。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.2</span><span>本公司保证不对外公开或向第三方提供用户注册的个人隐私资料，及用户在使用服务时存储的非公开内容。但下列情况除外</span><span lang="EN-US">:<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.2.1</span><span>事先获得用户的明确授权</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.2.2</span><span>按照相关司法机构或政府主管部门的要求。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">5</span><span>、服务准则</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">5.1</span><span>用户在申请使用鲸大大服务时，必须提供真实的个人资料或企业信息。如果因信息不真实而引起的问题及其后果，鲸大大不承担任何责任。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal" style="text-align: right; "><span lang="EN-US">[</span><span>生效时间</span><span lang="EN-US">:2021</span><span>年</span><span lang="EN-US">12</span><span>月</span><span lang="EN-US">31</span><span>日</span><span lang="EN-US">]</span></p></p>',
					'<p><p class="MsoNormal" align="center" style="text-align: center;"><span>信息发布规则</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>一、前言</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>感谢您使用鲸大大</span><span lang="EN-US">!</span><span>为打造一个合法、</span><span>安全、真实、准确、效率的信息服务平台，我们对鲸大大平台信息发布制定了基本的规则。您在使用本平台填写并发布企业信息或个人信息之前，请务必审慎阅读、充分理解本规则。您使用本平台发布信息的行为，即表示您已阅读并同意本规则。本平台有权根据法律法规、政策及产品需求更新本规则，请您定期访问并查看最新规则。如您继续使用本平台服务</span><span lang="EN-US">,</span><span>即表示您接受本规则修订的最新版本规则。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>二、企业信息发布规则</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>您应当确保填写的企业相关信息合法、真实、准确，您发布的所有字、图片、等内容，都不得含有息时，应当遵守的具体规则包括但不限于</span><span lang="EN-US">: .<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.</span><span>企业名称应当真实有效</span><span lang="EN-US">;</span><span>任何违法、政治敏感、侵犯他人权益的内容。在您填写或修改企业相关信</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2.</span><span>公司介绍应当真实有效，如发生变化应当及时更新</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3.</span><span>公司介绍的文字内容应当真实、准确、完整</span><span lang="EN-US">,</span><span>便于他人理解，不得发布与公司介绍无关的文字内容</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.</span><span>公司介绍中包含的经营内容应当与公司的经营范围存在一致性</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">5.</span><span>产品介绍应当真实、准确、完整，不得将他人产品或产品介绍挪为己用，相关产品应符合公司的经营范围要求</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">6.</span><span>您发布的信息中不得包含任何其他个人的隐私信息或其他公司的商业信息。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>三、店铺主页信息发布规则</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>您应当确保填写的店铺主页信息合法、真实、准确，您发布的所有字、图片、视频等内容，都不得含有任何违法、政治敏感、侵犯他人权益的内容。在您填写或修改个人主页信息时，应当遵守的具体规则包括但不限于</span><span lang="EN-US">:<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.</span><span>用户可发布店铺主页信息，用户自行创建提交平台审核通过后择视为该用户已经同意将此用户名下所有信息展示在鲸大大平台，展示的信息将共享至商家库，商品库列表等以便用于展示、查询、浏览、沟通等</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2.</span><span>平台达人相关信息均来自正规渠道、鲸大大只负责数据分析，任何单方面联系合作均与平台无关、平台不做任何形式的保证合作的成功与否，请合作双方自行判定合作真伪、并对合作效果保持理性看待，用户应严格遵守本规则，且沟通行为及沟通内容应仅限于工作合作相关</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3.</span><span>用户通过鲸大大平台获客建联合作、请务必自行判断合作的真实性、对于合作中产生的纠纷，或造成一方经济损失的情况下、建议您立即向先关部门投诉反馈。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>四、禁止发布的用户主页信息</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>基于合法性、安全性、真实性、有效性等原则考虑，目前本平台不提供包含以下发布服务、若您发布的个人主页包含以下内容则可能无法审核通过，或者在发布后被部分或全部删除、屏蔽</span><span lang="EN-US">:</span><span>违法类信息</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.</span><span>包含违法、政治敏感内容</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2.</span><span>包含虚假或侵害他人权益的内容</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3.</span><span>包含广告、传销、直销等内容</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.</span><span>平台违禁品、三无产品等</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">5.</span><span>不得存在虚假宣传，夸大宣传</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">6.</span><span>严谨使用互联网违禁词汇</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>五、禁止实施的行为</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span>本平台严禁用户利用本平台服务，实施下述行为。如您存在下述行为的，您发布的信息可能无法审核通过或在发布后被删除</span><span lang="EN-US">/</span><span>屏蔽</span><span lang="EN-US">:<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.</span><span>实施任何辱党、辱国、传播邪教思想等违法及违背公序良俗的行为</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2.</span><span>在平台内使用涉及各国政治人物的图片、视频</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3.</span><span>在平台内使用人身攻击或侵害他人权益的图片、视频</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.</span><span>以培训费、服装费、工作需要等任何名义骗取求职者财物或涉及收取求职者费用</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">5.</span><span>骚扰其他用户</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">6.</span><span>在平台内使用涉及广告、营销的头像或宣传图片</span><span lang="EN-US">;<o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">7.</span><span>其他违反法律法规、国家及地方政策，及有碍公序良俗的行为。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>六、违规处罚规则</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">1.</span><span>本平台有权对用户发布的企业信息、个人信息进行审核，对于不符合本规则的内容，有权拒绝发布或者删除。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">2.</span><span>您涉嫌违反本规则，或者有其他明显损害本平台利益或违法行为的，经本平台发现或用户投诉后核实的，我公司有权视情节采取冻结账号等相关措施，暂时乃至永久停止您使用本平台且不做解封处理。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">3.</span><span>如您的行为给本平台造成损失的，本平台有权要求您赔偿全部的损失</span><span lang="EN-US">;</span><span>如涉嫌违法犯罪的，本平台有权向有关行政机关及司法部门</span><span lang="EN-US">]</span><span>举报、披露</span><span lang="EN-US">.</span><span>相关信息。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US">4.</span><span>如企业级招聘者违反本规则的情节严重的，本平台有权冻结该企业，即不为该企业提供相关服务。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal"><span>七、其他规则区本平台有权根据法律法规、政策及产品需求更新本规则，并在平台内予以公布。新的规则自公布之日起生效。</span><span lang="EN-US"><o:p></o:p></span></p><p class="MsoNormal"><span lang="EN-US"><o:p>&nbsp;</o:p></span></p><p class="MsoNormal" align="right" style="text-align: right;"><span lang="EN-US">[</span><span>生效时间</span><span lang="EN-US">:2021</span><span>年</span><span lang="EN-US">12</span><span>月</span><span lang="EN-US">31</span><span>日</span><span lang="EN-US">]</span></p></p>'
				],
				index:1
			}
		},
		onLoad: function(options) {
			var title = '信息发布规则'
			if(options.type=='user'){
				title = '使用协议'
				this.index =0
			}
			uni.setNavigationBarTitle({
				title: title
			})
			this.content = this.list[this.index]
		},
		methods: {

		}
	}
</script>

<style>
	page {
		width: 100%;
		height: auto;
	}

	.content {
		height: auto;
		width: 80%;
		margin: 30rpx auto 30rpx;
	}

	.logo {
		width: 150rpx;
		height: 150rpx;
		margin: auto;
		display: flex;
	}

	.title {
		text-align: center;
		margin-top: 20rpx;
		font-size: 40rpx;
	}

	.version {
		text-align: center;
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #C8C7CC;
	}

	.desc {
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #808080;
	}
</style>
