import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 采用hash 模式
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: '用户列表', component: () => import('../view/page.vue') },
    { path: '/tailwind', name: 'tailwind', component: () => import('../view/tailwind.vue') }
  ]
})

export default router
