<template>
  <view class="content">
    <view class="item">
      <view class="list">
        <view class="item_l">头像</view>
        <view class="item_r"
              @click="bindImageSerach(3)">
          <image :src="avatarUrl"
                 mode="aspectFill"
                 class="pic"></image>
				 <image src="../../static/icon/mine/jt_r.png"
				        mode="aspectFill"
				        class="list_icon_j"></image>
        </view>
      </view>
    </view>
    <view class="item">
      <view class="list"
            @click="edit_info(0)">
        <view class="item_l">昵称</view>
        <view class="item_r">
          {{nickName}}
          <image src="../../static/icon/mine/jt_r.png"
                 mode="aspectFill"
                 class="list_icon_j"></image>
        </view>
      </view>
      <view class="line_gray"></view>
      <picker :range="sex_list"
              @change="changesexs"
              name="gender"
              value="0">
        <view class="list">
          <view class="item_l">性别</view>
          <view class="item_r">
            {{sex_list[sex_index]}}
            <image src="../../static/icon/mine/jt_r.png"
                   mode="aspectFill"
                   class="list_icon_j"></image>
          </view>
        </view>
      </picker>
      <view class="line_gray"></view>
      <view class="list"
            @click="edit_info(1)">
        <view class="item_l">年龄</view>
        <view class="item_r">
          {{age}}
          <image src="../../static/icon/mine/jt_r.png"
                 mode="aspectFill"
                 class="list_icon_j"></image>
        </view>
      </view>
    </view>
    <view class="cover"
          v-if="is_add"
          @click="info_exit"></view>
    <view class="excitation_add"
          v-if="is_add">
      <view class="excitation_add_content">
        <form @submit="formSubmit"
              @reset="formReset">
          <view class="excitation_add_top">
            {{edit_title}}
            <image src="../../static/icon/public/exit.png"
                   @click="info_exit"
                   mode="aspectFill"
                   class="excitation_add_exit"></image>
          </view>
          <view class="excitation_add_center">
            <input :value="tid"
                   hidden="true"
                   name="tid" />
            <textarea class="excitation_add_center_exta"
                      name="edit_name"
                      v-if="ext_content"
                      :placeholder="ext_content"
                      value=""></textarea>
            <textarea class="excitation_add_center_exta"
                      name="edit_name"
                      v-else
                      :placeholder="'请输入'+edit_title"
                      value=""></textarea>
          </view>
          <button type="default"
                  size="mini"
                  class="excitation_add_btn"
                  form-type="submit">提交</button>
        </form>
      </view>
    </view>
  </view>
</template>

