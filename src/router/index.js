import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const Post = () => import('@/components/Post')
const Detail = () => import('@/components/Detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      props: true
    },
    {
      path: '/detail/:id',
      props: true,
      name: 'Detail',
      component: Detail
    }
  ]
})
