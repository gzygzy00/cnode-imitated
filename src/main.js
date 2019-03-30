// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.filter('tabFormatter', function (post) {
  if (post.good === true) {
    return '精华'
  } else if (post.top === true) {
    return '置顶'
  } else if (post.tab === 'share') {
    return '分享'
  } else if (post.tab === 'ask') {
    return '问答'
  } else {
    return '招聘'
  }
})

Vue.filter('dateFormatter', function (str) {
  if (!str) return ''
  let date = new Date(str).getTime()
  let now = new Date().getTime()
  let time = (now - date) / 1000
  if (time < 0) {
    return ''
  } else if (time < 30) {
    return '刚刚'
  } else if (time < 60) {
    return Math.round(time) + '秒前'
  } else if ((time / 60) < 60) {
    return Math.round(time / 60) + '分钟前'
  } else if ((time / (60 * 60)) < 24) {
    return Math.round(time / (60 * 60)) + '小时前'
  } else if ((time / (60 * 60 * 24)) < 31) {
    return Math.round(time / (60 * 60 * 24)) + '天前'
  } else if ((time / (60 * 60 * 24)) < 365) {
    return Math.round(time / (60 * 60 * 24 * 31)) + '月前'
  } else {
    return Math.round(time / (60 * 60 * 24 * 365)) + '年前'
  }
})
