<template>
  <div class="category">
    <!-- 分类 -->
    <van-nav-bar title="全部分类" fixed />

    <!-- 搜索框 -->
    <van-search
      readonly
      shape="round"
      background="#f1f1f2"
      placeholder="请输入搜索关键词"
      @click="$router.push('/search')"
    />
    <!-- 分类列表 -->
    <div class="list-box">
      <div class="left">
        <ul>
          <li v-for="(item, index) in list" :key="item.category_id">
            <a
              :class="{ active: index === activeIndex }"
              @click="activeIndex = index"
              href="javascript:;"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="right">
        <div
          @click="$router.push(`/searchlist?categoryId=${item.category_id}`)"
          v-for="item in list[activeIndex]?.children"
          :key="item.category_id"
          class="cate-goods"
        >
          <img :src="item.image?.external_url" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCategoryListApi } from '@/api/category'

export default {
  name: 'CategoryPage',
  data() {
    return {
      list: [],
      activeIndex: 0
    }
  },
  created() {
    this.getCategoryListData()
  },
  methods: {
    async getCategoryListData() {
      const res = await getCategoryListApi()
      this.list = res.data.list
      console.log(res)
      console.log(this.list)
    }
  }
}
</script>
<style lang="less" scoped></style>
