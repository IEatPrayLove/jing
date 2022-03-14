<template>
  <div class="tag-group"  style="display: flex;">
    <span class="tag-group__title">类目</span>
      <div>
        <el-link :class="Index == -1 ? 'active' : ''"
             class="tags"
             :underline="false"
             @click="tapTab(-1)">
      &nbsp;&nbsp;&nbsp;不限&nbsp;&nbsp;&nbsp;
    </el-link>
    <el-link :class="Index == index ? 'active' : ''"
             class="tags"
             :underline="false"
             v-for="(item, index) in categoryList"
             :key="index"
             @click="tapTab(index)">
      {{ item.name }}
    </el-link>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default: () => {
        return []
      }
    },
    Index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    tapTab (index) {
      this.$emit('tapTab', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tag-group {
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  /* margin: 10px auto; */
  box-shadow: 0 4px 4px rgba(97, 112, 241, 0.1);
  margin-bottom: 20px;
  .tag-group__title {
  	min-width: 40px;
  	max-width: 40px;
  	font-weight: bold;
	margin-top: 8px;
  }
  
  div{
  	flex-flow: row wrap;
  	align-items: center;
  }
  
}

.tags {
  color: #333;
  border-radius: 18px;
  padding: 8px 15px;
  font-size: 14px;
  margin-right: 20px;
}
.tags.active {
	background: #ff7752;
	color: #fff;
	border-radius: 18px;
	padding: 8px 15px;
}
</style>