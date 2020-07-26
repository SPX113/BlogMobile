import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import './font/iconfont.css'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import formatetime from 'common/formatetime'
Vue.filter('formatetime', formatetime)


import { Popup , Swipe, SwipeItem ,Image as VanImage ,Tag} from 'vant'

Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)
Vue.use(Tag)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
