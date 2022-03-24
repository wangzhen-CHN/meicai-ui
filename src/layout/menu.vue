<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" active-text-color="#fff">
    <el-menu-item index="1">
      <el-icon><document /></el-icon>
      <span>用户列表</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Setting /></el-icon>
      <span>其他功能</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Document, Setting } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.el-menu {
  margin-top: 10px;
  --el-menu-item-height: 48px;

  .el-menu-item {
    margin: 5px 10px;
    border-radius: 5px;

    &.is-active {
      background-color: @c_primary;
    }
  }
}
</style>
