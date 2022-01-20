import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    //自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: "localhost",
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        ws: false,
        changeOrigin: true, // 允许跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
