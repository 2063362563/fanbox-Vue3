<template>
  <div class="search">
    <div class="input">
      <el-input v-model="input" placeholder="Please input" />
    </div>
    <div class="but">
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>
    
<script lang="ts" setup>
const input = "";
</script>
  
<style scoped lang="scss">
.search {
  margin: 10px;
  display: flex;
}

.but {
  vertical-align: middle;
  line-height: 1; /* 或者使用其他合适的值 */
}
</style>