<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" active-text-color="#fff" @open="handleOpen" @close="handleClose">
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="1">
      <el-icon><document /></el-icon>
      <span>用户列表</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><location /></el-icon>
      <span>其他功能</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
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

    // .menu-item-box {
    //   width: 100%;
    //   text-align: left;
    // }
  }
}
</style>
