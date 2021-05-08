import Vue from 'vue'
import ElFormRuleItem from './src/el-form-valid-item.vue'

ElFormRuleItem.install = function(Vue) {
    Vue.component(ElFormRuleItem.name, ElFormRuleItem);
}
ElFormRuleItem.extendRules = function(rules) {
    if (typeof rules !== 'object') throw new Error('rules must be Object')
    const formConditions = Vue.prototype.$formConditions
    for (let key in rules) {
        if (!formConditions[key]) {
            formConditions[key] = rules[key]
        } else {
            Object.assign(formConditions[key], rules[key])
        }
    }
}
export default ElFormRuleItem;
