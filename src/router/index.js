import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'
import AddressList from '@/views/address/addressList.vue'
import AddressEdit from '@/views/address/addressEdit.vue'

import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    //动态路由传参数
    path: '/prodetail/:goods_id',
    component: ProDetail
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/myorder',
    component: MyOrder
  },
  {
    path: '/addresslist',
    component: AddressList
  },
  {
    path: '/addressedit',
    component: AddressEdit
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/user',
        component: User
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
    return
  }

  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
