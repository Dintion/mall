<template>
  <div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item slot="default" path="/home">
        <img src="~assets/img/tabbar/home.svg" alt="首页" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="首页" slot="item-icon-active">
        <div slot="item-des">首页</div>
      </tab-bar-item>
      <tab-bar-item slot="default" path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="首页" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="首页" slot="item-icon-active">
        <div slot="item-des">分类</div>
      </tab-bar-item>
      <tab-bar-item slot="default" path="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt="首页" slot="item-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="首页" slot="item-icon-active">
        <div slot="item-des">购物车</div>
      </tab-bar-item>
      <tab-bar-item slot="default" path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="首页" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="首页" slot="item-icon-active">
        <div slot="item-des">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
