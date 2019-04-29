<template>
  <div id="about">
    <h1>仿CNode</h1>
    <h3>官网链接: <a href="https://cnodejs.org/">cnodejs.org</a></h3>
    <p>技术栈：Vue, Vue CLI, Vue Router</p>
    <p>利用官网提供的 API，对网站进行仿写练习 <a href="https://github.com/gzygzy00/cnode-imitated">详情</a></p>
    <p>通过 Vue CLI 搭建，使用 Axios 获取数据，Vue Router 实现路由的跳转，并利用 watch 监听路由；</p>
    <p>运用到了 Vue 的内置指令和事件绑定等功能，诸如 v-bind, v-if 等等；使用计算属性限制显示条目，过滤器 filter 过滤日期和分类，
      分页功能的实现，父子组件传递数据</p>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>

</style>
