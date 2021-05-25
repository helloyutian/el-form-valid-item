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
        field: {
            type: String,
            default() {
                const name = this.label ? this.label.replace(/[:：]$/, '') : ''
                return name
            }
        },
        trigger: {
            type: [String, Array],
            default() {
                return ['blur', 'change']
            }
        }
    },
    computed: {
        validRule() {
            const arr = !this.rules ? [] : typeof this.rules === 'string' ? this.rules.split('|') : this.rules
            this.required && arr.indexOf('required') === -1 && arr.unshift('required')
            return arr.map(item => {
                return { validator: getValidator(item, this.field), trigger: this.trigger }
            })
        }
    }
}
</script>