<script>
import until from 'common/until.js'
import config from '../../config.js'
export default {
  data () {
    return {
      is_add: false,
      edit_title: "编辑",
      edit_list: ['昵称', '年龄', '兴趣爱好'],
      sex_list: ['未知', '男', '女'],
      sex_index: 0,
      hobby: "",
      avatarUrl: "",
      nickName: "",
      age: "未知",
      ext_content: "",
      tid: 0
    }
  },
   onLoad: function (options) {
     uni.showLoading({
       title: '加载中',
     })
     //先判断token问题
     until.updateUserToken();
     var userInfo = uni.getStorageSync('userInfo');
     if (userInfo) {
       this.hobby = userInfo.hobby
       this.sex_index = userInfo.gender
       this.age = userInfo.age
       this.avatarUrl = userInfo.avatarUrl
       this.nickName = userInfo.nickName
       this.age = userInfo.age
     } else {
       uni.showToast({
         title: '登录已超时，请重新登录~',
         icon: 'none'
       })
       setTimeout(function () {
         uni.switchTab({
           url: '/pages/mine/mine'
         })
       }, 1500)
     }
     uni.hideLoading()
   },
  methods: {
    info_exit: function () {
      this.is_add = false
    },
    //修改个人资料
    edit_info: function (e) {
      this.is_add = true
      this.edit_title = this.edit_list[e]
      var type = e
      this.tid = e
      var content = ""
      if (type == 1) {
        content = this.age
      } else if (type == 2) {
        content = this.hobby
      } else {
        content = this.nickName
      }
      this.ext_content = content
    },
    changesexs: function (e) {
      uni.showLoading({
        title: '更新中~',
      })
      var that = this
      until.Requests('User/updateUser', {
        type: 4,
        data: e.target.value,
        token: uni.getStorageSync('token').token
      }, 'POST', function (eve) {
        var user_Info = uni.getStorageSync('userInfo')
        user_Info.gender = e.target.value
        that.sex_index = e.target.value
        uni.setStorageSync('userInfo', user_Info)
        uni.hideLoading()
        // uni.showToast({
        // 	title: '更新成功~',
        // 	icon: 'none'
        // })
        if (eve.msg != 'success') {
          uni.showToast({
            title: eve.msg,
            icon: 'none'
          })
        } else {
          uni.showToast({
            title: '更新成功',
            icon: 'none'
          })
        }
      })
    },
    //提交按钮
    formSubmit: function (e) {
      uni.showLoading({
        title: '更新中~',
      })
      var edit_name = e.detail.value.edit_name
      var tid = e.detail.value.tid
      var that = this
      if (edit_name) {
        until.Requests('User/updateUser', {
          type: tid,
          data: edit_name,
          token: uni.getStorageSync('token').token
        }, 'POST', function (eve) {
          var user_Info = uni.getStorageSync('userInfo')
          if (tid == 1) {
            user_Info.age = edit_name
            that.age = edit_name
          } else if (tid == 2) {
            user_Info.hobby = edit_name
            that.hobby = edit_name
          } else if (tid == 0) {
            user_Info.nickName = edit_name
            that.nickName = edit_name
          }
          uni.setStorageSync('userInfo', user_Info)
          that.is_add = false
          uni.hideLoading()
          if (eve.msg != 'success') {
            uni.showToast({
              title: eve.msg,
              icon: 'none'
            })
          } else {
            uni.showToast({
              title: '更新成功',
              icon: 'none'
            })
          }
          // uni.showToast({
          // 	title: '更新成功~',
          // 	icon: 'none'
          // })
        })
      } else {
        uni.showToast({
          title: '请输入要修改的内容',
          icon: 'none'
        })
        return;
      }
    },
    //上传图片
    bindImageSerach: function (e) {
      var that = this;
      var pics = that.avatarUrl
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
                  //上传成功 请求更新头像
                  until.Requests('User/updateUser', {
                    type: e,
                    data: datas.result,
                    token: uni.getStorageSync('token').token
                  }, 'POST', function (eve) {
                    var user_Info = uni.getStorageSync('userInfo')
                    user_Info.avatarUrl = config.imgUrl + datas.result
                    uni.setStorageSync('userInfo', user_Info)
                    that.avatarUrl = config.imgUrl + datas.result
                    if (eve.msg != 'success') {
                      uni.showToast({
                        title: eve.msg,
                        icon: 'none'
                      })
                    } else {
                      uni.showToast({
                        title: '更新成功',
                        icon: 'none'
                      })
                    }
                    // uni.showToast({
                    // 	title: '更新成功~',
                    // 	icon: 'none'
                    // })
                  })
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

<style>
page {
  background-color: #f1f1f1;
  width: 100%;
  height: auto;
}
.content {
  height: auto;
  /* position: relative; */
}
.item {
  padding: 30rpx;
  background: #ffffff;
  margin-top: 40rpx;
  margin-bottom: 40rpx;
}
.list {
  display: flex;
  justify-content: space-between;
}
.item_l {
  line-height: 100rpx;
  font-weight: 600;
  color: #2c2b2b;
}
.item_r {
  line-height: 100rpx;
  color: #808080;
}
.pic {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50rpx;
  vertical-align: middle;
}
.list_icon_j {
  margin-left: 20rpx;
  width: 16rpx;
  height: 32rpx;
  vertical-align: middle;
}
</style>
