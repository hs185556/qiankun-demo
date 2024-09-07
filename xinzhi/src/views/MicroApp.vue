<template>
  <main class="micro-app-container"></main>
</template>

<script setup>
import { onMounted } from 'vue'
import { registerMicroApps, start } from 'qiankun'

onMounted(() => {
  if (window.registedMicroApps) return
  window.registedMicroApps = true
  registerMicroApps([
    {
      name: 'report',
      entry: 'http://localhost:8080/report/',
      container: '.micro-app-container',
      activeRule: '/child/report'
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
