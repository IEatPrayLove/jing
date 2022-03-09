<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { GetUserInfo,isMobile,getVipInfo } from "@/utils/request.js";
export default {
  data () {
    return {};
  },
  mounted () {
    if (localStorage.getItem("token")) {
      this.$axios({
        url: "User/getUserInfo/",
        method: "get",
        params: {
          token: localStorage.getItem("token"),
        },
      }).then((res) => {
        if (res.data.status == 0) {
          localStorage.setItem("user", JSON.stringify(res.data.result));
        //获取商家会员信息
          getVipInfo({token: localStorage.getItem("token")}).then((vips)=>{
              if(vips.status==0){
                  localStorage.setItem("vip_info",  JSON.stringify(vips.result));
              }
          })
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("vip_info");
        }
      });
    }
  },
  methods: {},
};
</script>
<style lang="less">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
body {
  background-color: #f5f7fa;
  margin: 0;
  padding: 0;
}
#app {
	font-size: 14px;
	color: #333;
}
.border_r {
  border-right: 3px solid #fff;
}
.border_b {
  border-bottom: 3px solid #fff;
}
.font_c_r {
  color: red;
}
</style>
