import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Prodetail from '@/views/prodetail'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'
import AddressList from '@/views/address/addressList.vue'
import AddressEdit from '@/views/address/addressEdit.vue'

import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/prodetail',
    component: Prodetail
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

export default router
