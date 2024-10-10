<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import svgIcon from '../components/svgIcon.vue'
</script>

<template>
  <main>
    <p class="text-purple-700 text-opacity-100">The quick brown fox</p>
    <img src="@/assets/svg/cancel.svg" class="svg-icon" />
    <svg-icon name="cancel" />
    <TheWelcome />
  </main>
</template>

<style lang="scss">
.svg-icon {
  color: red;
}
</style>
