/** 
 * // 规则格式
 * 规则名称: {
 * validate(param) { return true or false }
 * getMessage(param) { return '提示内容' }
 * 
 * // 参数说明
 * param {
 *  value: '', // 输入框的值
 *  field: '', // 字段名称
 *  data: '' // 规则上带的参数(冒号后的内容)
 * }
 * 
* } */

export default {
	int: {
		validate: ({ value }) => !/^(-)?\d+$/.test(value),
		getMessage: ({ field }) => `${field}必须是整数`
	},
	float: {
		validate: ({ value, data }) => {
			const reg = new RegExp('^(-)?[0-9]+(.[0-9]{1,' + (data || '') +'})?$')
			return !reg.test(value)
		},
		getMessage: ({ field, data }) => `${field}只能是数字，且最多保留${data}位小数`
	},
	minVal: {
		validate: ({ value, data }) => Number(value) < Number(data),
		getMessage: ({ field, data }) => `${field}不能小于${data}`
	},
	maxVal: {
		validate: ({ value, data }) => Number(value) > Number(data),
		getMessage: ({ field, data }) => `${field}不能大于${data}`
	},
	phone: {
		validate: ({ value }) => !/^1\d{10}$/.test(value),
		getMessage: ({ field }) => `请填写正确的${field}`
	},
	tel: {
		validate: ({ value }) => !/^\d[0-9*#-]{6-16}$/.test(value),
		getMessage: ({ field }) => `请填写正确的${field}`
	}
}
