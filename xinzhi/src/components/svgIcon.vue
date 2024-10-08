<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: () => ''
  }
})

const iconName = computed(() => {
  console.log(`#icon-${props.name}`)
  return `#icon-${props.name}`
})
const svgClass = computed(() => {
  return props.className ? 'svg-icon ' + props.className : 'svg-icon'
})
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
}
</style>
