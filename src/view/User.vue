<template>
  <div>
    <div class="header-container flex justify-between">
      <div class="title">
        <span class="text-14 font-medium">用户列表</span>
        <span class="text-12 text-gray-500 ml-10">共123条数据</span>
      </div>
      <div class="title">
        <el-button type="primary" :icon="Plus">新增</el-button>
        <el-icon class="ml-5"><refresh-left /></el-icon>
        <el-icon class="ml-5"><Search /></el-icon>
        <el-icon class="ml-5"><Setting /></el-icon>
      </div>
    </div>
    <div class="table-container mt-20">
      <el-table :data="userList">
        <el-table-column prop="username" label="用户" />
        <el-table-column prop="realname" label="昵称" />
        <el-table-column prop="state" label="状态">
          <template #default="scope">
            <el-tag class="mx-1" size="small">{{ scope.row.state }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="isUsed" label="启用">
          <template #default="scope">
            <el-switch v-model="scope.row.isUsed" active-color="#13ce66" :active-value="1" :inactive-value="0" class="ml-2" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: #fe2525">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Plus, RefreshLeft, Search, Setting } from '@element-plus/icons-vue'
import http from '@/util/http'
import { ref, onMounted } from 'vue'

interface LinkItem {
  id: string
  username: string
  realname: string
}

const userList = ref<LinkItem[]>([])
const getList = async () => {
  const res = await http.get('/user/query', { timestamp: Number(new Date()) })
  userList.value = res.data.map((d) => {
    return { ...d, color: `#${Math.random().toString(16).substr(-6)}` }
  })
}
/** 导出getList */
defineExpose({ getList })
onMounted(() => {
  getList()
})
</script>
<style lang="less">
.table-container {
  thead {
    tr {
      th {
        background-color: @c_bg_4 !important;
      }
    }
  }
}
</style>
