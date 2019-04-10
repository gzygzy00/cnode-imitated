<template>
  <div>
    <div class="loading" v-if="isLoading">
    </div>

    <div class="posts" v-else>
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
          <router-link :to="{
            name: 'user_info',
            params: {
              loginname: post.author.loginname
             }
          }">
            <img :src="post.author.avatar_url" alt="">
          </router-link>
          <span class="count">
            <span class="reply_count">{{post.reply_count}}</span>/<span class="visit_count">{{post.visit_count}}</span>
          </span>
          <span :class="[{post_good: (post.good === true), post_top: (post.top === true),
          post_tab: (post.good !== true && post.top !== true)}]">
            <span>{{post | tabFormatter}}</span>
          </span>

          <router-link :to="{
          name: 'post_content',
          params: {
            id: post.id,
            author: post.author.loginname
            }
          }">
            <span class="title">{{post.title}}</span>
          </router-link>

          <span class="last_reply_at clearfix">{{post.last_reply_at | dateFormatter}}</span>
        </li>
        <!--分页-->
        <li>
          <Pagination @handleList="renderList"></Pagination>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Pagination from './Pagination'

  export default {
    name: "PostList",
    data: function () {
      return {
        isLoading: true,
        posts: [],
        postPage: 1
      }
    },
    methods: {
      getData() {
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          params: {
            page: this.postPage,
            limit: 20
          }
        })
          .then(res => {
            console.log(res);
            if (res.data.success === true) {
              this.isLoading = false;
              this.posts = res.data.data;
              console.log(new Date(this.posts[0].last_reply_at));
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      renderList(value) {
        this.postPage = value;
        this.getData()
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getData()
    },
    components: {
      Pagination
    }
  }

</script>

<style scoped>

  .posts ul {
    list-style: none;
    padding-inline-start: 0;
    width: 100%;
    border: 1px solid #f0f0f0;
    background-color: #fff;
  }

  .posts ul li:first-child div {
    display: flex;
    padding: 5px 10px;
    background-color: #f6f6f6;
  }

  .posts ul li:first-child span {
    /*border: 1px solid black;*/
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

  .posts ul li:not(:first-child):not(:last-child):hover {
    background-color: #f6f6f6;
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

  .posts ul li .title:hover {
    text-decoration: underline;
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
    content: '';
    display: block;
    clear: both;
  }

</style>
