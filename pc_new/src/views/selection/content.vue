<template>
  <div class="goods">
    <div class="goods-list"
         v-for="(item, index) in goodList"
         :key="index"
         @click="goGoods(item)">
		 
		
		 <div class="goods-block">
			 <div class="inner-box">
				 
			 	<div class="image">
			 	  <img :src="item.thumb" :alt="item.title" />
				  <div class="mask">{{ item.talent }}个达人在带</div>
			 	</div>
				
				<div class="info-box">
					<div class="title">{{ item.title }}</div>
					<div class="remarks">
					  <div class="price">
					    <div class="number">{{ item.price }}</div>
					    <div class="name">价格</div>
					  </div>
					  <div class="highCommission">
					    <div class="number">{{ item.commission }}%</div>
					    <div class="name">高佣</div>
					  </div>
					  <div class="commission">
					    <div class="number">{{ item.commission_money }}</div>
					    <div class="name">佣金</div>
					  </div>
					</div>
					
				</div>
				
			 </div>
		 </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    goGoods (item) {
      this.$router.push({
        path: '/goods',
        query: { uid: item.id }
      })
    },

  }
};
</script>
<style lang="less" scoped>
.goods {
	margin-left: -7.5px;
	margin-right: -7.5px;
	flex-flow: row wrap;
	display: flex;
	margin-bottom: 45px;
  .goods-list {
		padding-left: 7.5px;
        padding-right: 7.5px;
        margin-top: 24px;
        width: 20%;
		.goods-block{
			position: relative;
			cursor: pointer;
			width: 100%;
			height: 330px;
			.inner-box{
				padding: 5px 5px 0 5px;
				position: absolute;
				width: 100%;
				height: auto;
				left: 0;
				top: 0;
				background: #fff;
				box-shadow:0 5px 20px 0 rgba(0,0,0,.1);
				border-radius: 12px;
				overflow: hidden;
				border: 2px solid transparent;
				.image {
					position: relative;
				    height: 225px;
					overflow: hidden;
					width: 100%;
					border-radius: 8px;
					img {
						object-fit: cover;
						vertical-align: top;
						height: 100%;
						width: 100%;
					}
					.mask {
						position: absolute;
						bottom: 5px;
						left: 5px;
						right: 5px;
						background: rgba(0,0,0,.5);
						border-radius: 4px;
						font-size: 12px;
						color: #fff;
						padding-bottom: 5px;
						padding-top: 5px;
						text-align: center;
					}
				}
				
				.info-box{
					height: 100px;
					overflow: hidden;
					.title {
					  text-align: left;
					  margin-top: 10px;
					  font-size: 12px;
					  font-weight: bold;
					  overflow: hidden;
					  -webkit-line-clamp: 1;
					  text-overflow: ellipsis;
					  display: -webkit-box;
					  -webkit-box-orient: vertical;
					}
					.remarks {
					  display: flex;
					  align-items: center;
					  justify-content: center;
					  margin-top: 10px;
					  .price,
					  .highCommission,
					  .commission {
					    width: 52px;
					    line-height: 20px;
					    text-align: center;
					    .number {
					      color: red;
					      margin-top: 4px;
					    }
					    .name {
					      color: #9aacc1;
					      margin: 2px;
					    }
					  }
					}
					
				}
			}
    }
    
  }
}
</style>