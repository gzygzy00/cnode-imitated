<template>
  <div class="slide_bar">
    <div v-if="isLoading"></div>
    <div>

      <div class="author panel">
        <div class="header">作者</div>
        <div class="bg">
          <router-link :to="{
            name: 'user_info',
            params: {
              loginname: slideInfo.loginname
            }
          }">
            <div class="userinfo">
              <img :src="slideInfo.avatar_url" alt="">
              <span>{{slideInfo.loginname}}</span>
            </div>
          </router-link>
          <span class="score">积分：{{slideInfo.score}}</span>
        </div>

      </div>

      <div class="topic panel">
        <div class="header">作者最近主题</div>
        <div class="bg">
          <ul>
            <li v-for="item in topiclimitby5">
              <router-link :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                  author: item.author.loginname
                }
              }">
                {{item.title}}
              </router-link>
            </li>

          </ul>
        </div>
      </div>

      <div class="reply panel">
        <div class="header">作者最近回复</div>
        <div class="bg">
          <ul>
            <li v-for="item in replylimitby5">
              <router-link :to="{
                name: 'post_content',
                params: {
                  id: item.id,
                  author: item.author.loginname
                }
              }">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideBar",
    data() {
      return {
        isLoading: true,
        slideInfo: {}
      }
    },
    methods: {
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.author}`)
          .then(res => {
            // console.log(res)
            if (res.data.success === true) {
              this.isLoading = false
              this.slideInfo = res.data.data
            }
          })
      }
    },
    computed: {
      topiclimitby5(){
        if(this.slideInfo.recent_topics){
          return this.slideInfo.recent_topics.slice(0,5)
        }
      },
      replylimitby5(){
        if(this.slideInfo.recent_replies){
          return this.slideInfo.recent_replies.slice(0,5)
        }
      }
    },
    watch: {
      '$route'(to, from) {
        this.getData()
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getData()
    }

  }
</script>

<style scoped>
  .slide_bar {
    /*float: right;*/
    margin-left: 20px;
    width: 25vw;
    min-width: 290px;
  }

  .slide_bar .panel {
    margin-bottom: 13px;
  }

  .slide_bar .bg {
    background-color: #fff;
  }

  .slide_bar .header {
    padding: 10px;
    margin-bottom: 1px;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    background-color: #f6f6f6;
  }

  .slide_bar .userinfo {
    display: flex;
    align-items: center;
  }

  .slide_bar .userinfo img {
    width: 48px;
    height: 48px;
    padding: 10px;
    border-radius: 3px;
  }

  .slide_bar .userinfo span {
    font-size: 16px;
    color: #778087;
  }

  .slide_bar .score {
    display: inline-block;
    padding: 0 0 10px 10px;
    font-size: 14px;
    line-height: 2em;
    color: #333;
  }

  .slide_bar ul {
    /*本来应该放在reset css里*/
    margin: 0;
    padding: 10px;
  }

  .slide_bar ul li {
    max-width: 270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 2em;
    color: #778087;
  }

  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }

</style>
