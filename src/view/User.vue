<template>
  <div class="user-title">用户列表</div>
  <el-autocomplete
    v-model="selectValue"
    :fetch-suggestions="querySearchAsync"
    placeholder="查询用户"
    @select="handleSelect"
  >
    <template #suffix>
      <el-icon class="el-input__icon">
        <search />
      </el-icon>
    </template>
    <template #default="{ item }">
      <div class="value">{{ item.realname }}</div>
    </template>
  </el-autocomplete>
  <ul class="user-box">
    <li
      :class="
        activeUserName === item.username ? 'active user-item' : 'user-item'
      "
      v-for="item in userList"
      :key="item.label"
      @click="onActive(item)"
    >
      <div class="user-item-info">
        <el-avatar
          :icon="UserFilled"
          :style="{ background: item.color }"
          :size="30"
        >
        </el-avatar>
        <div>
          <div class="user-realname">{{ item.realname }}</div>
          <div class="user-username">{{ item.username }}</div>
        </div>
      </div>
      <span v-if="isAdmin" class="delete" @click.stop="onDelete(item)"
        ><Delete width="20" height="20"
      /></span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import http from "../util/http";
import { ElMessage, ElMessageBox } from "element-plus";
import { Search, UserFilled, Delete } from "@element-plus/icons-vue";
const emit = defineEmits<{ (e: "onSelect", user: {}): void }>();
const selectValue = ref("");
const isAdmin = ref(location.search.indexOf('admin=wz')>0);

const checked = ref(false);
const activeUserName = ref("");

interface LinkItem {
  id: string;
  username: string;
  realname: string;
}

const userList = ref<LinkItem[]>([]);
let timeout: NodeJS.Timeout;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? userList.value.filter(createFilter(queryString))
    : userList.value;
  cb(results);
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.username.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const handleSelect = (item: LinkItem) => {
  selectValue.value = item.realname || item.username;
  activeUserName.value = item.username;
};
const onActive = (user: {}) => {
  activeUserName.value = user.username;
  //调用父组件方法
  emit("onSelect", user);
};
const onDelete =  ({ id }) => {
  ElMessageBox.confirm("", "确认删除", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  }).then(async() => {
    const res = await http.post("/user/delete", { id });
    if (res.success) {
      ElMessage.success("删除成功");
      getList();
    } else {
      ElMessage.error("删除失败");
    }
  });
};
const getList = async () => {
  const res = await http.get("/user/query",{timestamp:Number(new Date())});
  userList.value = res.data.map((d) => {
    return { ...d, color: "#" + Math.random().toString(16).substr(-6) };
  });
};
/** 导出getList */
defineExpose({ getList });
onMounted(() => {
  getList();
});
</script>
<style>
.el-input__suffix-inner {
  pointer-events: all;
  justify-content: center;
  display: inline-flex;
  align-items: center;
}
.user-title {
  color: #fff;
  text-align: left;
  padding-left: 30px;
  margin-bottom: 10px;
}
.user-box {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  margin-top: 20px;
}
.user-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  text-align: left;
  padding-left: 50px;
  cursor: pointer;
}
.user-item-info {
  display: flex;
  align-items: center;
}
.user-item.active {
  background-color: #3d4855;
}
.user-item:hover {
  background-color: #48515a;
}
.user-username {
  margin-left: 8px;
  font-size: 14px;
}
.user-realname {
  font-size: 12px;
  margin-left: 8px;
}
.delete {
  display: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
}
.user-item:hover .delete {
  display: block;
}
</style>
