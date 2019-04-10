<template>
  <div class="user_info">
    <div v-if="isLoading"></div>

    <section class="content">

      <div class="panel">
        <div class="header">
          <a href="">主页</a>
          <span>/</span>
        </div>

        <div class="inner_info">
          <img :src="info.avatar_url" alt="">
          <span>{{info.loginname}} 积分{{info.score}}</span>
          <span>话题收藏（暂缺）</span>
          <span>svg</span>
          <span>svg @{{info.githubUsername}}</span>
          <span>注册时间 {{info.create_at | dateFormatter}}</span>
        </div>
      </div>


      <ul class="panel">
        <li class="header">最近创建的话题</li>
        <li v-for="item in info.recent_topics" class="content">
          <router-link :to="{
            name: 'user_info',
            params: {
              loginname: item.author.loginname
            }
          }">
            <img :src="item.author.avatar_url" alt="">
          </router-link>

          <router-link :to="{
            name: 'post_content',
            params: {
              id: item.id,
              author: item.author.loginname
            }
          }">
            <span>{{item.title}}</span>
          </router-link>
          <div class="date">{{item.last_reply_at | dateFormatter}}</div>

        </li>
      </ul>

      <ul class="panel">
        <li class="header">最近参与的话题</li>
        <li v-for="item in info.recent_replies" class="content">

          <router-link :to="{
            name: 'user_info',
            params: {
              loginname: item.author.loginname
            }
          }">
            <img :src="item.author.avatar_url" alt="">
          </router-link>

          <router-link :to="{
            name: 'post_content',
            params: {
              id: item.id,
              author: item.author.loginname
            }
          }">
            <span>{{item.title}}</span>
          </router-link>
          <div class="date">{{item.last_reply_at | dateFormatter}}</div>
        </li>
      </ul>


    </section>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isLoading: true,
        info: {}
      }
    },
    methods: {
      getUserData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`)
          .then(res => {
            // console.log(res);
            if (res.data.success === true) {
              this.isLoading = false;
              this.info = res.data.data;
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    watch: {
      $route(){
        this.getUserData()
      }
    },
    beforeMount() {
      this.isLoading = true;
      this.getUserData()
    }
  }
</script>

<style scoped>
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .user_info img {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    vertical-align: middle;
  }

  .user_info .panel {
    margin-bottom: 13px;
  }

  .user_info .header {
    padding: 10px;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    background-color: #f6f6f6;
  }

  .user_info .header a {
    color: #80bd01;
  }

  .user_info .header a:hover {
    text-decoration: underline;
  }

  .user_info .inner_info {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
  }

  .user_info ul li {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
  }

  .user_info ul li img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
  }

  .user_info .panel .content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  .user_info .panel li span {
    color: #08c;
  }

  .user_info .panel li span:hover {
    text-decoration: underline;
    color: #032f62;
  }

  .user_info .panel .date {
    margin-left: auto;
    font-size: .8em;
    color: #777;
  }

</style>
