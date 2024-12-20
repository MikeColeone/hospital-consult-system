<script setup lang="ts">
import Aside from '@/components/aside.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" height="100%"><Aside /></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  color: rgb(5, 109, 200);
  background-color: sandybrown;
  height: 100vh; //始终是浏览器高度
}
</style>
