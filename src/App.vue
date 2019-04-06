<template>
  <div id="app">
    <app-navigation v-sticky></app-navigation>
    <!-- <app-navigation v-sticky:top></app-navigation> -->
    <router-view />
    <app-navigation v-sticky:bottom></app-navigation>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppNavigation from "./components/AppNavigation";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppNavigation
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  line-height: 60px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
