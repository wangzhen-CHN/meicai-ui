<template>
  <el-container class="main-container">
    <el-container>
      <el-aside class="main-aside" width="300px">
        <el-header class="main-header">美餐助手</el-header>
        <User @onSelect="onSelect" ref="userRef"/>
      </el-aside>
      <el-main class="main">
        <el-card>
          <div class="title">
            添加账户
            <span class="tips">
              添加成功后可手动点餐，以后每日早上8点自动订餐
            </span>
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
                  max: 20,
                },
              ]"
            >
              <el-input v-model="formValue.username" placeholder="eg:san.zhang">
                <template #append>@china.zhaogang.com</template>
              </el-input>
            </el-form-item>
            <div
              class="tips"
              style="margin-bottom: 5px; margin-top: 15px; padding-left: 120px"
            >
              tips:密码将保存在服务器，用于自动点餐，如介意请勿使用本系统
            </div>
            <el-form-item
              label="美餐密码"
              prop="password"
              :rules="[{ required: true, message: '请输入美餐密码', max: 20 }]"
            >
              <el-input
                v-model="formValue.password"
                placeholder="美餐密码"
                type="password"
              ></el-input>
            </el-form-item>

            <el-form-item
              label="姓名"
              prop="realname"
              :rules="[{ message: '最多10个字符', max: 10 }]"
            >
              <el-input
                v-model="formValue.realname"
                placeholder="eg:张三"
              ></el-input>
            </el-form-item>
            <div style="text-align: right;">
              <el-button style="padding: 0 30px" @click="resetFormValue">
              重置
            </el-button>
            <el-button
              color="#626aef"
              :loading="loading"
              style="color: white; padding: 0 30px"
              @click="onAddUser(ruleFormRef)"
            >
              添加
            </el-button>
            </div>
          </el-form>
          <div class="title mt-40">用户信息</div>
          <el-descriptions :column="2" style="width: 1000px">
            <el-descriptions-item label="姓名">
              {{ userInfo.realname || "--" }}
            </el-descriptions-item>
            <el-descriptions-item label="美餐账户名">
              {{ userInfo.username || "--" }}
            </el-descriptions-item>
          </el-descriptions>
          <div v-loading="infoLoading">
            <div class="title flex">
              <div>点餐信息 <span class="tips">2022-01-15 11:30</span></div>
              <div v-if="orderList.length">
                <span class="tips">{{orderList.findIndex((list) => list.status === '可点餐')===-1?'已全部点餐':'存在未点餐'}}</span>
                <el-button
                type="primary"
                :loading="loading"
                :disabled="orderList.findIndex((list) => list.status === '可点餐')===-1"
                style="padding: 0 30px; margin-left: 10px"
                @click="onOrder"
              >
                手动点餐
              </el-button>
              </div>
              
            </div>
            <el-descriptions
              :column="2"
              style="width: 1000px"
              v-if="orderList.length"
            >
              <el-descriptions-item
                :label="`${list.date} ${list.name}`"
                v-if="orderList.length"
                v-for="list in orderList"
                :key="list.tabUniqueId"
              >
                <el-tag
                  size="small"
                  effect="dark"
                  :type="
                    list.status === '已点餐'
                      ? 'success'
                      : list.status === '可点餐'
                      ? ''
                      : 'info'
                  "
                  >{{ list.status }}</el-tag
                >
                {{ list.reason }}
              </el-descriptions-item>
            </el-descriptions>
            <el-empty v-else />
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import http from "../util/http";
import User from "./User.vue";
import { ref, reactive } from "vue";
import type { ElForm, ElMessage } from "element-plus";
const ruleFormRef = ref<InstanceType<typeof ElForm>>();
const drawer = ref(false);
const userRef = ref(null);
const loading = ref(false);
const infoLoading = ref(false);
const remember = ref("");
const userInfo = ref({});
const formValue = ref({
  username: "",
  password: "",
  realname: "",
});
const orderList = ref([]);
const resetFormValue = () => {
  formValue.value = {};
};
const onAddUser = (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      const { success, msg, data } = await http.post(
        "/user/check",
        formValue.value
      );
      if (!success) {
        return ElMessage.error(msg || "新增失败");
      }
      remember.value = data.remember;
      loading.value = false;
      userRef.value.getList()
      ElMessage.success("新增成功");
      queryOrder();
    }
  });
};

/** 登录 */
const onSelect = async (user) => {
  infoLoading.value = true;
  const { success, msg, data } = await http.post("/user/login", user);
  if (!success) {
    infoLoading.value = false;
    return ElMessage.error(msg || "登录失败");
  }
  userInfo.value = user;
  remember.value = data.remember;
  queryOrder();
};
/** 订餐状态 */
const queryOrder = async () => {
  infoLoading.value = true;
  const orderRes = await http.post("/order/list", { remember: remember.value });
  infoLoading.value = false;
  if (!orderRes.success) {
    return ElMessage.error(orderRes.msg || "查询订餐状态失败");
  }
  orderList.value = orderRes.data;
};
/** 手动点餐 */
const onOrder = async () => {
  infoLoading.value = true;
  const orderRes = await http.get("/order/action", {
    remember: remember.value,
  });
  if (!orderRes.success) {
    return ElMessage.error(orderRes.msg || "订餐失败");
  }
  setTimeout(() => {
    queryOrder();
    ElMessage.success(orderRes.msg || "订餐成功");
    infoLoading.value = false;
  }, 1000);
};
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
  justify-content: center;
  align-items: center;
  /* background-color: #1e2329; */
  border-bottom: 1px solid #38424e;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.main-aside {
  height: 100%;
  background: #303340;
}
.marginBottom0 {
  margin-bottom: 0;
}

.title {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #11131a;
}
.mt-40 {
  margin-top: 40px;
}
.el-descriptions {
  color: #6c7280;
  padding: 10px 20px;
}
.tips {
  text-align: left;
  font-size: 12px;
  color: #a5a7a4;
}
</style>
