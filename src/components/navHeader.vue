<script setup lang="ts">
import router from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()
const selectMenu = computed(() => store.state.menu.selectMenu)
console.log('-------------------------------------')
console.log(selectMenu)

const closeTad = (item, index) => {
  store.commit('closeMenu', item)

  //删除当前的tag
  if (route.path !== item.path) {
    return
  }
  const selectMenuData = selectMenu.value
  //删除最后一项的逻辑

  if (index == selectMenuData.length) {
    //只有一个元素
    if (!selectMenuData.lenght) {
      router.push('/')
    } else {
      router.push({
        path: selectMenuData[index - 1].path
      })
    }
  } else {
    router.push({
      path: selectMenuData[index].path
    })
  }
}
</script>
<template>
  <div>
    <div class="header-container">
      <div class="header-left">
        <!-- 触发mutation 通过函数名称 -->
        <el-icon class="icon" size="20px" @click="store.commit('collapseMenu')"><Fold /></el-icon>

        <ul class="flex-box">
          <li v-for="(item, index) in selectMenu" :key="item.path" class="tad flex-box">
            <el-icon class="icon" size="18px"><component :is="item.icon"></component></el-icon>
            <router-link :to="{ path: item.path }" style="text-decoration: none">
              {{ item.name }}
            </router-link>
            <el-icon class="icon close" size="12px"><Close /></el-icon>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <el-dropdown>
          <div class="el-dropdown-link flex-box">
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
    .tad {
      padding: 0px 10px;
      height: 100%;
      .text {
        margin: 0px;
      }
      .close {
        visibility: hidden;
      }
    }
    .tad:hover {
      background-color: #f5f5f5;
      .close {
        visibility: inherit;
        cursor: pointer;
      }
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
