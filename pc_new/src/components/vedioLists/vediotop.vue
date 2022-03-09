<template>
  <div class="datasearch">
    <div>
      <div class="tiem">
        时间
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
        <div>账号名称</div>
        <el-select v-model="orderlist.order"
                   multiple
                   placeholder="账号名称">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-item">
        <div>标签</div>
        <el-select v-model="orderlist.banvalue"
                   style="width: 100px;"
                   placeholder="标签">
          <el-option v-for="item in ban"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-item">
        <div>运营人</div>
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
      <div class="select-item">
        <div>分组</div>
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
      <div class="select-item">
        <div>是否私密</div>
        <el-select v-model="orderlist.goodsvalue"
                   placeholder="全部">
          <el-option v-for="item in goods"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-item">
        <div>是否有商品</div>
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
      <div>+抖音号</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
      //账号名称
      options: [{
        value: '全部抖音账号',
        label: '全部抖音账号'
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
    .select-item {
      display: flex;
      align-items: center;
      > div:nth-of-type(1) {
        font-size: 12px;
        margin-right: 10px;
      }
    }
    > div {
      margin: 4px 4px;
    }
    /deep/.el-range-editor.el-input__inner {
      width: 320px;
      height: 32px;
    }
    /deep/.el-input--suffix .el-input__inner {
      height: 32px !important;
    }
    /deep/.select-item {
      max-height: 32px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    > div:nth-of-type(1) {
      height: 32px;
      background: #547bb3;
      border-radius: 8px;
      line-height: 32px;
      color: #fff;
      padding: 1px 6px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>