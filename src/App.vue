<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <h4>{{val}}</h4>
    <hr />
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      val: null
    };
  },
  async created() {
    const { data } = await axios.get("/api");

    this.val = data.greeting;
    console.log(data);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
