<template>
  <div class="layout-wrap">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="state.collapse"
    >
      <el-menu-item index="">
        <img style="width: 50px" src="@/assets/logo.svg" alt="Element logo" />
      </el-menu-item>
      <el-menu-item index="/">home</el-menu-item>
      <el-menu-item index="/about1">about1</el-menu-item>
      <el-menu-item index="/page1">page1</el-menu-item>
      <el-menu-item index="/child/report">report</el-menu-item>
    </el-menu>
    <div class="main-content">
      state.collapse: {{ state.collapse }}
      <el-radio-group
        v-model="state.collapse"
        style="margin-bottom: 20px"
        @change="handleSwichChange"
      >
        <el-radio-button :value="false">expand</el-radio-button>
        <el-radio-button :value="true">collapse</el-radio-button>
      </el-radio-group>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import useDataBus from '@/utils/useDataBus'
import eventBus from '@/utils/eventBus'

const { state } = useDataBus()
const activeIndex = ref('1')
const route = useRoute()

watch(
  () => route.path,
  (newVal) => {
    activeIndex.value = newVal
  },
  { immediate: true }
)

function handleSwichChange() {
  eventBus.emit('collapseSwichChanged', state.collapse)
}
</script>

<style scoped lang="scss">
.layout-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.el-menu-demo {
  width: 200px;
  height: 100vh;
}
.main-content {
  padding: 20px;
  height: 100vh;
  width: calc(100vw - 200px);
  overflow: auto;
  float: right;
  box-sizing: border-box;
}
</style>
