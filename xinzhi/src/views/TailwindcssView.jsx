import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const name = 'Gregorio Y. Zara'

    return () => (
      <div>
        <h1 className="text-3xl font-bold underline">{name}</h1>
      </div>
    )
  }
})
