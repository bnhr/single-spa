<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <p>counter:</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
  margin-bottom: 1.2rem;
}
label {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
input {
  border: 2px solid #42b983;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
</style>
