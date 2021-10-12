import ElFormRuleItem from './src/el-form-valid-item.vue'
import { setRules } from './src/rules'

ElFormRuleItem.install = function(Vue) {
    Vue.component(ElFormRuleItem.name, ElFormRuleItem);
}
ElFormRuleItem.extendRules = function(rules) {
    if (typeof rules !== 'object') throw new Error('rules must be Object')
    setRules(rules)
}
export default ElFormRuleItem;
