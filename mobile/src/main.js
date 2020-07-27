import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './font/iconfont.css'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import formatetime from 'common/formatetime'
Vue.filter('formatetime', formatetime)


import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式

//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})



import { Popup , Swipe, SwipeItem ,Image as VanImage ,Tag ,Divider ,Lazyload ,Field ,Button} from 'vant'

Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Lazyload)
Vue.use(Field)
Vue.use(Button)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
