<template>
  <el-container class="login-view">
    <el-main>
      <el-form label-position="left" label-width="0px" :model="form">
        <h3>欢迎登录</h3>
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="用户名"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="form.password"
            placeholder="密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-button type="primary" style="width: 100%" @click="handleSubmit"
          >登录</el-button
        >
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // 处理登录逻辑
      console.log("提交的表单数据:", this.form);
    },
  },
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
}

.el-main {
  width: 300px;
}
</style>
