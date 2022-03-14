<template>
  <div class="datasearch">
    <div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="付款时间">付款时间</el-dropdown-item>
          <el-dropdown-item command="结算时间">结算时间</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="tiem">
        <el-date-picker v-model="orderlist.tiem"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right">
        </el-date-picker>
      </div>
      <div class="select-item">
        <el-select v-model="orderlist.order"
                   multiple
                   placeholder="订单状态">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-select v-model="orderlist.banvalue"
                 style="width: 100px;"
                 placeholder="请选择">
        <el-option v-for="item in ban"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
        </el-option>
      </el-select>
      <div class="select-item">
        <el-select v-model="orderlist.shopvalue"
                   multiple
                   placeholder="订单类型">
          <el-option v-for="item in shop"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-serach">
        <el-select v-model="orderlist.operatorsvalue"
                   filterable
                   placeholder="运营人">
          <el-option v-for="item in operators"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-user">
        <el-select v-model="orderlist.groupsvalue"
                   placeholder="分组(全部)">
          <el-option-group v-for="group in groups"
                           :key="group.label"
                           :label="group.label">
            <el-option v-for="item in group.options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
      <div class="select-shop">
        <el-select v-model="orderlist.goodsvalue"
                   placeholder="请选择">
          <el-option v-for="item in goods"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-order">
        <el-select v-model="orderlist.ordersvalue"
                   placeholder="全部">
          <el-option v-for="item in orders"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div>
      <div>查询</div>
      <div>
        <el-dropdown trigger="click"
                     @command="exportCommand">
          <span class="el-dropdown-link">
            导出<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="box">
              <div style="color:#252525;">导出</div>
              <div style="color:#bcbcbc">按筛选条件导出</div>
            </el-dropdown-item>
            <el-dropdown-item command="right">
              <div style="color:#252525;">查看导出任务列表</div>
              <div style="color:#bcbcbc">导出后可下载</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <Orderexport v-if="orderexport"
                 @closeorder="closeorder"
                 :orderlist="orderlist" />
    <Orderright v-if="orderright"
                @closeright="closeright" />
  </div>
</template>
<script>
import Orderexport from './orderexport.vue'
import Orderright from './orderright.vue'
export default {
  components: {
    Orderexport, Orderright
  },
  data () {
    return {
      command: '付款时间',
      // 时间
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      //订单状态
      options: [{
        value: '黄金糕',
        label: '黄金糕'
      }, {
        value: '双皮奶',
        label: '双皮奶'
      }, {
        value: '蚵仔煎',
        label: '蚵仔煎'
      }, {
        value: '龙须面',
        label: '龙须面'
      }, {
        value: '北京烤鸭',
        label: '北京烤鸭'
      }],
      //封禁
      ban: [{
        value: '全部',
        label: '全部'
      }, {
        value: '未封禁',
        label: '未封禁'
      }, {
        value: '已封禁',
        label: '已封禁'
      }],
      //订单状态
      shop: [{
        value: '订单类型(全部)',
        label: '订单类型(全部)'
      }, {
        value: '小店',
        label: '小店'
      }, {
        value: '京东',
        label: '京东'
      }, {
        value: '苏宁',
        label: '苏宁'
      }, {
        value: '考拉',
        label: '考拉'
      }, {
        value: '唯品会',
        label: '唯品会'
      }],
      //运营人
      operators: [
        { value: '全部运营人', label: '全部运营人' },
        { value: '无运营人', label: '无运营人' }
      ],
      //分组
      groups: [{
        label: '分组(全部)',
        options: [{
          value: '上海',
          label: '上海'
        }, {
          value: '北京',
          label: '北京'
        }]
      }],
      //商品
      goods: [
        { value: '商品(全部)', label: '商品(全部)' },
      ],
      //订单
      orders: [
        { value: '全部', label: '全部' },
        { value: '验货订单', label: '验货订单' },
        { value: '购样订单', label: '购样订单' },
      ],
      orderlist: {
        ordersvalue: '',
        tiem: '',
        order: '',
        banvalue: '',
        shopvalue: '',
        operatorsvalue: '',
        groupsvalue: '',
        goodsvalue: '',
        goodsvalue: '',
      },
      orderexport: false,
      orderright: false
    };
  },
  methods: {
    handleCommand (command) {
      this.command = command
    },
    exportCommand (command) {
      if (command == 'box') {
        this.orderexport = true
        return
      }
      if (command == 'right') {
        this.orderright = true
        return
      }
    },
    closeorder () {
      this.orderexport = false
    },
    closeright () {
      this.orderright = false
    }
  }
}
</script>
<style lang="less" scoped>
.datasearch {
  display: flex;
  > div:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    > div {
      margin: 4px 4px;
    }
    /deep/.el-range-editor.el-input__inner {
      width: 320px;
    }
    /deep/.select-item {
      width: 150px;
      max-height: 40px;
    }
    .tiem {
      margin: 0 6px;
    }
    .select-serach {
      /deep/.el-select {
        width: 150px;
      }
    }
  }
  > div:nth-of-type(2) {
    width: 200px;
    > div {
      height: 32px;
      padding: 5px 10px;
      width: 70px;
      margin-bottom: 5px;
      background: #547bb3;
      color: #fff;
      text-align: center;
      line-height: 32px;
      cursor: pointer;
      border-radius: 4px;
    }
    > div:nth-of-type(2) {
      overflow: hidden;
      text-align: center;
      /deep/.el-dropdown {
        background: #547bb3;
        color: #fff;
        border: none;
        font-size: 16px;
        padding: 0;
      }
    }
  }
}
</style>