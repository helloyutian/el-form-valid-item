<template>
    <div class="container">
        <el-form ref="myForm" :model="formData">
            <el-form-valid-item label="选择框：" prop="selectVal" required label-width="90px">
                <el-select v-model="formData.selectVal" clearable style="width:100%;">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-valid-item>
            <el-form-valid-item label="用户名：" prop="iptVal1" rules="required|maxLen:8" label-width="90px">
                <el-input v-model="formData.iptVal1" placeholder="请输入用户名，最多8位"></el-input>
            </el-form-valid-item>
            <el-form-valid-item label="年龄：" prop="iptVal2" :rules="['required', 'number']" label-width="90px">
                <el-input v-model="formData.iptVal2" placeholder="请输入数字"></el-input>
            </el-form-valid-item>
            <el-form-valid-item label-width="90px" style="text-align:left;">
                <el-button type="success" @click="submitForm('myForm')">提交</el-button>
                <el-button @click="resetForm('myForm')">重置</el-button>
            </el-form-valid-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'FormValid',
  props: {
    msg: Object
  },
  data () {
      return {
        count: 0,
        formData: {
            iptVal1: '',
            iptVal2: '',
            selectVal: ''
        },
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }]
      }
  },
  created () {
      console.log('created')
    //   this.formData.iptVal = this.msg
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
.myform {
    width: 50%;
    margin: 0 auto;
}
</style>
