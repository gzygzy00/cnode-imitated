import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'

import GoodList from '../components/GoodList'
import ShareList from '../components/ShareList'
import AskList from '../components/AskList'
import JobList from '../components/JobList'

import About from '../components/About'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/topic/id=:id&author=:author',
      name: 'post_content',
      components: {
        main: Article,
        slidebar: SlideBar
      }
    },
    {
      path: '/user/:loginname',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    },
    {
      path: '/topic/tab=:tab',
      name: 'good_list',
      components: {
        main: GoodList
      }
    },
    {
      path: '/topic/tab=:tab',
      name: 'share_list',
      components: {
        main: ShareList
      }
    },
    {
      path: '/topic/tab=:tab',
      name: 'ask_list',
      components: {
        main: AskList
      }
    },
    {
      path: '/topic/tab=:tab',
      name: 'job_list',
      components: {
        main: JobList
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        main: About
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
