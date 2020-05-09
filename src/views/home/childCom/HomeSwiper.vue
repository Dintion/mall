<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
          <img :src="item.image" alt="">
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
    components:{
      SwiperItem,
      Swiper
    },
    props: {
      banners: {
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
