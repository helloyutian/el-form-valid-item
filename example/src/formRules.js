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
const formRules =  {
	int: {
		validate: ({ value }) => !/^(-)?\d+$/.test(value.toString()),
		getMessage: ({ field }) => `${field}必须是整数`
	},
	float: {
		validate: ({ value, data }) => {
			const reg = new RegExp('^(-)?[0-9]+(.[0-9]{1,' + (data || '') +'})?$')
			return !reg.test(value.toString())
		},
		getMessage: ({ field, data }) => `${field}只能是数字，且最多保留${data}位小数`
	}
}

export default formRules