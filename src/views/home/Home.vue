<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommends :recommends="recommends"/>
    <fashion/>
    <tab-control :titles="titles"></tab-control>
    <ul>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
      <li>购物街</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childCom/HomeSwiper";
  import HomeRecommends from "./childCom/HomeRecommends";
  import Fashion from "./childCom/Fashion";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/common/tabcontrol/TabControl";


  import {getMultiData} from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      HomeRecommends,
      Fashion,
      TabControl,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: [
          "流行","新款","精选"
        ]

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
  #home{
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 1.2rem;
  }
</style>
