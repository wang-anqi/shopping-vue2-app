<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.go(-1)">
    </van-nav-bar>
    <!-- 搜索框 -->
    <van-search
      v-model="search"
      show-action
      placeholder="请输入搜索关键词"
      clearable
    >
      <template #action>
        <div @click="goSearch(search)">搜索</div>
      </template>
    </van-search>
    <!-- 搜索历史 -->
    <div class="search-history" v-if="history.length > 0">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clearAll" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div
          v-for="item in history"
          :key="item"
          class="list-item"
          @click="goSearch(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getHistoryList, setHistoryList } from '@/utils/storage'
// import { setHistoryList } from '@/utils/storage'

export default {
  name: 'SearchPage',
  data() {
    return {
      search: '',
      history: getHistoryList()
      // history: [
      //   '手机',
      //   '外套',
      //   '笔记本',
      //   '秋冬可以外穿的开衫',
      //   '红酒',
      //   '香蕉',
      //   '贺卡'
      // ]
    }
  },

  methods: {
    goSearch(key) {
      const index = this.history.indexOf(key)
      if (index != -1) {
        //历史记录中存在 则去重该记录
        this.history.splice(index, 1)
      }
      //将新搜索名词放入数组 头部
      this.history.unshift(key)
      setHistoryList(this.history)
      this.$router.push(`/searchlist?goodsName=${key}`)
    },
    clearAll() {
      this.history = []
      setHistoryList([])
      this.$toast('清空历史成功！')
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  // 导航栏箭头
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  //   搜索框样式
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
