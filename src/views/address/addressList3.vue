<template>
  <div class="addressList">
    <van-nav-bar title="地址列表" left-arrow fixed />

    <div class="list">
      <div class="list-item" @click="goBack">
        <div class="left">
          <van-checkbox
            v-model="checked"
            checked-color="#ee0a24"
          ></van-checkbox>
        </div>
        <div class="content">
          <div class="info">
            <span class="title">王子 18552651234 </span>
            <span v-if="isDefault" class="defalut">默认</span>
          </div>

          <p class="address">江苏省无锡市滨湖区文苑路10号</p>
        </div>
        <div class="right">
          <van-icon name="edit" />
        </div>
      </div>
      <div class="list-item">
        <div class="left">
          <van-checkbox
            v-model="checked"
            checked-color="#ee0a24"
          ></van-checkbox>
        </div>
        <div class="content">
          <div class="info">
            <span class="title">张霞 18552651234 </span>
            <span v-if="false" class="defalut">默认</span>
          </div>

          <p class="address">江苏省无锡市滨湖区文苑路10号</p>
        </div>
        <div class="right">
          <van-icon name="edit" />
        </div>
      </div>
      <div class="list-item">
        <div class="left">
          <van-checkbox
            v-model="checked"
            checked-color="#ee0a24"
          ></van-checkbox>
        </div>
        <div class="content">
          <div class="info">
            <span class="title">李丽 18552651234 </span>
            <span v-if="false" class="defalut">默认</span>
          </div>

          <p class="address">江苏省无锡市滨湖区文苑路10号</p>
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
import { getAddressListApi } from '@/api/address'

export default {
  name: 'AdressListPage',
  data() {
    return {
      checked: false,
      addressList: [],
      isDefault: true
      // {
      //   address_id: 10012,
      // name: "张小",
      // phone: "18999292929",
      // province_id: 782,
      // city_id: 783,
      // region_id: 785,
      // detail: "北京路1号楼8888室",
      // user_id: 10003,
      // region: {
      //   province: "上海",
      //   city: "上海市",
      //   region: "徐汇区"
      // },
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
    getAddressDetail() {},
    addAddress() {
      this.$toast('新增地址')
    },
    // 选择地址后退回
    goBack() {
      this.$toast('即将跳转！')
    }
    //   this.$router.push({
    //     path: '/pay',
    //     query: {
    //       mode: this.$route.query.mode,
    //       goodsId: this.$route.query.goodsId

    //     }
    //   })
    // }
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
