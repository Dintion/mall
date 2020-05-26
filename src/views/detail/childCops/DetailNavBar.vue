<template>
  <nav-bar class="detail-navbar">
    <div slot="left">
      <img src="~assets/img/common/back.svg" alt="" class="back" @click="back">
    </div>
    <div slot="center" class="navbar">
      <div v-for="(item,index) in titles" class="item" @click="itemClick(index)" :class="{active:index===currentIndex}">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐',],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('clickIndex',index)
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .navbar {
    display: flex;
  }

  .item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
  .back{
    margin-top: 12px;
  }
  .detail-navbar{
    background-color: white;
  }
</style>
