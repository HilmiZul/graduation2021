<template>
  <div id="app">
    <Nav />
    <div class="container py-4">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
