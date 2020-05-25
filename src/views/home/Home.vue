<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles" class="showshow" @controlClick="controlItem" ref="tabControl1"
                 v-show="isTabShow"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe="3"
            @scroll="controlBackTop"
            @pullingUp="upLoad"
            :pullLoad="true">
      <home-swiper :banners="banners" @swiperLoaded="swiperLoaded"/>
      <home-recommends :recommends="recommends"/>
      <fashion/>
      <tab-control :titles="titles" @controlClick="controlItem" ref="tabControl2"></tab-control>
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
  import {debounce} from "../../common/utils/debounce";


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
        backTopShow: false,
        tabControlOffsetTop: 0,
        isTabShow: false,
        scrollPosition: 0,
      }
    },
    created() {
      this.getMultiData();
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      swiperLoaded() {
        this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
      ,
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      controlBackTop(position) {
        /**
         * 控制返回顶部
         * @type {boolean}
         */
        this.backTopShow = -position.y > 1000;
        /**
         * 控制tabcontrol
         */
        this.isTabShow = -position.y > this.tabControlOffsetTop;
        /**
         * 记录位置
         * */
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
          this.goods[type].page += 1;
          this.$refs.scroll.pullUpFinsh();
        });
      },
      controlItem(index) {
        if (index === 0) {
          this.currentType = 'pop';
        } else if (index === 1) {
          this.currentType = 'new';
        } else {
          this.currentType = 'sell';
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      upLoad() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.refresh();
      },
    },
    computed: {
      showGood() {
        return this.goods[this.currentType].list
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('imageLoaded', () => {
        refresh();
      });
    },
    activated() {
      console.log(this.scrollPosition)
      this.$refs.scroll.refresh
      this.$refs.scroll.scrollTo(0, this.scrollPosition, 0)
    },
    deactivated() {
      this.scrollPosition = this.$refs.scroll.scroll.y;
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

  .content {
    overflow: hidden;
    position: absolute;
    top: 43px;
    bottom: 49px;
  }

  .showshow {
    position: relative;
    z-index: 10;
  }
</style>
