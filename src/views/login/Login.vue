<template>
  <div class="login-wrap">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <h1 class="login-title">系统登录</h1>
      <el-form-item prop="username">
        <el-input placeholder="用户名" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input placeholder="密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="login-button">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    }
    var checkUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        pass: '',
        username: ''
      },
      rules: {
        pass: [
          { validator: checkPass, trigger: 'blur' }
        ],
        username: [
          { validator: checkUsername, tirgger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
          this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success',
            duration: 1000
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-wrap {
  width 350px
  margin 10% auto
  padding 20px
  border 1px solid #eee
  box-shadow 0 0 25px #cac6c6

  .login-title {
    text-align center
    font-size 18px
    padding-bottom 10px
  }

  .login-button {
    width 100%
  }
}
</style>
