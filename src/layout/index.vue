<template>
  <el-container class="main-container" direction="vertical">
    <Header />
    <el-container>
      <el-aside class="main-aside" width="300px">
        <Menu />
      </el-aside>
      <el-main class="main">
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
.main-container {
  height: 100%;
  background: #f2f6f8;

  .main-aside {
    height: 100%;
    background-color: #fff;
  }
}
</style>
