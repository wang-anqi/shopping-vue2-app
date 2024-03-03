<template>
  <div class="count-box">
    <button @click="handleSub" class="minus">-</button>
    <input :value="value" @change="handleChange" class="inp" type="text" />
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    // 数字框组件
    handleSub() {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleAdd() {
      this.$emit('input', this.value + 1)
    },
    handleChange(e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        // 数据不合法 则保留原来的数字
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>
<style lang="less" scoped>
// 弹窗中的数字框
.count-box {
  width: 110px;
  display: flex;

  .add,
  .minus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
