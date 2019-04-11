<template>
  <div id="app">
    <Header></Header>
    <main class="clearfix">
      <!--  此处router-view里的name:main对应Router里的main  -->
      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
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
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
</style>
