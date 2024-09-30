<template>
  <main class="micro-app-container"></main>
</template>

<script setup>
import { onMounted } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import router from '@/router'
import useDataBus from '@/utils/useDataBus'
import eventBus from '@/utils/eventBus'

const dataBus = useDataBus()

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
        baseRouter: router,
        dataBus,
        eventBus
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
