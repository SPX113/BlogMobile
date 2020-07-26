import Vue from 'vue'
import VueRouter from  'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const TimeLine = () => import('views/timeline/TimeLine')
const Message = () => import('views/messageboard/MessageBoard')
const About = () => import('views/about/About')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path : '/index',
    component : Home
  },
  {
    path: '/timeline',
    component: TimeLine
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router


