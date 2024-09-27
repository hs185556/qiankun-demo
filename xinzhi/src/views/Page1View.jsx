import { defineComponent, ref } from 'vue'
import styles from './Page1View.module.css'

const ContainerWrap = defineComponent({
  props: {
    title: String
  },
  setup(props, { slots }) {
    return () => (
      <div className={[styles.containerWrapper]}>
        <p>{props.title}</p>
        <p>{slots.default?.()}</p>
      </div>
    )
  }
})

export default defineComponent({
  setup() {
    const value = ref('1111')
    const name = 'Gregorio Y. Zara'
    function handleClick() {
      value.value = value.value * 2
    }

    const data = [
      {
        id: 1,
        title: '通用'
      },
      {
        id: 2,
        title: '导航'
      }
    ]

    return () => (
      <div>
        {/* 1 文本插值 */}
        <h1>{name}'s To Do List</h1>
        <h1>value: {value.value}</h1>
        {/* 2. 条件渲染 */}
        {value.value % 3 == 0 && <h1>value能被3整除</h1>}
        <input type="text" v-model={value.value} />
        {/* 3. 列表循环 */}
        {data.map((item) => {
          return <div>{item.title}</div>
        })}
        {/* 4. class绑定 */}
        {/* 5. 行内样式 */}
        <h1 className={styles.red} style={{ fontWeight: 'bold' }}>
          红色
        </h1>
        {/* 6. 事件绑定 */}
        <button onClick={handleClick}>Double</button>
        <br />
        {/* 7. 插槽 */}
        <ContainerWrap title={'ContainerWrap组件'}>
          <h1>默认插槽</h1>
        </ContainerWrap>
      </div>
    )
  }
})
