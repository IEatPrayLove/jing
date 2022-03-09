<template>
  <div class="top-banner">
    <div class="banner-title">
      <div>百万纯佣内容电商达人，选品领样平台</div>
      <div>鲸大大——B2M2C</div>
    </div>
    <div class="banner-list">
      <img src="../../assets/banner/banner1.png"
           alt="">
      <img src="../../assets/banner/banner2.png"
           alt="">
      <img src="../../assets/banner/banner3.png"
           alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.top-banner {
  position: relative;
  height: 430px;
  .banner-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    img {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
    }
    img:nth-child(1) {
      animation: bannerImg 18s linear infinite;
      animation-delay: 0s;
    }
    img:nth-child(2) {
      animation: bannerImg 18s linear infinite;
      animation-delay: 6s;
    }
    img:nth-child(3) {
      animation: bannerImg 18s linear infinite;
      animation-delay: 12s;
    }
  }
  .banner-title {
    // position: absolute;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    > div {
      z-index: 2;
    }
    > div:nth-of-type(1) {
      font-size: 46px;
    }
    > div:nth-of-type(2) {
      margin-top: 26px;
      margin-left: 44%;
    }
  }
}

@keyframes bannerImg {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
  }
}
</style>