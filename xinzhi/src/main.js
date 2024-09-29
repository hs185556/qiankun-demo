import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// const push = router.push
// router.push = function (...args) {
//   console.log('>>>', args)
//   return push.apply(this, arguments)
// }
// router.beforeEach(async (to, _, next) => {
//   console.log('>>>to:', to.fullPath)
//   next()
// })
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')

// // 监听历史记录的变化
// window.addEventListener('popstate', (event) => {
//   console.log('>>>popstate:', event.singleSpaTrigger, event.state)
// })
