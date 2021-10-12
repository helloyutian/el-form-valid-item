import type { App } from 'vue';
// import { Component} from 'vue'
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

declare const install: (app: App, opt: any) => void;
declare const extendRules: (opt: FormRuleType) => void;
export { install, extendRules, FormRuleParamType, FormRuleItemType, FormRuleType };
declare const _ruleDefault: {
    name: string;
    install: (app: App<any>, opt: any) => void;
    extendRules: (opt: FormRuleType) => void;
};
export default _ruleDefault;