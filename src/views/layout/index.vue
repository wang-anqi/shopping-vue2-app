<template>
  <div class="cart">
    111
    <RouterView></RouterView>
    <van-tabbar
      route
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
    >
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="bag-o">分类页</van-tabbar-item>
      <van-tabbar-item @click="checkAuth('/cart')" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item @click="checkAuth('/user')" icon="user-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import store from '@/store'
import { RouterView } from 'vue-router'

export default {
  name: 'IndexPage',
  components: { RouterView },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    checkAuth(path) {
      const token = store.getters.token
      if (token) {
        this.$router.push(path)
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
