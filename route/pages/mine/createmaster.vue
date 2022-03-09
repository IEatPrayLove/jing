<template>
  <view class="createmaster">
    <view class="top"></view>
    <view class="bottom">
      <view class="mylist">
        <view>头像：</view>
		<image :src="userinfo.pic" class="userimg" v-if="userinfo.pic" @tap="sginimg"></image>
        <view class="userimg" v-else
              @tap="sginimg">+</view>
      </view>
      <view class="btlist">
        <view>抖音号名称：</view>
        <input v-model="userinfo.name" />
      </view>
      <view class="btlist">
        <view>账号ID：</view>
        <input v-model="userinfo.douyin" />
      </view>
      <view class="list">
        <view>带货类型：</view>
        <picker :range="look_type" @change="changeLookType" name="look_type" value="0">
        	<view class="item_r" style="display: flex;">
        		<view class="txt">{{look_type[look_index]}}</view>
        		<image src="../../static/icon/mine/jt_r.png" mode="aspectFill" class="icon_j"></image>
        	</view>
        </picker>
      </view>
	  <view class="list">
	    <view>带货类目：</view>
	    <checkbox-group @change="check_category">
			<checkbox v-for="(item,index) in categoryList" :key="index" :checked="item.checked" :value="item.id">{{item.name}}</checkbox>
		</checkbox-group>
	  </view>
	  <view class="list">
	    <view>达人主页链接：</view>
	    <input v-model="userinfo.douyin_link" />
	  </view>
	  <view class="list">
	    <view>粉丝数：</view>
	    <input v-model="userinfo.fans" />
	  </view>
      <view class="list">
        <view>场均销售额：</view>
        <input v-model="userinfo.sales" />
      </view>
	  <view class="list">
	    <view>平均在线人数：</view>
	    <input v-model="userinfo.line_people" />
	  </view>
	  <view class="list">
	    <view>平均停留时长：</view>
	    <input v-model="userinfo.line_time" />
	  </view>
	  <view class="list">
	    <view>30日直播销售额：</view>
	    <input v-model="userinfo.month_sales" />
	  </view>
	  <view class="list">
	    <view>分钟带货产出：</view>
	    <input v-model="userinfo.minute_sales" />
	  </view>
      <view class="list">
        <view>收件人：</view>
        <input v-model="userinfo.call_user" />
      </view>
      <view class="list">
        <view>微信：</view>
        <input v-model="userinfo.wechat" />
      </view>
      <view class="list">
        <view>电话：</view>
        <input v-model="userinfo.phone" />
      </view>
      <view class="list">
        <view>寄样收货地址：</view>
        <input v-model="userinfo.address" />
      </view>
      <view class="sginbtn"
            @tap="sgin">提交审核</view>
    </view>
  </view>
</template>

<script>
	import until from 'common/until.js'
	import config from '../../config.js'
export default {
  data () {
    return {
		id:0,
		look_type :['短视频','直播','mcn','团长'],
		look_index:0,
		categoryList:[],
      userinfo: {
		  id:0,
		pic:"",
        name: '',
        douyin: '',
        fans: '',
		type:0,
		line_people:"",
		line_time:"",
		month_sales:"",
		minute_sales:"",
        category: [],
        sales: '',
        call_user: '',
        douyin_link: '',
        wechat: '',
        phone: '',
        address: '',
      }
    }
  },
  onLoad(options) {
	  until.updateUserToken();
	  var that =this
  	if(options.id){
		this.id=options.id
		until.Requests('Assistant/info',{token:uni.getStorageSync('token').token,id:options.id},'GET',function(res){
				  if (res.msg != 'success') {
				  	uni.showToast({
				  		title: events.msg,
				  		icon: 'none'
				  	})
				  } else {
				  	that.userinfo = res.result
					that.look_index = Number(res.result.type)-Number(1)
				  }
		})
	}
	until.Requests('Plblics/getCategory',{},'GET',function(res){
			  if (res.msg != 'success') {
			  	uni.showToast({
			  		title: events.msg,
			  		icon: 'none'
			  	})
			  } else {
				  for(var i=0;i<res.result.length;i++){
					  // console.log(that.userinfo.category)
					  // console.log(res.result[i].id)
					  // console.log(that.userinfo.category.indexOf(res.result[i].id))
					  if(that.id>0){
						  if(that.userinfo.category.indexOf(res.result[i].id)>-1){
						  						  res.result[i].checked = true
						  }else{
						  						  res.result[i].checked = false
						  }
					  }
					  
				  }
			  	that.categoryList = res.result
			  }
	})
  },
  methods: {
    sgin () {
		var actions = "Assistant/add/";
		 if (this.id > 0) {
			this.userinfo.id=this.id
			actions = "Assistant/update/";
		  }
		  console.log(this.userinfo)
		  this.userinfo.token = uni.getStorageSync('token').token
		  until.Requests(actions,this.userinfo,'POST',function(re){
			  if (re.msg != 'success') {
			    uni.showToast({
			      title: re.msg,
			      icon: 'none'
			    })
			  } else {
			    uni.showToast({
			      title: '提交成功',
			      icon: 'none'
			    })
				uni.navigateTo({
				  url: '/pages/mine/mymaster'
				})
			  }
		  })
    },
	check_category:function(e){
		this.userinfo.category = e.detail.value
	},
	changeLookType:function(e){
		this.look_index = e.target.value
		this.userinfo.type = Number(e.target.value)+Number(1)
	},
    sginimg () {
      var that = this;
      var pics = that.userinfo.pic
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          uni.showLoading({
            title: '上传中',
          })
          const tempFilePaths = res.tempFilePaths;
          uni.uploadFile({
            url: config.requestUrl + 'User/upload_cover',
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              pathname: 'users',
              token: uni.getStorageSync('token').token
            },
            success (event) {
              var datas = JSON.parse(event.data);
              if (datas.status == 0) {
                uni.hideLoading()
                if (datas.result) {
                  that.userinfo.pic =config.imgUrl+ datas.result
                } else {
                  uni.showToast({
                    title: '上传失败，请重试~',
                    icon: 'none',
                    duration: 2000
                  })
                }
              } else {
                uni.showToast({
                  title: datas.msg,
                  icon: 'none',
                  duration: 2000
                })
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.createmaster {
  background: #eeeef4;
  height: 100vh;
  .bottom {
    width: 90%;
    margin: 0 auto;
    background: #fff;
    padding: 16rpx;
    box-shadow: 8rpx 18rpx 18rpx rgba(97, 112, 241, 0.1);
    height: auto;
    margin-top: -300rpx;
    padding-top: 20rpx;
    border-radius: 20rpx;
  }
  .btlist {
    margin: 16rpx 0;
    display: flex;
    padding-bottom: 12rpx;
    border-bottom: 1px solid #4b70a8;
  }
  .list {
    display: flex;
    margin: 20rpx 0;
  }
  .sginbtn {
    background: #a5b2ca;
    border-radius: 10rpx;
    color: #fff;
    line-height: 60rpx;
    text-align: center;
    margin-top: 100rpx;
  }
  .top {
    min-height: 400rpx;
    background: #7a8db7;
  }
  .mylist {
    display: flex;
    margin: 20rpx 0;
    align-items: center;
  }
  .userimg {
    width: 100rpx;
    height: 100rpx;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 100rpx;
  }
}
.p_txt{
		font-size: 25rpx;
		color: #C8C7CC;
	}
	.icon_j{
		margin-left: 15rpx;
		width: 10rpx;
		height: 20rpx;
		margin-top: 10rpx;
	}
</style>