<template>
  <el-header class="main-header">
    <div class="logo"><img src="../assets/logo.png" />美餐助手</div>
    <div class="flex items-center">
      <img class="avatar" src="../assets/avatar.jpg" />
      <span class="ml-5">v1.0</span>
    </div>
  </el-header>
</template>
<script lang="ts" setup></script>
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

  .avatar {
    width: 40px;
    border-radius: 20px;
  }
}
</style>
>
