<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const store = useStore()
</script>
<template>
  <div>
    <div class="header-container">
      <div class="header-left">
        <!-- 触发mutation 通过函数名称 -->
        <el-icon class="icon" size="20px" @click="store.commit('collapseMenu')"><Fold /></el-icon>
      </div>
      <div class="header-right">
        <el-dropdown>
          <div class="el-dropdown-link" flex-box>
            <el-avatar src=""></el-avatar>
            <p class="user-name">admin</p>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.flex-box {
  display: flex;
  align-items: center;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: white;
  padding-right: 25px;
  .header-left {
    height: 100%;
    display: flex;
    align-items: center;
    .icon {
      height: 100%;
      width: 45px;
    }
    .icon:hover {
      background-color: rgb(209, 177, 177);
      cursor: pointer;
    }
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
}
</style>
