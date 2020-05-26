<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{num}})</div>
    </nav-bar>
    <cart-list :cart-list="$store.state.cartList"></cart-list>
    <bottom-bar class="bottom-bar"></bottom-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childCops/CartList";
  import BottomBar from "./childCops/BottomBar";

  export default {
    name: "Cart",
    components: {
      BottomBar,
      CartList,
      NavBar
    },
    computed: {
      num() {
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped>
  .cart-nav {
    background-color: var(--color-tint);
    font-size: 20px;
    color: #fff;
  }

  .bottom-bar {
    height: 40px;
    position: absolute;
    bottom: 49px;
  }
</style>
