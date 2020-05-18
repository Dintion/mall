<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe="3"
            @scroll="controlBackTop"
            @pullingUp="upLoad"
            :pullLoad="true">
      <home-swiper :banners="banners"/>
      <home-recommends :recommends="recommends"/>
      <fashion/>
      <tab-control :titles="titles" @controlClick="controlItem"></tab-control>
      <goods-list :list="showGood"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="backTopShow"/>

  </div>
</template>

<script>
  import HomeSwiper from "./childCom/HomeSwiper";
  import HomeRecommends from "./childCom/HomeRecommends";
  import Fashion from "./childCom/Fashion";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/common/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {getMultiData, getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      HomeRecommends,
      Fashion,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: [
          "流行", "新款", "精选"
        ],
        goods: {
          'pop': {
            page: 1,
            list: []
          },
          'new': {
            page: 1,
            list: []
          },
          'sell': {
            page: 1,
            list: []
          }
        },
        currentType: 'pop',
        probe: 3,
        backTopShow: false
      }
    },
    created() {
      this.getMultiData();
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods: {
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      controlBackTop(positon) {
        this.backTopShow = -positon.y > 1000;
      },
      /**
       * 获取数据
       */
      getMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.$refs.scroll.pullUpFinsh();
        });
        this.goods[type].page += 1;
      },
      controlItem(index) {
        if (index === 0) {
          this.currentType = 'pop';
        } else if (index === 1) {
          this.currentType = 'new';
        } else {
          this.currentType = 'sell';
        }
      },
      upLoad() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.refresh();
      },
      debounce(func, delay) {
        let timer = null;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        };
      }
    },
    computed: {
      showGood() {
        return this.goods[this.currentType].list
      }
    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('imageLoaded', () => {
        refresh();
      });
    }
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 1.2rem;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 99;

  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
