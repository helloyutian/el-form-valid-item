import { createApp } from 'vue'
import App from './App.vue'
// 引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 ElFormRuleItem
import ElFormRuleItem from '@/components/el-form-valid-item'
import FormRules from './formRules'
// 扩展校验规则
ElFormRuleItem.extendRules(FormRules)

const app = createApp(App)
// 注册 ElFormRuleItem 组件
app.component(ElFormRuleItem.name, ElFormRuleItem)
// 全局引入 ElementPlus组件
app.use(ElementPlus)

app.mount('#app')
