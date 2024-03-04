<template>
  <div class="addressList">
    <van-nav-bar title="地址列表" left-arrow fixed />

    <div class="list">
      <div
        class="list-item"
        v-for="item in addressList"
        :key="item.address_id"
        @click="goBack(item.address_id)"
      >
        <div class="left">
          <van-checkbox
            v-if="$route.query.form != 'payPlat'"
            v-model="checked"
            checked-color="#ee0a24"
          ></van-checkbox>
        </div>
        <div class="content">
          <div class="info">
            <span class="title">{{ item.name }} {{ item.phone }} </span>
            <span v-if="false" class="defalut">默认</span>
          </div>

          <p class="address">
            {{
              item.region.province +
              item.region.city +
              item.region.region +
              item.detail
            }}
          </p>
        </div>
        <div class="right">
          <van-icon name="edit" />
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="btn-add" @click="addAddress">新增地址</div>
  </div>
</template>
<script>
import { addAddressApi, getAddressListApi } from '@/api/address'

export default {
  name: 'AdressListPage',
  data() {
    return {
      checked: false,
      addressList: []
    }
  },
  created() {
    this.getAddressListData()
  },
  methods: {
    async getAddressListData() {
      const {
        data: { list }
      } = await getAddressListApi()

      this.addressList = list

      console.log(this.addressList)
    },
    async addAddress() {
      await addAddressApi()
      this.$toast('添加成功')
    },
    goBack(addressid) {
      if (this.$route.query.mode === 'buyNow') {
        this.$router.push({
          path: '/pay',
          query: {
            mode: 'buyNow',
            goodsSkuId: this.$route.query.goodsSkuId,
            goodsId: this.$route.query.goodsId,
            goodsNum: this.$route.query.goodsNum,
            defalutId: addressid
          }
        })
      }
      if (this.$route.query.mode === 'cart') {
        console.log(2)
        this.$router.push({
          path: '/pay',
          query: {
            mode: 'cart',
            cartIds: this.$route.query.cartIds,
            defalutId: addressid
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.addressList {
  padding-top: 46px;
  padding-bottom: 46px;
  // 箭头颜色

  // 地址列表项
  .list {
    margin-top: 5px;
    padding: 0 16px;

    // 列表项
    .list-item {
      padding: 5px 10px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: #fff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      .left {
        width: 22px;
      }
      .content {
        flex: 1;
        padding: 5px 6px;
        font-size: 14px;
        .info {
          display: flex;
          .title {
            font-size: 16px;
          }
          .defalut {
            display: block;
            margin-left: 8px;
            padding: 3px 5px;
            color: #fff;
            text-align: center;
            background-color: #ee0a24;
            border-radius: 15px;
          }
        }
        .address {
          padding-top: 3px;
        }
      }
      .right {
        width: 22px;
        font-size: 22px;
        color: #c3c3c3;
      }
    }
  }
  .list-item .content {
    position: relative;
    .default {
      //去掉默认斜体
      font: normal;
      z-index: 999;
      position: absolute;
      top: 0px;
      right: 2px;
      padding: 0 4px;
      color: #fff;
      text-align: center;
      background-color: #ee0a24;
      border-radius: 10px;
    }
  }

  // 底部按钮
  .btn-add {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 36px;
    width: 80%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg, #f43f54, #ee0a24);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
