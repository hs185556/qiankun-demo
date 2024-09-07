<template>
  <div class="layout-wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="">
        <img style="width: 50px" src="@/assets/logo.svg" alt="Element logo" />
      </el-menu-item>
      <el-menu-item index="/">home</el-menu-item>
      <el-menu-item index="/about">about</el-menu-item>
      <el-menu-item index="/child/report">report</el-menu-item>
    </el-menu>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const activeIndex = ref('1')
const route = useRoute()

watch(
  () => route.path,
  (newVal) => {
    activeIndex.value = newVal
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.layout-wrap {
  width: 100%;
  height: 100%;
}
.main-content {
  padding: 20px;
  height: calc(100vh - 60px);
  width: 100%;
  overflow: auto;
}
</style>
