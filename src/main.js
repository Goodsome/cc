import { createApp } from 'vue'
import App from './App.vue'
import { InputNumber, DatePicker, Button } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(InputNumber)
app.use(DatePicker)
app.use(Button)

app.mount('#app')
