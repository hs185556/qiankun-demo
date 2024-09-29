<template>
  <main class="micro-app-container"></main>
</template>

<script setup>
import { onMounted } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import router from '@/router'

onMounted(() => {
  if (window.registedMicroApps) return
  window.registedMicroApps = true
  registerMicroApps([
    {
      name: 'report',
      entry: 'http://localhost:8080',
      container: '.micro-app-container',
      activeRule: '/child/report',
      props: {
        baseRoute: '/child/report',
        baseRouter: router
        // 路由
        // eventBus
      }
    }
    // {
    //   name: 'react',
    //   entry: '//localhost:8081',
    //   container: '#micro-app',
    //   activeRule: '/react'
    // }
  ])
  start({
    sandbox: {
      experimentalStyleIsolation: true
    }
  })
})
</script>
