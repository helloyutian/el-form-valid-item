import Vue from 'vue'

Vue.prototype.$formConditions = {
    required: {
        validate: ({ value }) => value === '' || value === undefined || value === null || value.length === 0 || /^\s+$/.test(value),
        getMessage: ({ field }) => `${field}不能为空`
    },
    number: {
        validate: ({ value }) => value !== '' && isNaN(value),
        getMessage: ({ field }) => `${field}必须是数字`
    },
    minLen: {
        validate: ({ value, data }) => value !== '' && value.length < data,
        getMessage: ({ field, data }) => `${field}的长度不能小于${data}位字符`
    },
    maxLen: {
        validate: ({ value, data }) => value !== '' && value.length > data,
        getMessage: ({ field, data }) => `${field}的长度不能大于${data}位字符`
    }
}

// min|max 包含等于
export const getValidator = (item, field) => {
    const [ruleName, data] = item.split(':')
    const formConditions = Vue.prototype.$formConditions
    return function (rule, value, cb) {
        const param = { value, field, data }
        if (formConditions[ruleName].validate(param)) {
            cb(new Error(formConditions[ruleName].getMessage(param)))
        } else {
            cb()
        }
    }
}
