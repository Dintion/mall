<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: "",
        isShow: false
      }
    },
    methods: {
      show(message, duration = 1000) {
        this.isShow = true;
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position:absolute;
    height: 40px;
    width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #666;
    color: #eee;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    z-index: 999;
    border-radius: 2px;
  }
</style>
