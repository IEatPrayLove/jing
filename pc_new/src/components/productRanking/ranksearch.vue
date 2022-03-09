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
                   placeholder="账号">
          <el-option v-for="item in options"
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
    </div>
    <div>查询</div>
  </div>
</template>
<script>
export default {
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
      orderlist: {
        ordersvalue: '',
        tiem: '',
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
      width: 220px;
    }
    /deep/.el-select {
      width: 120px;
    }
    .tiem {
      margin: 0 6px;
    }
  }
  > div:nth-of-type(2) {
    width: 100px;
    text-align: center;
    background: #547bb3;
    color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-top: 4px;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>