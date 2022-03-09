<template>
  <div class="goodproduct">
    <div class="producttop">
      <!-- <h-card>
			<div v-for="item in productlist"
             :key="item.id"
             @click="checkproduct(item)"
             :class="[item.isSelect?'isSelect':'']">{{item.name}}</div>
      </h-card> -->
	  
	  
    </div>
    <div class="product">
		<h-card>
			<div class="live">
				<i></i>
				<h2 class="live_liyi">{{ product_one }}</h2>
			</div>
		<div class="product_one">
		  <div v-if="info.brand"><h2>品牌名称：</h2>&nbsp;<span>{{info.brand}}</span></div>
		  <div v-if="info.guarantee"><h2>保质期：</h2>&nbsp;<span>{{info.guarantee}}</span></div>
		  <div v-if="info.address"><h2>发货地点：</h2>&nbsp;<span>{{info.address}}</span></div>
		  <div v-if="info.net_content"><h2>净含量：</h2>&nbsp;<span>{{info.net_content}}</span></div>
		  <div v-if="info.express"><h2>发货快递：</h2>&nbsp;<span>{{info.express}}</span></div>
		  <div v-if="info.factory_price"><h2>出厂价：</h2>&nbsp;<span>{{info.factory_price}}</span></div>
		  <div v-if="info.un_shipping_area"><h2>不发货区域：</h2>&nbsp;<span>{{info.un_shipping_area}}</span></div>
		  <div v-if="info.manufacture_time"><h2>生产日期：</h2>&nbsp;<span>{{info.manufacture_time}}</span></div>
		  <div v-if="info.delivery_speed"><h2>发样速度：</h2>&nbsp;<span>{{info.delivery_speed}}</span></div>
		  <div v-if="info.activity_time"><h2>活动时间：</h2>&nbsp;<span>{{info.activity_time}}</span></div>
		  <div v-if="info.sending_threshold"><h2>寄样门槛</h2>：</h2>&nbsp;<span>{{info.sending_threshold}}</span></div>
		  <div v-if="info.packing"><h2>包装方式：</h2>&nbsp;<span>{{info.packing}}</span></div>
		  <div v-if="info.purchase_sample"><h2>成本购样：</h2>&nbsp;<span>{{info.purchase_sample}}</span></div>
		  <div v-if="info.origin_address"><h2>产地：</h2>&nbsp;<span>{{info.origin_address}}</span></div>
		</div>
		</h-card>
		<h-card>
			<div class="live">
				<i></i>
				<h2 class="live_liyi">{{ product_two }}</h2>
			</div>
		<div class="product_two">
		  <div v-if="info.daily_energy"><h2>日产能：</h2>&nbsp;<span>{{info.daily_energy}}</span></div>
		  <div v-if="info.quality_inspection_report"><h2>质检报告：</h2>&nbsp;<span>{{info.quality_inspection_report}}</span></div>
		  <div v-if="info.daily_delivery_capacity"><h2>日发货能力：</h2>&nbsp;<span>{{info.daily_delivery_capacity}}</span></div>
		  <div v-if="info.product_qualification"><h2>产品资质：</h2>&nbsp;<span>{{info.product_qualification}}</span></div>
		  <div v-if="info.customer_service"><h2>客服响应：</h2>&nbsp;<span>{{info.customer_service}}</span></div>
		  <div v-if="info.security_inspection_report"><h2>安检报告：</h2>&nbsp;<span>{{info.security_inspection_report}}</span></div>
		  <div v-if="info.operation_configuration"><h2>运营配置：</h2>&nbsp;<span>{{info.operation_configuration}}</span></div>
		  <div v-if="info.historical_lowest_price"><h2>历史最低价：</h2>&nbsp;<span>{{info.historical_lowest_price}}</span></div>
		</div>
		</h-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		product_one: "履约能力",
		product_two: "产品相关",
		productlist: [
			{ id: 0, name: "产品参数", isSelect: true },
			{ id: 1, name: "履约能力", isSelect: false }
		],
		listnum: 0,
    }
  },
  props: {
    info: {
      default: () => {
        return []
      }
    }
  },
  methods: {
    checkproduct (item) {
      this.productlist.forEach(item2 => {
        item2.isSelect = false
      });
      item.isSelect = true
      this.listnum = item.id
    }
  }
}
</script>

<style lang="less" scoped>
.goodproduct {
  .producttop {
    .h-card {
      /deep/.h-card-bottom {
        display: flex;
        > div {
          margin-right: 120px;
          padding: 4px 6px;
          cursor: pointer;
        }
        .isSelect {
          color: #fff;
          background: #81a4d8;
          border-radius: 4px;
        }
      }
    }
  }
  .product {
		.live{
			display: flex;
			width: 100%;
			i{
				background-image: url('../../../assets/juxing-icon.png');
				background-size: 100%;
				width: 30px;
				height: 30px;
				display: block;
			}
			.live_liyi{
				font-size: 18px;
				font-weight: 600;
				line-height: 30px;
			}
		}
		.product_one{
			div{
				display: flex;
				padding: 5px 30px;
				h2{
					width: 100px;
					color: #999;
					font-size: 14px;
				}
				span{
					color: #666;
				}
			}
		}
		.product_two{
			div{
				display: flex;
				padding: 5px 30px;
				h2{
					width: 100px;
					color: #999;
					font-size: 14px;
				}
				span{
					color: #666;
				}
			}
		}
    /deep/.h-card-bottom {
      > div:nth-of-type(1) {
        display: flex;
        flex-wrap: wrap;
        > div {
          width: 100%;
          margin: 8px 0;
        }
      }
    }
  }
}
</style>