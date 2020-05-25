<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <img :src="item.image" alt="" @load="swiperLoded">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {
    Swiper, SwiperItem
  } from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props: {
      banners: {
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isFinsh:false
      }
    },
    methods: {
      swiperLoded() {
        if (!this.isFinsh) {
          this.$emit('swiperLoaded');
        }
        this.isFinsh = true;

      }
    }
  }
</script>

<style scoped>

</style>
