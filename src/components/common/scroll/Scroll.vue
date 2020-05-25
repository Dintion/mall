<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Scroll",
    props: {
      probe: {
        type: Number,
        default: 0
      },
      pullLoad:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll.scrollTo(x, y, time);
      },
      pullUpFinsh(){
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probe,
        click: true,
        pullUpLoad: this.pullLoad,
      })
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
        this.scroll.on("pullingUp",()=>{
          this.$emit('pullingUp',)
        })
    },
  }
</script>

<style scoped>

</style>
