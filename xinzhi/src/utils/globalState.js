import { ref, watch } from 'vue'
function useGlobalState(initData = {}) {
  const globalState = ref(initData)
  const listeners = new Set()

  watch(
    () => globalState.value,
    (newVal) => {
      listeners.forEach((listener) => listener(newVal))
    },
    { deep: true }
  )

  function onGlobalStateChange(callback, initialPush) {
    listeners.add(callback)
    if (initialPush) listeners.forEach((listener) => listener(globalState.value))
    return () => {
      listeners.delete(callback)
    }
  }

  function setGlobalState(newState) {
    Object.assign(globalState.value, newState)
    // listeners.forEach((listener) => listener(globalState.value))
  }

  function offGlobalStateChange() {
    listeners.clear()
  }

  return {
    data: globalState,
    dataListener: onGlobalStateChange,
    setData: setGlobalState,
    offGlobalStateChange
  }
}

export default useGlobalState({ collapse: false })
