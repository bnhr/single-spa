<template>
  <div id="app" class="card col">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hellow from Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.col {
  flex-direction: column;
  border-color: #42b983;
}
</style>
