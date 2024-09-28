<script setup>
defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h3>{{ value }}</h3>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
}
</style>
