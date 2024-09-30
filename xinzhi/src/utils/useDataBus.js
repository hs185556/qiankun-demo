/* 
useDataBus 单例
state
dispatch
forceDispatch
onListener @return offListner
offListner
 */
import { reactive, watch } from 'vue'
import { tryOnBeforeUnmount } from '@vueuse/core'

let dataBus

function useTasks() {
  const tasks = new Set()

  function _runTasks() {
    tasks.forEach((task) => task())
  }

  function runTask(task) {
    tasks.add(task)
    Promise.resolve().then(() => {
      _runTasks()
      tasks.clear()
    })
  }
  return {
    runTask
  }
}

function createFactory(initialData) {
  const state = reactive(initialData)
  const listeners = new Set()
  const { runTask } = useTasks()

  watch(
    () => state,
    () => {
      runTask(_exe)
    },
    { deep: true }
  )

  function _exe(newVal = state) {
    listeners.forEach((listener) => listener(newVal))
  }

  function dispatch(newState) {
    Object.assign(state, newState)
  }

  function forceDispatch(newState) {
    dispatch(newState)
    runTask(_exe)
  }

  function onListener(callback, initialPush) {
    listeners.add(callback)
    if (initialPush) runTask(_exe)
    const clean = offListner.bind(this, callback)
    tryOnBeforeUnmount(clean)
    return clean
  }

  function offListner(callback) {
    listeners.delete(callback)
  }

  dataBus = {
    state,
    dispatch,
    forceDispatch,
    onListener,
    offListner
  }
  return dataBus
}

export default function useDataBus(initialData = {}) {
  if (!dataBus) {
    return createFactory(initialData)
  }
  return dataBus
}
