<template>
  <div class="tab-control" >
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:currentIndex==index}" @click="itemClick(index)">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
        }
      }
    },
    data() {
      return{
        currentIndex: 0
      }
    },
    methods:{
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('controlClick',index)

      },
    }

  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    font-size: 1.2rem;
    background-color: white;
    letter-spacing: 5px;
    text-align: center;
    margin-bottom:10px;
  }
  .tab-control-item{
    flex: 1;
    height: 44px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding-left: 5px;
  }
  .active{
    color: var(--color-high-text);
    padding-bottom:5px ;
    border-bottom:3px solid #ff8198;
  }
</style>
