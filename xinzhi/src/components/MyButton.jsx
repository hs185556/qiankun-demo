import { defineComponent, ref } from 'vue'
// 9. 组件混用
import MyButtonValue from './MyButtonValue.vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    function add() {
      count.value++
    }
    return () => (
      <div>
        {/* <p>{count.value}</p> */}
        <MyButtonValue value={count.value}></MyButtonValue>
        <button onClick={add}>Add</button>
      </div>
    )
  }
})

// react的体验应该是下面这样的
/* export default function () {
  const count = ref(0)
  function add() {
    count.value++
  }
  return (
    <div>
      <p>{count.value}</p>
      <button onClick={add}>Add</button>
    </div>
  )
} */
