<script setup lang="ts">
import Aside from '@/components/aside.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>

      <el-container>
        <Aside />
        <!-- <aside /> 点击跳转到哪里 -->
        <!-- 导入aside无效 鉴定为重名问题 先找本地组件？ 还是接口 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout {
  border: 1px solid black;
}
</style>
