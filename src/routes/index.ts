import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', name: '用户列表', component: () => import('../view/user.vue') },
  { path: '/tailwind', name: 'tailwind', component: () => import('../view/tailwind.vue') },
  {
    path: '/test',
    name: '测试多级菜单',
    redirect: '/page1',
    component: () => import('../layout/page.vue'),
    children: [
      { path: '/page1', name: '菜单1', component: () => import('../view/page.vue') },
      { path: '/page2', name: '菜单2', component: () => import('../view/page.vue') },
      { path: '/page3', name: '菜单3', component: () => import('../view/page.vue') }
    ]
  }
]
const router = createRouter({
  // 采用hash 模式
  history: createWebHashHistory(),
  routes
})

export { router, routes }
