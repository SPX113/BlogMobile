<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>

  import NavBar from "./components/content/navbar/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
  #app{
    background-color: rgb(237,236,236);
  }

</style>
