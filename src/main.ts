import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
// 创建实例
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
//调用方法
app.use(router)
app.mount('#app')
