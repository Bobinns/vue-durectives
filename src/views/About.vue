<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div v-hook-demo>{{ count }}</div>
    <button @click="++count;">Update</button>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      count: 0
    };
  }
};
</script>
<style>
button {
  padding: 10px 17px;
  margin-top: 10px;
  background: green;
  color: white;
  font-size: 18px;
}
</style>
