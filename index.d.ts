import Vue, { PluginFunction, ComponentOptions } from 'vue'
export interface ParamType {
    value: string|number
    field: string
    data?: string
}
export interface RuleItem {
    validate (param: ParamType): Boolean
    getMessage (param: ParamType): String
}
export interface RulesOptionsType {
    [key: string]: RuleItem
}
/** FormValidItem Component */
class ElFormValidItem extends ComponentOptions {
  // 安装组件
  static install (vue: typeof Vue): PluginFunction<never>

  /** 自定义规则 */
  static extendRules (RulesOptions: RulesOptionsType): void
}

export default ElFormValidItem
