<template>
  <div id="app">
    <div class="body">
      <div class="content-wrapper">
        <img alt="Vue logo" src="./assets/logo.png">
        <h2 class="title">Is Vue3 released yet?</h2>
        <h2 class="subtitle">No, not yet!</h2>
        <h3 class="content">Around March 🤞</h3>
      </div>
    </div>
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
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .body {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
    align-items: center;
    display: flex;
    .content-wrapper {
      text-align: center;
      flex-grow: 1;
      flex-shrink: 1;
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
  }
}
</style>
