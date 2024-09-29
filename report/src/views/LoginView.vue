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
import { upmLogin } from "@/api/upm.js";
import { ElMessage } from "element-plus";
import { setEncrypt } from "@/utils";

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
    async handleSubmit() {
      if (!this.form.username) {
        return ElMessage.error("请输入登录账号");
      }
      if (!this.form.password) {
        return ElMessage.error("请输入登录密码");
      }

      const res = await upmLogin({
        username: this.form.username,
        password: setEncrypt(this.form.password),
      });
      if (res.code === "0") {
        ElMessage.success("登录成功");
        localStorage.setItem('main_token', res.data)
        // await userStore.loginSuccess(res.data);
        this.$router.push(window.__MICRO_APP_BASE_ROUTE__ + "/");
      } else {
        ElMessage.error(res.message || "登录失败");
      }
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
