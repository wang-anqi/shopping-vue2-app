<template>
  <div class="searchlist">
    <!-- 导航栏 -->
    <van-nav-bar
      fixed
      title="搜索商品列表"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 搜索栏 -->
    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="query || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool-icon" name="apps-o" />
      </template>
    </van-search>
    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="sortSearch('all')">综合</div>
      <div class="sort-item" @click="sortSearch('sales')">销量</div>
      <div class="sort-item" @click="sortSearch('price')">价格</div>
    </div>
    <!-- 商品列表 -->
    <GoodsItem
      v-for="item in goodsList"
      :key="item.goods_id"
      :item="item"
    ></GoodsItem>
  </div>
</template>
<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getSearchGoodsListApi } from '@/api/product.js'
export default {
  name: 'SearchListPage',
  components: {
    GoodsItem
  },
  data() {
    return {
      sortType: 'all', //默认值为综合排序
      goodsList: []
    }
  },
  computed: {
    query() {
      return this.$route.query.goodsName
    }
  },
  created() {
    this.getSearchGoodsListData()
  },
  methods: {
    async getSearchGoodsListData() {
      const {
        data: { list }
      } = await getSearchGoodsListApi({
        categoryId: this.$route.query.categoryId,
        sortType: this.sortType,
        goodsName: this.query
      })
      this.goodsList = list.data
    },
    //根据综合 效率 价格 排序 获取搜索获取的商品项
    sortSearch(key) {
      if (key != 'all') {
        this.sortType = key
        this.getSearchGoodsListData()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.searchlist {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool-icon {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }
  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}
</style>
