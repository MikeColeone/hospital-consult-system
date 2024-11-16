<script setup lang="ts">
import SideBarView from './sideBarView.vue'
const handleOpen = () => {}
const handleClose = () => {}
</script>
<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="aside-mystyle"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose">
      <p class="logo-title" style="padding: 10px">陪诊系统</p>
      <SideBarView />
    </el-menu>
  </div>
</template>
<style lang="less" scoped>
.aside-mystyle {
  height: 100vh;
}

.logo-title {
  padding: 0;
  margin: 0;
  font-size: 20px;
  text-align: center;
}
</style>
