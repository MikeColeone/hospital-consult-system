<script setup lang="ts">
import { useRouter } from 'vue-router'
import TreeMenu from './treeMenu.vue'
import { ref, reactive } from 'vue'

const handleOpen = () => {}
const handleClose = () => {}

const router = useRouter()
const menuData = reactive(router.options.routes[0]?.children || [])

console.log('=====================================================')
console.log(router)
console.log('=====================================================')

console.log(menuData)
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
      <TreeMenu :index="1" :menuData="menuData" />
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
