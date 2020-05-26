<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="image in topImages" class="detail-swiper-item">
      <img :src="image" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swpier, SwiperItem} from 'components/common/swiper'
  import Swiper from "../../../components/common/swiper/Swiper";

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      Swpier,
      SwiperItem
    },
    methods: {},
    props: {
      topImages: {
        type: Array,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    margin-top: 44px;
    height: 480px;
    width: 100%;
  }
  \.detail-swiper-item{}
</style>
