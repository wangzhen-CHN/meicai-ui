import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style/var.less'
import router from './routes'
import App from './App.vue'

const app = createApp(App)
// 使用配置的路由
app.use(router)
app.mount('#app')
