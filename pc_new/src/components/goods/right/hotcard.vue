<template>
<div>
<h-card v-if="info.video != null">
    <div class="hotcard">
		<div class="rm">
			<i></i>
			<h2 class="rm_video">热门视频</h2>
        <!-- <span>商家后台需要给接口商家自己上传</span> -->
      </div>
      <div>
        <div v-for="(item,index) in info.video" :key="index"  @click="playVideo(item)" class="hotcard_box">
             <video :src="item"  />
            </div>
      </div>
    </div>
    
  </h-card>
  <el-dialog title=""
               :visible.sync="centerDialogVisible"
               width="30%"
               :before-close="handleClose">
      <div class="logins">
        <video :src="video_url"  width="100%" :controls="'true'" />
      </div>
    </el-dialog>
</div>
  
</template>

<script>
export default {
props: {
    info: {
      default: () => {
        return []
      }
    }
  },
  data(){
    return {
      centerDialogVisible: false,
      video_url:""
    }
  },
  methods: {
    playVideo(url){
      this.centerDialogVisible  =true
      this.video_url = url
    },
    handleClose (done) {
      this.video_url= '';
      done();
    },
  }
}
</script>

<style lang="less" scoped>
.h-card {
  /deep/.h-card-bottom {
    .hotcard {
      > div:nth-of-type(1) {
        font-size: 18px;
        > span {
          color: red;
          margin-left: 20px;
          font-size: 12px;
        }
      }
		.rm{
			display: flex;
			width: 100%;
			i{
				background-image: url('../../../assets/juxing-icon.png');
				background-size: 100%;
				width: 30px;
				height: 30px;
				display: block;
			}
			.rm_video{
				font-size: 18px;
				font-weight: 600;
				line-height: 30px;
			}
		}
      > div:nth-of-type(2) {
			display: flex;
			flex-wrap: wrap;
			padding-top: 20px;
			.hotcard_box{
				border-radius: 10px;
				width: 30%;
				height: 180px;
				padding: 5px;
				margin: 10px;
				box-shadow: 0 4px 4px rgba(152, 97, 241, 0.17);
				overflow: hidden;
				box-sizing: border-box;
				>video{
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
					object-fit: fill;
				}
			}
      }
    }
  }
}
.logins {
  text-align: center;
  margin: 20px auto;
}
</style>