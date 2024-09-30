/* 
dataBus 单例
state
dispatch
forceDispatch
onListener @return offListner
offListner
initData
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

function createFactory(initialData = {}) {
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
}

createFactory()

export function initData(initialData = {}) {
  const data = dataBus.state
  Object.keys(data).forEach(key => {
    delete data[key];
  });
  Object.assign(data, initialData)
}

export default dataBus
