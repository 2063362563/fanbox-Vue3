import { createApp } from 'vue'
import '@/style/reset.scss'
import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/stores'
import "element-plus/theme-chalk/el-message.css";

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')