<template>
  <div>
    <header>
      <router-link :to="{
        name: 'root'
      }">
        <img src="../assets/cnodejs_light.svg" alt="">
      </router-link>
      <ul>
        <li>
          <router-link :to="{name: 'root'}">
            <a href="#">首页</a>
          </router-link>
        </li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  /** {*/
  /*  box-sizing: border-box;*/
  /*}*/

  div {
    background-color: #444444;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 80%;
  }

  ul {
    list-style: none;
    display: inline-flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }

  a {
    text-decoration: none;
    text-shadow: none;
    padding: 10px 15px;
    color: #ccc;
    font-size: 14px;
  }

  a:hover {
    color: #fff;
  }

  img {
    width: 120px;
  }
</style>
