webpackJsonp([2,0],{0:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=a(188),o=i(r),s=a(187),n=i(s),c=a(186),l=i(c),d=a(182),u=i(d),p=a(185),f=i(p),h=a(184),_=i(h),v=a(183),m=i(v);o["default"].use(n["default"]),o["default"].use(l["default"]);var g=new n["default"];g.map({"/":{component:f["default"]},"/article":{name:"article-list",component:_["default"]},"/article/:num":{name:"article-content",component:m["default"]}}),g.afterEach(function(t){window.scrollTo(0,0)}),g.start(u["default"],"#app")},1:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.addPrivateArticleAttr=e.pushCacheArticleList=e.cacheArticleList=void 0;var r=a(2),o=i(r),s=a(11),n=i(s);o["default"].setOptions({highlight:function(t){return n["default"].highlightAuto(t).value}});var c={owner:"monine",repo:"study",host:"https://api.github.com/",access_token:"99b2f92a00765ead17459a4a5dd95e87995a9ea6"},l=[],d=function(t){return e.cacheArticleList=l=l.concat(t)},u=function(t){var e=[],a=void 0;a=!!Array.isArray(t),a?e=e.concat(t):e.push(t);for(var i=e.length-1;i>=0;i--)e[i]._createdAt=e[i].created_at.split("T")[0],e[i]._updatedAt=e[i].updated_at.split("T")[0],e[i]._body=(0,o["default"])(e[i].body),e[i]._quote=e[i]._body.split("<!-- more -->")[0].trim();return a?e:e[0]};e["default"]=c,e.cacheArticleList=l,e.pushCacheArticleList=d,e.addPrivateArticleAttr=u},3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{loading:!1,nextPage:1,hasMoreArticle:!0}},methods:{updateLoading:function(t){this.loading=t},updateNextPage:function(){this.nextPage+=1},updateHasMoreArticle:function(t){this.hasMoreArticle=t}}}},4:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(1),o=i(r);e["default"]={ready:function(){var t=this,e=this,a=+this.articleNum;if(r.cacheArticleList.length)for(var i=r.cacheArticleList.length-1;i>=0;i--)if(r.cacheArticleList[i].number===a)return void(this.articleInfo=r.cacheArticleList[i]);this.$dispatch("update-loading",!0),this.$http.get(o["default"].host+"repos/"+o["default"].owner+"/"+o["default"].repo+"/issues/"+a,{params:{access_token:o["default"].access_token}}).then(function(a){e.articleInfo=(0,r.addPrivateArticleAttr)(a.data),t.$dispatch("update-loading",!1)})},props:["articleNum"],data:function(){return{articleInfo:{}}}}},5:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(1),o=i(r),s=5;e["default"]={ready:function(){return r.cacheArticleList.length?this.articleListInfo=r.cacheArticleList:(this.$dispatch("update-loading",!0),void this.getArticleList())},props:["loading","nextPage","hasMoreArticle"],data:function(){return{articleListInfo:[],showMoreBtn:!0}},methods:{moreArticle:function(){this.showMoreBtn=!1,this.getArticleList()},getArticleList:function(){var t=this;this.$http.get(o["default"].host+"repos/"+o["default"].owner+"/"+o["default"].repo+"/issues",{params:{filter:"created",page:this.nextPage,per_page:s,access_token:o["default"].access_token}}).then(function(e){return t.loading&&t.$dispatch("update-loading",!1),e.data.length?((0,r.pushCacheArticleList)((0,r.addPrivateArticleAttr)(e.data)),t.articleListInfo=r.cacheArticleList,e.data.length<s&&t.$dispatch("update-has-more-article",!1),t.showMoreBtn||(t.showMoreBtn=!0),void t.$dispatch("update-next-page")):t.$dispatch("update-has-more-article",!1)})}}}},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},178:function(t,e){t.exports=" <div id=app-wrapper class=app-wrapper> <header id=app-header class=app-header> <h1><a v-link=\"{ path: '/' }\">Monine</a></h1> <nav> <a v-link=\"{ path: '/article' }\">文章</a> </nav> </header> <div id=app-container class=app-container> <router-view :loading=loading :next-page=nextPage :has-more-article=hasMoreArticle :article-num=$route.params.num @update-loading=updateLoading @update-next-page=updateNextPage @update-has-more-article=updateHasMoreArticle></router-view> <div class=la-ball-clip-rotate v-show=loading><div></div></div> </div> <footer id=app-footer class=app-footer> <p>© 2016 Monine</p> </footer> </div> "},179:function(t,e){t.exports=" <section class=article-content-page> <article class=article-content v-if=\"$route.name === 'article-content' && articleInfo.id\" transition=fade> <header> <h2 class=article-content__title>{{ articleInfo.title }}</h2> </header> <p class=article-content__time v-show=articleInfo._createdAt> <em>Create at {{ articleInfo._createdAt }} && Update at {{ articleInfo._updatedAt }}</em> </p> <section class=article-content__body>{{{ articleInfo._body }}}</section> </article> </section> "},180:function(t,e){t.exports=' <section class=article-list-page> <ul class=article-list> <li class=article-list__item-li v-for="article in articleListInfo" track-by=id v-if="$route.name === \'article-list\' && articleListInfo.length" transition=fade> <h2 class=article-list__item-title> <a v-link="{ name: \'article-content\', params: { num: article.number }}">{{ article.title}}</a> </h2> <em class=article-list__item-time>- Create at {{ article._createdAt }} && Updated at {{ article._updatedAt }}</em> {{{ article._quote }}} <a class="article-list__read article-list__read-btn" v-link="{ name: \'article-content\', params: { num: article.number }}">READ</a> <p class=article-list__item-tags> <em>- Tags:</em> <a href=# class=article-info__label v-for="label in article.labels">{{ label.name }}</a> </p> </li> </ul> <div class=article-list__more-wrap> <p class=article-list__more v-if="articleListInfo.length && hasMoreArticle && showMoreBtn" transition=fadeupdown> <button class="article-list__more-btn article-list__read-btn" type=button @click=moreArticle>MORE</button> </p> <p class=article-list__no-more v-if="articleListInfo.length && !hasMoreArticle" transition=fadeupdown>没有更多的文章</p> </div> </section> '},181:function(t,e){t.exports=' <div class=user-info__card v-show="$route.path === \'/\'" transition=fadeupdown> <img src="https://avatars3.githubusercontent.com/u/8335856?v=3&s=460" alt=头像> <div class=user-info__site> <a href=https://github.com/Monine/ > <svg aria-hidden=true width=28 height=28 version=1.1 viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> </a> </div> <p class=user-info__desc>Front-End Develop Dog</p> <ul class=user-info__list> <li class="user-info__item user-info__company"> <svg aria-hidden=true width=16 height=16 fill=#999 version=1.1 viewBox="0 0 16 16"> <path d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"></path> </svg> <p>北京智云时代科技有限公司</p> </li> <li class="user-info__item uer-info__address"> <svg aria-hidden=true width=12 height=16 fill=#999 version=1.1 viewBox="0 0 12 16"> <path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path> </svg> <p>湖南长沙</p> </li> <li class="user-info__item uer-info__email"> <svg aria-hidden=true width=14 height=16 fill=#999 version=1.1 viewBox="0 0 14 16"> <path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path> </svg> <a class=link href=mailto:bob.zhouxiang@gmail.com>bob.zhouxiang@gmail.com</a> </li> </ul> </div> '},182:function(t,e,a){var i,r;a(6),i=a(3),r=a(178),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},183:function(t,e,a){var i,r;a(7),i=a(4),r=a(179),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},184:function(t,e,a){var i,r;a(8),i=a(5),r=a(180),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},185:function(t,e,a){var i,r;a(9),r=a(181),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}});
//# sourceMappingURL=app.a11294c8677a738ec28c.js.map
