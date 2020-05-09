<template>
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommends :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childCom/HomeSwiper";
  import HomeRecommends from "./childCom/HomeRecommends";
  import {getMultiData} from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      HomeRecommends

    },
    data() {
      return {
        banners: [],
        recommends: []

      }
    },
    created() {
      getMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }

</script>

<style scoped>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 1.2rem;
  }
</style>
