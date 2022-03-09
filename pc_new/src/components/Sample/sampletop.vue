<template>
  <div class="sampletop">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="商品">商品</el-dropdown-item>
        <el-dropdown-item command="申请ID">申请ID</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div>
      <el-input placeholder="请输入关键词搜索"
                prefix-icon="el-icon-search"
                width="160"
                v-model="input2">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      command: '商品',
      input2: ''
    }
  },
  methods: {
    handleCommand (command) {
      this.command = command
    }
  }
}
</script>

<style lang="less" scoped>
.sampletop {
  margin-left: 16px;
  display: flex;
  align-items: center;
  > div:nth-of-type(2) {
    margin-left: 20px;
  }
}
</style>