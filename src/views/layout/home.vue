<template>
  <div class="home">
    <!-- 导航条 -->
    <van-nav-bar title="商城" fixed></van-nav-bar>

    <!-- 搜索框 -->
    <van-search
      readonly
      shape="round"
      background="#f1f1f2"
      placeholder="请在此输入搜索关键词"
      @click="$router.push('/search')"
    />
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      v-for="item in swipeList"
      :key="item.imgUrl"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>
        <img :src="item.imgUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="item in navList"
        :key="item.imgUrl"
        :icon="item.imgUrl"
        :text="item.text"
        @click="$router.push('/category')"
      />
    </van-grid>
    <!-- 主会场 -->
    <div class="main">
      <img src="@/assets/main.png" alt="" />
    </div>
    <!-- 猜你喜欢 -->
    <div class="guess">
      <p class="guess-title">—— 猜你喜欢 ——</p>
      <div class="good-list">
        <GoodsItem
          v-for="item in goodsList"
          :item="item"
          :key="item.goods_id"
        ></GoodsItem>
      </div>
    </div>
  </div>
</template>
<script>
import { getHomeDetailApi } from '@/api/home'
import GoodsItem from '@/components/GoodsItem.vue'
export default {
  name: 'HomePage',
  components: {
    GoodsItem
  },
  data() {
    return {
      swipeList: [], //轮播图
      navList: [], //导航栏
      goodsList: [] //商品
    }
  },
  created() {
    this.getHomeDetaileData()
  },
  methods: {
    async getHomeDetaileData() {
      const {
        data: {
          pageData: { items }
        }
      } = await getHomeDetailApi()
      this.swipeList = items[1].data
      this.navList = items[4].data
      this.goodsList = items[6].data
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  padding-top: 90px;
  padding-bottom: 50px;
}

// 导航条样式
.van-nav-bar {
  z-index: 999;
  background-color: #1e90ff;
  ::v-deep .van-nav-bar__title {
    color: #fff;
    text-align: center;
  }
}
// 搜索框样式定制
.van-search {
  position: fixed;
  width: 93%;
  top: 46px;
  z-index: 999;
}

// 轮播图样式
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 185px;
  }
}
</style>
