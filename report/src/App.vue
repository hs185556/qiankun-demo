<template>
  <nav>
    <router-link :to="microAppBaseRoute + '/login'">Login</router-link> |
    <router-link :to="microAppBaseRoute + '/home'">Home</router-link> |
    <router-link :to="microAppBaseRoute + '/about'">About</router-link>
  </nav>
  <router-view />
</template>

<script setup>
const microAppBaseRoute = window.__MICRO_APP_BASE_ROUTE__
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
