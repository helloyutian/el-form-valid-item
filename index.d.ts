import Vue, { PluginFunction } from 'vue'
export interface FormRuleParamType {
    value: string|number
    field: string
    data?: string
}
export interface FormRuleItemType {
    validate (param: FormRuleParamType): Boolean
    getMessage (param: FormRuleParamType): String
}
export interface FormRuleType {
    [key: string]: FormRuleItemType
}
/** FormValidItem Component */
declare class ElFormValidItem {
  // 安装组件
  static install (vue: typeof Vue): PluginFunction<never>

  /** 自定义规则 */
  static extendRules (RulesOptions: FormRuleType): void
}

export default ElFormValidItem
