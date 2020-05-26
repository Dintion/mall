<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @clickIndex="clickIndex"/>
    <scroll
      class="content"
      ref="scroll"
      :probe="3"
      @scroll="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        ref="dgi"/>
      <detail-param-info
        :param-info="paramInfo"
        ref="param"/>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"/>
      <goods-list
        :list="recommendList"
        ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="backTopShow"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childCops/DetailNavBar";
  import DetailSwiper from "./childCops/DetailSwiper";
  import DetailBaseInfo from "./childCops/DetailBaseInfo";
  import DetailShopInfo from "./childCops/DetailShopInfo";
  import Scroll from "components/common/scroll/Scroll";
  import DetailParamInfo from "./childCops/DetailParamInfo";
  import DetailGoodsInfo from "./childCops/DetailGoodsInfo";
  import DetailCommentInfo from "./childCops/DetailCommentInfo";
  import DetailBottomBar from "./childCops/DetailBottomBar";
  import BackTop from "components/content/backTop/BackTop";
  import GoodsList from "components/content/goods/GoodsList";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
  import {itemLoadListener, backTopMixin} from "common/mixin";
  import {debounce} from "common/utils/debounce";


  export default {
    name: "detail",
    components: {
      BackTop,
      DetailBottomBar,
      GoodsList,
      Scroll,
      DetailGoodsInfo,
      DetailSwiper,
      DetailNavBar,
      DetailBaseInfo,
      DetailShopInfo,
      DetailParamInfo,
      DetailCommentInfo,
    },
    data() {
      return {
        iid: '',
        goodDetail: {},
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        comTops: [],
        db: {},
        currentIndex: 0
      }
    },
    methods: {
      getDetail() {
        getDetail(this.iid).then(res => {
          let data = res.result;
          this.topImages = data.itemInfo.topImages
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
          this.commentInfo = data.rate.list[0]
        });
      },
      getRecommend() {
        getRecommend().then(res => {
          this.recommendList = res.data.list
        })
      },
      imageLoad() {
        this.$refs.scroll.refresh
        this.db()
      },
      getComTop(el) {
        return el.$el.offsetTop+44
      },
      getComTops() {
        this.comTops = []
        this.comTops.push(0);
        this.comTops.push(this.getComTop(this.$refs.param));
        this.comTops.push(this.getComTop(this.$refs.comment));
        this.comTops.push(this.getComTop(this.$refs.recommend));
        this.comTops.push(Number.MAX_VALUE);
      },
      clickIndex(index) {
        this.currentIndex = index;
        this.$refs.scroll.scrollTo(0, -this.comTops[index], 200);
      },
      scroll(position) {
        for (var i = 0; i < this.comTops.length - 1; i++) {
          if (this.currentIndex != i) {
            if (-position.y >= this.comTops[i] && -position.y < this.comTops[i + 1]) {
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex;
            }
          }
        }
        this.backTopShow = -position.y > 800;
      },
      addToCart() {
        // console.log('加入购物车')
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.nowPrice
        product.iid = this.iid
        product.checked=true
        this.$store.dispatch('addToCart', product).then(res=>{

          this.$toast.show(res)
        });
      },
    },

    created() {
      this.iid = this.$route.params.iid
      this.getDetail()
      this.getRecommend()
      this.db = debounce(() => {
        this.getComTops()
      })
    },
    destroyed() {
      this.$bus.$off('imageLoaded', this.newrefresh)
    },
    mixins: [itemLoadListener, backTopMixin],

  }
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
    background-color: white;
    z-index: 9;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 58px;
  }
</style>
