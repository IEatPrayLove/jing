<template>
  <view class="userinfo">
    <img :src="userInfo.avatarUrl"
         alt="">
    <view>
      <view>昵称</view>
      <view>{{userInfo.nickName}}</view>
    </view>
    <view>
      <view>身份</view>
      <view>
        <view v-for="item in useridlist"
              :key="item.id"
              :class="[item.isSelect?'isSelect':'']"
              @click="changUser(item)">
          {{item.name}}
        </view>
      </view>
    </view>
    <view class="subbtn"
          @click="userbtn">
      完成
    </view>
  </view>
</template>

<script>
	import until from 'common/until.js'
export default {
  data () {
    return {
      // 用户验证
      newUser: false,
      useridlist: [
        { id: 1, name: '达人', isSelect: true },
        { id: 2, name: '商家', isSelect: false },
      ],
      userId: 1,
	  userInfo:uni.getStorageSync('userInfo')
    }
  },
  onLoad() {
  	//先判断token问题
  	until.updateUserToken();
  	this.userInfo = uni.getStorageSync('userInfo');
  },
  methods: {
    changUser (item) {
      this.useridlist.map(v => v.id == item.id ? v.isSelect = true : v.isSelect = false);
      this.userId = item.id
    },
    userbtn () {
		until.Requests('User/userCheckUserType/',{token:uni.getStorageSync('token').token,type: this.userId},'POST',function(e){
				   if (e.msg != 'success') {
				     uni.showToast({
				       title: e.msg,
				       icon: 'none'
				     })
				   } else {
				     //跳转到我的
				     uni.switchTab({
				       url: '/pages/mine/mine'
				     })
				   }
		})
      
    }
  }
}
</script>

<style lang="less" scoped>
.userinfo {
  text-align: center;
  margin: 44rpx auto;
  padding: 0 40rpx;
  > img {
    width: 240rpx;
    height: 240rpx;
    border: 2rpx solid #4b70a8;
    border-radius: 50%;
    margin-bottom: 80rpx;
  }
  > view:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20rpx;
    border-bottom: 2rpx solid #4b70a8;
  }
  > view:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    margin: 40rpx 0;
    > view:nth-of-type(2) {
      display: flex;
      > view {
        cursor: pointer;
        padding: 4rpx 12rpx;
      }
      > view:not(:last-child) {
        margin-right: 20rpx;
      }
      .isSelect {
        background: #87aee0;
      }
    }
  }
  .subbtn {
    background: #87aee0;
    color: #fff;
    line-height: 60rpx;
    margin-top: 120rpx;
    cursor: pointer;
  }
}
</style>