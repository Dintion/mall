import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('views/home/Home');
const cart = () => import('views/cart/Cart');
const category = () => import('views/category/Category');
const profile = () => import('views/profile/Profile');
const detail = () => import('views/detail/Detail')
export default new Router({
  routes: [
    {
      path: '',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/detail/:iid',
      component:detail
    }
  ],
  mode: 'history'
})
