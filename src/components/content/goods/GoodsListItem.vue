<template>
  <div class="goods" @click="goodClick">
    <img v-lazy="showImage" alt="" @load="imageLoaded">
    <div class="goods-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "GoodsListItem",
    props: {
      good: {
        type: Object,
        default: ''
      }
    }, methods: {
      imageLoaded() {
        this.$bus.$emit('imageLoaded')
      },
      goodClick() {
        this.$router.push('detail/' + this.good.iid)
      }
    },
    computed:{
      showImage() {
        return this.good.image||this.good.show.img
      }
    }
  }
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    width: 47%;
  }

  .goods img {
    width: 100%;
    border-radius: 9px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
