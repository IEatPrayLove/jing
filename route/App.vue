<script>
export default {
  onLaunch: function () {
    // #ifdef MP
    const updateManager = uni.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      //console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    // #endif
  },
  onShow: function () {
    //console.log('App Show')
  },
  onHide: function () {
    //console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
page {
  font-family: PingFang SC !important;
}
.item_btn_gred{
	color: #FFFFFF;
	background-color: #FF5757;
}
.item_btn_grln{
	color: #FFFFFF;
	background-color: #FF914D;
}
.non_data {
  width: 100%;
  font-size: 24rpx;
  text-align: center;
  color: #c0c0c0;
}
/* 页面半透明遮罩层 */
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
}
/*标题栏*/
.nav-wrap {
  position: fixed;
  width: 100%;
  top: -10rpx;
  background: #6f86b3;
  color: #000;
  z-index: 9999999;
}
/* 标题要居中 */
.nav-title {
  position: absolute;
  text-align: center;
  max-width: 400rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 35rpx;
  color: #2c2b2b;
  font-weight: 600;
}
.nav-capsule {
  display: flex;
  align-items: center;
  margin-left: 30rpx;
  justify-content: space-between;
  height: 100%;
}
.nav_capsule_par {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.nav_capsule_location {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.back-pre {
  width: 52rpx;
  height: 56rpx;
  margin-top: 4rpx;
  padding: 10rpx;
}
/*分割线*/
.lines {
  width: 100%;
  height: 2rpx;
  margin: 20rpx auto;
  background-image: linear-gradient(to right, #5a42ec, #3d6efc);
}
.line_gray {
  width: 100%;
  height: 2rpx;
  margin: 20rpx auto;
  background-color: #f1f1f1;
}
.point {
  width: 15rpx;
  height: 15rpx;
  border-radius: 7.5rpx;
  background-color: #85a1f4;
  margin-top: 22.5rpx;
  margin-right: 10rpx;
}
.f_blue {
  background-color: #3d6efc !important;
}
.f_gray {
  color: #c0c0c0 !important;
}
.font-c-o {
  color: #f0ad4e;
}
.font-c-os {
  color: #ff5722 !important;
}
//单项编辑弹窗
.excitation_add {
  width: 85%;
  position: fixed;
  top: 15%;
  left: 5%;
  padding: 20rpx;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 999;
}
.excitation_add_content {
}
.excitation_add_top {
  text-align: center;
  font-weight: bold;
}
.excitation_add_exit {
  width: 30rpx;
  height: 30rpx;
  float: right;
}
.excitation_add_center {
  margin: 30rpx 0;
  width: 100%;
}
.excitation_add_center_exta {
  background-color: #f1f1f1;
  padding: 20rpx;
  width: 94%;
  height: 250rpx;
}
.excitation_add_btn {
  margin-top: 50rpx !important;
  background-color: #3d6efc !important;
  color: #fff !important;
  margin-left: 40% !important;
}

.font_b {
  font-weight: bold;
}
.font_c_red {
  color: red;
}
.liness {
  width: 100%;
  height: 2rpx;
  background-color: #c0c0c0;
}
.font-s_30 {
  font-size: 30rpx;
}
</style>
