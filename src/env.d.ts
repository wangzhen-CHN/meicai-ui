/// <reference types="vite/client" />

declare module '*.vue' {
  // eslint-disable-next-line
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
