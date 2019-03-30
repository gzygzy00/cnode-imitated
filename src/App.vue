<template>
  <div id="app">
    <Header></Header>
    <main>
      <PostList></PostList>
    </main>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'

  export default {
    name: 'App',
    components: {
      Header, PostList
    }
  }
</script>

<style>
  /*#app {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  -webkit-font-smoothing: antialiased;*/
  /*  -moz-osx-font-smoothing: grayscale;*/
  /*  text-align: center;*/
  /*  color: #2c3e50;*/
  /*  margin-top: 60px;*/
  /*}*/
  main {
    margin: 0 auto;
    width: 80%;
  }
</style>
