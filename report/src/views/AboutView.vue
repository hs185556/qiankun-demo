<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="logout">登出</el-button>
  </div>
</template>

<script>
import { logoinOut } from "@/api/upm";
export default {
  name: "AboutView",
  methods: {
    async logout() {
      await logoinOut();
      localStorage.removeItem("main_token");
      window.location.reload();
    },
  },
};
</script>
