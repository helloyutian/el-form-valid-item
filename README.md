# Form Valid Item 带验证表单组件

这是一个带验证的表单组件，可直接替代elementUI的`<el-form-item>` 组件，这是基于elementUI的form-item组件的封装，目的是让表单验证变得更简单好用



## Install 安装

```
npm install el-form-vaild-item --save
// or
yarn add el-form-vaild-item --save
```



## Usage 使用

``` javascript
// main.js
import Vue from 'vue'
import ElFormValidItem from 'el-form-valid-item'
import ElFormRules from './elFormRules'

// 扩展自定义表单验证规则
ElFormValidItem.extendRules(ElFormRules)
// 使用 ElFormRuleItem
Vue.use(ElFormValidItem)

```

```vue
// template
// ...
<el-form-valid-item label="输入框1：" prop="iptVal1" rules="required|number">
    <el-input v-model="iptVal1" />
</el-form-valid-item>
// or
<el-form-valid-item label="输入框2：" prop="iptVal2" :rules="['required', 'maxLen:8']">
    <el-input v-model="iptVal2" />
</el-form-valid-item>
// ...
```



## Rules 验证规则

| 规则名称 | 说明     | 是否带参数 | 提示消息                 |
| -------- | -------- | ---------- | ------------------------ |
| required | 是否必填 | 否         | xxx不能为空              |
| number   | 数字内容 | 否         | xxx必须时数字            |
| maxLen   | 最大长度 | 是         | xxx的长度不能小于x位字符 |
| minLen   | 最小长度 | 是         | xxx的长度不能大于x位字符 |

参数使用  **规则名称:参数**

如字段长度不能超过8位 `rules="maxLen:8"` 



## Example 例子

``` vue
<!-- template -->
<template>
	<el-form ref="myForm" :model="formData">
        <el-form-valid-item label="选择框：" prop="selectVal" rules="required" label-width="90px">
            <el-select v-model="formData.selectVal" clearable style="width:100%;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-valid-item>
        <el-form-valid-item label="输入框1：" prop="iptVal1" field="用户名" rules="required|maxLen:8" label-width="90px">
            <el-input v-model="formData.iptVal1" placeholder="请输入"></el-input>
        </el-form-valid-item>
        <el-form-valid-item label="输入框2：" prop="iptVal2" :rules="['required', 'number']" label-width="90px">
            <el-input v-model="formData.iptVal2" placeholder="请输入"></el-input>
        </el-form-valid-item>
        <el-form-valid-item label-width="90px" style="text-align:left;">
            <el-button type="success" @click="submitForm('myForm')">提交</el-button>
            <el-button @click="resetForm('myForm')">重置</el-button>
        </el-form-valid-item>
    </el-form>
</template>
<!-- js --> 
<script>
export default {
  data () {
      return {
        formData: {
            iptVal: '',
            selectVal: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      }
  },

  methods: {
    submitForm() {
        this.$refs.myForm.validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    resetForm() {
        this.$refs.myForm.resetFields();
    }
  }
}
</script>
```



## Extend Rules 自定义检验规则

```` javascript
// elFormRules.js 自定义规则
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
    // 整数校验
    int: {
        validate: ({ value }) => value !== '' && !/^(-)?\d+$/.test(value),
        getMessage: ({ field }) => `${field}必须是整数`
    }
    // 可单独提交一个属性来覆盖原来的规则的某个属性
    required: {
        getMessage: ({ field }) => `请选择${field}`
    }
}

````

* param 参数

  | 字段  | 说明                         |
  | ----- | ---------------------------- |
  | value | 检验的内容（如输入框的值）   |
  | field | 字段名称                     |
  | data  | 规则上带的参数(冒号后的内容) |



## Form-Valid-Item Attributes

|参数|说明|类型|可选值|默认值|
|----|---|----|-----|------|
| <font color="red">rules</font> | 表单验证规则，多个规则可用`|`隔开或者用数组方式传入 | string / array | -- | [] |
| <font color="red">field</font> | 字段名称，验证提示消息用到 | string | -- | label的值 |
| <font color="red">trigger</font> | 触发类型，多个类型用数组方式传入 | string / array | -- | ['blur', 'change']|
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 `model` 中的字段 | -- |
| label | 标签文本 | string | -- | -- |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 `auto`。 | string | -- | -- |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | -- | false |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | -- | -- |
| show-message | 是否显示校验错误信息 | boolean | -- | true |
| inline-message | 以行内形式展示校验信息 | boolean | -- | false |
| size | 用于控制该表单域下组件的尺寸 | string | medium / small / mini | -- |
