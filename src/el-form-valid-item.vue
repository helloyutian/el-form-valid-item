<template>
    <el-form-item
        :prop="prop"
        :label="label"
        :label-width="labelWidth"
        :required="required"
        :rules="validRule"
        :error="error"
        :show-message="showMessage"
        :inline-message="inlineMessage"
        :size="size"
    >
        <slot />
    </el-form-item>
</template>
<script>
import { getValidator } from './rules'
export default {
    name: 'ElFormValidItem',
    props: {
        prop: String,
        label: String,
        labelWidth: String,
        required: Boolean,
        rules: [String, Array],
        error: String,
        showMessage: {
            type: Boolean,
            default: true
        },
        inlineMessage: [String, Boolean],
        size: String,
        field: String,
        trigger: {
            type: [String, Array],
            default() {
                return ['blur', 'change']
            }
        },
        validator: Function
    },
    setup(props) {
        let fieldName = props.field || (props.label ? props.label.replace(/[:：]$/, '') : '')
        return {
            fieldName
        }
    },
    computed: {
        validRule() {
            const arr = !this.rules ? [] : typeof this.rules === 'string' ? this.rules.split('|') : this.rules
            this.required && arr.indexOf('required') === -1 && arr.unshift('required')
            const ruleList = arr.map(item => ({ validator: getValidator(item, this.fieldName), trigger: this.trigger }))
            typeof this.validator === 'function' && ruleList.push({ validator: this.validator, trigger: this.trigger })
            return ruleList
        }
    }
}
</script>