<template>
  <div class="pagination">
    <button @click="changeBtn">首页</button>
    <button @click="changeBtn">上一页</button>
    <button v-if="judge" class="ellipsis">...</button>
    <button v-for="btn in pageBtns"
            :class="{currentPage: btn === currentPage}"
            @click="changeBtn(btn)">
      {{btn}}
    </button>
    <button class="ellipsis">...</button>
    <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "Pagination",
    data() {
      return {
        pageBtns: [1, 2, 3, 4, 5],
        currentPage: 1,
        judge: false
      }
    },
    methods: {
      changeBtn(page) {
        //上一页，下一页，首页
        if (typeof page !== 'number') {
          switch (page.target.innerText) {
            case '上一页':
              $('button.currentPage').prev().click()
              break;
            case '下一页':
              $('button.currentPage').next().click()
              break;
            case '首页':
              this.pageBtns = [1, 2, 3, 4, 5]
              this.currentPage = 1
              this.$emit('handleList', this.currentPage)
              break;
            default:
              break;
          }
          return
        }
        //省略号
        if (page > 4) {
          this.judge = true
        } else if(page < 3){
          this.judge = false
        }
        //数字
        this.currentPage = page;
        if (this.currentPage === this.pageBtns[4]) {
          this.pageBtns.shift()
          this.pageBtns.splice(4, 0, this.pageBtns[3] + 1)
        } else if (this.currentPage === this.pageBtns[0] && this.currentPage !== 1) {
          this.pageBtns.splice(4, 1)
          this.pageBtns.unshift(this.pageBtns[0] - 1)
        }
        //触发
        this.$emit('handleList', this.currentPage)
      }
    }
  }
</script>

<style scoped>
  .pagination {
    display: flex;
  }

  button {
    border: 1px solid #ddd;
    border-radius: 2px;
    width: 50px;
    height: 35px;
    padding: 5px 10px;
    margin-right: 5px;
    line-height: 20px;
    color: #778087;
    background-color: #fff;
  }

  button:nth-child(2), button:last-child {
    width: 65px;
  }

  button:hover {
    background-color: #80bd01;
    cursor: pointer;
  }

  .currentPage {
    color: #fff;
    background-color: #80bd01;
  }

  .ellipsis:hover {
    cursor: default;
    background-color: #fff;
  }
</style>
