<template>
  <div id="counter-app">
    <h1>{{ message }}</h1>
    <p>当前计数: {{ count }}</p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="logChildMessage">Log Child Message</button>
    <button @click="emitFn">Emit</button>
    <HelloWorld msg="Welcome to Your Vue.js App" ref="child" />
  </div>
</template>

<script>
// import { configureCompat } from "vue";
// configureCompat({ MODE: 2 });
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: "欢迎使用 Vue.js!",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    logChildMessage() {
      // 访问子组件实例
      console.log("Child message:", this.$children[0].message);
    },
    emitFn() {
      console.log("emit", this.$emit);
    },
  },
  created() {
    console.log("组件已创建");
  },
  mounted() {
    console.log("组件已挂载");
  },
  beforeDestroy() {
    console.log("组件即将被销毁");
  },
  destroyed() {
    console.log("组件已被销毁");
  },
};
</script>

<style scoped>
#counter-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin: 10px;
}
</style>
