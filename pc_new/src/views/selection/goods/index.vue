<template>
  <div class="goods">
    <div class="goodsleft">
      <h-card>
        <ShopBanner :caseHistory="info.imgs" />
      </h-card>
      <Godsleft :info="info" />
    </div>
    <div class="goodsright">
      <Godright :info="info" />
    </div>
  </div>
</template>

<script>
import ShopBanner from '@/components/shop/shopbanner.vue'
import Godsleft from '@/components/goods/godleft.vue'
import Godright from '@/components/goods/godright.vue'
import { GoodsInfo } from "@/utils/request.js";
export default {
  components: {
    ShopBanner, Godsleft, Godright
  },
  computed: {
    shopID () {
      return this.$route.query.uid;
    }
  },
  data () {
    return {
      info: [],
    }
  },
  mounted () {
    //获取商品信息
    GoodsInfo({ id: this.$route.query.uid }).then((goods_info) => {
      if (goods_info.status == 0) {
        this.info = goods_info.result
      } else {
        this.$message.error(goods_info.msg);
        return false;
      }
    })
  }
}
</script>

<style lang="less" scoped>

.goods {
	max-width: 1200px;
    margin: 0 auto;
    // background-color: #fff;
	margin-top: 20px;
	display: flex;
	.goodsleft {
		width: 300px;
		margin-right: 20px;
		.h-card {
		  width: 100%;
		  margin: 0;
		  margin-bottom: 10px;
			/deep/.h-card-bottom{
			  padding: 0px !important;
			}
		}
	}
	.goodsright {
		width: 880px;
		flex: 1;
	}
}
</style>