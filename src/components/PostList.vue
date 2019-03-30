<template>
  <div>
    <div class="loading"></div>
    <div class="posts">
      <ul>
        <li>
          <div>
            <span class="active">全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
            <span>客户端测试</span>
          </div>
        </li>
        <li v-for="post in posts">
          <img :src="post.author.avatar_url" alt="">
          <span class="count">
            <span class="reply_count">{{post.reply_count}}</span>/<span class="visit_count">{{post.visit_count}}</span>
          </span>
          <span :class="[{post_good: (post.good === true), post_top: (post.top === true),
          post_tab: (post.good !== true && post.top !== true)}]">
            <span>{{post | tabFormatter}}</span>
          </span>
          <span class="title">{{post.title}}</span>
          <span class="last_reply_at clearfix">{{post.last_reply_at | dateFormatter}}</span>
        </li>
        <li>分页占位</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "PostList",
    data: function () {
      return {
        posts: [],
        post_good: ''
      }
    },
    methods: {
      getData() {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          page: 1,
          limit: 10
        })
          .then(res => {
            console.log(res);
            this.posts = res.data.data
            console.log(new Date(this.posts[0].last_reply_at));
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    beforeMount() {
      this.getData()
    }
  }


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
</script>

<style scoped>
  .posts ul {
    list-style: none;
    padding-inline-start: 0;
    width: 100%;
    border: 1px solid #f0f0f0;
  }

  .posts ul li:first-child div{
    display: flex;
    padding: 5px 10px;
    background-color: #f6f6f6;
  }

  .posts ul li:first-child span {
    border: 1px solid black;
    margin: 0 10px;
    padding: 3px 4px;
    border-radius: 3px;
    color: #80bd01;
    font-size: 14px;
    line-height: normal;
  }

  .posts ul li:first-child span.active {
    color: #fff;
    background-color: #80bd01;
  }

  .posts ul li:not(:first-child) {
    border-top: 1px solid #f0f0f0;
    padding: 10px;
  }

  .posts ul li:last-child {
    border-top: 1px solid transparent;
  }

  .posts ul li img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .posts ul li .count {
    display: inline-block;
    width: 70px;
    text-align: center;
    font-size: 14px;
    color: #b4b4b4;
  }

  .count .reply_count {
    color: #9e78c0;
  }

  .post_good, .post_top, .post_tab {
    padding: 2px 4px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #80bd01;
  }

  .post_tab {
    color: #999;
    background-color: #e5e5e5;
  }

  li span {
    line-height: 30px;
  }

  .title {
    display: inline-block;
    max-width: 70%;
    font-size: 16px;
    vertical-align: middle;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .last_reply_at {
    display: inline-block;
    float: right;
    min-width: 50px;
    text-align: right;
    font-size: 11px;
    color: #777;
  }

  .clearfix:after {
    display: block;
    content: '';
    clear: both;
  }

</style>
