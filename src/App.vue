<template>
  <div id="app">
    <Header></Header>
    <main>
<!--      此处router-view里的name:main对应Router里的main-->
      <router-view name="main"></router-view>
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
    margin: 15px auto;
    width: 80%;
  }

  a {
    text-decoration: none;
  }
</style>
