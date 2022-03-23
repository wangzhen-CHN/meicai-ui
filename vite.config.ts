import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path';
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
        target: 'http://124.221.159.81:8001/',
        ws: false,
        changeOrigin: true, // 允许跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve('src/style/var.less')}";`,
          },
          javascriptEnabled: true,
        }
      }
    },
})
