<template>
  <div class="home">
    <button @click="toggle">Toggle</button><br />
    collapse: {{ collapse }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

// const collapse = window.$dataBus?.state?.collapse
// setInterval(() => {
//   console.log(">>>", collapse);
// }, 2000);

const { state, forceDispatch, onListener } = window.$dataBus || {};

onMounted(() => {
  if (!window.$dataBus) return;
  onListener((val) => console.log("val changed:", val));
});

function toggle() {
  if (!window.$dataBus) return;
  forceDispatch({ collapse: !state.collapse });
}
</script>
