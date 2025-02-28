import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const name = 'Gregorio Y. Zara'

    return () => (
      <div>
        <h1 class="text-3xl font-bold underline">{name}</h1>
        <el-button type="primary" class="bg-sky-500 hover:bg-red-200">
          登出
        </el-button>
      </div>
    )
  }
})
