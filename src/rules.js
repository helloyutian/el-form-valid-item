const formConditions = {
    required: {
        validate: ({ value }) => value === '' || value === undefined || value === null || value.length === 0 || /^\s+$/.test(String(value)),
        getMessage: ({ field }) => `${field}不能为空`
    },
    number: {
        validate: ({ value }) => isNaN(value),
        getMessage: ({ field }) => `${field}必须是数字`
    },
    minLen: {
        validate: ({ value, data }) => value.length < data,
        getMessage: ({ field, data }) => `${field}的长度不能小于${data}位字符`
    },
    maxLen: {
        validate: ({ value, data }) => value.length > data,
        getMessage: ({ field, data }) => `${field}的长度不能大于${data}位字符`
    }
}

export const setRules = (rules) => {
    for (let key in rules) {
        if (!formConditions[key]) {
            formConditions[key] = rules[key]
        } else {
            Object.assign(formConditions[key], rules[key])
        }
    }
}

export const getValidator = (item, field) => {
    const [ruleName, data] = item.split(':')
    if (!formConditions[ruleName]) {
        throw new Error('The rule for "' + ruleName + '" is not defined')
    }
    return function (rule, value, cb) {
        const param = { value, field, data }
        if (ruleName === 'required' && formConditions[ruleName].validate(param)) {
            cb(new Error(formConditions[ruleName].getMessage(param)))
        } else if (ruleName !== 'required' && !formConditions['required'].validate(param) && formConditions[ruleName].validate(param)) {
            cb(new Error(formConditions[ruleName].getMessage(param)))
        } else {
            cb()
        }
    }
}
