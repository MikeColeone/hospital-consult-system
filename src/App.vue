<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template id="main">
  <!-- 设置路由出口 -->
  <RouterView />
</template>
<style scoped>
#app {
  height: 100%;
}

#main {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vh;
}
</style>
