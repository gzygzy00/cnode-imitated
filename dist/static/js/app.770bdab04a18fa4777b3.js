webpackJsonp([1],{"+HZm":function(t,s){},"89WA":function(t,s){},"9Rff":function(t,s){},A3Iz:function(t,s){},AzRC:function(t,s){},CNql:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("header",[s("router-link",{attrs:{to:{name:"root"}}},[s("img",{attrs:{src:a("RPu/"),alt:""}})]),this._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:{name:"root"}}},[s("a",{attrs:{href:"#"}},[this._v("首页")])])],1),this._v(" "),s("li",[s("router-link",{attrs:{to:{name:"about"}}},[s("a",{attrs:{href:"#"}},[this._v("关于")])])],1)])],1)])},staticRenderFns:[]};var e=a("VU/8")({name:"Header"},n,!1,function(t){a("WdKW")},"data-v-122d4ac1",null).exports,o=a("7t+N"),M=a.n(o),r={name:"Pagination",data:function(){return{pageBtns:[1,2,3,4,5],currentPage:1,judge:!1}},methods:{changeBtn:function(t){if("number"==typeof t)t>4?this.judge=!0:t<3&&(this.judge=!1),this.currentPage=t,this.currentPage===this.pageBtns[4]?(this.pageBtns.shift(),this.pageBtns.splice(4,0,this.pageBtns[3]+1)):this.currentPage===this.pageBtns[0]&&1!==this.currentPage&&(this.pageBtns.splice(4,1),this.pageBtns.unshift(this.pageBtns[0]-1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":M()("button.currentPage").prev().click();break;case"下一页":M()("button.currentPage").next().click();break;case"首页":this.pageBtns=[1,2,3,4,5],this.currentPage=1,this.$emit("handleList",this.currentPage)}}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pagination"},[a("button",{on:{click:t.changeBtn}},[t._v("首页")]),t._v(" "),a("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t._v(" "),t.judge?a("button",{staticClass:"ellipsis"},[t._v("...")]):t._e(),t._v(" "),t._l(t.pageBtns,function(s){return a("button",{class:{currentPage:s===t.currentPage},on:{click:function(a){return t.changeBtn(s)}}},[t._v("\n    "+t._s(s)+"\n  ")])}),t._v(" "),a("button",{staticClass:"ellipsis"},[t._v("...")]),t._v(" "),a("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},staticRenderFns:[]};var c=a("VU/8")(r,u,!1,function(t){a("A3Iz")},"data-v-eb7bbc46",null).exports,l={name:"PostList",data:function(){return{isLoading:!0,posts:[],postPage:1}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postPage,limit:20}}).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.posts=s.data.data)}).catch(function(t){console.log(t)})},renderList:function(t){this.postPage=t,this.getData(),this.backTop()},backTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},mounted:function(){this.isLoading=!0,this.getData()},components:{Pagination:c}},L={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div",{staticClass:"loading"}):a("div",{staticClass:"posts"},[a("ul",[a("li",[a("div",[a("span",{staticClass:"active"},[t._v("全部")]),t._v(" "),a("router-link",{attrs:{to:{name:"good_list",params:{tab:"good"}}}},[a("span",[t._v("精华")])]),t._v(" "),a("router-link",{attrs:{to:{name:"share_list",params:{tab:"share"}}}},[a("span",[t._v("分享")])]),t._v(" "),a("router-link",{attrs:{to:{name:"ask_list",params:{tab:"ask"}}}},[a("span",[t._v("问答")])]),t._v(" "),a("router-link",{attrs:{to:{name:"job_list",params:{tab:"job"}}}},[a("span",[t._v("招聘")])])],1)]),t._v(" "),t._l(t.posts,function(s){return a("li",{staticClass:"clearfix"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("span",{staticClass:"count"},[a("span",{staticClass:"reply_count"},[t._v(t._s(s.reply_count))]),t._v("/"),a("span",{staticClass:"visit_count"},[t._v(t._s(s.visit_count))])]),t._v(" "),a("span",{class:[{post_good:!0===s.good,post_top:!0===s.top,post_tab:!0!==s.good&&!0!==s.top}]},[a("span",[t._v(t._s(t._f("tabFormatter")(s)))])]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"last_reply_at"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)}),t._v(" "),a("li",[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},staticRenderFns:[]};var _=a("VU/8")(l,L,!1,function(t){a("e6xA")},"data-v-0550bd1f",null).exports,p={name:"App",components:{Header:e,PostList:_}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),this._v(" "),s("main",[s("router-view",{attrs:{name:"main"}}),this._v(" "),s("router-view",{attrs:{name:"slidebar"}})],1)],1)},staticRenderFns:[]};var C=a("VU/8")(p,j,!1,function(t){a("h2Zp")},null,null).exports,g=a("/ocq"),N={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id).then(function(s){console.log(s),!0===s.data.success&&(t.isLoading=!1,t.post=s.data.data)}).catch(function(t){console.log(t)})}},watch:{$route:function(t,s){this.getArticleData()}},beforeMount:function(){this.isLoading=!0,this.getArticleData()}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"article"},[t.isLoading?a("div",{staticClass:"isloading"},[a("img",{attrs:{src:"",alt:""}})]):a("div",[a("div",{staticClass:"panel"},[a("header",[a("span",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),t._v(" "),a("ul",[a("li",{staticClass:"create_at"},[t._v("发布于 "+t._s(t._f("dateFormatter")(t.post.create_at)))]),t._v(" "),a("li",{staticClass:"loginname"},[t._v("作者 "+t._s(t.post.author.loginname))]),t._v(" "),a("li",{staticClass:"visit_count"},[t._v(t._s(t.post.visit_count)+" 次浏览")]),t._v(" "),a("li",{staticClass:"tab"},[t._v("来自 "+t._s(t._f("tabFormatter")(t.post)))])])]),t._v(" "),a("div",{staticClass:"topic_content markdown-body",domProps:{innerHTML:t._s(t.post.content)}})]),t._v(" "),a("div",{staticClass:"replies"},[a("div",{staticClass:"reply_header"},[a("span",{staticClass:"reply_count"},[t._v(t._s(t.post.reply_count)+" 回复")])]),t._v(" "),t._l(t.post.replies,function(s,i){return a("div",[a("div",{staticClass:"author_bar clearfix"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("span",{staticClass:"loginname"},[t._v(t._s(s.author.loginname))]),t._v(" "),a("span",{staticClass:"index"},[t._v(t._s(i+1)+" 楼 • "+t._s(t._f("dateFormatter")(s.create_at)))]),t._v(" "),0!==s.ups.length?a("span",{staticClass:"thumbs"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-thumb"}})]),t._v("\n            "+t._s(s.ups.length+1)+"\n          ")]):t._e(),t._v(" "),s.author.loginname===t.post.author.loginname?a("span",{staticClass:"isAuthor"},[t._v("作者")]):t._e()],1),t._v(" "),a("div",{staticClass:"reply_content"},[a("p",{staticClass:"markdown-body",domProps:{innerHTML:t._s(s.content)}})])])})],2)])])},staticRenderFns:[]};var v=a("VU/8")(N,d,!1,function(t){a("AzRC")},null,null).exports,D={name:"UserInfo",data:function(){return{isLoading:!0,info:{}}},methods:{getUserData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/"+this.$route.params.loginname).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.info=s.data.data)}).catch(function(t){console.log(t)})}},watch:{$route:function(){this.getUserData()}},mounted:function(){this.isLoading=!0,this.getUserData()}},m={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user_info"},[t.isLoading?a("div"):t._e(),t._v(" "),a("section",{staticClass:"content"},[a("div",{staticClass:"panel"},[t._m(0),t._v(" "),a("div",{staticClass:"inner_info"},[a("div",{staticClass:"head_name"},[a("img",{attrs:{src:t.info.avatar_url,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.info.loginname))])]),t._v(" "),a("p",[t._v("积分"+t._s(t.info.score))]),t._v(" "),a("p",[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-github"}})]),t._v("\n          @"+t._s(t.info.githubUsername)+"\n        ")]),t._v(" "),a("span",[t._v("注册时间 "+t._s(t._f("dateFormatter")(t.info.create_at)))])])]),t._v(" "),a("ul",{staticClass:"panel"},[a("li",{staticClass:"header"},[t._v("最近创建的话题")]),t._v(" "),t._l(t.info.recent_topics,function(s){return a("li",{staticClass:"content"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",[t._v(t._s(s.title))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)})],2),t._v(" "),a("ul",{staticClass:"panel"},[a("li",{staticClass:"header"},[t._v("最近参与的话题")]),t._v(" "),t._l(t.info.recent_replies,function(s){return a("li",{staticClass:"content"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",[t._v(t._s(s.title))])]),t._v(" "),a("div",{staticClass:"date"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"header"},[s("a",{attrs:{href:""}},[this._v("主页")]),this._v(" "),s("span",[this._v("/")])])}]};var T=a("VU/8")(D,m,!1,function(t){a("CNql")},"data-v-3a6b5c65",null).exports,w={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"slide_bar"},[t.isLoading?a("div"):t._e(),t._v(" "),a("div",[a("div",{staticClass:"author panel"},[a("div",{staticClass:"header"},[t._v("作者")]),t._v(" "),a("div",{staticClass:"bg"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:t.slideInfo.loginname}}}},[a("div",{staticClass:"userinfo"},[a("img",{attrs:{src:t.slideInfo.avatar_url,alt:""}}),t._v(" "),a("span",[t._v(t._s(t.slideInfo.loginname))])])]),t._v(" "),a("span",{staticClass:"score"},[t._v("积分："+t._s(t.slideInfo.score))])],1)]),t._v(" "),a("div",{staticClass:"topic panel"},[a("div",{staticClass:"header"},[t._v("作者最近主题")]),t._v(" "),a("div",{staticClass:"bg"},[a("ul",t._l(t.topiclimitby5,function(s){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[t._v("\n              "+t._s(s.title)+"\n            ")])],1)}),0)])]),t._v(" "),a("div",{staticClass:"reply panel"},[a("div",{staticClass:"header"},[t._v("作者最近回复")]),t._v(" "),a("div",{staticClass:"bg"},[a("ul",t._l(t.replylimitby5,function(s){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[t._v("\n              "+t._s(s.title)+"\n            ")])],1)}),0)])])])])},staticRenderFns:[]};var z=a("VU/8")({name:"SlideBar",data:function(){return{isLoading:!0,slideInfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/"+this.$route.params.author).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.slideInfo=s.data.data)})}},computed:{topiclimitby5:function(){if(this.slideInfo.recent_topics)return this.slideInfo.recent_topics.slice(0,5)},replylimitby5:function(){if(this.slideInfo.recent_replies)return this.slideInfo.recent_replies.slice(0,5)}},watch:{$route:function(t,s){this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},w,!1,function(t){a("+HZm")},"data-v-57cba173",null).exports,h={name:"GoodList",data:function(){return{isLoading:!0,posts:[],postPage:1}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{tab:"good",page:this.postPage,limit:20}}).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.posts=s.data.data)}).catch(function(t){console.log(t)})},renderList:function(t){this.postPage=t,this.getData(),this.backTop()},backTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},mounted:function(){this.isLoading=!1,this.getData()},components:{Pagination:c}},y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div"):a("div",{staticClass:"posts"},[a("ul",[a("li",[a("div",[a("router-link",{attrs:{to:{name:"root"}}},[a("span",[t._v("全部")])]),t._v(" "),a("span",{staticClass:"active"},[t._v("精华")]),t._v(" "),a("router-link",{attrs:{to:{name:"share_list",params:{tab:"share"}}}},[a("span",[t._v("分享")])]),t._v(" "),a("router-link",{attrs:{to:{name:"ask_list",params:{tab:"ask"}}}},[a("span",[t._v("问答")])]),t._v(" "),a("router-link",{attrs:{to:{name:"job_list",params:{tab:"job"}}}},[a("span",[t._v("招聘")])])],1)]),t._v(" "),t._l(t.posts,function(s){return a("li",{staticClass:"clearfix"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("span",{staticClass:"count"},[a("span",{staticClass:"reply_count"},[t._v(t._s(s.reply_count))]),t._v("/"),a("span",{staticClass:"visit_count"},[t._v(t._s(s.visit_count))])]),t._v(" "),a("span",{class:[{post_good:!0===s.good,post_top:!0===s.top,post_tab:!0!==s.good&&!0!==s.top}]},[a("span",[t._v(t._s(t._f("tabFormatter")(s)))])]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"last_reply_at"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)}),t._v(" "),a("li",[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},staticRenderFns:[]};var A=a("VU/8")(h,y,!1,function(t){a("pw66")},"data-v-fe11fede",null).exports,I={name:"ShareList",data:function(){return{isLoading:!0,posts:[],postPage:1}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{tab:"share",page:this.postPage,limit:20}}).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.posts=s.data.data)}).catch(function(t){console.log(t)})},renderList:function(t){this.postPage=t,this.getData(),this.backTop()},backTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},mounted:function(){this.isLoading=!1,this.getData()},components:{Pagination:c}},f={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div"):a("div",{staticClass:"posts"},[a("ul",[a("li",[a("div",[a("router-link",{attrs:{to:{name:"root"}}},[a("span",[t._v("全部")])]),t._v(" "),a("router-link",{attrs:{to:{name:"good_list",params:{tab:"good"}}}},[a("span",[t._v("精华")])]),t._v(" "),a("span",{staticClass:"active"},[t._v("分享")]),t._v(" "),a("router-link",{attrs:{to:{name:"ask_list",params:{tab:"ask"}}}},[a("span",[t._v("问答")])]),t._v(" "),a("router-link",{attrs:{to:{name:"job_list",params:{tab:"job"}}}},[a("span",[t._v("招聘")])])],1)]),t._v(" "),t._l(t.posts,function(s){return a("li",{staticClass:"clearfix"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("span",{staticClass:"count"},[a("span",{staticClass:"reply_count"},[t._v(t._s(s.reply_count))]),t._v("/"),a("span",{staticClass:"visit_count"},[t._v(t._s(s.visit_count))])]),t._v(" "),a("span",{class:[{post_good:!0===s.good,post_top:!0===s.top,post_tab:!0!==s.good&&!0!==s.top}]},[a("span",[t._v(t._s(t._f("tabFormatter")(s)))])]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"last_reply_at"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)}),t._v(" "),a("li",[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},staticRenderFns:[]};var k=a("VU/8")(I,f,!1,function(t){a("nfDA")},"data-v-513a528d",null).exports,x={name:"AskList",data:function(){return{isLoading:!0,posts:[],postPage:1}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postPage,limit:20,tab:"ask"}}).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.posts=s.data.data)}).catch(function(t){console.log(t)})},renderList:function(t){this.postPage=t,this.getData(),this.backTop()},backTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},mounted:function(){this.isLoading=!0,this.getData()},components:{Pagination:c}},b={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div",{staticClass:"loading"}):a("div",{staticClass:"posts"},[a("ul",[a("li",[a("div",[a("router-link",{attrs:{to:{name:"root"}}},[a("span",[t._v("全部")])]),t._v(" "),a("router-link",{attrs:{to:{name:"good_list",params:{tab:"good"}}}},[a("span",[t._v("精华")])]),t._v(" "),a("router-link",{attrs:{to:{name:"share_list",params:{tab:"share"}}}},[a("span",[t._v("分享")])]),t._v(" "),a("span",{staticClass:"active"},[t._v("问答")]),t._v(" "),a("router-link",{attrs:{to:{name:"job_list",params:{tab:"job"}}}},[a("span",[t._v("招聘")])])],1)]),t._v(" "),t._l(t.posts,function(s){return a("li",{staticClass:"clearfix"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("span",{staticClass:"count"},[a("span",{staticClass:"reply_count"},[t._v(t._s(s.reply_count))]),t._v("/"),a("span",{staticClass:"visit_count"},[t._v(t._s(s.visit_count))])]),t._v(" "),a("span",{class:[{post_good:!0===s.good,post_top:!0===s.top,post_tab:!0!==s.good&&!0!==s.top}]},[a("span",[t._v(t._s(t._f("tabFormatter")(s)))])]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"last_reply_at"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)}),t._v(" "),a("li",[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},staticRenderFns:[]};var O=a("VU/8")(x,b,!1,function(t){a("9Rff")},"data-v-e9a60a36",null).exports,E={name:"JobList",data:function(){return{isLoading:!0,posts:[],postPage:1}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postPage,limit:20,tab:"job"}}).then(function(s){!0===s.data.success&&(t.isLoading=!1,t.posts=s.data.data)}).catch(function(t){console.log(t)})},renderList:function(t){this.postPage=t,this.getData(),this.backTop()},backTop:function(){document.documentElement.scrollTop=0,document.body.scrollTop=0}},mounted:function(){this.isLoading=!0,this.getData()},components:{Pagination:c}},Y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.isLoading?a("div",{staticClass:"loading"}):a("div",{staticClass:"posts"},[a("ul",[a("li",[a("div",[a("router-link",{attrs:{to:{name:"root"}}},[a("span",[t._v("全部")])]),t._v(" "),a("router-link",{attrs:{to:{name:"good_list",params:{tab:"good"}}}},[a("span",[t._v("精华")])]),t._v(" "),a("router-link",{attrs:{to:{name:"share_list",params:{tab:"share"}}}},[a("span",[t._v("分享")])]),t._v(" "),a("router-link",{attrs:{to:{name:"ask_list",params:{tab:"ask"}}}},[a("span",[t._v("问答")])]),t._v(" "),a("span",{staticClass:"active"},[t._v("招聘")])],1)]),t._v(" "),t._l(t.posts,function(s){return a("li",{staticClass:"clearfix"},[a("router-link",{attrs:{to:{name:"user_info",params:{loginname:s.author.loginname}}}},[a("img",{attrs:{src:s.author.avatar_url,alt:""}})]),t._v(" "),a("span",{staticClass:"count"},[a("span",{staticClass:"reply_count"},[t._v(t._s(s.reply_count))]),t._v("/"),a("span",{staticClass:"visit_count"},[t._v(t._s(s.visit_count))])]),t._v(" "),a("span",{class:[{post_good:!0===s.good,post_top:!0===s.top,post_tab:!0!==s.good&&!0!==s.top}]},[a("span",[t._v(t._s(t._f("tabFormatter")(s)))])]),t._v(" "),a("router-link",{attrs:{to:{name:"post_content",params:{id:s.id,author:s.author.loginname}}}},[a("span",{staticClass:"title"},[t._v(t._s(s.title))])]),t._v(" "),a("span",{staticClass:"last_reply_at"},[t._v(t._s(t._f("dateFormatter")(s.last_reply_at)))])],1)}),t._v(" "),a("li",[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},staticRenderFns:[]};var S=a("VU/8")(E,Y,!1,function(t){a("yx6f")},"data-v-05355695",null).exports,Q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"about"}},[a("h1",[t._v("仿CNode")]),t._v(" "),a("h3",[t._v("官网链接: "),a("a",{attrs:{href:"https://cnodejs.org/"}},[t._v("cnodejs.org")])]),t._v(" "),a("p",[t._v("技术栈：Vue, Vue CLI, Vue Router")]),t._v(" "),a("p",[t._v("利用官网提供的 API，对网站进行仿写练习 "),a("a",{attrs:{href:"https://github.com/gzygzy00/cnode-imitated"}},[t._v("详情")])]),t._v(" "),a("p",[t._v("通过 Vue CLI 搭建，使用 Axios 获取数据，Vue Router 实现路由的跳转，并利用 watch 监听路由；")]),t._v(" "),a("p",[t._v("运用到了 Vue 的内置指令和事件绑定等功能，诸如 v-bind, v-if 等等；使用计算属性限制显示条目，过滤器 filter 过滤日期和分类，\n    分页功能的实现，父子组件传递数据")])])}]};var U=a("VU/8")({name:"About"},Q,!1,function(t){a("89WA")},"data-v-4f1a5ee5",null).exports;i.a.use(g.a);var P=new g.a({routes:[{path:"/",name:"root",components:{main:_}},{path:"/topic/id=:id&author=:author",name:"post_content",components:{main:v,slidebar:z}},{path:"/user/:loginname",name:"user_info",components:{main:T}},{path:"/topic/tab=:tab",name:"good_list",components:{main:A}},{path:"/topic/tab=:tab",name:"share_list",components:{main:k}},{path:"/topic/tab=:tab",name:"ask_list",components:{main:O}},{path:"/topic/tab=:tab",name:"job_list",components:{main:S}},{path:"/about",name:"about",components:{main:U}}],scrollBehavior:function(t,s,a){return{x:0,y:0}}}),Z=a("mtWM"),G=a.n(Z);i.a.config.productionTip=!1,i.a.prototype.$http=G.a,i.a.filter("tabFormatter",function(t){return!0===t.good?"精华":!0===t.top?"置顶":"share"===t.tab?"分享":"ask"===t.tab?"问答":"招聘"}),i.a.filter("dateFormatter",function(t){if(!t)return"";var s=new Date(t).getTime(),a=((new Date).getTime()-s)/1e3;return a<0?"":a<30?"刚刚":a<60?parseInt(a)+" 秒前":a/60<60?parseInt(a/60)+" 分钟前":a/3600<24?parseInt(a/3600)+" 小时前":a/86400<31?parseInt(a/86400)+" 天前":a/86400<365?parseInt(a/2678400)+" 个月前":parseInt(a/31536e3)+" 年前"}),new i.a({el:"#app",router:P,components:{App:C},template:"<App/>"})},"RPu/":function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyNy4zIDEwMC40IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MjcuMyAxMDAuNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIiBkPSJNMTI3Ljk4Nyw1Mi45OTRjMC0xLjA4NC0wLjU3LTIuMDgtMS41MDYtMi42MTdsLTI0LjkzNy0xNC4zNTIKICBjLTAuNDIyLTAuMjQ4LTAuODk1LTAuMzc3LTEuMzczLTAuMzk2aC0wLjI1OGMtMC40NzcsMC4wMTktMC45NDksMC4xNDgtMS4zNzcsMC4zOTZMNzMuNTk4LDUwLjM3NwogIGMtMC45MjksMC41MzctMS41MDgsMS41MzMtMS41MDgsMi42MTdsMC4wNTUsMzguNjQ0YzAsMC41MzgsMC4yNzksMS4wMzgsMC43NTIsMS4zMDFjMC40NjMsMC4yNzgsMS4wMzUsMC4yNzgsMS40OTYsMGwxNC44MjEtOC40ODUKICBjMC45MzctMC41NTgsMS41MDctMS41MzksMS41MDctMi42MTNWNjMuNzg0YzAtMS4wNzYsMC41NzEtMi4wNzEsMS41MDQtMi42MDZsNi4zMTEtMy42MzZjMC40Ny0wLjI3MSwwLjk4NC0wLjQwNCwxLjUxLTAuNDA0CiAgYzAuNTEzLDAsMS4wNDEsMC4xMzMsMS40OTgsMC40MDRsNi4zMDgsMy42MzZjMC45MzQsMC41MzUsMS41MDYsMS41MywxLjUwNiwyLjYwNlY4MS44NGMwLDEuMDc0LDAuNTc4LDIuMDYyLDEuNTEsMi42MTMKICBsMTQuODE2LDguNDg1YzAuNDY1LDAuMjc4LDEuMDQ1LDAuMjc4LDEuNTA2LDBjMC40NTktMC4yNjMsMC43NDgtMC43NjMsMC43NDgtMS4zMDFMMTI3Ljk4Nyw1Mi45OTR6Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIiBkPSJNMjYxLjE0Ny0wLjEyOWMtMC40NjctMC4yNi0xLjAzNy0wLjI1NC0xLjQ5OCwwLjAxNgogIGMtMC40NiwwLjI3MS0wLjc0MywwLjc2NS0wLjc0MywxLjI5OXYzOC4yNzFjMCwwLjM3Ni0wLjIwMSwwLjcyNC0wLjUyNSwwLjkxM2MtMC4zMjYsMC4xODgtMC43MjksMC4xODgtMS4wNTYsMGwtNi4yNDYtMy41OTkKICBjLTAuOTMyLTAuNTM3LTIuMDc3LTAuNTM2LTMuMDEsMC4wMDFMMjIzLjEyMiw1MS4xN2MtMC45MzMsMC41MzctMS41MDYsMS41MzItMS41MDYsMi42MDd2MjguODAxYzAsMS4wNzYsMC41NzMsMi4wNywxLjUwNSwyLjYwOQogIGwyNC45NDYsMTQuNDA4YzAuOTM0LDAuNTM5LDIuMDgxLDAuNTM5LDMuMDE0LDBsMjQuOTUtMTQuNDA4YzAuOTMzLTAuNTM5LDEuNTA2LTEuNTMzLDEuNTA2LTIuNjA5VjEwLjc4NgogIGMwLTEuMDkyLTAuNTkxLTIuMDk5LTEuNTQ1LTIuNjMxTDI2MS4xNDctMC4xMjl6IE0yNTguODMzLDczLjExNWMwLDAuMjctMC4xNDUsMC41MTktMC4zNzgsMC42NTFsLTguNTY0LDQuOTM4CiAgYy0wLjIzMywwLjEzNS0wLjUyMSwwLjEzNS0wLjc1MiwwbC04LjU2Ni00LjkzOGMtMC4yMzItMC4xMzMtMC4zNzctMC4zODItMC4zNzctMC42NTF2LTkuODkxYzAtMC4yNjksMC4xNDUtMC41MTcsMC4zNzYtMC42NTEKICBsOC41NjYtNC45NDdjMC4yMzItMC4xMzUsMC41Mi0wLjEzNSwwLjc1NCwwbDguNTY0LDQuOTQ3YzAuMjMyLDAuMTM1LDAuMzc3LDAuMzgzLDAuMzc3LDAuNjUxVjczLjExNXoiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Ik0zNTAuNCw2Mi45NjZjMC45MjgtMC41MzksMS40OTktMS41MzEsMS40OTktMi42MDR2LTYuOTc5CiAgYzAtMS4wNzMtMC41NzEtMi4wNjYtMS41LTIuNjA1bC0yNC43ODctMTQuMzkyYy0wLjkzNC0wLjU0Mi0yLjA4NC0wLjU0My0zLjAyLTAuMDA0bC0yNC45MzgsMTQuMzk3CiAgYy0wLjkzMywwLjUzOS0xLjUwNiwxLjUzMy0xLjUwNiwyLjYwOXYyOC43OTNjMCwxLjA4MywwLjU4LDIuMDgxLDEuNTIxLDIuNjE2bDI0Ljc4MywxNC4xMjJjMC45MTQsMC41MjIsMi4wMzQsMC41MjcsMi45NTQsMC4wMTgKICBsMTQuOTg5LTguMzMyYzAuNDc3LTAuMjY2LDAuNzcyLTAuNzY1LDAuNzc0LTEuMzA4YzAuMDA0LTAuNTQzLTAuMjg1LTEuMDQ2LTAuNzU1LTEuMzE1TDMxNS4zMiw3My41NzYKICBjLTAuNDctMC4yNjgtMC43NTgtMC43NjctMC43NTgtMS4zMDZ2LTkuMDI0YzAtMC41MzgsMC4yODctMS4wMzYsMC43NTUtMS4zMDRsNy44MTEtNC41MDRjMC40NjQtMC4yNjgsMS4wMzktMC4yNjgsMS41MDMsMAogIGw3LjgxNSw0LjUwNGMwLjQ2NywwLjI2OCwwLjc1NCwwLjc2NiwwLjc1NCwxLjMwNHY3LjEwMWMwLDAuNTM4LDAuMjg4LDEuMDM2LDAuNzU1LDEuMzA2YzAuNDY3LDAuMjY5LDEuMDQyLDAuMjY3LDEuNTA4LTAuMDAzCiAgTDM1MC40LDYyLjk2NnoiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM4MGJkMDEiIGQ9Ik0xNzMuMzUsMzYuMjNjMC45MzItMC41MzgsMi4wOC0wLjUzOCwzLjAxMiwwbDI0Ljk0MywxNC4zOTUKICBjMC45MzQsMC41MzcsMS41MDgsMS41MzIsMS41MDgsMi42MDl2MjguODExYzAsMS4wNzctMC41NzQsMi4wNzEtMS41MDYsMi42MWwtMjQuOTQ0LDE0LjQwNWMtMC45MzMsMC41MzgtMi4wODEsMC41MzgtMy4wMTQsMAogIGwtMjQuOTM4LTE0LjQwNWMtMC45MzItMC41MzktMS41MDYtMS41MzMtMS41MDYtMi42MVY1My4yMzNjMC0xLjA3NiwwLjU3NC0yLjA3MSwxLjUwNy0yLjYwOEwxNzMuMzUsMzYuMjN6Ii8+CjxwYXRoIGZpbGw9IiM4MGJkMDEiIGQ9Ik0zOTguODMzLDk5LjQ3MmMtMC44NTksMC0xLjcxNi0wLjIyNS0yLjQ2OC0wLjY2bC03Ljg1My00LjY0NmMtMS4xNzItMC42NTYtMC42MDEtMC44ODgtMC4yMTMtMS4wMjMKICBjMS41NjMtMC41NDMsMS44ODEtMC42NjgsMy41NTEtMS42MTRjMC4xNzMtMC4wOTksMC40MDQtMC4wNjIsMC41ODQsMC4wNDVsNi4wMzMsMy41ODJjMC4yMTksMC4xMjEsMC41MjYsMC4xMjEsMC43MjgsMAogIGwyMy41MjItMTMuNTc3YzAuMjE5LTAuMTI1LDAuMzU4LTAuMzc2LDAuMzU4LTAuNjM2VjUzLjc5NmMwLTAuMjY1LTAuMTQtMC41MTMtMC4zNjQtMC42NDdsLTIzLjUxMy0xMy41NjUKICBjLTAuMjE3LTAuMTI3LTAuNTA2LTAuMTI3LTAuNzI0LDBMMzc0Ljk3LDUzLjE1MmMtMC4yMjksMC4xMzEtMC4zNzMsMC4zODYtMC4zNzMsMC42NDR2MjcuMTQ2YzAsMC4yNiwwLjE0NCwwLjUwNiwwLjM3MSwwLjYyOQogIGw2LjQ0MiwzLjcyMmMzLjQ5NiwxLjc0OCw1LjYzOC0wLjMxLDUuNjM4LTIuMzc5di0yNi44YzAtMC4zNzksMC4zMDUtMC42NzgsMC42ODMtMC42NzhoMi45ODNjMC4zNzMsMCwwLjY4MiwwLjI5OSwwLjY4MiwwLjY3OAogIHYyNi44YzAsNC42NjYtMi41NDEsNy4zNDItNi45NjUsNy4zNDJjLTEuMzYsMC0yLjQzLDAtNS40MTgtMS40NzJsLTYuMTY4LTMuNTUxYy0xLjUyNC0wLjg4Mi0yLjQ2Ny0yLjUyOC0yLjQ2Ny00LjI5MVY1My43OTYKICBjMC0xLjc2MywwLjk0Mi0zLjQxLDIuNDY3LTQuMjg3bDIzLjUyMS0xMy41OTJjMS40ODktMC44NDEsMy40NjgtMC44NDEsNC45NDQsMGwyMy41MTksMTMuNTkyYzEuNTI0LDAuODgyLDIuNDcyLDIuNTI0LDIuNDcyLDQuMjg3CiAgdjI3LjE0NmMwLDEuNzYzLTAuOTQ3LDMuNDAzLTIuNDcyLDQuMjkxTDQwMS4zMSw5OC44MTJDNDAwLjU1OCw5OS4yNDcsMzk5LjcwMyw5OS40NzIsMzk4LjgzMyw5OS40NzIiLz4KPHBhdGggZmlsbD0iIzgwYmQwMSIgZD0iTTQwNi4wOTksODAuNzcxYy0xMC4yOTQsMC0xMi40NDktNC43MjUtMTIuNDQ5LTguNjg3YzAtMC4zNzcsMC4zMDMtMC42NzgsMC42OC0wLjY3OGgzLjA0MQogIGMwLjMzOSwwLDAuNjIzLDAuMjQzLDAuNjc1LDAuNTc1YzAuNDU5LDMuMDk3LDEuODI4LDQuNjU4LDguMDU0LDQuNjU4YzQuOTU0LDAsNy4wNjQtMS4xMjEsNy4wNjQtMy43NQogIGMwLTEuNTE1LTAuNTk4LTIuNjQtOC4yOTktMy4zOTRjLTYuNDM3LTAuNjM4LTEwLjQxNi0yLjA2LTEwLjQxNi03LjIwOGMwLTQuNzQ1LDQtNy41NzYsMTAuNzA3LTcuNTc2CiAgYzcuNTM1LDAsMTEuMjYzLDIuNjE1LDExLjczNiw4LjIyN2MwLjAxOCwwLjE5My0wLjA1MiwwLjM3OS0wLjE4MSwwLjUyM2MtMC4xMjksMC4xMzUtMC4zMDgsMC4yMTctMC40OTgsMC4yMTdoLTMuMDUyCiAgYy0wLjMxNywwLTAuNTk2LTAuMjI1LTAuNjYxLTAuNTMxYy0wLjczMS0zLjI1OC0yLjUxMy00LjI5OS03LjM0NS00LjI5OWMtNS40MSwwLTYuMDM5LDEuODg1LTYuMDM5LDMuMjk3CiAgYzAsMS43MTEsMC43NDIsMi4yMDksOC4wNDcsMy4xNzZjNy4yMjksMC45NTUsMTAuNjYyLDIuMzA5LDEwLjY2Miw3LjM5QzQxNy44MjUsNzcuODM2LDQxMy41NTEsODAuNzcxLDQwNi4wOTksODAuNzcxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjODBiZDAxIiBkPSJNMzIzLjczNSw2MS42MThjMC4xNzktMC4xMDQsMC4zOTgtMC4xMDQsMC41NzcsMGw0Ljc4NywyLjc2MgogIGMwLjE4LDAuMTAzLDAuMjg5LDAuMjk0LDAuMjg5LDAuNXY1LjUyN2MwLDAuMjA3LTAuMTA5LDAuMzk3LTAuMjg5LDAuNTAxbC00Ljc4NywyLjc2M2MtMC4xNzksMC4xMDMtMC4zOTgsMC4xMDMtMC41NzcsMAogIGwtNC43ODMtMi43NjNjLTAuMTgtMC4xMDQtMC4yODktMC4yOTQtMC4yODktMC41MDFWNjQuODhjMC0wLjIwNiwwLjEwOS0wLjM5NywwLjI4OS0wLjVMMzIzLjczNSw2MS42MTh6Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmIiBkPSJNMzYuMjgsNjEuODdjMS4wOTgsMC42NSwxLjM1OCwwLjI1NSwxLjc0MiwwLjAzNQogIGMwLjM4NS0wLjIyMSwxNC42OTUtOC40MTEsMTUuNjA2LTguODU3YzAuOTEyLTAuNDQ2LDEuMzE1LTEuOTE1LDAuMTE0LTIuNjFjLTEuMjAxLTAuNjk3LTI1LjQxLTE0LjcyMS0yNC4yNDEtMTQuMTIKICBjMS4yNTksMC42NDYtMS4yMDItMC44MjktMi42MjYtMC4xNzVDMjUuNDUsMzYuNzk3LDMuNjQ0LDQ5LjMzNSwyLjA5OCw1MC4yMThjLTEuNTQ1LDAuODgzLTIuMDMyLDEuNzMxLTIuMDI3LDIuOTA3CiAgYzAuMDA0LDEuMTc2LTAuMDc4LDI3LjI1MywwLDI4LjgwMWMwLjA3OCwxLjU0OCwwLjY5LDIuMDUyLDEuNTA2LDIuNjA5YzAuODE2LDAuNTU4LDIyLjkwMSwxMy41MDUsMjQuNTcyLDE0LjQxCiAgYzEuNjcxLDAuOTA3LDIuNzY4LDAuNTk3LDMuODUzLTAuMDRjMS4wODUtMC42MzksMjIuNzI3LTEzLjAwMywyMy41OTMtMTMuNTU0YzAuODY2LTAuNTUxLDEuNjUzLTEuOTY5LTAuMTU3LTIuOTkyCiAgYy0xLjgxMS0xLjAyMi0xNC43NzktOC42OTMtMTUuMjc5LTguOTQzcy0wLjc5Ni0wLjI1NS0xLjUyLDAuMTUxYy0wLjcyNCwwLjQwOC03LjIyMiw0LjA2Mi04LjAxMyw0LjUyNHMtMC45MDQsMC4yNTQtMS4yODMsMC4wMzMKICBjLTAuMzc4LTAuMjIyLTcuMDg1LTQuMTM1LTcuODU5LTQuNTcxcy0wLjg2Ni0wLjY1Ni0wLjg2OC0xLjI1Yy0wLjAwMS0wLjU5My0wLjAxOC04LjEyMSwwLjAyMy04Ljk5OAogIGMwLjA0LTAuODc3LDAuMTY1LTEuMDc0LDAuOTYyLTEuNTQ4YzAuNzk3LTAuNDc0LDYuNjk1LTMuOTc4LDcuMTY2LTQuMjkzYzAuNDctMC4zMTUsMS40NTktMC4zNDUsMi4yMzEsMC4xMDgKICBDMjkuNzcsNTguMDI0LDM1LjE4Miw2MS4yMTksMzYuMjgsNjEuODciLz4KPC9zdmc+Cg=="},WdKW:function(t,s){},e6xA:function(t,s){},h2Zp:function(t,s){},nfDA:function(t,s){},pw66:function(t,s){},yx6f:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.770bdab04a18fa4777b3.js.map