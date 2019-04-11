<template>
  <div class="article">

    <div class="isloading" v-if="isLoading">
      <img src="" alt="">
    </div>

    <div v-else>
      <div class="panel">
        <header>
          <span class="topic_title">{{post.title}}</span>
          <ul>
            <li class="create_at">发布于 {{post.create_at | dateFormatter}}</li>
            <li class="loginname">作者 {{post.author.loginname}}</li>
            <li class="visit_count">{{post.visit_count}} 次浏览</li>
            <li class="tab">来自 {{post | tabFormatter}}</li>
          </ul>
        </header>
        <div v-html="post.content" class="topic_content markdown-body"></div>
      </div>

      <div class="replies">
        <div class="reply_header">
          <span class="reply_count">{{post.reply_count}} 回复</span>
        </div>

        <div v-for="(reply, index) in post.replies">
          <div class="author_bar">
            <router-link :to="{
            name: 'user_info',
            params: {
              loginname: reply.author.loginname
            }
            }">
              <img :src="reply.author.avatar_url" alt="">
            </router-link>
            <span class="loginname">{{reply.author.loginname}}</span>
            <span class="index">{{index + 1}} 楼•{{reply.create_at | dateFormatter}}</span>
            <span class="isAuthor" v-if="reply.author.loginname === post.author.loginname">作者</span>
          </div>
          <div class="reply_content">
            <p class="markdown-body" v-html="reply.content"></p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "Article",
    data: function () {
      return {
        isLoading: false,
        post: {}, //当前文章页面的所有内容
      }
    },
    methods: {
      getArticleData() {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res => {
            // console.log(res)
            if (res.data.success === true) {
              this.isLoading = false
              this.post = res.data.data
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    watch: {
      '$route'(to, from) {
        this.getArticleData()
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getArticleData()
    }
  }
</script>

<style>
  @import url('../assets/github-markdown.css');

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 15px;
  }

  /*.markdown-body:after {*/
  /*  display: none;*/
  /*}*/

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }

  ul li {
    list-style: none;
  }

  .article {
    margin-right: 20px;
  }

  .article .panel header {
    padding: 10px;
    background-color: #fff;
    border-radius: 3px 3px 0 0;
  }

  .article .panel header .topic_title {
    display: inline-block;
    margin: 8px 0;
    font-size: 22px;
    font-weight: 700;
  }

  .article .panel header ul {
    margin: 0;
    padding: 0;
  }

  .article .panel header ul li {
    display: inline-block;
    font-size: 12px;
    line-height: 20px;
    color: #838383;
  }

  .article .panel header ul li:before {
    content: '• ';
  }

  .article .panel .topic_content {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
  }

  .article .replies .reply_header {
    margin-top: 10px;
    background-color: #f6f6f6;
  }

  .article .replies .reply_header .reply_count {
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    color: #444;
  }

  .article .replies {
    background-color: #fff;
  }

  .article .replies .author_bar {
    padding: 10px;
    border-top: 1px solid #f0f0f0;
  }

  .article .replies .author_bar img {
    width: 30px;
    height: 30px;
  }

  .article .replies .author_bar .loginname {
    margin-left: 10px;
    vertical-align: top;
    font-size: 12px;
    font-weight: 700;
    color: #666;
  }

  .article .replies .author_bar .loginname:hover {
    color: #08c;
  }

  .article .replies .author_bar .index {
    vertical-align: top;
    font-size: 11px;
    color: #08c;
  }

  .article .replies .author_bar .index:hover {
    text-decoration: underline;
  }

  .article .replies .author_bar .isAuthor {
    padding: 2px;
    vertical-align: top;
    font-size: 12px;
    color: #fff;
    background-color: #6ba44e;
  }

  .article .replies .reply_content {
    margin-top: -36px;
    /*margin-bottom: 15px;*/
    padding-left: 45px;
    padding-right: 10px;
    /*padding-bottom: 10px;*/
    vertical-align: top;
  }


</style>
