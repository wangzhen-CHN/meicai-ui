<template>
  <el-container class="layout-container" direction="vertical">
    <Header />
    <el-container>
      <el-aside class="layout-aside" width="300px">
        <Menu />
      </el-aside>
      <el-main class="layout-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Header from './header.vue'
import Menu from './menu.vue'
</script>
<style scoped lang="less">
.layout-container {
  height: 100%;
  background: #f2f6f8;

  .layout-aside {
    height: 100%;
    background-color: #fff;
  }

  .layout-main {
    margin: 20px;
    background-color: #fff;
  }
}
</style>
