<template>
  <el-container class="main-container">
    <el-container>
      <el-aside class="main-aside" width="300px">
        <el-header class="main-header">美餐助手</el-header>
        <User ref="userRef" @onSelect="onSelect" />
      </el-aside>
      <el-main class="main">
        <el-card>
          <div class="title">
            添加账户
            <span class="tips"> 添加成功后可手动点餐，以后每日早上8点自动订餐 </span>
          </div>

          <el-form ref="ruleFormRef" :model="formValue" label-width="120px">
            <el-form-item
              class="marginBottom0"
              label="美餐账户名"
              prop="username"
              :rules="[
                {
                  required: true,
                  message: '请输入美餐账户名',
                  min: 4,
                  max: 20
                }
              ]"
            >
              <el-input v-model="formValue.username" placeholder="eg:san.zhang">
                <template #append>@china.zhaogang.com</template>
              </el-input>
            </el-form-item>
            <div class="tips" style="margin-top: 15px; margin-bottom: 5px; padding-left: 120px">
              tips:密码将保存在服务器，用于自动点餐，如介意请勿使用本系统
            </div>
            <el-form-item label="美餐密码" prop="password" :rules="[{ required: true, message: '请输入美餐密码', max: 20 }]">
              <el-input v-model="formValue.password" placeholder="美餐密码" type="password"></el-input>
            </el-form-item>

            <el-form-item label="姓名" prop="realname" :rules="[{ message: '最多10个字符', max: 10 }]">
              <el-input v-model="formValue.realname" placeholder="eg:张三"></el-input>
            </el-form-item>
            <div style="text-align: right">
              <el-button style="padding: 0 30px" @click="resetFormValue"> 重置 </el-button>
              <el-button color="#626aef" :loading="loading" style="padding: 0 30px; color: white" @click="onAddUser(ruleFormRef)"> 添加 </el-button>
            </div>
          </el-form>
          <div class="title mt-40">用户信息</div>
          <el-descriptions :column="2">
            <el-descriptions-item label="姓名">
              {{ userInfo.realname || '--' }}
            </el-descriptions-item>
            <el-descriptions-item label="美餐账户名">
              {{ userInfo.username || '--' }}
            </el-descriptions-item>
          </el-descriptions>
          <div v-loading="infoLoading">
            <div class="title flex">
              <div>点餐信息 <span class="tips">2022-01-15 11:30</span></div>
              <div v-if="orderList.length">
                <span class="tips">{{ orderList.findIndex((list) => list.status === '可点餐') === -1 ? '已全部点餐' : '存在未点餐' }}</span>
                <el-button
                  type="primary"
                  :loading="loading"
                  :disabled="orderList.findIndex((list) => list.status === '可点餐') === -1"
                  style="margin-left: 10px; padding: 0 30px"
                  @click="onOrder"
                >
                  手动点餐
                </el-button>
              </div>
            </div>
            <el-descriptions v-if="orderList.length" :column="2">
              <el-descriptions-item v-for="list in orderList" v-if="orderList.length" :key="list.tabUniqueId" :label="`${list.date} ${list.name}`">
                <el-tag size="small" effect="dark" :type="list.status === '已点餐' ? 'success' : list.status === '可点餐' ? '' : 'info'">{{
                  list.status
                }}</el-tag>
                {{ list.reason }}
              </el-descriptions-item>
            </el-descriptions>
            <el-empty v-else />
          </div>
          <div class="log">
            <el-button type="info" @click="onShowLog"> 查看日志 </el-button>
          </div>
          <ul v-if="logList.length > 0" class="log-box">
            <li v-for="log in logList" :key="log">
              {{ log }}
            </li>
          </ul>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import http from '../util/http'
import User from './User.vue'
import { ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
const ruleFormRef = ref()
const userRef = ref(null)
const loading = ref(false)
const infoLoading = ref(false)
const remember = ref('')
const userInfo = ref({})
const logList = ref([])
const formValue = ref({
  username: '',
  password: '',
  realname: ''
})
const orderList = ref([])
const resetFormValue = () => {
  formValue.value = {}
}
const onAddUser = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      const { success, msg, data } = await http.post('/user/check', {
        ...formValue.value,
        password: `S${btoa(formValue.value.password)}`
      })
      if (!success) {
        loading.value = false
        return ElMessage.error(msg || '新增失败')
      }
      remember.value = data.remember
      loading.value = false
      userRef.value.getList()
      userInfo.value = formValue.value
      ElMessage.success('新增成功')
      queryOrder()
    }
  })
}

/** 登录 */
const onSelect = async (user) => {
  infoLoading.value = true
  const { success, msg, data } = await http.post('/user/login', user)
  if (!success) {
    infoLoading.value = false
    return ElMessage.error(msg || '登录失败')
  }
  userInfo.value = user
  remember.value = data.remember
  queryOrder()
}
/** 订餐状态 */
const queryOrder = async () => {
  infoLoading.value = true
  const orderRes = await http.post('/order/list', { remember: remember.value })
  infoLoading.value = false
  if (!orderRes.success) {
    return ElMessage.error(orderRes.msg || '查询订餐状态失败')
  }
  orderList.value = orderRes.data
}
/** 手动点餐 */
const onOrder = async () => {
  infoLoading.value = true
  const orderRes = await http.get('/order/action', {
    remember: remember.value
  })
  if (!orderRes.success) {
    return ElMessage.error(orderRes.msg || '订餐失败')
  }
  setTimeout(() => {
    queryOrder()
    ElMessage.success(orderRes.msg || '订餐成功')
    infoLoading.value = false
  }, 1000)
}

/** 查看日志 */
const onShowLog = async () => {
  const { data } = await http.get('/log')
  logList.value = data
}
</script>
<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main-container {
  height: 100%;
  background: #f2f6f8;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  /* background-color: #1e2329; */
  border-bottom: 1px solid #38424e;
}

.main-aside {
  height: 100%;
  background: #303340;
}

.marginBottom0 {
  margin-bottom: 0;
}

.title {
  margin-top: 20px;
  margin-bottom: 8px;
  color: #11131a;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
}

.mt-40 {
  margin-top: 40px;
}

.el-descriptions {
  padding: 10px 20px;
  color: #6c7280;
}

.tips {
  color: #a5a7a4;
  font-size: 12px;
  text-align: left;
}

.log {
  display: flex;
  justify-content: flex-end;
}

.log-box {
  box-sizing: border-box;
  width: 100%;
  max-height: 500px;
  padding: 5px;
  overflow-y: auto;
  color: #eee;
  text-align: left;
  list-style: none;
  background-color: #222;
}

.log-box li {
  font-size: 14px;
  list-style: none;
}
</style>
