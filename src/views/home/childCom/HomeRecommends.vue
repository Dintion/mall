<template>
  <div class="home-banner">
    <div class="home-banner-item" v-for="item in recommends">
      <img :src="item.image" alt=""><div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommends",
    props: {
      recommends: {
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .home-banner {
    text-align: center;
    display: flex;
    margin-top: 10px;

    border-bottom: 30px solid #f6f6f6;
  }

  .home-banner-item{
    flex: 1;
    margin-bottom: 20px;
  }
  .home-banner-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;

  }
</style>
