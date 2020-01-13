<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 class="title">Is Vue3 released yet?</h2>
    <h2 class="subtitle">No, not yet!</h2>
    <h3 class="content">Due March</h3>
    <footer>
      <p>Please make this better and <a href="https://github.com/carwack/is-vue3-released-yet">fork it</a>.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: crimson; 
  height: 100vh;
  width: 100vw;

  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 3rem;
    margin: 0;
  }
  .content {
    margin: 0;
  }
}
</style>
