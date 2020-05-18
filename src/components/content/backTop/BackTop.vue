<template>
    <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 8px;
  bottom: 50px;
}
  .back-top img{
    width: 53px;
    height: 53px;
    z-index: 999;
  }
</style>
