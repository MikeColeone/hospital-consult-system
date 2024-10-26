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

<style scoped>
.common-layout {
  color: rgb(5, 109, 200);
  background-color: sandybrown;
  height: 100vh;
}
</style>
