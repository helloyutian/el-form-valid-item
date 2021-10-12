import Vue, { PluginFunction } from 'vue'

export interface FormRuleParamType {
    value: string|number;
    field: string;
    data?: string;
}
export interface FormRuleItemType {
    validate (param: FormRuleParamType): Boolean;
    getMessage (param: FormRuleParamType): String;
}
export interface FormRuleType {
    [key: string]: FormRuleItemType;
}
// FormValidItem
declare namespace ElFormValidItem {
    function install(vue: typeof Vue): PluginFunction<never>;
    function extendRules(RulesOptions: FormRuleType): void;
}

export default ElFormValidItem
