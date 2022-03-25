<template>
  <el-header class="main-header">
    <div class="logo"><img src="../assets/logo.png" />美餐助手</div>
    <div class="">
      <el-icon><Grid /></el-icon>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />v1.0
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { Grid } from '@element-plus/icons-vue'
</script>
>
<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #eee;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 18px;

    img {
      width: 40px;
      margin-right: 20px;
      border-radius: 5px;
    }
  }
}
</style>
>
