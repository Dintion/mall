<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-des"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    methods:{
      itemClick(){
        this.$router.push(this.path);
      }
    },
    computed:{
      isActive(){
        if (this.$route.path === '/') {

        }
        return this.$route.path.indexOf(this.path) !== -1;
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 13px;
  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 23px;
    height: 23px;
    vertical-align: center;
  }

  .active {
    color: red;
  }
</style>
