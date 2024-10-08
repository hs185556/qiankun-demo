<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import svgIcon from '../components/svgIcon.vue'
</script>

<template>
  <main>
    <img src="@/assets/svg/cancel.svg" class="svg-icon" />
    <svg-icon name="cancel"/>
    <TheWelcome />
  </main>
</template>

<style lang="scss">
.svg-icon {
  color: red;
}
</style>
